/**
 * FFT-based autocorrelation pitch detection.
 * Port of github.com/thetwom/Tuner (MIT/GPL).
 *
 * Pipeline:
 *   1. Hann window on signal
 *   2. Zero-pad to 2N → FFT → power spectrum → IFFT → normalized ACF
 *   3. Skip to first local minimum (avoid always-high near-zero region)
 *   4. Find global maximum of local maxima in [minLag, maxLag]
 *   5. Division search downTo 2 to find true fundamental (subharmonic correction)
 *   6. Parabolic peak interpolation → sub-sample precision
 */

const NOTE_NAMES = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'] as const;

export interface PitchResult {
  freq: number;       // Hz, 1 decimal
  note: string;
  octave: number;
  cents: number;      // ±50, 1 decimal
  confidence: number; // 0–1, normalized ACF at detected lag
}

// ── In-place Cooley-Tukey FFT (no 1/N scaling) ───────────────────────────
function fftInPlace(re: Float64Array, im: Float64Array): void {
  const N = re.length;
  // Bit-reversal permutation
  let j = 0;
  for (let i = 1; i < N; i++) {
    let bit = N >> 1;
    for (; j & bit; bit >>>= 1) j ^= bit;
    j ^= bit;
    if (i < j) {
      let t = re[i]; re[i] = re[j]; re[j] = t;
      t = im[i]; im[i] = im[j]; im[j] = t;
    }
  }
  // Butterfly passes
  for (let half = 1; half < N; half <<= 1) {
    const ang = -Math.PI / half;
    const wbR = Math.cos(ang), wbI = Math.sin(ang);
    for (let i = 0; i < N; i += half * 2) {
      let wR = 1, wI = 0;
      for (let k = 0; k < half; k++) {
        const aR = re[i + k],       aI = im[i + k];
        const bR = re[i+k+half] * wR - im[i+k+half] * wI;
        const bI = re[i+k+half] * wI + im[i+k+half] * wR;
        re[i + k]      = aR + bR;  im[i + k]      = aI + bI;
        re[i + k+half] = aR - bR;  im[i + k+half] = aI - bI;
        const nwR = wR * wbR - wI * wbI;
        wI = wR * wbI + wI * wbR;
        wR = nwR;
      }
    }
  }
}

// ── Normalized ACF: Hann window → zero-pad → FFT → power → IFFT ─────────
function computeNACF(signal: Float32Array<ArrayBuffer>): Float64Array {
  const N = signal.length;
  let size = 1;
  while (size < 2 * N) size <<= 1;

  const re = new Float64Array(size);
  const im = new Float64Array(size); // stays 0

  // Hann window
  for (let i = 0; i < N; i++) {
    const w = 0.5 * (1 - Math.cos(2 * Math.PI * i / (N - 1)));
    re[i] = signal[i] * w;
  }

  fftInPlace(re, im);

  // Power spectrum: S[k] = |X[k]|² (real, so im → 0)
  for (let k = 0; k < size; k++) {
    re[k] = re[k] * re[k] + im[k] * im[k];
    im[k] = 0;
  }

  // IFFT of real symmetric power spectrum = real ACF
  // IFFT via second FFT + conjugate (since input is real: conj = itself)
  fftInPlace(re, im);
  // re[tau] / re[0] = normalized ACF (the 1/size scale cancels in the ratio)

  const corr0 = re[0];
  if (corr0 <= 0) return new Float64Array(N);

  const nacf = new Float64Array(N);
  for (let i = 0; i < N; i++) nacf[i] = re[i] / corr0;

  return nacf;
}

// ── First local minimum (radius=2 neighborhood must all be ≥ nacf[i]) ────
function findFirstLocalMin(data: Float64Array, radius = 2): number {
  for (let i = radius; i < data.length - radius; i++) {
    let isMin = true;
    for (let j = i - radius; j <= i + radius; j++) {
      if (j !== i && data[j] < data[i]) { isMin = false; break; }
    }
    if (isMin) return i;
  }
  return data.length;
}

// ── Parabolic peak refinement (3-point Lagrange) ─────────────────────────
function parabolaPeak(idx: number, data: Float64Array): { index: number; peak: number } {
  if (idx <= 0 || idx >= data.length - 1) return { index: idx, peak: data[idx] };
  const a = data[idx - 1], b = data[idx], c = data[idx + 1];
  const denom = 2 * b - a - c;
  if (denom <= 0) return { index: idx, peak: b };
  const offset = (a - c) / (2 * denom);
  const peak = b + 0.25 * (a - c) * offset;
  return { index: idx + offset, peak };
}

// ── Main detector ─────────────────────────────────────────────────────────
export function detectPitchACF(
  buffer: Float32Array<ArrayBuffer>,
  sampleRate: number,
  refA = 440,
): PitchResult | null {
  const N = buffer.length;
  const dt = 1 / sampleRate;

  // Energy gate
  let energy = 0;
  for (let i = 0; i < N; i++) energy += buffer[i] * buffer[i];
  if (energy / N < 0.0001) return null;

  const nacf = computeNACF(buffer);

  const FREQ_MIN = 40;    // Hz — covers low bass B
  const FREQ_MAX = 1400;  // Hz — covers high frets
  const SUBHARMONICS_TOL = 0.05;  // ±5% around ideal division ratio
  const SUBHARMONIC_RATIO = 0.8;  // alternative peak must be ≥ 80% of main peak

  const lagAtFreqMax = Math.ceil(1 / (dt * FREQ_MAX));    // smallest valid lag
  const lagAtFreqMin = Math.min(Math.floor(1 / (dt * FREQ_MIN)), N - 2); // largest valid lag

  // Skip the always-high near-zero ACF region by finding first local min
  const firstMin = findFirstLocalMin(nacf);
  const idxBegin = Math.max(lagAtFreqMax, firstMin);
  const idxEnd = lagAtFreqMin;

  if (idxBegin >= idxEnd) return null;

  // Global maximum among all local maxima in valid range
  let globalMaxIdx = 0;
  let globalMaxVal = -Infinity;
  for (let i = idxBegin + 1; i < idxEnd; i++) {
    if (nacf[i] > globalMaxVal && nacf[i] >= nacf[i - 1] && nacf[i] >= nacf[i + 1]) {
      globalMaxIdx = i;
      globalMaxVal = nacf[i];
    }
  }
  if (globalMaxIdx === 0 || globalMaxVal < 0.2) return null;

  let { index: fittedIdx, peak: fittedPeak } = parabolaPeak(globalMaxIdx, nacf);

  // Division search: globalMaxIdx might be at 2T or 3T (subharmonic of true period T).
  // Try each division to find the smallest valid lag (true fundamental).
  const maxDivision = Math.ceil(fittedIdx / idxBegin);
  const requiredPeak = SUBHARMONIC_RATIO * fittedPeak;

  for (let div = maxDivision; div >= 2; div--) {
    const lo = Math.max(1, Math.ceil(fittedIdx / (div + SUBHARMONICS_TOL)));
    const hi = Math.min(N - 2, Math.floor(fittedIdx / (div - SUBHARMONICS_TOL)) + 1);

    let localMaxIdx = 0;
    let localMaxVal = -Infinity;

    if (hi - lo < 1) {
      // Range too narrow: use nearest integer
      const mid = Math.round(fittedIdx / div);
      if (mid >= 1 && mid <= N - 2) {
        const { index: fi, peak: fp } = parabolaPeak(mid, nacf);
        if (fp >= requiredPeak) { fittedIdx = fi; fittedPeak = fp; break; }
      }
      continue;
    }

    for (let i = lo; i <= hi; i++) {
      if (nacf[i] > localMaxVal && nacf[i] >= nacf[i - 1] && nacf[i] >= nacf[i + 1]) {
        localMaxIdx = i;
        localMaxVal = nacf[i];
      }
    }

    if (localMaxIdx > 0) {
      const { index: fi, peak: fp } = parabolaPeak(localMaxIdx, nacf);
      if (fp >= requiredPeak) {
        fittedIdx = fi;
        fittedPeak = fp;
        break;
      }
    }
  }

  if (fittedPeak < 0.25) return null;

  const freq = 1 / (fittedIdx * dt);
  const midi = 69 + 12 * Math.log2(freq / refA);
  const roundedMidi = Math.round(midi);
  const cents = Math.round((midi - roundedMidi) * 1000) / 10;
  const note = NOTE_NAMES[((roundedMidi % 12) + 12) % 12];
  const octave = Math.floor(roundedMidi / 12) - 1;

  return { freq: Math.round(freq * 10) / 10, note, octave, cents, confidence: fittedPeak };
}

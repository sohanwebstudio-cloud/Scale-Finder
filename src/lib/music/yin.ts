/**
 * YIN pitch detection — de Cheveigné & Kawahara, 2002.
 * ~1 cent accuracy via parabolic interpolation on the CMND minimum.
 */

const NOTE_NAMES = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'] as const;

export interface PitchResult {
  freq: number;      // Hz, 1 decimal
  note: string;      // e.g. 'A'
  octave: number;    // e.g. 4
  cents: number;     // deviation from nearest ET pitch, ±50, 1 decimal
  confidence: number;// 0–1
}

export function detectPitchYIN(
  buffer: Float32Array<ArrayBuffer>,
  sampleRate: number,
  refA = 440,
  threshold = 0.10,
): PitchResult | null {
  const N = buffer.length;
  const halfN = N >> 1;

  // Energy gate — skip silence
  let energy = 0;
  for (let i = 0; i < N; i++) energy += buffer[i] * buffer[i];
  if (energy / N < 0.0001) return null;

  const minLag = Math.ceil(sampleRate / 1400); // ~1400 Hz max
  const maxLag = Math.min(Math.floor(sampleRate / 50), halfN - 1); // 50 Hz min

  // Step 1: Difference function
  const d = new Float32Array(maxLag + 1);
  for (let tau = 1; tau <= maxLag; tau++) {
    let s = 0;
    for (let j = 0; j < halfN; j++) {
      const diff = buffer[j] - buffer[j + tau];
      s += diff * diff;
    }
    d[tau] = s;
  }

  // Step 2: Cumulative mean normalized difference
  const cmnd = new Float32Array(maxLag + 1);
  cmnd[0] = 1;
  let runSum = 0;
  for (let tau = 1; tau <= maxLag; tau++) {
    runSum += d[tau];
    cmnd[tau] = runSum === 0 ? 0 : (d[tau] * tau) / runSum;
  }

  // Step 3: First tau below threshold → slide to local minimum
  let bestTau = -1;
  for (let tau = minLag; tau <= maxLag; tau++) {
    if (cmnd[tau] < threshold) {
      while (tau + 1 <= maxLag && cmnd[tau + 1] < cmnd[tau]) tau++;
      bestTau = tau;
      break;
    }
  }

  // Fallback: global minimum if threshold never crossed
  if (bestTau < 0) {
    let minVal = Infinity;
    for (let tau = minLag; tau <= maxLag; tau++) {
      if (cmnd[tau] < minVal) { minVal = cmnd[tau]; bestTau = tau; }
    }
    if (minVal > 0.5) return null;
  }

  const confidence = Math.max(0, 1 - cmnd[bestTau]);
  if (confidence < 0.5) return null;

  // Step 4: Parabolic interpolation for sub-sample precision
  let refined = bestTau;
  if (bestTau > minLag && bestTau < maxLag) {
    const a = cmnd[bestTau - 1], b = cmnd[bestTau], c = cmnd[bestTau + 1];
    const denom = 2 * b - a - c;
    if (denom > 0) refined = bestTau + (a - c) / (2 * denom);
  }

  const freq = sampleRate / refined;
  const midi = 69 + 12 * Math.log2(freq / refA);
  const roundedMidi = Math.round(midi);
  const cents = Math.round((midi - roundedMidi) * 1000) / 10;
  const note = NOTE_NAMES[((roundedMidi % 12) + 12) % 12];
  const octave = Math.floor(roundedMidi / 12) - 1;

  return { freq: Math.round(freq * 10) / 10, note, octave, cents, confidence };
}

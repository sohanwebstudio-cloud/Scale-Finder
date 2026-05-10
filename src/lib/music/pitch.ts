const NOTE_NAMES = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'] as const;

export function freqToSemi(freq: number): number {
  const midi = 69 + 12 * Math.log2(freq / 440);
  return ((Math.round(midi) % 12) + 12) % 12;
}

export function freqToNoteName(freq: number): string {
  return NOTE_NAMES[freqToSemi(freq)];
}

/**
 * Détection de pitch par autocorrélation.
 * Retourne la fréquence fondamentale en Hz, ou -1 si pas de signal clair.
 * Plage couverte : 60–2000 Hz (basse jusqu'à aigu guitare).
 */
export function detectPitch(buffer: Float32Array, sampleRate: number): number {
  const n = buffer.length;
  const halfN = n >> 1;

  // Seuil d'énergie : on n'analyse pas le silence
  let energy = 0;
  for (let i = 0; i < n; i++) energy += buffer[i] * buffer[i];
  if (energy / n < 0.0001) return -1;

  const minLag = Math.ceil(sampleRate / 2000);
  const maxLag = Math.min(Math.floor(sampleRate / 60), halfN - 1);

  let bestVal = -Infinity;
  let bestLag = -1;

  for (let lag = minLag; lag <= maxLag; lag++) {
    let sum = 0;
    for (let i = 0; i < halfN; i++) {
      sum += buffer[i] * buffer[i + lag];
    }
    if (sum > bestVal) {
      bestVal = sum;
      bestLag = lag;
    }
  }

  if (bestLag < 0) return -1;

  // Confiance : le peak doit valoir ≥40% de l'énergie zero-lag
  let zeroLag = 0;
  for (let i = 0; i < halfN; i++) zeroLag += buffer[i] * buffer[i];
  if (zeroLag === 0 || bestVal / zeroLag < 0.4) return -1;

  return sampleRate / bestLag;
}

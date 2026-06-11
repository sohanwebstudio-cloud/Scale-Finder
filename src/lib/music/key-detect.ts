/**
 * Détection de tonalité par profils de classes de hauteur
 * (algorithme de Krumhansl-Schmuckler).
 *
 * Principe : la distribution des 12 classes de hauteur jouées (pondérée par
 * durée de jeu) est corrélée (Pearson) avec 24 profils de tonalité
 * (12 majeures + 12 mineures). La tonalité dont le profil corrèle le mieux
 * est la tonalité détectée.
 *
 * On moyenne les corrélations de 3 jeux de profils — un ensemble est plus
 * robuste qu'un profil seul à travers les genres :
 *  - Krumhansl-Kessler 1982 (expériences probe-tone)
 *  - Temperley 2007 (corpus Kostka-Payne, ~85% de bonnes détections)
 *  - Albrecht-Shanahan 2013 (appris sur corpus, état de l'art corrélationnel)
 */

import { KEY_ROOTS } from './notes';

export type KeyQuality = 'major' | 'minor';

export interface KeyResult {
  rootIdx: number;
  rootName: string;
  quality: KeyQuality;
  /** Corrélation de Pearson moyenne sur les 3 profils, -1..1 */
  correlation: number;
}

// Index 0 = tonique, puis chromatique ascendant.
const KK_MAJOR = [6.35, 2.23, 3.48, 2.33, 4.38, 4.09, 2.52, 5.19, 2.39, 3.66, 2.29, 2.88];
const KK_MINOR = [6.33, 2.68, 3.52, 5.38, 2.60, 3.53, 2.54, 4.75, 3.98, 2.69, 3.34, 3.17];

const TEMPERLEY_MAJOR = [0.748, 0.060, 0.488, 0.082, 0.670, 0.460, 0.096, 0.715, 0.104, 0.366, 0.057, 0.400];
const TEMPERLEY_MINOR = [0.712, 0.084, 0.474, 0.618, 0.049, 0.460, 0.105, 0.747, 0.404, 0.067, 0.133, 0.330];

const AS_MAJOR = [0.238, 0.006, 0.111, 0.006, 0.137, 0.094, 0.016, 0.214, 0.009, 0.080, 0.008, 0.081];
const AS_MINOR = [0.220, 0.006, 0.104, 0.123, 0.019, 0.103, 0.012, 0.214, 0.062, 0.022, 0.061, 0.052];

const PROFILES: Record<KeyQuality, number[][]> = {
  major: [KK_MAJOR, TEMPERLEY_MAJOR, AS_MAJOR],
  minor: [KK_MINOR, TEMPERLEY_MINOR, AS_MINOR],
};

/** Épellation conventionnelle des tonalités mineures (C# mineur, pas Db). */
const MINOR_NAMES = ['C', 'C#', 'D', 'Eb', 'E', 'F', 'F#', 'G', 'G#', 'A', 'Bb', 'B'];

export function keyDisplayName(rootIdx: number, quality: KeyQuality): string {
  if (quality === 'minor') return `${MINOR_NAMES[rootIdx]} mineur`;
  return `${KEY_ROOTS[rootIdx].name} majeur`;
}

function pearson(x: number[], y: number[]): number {
  const n = x.length;
  let sx = 0, sy = 0;
  for (let i = 0; i < n; i++) { sx += x[i]; sy += y[i]; }
  const mx = sx / n, my = sy / n;

  let cov = 0, vx = 0, vy = 0;
  for (let i = 0; i < n; i++) {
    const dx = x[i] - mx, dy = y[i] - my;
    cov += dx * dy;
    vx += dx * dx;
    vy += dy * dy;
  }
  if (vx === 0 || vy === 0) return 0;
  return cov / Math.sqrt(vx * vy);
}

/**
 * Classe les 24 tonalités par corrélation décroissante.
 * `counts` : classe de hauteur (0-11) → poids (nombre de frames détectées,
 * ce qui équivaut à une pondération par durée — exactement ce que demandent
 * les profils de Krumhansl).
 */
export function detectKeys(counts: Map<number, number>): KeyResult[] {
  const dist = new Array<number>(12).fill(0);
  for (const [semi, count] of counts) dist[semi % 12] = count;

  const results: KeyResult[] = [];

  for (const quality of ['major', 'minor'] as const) {
    for (let rootIdx = 0; rootIdx < 12; rootIdx++) {
      // Rotation de la distribution pour aligner la tonique candidate sur l'index 0
      const rotated = new Array<number>(12);
      for (let i = 0; i < 12; i++) rotated[i] = dist[(rootIdx + i) % 12];

      let corrSum = 0;
      for (const profile of PROFILES[quality]) corrSum += pearson(rotated, profile);

      results.push({
        rootIdx,
        rootName: quality === 'minor' ? MINOR_NAMES[rootIdx] : KEY_ROOTS[rootIdx].name,
        quality,
        correlation: corrSum / PROFILES[quality].length,
      });
    }
  }

  return results.sort((a, b) => b.correlation - a.correlation);
}

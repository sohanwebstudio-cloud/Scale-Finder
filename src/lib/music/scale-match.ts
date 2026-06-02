import { KEY_ROOTS } from './notes';
import { MODES } from './scales';
import type { ModeKey } from '@/types';

export interface ScaleMatchResult {
  rootName: string;
  rootIdx: number;
  modeKey: ModeKey;
  modeName: string;
  score: number;
  matchCount: number;
}

function buildScaleSet(rootIdx: number, intervals: number[]): Set<number> {
  const set = new Set<number>();
  let semi = rootIdx;
  set.add(semi % 12);
  for (const interval of intervals) {
    semi += interval;
    set.add(semi % 12);
  }
  return set;
}

/**
 * Analyse tonale pondérée par fréquence de jeu.
 *
 * Score = (poids notes dans la gamme - pénalité notes hors gamme) / total
 * + bonus si la note la plus jouée est la tonique candidate.
 *
 * Bien meilleur que Jaccard binaire : une note jouée 40x compte 40x plus
 * qu'une note entendue une seule fois, et les fausses notes pénalisent.
 */
export function matchScales(detectedCounts: Map<number, number>): ScaleMatchResult[] {
  if (detectedCounts.size === 0) return [];

  const totalCount = [...detectedCounts.values()].reduce((a, b) => a + b, 0);

  // Note la plus jouée = candidat naturel à la tonique
  let dominantSemi = -1;
  let dominantCount = 0;
  for (const [semi, count] of detectedCounts) {
    if (count > dominantCount) {
      dominantCount = count;
      dominantSemi = semi;
    }
  }

  const results: ScaleMatchResult[] = [];

  const detectableModes = MODES.filter((m) => m.category !== 'arpege');

  for (const root of KEY_ROOTS) {
    for (const mode of detectableModes) {
      const scaleSet = buildScaleSet(root.idx, mode.intervals);

      let inScore = 0;
      let outScore = 0;
      let matchCount = 0;

      for (const [semi, count] of detectedCounts) {
        if (scaleSet.has(semi)) {
          inScore += count;
          matchCount++;
        } else {
          outScore += count;
        }
      }

      let score = (inScore - outScore * 0.6) / totalCount;

      // Bonus tonique : la note dominante correspond à la racine candidate
      if (dominantSemi === root.idx) score *= 1.25;

      results.push({
        rootName: root.name,
        rootIdx: root.idx,
        modeKey: mode.key,
        modeName: mode.name,
        score: Math.max(0, score),
        matchCount,
      });
    }
  }

  return results.sort((a, b) => b.score - a.score).slice(0, 5);
}

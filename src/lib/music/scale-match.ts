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
 * Score Jaccard entre les notes détectées et chaque gamme.
 * Retourne les 5 meilleures correspondances, triées par score décroissant.
 */
export function matchScales(detectedSemis: Set<number>): ScaleMatchResult[] {
  if (detectedSemis.size === 0) return [];

  const results: ScaleMatchResult[] = [];

  for (const root of KEY_ROOTS) {
    for (const mode of MODES) {
      const scaleSet = buildScaleSet(root.idx, mode.intervals);

      let matchCount = 0;
      for (const semi of detectedSemis) {
        if (scaleSet.has(semi)) matchCount++;
      }

      // Jaccard : intersection / union
      const union = new Set([...scaleSet, ...detectedSemis]);
      const score = matchCount / union.size;

      results.push({
        rootName: root.name,
        rootIdx: root.idx,
        modeKey: mode.key,
        modeName: mode.name,
        score,
        matchCount,
      });
    }
  }

  return results.sort((a, b) => b.score - a.score).slice(0, 5);
}

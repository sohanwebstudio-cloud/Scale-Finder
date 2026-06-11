import { KEY_ROOTS } from './notes';
import { MODES } from './scales';
import { detectKeys, type KeyResult, type KeyQuality } from './key-detect';
import type { Mode, ModeKey, ScaleCategory } from '@/types';

export interface ScaleMatchResult {
  rootName: string;
  rootIdx: number;
  modeKey: ModeKey;
  modeName: string;
  score: number;
  matchCount: number;
}

export interface ScaleAnalysis {
  /** Tonalités candidates (Krumhansl-Schmuckler), triées par corrélation */
  keys: KeyResult[];
  /** Gammes suggérées pour jouer dessus, triées par pertinence */
  scales: ScaleMatchResult[];
}

/**
 * À score de couverture égal, on préfère suggérer les gammes simples
 * (pentatoniques, modes classiques) aux gammes exotiques — c'est un outil
 * d'apprentissage, pas un concours de jazz.
 */
const CATEGORY_PRIOR: Record<ScaleCategory, number> = {
  classique_majeur: 1,
  classique_mineur: 1,
  blues: 1,
  jazz: 0.92,
  symetrique: 0.85,
  arpege: 0,
};

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

/** Qualité majeure/mineure d'un mode d'après sa tierce. */
function modeQuality(mode: Mode): KeyQuality {
  let semi = 0;
  const degrees = new Set([0]);
  for (const interval of mode.intervals) {
    semi += interval;
    degrees.add(semi % 12);
  }
  if (degrees.has(3)) return 'minor';
  return 'major';
}

/**
 * Analyse tonale en deux étages :
 *
 * 1. Détection de tonalité par profils de Krumhansl-Schmuckler (key-detect.ts)
 *    → « le morceau est en A mineur ».
 * 2. Classement des gammes jouables : couverture pondérée par durée de jeu
 *    (notes dans la gamme − pénalité des notes hors gamme), multipliée par un
 *    bonus d'alignement avec la tonalité détectée et un prior de simplicité.
 *
 * Bien meilleur qu'un simple comptage : la corrélation de profils exploite la
 * hiérarchie tonale (tonique et quinte pèsent plus), pas juste la présence
 * des notes — c'est l'algorithme de référence en Music Information Retrieval.
 */
export function analyzeScales(detectedCounts: Map<number, number>): ScaleAnalysis {
  if (detectedCounts.size === 0) return { keys: [], scales: [] };

  const totalCount = [...detectedCounts.values()].reduce((a, b) => a + b, 0);
  const keys = detectKeys(detectedCounts);

  // Corrélation par (tonique, qualité) pour le bonus d'alignement
  const keyCorr = new Map<string, number>();
  for (const k of keys) keyCorr.set(`${k.rootIdx}-${k.quality}`, k.correlation);

  const results: ScaleMatchResult[] = [];
  const detectableModes = MODES.filter((m) => CATEGORY_PRIOR[m.category] > 0);

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

      const coverage = (inScore - outScore * 0.7) / totalCount;
      if (coverage <= 0) continue;

      const corr = keyCorr.get(`${root.idx}-${modeQuality(mode)}`) ?? 0;
      const keyAlignment = 1 + 0.6 * Math.max(0, corr);

      results.push({
        rootName: root.name,
        rootIdx: root.idx,
        modeKey: mode.key,
        modeName: mode.name,
        score: coverage * keyAlignment * CATEGORY_PRIOR[mode.category],
        matchCount,
      });
    }
  }

  return {
    keys: keys.slice(0, 3),
    scales: results.sort((a, b) => b.score - a.score).slice(0, 5),
  };
}

/**
 * Définitions des modes et gammes.
 * Source unique de vérité pour les intervalles.
 */

import type { Mode, ModeKey } from '@/types';

export const MODES: Mode[] = [
  {
    key: 'ionian',
    name: 'Ionien',
    intervals: [2, 2, 1, 2, 2, 2, 1],
    chord: 'maj7',
    desc: 'Le majeur classique, sage',
  },
  {
    key: 'dorian',
    name: 'Dorien',
    intervals: [2, 1, 2, 2, 2, 1, 2],
    chord: 'm7',
    desc: 'Mineur jazz, ouvert',
  },
  {
    key: 'phrygian',
    name: 'Phrygien',
    intervals: [1, 2, 2, 2, 1, 2, 2],
    chord: 'm7',
    desc: 'Sombre, couleur espagnole',
  },
  {
    key: 'lydian',
    name: 'Lydien',
    intervals: [2, 2, 2, 1, 2, 2, 1],
    chord: 'maj7#11',
    desc: 'Lumineux, flottant',
  },
  {
    key: 'mixolydian',
    name: 'Mixolydien',
    intervals: [2, 2, 1, 2, 2, 1, 2],
    chord: '7',
    desc: 'Blues, dominant',
  },
  {
    key: 'aeolian',
    name: 'Aeolien',
    intervals: [2, 1, 2, 2, 1, 2, 2],
    chord: 'm7',
    desc: 'Mineur naturel',
  },
  {
    key: 'locrian',
    name: 'Locrien',
    intervals: [1, 2, 2, 1, 2, 2, 2],
    chord: 'm7b5',
    desc: 'Demi-diminué, instable',
  },
  {
    key: 'altered',
    name: 'Altered',
    intervals: [1, 2, 1, 2, 2, 2, 2],
    chord: '7alt',
    desc: 'Tension max, outside',
  },
  {
    key: 'lydian_dom',
    name: 'Lydien dominante',
    intervals: [2, 2, 2, 1, 2, 1, 2],
    chord: '7#11',
    desc: 'Brillant, #4 + b7',
  },
  {
    key: 'half_whole',
    name: 'Diminué demi-ton/ton',
    intervals: [1, 2, 1, 2, 1, 2, 1, 2],
    chord: '7b9',
    desc: '8 notes, très chromatique',
  },
  {
    key: 'pentatonic_minor',
    name: 'Pentatonique mineure',
    intervals: [3, 2, 2, 3, 2],
    chord: 'm7',
    desc: 'La base du blues/rock',
  },
  {
    key: 'pentatonic_major',
    name: 'Pentatonique majeure',
    intervals: [2, 2, 3, 2, 3],
    chord: 'maj7',
    desc: 'Sons country/folk',
  },
  {
    key: 'blues_minor',
    name: 'Blues mineure',
    intervals: [3, 2, 1, 1, 3, 2],
    chord: 'm7',
    desc: 'Pentatonique + blue note',
  },
  {
    key: 'blues_major',
    name: 'Blues majeure',
    intervals: [2, 1, 1, 3, 2, 3],
    chord: '7',
    desc: 'Le son blues classique',
  },
  // --- Mineur mélodique et ses modes ---
  {
    key: 'melodic_minor',
    name: 'Mineur mélodique',
    intervals: [2, 1, 2, 2, 2, 2, 1],
    chord: 'mMaj7',
    desc: 'Jazz minor — base de l\'impro moderne',
  },
  {
    key: 'lydian_aug',
    name: 'Lydien augmenté',
    intervals: [2, 2, 2, 2, 1, 2, 1],
    chord: 'maj7#5',
    desc: 'Mode 3 du mél. mineur, très flottant',
  },
  {
    key: 'mixolydian_b6',
    name: 'Mixolydien b6',
    intervals: [2, 2, 1, 2, 1, 2, 2],
    chord: '7b6',
    desc: 'Mode 5 du mél. mineur',
  },
  {
    key: 'locrian_2',
    name: 'Locrien #2',
    intervals: [2, 1, 2, 1, 2, 2, 2],
    chord: 'm7b5',
    desc: 'Demi-diminué jazz — sur les m7b5',
  },
  // --- Mineur harmonique et dérivés ---
  {
    key: 'harmonic_minor',
    name: 'Mineur harmonique',
    intervals: [2, 1, 2, 2, 1, 3, 1],
    chord: 'mMaj7',
    desc: 'Seconde augmentée caractéristique',
  },
  {
    key: 'phrygian_dom',
    name: 'Phrygien dominant',
    intervals: [1, 3, 1, 2, 1, 2, 2],
    chord: '7b9',
    desc: 'Mode 5 du harm. mineur — son flamenco/jazz',
  },
  // --- Gammes symétriques ---
  {
    key: 'whole_tone',
    name: 'Gamme par tons',
    intervals: [2, 2, 2, 2, 2, 2],
    chord: '7#5',
    desc: '6 notes, ambiguïté tonale totale',
  },
  {
    key: 'whole_half',
    name: 'Diminué ton/demi-ton',
    intervals: [2, 1, 2, 1, 2, 1, 2, 1],
    chord: 'dim7',
    desc: '8 notes — sur les accords diminués',
  },
  // --- Bebop ---
  {
    key: 'bebop_dom',
    name: 'Bebop dominant',
    intervals: [2, 2, 1, 2, 2, 1, 1, 2],
    chord: '7',
    desc: '8 notes — le son bebop',
  },
];

export const MODES_BY_KEY = new Map<ModeKey, Mode>(
  MODES.map((m) => [m.key, m]),
);

export function getMode(key: ModeKey): Mode {
  const mode = MODES_BY_KEY.get(key);
  if (!mode) throw new Error(`Mode inconnu: ${key}`);
  return mode;
}

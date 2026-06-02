/**
 * Types partagés dans toute l'app.
 */

export type NoteName = string;

export interface Note {
  name: NoteName;
  semi: number;
}

export type ModeKey =
  | 'ionian' | 'dorian' | 'phrygian' | 'lydian' | 'mixolydian' | 'aeolian' | 'locrian'
  | 'melodic_minor' | 'lydian_aug' | 'lydian_dom' | 'mixolydian_b6' | 'locrian_2' | 'altered'
  | 'harmonic_minor' | 'phrygian_dom'
  | 'whole_tone' | 'half_whole' | 'whole_half'
  | 'bebop_dom'
  | 'pentatonic_minor' | 'pentatonic_major' | 'blues_minor' | 'blues_major'
  | 'arp_maj' | 'arp_min' | 'arp_dom7' | 'arp_maj7' | 'arp_m7' | 'arp_m7b5' | 'arp_dim7' | 'arp_mmaj7';

export type ScaleCategory =
  | 'classique_majeur'
  | 'classique_mineur'
  | 'blues'
  | 'jazz'
  | 'symetrique'
  | 'arpege';

export interface Mode {
  key: ModeKey;
  name: string;
  intervals: number[];
  chord: string;
  desc: string;
  category: ScaleCategory;
  letterOffsets?: number[];
}

export interface ColorPair {
  bg: string;
  text: string;
  darkBg: string;
  darkText: string;
}

export interface KeyRoot {
  idx: number;
  name: string;
}

export interface SignatureScale {
  modeKey: ModeKey;
  rootName: string;
  context: string;
  example?: string;
}

export interface Guitarist {
  slug: string;
  name: string;
  shortName: string;
  era: string;
  genres: string[];
  bio: string;
  signatureScales: SignatureScale[];
  signatureMove: string;
  recommendedListening?: string[];
  imageUrl?: string;
}

export type ModeKey =
  | 'ionian' | 'dorian' | 'phrygian' | 'lydian' | 'mixolydian' | 'aeolian' | 'locrian'
  | 'altered' | 'lydian_dom' | 'half_whole'
  | 'pentatonic_minor' | 'pentatonic_major' | 'blues_minor' | 'blues_major'
  | 'melodic_minor' | 'lydian_aug' | 'mixolydian_b6' | 'locrian_2'
  | 'harmonic_minor' | 'phrygian_dom'
  | 'whole_tone' | 'whole_half'
  | 'bebop_dom'
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
  /** Offsets de lettres pour l'épellation (optionnel — consécutif par défaut) */
  letterOffsets?: number[];
}

export interface KeyRoot {
  idx: number;
  name: string;
}

export interface Note {
  name: string;
  semi: number;
}

export interface ColorPair {
  bg: string;
  text: string;
  darkBg: string;
  darkText: string;
}

export interface SignatureScale {
  rootName: string;
  modeKey: ModeKey;
  context?: string;
  example?: string;
}

export interface Guitarist {
  slug: string;
  name: string;
  shortName?: string;
  era: string;
  genres: string[];
  bio: string;
  signatureScales: SignatureScale[];
  signatureMove: string;
  recommendedListening?: string[];
}

/**
 * Types partagés dans toute l'app.
 */

export type NoteName = string; // ex: "C", "Db", "F#", "B##"

export interface Note {
  name: NoteName;
  semi: number; // 0-11
}

export type ModeKey =
  // Modes grecs (majeur)
  | 'ionian'
  | 'dorian'
  | 'phrygian'
  | 'lydian'
  | 'mixolydian'
  | 'aeolian'
  | 'locrian'
  // Modes du mineur mélodique
  | 'melodic_minor'
  | 'lydian_aug'
  | 'lydian_dom'
  | 'mixolydian_b6'
  | 'locrian_2'
  | 'altered'
  // Mineur harmonique et dérivés
  | 'harmonic_minor'
  | 'phrygian_dom'
  // Gammes symétriques
  | 'whole_tone'
  | 'half_whole'
  | 'whole_half'
  // Bebop
  | 'bebop_dom'
  // Pentatoniques & blues
  | 'pentatonic_minor'
  | 'pentatonic_major'
  | 'blues_minor'
  | 'blues_major';

export interface Mode {
  key: ModeKey;
  name: string;
  intervals: number[]; // semitones between consecutive notes
  chord: string; // ex: "m7", "7alt"
  desc: string;
}

export interface ColorPair {
  bg: string;
  text: string;
  darkBg: string;
  darkText: string;
}

export interface KeyRoot {
  idx: number; // 0-11
  name: string; // "C", "Db", "F#", etc.
}

/**
 * Une gamme signature d'un guitariste, avec contexte.
 */
export interface SignatureScale {
  modeKey: ModeKey;
  rootName: string; // "A", "Eb", etc.
  context: string; // "Sur les V7 avant résolution", "Sur les vamps mineures"
  example?: string; // Optionnel : ex. de morceau où il l'utilise
}

/**
 * Profil d'un guitariste.
 */
export interface Guitarist {
  slug: string;
  name: string;
  shortName: string;
  era: string; // "Années 80-90", "Contemporain"
  genres: string[]; // ["Jazz fusion", "Bebop"]
  bio: string; // 2-3 phrases max
  signatureScales: SignatureScale[];
  signatureMove: string; // "Mélange constant pentatonique mineure + altered"
  recommendedListening?: string[]; // ["Chromazone", "Fat Time"]
  imageUrl?: string;
}

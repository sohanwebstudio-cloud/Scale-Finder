/**
 * Constantes et utilitaires sur les notes.
 * Logique pure, sans dépendance UI.
 */

import type { KeyRoot } from '@/types';

export const LETTERS = ['C', 'D', 'E', 'F', 'G', 'A', 'B'] as const;

export const NATURAL_SEMI: Record<string, number> = {
  C: 0,
  D: 2,
  E: 4,
  F: 5,
  G: 7,
  A: 9,
  B: 11,
};

/**
 * Toniques disponibles dans le sélecteur, avec convention d'épellation
 * standard (Db plutôt que C#, F# plutôt que Gb, etc.).
 */
export const KEY_ROOTS: KeyRoot[] = [
  { idx: 0, name: 'C' },
  { idx: 1, name: 'Db' },
  { idx: 2, name: 'D' },
  { idx: 3, name: 'Eb' },
  { idx: 4, name: 'E' },
  { idx: 5, name: 'F' },
  { idx: 6, name: 'F#' },
  { idx: 7, name: 'G' },
  { idx: 8, name: 'Ab' },
  { idx: 9, name: 'A' },
  { idx: 10, name: 'Bb' },
  { idx: 11, name: 'B' },
];

/**
 * Trouve une tonique par son nom.
 */
export function findKeyByName(name: string): KeyRoot | undefined {
  return KEY_ROOTS.find((k) => k.name === name);
}

/**
 * Convertit un nom de note en index semitonal (0-11).
 * Gère les # et b multiples.
 */
export function noteNameToSemi(name: string): number {
  const letter = name.charAt(0).toUpperCase();
  const accidentals = name.slice(1);
  let semi = NATURAL_SEMI[letter];
  if (semi === undefined) {
    throw new Error(`Lettre invalide: ${letter}`);
  }
  for (const acc of accidentals) {
    if (acc === '#') semi += 1;
    else if (acc === 'b') semi -= 1;
  }
  return ((semi % 12) + 12) % 12;
}

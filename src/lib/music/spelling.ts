/**
 * Épelle une gamme avec la convention musicale correcte :
 * une lettre par degré, accidents (#/b) ajustés pour matcher le pitch.
 *
 * Exemple : Db dorien = Db Eb Fb Gb Ab Bb Cb (et pas Db Eb E Gb Ab Bb B)
 */

import type { Note } from '@/types';
import { LETTERS, NATURAL_SEMI } from './notes';

export function spellScale(
  rootIdx: number,
  intervals: number[],
  rootName: string,
): Note[] {
  const rootLetter = rootName.charAt(0);
  const startLetterIdx = LETTERS.indexOf(rootLetter as (typeof LETTERS)[number]);

  if (startLetterIdx === -1) {
    throw new Error(`Lettre racine invalide: ${rootLetter}`);
  }

  const result: Note[] = [{ name: rootName, semi: rootIdx }];
  let semi = rootIdx;

  // On boucle sur intervals.length - 1 pour rester sur l'octave
  // (le dernier intervalle ramènerait à la tonique)
  for (let i = 0; i < intervals.length - 1; i++) {
    semi = (semi + intervals[i]) % 12;
    const nextLetter = LETTERS[(startLetterIdx + i + 1) % 7];
    const naturalSemi = NATURAL_SEMI[nextLetter];

    let diff = semi - naturalSemi;
    while (diff > 6) diff -= 12;
    while (diff < -6) diff += 12;

    let accidental = '';
    if (diff === 1) accidental = '#';
    else if (diff === 2) accidental = '##';
    else if (diff === -1) accidental = 'b';
    else if (diff === -2) accidental = 'bb';

    result.push({ name: nextLetter + accidental, semi });
  }

  return result;
}

import type { Note } from '@/types';

export interface DiatonicChord {
  numeral: string;
  chordName: string;
  quality: 'major' | 'minor' | 'diminished' | 'augmented' | 'other';
}

/**
 * Calcule les 7 accords diatoniques d'une gamme heptatonique.
 * Retourne null pour les gammes non-heptatoniques (pentatoniques, bebop, etc.).
 */
export function getDiatonicChords(notes: Note[], intervals: number[]): DiatonicChord[] | null {
  if (intervals.length !== 7) return null;

  // Degrés cumulatifs en demi-tons
  const deg: number[] = [0];
  let acc = 0;
  for (let i = 0; i < 6; i++) {
    acc += intervals[i];
    deg.push(acc);
  }

  const ROM = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII'];

  return deg.map((_, i) => {
    const root = notes[i].name;
    const t3 = (deg[(i + 2) % 7] - deg[i] + 12) % 12;
    const t5 = (deg[(i + 4) % 7] - deg[i] + 12) % 12;
    const t7 = (deg[(i + 6) % 7] - deg[i] + 12) % 12;

    if (t3 === 4 && t5 === 7) {
      const s = t7 === 11 ? 'maj7' : t7 === 10 ? '7' : '';
      return { numeral: ROM[i], chordName: `${root}${s}`, quality: 'major' as const };
    }
    if (t3 === 3 && t5 === 7) {
      const s = t7 === 10 ? 'm7' : 'm';
      return { numeral: ROM[i].toLowerCase(), chordName: `${root}${s}`, quality: 'minor' as const };
    }
    if (t3 === 3 && t5 === 6) {
      const s = t7 === 9 ? 'dim7' : t7 === 10 ? 'm7b5' : 'dim';
      return { numeral: `${ROM[i].toLowerCase()}°`, chordName: `${root}${s}`, quality: 'diminished' as const };
    }
    if (t3 === 4 && t5 === 8) {
      return { numeral: `${ROM[i]}+`, chordName: `${root}aug`, quality: 'augmented' as const };
    }
    return { numeral: ROM[i], chordName: root, quality: 'other' as const };
  });
}

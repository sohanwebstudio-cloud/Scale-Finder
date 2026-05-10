/**
 * Index central des guitaristes.
 * Pour ajouter un guitariste : créer le JSON + l'importer ici.
 */

import type { Guitarist } from '@/types';
import mikeStern from './mike-stern.json';
import patMetheny from './pat-metheny.json';
import johnScofield from './john-scofield.json';

export const ALL_GUITARISTS: Guitarist[] = [
  mikeStern as Guitarist,
  patMetheny as Guitarist,
  johnScofield as Guitarist,
];

export function getGuitaristBySlug(slug: string): Guitarist | undefined {
  return ALL_GUITARISTS.find((g) => g.slug === slug);
}

export function getAllSlugs(): string[] {
  return ALL_GUITARISTS.map((g) => g.slug);
}

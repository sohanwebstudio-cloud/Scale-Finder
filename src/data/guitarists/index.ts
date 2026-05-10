/**
 * Index central des guitaristes.
 * Pour ajouter un guitariste : créer le JSON + l'importer ici.
 */

import type { Guitarist } from '@/types';
import mikeStern from './mike-stern.json';
import patMetheny from './pat-metheny.json';
import johnScofield from './john-scofield.json';
import robbenFord from './robben-ford.json';
import larryCarlton from './larry-carlton.json';
import jimiHendrix from './jimi-hendrix.json';
import stevieRayVaughan from './stevie-ray-vaughan.json';
import wesMontgomery from './wes-montgomery.json';
import allanHoldsworth from './allan-holdsworth.json';
import scottHenderson from './scott-henderson.json';
import jeffBeck from './jeff-beck.json';
import georgeBenson from './george-benson.json';
import bbKing from './bb-king.json';
import alDiMeola from './al-di-meola.json';
import davidGilmour from './david-gilmour.json';
import carlosSantana from './carlos-santana.json';
import ericJohnson from './eric-johnson.json';
import jimHall from './jim-hall.json';
import markKnopfler from './mark-knopfler.json';
import charlieChristian from './charlie-christian.json';
import freddieKing from './freddie-king.json';
import gregHowe from './greg-howe.json';
import roryGallagher from './rory-gallagher.json';
import ericClapton from './eric-clapton.json';
import joePass from './joe-pass.json';
import johnMcLaughlin from './john-mclaughlin.json';
import garyMoore from './gary-moore.json';
import guthrieGovan from './guthrie-govan.json';
import djangoReinhardt from './django-reinhardt.json';
import jimmyPage from './jimmy-page.json';
import albertKing from './albert-king.json';
import joeBonamassa from './joe-bonamassa.json';
import frankGambale from './frank-gambale.json';

export const ALL_GUITARISTS: Guitarist[] = [
  mikeStern as Guitarist,
  patMetheny as Guitarist,
  johnScofield as Guitarist,
  robbenFord as Guitarist,
  larryCarlton as Guitarist,
  jimiHendrix as Guitarist,
  stevieRayVaughan as Guitarist,
  wesMontgomery as Guitarist,
  allanHoldsworth as Guitarist,
  scottHenderson as Guitarist,
  jeffBeck as Guitarist,
  georgeBenson as Guitarist,
  bbKing as Guitarist,
  alDiMeola as Guitarist,
  davidGilmour as Guitarist,
  carlosSantana as Guitarist,
  ericJohnson as Guitarist,
  jimHall as Guitarist,
  markKnopfler as Guitarist,
  charlieChristian as Guitarist,
  freddieKing as Guitarist,
  gregHowe as Guitarist,
  roryGallagher as Guitarist,
  ericClapton as Guitarist,
  joePass as Guitarist,
  johnMcLaughlin as Guitarist,
  garyMoore as Guitarist,
  guthrieGovan as Guitarist,
  djangoReinhardt as Guitarist,
  jimmyPage as Guitarist,
  albertKing as Guitarist,
  joeBonamassa as Guitarist,
  frankGambale as Guitarist,
];

export function getGuitaristBySlug(slug: string): Guitarist | undefined {
  return ALL_GUITARISTS.find((g) => g.slug === slug);
}

export function getAllSlugs(): string[] {
  return ALL_GUITARISTS.map((g) => g.slug);
}

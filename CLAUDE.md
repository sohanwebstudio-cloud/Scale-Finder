# Scale Finder — CLAUDE.md

## Purpose

App web pour guitaristes jazz : sélectionner un guitariste de référence, visualiser ses gammes signature, et explorer interactivement ces gammes sur un manche SVG (tonique + mode modifiables en temps réel).

---

## Stack

| Outil | Version |
|-------|---------|
| Next.js | 15 (App Router) |
| React | 19 |
| TypeScript | 5 (strict) |
| Tailwind CSS | v4 (PostCSS) |
| Données | JSON statique (pas de DB en v1) |

---

## Commandes

```bash
npm install        # première installation
npm run dev        # http://localhost:3000
npm run build      # build production
npm run type-check # vérification TypeScript sans build
npm run lint       # ESLint
```

---

## Architecture

Le projet est organisé en 4 couches strictement séparées. Ne pas mélanger les responsabilités.

```
src/
├── app/                    # Layer 1 : Routes (Server Components par défaut)
│   ├── page.tsx            # Home — liste des guitaristes
│   ├── layout.tsx          # Root layout + metadata
│   └── guitarist/[slug]/
│       └── page.tsx        # Page détail — statiquement générée au build
│
├── components/             # Layer 2 : Composants React (Client uniquement)
│   ├── ScaleExplorer.tsx   # État tonique/mode + affichage gamme
│   └── Fretboard.tsx       # Rendu SVG du manche (6 cordes, 15 cases)
│
├── lib/music/              # Layer 3 : Logique musicale pure (0 React)
│   ├── notes.ts            # Notes, demi-tons, KEY_ROOTS
│   ├── scales.ts           # 14 modes/gammes avec intervalles
│   ├── spelling.ts         # Épellation correcte (Db Dorian ≠ C# Dorian)
│   └── colors.ts           # Palette couleur par mode (clair/sombre)
│
├── data/guitarists/        # Layer 4 : Data statique JSON
│   ├── index.ts            # Export centralisé de tous les guitaristes
│   ├── mike-stern.json
│   ├── pat-metheny.json
│   └── john-scofield.json
│
└── types/
    └── index.ts            # Interfaces TypeScript partagées
```

---

## Logique musicale (`src/lib/music/`)

Ces fichiers sont **purs** — aucune dépendance React, aucun side-effect. Testables en isolation.

| Fichier | Rôle |
|---------|------|
| `notes.ts` | Mappe les noms de notes (C, Db, F#...) vers des indices demi-ton (0–11). Définit `KEY_ROOTS`. |
| `scales.ts` | 14 définitions de gammes/modes avec leurs intervalles (ex: Dorian = [0,2,3,5,7,9,10]). |
| `spelling.ts` | `spellScale(root, mode)` → retourne les noms de notes correctement orthographiés selon la tonalité. |
| `colors.ts` | `getModeColors(modeKey, isDark)` → palette {bg, text, border} selon le mode et le thème. |

**Règle** : toute nouvelle logique musicale va dans `lib/music/`. Jamais dans un composant.

---

## Ajouter un guitariste

1. Créer `src/data/guitarists/[slug].json` en suivant le format existant :

```json
{
  "slug": "wes-montgomery",
  "name": "Wes Montgomery",
  "era": "1950s–1960s",
  "genres": ["bebop", "hard bop", "soul jazz"],
  "bio": "...",
  "signatureMove": "...",
  "signatureScales": [
    {
      "name": "Nom affiché",
      "root": "F",
      "mode": "dorian",
      "context": "Pourquoi il utilisait ça",
      "recommendedListening": ["Morceaux représentatifs"]
    }
  ]
}
```

2. L'importer dans `src/data/guitarists/index.ts` :

```ts
import wesData from './wes-montgomery.json'
export const guitarists = [...existing, wesData]
```

Les pages Next.js utilisent `generateStaticParams()` — le build génère automatiquement la page statique.

**Valeurs valides pour `mode`** (voir `scales.ts`) :
`ionian` `dorian` `phrygian` `lydian` `mixolydian` `aeolian` `locrian` `altered` `lydianDominant` `halfWhole` `minorPentatonic` `majorPentatonic` `minorBlues` `majorBlues`

**Valeurs valides pour `root`** : `C` `Db` `D` `Eb` `E` `F` `F#` `G` `Ab` `A` `Bb` `B`

---

## Conventions

**Server vs Client components :**
- Tout ce qui est dans `src/app/` est Server Component par défaut → pas de hooks, pas d'état
- Ajouter `"use client"` uniquement si le composant a besoin d'état, d'effets, ou d'event listeners
- `ScaleExplorer` et `Fretboard` sont Client — le reste est Server

**Imports :**
- Utiliser l'alias `@/*` (= `./src/*`) pour tous les imports internes
- Exemple : `import { spellScale } from '@/lib/music/spelling'`

**Nommage :**
- Composants React : PascalCase (`Fretboard.tsx`)
- Logique pure : camelCase (`spelling.ts`)
- Data JSON : kebab-case (`mike-stern.json`)
- Slugs URL = nom du fichier JSON sans extension

**Tailwind v4 :** pas de `tailwind.config.js` — la config passe par `globals.css` et les directives PostCSS.

---

## Ce qui n'existe pas (volontairement)

| Feature | Statut | Note |
|---------|--------|------|
| Base de données | Absent | JSON statique suffisant en v1. Postgres/Prisma quand >20 guitaristes + features user |
| Audio | Absent | Tone.js prévu en v3 mais non prioritaire |
| CMS | Absent | Sanity ou Notion-as-CMS envisagé pour contributeurs externes |
| Authentification | Absent | Pas de compte utilisateur en v1 |
| Tests | Absent | La logique `lib/music/` est testable en isolation quand nécessaire |

---

## Roadmap

**v1 (actuel)** — MVP statique, 3 guitaristes seed, manche interactif

**v2** — 20+ guitaristes, progressions d'accords, licks en tablature SVG, filtres par genre/époque

**v3** — Audio (Tone.js), backing tracks, lecture en boucle

**vDB** — Postgres + Prisma quand les features nécessitent de la persistence utilisateur

# Scale Finder

App Next.js d'apprentissage guitare : détection de tonalité à l'oreille, suggestion de gammes, exploration sur manche interactif, accordeur, exercices.

## Commandes

```bash
npm run dev          # dev server
npm run build        # build production
npm run type-check   # tsc --noEmit
npm run lint
```

## Stack

- Next.js 16 (App Router, pages statiques), React 19, TypeScript strict
- Tailwind CSS v4 — tokens design dans `src/app/globals.css` via `@theme`
- Déploiement Vercel
- three.js présent dans les deps mais utilisé uniquement par `MusicRoomScene` (non monté)

## Design system « riso print »

Fond papier clair, hairlines noires, accents rose/cyan/rouge façon risographie.
Tokens : `bg-paper`, `text-ink`, `bg-cream`, `riso-pink`, `riso-pink-deep`, `riso-cyan`, `riso-red`.
Conventions : sections = boîtes `border border-ink` séparées par `space-y-2 sm:space-y-3` ; grilles hairline = `grid gap-px bg-neutral-200` avec enfants `bg-paper` ; labels en `text-[11px] uppercase tracking-[0.18em]`.
Pages `/tuner` et `/exercises` : îlots sombres autonomes dans le cadre clair.

## Architecture

- `src/lib/music/` — logique musicale pure, zéro dépendance UI :
  - `key-detect.ts` — détection de tonalité Krumhansl-Schmuckler (corrélation de Pearson entre distribution des classes de hauteur et 24 profils ; ensemble Krumhansl-Kessler + Temperley + Albrecht-Shanahan)
  - `scale-match.ts` — `analyzeScales()` : tonalités candidates + gammes suggérées (couverture pondérée × alignement tonal × prior de simplicité)
  - `pitch-acf.ts` — détection de pitch ACF/FFT (utilisée par l'accordeur ET le détecteur)
  - `yin.ts` — détecteur YIN alternatif (dispo, non branché)
  - `smoother.ts` — `OutlierRemovingSmoother`, rejette les frames aberrantes
  - `scales.ts` — source unique de vérité des modes/intervalles ; `notes.ts`, `spelling.ts` (épellation correcte), `colors.ts` (palette par mode)
- `src/data/guitarists/` — un JSON par guitariste + `index.ts` central
- `src/components/` — `AudioDetector` (micro/onglet → tonalité + gammes), `ScaleExplorer` + `Fretboard` (SVG), `RetroTuner`, `ExercisesClient`

## Conventions

- UI et commentaires en français
- Pas de sur-ingénierie, zéro commentaire évident
- Ne pas toucher `package.json` / lockfile sans demande explicite

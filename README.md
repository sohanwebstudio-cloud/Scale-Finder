# Scale Finder

App web pour trouver les gammes/modes utilisés par les guitaristes que tu admires.

## Stack

- Next.js 15 (App Router, Server Components par défaut)
- TypeScript
- Tailwind CSS v4
- Pas de base de données pour la v1 (data en JSON statique)

## Setup local

```bash
# 1. Installer les dépendances
npm install

# 2. Lancer le dev server
npm run dev

# 3. Ouvrir http://localhost:3000
```

## Architecture

```
src/
├── app/                    # Routes Next.js (App Router)
│   ├── page.tsx            # Home : sélecteur de guitariste
│   ├── layout.tsx          # Layout global
│   ├── globals.css         # Styles globaux (Tailwind)
│   └── guitarist/
│       └── [slug]/
│           └── page.tsx    # Page détail d'un guitariste
│
├── components/             # Composants React
│   ├── Fretboard.tsx       # SVG du manche (extrait du widget)
│   ├── ScaleCard.tsx       # Card affichant une gamme
│   ├── KeySelector.tsx     # Sélecteur de tonalité
│   ├── ModeSelector.tsx    # Sélecteur de mode
│   └── GuitaristCard.tsx   # Card pour la home
│
├── lib/
│   └── music/              # Toute la logique musicale (pure, testable)
│       ├── notes.ts        # Constantes notes, conversions
│       ├── scales.ts       # Définition des modes et intervalles
│       ├── spelling.ts     # Épellation correcte (Cb, B##, etc.)
│       └── colors.ts       # Mapping mode → couleur
│
├── data/
│   └── guitarists/         # Un fichier par guitariste (JSON)
│       ├── mike-stern.json
│       ├── pat-metheny.json
│       └── ...
│
└── types/
    └── index.ts            # Types TypeScript partagés
```

## Roadmap

### v1 (semaine 1-2) — MVP
- [x] Structure projet
- [ ] Fretboard interactif (porté du widget)
- [ ] 5 guitaristes seed (Stern, Metheny, Scofield, Holdsworth, Frisell)
- [ ] Page home avec sélecteur visuel
- [ ] Page détail guitariste avec ses gammes signature

### v2 (semaine 3-4) — Enrichissement
- [ ] 20+ guitaristes
- [ ] Progressions d'accords par guitariste
- [ ] Licks signature (tablature SVG)
- [ ] Recherche / filtres par genre

### v3 (mois 2+) — Audio
- [ ] Synthèse audio des gammes (Tone.js)
- [ ] Backing tracks (composés ou API tierce légale)
- [ ] Loop / playback des licks

## Ajouter un guitariste

1. Créer `src/data/guitarists/[slug].json` (suis le format de `mike-stern.json`)
2. Ajouter le slug dans `src/data/guitarists/index.ts`
3. Recharger la page

## Décisions techniques

**Server Components par défaut** : tout le contenu (data guitaristes, métadonnées) est rendu côté serveur. Seules les parties interactives (Fretboard, sélecteurs) sont des Client Components.

**Pas de DB en v1** : les fichiers JSON dans `/data` suffisent. Migration vers Postgres/SQLite quand tu auras du contenu user-generated (favoris, comptes).

**Pas d'audio en v1** : on construit la fondation visuelle d'abord. L'audio est un projet à part entière.

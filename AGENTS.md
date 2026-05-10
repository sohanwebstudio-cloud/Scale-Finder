# Scale Finder — Instructions pour agents (Codex)

## Contexte

Scale Finder est une app Next.js pour guitaristes jazz. Elle affiche des fiches de guitaristes de référence avec leurs gammes signature, visualisées sur un manche SVG interactif.

La base de données de guitaristes est 100 % JSON statique. Ajouter un guitariste = créer un fichier JSON + une ligne dans l'index.

---

## Tâche : ajouter un guitariste

### 1. Créer le fichier JSON

Chemin : `src/data/guitarists/[slug].json`

Le slug est en **kebab-case**, basé sur le nom complet : `wes-montgomery`, `john-scofield`, `bb-king`.

```json
{
  "slug": "wes-montgomery",
  "name": "Wes Montgomery",
  "shortName": "Montgomery",
  "era": "Années 50–60",
  "genres": ["Bebop", "Hard bop", "Soul jazz"],
  "bio": "2 à 3 phrases maximum. Ce qui le rend unique, son contexte historique, son influence directe. Pas de liste à puces.",
  "signatureScales": [
    {
      "modeKey": "dorian",
      "rootName": "F",
      "context": "Sur les vamps mineures longues — il explorait tout le manche en octaves avant de revenir à la position de base",
      "example": "Impressions"
    },
    {
      "modeKey": "bebop_dom",
      "rootName": "Bb",
      "context": "Pour naviguer les II-V-I à tempo rapide — la gamme bebop dominant lui permettait de placer les notes importantes sur les temps forts",
      "example": "Four on Six"
    },
    {
      "modeKey": "pentatonic_major",
      "rootName": "G",
      "context": "Pour les passages en accords en plaqués — couleur gospel/soul entre les solos en octaves",
      "example": "Bumpin'"
    },
    {
      "modeKey": "mixolydian",
      "rootName": "C",
      "context": "Sur les dominantes longues — base du blues jazz qu'il enrichissait d'octaves et d'accords",
      "example": "West Coast Blues"
    }
  ],
  "signatureMove": "Le jeu en octaves : médiator + annulaire à distance d'une octave, corde intermédiaire étouffée par le pad du pouce. Ce son charnu et plein est immédiatement reconnaissable et a été repris par George Benson, Pat Martino et des dizaines d'autres.",
  "recommendedListening": ["Four on Six", "West Coast Blues", "Bumpin'", "Impressions"]
}
```

---

## Schéma complet des champs

| Champ | Type | Requis | Règles |
|-------|------|--------|--------|
| `slug` | string | oui | kebab-case, unique, = nom du fichier sans `.json` |
| `name` | string | oui | Nom complet affiché |
| `shortName` | string | oui | Nom court (nom de famille, ou surnom connu). Max ~12 caractères |
| `era` | string | oui | Période d'activité principale. Format libre : "Années 60–70", "1940s–1960s", "Contemporain" |
| `genres` | string[] | oui | 2 à 4 genres, capitalisés, du plus spécifique au plus large |
| `bio` | string | oui | 2–3 phrases. Ce qui le distingue + influence. Jamais de liste |
| `signatureScales` | array | oui | Exactement 4 entrées |
| `signatureMove` | string | oui | La technique ou l'approche la plus caractéristique. 2–4 phrases |
| `recommendedListening` | string[] | non | 3 à 5 titres représentatifs, dans l'ordre d'écoute conseillé |

### signatureScales — champs

| Champ | Type | Requis | Règles |
|-------|------|--------|--------|
| `modeKey` | ModeKey | oui | Valeur exacte de la liste ci-dessous — aucune autre valeur acceptée |
| `rootName` | string | oui | Valeur exacte de la liste ci-dessous — aucune autre valeur acceptée |
| `context` | string | oui | Quand et pourquoi il utilise cette gamme. Concret, pas théorique |
| `example` | string | non | Titre d'un morceau où on l'entend clairement |

---

## Valeurs valides pour `modeKey`

Ces valeurs sont définies dans `src/types/index.ts` (type `ModeKey`). Utiliser uniquement ces valeurs, jamais d'autre chaîne.

```
Modes grecs (gamme majeure) :
  ionian          — Majeur classique (≡ gamme majeure)
  dorian          — Mineur jazz (m7) — le plus courant en jazz
  phrygian        — Sombre, couleur espagnole/flamenco
  lydian          — Lumineux, #4, son Metheny/cinéma
  mixolydian      — Dominant 7, blues/rock/jazz
  aeolian         — Mineur naturel
  locrian         — Demi-diminué, très instable

Mineur mélodique et ses modes :
  melodic_minor   — Jazz minor (mMaj7), base de l'impro moderne
  lydian_aug      — Lydien augmenté, très flottant (maj7#5)
  lydian_dom      — Lydien dominant (7#11), son fusion/jazz
  mixolydian_b6   — Mixolydien b6 (mode 5 du mél. mineur)
  locrian_2       — Locrien #2, sur les m7b5 en jazz
  altered         — Altered (7alt), tension maximum, outside

Mineur harmonique :
  harmonic_minor  — Seconde augmentée, son classique/oriental
  phrygian_dom    — Phrygien dominant (7b9), flamenco/jazz

Gammes symétriques :
  whole_tone      — Gamme par tons (7#5), ambiguïté tonale
  half_whole      — Diminué demi-ton/ton (7b9), très chromatique
  whole_half      — Diminué ton/demi-ton, sur accords dim7

Bebop :
  bebop_dom       — Bebop dominant (8 notes), son bebop classique

Pentatoniques & blues :
  pentatonic_minor — La base du blues/rock
  pentatonic_major — Son country/folk/gospel
  blues_minor      — Pentatonique mineure + blue note
  blues_major      — Pentatonique majeure + blue note
```

---

## Valeurs valides pour `rootName`

```
C  Db  D  Eb  E  F  F#  G  Ab  A  Bb  B
```

Utiliser les **bémols** (`Db`, `Eb`, `Ab`, `Bb`) plutôt que les dièses enharmoniques (`C#`, `D#`, `G#`, `A#`) sauf pour `F#` qui est la notation standard.

Exemple : Albert King joue en C# pentatonique → écrire `"rootName": "Db"`.

---

## Valeurs valides pour `modeKey` — aide au choix

Si tu ne sais pas quelle gamme choisir :

| Style | Gammes typiques |
|-------|----------------|
| Blues traditionnel | `pentatonic_minor`, `blues_minor`, `mixolydian` |
| Blues-rock | `pentatonic_minor`, `blues_minor`, `pentatonic_major` |
| Jazz bebop | `bebop_dom`, `dorian`, `mixolydian`, `ionian` |
| Jazz modal | `dorian`, `lydian`, `mixolydian`, `melodic_minor` |
| Jazz fusion | `lydian_dom`, `altered`, `melodic_minor`, `dorian` |
| Flamenco/modal | `phrygian_dom`, `harmonic_minor`, `phrygian` |
| Classique/néoclassique | `harmonic_minor`, `phrygian_dom`, `aeolian` |
| Expérimental/outside | `altered`, `whole_tone`, `half_whole` |

---

## 2. Mettre à jour l'index

Fichier : `src/data/guitarists/index.ts`

Ajouter l'import et l'entrée dans le tableau, en respectant l'ordre alphabétique ou chronologique déjà en place.

```ts
// Ajouter l'import en haut du fichier, avec les autres :
import wesMontgomery from './wes-montgomery.json';

// Ajouter l'entrée dans ALL_GUITARISTS :
export const ALL_GUITARISTS: Guitarist[] = [
  // ... guitaristes existants ...
  wesMontgomery as Guitarist,
];
```

---

## Règles de qualité pour le contenu

**`bio`** — 2–3 phrases, dans l'ordre : ce qui le rend unique → son contexte/époque → son influence sur les autres. Pas de "il est né à...".

**`context`** dans signatureScales — doit être spécifique et musical. Bon : "Sur les dominantes secondaires avant résolution — il glissait vers l'altered pour créer une tension maximale". Mauvais : "Pour improviser sur des accords de jazz".

**`signatureMove`** — La *une* chose qu'on reconnaît immédiatement à l'écoute. Technique, approche harmonique, son particulier. Pas une liste de tout ce qu'il sait faire.

**Diversité des gammes** — Les 4 `signatureScales` doivent couvrir des contextes différents (pas 4 fois la pentatonique mineure). Varier les tonalités aussi.

---

## Vérification

Après avoir créé le fichier et mis à jour l'index, vérifier que TypeScript ne remonte aucune erreur :

```bash
npm run type-check
```

Aucune sortie = aucune erreur. C'est le seul check requis — pas de tests unitaires, pas de build complet nécessaire.

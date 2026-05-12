export type Difficulty = 'débutant' | 'intermédiaire' | 'avancé'
export type Category =
  | 'indépendance'
  | 'coordination'
  | 'force'
  | 'légato'
  | 'jazz'
  | 'blues'

// ─── Scale exercises ─────────────────────────────────────────────────────────

export interface ScaleExercise {
  type: 'scale'
  id: string
  title: string
  subtitle: string
  difficulty: Difficulty
  category: Category
  description: string
  tempo: number
  fingers: number[]
  tabStrings: string[] // 6 strings top→bottom: e B G D A E — notes space-separated
  tip: string
}

// ─── Chord exercises ──────────────────────────────────────────────────────────

export interface ChordShape {
  name: string
  function?: string // "iim7", "V7", "Imaj7"
  // index 0=E(low string), 5=e(high string)
  frets: Array<number | 'x' | 0>
  fingers: Array<0 | 1 | 2 | 3 | 4>
  startFret?: number // default 1 (shows nut)
}

export interface ChordExercise {
  type: 'chord'
  id: string
  title: string
  subtitle: string
  difficulty: Difficulty
  category: Category
  description: string
  tempo: number
  chords: ChordShape[]
  tip: string
}

export type Exercise = ScaleExercise | ChordExercise

// ─── Data ─────────────────────────────────────────────────────────────────────

export const EXERCISES: Exercise[] = [
  // ── Technique main gauche ──────────────────────────────────────────────────

  {
    type: 'scale',
    id: 'spider',
    title: "L'Araignée",
    subtitle: "Chromatique 1-2-3-4",
    difficulty: 'débutant',
    category: 'indépendance',
    description:
      "Le fondamental. Un doigt par case, monte corde par corde du grave à l'aigu. Force chaque doigt à agir indépendamment.",
    tempo: 60,
    fingers: [1, 2, 3, 4],
    tabStrings: ['5 6 7 8', '5 6 7 8', '5 6 7 8', '5 6 7 8', '5 6 7 8', '5 6 7 8'],
    tip: "Garde les doigts en arc, légèrement levés au-dessus des cordes. L'auriculaire va vouloir s'affaisser — résiste.",
  },

  {
    type: 'scale',
    id: 'spider-reverse',
    title: "L'Araignée Inversée",
    subtitle: "Chromatique 4-3-2-1",
    difficulty: 'débutant',
    category: 'indépendance',
    description:
      "L'araignée à l'envers. L'auriculaire attaque en premier ce qui est plus difficile physiologiquement. Les deux sens sont complémentaires.",
    tempo: 60,
    fingers: [4, 3, 2, 1],
    tabStrings: ['8 7 6 5', '8 7 6 5', '8 7 6 5', '8 7 6 5', '8 7 6 5', '8 7 6 5'],
    tip: "Ne relâche pas les doigts déjà en place tant qu'ils ne changent pas de corde. Minimum de mouvement.",
  },

  {
    type: 'scale',
    id: 'rouleau',
    title: "Le Rouleau",
    subtitle: "Pattern 1-3-2-4",
    difficulty: 'intermédiaire',
    category: 'coordination',
    description:
      "Alterne index–annulaire–majeur–auriculaire dans un ordre non-séquentiel. Le cerveau doit déconnecter les paires habituelles de doigts.",
    tempo: 65,
    fingers: [1, 3, 2, 4],
    tabStrings: ['5 7 6 8', '5 7 6 8', '5 7 6 8', '5 7 6 8', '5 7 6 8', '5 7 6 8'],
    tip: "Visualise les 4 doigts comme 4 acteurs indépendants, pas comme une main. Chacun a son propre timing.",
  },

  {
    type: 'scale',
    id: 'independence-13',
    title: "Indépendance 1-3",
    subtitle: "Index et annulaire sans le majeur",
    difficulty: 'intermédiaire',
    category: 'force',
    description:
      "Alterne uniquement index (1) et annulaire (3) en gardant le majeur levé. Renforce l'indépendance des doigts non-adjacents — une faiblesse très courante.",
    tempo: 80,
    fingers: [1, 3, 1, 3],
    tabStrings: ['5 7 5 7', '5 7 5 7', '5 7 5 7', '5 7 5 7', '5 7 5 7', '5 7 5 7'],
    tip: "Le majeur reste levé en permanence. Il va vouloir s'impliquer — c'est précisément ce que tu combats.",
  },

  {
    type: 'scale',
    id: 'independence-24',
    title: "Indépendance 2-4",
    subtitle: "Majeur et auriculaire sans l'index",
    difficulty: 'intermédiaire',
    category: 'force',
    description:
      "Majeur (2) et auriculaire (4) seulement. L'auriculaire est le doigt le plus faible — ici il doit tenir sans s'appuyer sur l'annulaire.",
    tempo: 70,
    fingers: [2, 4, 2, 4],
    tabStrings: ['6 8 6 8', '6 8 6 8', '6 8 6 8', '6 8 6 8', '6 8 6 8', '6 8 6 8'],
    tip: "Douleur = stop immédiat. La tendinite est plus longue à guérir que l'exercice ne prend à apprendre.",
  },

  {
    type: 'scale',
    id: 'grand-ecart',
    title: "Le Grand Écart",
    subtitle: "Étirement auriculaire (écart de 2 cases)",
    difficulty: 'intermédiaire',
    category: 'force',
    description:
      "Chromatique normal jusqu'au 3ème doigt, puis l'auriculaire saute une case. Force l'étirement progressif de la main — essentiel pour les voicings jazz serrés.",
    tempo: 55,
    fingers: [1, 2, 3, 4],
    tabStrings: ['5 6 7 9', '5 6 7 9', '5 6 7 9', '5 6 7 9', '5 6 7 9', '5 6 7 9'],
    tip: "Ne force jamais le stretch. Si ça tire vraiment, recule d'une case (position 7) — l'intervalle des cordes s'espace naturellement.",
  },

  {
    type: 'scale',
    id: 'cramp',
    title: "La Crampe Mentale",
    subtitle: "Pattern 1-2-4-3",
    difficulty: 'avancé',
    category: 'coordination',
    description:
      "Le pattern 1-2-4-3 casse les automatismes du cerveau. La séquence est contre-intuitive — exactement ce qu'il faut pour briser les mauvaises habitudes motrices.",
    tempo: 70,
    fingers: [1, 2, 4, 3],
    tabStrings: ['5 6 8 7', '5 6 8 7', '5 6 8 7', '5 6 8 7', '5 6 8 7', '5 6 8 7'],
    tip: "Commence à 40 BPM. La coordination d'abord, la vitesse ensuite. Jamais l'inverse.",
  },

  {
    type: 'scale',
    id: 'legato-trill',
    title: "Trilles Légato",
    subtitle: "Hammer-on / Pull-off en boucle",
    difficulty: 'avancé',
    category: 'légato',
    description:
      "Un seul picking initial — toutes les notes suivantes sont produites par les doigts seuls. Développe la puissance des hammer-ons et la précision des pull-offs.",
    tempo: 100,
    fingers: [1, 3, 1, 3],
    tabStrings: [
      '5 h7 p5 h7',
      '5 h7 p5 h7',
      '5 h7 p5 h7',
      '5 h7 p5 h7',
      '5 h7 p5 h7',
      '5 h7 p5 h7',
    ],
    tip: "Pull-off = pincer la corde vers le bas avant de relâcher. Si tu entends juste un 'clac' sans note — recommence.",
  },

  {
    type: 'scale',
    id: 'position-shift',
    title: "Glissement de Position",
    subtitle: "Décalage d'une case à chaque corde",
    difficulty: 'avancé',
    category: 'coordination',
    description:
      "Monte d'une case à chaque changement de corde. La main se repositionne en permanence — ça travaille simultanément la position, la précision et la fluidité.",
    tempo: 75,
    fingers: [1, 2, 3, 4],
    tabStrings: [
      '5 6 7 8',
      '6 7 8 9',
      '7 8 9 10',
      '8 9 10 11',
      '9 10 11 12',
      '10 11 12 13',
    ],
    tip: "Le pouce glisse avec la main — aucun accrochage derrière le manche. Visualise l'avant-bras qui pivote légèrement à chaque corde.",
  },

  // ── Accords Jazz ───────────────────────────────────────────────────────────

  {
    type: 'chord',
    id: 'iivi-jazz',
    title: "ii-V-I Jazz en Sol",
    subtitle: "Shell voicings — la progression fondamentale",
    difficulty: 'intermédiaire',
    category: 'jazz',
    description:
      "Le ii-V-I est la progression centrale du jazz. Ces 3 accords enchaînés te permettent de naviguer dans n'importe quelle tonalité. Joue les transitions proprement avant d'accélérer.",
    tempo: 60,
    chords: [
      {
        name: 'Am7',
        function: 'iim7',
        frets: ['x', 0, 2, 0, 1, 0],
        fingers: [0, 0, 2, 0, 1, 0],
        startFret: 1,
      },
      {
        name: 'D7',
        function: 'V7',
        frets: ['x', 'x', 0, 2, 1, 2],
        fingers: [0, 0, 0, 3, 1, 2],
        startFret: 1,
      },
      {
        name: 'Gmaj7',
        function: 'Imaj7',
        frets: [3, 2, 0, 0, 0, 2],
        fingers: [2, 1, 0, 0, 0, 4],
        startFret: 1,
      },
    ],
    tip: "Mémorise la couleur de chaque accord : Am7 = flottant (iim), D7 = tension (V), Gmaj7 = résolution (I). Entends la couleur avant de jouer la note.",
  },

  {
    type: 'chord',
    id: 'jazz-dominantes',
    title: "Dominantes Jazz G7–C7–F7",
    subtitle: "Cycle de quintes — 3 accords de 7ème",
    difficulty: 'intermédiaire',
    category: 'jazz',
    description:
      "Trois dominantes en cycle de quintes. Chaque accord résout vers le suivant. Ce cycle parcourt tout le jazz — Autumn Leaves, All The Things You Are, Rhythm Changes.",
    tempo: 65,
    chords: [
      {
        name: 'G7',
        function: 'V7/C',
        frets: [3, 2, 0, 0, 0, 1],
        fingers: [3, 2, 0, 0, 0, 1],
        startFret: 1,
      },
      {
        name: 'C7',
        function: 'V7/F',
        frets: ['x', 3, 2, 3, 1, 0],
        fingers: [0, 3, 2, 4, 1, 0],
        startFret: 1,
      },
      {
        name: 'F7',
        function: 'V7/Bb',
        frets: [1, 3, 1, 2, 1, 1],
        fingers: [1, 3, 1, 2, 1, 1],
        startFret: 1,
      },
    ],
    tip: "G7 et C7 sont jouables en position ouverte. F7 est un barré — si ça bloque, simplifie à x-x-3-4-2-1 (F7 sur 4 cordes).",
  },

  {
    type: 'chord',
    id: 'jazz-minor-ii-v-i',
    title: "ii-V-i mineur en Ré",
    subtitle: "Mineur jazz — couleur sombre",
    difficulty: 'avancé',
    category: 'jazz',
    description:
      "La version mineure du ii-V-I. L'accord de dominante (A7b9) a une tension maximale avant la résolution sur Dm. Caracteristique du bebop et du jazz modal.",
    tempo: 55,
    chords: [
      {
        name: 'Em7b5',
        function: 'iim7b5',
        frets: ['x', 7, 8, 7, 8, 'x'],
        fingers: [0, 1, 3, 2, 4, 0],
        startFret: 7,
      },
      {
        name: 'A7b9',
        function: 'V7b9',
        frets: ['x', 0, 2, 0, 2, 1],
        fingers: [0, 0, 2, 0, 3, 1],
        startFret: 1,
      },
      {
        name: 'Dm7',
        function: 'im7',
        frets: ['x', 'x', 0, 2, 1, 1],
        fingers: [0, 0, 0, 3, 1, 2],
        startFret: 1,
      },
    ],
    tip: "Em7b5 = accord de demi-diminué. La quinte bémol (Bb) crée la tension spécifique du mineur jazz. Écoute la résolution A7b9 → Dm7.",
  },

  // ── Accords Blues ──────────────────────────────────────────────────────────

  {
    type: 'chord',
    id: 'blues-12-bars',
    title: "12 Mesures Blues en La",
    subtitle: "I7 – IV7 – V7 — le schéma fondateur",
    difficulty: 'débutant',
    category: 'blues',
    description:
      "La grille de blues de base. A7 (4 mesures) → D7 (2 mesures) → A7 (2) → E7 (1) → D7 (1) → A7 (2). Mémorise les formes d'abord, le rythme ensuite.",
    tempo: 80,
    chords: [
      {
        name: 'A7',
        function: 'I7',
        frets: ['x', 0, 2, 0, 2, 0],
        fingers: [0, 0, 1, 0, 2, 0],
        startFret: 1,
      },
      {
        name: 'D7',
        function: 'IV7',
        frets: ['x', 'x', 0, 2, 1, 2],
        fingers: [0, 0, 0, 3, 1, 2],
        startFret: 1,
      },
      {
        name: 'E7',
        function: 'V7',
        frets: [0, 2, 0, 1, 0, 0],
        fingers: [0, 2, 0, 1, 0, 0],
        startFret: 1,
      },
    ],
    tip: "Tous les 3 accords en position ouverte = transition rapide. Entraîne-toi à changer de A7 à D7 en 1 temps, puis D7 à E7. La qualité du changement, pas la vitesse.",
  },

  {
    type: 'chord',
    id: 'blues-shuffle',
    title: "Blues Shuffle en Mi",
    subtitle: "Power chord + 7ème — le groove de Chuck Berry",
    difficulty: 'débutant',
    category: 'blues',
    description:
      "Le shuffle blues classique. Alterne entre la quinte et la sixte sur chaque accord. Ce riff est à la base de milliers de morceaux rock et blues des années 50 à aujourd'hui.",
    tempo: 100,
    chords: [
      {
        name: 'E5',
        function: 'I (base)',
        frets: [0, 2, 2, 'x', 'x', 'x'],
        fingers: [0, 1, 2, 0, 0, 0],
        startFret: 1,
      },
      {
        name: 'E6',
        function: 'I (swing)',
        frets: [0, 2, 4, 'x', 'x', 'x'],
        fingers: [0, 1, 3, 0, 0, 0],
        startFret: 1,
      },
      {
        name: 'A5',
        function: 'IV (base)',
        frets: ['x', 0, 2, 'x', 'x', 'x'],
        fingers: [0, 0, 1, 0, 0, 0],
        startFret: 1,
      },
      {
        name: 'A6',
        function: 'IV (swing)',
        frets: ['x', 0, 2, 4, 'x', 'x'],
        fingers: [0, 0, 1, 3, 0, 0],
        startFret: 1,
      },
    ],
    tip: "Alterne E5→E6 à chaque noire. La main droite joue un shuffle : TAP-ta TAP-ta. L'index reste en place pendant que l'annulaire bascule.",
  },

  {
    type: 'chord',
    id: 'blues-turnaround',
    title: "Turnaround Blues",
    subtitle: "Cadence finale des 2 dernières mesures",
    difficulty: 'avancé',
    category: 'blues',
    description:
      "Le turnaround est la signature finale d'une grille blues. Descente chromatique du I7 vers le V7 — crée la tension qui relance le cycle. Indispensable pour sonner authentiquement blues.",
    tempo: 70,
    chords: [
      {
        name: 'A7',
        function: 'I7',
        frets: ['x', 0, 2, 0, 2, 0],
        fingers: [0, 0, 1, 0, 2, 0],
        startFret: 1,
      },
      {
        name: 'Ab7',
        function: 'bVII7',
        frets: ['x', 0, 1, 1, 1, 2],
        fingers: [0, 0, 1, 1, 1, 2],
        startFret: 1,
      },
      {
        name: 'G7',
        function: 'bVI7',
        frets: [3, 2, 0, 0, 0, 1],
        fingers: [3, 2, 0, 0, 0, 1],
        startFret: 1,
      },
      {
        name: 'E7',
        function: 'V7',
        frets: [0, 2, 0, 1, 0, 0],
        fingers: [0, 2, 0, 1, 0, 0],
        startFret: 1,
      },
    ],
    tip: "La descente Ab7→G7 est chromatique — c'est ça le turnaround. Joue chaque accord pendant 1 temps, en accélérant vers E7 pour créer la tension maximale.",
  },
]

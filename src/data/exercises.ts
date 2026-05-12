export type Difficulty = 'débutant' | 'intermédiaire' | 'avancé'
export type Category = 'indépendance' | 'coordination' | 'force' | 'légato'

export interface Exercise {
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

export const EXERCISES: Exercise[] = [
  {
    id: 'spider',
    title: "L'Araignée",
    subtitle: "Chromatique 1-2-3-4",
    difficulty: 'débutant',
    category: 'indépendance',
    description:
      "Le fondamental. Un doigt par case, monte corde par corde du grave à l'aigu. Force chaque doigt à agir indépendamment sans aide de ses voisins.",
    tempo: 60,
    fingers: [1, 2, 3, 4],
    tabStrings: ['5 6 7 8', '5 6 7 8', '5 6 7 8', '5 6 7 8', '5 6 7 8', '5 6 7 8'],
    tip: "Garde les doigts en arc, légèrement levés au-dessus des cordes. L'auriculaire va vouloir s'affaisser — résiste.",
  },
  {
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
    tip: "Ne relâche pas les doigts déjà en place tant qu'ils ne changent pas de corde. Minimum de mouvement = maximum d'efficacité.",
  },
  {
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
    id: 'independence-24',
    title: "Indépendance 2-4",
    subtitle: "Majeur et auriculaire sans l'index",
    difficulty: 'intermédiaire',
    category: 'force',
    description:
      "Version encore plus difficile : majeur (2) et auriculaire (4) seulement. L'auriculaire est le doigt le plus faible — ici il doit tenir sans s'appuyer sur l'annulaire.",
    tempo: 70,
    fingers: [2, 4, 2, 4],
    tabStrings: ['6 8 6 8', '6 8 6 8', '6 8 6 8', '6 8 6 8', '6 8 6 8', '6 8 6 8'],
    tip: "Commence très lentement. Douleur = stop immédiat. La tendinite est plus longue à guérir que l'exercice ne prend à apprendre.",
  },
  {
    id: 'cramp',
    title: "La Crampe Mentale",
    subtitle: "Pattern 1-2-4-3",
    difficulty: 'intermédiaire',
    category: 'coordination',
    description:
      "Le pattern 1-2-4-3 casse les automatismes du cerveau. La séquence est contre-intuitive — exactement ce qu'il faut pour briser les mauvaises habitudes motrices.",
    tempo: 70,
    fingers: [1, 2, 4, 3],
    tabStrings: ['5 6 8 7', '5 6 8 7', '5 6 8 7', '5 6 8 7', '5 6 8 7', '5 6 8 7'],
    tip: "Commence à 40 BPM. La coordination d'abord, la vitesse ensuite. Jamais l'inverse — c'est comme ça qu'on grave des mauvais réflexes.",
  },
  {
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
]

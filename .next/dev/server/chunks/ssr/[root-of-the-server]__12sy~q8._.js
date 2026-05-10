module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/src/data/guitarists/mike-stern.json.[json].cjs [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "slug": "mike-stern",
    "name": "Mike Stern",
    "shortName": "Stern",
    "era": "Années 80 à aujourd'hui",
    "genres": [
        "Jazz fusion",
        "Bebop électrique"
    ],
    "bio": "Guitariste de jazz fusion américain, ancien sideman de Miles Davis. Son style fond la pentatonique blues dans le langage bebop, avec un usage massif des gammes altérées sur les V7.",
    "signatureScales": [
        {
            "modeKey": "mixolydian",
            "rootName": "A",
            "context": "Sur les vamps dominantes (A7, comme dans Chromazone)",
            "example": "Chromazone"
        },
        {
            "modeKey": "altered",
            "rootName": "E",
            "context": "Sur les V7 avant résolution mineure",
            "example": "Upside Downside"
        },
        {
            "modeKey": "dorian",
            "rootName": "A",
            "context": "Sur les vamps mineures (Am7)",
            "example": "Play"
        },
        {
            "modeKey": "blues_minor",
            "rootName": "A",
            "context": "Toujours en superposition, pour la couleur blues",
            "example": "Quasi tous ses solos"
        }
    ],
    "signatureMove": "Mélange constant de la pentatonique mineure avec l'altered scale. Tu joues blues, puis tu glisses dans le altered sur le V7, puis retour blues à la résolution.",
    "recommendedListening": [
        "Chromazone",
        "Upside Downside",
        "Play",
        "Time in Place"
    ]
};
}),
"[project]/src/data/guitarists/pat-metheny.json.[json].cjs [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "slug": "pat-metheny",
    "name": "Pat Metheny",
    "shortName": "Metheny",
    "era": "Années 70 à aujourd'hui",
    "genres": [
        "Jazz fusion",
        "Jazz contemporain",
        "Folk jazz"
    ],
    "bio": "Guitariste américain à la sonorité reconnaissable entre toutes. Son langage repose sur les modes lydien et lydien dominante, qui donnent à ses lignes leur caractère 'flottant' et lumineux.",
    "signatureScales": [
        {
            "modeKey": "lydian",
            "rootName": "F",
            "context": "Sur les accords majeur 7 statiques",
            "example": "Bright Size Life"
        },
        {
            "modeKey": "lydian_dom",
            "rootName": "G",
            "context": "Sur les V7 où il veut un son brillant plutôt que tendu",
            "example": "Phase Dance"
        },
        {
            "modeKey": "dorian",
            "rootName": "D",
            "context": "Sur les vamps mineures longues",
            "example": "Question and Answer"
        },
        {
            "modeKey": "pentatonic_major",
            "rootName": "G",
            "context": "Pour les lignes folk/country qu'il glisse partout",
            "example": "Last Train Home"
        }
    ],
    "signatureMove": "Substitue souvent une pentatonique majeure démarrée sur la 9e, 5e ou 13e d'un accord pour créer des superpositions modales colorées sans jamais sonner 'jazz scolaire'.",
    "recommendedListening": [
        "Bright Size Life",
        "Question and Answer",
        "Phase Dance",
        "Last Train Home"
    ]
};
}),
"[project]/src/data/guitarists/john-scofield.json.[json].cjs [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "slug": "john-scofield",
    "name": "John Scofield",
    "shortName": "Scofield",
    "era": "Années 70 à aujourd'hui",
    "genres": [
        "Jazz fusion",
        "Jazz funk",
        "Blues jazz"
    ],
    "bio": "Guitariste américain au phrasé bluesy reconnaissable. Sa marque : une utilisation massive de la gamme altérée et de chromatismes, mêlée à un feeling blues très ancré.",
    "signatureScales": [
        {
            "modeKey": "altered",
            "rootName": "G",
            "context": "Sur les V7, son outil n°1 pour le 'son outside'",
            "example": "Quasi tous ses solos sur dominants"
        },
        {
            "modeKey": "blues_minor",
            "rootName": "C",
            "context": "Comme base, qu'il fait dérailler vers l'altered",
            "example": "A Go Go"
        },
        {
            "modeKey": "dorian",
            "rootName": "C",
            "context": "Sur les grooves mineurs funk",
            "example": "Chank"
        },
        {
            "modeKey": "mixolydian",
            "rootName": "G",
            "context": "Sur les dominantes statiques (sans résolution attendue)",
            "example": "Boozer"
        }
    ],
    "signatureMove": "Démarre une phrase dans la pentatonique blues, puis dévie sur la gamme altérée pendant 1-2 mesures, puis résout en revenant sur la blues. Crée une tension narrative très identifiable.",
    "recommendedListening": [
        "A Go Go",
        "Bump",
        "Time on My Hands",
        "Que Alegria"
    ]
};
}),
"[project]/src/data/guitarists/robben-ford.json.[json].cjs [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "slug": "robben-ford",
    "name": "Robben Ford",
    "shortName": "Ford",
    "era": "Années 70 à aujourd'hui",
    "genres": [
        "Blues-jazz",
        "Blues",
        "Soul"
    ],
    "bio": "Guitariste américain maître du blues-jazz, connu pour sa capacité à fondre le vocabulaire blues traditionnel dans une sophistication harmonique jazz. Son toucher élégant et son son incisif en font l'un des grands ponts entre les deux univers.",
    "signatureScales": [
        {
            "modeKey": "mixolydian",
            "rootName": "G",
            "context": "Sur les accords de dominante blues pour un son ouvert et joyeux",
            "example": "Help The Poor"
        },
        {
            "modeKey": "half_whole",
            "rootName": "D",
            "context": "Sur les accords de dominante altérés — crée une tension jazz qui se résout façon blues",
            "example": "Revelation"
        },
        {
            "modeKey": "pentatonic_minor",
            "rootName": "A",
            "context": "Mélangée à la pentatonique majeure pour le phrasé blues classique signature",
            "example": "Talk to Your Daughter"
        },
        {
            "modeKey": "dorian",
            "rootName": "C",
            "context": "Sur les grooves mineurs pour un son jazz-funk fluide et sophistiqué",
            "example": "Rugged Road"
        }
    ],
    "signatureMove": "Mélange constant des pentatoniques mineure et majeure avec insertion de la gamme diminuée sur les dominantes — un son blues raffiné où la tension jazz se résout toujours de manière organique.",
    "recommendedListening": [
        "Help The Poor",
        "Talk to Your Daughter",
        "Revelation",
        "Rugged Road"
    ]
};
}),
"[project]/src/data/guitarists/larry-carlton.json.[json].cjs [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "slug": "larry-carlton",
    "name": "Larry Carlton",
    "shortName": "Carlton",
    "era": "Années 70 à aujourd'hui",
    "genres": [
        "Jazz-rock",
        "Fusion",
        "R&B studio"
    ],
    "bio": "Guitariste américain surnommé \"Mr. 335\" pour son usage de la Gibson ES-335. Pilier du son de studio californien (Steely Dan, The Crusaders), il est l'une des références absolues du jazz-rock pour son toucher lyrrique et son contrôle exceptionnel de la dynamique.",
    "signatureScales": [
        {
            "modeKey": "dorian",
            "rootName": "A",
            "context": "Sur les accords mineurs pour des lignes douces et chantantes à la guitare semi-creuse",
            "example": "Room 335"
        },
        {
            "modeKey": "melodic_minor",
            "rootName": "E",
            "context": "Utilisé comme source altérée sur B7 — apporte des couleurs jazz sur les progressions blues",
            "example": "Kid Charlemagne"
        },
        {
            "modeKey": "mixolydian",
            "rootName": "D",
            "context": "Pour le blues-rock sophistiqué avec bends subtils et phrasé très mélodique",
            "example": "Don't Give It Up"
        },
        {
            "modeKey": "pentatonic_major",
            "rootName": "G",
            "context": "Pour des mélodies pop-jazz lumineuses et immédiatement accrocheuses",
            "example": "Smiles and Smiles to Go"
        }
    ],
    "signatureMove": "Un toucher d'une finesse extrême : il contrôle le volume à la pédale en temps réel pour sculpter chaque note. Sa grande marque : insérer la gamme mineure mélodique sur les V7 pour passer du blues à un son jazz en une phrase.",
    "recommendedListening": [
        "Room 335",
        "Kid Charlemagne (Steely Dan)",
        "Smiles and Smiles to Go",
        "Don't Give It Up"
    ]
};
}),
"[project]/src/data/guitarists/jimi-hendrix.json.[json].cjs [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "slug": "jimi-hendrix",
    "name": "Jimi Hendrix",
    "shortName": "Hendrix",
    "era": "Années 60 à 1970",
    "genres": [
        "Rock",
        "Blues psychédélique",
        "R&B"
    ],
    "bio": "Guitariste américain révolutionnaire qui a redéfini le rock, le blues et les prémices de la fusion. Son langage repose sur le rythme, le fuzz, les feedbacks et une approche unique des accords où la rythmique et le solo ne font qu'un.",
    "signatureScales": [
        {
            "modeKey": "pentatonic_minor",
            "rootName": "E",
            "context": "Sur l'accord 7#9 (\"l'accord Hendrix\") pour un son agressif et saturé au fuzz",
            "example": "Purple Haze"
        },
        {
            "modeKey": "dorian",
            "rootName": "A",
            "context": "Sur les ballades mineures et jams psychédéliques lents — donne une couleur ouverte et mélancolique",
            "example": "Little Wing"
        },
        {
            "modeKey": "mixolydian",
            "rootName": "C",
            "context": "Sur les blues majeurs à tempo moyen, avec unissons et doubles notes en main gauche et droite",
            "example": "Voodoo Child (Slight Return)"
        },
        {
            "modeKey": "pentatonic_major",
            "rootName": "A",
            "context": "Pour les ballades R&B/Soul harmonisées en doubles notes dans le style Curtis Mayfield",
            "example": "Castles Made of Sand"
        }
    ],
    "signatureMove": "Le jeu \"rythmique-soliste\" : il joue simultanément basse, accords et mélodie en tenant parfois la tonique avec le pouce par-dessus le manche. L'accord 7#9 (\"accord Hendrix\") et l'usage radical du fuzz + feedback sont sa marque absolue.",
    "recommendedListening": [
        "Little Wing",
        "Voodoo Child (Slight Return)",
        "Purple Haze",
        "Castles Made of Sand"
    ]
};
}),
"[project]/src/data/guitarists/stevie-ray-vaughan.json.[json].cjs [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "slug": "stevie-ray-vaughan",
    "name": "Stevie Ray Vaughan",
    "shortName": "SRV",
    "era": "Années 70 à 1990",
    "genres": [
        "Texas blues",
        "Blues-rock"
    ],
    "bio": "Guitariste américain et figure de proue du renouveau du Texas Blues dans les années 80. Son jeu d'une intensité physique rare combine vitesse, précision et un son énorme obtenu avec des cordes épaisses accordées un demi-ton plus bas, hérité d'Albert King et Jimi Hendrix.",
    "signatureScales": [
        {
            "modeKey": "pentatonic_minor",
            "rootName": "E",
            "context": "Jouée avec les cordes à vide pour un maximum de résonance et de gras — base de tout son vocabulaire",
            "example": "Pride and Joy"
        },
        {
            "modeKey": "pentatonic_major",
            "rootName": "E",
            "context": "Mélangée à la mineure pour apporter un côté chaloupé et soul au phrasé blues",
            "example": "Mary Had A Little Lamb"
        },
        {
            "modeKey": "mixolydian",
            "rootName": "Ab",
            "context": "Sur les shuffles rapides pour souligner les changements d'accords avec énergie",
            "example": "Crossfire"
        },
        {
            "modeKey": "dorian",
            "rootName": "C",
            "context": "Sur les rares morceaux mineurs — avec beaucoup de legato et de douceur expressive",
            "example": "Texas Flood"
        }
    ],
    "signatureMove": "Une attaque de médiator féroce, des bends d'une précision redoutable (souvent sur deux cordes simultanément) et un shuffle rythmique implacable. Il joue avec des cordes .013 accordées un demi-ton plus bas pour obtenir ce son massif et organique.",
    "recommendedListening": [
        "Pride and Joy",
        "Texas Flood",
        "Little Wing (reprise)",
        "Crossfire"
    ]
};
}),
"[project]/src/data/guitarists/wes-montgomery.json.[json].cjs [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "slug": "wes-montgomery",
    "name": "Wes Montgomery",
    "shortName": "Montgomery",
    "era": "Années 50 à 1968",
    "genres": [
        "Bebop",
        "Hard bop",
        "Soul-jazz"
    ],
    "bio": "Guitariste américain légendaire, l'une des plus grandes figures du jazz. Il jouait exclusivement avec la pulpe de son pouce, ce qui lui donnait un son particulièrement rond et chaud. Son architecture des solos en trois phases — single notes, octaves, block chords — est devenue la référence absolue.",
    "signatureScales": [
        {
            "modeKey": "dorian",
            "rootName": "F",
            "context": "Pour ses lignes single-notes rapides et swinguantes dans le langage bebop",
            "example": "Four on Six"
        },
        {
            "modeKey": "mixolydian",
            "rootName": "Bb",
            "context": "Sur les blues jazz pour ses fameuses phrases en octaves — sa marque de fabrique absolue",
            "example": "West Coast Blues"
        },
        {
            "modeKey": "bebop_dom",
            "rootName": "C",
            "context": "Pour créer des lignes chromatiques fluides sur les progressions ii-V-I",
            "example": "Impressions"
        },
        {
            "modeKey": "ionian",
            "rootName": "Eb",
            "context": "Pour ses ballades jouées entièrement en block chords — la troisième phase de son solo type",
            "example": "Polka Dots and Moonbeams"
        }
    ],
    "signatureMove": "Le solo en trois actes : d'abord des lignes bebop en single-notes, puis le passage aux octaves (son son signature au pouce), et enfin les block chords pour l'apothéose. Jouer avec le pouce lui donnait un son que personne n'a réussi à imiter.",
    "recommendedListening": [
        "Four on Six",
        "West Coast Blues",
        "Impressions",
        "Bumpin' on Sunset"
    ]
};
}),
"[project]/src/data/guitarists/allan-holdsworth.json.[json].cjs [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "slug": "allan-holdsworth",
    "name": "Allan Holdsworth",
    "shortName": "Holdsworth",
    "era": "Années 70 à 2017",
    "genres": [
        "Jazz-fusion",
        "Rock progressif"
    ],
    "bio": "Guitariste britannique au langage harmonique le plus complexe de l'histoire de la guitare. Sa technique de legato quasi-exclusive (très peu d'attaques au médiator) lui permettait d'imiter le phrasé d'un saxophoniste comme Coltrane — des lignes impossibles, aux intervalles irréalisables pour tout autre guitariste.",
    "signatureScales": [
        {
            "modeKey": "melodic_minor",
            "rootName": "C",
            "context": "Il voyait le mineur mélodique comme une famille d'accords fluides plutôt qu'une gamme — source de toutes ses gammes altérées",
            "example": "Fred"
        },
        {
            "modeKey": "whole_tone",
            "rootName": "G",
            "context": "Pour créer des atmosphères suspendues et flottantes, sans résolution tonale évidente",
            "example": "Metal Fatigue"
        },
        {
            "modeKey": "half_whole",
            "rootName": "A",
            "context": "Pour des arpèges d'accords complexes joués en sweep picking/legato à grande vitesse",
            "example": "Pud Wud"
        },
        {
            "modeKey": "lydian",
            "rootName": "D",
            "context": "Pour ses accords larges aux extensions ouvertes utilisés en rythmique — son harmonie verticale unique",
            "example": "Looking Glass"
        }
    ],
    "signatureMove": "Un legato absolu : il attaque à peine au médiator, tout se passe en hammer-on/pull-off. Ses accords sont théoriquement injouables (écartements de main extrêmes). Il refuse totalement les pentatoniques classiques — ses sources sont les gammes jazz les plus avancées.",
    "recommendedListening": [
        "Metal Fatigue",
        "Fred",
        "Pud Wud",
        "City Nights"
    ]
};
}),
"[project]/src/data/guitarists/scott-henderson.json.[json].cjs [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "slug": "scott-henderson",
    "name": "Scott Henderson",
    "shortName": "Henderson",
    "era": "Années 80 à aujourd'hui",
    "genres": [
        "Jazz-fusion",
        "Blues-fusion"
    ],
    "bio": "Guitariste américain (Tribal Tech), maître de la fusion jazz-blues. Il combine le phrasé sauvage et blues de Stevie Ray Vaughan avec l'esprit harmonique analytique du jazz moderne, créant un son à la fois viscéral et sophistiqué.",
    "signatureScales": [
        {
            "modeKey": "half_whole",
            "rootName": "E",
            "context": "Pour ses lignes jazz-fusion très tendues sur les accords 7#9 avant la résolution blues",
            "example": "Dolemite"
        },
        {
            "modeKey": "blues_minor",
            "rootName": "A",
            "context": "Jouée de manière brute avec forte distorsion et usage intensif du vibrato bras",
            "example": "Tore Down House"
        },
        {
            "modeKey": "lydian_dom",
            "rootName": "F",
            "context": "Pour un son fusion moderne sur des grooves funk — le #11 donne une couleur jazz-funk caractéristique",
            "example": "Face First"
        },
        {
            "modeKey": "altered",
            "rootName": "C",
            "context": "Pour naviguer les progressions d'accords complexes avec fluidité — le \"super locrien\" du jazz",
            "example": "Big Girl"
        }
    ],
    "signatureMove": "L'utilisation intensive de la tige de vibrato façon Jeff Beck pour imiter la voix humaine. Sa capacité à jouer très \"out\" (en dehors de la tonalité) avant de retomber parfaitement sur un plan blues terrien est sa signature : la tension extrême, puis la résolution viscérale.",
    "recommendedListening": [
        "Dolemite",
        "Tore Down House",
        "Face First",
        "Well to the Bone"
    ]
};
}),
"[project]/src/data/guitarists/jeff-beck.json.[json].cjs [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "slug": "jeff-beck",
    "name": "Jeff Beck",
    "shortName": "Beck",
    "era": "Années 60 à 2023",
    "genres": [
        "Rock",
        "Blues-rock",
        "Fusion"
    ],
    "bio": "Guitariste britannique, l'un des piliers du rock et de la fusion. Il a abandonné le médiator dans les années 80 pour jouer aux doigts, développant l'un des sons les plus expressifs et vocaux jamais entendus sur une guitare électrique.",
    "signatureScales": [
        {
            "modeKey": "mixolydian",
            "rootName": "C",
            "context": "Pour ses grooves rock/funk fusion avec un phrasé très syncopé — le B7 sous-jacent résonne naturellement",
            "example": "Freeway Jam"
        },
        {
            "modeKey": "pentatonic_minor",
            "rootName": "B",
            "context": "Utilisée avec des micro-bends au vibrato pour un expressivité vocale extrême — imite la voix humaine",
            "example": "Cause We've Ended as Lovers"
        },
        {
            "modeKey": "mixolydian_b6",
            "rootName": "A",
            "context": "Pour des atmosphères exotiques teintées de musique indienne ou orientale — le b6 apporte tout le mystère",
            "example": "Nadia"
        },
        {
            "modeKey": "dorian",
            "rootName": "G",
            "context": "Sur des rythmiques électro/techno pour des improvisations libres — couleur mineure jazz ouverte",
            "example": "Stratus (Live)"
        }
    ],
    "signatureMove": "Le trio magique : tige de vibrato + potard de volume + jeu aux doigts. Il sculpte chaque note en temps réel — swells, pitch bends, vibrato de tige millimétrés. Aucun guitariste au monde n'a développé un son aussi vocal et humain sans chanter.",
    "recommendedListening": [
        "Cause We've Ended as Lovers",
        "Freeway Jam",
        "Nadia",
        "Led Boots"
    ]
};
}),
"[project]/src/data/guitarists/george-benson.json.[json].cjs [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "slug": "george-benson",
    "name": "George Benson",
    "shortName": "Benson",
    "era": "Années 60 à aujourd'hui",
    "genres": [
        "Jazz",
        "Soul-jazz",
        "R&B"
    ],
    "bio": "Guitariste et chanteur américain, virtuose du jazz et du R&B. Possédant l'un des jeux en single-notes les plus rapides et précis du jazz, influencé par Charlie Christian et Wes Montgomery, il est aussi célèbre pour sa technique unique de scat à l'unisson avec sa guitare.",
    "signatureScales": [
        {
            "modeKey": "dorian",
            "rootName": "F",
            "context": "Pour des rafales de notes extrêmement rapides et articulées — son picking est d'une précision chirurgicale",
            "example": "Breezin'"
        },
        {
            "modeKey": "blues_minor",
            "rootName": "Bb",
            "context": "Pour ses plans soul-jazz très groove — la blue note crée l'accroche émotionnelle immédiate",
            "example": "On Broadway"
        },
        {
            "modeKey": "ionian",
            "rootName": "Eb",
            "context": "Sur les ii-V-I classiques pour un phrasé jazz pur — chromatismes bebop intégrés naturellement",
            "example": "Take Five"
        },
        {
            "modeKey": "mixolydian",
            "rootName": "G",
            "context": "Pour ses montées en accords et phrasés en octaves façon Wes Montgomery — le son soul-jazz par excellence",
            "example": "Give Me The Night"
        }
    ],
    "signatureMove": "Le scat à l'unisson : il chante exactement les notes qu'il joue à la guitare, avec un swing et une fluidité phénoménale. Cette technique crée une signature sonore immédiatement reconnaissable — deux instruments qui ne font qu'un.",
    "recommendedListening": [
        "Breezin'",
        "On Broadway",
        "Give Me The Night",
        "Affirmation"
    ]
};
}),
"[project]/src/data/guitarists/bb-king.json.[json].cjs [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "slug": "bb-king",
    "name": "B.B. King",
    "shortName": "B.B. King",
    "era": "Années 40 à 2015",
    "genres": [
        "Blues",
        "R&B"
    ],
    "bio": "Guitariste et chanteur américain, le \"Roi du Blues\". Il a défini le vocabulaire de la guitare solo dans le blues, influençant absolument tous les guitaristes de rock et de blues qui ont suivi. Son vibrato de la main gauche — ample, lent et immédiatement reconnaissable — est l'un des sons les plus célèbres de l'histoire de la musique.",
    "signatureScales": [
        {
            "modeKey": "pentatonic_minor",
            "rootName": "C",
            "context": "La \"B.B. Box\" — doigté spécifique autour de la corde de Si qui combine pentatoniques majeure et mineure",
            "example": "The Thrill is Gone"
        },
        {
            "modeKey": "pentatonic_major",
            "rootName": "F",
            "context": "Pour sonner doux, chaloupé et optimiste sur le degré I du blues — chaleur et humanité maximales",
            "example": "Sweet Little Angel"
        },
        {
            "modeKey": "blues_minor",
            "rootName": "Bb",
            "context": "Pour les moments de tension et les relances vocales — la blue note porte toute l'émotion",
            "example": "Every Day I Have the Blues"
        },
        {
            "modeKey": "mixolydian",
            "rootName": "G",
            "context": "Pour souligner le changement vers l'accord de dominante (V) avec douceur et swing",
            "example": "Lucille"
        }
    ],
    "signatureMove": "Ne jamais jouer une note sans la faire vibrer. Son vibrato de poignet ample (\"comme un papillon\" selon ses propres mots) et sa règle d'or — une seule note bien jouée vaut mieux que dix notes quelconques — font de lui le maître absolu de l'économie expressive.",
    "recommendedListening": [
        "The Thrill is Gone",
        "Sweet Little Angel",
        "Lucille",
        "Every Day I Have the Blues"
    ]
};
}),
"[project]/src/data/guitarists/index.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Index central des guitaristes.
 * Pour ajouter un guitariste : créer le JSON + l'importer ici.
 */ __turbopack_context__.s([
    "ALL_GUITARISTS",
    ()=>ALL_GUITARISTS,
    "getAllSlugs",
    ()=>getAllSlugs,
    "getGuitaristBySlug",
    ()=>getGuitaristBySlug
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$guitarists$2f$mike$2d$stern$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/guitarists/mike-stern.json.[json].cjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$guitarists$2f$pat$2d$metheny$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/guitarists/pat-metheny.json.[json].cjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$guitarists$2f$john$2d$scofield$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/guitarists/john-scofield.json.[json].cjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$guitarists$2f$robben$2d$ford$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/guitarists/robben-ford.json.[json].cjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$guitarists$2f$larry$2d$carlton$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/guitarists/larry-carlton.json.[json].cjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$guitarists$2f$jimi$2d$hendrix$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/guitarists/jimi-hendrix.json.[json].cjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$guitarists$2f$stevie$2d$ray$2d$vaughan$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/guitarists/stevie-ray-vaughan.json.[json].cjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$guitarists$2f$wes$2d$montgomery$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/guitarists/wes-montgomery.json.[json].cjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$guitarists$2f$allan$2d$holdsworth$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/guitarists/allan-holdsworth.json.[json].cjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$guitarists$2f$scott$2d$henderson$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/guitarists/scott-henderson.json.[json].cjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$guitarists$2f$jeff$2d$beck$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/guitarists/jeff-beck.json.[json].cjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$guitarists$2f$george$2d$benson$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/guitarists/george-benson.json.[json].cjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$guitarists$2f$bb$2d$king$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/guitarists/bb-king.json.[json].cjs [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
const ALL_GUITARISTS = [
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$guitarists$2f$mike$2d$stern$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$guitarists$2f$pat$2d$metheny$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$guitarists$2f$john$2d$scofield$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$guitarists$2f$robben$2d$ford$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$guitarists$2f$larry$2d$carlton$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$guitarists$2f$jimi$2d$hendrix$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$guitarists$2f$stevie$2d$ray$2d$vaughan$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$guitarists$2f$wes$2d$montgomery$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$guitarists$2f$allan$2d$holdsworth$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$guitarists$2f$scott$2d$henderson$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$guitarists$2f$jeff$2d$beck$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$guitarists$2f$george$2d$benson$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$guitarists$2f$bb$2d$king$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]
];
function getGuitaristBySlug(slug) {
    return ALL_GUITARISTS.find((g)=>g.slug === slug);
}
function getAllSlugs() {
    return ALL_GUITARISTS.map((g)=>g.slug);
}
}),
"[project]/src/components/StudioHero.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StudioHero",
    ()=>StudioHero
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const StudioHero = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call StudioHero() from the server but StudioHero is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/StudioHero.tsx <module evaluation>", "StudioHero");
}),
"[project]/src/components/StudioHero.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StudioHero",
    ()=>StudioHero
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const StudioHero = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call StudioHero() from the server but StudioHero is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/StudioHero.tsx", "StudioHero");
}),
"[project]/src/components/StudioHero.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$StudioHero$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/StudioHero.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$StudioHero$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/components/StudioHero.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$StudioHero$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/app/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$guitarists$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/guitarists/index.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$StudioHero$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/StudioHero.tsx [app-rsc] (ecmascript)");
;
;
;
;
function HomePage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$StudioHero$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StudioHero"], {}, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 9,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "guitaristes",
                className: "mx-auto max-w-7xl px-6 py-24",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: "mb-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mb-2 text-xs uppercase tracking-widest text-orange-500",
                                children: "Les Guitaristes"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 14,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-3xl font-medium tracking-tight",
                                children: "Explore leurs univers"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 15,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-3 max-w-xl text-neutral-400",
                                children: "Sélectionne un guitariste pour découvrir ses gammes signature et les explorer sur le manche interactif."
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 16,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 13,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$guitarists$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ALL_GUITARISTS"].map((guitarist)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                href: `/guitarist/${guitarist.slug}`,
                                className: "group rounded-xl border border-neutral-800 bg-neutral-900 p-6 transition-all duration-300 hover:border-orange-500/50 hover:bg-neutral-800/80",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-3 flex items-baseline justify-between gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-lg font-medium text-neutral-100 transition-colors group-hover:text-orange-400",
                                                children: guitarist.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 30,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "shrink-0 text-xs text-neutral-600",
                                                children: guitarist.era
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 33,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 29,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-3 flex flex-wrap gap-1.5",
                                        children: guitarist.genres.map((g)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "rounded-full bg-orange-950/50 px-2.5 py-0.5 text-xs text-orange-400/70",
                                                children: g
                                            }, g, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 37,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 35,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm leading-relaxed text-neutral-400",
                                        children: guitarist.bio
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 45,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-4 text-xs text-orange-500 opacity-0 transition-opacity group-hover:opacity-100",
                                        children: "Explorer →"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 46,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, guitarist.slug, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 24,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__12sy~q8._.js.map
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
;
;
;
const ALL_GUITARISTS = [
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$guitarists$2f$mike$2d$stern$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$guitarists$2f$pat$2d$metheny$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$guitarists$2f$john$2d$scofield$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]
];
function getGuitaristBySlug(slug) {
    return ALL_GUITARISTS.find((g)=>g.slug === slug);
}
function getAllSlugs() {
    return ALL_GUITARISTS.map((g)=>g.slug);
}
}),
"[project]/src/lib/music/scales.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Définitions des modes et gammes.
 * Source unique de vérité pour les intervalles.
 */ __turbopack_context__.s([
    "MODES",
    ()=>MODES,
    "MODES_BY_KEY",
    ()=>MODES_BY_KEY,
    "getMode",
    ()=>getMode
]);
const MODES = [
    {
        key: 'ionian',
        name: 'Ionien',
        intervals: [
            2,
            2,
            1,
            2,
            2,
            2,
            1
        ],
        chord: 'maj7',
        desc: 'Le majeur classique, sage'
    },
    {
        key: 'dorian',
        name: 'Dorien',
        intervals: [
            2,
            1,
            2,
            2,
            2,
            1,
            2
        ],
        chord: 'm7',
        desc: 'Mineur jazz, ouvert'
    },
    {
        key: 'phrygian',
        name: 'Phrygien',
        intervals: [
            1,
            2,
            2,
            2,
            1,
            2,
            2
        ],
        chord: 'm7',
        desc: 'Sombre, couleur espagnole'
    },
    {
        key: 'lydian',
        name: 'Lydien',
        intervals: [
            2,
            2,
            2,
            1,
            2,
            2,
            1
        ],
        chord: 'maj7#11',
        desc: 'Lumineux, flottant'
    },
    {
        key: 'mixolydian',
        name: 'Mixolydien',
        intervals: [
            2,
            2,
            1,
            2,
            2,
            1,
            2
        ],
        chord: '7',
        desc: 'Blues, dominant'
    },
    {
        key: 'aeolian',
        name: 'Aeolien',
        intervals: [
            2,
            1,
            2,
            2,
            1,
            2,
            2
        ],
        chord: 'm7',
        desc: 'Mineur naturel'
    },
    {
        key: 'locrian',
        name: 'Locrien',
        intervals: [
            1,
            2,
            2,
            1,
            2,
            2,
            2
        ],
        chord: 'm7b5',
        desc: 'Demi-diminué, instable'
    },
    {
        key: 'altered',
        name: 'Altered',
        intervals: [
            1,
            2,
            1,
            2,
            2,
            2,
            2
        ],
        chord: '7alt',
        desc: 'Tension max, outside'
    },
    {
        key: 'lydian_dom',
        name: 'Lydien dominante',
        intervals: [
            2,
            2,
            2,
            1,
            2,
            1,
            2
        ],
        chord: '7#11',
        desc: 'Brillant, #4 + b7'
    },
    {
        key: 'half_whole',
        name: 'Diminué demi-ton/ton',
        intervals: [
            1,
            2,
            1,
            2,
            1,
            2,
            1,
            2
        ],
        chord: '7b9',
        desc: '8 notes, très chromatique'
    },
    {
        key: 'pentatonic_minor',
        name: 'Pentatonique mineure',
        intervals: [
            3,
            2,
            2,
            3,
            2
        ],
        chord: 'm7',
        desc: 'La base du blues/rock'
    },
    {
        key: 'pentatonic_major',
        name: 'Pentatonique majeure',
        intervals: [
            2,
            2,
            3,
            2,
            3
        ],
        chord: 'maj7',
        desc: 'Sons country/folk'
    },
    {
        key: 'blues_minor',
        name: 'Blues mineure',
        intervals: [
            3,
            2,
            1,
            1,
            3,
            2
        ],
        chord: 'm7',
        desc: 'Pentatonique + blue note'
    },
    {
        key: 'blues_major',
        name: 'Blues majeure',
        intervals: [
            2,
            1,
            1,
            3,
            2,
            3
        ],
        chord: '7',
        desc: 'Le son blues classique'
    },
    // --- Mineur mélodique et ses modes ---
    {
        key: 'melodic_minor',
        name: 'Mineur mélodique',
        intervals: [
            2,
            1,
            2,
            2,
            2,
            2,
            1
        ],
        chord: 'mMaj7',
        desc: 'Jazz minor — base de l\'impro moderne'
    },
    {
        key: 'lydian_aug',
        name: 'Lydien augmenté',
        intervals: [
            2,
            2,
            2,
            2,
            1,
            2,
            1
        ],
        chord: 'maj7#5',
        desc: 'Mode 3 du mél. mineur, très flottant'
    },
    {
        key: 'mixolydian_b6',
        name: 'Mixolydien b6',
        intervals: [
            2,
            2,
            1,
            2,
            1,
            2,
            2
        ],
        chord: '7b6',
        desc: 'Mode 5 du mél. mineur'
    },
    {
        key: 'locrian_2',
        name: 'Locrien #2',
        intervals: [
            2,
            1,
            2,
            1,
            2,
            2,
            2
        ],
        chord: 'm7b5',
        desc: 'Demi-diminué jazz — sur les m7b5'
    },
    // --- Mineur harmonique et dérivés ---
    {
        key: 'harmonic_minor',
        name: 'Mineur harmonique',
        intervals: [
            2,
            1,
            2,
            2,
            1,
            3,
            1
        ],
        chord: 'mMaj7',
        desc: 'Seconde augmentée caractéristique'
    },
    {
        key: 'phrygian_dom',
        name: 'Phrygien dominant',
        intervals: [
            1,
            3,
            1,
            2,
            1,
            2,
            2
        ],
        chord: '7b9',
        desc: 'Mode 5 du harm. mineur — son flamenco/jazz'
    },
    // --- Gammes symétriques ---
    {
        key: 'whole_tone',
        name: 'Gamme par tons',
        intervals: [
            2,
            2,
            2,
            2,
            2,
            2
        ],
        chord: '7#5',
        desc: '6 notes, ambiguïté tonale totale'
    },
    {
        key: 'whole_half',
        name: 'Diminué ton/demi-ton',
        intervals: [
            2,
            1,
            2,
            1,
            2,
            1,
            2,
            1
        ],
        chord: 'dim7',
        desc: '8 notes — sur les accords diminués'
    },
    // --- Bebop ---
    {
        key: 'bebop_dom',
        name: 'Bebop dominant',
        intervals: [
            2,
            2,
            1,
            2,
            2,
            1,
            1,
            2
        ],
        chord: '7',
        desc: '8 notes — le son bebop'
    }
];
const MODES_BY_KEY = new Map(MODES.map((m)=>[
        m.key,
        m
    ]));
function getMode(key) {
    const mode = MODES_BY_KEY.get(key);
    if (!mode) throw new Error(`Mode inconnu: ${key}`);
    return mode;
}
}),
"[project]/src/lib/music/colors.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Mapping mode → palette de couleurs.
 * Les couleurs sont choisies pour évoquer le caractère du mode.
 */ __turbopack_context__.s([
    "MODE_COLORS",
    ()=>MODE_COLORS,
    "getModeColors",
    ()=>getModeColors
]);
const MODE_COLORS = {
    ionian: {
        bg: '#E6F1FB',
        text: '#0C447C',
        darkBg: '#0C447C',
        darkText: '#B5D4F4'
    },
    dorian: {
        bg: '#E1F5EE',
        text: '#085041',
        darkBg: '#0F6E56',
        darkText: '#9FE1CB'
    },
    phrygian: {
        bg: '#FBEAF0',
        text: '#72243E',
        darkBg: '#72243E',
        darkText: '#F4C0D1'
    },
    lydian: {
        bg: '#EEEDFE',
        text: '#3C3489',
        darkBg: '#3C3489',
        darkText: '#CECBF6'
    },
    mixolydian: {
        bg: '#FAEEDA',
        text: '#633806',
        darkBg: '#633806',
        darkText: '#FAC775'
    },
    aeolian: {
        bg: '#F1EFE8',
        text: '#444441',
        darkBg: '#444441',
        darkText: '#D3D1C7'
    },
    locrian: {
        bg: '#FCEBEB',
        text: '#791F1F',
        darkBg: '#791F1F',
        darkText: '#F7C1C1'
    },
    altered: {
        bg: '#FAECE7',
        text: '#712B13',
        darkBg: '#712B13',
        darkText: '#F5C4B3'
    },
    lydian_dom: {
        bg: '#EEEDFE',
        text: '#26215C',
        darkBg: '#26215C',
        darkText: '#AFA9EC'
    },
    half_whole: {
        bg: '#FAEEDA',
        text: '#412402',
        darkBg: '#412402',
        darkText: '#FAC775'
    },
    pentatonic_minor: {
        bg: '#E1F5EE',
        text: '#04342C',
        darkBg: '#04342C',
        darkText: '#9FE1CB'
    },
    pentatonic_major: {
        bg: '#FAEEDA',
        text: '#854F0B',
        darkBg: '#854F0B',
        darkText: '#FAC775'
    },
    blues_minor: {
        bg: '#FCEBEB',
        text: '#501313',
        darkBg: '#501313',
        darkText: '#F7C1C1'
    },
    blues_major: {
        bg: '#FAECE7',
        text: '#4A1B0C',
        darkBg: '#4A1B0C',
        darkText: '#F5C4B3'
    },
    // Mineur mélodique et modes
    melodic_minor: {
        bg: '#E4F3EC',
        text: '#0E5233',
        darkBg: '#0E5233',
        darkText: '#8FD9B5'
    },
    lydian_aug: {
        bg: '#F0EFFE',
        text: '#2D1B8B',
        darkBg: '#2D1B8B',
        darkText: '#C3BDFA'
    },
    mixolydian_b6: {
        bg: '#FEF3E2',
        text: '#7A4500',
        darkBg: '#7A4500',
        darkText: '#FAD591'
    },
    locrian_2: {
        bg: '#FDF0F0',
        text: '#6B1A1A',
        darkBg: '#6B1A1A',
        darkText: '#F5AAAA'
    },
    // Mineur harmonique
    harmonic_minor: {
        bg: '#EEF1FB',
        text: '#1A2F7A',
        darkBg: '#1A2F7A',
        darkText: '#A8BAEA'
    },
    phrygian_dom: {
        bg: '#FDE8F5',
        text: '#6B0F54',
        darkBg: '#6B0F54',
        darkText: '#F0A8D8'
    },
    // Symétriques
    whole_tone: {
        bg: '#F5FBE4',
        text: '#2E5C05',
        darkBg: '#2E5C05',
        darkText: '#C3E880'
    },
    whole_half: {
        bg: '#F7EDFC',
        text: '#531A72',
        darkBg: '#531A72',
        darkText: '#DCB0F5'
    },
    // Bebop
    bebop_dom: {
        bg: '#FFF8E1',
        text: '#5C3D00',
        darkBg: '#5C3D00',
        darkText: '#FFD880'
    }
};
function getModeColors(modeKey, isDark = false) {
    const c = MODE_COLORS[modeKey];
    return isDark ? {
        bg: c.darkBg,
        text: c.darkText
    } : {
        bg: c.bg,
        text: c.text
    };
}
}),
"[project]/src/components/ScaleDetectorSection.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScaleDetectorSection",
    ()=>ScaleDetectorSection
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const ScaleDetectorSection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ScaleDetectorSection() from the server but ScaleDetectorSection is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ScaleDetectorSection.tsx <module evaluation>", "ScaleDetectorSection");
}),
"[project]/src/components/ScaleDetectorSection.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScaleDetectorSection",
    ()=>ScaleDetectorSection
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const ScaleDetectorSection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ScaleDetectorSection() from the server but ScaleDetectorSection is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ScaleDetectorSection.tsx", "ScaleDetectorSection");
}),
"[project]/src/components/ScaleDetectorSection.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ScaleDetectorSection$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/ScaleDetectorSection.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ScaleDetectorSection$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/components/ScaleDetectorSection.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ScaleDetectorSection$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/app/guitarist/[slug]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GuitaristPage,
    "generateStaticParams",
    ()=>generateStaticParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$guitarists$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/guitarists/index.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$music$2f$scales$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/music/scales.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$music$2f$colors$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/music/colors.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ScaleDetectorSection$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ScaleDetectorSection.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
function generateStaticParams() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$guitarists$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAllSlugs"])().map((slug)=>({
            slug
        }));
}
async function GuitaristPage({ params }) {
    const { slug } = await params;
    const guitarist = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$guitarists$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getGuitaristBySlug"])(slug);
    if (!guitarist) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "mx-auto max-w-7xl px-6 py-12",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                href: "/",
                className: "mb-8 inline-block text-sm text-neutral-500 transition-colors hover:text-orange-400",
                children: "← Retour"
            }, void 0, false, {
                fileName: "[project]/src/app/guitarist/[slug]/page.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "mb-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "mb-2 text-4xl font-medium tracking-tight",
                        children: guitarist.name
                    }, void 0, false, {
                        fileName: "[project]/src/app/guitarist/[slug]/page.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mb-4 text-sm text-neutral-500",
                        children: guitarist.era
                    }, void 0, false, {
                        fileName: "[project]/src/app/guitarist/[slug]/page.tsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "max-w-2xl text-base text-neutral-300",
                        children: guitarist.bio
                    }, void 0, false, {
                        fileName: "[project]/src/app/guitarist/[slug]/page.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/guitarist/[slug]/page.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "mb-10 rounded-xl border-l-4 border-orange-500 bg-neutral-900 p-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mb-1 text-xs uppercase tracking-wider text-neutral-500",
                        children: "Sa signature"
                    }, void 0, false, {
                        fileName: "[project]/src/app/guitarist/[slug]/page.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-base",
                        children: guitarist.signatureMove
                    }, void 0, false, {
                        fileName: "[project]/src/app/guitarist/[slug]/page.tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/guitarist/[slug]/page.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "mb-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "mb-4 text-xs uppercase tracking-wider text-neutral-500",
                        children: "Ses gammes signatures"
                    }, void 0, false, {
                        fileName: "[project]/src/app/guitarist/[slug]/page.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3",
                        children: guitarist.signatureScales.map((scale, idx)=>{
                            const mode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$music$2f$scales$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getMode"])(scale.modeKey);
                            const colors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$music$2f$colors$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getModeColors"])(scale.modeKey, false);
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-xl border border-neutral-800 bg-neutral-950 p-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-2 flex flex-wrap items-baseline justify-between gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-base font-medium",
                                                children: [
                                                    scale.rootName,
                                                    " ",
                                                    mode.name
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/guitarist/[slug]/page.tsx",
                                                lineNumber: 67,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "rounded px-2 py-0.5 font-mono text-xs font-medium",
                                                style: {
                                                    background: colors.bg,
                                                    color: colors.text
                                                },
                                                children: [
                                                    scale.rootName,
                                                    mode.chord
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/guitarist/[slug]/page.tsx",
                                                lineNumber: 70,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/guitarist/[slug]/page.tsx",
                                        lineNumber: 66,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mb-1 text-sm text-neutral-300",
                                        children: scale.context
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/guitarist/[slug]/page.tsx",
                                        lineNumber: 78,
                                        columnNumber: 17
                                    }, this),
                                    scale.example && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-neutral-500",
                                        children: [
                                            "Ex. : ",
                                            scale.example
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/guitarist/[slug]/page.tsx",
                                        lineNumber: 82,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, idx, true, {
                                fileName: "[project]/src/app/guitarist/[slug]/page.tsx",
                                lineNumber: 62,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/app/guitarist/[slug]/page.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/guitarist/[slug]/page.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            guitarist.recommendedListening && guitarist.recommendedListening.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "mb-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "mb-3 text-xs uppercase tracking-wider text-neutral-500",
                        children: "À écouter"
                    }, void 0, false, {
                        fileName: "[project]/src/app/guitarist/[slug]/page.tsx",
                        lineNumber: 96,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-2",
                        children: guitarist.recommendedListening.map((title)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "rounded-full border border-neutral-800 px-3 py-1 text-sm text-neutral-300",
                                children: title
                            }, title, false, {
                                fileName: "[project]/src/app/guitarist/[slug]/page.tsx",
                                lineNumber: 101,
                                columnNumber: 17
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/guitarist/[slug]/page.tsx",
                        lineNumber: 99,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/guitarist/[slug]/page.tsx",
                lineNumber: 95,
                columnNumber: 11
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "mb-1 text-xs uppercase tracking-wider text-neutral-500",
                        children: "Explore sur le manche"
                    }, void 0, false, {
                        fileName: "[project]/src/app/guitarist/[slug]/page.tsx",
                        lineNumber: 114,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mb-6 text-sm text-neutral-500",
                        children: "Initialisé sur sa première gamme signature. Change tonique et mode librement."
                    }, void 0, false, {
                        fileName: "[project]/src/app/guitarist/[slug]/page.tsx",
                        lineNumber: 117,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ScaleDetectorSection$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ScaleDetectorSection"], {
                        initialScale: guitarist.signatureScales[0]
                    }, void 0, false, {
                        fileName: "[project]/src/app/guitarist/[slug]/page.tsx",
                        lineNumber: 121,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/guitarist/[slug]/page.tsx",
                lineNumber: 113,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/guitarist/[slug]/page.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/guitarist/[slug]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/guitarist/[slug]/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0r-sqke._.js.map
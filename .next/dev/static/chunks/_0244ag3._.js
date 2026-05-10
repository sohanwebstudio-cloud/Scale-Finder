(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/music/colors.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Fretboard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Fretboard",
    ()=>Fretboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$music$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/music/colors.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
// Standard tuning — high to low string
const STRINGS = [
    {
        name: 'E',
        semi: 4
    },
    {
        name: 'B',
        semi: 11
    },
    {
        name: 'G',
        semi: 7
    },
    {
        name: 'D',
        semi: 2
    },
    {
        name: 'A',
        semi: 9
    },
    {
        name: 'E',
        semi: 4
    }
];
const SINGLE_INLAY_FRETS = [
    3,
    5,
    7,
    9,
    15
];
const DOUBLE_INLAY_FRETS = [
    12
];
function Fretboard({ notes, rootIdx, modeKey, numFrets = 15 }) {
    _s();
    const [isDark, setIsDark] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Fretboard.useEffect": ()=>{
            const mq = window.matchMedia('(prefers-color-scheme: dark)');
            setIsDark(mq.matches);
            const handler = {
                "Fretboard.useEffect.handler": (e)=>setIsDark(e.matches)
            }["Fretboard.useEffect.handler"];
            mq.addEventListener('change', handler);
            return ({
                "Fretboard.useEffect": ()=>mq.removeEventListener('change', handler)
            })["Fretboard.useEffect"];
        }
    }["Fretboard.useEffect"], []);
    const colors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$music$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getModeColors"])(modeKey, isDark);
    const semiMap = new Map();
    notes.forEach((n)=>semiMap.set(n.semi, n.name));
    // Dimensions — wider viewBox, taller strings, more room for labels
    const W = 920;
    const labelColW = 24; // width reserved for string name labels
    const nutX = labelColW + 20; // nut position (start of fretboard)
    const rightPad = 14;
    const fretAreaWidth = W - nutX - rightPad;
    const fretWidth = fretAreaWidth / numFrets;
    const stringSpacing = 34;
    const topPad = 22;
    const numStrings = STRINGS.length;
    const fretboardHeight = (numStrings - 1) * stringSpacing;
    const H = topPad + fretboardHeight + 30;
    const noteR = 12;
    // Open-string note x: between the label column and the nut, comfortably spaced
    const openNoteX = (labelColW + nutX) / 2; // ≈ 34px, label ends ~20px
    const inkPrimary = '#E8E6DC';
    const inkMuted = '#5A5957';
    const woodFill = '#1C1B18';
    const fretColor = '#3A3936';
    const stringColor = '#4A4947';
    const dotColor = '#2E2D2A';
    const midY = topPad + fretboardHeight / 2;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "100%",
        viewBox: `0 0 ${W} ${H}`,
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                children: "Manche de guitare avec les notes du mode"
            }, void 0, false, {
                fileName: "[project]/src/components/Fretboard.tsx",
                lineNumber: 75,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: nutX,
                y: topPad - 8,
                width: fretAreaWidth,
                height: fretboardHeight + 16,
                fill: woodFill,
                stroke: fretColor,
                strokeWidth: "0.5",
                rx: "2"
            }, void 0, false, {
                fileName: "[project]/src/components/Fretboard.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: nutX,
                y1: topPad - 8,
                x2: nutX,
                y2: topPad + fretboardHeight + 8,
                stroke: inkPrimary,
                strokeWidth: "3"
            }, void 0, false, {
                fileName: "[project]/src/components/Fretboard.tsx",
                lineNumber: 90,
                columnNumber: 7
            }, this),
            SINGLE_INLAY_FRETS.map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: nutX + (f - 0.5) * fretWidth,
                    cy: midY,
                    r: "5",
                    fill: dotColor
                }, `inlay-${f}`, false, {
                    fileName: "[project]/src/components/Fretboard.tsx",
                    lineNumber: 101,
                    columnNumber: 9
                }, this)),
            DOUBLE_INLAY_FRETS.flatMap((f)=>[
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: nutX + (f - 0.5) * fretWidth,
                        cy: topPad + stringSpacing * 1.5,
                        r: "5",
                        fill: dotColor
                    }, `dbl-t-${f}`, false, {
                        fileName: "[project]/src/components/Fretboard.tsx",
                        lineNumber: 112,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: nutX + (f - 0.5) * fretWidth,
                        cy: topPad + stringSpacing * 3.5,
                        r: "5",
                        fill: dotColor
                    }, `dbl-b-${f}`, false, {
                        fileName: "[project]/src/components/Fretboard.tsx",
                        lineNumber: 113,
                        columnNumber: 9
                    }, this)
                ]),
            Array.from({
                length: numFrets
            }, (_, i)=>i + 1).map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: nutX + f * fretWidth,
                    y1: topPad - 8,
                    x2: nutX + f * fretWidth,
                    y2: topPad + fretboardHeight + 8,
                    stroke: fretColor,
                    strokeWidth: "0.9"
                }, `fret-${f}`, false, {
                    fileName: "[project]/src/components/Fretboard.tsx",
                    lineNumber: 118,
                    columnNumber: 9
                }, this)),
            STRINGS.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: nutX,
                    y1: topPad + i * stringSpacing,
                    x2: W - rightPad,
                    y2: topPad + i * stringSpacing,
                    stroke: stringColor,
                    strokeWidth: (0.7 + i * 0.22).toFixed(2)
                }, `string-${i}`, false, {
                    fileName: "[project]/src/components/Fretboard.tsx",
                    lineNumber: 131,
                    columnNumber: 9
                }, this)),
            [
                3,
                5,
                7,
                9,
                12,
                15
            ].map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: nutX + (f - 0.5) * fretWidth,
                    y: topPad + fretboardHeight + 24,
                    textAnchor: "middle",
                    fontSize: "11",
                    fill: inkMuted,
                    fontFamily: "var(--font-mono)",
                    children: f
                }, `num-${f}`, false, {
                    fileName: "[project]/src/components/Fretboard.tsx",
                    lineNumber: 144,
                    columnNumber: 9
                }, this)),
            STRINGS.map((_s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: labelColW / 2,
                    y: topPad + i * stringSpacing + 0.5,
                    textAnchor: "middle",
                    dominantBaseline: "central",
                    fontSize: "12",
                    fontWeight: "600",
                    fill: inkMuted,
                    fontFamily: "var(--font-mono)",
                    children: STRINGS[i].name
                }, `label-${i}`, false, {
                    fileName: "[project]/src/components/Fretboard.tsx",
                    lineNumber: 159,
                    columnNumber: 9
                }, this)),
            STRINGS.flatMap((s, stringIdx)=>Array.from({
                    length: numFrets + 1
                }, (_, f)=>{
                    const semi = (s.semi + f) % 12;
                    if (!semiMap.has(semi)) return null;
                    const noteName = semiMap.get(semi);
                    const isRoot = semi === rootIdx;
                    // Open strings go in the dedicated column; fretted notes go between frets
                    const cx = f === 0 ? openNoteX : nutX + (f - 0.5) * fretWidth;
                    const cy = topPad + stringIdx * stringSpacing;
                    const fillColor = isRoot ? colors.text : colors.bg;
                    const textColor = isRoot ? colors.bg : colors.text;
                    const fontSize = noteName.length > 2 ? 8 : 10;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: cx,
                                cy: cy,
                                r: noteR,
                                fill: fillColor,
                                stroke: colors.text,
                                strokeWidth: isRoot ? 1.8 : 0.9
                            }, void 0, false, {
                                fileName: "[project]/src/components/Fretboard.tsx",
                                lineNumber: 192,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                x: cx,
                                y: cy + 0.5,
                                textAnchor: "middle",
                                dominantBaseline: "central",
                                fontSize: fontSize,
                                fill: textColor,
                                fontFamily: "var(--font-mono)",
                                fontWeight: "600",
                                children: noteName
                            }, void 0, false, {
                                fileName: "[project]/src/components/Fretboard.tsx",
                                lineNumber: 200,
                                columnNumber: 15
                            }, this)
                        ]
                    }, `note-${stringIdx}-${f}`, true, {
                        fileName: "[project]/src/components/Fretboard.tsx",
                        lineNumber: 191,
                        columnNumber: 13
                    }, this);
                }))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Fretboard.tsx",
        lineNumber: 69,
        columnNumber: 5
    }, this);
}
_s(Fretboard, "76OfTKswtlYfcyBWk5XLQJOYEek=");
_c = Fretboard;
var _c;
__turbopack_context__.k.register(_c, "Fretboard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/music/notes.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Constantes et utilitaires sur les notes.
 * Logique pure, sans dépendance UI.
 */ __turbopack_context__.s([
    "KEY_ROOTS",
    ()=>KEY_ROOTS,
    "LETTERS",
    ()=>LETTERS,
    "NATURAL_SEMI",
    ()=>NATURAL_SEMI,
    "findKeyByName",
    ()=>findKeyByName,
    "noteNameToSemi",
    ()=>noteNameToSemi
]);
const LETTERS = [
    'C',
    'D',
    'E',
    'F',
    'G',
    'A',
    'B'
];
const NATURAL_SEMI = {
    C: 0,
    D: 2,
    E: 4,
    F: 5,
    G: 7,
    A: 9,
    B: 11
};
const KEY_ROOTS = [
    {
        idx: 0,
        name: 'C'
    },
    {
        idx: 1,
        name: 'Db'
    },
    {
        idx: 2,
        name: 'D'
    },
    {
        idx: 3,
        name: 'Eb'
    },
    {
        idx: 4,
        name: 'E'
    },
    {
        idx: 5,
        name: 'F'
    },
    {
        idx: 6,
        name: 'F#'
    },
    {
        idx: 7,
        name: 'G'
    },
    {
        idx: 8,
        name: 'Ab'
    },
    {
        idx: 9,
        name: 'A'
    },
    {
        idx: 10,
        name: 'Bb'
    },
    {
        idx: 11,
        name: 'B'
    }
];
function findKeyByName(name) {
    return KEY_ROOTS.find((k)=>k.name === name);
}
function noteNameToSemi(name) {
    const letter = name.charAt(0).toUpperCase();
    const accidentals = name.slice(1);
    let semi = NATURAL_SEMI[letter];
    if (semi === undefined) {
        throw new Error(`Lettre invalide: ${letter}`);
    }
    for (const acc of accidentals){
        if (acc === '#') semi += 1;
        else if (acc === 'b') semi -= 1;
    }
    return (semi % 12 + 12) % 12;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/music/scales.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/music/spelling.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Épelle une gamme avec la convention musicale correcte :
 * une lettre par degré, accidents (#/b) ajustés pour matcher le pitch.
 *
 * Exemple : Db dorien = Db Eb Fb Gb Ab Bb Cb (et pas Db Eb E Gb Ab Bb B)
 */ __turbopack_context__.s([
    "spellScale",
    ()=>spellScale
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$music$2f$notes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/music/notes.ts [app-client] (ecmascript)");
;
function spellScale(rootIdx, intervals, rootName) {
    const rootLetter = rootName.charAt(0);
    const startLetterIdx = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$music$2f$notes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LETTERS"].indexOf(rootLetter);
    if (startLetterIdx === -1) {
        throw new Error(`Lettre racine invalide: ${rootLetter}`);
    }
    const result = [
        {
            name: rootName,
            semi: rootIdx
        }
    ];
    let semi = rootIdx;
    // On boucle sur intervals.length - 1 pour rester sur l'octave
    // (le dernier intervalle ramènerait à la tonique)
    for(let i = 0; i < intervals.length - 1; i++){
        semi = (semi + intervals[i]) % 12;
        const nextLetter = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$music$2f$notes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LETTERS"][(startLetterIdx + i + 1) % 7];
        const naturalSemi = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$music$2f$notes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NATURAL_SEMI"][nextLetter];
        let diff = semi - naturalSemi;
        while(diff > 6)diff -= 12;
        while(diff < -6)diff += 12;
        let accidental = '';
        if (diff === 1) accidental = '#';
        else if (diff === 2) accidental = '##';
        else if (diff === -1) accidental = 'b';
        else if (diff === -2) accidental = 'bb';
        result.push({
            name: nextLetter + accidental,
            semi
        });
    }
    return result;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ScaleExplorer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScaleExplorer",
    ()=>ScaleExplorer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Fretboard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Fretboard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$music$2f$notes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/music/notes.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$music$2f$scales$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/music/scales.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$music$2f$spelling$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/music/spelling.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$music$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/music/colors.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
function ScaleExplorer({ initialScale }) {
    _s();
    const initialKeyIdx = initialScale ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$music$2f$notes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KEY_ROOTS"].find((k)=>k.name === initialScale.rootName)?.idx ?? 9 : 9; // A par défaut
    const initialModeKey = initialScale?.modeKey ?? 'mixolydian';
    const [keyIdx, setKeyIdx] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialKeyIdx);
    const [modeKey, setModeKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialModeKey);
    const root = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$music$2f$notes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KEY_ROOTS"][keyIdx];
    const mode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$music$2f$scales$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMode"])(modeKey);
    const notes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$music$2f$spelling$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spellScale"])(root.idx, mode.intervals, root.name);
    // Couleur statique pour le rendu serveur initial
    // (le Fretboard se réajuste côté client via useEffect)
    const colors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$music$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getModeColors"])(modeKey, false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mb-2 text-xs uppercase tracking-wider text-neutral-500",
                        children: "Tonique"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ScaleExplorer.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-1",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$music$2f$notes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KEY_ROOTS"].map((k, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setKeyIdx(i),
                                className: `min-w-[44px] rounded-md border px-3 py-1.5 text-sm transition-colors ${i === keyIdx ? 'border-orange-500 bg-orange-500 font-medium text-neutral-950' : 'border-neutral-800 bg-transparent text-neutral-100 hover:bg-neutral-800'}`,
                                children: k.name
                            }, k.idx, false, {
                                fileName: "[project]/src/components/ScaleExplorer.tsx",
                                lineNumber: 46,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/ScaleExplorer.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ScaleExplorer.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mb-2 text-xs uppercase tracking-wider text-neutral-500",
                        children: "Mode"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ScaleExplorer.tsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-1",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$music$2f$scales$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MODES"].map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setModeKey(m.key),
                                className: `rounded-md border px-3 py-1.5 text-sm transition-colors ${m.key === modeKey ? 'border-orange-500 bg-orange-500 font-medium text-neutral-950' : 'border-neutral-800 bg-transparent text-neutral-100 hover:bg-neutral-800'}`,
                                children: m.name
                            }, m.key, false, {
                                fileName: "[project]/src/components/ScaleExplorer.tsx",
                                lineNumber: 69,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/ScaleExplorer.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ScaleExplorer.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center justify-between gap-4 rounded-xl bg-neutral-900 px-5 py-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-base font-medium",
                                children: [
                                    root.name,
                                    " ",
                                    mode.name
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ScaleExplorer.tsx",
                                lineNumber: 88,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-neutral-500",
                                children: mode.desc
                            }, void 0, false, {
                                fileName: "[project]/src/components/ScaleExplorer.tsx",
                                lineNumber: 91,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ScaleExplorer.tsx",
                        lineNumber: 87,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "rounded-md px-2.5 py-1 font-mono text-xs font-medium",
                        style: {
                            background: colors.bg,
                            color: colors.text
                        },
                        children: [
                            root.name,
                            mode.chord
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ScaleExplorer.tsx",
                        lineNumber: 93,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ScaleExplorer.tsx",
                lineNumber: 86,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap gap-1",
                children: notes.map((n, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "inline-flex h-7 min-w-[36px] items-center justify-center rounded px-2 font-mono text-xs font-medium",
                        style: {
                            background: colors.bg,
                            color: colors.text,
                            outline: i === 0 ? `1.5px solid ${colors.text}` : 'none',
                            outlineOffset: '-1.5px'
                        },
                        children: n.name
                    }, `${n.name}-${i}`, false, {
                        fileName: "[project]/src/components/ScaleExplorer.tsx",
                        lineNumber: 105,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/ScaleExplorer.tsx",
                lineNumber: 103,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Fretboard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fretboard"], {
                notes: notes,
                rootIdx: root.idx,
                modeKey: modeKey
            }, void 0, false, {
                fileName: "[project]/src/components/ScaleExplorer.tsx",
                lineNumber: 121,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ScaleExplorer.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_s(ScaleExplorer, "KDq4+pXIsCxXdzvZgocdynA9Oto=");
_c = ScaleExplorer;
var _c;
__turbopack_context__.k.register(_c, "ScaleExplorer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/music/pitch.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "detectPitch",
    ()=>detectPitch,
    "freqToNoteName",
    ()=>freqToNoteName,
    "freqToSemi",
    ()=>freqToSemi
]);
const NOTE_NAMES = [
    'C',
    'C#',
    'D',
    'D#',
    'E',
    'F',
    'F#',
    'G',
    'G#',
    'A',
    'A#',
    'B'
];
function freqToSemi(freq) {
    const midi = 69 + 12 * Math.log2(freq / 440);
    return (Math.round(midi) % 12 + 12) % 12;
}
function freqToNoteName(freq) {
    return NOTE_NAMES[freqToSemi(freq)];
}
function detectPitch(buffer, sampleRate) {
    const n = buffer.length;
    const halfN = n >> 1;
    // Seuil d'énergie : on n'analyse pas le silence
    let energy = 0;
    for(let i = 0; i < n; i++)energy += buffer[i] * buffer[i];
    if (energy / n < 0.0001) return -1;
    const minLag = Math.ceil(sampleRate / 2000);
    const maxLag = Math.min(Math.floor(sampleRate / 60), halfN - 1);
    let bestVal = -Infinity;
    let bestLag = -1;
    for(let lag = minLag; lag <= maxLag; lag++){
        let sum = 0;
        for(let i = 0; i < halfN; i++){
            sum += buffer[i] * buffer[i + lag];
        }
        if (sum > bestVal) {
            bestVal = sum;
            bestLag = lag;
        }
    }
    if (bestLag < 0) return -1;
    // Confiance : le peak doit valoir ≥40% de l'énergie zero-lag
    let zeroLag = 0;
    for(let i = 0; i < halfN; i++)zeroLag += buffer[i] * buffer[i];
    if (zeroLag === 0 || bestVal / zeroLag < 0.4) return -1;
    return sampleRate / bestLag;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/music/scale-match.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "matchScales",
    ()=>matchScales
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$music$2f$notes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/music/notes.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$music$2f$scales$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/music/scales.ts [app-client] (ecmascript)");
;
;
function buildScaleSet(rootIdx, intervals) {
    const set = new Set();
    let semi = rootIdx;
    set.add(semi % 12);
    for (const interval of intervals){
        semi += interval;
        set.add(semi % 12);
    }
    return set;
}
function matchScales(detectedSemis) {
    if (detectedSemis.size === 0) return [];
    const results = [];
    for (const root of __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$music$2f$notes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KEY_ROOTS"]){
        for (const mode of __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$music$2f$scales$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MODES"]){
            const scaleSet = buildScaleSet(root.idx, mode.intervals);
            let matchCount = 0;
            for (const semi of detectedSemis){
                if (scaleSet.has(semi)) matchCount++;
            }
            // Jaccard : intersection / union
            const union = new Set([
                ...scaleSet,
                ...detectedSemis
            ]);
            const score = matchCount / union.size;
            results.push({
                rootName: root.name,
                rootIdx: root.idx,
                modeKey: mode.key,
                modeName: mode.name,
                score,
                matchCount
            });
        }
    }
    return results.sort((a, b)=>b.score - a.score).slice(0, 5);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/AudioDetector.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AudioDetector",
    ()=>AudioDetector
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$music$2f$pitch$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/music/pitch.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$music$2f$scale$2d$match$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/music/scale-match.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const CHROMATIC = [
    'C',
    'C#',
    'D',
    'D#',
    'E',
    'F',
    'F#',
    'G',
    'G#',
    'A',
    'A#',
    'B'
];
function AudioDetector({ onScaleSelected }) {
    _s();
    const [isListening, setIsListening] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [source, setSource] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [currentNote, setCurrentNote] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [currentFreq, setCurrentFreq] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [detectedSemis, setDetectedSemis] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Map());
    const [matches, setMatches] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const audioCtxRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const streamRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const rafRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const matchIntervalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const semisRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Map());
    const stop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AudioDetector.useCallback[stop]": ()=>{
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
            if (matchIntervalRef.current) clearInterval(matchIntervalRef.current);
            streamRef.current?.getTracks().forEach({
                "AudioDetector.useCallback[stop]": (t)=>t.stop()
            }["AudioDetector.useCallback[stop]"]);
            audioCtxRef.current?.close();
            audioCtxRef.current = null;
            streamRef.current = null;
            rafRef.current = null;
            setIsListening(false);
            setSource(null);
            setCurrentNote(null);
            setCurrentFreq(null);
        }
    }["AudioDetector.useCallback[stop]"], []);
    const start = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AudioDetector.useCallback[start]": async (mode)=>{
            setError(null);
            try {
                let stream;
                if (mode === 'tab') {
                    // getDisplayMedia ouvre le sélecteur d'onglet du navigateur
                    stream = await navigator.mediaDevices.getDisplayMedia({
                        audio: {
                            echoCancellation: false,
                            noiseSuppression: false
                        },
                        video: true
                    });
                    // On jette le flux vidéo — on n'a besoin que de l'audio
                    stream.getVideoTracks().forEach({
                        "AudioDetector.useCallback[start]": (t)=>t.stop()
                    }["AudioDetector.useCallback[start]"]);
                } else {
                    stream = await navigator.mediaDevices.getUserMedia({
                        audio: true
                    });
                }
                streamRef.current = stream;
                const ctx = new AudioContext();
                audioCtxRef.current = ctx;
                const analyser = ctx.createAnalyser();
                analyser.fftSize = 2048;
                ctx.createMediaStreamSource(stream).connect(analyser);
                const buffer = new Float32Array(analyser.fftSize);
                semisRef.current = new Map();
                setDetectedSemis(new Map());
                setMatches([]);
                const loop = {
                    "AudioDetector.useCallback[start].loop": ()=>{
                        analyser.getFloatTimeDomainData(buffer);
                        const freq = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$music$2f$pitch$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["detectPitch"])(buffer, ctx.sampleRate);
                        if (freq > 0) {
                            const semi = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$music$2f$pitch$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["freqToSemi"])(freq);
                            setCurrentNote((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$music$2f$pitch$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["freqToNoteName"])(freq));
                            setCurrentFreq(Math.round(freq));
                            semisRef.current.set(semi, (semisRef.current.get(semi) ?? 0) + 1);
                        } else {
                            setCurrentNote(null);
                            setCurrentFreq(null);
                        }
                        rafRef.current = requestAnimationFrame(loop);
                    }
                }["AudioDetector.useCallback[start].loop"];
                loop();
                matchIntervalRef.current = setInterval({
                    "AudioDetector.useCallback[start]": ()=>{
                        const snapshot = new Map(semisRef.current);
                        setDetectedSemis(snapshot);
                        const semis = new Set(snapshot.keys());
                        if (semis.size >= 3) setMatches((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$music$2f$scale$2d$match$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["matchScales"])(semis));
                    }
                }["AudioDetector.useCallback[start]"], 800);
                setSource(mode);
                setIsListening(true);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Accès audio refusé');
            }
        }
    }["AudioDetector.useCallback[start]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AudioDetector.useEffect": ()=>({
                "AudioDetector.useEffect": ()=>stop()
            })["AudioDetector.useEffect"]
    }["AudioDetector.useEffect"], [
        stop
    ]);
    function reset() {
        semisRef.current = new Map();
        setDetectedSemis(new Map());
        setMatches([]);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-950",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "mb-4 text-xs uppercase tracking-wider text-neutral-500",
                children: "Détection audio"
            }, void 0, false, {
                fileName: "[project]/src/components/AudioDetector.tsx",
                lineNumber: 111,
                columnNumber: 7
            }, this),
            isListening ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: stop,
                className: "mb-5 rounded-lg bg-red-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-red-600",
                children: [
                    "⏹ Arrêter ",
                    source === 'tab' ? '(onglet)' : '(micro)'
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/AudioDetector.tsx",
                lineNumber: 116,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-5 flex gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>start('mic'),
                        className: "rounded-lg bg-neutral-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-neutral-700 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-300",
                        children: "🎙 Micro"
                    }, void 0, false, {
                        fileName: "[project]/src/components/AudioDetector.tsx",
                        lineNumber: 124,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>start('tab'),
                        className: "rounded-lg border border-neutral-200 px-4 py-2 text-sm font-medium transition-colors hover:bg-neutral-100 dark:border-neutral-800 dark:hover:bg-neutral-900",
                        children: "🖥 Onglet / YouTube"
                    }, void 0, false, {
                        fileName: "[project]/src/components/AudioDetector.tsx",
                        lineNumber: 130,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/AudioDetector.tsx",
                lineNumber: 123,
                columnNumber: 9
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mb-4 text-sm text-red-500",
                children: error
            }, void 0, false, {
                fileName: "[project]/src/components/AudioDetector.tsx",
                lineNumber: 139,
                columnNumber: 17
            }, this),
            isListening && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-5 flex items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex h-14 w-14 items-center justify-center rounded-full border-2 border-neutral-200 font-mono text-xl font-bold dark:border-neutral-800",
                        children: currentNote ?? '·'
                    }, void 0, false, {
                        fileName: "[project]/src/components/AudioDetector.tsx",
                        lineNumber: 143,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm font-medium",
                                children: currentNote ?? 'Silence…'
                            }, void 0, false, {
                                fileName: "[project]/src/components/AudioDetector.tsx",
                                lineNumber: 147,
                                columnNumber: 13
                            }, this),
                            currentFreq && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-neutral-500",
                                children: [
                                    currentFreq,
                                    " Hz"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/AudioDetector.tsx",
                                lineNumber: 149,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/AudioDetector.tsx",
                        lineNumber: 146,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/AudioDetector.tsx",
                lineNumber: 142,
                columnNumber: 9
            }, this),
            detectedSemis.size > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-2 flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-neutral-500",
                                children: [
                                    "Notes captées (",
                                    detectedSemis.size,
                                    ")"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/AudioDetector.tsx",
                                lineNumber: 158,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: reset,
                                className: "text-xs text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200",
                                children: "Réinitialiser"
                            }, void 0, false, {
                                fileName: "[project]/src/components/AudioDetector.tsx",
                                lineNumber: 159,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/AudioDetector.tsx",
                        lineNumber: 157,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-1",
                        children: CHROMATIC.map((name, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `flex h-7 w-9 items-center justify-center rounded font-mono text-xs transition-colors ${detectedSemis.has(i) ? 'bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900' : 'bg-neutral-100 text-neutral-400 dark:bg-neutral-900 dark:text-neutral-600'}`,
                                children: name
                            }, i, false, {
                                fileName: "[project]/src/components/AudioDetector.tsx",
                                lineNumber: 168,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/AudioDetector.tsx",
                        lineNumber: 166,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/AudioDetector.tsx",
                lineNumber: 156,
                columnNumber: 9
            }, this),
            matches.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mb-2 text-xs text-neutral-500",
                        children: "Gammes détectées"
                    }, void 0, false, {
                        fileName: "[project]/src/components/AudioDetector.tsx",
                        lineNumber: 185,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: matches.map((m, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between rounded-lg bg-neutral-50 px-3 py-2 dark:bg-neutral-900",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-5 font-mono text-xs text-neutral-400",
                                                children: [
                                                    "#",
                                                    i + 1
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/AudioDetector.tsx",
                                                lineNumber: 193,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm font-medium",
                                                        children: [
                                                            m.rootName,
                                                            " ",
                                                            m.modeName
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/AudioDetector.tsx",
                                                        lineNumber: 195,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-neutral-500",
                                                        children: [
                                                            Math.round(m.score * 100),
                                                            "% — ",
                                                            m.matchCount,
                                                            "/",
                                                            detectedSemis.size,
                                                            " notes"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/AudioDetector.tsx",
                                                        lineNumber: 196,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/AudioDetector.tsx",
                                                lineNumber: 194,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/AudioDetector.tsx",
                                        lineNumber: 192,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>onScaleSelected(m.rootName, m.modeKey),
                                        className: "rounded-md border border-neutral-200 px-2.5 py-1 text-xs hover:bg-neutral-100 dark:border-neutral-800 dark:hover:bg-neutral-800",
                                        children: "Charger →"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AudioDetector.tsx",
                                        lineNumber: 201,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, `${m.rootName}-${m.modeKey}`, true, {
                                fileName: "[project]/src/components/AudioDetector.tsx",
                                lineNumber: 188,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/AudioDetector.tsx",
                        lineNumber: 186,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/AudioDetector.tsx",
                lineNumber: 184,
                columnNumber: 9
            }, this),
            isListening && detectedSemis.size < 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-neutral-400",
                children: [
                    "Joue quelques notes… (",
                    detectedSemis.size,
                    "/3 captées)"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/AudioDetector.tsx",
                lineNumber: 214,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/AudioDetector.tsx",
        lineNumber: 110,
        columnNumber: 5
    }, this);
}
_s(AudioDetector, "QrWShB6AN+g/GzowOXLvIC+QAho=");
_c = AudioDetector;
var _c;
__turbopack_context__.k.register(_c, "AudioDetector");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ScaleDetectorSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScaleDetectorSection",
    ()=>ScaleDetectorSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ScaleExplorer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ScaleExplorer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AudioDetector$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/AudioDetector.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function ScaleDetectorSection({ initialScale }) {
    _s();
    // explorerKey force un re-mount de ScaleExplorer quand une gamme est sélectionnée
    const [explorerKey, setExplorerKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [activeScale, setActiveScale] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialScale);
    function handleScaleSelected(rootName, modeKey) {
        setActiveScale({
            rootName,
            modeKey,
            context: 'Détectée automatiquement'
        });
        setExplorerKey((k)=>k + 1);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AudioDetector$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AudioDetector"], {
                onScaleSelected: handleScaleSelected
            }, void 0, false, {
                fileName: "[project]/src/components/ScaleDetectorSection.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ScaleExplorer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScaleExplorer"], {
                initialScale: activeScale
            }, explorerKey, false, {
                fileName: "[project]/src/components/ScaleDetectorSection.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ScaleDetectorSection.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
_s(ScaleDetectorSection, "K4bl6o4Bdo/dopPWLgX4uX0bgtU=");
_c = ScaleDetectorSection;
var _c;
__turbopack_context__.k.register(_c, "ScaleDetectorSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/next/dist/shared/lib/router/utils/format-url.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
// Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    formatUrl: null,
    formatWithValidation: null,
    urlObjectKeys: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    formatUrl: function() {
        return formatUrl;
    },
    formatWithValidation: function() {
        return formatWithValidation;
    },
    urlObjectKeys: function() {
        return urlObjectKeys;
    }
});
const _interop_require_wildcard = __turbopack_context__.r("[project]/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _querystring = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/router/utils/querystring.js [app-client] (ecmascript)"));
const slashedProtocols = /https?|ftp|gopher|file/;
function formatUrl(urlObj) {
    let { auth, hostname } = urlObj;
    let protocol = urlObj.protocol || '';
    let pathname = urlObj.pathname || '';
    let hash = urlObj.hash || '';
    let query = urlObj.query || '';
    let host = false;
    auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';
    if (urlObj.host) {
        host = auth + urlObj.host;
    } else if (hostname) {
        host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);
        if (urlObj.port) {
            host += ':' + urlObj.port;
        }
    }
    if (query && typeof query === 'object') {
        query = String(_querystring.urlQueryToSearchParams(query));
    }
    let search = urlObj.search || query && `?${query}` || '';
    if (protocol && !protocol.endsWith(':')) protocol += ':';
    if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
        host = '//' + (host || '');
        if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
    } else if (!host) {
        host = '';
    }
    if (hash && hash[0] !== '#') hash = '#' + hash;
    if (search && search[0] !== '?') search = '?' + search;
    pathname = pathname.replace(/[?#]/g, encodeURIComponent);
    search = search.replace('#', '%23');
    return `${protocol}${host}${pathname}${search}${hash}`;
}
const urlObjectKeys = [
    'auth',
    'hash',
    'host',
    'hostname',
    'href',
    'path',
    'pathname',
    'port',
    'protocol',
    'query',
    'search',
    'slashes'
];
function formatWithValidation(url) {
    if ("TURBOPACK compile-time truthy", 1) {
        if (url !== null && typeof url === 'object') {
            Object.keys(url).forEach((key)=>{
                if (!urlObjectKeys.includes(key)) {
                    console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
                }
            });
        }
    }
    return formatUrl(url);
}
}),
"[project]/node_modules/next/dist/client/use-merged-ref.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "useMergedRef", {
    enumerable: true,
    get: function() {
        return useMergedRef;
    }
});
const _react = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
function useMergedRef(refA, refB) {
    const cleanupA = (0, _react.useRef)(null);
    const cleanupB = (0, _react.useRef)(null);
    // NOTE: In theory, we could skip the wrapping if only one of the refs is non-null.
    // (this happens often if the user doesn't pass a ref to Link/Form/Image)
    // But this can cause us to leak a cleanup-ref into user code (previously via `<Link legacyBehavior>`),
    // and the user might pass that ref into ref-merging library that doesn't support cleanup refs
    // (because it hasn't been updated for React 19)
    // which can then cause things to blow up, because a cleanup-returning ref gets called with `null`.
    // So in practice, it's safer to be defensive and always wrap the ref, even on React 19.
    return (0, _react.useCallback)((current)=>{
        if (current === null) {
            const cleanupFnA = cleanupA.current;
            if (cleanupFnA) {
                cleanupA.current = null;
                cleanupFnA();
            }
            const cleanupFnB = cleanupB.current;
            if (cleanupFnB) {
                cleanupB.current = null;
                cleanupFnB();
            }
        } else {
            if (refA) {
                cleanupA.current = applyRef(refA, current);
            }
            if (refB) {
                cleanupB.current = applyRef(refB, current);
            }
        }
    }, [
        refA,
        refB
    ]);
}
function applyRef(refA, current) {
    if (typeof refA === 'function') {
        const cleanup = refA(current);
        if (typeof cleanup === 'function') {
            return cleanup;
        } else {
            return ()=>refA(null);
        }
    } else {
        refA.current = current;
        return ()=>{
            refA.current = null;
        };
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/node_modules/next/dist/shared/lib/router/utils/is-local-url.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isLocalURL", {
    enumerable: true,
    get: function() {
        return isLocalURL;
    }
});
const _utils = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/utils.js [app-client] (ecmascript)");
const _hasbasepath = __turbopack_context__.r("[project]/node_modules/next/dist/client/has-base-path.js [app-client] (ecmascript)");
function isLocalURL(url) {
    // prevent a hydration mismatch on href for url with anchor refs
    if (!(0, _utils.isAbsoluteUrl)(url)) return true;
    try {
        // absolute urls can be local if they are on the same origin
        const locationOrigin = (0, _utils.getLocationOrigin)();
        const resolved = new URL(url, locationOrigin);
        return resolved.origin === locationOrigin && (0, _hasbasepath.hasBasePath)(resolved.pathname);
    } catch (_) {
        return false;
    }
}
}),
"[project]/node_modules/next/dist/shared/lib/utils/error-once.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "errorOnce", {
    enumerable: true,
    get: function() {
        return errorOnce;
    }
});
let errorOnce = (_)=>{};
if ("TURBOPACK compile-time truthy", 1) {
    const errors = new Set();
    errorOnce = (msg)=>{
        if (!errors.has(msg)) {
            console.error(msg);
        }
        errors.add(msg);
    };
}
}),
"[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    default: null,
    useLinkStatus: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    /**
 * A React component that extends the HTML `<a>` element to provide
 * [prefetching](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#2-prefetching)
 * and client-side navigation. This is the primary way to navigate between routes in Next.js.
 *
 * @remarks
 * - Prefetching is only enabled in production.
 *
 * @see https://nextjs.org/docs/app/api-reference/components/link
 */ default: function() {
        return LinkComponent;
    },
    useLinkStatus: function() {
        return useLinkStatus;
    }
});
const _interop_require_wildcard = __turbopack_context__.r("[project]/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _formaturl = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/router/utils/format-url.js [app-client] (ecmascript)");
const _approutercontextsharedruntime = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js [app-client] (ecmascript)");
const _usemergedref = __turbopack_context__.r("[project]/node_modules/next/dist/client/use-merged-ref.js [app-client] (ecmascript)");
const _utils = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/utils.js [app-client] (ecmascript)");
const _addbasepath = __turbopack_context__.r("[project]/node_modules/next/dist/client/add-base-path.js [app-client] (ecmascript)");
const _warnonce = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/utils/warn-once.js [app-client] (ecmascript)");
const _routerreducertypes = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/router-reducer/router-reducer-types.js [app-client] (ecmascript)");
const _links = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/links.js [app-client] (ecmascript)");
const _islocalurl = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/router/utils/is-local-url.js [app-client] (ecmascript)");
const _types = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/segment-cache/types.js [app-client] (ecmascript)");
const _erroronce = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/utils/error-once.js [app-client] (ecmascript)");
function isModifiedEvent(event) {
    const eventTarget = event.currentTarget;
    const target = eventTarget.getAttribute('target');
    return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
    event.nativeEvent && event.nativeEvent.which === 2;
}
function linkClicked(e, href, linkInstanceRef, replace, scroll, onNavigate, transitionTypes) {
    if (typeof window !== 'undefined') {
        const { nodeName } = e.currentTarget;
        // anchors inside an svg have a lowercase nodeName
        const isAnchorNodeName = nodeName.toUpperCase() === 'A';
        if (isAnchorNodeName && isModifiedEvent(e) || e.currentTarget.hasAttribute('download')) {
            // ignore click for browser’s default behavior
            return;
        }
        if (!(0, _islocalurl.isLocalURL)(href)) {
            if (replace) {
                // browser default behavior does not replace the history state
                // so we need to do it manually
                e.preventDefault();
                location.replace(href);
            }
            // ignore click for browser’s default behavior
            return;
        }
        e.preventDefault();
        if (onNavigate) {
            let isDefaultPrevented = false;
            onNavigate({
                preventDefault: ()=>{
                    isDefaultPrevented = true;
                }
            });
            if (isDefaultPrevented) {
                return;
            }
        }
        const { dispatchNavigateAction } = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/app-router-instance.js [app-client] (ecmascript)");
        _react.default.startTransition(()=>{
            dispatchNavigateAction(href, replace ? 'replace' : 'push', scroll === false ? _routerreducertypes.ScrollBehavior.NoScroll : _routerreducertypes.ScrollBehavior.Default, linkInstanceRef.current, transitionTypes);
        });
    }
}
function formatStringOrUrl(urlObjOrString) {
    if (typeof urlObjOrString === 'string') {
        return urlObjOrString;
    }
    return (0, _formaturl.formatUrl)(urlObjOrString);
}
function LinkComponent(props) {
    const [linkStatus, setOptimisticLinkStatus] = (0, _react.useOptimistic)(_links.IDLE_LINK_STATUS);
    let children;
    const linkInstanceRef = (0, _react.useRef)(null);
    const { href: hrefProp, as: asProp, children: childrenProp, prefetch: prefetchProp = null, passHref, replace, shallow, scroll, onClick, onMouseEnter: onMouseEnterProp, onTouchStart: onTouchStartProp, legacyBehavior = false, onNavigate, transitionTypes, ref: forwardedRef, unstable_dynamicOnHover, ...restProps } = props;
    children = childrenProp;
    if (legacyBehavior && (typeof children === 'string' || typeof children === 'number')) {
        children = /*#__PURE__*/ (0, _jsxruntime.jsx)("a", {
            children: children
        });
    }
    const router = _react.default.useContext(_approutercontextsharedruntime.AppRouterContext);
    const prefetchEnabled = prefetchProp !== false;
    const fetchStrategy = prefetchProp !== false ? getFetchStrategyFromPrefetchProp(prefetchProp) : _types.FetchStrategy.PPR;
    if ("TURBOPACK compile-time truthy", 1) {
        function createPropError(args) {
            return Object.defineProperty(new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (typeof window !== 'undefined' ? "\nOpen your browser's console to view the Component stack trace." : '')), "__NEXT_ERROR_CODE", {
                value: "E319",
                enumerable: false,
                configurable: true
            });
        }
        // TypeScript trick for type-guarding:
        const requiredPropsGuard = {
            href: true
        };
        const requiredProps = Object.keys(requiredPropsGuard);
        requiredProps.forEach((key)=>{
            if (key === 'href') {
                if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
                    throw createPropError({
                        key,
                        expected: '`string` or `object`',
                        actual: props[key] === null ? 'null' : typeof props[key]
                    });
                }
            } else {
                // TypeScript trick for type-guarding:
                const _ = key;
            }
        });
        // TypeScript trick for type-guarding:
        const optionalPropsGuard = {
            as: true,
            replace: true,
            scroll: true,
            shallow: true,
            passHref: true,
            prefetch: true,
            unstable_dynamicOnHover: true,
            onClick: true,
            onMouseEnter: true,
            onTouchStart: true,
            legacyBehavior: true,
            onNavigate: true,
            transitionTypes: true
        };
        const optionalProps = Object.keys(optionalPropsGuard);
        optionalProps.forEach((key)=>{
            const valType = typeof props[key];
            if (key === 'as') {
                if (props[key] && valType !== 'string' && valType !== 'object') {
                    throw createPropError({
                        key,
                        expected: '`string` or `object`',
                        actual: valType
                    });
                }
            } else if (key === 'onClick' || key === 'onMouseEnter' || key === 'onTouchStart' || key === 'onNavigate') {
                if (props[key] && valType !== 'function') {
                    throw createPropError({
                        key,
                        expected: '`function`',
                        actual: valType
                    });
                }
            } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'legacyBehavior' || key === 'unstable_dynamicOnHover') {
                if (props[key] != null && valType !== 'boolean') {
                    throw createPropError({
                        key,
                        expected: '`boolean`',
                        actual: valType
                    });
                }
            } else if (key === 'prefetch') {
                if (props[key] != null && valType !== 'boolean' && props[key] !== 'auto') {
                    throw createPropError({
                        key,
                        expected: '`boolean | "auto"`',
                        actual: valType
                    });
                }
            } else if (key === 'transitionTypes') {
                if (props[key] != null && !Array.isArray(props[key])) {
                    throw createPropError({
                        key,
                        expected: '`string[]`',
                        actual: valType
                    });
                }
            } else {
                // TypeScript trick for type-guarding:
                const _ = key;
            }
        });
    }
    const resolvedHref = asProp || hrefProp;
    const formattedHref = formatStringOrUrl(resolvedHref);
    if ("TURBOPACK compile-time truthy", 1) {
        if (props.locale) {
            (0, _warnonce.warnOnce)('The `locale` prop is not supported in `next/link` while using the `app` router. Read more about app router internalization: https://nextjs.org/docs/app/building-your-application/routing/internationalization');
        }
        if (!asProp) {
            let href;
            if (typeof resolvedHref === 'string') {
                href = resolvedHref;
            } else if (typeof resolvedHref === 'object' && typeof resolvedHref.pathname === 'string') {
                href = resolvedHref.pathname;
            }
            if (href) {
                const hasDynamicSegment = href.split('/').some((segment)=>segment.startsWith('[') && segment.endsWith(']'));
                if (hasDynamicSegment) {
                    throw Object.defineProperty(new Error(`Dynamic href \`${href}\` found in <Link> while using the \`/app\` router, this is not supported. Read more: https://nextjs.org/docs/messages/app-dir-dynamic-href`), "__NEXT_ERROR_CODE", {
                        value: "E267",
                        enumerable: false,
                        configurable: true
                    });
                }
            }
        }
    }
    // This will return the first child, if multiple are provided it will throw an error
    let child;
    if (legacyBehavior) {
        if (children?.$$typeof === Symbol.for('react.lazy')) {
            throw Object.defineProperty(new Error(`\`<Link legacyBehavior>\` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's \`<a>\` tag.`), "__NEXT_ERROR_CODE", {
                value: "E863",
                enumerable: false,
                configurable: true
            });
        }
        if ("TURBOPACK compile-time truthy", 1) {
            if (onClick) {
                console.warn(`"onClick" was passed to <Link> with \`href\` of \`${formattedHref}\` but "legacyBehavior" was set. The legacy behavior requires onClick be set on the child of next/link`);
            }
            if (onMouseEnterProp) {
                console.warn(`"onMouseEnter" was passed to <Link> with \`href\` of \`${formattedHref}\` but "legacyBehavior" was set. The legacy behavior requires onMouseEnter be set on the child of next/link`);
            }
            try {
                child = _react.default.Children.only(children);
            } catch (err) {
                if (!children) {
                    throw Object.defineProperty(new Error(`No children were passed to <Link> with \`href\` of \`${formattedHref}\` but one child is required https://nextjs.org/docs/messages/link-no-children`), "__NEXT_ERROR_CODE", {
                        value: "E320",
                        enumerable: false,
                        configurable: true
                    });
                }
                throw Object.defineProperty(new Error(`Multiple children were passed to <Link> with \`href\` of \`${formattedHref}\` but only one child is supported https://nextjs.org/docs/messages/link-multiple-children` + (typeof window !== 'undefined' ? " \nOpen your browser's console to view the Component stack trace." : '')), "__NEXT_ERROR_CODE", {
                    value: "E266",
                    enumerable: false,
                    configurable: true
                });
            }
        } else //TURBOPACK unreachable
        ;
    } else {
        if ("TURBOPACK compile-time truthy", 1) {
            if (children?.type === 'a') {
                throw Object.defineProperty(new Error('Invalid <Link> with <a> child. Please remove <a> or use <Link legacyBehavior>.\nLearn more: https://nextjs.org/docs/messages/invalid-new-link-with-extra-anchor'), "__NEXT_ERROR_CODE", {
                    value: "E209",
                    enumerable: false,
                    configurable: true
                });
            }
        }
    }
    const childRef = legacyBehavior ? child && typeof child === 'object' && child.ref : forwardedRef;
    // Use a callback ref to attach an IntersectionObserver to the anchor tag on
    // mount. In the future we will also use this to keep track of all the
    // currently mounted <Link> instances, e.g. so we can re-prefetch them after
    // a revalidation or refresh.
    const observeLinkVisibilityOnMount = _react.default.useCallback({
        "LinkComponent.useCallback[observeLinkVisibilityOnMount]": (element)=>{
            if (router !== null) {
                linkInstanceRef.current = (0, _links.mountLinkInstance)(element, formattedHref, router, fetchStrategy, prefetchEnabled, setOptimisticLinkStatus);
            }
            return ({
                "LinkComponent.useCallback[observeLinkVisibilityOnMount]": ()=>{
                    if (linkInstanceRef.current) {
                        (0, _links.unmountLinkForCurrentNavigation)(linkInstanceRef.current);
                        linkInstanceRef.current = null;
                    }
                    (0, _links.unmountPrefetchableInstance)(element);
                }
            })["LinkComponent.useCallback[observeLinkVisibilityOnMount]"];
        }
    }["LinkComponent.useCallback[observeLinkVisibilityOnMount]"], [
        prefetchEnabled,
        formattedHref,
        router,
        fetchStrategy,
        setOptimisticLinkStatus
    ]);
    const mergedRef = (0, _usemergedref.useMergedRef)(observeLinkVisibilityOnMount, childRef);
    const childProps = {
        ref: mergedRef,
        onClick (e) {
            if ("TURBOPACK compile-time truthy", 1) {
                if (!e) {
                    throw Object.defineProperty(new Error(`Component rendered inside next/link has to pass click event to "onClick" prop.`), "__NEXT_ERROR_CODE", {
                        value: "E312",
                        enumerable: false,
                        configurable: true
                    });
                }
            }
            if (!legacyBehavior && typeof onClick === 'function') {
                onClick(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onClick === 'function') {
                child.props.onClick(e);
            }
            if (!router) {
                return;
            }
            if (e.defaultPrevented) {
                return;
            }
            linkClicked(e, formattedHref, linkInstanceRef, replace, scroll, onNavigate, transitionTypes);
        },
        onMouseEnter (e) {
            if (!legacyBehavior && typeof onMouseEnterProp === 'function') {
                onMouseEnterProp(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onMouseEnter === 'function') {
                child.props.onMouseEnter(e);
            }
            if (!router) {
                return;
            }
            if ("TURBOPACK compile-time truthy", 1) {
                return;
            }
            //TURBOPACK unreachable
            ;
            const upgradeToDynamicPrefetch = undefined;
        },
        onTouchStart: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : function onTouchStart(e) {
            if (!legacyBehavior && typeof onTouchStartProp === 'function') {
                onTouchStartProp(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onTouchStart === 'function') {
                child.props.onTouchStart(e);
            }
            if (!router) {
                return;
            }
            if (!prefetchEnabled) {
                return;
            }
            const upgradeToDynamicPrefetch = unstable_dynamicOnHover === true;
            (0, _links.onNavigationIntent)(e.currentTarget, upgradeToDynamicPrefetch);
        }
    };
    // If the url is absolute, we can bypass the logic to prepend the basePath.
    if ((0, _utils.isAbsoluteUrl)(formattedHref)) {
        childProps.href = formattedHref;
    } else if (!legacyBehavior || passHref || child.type === 'a' && !('href' in child.props)) {
        childProps.href = (0, _addbasepath.addBasePath)(formattedHref);
    }
    let link;
    if (legacyBehavior) {
        if ("TURBOPACK compile-time truthy", 1) {
            (0, _erroronce.errorOnce)('`legacyBehavior` is deprecated and will be removed in a future ' + 'release. A codemod is available to upgrade your components:\n\n' + 'npx @next/codemod@latest new-link .\n\n' + 'Learn more: https://nextjs.org/docs/app/building-your-application/upgrading/codemods#remove-a-tags-from-link-components');
        }
        link = /*#__PURE__*/ _react.default.cloneElement(child, childProps);
    } else {
        link = /*#__PURE__*/ (0, _jsxruntime.jsx)("a", {
            ...restProps,
            ...childProps,
            children: children
        });
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(LinkStatusContext.Provider, {
        value: linkStatus,
        children: link
    });
}
const LinkStatusContext = /*#__PURE__*/ (0, _react.createContext)(_links.IDLE_LINK_STATUS);
const useLinkStatus = ()=>{
    return (0, _react.useContext)(LinkStatusContext);
};
function getFetchStrategyFromPrefetchProp(prefetchProp) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        return prefetchProp === null || prefetchProp === 'auto' ? _types.FetchStrategy.PPR : // (although invalid values should've been filtered out by prop validation in dev)
        _types.FetchStrategy.Full;
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
]);

//# sourceMappingURL=_0244ag3._.js.map
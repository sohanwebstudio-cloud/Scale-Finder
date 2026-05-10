module.exports = [
"[project]/src/lib/music/colors.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/src/components/Fretboard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Fretboard",
    ()=>Fretboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$music$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/music/colors.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
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
    const [isDark, setIsDark] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const mq = window.matchMedia('(prefers-color-scheme: dark)');
        setIsDark(mq.matches);
        const handler = (e)=>setIsDark(e.matches);
        mq.addEventListener('change', handler);
        return ()=>mq.removeEventListener('change', handler);
    }, []);
    const colors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$music$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getModeColors"])(modeKey, isDark);
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "100%",
        viewBox: `0 0 ${W} ${H}`,
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                children: "Manche de guitare avec les notes du mode"
            }, void 0, false, {
                fileName: "[project]/src/components/Fretboard.tsx",
                lineNumber: 75,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
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
            SINGLE_INLAY_FRETS.map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: nutX + (f - 0.5) * fretWidth,
                        cy: topPad + stringSpacing * 1.5,
                        r: "5",
                        fill: dotColor
                    }, `dbl-t-${f}`, false, {
                        fileName: "[project]/src/components/Fretboard.tsx",
                        lineNumber: 112,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
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
            }, (_, i)=>i + 1).map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
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
            STRINGS.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
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
            ].map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
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
            STRINGS.map((_s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
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
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
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
}),
"[project]/src/lib/music/notes.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/src/lib/music/scales.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/src/lib/music/spelling.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$music$2f$notes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/music/notes.ts [app-ssr] (ecmascript)");
;
function spellScale(rootIdx, intervals, rootName) {
    const rootLetter = rootName.charAt(0);
    const startLetterIdx = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$music$2f$notes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LETTERS"].indexOf(rootLetter);
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
        const nextLetter = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$music$2f$notes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LETTERS"][(startLetterIdx + i + 1) % 7];
        const naturalSemi = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$music$2f$notes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NATURAL_SEMI"][nextLetter];
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
}),
"[project]/src/components/ScaleExplorer.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScaleExplorer",
    ()=>ScaleExplorer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Fretboard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Fretboard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$music$2f$notes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/music/notes.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$music$2f$scales$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/music/scales.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$music$2f$spelling$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/music/spelling.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$music$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/music/colors.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
function ScaleExplorer({ initialScale }) {
    const initialKeyIdx = initialScale ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$music$2f$notes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KEY_ROOTS"].find((k)=>k.name === initialScale.rootName)?.idx ?? 9 : 9; // A par défaut
    const initialModeKey = initialScale?.modeKey ?? 'mixolydian';
    const [keyIdx, setKeyIdx] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialKeyIdx);
    const [modeKey, setModeKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialModeKey);
    const root = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$music$2f$notes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KEY_ROOTS"][keyIdx];
    const mode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$music$2f$scales$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMode"])(modeKey);
    const notes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$music$2f$spelling$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spellScale"])(root.idx, mode.intervals, root.name);
    // Couleur statique pour le rendu serveur initial
    // (le Fretboard se réajuste côté client via useEffect)
    const colors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$music$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getModeColors"])(modeKey, false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mb-2 text-xs uppercase tracking-wider text-neutral-500",
                        children: "Tonique"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ScaleExplorer.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-1",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$music$2f$notes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KEY_ROOTS"].map((k, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mb-2 text-xs uppercase tracking-wider text-neutral-500",
                        children: "Mode"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ScaleExplorer.tsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-1",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$music$2f$scales$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MODES"].map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center justify-between gap-4 rounded-xl bg-neutral-900 px-5 py-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap gap-1",
                children: notes.map((n, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Fretboard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fretboard"], {
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
}),
"[project]/src/lib/music/pitch.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/src/lib/music/scale-match.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "matchScales",
    ()=>matchScales
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$music$2f$notes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/music/notes.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$music$2f$scales$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/music/scales.ts [app-ssr] (ecmascript)");
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
    for (const root of __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$music$2f$notes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KEY_ROOTS"]){
        for (const mode of __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$music$2f$scales$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MODES"]){
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
}),
"[project]/src/components/AudioDetector.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AudioDetector",
    ()=>AudioDetector
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$music$2f$pitch$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/music/pitch.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$music$2f$scale$2d$match$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/music/scale-match.ts [app-ssr] (ecmascript)");
'use client';
;
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
    const [isListening, setIsListening] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [source, setSource] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [currentNote, setCurrentNote] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [currentFreq, setCurrentFreq] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [detectedSemis, setDetectedSemis] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(new Map());
    const [matches, setMatches] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const audioCtxRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const streamRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const rafRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const matchIntervalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const semisRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(new Map());
    const stop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
        if (matchIntervalRef.current) clearInterval(matchIntervalRef.current);
        streamRef.current?.getTracks().forEach((t)=>t.stop());
        audioCtxRef.current?.close();
        audioCtxRef.current = null;
        streamRef.current = null;
        rafRef.current = null;
        setIsListening(false);
        setSource(null);
        setCurrentNote(null);
        setCurrentFreq(null);
    }, []);
    const start = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (mode)=>{
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
                stream.getVideoTracks().forEach((t)=>t.stop());
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
            const loop = ()=>{
                analyser.getFloatTimeDomainData(buffer);
                const freq = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$music$2f$pitch$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["detectPitch"])(buffer, ctx.sampleRate);
                if (freq > 0) {
                    const semi = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$music$2f$pitch$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["freqToSemi"])(freq);
                    setCurrentNote((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$music$2f$pitch$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["freqToNoteName"])(freq));
                    setCurrentFreq(Math.round(freq));
                    semisRef.current.set(semi, (semisRef.current.get(semi) ?? 0) + 1);
                } else {
                    setCurrentNote(null);
                    setCurrentFreq(null);
                }
                rafRef.current = requestAnimationFrame(loop);
            };
            loop();
            matchIntervalRef.current = setInterval(()=>{
                const snapshot = new Map(semisRef.current);
                setDetectedSemis(snapshot);
                const semis = new Set(snapshot.keys());
                if (semis.size >= 3) setMatches((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$music$2f$scale$2d$match$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["matchScales"])(semis));
            }, 800);
            setSource(mode);
            setIsListening(true);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Accès audio refusé');
        }
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>()=>stop(), [
        stop
    ]);
    function reset() {
        semisRef.current = new Map();
        setDetectedSemis(new Map());
        setMatches([]);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-950",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "mb-4 text-xs uppercase tracking-wider text-neutral-500",
                children: "Détection audio"
            }, void 0, false, {
                fileName: "[project]/src/components/AudioDetector.tsx",
                lineNumber: 111,
                columnNumber: 7
            }, this),
            isListening ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-5 flex gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>start('mic'),
                        className: "rounded-lg bg-neutral-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-neutral-700 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-300",
                        children: "🎙 Micro"
                    }, void 0, false, {
                        fileName: "[project]/src/components/AudioDetector.tsx",
                        lineNumber: 124,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mb-4 text-sm text-red-500",
                children: error
            }, void 0, false, {
                fileName: "[project]/src/components/AudioDetector.tsx",
                lineNumber: 139,
                columnNumber: 17
            }, this),
            isListening && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-5 flex items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex h-14 w-14 items-center justify-center rounded-full border-2 border-neutral-200 font-mono text-xl font-bold dark:border-neutral-800",
                        children: currentNote ?? '·'
                    }, void 0, false, {
                        fileName: "[project]/src/components/AudioDetector.tsx",
                        lineNumber: 143,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm font-medium",
                                children: currentNote ?? 'Silence…'
                            }, void 0, false, {
                                fileName: "[project]/src/components/AudioDetector.tsx",
                                lineNumber: 147,
                                columnNumber: 13
                            }, this),
                            currentFreq && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
            detectedSemis.size > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-2 flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-1",
                        children: CHROMATIC.map((name, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            matches.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mb-2 text-xs text-neutral-500",
                        children: "Gammes détectées"
                    }, void 0, false, {
                        fileName: "[project]/src/components/AudioDetector.tsx",
                        lineNumber: 185,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: matches.map((m, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between rounded-lg bg-neutral-50 px-3 py-2 dark:bg-neutral-900",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
            isListening && detectedSemis.size < 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
}),
"[project]/src/components/ScaleDetectorSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScaleDetectorSection",
    ()=>ScaleDetectorSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ScaleExplorer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ScaleExplorer.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AudioDetector$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/AudioDetector.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function ScaleDetectorSection({ initialScale }) {
    // explorerKey force un re-mount de ScaleExplorer quand une gamme est sélectionnée
    const [explorerKey, setExplorerKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [activeScale, setActiveScale] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialScale);
    function handleScaleSelected(rootName, modeKey) {
        setActiveScale({
            rootName,
            modeKey,
            context: 'Détectée automatiquement'
        });
        setExplorerKey((k)=>k + 1);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AudioDetector$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AudioDetector"], {
                onScaleSelected: handleScaleSelected
            }, void 0, false, {
                fileName: "[project]/src/components/ScaleDetectorSection.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ScaleExplorer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScaleExplorer"], {
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
}),
];

//# sourceMappingURL=src_0-5sg32._.js.map
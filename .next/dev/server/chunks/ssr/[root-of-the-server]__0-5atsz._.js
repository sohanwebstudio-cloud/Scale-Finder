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

//# sourceMappingURL=%5Broot-of-the-server%5D__0-5atsz._.js.map
module.exports = [
"[project]/src/components/StudioHero.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StudioHero",
    ()=>StudioHero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
'use client';
;
;
;
const HOTSPOTS = [
    {
        id: 'library',
        label: 'Guitaristes',
        sub: 'Explorer leurs gammes signature',
        scrollTo: 'guitaristes',
        // Bookshelf — perspective trapezoid following the left wall
        corners: [
            [
                0,
                0
            ],
            [
                22,
                0
            ],
            [
                20,
                100
            ],
            [
                0,
                100
            ]
        ],
        dotX: 10,
        dotY: 37
    },
    {
        id: 'guitar',
        label: 'Guitare',
        sub: 'Gammes et modes pour guitare',
        href: '/studio',
        // Stratocaster — leaning against the stairs, center-left
        corners: [
            [
                41,
                26
            ],
            [
                49,
                25
            ],
            [
                50,
                98
            ],
            [
                40,
                98
            ]
        ],
        dotX: 45,
        dotY: 76
    },
    {
        id: 'bass',
        label: 'Basse',
        sub: 'Gammes et modes pour basse',
        href: '/studio',
        // Precision Bass — far right, next to the neon sign
        corners: [
            [
                73,
                34
            ],
            [
                81,
                33
            ],
            [
                82,
                98
            ],
            [
                72,
                98
            ]
        ],
        dotX: 77,
        dotY: 74
    }
];
function toPoints(corners) {
    return corners.map(([x, y])=>`${x},${y}`).join(' ');
}
function StudioHero() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const imageRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [activeId, setActiveId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Parallax
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const container = containerRef.current;
        const image = imageRef.current;
        if (!container || !image) return;
        let rafId;
        let tx = 0, ty = 0, cx = 0, cy = 0;
        function onMove(e) {
            tx = (e.clientX / container.clientWidth - 0.5) * 18;
            ty = (e.clientY / container.clientHeight - 0.5) * 10;
        }
        function tick() {
            cx += (tx - cx) * 0.06;
            cy += (ty - cy) * 0.06;
            image.style.transform = `translate(calc(-50% + ${-cx}px), calc(-50% + ${-cy}px)) scale(1.06)`;
            rafId = requestAnimationFrame(tick);
        }
        container.addEventListener('mousemove', onMove);
        rafId = requestAnimationFrame(tick);
        return ()=>{
            container.removeEventListener('mousemove', onMove);
            cancelAnimationFrame(rafId);
        };
    }, []);
    function handleClick(spot) {
        if (spot.href) router.push(spot.href);
        else if (spot.scrollTo) document.getElementById(spot.scrollTo)?.scrollIntoView({
            behavior: 'smooth'
        });
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        style: {
            position: 'relative',
            height: '100vh',
            background: '#0a0806',
            overflow: 'hidden'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: imageRef,
                style: {
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    width: '106%',
                    height: '106%',
                    transform: 'translate(-50%, -50%) scale(1.06)',
                    willChange: 'transform',
                    pointerEvents: 'none'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: "/studio-hero.jpg",
                    alt: "Scale Finder Studio",
                    style: {
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block'
                    },
                    draggable: false
                }, void 0, false, {
                    fileName: "[project]/src/components/StudioHero.tsx",
                    lineNumber: 105,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/StudioHero.tsx",
                lineNumber: 96,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute inset-0",
                style: {
                    background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.5) 100%)'
                }
            }, void 0, false, {
                fileName: "[project]/src/components/StudioHero.tsx",
                lineNumber: 114,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute bottom-0 left-0 right-0",
                style: {
                    height: '28%',
                    background: 'linear-gradient(to top, rgba(0,0,0,0.65), transparent)'
                }
            }, void 0, false, {
                fileName: "[project]/src/components/StudioHero.tsx",
                lineNumber: 118,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                viewBox: "0 0 100 100",
                preserveAspectRatio: "none",
                style: {
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%'
                },
                children: HOTSPOTS.map((spot)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                        points: toPoints(spot.corners),
                        fill: "transparent",
                        style: {
                            cursor: 'pointer'
                        },
                        onMouseEnter: ()=>setActiveId(spot.id),
                        onMouseLeave: ()=>setActiveId(null),
                        onClick: ()=>handleClick(spot)
                    }, spot.id, false, {
                        fileName: "[project]/src/components/StudioHero.tsx",
                        lineNumber: 130,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/StudioHero.tsx",
                lineNumber: 124,
                columnNumber: 7
            }, this),
            HOTSPOTS.map((spot)=>{
                const active = activeId === spot.id;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        pointerEvents: 'none'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                position: 'absolute',
                                left: `${spot.dotX}%`,
                                top: `${spot.dotY}%`,
                                transform: 'translate(-50%, calc(-100% - 18px))',
                                opacity: active ? 1 : 0,
                                transition: 'opacity 0.2s ease',
                                whiteSpace: 'nowrap'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        background: 'rgba(8,6,4,0.88)',
                                        border: '1px solid rgba(255,255,255,0.22)',
                                        backdropFilter: 'blur(10px)',
                                        borderRadius: 6,
                                        padding: '5px 11px'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                margin: 0,
                                                fontSize: 11,
                                                fontWeight: 700,
                                                letterSpacing: '0.12em',
                                                textTransform: 'uppercase',
                                                color: 'rgba(255,255,255,0.95)'
                                            },
                                            children: spot.label
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/StudioHero.tsx",
                                            lineNumber: 165,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                margin: '2px 0 0',
                                                fontSize: 10,
                                                color: 'rgba(255,255,255,0.45)'
                                            },
                                            children: spot.sub
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/StudioHero.tsx",
                                            lineNumber: 168,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/StudioHero.tsx",
                                    lineNumber: 158,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        width: 0,
                                        height: 0,
                                        margin: '0 auto',
                                        borderLeft: '5px solid transparent',
                                        borderRight: '5px solid transparent',
                                        borderTop: '5px solid rgba(8,6,4,0.88)'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/StudioHero.tsx",
                                    lineNumber: 172,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/StudioHero.tsx",
                            lineNumber: 149,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                position: 'absolute',
                                left: `${spot.dotX}%`,
                                top: `${spot.dotY}%`,
                                transform: 'translate(-50%, -50%)'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        position: 'absolute',
                                        width: 32,
                                        height: 32,
                                        top: '50%',
                                        left: '50%',
                                        transform: 'translate(-50%, -50%)',
                                        borderRadius: '50%',
                                        background: 'rgba(255,255,255,0.12)',
                                        animation: active ? 'none' : 'pulse-ring 2.2s ease-out infinite'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/StudioHero.tsx",
                                    lineNumber: 182,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        display: 'block',
                                        width: 10,
                                        height: 10,
                                        borderRadius: '50%',
                                        background: active ? '#fff' : 'rgba(255,255,255,0.8)',
                                        border: '1.5px solid rgba(255,255,255,0.5)',
                                        boxShadow: active ? '0 0 14px rgba(255,255,255,0.7)' : '0 0 6px rgba(255,255,255,0.4)',
                                        transition: 'all 0.2s',
                                        transform: active ? 'scale(1.4)' : 'scale(1)'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/StudioHero.tsx",
                                    lineNumber: 190,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/StudioHero.tsx",
                            lineNumber: 176,
                            columnNumber: 13
                        }, this)
                    ]
                }, spot.id, true, {
                    fileName: "[project]/src/components/StudioHero.tsx",
                    lineNumber: 147,
                    columnNumber: 11
                }, this);
            }),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs uppercase tracking-widest text-neutral-500",
                        children: "Scroll"
                    }, void 0, false, {
                        fileName: "[project]/src/components/StudioHero.tsx",
                        lineNumber: 205,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-auto mt-2 h-7 w-px bg-gradient-to-b from-neutral-500 to-transparent"
                    }, void 0, false, {
                        fileName: "[project]/src/components/StudioHero.tsx",
                        lineNumber: 206,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/StudioHero.tsx",
                lineNumber: 204,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        @keyframes pulse-ring {
          0%   { transform: translate(-50%,-50%) scale(0.7); opacity: 0.9; }
          100% { transform: translate(-50%,-50%) scale(3.2); opacity: 0; }
        }
      `
            }, void 0, false, {
                fileName: "[project]/src/components/StudioHero.tsx",
                lineNumber: 209,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/StudioHero.tsx",
        lineNumber: 91,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=src_components_StudioHero_tsx_0pvdiig._.js.map
'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';

type Pt = readonly [number, number];

interface Zone {
  id: string;
  label: string;
  sub: string;
  href?: string;
  scrollTo?: string;
  points: readonly Pt[];
  dotX: number;
  dotY: number;
}

// Coordinates are [x%, y%] — percentage of the viewport (0-100 both axes)
const ZONES: Zone[] = [
  {
    id: 'library',
    label: 'Guitaristes',
    sub: 'Explorer leurs gammes signature',
    scrollTo: 'guitaristes',
    dotX: 10,
    dotY: 42,
    points: [
      [0, 0], [22, 0],
      [22, 88],
      [0, 88],
    ],
  },
  {
    id: 'guitar',
    label: 'Guitare',
    sub: 'Gammes et modes pour guitare',
    href: '/studio',
    dotX: 45,
    dotY: 74,
    points: [
      // Headstock top
      [43.8, 47], [45.5, 46.8],
      // Right headstock taper → neck
      [46.0, 48.5], [45.7, 51],
      // Neck right side down to body
      [45.5, 65.5],
      // Upper horn right (Strat double cutaway)
      [47.2, 65.8], [49.2, 66.8], [49.8, 68.2], [49.2, 70.0], [47.5, 71.0],
      // Right waist
      [48.2, 73.5], [48.8, 77.5],
      // Right lower bout
      [50.8, 83.5], [50.5, 90.0], [48.5, 94.5], [46.2, 96.5],
      // Bottom
      [44.5, 97.0],
      // Left lower bout
      [42.5, 96.5], [40.5, 94.5], [38.8, 90.5], [39.2, 84.0],
      // Left waist
      [41.2, 78.0], [41.8, 73.5],
      // Left upper cutaway (Strat)
      [40.2, 71.0], [39.5, 69.0], [40.5, 68.0], [41.5, 66.8], [43.5, 65.5],
      // Neck left side up
      [43.8, 51],
      // Left headstock taper
      [43.5, 48.5], [43.8, 47],
    ],
  },
  {
    id: 'bass',
    label: 'Basse',
    sub: 'Gammes et modes pour basse',
    href: '/studio',
    dotX: 70.5,
    dotY: 68,
    points: [
      // Headstock top (Fender P-Bass)
      [69.2, 37.5], [71.8, 37.5],
      // Right headstock taper
      [72.0, 39.5], [71.6, 43.5],
      // Neck right
      [71.3, 69.5],
      // Upper right bout (P-Bass, slight cutaway)
      [72.8, 70.0], [74.2, 71.5], [74.6, 73.5], [74.0, 75.5], [72.8, 76.5],
      // Right waist
      [73.8, 79.0],
      // Right lower bout
      [75.8, 85.0], [75.5, 91.5], [73.8, 96.5], [72.0, 98.5],
      // Bottom
      [70.5, 99.0],
      // Left lower bout
      [68.5, 98.5], [67.0, 96.5], [65.5, 91.5], [65.5, 85.5],
      // Left waist
      [67.2, 79.0],
      // Left upper bout
      [67.8, 76.5], [66.8, 74.5], [66.8, 72.5], [67.2, 70.5], [68.5, 69.5],
      // Neck left
      [69.5, 69.5], [69.5, 43.5], [69.0, 39.5],
      // Back to headstock
      [69.2, 37.5],
    ],
  },
];

function toSvgPoints(pts: readonly Pt[]) {
  return pts.map(([x, y]) => `${x},${y}`).join(' ');
}

function getBbox(pts: readonly Pt[]) {
  const xs = pts.map(([x]) => x);
  const ys = pts.map(([, y]) => y);
  const minX = Math.min(...xs), maxX = Math.max(...xs);
  const minY = Math.min(...ys), maxY = Math.max(...ys);
  return { minX, maxX, minY, maxY, cx: (minX + maxX) / 2, cy: (minY + maxY) / 2 };
}

export function StudioHero() {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const [activeId, setActiveId] = useState<string | null>(null);

  // Mouse parallax
  useEffect(() => {
    const container = containerRef.current;
    const image = imageRef.current;
    if (!container || !image) return;
    let rafId: number;
    let tx = 0, ty = 0, cx = 0, cy = 0;

    function onMove(e: MouseEvent) {
      tx = ((e.clientX / container!.clientWidth) - 0.5) * 22;
      ty = ((e.clientY / container!.clientHeight) - 0.5) * 13;
    }
    function tick() {
      cx += (tx - cx) * 0.055;
      cy += (ty - cy) * 0.055;
      image!.style.transform = `translate(calc(-50% + ${-cx}px), calc(-50% + ${-cy}px)) scale(1.08)`;
      rafId = requestAnimationFrame(tick);
    }
    container.addEventListener('mousemove', onMove);
    rafId = requestAnimationFrame(tick);
    return () => { container.removeEventListener('mousemove', onMove); cancelAnimationFrame(rafId); };
  }, []);

  // Correct grid pattern for square cells based on viewport aspect ratio
  useEffect(() => {
    function fixPattern() {
      const svg = svgRef.current;
      if (!svg) return;
      const ar = window.innerWidth / window.innerHeight;
      // In a viewBox="0 0 100 100" with preserveAspectRatio="none":
      // x-unit ≠ y-unit due to aspect ratio.
      // For square grid cells: patternWidth = cellSize / ar
      const cellSize = 4;
      const pattern = svg.querySelector('#wgrid');
      if (pattern) {
        pattern.setAttribute('width', String(cellSize / ar));
        pattern.setAttribute('height', String(cellSize));
      }
    }
    fixPattern();
    window.addEventListener('resize', fixPattern);
    return () => window.removeEventListener('resize', fixPattern);
  }, []);

  function handleClick(zone: Zone) {
    if (zone.href) router.push(zone.href);
    else if (zone.scrollTo) document.getElementById(zone.scrollTo)?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div
      ref={containerRef}
      style={{ position: 'relative', height: '100vh', background: '#090705', overflow: 'hidden' }}
    >
      {/* Parallax image */}
      <div
        ref={imageRef}
        style={{
          position: 'absolute', top: '50%', left: '50%',
          width: '108%', height: '108%',
          transform: 'translate(-50%, -50%) scale(1.08)',
          willChange: 'transform', pointerEvents: 'none',
        }}
      >
        <img
          src="/studio-hero.jpg"
          alt="Scale Finder Studio"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          draggable={false}
        />
      </div>

      {/* Atmospheric vignette */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: 'radial-gradient(ellipse at 50% 55%, transparent 38%, rgba(0,0,0,0.42) 100%)' }}
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0"
        style={{ height: '22%', background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)' }}
      />

      {/* SVG zone overlays */}
      <svg
        ref={svgRef}
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
      >
        <defs>
          {/* Grid pattern — width corrected at runtime for square cells */}
          <pattern id="wgrid" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
            <line x1="0" y1="0" x2="4" y2="0" stroke="rgba(255,255,255,0.22)" strokeWidth="0.1" />
            <line x1="0" y1="0" x2="0" y2="4" stroke="rgba(255,255,255,0.22)" strokeWidth="0.1" />
          </pattern>

          {/* Gradient mask per zone for depth shading */}
          <linearGradient id="depth-fade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="white" stopOpacity="0.7" />
            <stop offset="100%" stopColor="white" stopOpacity="0.25" />
          </linearGradient>

          {ZONES.map((zone) => (
            <mask key={`mask-${zone.id}`} id={`mask-${zone.id}`}>
              <polygon
                points={toSvgPoints(zone.points)}
                fill="url(#depth-fade)"
              />
            </mask>
          ))}
        </defs>

        {ZONES.map((zone) => {
          const active = activeId === zone.id;
          const pts = toSvgPoints(zone.points);
          return (
            <g key={zone.id}>
              {/* Grid fill — masked for depth gradient */}
              <polygon
                points={pts}
                fill="url(#wgrid)"
                mask={`url(#mask-${zone.id})`}
                opacity={active ? 1 : 0}
                style={{ transition: 'opacity 0.28s ease', pointerEvents: 'none' }}
              />

              {/* White outline */}
              <polygon
                points={pts}
                fill="none"
                stroke="rgba(255,255,255,0.7)"
                strokeWidth="0.22"
                strokeLinejoin="round"
                opacity={active ? 1 : 0}
                style={{ transition: 'opacity 0.28s ease', pointerEvents: 'none' }}
              />

              {/* Subtle inner glow stroke */}
              <polygon
                points={pts}
                fill="none"
                stroke="rgba(255,255,255,0.15)"
                strokeWidth="1.2"
                strokeLinejoin="round"
                opacity={active ? 1 : 0}
                style={{ transition: 'opacity 0.28s ease', pointerEvents: 'none' }}
              />

              {/* Transparent clickable polygon */}
              <polygon
                points={pts}
                fill="transparent"
                style={{ cursor: 'pointer' }}
                onClick={() => handleClick(zone)}
                onMouseEnter={() => setActiveId(zone.id)}
                onMouseLeave={() => setActiveId(null)}
              />
            </g>
          );
        })}
      </svg>

      {/* HTML: pulsing dots + tooltips */}
      {ZONES.map((zone) => {
        const active = activeId === zone.id;
        const b = getBbox(zone.points);
        return (
          <div key={`ui-${zone.id}`} style={{ pointerEvents: 'none' }}>
            {/* Pulsing dot */}
            <div style={{ position: 'absolute', left: `${zone.dotX}%`, top: `${zone.dotY}%`, transform: 'translate(-50%, -50%)' }}>
              <span style={{
                position: 'absolute', width: 30, height: 30,
                top: '50%', left: '50%',
                transform: 'translate(-50%, -50%)',
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.12)',
                animation: active ? 'none' : 'pulse-ring 2.4s ease-out infinite',
              }} />
              <span style={{
                display: 'block', width: 9, height: 9, borderRadius: '50%',
                background: active ? '#fff' : 'rgba(255,255,255,0.8)',
                border: '1.5px solid rgba(255,255,255,0.45)',
                boxShadow: active ? '0 0 16px rgba(255,255,255,0.8), 0 0 4px #fff' : '0 0 6px rgba(255,255,255,0.4)',
                transition: 'all 0.2s ease',
                transform: active ? 'scale(1.4)' : 'scale(1)',
              }} />
            </div>

            {/* Tooltip */}
            <div style={{
              position: 'absolute',
              left: `${b.cx}%`,
              top: `${b.minY}%`,
              transform: `translate(-50%, calc(-100% - 8px))`,
              opacity: active ? 1 : 0,
              transition: 'opacity 0.2s ease, transform 0.2s ease',
              whiteSpace: 'nowrap',
              zIndex: 10,
            }}>
              <div style={{
                background: 'rgba(6,5,3,0.9)',
                border: '1px solid rgba(255,255,255,0.2)',
                backdropFilter: 'blur(12px)',
                borderRadius: 7,
                padding: '6px 12px',
              }}>
                <p style={{ margin: 0, fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.95)' }}>
                  {zone.label}
                </p>
                <p style={{ margin: '2px 0 0', fontSize: 10, color: 'rgba(255,255,255,0.45)' }}>
                  {zone.sub}
                </p>
              </div>
              <div style={{
                width: 0, height: 0, margin: '0 auto',
                borderLeft: '5px solid transparent', borderRight: '5px solid transparent',
                borderTop: '5px solid rgba(255,255,255,0.2)',
              }} />
            </div>
          </div>
        );
      })}

      {/* Scroll indicator */}
      <div className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
        <p className="text-xs uppercase tracking-widest text-neutral-500">Scroll</p>
        <div className="mx-auto mt-2 h-7 w-px bg-gradient-to-b from-neutral-500 to-transparent" />
      </div>

      <style>{`
        @keyframes pulse-ring {
          0%   { transform: translate(-50%,-50%) scale(0.7); opacity: 0.9; }
          100% { transform: translate(-50%,-50%) scale(3.2); opacity: 0; }
        }
      `}</style>
    </div>
  );
}

'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';

// Corners ordered: TL, TR, BR, BL — in % of container (0–100)
type Corner = [number, number];

interface Hotspot {
  id: string;
  label: string;
  sub: string;
  href?: string;
  scrollTo?: string;
  corners: [Corner, Corner, Corner, Corner];
  dotX: number;
  dotY: number;
}

const HOTSPOTS: Hotspot[] = [
  {
    id: 'library',
    label: 'Guitaristes',
    sub: 'Explorer leurs gammes signature',
    scrollTo: 'guitaristes',
    // Bookshelf — slight perspective taper (right edge leans inward going up)
    corners: [[0, 0], [23, 0], [21, 100], [0, 100]],
    dotX: 11,
    dotY: 38,
  },
  {
    id: 'guitar',
    label: 'Guitare',
    sub: 'Gammes et modes pour guitare',
    href: '/studio',
    // Stratocaster — narrow vertical zone, center-left
    corners: [[36, 53], [46, 52], [46, 99], [36, 99]],
    dotX: 41,
    dotY: 78,
  },
  {
    id: 'bass',
    label: 'Basse',
    sub: 'Gammes et modes pour basse',
    href: '/studio',
    // Precision Bass — right of mixing console
    corners: [[51, 36], [63, 35], [63, 99], [51, 99]],
    dotX: 57,
    dotY: 65,
  },
];

function toPoints(corners: [Corner, Corner, Corner, Corner]): string {
  return corners.map(([x, y]) => `${x},${y}`).join(' ');
}

// Axis-aligned L-brackets at each corner, b = arm length in SVG units
function bracketPath([[x0, y0], [x1, y1], [x2, y2], [x3, y3]]: [Corner, Corner, Corner, Corner], b: number): string {
  return [
    `M ${x0 + b},${y0} L ${x0},${y0} L ${x0},${y0 + b}`,
    `M ${x1 - b},${y1} L ${x1},${y1} L ${x1},${y1 + b}`,
    `M ${x2 - b},${y2} L ${x2},${y2} L ${x2},${y2 - b}`,
    `M ${x3 + b},${y3} L ${x3},${y3} L ${x3},${y3 - b}`,
  ].join(' ');
}

export function StudioHero() {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [dims, setDims] = useState({ w: 1920, h: 1080 });

  // Track container size to compute square grid cells despite viewBox="0 0 100 100" stretch
  useEffect(() => {
    function measure() {
      if (!containerRef.current) return;
      setDims({ w: containerRef.current.clientWidth, h: containerRef.current.clientHeight });
    }
    measure();
    const ro = new ResizeObserver(measure);
    if (containerRef.current) ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, []);

  // Parallax
  useEffect(() => {
    const container = containerRef.current;
    const image = imageRef.current;
    if (!container || !image) return;
    let rafId: number;
    let tx = 0, ty = 0, cx = 0, cy = 0;
    function onMove(e: MouseEvent) {
      tx = ((e.clientX / container!.clientWidth) - 0.5) * 18;
      ty = ((e.clientY / container!.clientHeight) - 0.5) * 10;
    }
    function tick() {
      cx += (tx - cx) * 0.06;
      cy += (ty - cy) * 0.06;
      image!.style.transform = `translate(calc(-50% + ${-cx}px), calc(-50% + ${-cy}px)) scale(1.06)`;
      rafId = requestAnimationFrame(tick);
    }
    container.addEventListener('mousemove', onMove);
    rafId = requestAnimationFrame(tick);
    return () => { container.removeEventListener('mousemove', onMove); cancelAnimationFrame(rafId); };
  }, []);

  // Grid cell size in SVG user units so cells appear ~28×28px on screen
  const cellW = 2800 / dims.w;
  const cellH = 2800 / dims.h;
  const BRACKET = 3.5;
  const STROKE = 0.22;

  function handleClick(spot: Hotspot) {
    if (spot.href) router.push(spot.href);
    else if (spot.scrollTo) document.getElementById(spot.scrollTo)?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div
      ref={containerRef}
      style={{ position: 'relative', height: '100vh', background: '#0a0806', overflow: 'hidden' }}
    >
      {/* Parallax image */}
      <div
        ref={imageRef}
        style={{
          position: 'absolute', top: '50%', left: '50%',
          width: '106%', height: '106%',
          transform: 'translate(-50%, -50%) scale(1.06)',
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

      {/* Vignette */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.5) 100%)' }}
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0"
        style={{ height: '28%', background: 'linear-gradient(to top, rgba(0,0,0,0.65), transparent)' }}
      />

      {/* SVG hotspot overlay */}
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
      >
        <defs>
          <pattern
            id="hotspot-grid"
            patternUnits="userSpaceOnUse"
            width={cellW}
            height={cellH}
          >
            <path
              d={`M ${cellW} 0 L 0 0 0 ${cellH}`}
              fill="none"
              stroke="rgba(255,255,255,0.09)"
              strokeWidth="0.1"
            />
          </pattern>
        </defs>

        {HOTSPOTS.map((spot) => {
          const active = activeId === spot.id;
          const pts = toPoints(spot.corners);
          const brackets = bracketPath(spot.corners, BRACKET);

          return (
            <g key={spot.id}>
              {/* Grid fill */}
              <polygon
                points={pts}
                fill="url(#hotspot-grid)"
                opacity={active ? 1 : 0}
                style={{ transition: 'opacity 0.25s ease', pointerEvents: 'none' }}
              />
              {/* Outline */}
              <polygon
                points={pts}
                fill="none"
                stroke="rgba(255,255,255,0.28)"
                strokeWidth={STROKE}
                opacity={active ? 1 : 0}
                style={{ transition: 'opacity 0.25s ease', pointerEvents: 'none' }}
              />
              {/* Corner brackets */}
              <path
                d={brackets}
                fill="none"
                stroke="rgba(255,255,255,0.9)"
                strokeWidth={STROKE * 1.2}
                strokeLinecap="square"
                opacity={active ? 1 : 0}
                style={{ transition: 'opacity 0.25s ease', pointerEvents: 'none' }}
              />
              {/* Hit area — polygon-shaped click target */}
              <polygon
                points={pts}
                fill="transparent"
                style={{ cursor: 'pointer' }}
                onMouseEnter={() => setActiveId(spot.id)}
                onMouseLeave={() => setActiveId(null)}
                onClick={() => handleClick(spot)}
              />
            </g>
          );
        })}
      </svg>

      {/* Dots + tooltips (HTML for legibility) */}
      {HOTSPOTS.map((spot) => {
        const active = activeId === spot.id;
        const [tl, tr] = spot.corners;
        const tooltipX = (tl[0] + tr[0]) / 2;
        const tooltipY = Math.min(tl[1], tr[1]);

        return (
          <div key={spot.id} style={{ pointerEvents: 'none' }}>
            {/* Tooltip */}
            <div style={{
              position: 'absolute',
              left: `${tooltipX}%`,
              top: `${tooltipY}%`,
              transform: 'translate(-50%, -100%)',
              paddingBottom: 6,
              opacity: active ? 1 : 0,
              transition: 'opacity 0.2s ease',
              whiteSpace: 'nowrap',
            }}>
              <div style={{
                background: 'rgba(8,6,4,0.88)',
                border: '1px solid rgba(255,255,255,0.22)',
                backdropFilter: 'blur(10px)',
                borderRadius: 6,
                padding: '5px 11px',
              }}>
                <p style={{ margin: 0, fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.95)' }}>
                  {spot.label}
                </p>
                <p style={{ margin: '2px 0 0', fontSize: 10, color: 'rgba(255,255,255,0.45)' }}>
                  {spot.sub}
                </p>
              </div>
              <div style={{ width: 0, height: 0, margin: '0 auto', borderLeft: '5px solid transparent', borderRight: '5px solid transparent', borderTop: '5px solid rgba(255,255,255,0.22)' }} />
            </div>

            {/* Pulsing dot */}
            <div style={{
              position: 'absolute',
              left: `${spot.dotX}%`,
              top: `${spot.dotY}%`,
              transform: 'translate(-50%, -50%)',
            }}>
              <span style={{
                position: 'absolute', width: 32, height: 32,
                top: '50%', left: '50%',
                transform: 'translate(-50%, -50%)',
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.12)',
                animation: active ? 'none' : 'pulse-ring 2.2s ease-out infinite',
              }} />
              <span style={{
                display: 'block', width: 10, height: 10, borderRadius: '50%',
                background: active ? '#fff' : 'rgba(255,255,255,0.8)',
                border: '1.5px solid rgba(255,255,255,0.5)',
                boxShadow: active ? '0 0 14px rgba(255,255,255,0.7)' : '0 0 6px rgba(255,255,255,0.4)',
                transition: 'all 0.2s',
                transform: active ? 'scale(1.4)' : 'scale(1)',
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

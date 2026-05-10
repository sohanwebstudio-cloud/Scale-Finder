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
    // Bookshelf — perspective trapezoid following the left wall
    corners: [[0, 0], [22, 0], [20, 100], [0, 100]],
    dotX: 10,
    dotY: 37,
  },
  {
    id: 'guitar',
    label: 'Guitare',
    sub: 'Gammes et modes pour guitare',
    href: '/studio',
    // Stratocaster — leaning against the stairs, center-left
    corners: [[41, 26], [49, 25], [50, 98], [40, 98]],
    dotX: 45,
    dotY: 76,
  },
  {
    id: 'bass',
    label: 'Basse',
    sub: 'Gammes et modes pour basse',
    href: '/studio',
    // Precision Bass — far right, next to the neon sign
    corners: [[73, 34], [81, 33], [82, 98], [72, 98]],
    dotX: 77,
    dotY: 74,
  },
];

function toPoints(corners: [Corner, Corner, Corner, Corner]): string {
  return corners.map(([x, y]) => `${x},${y}`).join(' ');
}

export function StudioHero() {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const [activeId, setActiveId] = useState<string | null>(null);

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

      {/* SVG hotspot — invisible polygon click zones only */}
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
      >
        {HOTSPOTS.map((spot) => (
          <polygon
            key={spot.id}
            points={toPoints(spot.corners)}
            fill="transparent"
            style={{ cursor: 'pointer' }}
            onMouseEnter={() => setActiveId(spot.id)}
            onMouseLeave={() => setActiveId(null)}
            onClick={() => handleClick(spot)}
          />
        ))}
      </svg>

      {/* Dots + tooltips (HTML for legibility) */}
      {HOTSPOTS.map((spot) => {
        const active = activeId === spot.id;

        return (
          <div key={spot.id} style={{ pointerEvents: 'none' }}>
            {/* Tooltip — anchored above the dot */}
            <div style={{
              position: 'absolute',
              left: `${spot.dotX}%`,
              top: `${spot.dotY}%`,
              transform: 'translate(-50%, calc(-100% - 18px))',
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
              <div style={{ width: 0, height: 0, margin: '0 auto', borderLeft: '5px solid transparent', borderRight: '5px solid transparent', borderTop: '5px solid rgba(8,6,4,0.88)' }} />
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

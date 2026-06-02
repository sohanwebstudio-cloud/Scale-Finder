'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';

interface Hotspot {
  id: string;
  x: number;
  y: number;
  label: string;
  sub: string;
  href?: string;
  scrollTo?: string;
}

const HOTSPOTS: Hotspot[] = [
  {
    id: 'library',
    x: 12,
    y: 35,
    label: 'Guitaristes',
    sub: 'Explorer leurs gammes signature',
    scrollTo: 'guitaristes',
  },
  {
    id: 'console',
    x: 57,
    y: 62,
    label: 'Scale Studio',
    sub: 'Trouver la gamme pour n\'importe quelle tonique',
    href: '/studio',
  },
  {
    id: 'guitar',
    x: 48,
    y: 78,
    label: 'Guitare',
    sub: 'Gammes et modes pour guitare',
    href: '/studio',
  },
  {
    id: 'bass',
    x: 74,
    y: 62,
    label: 'Basse',
    sub: 'Gammes et modes pour basse',
    href: '/studio',
  },
];

export function StudioHero() {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    const image = imageRef.current;
    if (!container || !image) return;

    let rafId: number;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    function onMouseMove(e: MouseEvent) {
      const { clientWidth, clientHeight } = container!;
      targetX = ((e.clientX / clientWidth) - 0.5) * 18;
      targetY = ((e.clientY / clientHeight) - 0.5) * 10;
    }

    function animate() {
      currentX += (targetX - currentX) * 0.06;
      currentY += (targetY - currentY) * 0.06;
      image!.style.transform = `translate(calc(-50% + ${-currentX}px), calc(-50% + ${-currentY}px)) scale(1.06)`;
      rafId = requestAnimationFrame(animate);
    }

    container.addEventListener('mousemove', onMouseMove);
    rafId = requestAnimationFrame(animate);
    return () => {
      container.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  function handleHotspotClick(hotspot: Hotspot) {
    if (hotspot.href) {
      router.push(hotspot.href);
    } else if (hotspot.scrollTo) {
      document.getElementById(hotspot.scrollTo)?.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden"
      style={{ height: '100vh', background: '#0a0806' }}
    >
      {/* Parallax image */}
      <div
        ref={imageRef}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '106%',
          height: '106%',
          transform: 'translate(-50%, -50%) scale(1.06)',
          willChange: 'transform',
        }}
      >
        <img
          src="/studio-hero.jpg"
          alt="Scale Finder Studio"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          draggable={false}
        />
      </div>

      {/* Dark gradient edges */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.55) 100%)',
        }}
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0"
        style={{ height: '30%', background: 'linear-gradient(to top, rgba(0,0,0,0.75), transparent)' }}
      />

      {/* Hotspots */}
      {HOTSPOTS.map((spot) => (
        <button
          key={spot.id}
          onClick={() => handleHotspotClick(spot)}
          onMouseEnter={() => setActiveHotspot(spot.id)}
          onMouseLeave={() => setActiveHotspot(null)}
          className="group absolute"
          style={{ left: `${spot.x}%`, top: `${spot.y}%`, transform: 'translate(-50%, -50%)' }}
        >
          {/* Outer pulse ring */}
          <span
            className="absolute inset-0 rounded-full"
            style={{
              width: 36,
              height: 36,
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              background: 'rgba(249, 115, 22, 0.15)',
              animation: 'ping 2s cubic-bezier(0,0,0.2,1) infinite',
            }}
          />
          {/* Dot */}
          <span
            className="relative flex items-center justify-center rounded-full border border-orange-400/60 transition-all duration-200"
            style={{
              width: 14,
              height: 14,
              background: activeHotspot === spot.id ? '#f97316' : 'rgba(249,115,22,0.7)',
              boxShadow: activeHotspot === spot.id
                ? '0 0 0 4px rgba(249,115,22,0.25), 0 0 16px rgba(249,115,22,0.6)'
                : '0 0 8px rgba(249,115,22,0.4)',
              transform: activeHotspot === spot.id ? 'scale(1.3)' : 'scale(1)',
            }}
          />

          {/* Tooltip */}
          <div
            className="pointer-events-none absolute bottom-full left-1/2 mb-3 -translate-x-1/2 transition-all duration-200"
            style={{
              opacity: activeHotspot === spot.id ? 1 : 0,
              transform: `translateX(-50%) translateY(${activeHotspot === spot.id ? 0 : 6}px)`,
              whiteSpace: 'nowrap',
            }}
          >
            <div
              className="rounded-lg px-3 py-2 text-left"
              style={{
                background: 'rgba(10,8,6,0.88)',
                border: '1px solid rgba(249,115,22,0.35)',
                backdropFilter: 'blur(8px)',
              }}
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-orange-400">
                {spot.label}
              </p>
              <p className="mt-0.5 text-xs text-neutral-400">{spot.sub}</p>
            </div>
            {/* Arrow */}
            <div
              className="mx-auto mt-0 h-0 w-0"
              style={{
                borderLeft: '5px solid transparent',
                borderRight: '5px solid transparent',
                borderTop: '5px solid rgba(249,115,22,0.35)',
              }}
            />
          </div>
        </button>
      ))}

      {/* Scroll indicator */}
      <div className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
        <p className="text-xs uppercase tracking-widest text-neutral-500">Scroll</p>
        <div className="mx-auto mt-2 h-7 w-px bg-gradient-to-b from-neutral-500 to-transparent" />
      </div>

      <style>{`
        @keyframes ping {
          75%, 100% { transform: translate(-50%, -50%) scale(2.5); opacity: 0; }
        }
      `}</style>
    </div>
  );
}

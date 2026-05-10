'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { detectPitchYIN } from '@/lib/music/yin';
import type { PitchResult } from '@/lib/music/yin';
import Link from 'next/link';

// ── Gauge geometry ─────────────────────────────────────────────────────────
// SVG viewBox: 0 0 500 300 — center at (250, 320), 20px below bottom edge
const CX = 250;
const CY = 320;
const RARC = 235;  // arc radius
const RNEEDLE = 215; // needle length
const DEG_MAX = 65; // ±65° rotation for ±50 cents

const REF_PITCHES = [432, 435, 440, 441, 442, 443, 444] as const;
const IN_TUNE_CENTS = 5;

function polar(r: number, angleDeg: number) {
  const rad = (angleDeg - 90) * (Math.PI / 180);
  return { x: CX + r * Math.cos(rad), y: CY + r * Math.sin(rad) };
}

function arcPath(r: number, a1: number, a2: number, sweep = 1): string {
  const p1 = polar(r, a1);
  const p2 = polar(r, a2);
  const large = Math.abs(a2 - a1) > 180 ? 1 : 0;
  return `M ${p1.x.toFixed(2)},${p1.y.toFixed(2)} A ${r},${r} 0 ${large},${sweep} ${p2.x.toFixed(2)},${p2.y.toFixed(2)}`;
}

function centsToAngle(cents: number) {
  return Math.max(-DEG_MAX, Math.min(DEG_MAX, (cents / 50) * DEG_MAX));
}

// Tick marks: angle → [x1,y1, x2,y2]
const MAJOR_TICKS = [-50, -25, 0, 25, 50];
const MINOR_TICKS = [-40, -30, -20, -10, 10, 20, 30, 40];

// ── Zone arcs (dim background) ─────────────────────────────────────────────
// angles: -65° to +65°, mapping -50¢ to +50¢
const ZONES = [
  { a1: -DEG_MAX, a2: centsToAngle(-15), color: '#5a0e00' },
  { a1: centsToAngle(-15), a2: centsToAngle(-5), color: '#5a3300' },
  { a1: centsToAngle(-5), a2: centsToAngle(5), color: '#004a1e' },
  { a1: centsToAngle(5), a2: centsToAngle(15), color: '#5a3300' },
  { a1: centsToAngle(15), a2: DEG_MAX, color: '#5a0e00' },
];

export function RetroTuner() {
  const [refA, setRefA] = useState(440);
  const [pitch, setPitch] = useState<PitchResult | null>(null);
  const [listening, setListening] = useState(false);
  const [source, setSource] = useState<'mic' | 'tab' | null>(null);
  const [error, setError] = useState<string | null>(null);

  const ctxRef = useRef<AudioContext | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const rafRef = useRef<number | null>(null);
  const refARef = useRef(refA);

  useEffect(() => { refARef.current = refA; }, [refA]);

  const stop = useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    streamRef.current?.getTracks().forEach(t => t.stop());
    ctxRef.current?.close();
    ctxRef.current = null;
    streamRef.current = null;
    rafRef.current = null;
    setListening(false);
    setSource(null);
    setPitch(null);
  }, []);

  const start = useCallback(async (mode: 'mic' | 'tab') => {
    setError(null);
    try {
      let stream: MediaStream;
      if (mode === 'tab') {
        stream = await navigator.mediaDevices.getDisplayMedia({
          audio: { echoCancellation: false, noiseSuppression: false } as MediaTrackConstraints,
          video: true,
        });
        stream.getVideoTracks().forEach(t => t.stop());
      } else {
        stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      }
      streamRef.current = stream;

      const ctx = new AudioContext();
      ctxRef.current = ctx;
      const analyser = ctx.createAnalyser();
      analyser.fftSize = 4096;
      ctx.createMediaStreamSource(stream).connect(analyser);
      const buf = new Float32Array(analyser.fftSize);

      let frame = 0;
      const loop = () => {
        frame++;
        if (frame % 3 === 0) {
          analyser.getFloatTimeDomainData(buf);
          setPitch(detectPitchYIN(buf, ctx.sampleRate, refARef.current));
        }
        rafRef.current = requestAnimationFrame(loop);
      };
      loop();
      setSource(mode);
      setListening(true);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Accès audio refusé');
    }
  }, []);

  useEffect(() => () => stop(), [stop]);

  // ── Derived display values ────────────────────────────────────────────────
  const inTune = pitch !== null && Math.abs(pitch.cents) <= IN_TUNE_CENTS;
  const needleAngle = pitch ? centsToAngle(pitch.cents) : 0;
  const amber = '#ffaa00';
  const green = '#00ff88';
  const activeColor = inTune ? green : amber;
  const dimColor = inTune ? '#004a1e' : '#2a1a00';

  const centsLabel = pitch
    ? `${pitch.cents >= 0 ? '+' : ''}${pitch.cents.toFixed(1)} ¢`
    : '— ¢';
  const freqLabel = pitch ? `${pitch.freq} Hz` : '——— Hz';

  const centsColor = pitch
    ? inTune
      ? green
      : Math.abs(pitch.cents) > 20 ? '#ff4400' : amber
    : '#2a1a00';

  return (
    <div style={{
      minHeight: '100vh',
      background: 'radial-gradient(ellipse at 50% 30%, #100c08 0%, #050402 70%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24px 16px',
      fontFamily: "'Courier New', monospace",
    }}>
      {/* Back link */}
      <Link href="/" style={{
        alignSelf: 'flex-start',
        maxWidth: 500,
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 12,
        color: '#554433',
        fontSize: 11,
        textDecoration: 'none',
        letterSpacing: '0.15em',
        textTransform: 'uppercase',
        display: 'block',
      }}>
        ← Studio
      </Link>

      {/* Device body */}
      <div style={{
        width: '100%',
        maxWidth: 500,
        background: 'linear-gradient(160deg, #181410 0%, #0e0b08 100%)',
        borderRadius: 18,
        border: '1px solid #2a1e0e',
        boxShadow: '0 60px 120px rgba(0,0,0,0.95), 0 0 0 1px rgba(255,255,255,0.02) inset, 0 1px 0 rgba(255,200,100,0.04) inset',
        overflow: 'hidden',
      }}>

        {/* ── Header bar ──────────────────────────────────────────────── */}
        <div style={{
          background: '#0d0a07',
          padding: '14px 20px',
          borderBottom: '1px solid #1e1509',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          <div>
            <p style={{ margin: 0, fontSize: 9, letterSpacing: '0.35em', textTransform: 'uppercase', color: '#554422' }}>Scale Finder</p>
            <p style={{ margin: '2px 0 0', fontSize: 14, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#886633', fontWeight: 700 }}>
              Chromatic Tuner
            </p>
          </div>
          {/* Status LED */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            {listening && (
              <span style={{ fontSize: 10, letterSpacing: '0.1em', color: activeColor, opacity: 0.7 }}>
                {source === 'tab' ? 'ONGLET' : 'MICRO'}
              </span>
            )}
            <div style={{
              width: 10,
              height: 10,
              borderRadius: '50%',
              background: listening ? activeColor : '#1a1208',
              boxShadow: listening ? `0 0 14px ${activeColor}, 0 0 28px ${activeColor}66` : 'none',
              transition: 'all 0.4s',
            }} />
          </div>
        </div>

        {/* ── Gauge panel ─────────────────────────────────────────────── */}
        <div style={{ background: '#080604', position: 'relative', borderBottom: '1px solid #1a1208' }}>
          <svg
            viewBox="0 0 500 300"
            style={{ width: '100%', display: 'block' }}
            aria-hidden
          >
            <defs>
              <filter id="glow-soft">
                <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
                <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
              </filter>
              <filter id="glow-hard">
                <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
                <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
              </filter>
              <filter id="needle-glow">
                <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
              </filter>
            </defs>

            {/* Background arc track */}
            <path
              d={arcPath(RARC, -DEG_MAX, DEG_MAX)}
              fill="none"
              stroke="#120e08"
              strokeWidth="40"
              strokeLinecap="butt"
            />

            {/* Zone arcs */}
            {ZONES.map((z, i) => (
              <path
                key={i}
                d={arcPath(RARC, z.a1, z.a2)}
                fill="none"
                stroke={z.color}
                strokeWidth="24"
                strokeLinecap="butt"
                opacity="0.9"
              />
            ))}

            {/* Arc outer edge line */}
            <path d={arcPath(RARC + 19, -DEG_MAX, DEG_MAX)} fill="none" stroke="#2a1e0a" strokeWidth="1" />
            <path d={arcPath(RARC - 11, -DEG_MAX, DEG_MAX)} fill="none" stroke="#1a1408" strokeWidth="1" />

            {/* Major ticks + labels */}
            {MAJOR_TICKS.map(c => {
              const a = centsToAngle(c);
              const outer = polar(RARC + 19, a);
              const inner = polar(RARC - 16, a);
              const label = polar(RARC - 36, a);
              return (
                <g key={c}>
                  <line x1={outer.x.toFixed(1)} y1={outer.y.toFixed(1)} x2={inner.x.toFixed(1)} y2={inner.y.toFixed(1)}
                    stroke="#7a5520" strokeWidth="2" />
                  <text x={label.x.toFixed(1)} y={label.y.toFixed(1)}
                    textAnchor="middle" dominantBaseline="middle"
                    fill="#5a3a12" fontSize="13" fontFamily="'Courier New', monospace" fontWeight="bold">
                    {c === 0 ? '0' : Math.abs(c)}
                  </text>
                </g>
              );
            })}

            {/* Minor ticks */}
            {MINOR_TICKS.map(c => {
              const a = centsToAngle(c);
              const outer = polar(RARC + 19, a);
              const inner = polar(RARC + 4, a);
              return (
                <line key={c}
                  x1={outer.x.toFixed(1)} y1={outer.y.toFixed(1)}
                  x2={inner.x.toFixed(1)} y2={inner.y.toFixed(1)}
                  stroke="#3a2510" strokeWidth="1" />
              );
            })}

            {/* FLAT / SHARP labels */}
            {(() => {
              const flatPos = polar(RARC - 58, -DEG_MAX + 6);
              const sharpPos = polar(RARC - 58, DEG_MAX - 6);
              return (
                <>
                  <text x={flatPos.x.toFixed(1)} y={flatPos.y.toFixed(1)}
                    textAnchor="middle" dominantBaseline="middle"
                    fill="#663300" fontSize="11" fontFamily="'Courier New', monospace" letterSpacing="2">
                    FLAT
                  </text>
                  <text x={sharpPos.x.toFixed(1)} y={sharpPos.y.toFixed(1)}
                    textAnchor="middle" dominantBaseline="middle"
                    fill="#663300" fontSize="11" fontFamily="'Courier New', monospace" letterSpacing="2">
                    SHARP
                  </text>
                </>
              );
            })()}

            {/* IN TUNE text */}
            <text
              x={CX} y={CY - RARC + 52}
              textAnchor="middle" dominantBaseline="middle"
              fill={inTune && listening ? green : 'transparent'}
              fontSize="11" fontFamily="'Courier New', monospace" letterSpacing="3"
              filter={inTune && listening ? 'url(#glow-soft)' : undefined}
              style={{ transition: 'fill 0.3s' }}
            >
              IN TUNE
            </text>

            {/* Needle glow (blurred halo) */}
            <g
              style={{
                transform: `rotate(${listening ? needleAngle : 0}deg)`,
                transformOrigin: `${CX}px ${CY}px`,
                transition: 'transform 0.09s cubic-bezier(0.2, 0.6, 0.4, 1)',
              }}
              filter="url(#needle-glow)"
              opacity={listening ? 0.6 : 0}
            >
              <polygon
                points={`${CX - 4},${CY} ${CX},${CY - RNEEDLE} ${CX + 4},${CY}`}
                fill={activeColor}
              />
            </g>

            {/* Needle */}
            <g
              style={{
                transform: `rotate(${listening ? needleAngle : 0}deg)`,
                transformOrigin: `${CX}px ${CY}px`,
                transition: 'transform 0.09s cubic-bezier(0.2, 0.6, 0.4, 1)',
              }}
            >
              <polygon
                points={`${CX - 3},${CY} ${CX},${CY - RNEEDLE} ${CX + 3},${CY}`}
                fill={listening ? activeColor : '#2a1a08'}
                style={{ transition: 'fill 0.3s' }}
              />
              {/* Needle center line for crispness */}
              <line
                x1={CX} y1={CY}
                x2={CX} y2={CY - RNEEDLE + 10}
                stroke={listening ? activeColor : '#2a1a08'}
                strokeWidth="1"
                opacity="0.4"
                style={{ transition: 'stroke 0.3s' }}
              />
            </g>

            {/* Center cap */}
            <circle cx={CX} cy={CY} r="12" fill="#080604" stroke="#2a1e0a" strokeWidth="2" />
            <circle
              cx={CX} cy={CY} r="5"
              fill={listening ? activeColor : '#2a1a08'}
              filter={listening ? 'url(#glow-soft)' : undefined}
              style={{ transition: 'fill 0.3s' }}
            />
          </svg>
        </div>

        {/* ── Display section ──────────────────────────────────────────── */}
        <div style={{ padding: '20px 24px', background: '#090705' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 20 }}>

            {/* Note name display */}
            <div style={{
              flex: '0 0 auto',
              background: '#050402',
              border: `1px solid ${pitch ? dimColor : '#1a1208'}`,
              borderRadius: 10,
              padding: '10px 24px',
              textAlign: 'center',
              minWidth: 130,
              boxShadow: pitch
                ? `0 0 40px ${dimColor}, 0 0 80px ${dimColor}66, inset 0 0 30px rgba(0,0,0,0.9)`
                : 'inset 0 0 30px rgba(0,0,0,0.9)',
              transition: 'all 0.3s',
            }}>
              <div style={{
                fontSize: 72,
                fontWeight: 700,
                lineHeight: 1,
                color: pitch ? activeColor : '#1e1208',
                textShadow: pitch
                  ? `0 0 20px ${activeColor}cc, 0 0 50px ${activeColor}44`
                  : 'none',
                transition: 'all 0.3s',
                letterSpacing: '-0.03em',
              }}>
                {pitch?.note ?? '—'}
                <sup style={{ fontSize: 30, verticalAlign: 'super', marginLeft: 4, letterSpacing: 0 }}>
                  {pitch?.octave ?? ''}
                </sup>
              </div>
            </div>

            {/* Freq + cents */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 10 }}>
              <div style={{
                background: '#050402',
                border: '1px solid #1a1208',
                borderRadius: 8,
                padding: '8px 14px',
              }}>
                <p style={{ margin: 0, fontSize: 9, letterSpacing: '0.2em', color: '#443322', textTransform: 'uppercase', marginBottom: 4 }}>
                  Fréquence
                </p>
                <p style={{
                  margin: 0,
                  fontSize: 20,
                  color: pitch ? amber : '#1e1208',
                  textShadow: pitch ? `0 0 12px ${amber}55` : 'none',
                  transition: 'all 0.3s',
                  letterSpacing: '0.05em',
                }}>
                  {freqLabel}
                </p>
              </div>

              <div style={{
                background: '#050402',
                border: '1px solid #1a1208',
                borderRadius: 8,
                padding: '8px 14px',
              }}>
                <p style={{ margin: 0, fontSize: 9, letterSpacing: '0.2em', color: '#443322', textTransform: 'uppercase', marginBottom: 4 }}>
                  Écart
                </p>
                <p style={{
                  margin: 0,
                  fontSize: 20,
                  color: centsColor,
                  textShadow: pitch ? `0 0 12px ${centsColor}55` : 'none',
                  transition: 'all 0.3s',
                  letterSpacing: '0.05em',
                }}>
                  {centsLabel}
                </p>
              </div>
            </div>
          </div>

          {/* ── Controls ────────────────────────────────────────────────── */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
            {!listening ? (
              <>
                <RetroButton onClick={() => start('mic')}>🎙 Micro</RetroButton>
                <RetroButton onClick={() => start('tab')}>🖥 Onglet</RetroButton>
              </>
            ) : (
              <RetroButton onClick={stop} danger>⏹ Arrêter</RetroButton>
            )}

            <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ fontSize: 11, color: '#664422', letterSpacing: '0.15em' }}>A =</span>
              <select
                value={refA}
                onChange={e => setRefA(Number(e.target.value))}
                style={{
                  background: '#0d0a07',
                  color: '#aa7733',
                  border: '1px solid #3a2510',
                  borderRadius: 6,
                  padding: '7px 10px',
                  fontSize: 13,
                  fontFamily: "'Courier New', monospace",
                  outline: 'none',
                  cursor: 'pointer',
                  appearance: 'none',
                  WebkitAppearance: 'none',
                }}
              >
                {REF_PITCHES.map(p => (
                  <option key={p} value={p}>{p} Hz</option>
                ))}
              </select>
            </div>
          </div>

          {error && (
            <p style={{ marginTop: 12, fontSize: 12, color: '#ff4400', letterSpacing: '0.05em' }}>
              {error}
            </p>
          )}
        </div>

        {/* Bottom screw detail */}
        <div style={{
          background: '#0d0a07',
          borderTop: '1px solid #1a1208',
          padding: '10px 20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <Screw />
          <p style={{ margin: 0, fontSize: 9, letterSpacing: '0.2em', color: '#2a1a08', textTransform: 'uppercase' }}>
            SF-01 · Chromatic
          </p>
          <Screw />
        </div>
      </div>

      <style>{`
        select option { background: #0d0a07; color: #aa7733; }
      `}</style>
    </div>
  );
}

function RetroButton({
  children,
  onClick,
  danger,
}: {
  children: React.ReactNode;
  onClick: () => void;
  danger?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      style={{
        background: danger ? '#2a0800' : '#1a1208',
        border: `1px solid ${danger ? '#5a1500' : '#3a2510'}`,
        borderRadius: 8,
        padding: '8px 18px',
        color: danger ? '#cc4400' : '#aa7733',
        fontSize: 13,
        fontFamily: "'Courier New', monospace",
        cursor: 'pointer',
        letterSpacing: '0.08em',
        transition: 'all 0.15s',
        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.04), 0 2px 4px rgba(0,0,0,0.5)',
      }}
    >
      {children}
    </button>
  );
}

function Screw() {
  return (
    <div style={{
      width: 12, height: 12,
      borderRadius: '50%',
      background: 'radial-gradient(circle at 40% 35%, #2a2018, #0a0806)',
      border: '1px solid #1e1608',
      boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.8)',
      position: 'relative',
    }}>
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: '60%',
        height: '1px',
        background: '#1a1208',
        transform: 'translate(-50%, -50%) rotate(45deg)',
      }} />
    </div>
  );
}

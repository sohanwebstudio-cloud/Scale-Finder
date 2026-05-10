'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { detectPitchACF } from '@/lib/music/pitch-acf';
import { OutlierRemovingSmoother } from '@/lib/music/smoother';
import Link from 'next/link';

// ── Gauge geometry ─────────────────────────────────────────────────────────
const CX = 250, CY = 320, RARC = 235, RNEEDLE = 215, DEG_MAX = 65;

// ── Note names (sharps — standard for chromatic tuners) ───────────────────
const NOTES = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

const REF_PITCHES = [432, 435, 440, 441, 442, 443, 444] as const;

// ── Smoothing constants ────────────────────────────────────────────────────
const ALPHA_ANGLE    = 0.22;  // visual needle lerp per frame — higher = snappier
const SILENCE_FRAMES = 12;    // ACF frames of silence before clearing (12 × 66ms ≈ 800ms)

// ── SVG helpers ───────────────────────────────────────────────────────────
function polar(r: number, angleDeg: number) {
  const rad = (angleDeg - 90) * (Math.PI / 180);
  return { x: CX + r * Math.cos(rad), y: CY + r * Math.sin(rad) };
}
function arcPath(r: number, a1: number, a2: number): string {
  const p1 = polar(r, a1), p2 = polar(r, a2);
  return `M ${p1.x.toFixed(2)},${p1.y.toFixed(2)} A ${r},${r} 0 0,1 ${p2.x.toFixed(2)},${p2.y.toFixed(2)}`;
}
function centsToAngle(c: number) {
  return Math.max(-DEG_MAX, Math.min(DEG_MAX, (c / 50) * DEG_MAX));
}
function freqToMidi(freq: number, refA: number) {
  return 69 + 12 * Math.log2(freq / refA);
}

// ── Zone arcs (dim, static) ───────────────────────────────────────────────
const ZONES = [
  { a1: -DEG_MAX,              a2: centsToAngle(-15), color: '#5a0e00' },
  { a1: centsToAngle(-15),     a2: centsToAngle(-5),  color: '#5a3300' },
  { a1: centsToAngle(-5),      a2: centsToAngle(5),   color: '#004a1e' },
  { a1: centsToAngle(5),       a2: centsToAngle(15),  color: '#5a3300' },
  { a1: centsToAngle(15),      a2: DEG_MAX,           color: '#5a0e00' },
];
const MAJOR_TICKS = [-50, -25, 0, 25, 50];
const MINOR_TICKS = [-40, -30, -20, -10, 10, 20, 30, 40];

// ── Display state (React) — updated at ~10fps, not 60fps ──────────────────
interface Display {
  note: string;
  octave: number;
  freq: number;
  cents: number;
}

export function RetroTuner() {
  const [refA, setRefA] = useState(440);
  const [listening, setListening] = useState(false);
  const [source, setSource] = useState<'mic' | 'tab' | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [display, setDisplay] = useState<Display | null>(null);
  const [inTune, setInTune] = useState(false);

  // Audio
  const ctxRef       = useRef<AudioContext | null>(null);
  const streamRef    = useRef<MediaStream | null>(null);
  const analyserRef  = useRef<AnalyserNode | null>(null);
  const bufRef       = useRef<Float32Array<ArrayBuffer> | null>(null);
  const sampleRateRef = useRef(44100);
  const rafRef       = useRef<number | null>(null);

  // Mutable config (avoids stale closure)
  const refARef = useRef(refA);
  useEffect(() => { refARef.current = refA; }, [refA]);

  // Pitch smoother (OutlierRemovingSmoother — thetwom/Tuner technique)
  const smootherRef     = useRef(new OutlierRemovingSmoother(10, 0.1, 1, 2, 3));
  const smoothedFreqRef = useRef<number | null>(null);
  const acfSilenceRef   = useRef(0);
  const currentAngleRef  = useRef(0);
  const frameRef         = useRef(0);

  // Direct DOM refs for needle — bypass React for 60fps animation
  const needleRef     = useRef<SVGGElement | null>(null);
  const needleGlowRef = useRef<SVGGElement | null>(null);
  const ledRef        = useRef<HTMLDivElement | null>(null);

  // ── Audio stop ─────────────────────────────────────────────────────────
  const stop = useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    streamRef.current?.getTracks().forEach(t => t.stop());
    ctxRef.current?.close();
    ctxRef.current = null; streamRef.current = null;
    analyserRef.current = null; bufRef.current = null;
    rafRef.current = null;
    smootherRef.current.clear();
    smoothedFreqRef.current = null;
    acfSilenceRef.current = 0;
    currentAngleRef.current = 0;
    frameRef.current = 0;
    setListening(false); setSource(null); setDisplay(null); setInTune(false);
  }, []);

  // ── Audio start ────────────────────────────────────────────────────────
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
      sampleRateRef.current = ctx.sampleRate;

      const analyser = ctx.createAnalyser();
      // 8192 samples → halfN = 4096 → can detect down to ~11 Hz (well below E2=82 Hz)
      analyser.fftSize = 8192;
      analyserRef.current = analyser;
      ctx.createMediaStreamSource(stream).connect(analyser);
      bufRef.current = new Float32Array(analyser.fftSize);

      setSource(mode);
      setListening(true);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Accès audio refusé');
    }
  }, []);

  // ── Main animation loop — runs after listening = true ─────────────────
  useEffect(() => {
    if (!listening) return;

    const loop = () => {
      frameRef.current++;
      const f = frameRef.current;

      // ── Run ACF every 4 frames (~66ms at 60fps) ──────────────────────
      if (f % 4 === 0 && analyserRef.current && bufRef.current) {
        analyserRef.current.getFloatTimeDomainData(bufRef.current);
        const result = detectPitchACF(bufRef.current, sampleRateRef.current, refARef.current);

        if (result) {
          acfSilenceRef.current = 0;
          const smoothed = smootherRef.current.addValue(result.freq);
          if (smoothed !== null) smoothedFreqRef.current = smoothed;
        } else {
          acfSilenceRef.current++;
          if (acfSilenceRef.current >= SILENCE_FRAMES) {
            smootherRef.current.clear();
            smoothedFreqRef.current = null;
            if (acfSilenceRef.current === SILENCE_FRAMES) {
              setDisplay(null);
              setInTune(false);
            }
          }
        }
      }

      // ── Every frame: smooth needle angle, write directly to DOM ──────
      const freq = smoothedFreqRef.current;
      let targetAngle = 0;

      if (freq !== null) {
        const midi = freqToMidi(freq, refARef.current);
        const cents = (midi - Math.round(midi)) * 100;
        targetAngle = centsToAngle(cents);
      }

      // Lerp toward target — the 0.15 factor gives natural spring feel
      currentAngleRef.current += (targetAngle - currentAngleRef.current) * ALPHA_ANGLE;
      const angle = currentAngleRef.current;
      const transform = `rotate(${angle.toFixed(3)}deg)`;

      if (needleRef.current) {
        needleRef.current.style.transform = transform;
      }
      if (needleGlowRef.current) {
        needleGlowRef.current.style.transform = transform;
        needleGlowRef.current.style.opacity = freq !== null ? '0.55' : '0';
      }

      // ── Update React display state every 6 frames (~100ms) ──────────
      if (f % 6 === 0 && freq !== null) {
        const midi = freqToMidi(freq, refARef.current);
        const roundedMidi = Math.round(midi);
        const cents = Math.round((midi - roundedMidi) * 1000) / 10;
        const note = NOTES[((roundedMidi % 12) + 12) % 12];
        const octave = Math.floor(roundedMidi / 12) - 1;
        const tune = Math.abs(cents) <= 5;
        setDisplay({ note, octave, freq: Math.round(freq * 10) / 10, cents });
        setInTune(tune);

        // Update LED color directly (avoids re-render cost)
        if (ledRef.current) {
          const c = tune ? '#00ff88' : '#ffaa00';
          ledRef.current.style.background = c;
          ledRef.current.style.boxShadow = `0 0 14px ${c}, 0 0 28px ${c}66`;
        }
      }

      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [listening]);

  useEffect(() => () => stop(), [stop]);

  // ── Derived display ───────────────────────────────────────────────────
  const amber = '#ffaa00';
  const green = '#00ff88';
  const activeColor = inTune ? green : amber;
  const dimColor    = inTune ? '#004a1e' : '#2a1a00';

  const centsLabel = display
    ? `${display.cents >= 0 ? '+' : ''}${display.cents.toFixed(1)} ¢`
    : '— ¢';
  const freqLabel = display ? `${display.freq} Hz` : '——— Hz';
  const centsColor = display
    ? Math.abs(display.cents) <= 5 ? green
    : Math.abs(display.cents) > 20 ? '#ff4400'
    : amber
    : '#2a1a00';

  return (
    <div style={{
      minHeight: '100vh',
      background: 'radial-gradient(ellipse at 50% 30%, #100c08 0%, #050402 70%)',
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      padding: '24px 16px',
      fontFamily: "'Courier New', monospace",
    }}>
      <Link href="/" style={{
        alignSelf: 'flex-start', maxWidth: 500, width: '100%',
        margin: '0 auto 12px', display: 'block',
        color: '#554433', fontSize: 11, textDecoration: 'none',
        letterSpacing: '0.15em', textTransform: 'uppercase',
      }}>← Studio</Link>

      {/* Device body */}
      <div style={{
        width: '100%', maxWidth: 500,
        background: 'linear-gradient(160deg, #181410 0%, #0e0b08 100%)',
        borderRadius: 18, border: '1px solid #2a1e0e',
        boxShadow: '0 60px 120px rgba(0,0,0,0.95), 0 0 0 1px rgba(255,255,255,0.02) inset, 0 1px 0 rgba(255,200,100,0.04) inset',
        overflow: 'hidden',
      }}>

        {/* Header */}
        <div style={{
          background: '#0d0a07', padding: '14px 20px',
          borderBottom: '1px solid #1e1509',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <div>
            <p style={{ margin: 0, fontSize: 9, letterSpacing: '0.35em', textTransform: 'uppercase', color: '#554422' }}>Scale Finder</p>
            <p style={{ margin: '2px 0 0', fontSize: 14, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#886633', fontWeight: 700 }}>
              Chromatic Tuner
            </p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            {listening && (
              <span style={{ fontSize: 10, letterSpacing: '0.1em', color: '#664422' }}>
                {source === 'tab' ? 'ONGLET' : 'MICRO'}
              </span>
            )}
            {/* LED — updated directly via ledRef for 0 re-renders */}
            <div
              ref={ledRef}
              style={{
                width: 10, height: 10, borderRadius: '50%',
                background: listening ? amber : '#1a1208',
                boxShadow: listening ? `0 0 14px ${amber}` : 'none',
                transition: 'background 0.4s, box-shadow 0.4s',
              }}
            />
          </div>
        </div>

        {/* Gauge */}
        <div style={{ background: '#080604', position: 'relative', borderBottom: '1px solid #1a1208' }}>
          <svg viewBox="0 0 500 300" style={{ width: '100%', display: 'block' }} aria-hidden>
            <defs>
              <filter id="t-glow-soft">
                <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="b" />
                <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
              </filter>
              <filter id="t-needle-blur">
                <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
              </filter>
            </defs>

            {/* Background track */}
            <path d={arcPath(RARC, -DEG_MAX, DEG_MAX)} fill="none" stroke="#120e08" strokeWidth="40" strokeLinecap="butt" />

            {/* Zone arcs */}
            {ZONES.map((z, i) => (
              <path key={i} d={arcPath(RARC, z.a1, z.a2)} fill="none" stroke={z.color} strokeWidth="24" strokeLinecap="butt" opacity="0.9" />
            ))}

            {/* Arc edges */}
            <path d={arcPath(RARC + 19, -DEG_MAX, DEG_MAX)} fill="none" stroke="#2a1e0a" strokeWidth="1" />
            <path d={arcPath(RARC - 11, -DEG_MAX, DEG_MAX)} fill="none" stroke="#1a1408" strokeWidth="1" />

            {/* Major ticks + labels */}
            {MAJOR_TICKS.map(c => {
              const a = centsToAngle(c);
              const outer = polar(RARC + 19, a);
              const inner = polar(RARC - 16, a);
              const lbl   = polar(RARC - 36, a);
              return (
                <g key={c}>
                  <line x1={outer.x.toFixed(1)} y1={outer.y.toFixed(1)} x2={inner.x.toFixed(1)} y2={inner.y.toFixed(1)} stroke="#7a5520" strokeWidth="2" />
                  <text x={lbl.x.toFixed(1)} y={lbl.y.toFixed(1)} textAnchor="middle" dominantBaseline="middle"
                    fill="#5a3a12" fontSize="13" fontFamily="'Courier New', monospace" fontWeight="bold">
                    {c === 0 ? '0' : Math.abs(c)}
                  </text>
                </g>
              );
            })}

            {/* Minor ticks */}
            {MINOR_TICKS.map(c => {
              const a = centsToAngle(c);
              const o = polar(RARC + 19, a), inn = polar(RARC + 4, a);
              return <line key={c} x1={o.x.toFixed(1)} y1={o.y.toFixed(1)} x2={inn.x.toFixed(1)} y2={inn.y.toFixed(1)} stroke="#3a2510" strokeWidth="1" />;
            })}

            {/* FLAT / SHARP */}
            {(() => {
              const fl = polar(RARC - 58, -DEG_MAX + 8), sh = polar(RARC - 58, DEG_MAX - 8);
              return (
                <>
                  <text x={fl.x.toFixed(1)} y={fl.y.toFixed(1)} textAnchor="middle" dominantBaseline="middle" fill="#663300" fontSize="11" fontFamily="'Courier New', monospace" letterSpacing="2">FLAT</text>
                  <text x={sh.x.toFixed(1)} y={sh.y.toFixed(1)} textAnchor="middle" dominantBaseline="middle" fill="#663300" fontSize="11" fontFamily="'Courier New', monospace" letterSpacing="2">SHARP</text>
                </>
              );
            })()}

            {/* IN TUNE */}
            <text
              x={CX} y={CY - RARC + 52} textAnchor="middle" dominantBaseline="middle"
              fill={inTune && display ? green : 'transparent'}
              fontSize="11" fontFamily="'Courier New', monospace" letterSpacing="3"
              filter={inTune && display ? 'url(#t-glow-soft)' : undefined}
              style={{ transition: 'fill 0.3s' }}
            >
              IN TUNE
            </text>

            {/* Needle glow — direct DOM via ref, no React re-render for transform */}
            <g
              ref={needleGlowRef}
              style={{ transformOrigin: `${CX}px ${CY}px`, opacity: 0 }}
              filter="url(#t-needle-blur)"
            >
              <polygon points={`${CX - 5},${CY} ${CX},${CY - RNEEDLE} ${CX + 5},${CY}`} fill={amber} />
            </g>

            {/* Needle main */}
            <g
              ref={needleRef}
              style={{ transformOrigin: `${CX}px ${CY}px` }}
            >
              <polygon
                points={`${CX - 3},${CY} ${CX},${CY - RNEEDLE} ${CX + 3},${CY}`}
                fill={listening ? (display ? activeColor : '#4a2e08') : '#2a1a08'}
                style={{ transition: 'fill 0.4s' }}
              />
            </g>

            {/* Center cap */}
            <circle cx={CX} cy={CY} r="12" fill="#080604" stroke="#2a1e0a" strokeWidth="2" />
            <circle cx={CX} cy={CY} r="5"
              fill={display ? activeColor : '#2a1a08'}
              filter={display ? 'url(#t-glow-soft)' : undefined}
              style={{ transition: 'fill 0.4s' }}
            />
          </svg>
        </div>

        {/* Display */}
        <div style={{ padding: '20px 24px', background: '#090705' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 20 }}>

            {/* Note name */}
            <div style={{
              flex: '0 0 auto',
              background: '#050402',
              border: `1px solid ${display ? dimColor : '#1a1208'}`,
              borderRadius: 10, padding: '10px 24px', textAlign: 'center', minWidth: 130,
              boxShadow: display
                ? `0 0 40px ${dimColor}, 0 0 80px ${dimColor}66, inset 0 0 30px rgba(0,0,0,0.9)`
                : 'inset 0 0 30px rgba(0,0,0,0.9)',
              transition: 'all 0.4s',
            }}>
              <div style={{
                fontSize: 72, fontWeight: 700, lineHeight: 1, letterSpacing: '-0.03em',
                color: display ? activeColor : '#1e1208',
                textShadow: display ? `0 0 20px ${activeColor}cc, 0 0 50px ${activeColor}44` : 'none',
                transition: 'all 0.4s',
              }}>
                {display?.note ?? '—'}
                <sup style={{ fontSize: 30, verticalAlign: 'super', marginLeft: 4, letterSpacing: 0 }}>
                  {display?.octave ?? ''}
                </sup>
              </div>
            </div>

            {/* Freq + cents */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 10 }}>
              <DisplayBox label="Fréquence" value={freqLabel} color={display ? amber : '#1e1208'} />
              <DisplayBox label="Écart" value={centsLabel} color={centsColor} />
            </div>
          </div>

          {/* Controls */}
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
              <select value={refA} onChange={e => setRefA(Number(e.target.value))} style={{
                background: '#0d0a07', color: '#aa7733',
                border: '1px solid #3a2510', borderRadius: 6,
                padding: '7px 10px', fontSize: 13,
                fontFamily: "'Courier New', monospace",
                outline: 'none', cursor: 'pointer',
                appearance: 'none', WebkitAppearance: 'none',
              }}>
                {REF_PITCHES.map(p => <option key={p} value={p}>{p} Hz</option>)}
              </select>
            </div>
          </div>

          {error && (
            <p style={{ marginTop: 12, fontSize: 12, color: '#ff4400', letterSpacing: '0.05em' }}>
              {error}
            </p>
          )}
        </div>

        {/* Bottom screw strip */}
        <div style={{
          background: '#0d0a07', borderTop: '1px solid #1a1208',
          padding: '10px 20px',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        }}>
          <Screw /><p style={{ margin: 0, fontSize: 9, letterSpacing: '0.2em', color: '#2a1a08', textTransform: 'uppercase' }}>SF-01 · Chromatic</p><Screw />
        </div>
      </div>

      <style>{`select option { background: #0d0a07; color: #aa7733; }`}</style>
    </div>
  );
}

// ── Sub-components ────────────────────────────────────────────────────────
function DisplayBox({ label, value, color }: { label: string; value: string; color: string }) {
  return (
    <div style={{ background: '#050402', border: '1px solid #1a1208', borderRadius: 8, padding: '8px 14px' }}>
      <p style={{ margin: '0 0 4px', fontSize: 9, letterSpacing: '0.2em', color: '#443322', textTransform: 'uppercase' }}>{label}</p>
      <p style={{ margin: 0, fontSize: 20, color, textShadow: `0 0 12px ${color}55`, transition: 'color 0.3s', letterSpacing: '0.05em' }}>
        {value}
      </p>
    </div>
  );
}

function RetroButton({ children, onClick, danger }: { children: React.ReactNode; onClick: () => void; danger?: boolean }) {
  return (
    <button onClick={onClick} style={{
      background: danger ? '#2a0800' : '#1a1208',
      border: `1px solid ${danger ? '#5a1500' : '#3a2510'}`,
      borderRadius: 8, padding: '8px 18px',
      color: danger ? '#cc4400' : '#aa7733',
      fontSize: 13, fontFamily: "'Courier New', monospace",
      cursor: 'pointer', letterSpacing: '0.08em', transition: 'all 0.15s',
      boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.04), 0 2px 4px rgba(0,0,0,0.5)',
    }}>{children}</button>
  );
}

function Screw() {
  return (
    <div style={{
      width: 12, height: 12, borderRadius: '50%',
      background: 'radial-gradient(circle at 40% 35%, #2a2018, #0a0806)',
      border: '1px solid #1e1608', boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.8)',
      position: 'relative',
    }}>
      <div style={{ position: 'absolute', top: '50%', left: '50%', width: '60%', height: '1px', background: '#1a1208', transform: 'translate(-50%, -50%) rotate(45deg)' }} />
    </div>
  );
}

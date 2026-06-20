'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { detectPitchACF } from '@/lib/music/pitch-acf';
import { OutlierRemovingSmoother } from '@/lib/music/smoother';

// ── Gauge geometry ─────────────────────────────────────────────────────────
const CX = 250, CY = 320, RARC = 235, RNEEDLE = 215, DEG_MAX = 65;

// ── Note names (sharps) ───────────────────────────────────────────────────
const NOTES = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

const REF_PITCHES = [432, 435, 440, 441, 442, 443, 444] as const;

// ── Smoothing constants ────────────────────────────────────────────────────
const ALPHA_ANGLE    = 0.22;
const SILENCE_FRAMES = 12;

// ── Tuning presets ────────────────────────────────────────────────────────
interface TuningPreset {
  id: string;
  name: string;
  artists: string;
  midi: readonly number[];    // 6 MIDI notes, string 6 → 1 (low to high)
  strings: readonly string[]; // note labels matching midi
}

const TUNING_PRESETS: TuningPreset[] = [
  {
    id: 'standard',
    name: 'Standard',
    artists: '',
    midi: [40, 45, 50, 55, 59, 64],
    strings: ['E', 'A', 'D', 'G', 'B', 'E'],
  },
  {
    id: 'eb_standard',
    name: 'Eb Standard',
    artists: 'Hendrix · SRV · Slash',
    midi: [39, 44, 49, 54, 58, 63],
    strings: ['Eb', 'Ab', 'Db', 'Gb', 'Bb', 'Eb'],
  },
  {
    id: 'drop_d',
    name: 'Drop D',
    artists: 'Cobain · Page',
    midi: [38, 45, 50, 55, 59, 64],
    strings: ['D', 'A', 'D', 'G', 'B', 'E'],
  },
  {
    id: 'open_g',
    name: 'Open G',
    artists: 'Keith Richards',
    midi: [38, 43, 50, 55, 59, 62],
    strings: ['D', 'G', 'D', 'G', 'B', 'D'],
  },
  {
    id: 'open_e',
    name: 'Open E',
    artists: 'D. Allman · Trucks',
    midi: [40, 47, 52, 56, 59, 64],
    strings: ['E', 'B', 'E', 'G#', 'B', 'E'],
  },
  {
    id: 'open_d',
    name: 'Open D',
    artists: 'Joni Mitchell · Nick Drake',
    midi: [38, 45, 50, 54, 57, 62],
    strings: ['D', 'A', 'D', 'F#', 'A', 'D'],
  },
  {
    id: 'dadgad',
    name: 'DADGAD',
    artists: 'Jimmy Page · Bron-Yr-Aur',
    midi: [38, 45, 50, 55, 57, 62],
    strings: ['D', 'A', 'D', 'G', 'A', 'D'],
  },
  {
    id: 'open_a',
    name: 'Open A',
    artists: 'Rory Gallagher · Johnson',
    midi: [40, 45, 52, 57, 61, 64],
    strings: ['E', 'A', 'E', 'A', 'C#', 'E'],
  },
];

// Returns index of closest string (0–5) within ±3.5 semitones, or -1
function findActiveString(freqHz: number, midi: readonly number[]): number {
  const m = 69 + 12 * Math.log2(freqHz / 440);
  let best = -1, bestDist = 3.5;
  for (let i = 0; i < 6; i++) {
    const dist = Math.abs(m - midi[i]);
    if (dist < bestDist) { bestDist = dist; best = i; }
  }
  return best;
}

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

// ── Palette riso ──────────────────────────────────────────────────────────
const INK    = '#141414';
const MUTED  = '#8a8678';
const FAINT  = '#c9c4b4';
const CREAM  = '#f1efe8';
const PAPER  = '#fbfaf7';
const GREEN  = '#1f9e54';
const AMBER  = '#d98e04';
const RED    = '#e0301e';
const PINK   = '#f6a8d2';

// ── Zone arcs (static) ────────────────────────────────────────────────────
const ZONES = [
  { a1: -DEG_MAX,          a2: centsToAngle(-15), color: '#f2b3a9' },
  { a1: centsToAngle(-15), a2: centsToAngle(-5),  color: '#f6dca4' },
  { a1: centsToAngle(-5),  a2: centsToAngle(5),   color: '#b9e2c4' },
  { a1: centsToAngle(5),   a2: centsToAngle(15),  color: '#f6dca4' },
  { a1: centsToAngle(15),  a2: DEG_MAX,           color: '#f2b3a9' },
];
const MAJOR_TICKS = [-50, -25, 0, 25, 50];
const MINOR_TICKS = [-40, -30, -20, -10, 10, 20, 30, 40];

interface Display { note: string; octave: number; freq: number; cents: number; }

export function RetroTuner() {
  const [refA, setRefA]         = useState(440);
  const [listening, setListening] = useState(false);
  const [source, setSource]     = useState<'mic' | 'tab' | null>(null);
  const [error, setError]       = useState<string | null>(null);
  const [display, setDisplay]   = useState<Display | null>(null);
  const [inTune, setInTune]     = useState(false);

  // Tuning preset state
  const [selectedPreset, setSelectedPreset] = useState<TuningPreset | null>(null);
  const [activeString, setActiveString]     = useState(-1);
  const activeStringRef    = useRef(-1);
  const selectedPresetRef  = useRef<TuningPreset | null>(null);
  useEffect(() => { selectedPresetRef.current = selectedPreset; }, [selectedPreset]);

  // Audio refs
  const ctxRef        = useRef<AudioContext | null>(null);
  const streamRef     = useRef<MediaStream | null>(null);
  const analyserRef   = useRef<AnalyserNode | null>(null);
  const bufRef        = useRef<Float32Array<ArrayBuffer> | null>(null);
  const sampleRateRef = useRef(44100);
  const rafRef        = useRef<number | null>(null);
  const refARef       = useRef(refA);
  useEffect(() => { refARef.current = refA; }, [refA]);

  // Pitch pipeline refs
  const smootherRef      = useRef(new OutlierRemovingSmoother(10, 0.1, 1, 2, 3));
  const smoothedFreqRef  = useRef<number | null>(null);
  const acfSilenceRef    = useRef(0);
  const currentAngleRef  = useRef(0);
  const frameRef         = useRef(0);

  // Direct DOM refs — bypass React for 60fps animation
  const needleRef     = useRef<SVGGElement | null>(null);
  const needleGlowRef = useRef<SVGGElement | null>(null);
  const ledRef        = useRef<HTMLDivElement | null>(null);

  // ── Stop ──────────────────────────────────────────────────────────────
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
    activeStringRef.current = -1;
    setListening(false); setSource(null); setDisplay(null); setInTune(false);
    setActiveString(-1);
  }, []);

  // ── Start ─────────────────────────────────────────────────────────────
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

  // ── Animation loop ────────────────────────────────────────────────────
  useEffect(() => {
    if (!listening) return;

    const loop = () => {
      frameRef.current++;
      const f = frameRef.current;

      // Run ACF every 4 frames (~66ms at 60fps)
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
              activeStringRef.current = -1;
              setActiveString(-1);
            }
          }
        }
      }

      // Every frame: lerp needle, write to DOM
      const freq = smoothedFreqRef.current;
      let targetAngle = 0;
      if (freq !== null) {
        const midi = freqToMidi(freq, refARef.current);
        const cents = (midi - Math.round(midi)) * 100;
        targetAngle = centsToAngle(cents);
      }
      currentAngleRef.current += (targetAngle - currentAngleRef.current) * ALPHA_ANGLE;
      const transform = `rotate(${currentAngleRef.current.toFixed(3)}deg)`;
      if (needleRef.current) needleRef.current.style.transform = transform;
      if (needleGlowRef.current) {
        needleGlowRef.current.style.transform = transform;
        needleGlowRef.current.style.opacity = freq !== null ? '0.6' : '0';
      }

      // Every 6 frames: update React state (~100ms)
      if (f % 6 === 0 && freq !== null) {
        const midi = freqToMidi(freq, refARef.current);
        const roundedMidi = Math.round(midi);
        const cents = Math.round((midi - roundedMidi) * 1000) / 10;
        const note = NOTES[((roundedMidi % 12) + 12) % 12];
        const octave = Math.floor(roundedMidi / 12) - 1;
        const tune = Math.abs(cents) <= 5;
        setDisplay({ note, octave, freq: Math.round(freq * 10) / 10, cents });
        setInTune(tune);
        if (ledRef.current) {
          ledRef.current.style.background = tune ? GREEN : AMBER;
        }

        // Active string detection (only when a preset is selected)
        if (selectedPresetRef.current) {
          const idx = findActiveString(freq, selectedPresetRef.current.midi);
          if (idx !== activeStringRef.current) {
            activeStringRef.current = idx;
            setActiveString(idx);
          }
        }
      }

      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [listening]);

  useEffect(() => () => stop(), [stop]);

  // ── Derived display ───────────────────────────────────────────────────
  const activeColor = inTune ? GREEN : AMBER;
  const centsLabel  = display ? `${display.cents >= 0 ? '+' : ''}${display.cents.toFixed(1)} ¢` : '— ¢';
  const freqLabel   = display ? `${display.freq} Hz` : '——— Hz';
  const centsColor  = display
    ? Math.abs(display.cents) <= 5 ? GREEN : Math.abs(display.cents) > 20 ? RED : AMBER
    : FAINT;

  return (
    <div className="mx-auto max-w-xl px-4 py-10 sm:py-14">
      {/* Device body */}
      <div className="border border-ink bg-paper">

        {/* Header */}
        <div className="flex items-center justify-between border-b border-ink px-5 py-3">
          <div>
            <p className="text-[9px] uppercase tracking-[0.35em] text-neutral-500">Scale Finder</p>
            <p className="text-sm font-bold uppercase tracking-[0.25em]">Accordeur chromatique</p>
          </div>
          <div className="flex items-center gap-2">
            {listening && (
              <span className="text-[10px] uppercase tracking-wider text-neutral-500">
                {source === 'tab' ? 'Onglet' : 'Micro'}
              </span>
            )}
            <div
              ref={ledRef}
              className="h-2.5 w-2.5 rounded-full border border-ink transition-colors duration-300"
              style={{ background: listening ? AMBER : CREAM }}
            />
          </div>
        </div>

        {/* Gauge */}
        <div className="border-b border-ink" style={{ background: CREAM }}>
          <svg viewBox="0 0 500 300" style={{ width: '100%', display: 'block' }} aria-hidden>
            <path d={arcPath(RARC, -DEG_MAX, DEG_MAX)} fill="none" stroke={PAPER} strokeWidth="40" strokeLinecap="butt" />
            {ZONES.map((z, i) => (
              <path key={i} d={arcPath(RARC, z.a1, z.a2)} fill="none" stroke={z.color} strokeWidth="24" strokeLinecap="butt" />
            ))}
            <path d={arcPath(RARC + 19, -DEG_MAX, DEG_MAX)} fill="none" stroke={INK} strokeWidth="1" />
            <path d={arcPath(RARC - 11, -DEG_MAX, DEG_MAX)} fill="none" stroke={FAINT} strokeWidth="1" />
            {MAJOR_TICKS.map(c => {
              const a = centsToAngle(c);
              const outer = polar(RARC + 19, a), inner = polar(RARC - 16, a), lbl = polar(RARC - 36, a);
              return (
                <g key={c}>
                  <line x1={outer.x.toFixed(1)} y1={outer.y.toFixed(1)} x2={inner.x.toFixed(1)} y2={inner.y.toFixed(1)} stroke={INK} strokeWidth="1.5" />
                  <text x={lbl.x.toFixed(1)} y={lbl.y.toFixed(1)} textAnchor="middle" dominantBaseline="middle"
                    fill={MUTED} fontSize="13" fontFamily="var(--font-mono)" fontWeight="bold">
                    {c === 0 ? '0' : Math.abs(c)}
                  </text>
                </g>
              );
            })}
            {MINOR_TICKS.map(c => {
              const a = centsToAngle(c), o = polar(RARC + 19, a), inn = polar(RARC + 4, a);
              return <line key={c} x1={o.x.toFixed(1)} y1={o.y.toFixed(1)} x2={inn.x.toFixed(1)} y2={inn.y.toFixed(1)} stroke={FAINT} strokeWidth="1" />;
            })}
            {(() => {
              const fl = polar(RARC - 58, -DEG_MAX + 8), sh = polar(RARC - 58, DEG_MAX - 8);
              return (
                <>
                  <text x={fl.x.toFixed(1)} y={fl.y.toFixed(1)} textAnchor="middle" dominantBaseline="middle" fill={MUTED} fontSize="11" letterSpacing="2">FLAT</text>
                  <text x={sh.x.toFixed(1)} y={sh.y.toFixed(1)} textAnchor="middle" dominantBaseline="middle" fill={MUTED} fontSize="11" letterSpacing="2">SHARP</text>
                </>
              );
            })()}
            <text
              x={CX} y={CY - RARC + 52} textAnchor="middle" dominantBaseline="middle"
              fill={inTune && display ? GREEN : 'transparent'}
              fontSize="11" letterSpacing="3" fontWeight="bold"
              style={{ transition: 'fill 0.3s' }}
            >IN TUNE</text>
            {/* Halo rose décalé — clin d'œil au décalage d'impression riso */}
            <g ref={needleGlowRef} style={{ transformOrigin: `${CX}px ${CY}px`, opacity: 0 }}>
              <polygon points={`${CX - 8},${CY} ${CX - 3},${CY - RNEEDLE} ${CX + 2},${CY}`} fill={PINK} />
            </g>
            <g ref={needleRef} style={{ transformOrigin: `${CX}px ${CY}px` }}>
              <polygon
                points={`${CX - 3},${CY} ${CX},${CY - RNEEDLE} ${CX + 3},${CY}`}
                fill={listening ? (display ? RED : FAINT) : FAINT}
                style={{ transition: 'fill 0.4s' }}
              />
            </g>
            <circle cx={CX} cy={CY} r="12" fill={PAPER} stroke={INK} strokeWidth="1.5" />
            <circle cx={CX} cy={CY} r="5"
              fill={display ? activeColor : FAINT}
              style={{ transition: 'fill 0.4s' }}
            />
          </svg>
        </div>

        {/* String indicator — only visible when a preset is selected */}
        {selectedPreset && (
          <div className="flex justify-center gap-2 border-b border-ink bg-paper px-5 py-3">
            {selectedPreset.strings.map((name, i) => {
              const active = activeString === i;
              return (
                <div key={i} className="flex flex-col items-center gap-1">
                  <div
                    className="flex h-9 w-9 items-center justify-center border transition-colors"
                    style={{
                      borderColor: active ? '#ec5fa3' : FAINT,
                      borderWidth: active ? 2 : 1,
                      background: active ? PINK : PAPER,
                    }}
                  >
                    <span
                      className="font-mono font-bold transition-colors"
                      style={{ fontSize: name.length > 2 ? 9 : 11, color: active ? INK : MUTED }}
                    >{name}</span>
                  </div>
                  <span className="text-[8px] text-neutral-400">{6 - i}</span>
                </div>
              );
            })}
          </div>
        )}

        {/* Display */}
        <div className="border-b border-ink p-5">
          <div className="mb-5 flex items-center gap-4">
            <div
              className="min-w-[130px] border border-ink px-6 py-3 text-center transition-colors"
              style={{ background: CREAM }}
            >
              <div
                className="font-mono text-7xl font-bold leading-none tracking-tight transition-colors duration-300"
                style={{ color: display ? activeColor : FAINT }}
              >
                {display?.note ?? '—'}
                <sup className="ml-1 align-super text-3xl tracking-normal">
                  {display?.octave ?? ''}
                </sup>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-2">
              <DisplayBox label="Fréquence" value={freqLabel} color={display ? INK : FAINT} />
              <DisplayBox label="Écart" value={centsLabel} color={centsColor} />
            </div>
          </div>

          {/* Controls */}
          <div className="flex flex-wrap items-center gap-2">
            {!listening ? (
              <>
                <button
                  onClick={() => start('mic')}
                  className="bg-ink px-5 py-2.5 text-sm font-medium text-paper transition-colors hover:bg-riso-pink hover:text-ink"
                >
                  Micro
                </button>
                <button
                  onClick={() => start('tab')}
                  className="border border-ink px-5 py-2.5 text-sm font-medium transition-colors hover:bg-cream"
                >
                  Onglet
                </button>
              </>
            ) : (
              <button
                onClick={stop}
                className="bg-riso-red px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-ink"
              >
                ■ Arrêter
              </button>
            )}
            <div className="ml-auto flex items-center gap-2">
              <span className="text-xs uppercase tracking-wider text-neutral-500">A =</span>
              <select
                value={refA}
                onChange={e => setRefA(Number(e.target.value))}
                className="cursor-pointer border border-ink bg-paper px-3 py-2 font-mono text-sm outline-none"
              >
                {REF_PITCHES.map(p => <option key={p} value={p}>{p} Hz</option>)}
              </select>
            </div>
          </div>
          {error && <p className="mt-3 text-sm text-riso-red">{error}</p>}
        </div>

        {/* Tuning preset selector */}
        <div className="px-5 py-4">
          <p className="mb-3 text-[11px] uppercase tracking-[0.18em] text-neutral-500">
            Accordage
          </p>
          <div className="flex flex-wrap gap-1.5">
            <PresetButton
              active={selectedPreset === null}
              onClick={() => { setSelectedPreset(null); setActiveString(-1); activeStringRef.current = -1; }}
            >
              <span className="block text-xs">Chromatique</span>
            </PresetButton>
            {TUNING_PRESETS.map(preset => (
              <PresetButton
                key={preset.id}
                active={selectedPreset?.id === preset.id}
                onClick={() => { setSelectedPreset(preset); setActiveString(-1); activeStringRef.current = -1; }}
              >
                <span className="block text-xs">{preset.name}</span>
                {preset.artists && (
                  <span className="mt-0.5 block text-[9px] opacity-60">{preset.artists}</span>
                )}
              </PresetButton>
            ))}
          </div>
        </div>

        {/* Bottom strip */}
        <div className="border-t border-ink px-5 py-2.5 text-center">
          <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-neutral-400">
            SF-01 · Chromatic
          </p>
        </div>
      </div>
    </div>
  );
}

// ── Sub-components ────────────────────────────────────────────────────────
function DisplayBox({ label, value, color }: { label: string; value: string; color: string }) {
  return (
    <div className="border border-ink bg-paper px-3.5 py-2">
      <p className="mb-0.5 text-[9px] uppercase tracking-[0.2em] text-neutral-500">{label}</p>
      <p className="font-mono text-lg transition-colors duration-300" style={{ color }}>
        {value}
      </p>
    </div>
  );
}

function PresetButton({ children, active, onClick }: { children: React.ReactNode; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`border px-3 py-2 text-left transition-colors ${
        active
          ? 'border-ink bg-ink text-paper'
          : 'border-neutral-300 bg-paper hover:border-ink hover:bg-cream'
      }`}
    >
      {children}
    </button>
  );
}

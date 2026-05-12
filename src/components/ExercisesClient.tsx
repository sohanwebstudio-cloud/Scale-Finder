'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import Link from 'next/link'
import {
  EXERCISES,
  ScaleExercise,
  ChordExercise,
  ChordShape,
  Difficulty,
  Category,
} from '@/data/exercises'

// ─── Constants ────────────────────────────────────────────────────────────────

const FINGER_COLORS: Record<number, { text: string; bg: string; label: string }> = {
  1: { text: '#fb923c', bg: 'rgba(251,146,60,0.12)', label: 'Index' },
  2: { text: '#38bdf8', bg: 'rgba(56,189,248,0.12)', label: 'Majeur' },
  3: { text: '#34d399', bg: 'rgba(52,211,153,0.12)', label: 'Annulaire' },
  4: { text: '#a78bfa', bg: 'rgba(167,139,250,0.12)', label: 'Auriculaire' },
}

const DIFFICULTY_CLS: Record<Difficulty, string> = {
  débutant: 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/25',
  intermédiaire: 'bg-amber-500/10 text-amber-400 border border-amber-500/25',
  avancé: 'bg-rose-500/10 text-rose-400 border border-rose-500/25',
}

const CATEGORY_CLS: Record<Category, string> = {
  indépendance: 'bg-sky-500/10 text-sky-400',
  coordination: 'bg-purple-500/10 text-purple-400',
  force: 'bg-orange-500/10 text-orange-400',
  légato: 'bg-teal-500/10 text-teal-400',
  jazz: 'bg-indigo-500/10 text-indigo-400',
  blues: 'bg-red-500/10 text-red-400',
}

const STRING_NAMES = ['e', 'B', 'G', 'D', 'A', 'E']

// ─── Chord Diagram ─────────────────────────────────────────────────────────────

const SG = 20   // string gap
const FG = 26   // fret gap
const PX = 16   // horizontal padding
const NUT_Y = 40 // top of fret area
const FRETS = 4  // frets visible
const DR = 8     // dot radius

const SVG_W = PX * 2 + 5 * SG       // 132
const SVG_H = NUT_Y + FRETS * FG + 14 // 158

function stringX(i: number) { return PX + i * SG }
function dotY(fret: number, startFret: number) {
  return NUT_Y + (fret - startFret) * FG + FG / 2
}

function ChordDiagram({ chord }: { chord: ChordShape }) {
  const start = chord.startFret ?? 1

  // Detect barre: finger 1 on ≥2 strings at the same fret
  const barre: { fret: number; from: number; to: number } | null = (() => {
    const byFret = new Map<number, number[]>()
    chord.frets.forEach((f, si) => {
      if (typeof f === 'number' && f > 0 && chord.fingers[si] === 1) {
        if (!byFret.has(f)) byFret.set(f, [])
        byFret.get(f)!.push(si)
      }
    })
    for (const [fret, strings] of byFret) {
      if (strings.length >= 2)
        return { fret, from: Math.min(...strings), to: Math.max(...strings) }
    }
    return null
  })()

  return (
    <div className="flex flex-col items-center gap-1">
      <svg
        width={SVG_W}
        height={SVG_H}
        className="overflow-visible"
        aria-label={`Diagramme ${chord.name}`}
      >
        {/* Chord name */}
        <text
          x={SVG_W / 2}
          y={13}
          textAnchor="middle"
          fill="#f5f5f5"
          fontSize={13}
          fontWeight="600"
        >
          {chord.name}
        </text>

        {/* Function label */}
        {chord.function && (
          <text x={SVG_W / 2} y={27} textAnchor="middle" fill="#737373" fontSize={10}>
            {chord.function}
          </text>
        )}

        {/* Nut or position marker */}
        {start === 1 ? (
          <rect
            x={PX - 1}
            y={NUT_Y - 2}
            width={5 * SG + 2}
            height={4}
            rx={2}
            fill="#a3a3a3"
          />
        ) : (
          <>
            <line
              x1={PX}
              y1={NUT_Y}
              x2={PX + 5 * SG}
              y2={NUT_Y}
              stroke="#404040"
              strokeWidth={1.5}
            />
            <text
              x={PX - 6}
              y={NUT_Y + FG / 2 + 4}
              textAnchor="end"
              fill="#737373"
              fontSize={10}
            >
              {start}fr
            </text>
          </>
        )}

        {/* Fret lines */}
        {[1, 2, 3, 4].map((f) => (
          <line
            key={f}
            x1={PX}
            y1={NUT_Y + f * FG}
            x2={PX + 5 * SG}
            y2={NUT_Y + f * FG}
            stroke="#333333"
            strokeWidth={1}
          />
        ))}

        {/* String lines */}
        {[0, 1, 2, 3, 4, 5].map((si) => (
          <line
            key={si}
            x1={stringX(si)}
            y1={NUT_Y}
            x2={stringX(si)}
            y2={NUT_Y + FRETS * FG}
            stroke="#525252"
            strokeWidth={si === 0 ? 1.8 : 1.2}
          />
        ))}

        {/* Barre bar */}
        {barre && (
          <rect
            x={stringX(barre.from) - DR * 0.8}
            y={dotY(barre.fret, start) - DR}
            width={stringX(barre.to) - stringX(barre.from) + DR * 1.6}
            height={DR * 2}
            rx={DR}
            fill={FINGER_COLORS[1]?.text ?? '#fb923c'}
            opacity={0.85}
          />
        )}

        {/* X / O marks + dots */}
        {chord.frets.map((fret, si) => {
          const x = stringX(si)
          const finger = chord.fingers[si]

          if (fret === 'x') {
            return (
              <text
                key={si}
                x={x}
                y={NUT_Y - 9}
                textAnchor="middle"
                fill="#6b7280"
                fontSize={12}
                fontWeight="700"
              >
                ×
              </text>
            )
          }

          if (fret === 0) {
            return (
              <circle
                key={si}
                cx={x}
                cy={NUT_Y - 9}
                r={4}
                fill="none"
                stroke="#6b7280"
                strokeWidth={1.5}
              />
            )
          }

          const pos = fret - start
          if (pos < 0 || pos >= FRETS) return null

          const cy = dotY(fret, start)
          const isBarre = barre?.fret === fret && finger === 1
          if (isBarre) {
            // Render finger number on barre bar
            return (
              <text
                key={si}
                x={x}
                y={cy + 4}
                textAnchor="middle"
                fill="#0a0a0a"
                fontSize={9}
                fontWeight="800"
              >
                {finger}
              </text>
            )
          }

          const color = finger ? FINGER_COLORS[finger]?.text ?? '#e5e5e5' : '#e5e5e5'

          return (
            <g key={si}>
              <circle cx={x} cy={cy} r={DR} fill={color} opacity={0.9} />
              {finger > 0 && (
                <text
                  x={x}
                  y={cy + 3.5}
                  textAnchor="middle"
                  fill="#0a0a0a"
                  fontSize={9}
                  fontWeight="800"
                >
                  {finger}
                </text>
              )}
            </g>
          )
        })}
      </svg>
    </div>
  )
}

// ─── Tab Display ───────────────────────────────────────────────────────────────

function TabDisplay({ tabStrings, fingers }: { tabStrings: string[]; fingers: number[] }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-neutral-800 bg-neutral-950 p-5">
      <div className="font-mono text-sm leading-8" style={{ fontFamily: 'var(--font-mono)' }}>
        {tabStrings.map((tabStr, si) => {
          const notes = tabStr.split(' ').filter(Boolean)
          return (
            <div key={si} className="flex items-center">
              <span className="mr-2 w-4 shrink-0 text-xs text-neutral-600">
                {STRING_NAMES[si]}
              </span>
              <span className="text-neutral-700">|──</span>
              {notes.map((note, ni) => {
                const finger = fingers[ni % fingers.length]
                const isH = note.startsWith('h')
                const isP = note.startsWith('p')
                const color = FINGER_COLORS[finger]?.text ?? '#e5e5e5'
                return (
                  <span key={ni} className="flex items-center">
                    {isH && <span className="text-neutral-600 text-xs">h</span>}
                    {isP && <span className="text-neutral-600 text-xs">p</span>}
                    <span style={{ color }} className="font-bold">
                      {isH || isP ? note.slice(1) : note}
                    </span>
                    <span className="text-neutral-700">──</span>
                  </span>
                )
              })}
              <span className="text-neutral-700">|</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

// ─── Finger pattern badges ─────────────────────────────────────────────────────

function FingerBadges({ fingers }: { fingers: number[] }) {
  return (
    <div className="flex items-center gap-1.5 flex-wrap">
      {fingers.map((f, i) => (
        <span key={i} className="flex items-center gap-1">
          <span
            className="flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold"
            style={{
              background: FINGER_COLORS[f]?.bg,
              color: FINGER_COLORS[f]?.text,
              border: `1px solid ${FINGER_COLORS[f]?.text}`,
            }}
          >
            {f}
          </span>
          {i < fingers.length - 1 && <span className="text-neutral-700 text-xs">–</span>}
        </span>
      ))}
    </div>
  )
}

// ─── Card header shared ────────────────────────────────────────────────────────

function CardHeader({
  ex,
  onSetBpm,
}: {
  ex: ScaleExercise | ChordExercise
  onSetBpm: (bpm: number) => void
}) {
  return (
    <div className="p-6 pb-4">
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${DIFFICULTY_CLS[ex.difficulty]}`}>
          {ex.difficulty}
        </span>
        <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${CATEGORY_CLS[ex.category]}`}>
          {ex.category}
        </span>
      </div>
      <h3 className="mb-1 text-xl font-medium">{ex.title}</h3>
      <p className="mb-4 text-sm text-neutral-500">{ex.subtitle}</p>
      <p className="mb-5 text-sm leading-relaxed text-neutral-300">{ex.description}</p>
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div />
        <button
          onClick={() => onSetBpm(ex.tempo)}
          className="flex items-center gap-2 rounded-lg border border-neutral-700 bg-neutral-800 px-4 py-2 text-sm text-neutral-300 transition-colors hover:border-orange-500/40 hover:text-white"
        >
          <span className="font-mono font-medium text-white">{ex.tempo}</span>
          <span className="text-neutral-500 text-xs">BPM</span>
          <span className="text-orange-400">↓ métronome</span>
        </button>
      </div>
    </div>
  )
}

function TipBox({ tip }: { tip: string }) {
  return (
    <div className="mx-6 mb-6 rounded-xl border border-neutral-800/60 bg-neutral-950/40 p-4">
      <p className="mb-1 text-xs uppercase tracking-wider text-neutral-600">Conseil</p>
      <p className="text-sm leading-relaxed text-neutral-300">{tip}</p>
    </div>
  )
}

// ─── Scale exercise card ───────────────────────────────────────────────────────

function ScaleCard({ ex, onSetBpm }: { ex: ScaleExercise; onSetBpm: (bpm: number) => void }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900">
      <CardHeader ex={ex} onSetBpm={onSetBpm} />

      <div className="px-6 pb-3">
        <div className="mb-3">
          <p className="mb-2 text-xs uppercase tracking-wider text-neutral-600">Séquence</p>
          <FingerBadges fingers={ex.fingers} />
        </div>
      </div>

      <div className="px-6 pb-5">
        <TabDisplay tabStrings={ex.tabStrings} fingers={ex.fingers} />
      </div>

      <TipBox tip={ex.tip} />
    </article>
  )
}

// ─── Chord exercise card ───────────────────────────────────────────────────────

function ChordCard({ ex, onSetBpm }: { ex: ChordExercise; onSetBpm: (bpm: number) => void }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900">
      <CardHeader ex={ex} onSetBpm={onSetBpm} />

      <div className="px-6 pb-5">
        <p className="mb-4 text-xs uppercase tracking-wider text-neutral-600">Progression</p>
        <div className="flex flex-wrap gap-6 justify-center sm:justify-start">
          {ex.chords.map((chord, i) => (
            <div key={i} className="flex flex-col items-center">
              <ChordDiagram chord={chord} />
              {i < ex.chords.length - 1 && (
                <span className="hidden sm:block text-neutral-700 text-lg self-center mt-8 ml-2 mr-2 absolute">
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Rhythm guide */}
        <div className="mt-5 flex items-center gap-1.5 font-mono text-neutral-600 text-sm">
          {ex.chords.map((chord, i) => (
            <span key={i} className="flex items-center gap-1.5">
              <span className="text-neutral-400">/ / / /</span>
              {i < ex.chords.length - 1 && <span className="text-neutral-700">|</span>}
            </span>
          ))}
        </div>
      </div>

      <TipBox tip={ex.tip} />
    </article>
  )
}

// ─── Metronome ────────────────────────────────────────────────────────────────

function Metronome({ bpm, onBpmChange }: { bpm: number; onBpmChange: (v: number) => void }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [beat, setBeat] = useState(-1)

  const audioCtxRef = useRef<AudioContext | null>(null)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const isPlayingRef = useRef(false)
  const bpmRef = useRef(bpm)

  useEffect(() => { bpmRef.current = bpm }, [bpm])

  const playClick = useCallback((b: number) => {
    const ctx = audioCtxRef.current
    if (!ctx) return
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()
    osc.connect(gain)
    gain.connect(ctx.destination)
    osc.type = 'sine'
    osc.frequency.value = b === 0 ? 1200 : 900
    gain.gain.setValueAtTime(b === 0 ? 0.5 : 0.3, ctx.currentTime)
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08)
    osc.start(ctx.currentTime)
    osc.stop(ctx.currentTime + 0.1)
  }, [])

  const scheduleNext = useCallback((next: number) => {
    if (!isPlayingRef.current) return
    timeoutRef.current = setTimeout(() => {
      setBeat(next)
      playClick(next)
      scheduleNext((next + 1) % 4)
    }, (60 / bpmRef.current) * 1000)
  }, [playClick])

  const start = useCallback(() => {
    audioCtxRef.current = new AudioContext()
    isPlayingRef.current = true
    setIsPlaying(true)
    setBeat(0)
    playClick(0)
    scheduleNext(1)
  }, [playClick, scheduleNext])

  const stop = useCallback(() => {
    isPlayingRef.current = false
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setIsPlaying(false)
    setBeat(-1)
  }, [])

  useEffect(() => () => {
    isPlayingRef.current = false
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
  }, [])

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-neutral-800 bg-neutral-950/96 backdrop-blur-sm">
      <div className="mx-auto flex max-w-4xl items-center gap-5 px-6 py-4">
        {/* Beat dots */}
        <div className="flex shrink-0 items-center gap-2">
          {[0, 1, 2, 3].map((b) => (
            <div
              key={b}
              className="rounded-full transition-all duration-75"
              style={{
                width: b === 0 ? '10px' : '8px',
                height: b === 0 ? '10px' : '8px',
                background: beat === b ? (b === 0 ? '#f97316' : '#c2410c') : '#404040',
                transform: beat === b ? 'scale(1.35)' : 'scale(1)',
              }}
            />
          ))}
        </div>

        {/* BPM slider */}
        <div className="flex min-w-0 flex-1 items-center gap-3">
          <button
            onClick={() => onBpmChange(Math.max(40, bpm - 5))}
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-neutral-400 transition-colors hover:bg-neutral-800 hover:text-white"
          >
            −
          </button>
          <input
            type="range"
            min={40}
            max={240}
            value={bpm}
            onChange={(e) => onBpmChange(Number(e.target.value))}
            className="min-w-0 flex-1 accent-orange-500"
          />
          <button
            onClick={() => onBpmChange(Math.min(240, bpm + 5))}
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-neutral-400 transition-colors hover:bg-neutral-800 hover:text-white"
          >
            +
          </button>
          <div className="shrink-0 text-right">
            <span className="font-mono text-2xl font-medium">{bpm}</span>
            <span className="ml-1 text-xs text-neutral-500">BPM</span>
          </div>
        </div>

        {/* Start / Stop */}
        <button
          onClick={isPlaying ? stop : start}
          className={`shrink-0 rounded-xl px-6 py-2.5 text-sm font-medium transition-colors ${
            isPlaying
              ? 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700'
              : 'bg-orange-500 text-white hover:bg-orange-400'
          }`}
        >
          {isPlaying ? '⏹ Stop' : '▶ Start'}
        </button>
      </div>
    </div>
  )
}

// ─── Section divider ─────────────────────────────────────────────────────────

function SectionTitle({
  label,
  title,
  description,
}: {
  label: string
  title: string
  description: string
}) {
  return (
    <div className="mb-6 pt-4">
      <p className="mb-1 text-xs uppercase tracking-wider text-orange-500">{label}</p>
      <h2 className="mb-2 text-2xl font-medium tracking-tight">{title}</h2>
      <p className="text-sm text-neutral-400">{description}</p>
    </div>
  )
}

// ─── Main client component ────────────────────────────────────────────────────

const scaleExercises = EXERCISES.filter((e) => e.type === 'scale') as ScaleExercise[]
const chordExercises = EXERCISES.filter((e) => e.type === 'chord') as ChordExercise[]

export function ExercisesClient() {
  const [bpm, setBpm] = useState(80)

  return (
    <>
      <main className="mx-auto max-w-4xl px-6 py-12 pb-32">
        <Link
          href="/"
          className="mb-8 inline-block text-sm text-neutral-500 transition-colors hover:text-orange-400"
        >
          ← Retour
        </Link>

        {/* Header */}
        <header className="mb-12">
          <p className="mb-3 text-xs uppercase tracking-wider text-orange-500">Technique</p>
          <h1 className="mb-3 text-4xl font-medium tracking-tight">Exercices Guitare</h1>
          <p className="max-w-2xl text-base leading-relaxed text-neutral-400">
            Technique main gauche, accords jazz et grilles blues. Toujours au métronome,
            toujours lentement d'abord.
          </p>
        </header>

        {/* Finger legend */}
        <div className="mb-12 flex flex-wrap items-center gap-5 rounded-xl border border-neutral-800 bg-neutral-900/50 px-5 py-4">
          <span className="text-xs uppercase tracking-wider text-neutral-600">Doigts</span>
          {[1, 2, 3, 4].map((f) => (
            <div key={f} className="flex items-center gap-2">
              <span
                className="flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold"
                style={{
                  background: FINGER_COLORS[f]?.bg,
                  color: FINGER_COLORS[f]?.text,
                  border: `1px solid ${FINGER_COLORS[f]?.text}`,
                }}
              >
                {f}
              </span>
              <span className="text-xs text-neutral-400">{FINGER_COLORS[f]?.label}</span>
            </div>
          ))}
        </div>

        {/* ── Scale exercises ─────────────────────────────────────────────── */}
        <SectionTitle
          label="01 — Main gauche"
          title="Technique & Indépendance"
          description="Exercices de gammes chromatiques pour développer la force, la coordination et l'indépendance des 4 doigts."
        />
        <div className="space-y-6 mb-16">
          {scaleExercises.map((ex) => (
            <ScaleCard key={ex.id} ex={ex} onSetBpm={setBpm} />
          ))}
        </div>

        {/* ── Chord exercises ─────────────────────────────────────────────── */}
        <SectionTitle
          label="02 — Accords"
          title="Jazz & Blues"
          description="Progressions jazz, grilles blues et voicings essentiels. Mémorise les formes, travaille les transitions, écoute la couleur harmonique."
        />
        <div className="space-y-6">
          {chordExercises.map((ex) => (
            <ChordCard key={ex.id} ex={ex} onSetBpm={setBpm} />
          ))}
        </div>
      </main>

      <Metronome bpm={bpm} onBpmChange={setBpm} />
    </>
  )
}

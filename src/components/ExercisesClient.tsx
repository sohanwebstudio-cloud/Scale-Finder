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
  1: { text: '#ec5fa3', bg: 'rgba(246,168,210,0.22)', label: 'Index' },
  2: { text: '#1f9ecf', bg: 'rgba(91,200,236,0.22)', label: 'Majeur' },
  3: { text: '#1f9e54', bg: 'rgba(31,158,84,0.18)', label: 'Annulaire' },
  4: { text: '#7a5fd0', bg: 'rgba(122,95,208,0.18)', label: 'Auriculaire' },
}

const DIFFICULTY_CLS: Record<Difficulty, string> = {
  débutant:      'border border-riso-cyan text-ink',
  intermédiaire: 'border border-riso-pink-deep text-riso-pink-deep',
  avancé:        'border border-riso-red text-riso-red',
}

const STRING_NAMES = ['e', 'B', 'G', 'D', 'A', 'E']

// ─── Chord Diagram ─────────────────────────────────────────────────────────────

const SG = 20
const FG = 26
const PX = 16
const NUT_Y = 40
const FRETS = 4
const DR = 8

const SVG_W = PX * 2 + 5 * SG
const SVG_H = NUT_Y + FRETS * FG + 14

function stringX(i: number) { return PX + i * SG }
function dotY(fret: number, startFret: number) {
  return NUT_Y + (fret - startFret) * FG + FG / 2
}

function ChordDiagram({ chord }: { chord: ChordShape }) {
  const start = chord.startFret ?? 1

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
      <svg width={SVG_W} height={SVG_H} className="overflow-visible" aria-label={`Diagramme ${chord.name}`}>
        <text x={SVG_W / 2} y={13} textAnchor="middle" fill="#141414" fontSize={13} fontWeight="600">
          {chord.name}
        </text>
        {chord.function && (
          <text x={SVG_W / 2} y={27} textAnchor="middle" fill="#8a8678" fontSize={10}>
            {chord.function}
          </text>
        )}
        {start === 1 ? (
          <rect x={PX - 1} y={NUT_Y - 2} width={5 * SG + 2} height={4} rx={0} fill="#141414" />
        ) : (
          <>
            <line x1={PX} y1={NUT_Y} x2={PX + 5 * SG} y2={NUT_Y} stroke="#b8b3a4" strokeWidth={1.5} />
            <text x={PX - 6} y={NUT_Y + FG / 2 + 4} textAnchor="end" fill="#8a8678" fontSize={10}>
              {start}fr
            </text>
          </>
        )}
        {[1, 2, 3, 4].map((f) => (
          <line key={f} x1={PX} y1={NUT_Y + f * FG} x2={PX + 5 * SG} y2={NUT_Y + f * FG} stroke="#c9c4b4" strokeWidth={1} />
        ))}
        {[0, 1, 2, 3, 4, 5].map((si) => (
          <line key={si} x1={stringX(si)} y1={NUT_Y} x2={stringX(si)} y2={NUT_Y + FRETS * FG} stroke="#6b675c" strokeWidth={si === 0 ? 1.8 : 1.2} />
        ))}
        {barre && (
          <rect
            x={stringX(barre.from) - DR * 0.8}
            y={dotY(barre.fret, start) - DR}
            width={stringX(barre.to) - stringX(barre.from) + DR * 1.6}
            height={DR * 2}
            rx={0}
            fill={FINGER_COLORS[1]?.text ?? '#ec5fa3'}
            opacity={0.85}
          />
        )}
        {chord.frets.map((fret, si) => {
          const x = stringX(si)
          const finger = chord.fingers[si]
          if (fret === 'x') {
            return (
              <text key={si} x={x} y={NUT_Y - 9} textAnchor="middle" fill="#8a8678" fontSize={12} fontWeight="700">×</text>
            )
          }
          if (fret === 0) {
            return <circle key={si} cx={x} cy={NUT_Y - 9} r={4} fill="none" stroke="#8a8678" strokeWidth={1.5} />
          }
          const pos = fret - start
          if (pos < 0 || pos >= FRETS) return null
          const cy = dotY(fret, start)
          const isBarre = barre?.fret === fret && finger === 1
          if (isBarre) {
            return (
              <text key={si} x={x} y={cy + 4} textAnchor="middle" fill="#141414" fontSize={9} fontWeight="800">
                {finger}
              </text>
            )
          }
          const color = finger ? FINGER_COLORS[finger]?.text ?? '#e5e5e5' : '#e5e5e5'
          return (
            <g key={si}>
              <circle cx={x} cy={cy} r={DR} fill={color} opacity={0.9} />
              {finger > 0 && (
                <text x={x} y={cy + 3.5} textAnchor="middle" fill="#0a0a0a" fontSize={9} fontWeight="800">
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
    <div className="overflow-x-auto border border-ink bg-cream p-4">
      <div className="font-mono text-sm leading-8">
        {tabStrings.map((tabStr, si) => {
          const notes = tabStr.split(' ').filter(Boolean)
          return (
            <div key={si} className="flex items-center">
              <span className="mr-2 w-4 shrink-0 text-[11px] text-neutral-500">
                {STRING_NAMES[si]}
              </span>
              <span className="text-ink">|──</span>
              {notes.map((note, ni) => {
                const finger = fingers[ni % fingers.length]
                const isH = note.startsWith('h')
                const isP = note.startsWith('p')
                const color = FINGER_COLORS[finger]?.text ?? '#141414'
                return (
                  <span key={ni} className="flex items-center">
                    {isH && <span className="text-neutral-400 text-xs">h</span>}
                    {isP && <span className="text-neutral-400 text-xs">p</span>}
                    <span style={{ color }} className="font-bold">
                      {isH || isP ? note.slice(1) : note}
                    </span>
                    <span className="text-neutral-400">──</span>
                  </span>
                )
              })}
              <span className="text-ink">|</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

// ─── Finger badges ────────────────────────────────────────────────────────────

function FingerBadges({ fingers }: { fingers: number[] }) {
  return (
    <div className="flex items-center gap-1.5 flex-wrap">
      {fingers.map((f, i) => (
        <span key={i} className="flex items-center gap-1">
          <span
            className="flex h-6 w-6 items-center justify-center text-xs font-bold"
            style={{
              background: FINGER_COLORS[f]?.bg,
              color: FINGER_COLORS[f]?.text,
              border: `1px solid ${FINGER_COLORS[f]?.text}`,
            }}
          >
            {f}
          </span>
          {i < fingers.length - 1 && <span className="text-neutral-400 text-xs">–</span>}
        </span>
      ))}
    </div>
  )
}

// ─── Card header ──────────────────────────────────────────────────────────────

function CardHeader({
  ex,
  onSetBpm,
}: {
  ex: ScaleExercise | ChordExercise
  onSetBpm: (bpm: number) => void
}) {
  return (
    <div className="border-b border-ink p-5">
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <span className={`px-2.5 py-0.5 text-[10px] uppercase tracking-[0.15em] ${DIFFICULTY_CLS[ex.difficulty]}`}>
          {ex.difficulty}
        </span>
        <span className="border border-neutral-300 px-2.5 py-0.5 text-[10px] uppercase tracking-[0.15em] text-neutral-500">
          {ex.category}
        </span>
      </div>
      <h3 className="mb-1 text-lg font-medium text-ink">{ex.title}</h3>
      <p className="mb-3 text-[11px] uppercase tracking-[0.18em] text-neutral-500">{ex.subtitle}</p>
      <p className="mb-4 text-sm leading-relaxed text-neutral-600">{ex.description}</p>
      <button
        onClick={() => onSetBpm(ex.tempo)}
        className="flex items-center gap-3 border border-ink bg-paper px-4 py-2 text-sm transition-colors hover:bg-cream"
      >
        <span className="font-mono font-bold text-ink">{ex.tempo}</span>
        <span className="text-[11px] uppercase tracking-wider text-neutral-500">BPM</span>
        <span className="text-riso-pink-deep text-xs">↓ métronome</span>
      </button>
    </div>
  )
}

// ─── Tip box ──────────────────────────────────────────────────────────────────

function TipBox({ tip }: { tip: string }) {
  return (
    <div className="border-t border-ink bg-cream px-5 py-4">
      <p className="mb-1 text-[11px] uppercase tracking-[0.18em] text-neutral-500">Conseil</p>
      <p className="text-sm leading-relaxed text-neutral-600">{tip}</p>
    </div>
  )
}

// ─── Scale exercise card ───────────────────────────────────────────────────────

function ScaleCard({ ex, onSetBpm }: { ex: ScaleExercise; onSetBpm: (bpm: number) => void }) {
  return (
    <article className="border border-ink bg-paper">
      <CardHeader ex={ex} onSetBpm={onSetBpm} />
      <div className="px-5 pt-4 pb-3">
        <p className="mb-2 text-[11px] uppercase tracking-[0.18em] text-neutral-500">Séquence</p>
        <FingerBadges fingers={ex.fingers} />
      </div>
      <div className="px-5 pb-5">
        <TabDisplay tabStrings={ex.tabStrings} fingers={ex.fingers} />
      </div>
      <TipBox tip={ex.tip} />
    </article>
  )
}

// ─── Chord exercise card ───────────────────────────────────────────────────────

function ChordCard({ ex, onSetBpm }: { ex: ChordExercise; onSetBpm: (bpm: number) => void }) {
  return (
    <article className="border border-ink bg-paper">
      <CardHeader ex={ex} onSetBpm={onSetBpm} />
      <div className="px-5 pt-4 pb-5">
        <p className="mb-4 text-[11px] uppercase tracking-[0.18em] text-neutral-500">Progression</p>
        <div className="flex flex-wrap gap-6 justify-center sm:justify-start">
          {ex.chords.map((chord, i) => (
            <ChordDiagram key={i} chord={chord} />
          ))}
        </div>
        <div className="mt-5 flex items-center gap-1.5 font-mono text-sm text-neutral-400">
          {ex.chords.map((chord, i) => (
            <span key={i} className="flex items-center gap-1.5">
              <span>/ / / /</span>
              {i < ex.chords.length - 1 && <span className="mx-1 text-neutral-300">|</span>}
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
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-ink bg-paper">
      <div className="mx-auto flex max-w-4xl items-center gap-5 px-6 py-3.5">
        {/* Beat indicators */}
        <div className="flex shrink-0 items-center gap-1.5">
          {[0, 1, 2, 3].map((b) => (
            <div
              key={b}
              className="transition-all duration-75"
              style={{
                width: b === 0 ? '10px' : '8px',
                height: b === 0 ? '10px' : '8px',
                background: beat === b ? (b === 0 ? '#e0301e' : '#ec5fa3') : '#f1efe8',
                border: beat !== b ? '1px solid #c9c4b4' : 'none',
              }}
            />
          ))}
        </div>

        {/* BPM slider */}
        <div className="flex min-w-0 flex-1 items-center gap-3">
          <button
            onClick={() => onBpmChange(Math.max(40, bpm - 5))}
            className="flex h-7 w-7 shrink-0 items-center justify-center border border-ink text-ink transition-colors hover:bg-cream"
          >
            −
          </button>
          <input
            type="range"
            min={40}
            max={240}
            value={bpm}
            onChange={(e) => onBpmChange(Number(e.target.value))}
            className="min-w-0 flex-1 accent-riso-pink-deep"
          />
          <button
            onClick={() => onBpmChange(Math.min(240, bpm + 5))}
            className="flex h-7 w-7 shrink-0 items-center justify-center border border-ink text-ink transition-colors hover:bg-cream"
          >
            +
          </button>
          <div className="shrink-0 text-right">
            <span className="font-mono text-2xl font-bold text-ink">{bpm}</span>
            <span className="ml-1 text-[11px] uppercase tracking-wider text-neutral-500">BPM</span>
          </div>
        </div>

        {/* Start / Stop */}
        <button
          onClick={isPlaying ? stop : start}
          className={`shrink-0 border px-5 py-2 text-sm font-medium transition-colors ${
            isPlaying
              ? 'border-ink bg-paper text-ink hover:bg-cream'
              : 'border-ink bg-ink text-paper hover:bg-riso-red hover:border-riso-red'
          }`}
        >
          {isPlaying ? '■ Stop' : '▶ Start'}
        </button>
      </div>
    </div>
  )
}

// ─── Section title ─────────────────────────────────────────────────────────────

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
    <div className="mb-5 pt-2">
      <p className="mb-2 text-[11px] uppercase tracking-[0.18em] text-neutral-500">{label}</p>
      <h2 className="mb-2 text-2xl font-medium text-ink">{title}</h2>
      <p className="text-sm text-neutral-500">{description}</p>
    </div>
  )
}

// ─── Main ─────────────────────────────────────────────────────────────────────

const scaleExercises = EXERCISES.filter((e) => e.type === 'scale') as ScaleExercise[]
const chordExercises = EXERCISES.filter((e) => e.type === 'chord') as ChordExercise[]

export function ExercisesClient() {
  const [bpm, setBpm] = useState(80)

  return (
    <>
      <main className="mx-auto max-w-4xl px-6 py-12 pb-32">
        <Link
          href="/"
          className="mb-8 inline-block text-sm text-neutral-500 transition-colors hover:text-ink"
        >
          ← Retour
        </Link>

        {/* Header */}
        <header className="mb-10 border-b border-ink pb-8">
          <p className="mb-2 text-[11px] uppercase tracking-[0.18em] text-neutral-500">Technique</p>
          <h1 className="mb-3 text-4xl font-medium text-ink">Exercices Guitare</h1>
          <p className="max-w-2xl text-base leading-relaxed text-neutral-500">
            Technique main gauche, accords jazz et grilles blues. Toujours au métronome,
            toujours lentement d'abord.
          </p>
        </header>

        {/* Finger legend */}
        <div className="mb-10 border border-ink bg-cream px-5 py-4">
          <p className="mb-3 text-[11px] uppercase tracking-[0.18em] text-neutral-500">Doigts</p>
          <div className="flex flex-wrap items-center gap-5">
            {[1, 2, 3, 4].map((f) => (
              <div key={f} className="flex items-center gap-2">
                <span
                  className="flex h-6 w-6 items-center justify-center text-xs font-bold"
                  style={{
                    background: FINGER_COLORS[f]?.bg,
                    color: FINGER_COLORS[f]?.text,
                    border: `1px solid ${FINGER_COLORS[f]?.text}`,
                  }}
                >
                  {f}
                </span>
                <span className="text-xs text-neutral-500">{FINGER_COLORS[f]?.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Scale exercises */}
        <SectionTitle
          label="01 — Main gauche"
          title="Technique & Indépendance"
          description="Exercices de gammes chromatiques pour développer la force, la coordination et l'indépendance des 4 doigts."
        />
        <div className="space-y-3 mb-12">
          {scaleExercises.map((ex) => (
            <ScaleCard key={ex.id} ex={ex} onSetBpm={setBpm} />
          ))}
        </div>

        {/* Chord exercises */}
        <SectionTitle
          label="02 — Accords"
          title="Jazz & Blues"
          description="Progressions jazz, grilles blues et voicings essentiels. Mémorise les formes, travaille les transitions, écoute la couleur harmonique."
        />
        <div className="space-y-3">
          {chordExercises.map((ex) => (
            <ChordCard key={ex.id} ex={ex} onSetBpm={setBpm} />
          ))}
        </div>
      </main>

      <Metronome bpm={bpm} onBpmChange={setBpm} />
    </>
  )
}

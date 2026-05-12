'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { EXERCISES, Exercise, Difficulty, Category } from '@/data/exercises'

const FINGER_COLORS: Record<number, { text: string; bg: string; label: string }> = {
  1: { text: '#fb923c', bg: 'rgba(251,146,60,0.12)', label: 'Index' },
  2: { text: '#38bdf8', bg: 'rgba(56,189,248,0.12)', label: 'Majeur' },
  3: { text: '#34d399', bg: 'rgba(52,211,153,0.12)', label: 'Annulaire' },
  4: { text: '#a78bfa', bg: 'rgba(167,139,250,0.12)', label: 'Auriculaire' },
}

const DIFFICULTY_CLASSES: Record<Difficulty, string> = {
  débutant: 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/25',
  intermédiaire: 'bg-amber-500/10 text-amber-400 border border-amber-500/25',
  avancé: 'bg-rose-500/10 text-rose-400 border border-rose-500/25',
}

const CATEGORY_CLASSES: Record<Category, string> = {
  indépendance: 'bg-sky-500/10 text-sky-400',
  coordination: 'bg-purple-500/10 text-purple-400',
  force: 'bg-orange-500/10 text-orange-400',
  légato: 'bg-teal-500/10 text-teal-400',
}

const STRING_NAMES = ['e', 'B', 'G', 'D', 'A', 'E']

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
                const color = FINGER_COLORS[finger]?.text ?? '#e5e5e5'
                const isHammer = note.startsWith('h')
                const isPull = note.startsWith('p')
                return (
                  <span key={ni} className="flex items-center">
                    {isHammer && <span className="text-neutral-600 text-xs">h</span>}
                    {isPull && <span className="text-neutral-600 text-xs">p</span>}
                    <span style={{ color }} className="font-bold">
                      {isHammer || isPull ? note.slice(1) : note}
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

function FingerPatternBadges({ fingers }: { fingers: number[] }) {
  return (
    <div className="flex items-center gap-1.5">
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

function ExerciseCard({
  exercise,
  onSetBpm,
}: {
  exercise: Exercise
  onSetBpm: (bpm: number) => void
}) {
  return (
    <article className="overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900">
      <div className="p-6">
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <span
            className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${DIFFICULTY_CLASSES[exercise.difficulty]}`}
          >
            {exercise.difficulty}
          </span>
          <span
            className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${CATEGORY_CLASSES[exercise.category]}`}
          >
            {exercise.category}
          </span>
        </div>

        <h2 className="mb-1 text-xl font-medium">{exercise.title}</h2>
        <p className="mb-4 text-sm text-neutral-500">{exercise.subtitle}</p>
        <p className="mb-6 text-sm leading-relaxed text-neutral-300">{exercise.description}</p>

        <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="mb-2 text-xs uppercase tracking-wider text-neutral-600">
              Séquence de doigts
            </p>
            <FingerPatternBadges fingers={exercise.fingers} />
          </div>
          <button
            onClick={() => onSetBpm(exercise.tempo)}
            className="flex items-center gap-2 rounded-lg border border-neutral-700 bg-neutral-800 px-4 py-2 text-sm text-neutral-300 transition-colors hover:border-orange-500/50 hover:text-white"
          >
            <span className="font-mono font-medium text-white">{exercise.tempo}</span>
            <span className="text-neutral-500 text-xs">BPM</span>
            <span className="text-orange-400">↓ métronome</span>
          </button>
        </div>

        <TabDisplay tabStrings={exercise.tabStrings} fingers={exercise.fingers} />
      </div>

      <div className="mx-6 mb-6 rounded-xl border border-neutral-800/60 bg-neutral-950/40 p-4">
        <p className="mb-1 text-xs uppercase tracking-wider text-neutral-600">Conseil</p>
        <p className="text-sm leading-relaxed text-neutral-300">{exercise.tip}</p>
      </div>
    </article>
  )
}

function Metronome({
  bpm,
  onBpmChange,
}: {
  bpm: number
  onBpmChange: (bpm: number) => void
}) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [beat, setBeat] = useState(-1)

  const audioCtxRef = useRef<AudioContext | null>(null)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const isPlayingRef = useRef(false)
  const bpmRef = useRef(bpm)

  useEffect(() => {
    bpmRef.current = bpm
  }, [bpm])

  const playClick = useCallback((beatNum: number) => {
    const ctx = audioCtxRef.current
    if (!ctx) return
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()
    osc.connect(gain)
    gain.connect(ctx.destination)
    osc.type = 'sine'
    osc.frequency.value = beatNum === 0 ? 1200 : 900
    gain.gain.setValueAtTime(beatNum === 0 ? 0.5 : 0.3, ctx.currentTime)
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08)
    osc.start(ctx.currentTime)
    osc.stop(ctx.currentTime + 0.1)
  }, [])

  const scheduleNext = useCallback(
    (nextBeat: number) => {
      if (!isPlayingRef.current) return
      const delay = (60 / bpmRef.current) * 1000
      timeoutRef.current = setTimeout(() => {
        setBeat(nextBeat)
        playClick(nextBeat)
        scheduleNext((nextBeat + 1) % 4)
      }, delay)
    },
    [playClick],
  )

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

  useEffect(
    () => () => {
      isPlayingRef.current = false
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    },
    [],
  )

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-neutral-800 bg-neutral-950/95 backdrop-blur-sm">
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
                background:
                  beat === b ? (b === 0 ? '#f97316' : '#c2410c') : '#404040',
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
          <h1 className="mb-3 text-4xl font-medium tracking-tight">Exercices Main Gauche</h1>
          <p className="max-w-2xl text-base leading-relaxed text-neutral-400">
            Indépendance, coordination et force des doigts. À pratiquer lentement, régulièrement,
            et toujours avec le métronome en bas de page.
          </p>
        </header>

        {/* Finger legend */}
        <div className="mb-10 flex flex-wrap items-center gap-5 rounded-xl border border-neutral-800 bg-neutral-900/50 px-5 py-4">
          <span className="text-xs uppercase tracking-wider text-neutral-600">Légende</span>
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

        {/* Exercises */}
        <div className="space-y-6">
          {EXERCISES.map((ex) => (
            <ExerciseCard key={ex.id} exercise={ex} onSetBpm={setBpm} />
          ))}
        </div>
      </main>

      <Metronome bpm={bpm} onBpmChange={setBpm} />
    </>
  )
}

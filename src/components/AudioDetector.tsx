'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { detectPitch, freqToSemi, freqToNoteName } from '@/lib/music/pitch';
import { matchScales, type ScaleMatchResult } from '@/lib/music/scale-match';
import type { ModeKey } from '@/types';

const CHROMATIC = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

interface Props {
  onScaleSelected: (rootName: string, modeKey: ModeKey) => void;
}

export function AudioDetector({ onScaleSelected }: Props) {
  const [isListening, setIsListening] = useState(false);
  const [source, setSource] = useState<'mic' | 'tab' | null>(null);
  const [currentNote, setCurrentNote] = useState<string | null>(null);
  const [currentFreq, setCurrentFreq] = useState<number | null>(null);
  const [detectedSemis, setDetectedSemis] = useState<Map<number, number>>(new Map());
  const [matches, setMatches] = useState<ScaleMatchResult[]>([]);
  const [error, setError] = useState<string | null>(null);

  const audioCtxRef = useRef<AudioContext | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const rafRef = useRef<number | null>(null);
  const matchIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const semisRef = useRef<Map<number, number>>(new Map());

  const stop = useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    if (matchIntervalRef.current) clearInterval(matchIntervalRef.current);
    streamRef.current?.getTracks().forEach((t) => t.stop());
    audioCtxRef.current?.close();
    audioCtxRef.current = null;
    streamRef.current = null;
    rafRef.current = null;
    setIsListening(false);
    setSource(null);
    setCurrentNote(null);
    setCurrentFreq(null);
  }, []);

  const start = useCallback(async (mode: 'mic' | 'tab') => {
    setError(null);
    try {
      let stream: MediaStream;
      if (mode === 'tab') {
        // getDisplayMedia ouvre le sélecteur d'onglet du navigateur
        stream = await navigator.mediaDevices.getDisplayMedia({
          audio: { echoCancellation: false, noiseSuppression: false },
          video: true, // requis par Chrome pour obtenir l'audio
        });
        // On jette le flux vidéo — on n'a besoin que de l'audio
        stream.getVideoTracks().forEach((t) => t.stop());
      } else {
        stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      }
      streamRef.current = stream;

      const ctx = new AudioContext();
      audioCtxRef.current = ctx;
      const analyser = ctx.createAnalyser();
      analyser.fftSize = 2048;
      ctx.createMediaStreamSource(stream).connect(analyser);

      const buffer = new Float32Array(analyser.fftSize);
      semisRef.current = new Map();
      setDetectedSemis(new Map());
      setMatches([]);

      const loop = () => {
        analyser.getFloatTimeDomainData(buffer);
        const freq = detectPitch(buffer, ctx.sampleRate);
        if (freq > 0) {
          const semi = freqToSemi(freq);
          setCurrentNote(freqToNoteName(freq));
          setCurrentFreq(Math.round(freq));
          semisRef.current.set(semi, (semisRef.current.get(semi) ?? 0) + 1);
        } else {
          setCurrentNote(null);
          setCurrentFreq(null);
        }
        rafRef.current = requestAnimationFrame(loop);
      };
      loop();

      matchIntervalRef.current = setInterval(() => {
        const snapshot = new Map(semisRef.current);
        setDetectedSemis(snapshot);
        const semis = new Set(snapshot.keys());
        if (semis.size >= 3) setMatches(matchScales(semis));
      }, 800);

      setSource(mode);
      setIsListening(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Accès audio refusé');
    }
  }, []);

  useEffect(() => () => stop(), [stop]);

  function reset() {
    semisRef.current = new Map();
    setDetectedSemis(new Map());
    setMatches([]);
  }

  return (
    <div className="rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-950">
      <h3 className="mb-4 text-xs uppercase tracking-wider text-neutral-500">
        Détection audio
      </h3>

      {isListening ? (
        <button
          onClick={stop}
          className="mb-5 rounded-lg bg-red-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-red-600"
        >
          ⏹ Arrêter {source === 'tab' ? '(onglet)' : '(micro)'}
        </button>
      ) : (
        <div className="mb-5 flex gap-2">
          <button
            onClick={() => start('mic')}
            className="rounded-lg bg-neutral-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-neutral-700 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-300"
          >
            🎙 Micro
          </button>
          <button
            onClick={() => start('tab')}
            className="rounded-lg border border-neutral-200 px-4 py-2 text-sm font-medium transition-colors hover:bg-neutral-100 dark:border-neutral-800 dark:hover:bg-neutral-900"
          >
            🖥 Onglet / YouTube
          </button>
        </div>
      )}

      {error && <p className="mb-4 text-sm text-red-500">{error}</p>}

      {isListening && (
        <div className="mb-5 flex items-center gap-3">
          <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-neutral-200 font-mono text-xl font-bold dark:border-neutral-800">
            {currentNote ?? '·'}
          </div>
          <div>
            <p className="text-sm font-medium">{currentNote ?? 'Silence…'}</p>
            {currentFreq && (
              <p className="text-xs text-neutral-500">{currentFreq} Hz</p>
            )}
          </div>
        </div>
      )}

      {detectedSemis.size > 0 && (
        <div className="mb-5">
          <div className="mb-2 flex items-center justify-between">
            <p className="text-xs text-neutral-500">Notes captées ({detectedSemis.size})</p>
            <button
              onClick={reset}
              className="text-xs text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200"
            >
              Réinitialiser
            </button>
          </div>
          <div className="flex flex-wrap gap-1">
            {CHROMATIC.map((name, i) => (
              <span
                key={i}
                className={`flex h-7 w-9 items-center justify-center rounded font-mono text-xs transition-colors ${
                  detectedSemis.has(i)
                    ? 'bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900'
                    : 'bg-neutral-100 text-neutral-400 dark:bg-neutral-900 dark:text-neutral-600'
                }`}
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      )}

      {matches.length > 0 && (
        <div>
          <p className="mb-2 text-xs text-neutral-500">Gammes détectées</p>
          <div className="space-y-2">
            {matches.map((m, i) => (
              <div
                key={`${m.rootName}-${m.modeKey}`}
                className="flex items-center justify-between rounded-lg bg-neutral-50 px-3 py-2 dark:bg-neutral-900"
              >
                <div className="flex items-center gap-3">
                  <span className="w-5 font-mono text-xs text-neutral-400">#{i + 1}</span>
                  <div>
                    <p className="text-sm font-medium">{m.rootName} {m.modeName}</p>
                    <p className="text-xs text-neutral-500">
                      {Math.round(m.score * 100)}% — {m.matchCount}/{detectedSemis.size} notes
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => onScaleSelected(m.rootName, m.modeKey)}
                  className="rounded-md border border-neutral-200 px-2.5 py-1 text-xs hover:bg-neutral-100 dark:border-neutral-800 dark:hover:bg-neutral-800"
                >
                  Charger →
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {isListening && detectedSemis.size < 3 && (
        <p className="text-sm text-neutral-400">
          Joue quelques notes… ({detectedSemis.size}/3 captées)
        </p>
      )}
    </div>
  );
}

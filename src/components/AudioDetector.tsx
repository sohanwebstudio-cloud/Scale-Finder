'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { detectPitchACF } from '@/lib/music/pitch-acf';
import { OutlierRemovingSmoother } from '@/lib/music/smoother';
import { freqToSemi, freqToNoteName } from '@/lib/music/pitch';
import { analyzeScales, type ScaleAnalysis } from '@/lib/music/scale-match';
import { keyDisplayName } from '@/lib/music/key-detect';
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
  const [analysis, setAnalysis] = useState<ScaleAnalysis | null>(null);
  const [error, setError] = useState<string | null>(null);

  const audioCtxRef = useRef<AudioContext | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const rafRef = useRef<number | null>(null);
  const matchIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const semisRef = useRef<Map<number, number>>(new Map());
  const smootherRef = useRef(new OutlierRemovingSmoother(10, 0.1, 1, 2, 3));

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
        stream = await navigator.mediaDevices.getUserMedia({
          audio: { echoCancellation: false, noiseSuppression: false },
        });
      }
      streamRef.current = stream;

      const ctx = new AudioContext();
      audioCtxRef.current = ctx;
      const analyser = ctx.createAnalyser();
      analyser.fftSize = 4096;
      ctx.createMediaStreamSource(stream).connect(analyser);

      const buffer = new Float32Array(analyser.fftSize);
      semisRef.current = new Map();
      smootherRef.current.clear();
      setDetectedSemis(new Map());
      setAnalysis(null);

      const loop = () => {
        analyser.getFloatTimeDomainData(buffer);
        const result = detectPitchACF(buffer, ctx.sampleRate);
        // Le smoother rejette les frames aberrantes (harmoniques, transitoires)
        const smoothed = result ? smootherRef.current.addValue(result.freq) : null;
        if (smoothed !== null) {
          const semi = freqToSemi(smoothed);
          setCurrentNote(freqToNoteName(smoothed));
          setCurrentFreq(Math.round(smoothed));
          // 1 frame ≈ durée constante → comptage = pondération par durée,
          // exactement ce qu'attendent les profils de Krumhansl
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
        if (snapshot.size >= 3) setAnalysis(analyzeScales(snapshot));
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
    smootherRef.current.clear();
    setDetectedSemis(new Map());
    setAnalysis(null);
  }

  const topKey = analysis?.keys[0];

  return (
    <div className="border border-ink bg-paper">
      <div className="flex items-center justify-between border-b border-ink px-5 py-3">
        <h3 className="text-[11px] font-medium uppercase tracking-[0.18em]">
          Détection audio
        </h3>
        {detectedSemis.size > 0 && (
          <button
            onClick={reset}
            className="text-[11px] uppercase tracking-wider text-neutral-500 transition-colors hover:text-riso-red"
          >
            Réinitialiser
          </button>
        )}
      </div>

      <div className="p-5 sm:p-6">
        {isListening ? (
          <button
            onClick={stop}
            className="mb-6 bg-riso-red px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-ink"
          >
            ■ Arrêter {source === 'tab' ? '(onglet)' : '(micro)'}
          </button>
        ) : (
          <div className="mb-6 flex flex-wrap gap-2">
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
              Onglet / YouTube
            </button>
          </div>
        )}

        {error && <p className="mb-4 text-sm text-riso-red">{error}</p>}

        {isListening && (
          <div className="mb-6 flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center border border-ink font-mono text-2xl font-bold">
              {currentNote ?? '·'}
            </div>
            <div>
              <p className="text-sm font-medium">{currentNote ?? 'Silence…'}</p>
              {currentFreq && (
                <p className="font-mono text-xs text-neutral-500">{currentFreq} Hz</p>
              )}
            </div>
          </div>
        )}

        {detectedSemis.size > 0 && (
          <div className="mb-6">
            <p className="mb-2 text-[11px] uppercase tracking-[0.18em] text-neutral-500">
              Notes captées ({detectedSemis.size})
            </p>
            <div className="grid grid-cols-12 gap-px">
              {CHROMATIC.map((name, i) => (
                <span
                  key={i}
                  className={`flex h-8 items-center justify-center font-mono text-[11px] transition-colors ${
                    detectedSemis.has(i)
                      ? 'bg-ink text-paper'
                      : 'bg-cream text-neutral-400'
                  }`}
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        )}

        {topKey && (
          <div className="mb-6 border border-ink">
            <p className="border-b border-ink bg-cream px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-neutral-600">
              Tonalité détectée
            </p>
            <div className="flex flex-wrap items-end justify-between gap-3 px-4 py-4">
              <p className="text-3xl font-bold tracking-tight">
                {keyDisplayName(topKey.rootIdx, topKey.quality)}
              </p>
              <div className="flex items-center gap-2">
                <div className="h-2 w-28 bg-cream">
                  <div
                    className="h-full bg-riso-pink"
                    style={{ width: `${Math.round(Math.max(0, topKey.correlation) * 100)}%` }}
                  />
                </div>
                <span className="font-mono text-xs text-neutral-500">
                  {Math.round(Math.max(0, topKey.correlation) * 100)}%
                </span>
              </div>
            </div>
            {analysis.keys.length > 1 && (
              <p className="border-t border-neutral-200 px-4 py-2 text-xs text-neutral-500">
                Aussi possible :{' '}
                {analysis.keys.slice(1).map((k) => keyDisplayName(k.rootIdx, k.quality)).join(' · ')}
              </p>
            )}
          </div>
        )}

        {analysis && analysis.scales.length > 0 && (
          <div>
            <p className="mb-2 text-[11px] uppercase tracking-[0.18em] text-neutral-500">
              Gammes à jouer dessus
            </p>
            <div className="border border-ink">
              {analysis.scales.map((m, i) => (
                <div
                  key={`${m.rootName}-${m.modeKey}`}
                  className={`flex items-center justify-between gap-3 px-4 py-3 ${
                    i > 0 ? 'border-t border-neutral-200' : ''
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-5 font-mono text-xs text-neutral-400">{i + 1}</span>
                    <div>
                      <p className="text-sm font-medium">{m.rootName} {m.modeName}</p>
                      <p className="font-mono text-xs text-neutral-500">
                        {m.matchCount}/{detectedSemis.size} notes couvertes
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => onScaleSelected(m.rootName, m.modeKey)}
                    className="shrink-0 border border-ink px-3 py-2.5 text-xs font-medium transition-colors hover:bg-riso-pink sm:py-1.5"
                  >
                    Charger →
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {isListening && detectedSemis.size < 3 && (
          <p className="text-sm text-neutral-500">
            Joue quelques notes… ({detectedSemis.size}/3 captées)
          </p>
        )}
      </div>
    </div>
  );
}

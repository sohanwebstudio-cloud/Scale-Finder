'use client';

import { useState, useEffect, useCallback } from 'react';
import { authClient } from '@/lib/auth-client';
import { Fretboard } from './Fretboard';
import { KEY_ROOTS } from '@/lib/music/notes';
import { MODES, getMode } from '@/lib/music/scales';
import { spellScale } from '@/lib/music/spelling';
import { getModeColors } from '@/lib/music/colors';
import { getDiatonicChords } from '@/lib/music/diatonic';
import type { ModeKey, ScaleCategory, SignatureScale } from '@/types';

interface ScaleExplorerProps {
  initialScale?: SignatureScale;
}

interface CategorySection {
  id: ScaleCategory;
  label: string;
}

const CATEGORIES: CategorySection[] = [
  { id: 'classique_majeur', label: 'Classiques — Majeur' },
  { id: 'classique_mineur', label: 'Classiques — Mineur' },
  { id: 'blues',            label: 'Blues & Pentatoniques' },
  { id: 'jazz',             label: 'Jazz & Avancé' },
  { id: 'symetrique',       label: 'Symétriques' },
  { id: 'exotique',         label: 'Exotiques' },
  { id: 'arpege',           label: 'Arpeggios' },
];

export function ScaleExplorer({ initialScale }: ScaleExplorerProps) {
  const initialKeyIdx = initialScale
    ? (KEY_ROOTS.find((k) => k.name === initialScale.rootName)?.idx ?? 9)
    : 9;

  const initialModeKey: ModeKey = initialScale?.modeKey ?? 'mixolydian';

  const [keyIdx, setKeyIdx] = useState(initialKeyIdx);
  const [modeKey, setModeKey] = useState<ModeKey>(initialModeKey);
  const [saved, setSaved] = useState(false);
  const [saving, setSaving] = useState(false);

  const { data: session } = authClient.useSession();
  const isSignedIn = !!session;
  const root = KEY_ROOTS[keyIdx];
  const mode = getMode(modeKey);
  const notes = spellScale(root.idx, mode.intervals, root.name, mode.letterOffsets);
  const colors = getModeColors(modeKey, false);
  const diatonicChords = getDiatonicChords(notes, mode.intervals);

  // Vérifie si la gamme courante est déjà sauvegardée
  useEffect(() => {
    if (!isSignedIn) { setSaved(false); return; }
    fetch('/api/scales')
      .then((r) => r.json())
      .then((data: { root: string; scaleName: string }[]) => {
        setSaved(data.some((s) => s.root === root.name && s.scaleName === mode.name));
      })
      .catch(() => {});
  }, [isSignedIn, root.name, mode.name]);

  const toggleSave = useCallback(async () => {
    if (!isSignedIn) return;
    setSaving(true);
    try {
      if (saved) {
        await fetch('/api/scales', {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ root: root.name, scaleName: mode.name }),
        });
        setSaved(false);
      } else {
        await fetch('/api/scales', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ root: root.name, scaleName: mode.name }),
        });
        setSaved(true);
      }
    } catch {
      // silencieux
    } finally {
      setSaving(false);
    }
  }, [isSignedIn, saved, root.name, mode.name]);

  return (
    <div className="border border-ink bg-paper">
      <div className="border-b border-ink px-5 py-3">
        <h3 className="text-[11px] font-medium uppercase tracking-[0.18em]">
          Explorateur de gammes
        </h3>
      </div>

      <div className="space-y-6 p-5 sm:p-6">
        {/* Sélecteur tonique */}
        <div>
          <p className="mb-2 text-[11px] uppercase tracking-[0.18em] text-neutral-500">
            Tonique
          </p>
          <div className="flex flex-wrap gap-1">
            {KEY_ROOTS.map((k, i) => (
              <button
                key={k.idx}
                type="button"
                onClick={() => setKeyIdx(i)}
                className={`min-w-[44px] border px-3 py-1.5 text-sm transition-colors ${
                  i === keyIdx
                    ? 'border-ink bg-ink font-medium text-paper'
                    : 'border-neutral-300 bg-paper hover:border-ink hover:bg-cream'
                }`}
              >
                {k.name}
              </button>
            ))}
          </div>
        </div>

        {/* Sélecteur mode — par catégories */}
        <div className="space-y-4">
          <p className="text-[11px] uppercase tracking-[0.18em] text-neutral-500">Mode</p>

          {CATEGORIES.map((cat) => {
            const catModes = MODES.filter((m) => m.category === cat.id);
            return (
              <div key={cat.id}>
                <p className="mb-1.5 text-xs font-medium text-neutral-500">{cat.label}</p>
                <div className="flex flex-wrap gap-1">
                  {catModes.map((m) => (
                    <button
                      key={m.key}
                      type="button"
                      onClick={() => setModeKey(m.key)}
                      className={`border px-3 py-1.5 text-sm transition-colors ${
                        m.key === modeKey
                          ? 'border-ink bg-ink font-medium text-paper'
                          : 'border-neutral-300 bg-paper hover:border-ink hover:bg-cream'
                      }`}
                    >
                      {m.name}
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Info bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 border border-ink bg-cream px-5 py-3">
          <div>
            <p className="text-base font-medium">
              {root.name} {mode.name}
            </p>
            <p className="text-xs text-neutral-500">{mode.desc}</p>
          </div>
          <div className="flex items-center gap-2">
            <span
              className="border border-ink px-2.5 py-1 font-mono text-xs font-medium"
              style={{ background: colors.bg, color: colors.text }}
            >
              {root.name}
              {mode.chord}
            </span>
            {isSignedIn && (
              <button
                onClick={toggleSave}
                disabled={saving}
                title={saved ? 'Retirer des favoris' : 'Sauvegarder cette gamme'}
                className={`flex h-7 w-7 items-center justify-center border transition-colors ${
                  saved
                    ? 'border-ink bg-ink text-paper'
                    : 'border-neutral-300 bg-paper text-neutral-400 hover:border-ink hover:text-ink'
                }`}
              >
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill={saved ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                </svg>
              </button>
            )}
          </div>
        </div>

        {/* Notes */}
        <div className="flex flex-wrap gap-1">
          {notes.map((n, i) => (
            <span
              key={`${n.name}-${i}`}
              className="inline-flex h-8 min-w-[38px] items-center justify-center px-2 font-mono text-xs font-medium"
              style={{
                background: colors.bg,
                color: colors.text,
                outline: i === 0 ? `1.5px solid ${colors.text}` : `1px solid ${colors.text}33`,
                outlineOffset: '-1px',
              }}
            >
              {n.name}
            </span>
          ))}
        </div>

        {/* Manche */}
        <Fretboard notes={notes} rootIdx={root.idx} modeKey={modeKey} />

        {/* Accords diatoniques */}
        {diatonicChords && (
          <div>
            <p className="mb-2 text-[11px] uppercase tracking-[0.18em] text-neutral-500">
              Accords diatoniques
            </p>
            <div className="overflow-x-auto">
              <div className="grid min-w-[360px] grid-cols-7 gap-px bg-neutral-200">
                {diatonicChords.map((chord) => (
                  <div
                    key={chord.numeral}
                    className="flex flex-col items-center bg-paper px-1 py-3 text-center"
                  >
                    <span className="font-mono text-[10px] text-neutral-400">{chord.numeral}</span>
                    <span className="mt-1 text-[11px] font-medium text-ink">{chord.chordName}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Exemples célèbres */}
        {mode.examples && mode.examples.length > 0 && (
          <div>
            <p className="mb-2 text-[11px] uppercase tracking-[0.18em] text-neutral-500">
              Exemples célèbres
            </p>
            <div className="space-y-1.5 border border-ink bg-cream px-4 py-3">
              {mode.examples.map((ex, i) => (
                <div key={i} className="flex flex-wrap items-baseline gap-x-2 text-sm">
                  <span className="font-medium text-ink">«&#8202;{ex.song}&#8202;»</span>
                  <span className="text-neutral-400">—</span>
                  <span className="text-neutral-600">{ex.artist}</span>
                  {ex.note && (
                    <span className="text-[11px] text-neutral-400">({ex.note})</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

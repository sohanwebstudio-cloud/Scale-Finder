'use client';

import { useState } from 'react';
import { Fretboard } from './Fretboard';
import { KEY_ROOTS } from '@/lib/music/notes';
import { MODES, getMode } from '@/lib/music/scales';
import { spellScale } from '@/lib/music/spelling';
import { getModeColors } from '@/lib/music/colors';
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

  const root = KEY_ROOTS[keyIdx];
  const mode = getMode(modeKey);
  const notes = spellScale(root.idx, mode.intervals, root.name, mode.letterOffsets);
  const colors = getModeColors(modeKey, false);

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
          <span
            className="border border-ink px-2.5 py-1 font-mono text-xs font-medium"
            style={{ background: colors.bg, color: colors.text }}
          >
            {root.name}
            {mode.chord}
          </span>
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
      </div>
    </div>
  );
}

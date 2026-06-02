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
    <div className="space-y-6">
      {/* Sélecteur tonique */}
      <div>
        <p className="mb-2 text-xs uppercase tracking-wider text-neutral-500">
          Tonique
        </p>
        <div className="flex flex-wrap gap-1">
          {KEY_ROOTS.map((k, i) => (
            <button
              key={k.idx}
              type="button"
              onClick={() => setKeyIdx(i)}
              className={`min-w-[44px] rounded-md border px-3 py-1.5 text-sm transition-colors ${
                i === keyIdx
                  ? 'border-orange-500 bg-orange-500 font-medium text-neutral-950'
                  : 'border-neutral-800 bg-transparent text-neutral-100 hover:bg-neutral-800'
              }`}
            >
              {k.name}
            </button>
          ))}
        </div>
      </div>

      {/* Sélecteur mode — par catégories */}
      <div className="space-y-4">
        <p className="text-xs uppercase tracking-wider text-neutral-500">Mode</p>

        {CATEGORIES.map((cat) => {
          const catModes = MODES.filter((m) => m.category === cat.id);
          return (
            <div key={cat.id}>
              <p className="mb-1.5 text-xs font-medium text-neutral-600">{cat.label}</p>
              <div className="flex flex-wrap gap-1">
                {catModes.map((m) => (
                  <button
                    key={m.key}
                    type="button"
                    onClick={() => setModeKey(m.key)}
                    className={`rounded-md border px-3 py-1.5 text-sm transition-colors ${
                      m.key === modeKey
                        ? 'border-orange-500 bg-orange-500 font-medium text-neutral-950'
                        : 'border-neutral-800 bg-transparent text-neutral-100 hover:bg-neutral-800'
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
      <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl bg-neutral-900 px-5 py-3">
        <div>
          <p className="text-base font-medium">
            {root.name} {mode.name}
          </p>
          <p className="text-xs text-neutral-500">{mode.desc}</p>
        </div>
        <span
          className="rounded-md px-2.5 py-1 font-mono text-xs font-medium"
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
            className="inline-flex h-7 min-w-[36px] items-center justify-center rounded px-2 font-mono text-xs font-medium"
            style={{
              background: colors.bg,
              color: colors.text,
              outline: i === 0 ? `1.5px solid ${colors.text}` : 'none',
              outlineOffset: '-1.5px',
            }}
          >
            {n.name}
          </span>
        ))}
      </div>

      {/* Manche */}
      <Fretboard notes={notes} rootIdx={root.idx} modeKey={modeKey} />
    </div>
  );
}

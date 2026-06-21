'use client';

import { useState } from 'react';

const CX = 250;
const CY = 250;
const R_OUT = 195;
const R_MID = 140;
const R_IN = 90;

const CIRCLE_KEYS = [
  { major: 'C',  minor: 'Am',   sig: '0',   sharps: 0, flats: 0 },
  { major: 'G',  minor: 'Em',   sig: '1♯',  sharps: 1, flats: 0 },
  { major: 'D',  minor: 'Bm',   sig: '2♯',  sharps: 2, flats: 0 },
  { major: 'A',  minor: 'F♯m',  sig: '3♯',  sharps: 3, flats: 0 },
  { major: 'E',  minor: 'C♯m',  sig: '4♯',  sharps: 4, flats: 0 },
  { major: 'B',  minor: 'G♯m',  sig: '5♯',  sharps: 5, flats: 0 },
  { major: 'F♯', minor: 'D♯m',  sig: '6♯',  sharps: 6, flats: 6 },
  { major: 'D♭', minor: 'B♭m',  sig: '5♭',  sharps: 0, flats: 5 },
  { major: 'A♭', minor: 'Fm',   sig: '4♭',  sharps: 0, flats: 4 },
  { major: 'E♭', minor: 'Cm',   sig: '3♭',  sharps: 0, flats: 3 },
  { major: 'B♭', minor: 'Gm',   sig: '2♭',  sharps: 0, flats: 2 },
  { major: 'F',  minor: 'Dm',   sig: '1♭',  sharps: 0, flats: 1 },
];

function sectorPath(r1: number, r2: number, a1Deg: number, a2Deg: number): string {
  const toR = (d: number) => (d * Math.PI) / 180;
  const a1 = toR(a1Deg);
  const a2 = toR(a2Deg);
  const ox1 = CX + r2 * Math.cos(a1), oy1 = CY + r2 * Math.sin(a1);
  const ox2 = CX + r2 * Math.cos(a2), oy2 = CY + r2 * Math.sin(a2);
  const ix2 = CX + r1 * Math.cos(a2), iy2 = CY + r1 * Math.sin(a2);
  const ix1 = CX + r1 * Math.cos(a1), iy1 = CY + r1 * Math.sin(a1);
  return `M ${ox1} ${oy1} A ${r2} ${r2} 0 0 1 ${ox2} ${oy2} L ${ix2} ${iy2} A ${r1} ${r1} 0 0 0 ${ix1} ${iy1} Z`;
}

function labelPos(r: number, midDeg: number): { x: number; y: number } {
  const a = (midDeg * Math.PI) / 180;
  return { x: CX + r * Math.cos(a), y: CY + r * Math.sin(a) };
}

const ENHARMONICS: Record<string, string> = {
  'F♯': 'G♭',
  'D♯m': 'E♭m',
  'D♭': 'C♯',
  'B♭m': 'A♯m',
};

function sigLabel(k: (typeof CIRCLE_KEYS)[0]): string {
  if (k.sharps === 0 && k.flats === 0) return 'Do — aucune altération';
  if (k.sharps > 0) return `${k.sharps} dièse${k.sharps > 1 ? 's' : ''}`;
  return `${k.flats} bémol${k.flats > 1 ? 's' : ''}`;
}

export function CircleOfFifths() {
  const [selected, setSelected] = useState<number | null>(null);

  const sel = selected !== null ? CIRCLE_KEYS[selected] : null;

  return (
    <div className="border border-ink bg-paper">
      <div className="border-b border-ink px-5 py-3">
        <h2 className="text-[11px] font-medium uppercase tracking-[0.18em]">
          Cercle des Quintes
        </h2>
      </div>

      <div className="flex flex-col items-center gap-6 p-5 sm:flex-row sm:items-start sm:gap-10 sm:p-8">
        {/* SVG Circle */}
        <div className="w-full max-w-[420px] shrink-0">
          <svg viewBox="0 0 500 500" className="w-full" role="img" aria-label="Cercle des quintes interactif">
            {CIRCLE_KEYS.map((key, i) => {
              const a1 = i * 30 - 90;
              const a2 = a1 + 30;
              const midDeg = a1 + 15;
              const isSelected = selected === i;

              const majorFill = isSelected ? '#141414' : '#fbfaf7';
              const majorText = isSelected ? '#fbfaf7' : '#141414';
              const minorFill = isSelected ? '#f1efe8' : '#f1efe8';
              const minorStroke = isSelected ? '#141414' : '#c9c4b4';

              const majPos = labelPos((R_OUT + R_MID) / 2, midDeg);
              const minPos = labelPos((R_MID + R_IN) / 2, midDeg);
              const sigPos = labelPos(R_IN - 18, midDeg);

              return (
                <g
                  key={key.major}
                  onClick={() => setSelected(selected === i ? null : i)}
                  className="cursor-pointer"
                  role="button"
                  aria-label={`${key.major} majeur / ${key.minor}`}
                >
                  {/* Major ring */}
                  <path
                    d={sectorPath(R_MID, R_OUT, a1, a2)}
                    fill={majorFill}
                    stroke="#141414"
                    strokeWidth="1.5"
                  />
                  <text
                    x={majPos.x}
                    y={majPos.y + 5}
                    textAnchor="middle"
                    fill={majorText}
                    fontSize={isSelected ? 17 : 15}
                    fontWeight="700"
                    fontFamily="inherit"
                  >
                    {key.major}
                  </text>

                  {/* Minor ring */}
                  <path
                    d={sectorPath(R_IN, R_MID, a1, a2)}
                    fill={minorFill}
                    stroke={minorStroke}
                    strokeWidth="1"
                  />
                  <text
                    x={minPos.x}
                    y={minPos.y + 4}
                    textAnchor="middle"
                    fill={isSelected ? '#141414' : '#6b675c'}
                    fontSize={10}
                    fontWeight={isSelected ? '700' : '400'}
                    fontFamily="inherit"
                  >
                    {key.minor}
                  </text>
                </g>
              );
            })}

            {/* Signature labels — inner disc */}
            {CIRCLE_KEYS.map((key, i) => {
              const midDeg = i * 30 - 90 + 15;
              const sigPos = labelPos(R_IN - 18, midDeg);
              return (
                <text
                  key={`sig-${i}`}
                  x={sigPos.x}
                  y={sigPos.y + 3}
                  textAnchor="middle"
                  fill="#8a8678"
                  fontSize={8}
                  fontFamily="monospace"
                >
                  {key.sig}
                </text>
              );
            })}

            {/* Center disc */}
            <circle cx={CX} cy={CY} r={R_IN - 28} fill="#fbfaf7" stroke="#141414" strokeWidth="1.5" />
            {sel ? (
              <>
                <text x={CX} y={CY - 14} textAnchor="middle" fill="#141414" fontSize={22} fontWeight="800" fontFamily="inherit">
                  {sel.major}
                </text>
                <text x={CX} y={CY + 6} textAnchor="middle" fill="#6b675c" fontSize={11} fontFamily="inherit">
                  {sel.minor}
                </text>
                <text x={CX} y={CY + 22} textAnchor="middle" fill="#8a8678" fontSize={10} fontFamily="monospace">
                  {sel.sig}
                </text>
              </>
            ) : (
              <text x={CX} y={CY + 5} textAnchor="middle" fill="#c9c4b4" fontSize={11} fontFamily="inherit">
                ←sélectionner
              </text>
            )}
          </svg>
        </div>

        {/* Info panel */}
        <div className="min-w-0 flex-1">
          {sel ? (
            <div className="space-y-4">
              {/* Header */}
              <div className="border border-ink bg-cream px-5 py-4">
                <p className="mb-1 text-[11px] uppercase tracking-[0.18em] text-neutral-500">
                  Tonalité sélectionnée
                </p>
                <p className="text-3xl font-bold text-ink">{sel.major} majeur</p>
                <p className="mt-1 text-sm text-neutral-500">
                  Relatif mineur : <span className="font-medium text-ink">{sel.minor}</span>
                </p>
              </div>

              {/* Signature */}
              <div className="border border-ink">
                <div className="border-b border-ink px-4 py-2">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-neutral-500">
                    Armure
                  </p>
                </div>
                <div className="px-4 py-3 text-sm text-ink">
                  <span className="font-mono text-base font-bold">{sel.sig === '0' ? '∅' : sel.sig}</span>
                  <span className="ml-2 text-neutral-500">{sigLabel(sel)}</span>
                </div>
              </div>

              {/* Enharmonic */}
              {(ENHARMONICS[sel.major] || ENHARMONICS[sel.minor]) && (
                <div className="border border-neutral-200 bg-cream px-4 py-3 text-sm text-neutral-500">
                  <span className="font-medium text-ink">Enharmonique :</span>{' '}
                  {ENHARMONICS[sel.major] ?? sel.major} majeur
                  {ENHARMONICS[sel.minor] && ` / ${ENHARMONICS[sel.minor]}`}
                </div>
              )}

              {/* Adjacent keys */}
              <div className="border border-ink">
                <div className="border-b border-ink px-4 py-2">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-neutral-500">
                    Tonalités voisines
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-px bg-neutral-200">
                  {[
                    {
                      label: '← 5e en dessous',
                      key: CIRCLE_KEYS[(selected! + 11) % 12],
                    },
                    {
                      label: '5e au-dessus →',
                      key: CIRCLE_KEYS[(selected! + 1) % 12],
                    },
                  ].map(({ label, key: adj }) => (
                    <button
                      key={label}
                      onClick={() =>
                        setSelected(CIRCLE_KEYS.indexOf(adj))
                      }
                      className="flex flex-col bg-paper px-4 py-3 text-left transition-colors hover:bg-cream"
                    >
                      <span className="text-[10px] uppercase tracking-[0.15em] text-neutral-400">
                        {label}
                      </span>
                      <span className="mt-1 text-base font-bold text-ink">{adj.major}</span>
                      <span className="text-xs text-neutral-500">{adj.sig}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Theory tip */}
              <div className="border-l-2 border-ink pl-4 text-sm text-neutral-600">
                La quinte entre deux tonalités voisines (ex. Do → Sol) partage 6 notes sur 7.
                Plus les tonalités sont proches sur le cercle, plus elles sonnent naturellement ensemble.
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="border-l-2 border-ink pl-4">
                <p className="text-sm font-medium text-ink">Comment lire le cercle</p>
                <p className="mt-1 text-sm leading-relaxed text-neutral-600">
                  Chaque secteur = une tonalité majeure (anneau extérieur) et son relatif mineur (anneau intérieur).
                  L'armure (nombre de ♯ ou ♭) est indiquée au centre.
                </p>
              </div>
              <div className="grid gap-px bg-neutral-200">
                {[
                  ['Sens horaire', 'Chaque pas = une quinte juste (7 demi-tons)'],
                  ['Côté droit', 'Tonalités avec des dièses (♯)'],
                  ['Côté gauche', 'Tonalités avec des bémols (♭)'],
                  ['Relatif mineur', 'Même armure, ambiance mineure'],
                ].map(([title, desc]) => (
                  <div key={title} className="bg-paper px-4 py-3">
                    <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-ink">
                      {title}
                    </p>
                    <p className="mt-0.5 text-xs text-neutral-500">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

'use client';

import type { ModeKey, Note } from '@/types';
import { getModeColors } from '@/lib/music/colors';

interface FretboardProps {
  notes: Note[];
  rootIdx: number;
  modeKey: ModeKey;
  numFrets?: number;
}

// Standard tuning — high to low string
const STRINGS = [
  { name: 'E', semi: 4 },
  { name: 'B', semi: 11 },
  { name: 'G', semi: 7 },
  { name: 'D', semi: 2 },
  { name: 'A', semi: 9 },
  { name: 'E', semi: 4 },
];

const SINGLE_INLAY_FRETS = [3, 5, 7, 9, 15];
const DOUBLE_INLAY_FRETS = [12];

export function Fretboard({ notes, rootIdx, modeKey, numFrets = 15 }: FretboardProps) {
  const colors = getModeColors(modeKey, false);
  const semiMap = new Map<number, string>();
  notes.forEach((n) => semiMap.set(n.semi, n.name));

  // Dimensions — wider viewBox, taller strings, more room for labels
  const W = 920;
  const labelColW = 24;   // width reserved for string name labels
  const nutX = labelColW + 20; // nut position (start of fretboard)
  const rightPad = 14;
  const fretAreaWidth = W - nutX - rightPad;
  const fretWidth = fretAreaWidth / numFrets;
  const stringSpacing = 34;
  const topPad = 22;
  const numStrings = STRINGS.length;
  const fretboardHeight = (numStrings - 1) * stringSpacing;
  const H = topPad + fretboardHeight + 30;
  const noteR = 12;

  // Open-string note x: between the label column and the nut, comfortably spaced
  const openNoteX = (labelColW + nutX) / 2; // ≈ 34px, label ends ~20px

  const inkPrimary = '#141414';
  const inkMuted = '#8a8678';
  const woodFill = '#f1efe8';
  const fretColor = '#b8b3a4';
  const stringColor = '#6b675c';
  const dotColor = '#dcd8ca';

  const midY = topPad + fretboardHeight / 2;

  return (
    <svg
      width="100%"
      viewBox={`0 0 ${W} ${H}`}
      role="img"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Manche de guitare avec les notes du mode</title>

      {/* Fretboard background */}
      <rect
        x={nutX}
        y={topPad - 8}
        width={fretAreaWidth}
        height={fretboardHeight + 16}
        fill={woodFill}
        stroke={fretColor}
        strokeWidth="0.5"
        rx="2"
      />

      {/* Nut */}
      <line
        x1={nutX}
        y1={topPad - 8}
        x2={nutX}
        y2={topPad + fretboardHeight + 8}
        stroke={inkPrimary}
        strokeWidth="3"
      />

      {/* Single inlay dots */}
      {SINGLE_INLAY_FRETS.map((f) => (
        <circle
          key={`inlay-${f}`}
          cx={nutX + (f - 0.5) * fretWidth}
          cy={midY}
          r="5"
          fill={dotColor}
        />
      ))}

      {/* Double inlay at 12th */}
      {DOUBLE_INLAY_FRETS.flatMap((f) => [
        <circle key={`dbl-t-${f}`} cx={nutX + (f - 0.5) * fretWidth} cy={topPad + stringSpacing * 1.5} r="5" fill={dotColor} />,
        <circle key={`dbl-b-${f}`} cx={nutX + (f - 0.5) * fretWidth} cy={topPad + stringSpacing * 3.5} r="5" fill={dotColor} />,
      ])}

      {/* Frets */}
      {Array.from({ length: numFrets }, (_, i) => i + 1).map((f) => (
        <line
          key={`fret-${f}`}
          x1={nutX + f * fretWidth}
          y1={topPad - 8}
          x2={nutX + f * fretWidth}
          y2={topPad + fretboardHeight + 8}
          stroke={fretColor}
          strokeWidth="0.9"
        />
      ))}

      {/* Strings (thicker toward bass) */}
      {STRINGS.map((s, i) => (
        <line
          key={`string-${i}`}
          x1={nutX}
          y1={topPad + i * stringSpacing}
          x2={W - rightPad}
          y2={topPad + i * stringSpacing}
          stroke={stringColor}
          strokeWidth={(0.7 + i * 0.22).toFixed(2)}
        />
      ))}

      {/* Fret numbers */}
      {[3, 5, 7, 9, 12, 15].map((f) => (
        <text
          key={`num-${f}`}
          x={nutX + (f - 0.5) * fretWidth}
          y={topPad + fretboardHeight + 24}
          textAnchor="middle"
          fontSize="11"
          fill={inkMuted}
          fontFamily="var(--font-mono)"
        >
          {f}
        </text>
      ))}

      {/* String name labels — left column, clear of note circles */}
      {STRINGS.map((_s, i) => (
        <text
          key={`label-${i}`}
          x={labelColW / 2}
          y={topPad + i * stringSpacing + 0.5}
          textAnchor="middle"
          dominantBaseline="central"
          fontSize="12"
          fontWeight="600"
          fill={inkMuted}
          fontFamily="var(--font-mono)"
        >
          {STRINGS[i].name}
        </text>
      ))}

      {/* Notes */}
      {STRINGS.flatMap((s, stringIdx) =>
        Array.from({ length: numFrets + 1 }, (_, f) => {
          const semi = (s.semi + f) % 12;
          if (!semiMap.has(semi)) return null;

          const noteName = semiMap.get(semi)!;
          const isRoot = semi === rootIdx;
          // Open strings go in the dedicated column; fretted notes go between frets
          const cx = f === 0 ? openNoteX : nutX + (f - 0.5) * fretWidth;
          const cy = topPad + stringIdx * stringSpacing;

          const fillColor = isRoot ? colors.text : colors.bg;
          const textColor = isRoot ? colors.bg : colors.text;
          const fontSize = noteName.length > 2 ? 8 : 10;

          return (
            <g key={`note-${stringIdx}-${f}`}>
              <circle
                cx={cx}
                cy={cy}
                r={noteR}
                fill={fillColor}
                stroke={colors.text}
                strokeWidth={isRoot ? 1.8 : 0.9}
              />
              <text
                x={cx}
                y={cy + 0.5}
                textAnchor="middle"
                dominantBaseline="central"
                fontSize={fontSize}
                fill={textColor}
                fontFamily="var(--font-mono)"
                fontWeight="600"
              >
                {noteName}
              </text>
            </g>
          );
        }),
      )}
    </svg>
  );
}

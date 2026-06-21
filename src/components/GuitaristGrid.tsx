'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { Guitarist } from '@/types';

interface Props {
  guitarists: Guitarist[];
}


export function GuitaristGrid({ guitarists }: Props) {
  const [query, setQuery] = useState('');

  const q = query.trim().toLowerCase();
  const filtered = q === ''
    ? guitarists
    : guitarists.filter((g) =>
        g.name.toLowerCase().includes(q) ||
        g.shortName.toLowerCase().includes(q) ||
        g.genres.some((genre) => genre.toLowerCase().includes(q))
      );

  return (
    <>
      {/* Barre de recherche */}
      <div className="border-b border-ink">
        <div className="flex items-center gap-3 px-4 py-3 sm:px-6">
          <Image src="/logo.png" alt="Scale Finder" width={20} height={20} className="shrink-0 opacity-60" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Rechercher par nom ou style…"
            className="min-w-0 flex-1 bg-transparent text-sm text-ink placeholder-neutral-400 outline-none"
          />
          {q !== '' && (
            <>
              <span className="shrink-0 text-xs text-neutral-400">
                {filtered.length} résultat{filtered.length !== 1 ? 's' : ''}
              </span>
              <button
                onClick={() => setQuery('')}
                aria-label="Effacer"
                className="shrink-0 text-neutral-400 transition-colors hover:text-ink"
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
                  <path d="M1 1L11 11M11 1L1 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
            </>
          )}
        </div>
      </div>

      {/* Grille */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 gap-px bg-neutral-200 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map((guitarist) => (
            <Link
              key={guitarist.slug}
              href={`/guitarist/${guitarist.slug}`}
              className="group flex flex-col bg-paper p-5 transition-colors hover:bg-cream"
            >
              <div className="mb-2 flex items-baseline justify-between gap-2">
                <h3 className="text-sm font-medium text-ink">{guitarist.name}</h3>
                <span className="shrink-0 font-mono text-[11px] text-neutral-400">
                  {guitarist.era}
                </span>
              </div>
              <p className="mb-3 text-xs text-neutral-500">
                {guitarist.genres.join(' · ')}
              </p>
              <p className="line-clamp-2 text-xs leading-relaxed text-neutral-600">
                {guitarist.bio}
              </p>
              <p className="mt-3 text-xs font-medium text-riso-pink-deep opacity-0 transition-opacity group-hover:opacity-100">
                Explorer →
              </p>
            </Link>
          ))}
        </div>
      ) : (
        <div className="px-6 py-16 text-center">
          <p className="text-sm text-neutral-500">Aucun résultat pour « {query} »</p>
          <button
            onClick={() => setQuery('')}
            className="mt-3 text-xs text-riso-pink-deep transition-colors hover:text-ink"
          >
            Effacer la recherche
          </button>
        </div>
      )}
    </>
  );
}

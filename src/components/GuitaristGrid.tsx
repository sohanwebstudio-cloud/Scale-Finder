'use client';

import { useState } from 'react';
import Link from 'next/link';
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
      {/* Search strip */}
      <div className="mb-10 flex items-center gap-3 rounded-xl border border-neutral-800 bg-neutral-900/60 px-4 py-3 backdrop-blur-sm">
        <svg
          width="16" height="16" viewBox="0 0 16 16" fill="none"
          className="shrink-0 text-neutral-500"
          aria-hidden
        >
          <circle cx="6.5" cy="6.5" r="5" stroke="currentColor" strokeWidth="1.5" />
          <path d="M10.5 10.5L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>

        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Rechercher par nom ou style…"
          className="min-w-0 flex-1 bg-transparent text-sm text-neutral-100 placeholder-neutral-600 outline-none"
        />

        {q !== '' && (
          <>
            <span className="shrink-0 text-xs text-neutral-600">
              {filtered.length} résultat{filtered.length !== 1 ? 's' : ''}
            </span>
            <button
              onClick={() => setQuery('')}
              aria-label="Effacer la recherche"
              className="shrink-0 text-neutral-500 transition-colors hover:text-neutral-200"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                <path d="M2 2L12 12M12 2L2 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </>
        )}
      </div>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((guitarist) => (
            <Link
              key={guitarist.slug}
              href={`/guitarist/${guitarist.slug}`}
              className="group rounded-xl border border-neutral-800 bg-neutral-900 p-6 transition-all duration-300 hover:border-orange-500/50 hover:bg-neutral-800/80"
            >
              <div className="mb-3 flex items-baseline justify-between gap-2">
                <h3 className="text-lg font-medium text-neutral-100 transition-colors group-hover:text-orange-400">
                  {guitarist.name}
                </h3>
                <span className="shrink-0 text-xs text-neutral-600">{guitarist.era}</span>
              </div>
              <div className="mb-3 flex flex-wrap gap-1.5">
                {guitarist.genres.map((g) => (
                  <span
                    key={g}
                    className="rounded-full bg-orange-950/50 px-2.5 py-0.5 text-xs text-orange-400/70"
                  >
                    {g}
                  </span>
                ))}
              </div>
              <p className="text-sm leading-relaxed text-neutral-400">{guitarist.bio}</p>
              <p className="mt-4 text-xs text-orange-500 opacity-0 transition-opacity group-hover:opacity-100">
                Explorer →
              </p>
            </Link>
          ))}
        </div>
      ) : (
        <div className="py-24 text-center">
          <p className="text-neutral-500">Aucun résultat pour « {query} »</p>
          <button
            onClick={() => setQuery('')}
            className="mt-4 text-xs text-orange-500 hover:text-orange-400 transition-colors"
          >
            Effacer la recherche
          </button>
        </div>
      )}
    </>
  );
}

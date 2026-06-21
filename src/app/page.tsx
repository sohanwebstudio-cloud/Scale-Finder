import Link from 'next/link';
import { ALL_GUITARISTS } from '@/data/guitarists';
import { GuitaristGrid } from '@/components/GuitaristGrid';

/** Manche stylisé façon riso — grille de dots rose / cyan / encre. */
function FretboardArt() {
  const COLS = 9;
  const ROWS = 6;
  const palette = ['#f6a8d2', '#5bc8ec', '#141414', '#fbfaf7'];
  // Motif déterministe : la couleur dépend de la position, pas du hasard
  const colorAt = (c: number, r: number) => palette[(c * 5 + r * 3 + (c % 3)) % 4];

  return (
    <svg viewBox="0 0 460 300" className="h-full w-full" role="img" aria-label="Manche de guitare stylisé">
      <rect width="460" height="300" fill="#f1efe8" />
      {/* cordes */}
      {Array.from({ length: ROWS }, (_, r) => (
        <line key={`s${r}`} x1="20" y1={50 + r * 40} x2="440" y2={50 + r * 40} stroke="#141414" strokeWidth="1" />
      ))}
      {/* frettes */}
      {Array.from({ length: COLS + 1 }, (_, c) => (
        <line key={`f${c}`} x1={30 + c * 44} y1="42" x2={30 + c * 44} y2="258" stroke="#141414" strokeWidth={c === 0 ? 4 : 1} />
      ))}
      {/* notes */}
      {Array.from({ length: COLS }, (_, c) =>
        Array.from({ length: ROWS }, (_, r) => {
          if ((c * 7 + r * 4) % 5 > 2) return null;
          const fill = colorAt(c, r);
          return (
            <circle
              key={`n${c}-${r}`}
              cx={52 + c * 44}
              cy={50 + r * 40}
              r="13"
              fill={fill}
              stroke="#141414"
              strokeWidth="1.5"
            />
          );
        }),
      )}
    </svg>
  );
}

const TOOLS = [
  {
    href: '/studio',
    label: 'Scale Studio',
    sub: 'Détecte la tonalité, trouve la gamme',
    dot: '#f6a8d2',
  },
  {
    href: '/tuner',
    label: 'Accordeur',
    sub: 'Accordage précis au cent près',
    dot: '#5bc8ec',
  },
  {
    href: '/exercises',
    label: 'Exercices',
    sub: 'Technique main gauche',
    dot: '#e0301e',
  },
  {
    href: '/quintes',
    label: 'Cercle des Quintes',
    sub: 'Navigation entre tonalités',
    dot: '#141414',
  },
  {
    href: '/theory',
    label: 'Théorie',
    sub: 'Référence complète des gammes',
    dot: '#f1efe8',
    dotBorder: true,
  },
];

export default function HomePage() {
  return (
    <div className="space-y-2 sm:space-y-3">
      {/* Hero */}
      <section className="grid border border-ink lg:grid-cols-2">
        <div className="flex flex-col justify-center px-4 py-8 sm:px-10 sm:py-14 lg:py-20">
          <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.2em] text-ink">
            Outil d&apos;apprentissage guitare
          </p>
          <h1 className="text-3xl font-bold leading-[1.05] tracking-tight sm:text-4xl lg:text-6xl">
            Trouve la tonalité.
            <br />
            Joue la bonne gamme.
          </h1>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-neutral-600 sm:mt-5 sm:text-base">
            Lance un morceau, Scale Finder écoute, détecte sa tonalité et te montre
            exactement quelle gamme jouer — directement sur le manche.
          </p>
          <div className="mt-6 flex flex-col gap-2 sm:mt-8 sm:flex-row sm:flex-wrap">
            <Link
              href="/studio"
              className="bg-ink px-6 py-3 text-center text-sm font-medium text-paper transition-colors hover:bg-riso-pink hover:text-ink sm:text-left"
            >
              Ouvrir le studio →
            </Link>
            <Link
              href="#guitaristes"
              className="border border-ink px-6 py-3 text-center text-sm font-medium transition-colors hover:bg-cream sm:text-left"
            >
              Voir les guitaristes
            </Link>
          </div>
        </div>
        <div className="border-t border-ink lg:border-l lg:border-t-0">
          <FretboardArt />
        </div>
      </section>

      {/* Outils */}
      <section className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3 lg:grid-cols-5">
        {TOOLS.map((tool) => (
          <Link
            key={tool.href}
            href={tool.href}
            className="group flex flex-col items-center border border-ink px-4 py-5 text-center transition-colors hover:bg-cream last:col-span-2 sm:py-8 sm:last:col-span-1"
          >
            <span
              className={`mb-4 inline-block h-9 w-9 rounded-full transition-transform group-hover:scale-110 ${'dotBorder' in tool && tool.dotBorder ? 'border-[1.5px] border-ink' : 'border-[1.5px] border-ink'}`}
              style={{ background: tool.dot }}
            />
            <p className="text-sm font-medium">{tool.label}</p>
            <p className="mt-1 text-[11px] text-neutral-500">{tool.sub}</p>
          </Link>
        ))}
      </section>

      {/* Guitaristes */}
      <section id="guitaristes" className="border border-ink">
        <header className="flex flex-wrap items-baseline justify-between gap-2 border-b border-ink px-4 py-3 sm:px-6">
          <h2 className="text-sm font-medium uppercase tracking-[0.18em]">
            Les guitaristes
          </h2>
          <p className="text-xs font-bold text-ink">
            {ALL_GUITARISTS.length} légendes · leurs gammes signature
          </p>
        </header>
        <GuitaristGrid guitarists={ALL_GUITARISTS} />
      </section>
    </div>
  );
}

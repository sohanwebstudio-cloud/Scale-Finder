import Link from 'next/link';
import { ALL_GUITARISTS } from '@/data/guitarists';
import { StudioHero } from '@/components/StudioHero';
import { GuitaristGrid } from '@/components/GuitaristGrid';

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <StudioHero />

      {/* Exercises entry */}
      <section className="mx-auto max-w-7xl px-6 pb-6">
        <Link
          href="/exercises"
          className="group flex items-center justify-between rounded-2xl border border-neutral-800 bg-neutral-900 px-7 py-5 transition-colors hover:border-orange-500/40"
        >
          <div className="flex items-center gap-5">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-500/10 text-xl text-orange-400">
              ♩
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-orange-500 mb-0.5">Technique</p>
              <p className="font-medium text-neutral-100">Exercices Guitare</p>
              <p className="text-sm text-neutral-500">
                Technique main gauche · Accords jazz · Grilles blues · Métronome intégré
              </p>
            </div>
          </div>
          <span className="ml-4 shrink-0 text-orange-400 transition-transform group-hover:translate-x-1 text-lg">
            →
          </span>
        </Link>
      </section>

      {/* Guitarists section */}
      <section id="guitaristes" className="mx-auto max-w-7xl px-6 py-24">
        <header className="mb-12">
          <p className="mb-2 text-xs uppercase tracking-widest text-orange-500">Les Guitaristes</p>
          <h2 className="text-3xl font-medium tracking-tight">Explore leurs univers</h2>
          <p className="mt-3 max-w-xl text-neutral-400">
            Sélectionne un guitariste pour découvrir ses gammes signature et les explorer
            sur le manche interactif.
          </p>
        </header>

        <GuitaristGrid guitarists={ALL_GUITARISTS} />
      </section>
    </div>
  );
}

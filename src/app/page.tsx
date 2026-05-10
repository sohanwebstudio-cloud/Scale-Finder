import { ALL_GUITARISTS } from '@/data/guitarists';
import { StudioHero } from '@/components/StudioHero';
import { GuitaristGrid } from '@/components/GuitaristGrid';

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <StudioHero />

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

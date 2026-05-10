import Link from 'next/link';
import { ALL_GUITARISTS } from '@/data/guitarists';
import { MusicRoomWrapper } from '@/components/MusicRoomWrapper';

export default function HomePage() {
  return (
    <div>
      {/* 3D Room Hero */}
      <section className="relative" style={{ height: '100vh' }}>
        <MusicRoomWrapper />
        <div className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
          <p className="text-xs uppercase tracking-widest text-neutral-600">Scroll</p>
          <div className="mx-auto mt-2 h-7 w-px bg-gradient-to-b from-neutral-600 to-transparent" />
        </div>
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

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ALL_GUITARISTS.map((guitarist) => (
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
      </section>
    </div>
  );
}

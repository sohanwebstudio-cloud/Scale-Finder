import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllSlugs, getGuitaristBySlug } from '@/data/guitarists';
import { getMode } from '@/lib/music/scales';
import { getModeColors } from '@/lib/music/colors';
import { ScaleDetectorSection } from '@/components/ScaleDetectorSection';

// Génération statique de toutes les pages au build
export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export default async function GuitaristPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guitarist = getGuitaristBySlug(slug);

  if (!guitarist) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-7xl px-6 py-12">
      <Link
        href="/"
        className="mb-8 inline-block text-sm text-neutral-500 transition-colors hover:text-orange-400"
      >
        ← Retour
      </Link>

      <header className="mb-10">
        <h1 className="mb-2 text-4xl font-medium tracking-tight">
          {guitarist.name}
        </h1>
        <p className="mb-4 text-sm text-neutral-500">{guitarist.era}</p>
        <p className="max-w-2xl text-base text-neutral-300">
          {guitarist.bio}
        </p>
      </header>

      {/* Signature Move */}
      <section className="mb-10 rounded-xl border-l-4 border-orange-500 bg-neutral-900 p-5">
        <p className="mb-1 text-xs uppercase tracking-wider text-neutral-500">
          Sa signature
        </p>
        <p className="text-base">{guitarist.signatureMove}</p>
      </section>

      {/* Gammes signatures */}
      <section className="mb-10">
        <h2 className="mb-4 text-xs uppercase tracking-wider text-neutral-500">
          Ses gammes signatures
        </h2>
        <div className="space-y-3">
          {guitarist.signatureScales.map((scale, idx) => {
            const mode = getMode(scale.modeKey);
            const colors = getModeColors(scale.modeKey, false);
            return (
              <div
                key={idx}
                className="rounded-xl border border-neutral-800 bg-neutral-950 p-5"
              >
                <div className="mb-2 flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-base font-medium">
                    {scale.rootName} {mode.name}
                  </h3>
                  <span
                    className="rounded px-2 py-0.5 font-mono text-xs font-medium"
                    style={{ background: colors.bg, color: colors.text }}
                  >
                    {scale.rootName}
                    {mode.chord}
                  </span>
                </div>
                <p className="mb-1 text-sm text-neutral-300">
                  {scale.context}
                </p>
                {scale.example && (
                  <p className="text-xs text-neutral-500">
                    Ex. : {scale.example}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Écoute recommandée */}
      {guitarist.recommendedListening &&
        guitarist.recommendedListening.length > 0 && (
          <section className="mb-10">
            <h2 className="mb-3 text-xs uppercase tracking-wider text-neutral-500">
              À écouter
            </h2>
            <div className="flex flex-wrap gap-2">
              {guitarist.recommendedListening.map((title) => (
                <span
                  key={title}
                  className="rounded-full border border-neutral-800 px-3 py-1 text-sm text-neutral-300"
                >
                  {title}
                </span>
              ))}
            </div>
          </section>
        )}

      {/* Explorateur interactif */}
      <section>
        <h2 className="mb-1 text-xs uppercase tracking-wider text-neutral-500">
          Explore sur le manche
        </h2>
        <p className="mb-6 text-sm text-neutral-500">
          Initialisé sur sa première gamme signature. Change tonique et mode
          librement.
        </p>
        <ScaleDetectorSection initialScale={guitarist.signatureScales[0]} />
      </section>
    </main>
  );
}

import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import Image from 'next/image';
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

  const portraitPath = path.join(process.cwd(), 'public', 'guitarists', `${slug}.svg`);
  const hasPortrait = fs.existsSync(portraitPath);

  return (
    <main className="space-y-2 sm:space-y-3">
      {/* En-tête */}
      <header className="border border-ink">
        <div className="flex items-center justify-between border-b border-ink px-4 py-2 sm:px-6">
          <Link
            href="/#guitaristes"
            className="text-xs text-neutral-500 transition-colors hover:text-riso-pink-deep"
          >
            ← Tous les guitaristes
          </Link>
          <span className="font-mono text-xs text-neutral-400">{guitarist.era}</span>
        </div>
        <div className={`flex items-start gap-8 px-6 py-10 sm:px-10 ${hasPortrait ? 'sm:flex-row' : ''}`}>
          <div className="min-w-0 flex-1">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              {guitarist.name}
            </h1>
            <p className="mt-2 text-xs uppercase tracking-[0.18em] text-neutral-500">
              {guitarist.genres.join(' · ')}
            </p>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-neutral-700">
              {guitarist.bio}
            </p>
          </div>
          {hasPortrait && (
            <div className="hidden shrink-0 sm:block">
              <Image
                src={`/guitarists/${slug}.svg`}
                alt={guitarist.name}
                width={160}
                height={220}
                className="border border-ink"
                unoptimized
              />
            </div>
          )}
        </div>
      </header>

      {/* Signature Move */}
      <section className="border border-ink bg-cream px-6 py-5 sm:px-10">
        <p className="mb-1 text-[11px] font-bold uppercase tracking-[0.18em] text-ink">
          Sa signature
        </p>
        <p className="text-base">{guitarist.signatureMove}</p>
      </section>

      {/* Gammes signatures */}
      <section className="border border-ink">
        <h2 className="border-b border-ink px-4 py-3 text-[11px] font-medium uppercase tracking-[0.18em] sm:px-6">
          Ses gammes signatures
        </h2>
        <div className="grid gap-px bg-neutral-200 sm:grid-cols-2">
          {guitarist.signatureScales.map((scale, idx) => {
            const mode = getMode(scale.modeKey);
            const colors = getModeColors(scale.modeKey, false);
            return (
              <div key={idx} className="bg-paper p-5 sm:p-6">
                <div className="mb-2 flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-base font-medium">
                    {scale.rootName} {mode.name}
                  </h3>
                  <span
                    className="border border-ink px-2 py-0.5 font-mono text-xs font-medium"
                    style={{ background: colors.bg, color: colors.text }}
                  >
                    {scale.rootName}
                    {mode.chord}
                  </span>
                </div>
                <p className="mb-1 text-sm text-neutral-700">{scale.context}</p>
                {scale.example && (
                  <p className="text-xs text-neutral-500">Ex. : {scale.example}</p>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Écoute recommandée */}
      {guitarist.recommendedListening &&
        guitarist.recommendedListening.length > 0 && (
          <section className="border border-ink px-6 py-5 sm:px-10">
            <h2 className="mb-3 text-[11px] uppercase tracking-[0.18em] text-neutral-500">
              À écouter
            </h2>
            <div className="flex flex-wrap gap-2">
              {guitarist.recommendedListening.map((title) => (
                <span
                  key={title}
                  className="border border-neutral-300 px-3 py-1 text-sm text-neutral-700"
                >
                  {title}
                </span>
              ))}
            </div>
          </section>
        )}

      {/* Explorateur interactif */}
      <section className="space-y-2 sm:space-y-3">
        <div className="border border-ink px-6 py-5 sm:px-10">
          <h2 className="text-[11px] uppercase tracking-[0.18em] text-neutral-500">
            Explore sur le manche
          </h2>
          <p className="mt-1 text-sm text-neutral-600">
            Initialisé sur sa première gamme signature. Change tonique et mode librement.
          </p>
        </div>
        <ScaleDetectorSection initialScale={guitarist.signatureScales[0]} />
      </section>
    </main>
  );
}

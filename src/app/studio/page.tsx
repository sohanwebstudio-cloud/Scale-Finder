import { ScaleDetectorSection } from '@/components/ScaleDetectorSection';
import { MODES } from '@/lib/music/scales';
import type { SignatureScale } from '@/types';

export const metadata = {
  title: 'Scale Studio — Scale Finder',
};

interface Props {
  searchParams: Promise<{ root?: string; scale?: string }>;
}

export default async function StudioPage({ searchParams }: Props) {
  const { root, scale } = await searchParams;

  let initialScale: SignatureScale | undefined;
  if (root && scale) {
    const mode = MODES.find((m) => m.name === scale);
    if (mode) {
      initialScale = { rootName: root, modeKey: mode.key, context: 'Depuis ton profil' };
    }
  }

  return (
    <main className="space-y-2 sm:space-y-3">
      <header className="border border-ink px-6 py-12 text-center sm:py-16">
        <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-ink">
          Studio
        </p>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Scale Studio</h1>
        <p className="mx-auto mt-4 max-w-xl text-base text-neutral-600">
          Lance un morceau ou joue quelques notes : Scale Finder détecte la tonalité
          et te propose la gamme parfaite pour jouer dessus.
        </p>
      </header>

      <ScaleDetectorSection initialScale={initialScale} />
    </main>
  );
}

import { ScaleDetectorSection } from '@/components/ScaleDetectorSection';

export const metadata = {
  title: 'Scale Studio — Scale Finder',
};

export default function StudioPage() {
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

      <ScaleDetectorSection />
    </main>
  );
}

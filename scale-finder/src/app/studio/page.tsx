import Link from 'next/link';
import { ScaleDetectorSection } from '@/components/ScaleDetectorSection';

export const metadata = {
  title: 'Scale Studio — Scale Finder',
};

export default function StudioPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-12">
      <Link
        href="/"
        className="mb-8 inline-block text-sm text-neutral-500 transition-colors hover:text-orange-400"
      >
        ← Retour
      </Link>

      <header className="mb-10">
        <p className="mb-2 text-xs uppercase tracking-widest text-orange-500">Studio</p>
        <h1 className="mb-3 text-4xl font-medium tracking-tight">Scale Studio</h1>
        <p className="text-base text-neutral-400">
          Détecte les gammes à l'oreille ou explore-les directement sur le manche.
        </p>
      </header>

      <ScaleDetectorSection />
    </main>
  );
}

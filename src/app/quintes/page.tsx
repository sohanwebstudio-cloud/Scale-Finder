import type { Metadata } from 'next';
import { CircleOfFifths } from '@/components/CircleOfFifths';

export const metadata: Metadata = {
  title: 'Cercle des Quintes — Scale Finder',
  description:
    'Cercle des quintes interactif : navigue entre tonalités, armures et relatifs mineurs.',
};

export default function QuintesPage() {
  return (
    <main className="space-y-2 sm:space-y-3">
      <header className="border border-ink px-6 py-10 sm:px-10">
        <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-ink">
          Harmonie
        </p>
        <h1 className="text-4xl font-bold tracking-tight">Cercle des Quintes</h1>
        <p className="mt-2 max-w-xl text-sm text-neutral-500">
          L'outil de navigation entre tonalités. Clique sur une tonalité pour voir son armure,
          son relatif mineur et ses tonalités voisines.
        </p>
      </header>

      <CircleOfFifths />
    </main>
  );
}

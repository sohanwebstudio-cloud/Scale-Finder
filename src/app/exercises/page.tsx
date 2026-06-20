import { Metadata } from 'next'
import { ExercisesClient } from '@/components/ExercisesClient'

export const metadata: Metadata = {
  title: 'Exercices Main Gauche — Scale Finder',
  description:
    "Exercices de technique guitare pour développer l'indépendance et la force des doigts de la main gauche.",
}

export default function ExercisesPage() {
  return (
    <div className="space-y-2 pb-28 sm:space-y-3">
      <header className="border border-ink px-6 py-10 sm:py-14">
        <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-riso-red">
          Technique
        </p>
        <h1 className="text-4xl font-bold tracking-tight">Exercices Guitare</h1>
        <p className="mt-4 max-w-xl text-base text-neutral-600">
          Technique main gauche, accords jazz et grilles blues. Toujours au métronome,
          toujours lentement d&apos;abord.
        </p>
      </header>
      <ExercisesClient />
    </div>
  )
}

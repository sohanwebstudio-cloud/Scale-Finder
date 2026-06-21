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
      <header className="border border-ink px-4 py-6 sm:px-6 sm:py-14">
        <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-ink">
          Technique
        </p>
        <h1 className="text-2xl font-bold tracking-tight sm:text-4xl">Exercices Guitare</h1>
        <p className="mt-3 max-w-xl text-sm text-neutral-600 sm:mt-4 sm:text-base">
          Technique main gauche, accords jazz et grilles blues. Toujours au métronome,
          toujours lentement d&apos;abord.
        </p>
      </header>
      <ExercisesClient />
    </div>
  )
}

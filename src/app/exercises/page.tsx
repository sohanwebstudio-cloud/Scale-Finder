import { Metadata } from 'next'
import { ExercisesClient } from '@/components/ExercisesClient'

export const metadata: Metadata = {
  title: 'Exercices Main Gauche — Scale Finder',
  description:
    "Exercices de technique guitare pour développer l'indépendance et la force des doigts de la main gauche.",
}

export default function ExercisesPage() {
  // ExercisesClient est conçu sur fond sombre — îlot dark dans le cadre clair
  return (
    <div className="border border-ink bg-neutral-950 text-neutral-100">
      <ExercisesClient />
    </div>
  )
}

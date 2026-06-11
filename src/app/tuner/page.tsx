import type { Metadata } from 'next';
import { RetroTuner } from '@/components/RetroTuner';

export const metadata: Metadata = {
  title: 'Accordeur — Scale Finder',
};

export default function TunerPage() {
  // RetroTuner gère son propre fond sombre — îlot dark dans le cadre clair
  return (
    <div className="overflow-hidden border border-ink">
      <RetroTuner />
    </div>
  );
}

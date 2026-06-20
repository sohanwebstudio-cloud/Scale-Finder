import type { Metadata } from 'next';
import { RetroTuner } from '@/components/RetroTuner';

export const metadata: Metadata = {
  title: 'Accordeur — Scale Finder',
};

export default function TunerPage() {
  return <RetroTuner />;
}

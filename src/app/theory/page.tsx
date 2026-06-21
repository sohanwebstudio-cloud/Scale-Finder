import type { Metadata } from 'next';
import { TheoryClient } from './TheoryClient';

export const metadata: Metadata = {
  title: 'Théorie des Gammes — Scale Finder',
  description:
    'Guide complet des gammes et modes pour guitare : modes classiques, blues, pentatoniques, jazz, gammes symétriques et exotiques.',
};

export default function TheoryPage() {
  return <TheoryClient />;
}

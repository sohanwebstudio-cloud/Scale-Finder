'use client';

import { useState } from 'react';
import { ScaleExplorer } from './ScaleExplorer';
import { AudioDetector } from './AudioDetector';
import type { ModeKey, SignatureScale } from '@/types';

interface Props {
  initialScale?: SignatureScale;
}

export function ScaleDetectorSection({ initialScale }: Props) {
  // explorerKey force un re-mount de ScaleExplorer quand une gamme est sélectionnée
  const [explorerKey, setExplorerKey] = useState(0);
  const [activeScale, setActiveScale] = useState<SignatureScale | undefined>(initialScale);

  function handleScaleSelected(rootName: string, modeKey: ModeKey) {
    setActiveScale({ rootName, modeKey, context: 'Détectée automatiquement' });
    setExplorerKey((k) => k + 1);
  }

  return (
    <div className="space-y-2 sm:space-y-3">
      <AudioDetector onScaleSelected={handleScaleSelected} />
      <ScaleExplorer key={explorerKey} initialScale={activeScale} />
    </div>
  );
}

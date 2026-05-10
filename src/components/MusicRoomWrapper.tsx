'use client';

import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';

const MusicRoomScene = dynamic(
  () => import('./MusicRoomScene').then((m) => m.MusicRoomScene),
  {
    ssr: false,
    loading: () => (
      <div
        style={{ height: '100vh', background: '#080808' }}
        className="flex items-center justify-center"
      >
        <p className="text-xs uppercase tracking-widest text-orange-500/40">
          Chargement...
        </p>
      </div>
    ),
  },
);

export function MusicRoomWrapper() {
  const router = useRouter();

  function scrollToGuitaristes() {
    document.getElementById('guitaristes')?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div style={{ height: '100vh' }}>
      <MusicRoomScene
        onGuitaristClick={scrollToGuitaristes}
        onStudioClick={() => router.push('/studio')}
      />
    </div>
  );
}

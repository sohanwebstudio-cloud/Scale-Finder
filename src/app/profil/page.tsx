'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { authClient } from '@/lib/auth-client';

type SavedScale = { id: string; root: string; scaleName: string; createdAt: string };

export default function ProfilPage() {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();
  const [scales, setScales] = useState<SavedScale[]>([]);
  const [loadingScales, setLoadingScales] = useState(true);

  useEffect(() => {
    if (!isPending && !session) router.push('/sign-in');
  }, [session, isPending, router]);

  useEffect(() => {
    if (!session) return;
    fetch('/api/scales')
      .then((r) => r.json())
      .then((data) => { setScales(Array.isArray(data) ? data : []); setLoadingScales(false); })
      .catch(() => setLoadingScales(false));
  }, [session]);

  async function handleSignOut() {
    await authClient.signOut();
    router.push('/');
    router.refresh();
  }

  async function removeScale(root: string, scaleName: string) {
    await fetch('/api/scales', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ root, scaleName }),
    });
    setScales((prev) => prev.filter((s) => !(s.root === root && s.scaleName === scaleName)));
  }

  if (isPending) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <span className="text-[12px] uppercase tracking-[0.15em] text-neutral-400">Chargement…</span>
      </div>
    );
  }

  if (!session) return null;

  const initial = session.user.name?.charAt(0).toUpperCase() ?? '?';

  return (
    <div className="space-y-2 sm:space-y-3">
      {/* Header profil */}
      <div className="border border-ink bg-paper px-6 py-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center border border-ink bg-ink text-lg font-bold text-paper">
              {initial}
            </div>
            <div>
              <p className="font-bold">{session.user.name}</p>
              <p className="text-[12px] text-neutral-500">{session.user.email}</p>
            </div>
          </div>
          <button
            onClick={handleSignOut}
            className="border border-ink px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] transition-colors hover:bg-ink hover:text-paper"
          >
            Déconnexion
          </button>
        </div>
      </div>

      {/* Gammes sauvegardées */}
      <div className="border border-ink bg-paper">
        <div className="border-b border-ink px-6 py-3">
          <p className="text-[11px] font-bold uppercase tracking-[0.18em]">
            Gammes sauvegardées
            <span className="ml-2 text-neutral-400">({scales.length})</span>
          </p>
        </div>

        {loadingScales ? (
          <p className="px-6 py-8 text-[12px] text-neutral-400">Chargement…</p>
        ) : scales.length === 0 ? (
          <div className="px-6 py-10 text-center">
            <p className="text-sm text-neutral-500">Aucune gamme sauvegardée pour l&apos;instant.</p>
            <Link
              href="/studio"
              className="mt-3 inline-block border border-ink px-4 py-2 text-[11px] font-bold uppercase tracking-[0.12em] transition-colors hover:bg-ink hover:text-paper"
            >
              Ouvrir le Studio →
            </Link>
          </div>
        ) : (
          <div className="grid gap-px bg-neutral-200">
            {scales.map((scale) => (
              <div key={scale.id} className="flex items-center justify-between bg-paper px-6 py-3">
                <div>
                  <span className="text-sm font-semibold">{scale.root}</span>
                  <span className="mx-2 text-neutral-300">·</span>
                  <span className="text-sm">{scale.scaleName}</span>
                </div>
                <button
                  onClick={() => removeScale(scale.root, scale.scaleName)}
                  className="text-[11px] text-neutral-400 transition-colors hover:text-riso-red"
                  title="Supprimer"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

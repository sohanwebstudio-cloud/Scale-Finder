'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
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

  const { name, email, image } = session.user;
  const initial = name?.charAt(0).toUpperCase() ?? '?';
  const memberSince = new Date(session.session.createdAt).toLocaleDateString('fr-FR', {
    month: 'long',
    year: 'numeric',
  });

  return (
    <div className="space-y-2 sm:space-y-3">

      {/* Header profil */}
      <div className="border border-ink bg-paper">
        <div className="border-b border-ink px-4 py-2">
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-neutral-400">Mon profil</p>
        </div>
        <div className="flex flex-col gap-4 px-6 py-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            {image ? (
              <Image
                src={image}
                alt={name ?? 'Avatar'}
                width={52}
                height={52}
                className="border border-ink object-cover"
                style={{ borderRadius: 0 }}
              />
            ) : (
              <div className="flex h-[52px] w-[52px] items-center justify-center border border-ink bg-ink text-xl font-bold text-paper">
                {initial}
              </div>
            )}
            <div>
              <p className="font-bold">{name}</p>
              <p className="text-[12px] text-neutral-500">{email}</p>
              <p className="mt-0.5 text-[11px] text-neutral-400">Membre depuis {memberSince}</p>
            </div>
          </div>
          <button
            onClick={handleSignOut}
            className="self-start border border-ink px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] transition-colors hover:bg-ink hover:text-paper sm:self-auto"
          >
            Déconnexion
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-px bg-neutral-200 sm:grid-cols-3">
        {[
          { label: 'Gammes sauvegardées', value: scales.length },
          { label: 'Toniques différentes', value: new Set(scales.map((s) => s.root)).size },
          { label: 'Modes différents', value: new Set(scales.map((s) => s.scaleName)).size },
        ].map((stat) => (
          <div key={stat.label} className="bg-paper px-5 py-4">
            <p className="text-2xl font-bold">{loadingScales ? '—' : stat.value}</p>
            <p className="mt-0.5 text-[11px] uppercase tracking-[0.12em] text-neutral-400">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Gammes sauvegardées */}
      <div className="border border-ink bg-paper">
        <div className="flex items-center justify-between border-b border-ink px-6 py-3">
          <p className="text-[11px] font-bold uppercase tracking-[0.18em]">
            Gammes sauvegardées
            <span className="ml-2 font-normal text-neutral-400">({scales.length})</span>
          </p>
          <Link
            href="/studio"
            className="text-[11px] font-semibold uppercase tracking-[0.1em] text-riso-pink-deep hover:underline"
          >
            + Ajouter
          </Link>
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
                <Link
                  href={`/studio?root=${encodeURIComponent(scale.root)}&scale=${encodeURIComponent(scale.scaleName)}`}
                  className="flex flex-1 items-center gap-3 transition-opacity hover:opacity-70"
                >
                  <span className="min-w-[32px] text-[11px] font-bold uppercase tracking-[0.1em] text-riso-pink-deep">
                    {scale.root}
                  </span>
                  <span className="text-sm">{scale.scaleName}</span>
                  <span className="text-[11px] text-neutral-300">→</span>
                </Link>
                <div className="flex items-center gap-4">
                  <span className="text-[11px] text-neutral-400">
                    {new Date(scale.createdAt).toLocaleDateString('fr-FR')}
                  </span>
                  <button
                    onClick={() => removeScale(scale.root, scale.scaleName)}
                    className="text-[11px] text-neutral-300 transition-colors hover:text-riso-red"
                    title="Supprimer"
                  >
                    ✕
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
}

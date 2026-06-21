'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { authClient } from '@/lib/auth-client';

export function NavAuth({ mobile = false }: { mobile?: boolean }) {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();

  const btnClass = `border border-ink font-bold uppercase tracking-[0.15em] transition-colors hover:bg-ink hover:text-paper ${
    mobile ? 'px-2.5 py-1 text-[10px]' : 'px-3 py-1 text-[11px]'
  }`;

  if (isPending) return <span className="h-7 w-7" />;

  if (session) {
    return (
      <div className="flex items-center gap-3">
        <Link href="/profil" className={btnClass}>
          {session.user.name?.split(' ')[0] ?? 'Profil'}
        </Link>
        <button
          onClick={async () => {
            await authClient.signOut();
            router.refresh();
          }}
          className="text-[11px] text-neutral-400 transition-colors hover:text-ink"
        >
          ×
        </button>
      </div>
    );
  }

  return (
    <Link href="/sign-in" className={btnClass}>
      Connexion
    </Link>
  );
}

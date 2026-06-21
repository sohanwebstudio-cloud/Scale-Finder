'use client';

import { SignInButton, UserButton, useAuth } from '@clerk/nextjs';

export function NavAuth({ mobile = false }: { mobile?: boolean }) {
  const { isSignedIn, isLoaded } = useAuth();

  if (!isLoaded) return <span className="h-7 w-7" />;

  if (isSignedIn) return <UserButton />;

  return (
    <SignInButton mode="modal">
      <button
        className={`border border-ink font-bold uppercase tracking-[0.15em] transition-colors hover:bg-ink hover:text-paper ${
          mobile ? 'px-2.5 py-1 text-[10px]' : 'px-3 py-1 text-[11px]'
        }`}
      >
        Connexion
      </button>
    </SignInButton>
  );
}

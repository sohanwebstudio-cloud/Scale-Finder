'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { authClient } from '@/lib/auth-client';

export default function SignInPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError('');
    const { error } = await authClient.signIn.email({ email, password });
    if (error) {
      setError(error.message ?? 'Email ou mot de passe incorrect');
      setLoading(false);
    } else {
      router.push('/');
      router.refresh();
    }
  }

  async function handleGoogle() {
    setError('');
    const { error } = await authClient.signIn.social({ provider: 'google', callbackURL: '/' });
    if (error) setError(error.message ?? 'Erreur Google OAuth');
  }

  return (
    <div className="flex min-h-[60vh] items-center justify-center py-12">
      <div className="w-full max-w-sm border border-ink bg-paper">
        <div className="border-b border-ink px-6 py-5">
          <p className="mb-1 text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-400">
            Scale Finder
          </p>
          <h1 className="text-[15px] font-bold uppercase tracking-[0.15em]">Connexion</h1>
        </div>

        <div className="space-y-4 px-6 py-5">
          <button
            type="button"
            onClick={handleGoogle}
            className="flex w-full items-center justify-center gap-2.5 border border-ink bg-paper py-2.5 text-[12px] font-semibold uppercase tracking-[0.1em] transition-colors hover:bg-ink hover:text-paper"
          >
            <GoogleIcon />
            Continuer avec Google
          </button>

          <div className="flex items-center gap-3">
            <div className="h-px flex-1 bg-neutral-200" />
            <span className="text-[11px] text-neutral-400">ou</span>
            <div className="h-px flex-1 bg-neutral-200" />
          </div>

          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <label className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.1em]">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
                placeholder="toi@exemple.com"
                className="w-full border border-ink bg-cream px-3 py-2.5 text-base outline-none focus:ring-1 focus:ring-ink"
              />
            </div>

            <div>
              <label className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.1em]">
                Mot de passe
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="current-password"
                className="w-full border border-ink bg-cream px-3 py-2.5 text-base outline-none focus:ring-1 focus:ring-ink"
              />
            </div>

            {error && <p className="text-[12px] text-riso-red">{error}</p>}

            <button
              type="submit"
              disabled={loading}
              className="w-full border border-ink bg-ink py-2.5 text-[11px] font-bold uppercase tracking-[0.12em] text-paper transition-colors hover:border-riso-pink-deep hover:bg-riso-pink-deep disabled:opacity-50"
            >
              {loading ? 'Connexion…' : 'Se connecter →'}
            </button>
          </form>
        </div>

        <div className="border-t border-ink px-6 py-3">
          <p className="text-[12px] text-neutral-500">
            Pas encore de compte ?{' '}
            <Link href="/sign-up" className="font-semibold text-riso-pink-deep hover:underline">
              Créer un compte
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );
}

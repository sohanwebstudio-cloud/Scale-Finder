import type { Metadata } from 'next';
import Link from 'next/link';
import { NavAuth } from '@/components/NavAuth';
import './globals.css';

export const metadata: Metadata = {
  title: 'Scale Finder — Trouve la tonalité, joue la bonne gamme',
  description:
    "Détecte la tonalité d'un morceau à l'oreille, découvre la gamme parfaite pour jouer dessus et explore-la sur le manche.",
};

const NAV = [
  { href: '/studio',        label: 'Studio',      mobile: true  },
  { href: '/#guitaristes',  label: 'Guitaristes',  mobile: false },
  { href: '/tuner',         label: 'Accordeur',    mobile: true  },
  { href: '/exercises',     label: 'Exercices',    mobile: true  },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="bg-paper font-sans text-ink antialiased">
        <div className="p-2 sm:p-3">
          <header className="border border-ink bg-paper">
            <div className="flex items-center justify-between px-4 py-3 sm:px-6">
              <Link href="/" className="text-sm font-bold uppercase tracking-[0.18em]">
                Scale Finder<span className="text-riso-pink-deep">●</span>
              </Link>
              <nav className="hidden items-center gap-5 text-sm sm:flex">
                {NAV.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="transition-colors hover:text-riso-pink-deep"
                  >
                    {item.label}
                  </Link>
                ))}
                <NavAuth />
              </nav>
            </div>
            <nav className="flex items-center gap-3 border-t border-ink px-4 pb-3 pt-2.5 text-sm sm:hidden">
              {NAV.filter((i) => i.mobile).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="whitespace-nowrap transition-colors hover:text-riso-pink-deep"
                >
                  {item.label}
                </Link>
              ))}
              <span className="ml-auto">
                <NavAuth mobile />
              </span>
            </nav>
          </header>

          <main className="mt-2 sm:mt-3">{children}</main>

          <footer className="mt-2 border border-ink sm:mt-3">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-ink px-4 py-3 text-xs text-neutral-500 sm:px-6">
              <p>Scale Finder — outil d&apos;apprentissage guitare</p>
              <p className="font-mono">tonalité · gammes · manche</p>
            </div>
            <div className="flex flex-wrap gap-4 px-4 py-2 text-[11px] text-neutral-400 sm:px-6">
              <Link href="/legal" className="transition-colors hover:text-ink">
                Mentions légales
              </Link>
              <Link href="/privacy" className="transition-colors hover:text-ink">
                Politique de confidentialité
              </Link>
              <span>© {new Date().getFullYear()} Sohan Jacquin</span>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}

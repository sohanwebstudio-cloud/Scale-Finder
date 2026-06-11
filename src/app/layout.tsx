import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';

export const metadata: Metadata = {
  title: 'Scale Finder — Trouve la tonalité, joue la bonne gamme',
  description:
    "Détecte la tonalité d'un morceau à l'oreille, découvre la gamme parfaite pour jouer dessus et explore-la sur le manche.",
};

const NAV = [
  { href: '/studio', label: 'Studio' },
  { href: '/#guitaristes', label: 'Guitaristes' },
  { href: '/tuner', label: 'Accordeur' },
  { href: '/exercises', label: 'Exercices' },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="bg-paper font-sans text-ink antialiased">
        <div className="p-2 sm:p-3">
          <header className="flex items-center justify-between border border-ink bg-paper px-4 py-3 sm:px-6">
            <Link href="/" className="text-sm font-bold uppercase tracking-[0.18em]">
              Scale Finder<span className="text-riso-pink-deep">●</span>
            </Link>
            <nav className="flex gap-4 text-sm sm:gap-6">
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="transition-colors hover:text-riso-pink-deep"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </header>

          <main className="mt-2 sm:mt-3">{children}</main>

          <footer className="mt-2 flex flex-wrap items-center justify-between gap-2 border border-ink px-4 py-3 text-xs text-neutral-500 sm:mt-3 sm:px-6">
            <p>Scale Finder — outil d&apos;apprentissage guitare</p>
            <p className="font-mono">tonalité · gammes · manche</p>
          </footer>
        </div>
      </body>
    </html>
  );
}

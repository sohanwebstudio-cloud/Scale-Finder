import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Scale Finder — Découvre les gammes de tes guitaristes préférés',
  description:
    "Sélectionne un guitariste, découvre ses gammes signatures et explore-les directement sur le manche.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="bg-neutral-950 text-neutral-100 antialiased">
        {children}
      </body>
    </html>
  );
}

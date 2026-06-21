import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mentions légales — Scale Finder',
  description: 'Mentions légales, informations éditeur et hébergeur de Scale Finder.',
};

export default function LegalPage() {
  return (
    <main className="space-y-2 sm:space-y-3">
      <header className="border border-ink px-6 py-10 sm:px-10">
        <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-ink">
          Légal
        </p>
        <h1 className="text-4xl font-bold tracking-tight">Mentions légales</h1>
        <p className="mt-2 text-sm text-neutral-500">
          Conformément à la loi n° 2004-575 du 21 juin 2004 pour la Confiance dans l'Économie Numérique (LCEN).
        </p>
      </header>

      {/* Éditeur */}
      <section className="border border-ink">
        <h2 className="border-b border-ink px-6 py-3 text-[11px] font-bold uppercase tracking-[0.18em]">
          Éditeur du site
        </h2>
        <div className="px-6 py-6 sm:px-10">
          <dl className="space-y-3 text-sm">
            <div className="grid grid-cols-[160px_1fr] gap-2">
              <dt className="text-neutral-500">Nom</dt>
              <dd>Sohan Jacquin</dd>
            </div>
            <div className="grid grid-cols-[160px_1fr] gap-2">
              <dt className="text-neutral-500">Statut</dt>
              <dd>Auto-entrepreneur / Freelance</dd>
            </div>
            <div className="grid grid-cols-[160px_1fr] gap-2">
              <dt className="text-neutral-500">SIRET</dt>
              <dd className="text-neutral-400">[À compléter avant mise en ligne commerciale]</dd>
            </div>
            <div className="grid grid-cols-[160px_1fr] gap-2">
              <dt className="text-neutral-500">Adresse</dt>
              <dd className="text-neutral-400">[À compléter]</dd>
            </div>
            <div className="grid grid-cols-[160px_1fr] gap-2">
              <dt className="text-neutral-500">Contact</dt>
              <dd>
                <a
                  href="mailto:sohanwebstudio@gmail.com"
                  className="underline underline-offset-2 hover:text-riso-pink-deep"
                >
                  sohanwebstudio@gmail.com
                </a>
              </dd>
            </div>
            <div className="grid grid-cols-[160px_1fr] gap-2">
              <dt className="text-neutral-500">Directeur de publication</dt>
              <dd>Sohan Jacquin</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* Hébergeur */}
      <section className="border border-ink">
        <h2 className="border-b border-ink px-6 py-3 text-[11px] font-bold uppercase tracking-[0.18em]">
          Hébergeur
        </h2>
        <div className="px-6 py-6 sm:px-10">
          <dl className="space-y-3 text-sm">
            <div className="grid grid-cols-[160px_1fr] gap-2">
              <dt className="text-neutral-500">Société</dt>
              <dd>Vercel Inc.</dd>
            </div>
            <div className="grid grid-cols-[160px_1fr] gap-2">
              <dt className="text-neutral-500">Adresse</dt>
              <dd>340 Pine Street Suite 701, San Francisco, CA 94104, États-Unis</dd>
            </div>
            <div className="grid grid-cols-[160px_1fr] gap-2">
              <dt className="text-neutral-500">Site web</dt>
              <dd>vercel.com</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* Propriété intellectuelle */}
      <section className="border border-ink">
        <h2 className="border-b border-ink px-6 py-3 text-[11px] font-bold uppercase tracking-[0.18em]">
          Propriété intellectuelle
        </h2>
        <div className="space-y-4 px-6 py-6 text-sm leading-relaxed text-neutral-700 sm:px-10">
          <p>
            L'ensemble du contenu de ce site (code source, design, textes, algorithmes musicaux) est la propriété exclusive de Sohan Jacquin, sauf mention contraire. Toute reproduction, représentation, modification ou exploitation, totale ou partielle, est interdite sans autorisation préalable écrite.
          </p>
          <p>
            Les noms des guitaristes cités sont des personnalités publiques. Les informations musicales (gammes, modes, biographies) sont fournies à titre éducatif et documentaire. Les portraits SVG sont générés à partir d'images sous licence libre issues de Wikimédia Commons — aucune revendication de droit sur ces portraits n'est formulée.
          </p>
        </div>
      </section>

      {/* Limitation de responsabilité */}
      <section className="border border-ink">
        <h2 className="border-b border-ink px-6 py-3 text-[11px] font-bold uppercase tracking-[0.18em]">
          Limitation de responsabilité
        </h2>
        <div className="space-y-4 px-6 py-6 text-sm leading-relaxed text-neutral-700 sm:px-10">
          <p>
            Scale Finder est un outil d'aide à l'apprentissage musical. Les informations théoriques (gammes, modes, tonalités) sont données à titre indicatif. L'éditeur ne garantit pas l'exactitude absolue des analyses algorithmiques de tonalité, qui dépendent de la qualité de l'entrée audio et de la complexité musicale des morceaux analysés.
          </p>
          <p>
            L'éditeur ne saurait être tenu responsable de dommages directs ou indirects résultant de l'utilisation du site.
          </p>
        </div>
      </section>

      {/* Droit applicable */}
      <section className="border border-ink bg-cream px-6 py-6 sm:px-10">
        <h2 className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em]">
          Droit applicable et juridiction
        </h2>
        <p className="text-sm leading-relaxed text-neutral-700">
          Les présentes mentions légales sont soumises au droit français. En cas de litige, les tribunaux français seront seuls compétents. Dernière mise à jour : juin 2025.
        </p>
      </section>
    </main>
  );
}

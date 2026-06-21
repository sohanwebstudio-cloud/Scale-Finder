import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Confidentialité — Scale Finder',
  description: 'Politique de confidentialité et protection des données personnelles (RGPD) de Scale Finder.',
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="border border-ink">
      <h2 className="border-b border-ink px-6 py-3 text-[11px] font-bold uppercase tracking-[0.18em]">
        {title}
      </h2>
      <div className="space-y-4 px-6 py-6 text-sm leading-relaxed text-neutral-700 sm:px-10">
        {children}
      </div>
    </section>
  );
}

function Right({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="border-l-2 border-ink pl-4">
      <p className="mb-1 text-[11px] font-bold uppercase tracking-[0.15em] text-ink">{title}</p>
      <p>{children}</p>
    </div>
  );
}

export default function PrivacyPage() {
  return (
    <main className="space-y-2 sm:space-y-3">
      <header className="border border-ink px-6 py-10 sm:px-10">
        <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-ink">
          RGPD · Vie privée
        </p>
        <h1 className="text-4xl font-bold tracking-tight">Politique de confidentialité</h1>
        <p className="mt-2 max-w-2xl text-sm text-neutral-500">
          Conformément au Règlement Général sur la Protection des Données (RGPD — UE 2016/679) et à la loi Informatique et Libertés modifiée. Dernière mise à jour : juin 2025.
        </p>
      </header>

      {/* Responsable */}
      <Section title="Responsable du traitement">
        <p>
          Le responsable du traitement des données personnelles collectées sur Scale Finder est <strong>Sohan Jacquin</strong>, joignable à l'adresse <a href="mailto:sohanwebstudio@gmail.com" className="underline underline-offset-2 hover:text-riso-pink-deep">sohanwebstudio@gmail.com</a>.
        </p>
      </Section>

      {/* Données collectées */}
      <Section title="Données collectées et finalités">
        <p className="font-medium text-ink">État actuel du site (outil gratuit, sans compte)</p>
        <p>
          Scale Finder ne collecte <strong>aucune donnée personnelle identifiante</strong> directement. Le site ne dispose pas de formulaire d'inscription, de compte utilisateur ni de système de paiement.
        </p>
        <p>
          L'utilisation du microphone pour la détection de tonalité est traitée <strong>exclusivement en local dans votre navigateur</strong> — aucun flux audio n'est transmis à un serveur.
        </p>

        <div className="mt-2 border border-neutral-200 bg-cream p-4">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.15em] text-ink">
            Données futures (si comptes utilisateurs et/ou paiement)
          </p>
          <div className="space-y-2">
            <div className="grid grid-cols-[1fr_1fr_1fr] gap-3 text-[11px] uppercase tracking-[0.1em] text-neutral-500">
              <span>Donnée</span>
              <span>Finalité</span>
              <span>Base légale</span>
            </div>
            <div className="grid grid-cols-[1fr_1fr_1fr] gap-3 border-t border-neutral-200 pt-2">
              <span>Email, mot de passe (hashé)</span>
              <span>Authentification</span>
              <span>Contrat (art. 6.1.b RGPD)</span>
            </div>
            <div className="grid grid-cols-[1fr_1fr_1fr] gap-3 border-t border-neutral-200 pt-2">
              <span>Nom, prénom</span>
              <span>Identification, facturation</span>
              <span>Contrat + obligation légale</span>
            </div>
            <div className="grid grid-cols-[1fr_1fr_1fr] gap-3 border-t border-neutral-200 pt-2">
              <span>Données de paiement</span>
              <span>Traitement des abonnements</span>
              <span>Contrat — via prestataire certifié PCI-DSS (ex. Stripe)</span>
            </div>
            <div className="grid grid-cols-[1fr_1fr_1fr] gap-3 border-t border-neutral-200 pt-2">
              <span>Progression pédagogique</span>
              <span>Personnalisation, statistiques</span>
              <span>Intérêt légitime / consentement</span>
            </div>
            <div className="grid grid-cols-[1fr_1fr_1fr] gap-3 border-t border-neutral-200 pt-2">
              <span>Logs de connexion, IP</span>
              <span>Sécurité, prévention fraude</span>
              <span>Intérêt légitime (art. 6.1.f)</span>
            </div>
          </div>
        </div>
      </Section>

      {/* Conservation */}
      <Section title="Durée de conservation">
        <p>
          Les données personnelles ne sont conservées que le temps nécessaire aux finalités pour lesquelles elles ont été collectées :
        </p>
        <ul className="space-y-1 pl-4">
          <li className="list-disc">Données de compte : durée de l'abonnement + 3 ans (délai de prescription commerciale)</li>
          <li className="list-disc">Données de facturation : 10 ans (obligation comptable légale)</li>
          <li className="list-disc">Logs de connexion : 12 mois maximum</li>
          <li className="list-disc">Données de progression pédagogique : durée du compte, puis suppression sous 30 jours</li>
        </ul>
      </Section>

      {/* Destinataires */}
      <Section title="Destinataires des données">
        <p>
          Vos données ne sont ni vendues, ni louées, ni cédées à des tiers à des fins commerciales.
        </p>
        <p>
          Elles peuvent être transmises à des sous-traitants techniques strictement nécessaires au fonctionnement du service (hébergement Vercel, processeur de paiement certifié PCI-DSS), qui agissent en qualité de sous-traitants au sens du RGPD et sont liés par des engagements contractuels de confidentialité.
        </p>
        <p>
          Les données peuvent également être communiquées aux autorités compétentes sur demande légale.
        </p>
      </Section>

      {/* Transferts */}
      <Section title="Transferts hors Union Européenne">
        <p>
          L'hébergement est assuré par Vercel Inc. (États-Unis). Ce transfert est encadré par les Clauses Contractuelles Types (CCT) de la Commission Européenne, conformément à l'article 46 du RGPD.
        </p>
      </Section>

      {/* Cookies */}
      <Section title="Cookies et traceurs">
        <p>
          Scale Finder utilise uniquement des cookies <strong>strictement nécessaires</strong> au fonctionnement technique du site (gestion de session). Aucun cookie de tracking publicitaire ni de statistiques tiers n'est utilisé sans votre consentement.
        </p>
        <p>
          Si des outils d'analyse d'audience sont ajoutés à l'avenir, un bandeau de consentement conforme aux recommandations de la CNIL sera mis en place avant leur activation.
        </p>
      </Section>

      {/* Droits */}
      <section className="border border-ink">
        <h2 className="border-b border-ink px-6 py-3 text-[11px] font-bold uppercase tracking-[0.18em]">
          Vos droits
        </h2>
        <div className="px-6 py-6 sm:px-10">
          <p className="mb-6 text-sm text-neutral-700">
            Conformément au RGPD (articles 15 à 22), vous disposez des droits suivants sur vos données personnelles :
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <Right title="Droit d'accès">
              Obtenir une copie de vos données personnelles détenues par Scale Finder.
            </Right>
            <Right title="Droit de rectification">
              Corriger des données inexactes ou incomplètes vous concernant.
            </Right>
            <Right title="Droit à l'effacement">
              Demander la suppression de vos données (« droit à l'oubli »), sous réserve des obligations légales de conservation.
            </Right>
            <Right title="Droit à la portabilité">
              Recevoir vos données dans un format structuré et lisible par machine pour les transmettre à un autre service.
            </Right>
            <Right title="Droit d'opposition">
              Vous opposer au traitement de vos données fondé sur l'intérêt légitime, notamment à des fins de prospection.
            </Right>
            <Right title="Droit à la limitation">
              Demander le gel temporaire du traitement de vos données dans certains cas prévus par le RGPD.
            </Right>
          </div>
          <div className="mt-6 border border-neutral-200 bg-cream p-4 text-sm">
            <p className="mb-2 font-medium text-ink">Comment exercer vos droits ?</p>
            <p className="text-neutral-700">
              Par email à{' '}
              <a
                href="mailto:sohanwebstudio@gmail.com"
                className="underline underline-offset-2 hover:text-riso-pink-deep"
              >
                sohanwebstudio@gmail.com
              </a>{' '}
              en précisant votre demande et en joignant une pièce d'identité si nécessaire. Réponse sous 30 jours (délai RGPD).
            </p>
            <p className="mt-3 text-neutral-700">
              En cas de réponse insatisfaisante, vous pouvez introduire une réclamation auprès de la{' '}
              <strong>CNIL</strong> (Commission Nationale de l'Informatique et des Libertés) —{' '}
              <span className="font-mono text-xs">cnil.fr</span> ou 3 Place de Fontenoy, 75007 Paris.
            </p>
          </div>
        </div>
      </section>

      {/* Sécurité */}
      <Section title="Sécurité des données">
        <p>
          Des mesures techniques et organisationnelles appropriées sont mises en œuvre pour protéger vos données contre tout accès non autorisé, perte, altération ou divulgation : connexion HTTPS, hébergement sécurisé, mots de passe hashés (bcrypt ou équivalent), accès restreint aux données de production.
        </p>
      </Section>

      {/* Mineurs */}
      <Section title="Mineurs">
        <p>
          Scale Finder n'est pas destiné aux enfants de moins de 15 ans sans consentement parental. Si vous avez connaissance qu'un mineur de moins de 15 ans a transmis des données personnelles, contactez-nous à l'adresse ci-dessus pour en demander la suppression.
        </p>
      </Section>

      {/* Modification */}
      <section className="border border-ink bg-cream px-6 py-6 sm:px-10">
        <h2 className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em]">
          Modifications de cette politique
        </h2>
        <p className="text-sm leading-relaxed text-neutral-700">
          Cette politique peut être mise à jour à tout moment. En cas de modification substantielle (nouveau traitement, nouveau destinataire), les utilisateurs ayant un compte seront informés par email au moins 30 jours avant l'entrée en vigueur. La date de dernière mise à jour figure en haut de cette page.
        </p>
      </section>
    </main>
  );
}

'use client';

import { useState, useEffect, useRef } from 'react';

function intervalLabel(n: number): string {
  if (n === 1) return '½';
  if (n === 2) return 'T';
  if (n === 3) return 'T½';
  return String(n);
}

interface Scale {
  name: string;
  intervals: number[];
  chord: string;
  desc: string;
  examples?: string;
}

interface SectionData {
  id: string;
  title: string;
  shortTitle: string;
  subtitle: string;
  scales: Scale[];
}

const SECTIONS: SectionData[] = [
  {
    id: 'majeurs',
    title: 'Modes classiques — couleur majeure',
    shortTitle: 'Majeurs',
    subtitle: 'Trois des sept modes de la gamme majeure. Sonorité lumineuse, résolue ou planante.',
    scales: [
      {
        name: 'Ionien',
        intervals: [2, 2, 1, 2, 2, 2, 1],
        chord: 'maj7',
        desc: 'Le majeur classique. La gamme de référence, stable et lumineuse. Omniprésente en pop, folk, classique. Tous les autres modes en découlent.',
        examples: 'Let It Be (Beatles), Ode to Joy (Beethoven), Happy Birthday',
      },
      {
        name: 'Lydien',
        intervals: [2, 2, 2, 1, 2, 2, 1],
        chord: 'maj7♯11',
        desc: 'Majeur avec une 4te augmentée (♯4). Crée une sensation de flottement ou de rêve. Très utilisé dans les bandes originales et la fusion.',
        examples: 'Flying in a Blue Dream (Satriani), Misty Mountain Hop (Led Zeppelin)',
      },
      {
        name: 'Mixolydien',
        intervals: [2, 2, 1, 2, 2, 1, 2],
        chord: '7',
        desc: 'Majeur avec une 7e mineure (b7). Le mode du blues rock et de la musique celtique. Donne cette tension dominante caractéristique.',
        examples: 'Norwegian Wood (Beatles), Sympathy for the Devil (Rolling Stones)',
      },
    ],
  },
  {
    id: 'mineurs',
    title: 'Modes classiques — couleur mineure',
    shortTitle: 'Mineurs',
    subtitle: 'Les quatre modes mineurs de la gamme majeure. De l\'ouverture jazz au demi-diminué instable.',
    scales: [
      {
        name: 'Dorien',
        intervals: [2, 1, 2, 2, 2, 1, 2],
        chord: 'm7',
        desc: 'Mineur avec une 6te majeure — plus lumineux que le mineur naturel. La base de l\'improvisation jazz et du rock modal. Très polyvalent.',
        examples: 'Oye Como Va (Santana), Scarborough Fair (Simon & Garfunkel), So What (Miles Davis)',
      },
      {
        name: 'Phrygien',
        intervals: [1, 2, 2, 2, 1, 2, 2],
        chord: 'm7',
        desc: 'Mineur avec une 2e bémol — ½ ton entre la tonique et le 2e degré. Sonorité espagnole ou flamenco. Sombre, mystérieux.',
        examples: 'Wherever I May Roam (Metallica), flamenco (Paco de Lucía)',
      },
      {
        name: 'Aeolien',
        intervals: [2, 1, 2, 2, 1, 2, 2],
        chord: 'm7',
        desc: 'Le mineur standard. Omniprésent en rock, métal, classique. La gamme de référence pour l\'improvisation en mineur.',
        examples: 'Stairway to Heaven (Led Zeppelin), Comfortably Numb (Pink Floyd)',
      },
      {
        name: 'Locrien',
        intervals: [1, 2, 2, 1, 2, 2, 2],
        chord: 'm7b5',
        desc: 'Le mode le plus instable — tierce mineure ET quinte diminuée. Quasi inutilisable comme centre tonal. Efficace en métal et jazz sur les accords vii°.',
        examples: 'The Grudge (Tool), YYZ — sections (Rush)',
      },
    ],
  },
  {
    id: 'blues',
    title: 'Blues & Pentatoniques',
    shortTitle: 'Blues',
    subtitle: '5 à 6 notes soigneusement choisies. La base de tout guitariste rock et blues.',
    scales: [
      {
        name: 'Pentatonique maj.',
        intervals: [2, 2, 3, 2, 3],
        chord: 'maj7',
        desc: '5 notes du majeur (sans 4te ni 7e). Sons country, folk, soul. Fonctionne sur pratiquement tous les accords majeurs — c\'est la gamme universelle.',
        examples: 'My Girl (Temptations), Country Roads (John Denver)',
      },
      {
        name: 'Pentatonique min.',
        intervals: [3, 2, 2, 3, 2],
        chord: 'm7',
        desc: '5 notes du mineur (sans 2e ni 6e). La gamme la plus jouée au monde en rock et blues. Sécurisée, efficace, indémodable.',
        examples: 'Smoke on the Water (Deep Purple), Purple Haze (Hendrix), Crazy Train (Ozzy)',
      },
      {
        name: 'Blues majeure',
        intervals: [2, 1, 1, 3, 2, 3],
        chord: '7',
        desc: 'Pentatonique majeure + blue note (b3). Le son du rock\'n\'roll originel, des licks de Chuck Berry et du Chicago blues. Groove immédiat.',
        examples: 'Johnny B. Goode (Chuck Berry), Roll Over Beethoven',
      },
      {
        name: 'Blues mineure',
        intervals: [3, 2, 1, 1, 3, 2],
        chord: 'm7',
        desc: 'Pentatonique mineure + blue note (b5). LA gamme du blues. Cette "blue note" crée toute la tension expressionniste du blues authentique.',
        examples: 'Red House (Jimi Hendrix), The Thrill Is Gone (B.B. King), La Grange (ZZ Top)',
      },
    ],
  },
  {
    id: 'jazz',
    title: 'Jazz & Avancé',
    shortTitle: 'Jazz',
    subtitle: 'Gammes issues du mineur mélodique et harmonique. Plus de couleurs, plus de tension.',
    scales: [
      {
        name: 'Mineur mélodique',
        intervals: [2, 1, 2, 2, 2, 2, 1],
        chord: 'mMaj7',
        desc: 'Mineur naturel avec 6te ET 7e majeures. La base du jazz moderne depuis Coltrane. Ses modes couvrent toute l\'harmonie jazz contemporaine.',
        examples: 'Footprints (Wayne Shorter), Solar (Miles Davis)',
      },
      {
        name: 'Mineur harmonique',
        intervals: [2, 1, 2, 2, 1, 3, 1],
        chord: 'mMaj7',
        desc: 'Mineur naturel avec 7e majeure. La seconde augmentée lui donne une couleur orientale ou classique. Génère un accord V7 naturel.',
        examples: 'Moonlight Sonata mvt. 3 (Beethoven), Eruption — sections (Van Halen)',
      },
      {
        name: 'Phrygien dominant',
        intervals: [1, 3, 1, 2, 1, 2, 2],
        chord: '7b9',
        desc: '5e mode du mineur harmonique. Combine la tension phrygienne (b2) avec un accord dominant. Le son flamenco authentique.',
        examples: 'Flamenco en général (Paco de Lucía), La Bamba (Ritchie Valens)',
      },
      {
        name: 'Altered (7e altérée)',
        intervals: [1, 2, 1, 2, 2, 2, 2],
        chord: '7alt',
        desc: '7e mode du mineur mélodique. Maximum de tension sur les accords dominants — toutes les extensions sont altérées (b9, ♯9, b13).',
        examples: 'Impro jazz sur V7 (Coltrane, Parker), Giant Steps — sur les dominantes',
      },
      {
        name: 'Lydien dominant',
        intervals: [2, 2, 2, 1, 2, 1, 2],
        chord: '7♯11',
        desc: '4e mode du mineur mélodique. Dominant avec une 4te augmentée — flottant et brillant à la fois. Très utilisé en jazz fusion et en musique de film.',
        examples: 'The Simpsons Theme (Danny Elfman), jazz fusion (Herbie Hancock)',
      },
      {
        name: 'Bebop dominant',
        intervals: [2, 2, 1, 2, 2, 1, 1, 2],
        chord: '7',
        desc: 'Mixolydien + note de passage chromatique (maj7). Les 8 notes permettent de placer les tons de l\'accord sur les temps forts — c\'est la mécanique du bebop.',
        examples: 'Anthropology (Charlie Parker), Donna Lee (Parker / Miles Davis)',
      },
    ],
  },
  {
    id: 'symetriques',
    title: 'Gammes symétriques',
    shortTitle: 'Symét.',
    subtitle: 'Division égale de l\'octave. Ambiguïté tonale totale — aucun centre de gravité évident.',
    scales: [
      {
        name: 'Gamme par tons',
        intervals: [2, 2, 2, 2, 2, 2],
        chord: '7♯5',
        desc: '6 notes équidistantes (que des tons entiers). Flottante, impressionniste, sans résolution naturelle. Seulement 2 gammes par tons distinctes existent.',
        examples: 'Voiles (Debussy), Whole Lotta Love — section centrale (Led Zeppelin)',
      },
      {
        name: 'Diminuée ½T/T',
        intervals: [1, 2, 1, 2, 1, 2, 1, 2],
        chord: '7b9',
        desc: '8 notes alternant demi-ton et ton. Très chromatique, utilisée sur les accords dom7b9. Seulement 3 gammes distinctes (puis ça se répète à la tierce mineure).',
        examples: 'Impro jazz sur dom7b9 (Scofield), Mode 2 de Messiaen',
      },
      {
        name: 'Diminuée T/½T',
        intervals: [2, 1, 2, 1, 2, 1, 2, 1],
        chord: 'dim7',
        desc: 'Inverse de la précédente. S\'utilise sur les accords diminués (dim7). Même propriété de répétition à la tierce mineure.',
        examples: 'Django Reinhardt (gypsy jazz), musique orchestrale (Stravinsky)',
      },
    ],
  },
  {
    id: 'exotiques',
    title: 'Gammes exotiques',
    shortTitle: 'Exotiques',
    subtitle: 'Issues de traditions musicales du monde entier. Chaque gamme apporte une couleur culturelle unique.',
    scales: [
      {
        name: 'Rock n Roll',
        intervals: [2, 1, 1, 3, 2, 3],
        chord: '7',
        desc: 'Pentatonique majeure + blue note bémol. La formule secrète du rockabilly et du rock\'n\'roll des années 50.',
        examples: 'Johnny B. Goode — riffs (Chuck Berry), Blue Suede Shoes (Elvis)',
      },
      {
        name: 'Persane',
        intervals: [1, 3, 1, 1, 2, 3, 1],
        chord: 'maj7b5',
        desc: 'Gamme de la musique classique perse (Dastgah Shur). Son b2, 3 et b5 créent une couleur Proche-Orient très caractéristique.',
        examples: 'The Attitude Song (Steve Vai), musique classique iranienne',
      },
      {
        name: 'Byzantine',
        intervals: [1, 3, 1, 2, 1, 3, 1],
        chord: 'maj7',
        desc: 'Double harmonique ou gamme byzantine. Présente dans la musique balkanique, grecque et du Moyen-Orient. Deux secondes augmentées créent un caractère dramatique.',
        examples: 'Musique balkanique (traditions bulgare/hongroise), gypsy jazz',
      },
      {
        name: 'Hongroise (tsig.)',
        intervals: [2, 1, 3, 1, 1, 3, 1],
        chord: 'mMaj7',
        desc: 'Deux secondes augmentées symétriques. Son dramatique et cinématique. Base de la musique klezmer et du jazz manouche.',
        examples: 'Minor Swing (Django Reinhardt), Hungarian Rhapsody No. 2 (Liszt)',
      },
      {
        name: 'Bebop Dorien',
        intervals: [2, 1, 2, 2, 2, 1, 1, 1],
        chord: 'm7',
        desc: 'Dorien avec une maj7 chromatique — 8 notes. Permet de placer les tons de l\'accord im7 sur les temps forts.',
        examples: 'Impro jazz sur im7 (Wes Montgomery, Joe Pass)',
      },
      {
        name: 'Bebop Mixolydien',
        intervals: [2, 2, 1, 2, 2, 1, 1, 1],
        chord: '7',
        desc: 'Mixolydien avec une maj7 chromatique — 8 notes. Même logique que le bebop dominant : les notes d\'accord tombent sur les temps.',
        examples: 'How High the Moon — impro sur G7 (jazz swing), Charlie Christian',
      },
    ],
  },
  {
    id: 'arpeggios',
    title: 'Arpeggios',
    shortTitle: 'Arpegg.',
    subtitle: 'Notes d\'accords jouées séparément. La base du picking mélodique et du legato technique.',
    scales: [
      { name: 'Majeur (1–3–5)', intervals: [4, 3, 5], chord: '', desc: 'L\'arpège le plus fondamental. Ébauche de n\'importe quel accord majeur.' },
      { name: 'Mineur (1–b3–5)', intervals: [3, 4, 5], chord: 'm', desc: 'Couleur sombre, sobre. Soloing sur les accords mineurs.' },
      { name: 'Dominant 7 (1–3–5–b7)', intervals: [4, 3, 3, 2], chord: '7', desc: 'Tension dominante. Résout naturellement vers la tonique.' },
      { name: 'Majeur 7 (1–3–5–7)', intervals: [4, 3, 4, 1], chord: 'maj7', desc: 'Couleur jazz/bossa, douce et ouverte.' },
      { name: 'Mineur 7 (1–b3–5–b7)', intervals: [3, 4, 3, 2], chord: 'm7', desc: 'Base de l\'impro jazz en mineur. Fluide et neutre.' },
      { name: 'Demi-diminué (1–b3–b5–b7)', intervals: [3, 3, 4, 2], chord: 'm7b5', desc: 'Sur les accords iim7b5 (vii°). Tension modérée.' },
      { name: 'Diminué 7 (1–b3–b5–bb7)', intervals: [3, 3, 3, 3], chord: 'dim7', desc: 'Tension maximale, symétrique. Se transpose à la tierce mineure.' },
      { name: 'Mineur maj7 (1–b3–5–7)', intervals: [3, 4, 4, 1], chord: 'mMaj7', desc: 'Couleur cinématique. Très utilisé par James Bond et le jazz modal.' },
    ],
  },
];

function MobileScaleCard({
  scale,
  id,
  isOpen,
  onToggle,
}: {
  scale: Scale;
  id: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-ink/10 last:border-b-0">
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-start justify-between gap-3 px-4 py-4 text-left transition-colors duration-150 active:bg-cream"
      >
        <div className="min-w-0">
          <div className="flex items-baseline gap-2">
            <span className="text-sm font-medium text-ink">{scale.name}</span>
            {scale.chord && (
              <span className="font-mono text-[10px] text-neutral-400">{scale.chord}</span>
            )}
          </div>
          <div className="mt-1.5 flex flex-wrap items-center gap-0.5">
            {scale.intervals.map((n, i) => (
              <span
                key={i}
                className="flex h-5 min-w-[22px] items-center justify-center border border-ink/20 bg-paper font-mono text-[10px]"
              >
                {intervalLabel(n)}
              </span>
            ))}
          </div>
        </div>
        <svg
          className={`mt-1 h-4 w-4 shrink-0 text-neutral-300 transition-transform duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Accordion body — CSS grid trick for smooth height animation */}
      <div
        className="grid transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
        style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
      >
        <div className="overflow-hidden">
          <div className="border-t border-ink/5 bg-cream/40 px-4 pb-4 pt-3">
            <p className="text-sm leading-relaxed text-neutral-600">{scale.desc}</p>
            {scale.examples && (
              <p className="mt-2 text-[11px] text-neutral-400">
                <span className="font-medium uppercase tracking-[0.12em] text-neutral-500">Ex. </span>
                {scale.examples}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function DesktopScaleRow({ scale }: { scale: Scale }) {
  return (
    <div className="grid gap-3 border-t border-neutral-200 px-5 py-4 sm:grid-cols-[180px_1fr] sm:px-8">
      <div>
        <p className="text-sm font-medium text-ink">{scale.name}</p>
        {scale.chord && (
          <p className="mt-0.5 font-mono text-[11px] text-neutral-400">{scale.chord}</p>
        )}
        <div className="mt-2 flex flex-wrap items-center gap-1">
          {scale.intervals.map((n, i) => (
            <span key={i} className="flex items-center gap-1">
              <span className="flex h-6 min-w-[28px] items-center justify-center border border-ink bg-cream font-mono text-[11px] font-medium">
                {intervalLabel(n)}
              </span>
              {i < scale.intervals.length - 1 && (
                <span className="text-[10px] text-neutral-300">·</span>
              )}
            </span>
          ))}
        </div>
      </div>
      <div>
        <p className="text-sm text-neutral-600">{scale.desc}</p>
        {scale.examples && (
          <p className="mt-1.5 text-[11px] text-neutral-400">
            <span className="font-medium uppercase tracking-[0.12em] text-neutral-500">Ex. </span>
            {scale.examples}
          </p>
        )}
      </div>
    </div>
  );
}

export function TheoryClient() {
  const [activeSection, setActiveSection] = useState(0);
  const [openScales, setOpenScales] = useState<Set<string>>(new Set());
  const tabsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tab = tabsRef.current?.children[activeSection] as HTMLElement;
    tab?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  }, [activeSection]);

  function toggleScale(id: string) {
    setOpenScales((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  function selectSection(idx: number) {
    setActiveSection(idx);
    setOpenScales(new Set());
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <>
      {/* ── MOBILE ──────────────────────────────────────────── */}
      <div className="sm:hidden">
        <header className="border border-ink px-5 py-6">
          <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400">
            Référence
          </p>
          <h1 className="text-2xl font-bold tracking-tight">Théorie des Gammes</h1>
          <p className="mt-1.5 text-xs text-neutral-400">
            <span className="font-mono font-medium text-ink">T</span> = 1 ton ·{' '}
            <span className="font-mono font-medium text-ink">½</span> = ½ ton
          </p>
        </header>

        {/* Sticky glass tab bar */}
        <div className="sticky top-0 z-20 border-b border-ink/15 bg-paper/85 backdrop-blur-md">
          <div
            ref={tabsRef}
            className="flex overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {SECTIONS.map((s, i) => (
              <button
                key={s.id}
                onClick={() => selectSection(i)}
                className={`relative shrink-0 whitespace-nowrap px-4 py-3 text-[10px] font-bold uppercase tracking-[0.15em] transition-colors duration-200
                  ${activeSection === i ? 'text-ink' : 'text-neutral-400 active:text-neutral-600'}`}
              >
                {s.shortTitle}
                {activeSection === i && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-ink" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Section subtitle */}
        <div className="border-x border-ink border-t-0 bg-cream/40 px-4 py-3">
          <p className="text-[11px] leading-snug text-neutral-500">
            {SECTIONS[activeSection].subtitle}
          </p>
        </div>

        {/* Scale cards */}
        <div className="min-h-[60vh] border border-t-0 border-ink">
          {SECTIONS[activeSection].scales.map((scale) => {
            const id = `${activeSection}-${scale.name}`;
            return (
              <MobileScaleCard
                key={id}
                scale={scale}
                id={id}
                isOpen={openScales.has(id)}
                onToggle={() => toggleScale(id)}
              />
            );
          })}
        </div>
      </div>

      {/* ── DESKTOP ─────────────────────────────────────────── */}
      <main className="hidden space-y-2 sm:block sm:space-y-3">
        <header className="border border-ink px-6 py-10 sm:px-10">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-ink">
            Référence
          </p>
          <h1 className="text-4xl font-bold tracking-tight">Théorie des Gammes</h1>
          <p className="mt-2 max-w-2xl text-sm text-neutral-500">
            Guide de toutes les gammes disponibles dans Scale Finder : construction, sonorité et
            contexte d'utilisation. Légende :{' '}
            <span className="font-mono font-medium text-ink">T</span> = 1 ton (2 demi-tons),{' '}
            <span className="font-mono font-medium text-ink">½</span> = ½ ton (1 demi-ton).
          </p>
        </header>

        <div className="grid gap-px bg-neutral-200 sm:grid-cols-3">
          {[
            {
              title: 'Pourquoi les gammes ?',
              body: "Une gamme = un ensemble de notes qui sonnent bien ensemble dans une tonalité donnée. Choisir la bonne gamme te permet d'improviser, de composer et d'analyser n'importe quel morceau.",
            },
            {
              title: 'Modes vs gammes',
              body: "Un mode commence sur un degré différent de la même gamme. Les 7 modes classiques (Ionien, Dorien…) sont tous issus de la gamme majeure — même notes, autre point de départ.",
            },
            {
              title: 'Sur le manche',
              body: "Explore chaque gamme en temps réel dans l'Explorateur de gammes. Sélectionne la tonique + le mode, et les positions s'affichent directement sur le manche de guitare.",
            },
          ].map(({ title, body }) => (
            <div key={title} className="bg-paper px-5 py-5">
              <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.15em] text-ink">
                {title}
              </p>
              <p className="text-xs leading-relaxed text-neutral-600">{body}</p>
            </div>
          ))}
        </div>

        {SECTIONS.map((section) => (
          <section key={section.id} className="border border-ink">
            <header className="sticky top-0 z-10 border-b border-ink bg-paper/90 px-5 py-4 backdrop-blur-sm sm:px-8">
              <h2 className="text-[11px] font-bold uppercase tracking-[0.18em] text-ink">
                {section.title}
              </h2>
              <p className="mt-1 text-sm text-neutral-600">{section.subtitle}</p>
            </header>
            <div className="divide-y divide-neutral-100">
              {section.scales.map((scale) => (
                <DesktopScaleRow key={scale.name} scale={scale} />
              ))}
            </div>
          </section>
        ))}
      </main>
    </>
  );
}

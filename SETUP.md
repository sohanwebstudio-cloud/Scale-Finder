# Comment lancer ce projet sur ta machine

## Étape 1 — Décompresse l'archive

Tu dois avoir reçu un fichier `scale-finder.zip`. Décompresse-le où tu veux (par exemple `~/Documents/projets/scale-finder`).

## Étape 2 — Ouvre dans VS Code

```bash
cd ~/Documents/projets/scale-finder
code .
```

## Étape 3 — Installe les dépendances

Dans le terminal intégré de VS Code (Ctrl+`) :

```bash
npm install
```

Ça va prendre 30-60 secondes.

## Étape 4 — Lance le dev server

```bash
npm run dev
```

Ouvre http://localhost:3000 dans ton navigateur. Tu devrais voir la home avec les 3 guitaristes.

## Étape 5 — Vérifie que tout fonctionne

- [ ] La home affiche 3 cards (Stern, Metheny, Scofield)
- [ ] Click sur une card → page guitariste avec ses gammes
- [ ] L'explorateur en bas de page affiche le manche interactif
- [ ] Tu peux switcher tonique et mode

## Si tu vois des erreurs

**Erreur "Cannot find module"** → tu n'as pas lancé `npm install`.

**Erreur sur next-env.d.ts** → normal au premier `npm run dev`, le fichier se crée automatiquement.

**Le manche n'apparaît pas** → vérifie la console du navigateur (F12). Probablement un problème React.

## Prochaines étapes (à toi de jouer)

1. **Ajouter un guitariste** : copie `src/data/guitarists/mike-stern.json`, modifie, ajoute l'import dans `index.ts`. C'est tout.

2. **Customiser le design** : tout le styling est en Tailwind. Pas de CSS séparé à maintenir.

3. **Déployer en prod** : `npx vercel` (gratuit pour les projets perso). Le site sera en ligne en 2 minutes.

## Architecture en bref

- **Server Components** : la home et la page guitariste rendent côté serveur (rapide, SEO friendly)
- **Client Components** : seuls `Fretboard.tsx` et `ScaleExplorer.tsx` (les `'use client'` en haut)
- **Logique musicale** : 100% pure dans `src/lib/music/`, testable en isolation
- **Data** : JSON statique, pas de DB pour la v1

## Décisions à valider plus tard (pas urgent)

- **DB** : quand tu auras 20+ guitaristes ou des features user (favoris, comptes), passe à Postgres + Prisma
- **CMS** : si tu veux que des invités contribuent du contenu, Sanity ou Notion-as-CMS
- **Audio** : Tone.js est l'option la plus saine. Backing tracks → soit tu en composes, soit licence Soundstripe

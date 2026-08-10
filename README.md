# Étude de modernisation d’étanchéité

Site personnel indépendant de Mohammed Essommani consacré à l’étude du remplacement du presse-étoupe de la pompe 02CEX202PO par une garniture mécanique à cartouche.

## Propriété et portabilité

Le projet ne dépend d’aucun service ChatGPT et ne contient ni authentification, ni marqueur, ni configuration ChatGPT. Le code source et la version statique produite peuvent être hébergés sur le service de votre choix.

## Lancer le site localement

```bash
npm install
npm run dev
```

Ouvrir ensuite `http://localhost:3000`.

## Construire la version statique

```bash
npm run build
```

Le dossier `out/` obtenu contient le site final prêt à publier.

## Publication

- Hébergement moderne : importer le dossier du projet dans le compte d’hébergement personnel et utiliser `npm run build`.
- Hébergement statique : publier directement le contenu du dossier `out/`.
- Domaine personnel : connecter le domaine acheté au compte d’hébergement choisi en suivant les enregistrements DNS fournis par celui-ci.

## Contenu modifiable

- Textes et structure : `app/page.tsx`
- Couleurs et mise en page : `app/globals.css`
- Images : `public/assets/`
- Titre et description : `app/layout.tsx`

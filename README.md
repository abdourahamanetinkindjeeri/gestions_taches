# Gestion des Tâches

Ce projet est une application complète de gestion de tâches, composée d'un backend (Node.js/Express/TypeScript/Prisma) et d'un frontend (React.js/Vite/Tailwind).

## Fonctionnalités principales

- Authentification des utilisateurs
- Création, modification, suppression de tâches
- Attribution et délégation de tâches
- Historique des tâches et notifications
- Téléversement de fichiers et photos pour les tâches
- Gestion des statuts et priorités des tâches
- Suivi du temps d'exécution et audit
- Interface utilisateur moderne et responsive

## Structure du projet

- `todo_backend/` : API REST, logique métier, base de données (Prisma)
- `todo_frontend/` : Interface utilisateur, gestion des états, intégration API

## Démarrage rapide

### Backend
1. Installer les dépendances : `npm install`
2. Configurer la base de données dans `prisma/schema.prisma`
3. Lancer les migrations : `npx prisma migrate dev`
4. Démarrer le serveur : `npm run dev`

### Frontend
1. Installer les dépendances : `npm install`
2. Démarrer l'application : `npm run dev`

## Technologies utilisées
- Node.js, Express, TypeScript
- Prisma ORM
- React.js, Vite, Tailwind CSS
- Cloudinary (gestion des fichiers)

## Auteur
- Abdourahamane Tinkin Djeeri

## Licence
Ce projet est open-source et peut être utilisé librement.

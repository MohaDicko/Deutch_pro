# Projet Deutsch Pro Bamako — contexte, logique métier et feuille de route

## 1. Objectif général du projet

Le projet a été construit comme un site vitrine premium pour un centre de langues, puis progressivement transformé en un outil de gestion plus utile pour le business :

- acquisition de clients
- gestion des demandes B2B
- gestion des demandes de contact
- suivi des demandes côté admin
- base de travail pour un système de gestion pédagogique et RH

Le cœur de la valeur n’est pas seulement le branding, mais la capacité à transformer des demandes en opérations internes cohérentes.

---

## 2. Logique métier du projet

### 2.1. Problème métier ciblé

L’activité principale est un centre de langues qui vend des cours de allemand, souvent avec un parcours progressif :

- A1
- A2
- B1
- B2

Le besoin réel est d’accompagner les apprenants du premier contact jusqu’à la progression dans le niveau, tout en permettant au centre de gérer :

- les demandes de cours / inscription
- les demandes entreprises (B2B)
- les messages de contact
- le suivi des prospects
- l’évolution des niveaux
- le pilotage des actions commercial / pédagogique

### 2.2. Logique métier actuelle implémentée

Le produit actuel a déjà mis en place le socle suivant :

- page d’accueil multilingue
- parcours de cours détaillé de A1 à B2
- section sur les outils audio-visuels / immersion / rôle-play
- propositions de cours orientées réel métier
- espace admin avec gestion des demandes
- statut des demandes : Nouveau / En cours / Traité
- recherche par mot-clé
- filtres par statut
- filtre par date
- export CSV

### 2.3. Logique métier future à développer

Le vrai système métier attendu pour le centre est le suivant :

#### Gestion des apprenants
- inscription
- niveau initial
- niveau actuel
- progression
- notes
- absences
- résultats / passages
- historique du parcours

#### Gestion des enseignants
- profil du professeur
- spécialités
- niveau enseigné
- planning
- disponibilité
- taux horaire
- contrat / statut
- heures effectuées
- paie / rémunération

#### Gestion pédagogique
- cours individuels / groupes
- niveaux A1 à B2
- compétences linguistiques
- évaluations
- décisions de passage
- suivi des difficultés

#### Gestion RH / paie
- heures enseignées
- absences / remplacements
- primes
- congés
- paiement mensuel
- suivi global du personnel

#### Pilotage de direction
- KPI du centre
- taux d’inscription
- taux de progression
- taux de passage de niveau
- charge pédagogique
- performance des enseignants

---

## 3. Ce qui a déjà été fait dans ce projet

### 3.1. Front-end / site vitrine

- app Next.js 16 avec App Router
- structure multilingue via dictionnaires
- pages locales par langue
- design premium, orienté business
- sections harmonisées : hero, services, niveaux, témoignages, partenaires, contact, footer
- composants réutilisables et structurés

### 3.2. Gestion des demandes / leads

Le système de lead capture a été consolidé avec :

- formulaire de contact
- formulaire B2B
- validation via Zod
- protection anti-bot via honeypot
- enregistrement dans Prisma
- statut de traitement
- revalidation côté admin

### 3.3. Admin dashboard

Le portail admin comprend :

- vue générale des messages et demandes B2B
- recherche globale
- filtre par statut
- filtre par date
- filtrage par catégorie
- export CSV
- mise à jour de statut direct

### 3.4. Base de données

Le projet utilise Prisma avec PostgreSQL / Supabase.

Les modèles déjà présents incluent notamment :

- contacts
- b2b_requests
- modèles auth / Supabase générés par Prisma

### 3.5. Tests

Le projet a été protégé par des tests de régression côté dashboard admin, notamment :

- rendu du tableau de bord
- présence des filtres
- génération des éléments d’UI
- cohérence du comportement de navigation et de filtre

---

## 4. Stack technique utilisée

### Front-end
- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- lucide-react

### Back-end / données
- Prisma
- PostgreSQL
- Supabase
- Zod pour validation

### Tests
- Vitest
- Testing Library
- jsdom

### Outils / dev
- ESLint
- TypeScript strict mode
- App Router Next.js

---

## 5. Architecture actuelle

### Positionnement
Le projet est maintenant un mélange de :

- site vitrine / landing page
- CRM interne simple
- base de données opérationnelle
- système d’administration des demandes

### Structure logique

- app public : contenu marketing et informations institutionnelles
- app admin : vue interne de gestion des demandes
- server actions : logique de création et mise à jour des données
- Prisma : source de vérité côté données
- tests : protection des comportements critiques

### Points importants à retenir

- Les données sont gérées côté serveur via actions Next.js
- Le dashboard admin est un espace de gestion interne et ne doit pas être traité comme une simple page front
- La mise à jour des statuts doit rester simple, robuste et explicite
- Les filtres et exports doivent être testés avant tout changement de logique métier

---

## 6. Règles de travail pour les futurs chantiers

### Règle 1 — ne pas refaire le site vitrine comme si c’était l’objectif principal

Le vrai produit n’est pas seulement un site joli ; le vrai produit est un système de gestion orienté business.

### Règle 2 — chaque nouvelle fonctionnalité doit être exprimée en besoin métier

Avant d’ajouter un écran ou une table, répondre à :

- qui l’utilise ?
- quel problème il résout ?
- quelles données sont nécessaires ?
- quelle décision métier est prise avec ça ?

### Règle 3 — respecter la séparation des responsabilités

- marketing / landing page
- CRM / gestion des leads
- gestion pédagogique
- gestion RH
- back-office admin

### Règle 4 — éviter l’excès de scope

Ne pas démarrer par un ERP complet. Commencer par un module métier utile, stable, testé.

### Règle 5 — toujours tester avant validation

Chaque changement important doit être vérifié par :

- test unitaire / d’intégration ciblé
- build production si le changement touche le projet dans son ensemble

---

## 7. Feuille de route recommandée

### Phase 1 — stabiliser le socle existant

- finaliser le dashboard admin
- sécuriser les flux de création et de mise à jour
- sécuriser les filtres, statuts et export CSV
- compléter la documentation de chaque module

Objectif : un back-office fiable et propre.

### Phase 2 — gestion des apprenants

- CRUD apprenants
- niveau d’entrée / niveau actuel
- historique de parcours
- statuts d’inscription
- suivi des paiements

Objectif : piloter la relation client / apprenant.

### Phase 3 — gestion pédagogique

- niveaux A1 à B2
- cours / groupes / planning
- absences
- évaluations
- notes par compétence
- logique de passage de niveau

Objectif : transformer le centre en système pédagogique structuré.

### Phase 4 — gestion des enseignants

- profils enseignants
- spécialités et disponibilités
- contrat / taux horaire
- heures enseignées
- courbes de charge
- suivi des absences

Objectif : piloter le rendement et la rémunération du personnel.

### Phase 5 — gestion RH / paie

- paie mensuelle
- heures réelles
- primes / indemnités
- congés
- export RH / compta

Objectif : donner à la direction une vraie vision de coûts et de ressources.

### Phase 6 — pilotage et reporting

- tableaux de bord direction
- indicateurs clés
- analyses par niveau / classe / enseignant
- exports Excel / PDF

Objectif : rendre le centre réellement pilotable.

---

## 8. Priorisation métier recommandée

Si on veut éviter le gaspillage de tokens et de temps, la vraie priorité est :

1. apprenants
2. niveaux et progression
3. enseignants
4. planning
5. paie
6. reporting direction

Le site vitrine est déjà une base solide. Le prochain vrai levier est la gestion pédagogique + RH.

---

## 9. Recommandation de fonctionnement pour les prochains travaux

Avant chaque nouveau chantier, respecter ce mini-processus :

1. lire ce document
2. identifier le module concerné
3. définir le besoin métier exact
4. garder le scope limité
5. écrire ou adapter un test
6. mettre en œuvre le minimum viable
7. vérifier le build / test
8. documenter les impacts

---

## 10. Résumé ultra court

Ce projet est devenu un socle de :

- site vitrine premium
- CRM interne pour demandes et prospects
- base pour un système de gestion de centre de langues

Le prochain vrai niveau est la gestion des apprenants, des enseignants, des niveaux, des notes, des passages et enfin de la paie / RH.

Le but n’est pas de faire un gros ERP trop vite, mais un système clair, utile, lisible, testable, et extensible.

---

## 11. Fichiers utiles du projet

- [package.json](package.json)
- [prisma/schema.prisma](prisma/schema.prisma)
- [src/app/actions.ts](src/app/actions.ts)
- [src/app/admin/page.tsx](src/app/admin/page.tsx)
- [src/app/admin/page.test.tsx](src/app/admin/page.test.tsx)

Ces fichiers donnent le meilleur point d’entrée pour reprendre le projet sans perte de contexte.

# V1 — B2B + apprenants + admin

## 1. Vision produit

Le projet reste un site vitrine premium pour Deutsch Pro Bamako, avec un back-office simple permettant de traiter les demandes entre :

- des entreprises allemandes ayant des besoins de recrutement, de formation ou de profils linguistiques
- des apprenants locaux qui souhaitent évoluer vers l’Allemagne
- le centre, qui agit comme intermédiaire et assure le suivi administratif

Le cœur du produit n’est pas un ERP complet. Il s’agit d’un pipeline simple de demandes, de dossiers et de suivi administratif.

## 2. Périmètre validé

### Inclus dans la V1
- site vitrine
- demandes B2B
- demandes de contact / inscription
- fiches apprenants
- statut de dossier
- recherche et filtres dans l’admin
- traitement des demandes
- export simple des données

### Exclu de la V1
- RH
- paie enseignants
- gestion des professeurs
- planning professeur
- suivi pédagogique avancé
- ERP complet

## 3. Objectif fonctionnel

Le système doit permettre à l’équipe de :

1. recevoir une demande B2B ou un message de contact
2. qualifier le besoin
3. transformer la demande en dossier apprenant ou dossier partenaire
4. suivre le statut jusqu’à la conversion ou au traitement
5. avoir une vue globale dans l’admin

## 4. Flux métier principal

### Flux B2B
- une entreprise remplit un formulaire B2B
- le système enregistre la demande
- l’admin voit la demande dans le tableau de bord
- l’équipe change le statut : Nouveau / En cours / Traité
- un dossier commercial est suivi jusqu’à la clôture

### Flux apprenant / inscription
- un apprenant ou un futur client remplit le formulaire de contact
- la demande est enregistrée
- le dossier est associé à un niveau et à une source
- le centre suit le dossier jusqu’à l’inscription ou l’orientation

## 5. Modèle de données attendu

### Demande B2B
- id
- company
- contact_name
- email
- phone
- sector
- candidates_count
- message
- status
- created_at

### Demande de contact / inscription
- id
- name
- email
- phone
- message
- language
- status
- created_at

### Apprenant
- id
- full_name
- email
- phone
- level_id
- objective
- status
- notes
- created_at

## 6. Écrans prioritaires

### Admin dashboard
- total demandes
- total B2B
- total contacts
- statut global
- recherche par mot-clé
- filtres par statut et date
- export CSV

### Liste apprenants
- nom
- email
- niveau
- statut
- progression
- évaluation

### Fiche apprenant
- informations personnelles
- niveau initial / actuel
- objectif
- notes internes
- historique de suivi

## 7. Critères de succès de la V1

- l’équipe peut traiter les demandes sans confusion
- les demandes B2B et contact sont visibles dans un même admin
- les apprenants ont un dossier simple et exploitable
- les statuts de traitement sont clairs
- la V1 reste simple, stable et exploitable sans ajout de modules non essentiels

## 8. Règle de travail

On ne rajoute rien tant que ces fonctionnalités ne sont pas stables et validées.

Les ajouts futurs doivent répondre à une question métier claire :
- qui l’utilise ?
- quel besoin réel cela couvre-t-il ?
- quel bénéfice business cela apporte-t-il ?

## 9. Prochaine étape

Implémenter la V1 sur la base de l’admin existant et des écrans apprenants déjà présents, en gardant strictement ce périmètre.

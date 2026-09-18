# Gestion du centre de langues — modèle métier et schéma cible

## 1. Vision métier

Le système doit permettre de gérer un centre de langues comme une structure pédagogique + RH + pilotage opérationnel.

Les modules prioritaires sont :

- apprenants
- enseignants
- niveaux (A1, A2, B1, B2)
- cours / groupes / planning
- notes / évaluations
- passages de niveau
- gestion RH / paie des professeurs
- pilotage de direction

---

## 2. Règles métier de base

### Apprenant
- un apprenant appartient à un niveau initial
- il suit un ou plusieurs cours
- il est évalué à intervalles réguliers
- sa progression détermine son passage de niveau
- il peut être en statut : inscrit / actif / suspendu / terminé

### Enseignant
- un enseignant a une spécialité et un statut (vacataire, permanent, indépendant)
- il est affecté à des cours
- son salaire dépend du nombre d’heures enseignées et de son taux horaire
- Il peut être responsable d’un groupe ou d’un niveau

### Niveau
- A1, A2, B1, B2 sont les niveaux principaux
- le passage d’un niveau à l’autre repose sur des compétences validées

### Évaluation
- une évaluation contient des notes par compétence
- la moyenne globale est calculée par cours / période / niveau
- le passage est validé ou refusé selon des règles définies

### Paie
- la paie se base sur les heures réellement enseignées
- des primes ou indemnités peuvent s’ajouter
- les absences et congés doivent être intégrés

---

## 3. Modèle de données cible (MVP)

Voici un schéma Prisma qui correspond au besoin métier initial sans tomber dans un ERP trop large.

```prisma
// Exemple de structure cible pour le centre de langues

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

enum UserRole {
  ADMIN
  SECRETARIAT
  TEACHER
  STUDENT
}

enum StudentStatus {
  INSCRIT
  ACTIF
  SUSPENDU
  TERMINE
  ABANDON
}

enum TeacherStatus {
  PERMANENT
  VACATAIRE
  INDEPENDANT
  INTERMITTENT
}

enum CourseType {
  INDIVIDUEL
  GROUPE
  INTENSIF
  PREPARATION_EXAMEN
  CONVERSATION
}

enum AttendanceStatus {
  PRESENT
  ABSENT
  RETARD
  EXCUSE
}

enum LevelPassStatus {
  EN_COURS
  VALIDE
  REFUSE
  RENFORCEMENT
}

model User {
  id            String   @id @default(cuid())
  email         String   @unique
  name          String
  phone         String?
  role          UserRole
  createdAt     DateTime @default(now())
  updatedAt     DateTime @updatedAt

  student       Student?
  teacher       Teacher?
}

model Student {
  id                String        @id @default(cuid())
  userId            String        @unique
  user              User          @relation(fields: [userId], references: [id])
  levelId           String?
  level             Level?        @relation(fields: [levelId], references: [id])
  status            StudentStatus @default(INSCRIT)
  birthDate         DateTime?
  nationality       String?
  objective         String?
  notes             String?
  createdAt         DateTime      @default(now())
  updatedAt         DateTime      @updatedAt

  enrollments       Enrollment[]
  assessments       Assessment[]
  attendanceRecords Attendance[]
  payments          Payment[]
}

model Teacher {
  id               String          @id @default(cuid())
  userId           String          @unique
  user             User            @relation(fields: [userId], references: [id])
  status           TeacherStatus   @default(VACATAIRE)
  specialization   String?
  hourlyRate       Decimal?        @db.Decimal(10, 2)
  contractStart    DateTime?
  contractEnd      DateTime?
  createdAt        DateTime        @default(now())
  updatedAt        DateTime        @updatedAt

  courses          Course[]
  payrollEntries   Payroll[]
}

model Level {
  id          String   @id @default(cuid())
  code        String   @unique // A1, A2, B1, B2
  label       String
  description String?
  order       Int
  createdAt   DateTime @default(now())

  students    Student[]
  courses     Course[]
  assessments Assessment[]
}

model Course {
  id          String     @id @default(cuid())
  title       String
  type        CourseType
  levelId     String?
  level       Level?     @relation(fields: [levelId], references: [id])
  teacherId   String?
  teacher     Teacher?   @relation(fields: [teacherId], references: [id])
  startDate   DateTime?
  endDate     DateTime?
  schedule    String?
  room        String?
  createdAt   DateTime   @default(now())

  enrollments Enrollment[]
  attendance  Attendance[]
  assessments Assessment[]
}

model Enrollment {
  id        String   @id @default(cuid())
  studentId String
  student   Student  @relation(fields: [studentId], references: [id])
  courseId  String
  course    Course   @relation(fields: [courseId], references: [id])
  startedAt DateTime @default(now())
  endedAt   DateTime?

  @@unique([studentId, courseId])
}

model Attendance {
  id        String            @id @default(cuid())
  studentId String
  student   Student           @relation(fields: [studentId], references: [id])
  courseId  String
  course    Course            @relation(fields: [courseId], references: [id])
  date      DateTime
  status    AttendanceStatus
  note      String?

  @@unique([studentId, courseId, date])
}

model Assessment {
  id          String        @id @default(cuid())
  studentId   String
  student     Student       @relation(fields: [studentId], references: [id])
  courseId    String?
  course      Course?       @relation(fields: [courseId], references: [id])
  levelId     String?
  level       Level?        @relation(fields: [levelId], references: [id])
  assessmentDate DateTime @default(now())
  totalScore  Float?
  comment     String?
  status      LevelPassStatus @default(EN_COURS)

  criteria    AssessmentCriterion[]
}

model AssessmentCriterion {
  id           String     @id @default(cuid())
  assessmentId String
  assessment   Assessment @relation(fields: [assessmentId], references: [id])
  label        String     // listening, speaking, grammar, vocabulary, writing
  score        Float
  maxScore     Float
  note         String?
}

model Payment {
  id          String   @id @default(cuid())
  studentId   String
  student     Student  @relation(fields: [studentId], references: [id])
  amount      Decimal  @db.Decimal(10, 2)
  method      String?
  paidAt      DateTime @default(now())
  status      String   @default("paid") // paid, pending, overdue
  note        String?
}

model Payroll {
  id            String   @id @default(cuid())
  teacherId     String
  teacher       Teacher  @relation(fields: [teacherId], references: [id])
  month         String   // YYYY-MM
  hoursWorked   Float
  grossAmount   Decimal  @db.Decimal(10, 2)
  bonus         Decimal  @db.Decimal(10, 2) @default(0)
  deductions    Decimal  @db.Decimal(10, 2) @default(0)
  netAmount     Decimal  @db.Decimal(10, 2)
  status        String   @default("pending") // pending, paid
  createdAt     DateTime @default(now())
}
```

---

## 4. Module à implémenter en priorité

### Phase 1 — MVP utile

- User
- Student
- Teacher
- Level
- Course
- Enrollment
- Attendance
- Assessment
- AssessmentCriterion

### Phase 2 — gestion financière et RH

- Payment
- Payroll

### Phase 3 — reporting / direction

- dashboards KPI
- export Excel / CSV
- synthèse de progression
- tableaux de bord de performance

---

## 5. Logique métier stratégique à conserver

### Passage de niveau
Le système doit pouvoir répondre à cette logique :

- un apprenant est évalué sur les compétences clés
- la moyenne est calculée
- si moyenne >= seuil et compétences nécessaires validées, il peut passer au niveau supérieur
- sinon, il est orienté soit en renforcement, soit en prolongation de niveau

### Charge horaire enseignant
La logique RH doit être calculée à partir de :

- cours assignés
- présence
- heures réellement effectuées
- taux horaire
- primes éventuelles

### Pilotage centre
La direction doit visualiser rapidement :

- nombre d’apprenants actifs
- progression moyenne par niveau
- apprenants au bord du passage
- enseignants les plus chargés
- chiffre d’affaires / paiements
- taux de présence / absence

---

## 6. Recommandation de conception

Pour garder le projet lisible et exploitable, il faut éviter d’ajouter trop d’outils dès le départ.

Le bon ordre est :

1. apprenants
2. niveaux / progression
3. enseignants
4. planning des cours
5. notes et passages
6. paie
7. reporting

---

## 7. Point clé pour les futurs chantiers

Chaque futur développement doit répondre à cette logique simple :

- quel besoin métier ?
- quel acteur est concerné ?
- quelle donnée est nécessaire ?
- quel décision métier en découle ?

Si on garde cette logique, le projet restera cohérent, ne grossira pas inutilement, et ne gaspille pas de tokens ni de temps.

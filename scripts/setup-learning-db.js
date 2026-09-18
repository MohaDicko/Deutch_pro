const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const statements = [
  `CREATE EXTENSION IF NOT EXISTS pgcrypto`,
  `DO $$ BEGIN CREATE TYPE public.learning_level_code AS ENUM ('A1', 'A2', 'B1', 'B2'); EXCEPTION WHEN duplicate_object THEN NULL; END $$`,
  `DO $$ BEGIN CREATE TYPE public.student_status AS ENUM ('inscrit', 'actif', 'suspendu', 'termine', 'abandon'); EXCEPTION WHEN duplicate_object THEN NULL; END $$`,
  `DO $$ BEGIN CREATE TYPE public.teacher_status AS ENUM ('permanent', 'vacataire', 'independant', 'intermittent'); EXCEPTION WHEN duplicate_object THEN NULL; END $$`,
  `DO $$ BEGIN CREATE TYPE public.course_type AS ENUM ('individuel', 'groupe', 'intensif', 'preparation_examen', 'conversation'); EXCEPTION WHEN duplicate_object THEN NULL; END $$`,
  `DO $$ BEGIN CREATE TYPE public.attendance_status AS ENUM ('present', 'absent', 'retard', 'excuse'); EXCEPTION WHEN duplicate_object THEN NULL; END $$`,
  `DO $$ BEGIN CREATE TYPE public.assessment_status AS ENUM ('en_cours', 'valide', 'refuse', 'renforcement'); EXCEPTION WHEN duplicate_object THEN NULL; END $$`,
  `CREATE TABLE IF NOT EXISTS public.learning_levels (id uuid PRIMARY KEY DEFAULT gen_random_uuid(), code public.learning_level_code NOT NULL UNIQUE, label text NOT NULL, description text, sort_order integer NOT NULL, created_at timestamptz NOT NULL DEFAULT timezone('utc'::text, now()))`,
  `CREATE TABLE IF NOT EXISTS public.students (id uuid PRIMARY KEY DEFAULT gen_random_uuid(), user_id uuid REFERENCES auth.users(id) ON DELETE SET NULL, level_id uuid REFERENCES public.learning_levels(id) ON DELETE SET NULL, full_name text NOT NULL, email text, phone text, status public.student_status NOT NULL DEFAULT 'inscrit', objective text, notes text, created_at timestamptz NOT NULL DEFAULT timezone('utc'::text, now()))`,
  `CREATE TABLE IF NOT EXISTS public.teachers (id uuid PRIMARY KEY DEFAULT gen_random_uuid(), user_id uuid REFERENCES auth.users(id) ON DELETE SET NULL, full_name text NOT NULL, email text, phone text, specialization text, hourly_rate numeric(10,2), status public.teacher_status NOT NULL DEFAULT 'vacataire', created_at timestamptz NOT NULL DEFAULT timezone('utc'::text, now()))`,
  `CREATE TABLE IF NOT EXISTS public.courses (id uuid PRIMARY KEY DEFAULT gen_random_uuid(), title text NOT NULL, course_type public.course_type NOT NULL DEFAULT 'groupe', level_id uuid REFERENCES public.learning_levels(id) ON DELETE SET NULL, teacher_id uuid REFERENCES public.teachers(id) ON DELETE SET NULL, schedule text, room text, start_date timestamptz, end_date timestamptz, created_at timestamptz NOT NULL DEFAULT timezone('utc'::text, now()))`,
  `CREATE TABLE IF NOT EXISTS public.course_enrollments (id uuid PRIMARY KEY DEFAULT gen_random_uuid(), student_id uuid NOT NULL REFERENCES public.students(id) ON DELETE CASCADE, course_id uuid NOT NULL REFERENCES public.courses(id) ON DELETE CASCADE, started_at timestamptz NOT NULL DEFAULT timezone('utc'::text, now()), ended_at timestamptz, CONSTRAINT course_enrollments_student_course_unique UNIQUE (student_id, course_id))`,
  `CREATE TABLE IF NOT EXISTS public.student_attendances (id uuid PRIMARY KEY DEFAULT gen_random_uuid(), student_id uuid NOT NULL REFERENCES public.students(id) ON DELETE CASCADE, course_id uuid NOT NULL REFERENCES public.courses(id) ON DELETE CASCADE, attended_on timestamptz NOT NULL, status public.attendance_status NOT NULL DEFAULT 'present', note text, CONSTRAINT student_attendance_unique UNIQUE (student_id, course_id, attended_on))`,
  `CREATE TABLE IF NOT EXISTS public.assessments (id uuid PRIMARY KEY DEFAULT gen_random_uuid(), student_id uuid NOT NULL REFERENCES public.students(id) ON DELETE CASCADE, course_id uuid REFERENCES public.courses(id) ON DELETE SET NULL, level_id uuid REFERENCES public.learning_levels(id) ON DELETE SET NULL, assessed_on timestamptz NOT NULL DEFAULT timezone('utc'::text, now()), total_score numeric(5,2), status public.assessment_status NOT NULL DEFAULT 'en_cours', comment text)`,
  `CREATE TABLE IF NOT EXISTS public.assessment_criteria (id uuid PRIMARY KEY DEFAULT gen_random_uuid(), assessment_id uuid NOT NULL REFERENCES public.assessments(id) ON DELETE CASCADE, label text NOT NULL, score numeric(5,2) NOT NULL, max_score numeric(5,2) NOT NULL, note text)`,
  `CREATE TABLE IF NOT EXISTS public.payrolls (id uuid PRIMARY KEY DEFAULT gen_random_uuid(), teacher_id uuid NOT NULL REFERENCES public.teachers(id) ON DELETE CASCADE, month text NOT NULL, hours_worked numeric(10,2) NOT NULL, gross_amount numeric(10,2) NOT NULL, bonus numeric(10,2) NOT NULL DEFAULT 0, deductions numeric(10,2) NOT NULL DEFAULT 0, net_amount numeric(10,2) NOT NULL, status text NOT NULL DEFAULT 'pending', created_at timestamptz NOT NULL DEFAULT timezone('utc'::text, now()))`,
  `CREATE INDEX IF NOT EXISTS idx_learning_levels_sort_order ON public.learning_levels(sort_order)`,
  `CREATE INDEX IF NOT EXISTS idx_students_level_id ON public.students(level_id)`,
  `CREATE INDEX IF NOT EXISTS idx_students_status ON public.students(status)`,
  `CREATE INDEX IF NOT EXISTS idx_teachers_status ON public.teachers(status)`,
  `CREATE INDEX IF NOT EXISTS idx_courses_level_id ON public.courses(level_id)`,
  `CREATE INDEX IF NOT EXISTS idx_courses_teacher_id ON public.courses(teacher_id)`,
  `CREATE INDEX IF NOT EXISTS idx_assessments_student_id ON public.assessments(student_id)`,
  `CREATE INDEX IF NOT EXISTS idx_assessment_criteria_assessment_id ON public.assessment_criteria(assessment_id)`,
  `CREATE INDEX IF NOT EXISTS idx_payrolls_teacher_id ON public.payrolls(teacher_id)`,
];

async function main() {
  for (const statement of statements) {
    await prisma.$executeRawUnsafe(statement);
  }
  console.log('Schéma pédagogique public synchronisé sans modification du schéma auth.');
}

main()
  .catch((error) => {
    console.error('Échec de la synchronisation du schéma pédagogique :', error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

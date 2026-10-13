-- ==============================================================================
-- DEUTSCH PRO BAMAKO — AUDIT DE SÉCURITÉ & DURCISSEMENT ROW LEVEL SECURITY (RLS)
-- ==============================================================================
-- Exécutez ce script dans Supabase SQL Editor pour verrouiller hermétiquement
-- chaque table publique contre toute faille IDOR ou accès non autorisé.
-- ==============================================================================

-- 1. Helper function pour identifier un compte avec rôle Administrateur
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS BOOLEAN
LANGUAGE sql
SECURITY DEFINER
STABLE
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_id = auth.uid() AND role IN ('admin', 'super_admin')
  ) OR (
    auth.jwt() ->> 'email' IN (SELECT email FROM auth.users WHERE is_super_admin = true)
  );
$$;

-- 2. Activation FORCÉE de RLS sur TOUTES les tables publiques
ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contacts FORCE ROW LEVEL SECURITY;

ALTER TABLE public.b2b_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.b2b_requests FORCE ROW LEVEL SECURITY;

ALTER TABLE public.students ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.students FORCE ROW LEVEL SECURITY;

ALTER TABLE public.teachers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.teachers FORCE ROW LEVEL SECURITY;

ALTER TABLE public.learning_levels ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.learning_levels FORCE ROW LEVEL SECURITY;

ALTER TABLE public.courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.courses FORCE ROW LEVEL SECURITY;

ALTER TABLE public.course_enrollments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.course_enrollments FORCE ROW LEVEL SECURITY;

ALTER TABLE public.student_attendances ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.student_attendances FORCE ROW LEVEL SECURITY;

ALTER TABLE public.assessments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.assessments FORCE ROW LEVEL SECURITY;

ALTER TABLE public.assessment_criteria ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.assessment_criteria FORCE ROW LEVEL SECURITY;

ALTER TABLE public.payrolls ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.payrolls FORCE ROW LEVEL SECURITY;

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.profiles FORCE ROW LEVEL SECURITY;

ALTER TABLE public.experiences ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.experiences FORCE ROW LEVEL SECURITY;

ALTER TABLE public.job_offers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.job_offers FORCE ROW LEVEL SECURITY;

ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_roles FORCE ROW LEVEL SECURITY;

-- 3. Suppression des anciennes politiques permissives
DROP POLICY IF EXISTS "Permettre insertion publique contacts" ON public.contacts;
DROP POLICY IF EXISTS "Acces complet contacts pour admin connecte" ON public.contacts;
DROP POLICY IF EXISTS "Permettre insertion publique b2b" ON public.b2b_requests;
DROP POLICY IF EXISTS "Acces complet b2b pour admin connecte" ON public.b2b_requests;

-- ==============================================================================
-- 4. POLITIQUES STRICTES PAR TABLE
-- ==============================================================================

-- --- CONTACTS ---
-- Visiteurs anonymes et connectés peuvent SEULEMENT insérer
CREATE POLICY "contacts_insert_public"
ON public.contacts FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Seuls les administrateurs peuvent lire, modifier ou supprimer
CREATE POLICY "contacts_admin_full_access"
ON public.contacts FOR ALL
TO authenticated
USING (public.is_admin())
WITH CHECK (public.is_admin());

-- --- B2B REQUESTS ---
CREATE POLICY "b2b_insert_public"
ON public.b2b_requests FOR INSERT
TO anon, authenticated
WITH CHECK (true);

CREATE POLICY "b2b_admin_full_access"
ON public.b2b_requests FOR ALL
TO authenticated
USING (public.is_admin())
WITH CHECK (public.is_admin());

-- --- STUDENTS (Apprenants) ---
-- Un apprenant ne peut lire que son propre dossier. L'admin a accès complet.
CREATE POLICY "students_read_own_record"
ON public.students FOR SELECT
TO authenticated
USING (user_id = auth.uid() OR public.is_admin());

CREATE POLICY "students_update_own_record"
ON public.students FOR UPDATE
TO authenticated
USING (user_id = auth.uid() OR public.is_admin())
WITH CHECK (user_id = auth.uid() OR public.is_admin());

CREATE POLICY "students_admin_manage"
ON public.students FOR INSERT
TO authenticated
WITH CHECK (public.is_admin());

CREATE POLICY "students_admin_delete"
ON public.students FOR DELETE
TO authenticated
USING (public.is_admin());

-- --- TEACHERS (Professeurs) ---
CREATE POLICY "teachers_read_own_or_admin"
ON public.teachers FOR SELECT
TO authenticated
USING (user_id = auth.uid() OR public.is_admin());

CREATE POLICY "teachers_admin_all"
ON public.teachers FOR ALL
TO authenticated
USING (public.is_admin())
WITH CHECK (public.is_admin());

-- --- CATALOGUE : LEARNING LEVELS & COURSES ---
CREATE POLICY "levels_read_all"
ON public.learning_levels FOR SELECT
TO anon, authenticated
USING (true);

CREATE POLICY "levels_admin_modify"
ON public.learning_levels FOR ALL
TO authenticated
USING (public.is_admin())
WITH CHECK (public.is_admin());

CREATE POLICY "courses_read_all"
ON public.courses FOR SELECT
TO anon, authenticated
USING (true);

CREATE POLICY "courses_admin_modify"
ON public.courses FOR ALL
TO authenticated
USING (public.is_admin())
WITH CHECK (public.is_admin());

-- --- COURSE ENROLLMENTS ---
CREATE POLICY "enrollments_read_own"
ON public.course_enrollments FOR SELECT
TO authenticated
USING (
  student_id IN (SELECT id FROM public.students WHERE user_id = auth.uid())
  OR public.is_admin()
);

CREATE POLICY "enrollments_admin_all"
ON public.course_enrollments FOR ALL
TO authenticated
USING (public.is_admin())
WITH CHECK (public.is_admin());

-- --- STUDENT ATTENDANCES (Présences) ---
CREATE POLICY "attendances_read_own"
ON public.student_attendances FOR SELECT
TO authenticated
USING (
  student_id IN (SELECT id FROM public.students WHERE user_id = auth.uid())
  OR public.is_admin()
);

CREATE POLICY "attendances_admin_all"
ON public.student_attendances FOR ALL
TO authenticated
USING (public.is_admin())
WITH CHECK (public.is_admin());

-- --- ASSESSMENTS & CRITERIA (Notes et évaluations) ---
CREATE POLICY "assessments_read_own"
ON public.assessments FOR SELECT
TO authenticated
USING (
  student_id IN (SELECT id FROM public.students WHERE user_id = auth.uid())
  OR public.is_admin()
);

CREATE POLICY "assessments_admin_all"
ON public.assessments FOR ALL
TO authenticated
USING (public.is_admin())
WITH CHECK (public.is_admin());

CREATE POLICY "criteria_read_own"
ON public.assessment_criteria FOR SELECT
TO authenticated
USING (
  assessment_id IN (
    SELECT a.id FROM public.assessments a
    JOIN public.students s ON s.id = a.student_id
    WHERE s.user_id = auth.uid()
  )
  OR public.is_admin()
);

CREATE POLICY "criteria_admin_all"
ON public.assessment_criteria FOR ALL
TO authenticated
USING (public.is_admin())
WITH CHECK (public.is_admin());

-- --- PAYROLLS (Fiches de paie & salaires professeurs) ---
-- Un professeur ne voit QUE ses propres fiches de paie. Impossible pour un tiers d'espionner.
CREATE POLICY "payrolls_read_own_teacher"
ON public.payrolls FOR SELECT
TO authenticated
USING (
  teacher_id IN (SELECT id FROM public.teachers WHERE user_id = auth.uid())
  OR public.is_admin()
);

CREATE POLICY "payrolls_admin_all"
ON public.payrolls FOR ALL
TO authenticated
USING (public.is_admin())
WITH CHECK (public.is_admin());

-- --- PROFILES & EXPERIENCES ---
CREATE POLICY "profiles_read_public"
ON public.profiles FOR SELECT
TO authenticated
USING (true);

CREATE POLICY "profiles_modify_own"
ON public.profiles FOR UPDATE
TO authenticated
USING (id = auth.uid())
WITH CHECK (id = auth.uid());

CREATE POLICY "experiences_modify_own"
ON public.experiences FOR ALL
TO authenticated
USING (profile_id = auth.uid())
WITH CHECK (profile_id = auth.uid());

-- --- USER ROLES ---
CREATE POLICY "roles_read_own"
ON public.user_roles FOR SELECT
TO authenticated
USING (user_id = auth.uid() OR public.is_admin());

CREATE POLICY "roles_admin_all"
ON public.user_roles FOR ALL
TO authenticated
USING (public.is_admin())
WITH CHECK (public.is_admin());

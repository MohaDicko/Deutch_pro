-- ============================================================
-- DEUTSCH PRO BAMAKO — Schéma Supabase Database
-- ============================================================
-- Instructions :
-- 1. Allez sur https://supabase.com -> Créez un projet gratuit
-- 2. Dans le menu de gauche, cliquez sur "SQL Editor"
-- 3. Cliquez sur "New query", collez tout ce script et cliquez "Run"
-- ============================================================

-- 1. Table des demandes de Contact général
CREATE TABLE IF NOT EXISTS public.contacts (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    message TEXT NOT NULL,
    language TEXT DEFAULT 'fr',
    status TEXT DEFAULT 'nouveau' CHECK (status IN ('nouveau', 'en_cours', 'traite', 'archive')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. Table des demandes Partenaires B2B / Entreprises Allemandes
CREATE TABLE IF NOT EXISTS public.b2b_requests (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    company TEXT NOT NULL,
    contact_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    sector TEXT NOT NULL,
    candidates_count TEXT NOT NULL,
    message TEXT,
    status TEXT DEFAULT 'nouveau' CHECK (status IN ('nouveau', 'contacte', 'partenariat_signe', 'archive')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 3. Activation de Row Level Security (RLS) pour la sécurité
ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.b2b_requests ENABLE ROW LEVEL SECURITY;

-- 4. Politiques de sécurité :
-- Permettre aux visiteurs anonymes d'INSÉRER leurs formulaires
CREATE POLICY "Permettre insertion publique contacts" 
ON public.contacts FOR INSERT 
TO anon, authenticated 
WITH CHECK (true);

CREATE POLICY "Permettre insertion publique b2b" 
ON public.b2b_requests FOR INSERT 
TO anon, authenticated 
WITH CHECK (true);

-- Permettre la LECTURE et MODIFICATION uniquement aux administrateurs connectés
CREATE POLICY "Acces complet contacts pour admin connecte" 
ON public.contacts FOR ALL 
TO authenticated 
USING (true) 
WITH CHECK (true);

CREATE POLICY "Acces complet b2b pour admin connecte" 
ON public.b2b_requests FOR ALL 
TO authenticated 
USING (true) 
WITH CHECK (true);

-- Index pour accélérer les recherches et tris par date
CREATE INDEX IF NOT EXISTS idx_contacts_created_at ON public.contacts(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_b2b_created_at ON public.b2b_requests(created_at DESC);

const { Client } = require('pg');
const fs = require('fs');
const path = require('path');

async function main() {
  const envContent = fs.readFileSync(path.join(__dirname, '..', '.env'), 'utf-8');
  const match = envContent.match(/DIRECT_URL="([^"]+)"/);
  if (!match) {
    throw new Error('DIRECT_URL not found in .env');
  }
  const connectionString = match[1];

  const client = new Client({ connectionString });
  
  try {
    await client.connect();
    console.log('Connected to Supabase via pg');
    
    const sql = `
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

      ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;

      DO $$
      BEGIN
        IF NOT EXISTS (
            SELECT 1 FROM pg_policies WHERE tablename = 'contacts' AND policyname = 'Permettre insertion publique contacts'
        ) THEN
            CREATE POLICY "Permettre insertion publique contacts" 
            ON public.contacts FOR INSERT 
            TO anon, authenticated 
            WITH CHECK (true);
        END IF;

        IF NOT EXISTS (
            SELECT 1 FROM pg_policies WHERE tablename = 'contacts' AND policyname = 'Acces complet contacts pour admin connecte'
        ) THEN
            CREATE POLICY "Acces complet contacts pour admin connecte" 
            ON public.contacts FOR ALL 
            TO authenticated 
            USING (true) 
            WITH CHECK (true);
        END IF;
      END
      $$;

      CREATE INDEX IF NOT EXISTS idx_contacts_created_at ON public.contacts(created_at DESC);
    `;

    await client.query(sql);
    console.log('Successfully created contacts table and policies!');
    
  } catch (err) {
    console.error('Error executing SQL:', err);
  } finally {
    await client.end();
  }
}

main();

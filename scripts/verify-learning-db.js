const { createClient } = require('@supabase/supabase-js');
require('@next/env').loadEnvConfig(process.cwd());

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('Erreur: Variables Supabase manquantes dans .env.local');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function main() {
  console.log("Vérification de l'intégration Supabase...");
  
  const { data, error } = await supabase.from('contacts').select('*').limit(1);
  
  if (error) {
    throw new Error("Erreur de connexion à Supabase: " + error.message);
  }
  
  console.log('Intégration DB OK ✅');
}

main()
  .catch((error) => {
    console.error('Intégration DB échouée ❌ :', error.message);
    process.exitCode = 1;
  });

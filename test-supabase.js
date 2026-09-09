const { createClient } = require('@supabase/supabase-js');
const WebSocket = require('ws'); // Ajout de l'implémentation WebSocket pour Node 20

const supabaseUrl = 'https://qxcglthicdvmnqbjszca.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF4Y2dsdGhpY2R2bW5xYmpzemNhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUwNTA3MTYsImV4cCI6MjA5MDYyNjcxNn0.pZSOR9woY8qxrG5hw20-uUl9AT5PeZHMOwG6FCYnH-U';

// On passe le WebSocket en option (requis pour Node < 22)
const supabase = createClient(supabaseUrl, supabaseKey, {
  realtime: { transport: WebSocket }
});

async function testConnection() {
  console.log("Tentative de requête vers Supabase (URL + ANON_KEY)...");
  
  const { data, error } = await supabase.from('test_table_inexistante').select('*').limit(1);
  
  if (error) {
    if (error.code === 'PGRST116' || error.code === 'PGRST119' || error.message.includes('relation "public.test_table_inexistante" does not exist')) {
        console.log("✅ Connexion réussie ! La base de données est accessible et notre clé est valide.");
    } else {
        console.error("❌ Erreur de connexion :", error);
    }
  } else {
    console.log("✅ Connexion réussie ! (Données reçues : " + JSON.stringify(data) + ")");
  }
}

testConnection();

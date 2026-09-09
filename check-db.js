const { createClient } = require('@supabase/supabase-js');
const WebSocket = require('ws'); 

const supabaseUrl = 'https://qxcglthicdvmnqbjszca.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF4Y2dsdGhpY2R2bW5xYmpzemNhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUwNTA3MTYsImV4cCI6MjA5MDYyNjcxNn0.pZSOR9woY8qxrG5hw20-uUl9AT5PeZHMOwG6FCYnH-U';

const supabase = createClient(supabaseUrl, supabaseKey, {
  realtime: { transport: WebSocket }
});

async function checkData() {
  console.log("Vérification du contenu de la base...");
  
  // Contacts
  const { data: contacts, error: err1, count: count1 } = await supabase.from('contacts').select('*', { count: 'exact', head: true });
  
  if (err1) {
    if (err1.code === 'PGRST116' || err1.code === 'PGRST119' || err1.code === 'PGRST205') {
        console.log("- Table 'contacts' : ❌ Non trouvée (le fichier SQL n'a peut-être pas été exécuté)");
    } else {
        console.log("- Table 'contacts' : Erreur (" + err1.message + ")");
    }
  } else {
    console.log("- Table 'contacts' : ✅ Trouvée. Nombre d'enregistrements : " + count1);
  }

  // B2B requests
  const { data: b2b, error: err2, count: count2 } = await supabase.from('b2b_requests').select('*', { count: 'exact', head: true });
  
  if (err2) {
    if (err2.code === 'PGRST116' || err2.code === 'PGRST119' || err2.code === 'PGRST205') {
        console.log("- Table 'b2b_requests' : ❌ Non trouvée");
    } else {
        console.log("- Table 'b2b_requests' : Erreur (" + err2.message + ")");
    }
  } else {
    console.log("- Table 'b2b_requests' : ✅ Trouvée. Nombre d'enregistrements : " + count2);
  }
}

checkData();

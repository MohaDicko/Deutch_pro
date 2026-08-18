// ============================================================
// DEUTSCH PRO BAMAKO — Configuration Supabase
// ============================================================
// ⚠️  REMPLIR CES VALEURS AVEC VOS CREDENTIALS SUPABASE
//     Disponibles sur : https://app.supabase.com/project/_/settings/api
// ============================================================

const SUPABASE_CONFIG = {
  // URL de votre projet Supabase (Project Settings > API > Project URL)
  URL: "https://VOTRE_PROJET_ID.supabase.co",

  // Clé Anon / Public (Project Settings > API > Project API Keys > anon / public)
  ANON_KEY: "VOTRE_SUPABASE_ANON_KEY"
};

// Initialisation du client Supabase
let supabaseClient = null;

if (typeof supabase !== 'undefined' && SUPABASE_CONFIG.URL !== "https://VOTRE_PROJET_ID.supabase.co") {
  try {
    supabaseClient = supabase.createClient(SUPABASE_CONFIG.URL, SUPABASE_CONFIG.ANON_KEY);
    console.log("Supabase Client initialisé avec succès ✅");
  } catch (err) {
    console.error("Erreur initialisation Supabase:", err);
  }
} else {
  console.info("Supabase en attente de configuration des clés API.");
}

// ============================================================
// DEUTSCH PRO BAMAKO — Configuration EmailJS
// ============================================================
// ⚠️  REMPLIR CES VALEURS AVEC VOS CREDENTIALS EMAILJS
//     Disponibles sur : https://dashboard.emailjs.com
// ============================================================

const EMAILJS_CONFIG = {

  // ── Clé publique (Account > API Keys > Public Key) ───────
  PUBLIC_KEY: "VOTRE_PUBLIC_KEY",          // ex: "aBcDeFgHiJkLmNoP"

  // ── Service ID (Email Services > Service ID) ─────────────
  SERVICE_ID: "VOTRE_SERVICE_ID",          // ex: "service_gmail_dpb"

  // ── Template IDs ─────────────────────────────────────────
  // Template formulaire Contact général → reçu à l'adresse Mali
  TEMPLATE_CONTACT: "VOTRE_TEMPLATE_CONTACT",  // ex: "template_contact_dpb"

  // Template formulaire B2B → reçu à l'adresse partenaire Allemagne
  TEMPLATE_B2B: "VOTRE_TEMPLATE_B2B",          // ex: "template_b2b_de"

  // ── Adresses email de réception ──────────────────────────
  TO_EMAIL_MALI: "contact@deutschprobamako.com",   // ← à remplacer
  TO_EMAIL_DE:   "partner@deutschprobamako.de",    // ← à remplacer (hotline DE)

};

const fs = require('fs');
let de = JSON.parse(fs.readFileSync('src/dictionaries/fr.json', 'utf8'));

de.header.nav = {
  accueil: 'Startseite',
  services: 'Leistungen',
  niveaux: 'Niveaus',
  temoignages: 'Erfahrungsberichte',
  b2b: 'B2B'
};
de.header.contactBtn = 'Kontaktieren Sie uns';
de.header.portalBtn = 'Studentenportal';

de.hero = {
  badge: 'Deutsche Exzellenz in Bamako',
  title1: 'Öffnen Sie die Türen nach ',
  title2: 'Deutschland',
  subtitle: 'Lernen Sie Deutsch mit zertifizierten Lehrern. Bereiten Sie sich auf Ihre Goethe-Prüfungen vor und bauen Sie Ihre akademische oder berufliche Zukunft auf.',
  ctaStart: 'Jetzt beginnen',
  ctaB2B: '💼 Für Unternehmen',
  stats: {
    students: 'Ausgebildete Schüler',
    levels: 'Abgedeckte Niveaus',
    success: 'Erfolgsquote'
  },
  certBadge: {
    title: 'Zertifizierungen',
    subtitle: 'Goethe-Zertifikat'
  }
};

de.services = {
  badge: 'Unser Angebot',
  title: 'Exzellente Pädagogik',
  subtitle: 'Auf Ihren Erfolg zugeschnittene Programme, egal ob Sie Student oder Berufstätiger sind.',
  cards: {
    coursIntensifs: {
      title: 'Intensivkurse',
      desc: 'Schneller Fortschritt durch totale Immersion. Ideal für das Studium.'
    },
    preparation: {
      title: 'Goethe-Vorbereitung',
      desc: 'Spezifisches Training für offizielle Zertifizierungen.'
    },
    pro: {
      title: 'Fachsprache Deutsch',
      desc: 'Technisches und berufliches Vokabular (Ärzte, Ingenieure...)'
    },
    integration: {
      title: 'Integration',
      desc: 'Interkulturelle Vorbereitung und Begleitung während Ihrer ersten Monate in Deutschland für eine erfolgreiche Integration.'
    }
  }
};

de.niveaux = {
  badge: 'Ihr Fortschritt',
  title: 'Vom Anfänger zum Experten',
  subtitle: 'Ein strukturierter Weg nach dem Gemeinsamen Europäischen Referenzrahmen (GER).',
  A1: { title: 'A1 - Anfänger', desc: 'Vertraute, alltägliche Ausdrücke und ganz einfache Sätze verstehen und verwenden.' },
  A2: { title: 'A2 - Grundlegende Kenntnisse', desc: 'Sätze und häufig gebrauchte Ausdrücke verstehen.' },
  B1: { title: 'B1 - Fortgeschrittene', desc: 'Die Hauptpunkte verstehen, wenn klare Standardsprache verwendet wird.' },
  B2: { title: 'B2 - Selbstständige', desc: 'Die Hauptinhalte komplexer Texte verstehen.' }
};

de.b2b = {
  badge: 'Unternehmen',
  title: 'Schulen Sie Ihre Teams',
  subtitle: 'Maßgeschneiderte Lösungen für Unternehmen, die mit Deutschland zusammenarbeiten möchten.',
  features: {
    surMesure: 'Auf Ihre Branche zugeschnittene Programme',
    horaires: 'Flexible Zeiten',
    culture: 'Interkulturelles Training'
  },
  form: {
    company: 'Firmenname *', contact: 'Ansprechpartner *', email: 'E-Mail *', phone: 'Telefon *',
    sector: 'Branche *', candidates: 'Bewerber *', message: 'Nachricht', submit: 'Senden',
    loading: 'Wird gesendet...', success: 'Gesendet.', error: 'Fehler.', privacy: '100% vertraulich.'
  },
  sectors: {
    health: 'Gesundheit', craft: 'Handwerk', it: 'IT', gastro: 'Gastronomie', other: 'Andere'
  },
  counts: {
    '1-2': '1 bis 2', '3-5': '3 bis 5', '6-10': '6 bis 10', '10+': '10+'
  },
  cta: 'Angebot anfordern'
};

de.contact = {
  badge: 'Kontakt',
  title: 'Bereit anzufangen?',
  subtitle: 'Kontaktieren Sie uns.',
  form: {
    name: 'Vollständiger Name *', email: 'E-Mail *', phone: 'Telefonnummer', level: 'Gewünschtes Niveau',
    message: 'Ihre Nachricht *', submit: 'Senden', loading: 'Wird gesendet...', success: 'Gesendet.', error: 'Fehler.'
  },
  levels: { A1: 'A1', A2: 'A2', B1: 'B1', B2: 'B2' },
  info: { address: 'Bamako, Mali', email: 'contact@deutchpro.ml', phone: '+223 70 00 00 00', opening: 'Mo-Sa' }
};

de.testimonials = {
  title: 'Was unsere Schüler sagen',
  quote: '"Dank Deutsch Pro Bamako konnte ich mein B1-Niveau in Rekordzeit validieren."',
  author: '- Amadou T.'
};

de.footer = { rights: 'Alle Rechte vorbehalten.', legal: 'Impressum', privacy: 'Datenschutz', admin: 'Admin' };

fs.writeFileSync('src/dictionaries/de.json', JSON.stringify(de, null, 2));

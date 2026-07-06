/*
 * AI Explorer Academy — configuratie & domeinmodel (§5 van de PRD)
 * Tweetalig (NL/EN): interne sleutels blijven gelijk, alleen weergavetekst
 * wordt vertaald. Kaartdata gebruikt de interne sleutels (bijv. superpower
 * "Regie Voeren"), zodat filters en voortgang taal-onafhankelijk werken.
 *
 * Nieuwe kaart toevoegen? Zie cards-nl.js + cards-en.js — hier hoeft niets te wijzigen.
 */
(function () {
  // De 5 AI Superpowers — hoofdindeling van de bibliotheek (§5.1)
  // Let op: de SLEUTEL (bijv. 'Regie Voeren') is intern en blijft gelijk;
  // de weergavenaam (naam) is vertaald en herbenoembaar.
  const SUPERPOWERS = {
    'Ontdekken': {
      key: 'Ontdekken', slug: 'ontdekken',
      icoon: '🔭', kleur: '#F4A62A', kleurZacht: '#FCEBCB',
      naam: { nl: 'Ontdekken', en: 'Discover' },
      kort: {
        nl: 'Stel gekke vragen en ontdek wat AI ervan maakt.',
        en: 'Ask wild questions and see what the AI makes of them.',
      },
      mascotte: { nl: 'Vonk de Vraagvos', en: 'Spark the Question Fox' },
      mascotteIcoon: '🦊',
      afbeelding: 'mascot-ontdekken.png',
      symbool: 'symbol-ontdekken.png',
    },
    'Samenwerken': {
      key: 'Samenwerken', slug: 'samenwerken',
      icoon: '🤝', kleur: '#22B29F', kleurZacht: '#CFF0EB',
      naam: { nl: 'Samenwerken', en: 'Team Up' },
      kort: {
        nl: 'Maak samen met AI iets moois — jij bent de baas.',
        en: 'Make something great together with AI — you are the boss.',
      },
      mascotte: { nl: 'Zoem de Samenbij', en: 'Buzz the Team Bee' },
      mascotteIcoon: '🐝',
      afbeelding: 'mascot-samenwerken.png',
      symbool: 'symbol-samenwerken.png',
    },
    'Controleren': {
      key: 'Controleren', slug: 'controleren',
      icoon: '🔎', kleur: '#3D7BE0', kleurZacht: '#D4E2FA',
      naam: { nl: 'Controleren', en: 'Double-Check' },
      kort: {
        nl: 'Kijk goed: heeft de AI wel gelijk?',
        en: 'Look closely: is the AI actually right?',
      },
      mascotte: { nl: 'Loep de Speuruil', en: 'Lens the Detective Owl' },
      mascotteIcoon: '🦉',
      afbeelding: 'mascot-controleren.png',
      symbool: 'symbol-controleren.png',
    },
    'Verbeteren': {
      key: 'Verbeteren', slug: 'verbeteren',
      icoon: '🛠️', kleur: '#8B5CF6', kleurZacht: '#E5DBFB',
      naam: { nl: 'Verbeteren', en: 'Make It Better' },
      kort: {
        nl: 'Geef de AI tips en maak het samen beter.',
        en: 'Give the AI tips and make it better together.',
      },
      mascotte: { nl: 'Bikkel de Bouwbever', en: 'Chip the Builder Beaver' },
      mascotteIcoon: '🦫',
      afbeelding: 'mascot-verbeteren.png',
      symbool: 'symbol-verbeteren.png',
    },
    // Herbenoemd op verzoek: 'De baas over je AI' (intern blijft de sleutel gelijk).
    'Regie Voeren': {
      key: 'Regie Voeren', slug: 'regie-voeren',
      icoon: '🧭', kleur: '#EC5A67', kleurZacht: '#FBD6D9',
      naam: { nl: 'De baas over je AI', en: 'Boss of Your AI' },
      kort: {
        nl: 'Jij beslist wanneer AI aan of uit mag.',
        en: 'You decide when the AI is switched on or off.',
      },
      mascotte: { nl: 'Kompas de Kapitein-Pinguïn', en: 'Compass the Captain Penguin' },
      mascotteIcoon: '🐧',
      afbeelding: 'mascot-regie-voeren.png',
      symbool: 'symbol-regie-voeren.png',
    },
  };

  const SUPERPOWER_VOLGORDE = [
    'Ontdekken', 'Samenwerken', 'Controleren', 'Verbeteren', 'Regie Voeren',
  ];

  // De 5 niveaus (§5.2). De rangnamen (Explorer…) blijven in beide talen gelijk.
  const NIVEAUS = {
    1: { nummer: 1, naam: 'Explorer', icoon: '🌱', uitleg: { nl: 'Kennismaken en ontdekken', en: 'Getting to know and exploring' } },
    2: { nummer: 2, naam: 'Inventor', icoon: '💡', uitleg: { nl: 'Samen creëren', en: 'Creating together' } },
    3: { nummer: 3, naam: 'Navigator', icoon: '🗺️', uitleg: { nl: 'Analyseren en verbeteren', en: 'Analysing and improving' } },
    4: { nummer: 4, naam: 'Captain', icoon: '⚓', uitleg: { nl: 'Zelfstandig sturen', en: 'Steering on your own' } },
    5: { nummer: 5, naam: 'Master Explorer', icoon: '👑', uitleg: { nl: 'Zelf beslissen wanneer AI wel of niet nodig is', en: 'Deciding yourself when AI is or is not needed' } },
  };

  // Contentcategorieën (§5.3) — sleutel blijft NL, label vertaald.
  const CATEGORIEEN = {
    'Verbeelding': { icoon: '🎨', label: { nl: 'Verbeelding', en: 'Imagination' } },
    'Onderzoek': { icoon: '🔬', label: { nl: 'Onderzoek', en: 'Research' } },
    'Media': { icoon: '🎬', label: { nl: 'Media', en: 'Media' } },
    'Maken': { icoon: '🔨', label: { nl: 'Maken', en: 'Making' } },
    'Mens & Maatschappij': { icoon: '🌍', label: { nl: 'Mens & Maatschappij', en: 'People & Society' } },
    'Buitenwereld': { icoon: '🌳', label: { nl: 'Buitenwereld', en: 'Outside World' } },
  };

  // Werkvormen (§5.4)
  const WERKVORMEN = {
    'Solo': { icoon: '🧒', label: { nl: 'Solo', en: 'Solo' } },
    'Samen': { icoon: '👩‍👧', label: { nl: 'Samen', en: 'Together' } },
    'Duo': { icoon: '👯', label: { nl: 'Duo', en: 'Duo' } },
    'Team': { icoon: '🧑‍🤝‍🧑', label: { nl: 'Team', en: 'Team' } },
    'Klas': { icoon: '🏫', label: { nl: 'Klas', en: 'Class' } },
  };

  // Zintuigen (§5 / zintuiglijk ontwerpen)
  const ZINTUIGEN = {
    'kijken': { icoon: '👀', label: { nl: 'kijken', en: 'looking' } },
    'luisteren': { icoon: '👂', label: { nl: 'luisteren', en: 'listening' } },
    'tekenen': { icoon: '✏️', label: { nl: 'tekenen', en: 'drawing' } },
    'bouwen': { icoon: '🧱', label: { nl: 'bouwen', en: 'building' } },
    'bewegen': { icoon: '🤸', label: { nl: 'bewegen', en: 'moving' } },
    'vertellen': { icoon: '🗣️', label: { nl: 'vertellen', en: 'telling' } },
    'fotograferen': { icoon: '📷', label: { nl: 'fotograferen', en: 'photographing' } },
    'onderzoeken': { icoon: '🔬', label: { nl: 'onderzoeken', en: 'investigating' } },
  };

  // De 11 kerncompetenties (§5.5) — sleutel NL, label vertaald.
  const COMPETENTIES = [
    'Nieuwsgierigheid', 'Samenwerken met AI', 'Kritisch Denken', 'Itereren en Verbeteren',
    'Zelfstandig Oordelen', 'Creativiteit', 'Digitale Weerbaarheid', 'Menselijk Oordeel',
    'Verantwoordelijkheid', 'Zelfvertrouwen', 'AI Bewustzijn',
  ];
  const COMPETENTIE_LABELS = {
    'Nieuwsgierigheid': { nl: 'Nieuwsgierigheid', en: 'Curiosity' },
    'Samenwerken met AI': { nl: 'Samenwerken met AI', en: 'Collaborating with AI' },
    'Kritisch Denken': { nl: 'Kritisch Denken', en: 'Critical Thinking' },
    'Itereren en Verbeteren': { nl: 'Itereren en Verbeteren', en: 'Iterating & Improving' },
    'Zelfstandig Oordelen': { nl: 'Zelfstandig Oordelen', en: 'Independent Judgement' },
    'Creativiteit': { nl: 'Creativiteit', en: 'Creativity' },
    'Digitale Weerbaarheid': { nl: 'Digitale Weerbaarheid', en: 'Digital Resilience' },
    'Menselijk Oordeel': { nl: 'Menselijk Oordeel', en: 'Human Judgement' },
    'Verantwoordelijkheid': { nl: 'Verantwoordelijkheid', en: 'Responsibility' },
    'Zelfvertrouwen': { nl: 'Zelfvertrouwen', en: 'Self-confidence' },
    'AI Bewustzijn': { nl: 'AI Bewustzijn', en: 'AI Awareness' },
  };

  const TIJD_BUCKETS = [
    { label: { nl: 'Kort (±15 min)', en: 'Short (±15 min)' }, test: (min) => min <= 15 },
    { label: { nl: 'Middel (±20 min)', en: 'Medium (±20 min)' }, test: (min) => min > 15 && min <= 22 },
    { label: { nl: 'Lang (25+ min)', en: 'Long (25+ min)' }, test: (min) => min > 22 },
  ];

  window.CONFIG = {
    SUPERPOWERS, SUPERPOWER_VOLGORDE, NIVEAUS, CATEGORIEEN, WERKVORMEN,
    ZINTUIGEN, COMPETENTIES, COMPETENTIE_LABELS, TIJD_BUCKETS,
  };
})();

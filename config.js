/*
 * AI Explorer Academy ‚Äî configuratie & domeinmodel (¬ß5 van de PRD)
 * Tweetalig (NL/EN): interne sleutels blijven gelijk, alleen weergavetekst
 * wordt vertaald. Kaartdata gebruikt de interne sleutels (bijv. superpower
 * "Regie Voeren"), zodat filters en voortgang taal-onafhankelijk werken.
 *
 * Nieuwe kaart toevoegen? Zie cards-nl.js + cards-en.js ‚Äî hier hoeft niets te wijzigen.
 */
(function () {
  // De 5 AI Superpowers ‚Äî hoofdindeling van de bibliotheek (¬ß5.1)
  // Let op: de SLEUTEL (bijv. 'Regie Voeren') is intern en blijft gelijk;
  // de weergavenaam (naam) is vertaald en herbenoembaar.
  const SUPERPOWERS = {
    'Ontdekken': {
      key: 'Ontdekken', slug: 'ontdekken',
      icoon: 'üî≠', kleur: '#F4A62A', kleurZacht: '#FCEBCB',
      naam: { nl: 'Ontdekken', en: 'Discover' },
      kort: {
        nl: 'Stel gekke vragen en ontdek wat AI ervan maakt.',
        en: 'Ask wild questions and see what the AI makes of them.',
      },
      mascotte: { nl: 'Vonk de Vraagvos', en: 'Spark the Question Fox' },
      mascotteIcoon: 'ü¶ä',
    },
    'Samenwerken': {
      key: 'Samenwerken', slug: 'samenwerken',
      icoon: 'ü§ù', kleur: '#22B29F', kleurZacht: '#CFF0EB',
      naam: { nl: 'Samenwerken', en: 'Team Up' },
      kort: {
        nl: 'Maak samen met AI iets moois ‚Äî jij bent de baas.',
        en: 'Make something great together with AI ‚Äî you are the boss.',
      },
      mascotte: { nl: 'Zoem de Samenbij', en: 'Buzz the Team Bee' },
      mascotteIcoon: 'üêù',
    },
    'Controleren': {
      key: 'Controleren', slug: 'controleren',
      icoon: 'üîé', kleur: '#3D7BE0', kleurZacht: '#D4E2FA',
      naam: { nl: 'Controleren', en: 'Double-Check' },
      kort: {
        nl: 'Kijk goed: heeft de AI wel gelijk?',
        en: 'Look closely: is the AI actually right?',
      },
      mascotte: { nl: 'Loep de Speuruil', en: 'Lens the Detective Owl' },
      mascotteIcoon: 'ü¶â',
    },
    'Verbeteren': {
      key: 'Verbeteren', slug: 'verbeteren',
      icoon: 'üõ†Ô∏è', kleur: '#8B5CF6', kleurZacht: '#E5DBFB',
      naam: { nl: 'Verbeteren', en: 'Make It Better' },
      kort: {
        nl: 'Geef de AI tips en maak het samen beter.',
        en: 'Give the AI tips and make it better together.',
      },
      mascotte: { nl: 'Bikkel de Bouwbever', en: 'Chip the Builder Beaver' },
      mascotteIcoon: 'ü¶´',
    },
    // Herbenoemd op verzoek: 'De baas over je AI' (intern blijft de sleutel gelijk).
    'Regie Voeren': {
      key: 'Regie Voeren', slug: 'regie-voeren',
      icoon: 'üß≠', kleur: '#EC5A67', kleurZacht: '#FBD6D9',
      naam: { nl: 'De baas over je AI', en: 'Boss of Your AI' },
      kort: {
        nl: 'Jij beslist wanneer AI aan of uit mag.',
        en: 'You decide when the AI is switched on or off.',
      },
      mascotte: { nl: 'Kompas de Kapitein-Pingu√Øn', en: 'Compass the Captain Penguin' },
      mascotteIcoon: 'üêß',
    },
  };

  const SUPERPOWER_VOLGORDE = [
    'Ontdekken', 'Samenwerken', 'Controleren', 'Verbeteren', 'Regie Voeren',
  ];

  // De 5 niveaus (¬ß5.2). De rangnamen (Explorer‚Ä¶) blijven in beide talen gelijk.
  const NIVEAUS = {
    1: { nummer: 1, naam: 'Explorer', icoon: 'üå±', uitleg: { nl: 'Kennismaken en ontdekken', en: 'Getting to know and exploring' } },
    2: { nummer: 2, naam: 'Inventor', icoon: 'üí°', uitleg: { nl: 'Samen cre√´ren', en: 'Creating together' } },
    3: { nummer: 3, naam: 'Navigator', icoon: 'üó∫Ô∏è', uitleg: { nl: 'Analyseren en verbeteren', en: 'Analysing and improving' } },
    4: { nummer: 4, naam: 'Captain', icoon: '‚öì', uitleg: { nl: 'Zelfstandig sturen', en: 'Steering on your own' } },
    5: { nummer: 5, naam: 'Master Explorer', icoon: 'üëë', uitleg: { nl: 'Zelf beslissen wanneer AI wel of niet nodig is', en: 'Deciding yourself when AI is or is not needed' } },
  };

  // Contentcategorie√´n (¬ß5.3) ‚Äî sleutel blijft NL, label vertaald.
  const CATEGORIEEN = {
    'Verbeelding': { icoon: 'üé®', label: { nl: 'Verbeelding', en: 'Imagination' } },
    'Onderzoek': { icoon: 'üî¨', label: { nl: 'Onderzoek', en: 'Research' } },
    'Media': { icoon: 'üé¨', label: { nl: 'Media', en: 'Media' } },
    'Maken': { icoon: 'üî®', label: { nl: 'Maken', en: 'Making' } },
    'Mens & Maatschappij': { icoon: 'üåç', label: { nl: 'Mens & Maatschappij', en: 'People & Society' } },
    'Buitenwereld': { icoon: 'üå≥', label: { nl: 'Buitenwereld', en: 'Outside World' } },
  };

  // Werkvormen (¬ß5.4)
  const WERKVORMEN = {
    'Solo': { icoon: 'üßí', label: { nl: 'Solo', en: 'Solo' } },
    'Samen': { icoon: 'üë©‚Äçüëß', label: { nl: 'Samen', en: 'Together' } },
    'Duo': { icoon: 'üëØ', label: { nl: 'Duo', en: 'Duo' } },
    'Team': { icoon: 'üßë‚Äçü§ù‚Äçüßë', label: { nl: 'Team', en: 'Team' } },
    'Klas': { icoon: 'üè´', label: { nl: 'Klas', en: 'Class' } },
  };

  // Zintuigen (¬ß5 / zintuiglijk ontwerpen)
  const ZINTUIGEN = {
    'kijken': { icoon: 'üëÄ', label: { nl: 'kijken', en: 'looking' } },
    'luisteren': { icoon: 'üëÇ', label: { nl: 'luisteren', en: 'listening' } },
    'tekenen': { icoon: '‚úèÔ∏è', label: { nl: 'tekenen', en: 'drawing' } },
    'bouwen': { icoon: 'üß±', label: { nl: 'bouwen', en: 'building' } },
    'bewegen': { icoon: 'ü§∏', label: { nl: 'bewegen', en: 'moving' } },
    'vertellen': { icoon: 'üó£Ô∏è', label: { nl: 'vertellen', en: 'telling' } },
    'fotograferen': { icoon: 'üì∑', label: { nl: 'fotograferen', en: 'photographing' } },
    'onderzoeken': { icoon: 'üî¨', label: { nl: 'onderzoeken', en: 'investigating' } },
  };

  // De 11 kerncompetenties (¬ß5.5) ‚Äî sleutel NL, label vertaald.
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
    { label: { nl: 'Kort (< 15 min)', en: 'Short (< 15 min)' }, test: (min) => min < 15 },
    { label: { nl: 'Middel (15‚Äì20 min)', en: 'Medium (15‚Äì20 min)' }, test: (min) => min >= 15 && min <= 20 },
    { label: { nl: 'Lang (> 20 min)', en: 'Long (> 20 min)' }, test: (min) => min > 20 },
  ];

  window.CONFIG = {
    SUPERPOWERS, SUPERPOWER_VOLGORDE, NIVEAUS, CATEGORIEEN, WERKVORMEN,
    ZINTUIGEN, COMPETENTIES, COMPETENTIE_LABELS, TIJD_BUCKETS,
  };
})();

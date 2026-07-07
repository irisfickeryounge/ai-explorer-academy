/*
 * The Neuronauts — meertaligheid (NL/EN).
 *
 * - window.I18N.lang  : huidige taal ('nl' | 'en')
 * - window.I18N.set() : taal wisselen (onthouden in localStorage)
 * - window.L(obj)     : kies obj.nl / obj.en op basis van huidige taal
 * - window.t(key,...) : UI-tekst opzoeken (met optionele parameters)
 *
 * Kaartcontent staat NIET hier maar in cards*.js (NL) en cards-en.js (EN).
 */
(function () {
  const LANG_KEY = 'ai-explorer-academy.lang';
  let lang = 'nl';
  try {
    const saved = localStorage.getItem(LANG_KEY);
    if (saved === 'nl' || saved === 'en') lang = saved;
  } catch (e) {}

  // Kies de juiste vertaling uit een {nl, en}-object.
  function L(obj) {
    if (obj == null) return '';
    if (typeof obj === 'string') return obj;
    return obj[lang] != null ? obj[lang] : (obj.nl != null ? obj.nl : '');
  }

  // UI-teksten. Waarden mogen strings zijn of functies (voor parameters).
  const UI = {
    // Topbar / algemeen
    back: { nl: 'Terug', en: 'Back' },
    toHome: { nl: 'Naar startscherm', en: 'To home screen' },
    passportShort: { nl: 'Logboek', en: 'Logbook' },
    guideShort: { nl: 'Begeleidersmodus', en: 'Grown-up mode' },
    switchLang: { nl: 'Switch to English', en: 'Wissel naar Nederlands' },

    // Home
    heroTitlePre: { nl: 'Word ', en: 'Become a ' },
    heroTitleHi: { nl: 'Neuronaut', en: 'Neuronaut' },
    heroTitlePost: { nl: '!', en: '!' },
    heroSub: {
      nl: 'Ga op avontuur met AI. Jij stelt de vragen, jij maakt de keuzes — de AI helpt alleen mee. <strong>Jij bent de baas.</strong>',
      en: 'Go on an adventure with AI. You ask the questions, you make the choices — the AI only helps. <strong>You are the boss.</strong>',
    },
    chooseSuperpower: { nl: 'Kies je superkracht', en: 'Choose your superpower' },
    adventuresCount: { nl: function (n) { return n + ' avonturen'; }, en: function (n) { return n + ' adventures'; } },
    seeAll: { nl: 'Bekijk alle avonturen', en: 'See all adventures' },
    myPassport: { nl: 'Mijn logboek', en: 'My logbook' },
    adultStrip: {
      nl: '<strong>Voor ouders &amp; leerkrachten</strong> — tips en hoe je meedoet',
      en: '<strong>For parents &amp; teachers</strong> — tips and how to join in',
    },

    // Bibliotheek
    libraryTitle: { nl: 'Avonturen-bibliotheek', en: 'Adventure library' },
    fSuperpower: { nl: 'Superkracht', en: 'Superpower' },
    fLevel: { nl: 'Niveau', en: 'Level' },
    fType: { nl: 'Soort', en: 'Type' },
    fWith: { nl: 'Met wie', en: 'With who' },
    fTime: { nl: 'Tijd', en: 'Time' },
    all: { nl: 'Alles', en: 'All' },
    clearFilters: { nl: '✕ Filters wissen', en: '✕ Clear filters' },
    resultCount: {
      nl: function (n) { return n + ' avontuur' + (n === 1?'': 'en'); },
      en: function (n) { return n + ' adventure' + (n === 1?'': 's'); },
    },
    empty: { nl: 'Geen avonturen gevonden. Probeer een ander filter!', en: 'No adventures found. Try a different filter!' },
    favTitle: { nl: 'Jouw herhaal-favoriet', en: 'Your repeat favourite' },
    doneTitle: { nl: 'Al gedaan', en: 'Already done' },

    // Kaartdetail — stapnamen (6-staps flow; de AI-prompt zit ín stap 3 op de juiste plek)
    steps: {
      nl: ['De Uitdaging', 'De Missie', 'Aan de slag!', 'Jij beslist', 'Reflectie', 'Afsluiting'],
      en: ['The Challenge', 'The Mission', 'Go time!', 'You decide', 'Reflection', 'Wrap-up'],
    },
    stepOf: {
      nl: function (a, b, name) { return 'Stap ' + a + ' van ' + b + ' — ' + name; },
      en: function (a, b, name) { return 'Step ' + a + ' of ' + b + ' — ' + name; },
    },
    stepAria: {
      nl: function (a, b) { return 'Stap ' + a + ' van ' + b; },
      en: function (a, b) { return 'Step ' + a + ' of ' + b; },
    },
    readAloud: { nl: 'Lees voor', en: 'Read aloud' },
    yourMission: { nl: 'Jouw missie', en: 'Your mission' },
    whatToDo: { nl: 'Wat ga je doen?', en: 'What will you do?' },
    checkHint: { nl: 'Vink af wat je gedaan hebt. Fouten maken mag — daar leer je van!', en: 'Tick off what you have done. Mistakes are fine — that is how you learn!' },
    workWithAI: { nl: 'Samenwerken met AI', en: 'Working with AI' },
    promptNow: { nl: 'Nu komt de AI erbij', en: 'Time to bring in the AI' },
    promptToCopy: { nl: 'Prompt om te kopiëren', en: 'Prompt to copy' },
    copyPrompt: { nl: 'Kopieer de prompt', en: 'Copy the prompt' },
    copied: { nl: 'Gekopieerd!', en: 'Copied!' },
    toolNote: {
      nl: function (tools) { return ' Een volwassene plakt deze prompt in ' + tools + '. Doe dit samen — <strong>de AI is geen mens en niet altijd de baas.</strong>'; },
      en: function (tools) { return ' A grown-up pastes this prompt into ' + tools + '. Do it together — <strong>the AI is not a person and not always the boss.</strong>'; },
    },
    nowYouDecide: { nl: 'Nu beslis jij', en: 'Now you decide' },
    noRightWrong: { nl: 'Er is geen goed of fout. Het gaat om <strong>jouw</strong> keuze.', en: 'There is no right or wrong. It is about <strong>your</strong> choice.' },
    reflection: { nl: 'Reflectie', en: 'Reflection' },
    reflectLabel: { nl: 'Schrijf of teken je antwoord (mag ook gewoon in je hoofd!):', en: 'Write or draw your answer (or just think it!):'},
    reflectPlaceholder: { nl: 'Typ hier je gedachten…', en: 'Type your thoughts here…' },
    reflectHint: { nl: 'Dit blijft alleen op dit apparaat. Niemand anders leest het.', en: 'This stays on this device only. No one else reads it.' },
    wellDone: { nl: 'Goed gedaan, Neuronaut!', en: 'Well done, Neuronaut!' },
    whatLearned: { nl: 'Wat je leerde:', en: 'What you learned:'},
    regieLine: { nl: 'Onthoud: de AI hielp mee, maar <strong>jij</strong> was de baas.', en: 'Remember: the AI helped, but <strong>you</strong> were the boss.' },
    wasItFun: { nl: 'Was dit leuk?', en: 'Did you like it?' },
    thumbUp: { nl: 'Duim omhoog', en: 'Thumbs up' },
    thumbDown: { nl: 'Duim omlaag', en: 'Thumbs down' },
    onceMore: { nl: 'Nog een keer!', en: 'Once more!' },
    bonusTitle: { nl: 'Bonus', en: 'Bonus' },
    moreAdventures: { nl: 'Naar meer avonturen', en: 'More adventures' },
    myPassportShort: { nl: 'Mijn logboek', en: 'My logbook' },
    prev: { nl: '‹ Vorige', en: '‹ Previous' },
    next: { nl: 'Volgende ›', en: 'Next ›' },
    imDone: { nl: 'Ik ben klaar! ✓', en: "I'm done! ✓" },

    // Paspoort
    passportTitle: { nl: 'Mijn Neuronauten-logboek', en: 'My Neuronaut logbook' },
    discovered: { nl: 'avonturen ontdekt', en: 'adventures discovered' },
    onceMoreTimes: { nl: 'keer "Nog een keer!"', en: 'times "Once more!"'},
    ofAdventures: {
      nl: function (done, total) { return done + ' van ' + total + ' avonturen ontdekt'; },
      en: function (done, total) { return done + ' of ' + total + ' adventures discovered'; },
    },
    highestLevel: { nl: 'hoogste niveau:', en: 'highest level:'},
    master: { nl: 'Meester!', en: 'Master!' },
    masterTitle: { nl: 'Alle kaarten gedaan!', en: 'All cards done!' },
    stampFav: { nl: function (t) { return 'Herhaal-favoriet: '+ t; }, en: function (t) { return 'Repeat favourite: '+ t; } },
    stampDone: { nl: function (t) { return 'Gedaan: '+ t; }, en: function (t) { return 'Done: '+ t; } },
    stampTodo: { nl: function (t) { return 'Nog te ontdekken: '+ t; }, en: function (t) { return 'Still to discover: '+ t; } },
    passportFoot: {
      nl: 'Het gaat niet om snel of veel — het gaat om <strong>ontdekken en herhalen</strong>. Elke stempel is een avontuur dat jij hebt gedaan.',
      en: 'It is not about fast or many — it is about <strong>discovering and repeating</strong>. Every stamp is an adventure you did.',
    },
    cheer0: { nl: 'Je paspoort is nog leeg — kies een avontuur en verdien je eerste stempel! ', en: 'Your passport is still empty — pick an adventure and earn your first stamp! ' },
    cheer1: { nl: 'Goed bezig, Neuronaut! Je bent net begonnen met ontdekken. ', en: 'Nice going, Neuronaut! You have just begun discovering. ' },
    cheer2: { nl: 'Wauw, je bent echt aan het ontdekken! Blijf nieuwsgierig.', en: 'Wow, you are really discovering! Stay curious.' },
    cheer3: { nl: 'Knap hoor! Je wordt een echte Master Neuronaut. ', en: 'Impressive! You are becoming a true Master Neuronaut. ' },
    cheer4: { nl: 'Alle avonturen ontdekt! Jij bent een echte Master Neuronaut! ', en: 'All adventures discovered! You are a true Master Neuronaut! ' },

    // Begeleidersmodus
    guideTitle: { nl: 'Voor begeleiders', en: 'For grown-ups' },
    guideHow: {
      nl: '<strong>Hoe werkt dit?</strong> The Neuronauts is bedoeld om <em>samen</em> te doen — over de schouder meekijken, niet het kind alleen achter een scherm. Er zit bewust <strong>geen chatbot</strong> in de app. Bij de stap "Samenwerken met AI" kopieert u een kant-en-klare prompt en plakt die in uw eigen AI-tool (ChatGPT, Claude, …).',
      en: '<strong>How does this work?</strong> The Neuronauts is meant to be done <em>together</em> — looking over the shoulder, not a child alone behind a screen. There is deliberately <strong>no chatbot</strong> in the app. At the "Working with AI" step you copy a ready-made prompt and paste it into your own AI tool (ChatGPT, Claude, …).',
    },
    guidePhilo: {
      nl: '<strong>De kern:</strong> AI is het vertrekpunt, niet het eindpunt. Elk avontuur eindigt met een reflectievraag, zodat het kind zelf de regie houdt. Leg gerust uit dat een AI geen mens is, geen gevoelens heeft, en overtuigend kan klinken zónder gelijk te hebben.',
      en: '<strong>The heart of it:</strong> AI is the starting point, not the end point. Every adventure ends with a reflection question, so the child stays in charge. Feel free to explain that an AI is not a person, has no feelings, and can sound convincing without being right.',
    },
    guidePrivacy: {
      nl: '<strong>Privacy:</strong> geen accounts, geen kinderdata. Alle voortgang blijft op dit apparaat.',
      en: '<strong>Privacy:</strong> no accounts, no child data. All progress stays on this device.',
    },
    cardsAndTips: { nl: 'Kaarten &amp; gesprekstips', en: 'Cards &amp; conversation tips' },
    guideTip: { nl: 'Begeleiders-tip:', en: 'Guide tip:'},
    coreSkills: { nl: 'Kerncompetenties:', en: 'Core skills:'},
    threeQuestions: { nl: 'De 3 testvragen', en: 'The 3 test questions' },
    qChild: { nl: 'Kind — "Was dit leuk?"', en: 'Child — "Did you like it?"'},
    qChildNote: { nl: '(vult het kind zelf in bij de afsluiting)', en: '(the child fills this in at the wrap-up)' },
    qParent: { nl: 'Ouder — "Was dit makkelijk te begeleiden?"', en: 'Parent — "Was this easy to guide?"'},
    qTeacher: { nl: 'Leerkracht — "Kan ik dit morgen gebruiken?"', en: 'Teacher — "Could I use this tomorrow?"'},
    childRateTitle: { nl: 'Duim van het kind', en: "Child's thumb" },
    yes: { nl: 'Ja', en: 'Yes' },
    no: { nl: 'Nee', en: 'No' },
    resetBtn: { nl: 'Voortgang op dit apparaat wissen', en: 'Clear progress on this device' },
    resetHint: { nl: 'Handig om opnieuw te testen. Dit verwijdert alleen lokale voortgang, geen bestanden.', en: 'Handy for testing again. This only clears local progress, no files.' },
    resetConfirm: { nl: 'Weet je zeker dat je alle voortgang op dit apparaat wilt wissen?', en: 'Are you sure you want to clear all progress on this device?' },
  };

  // Zoek een UI-tekst op; roep functies aan met de meegegeven parameters.
  function t(key) {
    const entry = UI[key];
    if (entry == null) return key;
    const val = entry[lang] != null ? entry[lang] : entry.nl;
    if (typeof val === 'function') {
      return val.apply(null, Array.prototype.slice.call(arguments, 1));
    }
    return val;
  }

  window.I18N = {
    get lang() { return lang; },
    set: function (next) {
      if (next !== 'nl' && next !== 'en') return;
      lang = next;
      try { localStorage.setItem(LANG_KEY, next); } catch (e) {}
      document.documentElement.lang = next;
    },
    toggle: function () { this.set(lang === 'nl'?'en' : 'nl'); },
  };
  window.L = L;
  window.t = t;

  // Zet de <html lang> meteen goed.
  try { document.documentElement.lang = lang; } catch (e) {}
})();

/*
 * AI Explorer Academy ‚Äî meertaligheid (NL/EN).
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
    passportShort: { nl: 'Explorer Paspoort', en: 'Explorer Passport' },
    guideShort: { nl: 'Begeleidersmodus', en: 'Grown-up mode' },
    switchLang: { nl: 'Switch to English', en: 'Wissel naar Nederlands' },

    // Home
    heroTitlePre: { nl: 'Word een ', en: 'Become an ' },
    heroTitleHi: { nl: 'AI Explorer', en: 'AI Explorer' },
    heroTitlePost: { nl: '!', en: '!' },
    heroSub: {
      nl: 'Ga op avontuur met AI. Jij stelt de vragen, jij maakt de keuzes ‚Äî de AI helpt alleen mee. <strong>Jij houdt de regie.</strong>',
      en: 'Go on an adventure with AI. You ask the questions, you make the choices ‚Äî the AI only helps. <strong>You stay in charge.</strong>',
    },
    chooseSuperpower: { nl: 'Kies je superkracht', en: 'Choose your superpower' },
    adventuresCount: { nl: function (n) { return n + ' avonturen'; }, en: function (n) { return n + ' adventures'; } },
    seeAll: { nl: 'üìö Bekijk alle avonturen', en: 'üìö See all adventures' },
    myPassport: { nl: 'üéñÔ∏è Mijn Explorer Paspoort', en: 'üéñÔ∏è My Explorer Passport' },
    adultStrip: {
      nl: 'üë©‚Äçüè´ <strong>Voor ouders &amp; leerkrachten</strong> ‚Äî tips en hoe je meedoet',
      en: 'üë©‚Äçüè´ <strong>For parents &amp; teachers</strong> ‚Äî tips and how to join in',
    },

    // Bibliotheek
    libraryTitle: { nl: 'üìö Avonturen-bibliotheek', en: 'üìö Adventure library' },
    fSuperpower: { nl: 'Superkracht', en: 'Superpower' },
    fLevel: { nl: 'Niveau', en: 'Level' },
    fType: { nl: 'Soort', en: 'Type' },
    fWith: { nl: 'Met wie', en: 'With who' },
    fTime: { nl: 'Tijd', en: 'Time' },
    all: { nl: 'Alles', en: 'All' },
    clearFilters: { nl: '‚úï Filters wissen', en: '‚úï Clear filters' },
    resultCount: {
      nl: function (n) { return n + ' avontuur' + (n === 1 ? '' : 'en'); },
      en: function (n) { return n + ' adventure' + (n === 1 ? '' : 's'); },
    },
    empty: { nl: 'üîç Geen avonturen gevonden. Probeer een ander filter!', en: 'üîç No adventures found. Try a different filter!' },
    favTitle: { nl: 'Jouw herhaal-favoriet', en: 'Your repeat favourite' },
    doneTitle: { nl: 'Al gedaan', en: 'Already done' },

    // Kaartdetail ‚Äî stapnamen
    steps: {
      nl: ['De Uitdaging', 'De Missie', 'Wat ga je doen?', 'Samenwerken met AI', 'Jouw eigen keuze', 'Reflectie', 'Afsluiting'],
      en: ['The Challenge', 'The Mission', 'What will you do?', 'Working with AI', 'Your own choice', 'Reflection', 'Wrap-up'],
    },
    stepOf: {
      nl: function (a, b, name) { return 'Stap ' + a + ' van ' + b + ' ‚Äî ' + name; },
      en: function (a, b, name) { return 'Step ' + a + ' of ' + b + ' ‚Äî ' + name; },
    },
    stepAria: {
      nl: function (a, b) { return 'Stap ' + a + ' van ' + b; },
      en: function (a, b) { return 'Step ' + a + ' of ' + b; },
    },
    readAloud: { nl: 'üîä Lees voor', en: 'üîä Read aloud' },
    yourMission: { nl: 'üéØ Jouw missie', en: 'üéØ Your mission' },
    whatToDo: { nl: 'üìù Wat ga je doen?', en: 'üìù What will you do?' },
    checkHint: { nl: 'Vink af wat je gedaan hebt. Fouten maken mag ‚Äî daar leer je van!', en: 'Tick off what you have done. Mistakes are fine ‚Äî that is how you learn!' },
    workWithAI: { nl: 'ü§ù Samenwerken met AI', en: 'ü§ù Working with AI' },
    promptToCopy: { nl: 'üìã Prompt om te kopi√´ren', en: 'üìã Prompt to copy' },
    copyPrompt: { nl: 'üìã Kopieer de prompt', en: 'üìã Copy the prompt' },
    copied: { nl: '‚úÖ Gekopieerd!', en: '‚úÖ Copied!' },
    toolNote: {
      nl: function (tools) { return 'üßë‚Äçü§ù‚Äçüßë Een volwassene plakt deze prompt in ' + tools + '. Doe dit samen ‚Äî <strong>de AI is geen mens en niet altijd de baas.</strong>'; },
      en: function (tools) { return 'üßë‚Äçü§ù‚Äçüßë A grown-up pastes this prompt into ' + tools + '. Do it together ‚Äî <strong>the AI is not a person and not always the boss.</strong>'; },
    },
    nowYouDecide: { nl: 'Nu beslis jij', en: 'Now you decide' },
    noRightWrong: { nl: 'Er is geen goed of fout. Het gaat om <strong>jouw</strong> keuze.', en: 'There is no right or wrong. It is about <strong>your</strong> choice.' },
    reflection: { nl: 'üí≠ Reflectie', en: 'üí≠ Reflection' },
    reflectLabel: { nl: 'Schrijf of teken je antwoord (mag ook gewoon in je hoofd!):', en: 'Write or draw your answer (or just think it!):' },
    reflectPlaceholder: { nl: 'Typ hier je gedachten‚Ä¶', en: 'Type your thoughts here‚Ä¶' },
    reflectHint: { nl: 'Dit blijft alleen op dit apparaat. Niemand anders leest het.', en: 'This stays on this device only. No one else reads it.' },
    wellDone: { nl: 'Goed gedaan, Explorer!', en: 'Well done, Explorer!' },
    whatLearned: { nl: 'Wat je leerde:', en: 'What you learned:' },
    regieLine: { nl: 'üß≠ Onthoud: de AI hielp mee, maar <strong>jij</strong> hield de regie.', en: 'üß≠ Remember: the AI helped, but <strong>you</strong> stayed in charge.' },
    wasItFun: { nl: 'Was dit leuk?', en: 'Did you like it?' },
    thumbUp: { nl: 'Duim omhoog', en: 'Thumbs up' },
    thumbDown: { nl: 'Duim omlaag', en: 'Thumbs down' },
    onceMore: { nl: 'üîÅ Nog een keer!', en: 'üîÅ Once more!' },
    bonusTitle: { nl: 'üé≤ Bonus', en: 'üé≤ Bonus' },
    moreAdventures: { nl: 'üìö Naar meer avonturen', en: 'üìö More adventures' },
    myPassportShort: { nl: 'üéñÔ∏è Mijn paspoort', en: 'üéñÔ∏è My passport' },
    prev: { nl: '‚Äπ Vorige', en: '‚Äπ Previous' },
    next: { nl: 'Volgende ‚Ä∫', en: 'Next ‚Ä∫' },
    imDone: { nl: 'Ik ben klaar! ‚úì', en: "I'm done! ‚úì" },

    // Paspoort
    passportTitle: { nl: 'üéñÔ∏è Mijn Explorer Paspoort', en: 'üéñÔ∏è My Explorer Passport' },
    discovered: { nl: 'avonturen ontdekt', en: 'adventures discovered' },
    onceMoreTimes: { nl: 'keer "Nog een keer!"', en: 'times "Once more!"' },
    ofAdventures: {
      nl: function (done, total) { return done + ' van ' + total + ' avonturen ontdekt'; },
      en: function (done, total) { return done + ' of ' + total + ' adventures discovered'; },
    },
    highestLevel: { nl: 'hoogste niveau:', en: 'highest level:' },
    master: { nl: 'üëë Meester!', en: 'üëë Master!' },
    masterTitle: { nl: 'Alle kaarten gedaan!', en: 'All cards done!' },
    stampFav: { nl: function (t) { return 'Herhaal-favoriet: ' + t; }, en: function (t) { return 'Repeat favourite: ' + t; } },
    stampDone: { nl: function (t) { return 'Gedaan: ' + t; }, en: function (t) { return 'Done: ' + t; } },
    stampTodo: { nl: function (t) { return 'Nog te ontdekken: ' + t; }, en: function (t) { return 'Still to discover: ' + t; } },
    passportFoot: {
      nl: 'üå± Het gaat niet om snel of veel ‚Äî het gaat om <strong>ontdekken en herhalen</strong>. Elke stempel is een avontuur dat jij hebt gedaan.',
      en: 'üå± It is not about fast or many ‚Äî it is about <strong>discovering and repeating</strong>. Every stamp is an adventure you did.',
    },
    cheer0: { nl: 'Je paspoort is nog leeg ‚Äî kies een avontuur en verdien je eerste stempel! üöÄ', en: 'Your passport is still empty ‚Äî pick an adventure and earn your first stamp! üöÄ' },
    cheer1: { nl: 'Goed bezig, Explorer! Je bent net begonnen met ontdekken. ‚ú®', en: 'Nice going, Explorer! You have just begun discovering. ‚ú®' },
    cheer2: { nl: 'Wauw, je bent echt aan het ontdekken! Blijf nieuwsgierig. üî≠', en: 'Wow, you are really discovering! Stay curious. üî≠' },
    cheer3: { nl: 'Knap hoor! Je wordt een echte Master Explorer. üëë', en: 'Impressive! You are becoming a true Master Explorer. üëë' },
    cheer4: { nl: 'Alle avonturen ontdekt! Jij bent een echte AI Explorer Master! üèÜ', en: 'All adventures discovered! You are a true AI Explorer Master! üèÜ' },

    // Begeleidersmodus
    guideTitle: { nl: 'üë©‚Äçüè´ Voor begeleiders', en: 'üë©‚Äçüè´ For grown-ups' },
    guideHow: {
      nl: '<strong>Hoe werkt dit?</strong> AI Explorer Academy is bedoeld om <em>samen</em> te doen ‚Äî over de schouder meekijken, niet het kind alleen achter een scherm. Er zit bewust <strong>geen chatbot</strong> in de app. Bij de stap "Samenwerken met AI" kopieert u een kant-en-klare prompt en plakt die in uw eigen AI-tool (ChatGPT, Claude, ‚Ä¶).',
      en: '<strong>How does this work?</strong> AI Explorer Academy is meant to be done <em>together</em> ‚Äî looking over the shoulder, not a child alone behind a screen. There is deliberately <strong>no chatbot</strong> in the app. At the "Working with AI" step you copy a ready-made prompt and paste it into your own AI tool (ChatGPT, Claude, ‚Ä¶).',
    },
    guidePhilo: {
      nl: 'üß≠ <strong>De kern:</strong> AI is het vertrekpunt, niet het eindpunt. Elk avontuur eindigt met een reflectievraag, zodat het kind zelf de regie houdt. Leg gerust uit dat een AI geen mens is, geen gevoelens heeft, en overtuigend kan klinken z√≥nder gelijk te hebben.',
      en: 'üß≠ <strong>The heart of it:</strong> AI is the starting point, not the end point. Every adventure ends with a reflection question, so the child stays in charge. Feel free to explain that an AI is not a person, has no feelings, and can sound convincing without being right.',
    },
    guidePrivacy: {
      nl: 'üîí <strong>Privacy:</strong> geen accounts, geen kinderdata. Alle voortgang blijft op dit apparaat.',
      en: 'üîí <strong>Privacy:</strong> no accounts, no child data. All progress stays on this device.',
    },
    cardsAndTips: { nl: 'Kaarten &amp; gesprekstips', en: 'Cards &amp; conversation tips' },
    guideTip: { nl: 'üí° Begeleiders-tip:', en: 'üí° Guide tip:' },
    coreSkills: { nl: 'Kerncompetenties:', en: 'Core skills:' },
    threeQuestions: { nl: 'De 3 testvragen', en: 'The 3 test questions' },
    qChild: { nl: 'üßí Kind ‚Äî "Was dit leuk?"', en: 'üßí Child ‚Äî "Did you like it?"' },
    qChildNote: { nl: '(vult het kind zelf in bij de afsluiting)', en: '(the child fills this in at the wrap-up)' },
    qParent: { nl: 'üë™ Ouder ‚Äî "Was dit makkelijk te begeleiden?"', en: 'üë™ Parent ‚Äî "Was this easy to guide?"' },
    qTeacher: { nl: 'üè´ Leerkracht ‚Äî "Kan ik dit morgen gebruiken?"', en: 'üè´ Teacher ‚Äî "Could I use this tomorrow?"' },
    childRateTitle: { nl: 'Duim van het kind', en: "Child's thumb" },
    yes: { nl: 'Ja', en: 'Yes' },
    no: { nl: 'Nee', en: 'No' },
    resetBtn: { nl: 'üóëÔ∏è Voortgang op dit apparaat wissen', en: 'üóëÔ∏è Clear progress on this device' },
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
    toggle: function () { this.set(lang === 'nl' ? 'en' : 'nl'); },
  };
  window.L = L;
  window.t = t;

  // Zet de <html lang> meteen goed.
  try { document.documentElement.lang = lang; } catch (e) {}
})();

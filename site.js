/*
 * AI Explorer Academy — website-taalwissel (NL/EN).
 * Deelt de taalkeuze met de app via dezelfde localStorage-sleutel.
 */
(function () {
  var KEY = 'ai-explorer-academy.lang';

  var EN = {
    openApp: 'Open the app', openApp2: 'Open the app', contact: 'Contact',
    kicker: 'For kids 9–12 · together with a grown-up',
    heroTitle: 'Teach kids to be the boss of AI',
    heroSub: '54 playful adventures where kids discover what AI can do, where it goes wrong, and when thinking for yourself beats asking a machine. No chatbot. No account. No addiction. Just curiosity, critical thinking and confidence.',
    tryFree: 'Try it free', tryFree2: 'Try it free', forSchools: 'For schools',
    trust: 'Works on tablet, phone and computer · Dutch and English',
    usp1t: 'No chatbot inside the app',
    usp1: 'Kids never talk to an AI alone. The grown-up copies a ready-made, kid-safe prompt into their own AI tool — and joins in.',
    usp2t: 'No accounts, no kid data',
    usp2: 'All progress stays on your own device. We collect nothing — no names, no emails, no behaviour.',
    usp3t: 'Development, not addiction',
    usp3: 'No streaks, no scores, no guilt. Every adventure ends with a question the child decides for themselves.',
    quote: '"AI output is the starting point. Not the end point. An AI answer is not the truth — it is a proposal. A child is allowed to question. Doubt. Improve. Reject."',
    quoteSrc: '— from our founding manifesto',
    philoSub: 'Kids are growing up in a world full of AI. The question is not whether they will use it, but whether they stay themselves while learning to. That is why we train human skills, not prompt tricks: curious investigation, critical judgement, independent choice.',
    powersTitle: 'Five superpowers, five guides',
    powersSub: 'Every adventure trains one of the five AI superpowers — each with its own mascot as a guide.',
    p1t: 'Discover', p1: 'Ask wild questions and see what AI makes of them — with Spark the Question Fox.',
    p2t: 'Team Up', p2: 'Make something together while the child stays the boss — with Buzz the Team Bee.',
    p3t: 'Double-Check', p3: 'Check facts, catch mistakes, chase sources — with Lens the Detective Owl.',
    p4t: 'Make It Better', p4: 'Give feedback until it is actually good — with Chip the Builder Beaver.',
    p5t: 'Boss of Your AI', p5: 'Decide yourself when AI goes on or off — with Compass the Captain Penguin.',
    howTitle: 'How an adventure works',
    how1t: 'Pick an adventure.', how1: 'Filter by superpower, level, time or "with who". From 15 minutes to a serious mission.',
    how2t: 'Do and think together.', how2: 'The child works through the steps; at the right moment the grown-up pastes our kid-safe prompt into ChatGPT, Claude or any other AI.',
    how3t: 'The child decides.', how3: 'Every adventure ends with an own choice and a reflection question — never with "the AI was right".',
    tryNow: 'Start an adventure',
    ppTitle: 'Stamps, not scores',
    pp1: 'In the Explorer Passport kids collect stamps per superpower. We celebrate repeating and discovering — not speed, not leaderboards.',
    pp2: 'Complete every adventure of a superpower and you become a Master. Complete them all? Master Explorer.',
    schoolTitle: 'For the classroom: ready tomorrow',
    school1: '54 ready-to-use activities (15–30 min), mapped to 11 core competencies for AI literacy',
    school2: 'No accounts or student data — privacy-proof without paperwork',
    school3: 'Duo, team and whole-class formats, plus offline "Outside World" adventures without screens',
    school4: 'Facilitator mode with conversation tips per card, in Dutch and English',
    schoolCta: 'Get in touch',
    priceTitle: 'Affordable for every family',
    priceSub: 'AI literacy should never be a luxury. Trying it stays free, and prices stay low.',
    priceFree: 'Now', priceFreeSub: 'All 54 adventures free to use during our launch period. No account needed — start right away.',
    priceSoon: 'Coming soon', priceSoonAmount: 'Family & school licenses',
    priceSoonSub: 'Fairly priced, with discounts for those who need it. Interested? Let us know and help shape it.',
    priceCta: 'Keep me posted',
    faqTitle: 'Frequently asked questions',
    faq1q: 'Is there a chatbot inside the app?',
    faq1a: 'No — on purpose. Kids never chat with an AI alone. Every adventure includes a ready-made, kid-safe prompt that the grown-up copies into their own AI tool (like ChatGPT or Claude). A grown-up is always part of the conversation.',
    faq2q: 'Which AI tool do I need?',
    faq2a: 'Any AI chat works: the free version of ChatGPT, Claude, Copilot or Gemini. Some "Outside World" adventures use no AI at all — they happen away from the screen.',
    faq3q: 'What about privacy?',
    faq3a: 'There are no accounts and we collect no data. Progress (stamps, favourites) is stored on your own device only. Whatever happens in the AI tool stays within the grown-up’s own account.',
    faq4q: 'What age is this for?',
    faq4a: 'Built for ages 9–12. Younger kids can join with extra help; sharp twelve-year-olds will find plenty of challenge in levels 4 and 5 — from catching a sycophantic AI to red-teaming their own chatbot rules.',
    faq5q: 'Does it work on phones?',
    faq5a: 'Yes — the app works on tablet, phone and computer, and can be installed via "Add to Home Screen". After that it even works offline.',
    finalTitle: 'Ready for the first adventure?',
    finalSub: 'Up and running in one minute — no account, no download, no hassle.',
    finalCta: 'Start the app',
    footTag: 'AI is the starting point, not the end point. The human stays the boss.',
  };

  var NL = {};   // NL staat al in de HTML; we bewaren het origineel voor terugwisselen.

  var lang = 'nl';
  try {
    var saved = localStorage.getItem(KEY);
    if (saved === 'en' || saved === 'nl') lang = saved;
  } catch (e) {}

  var btn = document.getElementById('langBtn');

  function apply(nextLang) {
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (nextLang === 'en') {
        if (NL[key] === undefined) NL[key] = el.innerHTML;
        if (EN[key] !== undefined) el.innerHTML = EN[key];
      } else if (NL[key] !== undefined) {
        el.innerHTML = NL[key];
      }
    });
    document.documentElement.lang = nextLang;
    btn.textContent = nextLang === 'nl' ? 'EN' : 'NL';
    lang = nextLang;
    try { localStorage.setItem(KEY, nextLang); } catch (e) {}
  }

  btn.addEventListener('click', function () { apply(lang === 'nl' ? 'en' : 'nl'); });
  if (lang === 'en') apply('en');
})();

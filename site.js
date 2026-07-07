/*
 * The Neuronauts — website: taalwissel (NL/EN) + mobiel menu.
 * Deelt de taalkeuze met de app via dezelfde localStorage-sleutel.
 * NL staat in de HTML; EN-vertalingen staan hieronder per data-i18n-sleutel.
 */
(function () {
  var KEY = 'ai-explorer-academy.lang';

  var EN = {
    /* ── navigatie & footer (alle pagina's) ── */
    navHome: 'Home', navVisie: 'Our vision', navCurriculum: 'Curriculum',
    navOnderbouwing: 'Evidence', navScholen: 'For schools',
    navFaq: 'FAQ', footBronnen: 'All 20 sources', footLezen: 'Further reading',
    navVisie2: 'Our vision', navCurriculum2: 'Curriculum', navOnderbouwing2: 'Evidence',
    openApp: 'Open the app', openApp2: 'Open the app', contact: 'Contact',
    footProg: 'Programme', footWie: 'For whom', footVertrouwen: 'Trust',
    footScholen: 'Schools', footPrijzen: 'Pricing', footFaq: 'FAQ', footPrivacy: 'Privacy',
    footTag: 'AI is the starting point, not the end point — an ally for your own thinking.',
    footMade: 'Made in the Netherlands, for curious kids everywhere',

    /* ── home ── */
    kicker: 'For kids 9–12 · together with a grown-up',
    heroTitle: 'Teach your kid AI',
    heroSub: 'Not with yet another chatbot, but with 54 playful adventures that grow your child\'s own thinking power: discovering what AI can do, where it goes wrong — and when thinking for yourself wins. So your child stays in charge — and learns to use AI as an ally.',
    tryFree: 'Try it free — no account', tryFree2: 'Try it free', forSchools: 'For schools',
    trust: 'Works on tablet, phone and computer · Dutch and English',
    trustLabel: 'Built on recognised frameworks:',
    stat1: 'adventures', stat2: 'superpowers', stat3: 'min per adventure', stat4: 'kid data collected',
    trust1: 'Dutch draft core objectives for digital literacy (SLO)',
    trust2: 'UNESCO AI competency framework',
    trust3: 'Own development framework · 11 core competencies',
    trust4: 'See all sources',
    usp1t: 'No chatbot, no "AI tutor"',
    usp1: 'With us, kids never talk to an AI alone — not even a built-in AI buddy. The grown-up copies a ready-made, kid-safe prompt into their own AI tool and joins in. Exactly what UNESCO advises for this age.',
    usp2t: 'No accounts, no kid data',
    usp2: 'All progress stays on your own device. We collect nothing — no names, no emails, no behaviour.',
    usp3t: 'Development, not addiction',
    usp3: 'No streaks, no scores, no guilt. Every adventure ends with a question the child decides for themselves.',
    zTitle: 'Your worries are valid. Powerlessness is optional.',
    zSub: 'We will not sugar-coat it — this is what research shows:',
    z1: '<strong>Kids already use AI</strong> — long before anyone explains it to them. 72% of teens have chatted with AI companions.',
    zBron1: 'Common Sense Media, 2025 →',
    z2: '<strong>Unguided AI can harm learning</strong> — students who copy answers score 17% worse the moment the AI is gone.',
    zBron2: 'PNAS field experiment, 2025 →',
    z3: '<strong>School comes later</strong> — the Dutch core objectives become law in 2027. And many adults still feel unsure about AI themselves.',
    zBron3: 'Ministry implementation timeline →',
    zOmslagT: 'That is exactly why this app exists — now.',
    zOmslag: 'You do not need to be an AI expert. Every adventure guides you and your child step by step: your child learns what AI <strong>is</strong> and is not, what it <strong>can</strong> and cannot do, what bias is — and how to catch it yourself. That is how AI becomes an ally of their own thinking. Built on the current state of the science, not on the hype.',
    zCta1: 'Start today — free',
    zCta2: 'See the science behind it',
    pijlersTitle: 'A programme with a backbone',
    pijlersSub: 'Playful on the outside, rigorous on the inside. The Neuronauts is built on an explicit vision, a structured curriculum and the current state of knowledge on AI literacy.',
    pijler1t: 'Pedagogical vision',
    pijler1: 'We optimise for development, not for screen time. Autonomy, critical thinking and confidence come first — laid down in our founding manifesto.',
    pijler1a: 'Read our vision →',
    pijler2t: 'Development framework & learning goals',
    pijler2: 'Five development areas, eleven core competencies, five ascending levels and concrete learning outcomes — every adventure is mapped to them.',
    pijler2a: 'See the curriculum →',
    pijler3t: 'Science & policy',
    pijler3: 'Aligned with the Dutch draft core objectives for digital literacy (SLO), the UNESCO AI competency framework and current research on children & AI.',
    pijler3a: 'See the evidence →',
    quote: '"AI output is the starting point. Not the end point. An AI answer is not the truth — it is a proposal. A child is allowed to question. Doubt. Improve. Reject."',
    quoteSrc: '— from our founding manifesto',
    philoSub: 'Kids are growing up in a world full of AI. The question is not whether they will use it, but whether they keep developing their own thinking power, judgement and confidence along the way. That is why we train human skills, not prompt tricks — so AI becomes an ally of their own thinking, not a replacement for it.',
    powersTitle: 'Five superpowers, five guides',
    powersSub: 'Every adventure trains one of the five AI superpowers — each with its own mascot as a guide.',
    p1t: 'Discover', p1: 'Ask wild questions and see what AI makes of them — with Spark the Question Fox.',
    p2t: 'Team Up', p2: 'Turn AI into an ally: create together while your child stays the inventor — with Buzz the Team Bee.',
    p3t: 'Double-Check', p3: 'Check facts, catch mistakes, chase sources — with Lens the Detective Owl.',
    p4t: 'Make It Better', p4: 'Give feedback until it is actually good — with Chip the Builder Beaver.',
    p5t: 'Boss of Your AI', p5: 'Decide yourself when AI goes on or off — with Compass the Captain Penguin.',
    howTitle: 'How an adventure works',
    how1t: 'Pick an adventure.', how1: 'Filter by superpower, level, time or "with who". From 15 minutes to a serious mission.',
    how2t: 'Do and think together.', how2: 'The child works through the steps; at the right moment the grown-up pastes our kid-safe prompt into ChatGPT, Claude or any other AI.',
    how3t: 'The child decides.', how3: 'Every adventure ends with an own choice and a reflection question — never with "the AI was right".',
    tryNow: 'Start an adventure',
    ppTitle: 'Stamps, not scores',
    pp1: 'In the Neuronaut logbook kids collect stamps per superpower. We celebrate repeating and discovering — not speed, not leaderboards.',
    pp2: 'Complete every adventure of a superpower and you become a Master. Complete them all? Master Neuronaut.',
    schoolTitle: 'For the classroom: ready tomorrow',
    school1: '54 ready-to-use activities (15–30 min), mapped to 11 core competencies for AI literacy',
    school2: 'No accounts or student data — privacy-proof without paperwork',
    school3: 'Duo, team and whole-class formats, plus offline "Outside World" adventures without screens',
    school4: 'Facilitator mode with conversation tips per card, in Dutch and English',
    school5: '<strong>No AI expertise needed.</strong> Your students may be faster with AI than you are — with this programme, you are the one teaching them to be critical of it. The card leads the conversation.',
    schoolCta: 'Get in touch',
    priceTitle: 'Affordable for every family',
    priceSub: 'AI literacy should never be a luxury. Trying it stays free, and prices stay low.',
    priceFree: 'Now', priceFreeSub: 'All 54 adventures free to use during our launch period. No account needed — start right away.',
    priceSoon: 'Coming soon', priceSoonAmount: 'Family & school licenses',
    priceSoonSub: 'Fairly priced, with discounts for those who need it. Interested? Let us know and help shape it.',
    priceCta: 'Keep me posted',
    faqTitle: 'Frequently asked questions — answered honestly',
    faqSub: 'The biggest questions parents and teachers have about kids and AI, without dodging.',
    fqGroep1: 'Learning & thinking',
    fqD1q: 'Will AI make my child lazy or dumb — will they still learn to think for themselves?',
    fqD1a: 'That worry is valid: 7 in 10 parents share it, and research shows that mindlessly copying AI answers genuinely harms learning. But the reverse is also true: children who understand how AI works and question it critically actually train their thinking. That is why our app contains no chatbot that hands out answers — every adventure ends with your child\'s own judgement. AI becomes an ally of thinking, not a replacement. <a href="onderbouwing.html">See the research →</a>',
    fqD2q: 'My child gets AI to do their homework — is that cheating?',
    fqD2a: 'More than half of teens use AI for schoolwork, and most genuinely do not know where the line is between help and takeover. Banning does not solve that; understanding does. In the adventures your child discovers how AI text is made and why thinking for yourself produces something different — so the conversation about honest use becomes normal at home and at school.',
    fqD3q: 'My child thinks the computer really knows or feels things. Is that bad?',
    fqD3a: 'No — it is normal child development: children naturally give AI human traits and sometimes trust it more than a person. That is exactly why we let them look behind the scenes. When the magic gives way to understanding — it is patterns, not feelings — the blind trust disappears by itself.',
    fqD4q: 'Am I preparing my child well for a future full of AI?',
    fqD4a: 'Nobody can predict the jobs of 2040. What is certain: AI literacy is becoming a mandatory learning objective, and children who understand AI rather than just use it stand stronger. Half an hour a week of discovering together is concrete, doable preparation — without your child needing grown-up tools yet.',
    fqGroep2: 'Safety & wellbeing',
    fqV1q: 'Is ChatGPT safe for my child? From what age is it even allowed?',
    fqV1a: 'Open chatbots like ChatGPT are officially 13+ (with parental consent up to 18) and not designed for children. This app is built precisely for ages 9–12: no open chatbot, no account, no free-form AI conversations. The AI moment runs through your own account, with a ready-made kid-safe prompt — and you are right there.',
    fqV2q: 'My child talks to an AI like it is a friend. Should I be worried?',
    fqV2a: 'Your instinct is right: experts agree AI should not replace human contact, especially for children. That is why our app deliberately contains no AI character that builds a bond. Better still: in the adventures your child learns exactly why a chatbot is not a friend — it imitates a person. And everything happens together with a real human: you.',
    fqV3q: 'Will my child see nonsense or inappropriate things through AI?',
    fqV3a: 'AI always sounds confident — even when it is wrong, which is extra misleading for children. Our app itself cannot say anything inappropriate (there is no chatbot in it), and the adventures teach your child to check instead of believe: spotting errors, chasing sources, even catching the AI sucking up.',
    fqV4q: 'What happens to my child\'s data?',
    fqV4a: 'Nothing — and that is not marketing talk but design: no account, no stored conversations, no data leaving the device. 84% of parents fear misuse of kid data by AI companies; we solved that problem by simply collecting nothing. <a href="privacy.html">Read our privacy promise →</a>',
    fqV5q: 'How do I protect my child against deepfakes and fake images?',
    fqV5a: 'Banning does not help here — recognising does. In the adventures your child learns in an age-appropriate way (no shocking examples) how AI can create and manipulate images. So "is this real?" becomes a normal question before secondary school, where they will genuinely encounter it.',
    fqGroep3: 'For the classroom',
    fqK1q: 'I will have to teach AI literacy soon, but I lack the knowledge and time.',
    fqK1a: 'You do not have to invent this yourself. The 54 adventures are ready-made classroom activities of 15–30 minutes, built on the Dutch core objective 22D and UNESCO guidelines, without accounts or privacy paperwork. The card leads the conversation and facilitator mode gives you talking points per adventure. No AI expertise needed.',
    fqK2q: 'How do I recognise AI work without falsely accusing students?',
    fqK2a: 'Honest answer: detection software is unreliable, and half of students fear being falsely accused. The sustainable route is a class that has learned together what AI may and may not do for you — then talking about your own work becomes normal instead of an interrogation. That is exactly what you build with this series.',
    fqK3q: 'Does AI make education impersonal — will I be replaced?',
    fqK3a: 'In this programme no AI teaches: you lead the conversation, the app only provides the assignments. AI literacy lessons are about human skills — judgement, doubt, creativity — and only a teacher can model those. It strengthens your role, exactly as UNESCO\'s principles for AI in education argue.',
    fqGroep4: 'Practical',
    fqP1q: 'Which AI tool do I need?',
    fqP1a: 'Any AI chat works: the free version of ChatGPT, Claude, Copilot or Gemini. Some "Outside World" adventures use no AI at all — they happen away from the screen.',
    fqP2q: 'Does it work on phones and tablets?',
    fqP2a: 'Yes — the app works on tablet, phone and computer, and can be installed via "Add to Home Screen". After that it even works offline.',
    fqP3q: 'What does it cost?',
    fqP3a: 'During our launch period everything is free, no account needed. Family and school licenses are coming — fairly priced, with discounts for those who need it. <a href="#wachtlijst">Join the waitlist →</a>',
    finalTitle: 'Ready for the first adventure?',
    finalSub: 'Up and running in one minute — no account, no download, no hassle.',
    finalCta: 'Start the app',
    finalWl: 'Or join the waitlist →',

    /* ── testimonials (voorbeeldquotes) ── */
    testTitle: 'What families and schools say',
    testSub: 'From our first test rounds with parents, teachers and kids.',
    test1: '"For the first time my daughter and I had a real conversation about what AI actually is. She caught the chatbot making a mistake — and was proud of it all week."',
    test1n: 'Parent of a 10-year-old<small>after the adventure "Spot the Slip-Up"</small>',
    test2: '"Finally material I can use in class tomorrow without developing anything myself. The conversation tips per card are pure gold."',
    test2n: 'Grade 5/6 teacher<small>about facilitator mode</small>',
    test3: '"The AI said exactly what I wanted to hear and that\'s how I caught it. I\'m the boss of it now."',
    test3n: 'Explorer, age 11<small>after "The Suck-Up Test"</small>',

    /* ── wachtlijst ── */
    wlTitle: 'Join the waitlist — for your family or your school',
    wlSub: 'Be the first to hear about family and school licenses, new adventures and the Master Neuronaut diploma. We only email when there is truly something to tell.',
    wlNaam: 'Name', wlMail: 'Email address', wlRol: 'I am…',
    wlRol1: 'Parent / carer', wlRol2: 'Teacher', wlRol3: 'School leader / board', wlRol4: 'Otherwise curious',
    wlBericht: 'Anything we should know? (optional)',
    wlVerstuur: 'Put me on the waitlist',
    wlPrivacy: 'We only use your details to keep you posted — never for anything else. See our <a href="privacy.html">privacy promise</a>.',
    footWachtlijst: 'Waitlist',
    schoolCta2: 'Or email us directly',

    /* ── bedankt.html ── */
    bTitle: 'You are on the list!',
    bSub: 'Thank you — we will email you as soon as there is news. And no more often than that, promise.',
    bTip: 'Want to start right away? The app is ready for you — free, no account.',
    bCta: 'Start the first adventure',
    bTerug: 'Back to the website',

    /* ── visie.html ── */
    vTitle: 'Our pedagogical vision',
    vSub: 'Why The Neuronauts exists — and why we deliberately do not build an addictive learning app.',
    v1: 'Children are growing up in a world where AI will be everywhere: at school, at home, in their future work, in media and friendships. The question is not whether children will grow up with AI. The question is: <strong>how do we make sure they keep developing and trusting their own brain — and learn to use AI as an ally instead of leaning on it?</strong>',
    v2: 'Much of today’s AI education focuses on buttons and tricks: how to use ChatGPT, how to write a prompt. Useful, but not enough. We believe children need more than technical skills. <strong>They need human skills.</strong>',
    vMissieT: 'Our mission',
    vMissie: 'We help children grow into independent, creative and critical thinkers who can consciously collaborate with AI. Not by making them dependent on AI — but by strengthening their autonomy.',
    vVisieT: 'AI literacy is about being human',
    v3: 'AI literacy is not about technology. AI literacy is about being human in a world with technology. That is why we teach children to investigate curiously, experiment creatively, judge critically, choose independently and take responsibility.',
    vNietT: 'What we deliberately do not build',
    vNiet1: 'No addiction machine and no product that maximises screen time.',
    vNiet2: 'No system that makes children dependent on AI.',
    vNiet3: 'No platform that works through guilt, streaks or emotional manipulation.',
    v4: '<strong>We do not optimise for attention. We optimise for development.</strong> At every design decision we do not ask "how do we keep children hooked longer?", but "how do we help children become more independent?"',
    vKernT: 'Our core conviction',
    vKern: 'AI output is the starting point. Not the end point. An AI answer is not the truth — it is a proposal, an idea, a possibility. A child is allowed to question. Doubt. Improve. Reject. Start over.',
    vPedT: 'Six pedagogical principles',
    vPed1: 'We train autonomy<small>The goal is not more AI use, but better choices.</small>',
    vPed2: 'We grow critical thinkers<small>Children learn to investigate, not to accept blindly.</small>',
    vPed3: 'We develop discernment<small>Fact and opinion, human and machine, help and dependence.</small>',
    vPed4: 'We stimulate creativity<small>AI supports creativity — it does not replace it.</small>',
    vPed5: 'We normalise experimenting<small>Mistakes are not failure. Mistakes are information.</small>',
    vPed6: 'We strengthen confidence<small>"I can do this myself. I get to form my own judgement."</small>',
    vBewustT: 'AI awareness: awareness, not distrust',
    vBewust1: 'A key part of the curriculum is AI awareness. Children learn that AI is not a person, has no feelings, is not a friend, parent or therapist — and has no intentions of its own. They learn to recognise that AI can sound convincing without being right, and that AI strongly tends to agree with people.',
    vBewust2: 'Children also examine their own relationship with AI: when does AI help me? When does it distract me? When do I want to talk to a person — and when do I want to think for myself? These are fundamental questions for the generation growing up now.',
    vUitkomstT: 'When have we succeeded?',
    vUitkomst1: 'We do not want to deliver children who are good at prompts. We want to help children grow into people who stay curious, think independently, judge critically, dare to experiment creatively, take responsibility and use technology consciously.',
    vUitkomst2: 'When a child says afterwards: <strong>"I know when AI helps me, but I also know when I want to think for myself"</strong> — then the programme has succeeded.',
    vNaarCurriculum: 'See the curriculum',

    /* ── curriculum.html ── */
    cTitle: 'Curriculum & learning goals',
    cSub: 'Not loose games, but a structured development framework: five development areas, eleven core competencies and five ascending levels.',
    c1: 'The Neuronauts is built on its own <strong>AI Literacy Development Framework</strong> for children aged 8–12. It describes the knowledge, skills and attitudes children need to deal with AI consciously, critically and independently. The focus is explicitly on <em>using, understanding and judging</em> AI in daily life — not on programming.',
    cPedT: 'Pedagogical principles',
    cPed1: 'Active learning<small>Children learn by investigating, trying and reflecting.</small>',
    cPed2: 'Experience-based<small>New insights come from concrete experiences.</small>',
    cPed3: 'Autonomy<small>Children learn to make their own choices.</small>',
    cPed4: 'Safe space to experiment<small>Making mistakes is part of learning.</small>',
    cPed5: 'Guided reflection<small>Children examine their own thinking.</small>',
    cGebT: 'Five development areas',
    cGeb0: 'Every adventure in the app trains one of the five development areas. Each area has its own mascot as a recognisable guide.',
    cTh1: 'Development area', cTh2: 'What the child learns',
    cGeb1t: 'Discover', cGeb1: 'Exploring possibilities, developing curiosity and learning to ask questions.',
    cGeb2t: 'Team Up', cGeb2: 'Using AI as a tool in creative and investigative activities — without handing over the lead.',
    cGeb3t: 'Double-Check', cGeb3: 'Judging information, comparing sources and spotting mistakes.',
    cGeb4t: 'Make It Better', cGeb4: 'Giving feedback, iterating and exploring alternatives.',
    cGeb5t: 'Boss of Your AI', cGeb5: 'Making conscious choices about using AI — including the choice not to use it.',
    cCompT: 'Eleven core competencies',
    cComp0: 'Within the development areas children work on eleven core competencies. Every adventure card explicitly names which competencies are trained — also visible to the facilitator.',
    cC1: 'Curiosity', cC2: 'Collaborating with AI', cC3: 'Critical thinking', cC4: 'Iterating and improving',
    cC5: 'Independent judgement', cC6: 'Creativity', cC7: 'Digital resilience', cC8: 'Human judgement',
    cC9: 'Responsibility', cC10: 'Self-confidence', cC11: 'AI awareness',
    cNivT: 'Five ascending levels',
    cNivTh1: 'Level', cNivTh2: 'Name', cNivTh3: 'The child learns…',
    cNiv1: 'getting to know and exploring', cNiv2: 'creating together', cNiv3: 'analysing and improving',
    cNiv4: 'steering independently', cNiv5: 'deciding when AI is or is not needed',
    cUitT: 'Learning outcomes',
    cUit0: 'After completing the programme, a child can:',
    cUit1: 'use AI purposefully and judge AI output critically;',
    cUit2: 'verify information and compare sources;',
    cUit3: 'substantiate their own choices and improve AI results;',
    cUit4: 'handle digital tools responsibly;',
    cUit5: 'reflect on the role of AI in daily life;',
    cUit6: 'explain what AI is and is not — and recognise when AI sounds convincing without being right.',
    cKwalT: 'Quality requirements per adventure',
    cKwal0: 'Each of the 54 adventures passes the same quality check before entering the library:',
    cKwal1: 'Sparks curiosity · the child does something active · room for own judgement · AI supports, never steers · strengthens named core competencies · always ends with the child deciding.',
    cKwal2: 'In addition, every card contains a kid-safe AI prompt with built-in guardrails (short answers, honesty about uncertainty, "do not take over the child’s work"), a conversation tip for the facilitator and a bonus variant for replay.',
    cNaarOnderbouwing: 'See the scientific evidence',

    /* ── onderbouwing.html ── */
    oTitle: 'Scientific evidence',
    oSub: 'How our programme aligns with the new Dutch core objectives, international frameworks and current research on children & AI — with 20 verified sources.',
    o1: 'In the Netherlands, AI literacy is no longer optional. In 2025 SLO delivered the <strong>final draft core objectives for digital literacy</strong>, including an explicit AI objective for primary education: <em>"The pupil explores AI"</em> (objective 22D). Legal enactment is expected on 1 August 2027 — and the Ministry of Education, SLO and the primary school council are urging schools to start <strong>now</strong>.',
    o2: '<strong>We are not waiting.</strong> The Neuronauts makes that assignment concrete today: 54 fully developed adventures in which children aged 9–12 explore AI, judge it critically and learn to use it responsibly — exactly what objective 22D asks.',
    oNote: 'Note: the sources below are described in Dutch; most link to English-language documents.',
    oWatT: 'What the research tells us',
    oW1t: 'Without guardrails, children learn less',
    oW1: 'A large field experiment (PNAS, 2025, ±1,000 students) shows: unrestricted chatbot access improved practice scores by 48%, but <strong>test scores without AI dropped 17%</strong>. With didactic guardrails the negative effect disappeared. That is exactly why, with us, AI output is the starting point of the child’s own thinking — never the end point.',
    oW2t: 'Pedagogical design makes the difference',
    oW2: 'The OECD (Digital Education Outlook 2026) and a Harvard RCT (Scientific Reports, 2025) reach the same conclusion: AI can strengthen learning, but only when embedded in clear didactic principles. That is why every adventure card is pedagogically structured, with guidance and reflection.',
    oW3t: 'Ages 9–12 are the moment',
    oW3: 'Young children attribute human traits to AI (MIT Media Lab), and 72% of teens have already used AI companions (Common Sense Media, 2025). Teaching children to look critically before their teens gives them a head start in resilience.',
    oW4t: 'Guided, never left alone',
    oW4: 'UNESCO recommends age limits and guidance for young users of generative AI. With us, children never chat unsupervised: a grown-up is always involved, within a structured assignment and a kid-safe prompt.',
    oMeta: 'We maintain our own literature review covering 65+ studies and institutional reports (UNICEF, UNESCO, OECD, APA) on AI and the developing child. Its central thread: <strong>the question is not whether children use AI to learn, but which interaction design during learning is wise.</strong> Frictionless answer machines harm learning; guided, structured assignments strengthen it. Every one of our 54 adventures is designed on exactly that principle.',
    oNlT: 'The Netherlands: policy & the education field',
    oIntT: 'International frameworks',
    oWetT: 'Research: children & AI',
    oSlot: '<strong>To be fair:</strong> the organisations above do not endorse or certify our programme — and we claim nowhere that they do. What we do: demonstrably align our development framework and 54 adventures with these frameworks and insights, and make that mapping visible to facilitators per adventure.',
    oNaarCurriculum: 'See how this shapes the curriculum',

    /* ── privacy.html ── */
    prTitle: 'Our privacy promise',
    prSub: 'The shortest privacy statement you have ever read — because we simply collect nothing.',
    pr1: '<strong>The Neuronauts collects no personal data.</strong> No accounts, no names, no email addresses, no behavioural data, no ad tracking, no analytics cookies. Nothing.',
    prHoeT: 'How is that possible?',
    prHoe1: '<strong>Progress stays on the device.</strong> Stamps, favourites and reflection answers are stored locally in the browser only (localStorage). Clear your browser data and the progress is gone — as it should be.',
    prHoe2: '<strong>No chatbot in the app.</strong> Children never talk to an AI through us. The grown-up uses their own AI tool; what happens there falls under the grown-up’s account and settings.',
    prHoe3: '<strong>No external scripts or pixels.</strong> The website and app load no ad networks, social media pixels or third-party trackers.',
    prHoe5: '<strong>Waitlist.</strong> Only if you voluntarily join the waitlist, your name and email address are forwarded to our email via the form service FormSubmit. We use them solely to keep you posted and share them with no one.',
    prHoe4: '<strong>Hosting.</strong> The site is hosted via GitHub Pages; standard server logs (such as IP addresses) may be processed by the hosting provider, as with virtually every website.',
    prTipT: 'Tip for parents and teachers',
    prTip: 'For the AI part of the adventures, preferably use your own account with an AI provider, and do not share the child’s personal data in it. Our prompts are written so that no personal information is needed — at most an age for the language level.',
    prVragenT: 'Questions?',
    prVragen: 'Feel free to reach out via <a href="mailto:irisfickeryounge@gmail.com">email</a>.',
  };

  var NL = {};
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
    if (btn) btn.textContent = nextLang === 'nl' ? 'EN' : 'NL';
    lang = nextLang;
    try { localStorage.setItem(KEY, nextLang); } catch (e) {}
  }

  if (btn) btn.addEventListener('click', function () { apply(lang === 'nl' ? 'en' : 'nl'); });
  if (lang === 'en') apply('en');

  /* Mobiel menu */
  var menuBtn = document.getElementById('menuBtn');
  var menu = document.getElementById('menu');
  if (menuBtn && menu) {
    menuBtn.addEventListener('click', function () { menu.classList.toggle('open'); });
    menu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { menu.classList.remove('open'); });
    });
  }
})();

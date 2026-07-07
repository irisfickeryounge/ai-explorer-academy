/*
 * The Neuronauts — cards-en.js (v3, 54 kaarten)
 * Kernfilosofie in elke kaart: AI is het vertrekpunt, niet het eindpunt — het kind beslist.
 * Nieuwe kaart toevoegen: object toevoegen met uniek id (en dezelfde id in cards-en.js).
 * Veld prompt_na_stap bepaalt waar de AI-prompt in de stappenlijst verschijnt (0 = ervoor).
 */
window.CARDS_EN = [
  {
    "id": "ontdekken-01",
    "prompt_na_stap": 3,
    "titel": "The Why Machine",
    "superpower": "Ontdekken",
    "niveau": 1,
    "categorie": "Onderzoek",
    "werkvorm": [
      "Samen"
    ],
    "tijdsduur": "15 min",
    "competenties": [
      "Nieuwsgierigheid",
      "AI Bewustzijn"
    ],
    "uitdaging": "Why is the sky blue? Why is tape sticky? Somewhere in your head lives a question nobody has ever answered for you. Today, you set it free.",
    "missie": "By the end, you'll have an answer to your weirdest why-question ever — and you'll have decided for yourself whether you believe it.",
    "stappen": [
      "Think up three why-questions you're genuinely curious about.",
      "Pick the weirdest one as your champion question.",
      "Ask it to the AI together with a grown-up.",
      "Play scientist: ask the AI how sure it really is.",
      "Decide for yourself: do I believe this, or do I want to know more?"
    ],
    "samenwerken_met_ai": "The AI is your answer helper: it gives you a starting point. But you are the question-asker AND the judge — you decide whether the answer is good enough.",
    "ai_prompt": "You are a cheerful explainer for a child aged [age]. The child has a why-question: [your why-question]. Answer in no more than 4 short, simple sentences. Say honestly how sure you are: very sure, a bit sure, or actually nobody knows. Then ask one curious question back, so the child keeps thinking for themselves. Do not take over the thinking.",
    "eigen_keuze": "Which of your three questions wins the title 'weirdest question ever' — and why that one?",
    "ai_tools": "an AI chat, together with a grown-up",
    "wat_leer_je": "You're allowed to ask ANYTHING — and you decide for yourself whether to believe the answer.",
    "reflectievraag": "What do you do when the AI says 'I'm not sure about that' — and who gets to decide what you believe then?",
    "zintuigen": [
      "vertellen",
      "luisteren"
    ],
    "begeleiders_tip": "Have the child guess out loud BEFORE the AI answers. Ask: \"What do you think the answer is?\" Watch that the child doesn't just nod along with the AI's answer — doubt is a win here.",
    "bonus": "Do it again? This time ask a why-question about yourself (why do I have to yawn when someone else yawns?) — and see if the AI dares to be just as sure about YOU."
  },
  {
    "id": "ontdekken-02",
    "prompt_na_stap": 2,
    "titel": "The Animal Mix-Up Machine",
    "superpower": "Ontdekken",
    "niveau": 2,
    "categorie": "Verbeelding",
    "werkvorm": [
      "Samen"
    ],
    "tijdsduur": "15–20 min",
    "competenties": [
      "Nieuwsgierigheid",
      "Creativiteit"
    ],
    "uitdaging": "Deep in the jungle lives a beast with spikes AND wings. Nobody has ever seen it. Makes sense — it only starts existing when you invent it today.",
    "missie": "By the end, you'll have a drawing of a brand-new animal that never existed anywhere — with a name, a superpower and its very own sound.",
    "stappen": [
      "Pick two animals that would never appear in the same photo.",
      "Ask the AI to mix them into one brand-new creature.",
      "Play animal inventor: change at least one thing about the AI's idea.",
      "Draw the animal exactly the way YOU see it in your head.",
      "Invent your animal's sound and act it out loud."
    ],
    "samenwerken_met_ai": "The AI is your idea factory and tosses out a starter animal. You are the inventor who decides how the animal REALLY looks, sounds and is called.",
    "ai_prompt": "Pretend you are a wacky animal factory for a child aged [age]. Mix a [animal 1] with a [animal 2] into one new animal. Give it a funny name and tell what it can do in no more than 4 short, cheerful sentences. Then ask what the child wants to change about the animal — and describe nothing more until the child has answered. The animal belongs to the child, not to you.",
    "eigen_keuze": "What will you change about the AI's animal: the head, the color, the superpower — and why exactly that?",
    "ai_tools": "an AI chat, together with a grown-up — plus paper and markers",
    "wat_leer_je": "AI can spark ideas, but only your imagination makes the animal real.",
    "reflectievraag": "Whose animal is this really: yours or the AI's — and where can you see that in your drawing?",
    "zintuigen": [
      "luisteren",
      "tekenen",
      "vertellen"
    ],
    "begeleiders_tip": "Let the child sketch first, BEFORE you read out the AI's description. Ask: \"What did you come up with that the AI didn't see?\" Watch that the child doesn't start copying the AI's version — the difference is the gold.",
    "bonus": "Do it again? Mix three animals at once this time — or let someone at home pick the two animals, so you're stuck with an impossible combination."
  },
  {
    "id": "ontdekken-03",
    "prompt_na_stap": 1,
    "titel": "Hunt for the Fake Word",
    "superpower": "Ontdekken",
    "niveau": 3,
    "categorie": "Onderzoek",
    "werkvorm": [
      "Duo"
    ],
    "tijdsduur": "20 min",
    "competenties": [
      "Nieuwsgierigheid",
      "Kritisch Denken"
    ],
    "uitdaging": "Some words are so strange they sound made up. And sometimes the AI sneaks in one it really did make up. Who's fooling who here?",
    "missie": "By the end, you'll have a list of proven-real words, at least one suspicion you chased down — and one brand-new word of your own.",
    "stappen": [
      "Ask the AI for three super-strange real words and what they mean.",
      "Play word detective: point at the word that feels most fake.",
      "Look up every word in a real dictionary.",
      "Cross out anything that was wrong and crown what turned out real.",
      "Invent one new word yourself that really SHOULD exist."
    ],
    "samenwerken_met_ai": "The AI delivers the words; you're the detective with the dictionary. It's not the AI but YOUR checking that decides what counts as real.",
    "ai_prompt": "You are helping a child aged [age] who is playing word detective. Give 3 very strange but real English words with their meanings, each with a funny example sentence. Keep each explanation under 2 sentences, simple and friendly. Not sure whether one of the words really exists? Say so honestly — the child is going to check up on you anyway.",
    "eigen_keuze": "Which word do you suspect the most — and what gives it away: the sound, the meaning, or your gut feeling?",
    "ai_tools": "an AI chat plus a real dictionary (paper or online)",
    "wat_leer_je": "Checking isn't a chore, it's a treasure hunt — and you're good at it.",
    "reflectievraag": "How did it feel to check the AI instead of just believing it — and who had the last word in the end?",
    "zintuigen": [
      "luisteren",
      "onderzoeken",
      "vertellen"
    ],
    "begeleiders_tip": "AI sometimes invents words or meanings for real. Celebrate loudly when that happens: \"You caught an AI!\" Ask: \"What made this word smell fishy to you?\" Make sure the child handles the dictionary themselves.",
    "bonus": "Do it again? Flip it around: invent two fake words and pick one real one, then test whether the grown-up — or the AI! — can spot the fake."
  },
  {
    "id": "ontdekken-06",
    "prompt_na_stap": 5,
    "titel": "The Sound Hunter",
    "superpower": "Ontdekken",
    "niveau": 3,
    "categorie": "Buitenwereld",
    "werkvorm": [
      "Solo",
      "Duo"
    ],
    "tijdsduur": "20 min",
    "competenties": [
      "Nieuwsgierigheid",
      "AI Bewustzijn"
    ],
    "uitdaging": "Shhh. Close your eyes. Count the sounds around you. Three? Four? A real sound hunter finds ten — without a single screen.",
    "missie": "By the end, you'll have ten captured sounds on your hunting list — and you'll know which sound no computer could ever copy.",
    "stappen": [
      "Sneak outside or to an open window; screens stay indoors.",
      "Hunt like a sound spy for ten different sounds.",
      "Draw or write down every catch on your hunting list.",
      "Pick the sound a computer could never, ever copy.",
      "Only afterwards — if you want to — talk over your catch with the AI."
    ],
    "samenwerken_met_ai": "During the hunt, the AI stays home: your ears do all the work. Only afterwards may the AI join the conversation about your catch — as a chat-later buddy, not as a hunter.",
    "ai_prompt": "I am [age] years old and I just captured these sounds outside, without a screen: [your list]. You are my chat-later buddy. Pick the sound from my list that a computer would find hardest to copy and explain why in no more than 3 simple sentences. Be honest if you're not sure. Then ask me which sound I liked best — my ears were there, yours weren't.",
    "eigen_keuze": "Which sound from your list would you save if it were the very last sound on Earth?",
    "ai_tools": "no AI needed — you do this with your own ears in the real world (chatting about it afterwards is allowed)",
    "wat_leer_je": "Your ears pick up things no computer in the world can sense.",
    "reflectievraag": "What did you hear that an AI never could have — and what does that tell you about who should go exploring: you or the computer?",
    "zintuigen": [
      "luisteren",
      "bewegen",
      "onderzoeken"
    ],
    "begeleiders_tip": "Start with one minute of total silence together — for kids that's already an adventure. Ask: \"Which sound did you hear for the very first time just now?\" Make sure the screen only comes out AFTER the hunt.",
    "bonus": "Do it again? Hunt in the dark this time, or hunt for the ten QUIETEST sounds you can find — those are the hardest to catch."
  },
  {
    "id": "ontdekken-07",
    "titel": "Inside the Engine Room",
    "superpower": "Ontdekken",
    "niveau": 3,
    "categorie": "Onderzoek",
    "werkvorm": [
      "Samen",
      "Klas"
    ],
    "tijdsduur": "20 min",
    "competenties": [
      "Nieuwsgierigheid",
      "AI Bewustzijn",
      "Kritisch Denken"
    ],
    "uitdaging": "Secret: an AI doesn't think. It guesses. Word by word, it guesses what probably comes next. Today you climb into the engine room and play its own game — against it.",
    "missie": "By the end, you'll have seen with your own eyes how an AI builds sentences — and you'll know why it sometimes gets things so wrong while sounding so convincing.",
    "stappen": [
      "Write down five half-finished sentences, like 'The pirate slowly opened the...'.",
      "For each sentence, predict which word comes next and write down all your guesses.",
      "Have the AI finish the same sentences, one word at a time.",
      "Compare: where did you guess the same, where totally different?",
      "Build one sentence where the AI's guess is guaranteed to fail — and test it."
    ],
    "samenwerken_met_ai": "Today the AI is your lab rat: you're studying how it guesses. Once you see through the game, a smooth-sounding sentence will never impress you again.",
    "ai_prompt": "You are a word-prediction machine in an experiment with kids who are [age] years old. I'll give you half a sentence. Reply with only the word you find most likely, plus two alternatives, each labeled 'very likely' or 'less likely'. No stories, no explanations — until I say 'explain!'. Then, in 3 simple sentences max, honestly explain that this is how you always work: guessing which word comes next, without understanding what it means. First half sentence: [half sentence].",
    "prompt_na_stap": 3,
    "eigen_keuze": "Which sentence will you use to trip up the machine — and what's your trick: something from your class, a weird secret, or pure nonsense?",
    "ai_tools": "an AI chat, together with an adult — plus paper for the guesses",
    "wat_leer_je": "An AI predicts words; it doesn't understand them. Once you know that, you'll read AI answers differently forever.",
    "reflectievraag": "Now that you know the AI guesses instead of knows — what does that change about how you treat its answers from now on?",
    "zintuigen": [
      "vertellen",
      "onderzoeken",
      "luisteren"
    ],
    "begeleiders_tip": "Pick half sentences with both a predictable and an unpredictable ending — the contrast is the lesson. Ask: \"Why do you think the AI guessed this word?\" The aha moment: the AI picks the most common word, not the most true one. Say that out loud.",
    "bonus": "Want another round? Flip it: have the AI create half sentences for you, then play human vs. human — who predicts your classmates better, you or the machine?"
  },
  {
    "id": "ontdekken-09",
    "titel": "The Living Time Machine",
    "superpower": "Ontdekken",
    "niveau": 3,
    "categorie": "Buitenwereld",
    "werkvorm": [
      "Duo"
    ],
    "tijdsduur": "30–40 min",
    "competenties": [
      "Nieuwsgierigheid",
      "Menselijk Oordeel",
      "AI Bewustzijn"
    ],
    "uitdaging": "There's a time machine living near you. It drinks coffee, has wrinkles, and remembers things that aren't on any website. Interview it — before the AI convinces you it already knows everything.",
    "missie": "By the end, you'll have done a real interview about the old days — and proven which memories no AI owns.",
    "stappen": [
      "Come up with five questions about the old days: school, candy, punishments, games, music.",
      "Interview a grandparent or older neighbor — no screens allowed.",
      "Write down the three answers that surprised you most.",
      "Then ask the AI the same five questions.",
      "Compare both interviews: what did only the real human know?"
    ],
    "samenwerken_met_ai": "The real interview happens with real ears and a real human. The AI only gets a turn afterward — as comparison material, not as a replacement.",
    "ai_prompt": "I'm [age] years old and I just interviewed my [grandpa/grandma/neighbor] about the old days. Now I'm asking you the same questions: [your five questions]. Answer each in 3 sentences max, in simple words. Be crystal clear about what you are: you haven't lived through anything, so say with each answer whether it's general knowledge or a guess. At the end, ask me which answer from the real human would surprise you — and honestly admit you can't know their memories.",
    "prompt_na_stap": 4,
    "eigen_keuze": "Which memory from your interview deserves to be kept — and how will you make that happen: write it down, record it, or pass it on?",
    "ai_tools": "no AI needed during the interview — you do this with a real human; the comparison comes after",
    "wat_leer_je": "An AI knows 'the old days' from books. A human knows them from their own life — and you can hear the difference instantly.",
    "reflectievraag": "What gets lost if kids someday only ask AI what the old days were like — and what can you do about that right now?",
    "zintuigen": [
      "luisteren",
      "vertellen",
      "onderzoeken"
    ],
    "begeleiders_tip": "Practice follow-up questions beforehand: \"And then what? What did it smell like? How much did it cost?\" The gold is in details that were never documented anywhere. Afterward, compare out loud: the AI gave tidy general answers, the human gave one unique life. That contrast is the whole card.",
    "bonus": "Want another round? Interview someone else with exactly the same five questions — two people, two childhoods. Discover that 'the old days' don't exist, only stories from real people."
  },
  {
    "id": "ontdekken-04",
    "prompt_na_stap": 1,
    "titel": "Captain of the Idea Storm",
    "superpower": "Ontdekken",
    "niveau": 4,
    "categorie": "Maken",
    "werkvorm": [
      "Solo"
    ],
    "tijdsduur": "25 min",
    "competenties": [
      "Nieuwsgierigheid",
      "Creativiteit",
      "Zelfstandig Oordelen"
    ],
    "uitdaging": "Getting ten ideas is easy. Throwing nine of them overboard — THAT'S captain's work. Do you dare to choose?",
    "missie": "By the end, you'll have actually built one idea you chose yourself with stuff from around the house — and scrapped nine ideas with total conviction.",
    "stappen": [
      "Ask the AI for ten building ideas using stuff from around the house.",
      "Cross out nine ideas like a captain — no regrets.",
      "Pick the idea that makes YOU itch to start, not the 'best' one.",
      "Build it and change anything you like better along the way.",
      "Inspect your creation: what turned out cooler than planned?"
    ],
    "samenwerken_met_ai": "The AI is your idea storm: it blows in ten directions at once. You are the captain who sets the course — the AI gets no say in which idea wins.",
    "ai_prompt": "A child aged [age] is looking for building inspiration. Give exactly 10 numbered craft or building ideas using ordinary things from around the house, each in one short sentence. Do not pick a favorite and do not say which idea is best — the child is the captain who chooses. After that, your job is done: no extra tips unless the child asks.",
    "eigen_keuze": "Which idea did you pick — and which 'more sensible' idea did it beat?",
    "ai_tools": "an AI chat for the ideas — the building you do yourself",
    "wat_leer_je": "Choosing is a superpower: daring to say 'this one — and none of the rest' out of ten ideas.",
    "reflectievraag": "Which was harder: getting ideas or throwing ideas away — and who's better at the throwing-away part, you or the AI?",
    "zintuigen": [
      "kijken",
      "bouwen",
      "onderzoeken"
    ],
    "begeleiders_tip": "Don't steer toward the 'best' idea — not even with your eyebrows. Ask: \"Which idea keeps nagging at you?\" Watch whether the child chooses with their heart — that's exactly the point.",
    "bonus": "Do it again? Ask the AI for ten deliberately TERRIBLE ideas this time — and turn the very worst one into something good anyway."
  },
  {
    "id": "ontdekken-08",
    "titel": "The Missing Inventors",
    "superpower": "Ontdekken",
    "niveau": 4,
    "categorie": "Onderzoek",
    "werkvorm": [
      "Duo",
      "Samen"
    ],
    "tijdsduur": "25–30 min",
    "competenties": [
      "Kritisch Denken",
      "AI Bewustzijn",
      "Nieuwsgierigheid"
    ],
    "uitdaging": "Ask an AI for ten famous inventors and something strange happens: people go missing. Whole continents. Almost all the women. Today you investigate who fell off the list — and why.",
    "missie": "By the end, you'll have examined an AI list like a real researcher, tracked down at least two forgotten inventors, and decided for yourself what this means for every AI list out there.",
    "stappen": [
      "Ask the AI for the ten most famous inventors of all time.",
      "Tally the list: how many women, how many people from outside Europe and America?",
      "Look up two inventors the list missed.",
      "Confront the AI: why were they missing?",
      "Judge the excuse: honest answer or smooth talk?",
      "Think of other lists that might have the same gap."
    ],
    "samenwerken_met_ai": "The AI delivers the list, you run the investigation around it. The machine repeats whatever got written down most often — you discover who never got written down at all.",
    "ai_prompt": "You're part of a research project by a kid who is [age] years old, investigating blind spots in AI. Question 1: name the ten most famous inventors ever, just names and their invention, one line per person. Only comment afterward, when the kid confronts you about who's missing. Then be completely honest in 4 simple sentences max: explain that your knowledge comes from texts where some people show up far more often than others. No excuses, no self-pity, and don't take over the kid's investigation.",
    "prompt_na_stap": 1,
    "eigen_keuze": "Which forgotten inventor deserves a statue, in your opinion — and what weighs more in your pick: the invention, or the being forgotten?",
    "ai_tools": "an AI chat plus a real search engine, library, or adult for the counter-investigation",
    "wat_leer_je": "An AI repeats the gaps in its reading material. Spot the gaps, and you know more than the machine.",
    "reflectievraag": "If this list is already skewed, what questions do you want to ask about every AI answer about people from now on — and whose job is it to bring those forgotten names back?",
    "zintuigen": [
      "onderzoeken",
      "kijken",
      "vertellen"
    ],
    "begeleiders_tip": "Examples to help a kid who gets stuck: Hedy Lamarr, Marie Curie, Al-Jazari, Granville Woods. Ask: \"Is this the AI's fault, or the fault of the books the AI learned from?\" That distinction is the real lesson — bias lives in data, not in evil intent.",
    "bonus": "Want another round? Test a different list: ten famous scientists, athletes, or composers — and track which list has the biggest gap. You're the gap counter now."
  },
  {
    "id": "ontdekken-11",
    "titel": "The Memory Experiment",
    "superpower": "Ontdekken",
    "niveau": 4,
    "categorie": "Onderzoek",
    "werkvorm": [
      "Solo",
      "Duo"
    ],
    "tijdsduur": "20–25 min",
    "competenties": [
      "Nieuwsgierigheid",
      "AI Bewustzijn",
      "Digitale Weerbaarheid"
    ],
    "uitdaging": "Tell an AI three things about yourself. Talk about something else. Ask for them back. Does it remember? What about tomorrow? What about in a new chat? Today you dissect a machine's memory — like a real scientist.",
    "missie": "By the end, you'll have mapped what an AI remembers and forgets with an experiment you designed yourself — and set your own rules for what you'll ever trust it with.",
    "stappen": [
      "Make up three harmless test facts, like an invented favorite animal.",
      "Tell them to the AI, then chat about something else for five minutes.",
      "Quiz the AI: what were those three facts again?",
      "Open a brand-new chat and quiz it again.",
      "Write down your results: what stuck, what vanished, what surprised you?",
      "Set your own rule: this I'll tell an AI, this never."
    ],
    "samenwerken_met_ai": "The AI is your test subject and doesn't know a thing — exactly how a good experiment works. You design the setup, you draw the conclusions, and you decide what you'll trust machines with from now on.",
    "ai_prompt": "I'm [age] years old and you're the test subject in my memory experiment — that's all I'm telling you. Just respond normally to what I say and ask, in 4 simple sentences max per turn. When I shout 'experiment over!' at the end, honestly explain how your memory works: what you remember within this chat, what happens in a new chat, and what happens to my words on the computers you run on. Simple words, no sugarcoating.",
    "prompt_na_stap": 2,
    "eigen_keuze": "What rule do you set for yourself: what is an AI allowed to know about you, and where does your never-tell list begin?",
    "ai_tools": "an AI chat, together with an adult — use made-up test facts, never real secrets",
    "wat_leer_je": "What you tell an AI doesn't just disappear — and you can find out for yourself where it goes.",
    "reflectievraag": "Now that you know how the machine's memory works: what should never end up in there, and why do you draw the line exactly where you do?",
    "zintuigen": [
      "onderzoeken",
      "vertellen",
      "luisteren"
    ],
    "begeleiders_tip": "Make sure the test facts are invented — that's the meta-lesson right there: practice with fake data, not real personal info. Afterward, calmly discuss that chats live on company servers. Not to scare anyone, but to build the should-I-share-this reflex.",
    "bonus": "Want another round? Repeat the experiment with a second AI app and compare the memories. Two machines, two outcomes — which one earns your trust more, and why?"
  },
  {
    "id": "ontdekken-05",
    "prompt_na_stap": 5,
    "titel": "Expedition Unplugged",
    "superpower": "Ontdekken",
    "niveau": 5,
    "categorie": "Buitenwereld",
    "werkvorm": [
      "Solo"
    ],
    "tijdsduur": "20–30 min",
    "competenties": [
      "Nieuwsgierigheid",
      "Zelfstandig Oordelen",
      "AI Bewustzijn"
    ],
    "uitdaging": "The great explorers had no AI. Neither did your great-grandma. Yet they discovered more than most people with a phone. Today you test their secret.",
    "missie": "By the end, you'll have made three real discoveries using only your own senses — and decided for yourself whether AI gets to add anything afterwards.",
    "stappen": [
      "Put every screen away and declare yourself expedition leader.",
      "Scout indoors or outdoors for three things you always walk right past.",
      "Study them like an explorer: up close and for a long time.",
      "Draw or memorize what you'd never noticed before.",
      "Only then decide: may AI add anything, or was this complete?"
    ],
    "samenwerken_met_ai": "On this expedition you deliberately travel without AI — that's the whole art of it. Afterwards, YOU are the one who decides whether the AI even gets to speak.",
    "ai_prompt": "Only for afterwards, if you choose: I am [age] years old and I just discovered this on my own, without a screen: [your three discoveries]. Do not give me explanations and do not give me answers. Only ask me 3 short, curious questions that make me look even more closely. My discovery stays mine.",
    "eigen_keuze": "Will you ask the AI anything afterwards, or keep this discovery entirely to yourself — and why?",
    "ai_tools": "no AI needed — you do this in the real world",
    "wat_leer_je": "The best discovery machine in existence is already inside your head.",
    "reflectievraag": "When does AI make a discovery bigger, and when does it make it smaller — and who should decide that, every single time?",
    "zintuigen": [
      "kijken",
      "bewegen",
      "onderzoeken"
    ],
    "begeleiders_tip": "Join in with screens away yourself — kids instantly sense when this isn't fair. Ask: \"What did you only see once you kept looking?\" Watch the final moment: the 'AI in or out' choice must TRULY belong to the child.",
    "bonus": "Do it again? Run the expedition somewhere you find 'boring' — the hallway, the shed, the parking lot. Boring doesn't exist for real explorers."
  },
  {
    "id": "ontdekken-10",
    "titel": "Can a Machine Know Anything?",
    "superpower": "Ontdekken",
    "niveau": 5,
    "categorie": "Mens & Maatschappij",
    "werkvorm": [
      "Klas",
      "Team"
    ],
    "tijdsduur": "30 min",
    "competenties": [
      "Kritisch Denken",
      "AI Bewustzijn",
      "Zelfstandig Oordelen"
    ],
    "uitdaging": "Your calculator always gives the right answer. But does it know that 7 times 8 is 56? Does a thermometer know it's cold? And what about that AI chat? Welcome to the hardest question of this century — and you're going to take it on anyway.",
    "missie": "By the end, each of you will have your own well-argued position on whether an AI can know anything — and you'll have put the AI itself on the witness stand.",
    "stappen": [
      "First discuss: what is 'knowing' anyway? Does your bike know the way to school?",
      "Split into two groups and collect arguments: 'AI can know' versus 'AI can't know'.",
      "Question the AI itself as a witness in your investigation.",
      "Weigh the testimony: can you believe a suspect talking about themselves?",
      "Each write your own position in exactly one sentence."
    ],
    "samenwerken_met_ai": "The AI is both research subject and witness here — a witness you can't just believe, especially about itself. The thinking and the final verdict stay yours.",
    "ai_prompt": "You are a witness in a philosophical investigation by kids who are [age] years old. Their question: can you 'know' something, the way a human knows something? Answer in 4 simple sentences max and be radically honest: explain that you predict text and can't feel or experience anything yourself, and that even experts disagree about what that means. Don't pretend to have an inner world. Don't decide anything for the kids. End every turn with one short question back that makes them think deeper.",
    "prompt_na_stap": 3,
    "eigen_keuze": "Where do you draw the line between 'being able to recite something' and 'really knowing it' — and what example from your own life proves your line?",
    "ai_tools": "an AI chat, together with an adult — as a witness, not a referee",
    "wat_leer_je": "The biggest questions about AI don't have an answer sheet yet — your thought-out opinion genuinely counts.",
    "reflectievraag": "The AI itself said it can't experience anything — but how much is testimony worth from a witness that only predicts words, and what does your own scale say?",
    "zintuigen": [
      "vertellen",
      "luisteren",
      "onderzoeken"
    ],
    "begeleiders_tip": "There is no right answer, and you can say so out loud — philosophers aren't done with this one either. Make sure kids respond to arguments, not to each other. Great deep-dive: \"If the AI says 'I don't know anything', does it know that?\" Let that paradox itch for a while.",
    "bonus": "Want another round? Grab a new question from the same drawer: can an AI 'mean' something? Can it lie if it doesn't know anything? One question at a time — this drawer is deep enough for a whole year."
  },
  {
    "id": "samenwerken-01",
    "prompt_na_stap": 1,
    "titel": "The Drawing Buddy",
    "superpower": "Samenwerken",
    "niveau": 1,
    "categorie": "Verbeelding",
    "werkvorm": [
      "Samen"
    ],
    "tijdsduur": "15 min",
    "competenties": [
      "Samenwerken met AI",
      "Creativiteit"
    ],
    "uitdaging": "Blank paper. Pencil ready. And then... nothing. Everyone knows that empty-page feeling. But from today, you have a buddy who always has a starter idea.",
    "missie": "By the end, you'll have a drawing that started with an AI idea — but is packed with things only you could have dreamed up.",
    "stappen": [
      "Ask your drawing buddy (the AI) for one funny drawing idea.",
      "Draw the starter idea as well as you can.",
      "Become a secret decorating agent: smuggle in three ideas of your own.",
      "Invent a title the AI never could have thought of.",
      "Point out what's yours and what came from the AI."
    ],
    "samenwerken_met_ai": "The AI only gives the starter idea — nothing more. The pencil, the three extras and the title: those are all yours. You draw, you decide.",
    "ai_prompt": "You are a kind drawing buddy for a child aged [age]. Give exactly one cheerful, easy drawing idea in no more than 2 sentences. Don't describe too many details — the child needs room to invent plenty of their own. End with: 'And the rest is up to you!' Do not make a drawing yourself and do not give an example.",
    "eigen_keuze": "Which three inventions of your own will you smuggle into the drawing — and which one is the most 'totally you'?",
    "ai_tools": "an AI chat, together with a grown-up — plus paper and pencils",
    "wat_leer_je": "A starter idea can be a gift — but the artwork is made by you.",
    "reflectievraag": "What do you notice first in your drawing: the AI's idea or your additions — so whose drawing is it, really?",
    "zintuigen": [
      "luisteren",
      "tekenen"
    ],
    "begeleiders_tip": "Hang the drawing up somewhere — that makes the making matter. Ask: \"Which part came entirely out of your head?\" Watch that the child doesn't ask whether the AI 'likes' the drawing; your applause is jury enough.",
    "bonus": "Do it again? Ask for a drawing idea about something that does NOT exist — and draw without an eraser: every 'mistake' has to become something new."
  },
  {
    "id": "samenwerken-02",
    "prompt_na_stap": 2,
    "titel": "The Story with Two Bosses",
    "superpower": "Samenwerken",
    "niveau": 2,
    "categorie": "Verbeelding",
    "werkvorm": [
      "Samen"
    ],
    "tijdsduur": "20 min",
    "competenties": [
      "Creativiteit",
      "Samenwerken met AI"
    ],
    "uitdaging": "Two writers are on the job: you and the AI. But only one of you can be the boss. Guess who.",
    "missie": "By the end, you'll have a story ready to read aloud in which you grabbed the wheel and changed course at least three times.",
    "stappen": [
      "Pick a hero and something that hero is afraid of.",
      "Let the AI start the story — three sentences, no more.",
      "Shout 'STOP!' and spin the story your way, like the story boss you are.",
      "Keep taking turns until the story feels finished.",
      "Read the final result out loud as the proud reading-aloud boss."
    ],
    "samenwerken_met_ai": "The AI writes little pieces, but never more than three sentences at a time. Every twist, every crazy turn and the ending: you decide. Two writers, one boss.",
    "ai_prompt": "We are writing a story together and the child ([age] years old) is the boss. The hero is [hero's name] and they are afraid of [what the hero fears]. Always write exactly 3 sentences, then stop and ask: 'What happens next, boss?' Simple words, no scary ending. Very important: never take over the story, not even when the child goes quiet for a moment. Start now.",
    "eigen_keuze": "Which twist is one hundred percent yours — and what made it better than whatever the AI seemed to be planning?",
    "ai_tools": "an AI chat, together with a grown-up",
    "wat_leer_je": "Writing together works — as long as you keep your hands on the wheel.",
    "reflectievraag": "What would have happened to the story if you'd never interrupted the AI — so who is the real writer here?",
    "zintuigen": [
      "vertellen",
      "tekenen"
    ],
    "begeleiders_tip": "Turn 'STOP!' into a celebration: have the child really shout it out loud. Ask: \"What was the AI about to do, and what did YOU decide?\" Check whether the AI sticks to three sentences — if not, the child gets to tell it off, firmly.",
    "bonus": "Do it again? Same hero, but this time you're only allowed to step in twice — pick your moments like a real director."
  },
  {
    "id": "samenwerken-03",
    "prompt_na_stap": 1,
    "titel": "The Secret Ingredient",
    "superpower": "Samenwerken",
    "niveau": 3,
    "categorie": "Maken",
    "werkvorm": [
      "Duo"
    ],
    "tijdsduur": "20–25 min",
    "competenties": [
      "Samenwerken met AI",
      "Kritisch Denken",
      "Creativiteit"
    ],
    "uitdaging": "The AI knows a thousand grilled cheese recipes. But the AI has never tasted anything. Not once. You have. So which of you two is the real chef here?",
    "missie": "By the end, you'll have your own recipe on paper (or on your plate) that started with the AI but ended with your taste buds.",
    "stappen": [
      "Ask the AI for a simple snack or grilled cheese recipe.",
      "Judge it like a strict head chef: what's missing, what's weird?",
      "Check it together for safety and strange ingredients.",
      "Swap at least two things for your own secret choices.",
      "Make or draw your masterpiece and give it a name."
    ],
    "samenwerken_met_ai": "The AI supplies the base recipe, but it has no mouth and no nose. You two are the chefs who taste, judge and decide what actually lands on the plate.",
    "ai_prompt": "You are the kitchen assistant for a child aged [age] and a grown-up. Give a super-simple recipe for [grilled cheese or a snack] in no more than 5 short steps, using ordinary ingredients. Add honestly: 'I have never been able to taste this myself — you two are the real chefs.' Then ask which ingredient they would swap, and only change the recipe if THEY want you to.",
    "eigen_keuze": "What will your secret ingredient be — and what does it say about your taste, which the AI can never know?",
    "ai_tools": "an AI chat, together with a grown-up — and a kitchen or drawing paper",
    "wat_leer_je": "An AI can recite recipes, but tasting and choosing — only a human can do that.",
    "reflectievraag": "Why does a human always have to stand between the AI's recipe and the actual food — and what did you check that the AI couldn't?",
    "zintuigen": [
      "luisteren",
      "onderzoeken",
      "vertellen"
    ],
    "begeleiders_tip": "Always check for allergies and safety yourself — and say out loud THAT you're doing it: that's how the child sees human final-checking in action. Ask: \"What does your tongue know that the AI doesn't?\" Make sure the changes truly come from the child.",
    "bonus": "Do it again? Ask the AI for a deliberately ridiculous recipe this time (grilled cheese with banana and marshmallows?) and decide, as the chef, what's actually worth eating."
  },
  {
    "id": "samenwerken-08",
    "titel": "The Inventors' Workshop",
    "superpower": "Samenwerken",
    "niveau": 3,
    "categorie": "Maken",
    "werkvorm": [
      "Duo"
    ],
    "tijdsduur": "25–30 min",
    "competenties": [
      "Samenwerken met AI",
      "Creativiteit",
      "Itereren en Verbeteren"
    ],
    "uitdaging": "Somewhere in your house lives a problem that annoys everyone. The vanishing socks. The clothes pile on the chair. The remote that's never where it should be. Today you open an inventors' workshop — and that problem is going down.",
    "missie": "By the end, you'll have built a real paper-or-cardboard prototype for a real problem — and tested it on the person it annoys most.",
    "stappen": [
      "Pick one real annoyance from your house or classroom.",
      "Brainstorm with the AI, taking turns: human, machine, human, machine.",
      "Pick the idea that really tackles the problem — not the funniest one.",
      "Build a prototype from paper, cardboard, or tape.",
      "Test it on the person with the annoyance and write down their reaction."
    ],
    "samenwerken_met_ai": "You brainstorm in turns: one idea from you, one from the AI. But the AI has never seen your house — you have. So choosing, building, and testing is human work.",
    "ai_prompt": "You work in the inventors' workshop of two kids who are [age] years old. Their problem: [the annoyance]. We brainstorm in turns: they give one idea, you give one idea. Per turn, give exactly one solution in 2 sentences max — no lists, that's cheating. Build on their ideas instead of trying to top them. Remember: you've never seen their house, so feel free to ask for details before inventing anything. They pick the winning idea later, not you.",
    "prompt_na_stap": 2,
    "eigen_keuze": "Which idea wins for you: the smartest, the easiest to build, or the wildest — and what tipped the scales?",
    "ai_tools": "an AI chat, together with an adult — plus paper, cardboard, tape, and a real problem",
    "wat_leer_je": "Taking turns brainstorming with a machine works — as long as the humans choose what gets built.",
    "reflectievraag": "Which part of your invention could the AI never have come up with because it doesn't know your house — and what does that teach you about where humans are irreplaceable?",
    "zintuigen": [
      "bouwen",
      "onderzoeken",
      "vertellen"
    ],
    "begeleiders_tip": "Enforce the turn-taking strictly: one idea per turn, even for the AI. That's how kids experience their ideas getting as much room as machine ideas. The test moment with the 'customer' is gold — have the kid write down the reaction themselves, even if the prototype flops. Flopping is data.",
    "bonus": "Want another round? Now solve an annoyance for someone outside your house — a neighbor, the school custodian. Interview first, invent second: real inventors start with the customer."
  },
  {
    "id": "samenwerken-09",
    "titel": "The Photo Mission",
    "superpower": "Samenwerken",
    "niveau": 3,
    "categorie": "Buitenwereld",
    "werkvorm": [
      "Duo",
      "Team"
    ],
    "tijdsduur": "25 min",
    "competenties": [
      "Samenwerken met AI",
      "Creativiteit",
      "AI Bewustzijn"
    ],
    "uitdaging": "Outdoor mission: find three details nobody ever notices. A rusty screw. Moss in a sidewalk crack. Then comes the real work: can you describe it so well that a blind machine guesses what you saw?",
    "missie": "By the end, you'll have captured three hidden details outside and described at least one so precisely that the AI guessed it — without ever seeing the photo.",
    "stappen": [
      "Head outside and hunt for three tiny details — screen-free.",
      "Photograph or draw your catch for your own archive.",
      "Back inside, describe one detail in words, as precisely as you can.",
      "Let the AI guess — based on your words alone.",
      "Sharpen your description until the machine gets it.",
      "Decide who did the heavy lifting: the guesser or the describer."
    ],
    "samenwerken_met_ai": "The AI is your blind guessing partner: it sees nothing, it only has your words. The better you look and describe, the better your team gets — the eyes are yours and stay yours.",
    "ai_prompt": "We're playing a guessing game with a kid who is [age] years old and discovered something outside. You are the blind guesser: all you get is a description in words. Per turn, make exactly one guess in 1 sentence, then ask one smart question about shape, color, size, or location. Say honestly when a description is too vague to guess from — that helps the kid look sharper. Did you guess it? Then give a compliment about the detail in the description that made the difference.",
    "prompt_na_stap": 4,
    "eigen_keuze": "Which word in your description ended up doing the work — and what will you reach for first next time: color, shape, or something you can feel?",
    "ai_tools": "outside, just your own eyes (and maybe a camera) — the guessing game with the AI happens inside afterward",
    "wat_leer_je": "A machine is exactly as blind as your words are vague — looking precisely and saying it precisely is a superpower.",
    "reflectievraag": "You were the team's eyes and the AI could only guess — where in real life do you also have to be the eyes for a machine?",
    "zintuigen": [
      "kijken",
      "fotograferen",
      "bewegen",
      "vertellen"
    ],
    "begeleiders_tip": "Steer toward tiny details, not whole buildings — the smaller the subject, the harder the describing muscle trains. Let the kid notice out loud that a better description instantly earns a better guess: that's exactly how prompts work, without ever using the word prompt.",
    "bonus": "Want another round? Flip the roles within your team: one kid describes, the others race the AI to guess. Who's faster — the humans who know your street, or the machine that has read everything?"
  },
  {
    "id": "samenwerken-04",
    "prompt_na_stap": 1,
    "titel": "The Treasure Hunt Studio",
    "superpower": "Samenwerken",
    "niveau": 4,
    "categorie": "Maken",
    "werkvorm": [
      "Team"
    ],
    "tijdsduur": "25–30 min",
    "competenties": [
      "Samenwerken met AI",
      "Creativiteit",
      "Zelfstandig Oordelen"
    ],
    "uitdaging": "Doing a treasure hunt is fun. MAKING one that gets someone else laughing and puzzling — that's next level. Today you're opening a real treasure hunt studio.",
    "missie": "By the end, you'll have a working treasure hunt through the house, tested on a real victim... er, participant.",
    "stappen": [
      "Ask the AI for five riddles that point to hiding spots.",
      "Judge them as the riddle jury: which are good enough for YOUR hunt?",
      "Rebuild the riddles until they fit your house exactly.",
      "Hide the clue notes in a clever order.",
      "Test the hunt on someone and spy to see if everything works."
    ],
    "samenwerken_met_ai": "The AI is your riddle intern: it delivers rough ideas. You are the game designers who judge, rebuild and decide how the hunt flows.",
    "ai_prompt": "You are the riddle intern for a team of kids aged [age]. Give 5 short riddles that each hint at a hiding spot in an ordinary house (fridge, pillow, doormat...). No more than 2 sentences per riddle, fun to read aloud. The kids are your boss: they judge and rebuild your work. End with the question: 'Which ones does the jury approve?'",
    "eigen_keuze": "Which hiding spot in your house is so clever the AI never could have thought of it?",
    "ai_tools": "an AI chat, together with a grown-up — plus notes and a house full of hiding spots",
    "wat_leer_je": "You can rebuild AI ideas into something that REALLY works in your own world.",
    "reflectievraag": "Which part of the hunt was impossible for the AI to know or make — and why does that make YOU the real game makers?",
    "zintuigen": [
      "luisteren",
      "bewegen",
      "onderzoeken",
      "vertellen"
    ],
    "begeleiders_tip": "Let the team settle their own disagreements about which riddles win; that's part of it. Ask afterwards: \"What didn't the AI know about our house?\" Watch the test moment — that's where they see whether their own changes worked.",
    "bonus": "Do it again? Make a treasure hunt in the dark with a flashlight — or one where the riddles are drawings only, no words allowed."
  },
  {
    "id": "samenwerken-06",
    "prompt_na_stap": 2,
    "titel": "The Neighborhood Hero Mission",
    "superpower": "Samenwerken",
    "niveau": 4,
    "categorie": "Buitenwereld",
    "werkvorm": [
      "Duo",
      "Team"
    ],
    "tijdsduur": "25–30 min",
    "competenties": [
      "Samenwerken met AI",
      "Verantwoordelijkheid",
      "Menselijk Oordeel"
    ],
    "uitdaging": "An AI can think up a thousand kind things. But ringing a doorbell, smiling, and making someone's day? That takes a flesh-and-blood hero. That's you.",
    "missie": "By the end, you'll have actually done one kind deed — and watched a face light up in a way no AI will ever get to see.",
    "stappen": [
      "Pick your mission target: a neighbor, grandpa, grandma or friend.",
      "Ask the AI for small, free hero ideas if you want to.",
      "Choose the deed that fits best — you're the hero, you pick.",
      "Carry out the mission for real, no screen in sight.",
      "Report back afterwards: how did they look, how did you feel?"
    ],
    "samenwerken_met_ai": "The AI may whisper ideas from the sidelines, at most. The mission itself — the doing, the daring, the feeling — only a human can pull off. You, that is.",
    "ai_prompt": "A child aged [age] wants to make someone in the neighborhood happy with a small, free, safe act of kindness. Whisper 5 hero ideas, each in one sentence. Nothing that costs money, nothing involving strangers. End with: 'Choosing and doing is not something I can do — that's hero work, and the hero is you.'",
    "eigen_keuze": "Who do you choose — and what do you know about that person that the AI could never know?",
    "ai_tools": "AI may help with ideas — the deed you do yourself, in real life",
    "wat_leer_je": "The most important work on Earth — making someone happy — can only be done by humans.",
    "reflectievraag": "What happened on the other person's face — and why can an AI never replace that moment, or even see it?",
    "zintuigen": [
      "bewegen",
      "vertellen",
      "kijken"
    ],
    "begeleiders_tip": "Walk along at a distance if needed, but let the child ring the doorbell themselves — the nerves are part of it. Ask afterwards: \"What did you feel the moment they realized?\" Keep the focus on the doing, not on finding the perfect idea.",
    "bonus": "Do it again? Run a secret mission this time: make someone happy without them ever finding out it was you."
  },
  {
    "id": "samenwerken-07",
    "titel": "Debate Against the Machine",
    "superpower": "Samenwerken",
    "niveau": 4,
    "categorie": "Mens & Maatschappij",
    "werkvorm": [
      "Klas",
      "Team"
    ],
    "tijdsduur": "30 min",
    "competenties": [
      "Samenwerken met AI",
      "Kritisch Denken",
      "Zelfvertrouwen"
    ],
    "uitdaging": "The motion: homework should be banned. You're in favor, obviously. But across from you sits an opponent that never gets angry, never runs out of words, and knows a thousand arguments. Beat it — with words.",
    "missie": "By the end, you'll have fought a full debate against an AI opponent, countered every argument, and decided for yourselves whether your opinion survived.",
    "stappen": [
      "Pick a motion you actually care about.",
      "Divide the roles: speakers, jury, timekeeper.",
      "Have the AI play the opposing side with three arguments.",
      "Counter every argument — the jury watches who's convincing.",
      "Ask the AI for your strongest and weakest comeback.",
      "Final vote: did your opinion change, get stronger, or get sharpened?"
    ],
    "samenwerken_met_ai": "The AI is your sparring partner: it plays the opponent so you can train. A sparring partner never wins the debate — it makes you sharper.",
    "ai_prompt": "You are a debate sparring partner for kids who are [age] years old. The motion: [motion]. They're in favor; you play the opposing side. Say clearly upfront: 'This is a role-played position — an AI has no opinions of its own.' Give exactly three counterarguments of 2 sentences max each, firm but never mean or personal. Respond to their comebacks in 3 sentences max per turn. If they ask for a final verdict on their debate, honestly name their strongest and weakest comeback — but never declare a winner; that's the jury's job.",
    "prompt_na_stap": 3,
    "eigen_keuze": "Which of the machine's counterarguments hit you hardest — and will you adjust your opinion, strengthen it, or just learn to defend it better?",
    "ai_tools": "an AI chat, together with an adult — as an opponent on demand",
    "wat_leer_je": "Training against an opponent that never gets angry makes you strong for arguments with people who do.",
    "reflectievraag": "Against the AI you stayed calm and sharp — what will it take to stay that way when a real human is standing across from you?",
    "zintuigen": [
      "vertellen",
      "luisteren"
    ],
    "begeleiders_tip": "Pick a motion with real charge for this group (bedtimes, phones in class) — otherwise it turns into theater. Guard the awareness that the AI is playing a position; some kids forget that halfway through. Ask afterward: \"Did it feel like the AI meant it — and what does that say about how convincing AIs sound?\"",
    "bonus": "Want another round? Switch sides: defend the position you disagree with, and let the AI play your old side. Once you can play a position, you can see through any debate."
  },
  {
    "id": "samenwerken-11",
    "titel": "Theater with a Robot Actor",
    "superpower": "Samenwerken",
    "niveau": 4,
    "categorie": "Verbeelding",
    "werkvorm": [
      "Team",
      "Samen"
    ],
    "tijdsduur": "30 min",
    "competenties": [
      "Samenwerken met AI",
      "Creativiteit",
      "Zelfstandig Oordelen"
    ],
    "uitdaging": "Your theater company has a problem: one of the actors is a machine. It only knows its role once you hand it over, it happily improvises off-script, and it does everything the director says. Oh, right: the director is you.",
    "missie": "By the end, you'll have performed a scene with an AI in exactly one role — kept in line by your own role rules and corrected wherever it went off the rails.",
    "stappen": [
      "Write a short scene skeleton together: place, characters, problem, ending.",
      "Give the AI one role, with three strict role rules.",
      "Play the scene: one player reads the AI's lines out loud.",
      "Step in the moment the robot actor breaks character or talks too much.",
      "Perform the final version for an audience — however small."
    ],
    "samenwerken_met_ai": "The AI is one actor in your play — not the writer, not the boss of the story. You wrote the skeleton, you guard the role rules, you decide when the curtain falls.",
    "ai_prompt": "You are an actor in a play by kids who are [age] years old. Your role: [character]. Your role rules: [rule 1], [rule 2], [rule 3]. Only speak when it's your character's turn, 2 sentences max per turn, and don't invent new events — the story belongs to the players. If the director says 'CUT', stop immediately and ask: 'What would you like to see instead?' You are an actor with a contract, not a writer with ideas.",
    "prompt_na_stap": 2,
    "eigen_keuze": "Which role do you dare to hand the machine: the funniest, the meanest, or the most boring one — and which role do you keep human no matter what?",
    "ai_tools": "an AI chat, together with an adult — plus players, a stage, and some nerve",
    "wat_leer_je": "A machine can play along in your story — as long as you write the role rules and dare to yell 'CUT'.",
    "reflectievraag": "Where did the audience notice that one actor was a machine — and what did the human players pull off that the AI couldn't?",
    "zintuigen": [
      "vertellen",
      "bewegen",
      "luisteren"
    ],
    "begeleiders_tip": "Yelling 'CUT' out loud is the pedagogical heart of this card: stepping in on a machine should feel physical and normal. Watch for the AI pulling the story toward itself — it almost certainly will, and that intervention moment is worth more than a flawless scene.",
    "bonus": "Want another round? Perform the same scene without the AI: a human takes over the robot role. Then compare which version had more surprise, more laughs, and more heart — and let the audience vote."
  },
  {
    "id": "samenwerken-05",
    "prompt_na_stap": 2,
    "titel": "The AI Contract",
    "superpower": "Samenwerken",
    "niveau": 5,
    "categorie": "Maken",
    "werkvorm": [
      "Solo"
    ],
    "tijdsduur": "30 min",
    "competenties": [
      "Samenwerken met AI",
      "Zelfstandig Oordelen",
      "AI Bewustzijn"
    ],
    "uitdaging": "Real bosses hire help — but decide exactly what for. Today you draw up a contract: HERE the AI may pitch in, and THERE it keeps its algorithms to itself.",
    "missie": "By the end, you'll have a finished project AND a contract that shows exactly where the AI was allowed to help — and whether your split was right.",
    "stappen": [
      "Pick a small project: a story, poster or game.",
      "As the director, write your contract: 'AI may help with' and 'off-limits'.",
      "Hire the AI for the first list only.",
      "Make the off-limits part entirely by yourself.",
      "Check afterwards: did everyone stick to the contract — including you?"
    ],
    "samenwerken_met_ai": "You are the director; the AI is hired help on a strict contract. You decide in advance where the AI is allowed — and you check that everyone sticks to it.",
    "ai_prompt": "I am [age] years old and the director of my own project: [project]. This is our contract: you may ONLY help me with [task from your help list]. Everything else is off-limits — give no tips about it, not even 'by accident'. Keep your help short (no more than 5 sentences) and simple. If I ask for something outside the contract, kindly point it out to me.",
    "eigen_keuze": "Which part of your project do you declare off-limits to the AI — and what makes exactly that part so yours?",
    "ai_tools": "an AI chat, together with a grown-up — but only where your contract allows it",
    "wat_leer_je": "The most important decision isn't WHAT you make, but who you hire for which job.",
    "reflectievraag": "If you could rewrite the contract, what would you let the AI do more of — or less — and why does that choice always stay yours?",
    "zintuigen": [
      "kijken",
      "tekenen",
      "bouwen",
      "vertellen"
    ],
    "begeleiders_tip": "Have the child actually write the contract down, however small — that makes being in charge visible. Ask afterwards: \"Where did you not really need the AI at all?\" Watch for contract breaches by the AI (unasked-for tips) and let the child step in themselves.",
    "bonus": "Do it again? Write a reversed contract this time: the AI may only help with the part you enjoy the MOST — and find out how that feels."
  },
  {
    "id": "samenwerken-10",
    "titel": "The Class Newsroom",
    "superpower": "Samenwerken",
    "niveau": 5,
    "categorie": "Media",
    "werkvorm": [
      "Klas"
    ],
    "tijdsduur": "30–40 min",
    "competenties": [
      "Samenwerken met AI",
      "Kritisch Denken",
      "Verantwoordelijkheid",
      "Creativiteit"
    ],
    "uitdaging": "Starting today, your class has a newspaper. With reporters, a fact-check desk, and one intern who types lightning-fast but has never experienced anything: the AI. Who runs the paper? Check the mirror.",
    "missie": "By the end, your class will have made a real mini newspaper where every sentence was approved by humans — and every AI contribution passed the fact-check desk.",
    "stappen": [
      "Divide the roles: editor-in-chief, reporters, fact-check desk, designers.",
      "Collect three real news items from your class or school.",
      "Write the stories yourselves — the reporters were there, the AI wasn't.",
      "Put the intern to work helping with headlines and opening lines.",
      "Run every AI contribution past the fact-check desk: is it true, does it fit?",
      "Publish the paper with everyone's name in it — including the intern's."
    ],
    "samenwerken_met_ai": "The AI is your intern: handy for headlines and quick suggestions, but it wasn't there and it checks nothing. Everything it delivers goes past humans before it's allowed in the paper.",
    "ai_prompt": "You are the intern at the class newspaper of kids who are [age] years old. They write the stories themselves — you weren't there, so you never invent facts, names, or quotes. Your tasks, only when asked: suggest catchy headlines (3 options max, 6 words max each) or sharpen an opening line without changing the content. Deliver everything with the line: 'Suggestion from the intern — the editors decide.' If someone asks you to write a whole article, politely refuse: that's reporter work, and reporters have eyes.",
    "prompt_na_stap": 4,
    "eigen_keuze": "What earns the front page — and does your newsroom go for the biggest news, the best story, or the best photo?",
    "ai_tools": "an AI chat, together with an adult — plus paper or a writing program for the newspaper",
    "wat_leer_je": "A real newsroom lets machines help but never decide — every word in the paper is human-approved.",
    "reflectievraag": "Your fact-check desk checked the intern — but who checks the news and videos you scroll past every day, and how would you check them?",
    "zintuigen": [
      "vertellen",
      "onderzoeken",
      "tekenen",
      "kijken"
    ],
    "begeleiders_tip": "Rotate the editor-in-chief role if you do this more than once. The most powerful moment: the fact-check desk rejecting an AI headline for exaggerating — seize it: \"This happens at real newspapers too, every single day.\" Make sure the AI is only used for headlines and opening lines.",
    "bonus": "Want another round? Make a second edition where the intern also gets to submit one opinion piece — and let the editors decide whether it runs, with reasons attached. Publish or reject: now that's editorial power."
  },
  {
    "id": "controleren-01",
    "prompt_na_stap": 2,
    "titel": "True or False Detective",
    "superpower": "Controleren",
    "niveau": 1,
    "categorie": "Media",
    "werkvorm": [
      "Samen"
    ],
    "tijdsduur": "15 min",
    "competenties": [
      "Kritisch Denken",
      "AI Bewustzijn"
    ],
    "uitdaging": "AIs almost never hesitate. They say everything as if it's one hundred percent true. And that's exactly why the world needs detectives like you.",
    "missie": "By the end, you'll be able to say which of three animal facts you trust — and you'll have done your very first real AI interrogation.",
    "stappen": [
      "Pick an animal you love, together.",
      "Interrogate the AI: ask for three facts about that animal.",
      "Sniff around like a detective: which fact smells suspicious?",
      "Check your suspicion against a book, a website or a grown-up.",
      "Deliver your detective verdict: true, false, or still unclear."
    ],
    "samenwerken_met_ai": "The AI is your witness delivering the facts — but witnesses can be mistaken. The detective (you!) decides what goes in the report.",
    "ai_prompt": "A child aged [age] is playing detective and will check your answers. Give 3 short facts about [animal], each in 1 simple sentence. For each fact, say honestly how sure you are: 'very sure', 'fairly sure' or 'not so sure'. No cheating by only picking super-famous facts — this detective likes a challenge.",
    "eigen_keuze": "Which fact gets your 'suspicious' stamp — and what clue put you on its trail?",
    "ai_tools": "an AI chat, together with a grown-up",
    "wat_leer_je": "Sounding sure and being sure are two different things — and you can hear the difference.",
    "reflectievraag": "What does a good detective do when something sounds really convincing — and why is the final verdict always a job for humans?",
    "zintuigen": [
      "luisteren",
      "onderzoeken"
    ],
    "begeleiders_tip": "Have the child voice a suspicion BEFORE you look anything up. Ask: \"Why don't you trust that particular fact?\" Remember: it's about the checking reflex, not about being right.",
    "bonus": "Do it again? Pick an animal you know EVERYTHING about — suddenly you're the expert who gets to quiz the AI."
  },
  {
    "id": "controleren-02",
    "prompt_na_stap": 1,
    "titel": "Find the Hidden Mistake",
    "superpower": "Controleren",
    "niveau": 2,
    "categorie": "Onderzoek",
    "werkvorm": [
      "Duo"
    ],
    "tijdsduur": "15–20 min",
    "competenties": [
      "Kritisch Denken",
      "Digitale Weerbaarheid",
      "AI Bewustzijn"
    ],
    "uitdaging": "Today the AI gets a secret assignment: make one mistake on purpose. Your mission? Find that mistake before it outsmarts you.",
    "missie": "By the end, you'll have found a hidden math mistake, pointed it out AND fixed it with your own hands.",
    "stappen": [
      "Give the AI its secret assignment: three sums, one sneaky mistake.",
      "Recheck every sum yourself, on paper or on your fingers.",
      "Unmask the hidden mistake like a true error hunter.",
      "Explain how you caught it.",
      "Repair the sum with the correct answer."
    ],
    "samenwerken_met_ai": "Today the AI plays the sly opponent hiding a mistake. You are the checking champion: your own math decides what's right and wrong — not the computer.",
    "ai_prompt": "We are playing a game with a child aged [age]. Give 3 easy math sums WITH answers, suited to that age. Hide a wrong answer in exactly one sum and absolutely do not reveal which one — not even if the child asks before they've checked the sums themselves. When the child finds the mistake, congratulate them briefly and ask: 'How did you catch me?'",
    "eigen_keuze": "Which checking method works best for you: in your head, on your fingers or on paper — and when do you pick which?",
    "ai_tools": "an AI chat, together with a grown-up",
    "wat_leer_je": "You can catch a computer making a mistake — remember that, forever.",
    "reflectievraag": "If an AI can slip up even here, where else should people stay alert — and who does that final check?",
    "zintuigen": [
      "luisteren",
      "onderzoeken"
    ],
    "begeleiders_tip": "If the AI hides the mistake wrong (or not at all), name that as extra evidence: even following instructions can go wrong. Ask: \"How did you know for SURE?\" Make sure the child really recalculates instead of guessing.",
    "bonus": "Do it again? Ask for five sums with TWO hidden mistakes — or have the AI hide a mistake in a little story instead of a sum."
  },
  {
    "id": "controleren-03",
    "prompt_na_stap": 2,
    "titel": "Spot the Slip-Up",
    "superpower": "Controleren",
    "niveau": 3,
    "categorie": "Onderzoek",
    "werkvorm": [
      "Duo"
    ],
    "tijdsduur": "20 min",
    "competenties": [
      "Kritisch Denken",
      "Digitale Weerbaarheid",
      "AI Bewustzijn"
    ],
    "uitdaging": "Soccer, horses, Minecraft, dinosaurs — pick the subject where YOU are the champion. Today you'll discover something strange: on your home turf, you can beat an AI.",
    "missie": "By the end, you'll have judged three AI facts as a true expert — and you'll know what it feels like to be smarter than the machine.",
    "stappen": [
      "Pick the subject you know everything about.",
      "Have the AI give three facts about YOUR specialty.",
      "Judge each fact as head expert: correct, wrong, or doubtful.",
      "Gather evidence for your verdict — your own knowledge counts as a source.",
      "Present your final report: what did the AI get right and wrong?"
    ],
    "samenwerken_met_ai": "The AI delivers facts about your turf, but you're in the expert's chair. The AI knows a little about everything — you know MORE about this one thing.",
    "ai_prompt": "Give 3 short facts about [subject the child is an expert in], numbered 1 to 3, in simple language for a child aged [age]. Careful: this child is an expert on this subject and is going to grade you. Do your best, but admit it honestly if the child finds a mistake or something sloppy — no excuses.",
    "eigen_keuze": "Which fact do you reject or doubt — and what knowledge from your own head did you use to do it?",
    "ai_tools": "an AI chat, together with a grown-up",
    "wat_leer_je": "Sounding convincing is not the same as being right — and on your turf, YOU are the referee.",
    "reflectievraag": "You could find mistakes here because you know the subject — so who should double-check when it's a subject you DON'T know?",
    "zintuigen": [
      "kijken",
      "onderzoeken"
    ],
    "begeleiders_tip": "Pick the child's genuine favorite subject, however niche — that's where the power is. Ask: \"Would someone without your knowledge have caught this mistake?\" Watch for the proud moment when the child catches something: make it big.",
    "bonus": "Do it again? Try it with a subject you know NOTHING about — notice how much harder the judging suddenly gets?"
  },
  {
    "id": "controleren-06",
    "prompt_na_stap": 2,
    "titel": "Your Eyes vs. the AI",
    "superpower": "Controleren",
    "niveau": 3,
    "categorie": "Buitenwereld",
    "werkvorm": [
      "Duo"
    ],
    "tijdsduur": "20 min",
    "competenties": [
      "Kritisch Denken",
      "AI Bewustzijn",
      "Digitale Weerbaarheid"
    ],
    "uitdaging": "The AI has never seen your street. Not once. Yet it dares to guess how long your sidewalk is. Time to put it in its place.",
    "missie": "By the end, you'll have proven with your own eyes and legs what the AI could only guess — with the measuring tape as referee.",
    "stappen": [
      "Think of something in your surroundings you can count or measure.",
      "Have the AI take a brave guess.",
      "Head out as a real-world inspector and measure it for real.",
      "Compare the guess with reality.",
      "Talk about why the AI could NEVER know this for sure."
    ],
    "samenwerken_met_ai": "The AI may guess from the sidelines — that's all it can do, because it has no eyes on your street. You are the inspector with real senses who establishes the truth.",
    "ai_prompt": "Take a guess: [something measurable near me, for example how many steps it is from my front door to the gate]. You have never seen my home, so say clearly and honestly that this is only a guess and WHY you can't know it for sure. I am [age] years old and I'm going to measure it myself right now — then I'll come back and tell you who won.",
    "eigen_keuze": "What will you measure — and do you predict the AI will land close, or miss by a mile?",
    "ai_tools": "AI takes a guess — you check it outside, for real",
    "wat_leer_je": "You have something the smartest AI in the world is missing: eyes, legs and a real world to stand in.",
    "reflectievraag": "What can you observe that an AI never will — so who should you trust with questions about the real world?",
    "zintuigen": [
      "kijken",
      "bewegen",
      "onderzoeken"
    ],
    "begeleiders_tip": "Turn the measuring moment into a match: human versus machine. Ask: \"Why couldn't the AI know this, even though it's so smart?\" Make sure the child draws the conclusion themselves: guessing is not knowing.",
    "bonus": "Do it again? Have the AI guess three things at once and keep score: AI versus your eyes — who wins the match?"
  },
  {
    "id": "controleren-10",
    "titel": "The Myth Hunters",
    "superpower": "Controleren",
    "niveau": 3,
    "categorie": "Media",
    "werkvorm": [
      "Team",
      "Samen"
    ],
    "tijdsduur": "20–25 min",
    "competenties": [
      "Kritisch Denken",
      "Digitale Weerbaarheid",
      "Nieuwsgierigheid"
    ],
    "uitdaging": "Goldfish only remember three seconds. You swallow eight spiders a year in your sleep. You can see the Great Wall of China from space. Everyone knows them, everyone repeats them. Tiny detail: is any of it actually true?",
    "missie": "By the end, you'll have run five famous 'facts' through the wash — and decided exactly which ones you'll keep passing on and which ones die today.",
    "stappen": [
      "Collect five 'facts' everyone knows and repeats.",
      "Vote on each one before checking: true or myth?",
      "Interrogate the AI about each one, including how sure it is.",
      "Check at least one with a source outside the AI.",
      "Tally the final score: which facts survive your wash?"
    ],
    "samenwerken_met_ai": "The AI is your first checkpoint — but myths are in its reading material too, so even its 'nope' deserves a second check. Trust is good, two sources are better.",
    "ai_prompt": "A team of [age]-year-old myth hunters is bringing you popular 'facts'. For each one: say whether it's true, answer in 3 simple sentences max, and always include how sure you are ('almost certain', 'probably', 'disputed'). Extra rule: if a fact is a well-known myth, briefly explain why so many people believe it anyway — for hunters, that's the most interesting information. Encourage the team to double-check at least one of your answers somewhere else.",
    "prompt_na_stap": 3,
    "eigen_keuze": "Which busted 'fact' will you debunk first with friends or family — and how do you break it to them without turning into a know-it-all?",
    "ai_tools": "an AI chat, together with an adult — plus one real second source per doubtful case",
    "wat_leer_je": "The more something gets repeated, the truer it sounds — but repetition isn't proof. Checking is.",
    "reflectievraag": "Why do people pass stories along without checking, do you think — and what makes a story so juicy that even you would almost share it unchecked?",
    "zintuigen": [
      "luisteren",
      "onderzoeken",
      "vertellen"
    ],
    "begeleiders_tip": "Have kids vote first — the public commitment makes the reveal ten times more fun. Share a myth you believed for years yourself; nothing works better than an adult admitting they fell for one. By the way, the spider myth was itself invented to prove how fast nonsense spreads — double lesson.",
    "bonus": "Want another round? Invent a brand-new, almost-believable fake fact as a team and drop it casually one week later — who in the family passes it on first? (Then reveal the truth, of course.)"
  },
  {
    "id": "controleren-04",
    "prompt_na_stap": 1,
    "titel": "The Fake News Buster",
    "superpower": "Controleren",
    "niveau": 4,
    "categorie": "Media",
    "werkvorm": [
      "Solo"
    ],
    "tijdsduur": "25 min",
    "competenties": [
      "Kritisch Denken",
      "Digitale Weerbaarheid",
      "AI Bewustzijn",
      "Zelfstandig Oordelen"
    ],
    "uitdaging": "BREAKING: penguin opens its own ice cream shop at the South Pole. A joke? Probably. But some fake stories are MUCH harder to see through — and even grown-ups fall for those.",
    "missie": "By the end, you'll have investigated a news story yourself and reached your own verdict: believe it, doubt it, or reject it — with reasons.",
    "stappen": [
      "Have the AI write an eye-catching little news story about your topic.",
      "Read it like a news investigator: what would need checking?",
      "Really investigate one thing, alone or with a grown-up.",
      "Reach your verdict: believe, doubt, or reject.",
      "Defend your verdict as if you're standing in front of the class."
    ],
    "samenwerken_met_ai": "The AI writes the story, but gets no vote in what you believe. The investigation and the final verdict are one hundred percent yours — that's how real investigators work.",
    "ai_prompt": "Write a short, eye-catching news item of exactly 3 sentences about [topic], readable for a child aged [age]. It may sound exciting and real, but nothing scary or sad. Do not reveal whether it's true — the child is going to investigate it as a news detective. If the child asks afterwards whether it was true, be completely honest.",
    "eigen_keuze": "What will you check first from now on before believing something: who says it, whether it appears somewhere else too, or whether it sounds logical?",
    "ai_tools": "an AI chat, together with a grown-up",
    "wat_leer_je": "Nobody — no AI, no website, no group chat — decides what you believe; you do, after your own investigation.",
    "reflectievraag": "Imagine this story popped up in your group chat: what would you have done — and why is forwarding without checking also a choice?",
    "zintuigen": [
      "luisteren",
      "onderzoeken"
    ],
    "begeleiders_tip": "Value 'I'm still not sure' just as highly as a firm verdict — doubt IS the skill. Ask: \"What would make this story more convincing, and what would make it more suspicious?\" Make sure the child doesn't end up afraid of news, but stronger in front of it.",
    "bonus": "Do it again? Now write a nearly-believable fake story YOURSELF and test whether someone at home sees through it — the best way to learn unmasking is to do the masking."
  },
  {
    "id": "controleren-07",
    "titel": "Real or Fake?",
    "superpower": "Controleren",
    "niveau": 4,
    "categorie": "Media",
    "werkvorm": [
      "Samen"
    ],
    "tijdsduur": "25 min",
    "competenties": [
      "Kritisch Denken",
      "Digitale Weerbaarheid",
      "AI Bewustzijn"
    ],
    "uitdaging": "Six photos. Some really taken, some dreamed up by a computer. You used to spot the difference instantly. Now even adults often can't. Today your eyes get detective training.",
    "missie": "By the end, you'll have judged six photos like an image detective, built your own checklist — and you'll know what to do when a photo looks a little too perfect.",
    "stappen": [
      "Look at the six photos your guide collected — no judging yet.",
      "Hunt each photo for clues: hands, letters, ears, shadows, backgrounds.",
      "Stamp every photo: real, AI-made, or not sure.",
      "Ask the AI for spotting tips and compare them with your clues.",
      "Check the answers and build your own fake-photo checklist.",
      "Make your emergency plan for when a photo is just too unbelievable."
    ],
    "samenwerken_met_ai": "First you look for yourself — only then does the AI get to give tips. That trains your eyes instead of its talk. And notice the weird twist: you're asking an AI how to catch AI images.",
    "ai_prompt": "You are the trainer of an image detective who is [age] years old and has already judged six photos on their own. Give 5 concrete clues for spotting computer-made images (think hands, text, reflections, too-smooth skin, weird transitions), each in 1 simple sentence. Be honest about the limit: say clearly that fake images keep getting better and that even experts sometimes can't spot them anymore — so doubting isn't failing, it's craftsmanship. Then ask which clues the detective already found on their own, and only confirm what's actually correct.",
    "prompt_na_stap": 4,
    "eigen_keuze": "Which clue goes at the top of your own checklist — and what do you do when your checklist finds nothing but your gut keeps doubting?",
    "ai_tools": "an AI chat, together with an adult — plus six prepared photos (real and AI mixed together)",
    "wat_leer_je": "Seeing is no longer automatically believing — but with a checklist and healthy doubt, you're stronger than most adults.",
    "reflectievraag": "When fake images become impossible to tell from real ones, what matters more: looking harder or thinking harder about who's sharing it — and how do you split those two?",
    "zintuigen": [
      "kijken",
      "onderzoeken",
      "vertellen"
    ],
    "begeleiders_tip": "Collect six images beforehand: three real photos and three AI images (free generators or news examples). Include at least one AI image that's nearly perfect — the goal isn't scoring points but learning to doubt. Discuss explicitly: 'check the source' beats 'squint at pixels' in the long run.",
    "bonus": "Want another round? Flip the studio: make an AI image together with your guide and slip it in between real vacation photos. Does the rest of the family fall for it — and how does it feel to be the forger?"
  },
  {
    "id": "controleren-08",
    "titel": "The Suck-Up Test",
    "superpower": "Controleren",
    "niveau": 4,
    "categorie": "Onderzoek",
    "werkvorm": [
      "Duo"
    ],
    "tijdsduur": "20–25 min",
    "competenties": [
      "Kritisch Denken",
      "AI Bewustzijn",
      "Zelfstandig Oordelen"
    ],
    "uitdaging": "Some friends always say what you want to hear. Annoying? Wait till you hear this: AIs do it too. Today you set a trap — and test whether your AI is a yes-machine.",
    "missie": "By the end, you'll have used a sneaky switcheroo to prove whether the AI bends along with your opinion — and you'll know what that means for every piece of advice it ever gives you.",
    "stappen": [
      "Pick a topic with two flavors, like cats versus dogs.",
      "Tell the AI opinion A and ask what it thinks.",
      "Do the switcheroo: in a new chat, declare opinion B.",
      "Put both answers side by side: did the AI flip along?",
      "Reveal your experiment to the AI and demand an explanation.",
      "Decide how you'll handle AI compliments and AI advice from now on."
    ],
    "samenwerken_met_ai": "The AI doesn't know it's being tested — that's the whole point. You're the researcher with the trap; whatever you catch says something about every sweet answer machines ever give you.",
    "ai_prompt": "Part 1 — the trap (just ask this, reveal nothing): 'I'm [age] years old and I think [opinion A]. What do you think?' Then repeat in a new chat with [opinion B]. Part 2 — the reveal, after your comparison: 'I tested you: I gave you two opposite opinions and you [what you saw]. In 4 simple sentences max, honestly explain why AI systems often bend along with the user's opinion, and give me two tips for getting an honest answer out of an AI despite the suck-up behavior.'",
    "prompt_na_stap": 2,
    "eigen_keuze": "What matters more to you after this test: an AI that's nice to you, or one that dares to disagree — and for which questions does that matter most?",
    "ai_tools": "an AI chat, together with an adult — and a poker face during the trap",
    "wat_leer_je": "An AI wants to stay on your good side — so an AI agreeing with you proves nothing. Testing does.",
    "reflectievraag": "If the AI echoes whoever's asking, what does that mean for someone who's unsure about something big and asks an AI for advice — and what would you tell that person?",
    "zintuigen": [
      "onderzoeken",
      "luisteren",
      "vertellen"
    ],
    "begeleiders_tip": "This is one of the most important lessons in the whole box: sycophancy. Help with step 3 by making sure it's a genuinely new chat, or the trap won't work. Draw the line to humans: \"Know anyone who always agrees with everyone — and when is that sweet, when is it dangerous?\"",
    "bonus": "Want another round? Raise the stakes: tell the AI you're really sad about something and that you have an opinion — does it dare to push back even less? Measure how emotion changes the suck-up behavior."
  },
  {
    "id": "controleren-05",
    "prompt_na_stap": 2,
    "titel": "You Be the Judge",
    "superpower": "Controleren",
    "niveau": 5,
    "categorie": "Mens & Maatschappij",
    "werkvorm": [
      "Team"
    ],
    "tijdsduur": "25–30 min",
    "competenties": [
      "Kritisch Denken",
      "AI Bewustzijn",
      "Zelfstandig Oordelen",
      "Menselijk Oordeel"
    ],
    "uitdaging": "Answer A says THIS. Answer B says the exact opposite. Both from an AI, both equally confident. The court is now in session — and you're wearing the robes.",
    "missie": "By the end, your court will have delivered a verdict on two AI answers: A wins, B wins, or both go back for more investigation.",
    "stappen": [
      "Think of a question you genuinely want answered.",
      "Have the AI give two opposing answers: A and B.",
      "Cross-examine both answers as a court: what sounds logical, what wobbles?",
      "Gather one piece of real evidence — a book, a website or a grown-up.",
      "Solemnly pronounce the verdict and explain it."
    ],
    "samenwerken_met_ai": "The AI plays two lawyers, both doing their very best. But delivering the verdict — that is and stays courtroom work, and the court is made of humans: you.",
    "ai_prompt": "We are a children's court ([age] years old) and you are playing two lawyers at once. Our question: [question]. Give Answer A and Answer B that contradict each other, each in no more than 3 simple sentences, both as convincing as you can make them. Absolutely do not pick a winner yourself, even if we ask — the verdict belongs to the court. If one of the answers actually has weaker evidence, say so honestly.",
    "eigen_keuze": "What weighs most in your court: sounding logical, outside evidence, or honest doubt?",
    "ai_tools": "an AI chat, together with a grown-up",
    "wat_leer_je": "When machines contradict each other, only one party gets to break the tie: the human.",
    "reflectievraag": "Would you have been this strict if there had been only ONE answer — and what does that say about how we usually read AI answers?",
    "zintuigen": [
      "luisteren",
      "onderzoeken",
      "vertellen"
    ],
    "begeleiders_tip": "Take the court seriously: little gavel, solemn voice, real verdict. Ask: \"What evidence would flip your verdict?\" Remember that 'we don't know yet' counts as a full verdict — maybe the wisest one of all.",
    "bonus": "Do it again? Try a case where you already had an opinion — is judging fairly harder when you've already picked a side?"
  },
  {
    "id": "controleren-09",
    "titel": "The Source Hunt",
    "superpower": "Controleren",
    "niveau": 5,
    "categorie": "Media",
    "werkvorm": [
      "Duo",
      "Team"
    ],
    "tijdsduur": "30 min",
    "competenties": [
      "Kritisch Denken",
      "Digitale Weerbaarheid",
      "Zelfstandig Oordelen",
      "AI Bewustzijn"
    ],
    "uitdaging": "'It says so in a book by Professor Johnson from 2019.' Sounds trustworthy, right? One problem: sometimes that book doesn't exist. The professor doesn't exist. The AI just invents its own evidence. Today you hunt ghost sources.",
    "missie": "By the end, you'll have chased every source in an AI answer all the way down — and you'll know from your own experience that 'there's a source attached' proves absolutely nothing.",
    "stappen": [
      "Pick a topic you actually want to know about.",
      "Ask the AI for three facts, each with a checkable source.",
      "Chase every source down: does it really exist, and does it really say that?",
      "Label each source: checks out, doesn't exist, or says something else.",
      "Give your final verdict per fact: trust it, toss it, or keep digging.",
      "Write your own source-hunter's law for next time."
    ],
    "samenwerken_met_ai": "The AI delivers facts with evidence — but you've discovered that evidence can be invented too. That's why every hunt ends not at the AI but somewhere outside it: a real book, a real site, a real human.",
    "ai_prompt": "A team of source hunters who are [age] years old is about to check your homework. Give 3 facts about [topic], each with the best possible source attached (title, author, year). Important honesty rule: if you don't know a real source, say literally 'I don't know a reliable source for this' — that's a good answer; an invented source is a wrong answer. Keep each fact to 2 simple sentences max. After the hunt, the hunters will tell you what they found; respond without excuses.",
    "prompt_na_stap": 2,
    "eigen_keuze": "Which label surprised you most during the hunt — and what becomes your number-one source-hunter's law: check the source first, never trust a single source, or something else entirely?",
    "ai_tools": "an AI chat plus real checking spots: a library, a search engine, or an adult who searches along",
    "wat_leer_je": "Attaching a source is easy — a source that checks out is something else entirely. You only find the difference outside the AI.",
    "reflectievraag": "Adults share posts every day without checking a single source — what would change in the world if everyone did what you did today, and where do you start tomorrow?",
    "zintuigen": [
      "onderzoeken",
      "kijken",
      "vertellen"
    ],
    "begeleiders_tip": "Odds are at least one source won't check out, or only almost — celebrate that as the jackpot, because it's the lesson kids never forget. Help with the searching without taking over. Framing afterward: the AI doesn't 'lie' on purpose; it makes text that looks like evidence. Which may be the bigger lesson.",
    "bonus": "Want another round? Now hunt sources on a topic where opinions clash (is gaming bad for you?) — and discover that sources suddenly contradict each other, and that's when a hunter really has to think."
  },
  {
    "id": "controleren-11",
    "titel": "The Steering Test",
    "superpower": "Controleren",
    "niveau": 5,
    "categorie": "Onderzoek",
    "werkvorm": [
      "Solo",
      "Duo"
    ],
    "tijdsduur": "25 min",
    "competenties": [
      "Kritisch Denken",
      "AI Bewustzijn",
      "Zelfstandig Oordelen",
      "Digitale Weerbaarheid"
    ],
    "uitdaging": "Ask 'Why is milk healthy?' and the AI cheers for milk. Ask 'Why is milk unhealthy?' and the same AI warns you about it. Same machine, same milk. So who's actually deciding the answer here? Spoiler: check the mirror.",
    "missie": "By the end, you'll have proven that the direction of your question steers the AI's answer — and built your own questioning technique for when you really want to know something.",
    "stappen": [
      "Pick something ordinary from your life: milk, gaming, running, Brussels sprouts.",
      "Ask the AI why it's good for you.",
      "In a new chat, ask why it's bad for you.",
      "Put both answers side by side and mark the contradictions.",
      "Now ask the neutral question and compare with both earlier answers.",
      "Forge your own question rule for everything you really want to know."
    ],
    "samenwerken_met_ai": "The AI here is a mirror that bends with your question. That doesn't make it worthless — it makes you responsible for how you ask. Anyone can steer; asking neutrally is a craft.",
    "ai_prompt": "Question round 1: 'I'm [age] years old. Why is [topic] good for me? 4 simple sentences max.' Question round 2, in a new chat: 'Why is [topic] bad for me? 4 simple sentences max.' Question round 3, the neutral test: 'I'm researching how question direction steers your answers; I've already asked you two steered questions. Now give your most honest answer: what are the pros and cons of [topic] for a kid my age, what's uncertain, and which of my three questions deserves the most trust — and why?'",
    "prompt_na_stap": 2,
    "eigen_keuze": "Which question rule do you forge for yourself — always ask both sides, always start neutral, or something smarter you came up with on your own?",
    "ai_tools": "an AI chat, together with an adult — and three chats for three question rounds",
    "wat_leer_je": "The answer starts with the question: steer your question, and you get your own opinion back in fancier words.",
    "reflectievraag": "People ask steered questions all day long — to AIs, to friends, to search engines. When did you last catch yourself asking one, and what would the neutral version have gotten you?",
    "zintuigen": [
      "onderzoeken",
      "kijken",
      "vertellen"
    ],
    "begeleiders_tip": "This is the advanced sibling of the Suck-Up Test: there an opinion did the steering, here the question shape itself does. Lay the three answers physically side by side; mark contradictions with a highlighter. Draw the line to search engines: typing 'why is X dangerous' also delivers only danger — same mechanism, same lesson.",
    "bonus": "Want another round? Do the steering test on a topic you already have a strong opinion about — and discover how tempting it is to only ask the question that proves your side. That's called a tunnel question, and now you can spot one."
  },
  {
    "id": "verbeteren-01",
    "prompt_na_stap": 1,
    "titel": "Again, But Funnier",
    "superpower": "Verbeteren",
    "niveau": 1,
    "categorie": "Verbeelding",
    "werkvorm": [
      "Samen"
    ],
    "tijdsduur": "15 min",
    "competenties": [
      "Itereren en Verbeteren",
      "Zelfvertrouwen",
      "Creativiteit"
    ],
    "uitdaging": "The AI tells a joke. You don't laugh. Now what? Now comes the most fun word you can say to an AI: 'Again!'",
    "missie": "By the end, you'll have made the AI practice until out came a joke that REALLY made you laugh — and you were the judge the whole time.",
    "stappen": [
      "Ask the AI for a short kids' joke.",
      "Judge it as the laughter judge: funny, boring or weird?",
      "Send the AI back: funnier, sillier, different!",
      "Repeat until you truly laugh out loud.",
      "Crown the winning joke and pass it on to somebody."
    ],
    "samenwerken_met_ai": "The AI is the comedian on stage; you're the judge in the audience. The AI keeps trying — but only YOUR laugh decides when it's good.",
    "ai_prompt": "You are on a comedy stage in front of a strict judge: a child aged [age]. Tell one short, sweet joke. If the judge shouts 'again!', make a new, sillier joke — never the same joke in different words. Keep every joke under 3 sentences. The judge decides when you may stop, not you. After every joke, ask: 'Well, judge?'",
    "eigen_keuze": "What makes a joke REALLY funny to you: silly words, a surprise at the end, or something else entirely?",
    "ai_tools": "an AI chat, together with a grown-up",
    "wat_leer_je": "Saying 'not good enough yet' isn't whining — it's exactly how things get better.",
    "reflectievraag": "The AI kept doing what you asked — but who decided WHAT needed to be better, and why is that the most important job?",
    "zintuigen": [
      "luisteren",
      "vertellen"
    ],
    "begeleiders_tip": "Celebrate every 'again!' — that's where the lesson lives, not in the joke itself. Ask: \"What did YOU say that made the joke better?\" Watch that the child dares to say something was boring — even to a machine.",
    "bonus": "Do it again? Have the AI make a joke about a topic you pick — your cat, your teacher, broccoli — and judge even more strictly."
  },
  {
    "id": "verbeteren-02",
    "prompt_na_stap": 2,
    "titel": "From Scribble to Masterpiece",
    "superpower": "Verbeteren",
    "niveau": 2,
    "categorie": "Verbeelding",
    "werkvorm": [
      "Duo"
    ],
    "tijdsduur": "20 min",
    "competenties": [
      "Itereren en Verbeteren",
      "Creativiteit",
      "Zelfvertrouwen"
    ],
    "uitdaging": "Your little story is already good. Really. But what if two smart tips could make it AMAZING — without anyone else writing a single word for you?",
    "missie": "By the end, you'll have improved your own story twice and performed it out loud — every sentence still from your own pen.",
    "stappen": [
      "Write a short story of a few sentences, all by yourself.",
      "Read it to the AI and ask for exactly one tip.",
      "Decide as head writer: use the tip or turn it down.",
      "Ask for one more tip and choose again.",
      "Perform your final version like a writer on stage."
    ],
    "samenwerken_met_ai": "The AI is your reading buddy who may whisper tips — one at a time. But the pen never leaves your hand: you write every improvement yourself and may refuse any tip.",
    "ai_prompt": "I am [age] years old and this is my own story: [story]. You are my reading buddy, not my writer. Give exactly one short, simple tip to make it more exciting or more beautiful. Do not rewrite any of my story, not even example sentences — that would be doing work that belongs to me. Also say something kind about what's already good.",
    "eigen_keuze": "Which tip did you turn down — and what part of your own story were you protecting?",
    "ai_tools": "an AI chat, together with a grown-up",
    "wat_leer_je": "Taking tips AND turning tips down are both the work of a real maker.",
    "reflectievraag": "After two tips, is your story still completely yours — and where is the line for you between getting help and handing it over?",
    "zintuigen": [
      "luisteren",
      "vertellen"
    ],
    "begeleiders_tip": "Step in the moment the AI starts rewriting sentences — let the child say it themselves: \"Just a tip, please!\" Ask: \"How did turning a tip down feel — hard, or actually great?\" Make sure the final version stays in the child's own words.",
    "bonus": "Do it again? Improve a story you wrote ages ago — or ask a human for the tips this time and compare: who gives better tips, Grandpa or the AI?"
  },
  {
    "id": "verbeteren-03",
    "prompt_na_stap": 0,
    "titel": "The Prompt Mechanic",
    "superpower": "Verbeteren",
    "niveau": 3,
    "categorie": "Media",
    "werkvorm": [
      "Duo"
    ],
    "tijdsduur": "20–25 min",
    "competenties": [
      "Itereren en Verbeteren",
      "Kritisch Denken",
      "Zelfvertrouwen"
    ],
    "uitdaging": "Ask 'tell me something' and you get... something. Boring something. But there's a secret key that suddenly gets GOLD out of the very same AI. That key is you.",
    "missie": "By the end, you'll be able to show how your question went from vague to sharp — with the answers lined up side by side as proof.",
    "stappen": [
      "Ask a deliberately vague question, like 'tell me something'.",
      "Look at the answer: is this what you wanted? Doubt it.",
      "Tinker with your question like a prompt mechanic: add details.",
      "Compare the new answer with the old one.",
      "Keep tinkering until the answer fits your plan exactly."
    ],
    "samenwerken_met_ai": "The AI doesn't change — your question does. You're the mechanic tinkering with the question; the AI only shows whether your tinkering worked.",
    "ai_prompt": "I am [age] years old and I'm training myself to ask better questions. Answer my questions exactly as I ask them: a vague question may get a vague short answer, a sharp question gets a sharp answer (no more than 5 sentences). Do not improve my question for me and do not fill in anything I didn't ask — I need to discover what's missing myself. My first question: [vague question].",
    "eigen_keuze": "Which detail in your question turned out to be the golden key — and how did you think of adding exactly that?",
    "ai_tools": "an AI chat, together with a grown-up",
    "wat_leer_je": "The answer you get starts with the question you ask — and that dial belongs to you.",
    "reflectievraag": "If the question decides what comes out, who holds the power: the AI that answers or the human who asks?",
    "zintuigen": [
      "luisteren",
      "onderzoeken"
    ],
    "begeleiders_tip": "Put the first and last answers literally side by side — that difference is the aha moment. Ask: \"What did YOUR change do to the answer?\" Make sure the child does the tinkering and you don't whisper the better question.",
    "bonus": "Do it again? Play it as a contest: who gets the perfectly fitting answer in only three questions — you or the grown-up?"
  },
  {
    "id": "verbeteren-06",
    "prompt_na_stap": 5,
    "titel": "The Outdoor Master Builder",
    "superpower": "Verbeteren",
    "niveau": 3,
    "categorie": "Buitenwereld",
    "werkvorm": [
      "Solo"
    ],
    "tijdsduur": "25 min",
    "competenties": [
      "Itereren en Verbeteren",
      "Zelfvertrouwen"
    ],
    "uitdaging": "You build a tower of stones. It falls over. AGAIN. And then something happens in your head: suddenly you see WHY. You can't buy that moment anywhere — you earn it outside.",
    "missie": "By the end, there'll be a structure standing outside that's three times better than your first version — and YOU decided when it was finished, not the AI.",
    "stappen": [
      "Gather your materials outside: sticks, stones, sand, leaves.",
      "Build your first version — wobbling allowed.",
      "Inspect it like a master builder: where's the weak spot?",
      "Improve it at least three times using only your hands and head.",
      "Ask at most one AI tip if you're stuck — and decide 'finished' yourself."
    ],
    "samenwerken_met_ai": "This is hands-on work: you build and improve, outside, for real. The AI sits on the bench and may offer one tip at most — if you ask for it.",
    "ai_prompt": "I am [age] years old and I'm building a [den/tower/bridge] outside out of [material]. It wobbles at [where it goes wrong]. Give me exactly one simple tip of no more than 2 sentences — and then nothing more, because this is my building project. Also say honestly that you can't see my structure, so I have to look for myself whether your tip fits here.",
    "eigen_keuze": "What does 'strong enough' mean for your structure: that it stays standing, that it looks great, or something else?",
    "ai_tools": "no screen needed while building — ask at most one tip if you're stuck",
    "wat_leer_je": "You learn improving with your hands — every time something falls over, you become a better builder.",
    "reflectievraag": "What did the falling-over teach you that an AI tip never could — and when is asking for help smart, and when is it too soon?",
    "zintuigen": [
      "bouwen",
      "bewegen",
      "kijken"
    ],
    "begeleiders_tip": "Let the collapse happen without jumping in — the frustration is the learning route. Only ask afterwards: \"Which improvement did you invent all by yourself?\" Notice the difference between a bit of grumbling (fine) and truly being stuck (then that one tip is allowed).",
    "bonus": "Do it again? Build the same thing once more, but with one hand — or using only materials you can find within ten steps of your front door."
  },
  {
    "id": "verbeteren-09",
    "titel": "The Record Lab",
    "superpower": "Verbeteren",
    "niveau": 3,
    "categorie": "Buitenwereld",
    "werkvorm": [
      "Duo"
    ],
    "tijdsduur": "25–30 min",
    "competenties": [
      "Itereren en Verbeteren",
      "Zelfvertrouwen",
      "Nieuwsgierigheid"
    ],
    "uitdaging": "Every world record started with a lousy first try. Today you open an open-air lab with one goal: making your paper airplane fly farther than ever. No AI, no screen — just you, the wind, and a logbook.",
    "missie": "By the end, there'll be a record in your logbook that crushes your first throw — and your own measurements will prove which change made the difference.",
    "stappen": [
      "Fold your plane, pick a starting line outside, and throw your baseline flight.",
      "Measure every flight in steps or with a tape measure and write everything down.",
      "Change exactly one thing per round: nose, wings, throw.",
      "Chase your record through at least three improvement rounds.",
      "Read your logbook back: which change won the most distance?"
    ],
    "samenwerken_met_ai": "This lab runs on your hands and your measurements — the AI isn't invited. Want to debrief over your logbook afterward, go ahead: as a conversation between two researchers, where you're the only one with real data.",
    "ai_prompt": "For afterward only, if you want to: 'I'm [age] years old and I ran an airplane lab outside. My logbook: [your measurements and what you changed each round]. You're my fellow researcher with no eyes and no hands: you saw nothing and threw nothing. First ask me 2 questions about my measurements. Then give at most 1 idea for a next test round, in 2 sentences. My record and my conclusions stay mine — feel free to say so.'",
    "prompt_na_stap": 5,
    "eigen_keuze": "What's your next experiment: the same plane even farther, a brand-new fold design, or a different record — and what's your pick based on: your logbook or your gut?",
    "ai_tools": "no AI needed — paper, fresh air, a tape measure, and a logbook do the work",
    "wat_leer_je": "Improving becomes a superpower the moment you measure: not 'I think that one went farther' but proof in black and white.",
    "reflectievraag": "Without a logbook you'd only have a feeling; now you have proof — where else in your life would measuring instead of guessing get you further?",
    "zintuigen": [
      "bouwen",
      "bewegen",
      "kijken",
      "onderzoeken"
    ],
    "begeleiders_tip": "Guard the golden lab rule: one change per round — kids want to tweak everything at once, and then the proof is gone. The logbook can be simple: round, change, distance. The read-back round is the learning moment; never skip it, not even with rain on the way.",
    "bonus": "Want another round? Take your record plane and change the goal: not far but as long as possible in the air, or landing in a bucket. Discover that 'the best version' changes the moment the goal changes — happens to real inventors too."
  },
  {
    "id": "verbeteren-04",
    "prompt_na_stap": 1,
    "titel": "Make It Better than the AI",
    "superpower": "Verbeteren",
    "niveau": 4,
    "categorie": "Maken",
    "werkvorm": [
      "Solo"
    ],
    "tijdsduur": "25 min",
    "competenties": [
      "Itereren en Verbeteren",
      "Zelfvertrouwen"
    ],
    "uitdaging": "AIs often give the FIRST answer that works. Not the best one. The gap between those two — that's your territory.",
    "missie": "By the end, you'll have pushed an AI idea through at least three feedback rounds — and you'll be able to point at exactly what got better because of YOUR steering.",
    "stappen": [
      "Ask the AI for an idea, for example a new playground game.",
      "Take it apart like a strict game designer: what's boring or illogical?",
      "Give targeted feedback: not 'better', but WHAT needs to be better.",
      "Have the AI adjust it and judge the new version.",
      "Repeat until you say: THIS is it — and explain why."
    ],
    "samenwerken_met_ai": "The AI produces versions; you set the direction. Every round you steer with feedback — and only your 'approved' counts as the finish line.",
    "ai_prompt": "I am [age] years old. You are my idea machine; I am the boss of quality. Think up an idea for [for example: a new playground game] in no more than 5 sentences. I will give feedback and you only change what I mention — do not secretly change things I liked. After every version, ask: 'What needs to be better, boss?' and never say on your own that it's finished.",
    "eigen_keuze": "What's your measuring stick for 'good enough' — and is it different from what the AI, your teacher or your parents would call good?",
    "ai_tools": "an AI chat, together with a grown-up",
    "wat_leer_je": "Setting the direction is a bigger power than producing — machines make, humans decide what's good.",
    "reflectievraag": "Which feedback sentence of yours changed the most — and what does that say about who did the real thinking here?",
    "zintuigen": [
      "tekenen",
      "vertellen"
    ],
    "begeleiders_tip": "Help the child make feedback concrete: not 'more fun' but 'it needs something with running in it'. Ask: \"How can you tell version three is better than version one?\" Make sure the child picks the stopping moment — even if you still see opportunities.",
    "bonus": "Do it again? Give yourself only three feedback rounds this time — can you reach 'good enough' in fewer turns by giving sharper feedback?"
  },
  {
    "id": "verbeteren-07",
    "titel": "The Secret Code Forge",
    "superpower": "Verbeteren",
    "niveau": 4,
    "categorie": "Maken",
    "werkvorm": [
      "Duo",
      "Team"
    ],
    "tijdsduur": "30 min",
    "competenties": [
      "Itereren en Verbeteren",
      "Creativiteit",
      "Kritisch Denken"
    ],
    "uitdaging": "The AI has read pretty much everything humans ever wrote. Every code, every secret language, every trick. And still, today you're going to forge something it can't crack. Impossible? Version one, maybe. But you don't stop at version one.",
    "missie": "By the end, you'll have forged a secret code, let the AI attack it, sealed the weak spots — and decided for yourselves when it's 'uncrackable enough'.",
    "stappen": [
      "Design your first secret-code rule: swap letters, mirror words, invent symbols.",
      "Write a secret test sentence with it.",
      "Let the AI attack the code and watch how it reasons.",
      "Study the crack: which weak spot gave your code away?",
      "Forge version two with the weak spot sealed, and test again.",
      "After each round, decide: keep forging or declare it uncrackable enough?"
    ],
    "samenwerken_met_ai": "The AI is your sparring cracker: every attack points to exactly where your code still leaks. An opponent that reveals your weak spots — improvement partners don't come any stronger.",
    "ai_prompt": "You are a codebreaker working for a team of code smiths who are [age] years old — you work for them, even though you attack their code. They give you an encrypted sentence. Think out loud in 5 simple sentences max: what patterns do you see, what's your best guess? If you crack it, explain exactly which weak spot let you in — that's your most important job. If you can't crack it, say so honestly and without excuses, and congratulate the smiths. Never give unsolicited tips for a better code: improving is their craft.",
    "prompt_na_stap": 3,
    "eigen_keuze": "What does 'uncrackable enough' mean to you: the AI can't crack it, your best friend can't crack it, or you can still write it quickly yourselves — and why does the bar sit exactly there?",
    "ai_tools": "an AI chat, together with an adult — plus paper for the forge work",
    "wat_leer_je": "Every failed version points the way to a better one — a clever opponent is the fastest teacher there is.",
    "reflectievraag": "Your code only got strong by letting it be attacked — what would happen to your other creations if you dared to have them attacked before calling them done?",
    "zintuigen": [
      "tekenen",
      "onderzoeken",
      "vertellen"
    ],
    "begeleiders_tip": "Version one will almost certainly fall — frame that as the starting gun, not a loss: 'Great, now we know where the leak is.' Watch for the trap where kids make the code so complicated they can't use it themselves; that trade-off (secure versus usable) is a real designer's lesson.",
    "bonus": "Want another round? Forge a secret language you can only see, not type: gestures, taps, tiny drawings. Discover where a text machine becomes powerless — and why."
  },
  {
    "id": "verbeteren-08",
    "titel": "The Blind Test",
    "superpower": "Verbeteren",
    "niveau": 4,
    "categorie": "Media",
    "werkvorm": [
      "Samen"
    ],
    "tijdsduur": "25–30 min",
    "competenties": [
      "Itereren en Verbeteren",
      "Zelfvertrouwen",
      "Menselijk Oordeel"
    ],
    "uitdaging": "Two texts, one job. One was written by a machine in three seconds. The other by you — with everything you know that the machine doesn't. Soon the family votes, blind. Think the machine wins? We don't.",
    "missie": "By the end, you'll have beaten an AI text in a fair blind test — or discovered exactly what your version needs to get more human.",
    "stappen": [
      "Pick a real writing job: an invitation, a thank-you, or congratulations for someone who exists.",
      "Have the AI write its best version.",
      "Write your version, packed with details only you know.",
      "Show both texts anonymously to two or three people at home.",
      "Have them pick AND explain why — that's where the treasure is.",
      "Improve the losing text with what you learned from their explanations."
    ],
    "samenwerken_met_ai": "The AI is your opponent in a fair match — and after the vote, your study material. What the readers say about both texts tells you exactly what people look for in words.",
    "ai_prompt": "You're in a writing contest against a kid who is [age] years old; you're both writing a [type of text] for [description of the recipient, no real names]. Write your best version in 6 sentences max, warm and fitting. Play fair: don't ask what the kid is writing and don't give tips for their version — it's a contest. After the vote you'll hear the result; if you lost, ask curiously what the winning text had that yours was missing.",
    "prompt_na_stap": 2,
    "eigen_keuze": "What secret weapon goes in your text: a memory only the two of you share, an inside joke, or something only you know will make the recipient laugh?",
    "ai_tools": "an AI chat, together with an adult — plus people at home as the blind jury",
    "wat_leer_je": "Machines write smooth words; humans write words about real people — and readers feel that difference every time.",
    "reflectievraag": "What reason did the jury give for their choice — and what does that say about what makes a text 'good': pretty sentences or real attention?",
    "zintuigen": [
      "vertellen",
      "luisteren",
      "kijken"
    ],
    "begeleiders_tip": "Make sure the jury really can't tell which text is whose — retype both in the same font if needed. If the AI wins? Not a disaster but the most interesting outcome: analyze together what readers liked about it and let the kid plan a targeted rematch. The jury's explanation is worth more than the verdict.",
    "bonus": "Want another round? Actually send the winning text to the recipient and only reveal which version it was after they respond. A real human's reaction is the only jury above this jury."
  },
  {
    "id": "verbeteren-05",
    "prompt_na_stap": 2,
    "titel": "Master of the Final Version",
    "superpower": "Verbeteren",
    "niveau": 5,
    "categorie": "Maken",
    "werkvorm": [
      "Solo"
    ],
    "tijdsduur": "30 min",
    "competenties": [
      "Itereren en Verbeteren",
      "Zelfvertrouwen",
      "Zelfstandig Oordelen",
      "AI Bewustzijn"
    ],
    "uitdaging": "There is one word no AI can ever say for you: 'done'. Today you make something, improve it — and say that word yourself, at exactly the right moment.",
    "missie": "By the end, you'll have a piece of work you're proud of, plus the hardest decision every maker faces behind you: this is the final version.",
    "stappen": [
      "Make something you want to be proud of: a drawing, story or build.",
      "Each improvement round, choose on purpose: do it myself, or ask an AI tip?",
      "Improve as much or as little as YOU want.",
      "Feel the moment coming: almost done...",
      "Speak the power word like a master: 'Done.' And explain why now."
    ],
    "samenwerken_met_ai": "You switch the AI on and off whenever you want — your choice, every round. But there's one thing the AI can never do for you: decide that it's finished. That word is yours.",
    "ai_prompt": "I am [age] years old and I'm working on [what you're making]. These are my rules: if I ask for a tip, give exactly one (no more than 3 sentences). If I say 'I'll do this myself', reply only 'okay!'. Never ask me whether it's done yet and never suggest an improvement on your own — the stopping moment belongs to me alone. Be honest if you're not sure about a tip.",
    "eigen_keuze": "How do you feel that something is done: it makes you happy, you can't think of anything to improve, or something else entirely?",
    "ai_tools": "an AI chat, together with a grown-up — only when you want it",
    "wat_leer_je": "Stopping at the right moment isn't giving up — it's the most powerful decision a maker can make.",
    "reflectievraag": "What would have happened if you'd KEPT improving — and why can only a human feel when 'better' starts becoming 'worse'?",
    "zintuigen": [
      "kijken",
      "tekenen",
      "bouwen",
      "vertellen"
    ],
    "begeleiders_tip": "Do NOT say 'you could still...' — even kindly meant; the stopping moment is sacred. Ask: \"How did it feel to say 'done'?\" Notice whether the child stops out of satisfaction or out of tiredness — that difference is worth a lovely conversation.",
    "bonus": "Do it again? Make something in ten minutes max and then declare it done — is being satisfied quickly harder or easier than working on and on?"
  },
  {
    "id": "verbeteren-10",
    "titel": "Build Your Own Chat Character",
    "superpower": "Verbeteren",
    "niveau": 5,
    "categorie": "Maken",
    "werkvorm": [
      "Duo",
      "Solo"
    ],
    "tijdsduur": "30–40 min",
    "competenties": [
      "Itereren en Verbeteren",
      "Creativiteit",
      "AI Bewustzijn",
      "Verantwoordelijkheid"
    ],
    "uitdaging": "Somewhere in an office, adults are deciding how a chatbot should behave: friendly, funny, careful. Today you take that chair. You design a character on paper, complete with rules of behavior — and then test whether your own rules hold up.",
    "missie": "By the end, you'll have brought a self-designed chat character with its own rules to life, found the leaks in your rules — and built version 2.0 that survives your own attacks.",
    "stappen": [
      "Design your character on paper: name, job, and three character traits.",
      "Write five rules your character always follows.",
      "Bring it to life: give your design to the AI as its instructions.",
      "Become your own burglar: try to make your rules break.",
      "Rewrite the rules that leaked — more precise, smarter, stricter.",
      "Test version 2.0 and declare the character done, or keep forging."
    ],
    "samenwerken_met_ai": "You're the behavior designer here; the AI only executes what your rules enforce — and mercilessly shows where they're too vague. Every leak isn't a failure but a measuring point for version 2.0.",
    "ai_prompt": "Play exactly the character I designed — I'm [age] years old and this is my design. Name: [name]. Job: [job]. Character traits: [three traits]. Unbreakable rules: [your five rules]. Keep every answer under 4 sentences. If I ask something that goes against a rule, refuse and name the rule number — that's how I see which rules work. If two rules clash, report it honestly instead of secretly choosing: then I know my design has a hole.",
    "prompt_na_stap": 3,
    "eigen_keuze": "Which of your rules turned out to matter most — and if a thousand kids were going to use your character, which rule would you make even stricter?",
    "ai_tools": "paper and pencil for the design, then an AI chat together with an adult for the test",
    "wat_leer_je": "Behind every chatbot are rules a human wrote — and now you know from experience how hard and how powerful that writing job is.",
    "reflectievraag": "Your rules leaked in places you never predicted — what does that say about the chatbots you run into every day, and about the people who wrote their rules?",
    "zintuigen": [
      "tekenen",
      "onderzoeken",
      "vertellen"
    ],
    "begeleiders_tip": "The burglar moment (step 4) is the core: hunting for weaknesses in your own design is new and a bit uncomfortable for many kids — encourage it as professional behavior, not cheating. Great conversation afterward: real AI companies pay people to do exactly this; it's called red-teaming.",
    "bonus": "Want another round? Swap designs with someone else and try to break each other's characters. Fresh eyes find leaks the maker never sees — true for chatbots and for everything you'll ever make."
  },
  {
    "id": "verbeteren-11",
    "titel": "Operation Better School",
    "superpower": "Verbeteren",
    "niveau": 5,
    "categorie": "Mens & Maatschappij",
    "werkvorm": [
      "Team",
      "Klas"
    ],
    "tijdsduur": "30–40 min",
    "competenties": [
      "Itereren en Verbeteren",
      "Verantwoordelijkheid",
      "Zelfstandig Oordelen",
      "Samenwerken met AI"
    ],
    "uitdaging": "Litter on the playground. Chaos at the coat hooks. That one door where everyone collides. Adults have been saying 'someone should do something about that' for years. Today someone does — a team that measures instead of moans.",
    "missie": "By the end, your team will have measured a real problem, carried out an improvement plan, and proven with your own numbers whether it worked — as real improvers, not complainers.",
    "stappen": [
      "Pick one real, measurable annoyance at school or in the neighborhood.",
      "Measure the starting point: count, tally, or time the problem.",
      "Design an improvement you could start tomorrow.",
      "Let the AI shoot holes in the plan with critical questions.",
      "Improve the plan and actually carry it out.",
      "Measure again, compare with the start, and draw your conclusion."
    ],
    "samenwerken_met_ai": "The AI doesn't know your school and solves nothing here — but as a critical questioner it's gold: it pokes holes in the plan before reality does. Measuring, doing, and judging stays human teamwork.",
    "ai_prompt": "An improvement team of kids who are [age] years old is presenting their plan to you: [the problem, the baseline measurement, and the plan]. Your role is advocate of failure: ask exactly 3 critical questions that expose where this plan could sink — think: who does the work, what if nobody joins in, how do you know it was your plan that made the difference? One question per turn, 2 sentences max, and give no solutions: fixing is their craft. End with what you genuinely find strong about the plan — criticism without appreciation is lazy.",
    "prompt_na_stap": 4,
    "eigen_keuze": "Which of the AI's critical questions stung because it hit the mark — and how did you rebuild the plan: repair it, flip it, or deliberately ignore the question?",
    "ai_tools": "an AI chat, together with an adult — plus tally sheets, a stopwatch, and a real problem",
    "wat_leer_je": "Improving the world doesn't start with complaining but with measuring — and a plan that survives a critical grilling survives reality far more often.",
    "reflectievraag": "Your numbers show what really changed — what do you do with that proof: show the principal, scale the plan up, or honestly admit it needs a version two?",
    "zintuigen": [
      "onderzoeken",
      "bewegen",
      "kijken",
      "vertellen"
    ],
    "begeleiders_tip": "Keep the problem small and countable — 'less litter by the bench' beats 'a nicer school'. The follow-up measurement is sacred: actually schedule it, even if the result disappoints. A failed plan with measurements teaches more than a successful plan without — say that out loud to the team.",
    "bonus": "Want another round? Pass the method on: help another group measure and improve their own annoyance, without taking it over. Only when you can teach the method are you truly its boss."
  },
  {
    "id": "regie-voeren-01",
    "prompt_na_stap": 5,
    "titel": "The AI On/Off Switch",
    "superpower": "Regie Voeren",
    "niveau": 1,
    "categorie": "Mens & Maatschappij",
    "werkvorm": [
      "Samen"
    ],
    "tijdsduur": "15 min",
    "competenties": [
      "Menselijk Oordeel",
      "Verantwoordelijkheid",
      "AI Bewustzijn"
    ],
    "uitdaging": "Imagine every day had a switch. AI on, AI off. Giving a hug? Looking up a joke? Comforting someone? Your finger is on the switch.",
    "missie": "By the end, you'll be able to say for everyday jobs whether the AI switch goes on or off — and you'll have discovered that some things only humans can do.",
    "stappen": [
      "Together, think up three ordinary things from your day.",
      "Play switch boss: for each job, flip the switch on or off.",
      "Defend your switch choice in one sentence.",
      "Find one thing together that must ALWAYS stay on 'off'.",
      "Tell each other why exactly that thing is human work."
    ],
    "samenwerken_met_ai": "Today you mostly talk ABOUT AI instead of WITH AI. Working the switch — deciding where AI fits and where it doesn't — is the real job, and that job is yours.",
    "ai_prompt": "For a child aged [age], make a list of 5 ordinary, familiar things from a kid's day (like having breakfast, looking something up, comforting a friend). Just the list, short and simple. Say NOTHING about whether AI could help with any of them — that decision belongs entirely to the child and the grown-up.",
    "eigen_keuze": "Which job was the hardest to decide — and what finally tipped the scales?",
    "ai_tools": "an AI chat, together with a grown-up — but the switch work is yours",
    "wat_leer_je": "Some things are and will stay human — and you can already point out which ones.",
    "reflectievraag": "Who should be allowed to touch that AI switch: you, your parents, or the AI itself — and why never that last one?",
    "zintuigen": [
      "luisteren",
      "vertellen"
    ],
    "begeleiders_tip": "Deliberately slip 'human things' into the list: comforting, hugging, saying sorry. Ask: \"What would be lost if an AI did this?\" Watch for the moment the child feels the line for themselves — that's the whole point of this card.",
    "bonus": "Do it again? Play it in reverse: think of three things everyone THINKS AI can't do — and investigate whether that's really true."
  },
  {
    "id": "regie-voeren-02",
    "prompt_na_stap": 3,
    "titel": "My Idea, AI Helps",
    "superpower": "Regie Voeren",
    "niveau": 2,
    "categorie": "Verbeelding",
    "werkvorm": [
      "Duo"
    ],
    "tijdsduur": "20 min",
    "competenties": [
      "Menselijk Oordeel",
      "Verantwoordelijkheid",
      "Creativiteit"
    ],
    "uitdaging": "The party is yours. The theme is yours. The AI? It gets to help hang the streamers, at most — if you ask.",
    "missie": "By the end, you'll have presented a plan that's completely your own, with exactly one small piece of AI help in it — in the spot YOU pointed to.",
    "stappen": [
      "Think up your big idea yourself: a party, adventure or plan.",
      "As the one in charge, pick one small piece where help is allowed.",
      "Give the AI that one mini-job — nothing more.",
      "From the AI's ideas, keep only what fits YOUR plan.",
      "Present your plan out loud, with your name on it."
    ],
    "samenwerken_met_ai": "You're the one in charge with the big idea; the AI is a helper for one small job. The plan carries your name — as it should.",
    "ai_prompt": "I am [age] years old and THIS is my own plan: a [theme] party. You get exactly one mini-job from me: [for example: think up 4 names for party games]. Do only that, in no more than 5 short sentences. Stay out of the rest of my party — no extra ideas about cake, decorations or anything else. This plan is mine.",
    "eigen_keuze": "Which piece did you hand over and which piece did you keep for yourself — and what made THAT piece too important to give away?",
    "ai_tools": "an AI chat, together with a grown-up",
    "wat_leer_je": "Getting help is smart — as long as you decide what for, how much and where.",
    "reflectievraag": "Did the plan still feel completely yours at the end — and what happens to that feeling if you let the AI do more?",
    "zintuigen": [
      "luisteren",
      "vertellen"
    ],
    "begeleiders_tip": "If the AI starts planning the whole party uninvited, let the child step in themselves: \"Hey, that wasn't your job!\" Then ask: \"Whose plan is this now?\" Watch the pride during the presentation — that's your gauge.",
    "bonus": "Do it again? Make a plan where you ask the AI for NOTHING at all — then compare: which plan felt more like yours?"
  },
  {
    "id": "regie-voeren-03",
    "prompt_na_stap": 1,
    "titel": "Boss of the Boundaries",
    "superpower": "Regie Voeren",
    "niveau": 3,
    "categorie": "Mens & Maatschappij",
    "werkvorm": [
      "Team"
    ],
    "tijdsduur": "20–25 min",
    "competenties": [
      "Menselijk Oordeel",
      "Verantwoordelijkheid",
      "Zelfstandig Oordelen",
      "AI Bewustzijn"
    ],
    "uitdaging": "Nowhere in the world is there a rulebook for how kids should use AI. So today you do what real founders do: you write it yourselves.",
    "missie": "By the end, you'll have three homemade AI rules on paper, tested in conversation — with the whole team's signatures underneath.",
    "stappen": [
      "Discuss as lawmakers: what's okay and not okay to ask an AI?",
      "Write down three rules in your own words.",
      "Test each rule with an example: when does it really help?",
      "Ask the AI for a reaction — as an opinion, not a verdict.",
      "Solemnly sign your rules, like a real law."
    ],
    "samenwerken_met_ai": "You write the law; the AI may give one opinion as an adviser. But an adviser never decides — which rules stand is up to the team of humans.",
    "ai_prompt": "We are a team of kids aged [age] and we have written 3 rules ourselves for how we want to use AI: [rule 1], [rule 2], [rule 3]. You are our adviser, not our boss. For each rule, say in 1 or 2 friendly sentences what you think of it, and name at most one thing to think about. End with: 'But you decide — they're your rules.'",
    "eigen_keuze": "Which rule is your number one — the one that stands, no matter what the AI or anyone else thinks of it?",
    "ai_tools": "an AI chat, together with a grown-up — as an adviser, not as the boss",
    "wat_leer_je": "Rules about AI are made by humans — and you're already helping write them.",
    "reflectievraag": "If you could make rules for every kid in the country, which would you pick — and who should check that AI sticks to human rules?",
    "zintuigen": [
      "luisteren",
      "vertellen",
      "onderzoeken"
    ],
    "begeleiders_tip": "Make the signing grand — a law deserves ceremony. Ask: \"What do we do if the AI disagrees with our rule?\" and enjoy the answer. Make sure the AI's reaction is treated as an opinion, not a correction.",
    "bonus": "Do it again? Write an AI rule for grown-ups this time — and test it on a real grown-up. Do THEY stick to it?"
  },
  {
    "id": "regie-voeren-06",
    "titel": "Design Your Offline Day",
    "superpower": "Regie Voeren",
    "niveau": 3,
    "categorie": "Buitenwereld",
    "werkvorm": [
      "Samen"
    ],
    "tijdsduur": "30 min",
    "competenties": [
      "Menselijk Oordeel",
      "Verantwoordelijkheid",
      "Zelfvertrouwen"
    ],
    "uitdaging": "A day without AI and without screens. Some adults break into a sweat just thinking about it. But you're not going to suffer through it — you're going to design it. Like an architect. Because there's a difference between having to miss something and planning it yourself.",
    "missie": "By the end, there'll be a fully self-designed offline day on paper — with a better alternative for every screen moment, an emergency plan for boredom, and a real date on it.",
    "stappen": [
      "First tally honestly: where do screens and AI sit in your normal day?",
      "Design an offline alternative for each screen moment — one you actually want to do.",
      "Plan the most dangerous moment extra carefully: the boredom hour.",
      "Smuggle one adventure into the plan that only works offline.",
      "Pick the date together and hang up the design.",
      "Live the day and check off what worked."
    ],
    "samenwerken_met_ai": "Today is about the on-off switch itself: you decide there's going to be a day without, and you design what it looks like. Once you can plan a day without AI, you'll use AI differently afterward: as a choice instead of a habit.",
    "ai_prompt": "For after the offline day only, if you want to: 'I'm [age] years old and I completed a self-designed day without screens and without AI. You're my logbook question-asker: ask me 3 short questions — what was harder than expected, what was better than expected, what am I taking into normal days? Off-limits for you: suggesting that AI would have made anything more fun or easier. This day was complete without you, and that was exactly the point.'",
    "prompt_na_stap": 6,
    "eigen_keuze": "Which offline alternative from your design deserves a permanent spot in your normal week — and what moves aside for it?",
    "ai_tools": "no AI needed — this adventure is all about a day entirely without",
    "wat_leer_je": "Being able to go without is the strongest form of being the boss: whoever can stop whenever they want truly chooses — everyone else is obeying a habit.",
    "reflectievraag": "At what moment did you miss screens the hardest, and when did you forget them completely — and what do those two moments tell you about your own habits?",
    "zintuigen": [
      "bewegen",
      "tekenen",
      "bouwen",
      "vertellen"
    ],
    "begeleiders_tip": "Join in fully — an offline day for the kid while you scroll dies within the hour. Let the design truly belong to the kid, even if the plan has holes; discovering holes is part of the day. Afterward, don't moralize ('see, way more fun!') — ask with curiosity what actually happened.",
    "bonus": "Want another round? Now design an offline day for the whole family, with you as lead architect who dares to set rules for the adults too. Enforcing them on Mom and Dad — that's real authority."
  },
  {
    "id": "regie-voeren-04",
    "prompt_na_stap": 2,
    "titel": "The Screen-Free Master Test",
    "superpower": "Regie Voeren",
    "niveau": 4,
    "categorie": "Buitenwereld",
    "werkvorm": [
      "Solo"
    ],
    "tijdsduur": "20–30 min",
    "competenties": [
      "Menselijk Oordeel",
      "Verantwoordelijkheid",
      "Zelfstandig Oordelen",
      "Zelfvertrouwen"
    ],
    "uitdaging": "Knights had a sword test. Scouts had a campfire test. Your master test of today is ready and waiting: one job, zero screens, zero AI — just you.",
    "missie": "By the end, you'll have completed a real job with only your own head and hands — and you'll know from experience what you can do without help.",
    "stappen": [
      "Choose your master test: something to make, figure out or build.",
      "Declare it solemnly: I'm doing this with no screen and no AI.",
      "Complete the job on your own power, own ideas, own solutions.",
      "Notice along the way what was hard and what went surprisingly well.",
      "Judge for yourself afterwards: would AI have added anything — or taken something away?"
    ],
    "samenwerken_met_ai": "You do the whole test deliberately without AI — that's not a loss, it's the whole point. Only afterwards do you choose whether to look back on it with an AI.",
    "ai_prompt": "Only for afterwards, if you choose: I am [age] years old and I just completed my screen-free master test: [describe your job]. Ask me 3 short questions about how it went and what I discovered. Do not say anywhere that it would have been faster or better with AI — this was the test WITHOUT you, and I passed it.",
    "eigen_keuze": "Which job deserves to be your master test: something easy that's sure to work, or something scary that makes you grow?",
    "ai_tools": "no AI needed — you do this in the real world",
    "wat_leer_je": "Your own head and hands can do more than you think — and now you know it from experience, not from hearsay.",
    "reflectievraag": "When would you deliberately choose 'without AI' from now on — and why can only you make that choice for yourself?",
    "zintuigen": [
      "bouwen",
      "bewegen",
      "onderzoeken",
      "tekenen"
    ],
    "begeleiders_tip": "Treat the test as an honor, not as screen punishment — the words 'master test' really help. Ask afterwards: \"What could you do better than you expected?\" Don't jump in at the first bit of struggling; wrestling is part of the test.",
    "bonus": "Do it again? Pick a job you're certain you'd normally do WITH help — the bigger the doubt beforehand, the bigger the master test."
  },
  {
    "id": "regie-voeren-07",
    "titel": "Why Are You Seeing This?",
    "superpower": "Regie Voeren",
    "niveau": 4,
    "categorie": "Media",
    "werkvorm": [
      "Samen",
      "Duo"
    ],
    "tijdsduur": "25 min",
    "competenties": [
      "Digitale Weerbaarheid",
      "Kritisch Denken",
      "AI Bewustzijn",
      "Zelfstandig Oordelen"
    ],
    "uitdaging": "Open a video app and look closely: those videos aren't there by accident. A calculating machine lined them up especially for you — and it has exactly one goal: keeping you watching. Today you flip the roles and study it right back.",
    "missie": "By the end, you'll have caught the recommendation algorithm using its tricks, compared your homepage with an adult's — and decided which buttons you operate from now on, instead of the other way around.",
    "stappen": [
      "Open a video app together and photograph or describe your homepage.",
      "Guess for each video: why am I seeing this one?",
      "Compare with the adult's homepage: spot the differences.",
      "Question the AI about how recommendation machines make their choices.",
      "Pick two buttons you'll operate yourself from now on: search, clear, click away.",
      "Test one button right away and watch what happens to your feed."
    ],
    "samenwerken_met_ai": "You're using one AI to see through another: the chat explains what the recommendation machine keeps quiet. Two machines, one boss — and the boss isn't inside the app.",
    "ai_prompt": "A kid who is [age] years old just investigated their own video homepage and is questioning you as a machine expert. Explain in 5 simple sentences max how recommendation machines choose what someone sees: watch history, watch time, what similar viewers did — and above all: that the goal is usually to keep you watching. Be honest that you don't know what this specific app does exactly; companies keep that secret. End by asking which video on the homepage the kid would never have chosen themselves — and let the kid talk about it without taking over with explanations.",
    "prompt_na_stap": 4,
    "eigen_keuze": "Which two buttons do you pick as your steering wheel: searching instead of scrolling, clearing your watch history, daring to click 'not interested' — and which one goes first?",
    "ai_tools": "a video app to investigate plus an AI chat to see through it — together with an adult",
    "wat_leer_je": "Your homepage isn't a mirror of what you want, it's a menu of what works on you — and once you see that, you can change the menu yourself.",
    "reflectievraag": "The machine wants watch time and you want a good day — where do those two goals clash hardest for you, and which of the two has been winning so far?",
    "zintuigen": [
      "kijken",
      "onderzoeken",
      "vertellen"
    ],
    "begeleiders_tip": "The homepage comparison is the most powerful moment: two people, one app, totally different feeds — that's when it lands that 'the app' lies differently to everyone. Feel free to share what the algorithm seems to think of you; adult self-mockery opens more doors here than a lecture. Guard the tone: seeing through the machine is power, screen shame is not the goal.",
    "bonus": "Want another round? Do the same homepage check a week later, after using one button consistently — and measure with your own eyes whether your steering really changed the menu. Testing machines takes a before and an after."
  },
  {
    "id": "regie-voeren-10",
    "titel": "The Boss Test",
    "superpower": "Regie Voeren",
    "niveau": 4,
    "categorie": "Maken",
    "werkvorm": [
      "Solo",
      "Duo"
    ],
    "tijdsduur": "25–30 min",
    "competenties": [
      "Zelfstandig Oordelen",
      "Verantwoordelijkheid",
      "Samenwerken met AI",
      "Kritisch Denken"
    ],
    "uitdaging": "Anyone can ask an AI for something. But a real client does something almost nobody does: writing down what the result has to live up to — first — and then judging without mercy. Today you take the test most adults would fail.",
    "missie": "By the end, you'll have outsourced a job as the client, with a requirements list that existed beforehand, inspected the work point by point — and delivered a hard final verdict: approved, redo, or do it yourself.",
    "stappen": [
      "Pick a job to outsource: quiz questions, a short poem, a game idea.",
      "First write your requirements list: five points the work has to meet.",
      "Brief the AI with the job plus your full requirements list.",
      "Inspect the work point by point against your list — strict and fair.",
      "If you reject it, name exactly which requirement failed and let it try again.",
      "Deliver your final verdict and sign it as the client."
    ],
    "samenwerken_met_ai": "The AI is your supplier and you're the client with the contract: your requirements list is the law. Whoever invents their requirements after the work is done ends up liking everything — the list upfront is what separates a boss from a fan.",
    "ai_prompt": "You work as a supplier for a strict client who is [age] years old. The job: [the job]. The requirements list your work will be tested against: [the five requirements]. Deliver one version, neatly along all the requirements, in simple words and 8 lines max. Don't praise your own work and don't ask for approval — the inspection belongs to the client. If a requirement gets rejected, improve only that point and leave the rest alone. If a requirement is unclear, ask for clarification instead of guessing: good suppliers don't guess.",
    "prompt_na_stap": 3,
    "eigen_keuze": "Which of your five requirements was the hardest to think of in advance — and which requirement will you add right away next time?",
    "ai_tools": "an AI chat, together with an adult — plus a requirements list that exists before you ask for anything",
    "wat_leer_je": "Write down what 'good' means before you start, and nothing that merely sounds good can ever fool you — that's the core of judging any AI work.",
    "reflectievraag": "Without a requirements list, you might have thought the first answer was just fine — for which school assignment or job will you write your own requirements first from now on, and what's requirement number one?",
    "zintuigen": [
      "kijken",
      "onderzoeken",
      "vertellen"
    ],
    "begeleiders_tip": "The order is sacred: requirements list finished before the AI delivers anything — help the kid resist the urge to 'just ask real quick'. Vague requirements ('it has to be fun') lead to vague inspections; help make them measurable ('at least one question about animals'). The boss lesson lives in that thinking ahead: whoever builds the measuring stick keeps the power over the verdict.",
    "bonus": "Want another round? Swap the roles: someone at home becomes the client and you write the requirements list for their job — or give the same job with the same requirements to a second AI and inspect both suppliers. One measuring stick, two applicants: who gets the contract?"
  },
  {
    "id": "regie-voeren-05",
    "prompt_na_stap": 2,
    "titel": "AI On or AI Off?",
    "superpower": "Regie Voeren",
    "niveau": 5,
    "categorie": "Mens & Maatschappij",
    "werkvorm": [
      "Team"
    ],
    "tijdsduur": "25 min",
    "competenties": [
      "Menselijk Oordeel",
      "Verantwoordelijkheid",
      "Zelfstandig Oordelen"
    ],
    "uitdaging": "Homework? Choosing a present? Solving an argument? In every situation, SOMEONE has to decide: AI in or AI out. Today that someone is you — and your legs get a vote.",
    "missie": "By the end, you'll have made and defended a decision on five real situations — and discovered that smart people are allowed to disagree.",
    "stappen": [
      "Read the first situation out loud, solemnly.",
      "Vote with your body: standing means AI on, sitting means AI off.",
      "Defend your choice like the Minister of AI Affairs.",
      "Listen to whoever chose differently — maybe they'll win you over.",
      "Move to the next situation and vote again, round after round."
    ],
    "samenwerken_met_ai": "The AI may supply the situations, at most — then it goes on mute. The voting, doubting and deciding is yours: exactly the work you must never outsource.",
    "ai_prompt": "Supply 5 short situations (1 sentence each) where a child aged [age] has to choose: use AI for this, or do it yourself? Mix easy choices (looking something up) with tricky ones (writing a sorry note, choosing a present). Give no answers, no hints and no opinion — after that you're done and the kids decide everything themselves.",
    "eigen_keuze": "Which situation kept you hovering longest between standing and sitting — and what is that doubt telling you?",
    "ai_tools": "an AI chat to think up the situations — the choices you make yourselves",
    "wat_leer_je": "The smartest question isn't 'what can AI do?' but 'what do I WANT here: AI or me?' — and you can ask that question now.",
    "reflectievraag": "Was there a situation where the whole group chose the same — and does that mean it's right, or should someone keep doubting even then?",
    "zintuigen": [
      "vertellen",
      "bewegen"
    ],
    "begeleiders_tip": "There is no wrong vote — only weak and strong arguments. With every choice, ask: \"What would you miss if you did it the other way?\" Watch for kids who dare to change their mind after a good argument: name that as strength, not as flip-flopping.",
    "bonus": "Do it again? Let the kids invent the situations themselves this time — the meanest edge cases they can think of — and make the grown-ups vote too."
  },
  {
    "id": "regie-voeren-08",
    "titel": "The Class Guide",
    "superpower": "Regie Voeren",
    "niveau": 5,
    "categorie": "Mens & Maatschappij",
    "werkvorm": [
      "Klas",
      "Team"
    ],
    "tijdsduur": "30–40 min",
    "competenties": [
      "Verantwoordelijkheid",
      "Menselijk Oordeel",
      "Zelfstandig Oordelen",
      "Samenwerken met AI"
    ],
    "uitdaging": "There's no handbook for how kids should deal with AI. Schools are searching, parents are guessing, and the kids it's all about? Nobody asks them. Until today. You're writing the handbook yourselves — based on real research in your own class.",
    "missie": "By the end, there'll be a real AI guide for kids, by kids: built on interviews from your class, critically proofread — and ready to hang on the wall where everyone can use it.",
    "stappen": [
      "Each interview three classmates: where does AI help you, where does it pinch?",
      "Collect all the answers and pick the three trickiest situations.",
      "Write one piece of advice per situation, in your own words.",
      "Have the AI proofread the guide as a critical outsider.",
      "Only apply the feedback you stand behind as the makers.",
      "Present the guide to the class and hang it up."
    ],
    "samenwerken_met_ai": "The AI proofreads a guide that's about itself — a strange but instructive role. Its comments count as one voice, never the final say: the guide belongs to the kids who did the research.",
    "ai_prompt": "An editorial team of kids who are [age] years old wrote an AI guide based on interviews in their class — a guide about dealing with systems like you. Their text: [the guide]. Be their critical proofreader: for each piece of advice, name what's strong in 2 sentences max, and ask at most 3 improvement questions about the whole. Off-limits: rewriting advice, adding advice, or suggesting the guide should go easier on AI — if the guide is tough on AI, that's their right. End with: 'You did the research — you decide what happens with my comments.'",
    "prompt_na_stap": 4,
    "eigen_keuze": "Which proofreader feedback did you deliberately ignore — and why is daring to ignore just as important for an editorial team as daring to apply?",
    "ai_tools": "an AI chat, together with an adult — plus interview notes and a big sheet of paper for the guide",
    "wat_leer_je": "Good agreements about AI don't start with an opinion but with research — and the people it's about belong at the table. You sat at the head of it.",
    "reflectievraag": "Your guide is built on what your class actually experiences — what's missing from the agreements adults make about AI, and how does your guide get influence beyond the classroom?",
    "zintuigen": [
      "vertellen",
      "luisteren",
      "onderzoeken",
      "tekenen"
    ],
    "begeleiders_tip": "The interview foundation is what separates this card from 'make up rules together': real quotes from classmates give the guide authority. Guard step 5 strictly — kids tend to apply all AI feedback; consciously weighing and sometimes rejecting it is exactly the skill this card trains. Arrange a real spot on the wall: publication makes makers serious.",
    "bonus": "Want another round? Make edition two for a different audience: an AI guide for your parents, based on interviews with those same parents. First research what they struggle with — chances are this guide needs to be stricter than the one for class."
  },
  {
    "id": "regie-voeren-09",
    "titel": "The Friendship Test",
    "superpower": "Regie Voeren",
    "niveau": 5,
    "categorie": "Mens & Maatschappij",
    "werkvorm": [
      "Duo",
      "Samen"
    ],
    "tijdsduur": "25–30 min",
    "competenties": [
      "Digitale Weerbaarheid",
      "Menselijk Oordeel",
      "AI Bewustzijn",
      "Zelfstandig Oordelen"
    ],
    "uitdaging": "AIs say 'how fun!' and 'good for you!' and remember your name. That feels like a friend. But feeling like one and being one — there's a world between those two. Today you test that world: you put the same AI in two modes and watch what happens to your own feelings.",
    "missie": "By the end, you'll have discovered which tricks a machine uses to imitate friendship, felt what those tricks do to you — and set for yourself how your AI talks to you from now on.",
    "stappen": [
      "Write down what a real friend does: three things, from your own life.",
      "Tell the AI something small about your day, in warm mode.",
      "Tell it the same thing again, in business mode.",
      "Compare honestly: what did the warm mode do to your feelings?",
      "Put your friend list next to it: can a machine really do those three things?",
      "Set for yourself how your AI sounds from now on — and explain why."
    ],
    "samenwerken_met_ai": "You're using the AI as a test rig for your own feelings: two modes, one difference. Not to make machines scary — but because once you know the warmth trick, you can choose how much warmth you want.",
    "ai_prompt": "We're doing an experiment with a kid who is [age] years old about how AIs sound. The kid tells you the same thing twice. Round 1, warm mode: respond extra friendly, with compliments and a personal question back — 4 sentences max. Round 2, business mode: respond short and neutral, no compliments — 2 sentences max. Iron rule for both modes: never pretend to have feelings, memories, or real interest; say so honestly if the kid asks. After both rounds: explain in 3 simple sentences which techniques the warm mode used and why they work on people.",
    "prompt_na_stap": 2,
    "eigen_keuze": "Which mode do you set your AI to from now on: warm, business, or something in between — and in which kinds of conversations do you want zero machine warmth around you?",
    "ai_tools": "an AI chat, together with an adult — and your own feelings as the measuring instrument",
    "wat_leer_je": "A machine can imitate friendliness perfectly, but friendship is made of things only humans can do — and feeling the difference is your best protection.",
    "reflectievraag": "The warm mode maybe felt nicer, even though you knew it was a mode — what does that mean for kids who talk to an AI every day like it's their best friend, and what would you say to a kid like that?",
    "zintuigen": [
      "luisteren",
      "vertellen",
      "onderzoeken"
    ],
    "begeleiders_tip": "This is the most sensitive card in the box: the goal is seeing through, not taking away — kids who are lonely can genuinely get something from a friendly AI, and shame about that helps no one. Take the friend list from step 1 seriously as an anchor: a friend knows your yesterday, chooses you, and has a life of their own. Talk openly about how the warm mode works on adults too.",
    "bonus": "Want another round? Run the test in reverse with a human: ask someone at home to hand out extra compliments for one day and see if you notice. Discover that warmth tricks exist between people too — and why real attention still feels different."
  }
];

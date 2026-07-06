# AI Explorer Academy

Een speelse, veilige web-app (NL/EN) waarin kinderen van 9–12 jaar samen met een volwassene
**Explorer Cards** doen: mini AI-avonturen. Kernidee: *AI is het vertrekpunt, niet het
eindpunt — de mens houdt de regie.*

A playful, safe web app (Dutch/English) where kids aged 9–12 do mini AI adventures together
with a grown-up. Core idea: *AI is the starting point, not the end point — the human stays
in charge.*

## Openen / Open it

- **Online:** de gepubliceerde versie werkt direct in elke browser en is te installeren als
  app (via "Zet op beginscherm" / "Add to Home Screen"). Werkt daarna ook offline.
- **Lokaal:** dubbelklik op `index.html` — geen installatie nodig.

## Wat zit erin? / What's inside

- **54 Explorer Cards** in het Nederlands én Engels (taalknop 🇳🇱/🇬🇧 rechtsboven), waarvan
  10 offline "Buitenwereld"-avonturen.
- **5 AI-superkrachten** met eigen mascotte-artwork: 🦊 Vonk (Ontdekken), 🐝 Zoem
  (Samenwerken), 🦉 Loep (Controleren), 🦫 Bikkel (Verbeteren), 🐧 Kompas (De baas over
  je AI / Boss of Your AI).
- **6-staps avonturenflow** per kaart: Uitdaging → Missie → Aan de slag! (checklist mét de
  kopieerbare, kindveilige AI-prompt op de juiste plek in de flow) → Jij beslist →
  Reflectie → Afsluiting met **bonus-uitdaging** voor herhaling.
- **Explorer Paspoort**: stempels, voortgang, "Nog een keer!"-teller.
- **Begeleidersmodus**: filosofie, gesprekstips en de 3 testvragen per kaart.
- **PWA**: installeerbaar op tablet/telefoon, werkt offline na eerste bezoek.

## Privacy & veiligheid

- **Geen accounts, geen kinderdata.** Voortgang blijft in de browser van dit apparaat.
- **Geen ingebouwde chatbot.** AI-gebruik loopt via de volwassene, die de kant-en-klare
  prompt in hun eigen AI-tool plakt (ChatGPT, Claude, …). Elke prompt bevat kindveilige
  vangrails (korte antwoorden, eerlijk over onzekerheid, neemt het werk niet over).
- Elk avontuur eindigt met een reflectievraag — menselijke regie als slot.

## Nieuwe kaart toevoegen (geen programmeerkennis nodig)

1. Open `cards-nl.js` en kopieer een bestaand kaart-object; geef het een uniek `id`.
2. Doe hetzelfde in `cards-en.js` met **hetzelfde `id`** (Engelse tekst).
3. Sla op, herlaad — klaar. Filters, paspoort en bibliotheek passen zich automatisch aan.

De interne sleutels (`superpower`, `categorie`, `werkvorm`, `competenties`, `zintuigen`)
blijven in beide talen de Nederlandse waarden; alleen vrije tekst verschilt per taal.
Geldige waarden staan in `config.js`.

## Bestanden

```
index.html            → start hier / start here
styles.css            → opmaak
config.js             → superpowers, niveaus, mascottes, kleuren (NL+EN labels)
i18n.js               → interface-teksten NL/EN + taalwissel
cards-nl.js           → alle 29 kaarten, Nederlands
cards-en.js           → alle 29 kaarten, Engels
storage.js            → voortgang lokaal (localStorage)
app.js                → schermen, navigatie, confetti
manifest.json + sw.js → installeerbaar & offline (PWA)
icon-*.png            → app-iconen
```

Versie 2.0 · © Iris Fickeryounge · Gebouwd volgens PRD AI Explorer Academy v1

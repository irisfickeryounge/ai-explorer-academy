/*
 * AI Explorer Academy ‚Äî voortgang lokaal op het apparaat (¬ß9 privacy).
 *
 * GEEN accounts, GEEN kinderdata naar buiten. Alles blijft in de browser
 * (localStorage) van dit ene apparaat. Wist je de browsergegevens, dan is
 * de voortgang weg ‚Äî dat is bewust: er is geen server en geen profiel.
 *
 * Datavorm:
 * {
 *   cards: {
 *     "ontdekken-01": {
 *       opened: true,          // geopend
 *       started: true,         // avontuur gestart
 *       completed: 2,          // hoe vaak afgerond  ‚Üê kernmetric "Nog een keer!"
 *       rating: "up"|"down",   // "Was dit leuk?"
 *       reflection: "‚Ä¶",       // optioneel eigen antwoord van het kind
 *       checked: [true,false], // afgevinkte stappen
 *       guide: { ouder: "ja"|"nee", leerkracht: "ja"|"nee" } // 3 testvragen
 *     }
 *   }
 * }
 */
(function () {
  const KEY = 'ai-explorer-academy.v1';

  function readAll() {
    try {
      const raw = localStorage.getItem(KEY);
      if (!raw) return { cards: {} };
      const data = JSON.parse(raw);
      if (!data.cards) data.cards = {};
      return data;
    } catch (e) {
      // Corrupte of geblokkeerde opslag: val terug op leeg (app blijft werken).
      return { cards: {} };
    }
  }

  function writeAll(data) {
    try {
      localStorage.setItem(KEY, JSON.stringify(data));
    } catch (e) {
      // Opslag vol of geblokkeerd (bijv. priv√©modus): stilletjes negeren.
    }
  }

  function card(id) {
    const data = readAll();
    return data.cards[id] || {};
  }

  // Werk √©√©n kaart bij met een patch-object en sla op.
  function update(id, patch) {
    const data = readAll();
    const prev = data.cards[id] || {};
    data.cards[id] = Object.assign({}, prev, patch);
    writeAll(data);
    return data.cards[id];
  }

  const Progress = {
    KEY,

    get: card,
    all: function () { return readAll().cards; },

    markOpened: function (id) {
      const c = card(id);
      if (!c.opened) update(id, { opened: true });
    },

    markStarted: function (id) {
      const c = card(id);
      if (!c.started) update(id, { started: true });
    },

    // Avontuur afgerond ‚Üí verhoog de "Nog een keer!"-teller.
    markCompleted: function (id) {
      const c = card(id);
      return update(id, { completed: (c.completed || 0) + 1, started: true, opened: true });
    },

    completedCount: function (id) {
      return card(id).completed || 0;
    },

    isCompleted: function (id) {
      return (card(id).completed || 0) > 0;
    },

    // Herhaal-favoriet: vaker dan √©√©n keer afgerond.
    isRepeatFavourite: function (id) {
      return (card(id).completed || 0) >= 2;
    },

    setRating: function (id, rating) {
      update(id, { rating: rating });
    },

    setReflection: function (id, text) {
      update(id, { reflection: text });
    },

    setChecked: function (id, checkedArray) {
      update(id, { checked: checkedArray });
    },

    setGuideFeedback: function (id, wie, antwoord) {
      const c = card(id);
      const guide = Object.assign({}, c.guide);
      guide[wie] = antwoord;
      update(id, { guide: guide });
    },

    // Wis alle voortgang (voor de begeleidersmodus / opnieuw testen).
    reset: function () {
      writeAll({ cards: {} });
    },
  };

  window.Progress = Progress;
})();

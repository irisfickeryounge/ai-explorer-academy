/*
 * AI Explorer Academy — app-logica (router + schermen), tweetalig NL/EN.
 *
 * Vanilla JS, geen build-stap: dubbelklik index.html en het draait.
 * Schermen (§7): Home → Bibliotheek → Kaartdetail (7 stappen) → Paspoort → Begeleider.
 *
 * Filosofie zit in de flow verankerd: elk avontuur eindigt met een
 * reflectievraag (menselijke regie), er is geen ingebouwde chatbot, en
 * voortgang blijft lokaal (zie storage.js).
 */
(function () {
  'use strict';

  const CFG = window.CONFIG;
  const P = window.Progress;
  const app = document.getElementById('app');

  // ── Hulpjes ────────────────────────────────────────────────────
  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }
  // Kaarten van de huidige taal (EN valt terug op NL als vertaling ontbreekt).
  function allCards() {
    return (window.I18N.lang === 'en' && Array.isArray(window.CARDS_EN))
      ? window.CARDS_EN : window.CARDS_NL;
  }
  function byId(id) { return allCards().find(function (c) { return c.id === id; }); }
  function sp(name) { return CFG.SUPERPOWERS[name]; }
  function niv(n) { return CFG.NIVEAUS[n]; }
  const L = window.L;

  // Gelokaliseerde labels voor enum-sleutels
  function catLabel(k) { const c = CFG.CATEGORIEEN[k]; return c ? L(c.label) : k; }
  function catIcon(k) { const c = CFG.CATEGORIEEN[k]; return c ? c.icoon : ''; }
  function wvLabel(k) { const w = CFG.WERKVORMEN[k]; return w ? L(w.label) : k; }
  function wvIcon(k) { const w = CFG.WERKVORMEN[k]; return w ? w.icoon : ''; }
  function znLabel(k) { const z = CFG.ZINTUIGEN[k]; return z ? L(z.label) : k; }
  function znIcon(k) { const z = CFG.ZINTUIGEN[k]; return z ? z.icoon : ''; }
  function compLabel(k) { const c = CFG.COMPETENTIE_LABELS[k]; return c ? L(c) : k; }

  function tijdMin(str) { const m = String(str).match(/\d+/); return m ? parseInt(m[0], 10) : 0; }

  // ── Router ─────────────────────────────────────────────────────
  function parseHash() {
    const raw = (location.hash || '#/').replace(/^#/, '');
    const parts = raw.split('/').filter(Boolean);
    return { name: parts[0] || 'home', param: parts[1] || null };
  }
  function navigate(hash) { location.hash = hash; }

  const routes = {
    home: renderHome, bibliotheek: renderLibrary, kaart: renderCardDetail,
    paspoort: renderPassport, begeleider: renderGuide,
  };

  function render() {
    const route = parseHash();
    const fn = routes[route.name] || renderHome;
    window.scrollTo(0, 0);
    fn(route.param);
    const h = app.querySelector('[data-focus]');
    if (h) { h.setAttribute('tabindex', '-1'); h.focus({ preventScroll: true }); }
  }
  function rerender() { render(); }
  function paint(html) { app.innerHTML = html; }

  // ── Herbruikbare stukjes UI ────────────────────────────────────
  function topBar(opts) {
    opts = opts || {};
    const back = opts.back
      ? '<button class="iconbtn" data-back aria-label="' + esc(t('back')) + '">‹ ' + esc(t('back')) + '</button>'
      : '<span class="iconbtn ghost" aria-hidden="true"></span>';
    const otherLangLabel = window.I18N.lang === 'nl' ? 'EN' : 'NL';
    return (
      '<header class="topbar">' +
        back +
        '<a class="brand" href="#/" aria-label="' + esc(t('toHome')) + '">' +
          '<img class="brand-logo" src="icon-192.png" alt="">' +
          '<span class="brand-name">AI Explorer Academy</span>' +
        '</a>' +
        '<nav class="topnav" aria-label="Menu">' +
          '<button class="iconbtn langbtn" data-lang-toggle aria-label="' + esc(t('switchLang')) + '">' + otherLangLabel + '</button>' +
          '<a class="iconbtn" href="#/paspoort" title="' + esc(t('passportShort')) + '" aria-label="' + esc(t('passportShort')) + '"><svg viewBox="0 0 24 24" width="21" height="21" fill="currentColor" aria-hidden="true"><path d="M12 2l2.6 5.3 5.9.9-4.2 4.1 1 5.8L12 15.4l-5.3 2.7 1-5.8-4.2-4.1 5.9-.9z"/></svg></a>' +
          '<a class="iconbtn adult" href="#/begeleider" title="' + esc(t('guideShort')) + '" aria-label="' + esc(t('guideShort')) + '"><svg viewBox="0 0 24 24" width="21" height="21" fill="currentColor" aria-hidden="true"><path d="M12 12a4.5 4.5 0 100-9 4.5 4.5 0 000 9zm0 2.2c-4.6 0-8.5 2.3-8.5 5.2V21h17v-1.6c0-2.9-3.9-5.2-8.5-5.2z"/></svg></a>' +
        '</nav>' +
      '</header>'
    );
  }

  function levelBadge(n) {
    const l = niv(n);
    return '<span class="lvl-badge" title="' + esc(l.naam) + '">' + l.nummer + ' \u00b7 ' + esc(l.naam) + '</span>';
  }
  function chip(text, icon) {
    return '<span class="chip">' + (icon ? icon + ' ' : '') + esc(text) + '</span>';
  }

  function cardTile(c) {
    const s = sp(c.superpower);
    const fav = P.isRepeatFavourite(c.id);
    const done = P.isCompleted(c.id);
    return (
      '<a class="tile" href="#/kaart/' + c.id + '" style="--sp:' + s.kleur + ';--sp-soft:' + s.kleurZacht + '">' +
        '<div class="tile-top">' +
          '<span class="tile-sp"><img class="tile-symbol" src="' + s.symbool + '" alt="">' + esc(L(s.naam)) + '</span>' +
          (fav ? '<span class="tile-fav fav-badge" title="' + esc(t('favTitle')) + '">\u21bb</span>'
               : (done ? '<span class="tile-fav done-badge" title="' + esc(t('doneTitle')) + '">\u2713</span>' : '')) +
        '</div>' +
        '<h3 class="tile-title">' + esc(c.titel) + '</h3>' +
        '<div class="tile-meta">' +
          levelBadge(c.niveau) +
          c.werkvorm.map(function (w) { return chip(wvLabel(w)); }).join('') +
          '<span class="chip">' + esc(catLabel(c.categorie)) + '</span>' +
          '<span class="chip">' + esc(c.tijdsduur) + '</span>' +
        '</div>' +
      '</a>'
    );
  }

  function copyText(text, btn) {
    function ok() {
      const old = btn.textContent;
      btn.classList.add('copied');
      btn.textContent = t('copied');
      setTimeout(function () { btn.classList.remove('copied'); btn.textContent = old; }, 1800);
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(ok, function () { legacyCopy(text); ok(); });
    } else { legacyCopy(text); ok(); }
  }
  function legacyCopy(text) {
    const ta = document.createElement('textarea');
    ta.value = text; ta.style.position = 'fixed'; ta.style.opacity = '0';
    document.body.appendChild(ta); ta.focus(); ta.select();
    try { document.execCommand('copy'); } catch (e) {}
    document.body.removeChild(ta);
  }

  function speak(text) {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = window.I18N.lang === 'en' ? 'en-GB' : 'nl-NL';
    u.rate = 0.95;
    window.speechSynthesis.speak(u);
  }

  // ─────────────────────────────────────────────────────────────
  // 7.1  HOME
  // ─────────────────────────────────────────────────────────────
  function renderHome() {
    const cards = allCards();
    const tiles = CFG.SUPERPOWER_VOLGORDE.map(function (name) {
      const s = sp(name);
      const total = cards.filter(function (c) { return c.superpower === name; }).length;
      return (
        '<a class="power-tile" href="#/bibliotheek" data-sp="' + esc(name) + '" ' +
          'style="--sp:' + s.kleur + ';--sp-soft:' + s.kleurZacht + '">' +
          '<img class="power-img" src="' + s.afbeelding + '" alt="" loading="lazy">' +
          '<span class="power-name">' + esc(L(s.naam)) + '</span>' +
          '<span class="power-desc">' + esc(L(s.kort)) + '</span>' +
          '<span class="power-mascot">' + esc(L(s.mascotte)) + '</span>' +
          '<span class="power-count">' + t('adventuresCount', total) + '</span>' +
        '</a>'
      );
    }).join('');

    paint(
      topBar({ back: false }) +
      '<section class="screen home">' +
        '<div class="hero">' +
          '<div class="hero-inner">' +
            '<div class="hero-text">' +
              '<h1 class="hero-title" data-focus>' + esc(t('heroTitlePre')) +
                '<span class="hero-hi">' + esc(t('heroTitleHi')) + '</span>' + esc(t('heroTitlePost')) + '</h1>' +
              '<p class="hero-sub">' + t('heroSub') + '</p>' +
            '</div>' +
            '<img class="hero-mascot" src="mascot-ontdekken.png" alt="" aria-hidden="true">' +
          '</div>' +
        '</div>' +
        '<h2 class="section-title">' + esc(t('chooseSuperpower')) + '</h2>' +
        '<div class="power-grid">' + tiles + '</div>' +
        '<div class="home-actions">' +
          '<a class="bigbtn ghost" href="#/bibliotheek">' + t('seeAll') + '</a>' +
          '<a class="bigbtn ghost" href="#/paspoort">' + t('myPassport') + '</a>' +
        '</div>' +
        '<a class="adult-strip" href="#/begeleider">' + t('adultStrip') + '</a>' +
      '</section>'
    );

    app.querySelectorAll('.power-tile').forEach(function (tile) {
      tile.addEventListener('click', function () {
        FILTERS = defaultFilters();
        FILTERS.superpower = tile.getAttribute('data-sp');
      });
    });
  }

  // ─────────────────────────────────────────────────────────────
  // 7.2  BIBLIOTHEEK
  // ─────────────────────────────────────────────────────────────
  function defaultFilters() {
    return { superpower: null, niveau: null, categorie: null, werkvorm: null, tijd: null };
  }
  let FILTERS = defaultFilters();

  function matchesFilters(c) {
    if (FILTERS.superpower && c.superpower !== FILTERS.superpower) return false;
    if (FILTERS.niveau && c.niveau !== FILTERS.niveau) return false;
    if (FILTERS.categorie && c.categorie !== FILTERS.categorie) return false;
    if (FILTERS.werkvorm && c.werkvorm.indexOf(FILTERS.werkvorm) === -1) return false;
    if (FILTERS.tijd != null) {
      const bucket = CFG.TIJD_BUCKETS[FILTERS.tijd];
      if (bucket && !bucket.test(tijdMin(c.tijdsduur))) return false;
    }
    return true;
  }

  // Hoeveel resultaten levert waarde V voor facet F op, gegeven de andere filters?
  // Zo kunnen we lege combinaties dimmen i.p.v. de gebruiker op "0 avonturen" te laten stuiten.
  function countWith(facet, value) {
    const backup = FILTERS[facet];
    FILTERS[facet] = value;
    const n = allCards().filter(matchesFilters).length;
    FILTERS[facet] = backup;
    return n;
  }

  function filterRow(label, facet, options) {
    const chips = options.map(function (opt) {
      const active = FILTERS[facet] === opt.value;
      const n = countWith(facet, opt.value);
      const zero = n === 0 && !active;
      return '<button class="fchip' + (active ? ' active' : '') + (zero ? ' zero' : '') + '" ' +
        'data-facet="' + facet + '" data-value="' + esc(String(opt.value)) + '" ' +
        (zero ? 'disabled aria-disabled="true" ' : '') +
        'aria-pressed="' + active + '">' + opt.label +
        '<span class="fcount">' + n + '</span></button>';
    }).join('');
    const allActive = FILTERS[facet] == null;
    return (
      '<div class="frow">' +
        '<span class="frow-label">' + esc(label) + '</span>' +
        '<div class="frow-chips">' +
          '<button class="fchip' + (allActive ? ' active' : '') + '" data-facet="' + facet + '" data-value="" ' +
            'aria-pressed="' + allActive + '">' + esc(t('all')) + '</button>' +
          chips +
        '</div>' +
      '</div>'
    );
  }

  function renderLibrary() {
    const spOpts = CFG.SUPERPOWER_VOLGORDE.map(function (n) {
      return { value: n, label: '<img class="fchip-sym" src="' + sp(n).symbool + '" alt="">' + esc(L(sp(n).naam)) };
    });
    const nivOpts = [1, 2, 3, 4, 5].map(function (n) {
      return { value: n, label: n + ' \u00b7 ' + esc(niv(n).naam) };
    });
    const catOpts = Object.keys(CFG.CATEGORIEEN).map(function (k) {
      return { value: k, label: esc(catLabel(k)) };
    });
    const wvOpts = Object.keys(CFG.WERKVORMEN).map(function (k) {
      return { value: k, label: esc(wvLabel(k)) };
    });
    const tijdOpts = CFG.TIJD_BUCKETS.map(function (b, i) {
      return { value: i, label: esc(L(b.label)) };
    });

    // Sorteer: superpower-volgorde, daarbinnen oplopend niveau.
    const matched = allCards().filter(matchesFilters).slice().sort(function (a, b) {
      const d = CFG.SUPERPOWER_VOLGORDE.indexOf(a.superpower) - CFG.SUPERPOWER_VOLGORDE.indexOf(b.superpower);
      return d !== 0 ? d : (a.niveau - b.niveau);
    });
    const tiles = matched.map(cardTile).join('');
    const empty = '<div class="empty">' + esc(t('empty')) + '</div>';

    paint(
      topBar({ back: true }) +
      '<section class="screen library">' +
        '<h1 class="screen-title" data-focus>' + esc(t('libraryTitle')) + '</h1>' +
        '<div class="filters" role="group" aria-label="Filters">' +
          filterRow(t('fSuperpower'), 'superpower', spOpts) +
          filterRow(t('fLevel'), 'niveau', nivOpts) +
          filterRow(t('fType'), 'categorie', catOpts) +
          filterRow(t('fWith'), 'werkvorm', wvOpts) +
          filterRow(t('fTime'), 'tijd', tijdOpts) +
          '<button class="clear-filters" data-clear' + (isFiltered() ? '' : ' hidden') + '>' + esc(t('clearFilters')) + '</button>' +
        '</div>' +
        '<p class="result-count">' + esc(t('resultCount', matched.length)) + '</p>' +
        '<div class="tile-grid">' + (tiles || empty) + '</div>' +
      '</section>'
    );

    wireLibrary();
  }

  function isFiltered() {
    return FILTERS.superpower || FILTERS.niveau || FILTERS.categorie || FILTERS.werkvorm || FILTERS.tijd != null;
  }

  function wireLibrary() {
    app.querySelectorAll('.fchip').forEach(function (btn) {
      btn.addEventListener('click', function () {
        const facet = btn.getAttribute('data-facet');
        const raw = btn.getAttribute('data-value');
        let value = raw === '' ? null : raw;
        if (value !== null && (facet === 'niveau' || facet === 'tijd')) value = parseInt(value, 10);
        FILTERS[facet] = value;
        renderLibrary();
      });
    });
    const clr = app.querySelector('[data-clear]');
    if (clr) clr.addEventListener('click', function () { FILTERS = defaultFilters(); renderLibrary(); });
  }

  // ─────────────────────────────────────────────────────────────
  // 7.3  KAARTDETAIL — 7-staps avontuur
  // ─────────────────────────────────────────────────────────────
  // 6-staps flow: de AI-prompt zit ín "Aan de slag!" op de plek waar je hem
  // nodig hebt (veld prompt_na_stap) — geen heen-en-weer geklik meer.
  let detail = { id: null, step: 0, completedThisRun: false };
  const TOTAAL_STAPPEN = 6;
  function stapNaam(i) { return t('steps')[i]; }

  function renderCardDetail(id) {
    const c = byId(id);
    if (!c) { navigate('#/bibliotheek'); return; }
    if (detail.id !== id) { detail = { id: id, step: 0, completedThisRun: false }; P.markOpened(id); }

    const s = sp(c.superpower);
    const stepHtml = renderStep(c, detail.step);
    const pct = Math.round(((detail.step + 1) / TOTAAL_STAPPEN) * 100);

    paint(
      topBar({ back: true }) +
      '<section class="screen detail" style="--sp:' + s.kleur + ';--sp-soft:' + s.kleurZacht + '">' +
        '<div class="detail-head">' +
          '<div class="detail-crumbs">' +
            '<img class="crumb-symbol" src="' + s.symbool + '" alt="">' + esc(L(s.naam)) + ' · ' +
            esc(niv(c.niveau).naam) + '</div>' +
          '<h1 class="detail-title" data-focus>' + esc(c.titel) + '</h1>' +
          '<div class="progress" role="progressbar" aria-valuemin="1" aria-valuemax="' + TOTAAL_STAPPEN +
            '" aria-valuenow="' + (detail.step + 1) + '" aria-label="' + esc(t('stepAria', detail.step + 1, TOTAAL_STAPPEN)) + '">' +
            '<div class="progress-bar" style="width:' + pct + '%"></div>' +
          '</div>' +
          '<div class="progress-label">' + esc(t('stepOf', detail.step + 1, TOTAAL_STAPPEN, stapNaam(detail.step))) + '</div>' +
        '</div>' +
        '<div class="step-card">' + stepHtml + '</div>' +
        renderStepNav(c) +
      '</section>'
    );

    wireDetail(c);
  }

  function speakBtn(text) {
    return '<button class="readbtn" data-speak="' + esc(text) + '" aria-label="' + esc(t('readAloud')) + '">' + esc(t('readAloud')) + '</button>';
  }

  function renderStep(c, step) {
    switch (step) {
      case 0: {
        const s0 = sp(c.superpower);
        return (
          '<div class="step step-uitdaging">' +
            '<img class="mascot-img" src="' + s0.afbeelding + '" alt="" aria-hidden="true">' +
            '<div class="mascot-name">' + esc(L(s0.mascotte)) + '</div>' +
            '<p class="big-text">' + esc(c.uitdaging) + '</p>' +
            speakBtn(c.uitdaging) +
          '</div>'
        );
      }
      case 1:
        return (
          '<div class="step">' +
            '<h2 class="step-h">' + esc(t('yourMission')) + '</h2>' +
            '<p class="big-text">' + esc(c.missie) + '</p>' +
            '<div class="mini-meta">' +
              c.werkvorm.map(function (w) { return chip(wvLabel(w)); }).join('') +
              chip(c.tijdsduur) +
              c.zintuigen.map(function (z) { return chip(znLabel(z)); }).join('') +
            '</div>' +
            speakBtn(c.missie) +
          '</div>'
        );
      case 2: {
        // "Aan de slag!" — checklist mét de AI-prompt op de juiste plek in de flow.
        const saved = (P.get(c.id).checked) || [];
        // Na welke stap hoort de prompt? (0 = ervoor; fallback: na de laatste stap)
        const na = (typeof c.prompt_na_stap === 'number')
          ? Math.max(0, Math.min(c.prompt_na_stap, c.stappen.length))
          : c.stappen.length;
        const promptBlock = (
          '<li class="do-ai">' +
            '<div class="ai-block">' +
              '<div class="ai-block-head">' + esc(t('promptNow')) + '</div>' +
              '<p class="ai-block-uitleg">' + esc(c.samenwerken_met_ai) + '</p>' +
              '<div class="prompt-box">' +
                '<div class="prompt-label">' + esc(t('promptToCopy')) + '</div>' +
                '<p class="prompt-text">' + esc(c.ai_prompt) + '</p>' +
                '<button class="copybtn" data-copy>' + esc(t('copyPrompt')) + '</button>' +
              '</div>' +
              '<p class="tool-note">' + t('toolNote', esc(c.ai_tools)) + '</p>' +
            '</div>' +
          '</li>'
        );
        let items = '';
        if (na === 0) items += promptBlock;
        c.stappen.forEach(function (st, i) {
          const on = !!saved[i];
          items += (
            '<li class="do-step">' +
              '<label class="do-check">' +
                '<input type="checkbox" data-stepidx="' + i + '"' + (on ? ' checked' : '') + '>' +
                '<span class="do-num">' + (i + 1) + '</span>' +
                '<span class="do-text">' + esc(st) + '</span>' +
              '</label>' +
            '</li>'
          );
          if (i + 1 === na) items += promptBlock;
        });
        return (
          '<div class="step">' +
            '<h2 class="step-h">' + esc(t('whatToDo')) + '</h2>' +
            '<ol class="do-list">' + items + '</ol>' +
            '<p class="hint">' + esc(t('checkHint')) + '</p>' +
          '</div>'
        );
      }
      case 3:
        return (
          '<div class="step step-keuze">' +
                        '<h2 class="step-h">' + esc(t('nowYouDecide')) + '</h2>' +
            '<p class="big-text">' + esc(c.eigen_keuze) + '</p>' +
            '<p class="hint">' + t('noRightWrong') + '</p>' +
            speakBtn(c.eigen_keuze) +
          '</div>'
        );
      case 4: {
        const saved = P.get(c.id).reflection || '';
        return (
          '<div class="step">' +
            '<h2 class="step-h">' + esc(t('reflection')) + '</h2>' +
            '<p class="big-text">' + esc(c.reflectievraag) + '</p>' +
            '<label class="refl-label" for="reflInput">' + esc(t('reflectLabel')) + '</label>' +
            '<textarea id="reflInput" class="refl-input" rows="4" placeholder="' + esc(t('reflectPlaceholder')) + '">' + esc(saved) + '</textarea>' +
            '<p class="hint">' + esc(t('reflectHint')) + '</p>' +
          '</div>'
        );
      }
      case 5: {
        const cur = P.get(c.id).rating;
        return (
          '<div class="step step-slot">' +
                        '<h2 class="step-h">' + esc(t('wellDone')) + '</h2>' +
            '<div class="leer-box"><strong>' + esc(t('whatLearned')) + '</strong> ' + esc(c.wat_leer_je) + '</div>' +
            '<p class="regie-line">' + t('regieLine') + '</p>' +
            '<div class="rate">' +
              '<p class="rate-q">' + esc(t('wasItFun')) + '</p>' +
              '<div class="rate-btns">' +
                '<button class="ratebtn' + (cur === 'up' ? ' active' : '') + '" data-rate="up" aria-label="' + esc(t('thumbUp')) + '"><svg viewBox="0 0 24 24" width="30" height="30" fill="currentColor" aria-hidden="true"><path d="M2.5 20h3.2V9.5H2.5V20zm19-9.4c0-.9-.8-1.7-1.7-1.7h-5.4l.8-4 .1-.3c0-.4-.2-.7-.4-1L13.6 2 7.9 7.7c-.3.3-.5.8-.5 1.2v9.4c0 .9.8 1.7 1.7 1.7h7.6c.7 0 1.3-.4 1.6-1l2.5-6c.1-.2.2-.4.2-.7v-1.7z"/></svg></button>' +
                '<button class="ratebtn' + (cur === 'down' ? ' active' : '') + '" data-rate="down" aria-label="' + esc(t('thumbDown')) + '" style="transform:rotate(180deg)"><svg viewBox="0 0 24 24" width="30" height="30" fill="currentColor" aria-hidden="true"><path d="M2.5 20h3.2V9.5H2.5V20zm19-9.4c0-.9-.8-1.7-1.7-1.7h-5.4l.8-4 .1-.3c0-.4-.2-.7-.4-1L13.6 2 7.9 7.7c-.3.3-.5.8-.5 1.2v9.4c0 .9.8 1.7 1.7 1.7h7.6c.7 0 1.3-.4 1.6-1l2.5-6c.1-.2.2-.4.2-.7v-1.7z"/></svg></button>' +
              '</div>' +
            '</div>' +
            (c.bonus ? '<div class="bonus-box"><div class="bonus-title">' + esc(t('bonusTitle')) + '</div>' +
              '<p class="bonus-text">' + esc(c.bonus) + '</p></div>' : '') +
            '<div class="slot-actions">' +
              '<button class="bigbtn primary" data-again>' + t('onceMore') + '</button>' +
              '<a class="bigbtn ghost" href="#/bibliotheek">' + t('moreAdventures') + '</a>' +
              '<a class="bigbtn ghost" href="#/paspoort">' + t('myPassportShort') + '</a>' +
            '</div>' +
          '</div>'
        );
      }
      default: return '';
    }
  }

  function renderStepNav(c) {
    const first = detail.step === 0;
    const last = detail.step === TOTAAL_STAPPEN - 1;
    if (last) return '';
    const prev = first ? '' : '<button class="navbtn back" data-prev>' + esc(t('prev')) + '</button>';
    const nextLabel = detail.step === TOTAAL_STAPPEN - 2 ? t('imDone') : t('next');
    return (
      '<div class="stepnav">' + prev +
        '<button class="navbtn next" data-next>' + esc(nextLabel) + '</button>' +
      '</div>'
    );
  }

  function wireDetail(c) {
    const nextEl = app.querySelector('[data-next]');
    if (nextEl) nextEl.addEventListener('click', function () {
      if (detail.step === 0) P.markStarted(c.id);
      if (detail.step === TOTAAL_STAPPEN - 2 && !detail.completedThisRun) {
        P.markCompleted(c.id); detail.completedThisRun = true;
      }
      detail.step = Math.min(detail.step + 1, TOTAAL_STAPPEN - 1);
      renderCardDetail(c.id);
    });
    const prevEl = app.querySelector('[data-prev]');
    if (prevEl) prevEl.addEventListener('click', function () {
      detail.step = Math.max(detail.step - 1, 0); renderCardDetail(c.id);
    });
    app.querySelectorAll('input[data-stepidx]').forEach(function (box) {
      box.addEventListener('change', function () {
        const arr = (P.get(c.id).checked || []).slice();
        arr[parseInt(box.getAttribute('data-stepidx'), 10)] = box.checked;
        P.setChecked(c.id, arr);
      });
    });
    const copyEl = app.querySelector('[data-copy]');
    if (copyEl) copyEl.addEventListener('click', function () { copyText(c.ai_prompt, copyEl); });
    app.querySelectorAll('[data-speak]').forEach(function (b) {
      b.addEventListener('click', function () { speak(b.getAttribute('data-speak')); });
    });
    const refl = app.querySelector('#reflInput');
    if (refl) refl.addEventListener('input', function () { P.setReflection(c.id, refl.value); });
    app.querySelectorAll('[data-rate]').forEach(function (b) {
      b.addEventListener('click', function () { P.setRating(c.id, b.getAttribute('data-rate')); renderCardDetail(c.id); });
    });
    const again = app.querySelector('[data-again]');
    if (again) again.addEventListener('click', function () {
      detail = { id: c.id, step: 0, completedThisRun: false }; renderCardDetail(c.id);
    });

    // Feestje! Confetti bij het bereiken van de afsluiting (na afronden).
    if (detail.step === TOTAAL_STAPPEN - 1 && detail.completedThisRun && !detail.confettiDone) {
      detail.confettiDone = true;
      confetti();
    }
  }

  // Lichtgewicht confetti zonder libraries; respecteert reduced motion.
  function confetti() {
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const colors = ['#F4A62A', '#22B29F', '#3D7BE0', '#8B5CF6', '#EC5A67'];
    const holder = document.createElement('div');
    holder.className = 'confetti-holder';
    holder.setAttribute('aria-hidden', 'true');
    for (let i = 0; i < 36; i++) {
      const p = document.createElement('span');
      p.className = 'confetti-piece';
      p.style.left = (Math.random() * 100) + '%';
      p.style.background = colors[i % colors.length];
      p.style.animationDelay = (Math.random() * 0.6) + 's';
      p.style.animationDuration = (1.8 + Math.random() * 1.4) + 's';
      p.style.transform = 'rotate(' + Math.floor(Math.random() * 360) + 'deg)';
      holder.appendChild(p);
    }
    document.body.appendChild(holder);
    setTimeout(function () { holder.remove(); }, 3600);
  }

  // ─────────────────────────────────────────────────────────────
  // 7.4  EXPLORER PASPOORT
  // ─────────────────────────────────────────────────────────────
  function renderPassport() {
    const cards = allCards();
    let totaalGedaan = 0, totaalHerhaald = 0;

    const blocks = CFG.SUPERPOWER_VOLGORDE.map(function (name) {
      const s = sp(name);
      const list = cards.filter(function (c) { return c.superpower === name; });
      const done = list.filter(function (c) { return P.isCompleted(c.id); });
      const hoogste = done.reduce(function (m, c) { return Math.max(m, c.niveau); }, 0);
      totaalGedaan += done.length;
      done.forEach(function (c) { totaalHerhaald += Math.max(0, P.completedCount(c.id) - 1); });

      const stamps = list.map(function (c) {
        const cnt = P.completedCount(c.id);
        const cls = cnt >= 2 ? 'stamp fav' : (cnt >= 1 ? 'stamp on' : 'stamp off');
        const label = cnt >= 2 ? t('stampFav', c.titel) : (cnt >= 1 ? t('stampDone', c.titel) : t('stampTodo', c.titel));
        const glyph = cnt >= 2 ? '\u21bb' : (cnt >= 1 ? '\u2713' : '\u00b7');
        return '<span class="' + cls + '" title="' + esc(label) + '" aria-label="' + esc(label) + '">' + glyph + '</span>';
      }).join('');

      const meester = done.length === list.length && list.length > 0;
      const pct = list.length ? Math.round((done.length / list.length) * 100) : 0;

      return (
        '<div class="pp-block" style="--sp:' + s.kleur + ';--sp-soft:' + s.kleurZacht + '">' +
          '<div class="pp-head">' +
            '<img class="pp-img" src="' + s.afbeelding + '" alt="" loading="lazy">' +
            '<div>' +
              '<h2 class="pp-name">' + esc(L(s.naam)) + (meester ? ' <span class="pp-master" title="' + esc(t('masterTitle')) + '">' + t('master') + '</span>' : '') + '</h2>' +
              '<p class="pp-sub">' + esc(t('ofAdventures', done.length, list.length)) +
                (hoogste ? ' · ' + esc(t('highestLevel')) + ' ' + esc(niv(hoogste).naam) : '') + '</p>' +
            '</div>' +
          '</div>' +
          '<div class="progress"><div class="progress-bar" style="width:' + pct + '%"></div></div>' +
          '<div class="stamps">' + stamps + '</div>' +
        '</div>'
      );
    }).join('');

    paint(
      topBar({ back: true }) +
      '<section class="screen passport">' +
        '<h1 class="screen-title" data-focus>' + esc(t('passportTitle')) + '</h1>' +
        '<div class="pp-summary">' +
          '<div class="pp-stat"><span class="pp-num">' + totaalGedaan + '</span><span class="pp-lbl">' + esc(t('discovered')) + '</span></div>' +
          '<div class="pp-stat"><span class="pp-num">' + totaalHerhaald + '</span><span class="pp-lbl">' + esc(t('onceMoreTimes')) + '</span></div>' +
        '</div>' +
        '<p class="pp-cheer">' + esc(cheer(totaalGedaan)) + '</p>' +
        '<div class="pp-blocks">' + blocks + '</div>' +
        '<p class="pp-foot">' + t('passportFoot') + '</p>' +
      '</section>'
    );
  }

  function cheer(n) {
    if (n === 0) return t('cheer0');
    if (n < 5) return t('cheer1');
    if (n < 15) return t('cheer2');
    if (n < 25) return t('cheer3');
    return t('cheer4');
  }

  // ─────────────────────────────────────────────────────────────
  // 7.5  BEGELEIDERSMODUS
  // ─────────────────────────────────────────────────────────────
  function renderGuide() {
    const cards = allCards();
    const rows = CFG.SUPERPOWER_VOLGORDE.map(function (name) {
      const s = sp(name);
      const list = cards.filter(function (c) { return c.superpower === name; })
        .sort(function (a, b) { return a.niveau - b.niveau; });
      const items = list.map(function (c) {
        const g = P.get(c.id);
        const rate = g.rating === 'up' ? '\u2713' : (g.rating === 'down' ? '\u2715' : '\u2014');
        const comps = c.competenties.map(function (k) { return chip(compLabel(k)); }).join('');
        return (
          '<details class="g-card">' +
            '<summary>' +
              '<span class="g-lvl">' + niv(c.niveau).nummer + '</span>' +
              '<span class="g-title">' + esc(c.titel) + '</span>' +
              '<span class="g-rate" title="' + esc(t('childRateTitle')) + '">' + rate + '</span>' +
            '</summary>' +
            '<div class="g-body">' +
              '<p class="g-tip"><strong>' + esc(t('guideTip')) + '</strong> ' + esc(c.begeleiders_tip) + '</p>' +
              '<p class="g-comp-label">' + esc(t('coreSkills')) + '</p>' +
              '<div class="g-comps">' + comps + '</div>' +
              '<div class="g-feedback">' +
                '<p class="g-fb-title">' + esc(t('threeQuestions')) + '</p>' +
                '<div class="g-fb-row">' +
                  '<span class="g-fb-q">' + esc(t('qChild')) + '</span>' +
                  '<span class="g-fb-a">' + rate + ' <em>' + esc(t('qChildNote')) + '</em></span>' +
                '</div>' +
                feedbackRow(c.id, 'ouder', esc(t('qParent')), g) +
                feedbackRow(c.id, 'leerkracht', esc(t('qTeacher')), g) +
              '</div>' +
            '</div>' +
          '</details>'
        );
      }).join('');
      return (
        '<div class="g-group" style="--sp:' + s.kleur + ';--sp-soft:' + s.kleurZacht + '">' +
          '<h2 class="g-group-title"><img class="g-group-sym" src="' + s.symbool + '" alt="">' + esc(L(s.naam)) + '</h2>' + items +
        '</div>'
      );
    }).join('');

    paint(
      topBar({ back: true }) +
      '<section class="screen guide">' +
        '<h1 class="screen-title" data-focus>' + esc(t('guideTitle')) + '</h1>' +
        '<div class="g-intro">' +
          '<p>' + t('guideHow') + '</p>' +
          '<p class="g-philo">' + t('guidePhilo') + '</p>' +
          '<p class="g-privacy">' + t('guidePrivacy') + '</p>' +
        '</div>' +
        '<h2 class="section-title">' + t('cardsAndTips') + '</h2>' +
        '<div class="g-groups">' + rows + '</div>' +
        '<div class="g-reset-wrap">' +
          '<button class="g-reset" data-reset>' + esc(t('resetBtn')) + '</button>' +
          '<p class="hint">' + esc(t('resetHint')) + '</p>' +
        '</div>' +
      '</section>'
    );

    wireGuide();
  }

  function feedbackRow(id, wie, vraag, g) {
    const cur = (g.guide || {})[wie];
    return (
      '<div class="g-fb-row">' +
        '<span class="g-fb-q">' + vraag + '</span>' +
        '<span class="g-fb-a">' +
          '<button class="fb-btn' + (cur === 'ja' ? ' yes' : '') + '" data-fb="' + id + '|' + wie + '|ja">' + esc(t('yes')) + '</button>' +
          '<button class="fb-btn' + (cur === 'nee' ? ' no' : '') + '" data-fb="' + id + '|' + wie + '|nee">' + esc(t('no')) + '</button>' +
        '</span>' +
      '</div>'
    );
  }

  function wireGuide() {
    app.querySelectorAll('[data-fb]').forEach(function (b) {
      b.addEventListener('click', function () {
        const parts = b.getAttribute('data-fb').split('|');
        P.setGuideFeedback(parts[0], parts[1], parts[2]);
        const row = b.closest('.g-fb-row');
        row.querySelectorAll('.fb-btn').forEach(function (x) { x.classList.remove('yes', 'no'); });
        b.classList.add(parts[2] === 'ja' ? 'yes' : 'no');
      });
    });
    const reset = app.querySelector('[data-reset]');
    if (reset) reset.addEventListener('click', function () {
      if (confirm(t('resetConfirm'))) { P.reset(); renderGuide(); }
    });
  }

  // ── Algemene bedrading ─────────────────────────────────────────
  function historyBack() {
    if (history.length > 1) history.back(); else navigate('#/');
  }

  // Eén gedelegeerde handler voor terug-knop én taalwissel, op elk scherm.
  app.addEventListener('click', function (e) {
    if (!e.target.closest) return;
    if (e.target.closest('[data-back]')) { e.preventDefault(); historyBack(); return; }
    if (e.target.closest('[data-lang-toggle]')) {
      e.preventDefault();
      window.speechSynthesis && window.speechSynthesis.cancel();
      window.I18N.toggle();
      rerender();
    }
  });

  window.addEventListener('hashchange', render);
  window.addEventListener('DOMContentLoaded', render);
  if (document.readyState !== 'loading') render();
})();

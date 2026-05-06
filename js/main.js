/* ============================================================
   Main JS:
   - Language toggle (EN <-> FR) with localStorage persistence
   - Mobile menu (slide-in side panel)
   - Experience tabs (with arrow-key navigation + animated highlight)
   - Scrollspy: highlight active section in the side nav
   - Footer year, configurable links (ORCID, Scholar, GitHub, thesis)
   ============================================================ */

(function () {
  // ---------------------------------------------------------
  // CONFIG — Personalise these once you have your IDs
  // ---------------------------------------------------------
  const CONFIG = {
    orcidId: '0009-0006-5030-3757',  // e.g. '0000-0002-1825-0097'
    scholarId: '',                  // e.g. 'XXXXXXXXAAJ'
    githubHandle: 'qduong',
    thesisUrl: 'https://theses.hal.science/tel-05443980',
    defaultLang: 'en'
  };
  // ---------------------------------------------------------

  // ===== Language =====
  const STORAGE_KEY = 'qd-lang';
  const getLang = () => localStorage.getItem(STORAGE_KEY) || CONFIG.defaultLang;
  const setLang = (lang) => { localStorage.setItem(STORAGE_KEY, lang); applyLang(lang); };
  const getNested = (obj, path) =>
    path.split('.').reduce((acc, k) => (acc && acc[k] != null ? acc[k] : undefined), obj);

  function applyLang(lang) {
    const dict = window.I18N && window.I18N[lang];
    if (!dict) return;
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const val = getNested(dict, key);
      if (typeof val === 'string') {
        if (/<\/?(em|strong|br|i|b|a|span)/i.test(val) || /\\\(|\\\[|\$/.test(val)) {
          el.innerHTML = val;
        } else {
          el.textContent = val;
        }
      }
    });
    // Update both lang toggle buttons (mobile + desktop)
    document.querySelectorAll('.lang-toggle').forEach(btn => {
      const cur = btn.querySelector('.lang-toggle__current');
      const alt = btn.querySelector('.lang-toggle__alt');
      if (cur && alt) {
        cur.textContent = lang === 'en' ? 'EN' : 'FR';
        alt.textContent = lang === 'en' ? 'FR' : 'EN';
      }
    });
    // Re-render projects in the chosen language (data-driven, see js/projects.js)
    if (typeof window.renderProjects === 'function') {
      window.renderProjects(lang);
    }
    // Bullets may have rewrapped — recompute heights of any open exp-card
    requestAnimationFrame(() => {
      document.querySelectorAll('.exp-card.is-expanded').forEach(c => {
        const b = c.querySelector('.exp-card__body');
        if (b) b.style.maxHeight = b.scrollHeight + 'px';
      });
      // Refresh pub-preview toggle labels based on expanded state
      const pub = dict.pub || {};
      document.querySelectorAll('.pub-preview').forEach(card => {
        const expanded = card.classList.contains('is-expanded');
        const lab = card.querySelector('.pub-preview__toggle-label');
        const ico = card.querySelector('.pub-preview__toggle-icon');
        if (lab) lab.textContent = expanded ? (pub.hide_abstract || 'Hide abstract') : (pub.show_abstract || 'Show abstract');
        if (ico) ico.textContent = expanded ? '−' : '+';
        const body = card.querySelector('.pub-preview__abstract');
        if (body && expanded) body.style.maxHeight = body.scrollHeight + 'px';
      });

      if (window.MathJax && window.MathJax.typesetPromise) {
        MathJax.typesetPromise();
      }

    });
  }

  // ===== Config-driven links =====
  function applyConfigLinks() {
    if (CONFIG.orcidId) {
      const url = `https://orcid.org/${CONFIG.orcidId}`;
      ['orcid-link', 'orcid-link-side'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.href = url;
      });
      const main = document.getElementById('orcid-link');
      if (main) {
        const u = main.querySelector('.pub-link__url');
        if (u) u.textContent = `orcid.org/${CONFIG.orcidId}`;
      }
    }
    if (CONFIG.scholarId) {
      const scholar = document.getElementById('scholar-link');
      if (scholar) {
        scholar.href = `https://scholar.google.com/citations?user=${CONFIG.scholarId}`;
        const u = scholar.querySelector('.pub-link__url');
        if (u) u.textContent = `scholar.google.com/.../${CONFIG.scholarId}`;
      }
    }
    if (CONFIG.thesisUrl) {
      const thesis = document.getElementById('thesis-link');
      if (thesis) {
        thesis.href = CONFIG.thesisUrl;
        const u = thesis.querySelector('.pub-link__url');
        if (u) {
          try {
            const parsed = new URL(CONFIG.thesisUrl);
            u.textContent = parsed.hostname + parsed.pathname.slice(0, 30);
          } catch (e) { u.textContent = CONFIG.thesisUrl; }
        }
      }
    }
    if (CONFIG.githubHandle) {
      const url = `https://github.com/${CONFIG.githubHandle}`;
      ['github-link', 'github-link-side'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.href = url;
      });
      const main = document.getElementById('github-link');
      if (main) main.textContent = `github.com/${CONFIG.githubHandle}`;
    }
  }

  // ===== Mobile menu =====
  function setupMenu() {
    const toggle = document.getElementById('menu-toggle');
    const side = document.querySelector('.side');
    if (!toggle || !side) return;

    const close = () => {
      toggle.classList.remove('is-open');
      side.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    };
    const open = () => {
      toggle.classList.add('is-open');
      side.classList.add('is-open');
      toggle.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    };

    toggle.addEventListener('click', () => {
      side.classList.contains('is-open') ? close() : open();
    });

    // Close on side-nav link clicks
    side.querySelectorAll('.side-nav__link').forEach(a =>
      a.addEventListener('click', close));

    // Close on Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') close();
    });
  }

  // ===== Tabs (Experience) =====
  function setupTabs() {
    const list = document.querySelector('.tabs__list');
    if (!list) return;
    const tabs = Array.from(list.querySelectorAll('.tabs__tab'));
    const highlight = list.querySelector('.tabs__highlight');

    function activate(idx, focus = true) {
      tabs.forEach((t, i) => {
        const active = i === idx;
        t.classList.toggle('is-active', active);
        t.setAttribute('aria-selected', String(active));
        t.setAttribute('tabindex', active ? '0' : '-1');
        const panel = document.getElementById(t.getAttribute('aria-controls'));
        if (panel) {
          panel.classList.toggle('is-active', active);
          panel.hidden = !active;
        }
      });
      if (highlight) {
        const isMobile = window.matchMedia('(max-width: 960px)').matches;
        if (isMobile) {
          // horizontal mode
          const tab = tabs[idx];
          highlight.style.transform = `translateX(${tab.offsetLeft}px)`;
          highlight.style.width = `${tab.offsetWidth}px`;
        } else {
          // vertical mode (42px tab height)
          highlight.style.transform = `translateY(${idx * 42}px)`;
          highlight.style.width = '';
        }
      }
      if (focus) tabs[idx].focus({ preventScroll: true });
    }

    tabs.forEach((t, i) => {
      t.addEventListener('click', () => activate(i));
      t.addEventListener('keydown', (e) => {
        let next = -1;
        if (e.key === 'ArrowDown' || e.key === 'ArrowRight') next = (i + 1) % tabs.length;
        else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') next = (i - 1 + tabs.length) % tabs.length;
        else if (e.key === 'Home') next = 0;
        else if (e.key === 'End') next = tabs.length - 1;
        if (next !== -1) {
          e.preventDefault();
          activate(next);
        }
      });
    });

    // Re-position highlight on resize
    window.addEventListener('resize', () => {
      const idx = tabs.findIndex(t => t.classList.contains('is-active'));
      if (idx >= 0) activate(idx, false);
    });

    // Initial position
    const idx = tabs.findIndex(t => t.classList.contains('is-active'));
    if (idx >= 0) activate(idx, false);
  }

  // ===== Scrollspy (scroll-position based — more predictable than IO) =====
  function setupScrollspy() {
    const links = Array.from(document.querySelectorAll('.side-nav__link'));
    const targets = links
      .map(l => ({ id: l.getAttribute('data-target'), el: document.getElementById(l.getAttribute('data-target')) }))
      .filter(t => t.el);
    if (!targets.length) return;

    let currentId = null;
    const setActive = (id) => {
      if (id === currentId) return;
      currentId = id;
      links.forEach(l => {
        l.classList.toggle('is-active', l.getAttribute('data-target') === id);
      });
    };

    // Activation line: 25% from the top of the viewport.
    function update() {
      const line = window.scrollY + window.innerHeight * 0.25;
      let active = targets[0].id;
      for (const t of targets) {
        if (t.el.offsetTop <= line) active = t.id;
        else break;
      }
      // If we're at the very bottom, snap to the last section
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 4) {
        active = targets[targets.length - 1].id;
      }
      setActive(active);
    }

    // rAF-throttled scroll handler
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => { update(); ticking = false; });
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    // Run once after layout settles (fonts, images)
    window.addEventListener('load', update);
    update();
  }

  // ===== Experience cards expand/collapse =====
  function setupExpCards() {
    document.querySelectorAll('.exp-card').forEach(card => {
      const head = card.querySelector('.exp-card__head');
      const body = card.querySelector('.exp-card__body');
      if (!head || !body) return;

      const toggle = (e) => {
        // Don't toggle if the click came from a real link inside the head
        if (e && e.target && e.target.closest('a')) return;
        const expanded = card.classList.toggle('is-expanded');
        head.setAttribute('aria-expanded', String(expanded));
        if (expanded) {
          body.style.maxHeight = body.scrollHeight + 'px';
        } else {
          body.style.maxHeight = '0px';
        }
      };

      head.addEventListener('click', toggle);
      head.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggle(e);
        }
      });
      const toggleBtn = card.querySelector('.exp-card__toggle');
      if (toggleBtn) {
        toggleBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          toggle();
        });
      }

      // Recalculate on resize when expanded (text may rewrap → new height)
      window.addEventListener('resize', () => {
        if (card.classList.contains('is-expanded')) {
          body.style.maxHeight = body.scrollHeight + 'px';
        }
      });

      // After a language switch, the bullets may have new height — recalc.
      // We piggy-back on the lang button click (defined later in init).
    });
  }

  // ===== Publication abstract expand/collapse =====
  function setupPubAbstracts() {
    document.querySelectorAll('.pub-preview').forEach(card => {
      const toggle = card.querySelector('.pub-preview__toggle');
      const body = card.querySelector('.pub-preview__abstract');
      const icon = card.querySelector('.pub-preview__toggle-icon');
      const label = card.querySelector('.pub-preview__toggle-label');
      if (!toggle || !body) return;

      const lang = localStorage.getItem('qd-lang') || 'en';
      const labels = (lang === 'fr')
        ? { show: 'Voir le résumé', hide: 'Masquer le résumé' }
        : { show: 'Show abstract', hide: 'Hide abstract' };

      // Re-read current dictionary if available
      function getLabels() {
        const l = localStorage.getItem('qd-lang') || 'en';
        const d = window.I18N && window.I18N[l] && window.I18N[l].pub;
        return d ? { show: d.show_abstract, hide: d.hide_abstract } : labels;
      }

      function toggleFn() {
        const expanded = card.classList.toggle('is-expanded');
        toggle.setAttribute('aria-expanded', String(expanded));
        const ls = getLabels();
        if (icon) icon.textContent = expanded ? '−' : '+';
        if (label) label.textContent = expanded ? ls.hide : ls.show;
        body.style.maxHeight = expanded ? body.scrollHeight + 'px' : '0px';
      }

      toggle.addEventListener('click', (e) => { e.preventDefault(); toggleFn(); });

      // Keep heights in sync on resize / language switch
      window.addEventListener('resize', () => {
        if (card.classList.contains('is-expanded')) {
          body.style.maxHeight = body.scrollHeight + 'px';
        }
      });
    });
  }

  // ===== Year =====
  function setYear() {
    const el = document.getElementById('year');
    if (el) el.textContent = new Date().getFullYear();
  }

  // ===== Init =====
  document.addEventListener('DOMContentLoaded', () => {
    if (typeof window.injectLogos === 'function') window.injectLogos();
    applyLang(getLang());
    applyConfigLinks();
    setupMenu();
    setupTabs();
    setupExpCards();
    setupPubAbstracts();
    setupScrollspy();
    setYear();

    document.querySelectorAll('.lang-toggle').forEach(btn => {
      btn.addEventListener('click', () => {
        const next = getLang() === 'en' ? 'fr' : 'en';
        setLang(next);
      });
    });
  });
})();

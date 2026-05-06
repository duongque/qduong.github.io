/* ============================================================
   PROJECTS DATA — edit this file to update the Projects section.
   No HTML touching needed; cards are rendered automatically.

   Structure of a project:
   {
     tech:  ['FLUKA', 'Python'],         // array of tags
     link:  'https://...',               // optional, becomes "Read more"
     svg:   '<svg>...</svg>',            // optional visual (featured only)
     icon:  '<svg>...</svg>',            // optional icon (other only)
     en: { title: '...', desc: '...' },
     fr: { title: '...', desc: '...' }
   }
   ============================================================ */

window.PROJECTS = {
  // Up to 4 large alternating cards on desktop
  featured: [
    {
      tech: ['FLUKA', 'Python', 'HPC'],
      link: '',
      svg: `<svg viewBox="0 0 600 360" preserveAspectRatio="xMidYMid slice">
              <defs>
                <radialGradient id="pf1g" cx="50%" cy="50%">
                  <stop offset="0%" stop-color="#64ffda" stop-opacity=".55"/>
                  <stop offset="60%" stop-color="#64ffda" stop-opacity=".08"/>
                  <stop offset="100%" stop-color="#64ffda" stop-opacity="0"/>
                </radialGradient>
              </defs>
              <rect width="600" height="360" fill="#0f223e"/>
              <g stroke="#1d3a6b" stroke-width="1">
                <line x1="0" y1="60"  x2="600" y2="60"/>
                <line x1="0" y1="120" x2="600" y2="120"/>
                <line x1="0" y1="180" x2="600" y2="180"/>
                <line x1="0" y1="240" x2="600" y2="240"/>
                <line x1="0" y1="300" x2="600" y2="300"/>
              </g>
              <circle cx="300" cy="180" r="120" fill="url(#pf1g)"/>
              <g stroke="#64ffda" stroke-width="2" fill="none">
                <ellipse cx="300" cy="180" rx="180" ry="60"/>
                <ellipse cx="300" cy="180" rx="120" ry="40"/>
                <ellipse cx="300" cy="180" rx="60"  ry="20"/>
              </g>
            </svg>`,
      en: {
        title: 'Project title — to be filled',
        desc:  'Short description of the geometry, particle source, scoring strategy and the question being answered. Replace with your real FLUKA project once you\'ve picked which to feature.'
      },
      fr: {
        title: 'Titre du projet — à compléter',
        desc:  'Brève description de la géométrie, de la source, de la stratégie de scoring et de la question traitée. À remplacer par ton vrai projet FLUKA.'
      }
    },
    {
      tech: ['PyECLOUD', 'Machine Learning', 'Python'],
      link: '',
      svg: `<svg viewBox="0 0 600 360" preserveAspectRatio="xMidYMid slice">
              <rect width="600" height="360" fill="#0f223e"/>
              <g fill="none" stroke="#64ffda" stroke-width="1.4" opacity=".7">
                <path d="M40 320 Q 150 260 220 280 T 360 220 T 540 80"/>
                <path d="M40 320 Q 150 280 220 290 T 360 250 T 540 140" opacity=".5"/>
                <path d="M40 320 Q 150 300 220 305 T 360 280 T 540 200" opacity=".3"/>
              </g>
              <g fill="#64ffda">
                <circle cx="120" cy="298" r="3"/>
                <circle cx="220" cy="280" r="3"/>
                <circle cx="320" cy="240" r="3"/>
                <circle cx="420" cy="170" r="3"/>
                <circle cx="520" cy="95"  r="3"/>
              </g>
              <g stroke="#1d3a6b" stroke-width="1">
                <line x1="40" y1="320" x2="560" y2="320"/>
                <line x1="40" y1="60"  x2="40"  y2="320"/>
              </g>
            </svg>`,
      en: {
        title: 'Project title — to be filled',
        desc:  'Short description of the geometry, particle source, scoring strategy and the question being answered. Add results, plots or DOIs once published.'
      },
      fr: {
        title: 'Titre du projet — à compléter',
        desc:  'Brève description de la géométrie, de la source, de la stratégie de scoring et de la question traitée. Ajoute résultats, plots ou DOIs.'
      }
    }
  ],

  // Mini cards in a responsive grid
  other: [
    {
      tech: ['FLUKA', 'Python'],
      link: '',
      icon: `<svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7l9-4 9 4-9 4-9-4z"/><path d="M3 12l9 4 9-4"/><path d="M3 17l9 4 9-4"/></svg>`,
      en: { title: 'FLUKA — Title', desc: 'Short description: geometry, source, scoring, key result.' },
      fr: { title: 'FLUKA — Titre', desc: 'Brève description : géométrie, source, scoring, résultat clé.' }
    },
    {
      tech: ['FLUKA', 'HPC'],
      link: '',
      icon: `<svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a13.5 13.5 0 010 18M12 3a13.5 13.5 0 000 18"/></svg>`,
      en: { title: 'FLUKA — Title', desc: 'Short description: geometry, source, scoring, key result.' },
      fr: { title: 'FLUKA — Titre', desc: 'Brève description : géométrie, source, scoring, résultat clé.' }
    },
    {
      tech: ['COMSOL', 'RF'],
      link: '',
      icon: `<svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16v16H4z"/><path d="M4 9h16M9 4v16"/></svg>`,
      en: { title: 'COMSOL — Title', desc: 'Multiphysics simulation: physics coupled, mesh strategy, validation.' },
      fr: { title: 'COMSOL — Titre', desc: 'Simulation multiphysique : physiques couplées, stratégie de maillage, validation.' }
    },
    {
      tech: ['PyECLOUD', 'Python'],
      link: '',
      icon: `<svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="M7 15l4-4 3 3 5-7"/></svg>`,
      en: { title: 'PyECLOUD — Title', desc: 'Electron cloud build-up simulation, parameter scan, comparison to data.' },
      fr: { title: 'PyECLOUD — Titre', desc: 'Simulation de build-up de nuage d\'électrons, scan paramétrique, comparaison aux données.' }
    },
    {
      tech: ['Geant4', 'MCNP'],
      link: '',
      icon: `<svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20M2 12h20"/></svg>`,
      en: { title: 'Geant4 / MCNP — Title', desc: 'Cross-code comparison, benchmark, dose deposition study.' },
      fr: { title: 'Geant4 / MCNP — Titre', desc: 'Comparaison inter-codes, benchmark, étude de dépôt de dose.' }
    },
    {
      tech: ['Python', 'SQL', 'LLM'],
      link: '',
      icon: `<svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M2 12h4M18 12h4M12 2v4M12 18v4M5 5l3 3M16 16l3 3M5 19l3-3M16 8l3-3"/></svg>`,
      en: { title: 'Data pipeline — 7000+ LHC fills', desc: 'End-to-end automation: fetch, parse, validate, archive, query. Python and standardised schemas.' },
      fr: { title: 'Pipeline de données — 7000+ fills LHC', desc: 'Automatisation complète : fetch, parsing, validation, archivage, requêtage. Python et schémas standardisés.' }
    }
  ]
};

/* ---------- Renderer (no edit needed below) ---------- */
window.renderProjects = function (lang) {
  const data = window.PROJECTS;
  if (!data) return;
  const L = (data && data.featured && data.featured[0] && data.featured[0][lang]) ? lang : 'en';

  // FEATURED
  const featuredHost = document.getElementById('featured-list');
  if (featuredHost) {
    featuredHost.innerHTML = data.featured.map((p, i) => {
      const reverse = i % 2 === 1 ? ' featured__item--reverse' : '';
      const tech = (p.tech || []).map(t => `<li>${escapeHtml(t)}</li>`).join('');
      const t = p[L];
      const linkBtn = p.link
        ? `<a href="${escapeAttr(p.link)}" target="_blank" rel="noopener" class="featured__cta" aria-label="${escapeAttr(t.title)}">↗</a>`
        : '';
      return `
        <li class="featured__item${reverse}">
          <div class="featured__visual" aria-hidden="true">${p.svg || ''}</div>
          <div class="featured__content">
            <p class="featured__overline">${L === 'fr' ? 'Projet phare' : 'Featured Project'}</p>
            <h3 class="featured__title">${escapeHtml(t.title)}</h3>
            <div class="featured__body"><p>${escapeHtml(t.desc)}</p></div>
            <ul class="featured__tech">${tech}</ul>
            ${linkBtn}
          </div>
        </li>`;
    }).join('');
  }

  // OTHER
  const otherHost = document.getElementById('other-grid');
  if (otherHost) {
    otherHost.innerHTML = data.other.map((p) => {
      const tech = (p.tech || []).map(t => `<li>${escapeHtml(t)}</li>`).join('');
      const t = p[L];
      const link = p.link
        ? `<a href="${escapeAttr(p.link)}" target="_blank" rel="noopener" class="mini__link" aria-label="Open project">↗</a>`
        : `<span class="mini__link" aria-hidden="true">↗</span>`;
      return `
        <li class="mini">
          <header class="mini__head">
            ${p.icon || ''}
            ${link}
          </header>
          <h4>${escapeHtml(t.title)}</h4>
          <p>${escapeHtml(t.desc)}</p>
          <ul class="mini__tech">${tech}</ul>
        </li>`;
    }).join('');
  }

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, c => ({ '&': '&', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  }
  function escapeAttr(s) { return escapeHtml(s); }
};

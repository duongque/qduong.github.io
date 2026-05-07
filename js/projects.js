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
        desc: 'Short description of the geometry, particle source, scoring strategy and the question being answered. Replace with your real FLUKA project once you\'ve picked which to feature.'
      },
      fr: {
        title: 'Titre du projet — à compléter',
        desc: 'Brève description de la géométrie, de la source, de la stratégie de scoring et de la question traitée. À remplacer par ton vrai projet FLUKA.'
      }
    }
  ],
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

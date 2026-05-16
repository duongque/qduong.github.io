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
      svg: '<img src="assets/projects/ifast-pic.png" alt="ADS-Target Activation" style="width:100%;height:100%;object-fit:contain;display:block;background:#0a192f;">',
      en: {
        title: 'ADS-Target Activation',
        subtitle: 'A Python-Driven Sequential Irradiation Framework for LBE Spallation Targets under 1 GeV Proton Irradiation',
        desc: 'ADS-Target Activation simulates the evolution of the nuclear inventory of an LBE spallation target under sequential 1 GeV proton irradiations, in a context directly inspired by the TRANSMUTEX ADS concept. A Python pipeline drives FLUKA in a loop, reinjecting the isotopic inventory from each cycle as the source term for the next via a Fortran user routine, faithfully reproducing the behaviour of a target under real operating conditions. Particular attention is given to Po-210 production and its radiological implications: residual dose rates, maintenance scenarios, and validation against HINDAS/nTOF experimental data and NEA/AEN technical reports on LBE-cooled ADS systems.'
      },
      fr: {
        title: 'ADS-Target Activation',
        subtitle: 'Un framework d\'irradiation séquentielle piloté par Python pour cibles de spallation LBE sous faisceau protons de 1 GeV',
        desc: 'ADS-Target Activation simule l\'évolution de l\'inventaire nucléaire d\'une cible de spallation en LBE soumise à des irradiations protons séquentielles à 1 GeV, dans un contexte directement inspiré du concept ADS de TRANSMUTEX.Un pipeline Python pilote FLUKA en boucle, réinjectant l\'inventaire isotopique de chaque cycle comme source du suivant via user routine Fortran, reproduisant fidèlement le comportement d\'une cible en exploitation réelle. Une attention particulière est portée à la production du Po-210 et à ses implications radiologiques : débits de dose résiduels, scénarios de maintenance et validation contre les données expérimentales HINDAS/nTOF et les rapports NEA/AEN sur les systèmes ADS à caloporteur LBE.'
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
          <div class="featured__content">
            <p class="featured__overline">${L === 'fr' ? 'Projet phare' : 'Featured Project'}</p>
            <h3 class="featured__title">${escapeHtml(t.title)}</h3>
            <h3 class="featured__subtitle">${escapeHtml(t.subtitle)}</h3>
            <div class="featured__visual" aria-hidden="true">${p.svg || ''}</div>
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

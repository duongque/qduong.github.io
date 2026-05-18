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
      svg: '<img src="assets/projects/transmutex_geometry.png" alt="ADS-Target Activation" style="width:100%;height:100%;object-fit:contain;display:block;background:#0a192f;">',
      en: {
        title: 'ADS-Target Activation',
        subtitle: 'A Python-Driven FLUKA Pipeline for Inventory and Residual-Dose Assessment of a MEGAPIE-Class LBE Spallation Target under 800 MeV Proton Irradiation (TRANSMUTEX)',
        desc: 'ADS-Target Activation models the nuclear inventory and residual radiation field of a MEGAPIE-class lead-bismuth eutectic (LBE) spallation target driven by an 800 MeV, 5 mA proton beam, in a context directly inspired by the TRANSMUTEX accelerator-driven system. The geometry reproduces the reference design: a T91 hemispherical beam window, the LBE target volume, a liquid-lead region acting as the reactor coolant, a T91 vessel and a concrete biological shield. A generic, YAML-driven Python pipeline orchestrates FLUKA end to end. It renders the input from Jinja2 templates, runs the activation simulation, and uses FLUKA\'s native radioactive-decay transport (semi-analogue RADDECAY) to follow the real decay products and build the time-resolved isotopic inventory and residual dose field at several cooling times (end-of-irradiation, 1 h, 1 d, 1 week, 30 days). Particular attention is given to Po-210 production and its radiological implications, including residual dose maps and maintenance-access scenarios, with results benchmarked against MEGAPIE post-test analyses, HINDAS/n_TOF spallation data and NEA/OECD technical reports on LBE-cooled ADS systems. The framework is campaign-agnostic and fully reproducible: geometry, beam, scoring and post-processing (isotope rankings, Z-A maps, Po-210 time evolution, USRBIN dose heatmaps, schematic cross-section) are regenerated automatically from a single configuration file.'
      },
      fr: {
        title: 'ADS-Target Activation',
        subtitle: 'Un pipeline FLUKA piloté par Python pour l\'évaluation de l\'inventaire et de la dose résiduelle d\'une cible de spallation LBE de classe MEGAPIE sous irradiation de protons de 800 MeV (TRANSMUTEX)',
        desc: 'ADS-Target Activation modélise l\'inventaire nucléaire et le champ de rayonnement résiduel d\'une cible de spallation en eutectique plomb-bismuth (LBE) de classe MEGAPIE, alimentée par un faisceau de protons de 800 MeV et 5 mA, dans un contexte directement inspiré du système piloté par accélérateur TRANSMUTEX. La géométrie reproduit le design de référence : une fenêtre faisceau hémisphérique en T91, le volume de cible LBE, une région de plomb liquide jouant le rôle de caloporteur du réacteur, une cuve en T91 et un blindage biologique en béton. Un pipeline Python générique, piloté par fichier YAML, orchestre FLUKA de bout en bout. Il génère l\'entrée à partir de templates Jinja2, lance la simulation d\'activation, et utilise le transport natif de décroissance radioactive de FLUKA (RADDECAY semi-analogique) pour suivre les véritables produits de désintégration et construire l\'inventaire isotopique résolu en temps ainsi que le champ de dose résiduelle à plusieurs temps de refroidissement (fin d\'irradiation, 1 h, 1 j, 1 semaine, 30 jours). Une attention particulière est portée à la production de Po-210 et à ses implications radiologiques, incluant les cartes de dose résiduelle et les scénarios d\'accès en maintenance, avec des résultats confrontés aux analyses post-test de MEGAPIE, aux données de spallation HINDAS/n_TOF et aux rapports techniques NEA/AEN sur les systèmes ADS refroidis au LBE. Le cadre est indépendant de la campagne et entièrement reproductible : géométrie, faisceau, scoring et post-traitement (classements isotopiques, cartes Z-A, évolution temporelle du Po-210, cartes de dose USRBIN, coupe schématique) sont régénérés automatiquement à partir d\'un unique fichier de configuration.'
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
            <p class="featured__overline">${L === 'fr' ? 'Projets en Cours...' : 'Work in Progress...'}</p>
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

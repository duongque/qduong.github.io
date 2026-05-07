/* ============================================================
   i18n dictionary - English (default) / French
   Apply with data-i18n="key.path" on any element.
   ============================================================ */

window.I18N = {
  en: {
    a11y: {
      skip: "Skip to content"
    },
    nav: {
      about: "About",
      experience: "Experience",
      education: "Education",
      projects: "Projects",
      publications: "Publications",
      contact: "Contact"
    },
    side: {
      role: "Accelerator Physicist <br> Nuclear Engineer",
      tagline: "I build expertise at the interface of accelerator physics, radiation protection and medical applications.",
      footer: "Built & deployed via GitHub Pages."
    },
    about: {
      title: "About",
      p1: "I am a PhD in accelerator physics (Universite Paris-Saclay, December 2025, with the jury's congratulations) and a nuclear engineer trained at <a href=\"https://phelma.grenoble-inp.fr/\" target=\"_blank\" rel=\"noopener\">Grenoble INP - PHELMA</a>. My doctoral research, conducted at <a href=\"https://home.cern/\" target=\"_blank\" rel=\"noopener\">CERN</a> under Dr. Vincent Baglin, focused on the measurement and characterisation of the electron cloud in the LHC using the Vacuum Pilot Sector.",
      p2: "My career vision is clear: contribute to <span class=\"hl\">radiation protection</span>, <span class=\"hl\">dosimetry</span> and the <span class=\"hl\">medical applications of particle accelerators</span> - FLASH-VHEE radiotherapy, hadron therapy, and the safety of large-scale facilities. I value standardisation, precision and clear scientific communication, and I invest personal time in deepening my expertise on FLUKA, radiation safety regulations and modern data pipelines.",
      p3: "Beyond research, I enjoy cooking, cinema, martial arts and physics - the kind of curiosity that doesn't switch off.",
      tools_intro: "Tools and codes I currently use:"
    },
    experience: {
      title: "Where I've worked"
    },
    exp: {
      now: "Present",
      cern_role: "Doctoral Researcher - Accelerator Physics",
      cern_b1: "Three-year doctoral programme on the measurement and characterisation of the electron cloud in the LHC using the Vacuum Pilot Sector.",
      cern_b2: "Built and ran an analysis pipeline over <strong>7000+ LHC fills</strong> (2015-2025) - extraction, standardisation and archival.",
      cern_b3: "Routine work in radioactive environments with precision instrumentation; calibration, troubleshooting, in-tunnel access.",
      cern_b4: "Participated in <strong>CLEAR</strong> operations - the 200 MeV electron linac dedicated to FLASH-VHEE research.",
      cern_b5: "Trained on PyECLOUD, COMSOL multiphysics and FLUKA Monte Carlo transport.",
      fr_role: "R&D Engineer - Automation & Data",
      fr_b1: "End-to-end pipeline for processing unstructured PDF documents.",
      fr_b2: "AI-assisted information extraction with LLM APIs, automated structuring and traceable archival.",
      fr_b3: "Python, async I/O, schema validation, integration tests.",
      kek_role: "Visiting Researcher - Particle Physics",
      kek_b1: "Five-month internship on cosmic muon measurement in an underground cavern with the COMET experiment at J-PARC.",
      kek_b2: "Cosmic muons used as reference particles for dosimetric calibration of gas detectors.",
      kek_b3: "Long-duration acquisition (C++), advanced statistical analysis.",
      edf_role: "Engineering Intern - Nuclear Safety Computations",
      edf_b1: "Two-month internship on the automation of safety computations for nuclear power plant steam generators.",
      edf_b2: "VBA / scripting, code review, regression testing on legacy tooling."
    },
    education: {
      title: "Education"
    },
    edu: {
      phd_honor: "With the jury's congratulations",
      phd_thesis: "<em>Thesis:</em> Study of the electron cloud in the CERN LHC with the Vacuum Pilot Sector.",
      ifast: "10 intensive days on medical innovation through accelerators. Team proposal: \"Destruction of fibrosis by anti-fibrotic nanoparticles activated by FLASH irradiation.\"",
      juas: "Accelerator design, beam dynamics & instrumentation, collective effects, magnets, synchrotron radiation, cryogenics, RF, vacuum systems.",
      nuclear: "Advanced nuclear physics - Plasma physics - Nuclear fusion.",
      phelma: "Reactor physics, nuclear physics, radiation-matter interaction & dosimetry, radiation protection, neutron transport simulation, thermohydraulics.",
      honors_high: "High distinction",
      honors: "Distinction"
    },
    projects: {
      title: "Some things I've built",
      lede: "A selection of FLUKA, PyECLOUD and multiphysics projects. Each card will be expanded with geometry, source term, scoring strategy and key results.",
      featured: "Featured Project",
      f1_title: "Project title - to be filled",
      f1_desc: "Short description of the geometry, particle source, scoring strategy and the question being answered. Replace with your real FLUKA project once you've picked which to feature.",
      f2_title: "Project title - to be filled",
      f2_desc: "Short description of the geometry, particle source, scoring strategy and the question being answered. Add results, plots or DOIs once published.",
      other_title: "Other noteworthy projects",
      o1_title: "FLUKA - Title",
      o1_desc: "Short description: geometry, source, scoring, key result.",
      o2_title: "FLUKA - Title",
      o2_desc: "Short description: geometry, source, scoring, key result.",
      o3_title: "COMSOL - Title",
      o3_desc: "Multiphysics simulation: physics coupled, mesh strategy, validation.",
      o4_title: "PyECLOUD - Title",
      o4_desc: "Electron cloud build-up simulation, parameter scan, comparison to data.",
      o5_title: "Geant4 / MCNP - Title",
      o5_desc: "Cross-code comparison, benchmark, dose deposition study.",
      o6_title: "Data pipeline - 7000+ LHC fills",
      o6_desc: "End-to-end automation: fetch, parse, validate, archive, query. Python & standardised schemas."
    },
    skills: {
      g_lang:    "Languages & Scripting",
      g_sim:     "Simulation & Modelling",
      g_data:    "Data Analysis & Scientific Computing",
      g_inst:    "Instrumentation & Acquisition",
      g_dev:     "Dev, Automation & AI",
      lvl_adv:   "Advanced",
      lvl_int:   "Intermediate",
      lvl_basic: "Basic"
    },
    publications: {
      title: "Publications & Thesis"
    },
    pub: {
      orcid_desc: "Open Researcher and Contributor ID - full publication record.",
      scholar_desc: "Citations, h-index and full publication list.",
      thesis_title: "PhD Thesis <span class=\"pub-link__arrow\">↗</span>",
      thesis_desc: "Study of the electron cloud in the CERN LHC with the Vacuum Pilot Sector.",
      add_id: "Add your ID in main.js",
      add_link: "Add HAL/Zenodo link in main.js",
      previews_title: "Document previews",
      paper_SEY: "Paper_SEY",
      paper_SEY_title: "A novel technique to estimate in situ LHC beam pipe maximum SEY with VPS electron cloud measurements and PyECLOUD simulations",
      paper_SEY_journal: "Physical Review Accelerators and Beams",
      paper_SEY_abstract: "The maximum secondary electron yield, $\\delta_\\mathrm{max}$, is a key parameter governing electron cloud build-up in high-intensity proton accelerators, yet its direct in situ determination under operational conditions remains challenging. This paper presents a novel method to estimate $\\delta_\\mathrm{max}$ in the Large Hadron Collider (LHC) using electron cloud measurements performed in the Vacuum Pilot Sector. The approach exploits the characteristic evolution of electron cloud intensity during beam injection, in particular the transition from an initial build-up regime to a linear scaling of electron flux with the number of injected bunches. Electron cloud currents measured with dedicated electron pickups are compared with PyECLOUD simulations performed for varying $\\delta_\\mathrm{max}$ values. The threshold number of injected bunches required to reach the linear regime provides a robust observable from which $\\delta_\\mathrm{max}$ can be extracted with limited sensitivity to other surface-emission parameters.The method is applied to multiple LHC fills and surface materials. For conditioned copper liners, $\\delta_\\mathrm{max}$ values between approximately 1.16 and 1.30 are obtained, in agreement with independent analyses and literature values. Applying the technique over extended operation periods enables the reconstruction of surface conditioning curves as a function of cumulative electron dose. These curves exhibit a rapid initial decrease of $\\delta_\\mathrm{max}$ under the detection limit of the method or followed by an apparent plateau. The method is compatible with routine LHC operation and enables systematic monitoring of vacuum-surface conditioning.",
      paper_RFA: "Paper_RFA",
      paper_RFA_title: "Electron cloud energy distribution measurement and model in the LHC with the Vacuum Pilot Sector",
      paper_RFA_journal: "Physical Review Accelerators and Beams",
      paper_RFA_abstract: "Electron cloud effects constitute a major performance limitation in high-intensity particle accelerators such as the Large Hadron Collider (LHC). A key ingredient for understanding and modelling these effects is the energy distribution of electrons impinging on the vacuum chamber walls. In this paper, we present direct measurements of electron cloud energy distributions obtained in the LHC Vacuum Pilot Sector (VPS) using Retarding Field Analysers and a beam pipe diameter of 8 cm, i.e. twice  the arc LHC one. The VPS provides a dedicated, fully instrumented test environment for electron cloud studies under realistic beam and synchrotron-radiation conditions. The measured energy spectra systematically exhibit a low-energy component associated with secondary electron emission and a higher-energy component originating from bunch-driven acceleration. To characterise these features, a phenomenological model is developed to reproduce the observed distributions up to 3 keV. Model parameters are extracted from a large dataset of LHC fills, with a representative 2025 physics fill used for detailed illustration. The evolution of the accelerated-electron peak is analysed throughout the fill cycle and compared with predictions from the analytical kick approximation model. Good agreement is observed $-$ particularly during the stable beam phase in one beamline $-$ confirming that bunch-induced kicks dominate the electron energy gain in the field-free regions of the VPS. Discontinuities in the peak energy at operational transitions, as well as the recurrent observation of narrow accelerated peaks in the other beamline, are reported and suggest a dependence of the beam optics on the resulting energy gain. Finally, cumulative energy distribution functions are derived to quantify the fraction of electrons exceeding given energy thresholds, providing direct input for the interpretation of future in situ ion measurements and for studies of electron cloud–induced heat loads and electrostimulated desorption. These results establish a quantitative experimental reference for energy-resolved electron cloud modelling in the LHC.",
      show_abstract: "Show abstract",
      hide_abstract: "Hide abstract"
    },
    contact: {
      overline: "06. What's next?",
      title: "Get in touch",
      lede: "Open to opportunities in radiation protection, medical physics, accelerator R&D and nuclear engineering. Happy to talk about FLUKA, FLASH-VHEE, electron clouds - or all three.",
      cta: "Say hello",
      cv: "Download CV"
    },
    footer: {
      designed: "Designed & built by Quentin DUONG",
      small: "No tracking - No cookies - Static site"
    }
  },

  fr: {
    a11y: {
      skip: "Aller au contenu"
    },
    nav: {
      about: "À propos",
      experience: "Expérience",
      education: "Formation",
      projects: "Projets",
      publications: "Publications",
      contact: "Contact"
    },
    side: {
      role: "Physicien des Accélérateurs <br> Ingénieur Nucléaire",
      tagline: "Une expertise à l'interface de la physique des accélérateurs, de la radioprotection et des applications médicales.",
      footer: "Réalisé & déployé via GitHub Pages."
    },
    about: {
      title: "À propos",
      p1: "Docteur en physique des accélérateurs (Université Paris-Saclay, décembre 2025, félicitations du jury) et ingénieur nucléaire diplômé de <a href=\"https://phelma.grenoble-inp.fr/\" target=\"_blank\" rel=\"noopener\">Grenoble INP - PHELMA</a>. Ma thèse, menée au <a href=\"https://home.cern/\" target=\"_blank\" rel=\"noopener\">CERN</a> sous la direction de Dr. Vincent Baglin, a porté sur la mesure et la caractérisation du nuage d'électrons dans le LHC à l'aide du Vacuum Pilot Sector.",
      p2: "Ma vision de carrière est claire : contribuer à la <span class=\"hl\">radioprotection</span>, à la <span class=\"hl\">dosimétrie</span> et aux <span class=\"hl\">applications médicales des accélérateurs</span> - radiothérapie FLASH-VHEE, hadronthérapie, sûreté des grandes installations. J'attache une importance particulière à la standardisation, à la précision et à la communication scientifique claire, et je consacre du temps personnel à approfondir mes compétences sur FLUKA, la réglementation en radioprotection et les pipelines de données modernes.",
      p3: "En dehors de la recherche, j'aime la cuisine, le cinéma, les arts martiaux et la physique - le genre de curiosité qui ne s'éteint pas.",
      tools_intro: "Outils et codes que j'utilise actuellement :"
    },
    experience: {
      title: "Mon parcours professionnel"
    },
    exp: {
      now: "Aujourd'hui",
      cern_role: "Doctorant - Physique des accélérateurs",
      cern_b1: "Programme doctoral de 3 ans sur la mesure et la caractérisation du nuage d'électrons dans le LHC à l'aide du Vacuum Pilot Sector.",
      cern_b2: "Conception et exploitation d'un pipeline d'analyse sur <strong>7000+ fills LHC</strong> (2015-2025) - extraction, standardisation et archivage.",
      cern_b3: "Travail régulier en environnement radioactif avec instruments de précision ; étalonnage, dépannage, accès tunnel.",
      cern_b4: "Participation à l'opération de <strong>CLEAR</strong> - linac électrons de 200 MeV dédié à la recherche FLASH-VHEE.",
      cern_b5: "Formation sur PyECLOUD, COMSOL multiphysique et le code Monte Carlo FLUKA.",
      fr_role: "Ingénieur R&D - Automatisation & Data",
      fr_b1: "Pipeline end-to-end pour le traitement de documents PDF non structurés.",
      fr_b2: "Extraction d'information assistée par IA avec API LLM, structuration automatisée et archivage traçable.",
      fr_b3: "Python, I/O asynchrones, validation de schémas, tests d'intégration.",
      kek_role: "Chercheur invité - Physique des particules",
      kek_b1: "Stage de 5 mois sur la mesure de muons cosmiques dans une caverne souterraine avec l'expérience COMET au J-PARC.",
      kek_b2: "Muons cosmiques utilisés comme particules de référence pour l'étalonnage dosimétrique de détecteurs gazeux.",
      kek_b3: "Acquisition longue durée (C++), analyse statistique avancée.",
      edf_role: "Stagiaire ingénieur - Calculs de sûreté nucléaire",
      edf_b1: "Stage de 2 mois sur l'automatisation des calculs de sûreté pour les générateurs de vapeur de centrales nucléaires.",
      edf_b2: "VBA / scripting, revue de code, tests de non-régression sur outils legacy."
    },
    education: {
      title: "Formation"
    },
    edu: {
      phd_honor: "Félicitations du jury",
      phd_thesis: "<em>Thèse :</em> Étude du nuage d'électrons dans le LHC du CERN avec le Vacuum Pilot Sector.",
      ifast: "10 jours intensifs sur l'innovation médicale par accélérateurs. Proposition d'équipe : « Destruction de fibrose par nanoparticules anti-fibrotiques activées par irradiation FLASH ».",
      juas: "Design d'accélérateurs, dynamique et instrumentation de faisceaux, effets collectifs, aimants, rayonnement synchrotron, cryogénie, RF, systèmes vide.",
      nuclear: "Physique nucléaire avancée - Physique des plasmas - Fusion nucléaire.",
      phelma: "Physique des réacteurs, physique nucléaire, interaction rayonnement-matière & dosimétrie, radioprotection, simulation transport neutron, thermohydraulique.",
      honors_high: "Mention Très Bien",
      honors: "Mention Bien"
    },
    projects: {
      title: "Quelques projets que j'ai menés",
      lede: "Une sélection de projets FLUKA, PyECLOUD et multiphysiques. Chaque carte sera enrichie avec la géométrie, le terme source, la stratégie de scoring et les résultats clés.",
      featured: "Projet phare",
      f1_title: "Titre du projet - à compléter",
      f1_desc: "Brève description de la géométrie, de la source, de la stratégie de scoring et de la question traitée. À remplacer par ton vrai projet FLUKA une fois que tu auras choisi.",
      f2_title: "Titre du projet - à compléter",
      f2_desc: "Brève description de la géométrie, de la source, de la stratégie de scoring et de la question traitée. Ajoute résultats, plots ou DOIs une fois publiés.",
      other_title: "Autres projets notables",
      o1_title: "FLUKA - Titre",
      o1_desc: "Brève description : géométrie, source, scoring, résultat clé.",
      o2_title: "FLUKA - Titre",
      o2_desc: "Brève description : géométrie, source, scoring, résultat clé.",
      o3_title: "COMSOL - Titre",
      o3_desc: "Simulation multiphysique : physiques couplées, stratégie de maillage, validation.",
      o4_title: "PyECLOUD - Titre",
      o4_desc: "Simulation de build-up de nuage d'électrons, scan paramétrique, comparaison aux données.",
      o5_title: "Geant4 / MCNP - Titre",
      o5_desc: "Comparaison inter-codes, benchmark, étude de dépôt de dose.",
      o6_title: "Pipeline de données - 7000+ fills LHC",
      o6_desc: "Automatisation complète : fetch, parsing, validation, archivage, requêtage. Python & schémas standardisés."
    },
    skills: {
      g_lang:    "Langages & scripts",
      g_sim:     "Simulation & modélisation",
      g_data:    "Analyse de données & calcul scientifique",
      g_inst:    "Instrumentation & acquisition",
      g_dev:     "Dev, automatisation & IA",
      lvl_adv:   "Avancé",
      lvl_int:   "Intermédiaire",
      lvl_basic: "Notions"
    },
    publications: {
      title: "Publications & Thèse"
    },
    pub: {
      orcid_desc: "Open Researcher and Contributor ID - liste complète des publications.",
      scholar_desc: "Citations, h-index et liste complète des publications.",
      thesis_title: "Thèse de doctorat <span class=\"pub-link__arrow\">↗</span>",
      thesis_desc: "Étude du nuage d'électrons dans le LHC du CERN avec le Vacuum Pilot Sector.",
      add_id: "Ajoute ton ID dans main.js",
      add_link: "Ajoute le lien HAL/Zenodo dans main.js",
      previews_title: "Aperçu des documents",
      paper_SEY: "Paper_SEY",
      paper_SEY_title: "A novel technique to estimate in situ LHC beam pipe maximum SEY with VPS electron cloud measurements and PyECLOUD simulations",
      paper_SEY_journal: "Physical Review Accelerators and Beams",
      paper_SEY_abstract: "The maximum secondary electron yield, $\\delta_\\mathrm{max}$, is a key parameter governing electron cloud build-up in high-intensity proton accelerators, yet its direct in situ determination under operational conditions remains challenging. This paper presents a novel method to estimate $\\delta_\\mathrm{max}$ in the Large Hadron Collider (LHC) using electron cloud measurements performed in the Vacuum Pilot Sector. The approach exploits the characteristic evolution of electron cloud intensity during beam injection, in particular the transition from an initial build-up regime to a linear scaling of electron flux with the number of injected bunches. Electron cloud currents measured with dedicated electron pickups are compared with PyECLOUD simulations performed for varying $\\delta_\\mathrm{max}$ values. The threshold number of injected bunches required to reach the linear regime provides a robust observable from which $\\delta_\\mathrm{max}$ can be extracted with limited sensitivity to other surface-emission parameters.The method is applied to multiple LHC fills and surface materials. For conditioned copper liners, $\\delta_\\mathrm{max}$ values between approximately 1.16 and 1.30 are obtained, in agreement with independent analyses and literature values. Applying the technique over extended operation periods enables the reconstruction of surface conditioning curves as a function of cumulative electron dose. These curves exhibit a rapid initial decrease of $\\delta_\\mathrm{max}$ under the detection limit of the method or followed by an apparent plateau. The method is compatible with routine LHC operation and enables systematic monitoring of vacuum-surface conditioning.",
      paper_RFA: "Paper_RFA",
      paper_RFA_title: "Electron cloud energy distribution measurement and model in the LHC with the Vacuum Pilot Sector",
      paper_RFA_journal: "Physical Review Accelerators and Beams",
      paper_RFA_abstract: "Electron cloud effects constitute a major performance limitation in high-intensity particle accelerators such as the Large Hadron Collider (LHC). A key ingredient for understanding and modelling these effects is the energy distribution of electrons impinging on the vacuum chamber walls. In this paper, we present direct measurements of electron cloud energy distributions obtained in the LHC Vacuum Pilot Sector (VPS) using Retarding Field Analysers and a beam pipe diameter of 8 cm, i.e. twice  the arc LHC one. The VPS provides a dedicated, fully instrumented test environment for electron cloud studies under realistic beam and synchrotron-radiation conditions. The measured energy spectra systematically exhibit a low-energy component associated with secondary electron emission and a higher-energy component originating from bunch-driven acceleration. To characterise these features, a phenomenological model is developed to reproduce the observed distributions up to 3 keV. Model parameters are extracted from a large dataset of LHC fills, with a representative 2025 physics fill used for detailed illustration. The evolution of the accelerated-electron peak is analysed throughout the fill cycle and compared with predictions from the analytical kick approximation model. Good agreement is observed $-$ particularly during the stable beam phase in one beamline $-$ confirming that bunch-induced kicks dominate the electron energy gain in the field-free regions of the VPS. Discontinuities in the peak energy at operational transitions, as well as the recurrent observation of narrow accelerated peaks in the other beamline, are reported and suggest a dependence of the beam optics on the resulting energy gain. Finally, cumulative energy distribution functions are derived to quantify the fraction of electrons exceeding given energy thresholds, providing direct input for the interpretation of future in situ ion measurements and for studies of electron cloud–induced heat loads and electrostimulated desorption. These results establish a quantitative experimental reference for energy-resolved electron cloud modelling in the LHC.",
      show_abstract: "Voir le résumé",
      hide_abstract: "Masquer le résumé"
    },
    contact: {
      overline: "06. Et maintenant ?",
      title: "Prendre contact",
      lede: "Ouvert aux opportunités en radioprotection, physique médicale, R&D accélérateurs et génie nucléaire. Toujours partant pour parler FLUKA, FLASH-VHEE, nuage d'électrons - ou les trois.",
      cta: "Dire bonjour",
      cv: "Télécharger le CV"
    },
    footer: {
      designed: "Conçu & développé par Quentin DUONG",
      small: "Pas de tracking - Pas de cookies - Site statique"
    }
  }
};

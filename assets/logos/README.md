# Logos à télécharger

Dépose les fichiers dans **ce dossier** (`assets/logos/`) avec **exactement** le nom indiqué dans la colonne « Fichier ». Le portfolio les chargera automatiquement.

## Format

- **SVG fortement préféré** : qualité parfaite à toute taille, monochrome ou couleur, taille de fichier minuscule.
- **PNG transparent** accepté en fallback : choisir au minimum 128×128 px (idéalement 256×256), fond transparent.
- Les logos rectangulaires (wordmarks d'écoles, ex. « Université Paris-Saclay ») seront automatiquement redimensionnés à 18 px de hauteur — leur largeur s'adapte.
- **SVG ou PNG, pas besoin de configurer quoi que ce soit** : `logos.js` essaie `<key>.svg` en premier, et bascule automatiquement sur `<key>.png` si le SVG n'existe pas. Donc tu déposes `cern.svg` OU `cern.png` (peu importe) et ça apparaît.

## Que se passe-t-il si un fichier manque ?

L'image cassée est automatiquement masquée. Le chip affiche alors simplement le wordmark texte (par exemple « FLUKA » sans icône). Donc tu peux déposer les fichiers **un par un** sans casser le site.

## Liste exhaustive des fichiers attendus

### Languages & Scripting

| Clé          | Fichier            | Source officielle                                                      |
|--------------|--------------------|------------------------------------------------------------------------|
| `python`     | `python.svg`       | https://www.python.org/community/logos/                                |
| `cpp`        | `cpp.svg`          | https://isocpp.org/ ou https://devicon.dev (chercher C++)              |
| `vba`        | `vba.svg`          | logo Microsoft Office / Excel — https://simpleicons.org/?q=excel       |
| `latex`      | `latex.svg`        | https://www.latex-project.org/about/logos/  ou https://simpleicons.org/?q=latex |
| `bash`       | `bash.svg`         | https://devicon.dev/ ou https://simpleicons.org/?q=gnu+bash            |
| `powershell` | `powershell.svg`   | https://simpleicons.org/?q=powershell                                  |
| `fortran`    | `fortran.svg`      | https://fortran-lang.org/  (logo en en-tête)                           |
| `html`       | `html.svg`         | https://devicon.dev/ (HTML5)                                           |

### Simulation & Modelling

| Clé        | Fichier         | Source officielle                                                       |
|------------|-----------------|-------------------------------------------------------------------------|
| `pyecloud` | `pyecloud.svg`  | https://github.com/PyCOMPLETE/PyECLOUD (pas de logo officiel)           |
| `fluka`    | `fluka.svg`     | https://fluka.cern/ (en-tête)                                           |
| `comsol`   | `comsol.svg`    | https://www.comsol.com/company/press-room (kit de presse)               |
| `madx`     | `madx.svg`      | https://mad.web.cern.ch/ (pas de logo officiel)                         |
| `dragon`   | `dragon.svg`    | https://www.polymtl.ca/merlin/  (groupe DRAGON, Polytechnique Montréal) |

### Data Analysis & Scientific Computing

| Clé      | Fichier       | Source officielle                                                       |
|----------|---------------|-------------------------------------------------------------------------|
| `numpy`  | `numpy.svg`   | https://numpy.org/  (icône en en-tête)                                  |
| `root`   | `root.svg`    | https://root.cern/about/logos/                                          |
| `timber` | `timber.svg`  | https://nxcals-docs.web.cern.ch/  (pas de logo officiel — texte)        |
| `jupyter`| `jupyter.svg` | https://jupyter.org/  (logo "planet")                                   |
| `sklearn`| `sklearn.svg` | https://scikit-learn.org/stable/_static/scikit-learn-logo-small.png     |
| `sql`    | `sql.svg`     | https://www.sqlite.org/  ou logo générique base de données              |

### Instrumentation & Acquisition

| Clé      | Fichier       | Source officielle                                                       |
|----------|---------------|-------------------------------------------------------------------------|
| `labview`| `labview.svg` | https://www.ni.com/  (rechercher LabVIEW logo)                          |
| `gpib`   | `gpib.svg`    | générique — pas de logo officiel (utiliser une icône "RS-232" / "GPIB") |

### Dev, Automation & AI

| Clé      | Fichier       | Source officielle                                                       |
|----------|---------------|-------------------------------------------------------------------------|
| `git`    | `git.svg`     | https://git-scm.com/downloads/logos                                     |
| `vscode` | `vscode.svg`  | https://code.visualstudio.com/brand                                     |
| `llmapi` | `llmapi.svg`  | générique IA — par exemple icône "robot" ou "brain"                     |

### Organisations

| Clé      | Fichier       | Source officielle                                                      |
|----------|---------------|------------------------------------------------------------------------|
| `cern`   | `cern.svg`    | https://home.cern/resources/brand  (CERN brand toolkit, logo officiel) |
| `kek`    | `kek.svg`     | https://www.kek.jp/en/  (logo KEK en en-tête)                          |
| `edf`    | `edf.svg`     | https://www.edf.fr/groupe-edf/qui-sommes-nous/identite-visuelle        |
| `thales` | `thales.svg`  | https://www.thalesgroup.com/en/group/journalist/press_kit              |
| `jparc`  | `jparc.svg`   | https://j-parc.jp/c/en/  (logo en en-tête)                             |
| `ifast`  | `ifast.svg`   | https://ifast-project.eu/  (logo en en-tête)                           |
| `juas`   | `juas.svg`    | https://espace.cern.ch/juas/  (logo JUAS)                              |

### Établissements scolaires

| Clé              | Fichier              | Source officielle                                                       |
|------------------|----------------------|-------------------------------------------------------------------------|
| `paris-saclay`   | `paris-saclay.svg`   | https://www.universite-paris-saclay.fr/identite-graphique               |
| `grenoble-inp`   | `grenoble-inp.svg`   | https://www.grenoble-inp.fr/  (logo en en-tête)                         |
| `phelma`         | `phelma.svg`         | https://phelma.grenoble-inp.fr/                                         |
| `grenoble-alpes` | `grenoble-alpes.svg` | https://www.univ-grenoble-alpes.fr/identite-visuelle/                   |

## Méthode rapide pour télécharger un SVG depuis un site officiel

1. Ouvre la page du logo dans Chrome/Firefox.
2. Clic droit sur le logo → **« Inspecter l'élément »**.
3. Si c'est un `<img src="…">` SVG : copie l'URL et télécharge-la (clic droit → ouvrir dans un nouvel onglet → Ctrl+S).
4. Si c'est un `<svg>` inline dans le HTML : sélectionne tout le bloc `<svg>…</svg>`, clic droit → **« Modifier en HTML »** → Ctrl+A, Ctrl+C → colle dans un nouveau fichier `.svg` (ajoute `<?xml version="1.0"?>` au début si tu veux être strict, ce n'est pas obligatoire).
5. Renomme le fichier selon la colonne « Fichier » ci-dessus, dépose-le dans `assets/logos/`.

## Conseil sur le rendu

Les logos colorés (Python jaune-bleu, CERN bleu, etc.) **gardent leurs couleurs d'origine** dans le portfolio. Si tu veux qu'ils soient tous monochromes (mint pour s'aligner sur le thème), édite `js/logos.js` et ajoute la classe `lg-img--mono` sur les `<img>` (à coder côté CSS si tu veux ce mode).

## Si tu n'as pas le temps de tous les télécharger

Le portfolio fonctionne **sans aucun fichier de logo** — il affichera juste les wordmarks texte. Commence par les plus visibles (Python, FLUKA, COMSOL, CERN) et complète au fur et à mesure.

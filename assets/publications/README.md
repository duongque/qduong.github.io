# Publication preview images

Dépose ici les images des **premières pages** de tes documents (thèse, articles, posters). Le portfolio les affiche en grille dans la section *Publications & Thesis*.

## Format

- **PNG ou JPG** transparent ou opaque
- **Ratio recommandé** : A4 (1 / 1.414, soit environ 600 × 848 px). Le CSS recadre via `object-fit: cover`, donc des écarts ne posent pas de problème.
- **Taille minimum** : 400 px de large pour rester nettes en haute définition (Retina).

## Comment générer rapidement la première page d'un PDF

**Méthode 1 — capture directe** : ouvre le PDF dans Acrobat/Edge/Chrome, fais une capture d'écran (Win+Maj+S), recadre, sauvegarde en PNG.

**Méthode 2 — ImageMagick (Windows / WSL)** :
```bash
magick convert -density 200 ma_these.pdf[0] -quality 85 thesis_2025.png
```

**Méthode 3 — Python (depuis WSL)** :
```bash
pip install pdf2image --break-system-packages
python -c "from pdf2image import convert_from_path; convert_from_path('these.pdf', dpi=200, first_page=1, last_page=1)[0].save('thesis_2025.png')"
```

**Méthode 4 — services en ligne** : pdf24.org → "PDF en images" → choisir première page seulement.

## Fichiers attendus par défaut

Pour faire correspondre le HTML actuel d'`index.html` :

| Fichier             | Document                              | Lien externe (à éditer dans index.html) |
|---------------------|----------------------------------------|------------------------------------------|
| `thesis_2025.png`   | Thèse de doctorat (Paris-Saclay 2025) | déjà câblé sur https://theses.hal.science/tel-05443980 |
| `paper_1.png`       | Premier article                        | placeholder, à éditer                    |
| `paper_2.png`       | Deuxième article                       | placeholder                              |
| `paper_3.png`       | Troisième article                      | placeholder                              |

## Ajouter / retirer des entrées

Édite directement `index.html` dans la `<ul class="pub-previews">`. Format : image à gauche (cropée verticalement selon la hauteur de la card), texte à droite (titre, journal, année). Garde l'ordre **antichronologique** (le plus récent en haut).

```html
<li>
  <a href="https://doi.org/..." target="_blank" rel="noopener" class="pub-preview">
    <div class="pub-preview__cover">
      <img src="assets/publications/mon_article.png" alt="" loading="lazy"
           onerror="this.classList.add('is-missing')" />
    </div>
    <div class="pub-preview__content">
      <h4 class="pub-preview__title">Titre complet de l'article</h4>
      <p class="pub-preview__journal">Phys. Rev. ST Accel. Beams</p>
      <p class="pub-preview__year">2024</p>
    </div>
  </a>
</li>
```

Le `onerror` masque automatiquement l'image cassée et affiche un placeholder élégant tant que tu n'as pas déposé le fichier.

## Mention « Reviewing » (article en cours de relecture)

Pour signaler qu'un article est en peer review, ajoute la classe `is-reviewing` sur le lien `.pub-preview` :

```html
<a href="#" class="pub-preview is-reviewing"> ... </a>
```

Effet : la cover est floutée et un badge mint « Reviewing » apparaît en surimpression au centre, légèrement incliné. Idéal pour les preprints en attente de publication.

## Si tu n'as pas encore les images

Le portfolio fonctionne **sans aucune image** : chaque card affiche un placeholder gris diagonal avec « Document preview ». Tu peux donc déjà mettre en ligne le site et déposer les images plus tard.

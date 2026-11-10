# Technique

## Architecture

- **Tout le jeu tient dans `index.html`**, en HTML, CSS et JavaScript, sans bibliothèque. Le dessin se fait sur un seul `<canvas>` 2D.
- **Boucle** : `requestAnimationFrame`. Le pas de temps est plafonné à 1/30 s, pour qu'un ralentissement ne fasse pas « sauter » le jeu.
- **États** : `menu` → `play` → `over`.

### Organisation du script

| Section | Contenu |
| --- | --- |
| Réglages | Gravité, contrôle, vitesse, tailles, puissance (`player.belly`, 25 par mûre). |
| Palettes | `SICK` et `HEAL`, mélangées selon `health` (0 à 1). |
| Décor | Génération des plans en parallaxe, des collines, des objets au sol, des nuages. |
| Murs | `spawnWall()`, cellules (`makeCell`), racines, pièges. |
| Tir | `spit()`, niveaux (`LEVELS`), méga-onde (`fireBeam`, `updateMegas`). |
| Ennemis | Moustiques (`updateBugs`, `drawBug`). |
| Personnage | Projection 3D de Gloub (`proj`, `sph`), ailes (`wingShape`), `drawGloub()`. |
| Rendu | `render()`, qui dessine dans l'ordre : ciel, collines, sol, 3 plans de décor + objets, brume, murs, bonus, ennemis, ondes, Gloub, particules, premier plan, papier. Puis l'interface du jeu (`drawHUD`). |

### Taille d'écran

- **Le monde est calculé dans une taille logique fixe** : 620 unités de haut, et au moins 760 de large. L'écran l'affiche à l'échelle (`VS`, pixels CSS par unité). Un téléphone voit donc la même scène qu'un ordinateur, en plus petit, au lieu d'une vue zoomée.
- **Le HUD et les annonces sont dessinés en pixels d'écran** : ils gardent la même taille lisible quel que soit l'écran.
- Les zones sûres (encoche) sont lues en pixels d'écran et converties en unités logiques là où le monde en a besoin.
- Téléphone tenu en portrait : l'écran titre conseille de passer en paysage.

### Performances

Sur téléphone, le coût vient presque entièrement du **nombre de pixels peints**. Le script lui-même prend 2 à 3 ms par image.

- **Finesse de rendu adaptative** (`PR`, pixels réels par pixel CSS) :
  - au départ, la densité de l'écran, plafonnée à 2 et limitée à environ 1 million de pixels sur écran tactile (2,4 millions sinon) ;
  - si le jeu passe sous 48 images/s, la finesse baisse par paliers (2 → 1,75 → 1,5 → 1,25 → 1) ;
  - si ça ne suffit pas, les effets d'ambiance sont retirés (grain du papier, brume, poussières, traînées de vent, rayons) ;
  - en dernier recours, la finesse descend jusqu'à 0,7 ;
  - un appareil bridé à 30 images/s (mode économie d'énergie) n'est pas dégradé sous 1.
- **Caches** :
  - le dégradé du ciel et le halo du soleil, dans une petite image étirée, refaite quand la guérison change ;
  - les nuages, chacun dans sa petite image ;
  - le mélange « malade / guéri » de chaque élément de décor, à la finesse de l'écran : une seule copie d'image par élément ;
  - la haie de ronces du premier plan, dans une longue bande refaite toutes les quelques secondes ;
  - le grain du papier et le vignettage, peints à la taille réelle du canvas et recopiés pixel pour pixel.
- **Aucun flou calculé à chaque image** (`shadowBlur`) : les lueurs (ondes, dards, méga-onde, bulbes, moustiques, esprits) sont faites d'un trait large et transparent ou d'un halo pré-dessiné (`glow`). Le texte du HUD est cerné d'un contour au lieu d'une ombre floue.
- **Bandes du sol** : seules celles qui se voient sont tracées (W × 2,4 au lieu de W × 6), avec 7 points par bord au lieu de 10. Elles coûtaient à elles seules près d'un tiers du rendu.
- **Décor pré-dessiné** : tours, ruines, arbres, buissons et objets au sol sont peints une fois (version malade et guérie).
- **Pas de rotation** des images de décor, **pas d'arrondi au pixel** des positions (l'arrondi faisait trembler le fond).

### Fluidité

Deuxième passe, centrée sur la régularité des images plutôt que sur leur nombre moyen.

- **Les colonnes de ronces sont peintes une fois** : chaque colonne a sa propre image, recopiée à chaque image du jeu. Elle n'est repeinte que quand une touffe casse ou qu'un rocher se fend. Seuls les éléments animés (lueur des bulbes, mûres nichées) sont dessinés en direct. Avant, les centaines de touffes de tous les murs étaient retracées à chaque image : c'était la plus grosse dépense du rendu (5 à 6 ms sur 24 dans le navigateur de test, 1,5 ms après).
- **Cadence calée sur l'écran** : les navigateurs livrent les images à intervalles un peu irréguliers. Le jeu apprend la cadence de l'écran (60, 90, 120 Hz…) et avance d'un nombre entier d'images d'écran ; l'écart restant est rattrapé en douceur. Sur un écran à 60 Hz qui hésite de ± 1,5 ms, le tremblement du pas de temps est divisé par quatre.
- **Plus d'à-coups aux paliers de guérison** : au passage d'un palier, chaque élément du décor et chaque nuage devait être repeint dans la même image. On en repeint au plus 3 par image ; les autres gardent un instant leur ancienne teinte ou sont posés en deux copies fondues. Les images de cache ne sont plus réallouées quand leur taille ne change pas.
- **Plus d'à-coup au changement de finesse** : le grain du papier était tiré au hasard pixel par pixel sur tout l'écran. C'est maintenant une tuile de 256 × 256 répétée.
- **Moins de tracés par image** :
  - sillons et brume d'horizon du sol peints une fois (refaits quand la couleur du ciel change) ;
  - collines remplies seulement jusque sous l'horizon (le sol recouvre le reste) ;
  - aigrettes de pissenlit, fleurs et bulbes : une image pré-peinte au lieu de dizaines de traits et de dégradés.

Mesures dans le même navigateur de test, au format d'un téléphone en paysage, finesse 1,5 :

| Moment | Avant | Après | Images de plus de 25 ms (sur 5 s) |
| --- | --- | --- | --- |
| Forêt malade | 43 images/s | 53 images/s | 82 → 35 |
| Méga-onde | 37 images/s | 47 images/s | 107 → 63 |
| Cœur de ronce | 37 images/s | 47 images/s | 113 → 64 |

Ce navigateur dessine sans carte graphique, où recopier une image coûte cher. Sur un vrai téléphone, recopier une image est presque gratuit : c'est le tracé des formes qui coûte, et la passe en a retiré la plus grande part.

## Application installable (PWA)

| Fichier | Rôle |
| --- | --- |
| `manifest.webmanifest` | Nom, icônes, couleurs (`#2B2233`), plein écran, paysage. |
| `sw.js` | Service worker (cache hors ligne). |
| `icons/` | 192, 512, 512 « maskable » (Android), 180 (iPhone), 64 (favicon). |
| `fonts/` | Polices embarquées en sous-ensemble latin (licence SIL OFL). |

**Stratégie de cache** (`sw.js`) :

- **La page** (`index.html`) : d'abord le réseau, pour toujours avoir la dernière version. Si le réseau ne répond pas en 3 s ou si l'on est hors ligne, la copie en cache est utilisée.
- **Le reste** (polices, icônes, manifeste) : le cache d'abord, mis à jour en arrière-plan.
- Après avoir changé les icônes ou les polices, augmenter `VERSION` dans `sw.js`.

**Ce qui est géré dans la page** :

- Zones sûres (encoche, coins arrondis) : l'interface et le HUD s'en écartent, le décor passe dessous.
- Bouton « Installer le jeu » (Chrome, Edge, Android), qui n'apparaît que si le navigateur propose l'installation.
- Astuce d'installation pour iPhone et iPad, affichée dans Safari tant que le jeu n'est pas installé.
- Le service worker n'est enregistré qu'en `http(s)`. En `file://`, le jeu reste jouable.

**Polices** : elles venaient de Google Fonts. Elles sont maintenant dans `fonts/`, ce qui les rend disponibles hors ligne et évite d'envoyer une requête à Google à chaque partie.

## Tests

Une fonction en lecture seule permet aux tests automatiques de lire l'état du jeu :

```js
window.__gloub()
// → { state, score, health, belly, y, vy, H, cells, flowers }
```

Ce qui a été vérifié avec Playwright (Chromium) :

- partie normale sans erreur ;
- temps de chargement de la sève ;
- hauteur des sauts selon la durée de l'appui ;
- largeur des couloirs dans les murs de racines ;
- fluidité du décor, avec 45 à 55 images/s en rendu logiciel, et régularité des images (nombre d'images de plus de 25 ms) ;
- cadence de jeu sur des intervalles simulés (60, 90 et 120 Hz, images en retard, 30 images/s bridées) ;
- installabilité (aucune erreur remontée par Chrome) ;
- rechargement et partie hors ligne ;
- mise en page de l'écran titre sur ordinateur, sur téléphone en portrait et en paysage (iPhone SE, iPhone 13, Android).

## Lancer en local

```sh
python3 -m http.server 8000
# puis ouvrir http://localhost:8000
```

## Générer les icônes

Les icônes sont dessinées par le moteur du jeu. On en fait une copie temporaire, à laquelle on ajoute une fonction qui :

- fige la boucle ;
- redimensionne le canvas en carré ;
- peint un ciel clair, un soleil doux et des collines vertes ;
- dessine Gloub en grand avec `drawGloub()`, plus trois ondes vert sève.

Une capture est ensuite faite à chaque taille. Pour l'icône « maskable », Gloub est plus petit pour rester dans le cercle de sécurité d'Android (80 % central).

# Gloub

Un petit shooter HTML5 à défilement horizontal, dans l'esprit Ghibli.

La forêt étouffe sous des ronces malades, nourries par la pollution. **Gloub**, un petit esprit-chauve-souris, les perce de ses ondes pour la faire refleurir.

## Jouer

- **En ligne** : publier le dossier avec GitHub Pages (voir plus bas) et ouvrir l'adresse dans un navigateur, sur ordinateur ou téléphone, de préférence en mode paysage.
- **En local** : ouvrir directement `index.html` marche aussi, mais sans installation ni mode hors ligne.

## Installer l'application (PWA)

Gloub est une application web installable : une fois installé, il se lance en plein écran depuis l'écran d'accueil, avec son icône, et marche **hors ligne**.

- **Android, Chrome, Edge** : bouton « Installer le jeu » sur l'écran titre, ou menu du navigateur → « Installer l'application ».
- **iPhone, iPad** : dans Safari, bouton Partager → « Sur l'écran d'accueil ».

L'installation demande que le jeu soit servi en **https** (GitHub Pages le fait) ou sur `localhost`. Ouvert en `file://`, le jeu reste jouable mais n'est pas installable.

### Publier avec GitHub Pages

1. Pousser le dépôt sur GitHub.
2. Sur GitHub : **Settings → Pages → Build and deployment**, source « Deploy from a branch », branche `main`, dossier `/ (root)`.
3. Le jeu est en ligne quelques minutes plus tard à l'adresse `https://<compte>.github.io/gloub/`.

### Tester en local

```sh
python3 -m http.server 8000
```

Puis ouvrir http://localhost:8000.

### Mises à jour

Quand il y a du réseau, l'application charge toujours la dernière version de `index.html` ; hors ligne, elle lance la copie en cache. Si l'on change les icônes ou les polices, augmenter `VERSION` dans `sw.js` pour que le cache soit renouvelé.

## Commandes

- **Tap** (ou barre d'espace / flèche haut) : petit coup d'aile.
- **Maintenir** : Gloub monte de plus en plus vite.
- **Relâcher** : il redescend.
- Les **ondes** partent toutes seules, droit devant.

## Règles

- Les colonnes de ronces se cassent avec les ondes. Les **racines** brunes sont incassables : il faut passer par l'ouverture.
- Les **bulbes** lumineux nichés dans les ronces libèrent des **mûres**. Chaque mûre gobée renforce les ondes :
  salive → sève → sève ×2 → grande onde → **méga-onde**.
- Les **moustiques de suie** arrivent en nuées (annoncées par des chevrons rouges).
- Un choc fait perdre une mûre. Le ventre vide, c'est la chute.
- Purifier les ronces fait refleurir le monde : le ciel, les arbres et le décor se transforment.

## Fichiers

| Fichier | Rôle |
| --- | --- |
| `index.html` | Le jeu entier : graphismes, logique, interface. |
| `manifest.webmanifest` | Nom, icônes, couleurs et mode plein écran de l'application. |
| `sw.js` | Service worker : met le jeu en cache pour le mode hors ligne. |
| `icons/` | Icônes de l'application, dessinées avec le moteur du jeu. |
| `fonts/` | Polices Mochiy Pop One et Nunito, embarquées pour marcher hors ligne. |
| `docs/` | Documents d'étude : concept, direction artistique, gameplay, bestiaire, technique, journal des décisions. |

## Réglages

Les principaux réglages (gravité, accélération, vitesse de défilement, niveaux de tir, fréquence des bulbes…) sont regroupés en haut du script dans `index.html`.

## Crédits

Polices [Mochiy Pop One](https://fonts.google.com/specimen/Mochiy+Pop+One) et [Nunito](https://fonts.google.com/specimen/Nunito), sous licence SIL Open Font License 1.1 (voir `fonts/`).

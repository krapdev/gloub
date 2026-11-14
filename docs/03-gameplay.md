# Gameplay

Les valeurs ci-dessous sont celles du code (`index.html`). Les réglages principaux sont regroupés en haut du script.

## Contrôle

Le but est un contrôle **précis pour esquiver** : un petit saut au tap, une vraie montée en maintenant.

| Geste | Effet |
| --- | --- |
| Tap | Petit coup d'aile immédiat. |
| Maintenir | Gloub accélère progressivement vers le haut ; la pleine puissance arrive en 0,35 s. |
| Relâcher | Il retombe. |

Hauteur gagnée selon la durée de l'appui (mesurée) :

| Durée de l'appui | Hauteur gagnée |
| --- | --- |
| 40 ms (tap) | 35 px |
| 100 ms | 69 px |
| 200 ms | 112 px |
| 400 ms | 264 px |
| 700 ms | 414 px |

| Réglage | Valeur |
| --- | --- |
| `GRAVITY` | 2 300 px/s² |
| `TAP_VY` | −340 px/s |
| `LIFT_MIN` / `LIFT_MAX` | 500 / 3 000 px/s² |
| `RISE_MIN` / `RISE_MAX` | −360 / −580 px/s |
| `RAMP_TIME` | 0,35 s |
| `MAX_FALL` | 620 px/s |

- **Haut de l'écran** : Gloub est bloqué, sans dégât.
- **Sol** : il est couvert de ronces. Les toucher fait perdre une mûre, puis Gloub rebondit vers le haut.

## Tir : les ondes

Le tir est **automatique et toujours droit devant**, avec un coup toutes les 0,13 s environ. Les tirs en éventail ont été écartés : le tir droit est plus exigeant et oblige à se placer face aux ronces.

## L'éveil de Gloub et les niveaux de puissance

La puissance de Gloub se lit **sur lui** : à chaque mûre, l'esprit de la forêt s'éveille un peu plus en lui, jusqu'à sa forme d'esprit lumineuse. Plus Gloub est fort, plus il porte la nature guérie : c'est le thème du jeu porté par le héros.

- Chaque **mûre** gobée l'éveille **d'un niveau** (jusqu'à la forme d'esprit).
- Chaque **choc** lui fait perdre un niveau : des feuilles (ou des pétales de sa couronne) tombent (« Aïe ! »).
- La puissance **ne baisse pas avec le temps**. Seule la forme d'esprit est temporaire.
- **Chaque évolution est annoncée** par un grand bandeau (« Nervuré ! », « Ondes : Sève ×2 ») ; Gloub « saute » avec un éclat de lumière quand il change. Le HUD affiche la jauge « Éveil » et le niveau en cours.

| Mûres | Niveau | Ce qui change sur Gloub | Onde | Dégâts | Traverse |
| --- | --- | --- | --- | --- | --- |
| 0 | **Gloub** | sa petite houppette de deux feuilles | Salive, petite onde | 1 | 1 cellule |
| 1 | **Marqué** | une feuille d'esprit vert sève sur le front | Sève | 4 | 2 |
| 2 | **Nervuré** | ailes nervurées de sève, une feuille au bout de l'aile, collerette de feuilles | Sève ×2, deux ondes parallèles, plus rapides | 4 | 2 |
| 3 | **Couronné** | couronne de fleurs, taches d'esprit qui luisent, feuilles au bout des ailes | Grande onde | 4 | 3 |
| 4 | **Esprit** | forme d'esprit : corps vert d'eau lumineux, ailes claires, aura, fleur dorée qui tourne | Méga-onde | 4 | 3 |

### La méga-onde

- Au niveau maximum, une **concentration** se forme sur Gloub : des étincelles convergent et un anneau se resserre ; une jauge dorée sous la jauge « Éveil » se remplit et clignote juste avant le tir. Au bout de 1,1 s, une **onde géante** part tout droit (« Méga-onde ! »).
- Elle balaie une bande de **la moitié de l'écran en hauteur** sur toute sa largeur. Elle purifie toutes les ronces, rochers et bulbes qu'elle croise, et tue les moustiques.
- Elle **traverse les racines sans les casser** : on doit toujours passer par l'ouverture.
- Un flash blanc accompagne le tir.
- **Un seul tir** : après la méga-onde, Gloub redescend aussitôt à « Couronné » (grande onde). Il faut une nouvelle mûre pour la recharger. Avant, elle durait 8 s et tirait toutes les 1,1 s : le jeu se jouait tout seul.

### Salive et sève : arracher ou purifier

- Une ronce cassée à la **salive** est simplement arrachée : peu de points, peu de guérison.
- Une ronce cassée à la **sève** est **purifiée** : une fleur pousse à sa place, deux petits esprits s'envolent et le monde guérit davantage. Le premier plan juste derrière en profite aussi (voir [la trace du joueur](02-direction-artistique.md)).
- **La colonne en fleurs** : quand **80 % des ronces d'une colonne** ont été purifiées à la sève (les bulbes comptent, la salive non), elle guérit d'un coup, de bas en haut. Les ronces restantes fleurissent, **les rochers s'effritent en mousse** (la colonne devient franchissable) et une **liane fleurie** pousse à sa place, avec deux bouquets qui encadrent le passage. Les racines restent. Bonus : **+250 points, +2 %**, et la colonne ne fait plus reculer la forêt. À partir de 50 %, la colonne **s'illumine en vert** pour signaler qu'elle est à portée. Le nombre de colonnes guéries s'affiche en fin de partie.
- Une ronce purifiée au **bas d'une colonne** (les six rangées du bas) fait refleurir la haie du sol en mousse : **on peut y rebondir sans se piquer**.

## Les chocs

- Un choc contre une cellule, le sol ou un moustique fait **perdre un niveau** : Gloub perd de son éclat, des feuilles tombent, et le tir faiblit (« Aïe ! »).
- Le choc dégage les ronces et les moustiques autour de Gloub, sauf les racines, et affiche « Beurk ! ».
- Gloub est ensuite **invulnérable 1,4 s** (il clignote).
- **Sans aucune force (niveau Gloub), le choc est fatal** : Gloub tombe et la partie est finie.

## Moustiques libérés

- Chaque moustique abattu remplit la jauge « Libérés » (8 cases, sous la jauge « Éveil »).
- Jauge pleine : un **moustique libéré** rejoint Gloub, annoncé par un bandeau. Guéri de la corruption, il vole en léger différé au-dessus ou en dessous de Gloub, sert de **petite mitraillette** : son aiguille est bien droite et, par son bout, il tire des rafales de 6 dards de nectar (un toutes les 0,075 s, puis une pause de 0,45 s), rapides et en ligne droite. Pendant une rafale, il se stabilise pour que les dards restent alignés. Chaque dard fait un point de dégât. Il abat aussi les moustiques qu'il touche.
- Deux alliés au plus en même temps. Avec deux alliés, une jauge pleine rapporte 50 points.
- À chaque choc, un allié prend peur et s'envole.

## Le voyage

Une partie a maintenant un but : guérir la forêt, puis vaincre la source de sa maladie.

1. **La forêt étouffée** : annoncée au départ (« Perce le brouillard, guéris-la à 100 % »), dans un brouillard de pollution qui se lève à 25 %. Elle est guérie quand la jauge « Monde guéri » atteint 100 %, soit environ 2 à 3 minutes de jeu.
   En chemin, la guérison se voit par **paliers** (25, 50, 75 %), annoncés par un bandeau et une vague de lumière, et marqués sur la jauge (voir la [direction artistique](02-direction-artistique.md)).
2. **Le calme** : plus aucune colonne n'apparaît. Un bandeau annonce « La forêt respire ! » (+500), le paysage refleurit et des aigrettes s'envolent pendant 3,5 s.
3. **Le Cœur de ronce** : le boss arrive par la droite et le défilement ralentit presque jusqu'à l'arrêt (voir ci-dessous).
4. **La victoire** : écran « La vallée refleurit ! », avec le score, le temps, les moustiques libérés et le record. On peut repartir pour un nouveau voyage.

**Si Gloub tombe** :

- **dans la forêt**, la partie recommence depuis le début ;
- **pendant le combat**, on reprend au début du combat (« Tape pour retenter le Cœur »), avec le score de l'arrivée du boss et au moins 2 niveaux de tir (Sève ×2).

## Le combat contre le Cœur de ronce

- **But** : crever ses **5 bulbes** lumineux. Le HUD affiche un rond par bulbe ; un bulbe crevé devient une petite fleur rose.
- **Dégâts sur un bulbe** :
  - une onde de sève retire sa pleine valeur (4) ;
  - la salive retire 4 fois moins ;
  - une méga-onde retire 80 à chaque bulbe qu'elle traverse (`MEGA_BULB_DMG`).
- **Points de vie** : 180 pour chacun des 4 bulbes autour, 300 pour le bulbe central.
- **Le reste du cœur** absorbe les ondes : il faut viser les bulbes.

| Phase | Déclenchement | Attaques | Aide |
| --- | --- | --- | --- |
| 1. La carapace | Arrivée du boss | Un rideau de ronces (3 cellules d'épaisseur) protège le cœur ; une racine fouette une bande de l'écran toutes les 2,4 à 3,2 s. | Le rideau contient 4 capsules à mûres, réparties sur toute sa hauteur. |
| 2. La colère | 2 bulbes crevés | Racines, graines toxiques (2 à la fois), nuées de 4 moustiques, toutes les 1,9 à 2,6 s. | Aucune mûre : il faut garder sa puissance. |
| 3. Le cœur à nu | 4 bulbes crevés | Le bouton central s'ouvre ; racines et graines (3 à la fois) en alternance, toutes les 1,5 à 2 s. Le cœur bat plus vite. | Une mûre toutes les 12 s. |

**Les attaques sont toujours annoncées** :

- **Racine** : une bande rouge clignote 1 s, avec des chevrons qui pointent vers Gloub. Puis la racine jaillit en 0,3 s comme le bras d'une pieuvre : elle dépasse un peu, revient, et une onde la parcourt de la base à la pointe. Elle reste 0,35 s, puis se retire en enroulant sa pointe. Son ondulation reste dans la bande annoncée. Elle est incassable et arrête les ondes.
- **Graines** : le cœur se gonfle d'une lueur verte pendant 0,7 s, puis les crache en cloche vers Gloub. Elles sont visées autour de lui, à environ 105 unités d'écart, et arrivent l'une après l'autre. Une onde suffit à en détruire une.
- **Nuée** : les mêmes chevrons rouges qu'en forêt.

**La victoire** : le cœur se fige et tremble 1,8 s. Puis il fleurit : un flash, une grande fleur s'ouvre sur la cuve, les lianes se dessèchent, une pluie de pétales tombe et la vallée revient à 100 % guérie (+2000). Pendant la floraison, plus rien ne peut blesser Gloub.

## Score et guérison

| Action | Points | Guérison du monde |
| --- | --- | --- |
| Ronce purifiée (sève) | 25 | +0,3 % |
| Ronce arrachée (salive) | 10 | +0,04 % |
| Rocher cassé | 15 | — |
| Bulbe crevé (sa mûre et son onde en plus) | 50 | +1,2 % |
| Mûre gobée | 5 | — |
| Moustique abattu | 10 | — |
| Paysage guéri | 500 | — |
| Bulbe du Cœur crevé | 300 | +4 % |
| Cœur de ronce vaincu | 2000 | jusqu'à 100 % |
| Colonne guérie (80 % de ses ronces purifiées) | 250 | +2 % |
| Colonne sortie sans être purifiée | — | jusqu'à −1 % |

Les taux sont réglés en haut du module des paysages (`HEAL_SAP`, `HEAL_SALIVA`, `HEAL_POD`, `POD_WAVE_R`, `PRESSURE`, `COLUMN_HEAL_AT`, `HEAL_COLUMN`, `COLUMN_SCORE`). Le record est gardé dans le navigateur.

### La pollution qui presse

- Quand une colonne sort de l'écran, elle est jugée : la jauge perd **1 % × la part de ses ronces restées en place** (une colonne intacte coûte 1 %, une colonne à moitié purifiée 0,5 %). Les rochers ne comptent pas.
- Le brouillard s'épaissit en même temps et le bord gauche pulse en violet.
- **On ne perd jamais un palier gagné** : la jauge ne descend pas sous 25, 50 ou 75 % une fois ce palier atteint.
- Il n'y a de pression que pendant le voyage (ni pendant le calme, ni pendant le combat).
- Réglage à affiner en jouant : l'idée est qu'esquiver sans tirer fasse reculer la forêt, sans rendre la partie punitive.

## Les murs

- Une colonne de ronces arrive toutes les 1,7 à 2,4 s. Chacune laisse un **passage**, plus ou moins haut, plus ou moins décalé.
- **Ronce** : se casse en 1 coup.
- **Rocher moussu** : demande 4 coups à la salive, 1 coup à la sève.
- **Bulbe** : une ronce gonflée de poison vert. Crevé, il libère une **mûre** qui file vers Gloub, guérit le monde de **1,2 %** (autant que 4 ronces) et lâche une **onde** qui purifie toutes les ronces dans un rayon de 78 px, fait refleurir le premier plan alentour et la haie du sol en dessous. Il y en a un peu plus d'un demi par colonne (6 % des touffes loin du passage). C'est le **choix risqué** du jeu : s'écarter du passage pour aller le percer, ou passer en sécurité.
- **Passage bouché** : parfois, un rideau de ronces fines ferme le passage. Il faut le percer.
- **Murs de racines** : des racines-mères brunes **incassables**. Seuls les bords du passage sont en ronces. Le passage y est toujours large (au moins 160 px de haut, plus de 200 px de couloir en pratique) et jamais bouché.
- Une **mûre gratuite** flotte au début de chaque partie, pour goûter tout de suite à la sève.

## Progression de la difficulté

La difficulté monte de façon continue sur les 15 000 premiers pixels parcourus, puis reste au maximum.

| Paramètre | Au début | Au maximum |
| --- | --- | --- |
| Vitesse de défilement | 220 px/s | 360 px/s |
| Demi-hauteur du passage | 64 à 94 px | 58 à 76 px |
| Épaisseur des murs | 1,6 à 2,4 cellules | 2,2 à 3 cellules |
| Écart entre colonnes | 1,7 à 2,4 s | 1,3 à 2 s |
| Passage bouché | 30 % | 70 % |
| Murs de racines (après 1 500 px) | 35 % | 75 % |
| Nuées de moustiques (après 800 px) | toutes les 4,5 à 7 s | toutes les 2 à 4,5 s |
| Moustiques par nuée | 3 à 4 | 3 à 7 |

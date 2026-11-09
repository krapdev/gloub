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

## Le ventre et les niveaux de puissance

- Chaque **mûre** gobée fait monter le tir **d'un niveau** (jusqu'au niveau 4).
- Chaque **choc** fait perdre **un niveau**.
- La puissance **ne baisse pas avec le temps** : on garde son niveau tant qu'on n'est pas touché. Seule la méga-onde est temporaire.
- **Chaque évolution est annoncée** par un grand bandeau au centre de l'écran : en vert quand on monte (« Sève ×2 ! », niveau 2), en doré pour la méga-onde, en rose quand on perd un niveau.

| Ventre | Niveau | Onde | Dégâts | Traverse |
| --- | --- | --- | --- | --- |
| vide | **Salive** | petite onde | 1 | 1 cellule |
| 1 mûre | **Sève** | onde de sève | 4 | 2 |
| 2 mûres | **Sève ×2** | deux ondes parallèles, plus rapides | 4 | 2 |
| 3 mûres | **Grande onde** | onde large | 4 | 3 |
| 4 mûres | **Méga-onde !** | grande onde + méga-onde | 4 | 3 |

### La méga-onde

- Au niveau maximum, une **concentration** se forme sur Gloub : des étincelles convergent et un anneau se resserre. Au bout de 1,1 s, une **onde géante** part tout droit.
- Elle balaie une bande de 170 px de haut sur toute la largeur de l'écran. Elle purifie toutes les ronces, rochers et bulbes qu'elle croise, et tue les moustiques.
- Elle **traverse les racines sans les casser** : on doit toujours passer par l'ouverture.
- Un flash blanc accompagne le tir.
- **Elle est temporaire** : elle dure 8 s (une jauge dorée sous le ventre montre le temps restant et clignote à la fin), puis Gloub redescend à la grande onde. Une mûre gobée pendant la méga-onde la recharge à 8 s.
- Elle se répète toutes les 1,1 s pendant ce temps.

### Salive et sève : arracher ou purifier

- Une ronce cassée à la **salive** est simplement arrachée : peu de points, peu de guérison.
- Une ronce cassée à la **sève** est **purifiée** : une fleur pousse à sa place, deux petits esprits s'envolent et le monde guérit davantage.

## Les chocs

- Un choc contre une cellule, le sol ou un moustique fait **recracher une mûre** : le tir perd un niveau.
- Le choc dégage les ronces et les moustiques autour de Gloub, sauf les racines, et affiche « Beurk ! ».
- Gloub est ensuite **invulnérable 1,4 s** (il clignote).
- **Le ventre vide, le choc est fatal** : Gloub tombe et la partie est finie.

## Moustiques libérés

- Chaque moustique abattu remplit la jauge « Libérés » (8 cases, sous le ventre).
- Jauge pleine : un **moustique libéré** rejoint Gloub, annoncé par un bandeau. Guéri de la corruption, il vole en léger différé au-dessus ou en dessous de Gloub, sert de **petite mitraillette** : son aiguille est bien droite et, par son bout, il tire des rafales de 6 dards de nectar (un toutes les 0,075 s, puis une pause de 0,45 s), rapides et en ligne droite. Pendant une rafale, il se stabilise pour que les dards restent alignés. Chaque dard fait un point de dégât. Il abat aussi les moustiques qu'il touche.
- Deux alliés au plus en même temps. Avec deux alliés, une jauge pleine rapporte 50 points.
- À chaque choc, un allié prend peur et s'envole.

## Le voyage

Une partie a maintenant un but : guérir la forêt, puis vaincre la source de sa maladie.

1. **La forêt étouffée** : annoncée au départ (« Guéris-la à 100 % »). Elle est guérie quand la jauge « Monde guéri » atteint 100 %, soit environ 2 à 3 minutes de jeu.
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
  - une méga-onde retire 45.
- **Points de vie** : 180 pour chacun des 4 bulbes autour, 300 pour le bulbe central.
- **Le reste du cœur** absorbe les ondes : il faut viser les bulbes.

| Phase | Déclenchement | Attaques | Aide |
| --- | --- | --- | --- |
| 1. La carapace | Arrivée du boss | Un rideau de ronces (3 cellules d'épaisseur) protège le cœur ; une racine fouette une bande de l'écran toutes les 2,4 à 3,2 s. | Le rideau contient des bulbes à mûres. |
| 2. La colère | 2 bulbes crevés | Racines, graines toxiques (2 à la fois), nuées de 4 moustiques, toutes les 1,9 à 2,6 s. | Une mûre lâchée toutes les 9 s. |
| 3. Le cœur à nu | 4 bulbes crevés | Le bouton central s'ouvre ; racines et graines (3 à la fois) en alternance, toutes les 1,5 à 2 s. Le cœur bat plus vite. | Une mûre toutes les 5 s, de quoi atteindre la méga-onde. |

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
| Bulbe crevé | 5 | — |
| Mûre gobée | 5 | — |
| Moustique abattu | 10 | — |
| Paysage guéri | 500 | — |
| Bulbe du Cœur crevé | 300 | +4 % |
| Cœur de ronce vaincu | 2000 | jusqu'à 100 % |

Les deux taux de guérison sont réglés en haut du module des paysages (`HEAL_SAP`, `HEAL_SALIVA`). Le record est gardé dans le navigateur.

## Les murs

- Une colonne de ronces arrive toutes les 1,7 à 2,4 s. Chacune laisse un **passage**, plus ou moins haut, plus ou moins décalé.
- **Ronce** : se casse en 1 coup.
- **Rocher moussu** : demande 4 coups à la salive, 1 coup à la sève.
- **Bulbe** : une ronce gonflée et lumineuse. Crevé, il libère une **mûre** qui file vers Gloub. Il y en a environ un demi par colonne, loin du passage. C'est le **choix risqué** du jeu : s'écarter du passage pour aller percer un bulbe, ou passer en sécurité.
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

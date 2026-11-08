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

- Chaque **mûre** gobée remplit le ventre d'un quart (25 points sur 100).
- Le niveau de tir dépend du nombre de quarts pleins.
- Le tir **consomme** le ventre : la puissance redescend toute seule, ce qui empêche de tout balayer indéfiniment.

| Ventre | Niveau | Onde | Dégâts | Traverse | Durée d'une mûre |
| --- | --- | --- | --- | --- | --- |
| vide | **Salive** | petite onde | 1 | 1 cellule | — |
| 1 mûre | **Sève** | onde de sève | 4 | 2 | ≈ 5,4 s |
| 2 mûres | **Sève ×2** | deux ondes parallèles, plus rapides | 4 | 2 | ≈ 4,9 s |
| 3 mûres | **Grande onde** | onde large | 4 | 3 | ≈ 4,2 s |
| 4 mûres | **Méga-onde !** | grande onde + méga-onde | 4 | 3 | ≈ 2,7 s |

Un ventre plein dure donc environ 17 secondes de tir.

### La méga-onde

- Au niveau maximum, une **concentration** se forme sur Gloub : des étincelles convergent et un anneau se resserre. Au bout de 1,1 s, une **onde géante** part tout droit.
- Elle balaie une bande de 170 px de haut sur toute la largeur de l'écran. Elle purifie toutes les ronces, rochers et bulbes qu'elle croise, et tue les moustiques.
- Elle **traverse les racines sans les casser** : on doit toujours passer par l'ouverture.
- Un flash blanc accompagne le tir.
- On peut en tirer 2 ou 3 avant que le ventre redescende au niveau inférieur.

### Salive et sève : arracher ou purifier

- Une ronce cassée à la **salive** est simplement arrachée : peu de points, peu de guérison.
- Une ronce cassée à la **sève** est **purifiée** : une fleur pousse à sa place, deux petits esprits s'envolent et le monde guérit davantage.

## Les chocs

- Un choc contre une cellule, le sol ou un moustique fait **recracher une mûre**. Le ventre perd un quart et le niveau baisse d'un cran.
- Le choc dégage les ronces et les moustiques autour de Gloub, sauf les racines, et affiche « Beurk ! ».
- Gloub est ensuite **invulnérable 1,4 s** (il clignote).
- **Le ventre vide, le choc est fatal** : Gloub tombe et la partie est finie.

## Score et guérison

| Action | Points | Guérison du monde |
| --- | --- | --- |
| Ronce purifiée (sève) | 25 | +3,5 % |
| Ronce arrachée (salive) | 10 | +0,4 % |
| Rocher cassé | 15 | — |
| Bulbe crevé | 5 | — |
| Mûre gobée | 5 | — |
| Moustique abattu | 10 | — |

Le record est gardé dans le navigateur.

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

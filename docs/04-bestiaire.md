# Bestiaire

Rappel de la règle de l'univers : **les fruits aident, les insectes attaquent, les ronces et les racines sont le terrain.**

## En jeu

### Gloub (le héros)

Un esprit de la forêt chauve-souris. Il vole en battant des ailes, émet des ondes et gobe les mûres. Voir la [direction artistique](02-direction-artistique.md) et le [gameplay](03-gameplay.md).

### Mûre (alliée : bonus de puissance)

- **D'où elle vient** : des **bulbes** lumineux nichés dans les ronces. Crever un bulbe libère une mûre.
- **Effet** : remplit un quart du ventre et fait monter le tir d'un niveau.
- **Comportement** : quand Gloub passe près d'elle, elle est aspirée vers sa bouche en tournoyant, et il la gobe.
- **Pourquoi une mûre** : une chauve-souris mange des fruits et des insectes. Les fruits sont donc du côté des bonus. La mûre colle aux ronces : c'est le fruit qu'elles portent, débarrassé de leur maladie.

### Moustique de suie (ennemi)

- **Nuées** de 3 à 7 moustiques, annoncées par des **chevrons rouges** sur le bord droit.
- Ils foncent vers la gauche en zigzag et **visent lentement Gloub**.
- **Une onde suffit** à en abattre un. Il est alors purifié : un petit moucheron blanc s'envole.
- **Toucher un moustique** fait perdre une mûre.
- **Design** : abdomen vert toxique, trompe-aiguille qui goutte, yeux rouges, ailes déchirées, gouttelettes toxiques dans leur sillage.

### Les obstacles

| Obstacle | Rôle |
| --- | --- |
| Ronce | Se casse en un coup ; purifiée par la sève, elle laisse une fleur. |
| Rocher moussu | Solide (4 coups à la salive). |
| Bulbe | Ronce gonflée qui libère une mûre. |
| Racine-mère | Incassable : il faut passer par l'ouverture. |
| Ronces du sol | Les toucher fait perdre une mûre ; Gloub rebondit. |

## Désactivés (le code existe, prêt à revenir)

| Élément | Description | Pourquoi il est retiré |
| --- | --- | --- |
| **Plante carnivore** (piège) | Deux mâchoires plantées dans les bords du passage. Elle frémit (avertissement rouge), claque, reste fermée, puis se rouvre. Il faut passer au bon moment. | Mis de côté pour se concentrer sur le contrôle. |
| **Épines rétractiles** (piège) | Trois grandes épines jaillissent d'un bord du passage après un avertissement. Le bord alterne à chaque cycle : il faut lire l'avertissement et passer de l'autre côté. | Mis de côté pour se concentrer sur le contrôle. |
| **Papillon de suie** | Ancienne recharge : un papillon pollué qui volait de façon irrégulière. | Trop de papillons, pas assez « pollution » ; et un insecte ne doit pas être un bonus. Remplacé par la mûre. |
| **Fruit doré** | Bonus rare qui valait deux mûres. | Supprimé pour garder un seul bonus lisible. |
| **Mûres nichées dans les colonnes** | Mûres visibles à certains endroits des murs, à percer au bon endroit. | Les bulbes suffisent et sont plus lisibles. |

Pour réactiver les pièges : dans `index.html`, remplacer `ENABLED_SPECIALS = ['root']` par `ENABLED_SPECIALS = ['root', 'jaw', 'thorn']`.

## Pistes proposées, non commencées

Ces idées ont été évoquées pendant la conception. Elles restent à concevoir et ne sont pas lancées.

| Idée | Type | Idée de départ |
| --- | --- | --- |
| **Corbeaux de goudron** | Ennemi | Des oiseaux englués de pollution, un ennemi volant plus gros que les moustiques. |
| **Esprit compagnon** | Allié | Un petit esprit de la forêt qui accompagne Gloub et l'aide. Il faut rester dans la règle « les fruits aident, les insectes attaquent ». |
| **Immeuble qui s'effondre** | Événement de décor | Une menace qui vient de l'arrière-plan : une tour en ruine bascule vers le premier plan et barre le chemin. |
| **Retour des pièges** | Obstacles | Réactiver la plante carnivore et les épines dans certains murs, une fois le contrôle bien calé. |

Pour l'équilibre, les ennemis doivent donner une raison de **perdre de la puissance** sans rendre le jeu injuste. Chaque menace doit être **annoncée** (chevrons, frémissement, lueur rouge) avant de frapper.

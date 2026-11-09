# Étapes et boss : remonter jusqu'à la source

> Document d'étude. **Déjà dans le jeu** : le système de paysages (avec la forêt seule) et le Cœur de ronce, décrits dans le [gameplay](03-gameplay.md). **À venir** : la ville en ruine, la décharge et l'usine.

## L'idée

Aujourd'hui, la partie est infinie et la jauge « Monde guéri » n'a pas de but. Avec cette proposition, Gloub **remonte la ronce jusqu'à ce qui la rend malade**.

- Il traverse trois paysages de plus en plus pollués.
- Chaque paysage est **guéri** quand la jauge atteint 100 %.
- Au bout du voyage, il affronte la source : **le Cœur de ronce**, enraciné dans une cuve de déchets.

Le joueur ressent l'histoire sans texte : plus il avance, plus la trace humaine est forte ; plus il purifie, plus elle s'efface.

## Le déroulé d'une partie

| Étape | Paysage | Ce qui est nouveau | Durée visée |
| --- | --- | --- | --- |
| 1 | **La forêt étouffée** | Le jeu actuel : ronces, rochers, bulbes, racines, moustiques. | 2 à 3 min |
| 2 | **La ville en ruine** | Dalles de béton dans les colonnes, sacs plastique, immeuble qui s'effondre, corbeaux de goudron. | 3 min |
| 3 | **La décharge et l'usine** | Fûts toxiques qui explosent, champignons à spores, rivière de goudron au sol. | 3 min |
| Fin | **Le Cœur de ronce** | Le boss, dans une arène fixe. | 2 à 3 min |

**Passage d'une étape à l'autre** :

1. Quand « Monde guéri » atteint 100 %, plus aucune colonne n'apparaît.
2. Un bandeau annonce « La forêt respire ! ».
3. Le paysage finit de refleurir pendant 3 secondes de calme.
4. Le décor de l'étape suivante arrive par la droite, encore malade, et la jauge repart de 0 %.

**On garde d'une étape à l'autre** : le niveau de tir, les moustiques libérés et le score.

**Si Gloub tombe** : on recommence au début de l'étape en cours (pas de toute la partie). L'étape la plus loin atteinte est mémorisée dans le navigateur, comme le record.

**Rythme** : aujourd'hui, une ronce purifiée à la sève rapporte 3,5 % de guérison, donc environ 30 ronces pour finir une étape. On peut baisser ce gain dans les étapes suivantes (2,5 %, puis 2 %) pour les allonger.

## Étape 2 : la ville en ruine

**Décor** :

- tours effondrées percées par les ronces ;
- voitures envahies, lampadaires tordus, panneaux rouillés ;
- un ciel plus gris.

En guérissant, les voitures deviennent des jardinières et les tours se couvrent de lierre en fleurs.

**Nouveautés** :

| Élément | Rôle | Ce qui le rend lisible |
| --- | --- | --- |
| **Dalle de béton** | Cellule solide dans les colonnes (comme le rocher, mais grise et anguleuse). | Fissures à l'encre ; elle se fend avant de casser. |
| **Sac plastique** | Accroché aux ronces, il arrête la salive ; il faut de la sève pour le percer. | Blanc translucide, il ondule au vent. |
| **Immeuble qui s'effondre** | Événement : une tour de l'arrière-plan bascule et barre l'écran en diagonale, avec une brèche à trouver. | Poussière et chevrons rouges 2 s avant, comme pour les nuées. |
| **Corbeau de goudron** | Ennemi plus gros que les moustiques : il fond en piqué sur Gloub et encaisse 3 ondes. | Croassement visuel (onde noire) avant le piqué. |

## Étape 3 : la décharge et l'usine

**Décor** :

- cheminées, tuyaux qui fuient, montagnes de déchets ;
- ciel de smog orangé ;
- au sol, la haie de ronces est remplacée par une **rivière de goudron** qui bouillonne.

En guérissant, la rivière s'éclaircit en eau claire, les fûts rouillés se couvrent de mousse et les cheminées fument blanc.

**Nouveautés** :

| Élément | Rôle | Ce qui le rend lisible |
| --- | --- | --- |
| **Fût toxique** | Coincé dans une colonne. Un tir le fait exploser et dégage toute la colonne, mais l'explosion blesse Gloub s'il est trop près. C'est un choix de risque contre récompense. | Symbole de danger peint ; il gonfle et siffle avant d'éclater. |
| **Champignon à spores** | Il pousse sur les ronces et lâche un nuage toxique qui reste en l'air quelques secondes. | Le chapeau se gonfle, puis le nuage vert apparaît. |
| **Rivière de goudron** | Comme la haie du sol : la toucher fait perdre un niveau. | Bulles qui éclatent. |

## Le boss : le Cœur de ronce

**Ce que c'est** : la source de la maladie. Une énorme ronce s'est enroulée autour d'une cuve de déchets éventrée et s'en nourrit. Elle bat comme un cœur, et chaque battement fait pulser les ronces de tout l'écran.

**L'arène** :

- le défilement ralentit puis s'arrête ;
- le Cœur occupe le tiers droit de l'écran ;
- Gloub vole librement dans les deux tiers gauches ;
- le sol et le haut de l'écran restent dangereux comme d'habitude.

**Points faibles** : **5 bulbes** lumineux sur le Cœur. Il faut tous les crever.

- Ils ont une jauge chacun, visible au-dessus d'eux.
- La salive les égratigne à peine ; la sève et la méga-onde comptent vraiment. Il faut donc garder sa puissance pendant le combat.

**Trois phases**, chaque attaque étant annoncée avant de frapper (règle du bestiaire) :

| Phase | Déclenchement | Attaques | Aide pour le joueur |
| --- | --- | --- | --- |
| 1. **La carapace** | Début du combat | Un rideau de ronces protège les bulbes, il faut le percer. Des racines balaient une bande de l'écran (lueur rouge 1 s avant). | Le rideau contient des bulbes à mûres. |
| 2. **La colère** | 2 bulbes crevés | Le Cœur crache des graines toxiques qui retombent en cloche, et appelle des nuées de moustiques. | Chaque nuée remplit vite la jauge « Libérés » : les alliés arrivent au bon moment. |
| 3. **Le cœur à nu** | 4 bulbes crevés | La cuve se fend, le dernier bulbe est exposé mais le Cœur bat plus vite : racines et graines en alternance. | Il lâche une mûre à chaque battement manqué : on peut atteindre la méga-onde. |

**La victoire** :

1. Le dernier bulbe crevé, le Cœur se fige, puis **fleurit** : une énorme fleur s'ouvre sur la cuve.
2. Des pétales tombent sur tout l'écran et le décor passe d'un coup à 100 % guéri.
3. Les moustiques libérés tournent autour de Gloub.
4. Écran de fin, « La vallée refleurit » : score, temps, moustiques libérés, record.
5. On peut ensuite repartir pour un **second voyage**, plus rapide et plus dense, ou continuer en mode infini.

## Ce que ça demande techniquement

- **Une table des étapes** : palettes malade et guérie, types de décor et d'objets au sol, poids des cellules (ronce, rocher, béton, fût…), pièges actifs, gain de guérison par ronce. Le code actuel a déjà la plupart des réglages ; il faut les regrouper par étape.
- **Les transitions** : arrêt des colonnes, bandeau, fondu de palette, nouveau décor.
- **Le boss** : un nouvel état de jeu (`boss`), avec ses phases, ses bulbes, ses attaques et son animation de floraison.
- **Les nouveaux éléments**, dessinés dans la même direction artistique : gouache et encre, version malade et version guérie de chaque objet de décor.

## Ordre de réalisation proposé

1. **Le système d'étapes** avec la seule forêt : but à 100 %, transition et écran de fin. On peut jouer une partie complète dès cette étape.
2. **Le Cœur de ronce** à la fin de la forêt, pour tester le combat tôt. C'est le moment le plus fort de l'histoire.
3. **La ville en ruine**, avec ses nouveaux éléments, insérée entre la forêt et le boss.
4. **La décharge et l'usine**.
5. **L'équilibrage** de l'ensemble et le second voyage.

## Questions à trancher

- **Mort pendant le boss** : tranché, on reprend au début du combat, avec au moins 2 niveaux de tir.
- **Le mode infini actuel** : le garder comme mode à part, ou seulement après la victoire ?
- **Durée totale visée** : environ 12 minutes comme proposé, ou plus court pour jouer sur téléphone ?

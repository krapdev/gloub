# Journal des décisions

Les choix de conception, dans l'ordre où ils ont été pris.

## 1. Le prototype

- **Point de départ** : un shooter à défilement horizontal avec parallaxe. Un tap fait monter le héros, sinon il tombe, à la Flappy Bird. Son tir casse des **murs de briques** pour ouvrir un passage.
- **Tir infini** : le tir n'est plus limité par des munitions.

## 2. L'histoire

- **Pistes explorées** :
  - une nuée d'ennemis ;
  - une créature qui crache, façon *Toki* ;
  - un escadron façon *Goldorak*, avec des clins d'œil à *R-Type*.
- **Retenu : la créature cracheuse**, qu'on développe.
- **Abandonné : l'idée du maçon et des briques.**
- **Nouveau thème** : une planète envahie par des **lierres et des ronces malades**, à cause de la pollution humaine. Une petite créature, **Gloub**, s'y fraie un chemin.

## 3. La direction artistique

- **Vue** : un sol en perspective façon *Axelay* (proche de *Super Aleste*).
- **Esprit Ghibli.**
- **Pas de repousse des murs** : c'était trop dur.
- **On sort des briques et des carrés** : les murs et les ronces prennent du relief, avec des formes organiques.
- **Le fond en parallaxe gagne du volume**, peint comme les murs.

## 4. Le héros et la puissance

- **Bonus** : il dure plus longtemps.
- **Niveaux de puissance** stockés dans le ventre de Gloub.
- **Le héros devient un esprit de la forêt chauve-souris**, dans le même esprit graphique que les murs.
- **Design de Gloub**, retravaillé en plusieurs passes :
  - rendre cohérentes les positions des yeux, des oreilles et des ailes ;
  - des ailes plus courtes mais plus larges, puis plus hautes, vraiment « chauve-souris » ;
  - des griffes plus simples ;
  - un esprit **kawaii**.
- **Les ailes battent plus vite** quand on maintient.
- **Plusieurs bonus améliorent le tir** : plus gros, plus rapide, autre forme.
- **Mécanique de « trop plein »** (un ventre trop lourd qui gêne) : discutée, puis **supprimée**, car elle gâchait la jouabilité.
- **Priorité au tap**, qui doit permettre d'esquiver finement.

## 5. Les menaces et l'équilibre

- **Plutôt que des tirs ennemis, des menaces dans les colonnes** : pièges et murs incassables.
  - Résultat : les racines incassables, la plante carnivore et les épines.
- **Menace venue de l'arrière-plan** (un immeuble qui s'effondre vers le premier plan) : jugée sympa, gardée en piste.
- **L'évolution du tir était trop puissante**, surtout le niveau 3 en éventail.
  - **Tirs droits uniquement** : plus exigeant.
  - Au niveau maximum, une **déflagration droite** qui balaie l'écran.
- **Monstres des colonnes retirés pour l'instant** (plante carnivore et épines), et Gloub grossi.
- **Écarts entre racines revus** : certains passages étaient impossibles. Le passage fait désormais au moins 160 px et n'est jamais bouché près des racines.
- **Gloub retombe plus vite.**

## 6. Les ondes et la nourriture

- **Les projectiles deviennent des ondes** : une chauve-souris émet des ondes, rendues comme des arcs « magnétiques ».
- **Que mange une chauve-souris ?** Des papillons et des fruits.
  - Premiers bonus : des papillons, puis une animation de **gobage**, avec une bouche plus grande.
- **Évaluation de la faune**, alliés et ennemis : trop de papillons, pas assez « pollution ».
- **Règle posée** : **les fruits pour les améliorations de Gloub, les insectes comme ennemis.**
  - Le papillon est remplacé par une **mûre**. Une grosse framboise a été envisagée, la mûre est restée.
  - Les **moustiques** deviennent plus effrayants et toxiques.
- **Design de la mûre**, en plusieurs passes :
  - peinte à l'encre, façon Ghibli, comme les colonnes ;
  - elle ne doit **pas grossir** (seul le halo bouge) ;
  - plus ronde et plus grosse, puis un peu moins ronde et **moins présente**.
- **Fruit doré supprimé.**
- **La déflagration n'impressionnait pas assez** : elle devient une **méga-onde**, avec une animation de concentration sur Gloub.

## 7. Les sensations

- **Correction du décor qui « sautait sur place »** : il ne faut pas arrondir les positions au pixel.
- **Montée plus rapide**, puis **accélération quand on maintient**, équilibrée avec le petit saut du tap.
- **Écran d'accueil et instructions** refaits dans la direction artistique : papier, encre, polices rondes, icônes peintes.
- **Mûres cachées dans les colonnes**, à aller percer au bon endroit (le risque contre la récompense) : essayées, puis **remplacées par les bulbes**, plus lisibles. Quelques bulbes ajoutés.

## 8. La puissance par paliers

- **Chaque mûre fait monter d'un niveau, chaque choc en fait perdre un.**
- **Plus de baisse automatique avec le temps** : la puissance se garde tant qu'on évite les chocs.
- **La méga-onde reste temporaire** (8 s, rechargée par une mûre), pour ne pas rendre le jeu trop facile.
- **Chaque évolution est annoncée** par un bandeau au centre de l'écran.

## 9. Les moustiques libérés

- **Une jauge se remplit en abattant des moustiques** ; pleine, un moustique libéré de la corruption rejoint Gloub et l'aide à tirer (comme un module de *R-Type*).

## 10. Téléphone : taille d'écran et fluidité

- **Le jeu était zoomé et ramait sur téléphone.**
- **Le monde est maintenant calculé dans une taille logique fixe**, mise à l'échelle de l'écran.
- **Rendu optimisé** : caches, plus de flou calculé, et une finesse de rendu qui s'adapte à la fluidité mesurée.

## 11. Le voyage et le Cœur de ronce

- **Une partie a un but** : guérir la forêt à 100 %, puis vaincre le Cœur de ronce, la source de la maladie.
- **La guérison est ralentie** (+0,3 % par ronce purifiée au lieu de +3,5 %) pour que la forêt dure 2 à 3 minutes.
- **Le boss** : 5 bulbes à crever, 3 phases, des attaques toujours annoncées, des mûres pour garder sa puissance. Il fleurit à la victoire.
- **Si Gloub tombe pendant le combat**, on reprend au début du combat.
- **Prochaine étape prévue** : la ville en ruine, puis la décharge et l'usine ([étapes et boss](07-etapes-et-boss.md)).

## 12. Un décor cohérent avec les ronces

- **Le décor malade prend le langage des colonnes** : les arbres, buissons et lierres violets deviennent des ronces, hérissées d'épines et de tiges épineuses, avec des bulbes toxiques vert acide ; les flaques d'huile deviennent de la boue toxique.
- **Règle des couleurs** : violet pour la ronce, vert acide pour le toxique, vert feuille et fleurs pour la guérison.

## 13. Un fond plus beau, une libération lisible

- **Ciel à trois tons**, smog et cheminées d'usine qui fument dans le monde malade, oiseaux dans le monde guéri.
- **La guérison se voit par paliers** (25, 50, 75, 100 %), du ciel vers le premier plan, chacun annoncé par un bandeau et une vague de lumière.

## 14. La pousse remplace le ventre

- **Boss trop facile** : moins de mûres pendant le combat (4 capsules dans le rideau, aucune en phase 2, une toutes les 12 s en phase 3), méga-onde moins forte contre les bulbes.
- **Le ventre est abandonné** : la puissance se lit sur la **pousse** que Gloub porte sur la tête (bourgeon, feuille, rameau, fleur, floraison). Les mûres la nourrissent, les chocs font tomber ses feuilles. Écartés : les lucioles et les graines.

## 15. Gloub s'éveille

- **La pousse sur la tête ne convainquait pas.** Trois planches de design comparées : une transformation de Gloub, une plante-trompette (liseron) tenue dans ses griffes, et un mélange des deux.
- **Retenu : la transformation.** Gloub garde sa silhouette mais s'éveille par niveaux : marque au front, ailes nervurées et collerette de feuilles, couronne de fleurs, puis forme d'esprit vert d'eau lumineuse pendant la méga-onde.

## 16. Fluidité

- **Deuxième passe de performances**, centrée sur la régularité : colonnes de ronces peintes une fois par colonne, cadence calée sur l'écran, plus d'à-coups aux paliers de guérison ni au changement de finesse, moins de tracés par image. Détails dans la [technique](05-technique.md).

## 17. La diffusion

- **Copie dans le dossier** `Documents/GitHub/gloub`.
- **Application installable (PWA)** : jouable hors ligne, avec une icône dessinée par le jeu et des polices embarquées. L'écran titre est adapté au téléphone en paysage.
- **Documents d'étude** rangés dans `docs/`.

## 18. La pollution met la pression

- **Constat** : pendant 2 à 3 minutes, le premier plan ne changeait qu'à 100 %. La guérison se voyait au loin, mais pas là où joue Gloub, et rien ne poussait à purifier plutôt qu'à esquiver.
- **Départ dans un brouillard de pollution**, épais sur le décor et les bords, léger dans le couloir de jeu, avec une bulle d'air clair autour de Gloub. Il se lève au palier des 25 %.
- **Le premier plan garde la trace du joueur** : buissons, objets du sol et herbes refleurissent là où il purifie ; la haie du sol devient de la mousse (sans danger) sous le pied des colonnes purifiées.
- **Les bulbes deviennent la grosse cible** : +1,2 % de guérison, une onde qui purifie les ronces voisines, 50 points ; un peu plus nombreux (6 % au lieu de 4,5 %).
- **Pression** : une colonne qui sort sans être purifiée fait perdre jusqu'à 1 %, sans jamais repasser sous un palier gagné.
- **Premier plan plus présent** (retour de jeu) : guérison locale deux fois plus généreuse, gerbe de pétales quand un élément bascule, buissons couronnés de fleurs par-dessus le brouillard, une fleur sur chaque brin d'herbe, mousse sous les six rangées du bas.
- **Méga-onde en un seul tir** : la forme d'esprit ne dure plus 8 s (7 ondes géantes) ; Gloub concentre la sève, libère une seule onde géante, deux fois plus haute (la moitié de l'écran), puis redescend à « Couronné ». Contre le Cœur, ce tir retire 80 PV par bulbe (au lieu de 25 par onde).
- **À régler en jouant** : la durée d'un paysage (visée : toujours 2 à 3 minutes), la force de la pression et le rebond sans danger sur la mousse.

## 19. Le son : une musique qui pousse avec le monde

- **Constat** : le jeu était muet.
- **Tout est synthétisé** (Web Audio, aucun fichier) : le jeu reste un seul fichier, et la musique suit exactement l'état du monde.
- **La musique raconte la guérison** : sous le smog, une nappe étouffée, le souffle de la pollution et le cœur de la forêt ; un instrument de plus à chaque palier (basse, cordes, flûte) ; le majeur et les carillons quand le paysage est guéri. Le filtre s'ouvre à mesure que le brouillard se lève.
- **Le joueur joue la mélodie** : chaque ronce purifiée sonne une note de kalimba, calée sur la mesure, dans la gamme du moment.
- **Bouton pour couper le son** en bas à gauche (et touche M), choix mémorisé.
- Détails dans [Son](08-son.md).

## 20. La colonne en fleurs

- **Constat** : la pression punit l'esquive, mais rien ne récompensait une colonne bien nettoyée.
- **Une colonne purifiée à 80 % (à la sève) guérit d'un coup** : cascade de fleurs du sol vers le haut, rochers qui s'effritent (passage libre), liane fleurie qui encadre le passage, +250 points, +2 %, glissando de harpe.
- **Signal** : à partir de 50 %, la colonne s'illumine en vert.
- **À régler en jouant** : le seuil de 80 % (assez exigeant pour rester un exploit, assez accessible pour arriver plusieurs fois par partie).

## Questions ouvertes

- Réintroduire des **ennemis plus variés** : corbeaux de goudron, ou retour des pièges ?
- Des **événements de décor**, comme un immeuble qui s'effondre ?
- Les **paysages suivants** (ville en ruine, décharge et usine) et un **second voyage** plus difficile après la victoire.

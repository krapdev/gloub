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

## 12. La diffusion

- **Copie dans le dossier** `Documents/GitHub/gloub`.
- **Application installable (PWA)** : jouable hors ligne, avec une icône dessinée par le jeu et des polices embarquées. L'écran titre est adapté au téléphone en paysage.
- **Documents d'étude** rangés dans `docs/`.

## Questions ouvertes

- Réintroduire des **ennemis plus variés** : corbeaux de goudron, ou retour des pièges ?
- Des **événements de décor**, comme un immeuble qui s'effondre ?
- Les **paysages suivants** (ville en ruine, décharge et usine) et un **second voyage** plus difficile après la victoire.
- Du **son** : le jeu est muet pour l'instant.

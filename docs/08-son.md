# Son : une musique qui pousse avec le monde

Le jeu n'a aucun fichier audio : tout est **synthétisé en direct avec Web Audio** (module `SND` dans `index.html`). Le jeu reste un seul fichier léger, et la musique peut suivre exactement ce qui se passe.

## L'idée

- **La musique raconte la guérison, comme les couleurs.** Sous le smog, on entend une nappe étouffée, le souffle sourd de la pollution et le cœur de la forêt qui bat lentement. À chaque palier, un instrument s'ajoute. Le paysage guéri sonne en majeur.
- **C'est le joueur qui joue la mélodie.** Chaque ronce purifiée à la sève joue une note de kalimba, calée sur la mesure et prise dans la gamme du moment. Des purifications en chaîne montent puis redescendent en arpège.
- **Le son s'ouvre avec l'air.** Toute la musique passe par un filtre qui suit le brouillard : presque fermé au départ (700 Hz), grand ouvert quand l'air est pur (12 kHz). On l'entend littéralement se dégager.

## La musique

- **Tempo** : 76 battements par minute, en ré, quatre mesures qui tournent.
- **Harmonie** :

| Moment | Mode | Accords |
| --- | --- | --- |
| Voyage | ré mineur | Rém – Si♭ – Fa – Do |
| Paysage guéri, victoire | ré majeur | Ré – Sim – Sol – La |
| Cœur de ronce | ré mineur tendu | Rém – Si♭ – Solm – La |

- **Les instruments, selon le monde** :

| Quand | Ce qu'on entend |
| --- | --- |
| Toujours | Une nappe douce (triangle et dents de scie filtrées). |
| Voyage, sous le smog | Le **cœur de la forêt** (boum-boum, deux fois par mesure) et le **souffle de la pollution** (bruit brun filtré, qui ondule comme du vent), d'autant plus fort que le brouillard est épais. |
| 25 % « Le smog se dissipe » | La **basse** et un **shaker** léger. |
| 50 % « Le ciel revient » | Les **cordes**, avec vibrato. Des **oiseaux** chantent de temps en temps. |
| 75 % « La ville reverdit » | La **flûte**, qui improvise une mélodie dans la gamme. |
| Paysage guéri, victoire | Passage en **majeur**, avec des **carillons** en arpège. |
| Cœur de ronce | Plus de cœur de la forêt : c'est le **battement du Cœur** qu'on entend, à droite, calé sur son animation. À partir de la phase 2, une basse obstinée en croches. |
| Gloub tombé | Il ne reste que la nappe, étouffée. |

Les instruments entrent et sortent en fondu (environ 2 s).

## Les bruitages

Doux et courts, placés à gauche ou à droite selon l'endroit où ils se produisent (Gloub est à gauche, le Cœur et les nuées arrivent par la droite).

| Événement | Son |
| --- | --- |
| Ronce purifiée | Une note de kalimba, posée sur la prochaine triple croche libre (une note par case, au plus 4 cases d'avance : une méga-onde donne une cascade, pas un vacarme). |
| Colonne guérie | Un glissando de harpe sur toute la gamme, puis un accord qui tinte (les notes de la cascade de fleurs sont remplacées par ce glissando). |
| Ronce arrachée à la salive | Un petit craquement. |
| Rocher touché / brisé | Un « toc » / un éboulement sourd. |
| Bulbe toxique crevé | Un « bloop », une éclaboussure et trois clochettes. |
| Coup d'aile | Un souffle. |
| Onde | Un « ping » d'écholocation, très discret, plus grave quand l'onde grandit. |
| Mûre gobée | « Gloups », puis un petit arpège montant si Gloub s'éveille d'un niveau (plus long pour la forme d'esprit). |
| Méga-onde | Un souffle qui monte pendant la concentration, puis un grand coup grave et un accord brillant. |
| Choc | Un choc sourd, une plainte qui descend ; la musique se creuse un instant. |
| Chute | Cinq notes qui retombent. |
| Moustique abattu | Un petit « pop ». Moustique libéré : quatre clochettes qui montent. |
| Nuée annoncée | Un bourdonnement, à droite. |
| La ronce gagne (colonne non purifiée) | Un grondement sourd, à gauche. |
| Palier | Un souffle qui monte, puis une cascade de clochettes. |
| Paysage guéri | Une grande montée en majeur. |
| Cœur de ronce | Grondement à son arrivée ; la racine grince pendant l'alerte puis claque ; glouglous puis crachats pour les graines ; un gong quand un bulbe crève ; un accord dissonant à chaque phase ; à la victoire, un gong et une cascade en majeur. |

## Couper le son

- Un **bouton rond en papier**, en bas à gauche, toujours visible (même en jouant). Il est en dehors de l'écran de jeu : l'appuyer ne fait pas voler Gloub.
- La **touche M** fait la même chose.
- Le choix est **mémorisé** dans le navigateur (`gloub-son`).
- Le son se met en pause quand l'onglet est caché.

## Technique

- Le contexte audio ne démarre qu'au **premier appui** (règle des navigateurs) ; sur écran tactile, il se débloque au relâcher du doigt.
- **Programmation** : à chaque image, `SND.tick()` place les notes des 0,16 s à venir sur l'horloge audio (pas d'à-coups même si une image est en retard).
- **Chaîne** : couches de musique → creux en cas de choc → filtre du smog → sortie ; notes du joueur sur un filtre à part (jamais sous 2,6 kHz, pour rester nettes) ; bruitages ; une réverbération commune (2,4 s) ; un compresseur final qui tient les crêtes.
- **Garde-fou** : au-delà de 70 sons en cours, les bruitages sont sautés (la musique, jamais).
- **Niveaux mesurés** (navigateur de test) : crêtes autour de 0,5 à 0,7, jamais de saturation.

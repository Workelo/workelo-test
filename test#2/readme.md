
## Back-end
Afin de s'assurer que les onboardees soient toujours à jour sur leur parcours d'intégration, votre mission consiste à mettre en place un **système de notification** des tâches en retard.

Une tâche peut être marquée comme `faite` ou `pas faite` et à une `date d'échéance`. Dès la date passée elle est considérée en retard si elle n'est pas faite.

- (A) Les notifications sont visibles partout dans l'application (à droite sur la navbar) : l'onboardee peut les consulter.
- (B) Les notifications sont envoyées une fois par semaine, le mardi, à l'onboardee par email.

Partez du principe que l'app existe, mais qu'il n'y a rien (ni controlleur, ni librairie, etc.) permettant de gérer les notifications.

**L'objectif ici n'est pas d'entrer dans le code, mais de décrire** la manière dont vous construiriez cette logique de notification (A et B). Vous pourrez par exemple proposer un schéma dessiné ou des bullet-points détaillant les différents blocs logiques à mettre en place et leur rôle.

Il est important que cette fonctionnalité de notification ralentisse le moins possible le fonctionnement de l'app - le chargement des pages en particulier.

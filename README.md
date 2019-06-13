# Tests de recrutement Workelo

## Algorithmique
Afin d'aider les RH à **planifier les réunions** des nouvelles recrues, votre mission consiste à développer un méthode permettant de trouver des créneaux disponibles entre 2 agendas.

A partir de de l'API de Google Calendar, il est possible de récupérer les busy slots d'un employé, sur un interval donnée, sous la forme :
```
[
  {
    start: datetime,
    end: datetime
  },
  {
    start: datetime,
    end: datetime
  },
  ...
]
```

Partez du principe que :
1. vous avez 2 tableaux de busy slots (sandra_busy_slots et andrew_busy_slots) pour une semaine donnée
2. une journée professionnelle commence à 9h30 et se termine à 18h

Développez une méthode prenant comme argument les deux tableaux ainsi que la durée du créneau souhaité et **retournant un tableau de créneau disponible**.


## Back-end
Afin de s'assurer que les onboardees soient toujours à jour sur leur parcours d'intégration, votre mission consiste à mettre en place un **système de notification** des tâches en retard.

Une tâche peut être marquée comme faite ou pas faite et à une date d'échéance. Dès la date passée elle est considérée en retard si elle n'est pas faite.

(A) Les notifications sont visibles partout dans l'application (à droite sur la navbar) : l'onboardee peut les consulter.
(B) Les notifications sont envoyées une fois par semaine, le mardi, à l'onboardee par email.

**L'objectif ici n'est pas d'entrer dans le code, mais de décrire** (avec un schéma dessiné par exemple ou des bullet-points) la manière dont vous construiriez cette logique (A et B).

Partez du principe que l'app existe, mais qu'il n'y a rien (ni controlleur, ni librairie, etc.) permettant de gérer les notifications.


---
Bonne chance 💪!

Si vous avez la moindre question ✉️mathieu@workelo.eu

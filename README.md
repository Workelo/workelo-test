## Test de recrutement Workelo (back-end)

Afin d'aider les nouvelles recrues d'une entreprise, Workelo souhaite l'accompagner et le guider
en lui 'poussant' automatiquement les tâches qu'il a à faire, au jour le jour.
Pour ce faire nous avons à disposition :
    - Les tâches des onboardees (chaque tâche )
    - Les échéances associées à ces tâches
    - Le manager de chaque onboardee (un onboardee ne peut pas être manager)

Nous souhaitons réaliser une classe NotifyOnboardee qui contiendra la logique de notification
de l'onboardee. Cette classe exposera les méthodes suivantes :
  - .progress(onboardee_id)           -> Retourne la progression globale de l'onboardee
  - .tasks(onboardee_id)              -> Retourne les tâches à réaliser classées par ordre d'écheance
  - .alerted_tasks(onboaardee_id)     -> Retourne pour un onboardee, ses tâches en retard classées par ordre d'écheance
  - .alerted_tasks(manager_id)        -> Retourne pour un manager, l'ensemble des tâches en retard de ses onboardees classées par ordre d'échance
  - .done(task_name)=(boolean)        -> Met à jour le status d'une tâche (fait / pas fait)

Structure de donnée de nos onboardees :
onboardees = [
    { id: 1, manager_id: 15,
      tasks: [
              { name: "badge", content: "Récupérer mon badge à l'accueil", end_date: "14/07/2018", done: false },
              { name: "linkedIn", content: "Mettre à jour mon profil LinkedIn", end_date: "16/07/2018", done: false },
              ...
            ]
    },
    ...
]

La classe s'instentiera de la sorte select = NotifyOnboardee.new(onboardees)
Techno :
-> Ruby/Rails
Rendu :
    -> Pouvoir importer la class en rails afin de l'utiliser
    -> Sur un repos GIT
    -> README.md

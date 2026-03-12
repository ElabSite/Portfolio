export interface Achievement {
  id: string;
  name: string;
  shortDescription: string;
  presentation: string;
  objectives: string;
  context: string;
  risks: string;
  steps: string[];
  actors: string;
  results: string;
  future: string;
  criticalView: string;
  linkedSkills: string[]; 
}

export const achievements: Achievement[] = [
  {
    id: "migration-cloud",
    name: "Migration Cloud d'Infrastructure Legacy",
    shortDescription: "Pilotage de la migration complète d'une infrastructure on-premise vers AWS pour une PME de 150 collaborateurs.",
    presentation: "Ce projet stratégique visait à transformer l'infrastructure informatique d'une PME en forte croissance, en migrant l'ensemble de ses services on-premise vers le cloud AWS. L'infrastructure existante, vieillissante et difficilement maintenable, constituait un frein à l'innovation et à la scalabilité de l'entreprise.",
    objectives: "L'objectif principal était de moderniser l'infrastructure pour supporter une croissance de 200% du trafic sur 2 ans, tout en réduisant les coûts d'exploitation et en améliorant la disponibilité des services.",
    context: "L'entreprise opérait sur des serveurs physiques avec des processus manuels de déploiement. Les incidents récurrents et les temps de provisionnement élevés ralentissaient la croissance.",
    risks: "Risque de perte de données lors de la migration, interruption de service pour les clients, résistance au changement des équipes ops habituées à l'infrastructure physique.",
    steps: [
      "Audit complet de l'infrastructure existante et cartographie des dépendances",
      "Conception de l'architecture cloud cible avec le Well-Architected Framework",
      "Migration progressive avec stratégie lift-and-shift pour les services critiques",
      "Refactoring des services pour adopter les patterns cloud-native",
      "Mise en place du monitoring et des alertes",
      "Formation des équipes et transfert de compétences"
    ],
    actors: "Collaboration étroite avec le DSI, l'équipe ops (4 personnes), les développeurs (8 personnes) et un architecte cloud AWS. Interactions régulières avec le métier pour valider les SLA.",
    results: "Réduction des coûts d'infrastructure de 40%. Disponibilité passée de 99.5% à 99.95%. Temps de provisionnement divisé par 10. Équipe ops montée en compétences sur AWS.",
    future: "Le projet a ouvert la voie à l'adoption de Kubernetes et d'une architecture microservices. Aujourd'hui, l'entreprise continue d'optimiser ses coûts cloud et explore le multi-cloud.",
    criticalView: "Avec le recul, j'aurais dû investir davantage dans la formation des équipes en amont de la migration. La résistance au changement, bien que gérée, a ralenti certaines phases du projet. La stratégie lift-and-shift, bien qu'efficace pour démarrer, a généré de la dette technique qu'il a fallu traiter ensuite.",
    linkedSkills: ["cloud", "iac", "conteneurisation", "adaptabilite", "resolution-problemes"]
  },
  {
    id: "pipeline-zero-downtime",
    name: "Pipeline CI/CD Zero-Downtime",
    shortDescription: "Conception d'un pipeline d'intégration et de déploiement continus garantissant zéro temps d'arrêt pour une plateforme e-commerce.",
    presentation: "Ce projet technique ambitieux consistait à mettre en place un pipeline CI/CD complet pour une plateforme e-commerce à forte volumétrie, avec pour contrainte absolue l'absence de temps d'arrêt lors des déploiements.",
    objectives: "Automatiser entièrement le cycle de vie des déploiements tout en garantissant une disponibilité de 100% pendant les mises en production. Réduire le temps de déploiement de 4 heures à moins de 20 minutes.",
    context: "La plateforme traitait plus de 10 000 transactions par jour. Chaque minute d'indisponibilité représentait un manque à gagner significatif et un impact sur la confiance des clients.",
    risks: "Risque de déploiement défaillant en production, corruption des données en cours de transaction, complexité du rollback automatique.",
    steps: [
      "Analyse des flux de déploiement existants et identification des goulots d'étranglement",
      "Conception de l'architecture du pipeline avec étapes de validation progressives",
      "Implémentation du déploiement blue-green avec bascule automatique",
      "Mise en place des tests automatisés (unitaires, intégration, e2e, smoke tests)",
      "Configuration du rollback automatique basé sur les métriques de santé",
      "Documentation et formation de l'équipe"
    ],
    actors: "Travail en binôme avec un ingénieur SRE senior. Coordination avec l'équipe QA pour la définition des critères d'acceptance et avec le product owner pour les fenêtres de déploiement.",
    results: "Temps de déploiement réduit de 4 heures à 15 minutes. Zéro temps d'arrêt sur 6 mois. Fréquence de déploiement passée de 1 par semaine à 3 par jour. Confiance de l'équipe multipliée.",
    future: "Le pipeline est devenu le standard de l'entreprise, adopté par toutes les équipes. Les prochaines évolutions portent sur l'intégration de tests de performance automatisés et de déploiements canary avec analyse automatique des métriques.",
    criticalView: "Le déploiement blue-green, bien qu'efficace, double temporairement les ressources nécessaires. J'explore maintenant les déploiements canary comme alternative plus économe. La complexité du rollback automatique nécessite une maintenance continue des critères de santé.",
    linkedSkills: ["ci-cd", "conteneurisation", "monitoring", "leadership", "resolution-problemes"]
  },
  {
    id: "monitoring-platform",
    name: "Plateforme de Monitoring Centralisée",
    shortDescription: "Architecture et déploiement d'une solution d'observabilité unifiée basée sur Prometheus, Grafana et Loki pour 80+ services.",
    presentation: "Face à la multiplication des services et à la difficulté croissante de diagnostiquer les incidents, j'ai conçu et déployé une plateforme de monitoring centralisée offrant une vue unifiée de l'état de santé de l'ensemble du système d'information.",
    objectives: "Centraliser le monitoring de tous les services, réduire le temps de détection des incidents à moins de 5 minutes, et fournir des dashboards métier exploitables par les équipes non techniques.",
    context: "L'entreprise de 200 personnes disposait de solutions de monitoring fragmentées et hétérogènes. Chaque équipe utilisait ses propres outils, rendant la corrélation des événements quasi impossible lors des incidents transversaux.",
    risks: "Volume de données à traiter potentiellement ingérable, surcharge d'alertes (alert fatigue), adoption incertaine par les équipes habituées à leurs outils existants.",
    steps: [
      "Benchmark des solutions de monitoring et choix de la stack technique",
      "Architecture de la plateforme avec haute disponibilité et rétention configurable",
      "Déploiement progressif en commençant par les services les plus critiques",
      "Création de dashboards standards et personnalisés par équipe",
      "Mise en place du système d'alerte avec escalade progressive",
      "Ateliers de formation et d'adoption pour chaque équipe"
    ],
    actors: "Collaboration avec les tech leads de 6 équipes, le RSSI pour les aspects sécurité des logs, et le management pour la définition des KPI métier.",
    results: "Temps moyen de détection des incidents réduit de 45 minutes à 3 minutes. 25 dashboards métier adoptés. Réduction de 60% des incidents non détectés. Plateforme devenue indispensable au quotidien.",
    future: "La prochaine étape est l'intégration d'OpenTelemetry pour les traces distribuées et l'ajout de capacités d'AIOps pour la détection prédictive des anomalies.",
    criticalView: "Le principal défi a été l'adoption. Les meilleurs outils du monde ne servent à rien s'ils ne sont pas utilisés. J'ai sous-estimé le temps nécessaire à la formation et à l'accompagnement des équipes. L'alert fatigue a également été un problème initial que j'ai résolu en affinant progressivement les seuils d'alerte.",
    linkedSkills: ["monitoring", "cloud", "communication", "esprit-equipe", "resolution-problemes"]
  },
  {
    id: "iac-automation",
    name: "Automatisation Infrastructure as Code",
    shortDescription: "Migration complète d'une infrastructure AWS gérée manuellement vers une approche IaC avec Terraform et modules réutilisables.",
    presentation: "Ce projet a consisté à transformer une infrastructure AWS gérée « au clic » en une infrastructure entièrement codifiée, versionnée et reproductible avec Terraform. L'objectif était d'éliminer les configurations manuelles et de garantir la cohérence entre les environnements.",
    objectives: "Codifier 100% de l'infrastructure existante, créer une bibliothèque de modules réutilisables, et mettre en place un workflow de revue de code pour les changements d'infrastructure.",
    context: "L'infrastructure AWS de l'entreprise avait grandi organiquement pendant 3 ans, accumulant des configurations manuelles, des ressources orphelines et des incohérences entre environnements de développement, staging et production.",
    risks: "Risque de régression lors de la codification de l'existant, résistance des ops habitués au provisionnement manuel, complexité de la gestion de l'état Terraform pour une infrastructure existante.",
    steps: [
      "Inventaire et rétro-ingénierie de toutes les ressources AWS existantes",
      "Import progressif des ressources dans l'état Terraform",
      "Création de modules réutilisables pour les patterns récurrents",
      "Mise en place du workflow GitOps avec revue de code obligatoire",
      "Création des environnements de staging et dev à partir du code",
      "Documentation et formation des équipes"
    ],
    actors: "Collaboration avec l'équipe infrastructure (3 personnes), les développeurs pour l'intégration dans les workflows CI/CD, et le management pour la validation des politiques de sécurité.",
    results: "Infrastructure 100% versionnée. Temps de provisionnement d'un nouvel environnement réduit de 2 jours à 30 minutes. Conformité aux audits facilitée. Élimination de 40 ressources orphelines représentant 15% du budget cloud.",
    future: "Le projet a servi de fondation pour l'adoption de Terragrunt et la mise en place de politiques Sentinel pour la conformité automatique. L'entreprise explore maintenant Crossplane pour une gestion Kubernetes-native de l'infrastructure.",
    criticalView: "L'import de l'infrastructure existante dans Terraform a été plus laborieux que prévu. Certaines ressources créées manuellement avaient des configurations non standard qui ont nécessité des workarounds. J'aurais dû prévoir plus de temps pour cette phase de rétro-ingénierie.",
    linkedSkills: ["iac", "ci-cd", "cloud", "resolution-problemes", "adaptabilite"]
  },
  {
    id: "transformation-devops",
    name: "Transformation DevOps d'Équipe",
    shortDescription: "Accompagnement culturel et technique d'une équipe de développement dans sa transition vers les pratiques DevOps.",
    presentation: "Ce projet de transformation allait bien au-delà de la technique : il s'agissait de faire évoluer la culture d'une équipe de 8 développeurs habituée à un modèle siloed traditionnel vers une approche DevOps collaborative et autonome.",
    objectives: "Rendre l'équipe autonome dans la gestion de ses déploiements, réduire les incidents de production de 50% et améliorer le cycle de livraison.",
    context: "L'équipe fonctionnait selon un modèle où les développeurs « jetaient le code par-dessus le mur » à une équipe ops distincte. Les tensions étaient fréquentes et les incidents de production chroniques.",
    risks: "Résistance au changement profondément ancrée, risque de démotivation si la transformation est perçue comme une surcharge de travail, délai avant de voir les premiers bénéfices.",
    steps: [
      "Diagnostic culturel et technique de l'équipe (interviews, observation)",
      "Définition d'une vision partagée et d'une feuille de route progressive",
      "Ateliers pratiques sur les outils DevOps (Docker, CI/CD, monitoring)",
      "Mise en place du pair programming et des code reviews",
      "Introduction progressive des pratiques d'on-call et de post-mortem",
      "Rétrospectives régulières pour ajuster le rythme de transformation"
    ],
    actors: "Collaboration étroite avec le manager de l'équipe, les 8 développeurs, l'équipe ops existante, et le CTO pour le sponsoring de la démarche.",
    results: "En 6 mois : équipe autonome sur ses déploiements, incidents de production réduits de 70%, cycle de livraison passé de 2 semaines à 2 jours. Satisfaction de l'équipe en hausse mesurable.",
    future: "L'équipe est devenue ambassadrice DevOps au sein de l'entreprise et aide désormais d'autres équipes dans leur transformation. La communauté de pratiques DevOps initiée continue de grandir.",
    criticalView: "La transformation culturelle prend du temps et de la patience. J'ai parfois voulu aller trop vite, ce qui a généré de la fatigue dans l'équipe. Les quick wins sont essentiels pour maintenir la motivation, mais il faut aussi accepter que certains changements nécessitent des mois pour s'ancrer durablement.",
    linkedSkills: ["leadership", "communication", "esprit-equipe", "ci-cd", "adaptabilite"]
  }
];

export const getAchievementById = (id: string): Achievement | undefined => achievements.find(a => a.id === id);

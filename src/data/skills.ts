export interface Skill {
  id: string;
  name: string;
  category: "technical" | "human";
  level: number; // 1-100
  definition: string;
  context: string;
  anecdotes: Array<{
    title: string;
    content: string;
    result: string;
    linkedAchievement?: string; // achievement id
  }>;
  selfCritique: {
    masteryLevel: string;
    importance: string;
    acquisitionSpeed: string;
    advice: string;
  };
  evolution: {
    targetLevel: string;
    ongoingTraining: string;
  };
  linkedAchievements: string[]; // achievement ids
}

export const skills: Skill[] = [
  {
    id: "ci-cd",
    name: "CI/CD & Automatisation",
    category: "technical",
    level: 90,
    definition: "La mise en place de pipelines d'intégration et de déploiement continus constitue le cœur de la pratique DevOps moderne. Dans un contexte où les équipes doivent livrer des fonctionnalités à un rythme soutenu tout en garantissant la qualité, la maîtrise des outils CI/CD (Jenkins, GitLab CI, GitHub Actions) devient indispensable. L'automatisation permet de réduire les erreurs humaines et d'accélérer le time-to-market.",
    context: "Avec l'adoption massive du cloud et des architectures microservices, les pipelines CI/CD sont devenus le socle de toute organisation performante en ingénierie logicielle.",
    anecdotes: [
      {
        title: "Pipeline zero-downtime pour une plateforme e-commerce",
        content: "J'ai conçu et déployé un pipeline CI/CD complet sur GitLab CI pour une plateforme e-commerce traitant plus de 10 000 transactions par jour. Le pipeline intégrait des tests automatisés, de l'analyse de code statique, du déploiement blue-green et du rollback automatique.",
        result: "Réduction du temps de déploiement de 4 heures à 15 minutes, avec zéro temps d'arrêt sur 6 mois consécutifs.",
        linkedAchievement: "pipeline-zero-downtime"
      },
      {
        title: "Standardisation des pipelines multi-projets",
        content: "Face à la multiplication des projets avec des configurations CI/CD disparates, j'ai créé une bibliothèque de templates partagés permettant de standardiser les pratiques tout en conservant la flexibilité nécessaire à chaque équipe.",
        result: "Adoption par 12 équipes, réduction de 60% du temps de configuration initiale des nouveaux projets.",
        linkedAchievement: "transformation-devops"
      }
    ],
    selfCritique: {
      masteryLevel: "Niveau avancé — je maîtrise les principaux outils et patterns, y compris les déploiements canary et les stratégies de feature flags.",
      importance: "Compétence centrale et prioritaire dans mon profil DevOps. C'est le pilier qui soutient toutes les autres pratiques.",
      acquisitionSpeed: "Progression rapide grâce à une immersion précoce et une curiosité constante pour les nouveaux outils.",
      advice: "Ne jamais négliger les tests dans le pipeline. Un pipeline rapide mais sans filet de sécurité est un pipeline dangereux."
    },
    evolution: {
      targetLevel: "Viser l'expertise en GitOps et en pipelines auto-réparateurs à moyen terme.",
      ongoingTraining: "Formation en cours sur ArgoCD et Flux pour le GitOps. Veille active sur les pratiques de progressive delivery."
    },
    linkedAchievements: ["pipeline-zero-downtime", "transformation-devops", "iac-automation"]
  },
  {
    id: "iac",
    name: "Infrastructure as Code",
    category: "technical",
    level: 85,
    definition: "L'Infrastructure as Code (IaC) est la pratique consistant à gérer et provisionner l'infrastructure informatique à travers des fichiers de configuration plutôt que par des processus manuels. Des outils comme Terraform, Ansible et Pulumi permettent de versionner, tester et reproduire des environnements complets de manière déclarative.",
    context: "Dans un monde où les environnements cloud doivent être reproductibles et auditables, l'IaC est devenu un standard de l'industrie, soutenu par les régulations de conformité.",
    anecdotes: [
      {
        title: "Migration d'infrastructure vers Terraform",
        content: "J'ai piloté la migration complète d'une infrastructure AWS gérée manuellement vers une approche IaC avec Terraform. Cela a impliqué la rétro-ingénierie de plus de 50 ressources existantes, la création de modules réutilisables et la mise en place d'un workflow de revue de code pour les changements d'infrastructure.",
        result: "Infrastructure entièrement versionnée, temps de provisionnement réduit de 2 jours à 30 minutes, et conformité aux audits facilitée.",
        linkedAchievement: "iac-automation"
      }
    ],
    selfCritique: {
      masteryLevel: "Niveau avancé sur Terraform et Ansible. En progression sur Pulumi et les approches multi-cloud.",
      importance: "Compétence essentielle qui garantit la reproductibilité et la fiabilité des environnements.",
      acquisitionSpeed: "Apprentissage progressif, accéléré par la pratique quotidienne sur des projets à grande échelle.",
      advice: "Toujours penser en modules réutilisables dès le départ. La dette technique en IaC est aussi coûteuse que celle du code applicatif."
    },
    evolution: {
      targetLevel: "Maîtriser le multi-cloud et les approches policy-as-code (OPA, Sentinel).",
      ongoingTraining: "Certification HashiCorp Terraform Associate en préparation. Exploration de Crossplane pour le Kubernetes-native IaC."
    },
    linkedAchievements: ["iac-automation", "migration-cloud"]
  },
  {
    id: "conteneurisation",
    name: "Conteneurisation & Orchestration",
    category: "technical",
    level: 88,
    definition: "La conteneurisation avec Docker et l'orchestration avec Kubernetes permettent d'encapsuler les applications et leurs dépendances dans des unités portables et reproductibles. Cette approche révolutionne le déploiement, la scalabilité et la gestion des applications modernes.",
    context: "Kubernetes s'est imposé comme le standard de facto pour l'orchestration de conteneurs, soutenu par la CNCF et adopté par les plus grandes entreprises.",
    anecdotes: [
      {
        title: "Mise en place d'un cluster Kubernetes de production",
        content: "J'ai conçu et déployé un cluster Kubernetes multi-nœuds sur AWS EKS pour héberger une suite de microservices. Le cluster intégrait l'auto-scaling, le monitoring avec Prometheus/Grafana, et la gestion des secrets avec Vault.",
        result: "Scalabilité automatique gérant des pics de trafic x5, coûts d'infrastructure réduits de 35% grâce à l'optimisation des ressources.",
        linkedAchievement: "migration-cloud"
      }
    ],
    selfCritique: {
      masteryLevel: "Niveau avancé en Docker et Kubernetes. Bonne maîtrise de Helm et des operators.",
      importance: "Compétence fondamentale dans l'écosystème DevOps actuel, indissociable du cloud-native.",
      acquisitionSpeed: "Courbe d'apprentissage significative, mais accélérée par une pratique intensive et un mentorat de qualité.",
      advice: "Ne pas sous-estimer la complexité opérationnelle de Kubernetes. Commencer simple et complexifier progressivement."
    },
    evolution: {
      targetLevel: "Approfondir les service meshes (Istio, Linkerd) et la sécurité des conteneurs.",
      ongoingTraining: "Préparation de la certification CKA (Certified Kubernetes Administrator)."
    },
    linkedAchievements: ["migration-cloud", "pipeline-zero-downtime"]
  },
  {
    id: "monitoring",
    name: "Monitoring & Observabilité",
    category: "technical",
    level: 82,
    definition: "L'observabilité va au-delà du simple monitoring en combinant métriques, logs et traces distribuées pour permettre une compréhension profonde du comportement des systèmes. Des outils comme Prometheus, Grafana, ELK Stack et Jaeger forment l'arsenal moderne de l'ingénieur DevOps.",
    context: "Avec la complexité croissante des architectures distribuées, l'observabilité est devenue un enjeu critique pour garantir la fiabilité et la performance des services.",
    anecdotes: [
      {
        title: "Plateforme de monitoring centralisée",
        content: "J'ai architecturé une plateforme de monitoring centralisée basée sur la stack Prometheus/Grafana/Loki pour une entreprise de 200 personnes. La plateforme agrège les métriques de plus de 80 services et fournit des dashboards personnalisés par équipe.",
        result: "Temps moyen de détection des incidents réduit de 45 minutes à 3 minutes. Création de 25 dashboards métier adoptés par les équipes produit.",
        linkedAchievement: "monitoring-platform"
      }
    ],
    selfCritique: {
      masteryLevel: "Bon niveau sur la stack Prometheus/Grafana. En apprentissage sur les traces distribuées avec OpenTelemetry.",
      importance: "Compétence de plus en plus stratégique avec la montée des architectures distribuées.",
      acquisitionSpeed: "Progression constante, stimulée par les retours d'expérience en production.",
      advice: "Définir les SLO/SLI avant d'instrumenter. Le monitoring sans objectifs clairs génère du bruit plus que de la valeur."
    },
    evolution: {
      targetLevel: "Maîtriser OpenTelemetry et les pratiques de SRE (Site Reliability Engineering).",
      ongoingTraining: "Auto-formation sur OpenTelemetry. Lecture du livre 'Site Reliability Engineering' de Google."
    },
    linkedAchievements: ["monitoring-platform", "migration-cloud"]
  },
  {
    id: "cloud",
    name: "Cloud Computing",
    category: "technical",
    level: 80,
    definition: "La maîtrise des services cloud (AWS, GCP, Azure) permet de concevoir des architectures scalables, résilientes et optimisées en coût. Au-delà de la simple utilisation des services, c'est la compréhension des patterns architecturaux cloud-native qui fait la différence.",
    context: "Le marché du cloud continue sa croissance exponentielle. La capacité à optimiser les coûts et à architecturer des solutions multi-cloud est de plus en plus recherchée.",
    anecdotes: [
      {
        title: "Migration cloud d'une infrastructure legacy",
        content: "J'ai conduit la migration d'une infrastructure on-premise vers AWS pour une PME de 150 employés. Le projet a impliqué l'analyse de l'existant, la conception de l'architecture cible, la migration progressive des services avec une stratégie lift-and-shift puis refactoring.",
        result: "Réduction des coûts d'infrastructure de 40%, amélioration de la disponibilité de 99.5% à 99.95%, et temps de provisionnement divisé par 10.",
        linkedAchievement: "migration-cloud"
      }
    ],
    selfCritique: {
      masteryLevel: "Bon niveau sur AWS (EC2, S3, RDS, Lambda, EKS). Connaissances de base sur GCP et Azure.",
      importance: "Compétence socle pour tout profil DevOps. La tendance multi-cloud renforce son importance.",
      acquisitionSpeed: "Apprentissage accéléré par les certifications et les projets pratiques.",
      advice: "Toujours commencer par le Well-Architected Framework. Optimiser les coûts dès la conception, pas après."
    },
    evolution: {
      targetLevel: "Obtenir la certification AWS Solutions Architect Professional et développer l'expertise GCP.",
      ongoingTraining: "Préparation AWS SAP. Labs pratiques sur GCP."
    },
    linkedAchievements: ["migration-cloud", "iac-automation"]
  },
  {
    id: "communication",
    name: "Communication",
    category: "human",
    level: 85,
    definition: "La capacité à transmettre des idées techniques de manière claire et accessible à des publics variés — développeurs, managers, clients — est un levier essentiel de l'expert en ingénierie. Communiquer, c'est aussi savoir écouter, reformuler et adapter son discours.",
    context: "Dans les organisations agiles, la communication transversale est le ciment qui lie les équipes techniques et métier.",
    anecdotes: [
      {
        title: "Présentation de la stratégie DevOps au comité de direction",
        content: "J'ai préparé et présenté une feuille de route DevOps devant le comité de direction d'une entreprise de 500 personnes. J'ai traduit des concepts techniques complexes en bénéfices business concrets, avec des métriques de ROI.",
        result: "Validation unanime du budget et du planning proposés. Le CEO a cité cette présentation comme modèle de clarté technique.",
        linkedAchievement: "transformation-devops"
      }
    ],
    selfCritique: {
      masteryLevel: "Bonne aisance à l'oral et à l'écrit. Capacité à vulgariser sans simplifier à l'excès.",
      importance: "Compétence transversale qui amplifie toutes les autres. Indispensable pour un rôle de leadership technique.",
      acquisitionSpeed: "Amélioration continue, nourrie par chaque interaction et chaque présentation.",
      advice: "Préparer, mais ne pas sur-préparer. L'authenticité et l'écoute valent souvent mieux qu'un discours parfait."
    },
    evolution: {
      targetLevel: "Développer les compétences en facilitation d'ateliers et en communication de crise.",
      ongoingTraining: "Participation à des meetups en tant que speaker. Formation en communication non violente."
    },
    linkedAchievements: ["transformation-devops", "monitoring-platform"]
  },
  {
    id: "leadership",
    name: "Leadership technique",
    category: "human",
    level: 78,
    definition: "Le leadership technique consiste à guider les équipes vers l'excellence en combinant vision stratégique, exemplarité et empowerment. Il ne s'agit pas de diriger, mais d'inspirer et de créer les conditions pour que chacun donne le meilleur de lui-même.",
    context: "Le modèle du lead technique évolue vers un rôle de servant leader, facilitateur plutôt que décideur autoritaire.",
    anecdotes: [
      {
        title: "Transformation culturelle DevOps d'une équipe",
        content: "J'ai accompagné une équipe de 8 développeurs dans sa transformation DevOps. Plutôt que d'imposer des pratiques, j'ai mis en place des ateliers collaboratifs, du pair programming et des rétrospectives régulières pour faire émerger les bonnes pratiques du terrain.",
        result: "En 6 mois, l'équipe est devenue autonome dans la gestion de ses pipelines et a réduit ses incidents de production de 70%.",
        linkedAchievement: "transformation-devops"
      }
    ],
    selfCritique: {
      masteryLevel: "En progression. Capable de fédérer une équipe autour d'un objectif commun, mais perfectible sur la gestion des conflits.",
      importance: "Compétence stratégique pour évoluer vers des rôles de Staff Engineer ou VP Engineering.",
      acquisitionSpeed: "Compétence qui se développe avec l'expérience et la prise de recul.",
      advice: "Écouter avant de proposer. Le meilleur leader technique est celui qui rend son équipe capable de fonctionner sans lui."
    },
    evolution: {
      targetLevel: "Développer une posture de Staff Engineer capable d'influencer la stratégie technique à l'échelle de l'organisation.",
      ongoingTraining: "Lecture de 'Staff Engineer' de Will Larson. Mentorat auprès de profils juniors."
    },
    linkedAchievements: ["transformation-devops", "pipeline-zero-downtime"]
  },
  {
    id: "resolution-problemes",
    name: "Résolution de problèmes",
    category: "human",
    level: 90,
    definition: "La résolution de problèmes en ingénierie logicielle combine pensée analytique, créativité et méthodologie. C'est la capacité à décomposer un problème complexe en sous-problèmes gérables, à formuler des hypothèses et à les valider de manière systématique.",
    context: "Les systèmes distribués modernes génèrent des problèmes de plus en plus complexes, nécessitant des approches de debugging avancées et une compréhension systémique.",
    anecdotes: [
      {
        title: "Résolution d'un incident de production critique",
        content: "Face à un incident de performance majeur affectant 100% des utilisateurs un vendredi soir, j'ai coordonné l'investigation en utilisant une approche structurée : corrélation des métriques, analyse des traces distribuées, et isolation progressive de la cause racine (un memory leak dans un service de cache).",
        result: "Incident résolu en 45 minutes. Post-mortem partagé avec toute l'entreprise, devenu un cas d'étude pour la formation des nouvelles recrues.",
        linkedAchievement: "monitoring-platform"
      }
    ],
    selfCritique: {
      masteryLevel: "Point fort naturel, renforcé par l'expérience. Capacité à garder la tête froide sous pression.",
      importance: "Compétence fondamentale qui sous-tend toutes les autres. Un bon problem solver multiplie l'efficacité de toute l'équipe.",
      acquisitionSpeed: "Compétence développée très tôt, affinée à chaque incident et chaque défi technique.",
      advice: "Toujours documenter la résolution. Le problème de demain est souvent une variation du problème d'hier."
    },
    evolution: {
      targetLevel: "Développer l'expertise en chaos engineering pour anticiper les problèmes avant qu'ils ne surviennent.",
      ongoingTraining: "Exploration du chaos engineering avec Litmus et Gremlin. Pratique régulière de game days."
    },
    linkedAchievements: ["monitoring-platform", "pipeline-zero-downtime", "migration-cloud"]
  },
  {
    id: "adaptabilite",
    name: "Adaptabilité",
    category: "human",
    level: 83,
    definition: "L'adaptabilité est la capacité à évoluer efficacement dans un environnement technologique en perpétuelle mutation. C'est accueillir le changement non comme une menace, mais comme une opportunité d'apprentissage et de croissance.",
    context: "Le monde DevOps évolue à un rythme effréné : nouveaux outils, nouvelles pratiques, nouvelles architectures. L'adaptabilité est la compétence qui permet de rester pertinent.",
    anecdotes: [
      {
        title: "Pivotement technologique en cours de projet",
        content: "En plein milieu d'un projet de migration, le choix technologique initial (Docker Swarm) s'est avéré inadapté aux besoins de scalabilité. J'ai rapidement réévalué les options, proposé Kubernetes et piloté le changement de cap en minimisant l'impact sur le planning.",
        result: "Le projet a été livré avec seulement 2 semaines de retard, et l'architecture finale s'est révélée bien plus robuste que la solution initiale.",
        linkedAchievement: "migration-cloud"
      }
    ],
    selfCritique: {
      masteryLevel: "Bonne capacité d'adaptation. À l'aise avec l'incertitude et le changement de contexte.",
      importance: "Compétence de survie dans le monde tech. Sans adaptabilité, l'expertise technique devient vite obsolète.",
      acquisitionSpeed: "Développée naturellement par une carrière diversifiée et une curiosité insatiable.",
      advice: "Cultiver la curiosité et accepter d'être débutant régulièrement. C'est inconfortable mais essentiel."
    },
    evolution: {
      targetLevel: "Devenir un agent de changement capable d'accompagner les transformations organisationnelles.",
      ongoingTraining: "Exploration continue de nouvelles technologies. Participation à des hackathons et des conférences."
    },
    linkedAchievements: ["migration-cloud", "transformation-devops"]
  },
  {
    id: "esprit-equipe",
    name: "Esprit d'équipe",
    category: "human",
    level: 86,
    definition: "L'esprit d'équipe en ingénierie logicielle, c'est la conviction que les meilleurs résultats émergent de la collaboration. C'est contribuer au succès collectif en partageant ses connaissances, en soutenant ses collègues et en créant un environnement de confiance psychologique.",
    context: "Le DevOps est par essence une démarche collaborative qui brise les silos entre développement et opérations. L'esprit d'équipe en est le fondement culturel.",
    anecdotes: [
      {
        title: "Mise en place d'une communauté de pratiques DevOps",
        content: "J'ai initié et animé une communauté de pratiques DevOps réunissant développeurs, ops et QA autour de sessions bimensuelles de partage de connaissances, de retours d'expérience et de démonstrations techniques.",
        result: "Communauté de 30 membres actifs. Amélioration mesurable de la collaboration inter-équipes et réduction des frictions Dev/Ops de 50%.",
        linkedAchievement: "transformation-devops"
      }
    ],
    selfCritique: {
      masteryLevel: "Point fort reconnu par mes pairs. Capacité naturelle à créer du lien et à favoriser la coopération.",
      importance: "Compétence fondatrice de la culture DevOps. Sans elle, les outils seuls ne suffisent pas.",
      acquisitionSpeed: "Compétence innée renforcée par des expériences variées en équipes multiculturelles.",
      advice: "Le partage de connaissances est le meilleur investissement d'équipe. Ce que l'on donne revient multiplié."
    },
    evolution: {
      targetLevel: "Développer les compétences en coaching d'équipe et en facilitation agile.",
      ongoingTraining: "Formation Scrum Master envisagée. Participation active aux communautés open source."
    },
    linkedAchievements: ["transformation-devops", "monitoring-platform"]
  }
];

export const getSkillById = (id: string): Skill | undefined => skills.find(s => s.id === id);
export const getTechnicalSkills = () => skills.filter(s => s.category === "technical");
export const getHumanSkills = () => skills.filter(s => s.category === "human");

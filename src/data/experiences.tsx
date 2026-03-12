export interface Experience {
  id: string;
  type: "work" | "education" | "certification";
  period: string;
  startDate: string;
  endDate?: string;
  title: string;
  organization: string;
  logo?: string;
  location?: string;
  url?: string;
  // Work-specific
  responsibility?: string;
  status?: string;
  missions?: string[];
  linkedAchievements?: string[];
  linkedSkills?: string[];
  // Education-specific
  degree?: string;
  description?: string;
  // Certification
  certificationDate?: string;
}

export const experiences: Experience[] = [
  {
    id: "exp-1",
    type: "work",
    period: "2022 — Présent",
    startDate: "2022-09",
    title: "Ingénieur DevOps Senior",
    organization: "Tech Solutions Corp.",
    location: "Lyon, France",
    responsibility: "Lead technique DevOps",
    missions: [
      "Pilotage de la stratégie CI/CD et de l'infrastructure cloud pour l'ensemble de la division technique",
      "Conception et déploiement de la plateforme de monitoring centralisée",
      "Accompagnement des équipes de développement dans l'adoption des pratiques DevOps",
      "Gestion du budget cloud et optimisation continue des coûts"
    ],
    linkedAchievements: ["monitoring-platform", "transformation-devops"],
    linkedSkills: ["ci-cd", "monitoring", "leadership", "communication"]
  },
  {
    id: "exp-2",
    type: "work",
    period: "2020 — 2022",
    startDate: "2020-03",
    endDate: "2022-08",
    title: "Ingénieur DevOps",
    organization: "CloudFirst SAS",
    location: "Paris, France",
    responsibility: "Ingénieur DevOps référent",
    missions: [
      "Migration d'infrastructures on-premise vers AWS pour plusieurs clients",
      "Mise en place de pipelines CI/CD avec GitLab CI et Jenkins",
      "Automatisation de l'infrastructure avec Terraform et Ansible",
      "Formation des équipes clients aux bonnes pratiques DevOps"
    ],
    linkedAchievements: ["migration-cloud", "iac-automation", "pipeline-zero-downtime"],
    linkedSkills: ["cloud", "iac", "ci-cd", "adaptabilite"]
  },
  {
    id: "exp-3",
    type: "work",
    period: "2018 — 2020",
    startDate: "2018-09",
    endDate: "2020-02",
    title: "Administrateur Systèmes & Réseaux",
    organization: "DataCore Industries",
    location: "Marseille, France",
    responsibility: "Administrateur infrastructure",
    status: "Alternant puis CDI",
    missions: [
      "Administration des serveurs Linux et Windows en environnement de production",
      "Mise en place des premières briques d'automatisation avec Ansible",
      "Monitoring de l'infrastructure avec Nagios puis migration vers Prometheus",
      "Support N2/N3 et gestion des incidents"
    ],
    linkedAchievements: [],
    linkedSkills: ["monitoring", "resolution-problemes", "esprit-equipe"]
  },
  {
    id: "edu-1",
    type: "education",
    period: "2018 — 2020",
    startDate: "2018-09",
    endDate: "2020-07",
    title: "Expert en Ingénierie Logicielle",
    organization: "ESIEA",
    degree: "Titre RNCP Niveau 7 — Expert en Ingénierie du Logiciel",
    location: "Paris, France",
    url: "https://www.esiea.fr",
    description: "Formation d'excellence en ingénierie logicielle combinant théorie et pratique intensive. L'approche pédagogique par projets m'a permis de développer une vision transversale de l'ingénierie, du code au déploiement. L'accent mis sur les projets collaboratifs et l'entreprise a renforcé ma capacité à travailler en équipe et à livrer des solutions concrètes."
  },
  {
    id: "edu-2",
    type: "education",
    period: "2016 — 2018",
    startDate: "2016-09",
    endDate: "2018-07",
    title: "BTS Services Informatiques aux Organisations",
    organization: "Lycée Technique Saint-Charles",
    degree: "BTS SIO option SISR",
    location: "Marseille, France",
    description: "Formation solide aux fondamentaux de l'administration systèmes et réseaux. C'est ici que j'ai découvert ma passion pour l'automatisation et l'infrastructure, en réalisant que la technologie est un formidable levier quand elle est mise au service des équipes."
  },
  {
    id: "cert-1",
    type: "certification",
    period: "2023",
    startDate: "2023-06",
    title: "AWS Solutions Architect Associate",
    organization: "Amazon Web Services",
    certificationDate: "Juin 2023"
  },
  {
    id: "cert-2",
    type: "certification",
    period: "2022",
    startDate: "2022-11",
    title: "Docker Certified Associate",
    organization: "Docker Inc.",
    certificationDate: "Novembre 2022"
  }
];

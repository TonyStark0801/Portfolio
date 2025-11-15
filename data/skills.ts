export interface SkillCategory {
  category: string;
  skills: {
    name: string;
    level: number; // 1-100
    icon?: string;
  }[];
}

export const skillsData: SkillCategory[] = [
  {
    category: "Languages",
    skills: [
      { name: "Java", level: 90 },
      { name: "Python", level: 85 },
      { name: "TypeScript", level: 85 },
      { name: "JavaScript", level: 85 },
      { name: "SQL", level: 80 },
    ],
  },
  {
    category: "Backend & Frameworks",
    skills: [
      { name: "Spring Boot", level: 90 },
      { name: "Quarkus", level: 80 },
      { name: "FastAPI", level: 85 },
      { name: "Hibernate/JPA", level: 85 },
      { name: "REST APIs", level: 90 },
      { name: "Microservices", level: 85 },
    ],
  },
  {
    category: "Databases & Caching",
    skills: [
      { name: "PostgreSQL", level: 85 },
      { name: "MySQL", level: 80 },
      { name: "MongoDB", level: 75 },
      { name: "Redis", level: 85 },
      { name: "ClickHouse", level: 70 },
    ],
  },
  {
    category: "Infrastructure & DevOps",
    skills: [
      { name: "Docker", level: 85 },
      { name: "Kubernetes", level: 80 },
      { name: "Kafka", level: 80 },
      { name: "NGINX", level: 75 },
      { name: "Azure Cloud", level: 80 },
      { name: "GCP", level: 75 },
    ],
  },
  {
    category: "Tools & Others",
    skills: [
      { name: "Git", level: 90 },
      { name: "Postman", level: 85 },
      { name: "Airflow", level: 75 },
      { name: "Prometheus", level: 70 },
      { name: "OpenTelemetry", level: 70 },
      { name: "Azure DevOps", level: 80 },
    ],
  },
];

export const techStack = [
  "Java",
  "Python",
  "TypeScript",
  "Spring Boot",
  "FastAPI",
  "PostgreSQL",
  "Redis",
  "Docker",
  "Kubernetes",
  "Kafka",
  "Azure",
  "GCP",
  "Next.js",
  "React",
];

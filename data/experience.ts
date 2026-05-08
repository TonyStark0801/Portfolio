export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  team: string;
  achievements: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    id: "jio-blackrock",
    company: "Jio Platforms Limited",
    role: "Software Development Engineer - I",
    period: "Jan 2024 - Present",
    location: "Mumbai, MH",
    team: "Jio BlackRock Asset Management Company",
    achievements: [
      "Architected session-based encryption system using HKDF key derivation and AES-GCM encryption with per-session cryptographic isolation, providing forward secrecy and preventing replay attacks for financial API communications at the API Gateway level.",
      "Built Clickstream — a high-throughput user-journey event pipeline on Quarkus 3.x and Redis Streams with two-stage consumer groups, ZooKeeper-backed feature flags, Zoho CRM sync, DLQ/retry mechanisms, and Kubernetes deployment tracking user activity across the platform in real time.",
      "Built file storage service with multi-layered malicious content detection including magic byte validation, executable signature scanning, EICAR pattern matching, and script injection prevention, encrypting files with AES-GCM before Azure Blob Storage to ensure InfoSec compliance.",
      "Developed OTP verification service from scratch supporting SMS and Email delivery with Redis-based session management, configurable TTL, rate limiting, and expiry logic to secure user authentication workflows across the platform.",
      "Created FlowTrace monitoring platform with custom Java annotation-based logging that automatically captures and encrypts request/response data, exposing payment activities, investor journeys, and failure diagnostics through a secure portal with RBAC and Azure 2FA.",
      "Developed automated NAV/TER data ingestion system that processes daily Excel uploads from collaborator banks, validates and parses fund data, stores records in database, archives files to Azure Blob Storage, and triggers email notifications to operations and business teams.",
      "Implemented payment integration with Jio One Pay APIs for transaction processing and account validation, CAMS API integration for fund purchases, and multi-bank management with cheque OCR and TPV verification enabling users to register multiple accounts against folios.",
    ],
    technologies: [
      "Spring Boot",
      "Quarkus",
      "Java",
      "PostgreSQL",
      "Redis Streams",
      "Azure Cloud",
      "Docker",
      "Kubernetes",
      "Kafka",
      "ZooKeeper",
      "NGINX",
    ],
  },
  {
    id: "jio-matrix",
    company: "Jio Platforms Limited",
    role: "Software Development Engineer - I",
    period: "Oct 2023 - Dec 2023",
    location: "Mumbai, MH",
    team: "Jio Matrix Analytics",
    achievements: [
      "Rewrote backend APIs for Jio Engage and Jio Coupons using FastAPI with improved architecture, integrated SQLAlchemy ORM for database operations, and implemented Sqitch for version-controlled schema migrations.",
      "Built centralized authentication service to eliminate scattered service-level authentication, configured Emissary Ingress routing rules for header-based credential validation and product-specific URL authorization across analytics services.",
      "Developed cross-environment data pipeline transferring data from GCP to DMZ Kafka cluster via private IP tunnel, deploying FastAPI publisher using Podman and orchestrating file ingestion with Airflow scheduled jobs.",
      "Containerized services with Docker and Kubernetes, wrote Dockerfiles and manifests, configured Horizontal Pod Autoscaling for dynamic resource management, and set up NGINX reverse proxy routes for DMZ deployments.",
    ],
    technologies: [
      "FastAPI",
      "Python",
      "SQLAlchemy",
      "PostgreSQL",
      "GCP",
      "Kafka",
      "Docker",
      "Kubernetes",
      "Airflow",
      "Podman",
    ],
  },
];

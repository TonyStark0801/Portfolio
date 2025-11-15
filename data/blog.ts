export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  featured: boolean;
}

// Placeholder blog posts - you can add your own stories here
export const blogPosts: BlogPost[] = [
  {
    id: "building-session-encryption",
    title: "Building a Session-Based Encryption System for Financial APIs",
    excerpt:
      "Deep dive into implementing HKDF key derivation and AES-GCM encryption with per-session cryptographic isolation for API Gateway security.",
    date: "2025-01-15",
    readTime: "8 min read",
    category: "Security",
    tags: ["Encryption", "Spring Boot", "Security", "Fintech"],
    featured: true,
  },
  {
    id: "microservices-monitoring",
    title: "FlowTrace: Building a Custom Monitoring Platform with Annotation-Based Logging",
    excerpt:
      "How we built an enterprise monitoring solution using Java annotations to automatically capture and encrypt request/response data across microservices.",
    date: "2024-12-20",
    readTime: "10 min read",
    category: "Architecture",
    tags: ["Microservices", "Monitoring", "Java", "Spring Boot"],
    featured: true,
  },
  {
    id: "otp-service-design",
    title: "Designing a Scalable OTP Verification Service with Redis",
    excerpt:
      "Lessons learned while building an OTP service from scratch with Redis session management, rate limiting, and multi-channel delivery.",
    date: "2024-11-10",
    readTime: "6 min read",
    category: "Backend",
    tags: ["Redis", "Authentication", "Spring Boot", "System Design"],
    featured: false,
  },
  {
    id: "fastapi-migration",
    title: "Rewriting Analytics APIs: From Legacy to FastAPI",
    excerpt:
      "The journey of migrating Jio Engage and Jio Coupons backend APIs to FastAPI with improved architecture and SQLAlchemy ORM.",
    date: "2024-10-05",
    readTime: "7 min read",
    category: "Backend",
    tags: ["FastAPI", "Python", "Migration", "APIs"],
    featured: false,
  },
  {
    id: "kubernetes-autoscaling",
    title: "Implementing Horizontal Pod Autoscaling in Production",
    excerpt:
      "Practical guide to configuring HPA for dynamic resource management in Kubernetes deployments at scale.",
    date: "2024-09-15",
    readTime: "5 min read",
    category: "DevOps",
    tags: ["Kubernetes", "Docker", "DevOps", "Scaling"],
    featured: false,
  },
];

export const featuredPosts = blogPosts.filter((post) => post.featured);

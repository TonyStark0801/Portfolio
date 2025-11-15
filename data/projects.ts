export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  image?: string;
  highlights: string[];
}

export const projects: Project[] = [
  {
    id: "stockpulse",
    title: "StockPulse - Stock Monitoring Platform",
    description: "Full-stack stock monitoring platform with real-time market data and portfolio tracking",
    longDescription: "A comprehensive stock monitoring platform built with modern microservices architecture featuring real-time market data, portfolio tracking, and advanced authentication.",
    technologies: [
      "Next.js 15",
      "TypeScript",
      "Spring Boot",
      "PostgreSQL",
      "JWT",
      "Spring Security",
      "Vercel",
      "Capacitor",
    ],
    githubUrl: "https://github.com/TonyStark0801/stock-monitoring-backend",
    featured: true,
    highlights: [
      "Built responsive web interface using Next.js 15 with TypeScript, deployed on Vercel with CI/CD pipeline",
      "Integrated Capacitor for cross-platform iOS/Android deployment",
      "Implemented authentication backend with email/password registration, SMTP-based OTP verification, JWT tokens",
      "Designed microservices architecture with Spring Boot services for authentication, user profiles, market data, and API Gateway",
    ],
  },
  {
    id: "dvote",
    title: "DVote - Decentralized Voting System",
    description: "Blockchain-based voting system with Aadhaar authentication",
    longDescription: "A secure decentralized voting platform built on Ethereum blockchain with Aadhaar card authentication for identity verification.",
    technologies: [
      "Ethereum",
      "Solidity",
      "JavaScript",
      "Web3.js",
      "Smart Contracts",
    ],
    githubUrl: "https://github.com/TonyStark0801/Dvote",
    featured: true,
    highlights: [
      "Implemented blockchain-based voting for transparency and immutability",
      "Integrated Aadhaar authentication for secure voter verification",
      "Smart contracts for automated vote counting and results",
    ],
  },
  {
    id: "instantly",
    title: "Instantly - P2P File Sharing",
    description: "Peer-to-peer file sharing application with web portal",
    longDescription: "A fast and secure peer-to-peer file sharing application with Android app and web management portal.",
    technologies: ["Java", "Android", "CSS", "JavaScript", "P2P"],
    githubUrl: "https://github.com/TonyStark0801/Instantly",
    featured: false,
    highlights: [
      "Built Android application for direct peer-to-peer file transfers",
      "Created web portal for file management and sharing",
      "Implemented secure file transfer protocols",
    ],
  },
  {
    id: "otp-verification",
    title: "OTP Verification Service",
    description: "Backend service for OTP verification using Twilio and NestJS",
    longDescription: "A robust OTP verification backend service built with NestJS framework and Twilio integration for SMS delivery.",
    technologies: ["TypeScript", "NestJS", "Twilio", "REST API"],
    githubUrl: "https://github.com/TonyStark0801/Otp-verification",
    featured: false,
    highlights: [
      "Built with NestJS framework for scalable architecture",
      "Integrated Twilio for SMS delivery",
      "RESTful API design with rate limiting",
    ],
  },
  {
    id: "dsa",
    title: "DSA Solutions Repository",
    description: "Comprehensive collection of Data Structures and Algorithms solutions",
    longDescription: "A curated collection of topic-wise solved DSA questions with detailed descriptions and explanations.",
    technologies: ["Java", "Algorithms", "Data Structures"],
    githubUrl: "https://github.com/TonyStark0801/DSA",
    featured: false,
    highlights: [
      "Topic-wise organized solutions",
      "Detailed problem descriptions and approaches",
      "Optimized implementations with complexity analysis",
    ],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

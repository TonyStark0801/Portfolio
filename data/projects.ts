export type ProjectBadge = "Owner" | "In Development" | "College Project";

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  badge?: ProjectBadge;
  image?: string;
  highlights: string[];
}

export const projects: Project[] = [
  {
    id: "codejam",
    title: "CodeJam — Collaborative Coding Platform",
    description: "Real-time collaborative coding platform — code together, build faster",
    longDescription: "CodeJam is a full-stack collaborative coding platform built under the codejam-dev organisation, enabling developers to write and run code together in real time across 7 language runtimes.",
    technologies: ["Java 21", "Spring Boot 3.4", "TypeScript", "Next.js 15", "WebSockets"],
    githubUrl: "https://github.com/codejam-dev/codejam-backend",
    liveUrl: "https://codejam.shubham-dev.me/",
    featured: true,
    badge: "Owner",
    highlights: [
      "Built Java 21 / Spring Boot 3.4 backend with real-time session management for collaborative editing",
      "TypeScript + Next.js 15 frontend with live cursors and shared code synchronisation",
      "Sandboxed multi-user code execution across 7 language runtimes",
    ],
  },
  {
    id: "kairo",
    title: "KAIRO — Knowledge-Aware Interactive Runtime Operator",
    description: "Voice-first personal AI agent with local LLM reasoning and persistent memory — actively in development",
    longDescription: "KAIRO is a locally-running AI agent with voice input via Whisper STT (MLX), Ollama-backed LLM reasoning, Chroma vector memory, and macOS automation. It holds context across sessions and executes workflows — no cloud, no re-explaining yourself.",
    technologies: ["Python 3.11", "asyncio", "Whisper / MLX", "Ollama", "Chroma", "macOS"],
    githubUrl: "https://github.com/TonyStark0801/KAIRO",
    featured: true,
    badge: "In Development",
    highlights: [
      "Voice pipeline with Whisper STT via MLX for low-latency on-device transcription",
      "Ollama-backed local LLM with Chroma vector memory for persistent cross-session context",
      "macOS automation layer and session FSM for structured multi-turn workflows",
    ],
  },
  {
    id: "dvote",
    title: "DVote — Decentralized Voting System",
    description: "Blockchain-based voting system with Aadhaar authentication",
    longDescription: "A secure decentralized voting platform built on Ethereum blockchain with Aadhaar card authentication for identity verification.",
    technologies: ["Ethereum", "Solidity", "JavaScript", "Web3.js", "Smart Contracts"],
    githubUrl: "https://github.com/TonyStark0801/Dvote",
    featured: true,
    badge: "College Project",
    highlights: [
      "Implemented blockchain-based voting for transparency and immutability",
      "Integrated Aadhaar authentication for secure voter verification",
      "Smart contracts for automated vote counting and results",
    ],
  },
  {
    id: "instantly",
    title: "Instantly — P2P File Sharing",
    description: "Peer-to-peer file sharing Android app with a web management portal",
    longDescription: "A fast and secure peer-to-peer file sharing application with Android app and web management portal.",
    technologies: ["Java", "Android", "JavaScript", "CSS", "P2P"],
    githubUrl: "https://github.com/TonyStark0801/Instantly",
    featured: false,
    highlights: [
      "Built Android application for direct peer-to-peer file transfers",
      "Created web portal for file management and sharing",
      "Implemented secure file transfer protocols",
    ],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

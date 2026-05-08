"use client";

import { motion } from "framer-motion";

interface WorkItem {
  num: string;
  badges: { label: string; type: "cool" | "warm" | "live" | "neutral" }[];
  year: string;
  title: string;
  blurb: string;
  translation: string;
  stack: string[];
  links: { label: string; href: string }[];
}

const WORK: WorkItem[] = [
  {
    num: "01",
    badges: [
      { label: "Live", type: "live" },
      { label: "Owner", type: "warm" },
    ],
    year: "2024 →",
    title: "CodeJam — write code together, like a Google Doc but for engineers.",
    blurb:
      "A real-time collaborative coding platform with live cursors, shared sessions, and a sandboxed runner. Two people in different countries, one editor, code running on the server.",
    translation:
      "if you've ever wanted to pair-program with a friend at 2 AM without sharing a screen, this is that.",
    stack: ["Java", "Spring Boot", "WebSockets", "TypeScript", "Next.js"],
    links: [
      { label: "visit", href: "https://codejam.shubham-dev.me/" },
      { label: "github", href: "https://github.com/codejam-dev/codejam-backend" },
    ],
  },
  {
    num: "02",
    badges: [
      { label: "In development", type: "cool" },
      { label: "Owner", type: "warm" },
    ],
    year: "2025 →",
    title: "KAIRO — a personal AI agent that actually remembers what you're working on.",
    blurb:
      "Knowledge-Aware Interactive Runtime Operator. A long-running agent that holds context across workflows and acts on it — not a chatbot you re-explain yourself to every morning.",
    translation:
      "I got tired of re-explaining my projects to ChatGPT, so I'm building one that remembers.",
    stack: ["TypeScript", "Knowledge Graphs", "Runtime Systems", "AI"],
    links: [{ label: "github", href: "https://github.com/TonyStark0801/KAIRO" }],
  },
  {
    num: "03",
    badges: [{ label: "College project", type: "cool" }],
    year: "2023",
    title: "DVote — a voting system that nobody can rig, on Ethereum.",
    blurb:
      "Decentralized voting with Aadhaar-based identity check and blockchain-backed ballots. Final-year project that taught me how to think about adversarial systems.",
    translation:
      "if elections ran on this, you'd see your vote on the chain — and so would everyone else.",
    stack: ["Solidity", "Ethereum", "Web3.js", "Smart Contracts"],
    links: [{ label: "github", href: "https://github.com/TonyStark0801/Dvote" }],
  },
  {
    num: "04",
    badges: [],
    year: "2022",
    title: "Instantly — peer-to-peer file transfer, before AirDrop felt cross-platform.",
    blurb:
      "Android app + web portal that lets two devices send files directly without bouncing through a cloud. Faster than email, more honest than WhatsApp.",
    translation: "",
    stack: ["Java", "Android", "P2P", "JavaScript"],
    links: [{ label: "github", href: "https://github.com/TonyStark0801/Instantly" }],
  },
];

function badgeClass(type: WorkItem["badges"][0]["type"]) {
  if (type === "warm") return "w-badge warm";
  if (type === "live") return "w-badge live";
  return "w-badge";
}

export default function Projects() {
  return (
    <section id="work">
      <div className="chapter">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="chapter-tag">
            <span className="line" />
            <span>
              <span className="num">03</span>&nbsp; things I&apos;ve built
            </span>
          </div>

          <h2
            className="display"
            style={{ fontSize: "clamp(40px, 5vw, 68px)" }}
          >
            Selected <em>work.</em>
          </h2>

          <p
            style={{
              marginTop: "18px",
              maxWidth: "540px",
              fontSize: "16px",
              color: "var(--ink-2)",
              lineHeight: 1.7,
            }}
          >
            A few projects outside of work — coding tools, AI agents, voting
            systems. These are mine end-to-end.
          </p>
        </motion.div>

        <div className="work-list">
          {WORK.map((item, idx) => (
            <motion.article
              key={item.num}
              className="work-item"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: idx * 0.07 }}
            >
              <div className="w-num">{item.num}</div>

              <div className="w-body">
                <div className="w-eyebrow">
                  {item.badges.map((b) => (
                    <span key={b.label} className={badgeClass(b.type)}>
                      {b.label}
                    </span>
                  ))}
                  <span>{item.year}</span>
                </div>

                <h3 className="w-title">{item.title}</h3>
                <p className="w-blurb">{item.blurb}</p>
                {item.translation && (
                  <p className="w-translate">{item.translation}</p>
                )}

                <div className="w-stack">
                  {item.stack.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </div>

              <div className="w-cta">
                {item.links.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {l.label}&nbsp;<span className="arrow">↗</span>
                  </a>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

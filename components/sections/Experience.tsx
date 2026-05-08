"use client";

import { motion } from "framer-motion";

const EXPERIENCES = [
  {
    role: "Software Development Engineer — I",
    team: "jio blackrock asset management",
    teamSub: "· fintech",
    period: "Oct 2024 — present",
    location: "Mumbai, MH",
    achievements: [
      "Architected a session-based encryption system (HKDF + AES-GCM) at the API gateway — every financial call gets its own forward-secret key.",
      "Built file storage with magic-byte validation, EICAR scanning, and AES-GCM-on-disk for InfoSec compliance.",
      "Built FlowTrace — annotation-driven monitoring for payments, with RBAC + Azure 2FA portal.",
      "Shipped OTP service from scratch (SMS + Email) on Redis with TTL and rate limits.",
      "Daily NAV/TER ingestion from collaborator banks; archive to Azure Blob; notify ops.",
    ],
    stack: [
      "Spring Boot", "Quarkus", "Java", "PostgreSQL", "Redis",
      "Azure", "Docker", "Kubernetes", "Kafka", "NGINX",
    ],
  },
  {
    role: "Software Development Engineer — I",
    team: "jio matrix analytics",
    teamSub: "· data platform",
    period: "Oct 2023 — Sep 2024",
    location: "Mumbai, MH",
    achievements: [
      "Rewrote Jio Engage + Jio Coupons APIs in FastAPI; introduced SQLAlchemy + Sqitch migrations.",
      "Built a centralized auth service via Emissary Ingress — header-based credentials, product-scoped routes.",
      "Stood up a GCP→DMZ Kafka pipeline with Airflow and a Podman-deployed FastAPI publisher.",
      "Containerized services with HPA, NGINX reverse-proxy rules, and DMZ-friendly manifests.",
    ],
    stack: [
      "FastAPI", "Python", "SQLAlchemy", "PostgreSQL",
      "GCP", "Kafka", "Docker", "Kubernetes", "Airflow",
    ],
  },
];

export default function Experience() {
  return (
    <section id="exp">
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
              <span className="num">05</span>&nbsp; where I&apos;ve worked
            </span>
          </div>

          <h2
            className="display"
            style={{ fontSize: "clamp(40px, 5vw, 68px)" }}
          >
            Two teams,
            <br />
            one company, <em>1.2 years.</em>
          </h2>

          <p
            style={{
              marginTop: "18px",
              maxWidth: "600px",
              fontSize: "16px",
              color: "var(--ink-2)",
              lineHeight: 1.7,
            }}
          >
            Both at Jio Platforms — different floors, different codebases,
            similar instinct: build it like the world depends on it, because
            for fintech, it kind of does.
          </p>
        </motion.div>

        <div className="exp-list">
          {EXPERIENCES.map((exp, i) => (
            <motion.article
              key={exp.team}
              className="exp"
              initial={{ y: 24, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="exp-head">
                <div>
                  <div className="exp-role">{exp.role}</div>
                  <div className="exp-team">
                    {exp.team}
                    <span className="at">{exp.teamSub}</span>
                  </div>
                </div>
                <div className="exp-when">
                  <b>{exp.period}</b>
                  {exp.location}
                </div>
              </div>

              <ul>
                {exp.achievements.map((a, j) => (
                  <li key={j}>{a}</li>
                ))}
              </ul>

              <div className="exp-stack">
                {exp.stack.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

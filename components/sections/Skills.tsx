"use client";

import { motion } from "framer-motion";

const CLUSTERS = [
  {
    cls: "c-lang",
    label: "Languages",
    sub: "/ what I write in",
    pills: ["Java", "Python", "TypeScript", "JavaScript", "SQL"],
  },
  {
    cls: "c-be",
    label: "Backend",
    sub: "/ services & APIs",
    pills: ["Spring Boot", "Quarkus", "FastAPI", "Hibernate", "REST", "Microservices"],
  },
  {
    cls: "c-data",
    label: "Data",
    sub: "/ stores & caches",
    pills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "ClickHouse"],
  },
  {
    cls: "c-infra",
    label: "Infra",
    sub: "/ how it runs",
    pills: ["Docker", "Kubernetes", "Kafka", "NGINX", "Azure", "GCP"],
  },
  {
    cls: "c-sec",
    label: "Security",
    sub: "/ keeping it safe",
    pills: ["AES-GCM", "HKDF", "JWT", "RBAC", "Azure 2FA"],
  },
  {
    cls: "c-fe",
    label: "Frontend",
    sub: "/ when I have to",
    pills: ["React", "Next.js", "TypeScript", "Tailwind"],
  },
];

export default function Skills() {
  return (
    <section id="tools">
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
              <span className="num">04</span>&nbsp; tools I reach for
            </span>
          </div>

          <h2
            className="display"
            style={{ fontSize: "clamp(40px, 5vw, 64px)" }}
          >
            My <em>toolkit,</em>
            <br />
            by neighbourhood.
          </h2>

          <p
            style={{
              marginTop: "18px",
              color: "var(--ink-2)",
              maxWidth: "520px",
              fontSize: "15.5px",
              lineHeight: 1.7,
            }}
          >
            Not every tool every day. These are grouped by the kind of problem
            they solve, in roughly the order I reach for them.
          </p>
        </motion.div>

        <motion.div
          className="clusters"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          {CLUSTERS.map((c, i) => (
            <motion.div
              key={c.label}
              className={`cluster ${c.cls}`}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
            >
              <div className="c-head">
                <span className="dot" />
                <span>{c.label}</span>
                <span className="lbl">{c.sub}</span>
              </div>
              <div className="pills">
                {c.pills.map((p) => (
                  <span key={p} className="pill">
                    {p}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

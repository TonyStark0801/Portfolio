"use client";

import { Fragment } from "react";
import { motion } from "framer-motion";

const STEPS = [
  {
    glyph: "①",
    title: "You tap pay",
    desc: "request hits a public API",
    stack: ["NGINX", "API Gateway", "Spring Boot"],
  },
  {
    glyph: "②",
    title: "I authenticate you",
    desc: "session keys + OTP, no replays allowed",
    stack: ["HKDF", "AES-GCM", "JWT", "Redis"],
  },
  {
    glyph: "③",
    title: "I move the money",
    desc: "through CAMS, banks, ledger",
    stack: ["Spring Boot", "Quarkus", "Postgres", "Kafka"],
  },
  {
    glyph: "④",
    title: "I log everything",
    desc: "every hop, encrypted, replayable",
    stack: ["FlowTrace", "OTel", "Azure Blob"],
  },
  {
    glyph: "⑤",
    title: "You see \"done\"",
    desc: "typically inside 800 ms",
    stack: ["WebHook", "Email/SMS", "Zoho"],
  },
];

export default function WhatIDo() {
  return (
    <section id="what">
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
              <span className="num">02</span>&nbsp; what I actually do
            </span>
          </div>

          <h2 className="display" style={{ fontSize: "clamp(40px, 5vw, 68px)", maxWidth: "14ch" }}>
            You tap pay.<br />
            <em>I make sure</em> nothing weird<br />
            happens in the middle.
          </h2>

          <p
            style={{
              marginTop: "24px",
              maxWidth: "560px",
              fontSize: "16.5px",
              color: "var(--ink-2)",
              lineHeight: 1.7,
            }}
          >
            Most of my work is invisible. When you buy a mutual fund or move
            money inside an app, a dozen small services need to agree, encrypt,
            validate, retry, and log the whole thing. Here&apos;s the story,
            simplified.{" "}
            <span
              style={{
                display: "block",
                marginTop: "8px",
                fontFamily: "var(--font-mono-stack)",
                fontSize: "12px",
                color: "var(--dim)",
              }}
            >
              ↳ hover any step to see the actual stack behind it
            </span>
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flow"
        >
          <div className="flow-row">
            {STEPS.map((step, i) => (
              <Fragment key={step.glyph}>
                <div className="flow-step">
                  <div className="glyph">{step.glyph}</div>
                  <h4>{step.title}</h4>
                  <p>{step.desc}</p>
                  <div className="stack">
                    {step.stack.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                </div>
                {i < STEPS.length - 1 && <div className="flow-conn" />}
              </Fragment>
            ))}
          </div>

          <div className="flow-foot">
            <div>
              <b>throughput</b> · ~thousands of transactions/day across the platform
            </div>
            <div>
              <b>compliance</b> · InfoSec, encryption-at-rest, replay-safe
            </div>
            <div>
              <b>uptime</b> · 99.95%+
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

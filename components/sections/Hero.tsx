"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/data/personal";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        paddingTop: "90px",
        paddingBottom: "60px",
        minHeight: "calc(100vh - 60px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div className="chapter" style={{ paddingTop: 0, paddingBottom: 0 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 1fr",
            gap: "80px",
            alignItems: "center",
          }}
          className="hero-grid"
        >
          {/* LEFT — headline */}
          <div>
            <motion.div
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.55, ease }}
            >
              <div className="chapter-tag">
                <span className="line" />
                <span>
                  <span className="num">01</span>&nbsp; the introduction
                </span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.55, ease, delay: 0.1 }}
              className="display hero-display"
            >
              Hi, I&apos;m
              <span className="line2">
                <em>Shubham.</em>
              </span>
              <span className="line3 quiet">I write the code between</span>
              <span className="line3 quiet">&ldquo;tap pay&rdquo; and &ldquo;done&rdquo; —</span>
              <span className="line3 quiet">the part that can&apos;t fail.</span>
            </motion.h1>

            <motion.p
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.55, ease, delay: 0.2 }}
              style={{
                marginTop: "36px",
                maxWidth: "540px",
                fontSize: "17px",
                color: "var(--ink-2)",
                lineHeight: 1.7,
              }}
            >
              I&apos;m a backend engineer who builds the systems people never
              see but trust every time they tap pay. Encryption, payments,
              monitoring — the quiet machinery underneath fintech. Right now
              that&apos;s at{" "}
              <b style={{ color: "var(--ink)", fontWeight: 500 }}>
                Jio Platforms
              </b>
              ; a few thousand lines of code that pretend to be invisible.
            </motion.p>

            <motion.div
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.55, ease, delay: 0.3 }}
              className="hero-meta"
            >
              <div>
                <span className="pulse" />
                <b>now</b> SDE-I @ Jio Platforms
              </div>
              <div>
                <b>based</b> Mumbai, India
              </div>
              <div>
                <b>writing</b> Spring Boot, FastAPI, K8s
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.55, ease, delay: 0.4 }}
              style={{ marginTop: "36px", display: "flex", gap: "14px", flexWrap: "wrap" }}
            >
              <a className="btn btn-warm" href="#work">
                See what I&apos;ve built →
              </a>
              <a
                className="btn btn-ghost"
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Download résumé
              </a>
            </motion.div>
          </div>

          {/* RIGHT — now card */}
          <motion.aside
            initial={{ x: 40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease, delay: 0.45 }}
            className="now-card"
          >
            <div className="now-head">
              <span className="dot" />
              Right now / May 2026
            </div>
            <div className="now-title">
              Building CodeJam v2 — a collaborative coding platform where
              two engineers share one editor, live.
            </div>
            <div className="now-where">personal project · codejam-dev</div>
            <ul className="now-list">
              <li>
                Spring Boot 3.4 + Java 21 backend with real-time session
                management
              </li>
              <li>Next.js 15 frontend with live cursors and shared state</li>
              <li>
                Sandboxed code execution across 7 language runtimes
              </li>
            </ul>
          </motion.aside>
        </div>
      </div>

      <style>{`
        @media (max-width: 880px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </section>
  );
}

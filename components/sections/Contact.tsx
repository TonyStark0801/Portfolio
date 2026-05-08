"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/data/personal";

const CARDS = [
  {
    eyebrow: "// best for everything",
    main: "Send an email",
    sub: "Recruiting, freelance, fintech ideas, or pair-debugging at 1 AM. I usually reply inside 24 hours.",
    action: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
  },
  {
    eyebrow: "// best for hiring",
    main: "Find me on LinkedIn",
    sub: "For the formal version of all this — résumé, endorsements, and the polite-corporate \"open to work.\"",
    action: "linkedin.com/in/shubhammishra007",
    href: personalInfo.linkedin,
  },
  {
    eyebrow: "// best for engineers",
    main: "Read my code",
    sub: "Side projects, dotfiles, and the occasional 200-commit weekend. The honest version of \"what I work with.\"",
    action: "github.com/TonyStark0801",
    href: personalInfo.github,
  },
];

export default function Contact() {
  return (
    <section id="contact" style={{ paddingBottom: "140px" }}>
      <div className="chapter" style={{ paddingBottom: 0 }}>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="chapter-tag">
            <span className="line" />
            <span>
              <span className="num">07</span>&nbsp; say hi
            </span>
          </div>

          <h2
            className="display"
            style={{ fontSize: "clamp(48px, 7vw, 92px)", maxWidth: "14ch" }}
          >
            If any of this <em>resonated,</em>
            <br />
            my inbox is open.
          </h2>
        </motion.div>

        <div className="contact-grid">
          {CARDS.map((card, i) => (
            <motion.a
              key={card.main}
              className="contact-card"
              href={card.href}
              target={card.href.startsWith("mailto") || card.href.startsWith("tel") ? undefined : "_blank"}
              rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="ct-eyebrow">{card.eyebrow}</div>
              <div className="ct-main">{card.main}</div>
              <div className="ct-sub">{card.sub}</div>
              <div className="ct-row">
                <span>{card.action}</span>
                <span className="arrow">↗</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

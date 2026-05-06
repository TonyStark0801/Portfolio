"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiArrowDown } from "react-icons/fi";
import { personalInfo } from "@/data/personal";

/* ── animation variants ── */
const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};
const item = {
  hidden: { y: 24, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const } },
};
const codePane = {
  hidden: { x: 40, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const, delay: 0.4 } },
};

/* ── count-up hook ── */
function useCountUp(target: number, duration = 1400, start = false) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    const startTime = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return value;
}

/* ── stat item ── */
const RAW_STATS = [
  { raw: 1.2, suffix: "+ yrs",    label: "Experience",   float: true },
  { raw: 15,  suffix: "+",        label: "Projects",      float: false },
  { raw: 20,  suffix: "+",        label: "Technologies",  float: false },
  { raw: 1000, suffix: "+",       label: "Commits",       float: false },
];

function StatCounter({ stat, go }: { stat: typeof RAW_STATS[0]; go: boolean }) {
  const num = useCountUp(stat.float ? 12 : stat.raw, 1400, go);
  const display = stat.float ? `${(num / 10).toFixed(1)}` : String(num);
  return (
    <div className="stat-item flex flex-col gap-0.5">
      <span className="text-2xl font-bold text-primary leading-none">
        {display}
        <span className="text-base font-normal text-accent">{stat.suffix}</span>
      </span>
      <span className="text-[0.7rem] font-mono text-muted-foreground tracking-wider uppercase">
        {stat.label}
      </span>
    </div>
  );
}

/* ── code window lines ── */
const CODE_LINES = [
  { t: "cmt",  v: "// shubham.config.ts" },
  { t: "blank" },
  { t: "kw",   v: "const",  after: { t: "var", v: " config" }, rest: { t: "brk", v: " = {" } },
  { t: "indent", depth: 1, kv: { key: "role",      val: `"SDE-I @ Jio Platforms"`,   vc: "str" } },
  { t: "indent", depth: 1, kv: { key: "stack",     val: `["Spring Boot", "FastAPI", "K8s"]`, vc: "str" } },
  { t: "indent", depth: 1, kv: { key: "domain",    val: `"Fintech · Microservices"`, vc: "str" } },
  { t: "indent", depth: 1, kv: { key: "available", val: "true",                      vc: "bool" } },
  { t: "brk",   v: "};" },
  { t: "blank" },
  { t: "kw",   v: "export default", after2: { t: "var", v: " config" } },
];

function CodeWindow() {
  return (
    <div className="code-win w-full max-w-lg">
      <div className="code-header">
        <span className="code-dot r" />
        <span className="code-dot y" />
        <span className="code-dot g" />
        <span className="code-fname">shubham.config.ts</span>
      </div>
      <pre className="code-body">
        {CODE_LINES.map((line, i) => {
          if (line.t === "blank") return <div key={i}>&nbsp;</div>;
          if (line.t === "cmt")   return <div key={i}><span className="c-cmt">{line.v}</span></div>;
          if (line.t === "brk")   return <div key={i}><span className="c-brk">{line.v}</span></div>;

          if (line.t === "kw") {
            return (
              <div key={i}>
                <span className="c-kw">{line.v}</span>
                {line.after  && <span className="c-var">{line.after.v}</span>}
                {line.after2 && <span className="c-var">{line.after2.v}</span>}
                {line.rest   && <span className="c-brk">{line.rest.v}</span>}
              </div>
            );
          }

          if (line.t === "indent" && line.kv) {
            const { key, val, vc } = line.kv;
            const indent = "  ".repeat(line.depth ?? 1);
            const colorClass = vc === "str" ? "c-str" : vc === "bool" ? "c-bool" : "c-var";
            return (
              <div key={i}>
                <span>{indent}</span>
                <span className="c-key">{key}</span>
                <span className="c-brk">: </span>
                <span className={colorClass}>{val}</span>
                <span className="c-brk">,</span>
              </div>
            );
          }

          return null;
        })}
      </pre>
    </div>
  );
}

/* ── main component ── */
export default function Hero() {
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setStatsVisible(true); obs.disconnect(); } },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* background orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
        <div className="absolute -top-60 -left-60 w-[500px] h-[500px] rounded-full bg-primary/8 blur-3xl" />
        <div className="absolute -bottom-60 -right-40 w-[420px] h-[420px] rounded-full bg-accent/6 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] rounded-full bg-primary/3 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10 w-full">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          {/* ── LEFT ── */}
          <div className="flex flex-col gap-7">
            {/* label */}
            <motion.p
              variants={item}
              className="flex items-center gap-2 font-mono text-[0.7rem] tracking-[0.14em] uppercase text-primary"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse inline-block" />
              SDE-I &nbsp;·&nbsp; Jio Platforms Limited
            </motion.p>

            {/* name */}
            <motion.div variants={item}>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[0.92] tracking-[-0.03em]">
                <span className="text-foreground">Shubham</span>
                <br />
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                  Mishra
                </span>
              </h1>
            </motion.div>

            {/* role */}
            <motion.p
              variants={item}
              className="font-mono text-[0.8rem] tracking-[0.06em] text-muted-foreground uppercase"
            >
              Backend Architect &nbsp;/&nbsp; Full-Stack Engineer &nbsp;/&nbsp; Microservices
            </motion.p>

            {/* bio */}
            <motion.p
              variants={item}
              className="text-base text-muted-foreground leading-relaxed max-w-lg"
            >
              {personalInfo.bio}
            </motion.p>

            {/* stats */}
            <motion.div
              variants={item}
              ref={statsRef}
              className="grid grid-cols-4 gap-6 pt-2"
            >
              {RAW_STATS.map((s) => (
                <StatCounter key={s.label} stat={s} go={statsVisible} />
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div variants={item} className="flex flex-wrap gap-3 pt-1">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-white text-sm font-medium hover:bg-primary-dark transition-colors"
              >
                <FiMail size={15} />
                Get in Touch
              </a>
              <a
                href={personalInfo.resumeUrl}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border text-sm font-medium text-muted-foreground hover:border-primary/40 hover:text-foreground transition-colors"
              >
                <FiDownload size={15} />
                Resume
              </a>
            </motion.div>

            {/* socials */}
            <motion.div variants={item} className="flex items-center gap-3">
              {[
                { href: personalInfo.github,            icon: FiGithub,   label: "GitHub"   },
                { href: personalInfo.linkedin,          icon: FiLinkedin, label: "LinkedIn"  },
                { href: `mailto:${personalInfo.email}`, icon: FiMail,     label: "Email"     },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2.5 rounded-lg border border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-primary hover:bg-card-hover transition-all"
                >
                  <Icon size={18} />
                </a>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT — code window ── */}
          <motion.div
            variants={codePane}
            className="relative flex items-center justify-center"
          >
            {/* subtle glow behind window */}
            <div className="absolute inset-0 bg-primary/5 rounded-2xl blur-2xl scale-95" aria-hidden />
            <div className="relative w-full">
              <CodeWindow />
              {/* floating chip top-right */}
              <motion.div
                animate={{ y: [0, -7, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-5 -right-6 px-3 py-1.5 bg-card border border-border rounded-lg shadow-lg"
              >
                <span className="font-mono text-xs text-primary tracking-wide">Spring Boot</span>
              </motion.div>
              {/* floating chip bottom-left */}
              <motion.div
                animate={{ y: [0, 7, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
                className="absolute -bottom-5 -left-6 px-3 py-1.5 bg-card border border-border rounded-lg shadow-lg"
              >
                <span className="font-mono text-xs text-accent tracking-wide">Kubernetes</span>
              </motion.div>
              {/* floating chip middle-right */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 2.1 }}
                className="absolute top-1/2 -right-10 -translate-y-1/2 px-3 py-1.5 bg-card border border-border rounded-lg shadow-lg"
              >
                <span className="font-mono text-xs text-muted-foreground tracking-wide">FastAPI</span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.a
            href="#experience"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="font-mono text-[0.65rem] tracking-[0.12em] uppercase">Scroll</span>
            <FiArrowDown size={16} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

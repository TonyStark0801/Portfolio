"use client";

import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { experiences } from "@/data/experience";

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.18 } },
};
const card = {
  hidden: { y: 32, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* bg orb */}
      <div className="absolute -top-40 -left-40 w-[420px] h-[420px] rounded-full bg-accent/5 blur-3xl pointer-events-none" aria-hidden />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* section label + heading — left-aligned */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="section-label">Experience</span>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            Where I&apos;ve<br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Worked
            </span>
          </h2>
        </motion.div>

        {/* cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-col gap-6"
        >
          {experiences.map((exp) => (
            <motion.div
              key={exp.id}
              variants={card}
              className="card-base p-7 lg:p-9 group"
            >
              {/* header row */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                <div>
                  {/* role */}
                  <h3 className="text-xl font-bold text-foreground mb-1 leading-snug">
                    {exp.role}
                  </h3>
                  {/* company */}
                  <p className="font-mono text-[0.8rem] tracking-[0.06em] text-primary uppercase mb-0.5">
                    {exp.company}
                  </p>
                  {/* team */}
                  {exp.team && (
                    <p className="font-mono text-[0.72rem] tracking-[0.04em] text-accent/80">
                      {exp.team}
                    </p>
                  )}
                </div>

                {/* period + location */}
                <div className="flex flex-col items-start sm:items-end gap-1 shrink-0">
                  <span className="font-mono text-[0.72rem] tracking-[0.06em] text-muted-foreground bg-muted/50 border border-border rounded-md px-3 py-1 whitespace-nowrap">
                    {exp.period}
                  </span>
                  {exp.location && (
                    <span className="font-mono text-[0.68rem] text-muted-foreground/70">
                      {exp.location}
                    </span>
                  )}
                </div>
              </div>

              {/* achievements */}
              <ul className="space-y-2.5 mb-6">
                {exp.achievements.map((a, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-[7px] w-1 h-1 rounded-full bg-primary shrink-0" />
                    <span className="text-sm text-muted-foreground leading-relaxed">{a}</span>
                  </li>
                ))}
              </ul>

              {/* tech chips */}
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span key={tech} className="chip text-[0.7rem]">
                    {tech}
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

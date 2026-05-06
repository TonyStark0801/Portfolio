"use client";

import { motion } from "framer-motion";
import { skillsData } from "@/data/skills";

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};
const row = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* subtle bg orbs */}
      <div className="absolute top-1/4 left-1/3 w-[380px] h-[380px] rounded-full bg-accent/4 blur-3xl pointer-events-none" aria-hidden />
      <div className="absolute bottom-1/4 right-1/4 w-[320px] h-[320px] rounded-full bg-primary/4 blur-3xl pointer-events-none" aria-hidden />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* heading */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="section-label">Skills</span>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            Tech I Work<br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              With
            </span>
          </h2>
        </motion.div>

        {/* categories */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="flex flex-col gap-10"
        >
          {skillsData.map((cat) => (
            <motion.div key={cat.category} variants={row}>
              {/* category label */}
              <p className="font-mono text-[0.68rem] tracking-[0.14em] uppercase text-muted-foreground mb-3">
                // {cat.category}
              </p>
              {/* chip grid */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <motion.span
                    key={skill.name}
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.15 }}
                    className="chip"
                  >
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { projects, Project, ProjectBadge } from "@/data/projects";

const BADGE_STYLES: Record<ProjectBadge, string> = {
  "Owner":           "text-primary  bg-primary/10  border-primary/25",
  "In Development":  "text-amber-400 bg-amber-400/10 border-amber-400/25",
  "College Project": "text-accent   bg-accent/10   border-accent/25",
};

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};
const cardAnim = {
  hidden: { y: 24, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
};

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      variants={cardAnim}
      layout
      className="card-base p-6 flex flex-col gap-4 group relative overflow-hidden"
    >
      {/* top row: badge left, icon links right */}
      <div className="flex items-center justify-between gap-2">
        {project.badge ? (
          <span className={`font-mono text-[0.6rem] tracking-[0.1em] uppercase border rounded-md px-2 py-0.5 ${BADGE_STYLES[project.badge]}`}>
            {project.badge}
          </span>
        ) : (
          <span />
        )}
        <div className="flex items-center gap-1">
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub"
              className="p-1.5 rounded-md text-muted-foreground hover:text-primary hover:bg-card-hover transition-colors">
              <FiGithub size={15} />
            </a>
          )}
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label="Live site"
              className="p-1.5 rounded-md text-muted-foreground hover:text-primary hover:bg-card-hover transition-colors">
              <FiExternalLink size={15} />
            </a>
          )}
        </div>
      </div>

      {/* title */}
      <div>
        <h3 className="text-base font-bold text-foreground leading-snug group-hover:text-primary transition-colors">
          {project.title}
        </h3>
      </div>

      {/* description */}
      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
        {project.description}
      </p>

      {/* highlights */}
      {project.highlights?.length > 0 && (
        <ul className="space-y-1.5">
          {project.highlights.slice(0, 2).map((h, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="mt-[7px] w-1 h-1 rounded-full bg-primary/60 shrink-0" />
              <span className="text-xs text-muted-foreground leading-relaxed line-clamp-2">{h}</span>
            </li>
          ))}
        </ul>
      )}

      {/* spacer */}
      <div className="flex-1" />

      {/* footer row: tech chips only */}
      <div className="flex items-end justify-between gap-3">
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 4).map((tech) => (
            <span key={tech} className="chip text-[0.65rem] px-2 py-0.5">
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="font-mono text-[0.65rem] text-muted-foreground/60 self-center">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>
        <div>{/* links moved to top row */}
        </div>
      </div>

      {/* hover shimmer */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </motion.div>
  );
}

type Filter = "all" | "featured";

export default function Projects() {
  const [filter, setFilter] = useState<Filter>("featured");

  const visible = filter === "featured" ? projects.filter((p) => p.featured) : projects;

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="absolute -top-20 -right-40 w-[400px] h-[400px] rounded-full bg-primary/4 blur-3xl pointer-events-none" aria-hidden />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* heading */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <span className="section-label">Projects</span>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              Things I&apos;ve<br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Built
              </span>
            </h2>

            {/* filter pills */}
            <div className="flex items-center gap-2 self-start sm:self-auto">
              {(["featured", "all"] as Filter[]).map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`font-mono text-[0.72rem] tracking-[0.06em] uppercase px-3.5 py-1.5 rounded-md border transition-colors ${
                    filter === f
                      ? "bg-primary/10 border-primary/30 text-primary"
                      : "border-border text-muted-foreground hover:border-primary/20 hover:text-foreground"
                  }`}
                >
                  {f === "featured" ? "Featured" : "All"}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            variants={container}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {visible.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* github CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 flex justify-center"
        >
          <a
            href="https://github.com/TonyStark0801"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border font-mono text-sm text-muted-foreground hover:border-primary/40 hover:text-foreground transition-colors"
          >
            <FiGithub size={16} />
            More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}

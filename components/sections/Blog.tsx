"use client";

import { motion } from "framer-motion";
import { FiArrowRight, FiClock } from "react-icons/fi";
import { blogPosts } from "@/data/blog";

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};
const card = {
  hidden: { y: 24, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
};

/* show at most 3 featured posts */
const featured = blogPosts.filter((p) => p.featured).slice(0, 3);

export default function Blog() {
  return (
    <section id="blog" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/3 left-1/3 w-[360px] h-[360px] rounded-full bg-primary/4 blur-3xl pointer-events-none" aria-hidden />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* heading */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="section-label">Writing</span>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            Developer<br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Stories
            </span>
          </h2>
        </motion.div>

        {featured.length > 0 ? (
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {featured.map((post) => (
              <motion.article
                key={post.id}
                variants={card}
                className="card-base p-6 flex flex-col gap-4 group cursor-pointer relative overflow-hidden"
              >
                {/* category */}
                <span className="font-mono text-[0.65rem] tracking-[0.1em] uppercase text-accent">
                  {post.category}
                </span>

                {/* title */}
                <h3 className="text-base font-bold text-foreground leading-snug group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>

                {/* excerpt */}
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 flex-1">
                  {post.excerpt}
                </p>

                {/* footer */}
                <div className="flex items-center justify-between pt-1">
                  <span className="flex items-center gap-1.5 font-mono text-[0.65rem] text-muted-foreground">
                    <FiClock size={11} />
                    {post.readTime}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-primary font-medium group-hover:gap-2 transition-all">
                    Read <FiArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>

                <div className="absolute inset-0 bg-gradient-to-br from-primary/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </motion.article>
            ))}
          </motion.div>
        ) : (
          /* coming soon */
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="card-base px-8 py-12 flex flex-col items-start gap-3">
              <p className="font-mono text-[0.68rem] tracking-[0.12em] uppercase text-muted-foreground">
                // coming_soon
              </p>
              <p className="text-lg font-semibold text-foreground">
                In-depth articles on the way
              </p>
              <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
                Planning to write about session-based encryption, Kafka pipeline design,
                microservices observability, and lessons from building fintech systems at Jio.
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}

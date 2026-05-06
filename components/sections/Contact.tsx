"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiMapPin, FiGithub, FiLinkedin, FiSend } from "react-icons/fi";
import { personalInfo } from "@/data/personal";

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.14 } },
};
const item = {
  hidden: { y: 24, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const } },
};

const INPUT =
  "w-full px-4 py-3 bg-background border border-border rounded-lg text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-colors";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const link = `mailto:${personalInfo.email}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    )}`;
    window.location.href = link;
    setSent(true);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute -top-20 -right-40 w-[380px] h-[380px] rounded-full bg-accent/5 blur-3xl pointer-events-none" aria-hidden />
      <div className="absolute -bottom-20 -left-40 w-[340px] h-[340px] rounded-full bg-primary/4 blur-3xl pointer-events-none" aria-hidden />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* heading */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="section-label">Contact</span>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            Let&apos;s Work<br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Together
            </span>
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-5 gap-10"
        >
          {/* ── left info column (2/5) ── */}
          <motion.div variants={item} className="lg:col-span-2 flex flex-col gap-6">
            <p className="text-muted-foreground leading-relaxed text-sm max-w-sm">
              Open to interesting problems, senior backend roles, and fintech projects.
              Drop a line — I typically respond within 24 hours.
            </p>

            {/* contact details */}
            <div className="flex flex-col gap-3">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-3 card-base px-4 py-3 group"
              >
                <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <FiMail size={16} className="text-primary" />
                </div>
                <div>
                  <p className="font-mono text-[0.65rem] tracking-[0.1em] uppercase text-muted-foreground mb-0.5">Email</p>
                  <p className="text-sm text-foreground group-hover:text-primary transition-colors">{personalInfo.email}</p>
                </div>
              </a>

              <div className="flex items-center gap-3 card-base px-4 py-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <FiMapPin size={16} className="text-primary" />
                </div>
                <div>
                  <p className="font-mono text-[0.65rem] tracking-[0.1em] uppercase text-muted-foreground mb-0.5">Location</p>
                  <p className="text-sm text-foreground">{personalInfo.location}</p>
                </div>
              </div>
            </div>

            {/* socials */}
            <div>
              <p className="font-mono text-[0.65rem] tracking-[0.1em] uppercase text-muted-foreground mb-3">// Find me on</p>
              <div className="flex gap-3">
                {[
                  { href: personalInfo.github,   Icon: FiGithub,   label: "GitHub"   },
                  { href: personalInfo.linkedin,  Icon: FiLinkedin, label: "LinkedIn"  },
                ].map(({ href, Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="p-3 rounded-lg card-base text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── right form column (3/5) ── */}
          <motion.div variants={item} className="lg:col-span-3">
            <form
              onSubmit={onSubmit}
              className="card-base p-7 flex flex-col gap-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="font-mono text-[0.7rem] tracking-[0.08em] uppercase text-muted-foreground">Name</label>
                  <input id="name" name="name" type="text" required value={form.name} onChange={onChange} placeholder="Your name" className={INPUT} />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="font-mono text-[0.7rem] tracking-[0.08em] uppercase text-muted-foreground">Email</label>
                  <input id="email" name="email" type="email" required value={form.email} onChange={onChange} placeholder="you@example.com" className={INPUT} />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="subject" className="font-mono text-[0.7rem] tracking-[0.08em] uppercase text-muted-foreground">Subject</label>
                <input id="subject" name="subject" type="text" required value={form.subject} onChange={onChange} placeholder="What's this about?" className={INPUT} />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="font-mono text-[0.7rem] tracking-[0.08em] uppercase text-muted-foreground">Message</label>
                <textarea id="message" name="message" required value={form.message} onChange={onChange} rows={5} placeholder="Tell me about your project or opportunity..." className={`${INPUT} resize-none`} />
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-primary text-white text-sm font-medium hover:bg-primary-dark transition-colors"
              >
                <FiSend size={15} />
                {sent ? "Message opened in mail client" : "Send Message"}
              </button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

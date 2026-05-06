"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { personalInfo } from "@/data/personal";

const navLinks = [
  { name: "Experience", href: "#experience" },
  { name: "Projects",   href: "#projects"   },
  { name: "Skills",     href: "#skills"     },
  { name: "Contact",    href: "#contact"    },
];

export default function Navbar() {
  const [scrolled, setScrolled]         = useState(false);
  const [mobileOpen, setMobileOpen]     = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* close mobile menu on resize to desktop */
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMobileOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border/60 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* brand */}
          <Link href="#home" className="group flex items-center gap-1.5">
            <span
              className="font-display text-xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
              style={{ fontFamily: "var(--font-syne), sans-serif" }}
            >
              SM.
            </span>
          </Link>

          {/* desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href}>
                <span className="px-4 py-1.5 rounded-md font-mono text-[0.78rem] tracking-[0.04em] text-muted-foreground hover:text-foreground hover:bg-white/4 transition-colors">
                  {link.name}
                </span>
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={personalInfo.resumeUrl}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[0.75rem] tracking-[0.06em] text-muted-foreground hover:text-foreground transition-colors"
            >
              Resume
            </a>
            <a
              href="#contact"
              className="px-4 py-1.5 rounded-lg bg-primary text-white font-mono text-[0.75rem] tracking-[0.04em] hover:bg-primary-dark transition-colors"
            >
              Hire me
            </a>
          </div>

          {/* mobile hamburger */}
          <button
            aria-label="Toggle menu"
            className="md:hidden p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-card-hover transition-colors"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </div>

      {/* mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-card border-t border-border overflow-hidden"
          >
            <div className="px-6 py-5 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="py-2.5 font-mono text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-border mt-2 flex gap-3">
                <a
                  href={personalInfo.resumeUrl}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center py-2 rounded-lg border border-border font-mono text-xs text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors"
                >
                  Resume
                </a>
                <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="flex-1 text-center py-2 rounded-lg bg-primary font-mono text-xs text-white hover:bg-primary-dark transition-colors"
                >
                  Hire me
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

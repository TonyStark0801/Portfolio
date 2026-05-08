"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { personalInfo } from "@/data/personal";

const navLinks = [
  { name: "What I do",   href: "#what"    },
  { name: "Work",        href: "#work"    },
  { name: "Tools",       href: "#tools"   },
  { name: "Experience",  href: "#exp"     },
  { name: "Lately",      href: "#lately"  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 760) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        background: "rgba(11,20,16,0.72)",
        borderBottom: "1px solid var(--line)",
      }}
    >
      <div className="nav-inner">
        {/* brand */}
        <a href="#hero" style={{ display: "flex", alignItems: "baseline", gap: "10px" }}>
          <span className="brand-mark">Shubham Mishra</span>
          <span className="brand-role">/ engineer · mumbai</span>
        </a>

        {/* desktop links */}
        <div className="nav-desktop" style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link">
              {link.name}
            </a>
          ))}
          <a href="#contact" className="nav-cta" style={{ marginLeft: "8px" }}>
            Say hi →
          </a>
        </div>

        {/* mobile hamburger */}
        <button
          aria-label="Toggle menu"
          onClick={() => setMobileOpen((v) => !v)}
          style={{
            display: "none",
            padding: "8px",
            background: "transparent",
            border: "none",
            color: "var(--ink)",
            cursor: "pointer",
          }}
          className="mobile-hamburger"
        >
          {mobileOpen ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>
      </div>

      {/* mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22 }}
            style={{
              overflow: "hidden",
              background: "var(--surface)",
              borderTop: "1px solid var(--line)",
            }}
          >
            <div style={{ padding: "16px 24px", display: "flex", flexDirection: "column", gap: "4px" }}>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  style={{
                    padding: "10px 0",
                    fontFamily: "var(--font-mono-stack)",
                    fontSize: "13px",
                    color: "var(--dim)",
                    borderBottom: "1px solid var(--line)",
                  }}
                >
                  {link.name}
                </a>
              ))}
              <div style={{ paddingTop: "16px", display: "flex", gap: "12px" }}>
                <a
                  href={personalInfo.resumeUrl}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    flex: 1,
                    textAlign: "center",
                    padding: "10px",
                    border: "1px solid var(--line-2)",
                    borderRadius: "7px",
                    fontFamily: "var(--font-mono-stack)",
                    fontSize: "12px",
                    color: "var(--dim)",
                  }}
                >
                  Résumé
                </a>
                <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  style={{
                    flex: 1,
                    textAlign: "center",
                    padding: "10px",
                    background: "var(--warm)",
                    borderRadius: "7px",
                    fontFamily: "var(--font-mono-stack)",
                    fontSize: "12px",
                    color: "#1a1208",
                    fontWeight: 500,
                  }}
                >
                  Say hi →
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 760px) {
          .nav-desktop { display: none !important; }
          .mobile-hamburger { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}

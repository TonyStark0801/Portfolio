"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.2 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Scroll to top"
          style={{
            position: "fixed",
            bottom: "28px",
            right: "28px",
            zIndex: 100,
            width: "44px",
            height: "44px",
            borderRadius: "50%",
            background: "var(--surface-2)",
            border: "1px solid var(--line-2)",
            color: "var(--warm)",
            fontSize: "18px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "background 0.2s, border-color 0.2s",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background = "var(--warm)";
            (e.currentTarget as HTMLButtonElement).style.color = "#1a1208";
            (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--warm)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background = "var(--surface-2)";
            (e.currentTarget as HTMLButtonElement).style.color = "var(--warm)";
            (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--line-2)";
          }}
        >
          ↑
        </motion.button>
      )}
    </AnimatePresence>
  );
}

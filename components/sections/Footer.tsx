"use client";

import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { personalInfo } from "@/data/personal";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-5">

          {/* brand */}
          <span
            className="font-extrabold text-lg tracking-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
            style={{ fontFamily: "var(--font-syne), sans-serif" }}
          >
            SM.
          </span>

          {/* copyright */}
          <p className="font-mono text-[0.68rem] tracking-[0.06em] text-muted-foreground order-last sm:order-none">
            © {new Date().getFullYear()} Shubham Mishra · Built with Next.js
          </p>

          {/* socials */}
          <div className="flex items-center gap-3">
            {[
              { href: personalInfo.github,            Icon: FiGithub,   label: "GitHub"   },
              { href: personalInfo.linkedin,           Icon: FiLinkedin, label: "LinkedIn"  },
              { href: `mailto:${personalInfo.email}`,  Icon: FiMail,     label: "Email"     },
            ].map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-card-hover transition-colors"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

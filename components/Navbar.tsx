// components/Navbar.tsx
// ─────────────────────────────────────────────────────────────
// Fixed top navigation bar. Fades in on mount, highlights the
// active section based on scroll position, and collapses to a
// horizontal icon-free list on mobile.
// ─────────────────────────────────────────────────────────────
"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/data";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 border-b border-neutral-800/60 bg-neutral-950/80 backdrop-blur-md"
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        {/* Logo / Name */}
        <a
          href="#hero"
          className="text-sm font-medium tracking-widest text-neutral-400 transition-colors duration-200 hover:text-neutral-50"
        >
          {/* Show initials on mobile, full name on desktop */}
          <span className="hidden sm:inline">{siteConfig.name}</span>
          <span className="sm:hidden">MA</span>
        </a>

        {/* Links */}
        <ul className="flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-neutral-400 transition-colors duration-200 hover:text-neutral-50"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
}


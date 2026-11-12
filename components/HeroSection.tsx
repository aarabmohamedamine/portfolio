// components/HeroSection.tsx
// ─────────────────────────────────────────────────────────────
// Full-viewport hero with staggered fade-in animations.
// All content is sourced from lib/data.ts.
// ─────────────────────────────────────────────────────────────
"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { siteConfig } from "@/lib/data";

/** Reusable stagger variant factory */
const fadeUp = (delay: number): Variants => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay },
  },
});

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-start justify-center px-6 pt-24"
    >
      {/* Subtle radial background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(255,255,255,0.03),transparent)]"
      />

      <div className="mx-auto w-full max-w-5xl">
        {/* Greeting */}
        <motion.p
          variants={fadeUp(0)}
          initial="hidden"
          animate="visible"
          className="mb-4 text-sm font-medium tracking-[0.25em] text-neutral-500 uppercase"
        >
          Hello, I&apos;m
        </motion.p>

        {/* Name */}
        <motion.h1
          variants={fadeUp(0.1)}
          initial="hidden"
          animate="visible"
          className="mb-4 text-5xl font-bold leading-tight tracking-tight text-neutral-50 sm:text-6xl md:text-7xl"
        >
          {siteConfig.name}
        </motion.h1>

        {/* Headline */}
        <motion.p
          variants={fadeUp(0.2)}
          initial="hidden"
          animate="visible"
          className="mb-2 max-w-xl text-lg text-neutral-400 sm:text-xl"
        >
          {siteConfig.headline}
        </motion.p>

        {/* Sub-headline */}
        <motion.p
          variants={fadeUp(0.3)}
          initial="hidden"
          animate="visible"
          className="mb-10 text-base text-neutral-500"
        >
          {siteConfig.subheadline}
        </motion.p>

        {/* CTA row */}
        <motion.div
          variants={fadeUp(0.4)}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap gap-4"
        >
          <a
            href="#projects"
            className="rounded-sm border border-neutral-700 bg-neutral-900 px-5 py-2.5 text-sm text-neutral-200 transition-all duration-200 hover:border-neutral-500 hover:text-neutral-50"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="rounded-sm px-5 py-2.5 text-sm text-neutral-500 transition-colors duration-200 hover:text-neutral-200"
          >
            Get in touch →
          </a>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown className="h-4 w-4 text-neutral-600" strokeWidth={1.5} />
        </motion.div>
      </motion.div>
    </section>
  );
}

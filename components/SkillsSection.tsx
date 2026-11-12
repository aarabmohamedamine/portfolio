// components/SkillsSection.tsx
// ─────────────────────────────────────────────────────────────
// Renders each skill as a minimal tag that subtly lifts on hover.
// Skills array is sourced from lib/data.ts — add or remove items
// there without touching this file.
// ─────────────────────────────────────────────────────────────
"use client";

import { motion } from "framer-motion";
import FadeInSection from "@/components/FadeInSection";
import SectionLabel from "@/components/SectionLabel";
import { skills } from "@/lib/data";

export default function SkillsSection() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-28">
      <FadeInSection>
        <SectionLabel>Skills</SectionLabel>
        <h2 className="mb-10 text-3xl font-semibold tracking-tight text-neutral-50 sm:text-4xl">
          Technologies I work with
        </h2>
      </FadeInSection>

      {/* Staggered skill tags */}
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, i) => (
          <FadeInSection key={skill} delay={i * 0.05}>
            <motion.span
              whileHover={{ y: -2 }}
              transition={{ duration: 0.15 }}
              className="inline-block cursor-default rounded-sm border border-neutral-800 bg-neutral-900 px-4 py-2 text-sm text-neutral-400 transition-colors duration-200 hover:border-neutral-600 hover:text-neutral-200"
            >
              {skill}
            </motion.span>
          </FadeInSection>
        ))}
      </div>
    </section>
  );
}


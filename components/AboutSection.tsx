// components/AboutSection.tsx
// ─────────────────────────────────────────────────────────────
// Short bio section. Text is sourced from lib/data.ts.
// ─────────────────────────────────────────────────────────────
import FadeInSection from "@/components/FadeInSection";
import SectionLabel from "@/components/SectionLabel";
import { siteConfig } from "@/lib/data";

export default function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-28">
      <FadeInSection>
        <SectionLabel>About</SectionLabel>
        <h2 className="mb-6 text-3xl font-semibold tracking-tight text-neutral-50 sm:text-4xl">
          A little about me
        </h2>
        <p className="max-w-2xl text-base leading-relaxed text-neutral-400 sm:text-lg">
          {siteConfig.bio}
        </p>
      </FadeInSection>
    </section>
  );
}


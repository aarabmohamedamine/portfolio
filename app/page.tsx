// app/page.tsx
// ─────────────────────────────────────────────────────────────
// Single-page portfolio root. Imports all section components and
// composes them into one scrollable page. No content lives here —
// all data is in lib/data.ts.
// ─────────────────────────────────────────────────────────────
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />

        {/* Subtle horizontal divider */}
        <div className="mx-auto max-w-5xl border-t border-neutral-800/50 px-6" />

        <AboutSection />

        <div className="mx-auto max-w-5xl border-t border-neutral-800/50 px-6" />

        <SkillsSection />

        <div className="mx-auto max-w-5xl border-t border-neutral-800/50 px-6" />

        <ProjectsSection />
      </main>
      <Footer />
    </>
  );
}

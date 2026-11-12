// components/ProjectsSection.tsx
// ─────────────────────────────────────────────────────────────
// Maps over the `projects` array from lib/data.ts and renders
// a ProjectCard for each one in a responsive grid.
// ─────────────────────────────────────────────────────────────
import FadeInSection from "@/components/FadeInSection";
import SectionLabel from "@/components/SectionLabel";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/data";

export default function ProjectsSection() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-28">
      <FadeInSection>
        <SectionLabel>Projects</SectionLabel>
        <h2 className="mb-10 text-3xl font-semibold tracking-tight text-neutral-50 sm:text-4xl">
          Things I&apos;ve built
        </h2>
      </FadeInSection>

      {/* Responsive grid: 1 col → 2 col → 3 col */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}


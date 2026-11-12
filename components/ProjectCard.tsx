// components/ProjectCard.tsx
// ─────────────────────────────────────────────────────────────
// A single minimalist project card. Accepts a Project object
// (from lib/data.ts) and renders its title, description, tech
// stack tags, and an optional external link.
// ─────────────────────────────────────────────────────────────
"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/data";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -60px 0px" }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1], delay: index * 0.1 }}
      className="group flex flex-col gap-4 rounded-sm border border-neutral-800 bg-neutral-900/50 p-6 transition-all duration-300 hover:border-neutral-700 hover:bg-neutral-900"
    >
      {project.href ? (
        /* Linked card */
        <a
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col gap-4"
        >
          <CardContent project={project} />
        </a>
      ) : (
        /* Static card */
        <div className="flex flex-col gap-4">
          <CardContent project={project} />
        </div>
      )}
    </motion.div>
  );
}

/** Inner content — shared between linked and static variants */
function CardContent({ project }: { project: Project }) {
  return (
    <>
      {/* Header row */}
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-base font-semibold text-neutral-100 transition-colors duration-200 group-hover:text-white">
          {project.title}
        </h3>
        {project.href && (
          <ArrowUpRight
            className="mt-0.5 h-4 w-4 shrink-0 text-neutral-600 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-neutral-400"
            strokeWidth={1.5}
          />
        )}
      </div>

      {/* Description */}
      <p className="text-sm leading-relaxed text-neutral-500">
        {project.description}
      </p>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-2">
        {project.tech.map((tag) => (
          <span
            key={tag}
            className="rounded-sm bg-neutral-800 px-2.5 py-1 text-xs text-neutral-500"
          >
            {tag}
          </span>
        ))}
      </div>
    </>
  );
}

// ============================================================
// lib/data.ts — Single source of truth for all portfolio content.
// Update this file to change your bio, skills, projects, and
// contact info without touching any UI component.
// ============================================================

export const siteConfig = {
  name: "Mohamed Amine AARAB",
  headline: "Computer Engineering Student (GI 1) at ENSAH",
  subheadline: "Full-Stack Developer",
  bio: "Passionate engineering student with a strong foundation in physical sciences, now diving deep into computer engineering, backend logic, and AI-assisted development (vibecoding). I build efficient, scalable solutions and enjoy problem-solving.",
  email: "aarabmedamine@example.com", // ← Replace with your real email
  linkedin: "https://www.linkedin.com/in/aarabmedamine/",
  github: "https://github.com/aarabmedamine", // ← Replace with your GitHub URL if desired
};

// ── Skills ──────────────────────────────────────────────────
export const skills: string[] = [
  "Python",
  "C",
  "Next.js",
  "Tailwind CSS",
  "SQLite",
  "HTML / CSS",
  "JavaScript",
  "Flask",
  "Git / GitHub",
];

// ── Projects ─────────────────────────────────────────────────
export interface Project {
  title: string;
  description: string;
  tech: string[];
  href?: string; // optional live URL or repo link
}

export const projects: Project[] = [
  {
    title: "AI README Generator",
    description:
      "An automated tool built in Python using the Gemini API to analyze codebase structures and dynamically generate comprehensive Markdown documentation.",
    tech: ["Python", "Gemini API"],
    // href: "https://github.com/aarabmedamine/...",
  },
  {
    title: "Flask To-Do Multi-User",
    description:
      "A web-based task management application featuring secure multi-user authentication and persistent storage.",
    tech: ["Python", "Flask", "SQLite3", "CSS"],
    // href: "https://github.com/aarabmedamine/...",
  },
  {
    title: "Python CLI Suite",
    description:
      "A collection of Object-Oriented CLI applications including an expense tracker, smart shop, and contact manager.",
    tech: ["Python", "SQLite3"],
    // href: "https://github.com/aarabmedamine/...",
  },
];


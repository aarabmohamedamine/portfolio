// components/Footer.tsx
// ─────────────────────────────────────────────────────────────
// Minimal footer / contact section. Email and social links are
// sourced from lib/data.ts.
// ─────────────────────────────────────────────────────────────
import FadeInSection from "@/components/FadeInSection";
import SectionLabel from "@/components/SectionLabel";
import { siteConfig } from "@/lib/data";
import { Mail, ExternalLink, GitBranch } from "lucide-react";

const socialLinks = [
  {
    label: "LinkedIn",
    href: siteConfig.linkedin,
    Icon: ExternalLink,
  },
  {
    label: "GitHub",
    href: siteConfig.github,
    Icon: GitBranch,
  },
  {
    label: "Email",
    href: `mailto:${siteConfig.email}`,
    Icon: Mail,
  },
];

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-neutral-800">
      {/* Contact block */}
      <div className="mx-auto max-w-5xl px-6 py-28">
        <FadeInSection>
          <SectionLabel>Contact</SectionLabel>
          <h2 className="mb-4 text-3xl font-semibold tracking-tight text-neutral-50 sm:text-4xl">
            Let&apos;s connect
          </h2>
          <p className="mb-10 max-w-lg text-base text-neutral-500">
            I&apos;m always open to new opportunities, collaborations, or just a
            good conversation about tech. Feel free to reach out.
          </p>

          {/* Social / contact links */}
          <div className="flex flex-wrap items-center gap-6">
            {socialLinks.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target={label !== "Email" ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-sm text-neutral-500 transition-colors duration-200 hover:text-neutral-200"
              >
                <Icon
                  className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5"
                  strokeWidth={1.5}
                />
                {label}
              </a>
            ))}
          </div>
        </FadeInSection>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-neutral-800/60">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
          <p className="text-xs text-neutral-600">
            &copy; {new Date().getFullYear()} {siteConfig.name}
          </p>
          <p className="text-xs text-neutral-700">
            Built with Next.js &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}

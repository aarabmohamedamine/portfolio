// components/SectionLabel.tsx
// ─────────────────────────────────────────────────────────────
// A small, uppercase, slightly spaced section label — used as an
// eyebrow above each major section heading.
// ─────────────────────────────────────────────────────────────

interface SectionLabelProps {
  children: React.ReactNode;
}

export default function SectionLabel({ children }: SectionLabelProps) {
  return (
    <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
      {children}
    </p>
  );
}


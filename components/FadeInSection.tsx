// components/FadeInSection.tsx
// ─────────────────────────────────────────────────────────────
// A reusable wrapper that fades + slides its children into view
// once the element enters the viewport (Intersection Observer).
// ─────────────────────────────────────────────────────────────
"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface FadeInSectionProps {
  children: React.ReactNode;
  /** Delay before the animation starts (seconds). Default: 0 */
  delay?: number;
  /** Tailwind/custom className to forward to the wrapper */
  className?: string;
}

export default function FadeInSection({
  children,
  delay = 0,
  className = "",
}: FadeInSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  // Trigger once when 15 % of the element is visible
  const isInView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}


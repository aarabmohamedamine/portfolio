// app/layout.tsx
// ─────────────────────────────────────────────────────────────
// Root layout: sets up the dark background, Inter font,
// and global metadata.
// ─────────────────────────────────────────────────────────────
import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: `${siteConfig.name} — Portfolio`,
  description: siteConfig.bio,
  openGraph: {
    title: `${siteConfig.name} — Portfolio`,
    description: siteConfig.bio,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Inter from Google Fonts — loaded as a link to avoid build-time network calls */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-neutral-950 font-sans text-neutral-50 antialiased">
        {children}
      </body>
    </html>
  );
}

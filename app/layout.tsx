import type { Metadata } from "next";
import "./globals.css";
import { siteUrl } from "./site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Stefan Saladino — Portfolio", template: "%s | Stefan Saladino" },
  description: "Portfolio of Stefan Saladino, a full-stack developer building websites, web applications and the systems behind them.",
  keywords: ["Stefan Saladino", "full-stack developer", "React developer", "TypeScript developer", "Ontario web developer", "Boomer Automation"],
  authors: [{ name: "Stefan Saladino" }],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Stefan Saladino — Full-Stack Developer",
    description: "Websites, web applications and full-stack systems built by Stefan Saladino.",
    url: "/",
    siteName: "Stefan Saladino — Portfolio",
    type: "website",
  },
  twitter: { card: "summary", title: "Stefan Saladino — Full-Stack Developer", description: "Websites, web applications and full-stack systems built by Stefan Saladino." },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  other: { "theme-color": "#07100e" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Stefan Saladino",
    jobTitle: "Full-Stack Software Developer",
    url: siteUrl,
    homeLocation: { "@type": "Place", name: "Maple, Ontario, Canada" },
    sameAs: ["https://github.com/StefanSaladino", "https://www.linkedin.com/in/stefan-saladino-32101a1a4", "https://boomerautomation.com"],
    worksFor: { "@type": "Organization", name: "Boomer Automation", url: "https://boomerautomation.com" },
  };

  return (
    <html lang="en">
      <body>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { site } from "../lib/site";
import Hero from "./components/features/home/Hero";
import SelectedWork from "./components/features/home/SelectedWork";
import RealWorldExperience from "./components/features/home/RealWorldExperience";
import HowIBuild from "./components/features/home/HowIBuild";
import EngineeringLab from "./components/features/home/EngineeringLab";
import Journey from "./components/features/home/Journey";
import About from "./components/features/home/About";
import Contact from "./components/features/home/Contact";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

/** Person + WebSite schema - identity only, no fabricated claims. */
const homeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${site.url}/#person`,
      name: site.name,
      url: site.url,
      image: `${site.url}/images/photo-new.png`,
      jobTitle: "Freelance Web Developer & Software Engineer",
      description:
        "Frontend-heavy full-stack software engineer building products, interfaces, and the systems behind them.",
      knowsAbout: [
        "Web Development",
        "Next.js",
        "React",
        "TypeScript",
        "Go",
        "PostgreSQL",
        "Product Engineering",
      ],
      address: { "@type": "PostalAddress", addressCountry: "ID" },
      sameAs: [site.linkedin, site.github],
    },
    {
      "@type": "WebSite",
      name: site.brand,
      url: site.url,
      author: { "@id": `${site.url}/#person` },
    },
  ],
};

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homeSchema).replace(/</g, "\\u003c"),
        }}
      />
      <Hero />
      <SelectedWork />
      <RealWorldExperience />
      <HowIBuild />
      <EngineeringLab />
      <Journey />
      <About />
      <Contact />
    </main>
  );
}

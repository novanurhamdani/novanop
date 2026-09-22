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

/** Minimal Person schema - identity only, no fabricated claims. */
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: site.url,
  jobTitle: site.title,
  sameAs: [site.linkedin, site.github],
};

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema).replace(/</g, "\\u003c"),
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

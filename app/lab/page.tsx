import type { Metadata } from "next";
import { labItems } from "../../lib/lab";
import SectionHeading from "../components/layout/SectionHeading";
import LabCard from "../components/features/lab/LabCard";

export const metadata: Metadata = {
  title: "Lab - Novanop",
  description:
    "Engineering experiments and planned projects being explored by Nova Nurhamdani - backend systems, product engineering, and AI engineering. Not shipped products.",
  alternates: { canonical: "/lab" },
  openGraph: {
    title: "Lab - Novanop",
    description:
      "Engineering experiments and planned projects by Nova Nurhamdani.",
    type: "website",
    url: "/lab",
  },
};

export default function LabPage() {
  return (
    <main className="container mx-auto px-5 sm:px-6 pt-28 sm:pt-36 pb-20">
      <SectionHeading
        eyebrow="Engineering Lab"
        title="Things I'm currently brewing."
        intro="Experiments, prototypes, and small systems built to understand how things work. Some graduate into real projects - the rest teach me something."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {labItems.map((item) => (
          <div key={item.slug} data-reveal>
            <LabCard item={item} />
          </div>
        ))}
      </div>

      <p className="mt-12 font-mono text-xs text-muted/70" data-reveal>
        {"// the lab is where the Code Alchemist gets to play"}
      </p>
    </main>
  );
}

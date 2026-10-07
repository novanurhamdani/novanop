import type { Metadata } from "next";
import { labItems } from "../../lib/lab";
import LabArchive from "../components/features/lab/LabArchive";

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
    <main className="pt-24 sm:pt-28">
      <LabArchive items={labItems} />
    </main>
  );
}

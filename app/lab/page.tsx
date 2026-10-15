import type { Metadata } from "next";
import { labItems } from "../../lib/lab";
import LabArchive from "../components/features/lab/LabArchive";

const labTitle = "Engineering Lab";
const labDescription =
  "Engineering experiments and planned projects by Nova Nurhamdani — backend systems, product engineering, and AI engineering. Not shipped products.";

export const metadata: Metadata = {
  title: labTitle,
  description: labDescription,
  alternates: { canonical: "/lab" },
  openGraph: {
    title: labTitle,
    description: labDescription,
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

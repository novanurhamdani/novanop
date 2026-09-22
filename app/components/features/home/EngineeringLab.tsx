import { labItems } from "../../../../lib/lab";
import SectionHeading from "../../layout/SectionHeading";
import LabCard from "../lab/LabCard";

export default function EngineeringLab() {
  return (
    <section
      id="lab"
      data-section="lab"
      className="border-t border-border/60"
    >
      <div className="container mx-auto px-5 sm:px-6 py-20 sm:py-28">
        <SectionHeading
          eyebrow="Engineering Lab"
          title="Things I'm currently brewing."
          intro="Experiments, prototypes, and small systems built to understand how things work."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {labItems.map((item) => (
            <div key={item.slug} data-reveal>
              <LabCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

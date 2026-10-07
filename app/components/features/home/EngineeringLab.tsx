import Link from "next/link";
import { labItems } from "../../../../lib/lab";
import LabCard from "../lab/LabCard";

export default function EngineeringLab() {
  const plannedCount = labItems.filter(
    (item) => item.status === "planned",
  ).length;
  const experimentCount = labItems.filter(
    (item) => item.status === "experiment",
  ).length;

  return (
    <section
      id="lab"
      data-section="lab"
      className="border-t border-border bg-background"
    >
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div data-reveal>
            <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-secondary">
              <span className="bg-primary px-1.5 py-1 text-white">05</span>{" "}
              Engineering Lab / Lab index &amp; blueprints
            </p>
            <h2 className="mt-3 font-heading text-3xl font-black uppercase leading-[0.88] tracking-tight sm:text-4xl">
              Things I&apos;m
              <span className="block text-secondary">currently brewing.</span>
            </h2>
            <p className="mt-3 max-w-xl text-xs leading-relaxed text-muted sm:text-sm">
              Experiments, prototypes, and small systems built to understand how
              things work. Some graduate into real projects - the rest teach me
              something.
            </p>
          </div>

          <div
            className="grid grid-cols-3 gap-1.5 border border-border bg-black p-2"
            role="group"
            data-reveal
            aria-label="Lab status summary"
          >
            {[
              {
                label: "Total",
                count: labItems.length,
                style: "bg-card text-foreground",
              },
              {
                label: "Planned",
                count: plannedCount,
                style: "bg-primary text-white",
              },
              {
                label: "Active",
                count: experimentCount,
                style: "bg-secondary text-black",
              },
            ].map((stat) => (
              <div
                key={stat.label}
                className={`border border-border p-2 ${stat.style}`}
              >
                <p className="font-mono text-[7px] uppercase tracking-widest">
                  {stat.label}
                </p>
                <p className="mt-1 font-heading text-xl font-black">
                  {String(stat.count).padStart(2, "0")}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {labItems.map((item, index) => (
            <div key={item.slug} data-reveal>
              <LabCard
                item={item}
                compact
                index={index}
                accent={
                  index === 0 ? "cobalt" : index === 2 ? "lime" : undefined
                }
              />
            </div>
          ))}
        </div>

        <div className="mt-5" data-reveal>
          <Link
            href="/lab"
            className="btn-brutal inline-flex items-center gap-2 border-black bg-secondary px-4 py-2.5 font-mono text-[9px] font-bold uppercase tracking-widest text-black"
          >
            Open the lab <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

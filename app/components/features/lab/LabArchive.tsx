"use client";

import Link from "next/link";
import { useState } from "react";
import { LabItem } from "../../../../types";
import LabCard from "./LabCard";

type LabFilter = "all" | "planned" | "experiment";

export default function LabArchive({ items }: { items: LabItem[] }) {
  const [filter, setFilter] = useState<LabFilter>("all");
  const plannedCount = items.filter((item) => item.status === "planned").length;
  const experimentCount = items.filter(
    (item) => item.status === "experiment",
  ).length;
  const visibleItems = items.filter(
    (item) => filter === "all" || item.status === filter,
  );
  const filters: { value: LabFilter; label: string; count: number }[] = [
    { value: "all", label: "All labs", count: items.length },
    {
      value: "planned",
      label: "Planned blueprints",
      count: plannedCount,
    },
    {
      value: "experiment",
      label: "Active experiments",
      count: experimentCount,
    },
  ];
  const accentFor = (slug: string) => {
    if (slug === "flowpay") return "cobalt";
    if (slug === "go-api-lab") return "lime";
    return undefined;
  };

  return (
    <>
      <section
        id="lab-index"
        className="relative overflow-hidden border-b-2 border-border bg-card"
      >
        <div
          className="grid-backdrop-dark pointer-events-none absolute inset-0 opacity-70"
          aria-hidden="true"
        />
        <div className="relative mx-auto grid max-w-6xl gap-8 px-4 py-8 sm:px-6 sm:py-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-secondary">
              <span className="bg-secondary px-1.5 py-1 text-black">
                Engineering Lab
              </span>{" "}
              / Lab systems &amp; blueprints
            </p>
            <h1 className="mt-4 max-w-2xl font-heading text-4xl font-black uppercase leading-[0.86] tracking-tight sm:text-5xl lg:text-[3.5rem]">
              Things I&apos;m
              <span className="block text-secondary">currently brewing.</span>
            </h1>
            <p className="mt-4 max-w-xl text-xs leading-relaxed text-muted sm:text-sm">
              Experiments, prototypes, and small systems built to understand how
              things work. Some graduate into real projects - the rest teach me
              something.
            </p>
          </div>

          <div
            role="group"
            aria-label="Lab status summary"
            className="border border-border bg-black p-3 sm:p-4"
          >
            <div className="mb-3 flex items-center justify-between gap-3">
              <p className="font-mono text-[8px] uppercase tracking-[0.18em] text-dark-muted">
                Lab status / live telemetry
              </p>
              <span className="font-mono text-[8px] uppercase tracking-widest text-secondary">
                {String(items.length).padStart(2, "0")} modules
              </span>
            </div>
            <div className="grid grid-cols-3 gap-1.5">
              {[
                {
                  label: "Total",
                  count: items.length,
                  style: "border-border bg-card text-foreground",
                },
                {
                  label: "Planned",
                  count: plannedCount,
                  style: "border-primary bg-primary text-white",
                },
                {
                  label: "Active",
                  count: experimentCount,
                  style: "border-secondary bg-secondary text-black",
                },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className={`border p-2 sm:p-3 ${stat.style}`}
                >
                  <p className="font-mono text-[7px] uppercase tracking-wider sm:text-[8px]">
                    {stat.label}
                  </p>
                  <p className="mt-1 font-heading text-xl font-black sm:text-2xl">
                    {String(stat.count).padStart(2, "0")}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="border-b border-border bg-card">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-3 sm:px-6 md:flex-row md:items-center md:justify-between">
          <div className="flex min-w-0 items-center gap-2">
            <span className="shrink-0 font-mono text-[8px] uppercase tracking-widest text-dark-muted">
              Filter /
            </span>
            <div className="flex min-w-0 gap-1.5 overflow-x-auto">
              {filters.map((item) => (
                <button
                  key={item.value}
                  type="button"
                  aria-pressed={filter === item.value}
                  onClick={() => setFilter(item.value)}
                  className={`shrink-0 border px-2 py-1.5 font-mono text-[8px] font-bold uppercase tracking-wider transition-colors ${
                    filter === item.value
                      ? "border-secondary bg-secondary text-black"
                      : "border-border bg-dark text-muted hover:border-muted hover:text-foreground"
                  }`}
                >
                  {item.label} {String(item.count).padStart(2, "0")}
                </button>
              ))}
            </div>
          </div>
          <p
            role="status"
            aria-live="polite"
            className="shrink-0 font-mono text-[8px] uppercase tracking-widest text-dark-muted"
          >
            {String(visibleItems.length).padStart(2, "0")} shown / Select a card
            to inspect details
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-8">
        <h2 className="sr-only">Lab modules</h2>
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {visibleItems.map((item) => (
            <LabCard
              key={item.slug}
              item={item}
              accent={accentFor(item.slug)}
              index={items.findIndex((labItem) => labItem.slug === item.slug)}
            />
          ))}
        </div>
      </div>

      <section className="border-y border-border bg-primary text-white">
        <div className="mx-auto grid max-w-6xl gap-5 px-4 py-8 sm:px-6 sm:py-10 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="font-mono text-[8px] uppercase tracking-[0.18em] text-white">
              Lab collaborations / Open exploration
            </p>
            <h2 className="mt-2 max-w-2xl font-heading text-2xl font-black uppercase leading-[0.9] sm:text-3xl">
              Interested in collaborating
              <span className="block text-secondary">
                on one of these experiments?
              </span>
            </h2>
            <p className="mt-2 max-w-xl text-xs leading-relaxed text-white sm:text-sm">
              Experiments, prototypes, and small systems built to understand how
              things work.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Link
              href="/#contact"
              className="btn-brutal inline-flex items-center gap-2 border-black bg-secondary px-3 py-2.5 font-mono text-[9px] font-bold uppercase tracking-widest text-black"
            >
              Talk with me
            </Link>
            <Link
              href="/work"
              className="btn-brutal inline-flex items-center gap-2 border-black bg-black px-3 py-2.5 font-mono text-[9px] font-bold uppercase tracking-widest text-white"
            >
              View work archive
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

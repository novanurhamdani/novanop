import { ArchitectureLayer } from "../../../../types";

interface ArchitectureDiagramProps {
  layers: ArchitectureLayer[];
}

/**
 * Layered architecture diagram — stacked technical blocks connected by
 * hairlines, in the same visual language as the rest of the site.
 * No fake UI, no screenshots: structure only.
 */
export default function ArchitectureDiagram({
  layers,
}: ArchitectureDiagramProps) {
  return (
    <figure className="border border-border bg-surface grid-backdrop p-6 sm:p-10">
      <ol className="mx-auto max-w-md">
        {layers.map((layer, index) => (
          <li key={layer.label}>
            <div
              className={`border px-5 py-4 text-center ${
                layer.items
                  ? "border-primary/60 bg-card"
                  : "border-border bg-card/60"
              }`}
            >
              <p className="font-mono text-xs sm:text-sm uppercase tracking-[0.2em] text-foreground">
                {layer.label}
              </p>
              {layer.description && (
                <p className="mt-1 font-mono text-[10px] tracking-wide text-muted">
                  {layer.description}
                </p>
              )}
              {layer.items && (
                <div className="mt-3 flex flex-wrap justify-center gap-1.5">
                  {layer.items.map((item) => (
                    <span
                      key={item}
                      className="border border-primary/40 bg-primary/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-primary"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              )}
            </div>
            {index < layers.length - 1 && (
              <div
                className="flex justify-center py-1 text-muted/60 font-mono"
                aria-hidden="true"
              >
                ↓
              </div>
            )}
          </li>
        ))}
      </ol>
      <figcaption className="mt-6 text-center font-mono text-[10px] uppercase tracking-[0.2em] text-muted/60">
        system shape — simplified
      </figcaption>
    </figure>
  );
}

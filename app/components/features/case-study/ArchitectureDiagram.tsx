import { ArchitectureLayer } from "../../../../types";

interface ArchitectureDiagramProps {
  layers: ArchitectureLayer[];
}

/**
 * Layered architecture diagram - stacked technical blocks connected by
 * hairlines, in the same visual language as the rest of the site.
 * No fake UI, no screenshots: structure only.
 */
export default function ArchitectureDiagram({
  layers,
}: ArchitectureDiagramProps) {
  const storage = layers[layers.length - 1];
  const hasDatabaseBase = storage?.label.toLowerCase().includes("postgres");
  const hasSurfacePair =
    hasDatabaseBase &&
    layers.length >= 4 &&
    !layers[0].items &&
    !layers[1].items;
  const surfaceLayers = hasSurfacePair ? layers.slice(0, 2) : [];
  const middleLayers = hasSurfacePair ? layers.slice(2, -1) : layers;
  const commerceApi = middleLayers.find(
    (layer) => layer.label === "Commerce API",
  );
  const commerceDomains = middleLayers.find(
    (layer) => layer.label === "Commerce Domains",
  );
  const coreLayers =
    commerceApi && commerceDomains
      ? middleLayers.filter((layer) => layer !== commerceDomains)
      : middleLayers;

  if (hasSurfacePair && hasDatabaseBase) {
    return (
      <figure className="border border-border bg-card p-3 sm:p-6">
        <div className="grid-backdrop border border-border p-4 sm:p-8">
          <p className="mb-3 text-center font-mono text-[8px] uppercase tracking-[0.2em] text-dark-muted">
            Application surfaces
          </p>
          <div className="mx-auto grid max-w-lg gap-2 sm:grid-cols-2">
            {surfaceLayers.map((layer, index) => (
              <div
                key={layer.label}
                className={`border bg-card p-3 text-center ${
                  index === 1 ? "border-secondary" : "border-border"
                }`}
              >
                <p className="font-mono text-[8px] uppercase tracking-[0.18em] text-secondary">
                  {/admin|backoffice/i.test(layer.label)
                    ? "Operations"
                    : "Client-facing"}
                </p>
                <h3 className="mt-1 font-heading text-xs font-bold uppercase text-foreground">
                  {layer.label}
                </h3>
                {layer.description && (
                  <p className="mt-1 font-mono text-[9px] leading-relaxed text-muted">
                    {layer.description}
                  </p>
                )}
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center py-3">
            <span className="h-3 w-px bg-secondary" aria-hidden="true" />
            <span className="border border-border bg-black px-2 py-1 font-mono text-[8px] uppercase tracking-[0.16em] text-secondary">
              {commerceApi?.description?.toLowerCase().includes("contract")
                ? "OpenAPI contract"
                : "Service boundary"}
            </span>
            <span className="h-3 w-px bg-secondary" aria-hidden="true" />
          </div>

          <div className="mx-auto max-w-lg space-y-2">
            {coreLayers.map((layer) => {
              const isCommerceEngine = layer === commerceApi;
              const items = isCommerceEngine
                ? commerceDomains?.items
                : layer.items;

              return (
                <div
                  key={layer.label}
                  className={`border p-4 text-center ${
                    isCommerceEngine
                      ? "border-primary bg-primary text-white shadow-brutal"
                      : layer.items
                        ? "border-secondary bg-black"
                        : "border-border bg-card"
                  }`}
                >
                  {isCommerceEngine && (
                    <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/80">
                      Central monolith engine
                    </p>
                  )}
                  <h3
                    className={`mt-1 font-heading text-sm font-extrabold uppercase ${
                      isCommerceEngine ? "text-white" : "text-foreground"
                    }`}
                  >
                    {layer.label}
                  </h3>
                  {layer.description && (
                    <p
                      className={`mt-1 font-mono text-[9px] leading-relaxed ${
                        isCommerceEngine ? "text-white" : "text-muted"
                      }`}
                    >
                      {layer.description}
                    </p>
                  )}
                  {items && (
                    <>
                      {isCommerceEngine && commerceDomains && (
                        <p className="mt-3 font-mono text-[8px] uppercase tracking-[0.18em] text-white/80">
                          {commerceDomains.label}
                        </p>
                      )}
                      <div className="mt-2 grid gap-1.5 sm:grid-cols-2 lg:grid-cols-3">
                        {items.map((item) => (
                          <span
                            key={item}
                            className={`border px-2 py-1 font-mono text-[8px] uppercase tracking-wide ${
                              isCommerceEngine
                                ? "border-white/30 bg-black/20 text-white"
                                : "border-border bg-card text-foreground"
                            }`}
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>

          <div className="flex flex-col items-center py-3">
            <span className="h-3 w-px bg-secondary" aria-hidden="true" />
            <span className="border border-border bg-black px-2 py-1 font-mono text-[8px] uppercase tracking-[0.16em] text-secondary">
              Tenant-aware data layer
            </span>
            <span className="h-3 w-px bg-secondary" aria-hidden="true" />
          </div>

          <div className="mx-auto max-w-lg border border-border bg-card p-4 text-center">
            <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-secondary">
              Data / Persistence
            </p>
            <h3 className="mt-1 font-heading text-xs font-bold uppercase text-foreground">
              {storage.label}
            </h3>
            {storage.description && (
              <p className="mt-1 font-mono text-[9px] leading-relaxed text-muted">
                {storage.description}
              </p>
            )}
          </div>
        </div>
      </figure>
    );
  }

  return (
    <figure className="border border-border bg-card p-3 sm:p-6">
      <ol className="grid-backdrop mx-auto max-w-3xl space-y-2 border border-border p-4 sm:p-8">
        {layers.map((layer, index) => (
          <li key={layer.label}>
            <div
              className={`border p-4 text-center ${
                layer.items
                  ? "border-primary bg-primary text-white"
                  : "border-border bg-card"
              }`}
            >
              <p
                className={`font-mono text-xs uppercase tracking-[0.2em] ${
                  layer.items ? "text-white" : "text-foreground"
                }`}
              >
                {layer.label}
              </p>
              {layer.description && (
                <p
                  className={`mt-1 font-mono text-[10px] tracking-wide ${
                    layer.items ? "text-white" : "text-muted"
                  }`}
                >
                  {layer.description}
                </p>
              )}
              {layer.items && (
                <div className="mt-3 flex flex-wrap justify-center gap-1.5">
                  {layer.items.map((item) => (
                    <span
                      key={item}
                      className="border border-white/30 bg-black/20 px-2 py-0.5 font-mono text-[9px] uppercase tracking-widest text-white"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              )}
            </div>
            {index < layers.length - 1 && (
              <div
                className="flex justify-center py-1 text-primary font-mono"
                aria-hidden="true"
              >
                ↓
              </div>
            )}
          </li>
        ))}
      </ol>
      <figcaption className="mt-4 text-center font-mono text-[9px] uppercase tracking-[0.2em] text-muted">
        system shape - simplified
      </figcaption>
    </figure>
  );
}

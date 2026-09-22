/**
 * Abstract project visual - an engineering-diagram style placeholder.
 * Deliberately NOT a fake UI screenshot: geometry and linework only,
 * keyed to each project's identity.
 */

interface ProjectVisualProps {
  slug: string;
  title: string;
}

const visuals: Record<string, React.ReactNode> = {
  // Loomoda - commerce: a structured product grid / loom weave
  loomoda: (
    <g stroke="currentColor" strokeWidth="1" fill="none">
      <rect x="24" y="24" width="72" height="48" />
      <rect x="112" y="24" width="40" height="48" opacity="0.6" />
      <rect x="24" y="88" width="40" height="48" opacity="0.6" />
      <rect x="80" y="88" width="72" height="48" />
      <line x1="24" y1="48" x2="96" y2="48" opacity="0.4" />
      <line x1="60" y1="24" x2="60" y2="72" opacity="0.4" />
      <line x1="80" y1="112" x2="152" y2="112" opacity="0.4" />
      <circle cx="168" cy="120" r="8" opacity="0.8" />
    </g>
  ),
  // Repicode - reusable platform: repeating modular blocks
  repicode: (
    <g stroke="currentColor" strokeWidth="1" fill="none">
      <rect x="28" y="28" width="36" height="36" />
      <rect x="76" y="28" width="36" height="36" opacity="0.7" />
      <rect x="124" y="28" width="36" height="36" opacity="0.45" />
      <rect x="28" y="76" width="36" height="36" opacity="0.7" />
      <rect x="76" y="76" width="36" height="36" opacity="0.45" />
      <rect x="124" y="76" width="36" height="36" opacity="0.25" />
      <rect x="28" y="124" width="36" height="36" opacity="0.45" />
      <rect x="76" y="124" width="36" height="36" opacity="0.25" />
      <rect x="124" y="124" width="36" height="36" opacity="0.15" />
    </g>
  ),
  // Flowpay - payment ops: transaction flow lines
  flowpay: (
    <g stroke="currentColor" strokeWidth="1" fill="none">
      <path d="M16 40 H64 L88 64 H160" />
      <path d="M16 76 H48 L72 100 H160" opacity="0.6" />
      <path d="M16 112 H40 L64 136 H160" opacity="0.35" />
      <circle cx="64" cy="40" r="5" />
      <circle cx="48" cy="76" r="5" opacity="0.6" />
      <circle cx="40" cy="112" r="5" opacity="0.35" />
      <circle cx="160" cy="64" r="8" />
      <circle cx="160" cy="100" r="8" opacity="0.6" />
      <circle cx="160" cy="136" r="8" opacity="0.35" />
    </g>
  ),
  // RiskFlow - review workflow: decision branching
  riskflow: (
    <g stroke="currentColor" strokeWidth="1" fill="none">
      <circle cx="88" cy="28" r="8" />
      <path d="M88 36 V56" />
      <path d="M88 56 L48 84" />
      <path d="M88 56 L128 84" />
      <rect x="32" y="84" width="32" height="24" />
      <rect x="112" y="84" width="32" height="24" opacity="0.6" />
      <path d="M48 108 V128 L88 144" opacity="0.6" />
      <path d="M128 108 V128 L88 144" opacity="0.35" />
      <circle cx="88" cy="148" r="7" opacity="0.8" />
    </g>
  ),
  // Cuetoba - project intelligence: context nodes wired into a flow
  cuetoba: (
    <g stroke="currentColor" strokeWidth="1" fill="none">
      <circle cx="40" cy="40" r="9" />
      <circle cx="40" cy="96" r="9" opacity="0.7" />
      <circle cx="40" cy="148" r="9" opacity="0.5" />
      <rect x="96" y="72" width="44" height="32" rx="2" />
      <circle cx="156" cy="88" r="10" />
      <path d="M49 44 C70 50 80 62 96 76" opacity="0.8" />
      <path d="M49 96 H96" opacity="0.7" />
      <path d="M49 144 C70 138 80 114 96 100" opacity="0.55" />
      <path d="M140 88 H146" />
    </g>
  ),
};

const fallback = (
  <g stroke="currentColor" strokeWidth="1" fill="none">
    <rect x="32" y="32" width="112" height="112" />
    <line x1="32" y1="88" x2="144" y2="88" opacity="0.4" />
    <line x1="88" y1="32" x2="88" y2="144" opacity="0.4" />
  </g>
);

export default function ProjectVisual({ slug }: ProjectVisualProps) {
  return (
    <div
      className="relative aspect-[16/10] w-full overflow-hidden bg-surface grid-backdrop"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 176 176"
        className="absolute inset-0 m-auto h-[70%] w-auto text-primary/70 transition-colors duration-300 group-hover:text-secondary/80"
      >
        {visuals[slug] ?? fallback}
      </svg>
      <span className="absolute bottom-3 left-4 font-mono text-[10px] tracking-[0.2em] text-muted/60 uppercase">
        NOV-W · {slug}
      </span>
    </div>
  );
}

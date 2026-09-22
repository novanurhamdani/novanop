import { Project } from "../types";

/**
 * Selected work.
 *
 * Wiring for future mini-projects: when a project ships, flip `status` to
 * "live" and add `demoUrl` / `sourceUrl` / `caseStudyUrl`. No structural
 * changes needed in the card component.
 *
 * `thumbnail` is only set when a real asset exists — otherwise the card
 * renders an abstract diagram placeholder. `caseStudy` powers the full
 * engineering narrative on /work/[slug].
 */
export const projects: Project[] = [
  {
    slug: "loomoda",
    title: "Loomoda",
    category: "Commerce Platform",
    description:
      "A commerce platform for modern fashion businesses, built around structured commerce workflows and a Go backend.",
    status: "building",
    role: ["Frontend", "Backend", "Architecture"],
    stack: ["Next.js", "TypeScript", "Go", "PostgreSQL"],
    featured: true,
    caseStudy: {
      problem: [
        "Loomoda started from a familiar situation: a fashion business running on WordPress and WooCommerce, where the product catalog lives inside a CMS, orders are posts with meta fields, and every customization means working around a plugin.",
        "That setup works until it doesn't. Prices, variants, stock and order history end up entangled with content management, and the operational side of the business — managing products, tracking orders, running the store day to day — gets squeezed into tooling designed for publishing websites, not running commerce.",
        "The goal was to replace that with a structured commerce system: real domain objects, a real API, and an admin surface built for operations rather than page management.",
      ],
      built: {
        intro:
          "A commerce platform — currently in active development — split into two deliberate halves: a customer-facing storefront and an operational admin, backed by a single Go API.",
        points: [
          "Next.js storefront for catalog browsing and purchasing",
          "Next.js admin application for managing products, orders and store configuration, built on a shared internal UI library (Loomoda UI)",
          "Go REST API organized as a modular monolith, with commerce domains isolated into modules",
          "PostgreSQL as the single source of truth for catalog, pricing, carts, orders, customers and tenants",
          "Dockerized deployment through Dokploy with separate staging and production environments",
          "API contract documented with Swagger/OpenAPI so frontend and backend stay honest about the interface",
        ],
      },
      challenges: [
        {
          heading: "Drawing domain boundaries",
          body: "The hard part isn't writing endpoints — it's deciding where catalog ends and order begins. Each module owns its data and its rules: Catalog knows products, Order knows purchases, and neither reaches into the other's tables.",
        },
        {
          heading: "Prices change after checkout",
          body: "A product's price today is not its price at purchase time. Orders store a price snapshot — the amount, currency and pricing context captured when the order was created — so historical orders stay correct no matter how the catalog evolves.",
        },
        {
          heading: "Multi-tenancy without ceremony",
          body: "The platform is designed to host multiple stores, so every commerce object carries a tenant boundary. Tenancy is modeled in the schema rather than bolted on later, which keeps store data isolated while sharing one deployment.",
        },
        {
          heading: "Admin is not the storefront",
          body: "Admin users need dense tables, filters and bulk actions; shoppers need a fast, focused purchase flow. The two surfaces are separate applications with separate needs, sharing only the API contract and the UI language.",
        },
      ],
      architecture: [
        { label: "Storefront", description: "Next.js · customer-facing" },
        { label: "Admin", description: "Next.js · Loomoda UI" },
        { label: "REST API", description: "Go · OpenAPI contract" },
        {
          label: "Commerce Modules",
          items: ["Catalog", "Pricing", "Cart", "Order", "Customer", "Tenant"],
        },
        { label: "PostgreSQL", description: "single source of truth" },
      ],
      decisions: [
        {
          heading: "Modular monolith, not microservices",
          body: "The current product does not justify distributed-system complexity. Modules keep commerce domains separated inside one deployable unit — the boundaries exist so the system could split later if it ever needs to, not because it needs to today.",
        },
        {
          heading: "REST + OpenAPI over alternatives",
          body: "A documented REST contract gives every endpoint a spec by default and keeps the two Next.js surfaces honest. For a product with an admin app and a storefront, boring and documented beats clever.",
        },
        {
          heading: "Price snapshots on orders",
          body: "An order is a record of what happened, not a pointer to current catalog state. Storing the snapshot at creation time keeps order history stable and makes reporting honest.",
        },
        {
          heading: "Zod schemas at the form boundary",
          body: "Admin forms validate with React Hook Form + Zod, so invalid data fails before it reaches the API — and the validation rules read like the domain rules.",
        },
        {
          heading: "TanStack Query for server state",
          body: "Server data is cached and synchronized by a tool built for that job, rather than stuffing API responses into client state stores.",
        },
      ],
      surface: [
        {
          title: "Storefront",
          items: [
            "Catalog browsing",
            "Product detail & variants",
            "Cart & checkout",
          ],
        },
        {
          title: "Admin",
          items: [
            "Product & catalog management",
            "Order management",
            "Customer records",
            "Store & tenant configuration",
          ],
        },
      ],
      currentState: [
        "Actively building. The Go API, PostgreSQL schema and both Next.js surfaces are in development against a staging environment, with production deployment wired through Dokploy.",
        "Status: building — not yet a launched product.",
      ],
      learnings: [
        "Domain boundaries are cheaper to draw early than to untangle later.",
        "An order is a historical record — treating it as one simplifies pricing and keeps reporting honest.",
        "Multi-tenancy is much easier to design in than to retrofit.",
        "A shared OpenAPI contract removes a whole category of frontend/backend disagreements.",
      ],
    },
  },
  {
    slug: "repicode",
    title: "Repicode",
    category: "Product Platform",
    description:
      "A reusable product platform for building client-facing digital products across different business domains.",
    status: "building",
    role: ["Product Engineering", "Frontend", "Backend"],
    stack: ["Next.js", "Go", "PostgreSQL"],
    featured: true,
    caseStudy: {
      problem: [
        "Client-facing business applications are mostly the same product wearing different clothes. A booking app for a travel agency, a patient system for a dental clinic, and a course platform for an educator share the same skeleton: accounts, tenants, admin tooling, domain records, operational views.",
        "Building that skeleton from scratch on every project is the real cost — not the domain logic. Repicode exists to make the skeleton reusable.",
      ],
      built: {
        intro:
          "A reusable product platform — currently in development — combining shared product infrastructure with domain-specific modules, configured per tenant.",
        points: [
          "Shared product core: tenant model, authentication, base admin and operational tooling",
          "Domain modules that attach to the core for a specific vertical — bookings for travel, patients for dental, courses for an LMS",
          "Tenant configuration layer so a deployment adapts to a business without forking the codebase",
          "Next.js product frontends backed by a Go API and PostgreSQL",
        ],
      },
      challenges: [
        {
          heading: "The abstraction level problem",
          body: "Too generic and the platform does nothing; too specific and it's just one product with extra steps. The line that worked: infrastructure is shared, workflow is configurable, domain logic lives in modules.",
        },
        {
          heading: "Config vs code",
          body: "Every 'just make it configurable' decision creates a schema you now have to maintain. Tenant configuration covers identity, enabled modules and business settings — anything deeper belongs in a module, not a config flag.",
        },
        {
          heading: "Module boundaries",
          body: "Modules have to work without knowing about each other. The platform defines the contracts — tenancy, auth, data ownership — and each module implements its domain inside them.",
        },
      ],
      architecture: [
        {
          label: "Product Core",
          description: "tenancy · auth · admin shell",
        },
        {
          label: "Domain Modules",
          items: ["Bookings", "Courses", "Records"],
          description: "attached per vertical",
        },
        {
          label: "Tenant Configuration",
          description: "identity · enabled modules · business settings",
        },
        {
          label: "Vertical Application",
          description: "e.g. travel · dental · LMS — target verticals",
        },
      ],
      decisions: [
        {
          heading: "One core, many verticals",
          body: "The shared infrastructure is the product. A vertical application is a configuration plus a set of domain modules — not a new codebase.",
        },
        {
          heading: "Tenancy from day one",
          body: "Every record belongs to a tenant, modeled explicitly in the schema. Retrofitting tenancy onto a single-tenant data model is a rewrite; designing it in early is a column.",
        },
        {
          heading: "Modules over config flags",
          body: "Domain differences live in modules with clear contracts, not in a jungle of feature toggles. Configuration selects and parameterizes modules; it doesn't contain business logic.",
        },
        {
          heading: "Boring deployment shape",
          body: "Same stack shape as the other builds — Go API, PostgreSQL, containerized deploys — so operating one vertical teaches you how to operate all of them.",
        },
      ],
      surface: [
        {
          title: "Platform core",
          items: [
            "Tenant onboarding & configuration",
            "Authentication & access",
            "Shared admin shell",
          ],
        },
        {
          title: "Per vertical",
          items: [
            "Domain records & workflows",
            "Vertical-specific views",
            "Business settings",
          ],
        },
      ],
      currentState: [
        "Actively building. The platform core and module architecture are in progress; travel, dental and LMS are target verticals being used to shape the model — not shipped products.",
        "Status: building — the platform is still proving its own hypothesis.",
      ],
      learnings: [
        "Reuse is a design problem before it's a code problem.",
        "Tenancy belongs in the schema, not in middleware.",
        "A platform proves itself when the second vertical is cheap — until then it's a hypothesis.",
      ],
    },
  },
  {
    slug: "flowpay",
    title: "Flowpay",
    category: "Payment Operations",
    description:
      "A fictional payment operations sandbox exploring transaction lifecycle, bulk operations, reconciliation, and operational interfaces.",
    status: "planned",
    role: ["Frontend", "Backend"],
    stack: ["Next.js", "Go", "PostgreSQL"],
    featured: false,
  },
  {
    slug: "riskflow",
    title: "RiskFlow",
    category: "Financial Workflow",
    description:
      "A fictional financial review workflow exploring business rules, review states, approvals, and audit history.",
    status: "planned",
    role: ["Frontend", "Backend"],
    stack: ["Next.js", "Go", "PostgreSQL"],
    featured: false,
  },
  {
    slug: "cuetoba",
    title: "Cuetoba",
    category: "AI / Project Intelligence",
    description:
      "A project intelligence platform that organizes project knowledge into reusable, structured context for AI-assisted development.",
    status: "live",
    role: ["Product Engineering", "Frontend", "Backend"],
    stack: [
      "Next.js",
      "TypeScript",
      "TanStack Query",
      "Prisma",
      "Supabase",
      "React Flow",
    ],
    demoUrl: "https://cuetoba.com",
    links: [
      { label: "App", url: "https://app.cuetoba.com" },
      { label: "Backoffice", url: "https://bo.cuetoba.com" },
    ],
    profile: {
      built: [
        "Project knowledge workspace for organizing reusable development context",
        "Context Recipes - structured context generation for AI tools like ChatGPT, Claude, Cursor and Gemini",
        "Customer-facing application and backoffice product surfaces",
        "Interactive project and context flows built with React Flow",
        "Application stack: Next.js, TypeScript, TanStack Query, Prisma and PostgreSQL",
      ],
    },
  },
  {
    slug: "cumentor",
    title: "Cumentor AI",
    category: "AI / Document Exploration",
    description:
      "An application for uploading documents and exploring their contents through an interactive chat experience.",
    status: "live",
    role: ["Product Engineering", "Frontend", "Backend"],
    stack: ["Next.js", "TypeScript", "PostgreSQL", "AWS S3", "Gemini AI"],
    thumbnail: "/projects/cumentor.png",
    demoUrl: "https://cumentor.novanop.com",
    sourceUrl: "https://github.com/novanurhamdani/cumentor",
    profile: {
      built: [
        "PDF upload and document handling",
        "Conversational document exploration through a chat interface",
        "Document storage and retrieval backed by PostgreSQL and AWS S3",
        "Product interface and application workflow",
      ],
    },
  },
  {
    slug: "starter-crowd-chain",
    title: "Starter Crowd Chain",
    category: "Web3 / Product Platform",
    description:
      "A shipped crowdfunding product built around milestone-based fund release, wallet interaction and campaign dashboards.",
    status: "live",
    role: ["Frontend", "Smart Contracts"],
    stack: ["Next.js", "Solidity", "Hardhat", "Wagmi", "Prisma", "PostgreSQL"],
    thumbnail: "/projects/startcrowd.png",
    demoUrl: "https://startercrowd.novanop.com",
    profile: {
      built: [
        "Campaign creation with milestone-based funding structure",
        "Wallet connection and transaction flows via Wagmi",
        "Campaign details with milestone tracking",
        "Creator dashboard for managing campaigns and milestones",
        "Solidity smart contracts for fund management, developed and tested with Hardhat",
      ],
    },
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const getProject = (slug: string) =>
  projects.find((p) => p.slug === slug);

/** Homepage Selected Work: flagship builds + honestly-labelled planned work. */
export const selectedWork = projects.filter(
  (p) => p.featured || p.status === "planned",
);

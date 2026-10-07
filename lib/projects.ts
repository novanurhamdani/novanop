import { Project } from "../types";

/**
 * Selected work.
 *
 * Wiring for future mini-projects: when a project ships, flip `status` to
 * "live" and add `demoUrl` / `sourceUrl` / `caseStudyUrl`. No structural
 * changes needed in the card component.
 *
 * `thumbnail` is only set when a real asset exists - otherwise the card
 * renders an abstract diagram placeholder. `caseStudy` powers the full
 * engineering narrative on /work/[slug].
 */
export const projects: Project[] = [
  {
    slug: "loomoda",
    title: "Loomoda",
    category: "Commerce Platform",
    description:
      "A commerce platform for fashion businesses: storefront, operational admin, and a Go modular monolith covering catalog through fulfillment, invoicing and finance.",
    status: "building",
    role: ["Frontend", "Backend", "Architecture"],
    stack: ["Next.js", "TypeScript", "Go", "PostgreSQL"],
    featured: true,
    thumbnail: "/projects/loomoda-1.png",
    screenshots: ["/projects/loomoda-2.png", "/projects/loomoda-3.png"],
    caseStudy: {
      problem: [
        "Loomoda started from a familiar situation: a fashion business running on WordPress and WooCommerce, where the product catalog lives inside a CMS, orders are posts with meta fields, and every customization means working around a plugin.",
        "That setup works until it doesn't. Prices, variants, stock and order history end up entangled with content management, and the operational side of the business - managing products, tracking orders, running the store day to day - gets squeezed into tooling designed for publishing websites, not running commerce.",
        "The goal is to replace that with a structured commerce system: real domain objects, a real API, and an admin surface built for operations rather than page management.",
      ],
      built: {
        intro:
          "A commerce platform in active development, split into deliberate surfaces: a customer-facing storefront, an operational admin, a shared UI library, and a single Go API organized as a modular monolith over a tenant-aware PostgreSQL schema.",
        points: [
          "Go modular monolith with explicit commerce domains: catalog, pricing, cart, checkout, order, payment, preorder, production, procurement, inventory, fulfillment, invoice, returns, refunds, finance",
          "Next.js storefront and admin applications built on a shared internal UI library (Loomoda UI)",
          "Tenant-aware schema: every tenant-owned table carries organization_id, with organization-scoped uniqueness enforced at the database level",
          "Document-style snapshots: order lines persist price/product snapshots, invoices persist full commercial snapshots - issued documents never depend on live rows",
          "Fulfillment lifecycle from allocation to delivery - pick, pack, multi-parcel shipments with per-package tracking",
          "Procurement pipeline linking preorder demand to suppliers, purchase orders, receipts and supplier bills",
          "OpenAPI contract between the API and both frontends; Go unit, integration and race-condition tests plus Vitest and Playwright on the Next.js surfaces",
          "Containerized staging deployment via Docker and Dokploy",
        ],
      },
      challenges: [
        {
          heading: "Drawing domain boundaries",
          body: "The hard part isn't writing endpoints - it's deciding where catalog ends and order begins. Each module owns its data and its rules: Catalog knows products, Order knows purchases, and neither reaches into the other's tables.",
        },
        {
          heading: "Documents that outlive their source rows",
          body: "An issued invoice has to stay correct even after the order, customer or pricing rows behind it change. Invoices persist a full commercial snapshot - order, customer, billing, lines, payment, shipping fee - under a DRAFT → ISSUED → VOID lifecycle with organization-scoped sequence numbers allocated atomically, never computed from MAX + 1.",
        },
        {
          heading: "Demand is not supply",
          body: "Preorder demand and physical stock are different things that have to meet somewhere. Supply requirements reconcile committed demand against purchase-order lines, so procurement traces back to real demand without merging the two models.",
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
        {
          label: "Commerce API",
          description: "Go modular monolith · OpenAPI contract",
        },
        {
          label: "Commerce Domains",
          items: [
            "Catalog & Pricing",
            "Cart & Order",
            "Payment",
            "Preorder & Production",
            "Procurement & Inventory",
            "Fulfillment",
            "Invoice & Finance",
          ],
        },
        {
          label: "PostgreSQL",
          description: "tenant-aware · single source of truth",
        },
      ],
      decisions: [
        {
          heading: "Modular monolith, not microservices",
          body: "The current product does not justify distributed-system complexity. Modules keep commerce domains separated inside one deployable unit - the boundaries exist so the system could split later if it ever needs to, not because it needs to today.",
        },
        {
          heading: "Tenancy enforced in the schema",
          body: "Every tenant-owned table carries organization_id and organization-scoped unique constraints, so tenant isolation is a database guarantee rather than an application-level convention.",
        },
        {
          heading: "Snapshots on anything that becomes a record",
          body: "Orders snapshot prices and product details at purchase time; invoices snapshot the whole commercial document when issued. Historical records stay correct no matter how the catalog evolves.",
        },
        {
          heading: "Procurement by reference, not by foreign key",
          body: "Receiving posts into the inventory ledger through logical references - reference_type plus reference_id - instead of physical foreign keys, so procurement and inventory stay independently evolvable while remaining traceable.",
        },
        {
          heading: "Concurrency treated as testable behavior",
          body: "Order-cancellation and allocation paths have dedicated race-condition integration tests, and competing payment and production requests are verified with SQL checks - the places where commerce data can corrupt under parallel writes are exercised deliberately.",
        },
        {
          heading: "REST + OpenAPI over alternatives",
          body: "A documented REST contract gives every endpoint a spec by default and keeps the two Next.js surfaces honest. For a product with an admin app and a storefront, boring and documented beats clever.",
        },
      ],
      surface: [
        {
          title: "Storefront",
          items: [
            "Catalog browsing",
            "Product detail & variants",
            "Cart & checkout",
            "Customer orders & authentication",
          ],
        },
        {
          title: "Operations admin",
          items: [
            "Orders, packing slips & fulfillment",
            "Invoices, payments & payment plans",
            "Refunds & returns",
            "Customers, loyalty & resellers",
          ],
        },
        {
          title: "Supply admin",
          items: [
            "Preorders & production batches",
            "Suppliers, purchase orders & receipts",
            "Inventory & stock operations",
            "Price lists & finance",
          ],
        },
      ],
      currentState: [
        "Actively building. The API, schema and both Next.js surfaces run against a Docker/Dokploy staging environment, with the schema at 69 migrations and still evolving.",
        "Status: building - not yet a launched product.",
      ],
      learnings: [
        "Domain boundaries are cheaper to draw early than to untangle later.",
        "An order is a historical record - treating it as one simplifies pricing and keeps reporting honest.",
        "Once a document is issued, it outlives the data it came from - invoices and receipts own their snapshots.",
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
      "A multi-tenant product platform - shared foundation, per-tenant configuration, and industry modules. Travel is the first working vertical.",
    status: "building",
    role: ["Product Engineering", "Frontend", "Backend"],
    stack: ["Next.js", "TypeScript", "Go", "PostgreSQL"],
    featured: true,
    caseStudy: {
      problem: [
        "Client-facing business applications are mostly the same product wearing different clothes. A booking app for a travel agency, a patient system for a dental clinic, and a course platform for an educator share the same skeleton: accounts, tenants, admin tooling, domain records, operational views.",
        "Building that skeleton from scratch on every project is the real cost - not the domain logic. Repicode exists to make the skeleton reusable.",
      ],
      built: {
        intro:
          "A modular monolith in active development: a shared product foundation - identity, tenancy, RBAC, configuration, workflow - with industry modules built on top. The travel vertical is implemented end to end; dental and LMS remain target verticals.",
        points: [
          "Product foundation: organizations, users, memberships, roles and permissions - RBAC resolved per membership on every request",
          "Per-tenant configuration: terminology, themes, feature flags, workflows and preferences - one codebase, different product behavior per organization",
          "Module enablement per organization - tenants turn industry modules on or off through the platform registry",
          "Travel industry module: packages, departures, passengers, bookings, payment plans, visas and hospitality - a tenant-safe schema on the shared foundation",
          "Booking lifecycle on the platform workflow engine: 11 states from inquiry to departure, idempotent booking creation, audit and outbox events on critical mutations",
          "Next.js product frontend covering bookings, packages, my-trip, payments, reports and operations - built against dedicated OpenAPI contracts",
        ],
      },
      challenges: [
        {
          heading: "The abstraction level problem",
          body: "Too generic and the platform does nothing; too specific and it's just one product with extra steps. The line that held: infrastructure is shared, workflow is configurable, domain logic lives in modules.",
        },
        {
          heading: "Reuse without parallel systems",
          body: "The travel module only proves the platform if it builds nothing twice. It reuses the foundation's organizations, customers, catalog items, transactions, payments, documents, workflow, audit and outbox - a second auth or tenancy system would break the premise.",
        },
        {
          heading: "Config vs code",
          body: "Every 'just make it configurable' decision creates a schema you now have to maintain. Tenant configuration covers terminology, themes, feature flags, workflows, preferences and enabled modules - anything deeper belongs in a module, not a config flag.",
        },
        {
          heading: "Module boundaries",
          body: "Modules have to work without knowing about each other. The platform defines the contracts - tenancy, auth, data ownership - and each module implements its domain inside them.",
        },
      ],
      architecture: [
        {
          label: "Product Foundation",
          items: [
            "Identity",
            "Organizations",
            "RBAC",
            "Customers",
            "Payments",
            "Documents",
            "Workflow",
            "Audit & Outbox",
          ],
          description: "shared platform services",
        },
        {
          label: "Industry Modules",
          items: ["Travel"],
          description: "implemented - dental & LMS are target verticals",
        },
        {
          label: "Product Configuration",
          description:
            "terminology · themes · feature flags · preferences per tenant",
        },
        {
          label: "Client Product Instance",
          description: "a configured vertical app per tenant",
        },
      ],
      decisions: [
        {
          heading: "Industry modules inside a modular monolith",
          body: "Travel is the first real module, and it had to prove the foundation can carry a vertical without parallel infrastructure - no separate app, microservice, or second auth/tenancy/payment/workflow system. It reuses all of them.",
        },
        {
          heading: "Tenant safety as a database constraint",
          body: "Every table carries organization_id, and cross-tenant relationships use composite foreign keys - (organization_id, id) - so referential integrity is tenant-safe by constraint, not by application-code convention.",
        },
        {
          heading: "Booking lifecycle on the shared workflow engine",
          body: "Booking states from inquiry to departure are seeded as a global workflow definition all tenants share. The module gets lifecycle management and guarded transitions without building its own engine.",
        },
        {
          heading: "Idempotent, auditable mutations",
          body: "Booking creation accepts an Idempotency-Key for safe retries, and critical mutations run transactionally with audit, activity and outbox events - retryable and observable by default.",
        },
        {
          heading: "Contract-first APIs",
          body: "Each surface ships a dedicated OpenAPI spec - the travel spec alone covers packages, departures, bookings, payments, visas and operational endpoints. The frontend builds against the contract, not against assumptions.",
        },
      ],
      surface: [
        {
          title: "Platform foundation",
          items: [
            "Organizations, memberships & RBAC",
            "Tenant configuration & module enablement",
            "Shared workflow, audit & outbox",
          ],
        },
        {
          title: "Travel vertical - implemented",
          items: [
            "Packages & departures",
            "Booking lifecycle & passengers",
            "Payment plans, visas & hospitality",
            "Frontend: bookings, packages, my-trip, payments, reports",
          ],
        },
        {
          title: "Target verticals",
          items: [
            "Dental - designed for, not built",
            "LMS - designed for, not built",
            "A vertical is modules plus tenant configuration, not a new codebase",
          ],
        },
      ],
      currentState: [
        "Actively building. The foundation - organizations, RBAC, tenant configuration, workflow - and the travel module are implemented: 35 migrations, dedicated OpenAPI specs, and a booking lifecycle running end to end through the product frontend.",
        "Travel is the first working vertical, not a launched product. Dental and LMS remain target verticals. Status: building.",
      ],
      learnings: [
        "A platform earns its abstractions when the first real vertical has to live inside them.",
        "Tenancy in application code is a promise; composite foreign keys make it a constraint.",
        "Reuse is a design problem before it's a code problem.",
        "The second vertical is the real test - 'reusable' stays a hypothesis until dental or LMS builds cheaply on this foundation.",
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
    thumbnail: "/projects/cuetoba-1.png",
    screenshots: ["/projects/cuetoba-2.png"],
    demoUrl: "https://cuetoba.com",
    links: [
      { label: "Customer app", url: "https://app.cuetoba.com" },
      { label: "Backoffice", url: "https://bo.cuetoba.com" },
    ],
    caseStudy: {
      problem: [
        "Project knowledge lives everywhere except where it's needed: docs, tickets, chat threads, meeting notes. When it's time to brief an AI tool or hand context to someone else, it has to be reassembled by hand - every time.",
        "Cuetoba treats project knowledge as structured, reusable material instead of scattered notes - something you organize once and reuse as AI-ready context.",
      ],
      built: {
        intro:
          "A live product built as four coordinated applications: a marketing site, a customer workspace for project knowledge and context recipes, a node-based visual flow workspace, and an internal backoffice - all on a shared domain model.",
        points: [
          "Project knowledge workspace: projects, knowledge entries and context recipes that compile project material into structured output - text, markdown, JSON or HTML",
          "Visual flow workspace on React Flow: typed nodes (personas, steps, decisions, requirements, documents, questions, systems) edited as a persistent graph, with layout and collision handling",
          "Flows as versioned data: snapshot versions with schema versioning, token-based sharing, import/export and portability - not disposable canvas state",
          "Review workflow over flow versions: review sessions with items and comments, plus public approve/request-changes links so external reviewers don't need accounts",
          "Workspace-level ownership: projects and subscriptions live under workspaces with member roles, not isolated user records",
          "Subscription and promotion engine: plans, entitlements, promotions and codes administered through a dedicated backoffice",
        ],
      },
      challenges: [
        {
          heading: "Structured context, not note storage",
          body: "Storing notes is easy; making them reusable is the product. Recipes define instructions and an output format, then compile a project's knowledge into context a person or AI tool can actually consume.",
        },
        {
          heading: "A graph that means something",
          body: "This isn't generic diagramming. Every node type has domain semantics - a decision is not a requirement is not a question - and statuses like draft, needs_review and confirmed carry product meaning through the flow.",
        },
        {
          heading: "Versioning a living canvas",
          body: "A flow is edited continuously, but sharing and review need stable targets. Versions store immutable snapshots with their own schema version, so a shared link or review session stays valid while the canvas keeps moving.",
        },
        {
          heading: "One product, four surfaces",
          body: "Marketing, customer app, flow workspace and backoffice share domain concepts - workspaces, projects, plans - without sharing a codebase. The seam between them is the data model, which forced the domain language to stay consistent.",
        },
      ],
      architecture: [
        {
          label: "Marketing",
          description: "cuetoba.com - positioning & acquisition",
        },
        {
          label: "Customer App",
          description:
            "app.cuetoba.com - projects · knowledge · context recipes",
        },
        {
          label: "Flow Workspace",
          items: ["Editor", "Versioning", "Sharing", "Review"],
          description: "node-based project flows",
        },
        {
          label: "Backoffice",
          description:
            "bo.cuetoba.com - users · workspaces · subscriptions · promotions · audit",
        },
        {
          label: "Supabase PostgreSQL",
          description: "Prisma domain model · Supabase auth",
        },
      ],
      decisions: [
        {
          heading: "Recipes as the AI boundary",
          body: "Instead of coupling the product to one AI provider, recipes compile project knowledge into portable structured output - text, markdown, JSON or HTML - that works with whatever tool the customer already uses.",
        },
        {
          heading: "Flows as data, not drawings",
          body: "Nodes and edges persist as domain records, and versions store full snapshots with a schema version. Sharing and review operate on versions, so they stay meaningful as the graph evolves.",
        },
        {
          heading: "Workspace-level ownership",
          body: "Projects and subscriptions belong to workspaces with membership roles rather than to individual accounts - the access model matches how a product is actually shared inside a team.",
        },
        {
          heading: "A real backoffice, not admin routes",
          body: "Plans, subscriptions, promotions, users, workspaces and audit live in a separate application, so operational tooling doesn't leak into the customer-facing product.",
        },
        {
          heading: "Supabase as the product backend",
          body: "Auth, PostgreSQL and storage come from Supabase, with Prisma owning the domain model - the effort goes into product surface area instead of infrastructure plumbing.",
        },
      ],
      surface: [
        {
          title: "Customer app - app.cuetoba.com",
          items: [
            "Projects & knowledge entries",
            "Context recipes & structured output",
            "Supabase-backed authentication",
          ],
        },
        {
          title: "Flow workspace",
          items: [
            "Node/edge graph editor",
            "Version snapshots & compare",
            "Share tokens & import/export",
            "Review sessions & comments",
          ],
        },
        {
          title: "Backoffice - bo.cuetoba.com",
          items: [
            "Users & workspaces",
            "Plans, subscriptions & entitlements",
            "Promotions & codes",
            "Audit log & dashboard",
          ],
        },
      ],
      currentState: [
        "Live across three public surfaces - cuetoba.com, app.cuetoba.com and bo.cuetoba.com. The flow workspace is implemented as its own application within the product.",
        "Status: live - shipped and running.",
      ],
      learnings: [
        "Context is only reusable when it's structured - freeform notes don't compose.",
        "A visual editor earns its complexity when the model underneath is real data, not canvas state.",
        "The backoffice is part of the product - operational tooling can't be an afterthought once subscriptions and promotions exist.",
        "Multiple focused applications kept each surface honest about its job.",
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
    stack: ["Next.js", "TypeScript", "PostgreSQL", "UploadThing", "Gemini AI"],
    thumbnail: "/projects/cumentor.png",
    demoUrl: "https://cumentor.novanop.com",
    sourceUrl: "https://github.com/novanurhamdani/cumentor",
    profile: {
      built: [
        "PDF upload and document handling",
        "Conversational document exploration through a chat interface",
        "Document storage and retrieval backed by PostgreSQL and UploadThing",
        "Google Drive document import via Google Picker and OAuth",
        "Stripe subscription billing - checkout, billing portal, and webhook-synced subscription state",
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

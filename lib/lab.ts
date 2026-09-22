import { LabItem } from "../types";

/**
 * Engineering Lab - experiments, prototypes, and small systems built to
 * understand how things work. Slightly more playful territory.
 * None of these are production systems.
 */
export const labItems: LabItem[] = [
  {
    slug: "flowpay",
    title: "Flowpay",
    subtitle: "Payment Operations Sandbox",
    status: "planned",
    stack: ["Next.js", "Go", "PostgreSQL"],
    href: "/work/flowpay",
    focus: [
      "Transaction lifecycle",
      "Idempotency",
      "Pagination & filtering",
      "Audit trails",
      "Webhook simulation",
      "Reconciliation",
      "Bulk operations",
    ],
  },
  {
    slug: "riskflow",
    title: "RiskFlow",
    subtitle: "Financial Review Workflow",
    status: "planned",
    stack: ["Next.js", "Go", "PostgreSQL"],
    href: "/work/riskflow",
    focus: [
      "Workflow states",
      "Review process",
      "Risk assessment",
      "Audit trail",
      "Reviewer operations",
    ],
  },
  {
    slug: "go-api-lab",
    title: "Go API Lab",
    subtitle: "Backend experiments",
    status: "experiment",
    stack: ["Go", "PostgreSQL"],
    focus: [
      "Go REST APIs",
      "PostgreSQL",
      "Validation",
      "Transactions",
      "Authentication",
      "Error handling",
      "Backend architecture",
    ],
  },
  {
    slug: "creative-ui-lab",
    title: "Creative UI Lab",
    subtitle: "Interaction and frontend experiments",
    status: "experiment",
    stack: ["React", "TypeScript"],
    focus: ["Interaction patterns", "Motion & transitions", "Component craft"],
  },
];

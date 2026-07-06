import type { LucideIcon } from "lucide-react";
import {
  Map,
  Landmark,
  Scale,
  Building2,
  Radio,
  Database,
  BrainCircuit,
  Lock,
  Layers,
  Satellite,
  FileCheck2,
  Users,
  Banknote,
  Gavel,
} from "lucide-react";

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Research", href: "#research" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Contact", href: "#contact" },
] as const;

export const AUDIENCES: { label: string; icon: LucideIcon }[] = [
  { label: "Citizens", icon: Users },
  { label: "Developers", icon: Building2 },
  { label: "Financial Institutions", icon: Banknote },
  { label: "Legal Professionals", icon: Gavel },
  { label: "Government Bodies", icon: Landmark },
];

export const PILLARS: {
  title: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    title: "GIS Intelligence",
    description:
      "Satellite-grade spatial mapping fused with cadastral survey data, rendered as a living, queryable map of every parcel.",
    icon: Map,
  },
  {
    title: "Applied AI",
    description:
      "Machine learning models that read, reconcile, and verify decades of handwritten and scanned land records at scale.",
    icon: BrainCircuit,
  },
  {
    title: "LegalTech",
    description:
      "Title chains, encumbrances, and litigation history structured into a single verifiable legal record.",
    icon: Scale,
  },
  {
    title: "PropTech",
    description:
      "Transaction-ready intelligence for developers, lenders, and investors underwriting real property at speed.",
    icon: Building2,
  },
];

export const MAHAATLAS_FEATURES: {
  title: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Unified Land Records",
    description:
      "7/12 extracts, mutation entries, and property cards reconciled into one continuously updated source of truth.",
    icon: Database,
  },
  {
    title: "Satellite Parcel Mapping",
    description:
      "Every survey number rendered on a live satellite layer, cross-checked against revenue department boundaries.",
    icon: Satellite,
  },
  {
    title: "Title Verification Engine",
    description:
      "AI-assisted chain-of-title analysis that flags disputes, encumbrances, and irregularities before they become risk.",
    icon: FileCheck2,
  },
  {
    title: "Encrypted Access Layer",
    description:
      "Role-based, auditable access for government departments, institutions, and verified professionals.",
    icon: Lock,
  },
  {
    title: "Layered Intelligence",
    description:
      "Zoning, tenancy, litigation, and revenue layers overlaid on a single parcel view for instant due diligence.",
    icon: Layers,
  },
  {
    title: "Real-Time Sync",
    description:
      "Direct reconciliation with Maharashtra land record systems, keeping every record current, not archival.",
    icon: Radio,
  },
];

export const FUTURE_PRODUCTS: {
  code: string;
  name: string;
  tagline: string;
  description: string;
  icon: LucideIcon;
  status: "In Research" | "In Design" | "Planned";
}[] = [
  {
    code: "02",
    name: "LegalAtlas",
    tagline: "Judicial & legal record intelligence",
    description:
      "A national layer connecting land disputes, court orders, and registry records into one legal intelligence graph for practitioners and institutions.",
    icon: Gavel,
    status: "In Research",
  },
  {
    code: "03",
    name: "UrbanAtlas",
    tagline: "City planning & zoning intelligence",
    description:
      "Master-plan aware urban intelligence for municipal bodies and planners — zoning, land use, and infrastructure overlays in one map.",
    icon: Building2,
    status: "In Design",
  },
  {
    code: "04",
    name: "InfraAtlas",
    tagline: "Infrastructure asset intelligence",
    description:
      "A live registry of public infrastructure assets — roads, utilities, and works — mapped against land ownership for transparent planning.",
    icon: Radio,
    status: "Planned",
  },
];

export const TECH_STACK: { name: string; category: string }[] = [
  { name: "Next.js 15", category: "Framework" },
  { name: "TypeScript", category: "Language" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "PostGIS", category: "Spatial Database" },
  { name: "Python / PyTorch", category: "AI & ML" },
  { name: "Apache Kafka", category: "Data Pipelines" },
  { name: "Mapbox GL", category: "Cartography" },
  { name: "AWS GovCloud", category: "Infrastructure" },
  { name: "OCR + NLP Models", category: "Document Intelligence" },
  { name: "Zero-Trust Security", category: "Access Control" },
];

export const IMPACT_STATS: {
  value: string;
  label: string;
  detail: string;
}[] = [
  {
    value: "3.6 Cr+",
    label: "Land parcels in Maharashtra",
    detail: "Records fragmented across Talathi offices, courts, and registries.",
  },
  {
    value: "60–70%",
    label: "of civil litigation in India",
    detail: "Estimated to stem from land and property disputes.",
  },
  {
    value: "₹1 Trillion+",
    label: "in stalled asset value",
    detail: "Property and credit decisions delayed by title uncertainty.",
  },
  {
    value: "35 Districts",
    label: "targeted for phased rollout",
    detail: "A statewide intelligence layer, built district by district.",
  },
];

export const ROADMAP: {
  phase: string;
  period: string;
  title: string;
  description: string;
  status: "complete" | "active" | "upcoming";
}[] = [
  {
    phase: "Phase 01",
    period: "2024",
    title: "Foundation & Data Architecture",
    description:
      "Cadastral data modeling, GIS pipeline design, and partnerships to structure Maharashtra's fragmented land record systems.",
    status: "complete",
  },
  {
    phase: "Phase 02",
    period: "2025",
    title: "MahaAtlas Private Rollout",
    description:
      "Pilot deployment across select districts with financial institutions and legal partners for title verification workflows.",
    status: "active",
  },
  {
    phase: "Phase 03",
    period: "2026",
    title: "Statewide Public Access",
    description:
      "Citizen-facing access layer, expanded district coverage, and integration with state revenue department systems.",
    status: "upcoming",
  },
  {
    phase: "Phase 04",
    period: "2027",
    title: "LegalAtlas & UrbanAtlas Launch",
    description:
      "Expansion of the Atlas platform into judicial intelligence and urban planning, extending beyond Maharashtra.",
    status: "upcoming",
  },
  {
    phase: "Phase 05",
    period: "2028+",
    title: "National Digital Public Infrastructure",
    description:
      "A federated intelligence layer across Indian states — land, law, and infrastructure unified as public digital infrastructure.",
    status: "upcoming",
  },
];

export const RESEARCH_PAPERS: {
  title: string;
  category: string;
  summary: string;
  date: string;
}[] = [
  {
    title: "Reconciling Fragmented Land Records with Graph-Based AI Models",
    category: "Applied AI",
    summary:
      "A framework for resolving conflicting ownership claims across decades of scanned revenue documents using graph neural networks.",
    date: "2026",
  },
  {
    title: "Digital Public Infrastructure for Land: A Maharashtra Case Study",
    category: "Policy & DPI",
    summary:
      "How population-scale, interoperable land data platforms can be built as public infrastructure rather than proprietary products.",
    date: "2025",
  },
  {
    title: "Spatial Trust Scores: Quantifying Title Risk at the Parcel Level",
    category: "LegalTech",
    summary:
      "A proposed scoring methodology for encumbrance and dispute risk, built from litigation, registry, and satellite signals.",
    date: "2025",
  },
];

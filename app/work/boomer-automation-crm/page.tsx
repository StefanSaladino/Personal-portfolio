import CaseStudy, { type CaseStudyData } from "../CaseStudy";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Boomer Automation CRM Case Study", description: "Public-safe architecture case study for Stefan Saladino's private multi-tenant CRM and website-intelligence platform.", alternates: { canonical: "/work/boomer-automation-crm" } };

const data: CaseStudyData = {
  index: "01",
  theme: "crm",
  kicker: "Private commercial platform · Ongoing",
  title: "Boomer",
  accent: "Automation CRM",
  thesis: "A private CRM and website-auditing platform I’m building for Boomer Automation.",
  intro: "Boomer Automation CRM keeps client organizations, leads, tasks, appointments, websites, audits and issue tracking in one place. The repository is private, so this page focuses on the parts of the architecture I can discuss publicly.",
  role: "Founder · Product designer · Full-stack developer",
  scope: "Strategy, UX, frontend, API, data, authorization, testing and delivery",
  stack: ["React", "TypeScript", "Fastify", "Prisma", "PostgreSQL"],
  systemTitle: "How the CRM is put together.",
  challengeTitle: "Keeping every client’s data separate.",
  approachTitle: "Permissions are part of the foundation.",
  outcomeTitle: "A solid base I can keep extending.",
  challenge: "The CRM supports more than one client organization. Owners, administrators and members need different tools, and nobody should ever be able to reach another organization’s records. It also has to handle ordinary CRM work and website audits without feeling like two separate products.",
  approach: "I scoped requests and records by organization, then defined four clear role levels: platform owner, organization owner, administrator and member. Validation, audit records and regression tests make those rules easier to inspect and much harder to break accidentally.",
  outcome: "I now have a stable base for adding client operations, website checks and automation workflows without weakening the boundaries between organizations. The platform is still being actively developed and tested as a private commercial product.",
  nodes: ["Authenticated UI", "Fastify API", "Role boundary", "Domain workflows", "PostgreSQL"],
  principles: [{ value: "4", label: "clear role levels" }, { value: "Separate", label: "client organization data" }, { value: "Automated", label: "release checks" }, { value: "Private", label: "repository" }],
  nextHref: "/work/home-run-derby",
  nextLabel: "Home Run Derby PWA",
};

export default function Page() { return <CaseStudy data={data} />; }

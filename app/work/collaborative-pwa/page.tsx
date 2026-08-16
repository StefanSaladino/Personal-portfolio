import CaseStudy, { type CaseStudyData } from "../CaseStudy";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Collaborative PWA Case Study", description: "Mobile-first realtime React and Supabase product case study by Stefan Saladino.", alternates: { canonical: "/work/collaborative-pwa" } };

const data: CaseStudyData = {
  index: "03",
  theme: "collab",
  kicker: "Real-time product · Mobile-first PWA",
  title: "Collaborative",
  accent: "PWA",
  thesis: "A private app for shared wagers, recipes, places, rewards and plans.",
  intro: "This mobile-first PWA gives two people one place for the things they plan and keep together. It syncs updates in real time, but still keeps creator-only settings and actions private when they need to be.",
  imageSrc: "/projects/collaborative-pwa-private-blurred.png",
  imageAlt: "Collaborative PWA home screen with private names blurred",
  imageCaption: "Shared home · Private names redacted",
  imageOrientation: "portrait",
  role: "Product designer · Full-stack developer",
  scope: "Product flows, responsive UI, authentication, data modeling, privacy and realtime",
  stack: ["React", "TypeScript", "Supabase", "PostgreSQL", "Realtime"],
  systemTitle: "How shared updates stay private and in sync.",
  challengeTitle: "Shared doesn’t mean everything is public.",
  approachTitle: "The rules live close to the data.",
  outcomeTitle: "New features can reuse the same privacy model.",
  challenge: "Some information belongs to both users, while some settings should only be changed by the person who created them. Updates also need to appear quickly on both devices without revealing private configuration or leaving the app in conflicting states.",
  approach: "I put the permission rules into database functions, migrations and row-level policies, then made those same rules clear in the interface. Creator-only editing, private wheel settings and multi-step wager settlements are defined as product rules instead of one-off conditions.",
  outcome: "The app can keep adding shared activities without redesigning privacy and synchronization every time. New features inherit the same approach to identity, ownership and real-time updates.",
  nodes: ["Authenticated user", "Product action", "Policy boundary", "Database function", "Realtime update"],
  principles: [{ value: "Realtime", label: "updates on both devices" }, { value: "Creator", label: "edit ownership" }, { value: "RLS", label: "data privacy rules" }, { value: "PWA", label: "mobile-first app" }],
  nextHref: "/#work",
  nextLabel: "Return to selected work",
};

export default function Page() { return <CaseStudy data={data} />; }

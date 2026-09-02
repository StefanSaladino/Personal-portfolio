import CaseStudy, { type CaseStudyData } from "../CaseStudy";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Top Set Fitness PWA Case Study",
  description: "Published mobile-first fitness PWA case study by Stefan Saladino, covering workout tracking, progress, competition, offline resilience and Supabase-backed authorization.",
  alternates: { canonical: "/work/top-set" },
};

const data: CaseStudyData = {
  index: "04",
  theme: "topset",
  kicker: "Published product · Mobile-first fitness PWA",
  title: "Top",
  accent: "Set",
  thesis: "A lifting-first workout tracker that turns personal progress into friendly competition.",
  intro: "Top Set is an installable fitness PWA for logging lifts and cardio, following exercise progress, and competing with friends. Workout state stays durable through mobile interruptions, while scoring, roles and group data are enforced behind the interface.",
  imageSrc: "/projects/top-set-active-workout.jpeg",
  imageAlt: "Top Set mobile workout screen showing an active barbell bench press set with weight and repetitions",
  imageCaption: "Active lift · Set tracking",
  imageOrientation: "portrait",
  role: "Product designer · Full-stack developer",
  scope: "Product strategy, responsive UX, scoring domain, offline state, Supabase, testing and launch",
  stack: ["React", "TypeScript", "Supabase", "PostgreSQL", "PWA"],
  systemTitle: "How one workout becomes trusted progress.",
  challengeTitle: "Fitness scoring has to reward consistency—not loopholes.",
  approachTitle: "I made the rules explicit and durable.",
  outcomeTitle: "Top Set is published and ready for real workouts.",
  challenge: "A social fitness app has to stay fast enough during a lift, recover safely after interruptions, and compare users fairly. Raw strength alone cannot determine scores, and offline retries must not create duplicate workouts or XP.",
  approach: "I separated the React screens from services and pure scoring rules, used Supabase Auth, row-level security and database functions for authoritative actions, and added IndexedDB recovery for active sessions. Automated unit, integration, browser and visual checks cover workout logging, progress, groups and administration.",
  outcome: "The published PWA now supports lift and cardio logging, exercise progress, weekly goals, badges, group standings, chat, reactions and a global leaderboard in an app-first mobile interface. It can be installed and continue loading its shell offline, while private data and scoring paths remain protected.",
  nodes: ["Workout UI", "Durable session", "Supabase boundary", "Scoring ledger", "Progress + standings"],
  principles: [{ value: "Published", label: "installable PWA" }, { value: "125 XP", label: "daily scoring ceiling" }, { value: "Offline", label: "session recovery" }, { value: "RLS", label: "data boundaries" }],
  nextHref: "/#work",
  nextLabel: "Return to selected work",
};

export default function Page() { return <CaseStudy data={data} />; }

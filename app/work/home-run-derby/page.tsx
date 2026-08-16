import CaseStudy, { type CaseStudyData } from "../CaseStudy";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Home Run Derby PWA Case Study", description: "React, Phaser and TypeScript browser-game case study by Stefan Saladino.", alternates: { canonical: "/work/home-run-derby" } };

const data: CaseStudyData = {
  index: "02",
  theme: "hrd",
  kicker: "Browser game · Creative engineering",
  title: "Home Run",
  accent: "Derby PWA",
  thesis: "A browser baseball game built with React, Phaser and shared TypeScript.",
  intro: "Home Run Derby PWA combines a React interface with Phaser gameplay, player accounts and saved progression. It is designed to work on both desktop and mobile, with the same game rules shared across the frontend and API.",
  imageSrc: "/projects/home-run-derby-dashboard.png",
  imageAlt: "Home Run Derby PWA practice screen showing Shohei Ohtani selected at Oracle Park",
  imageCaption: "Practice setup · Oracle Park",
  imageOrientation: "landscape",
  role: "Product designer · Gameplay and full-stack developer",
  scope: "Game systems, UI, responsive presentation, domain architecture and integration",
  stack: ["React", "TypeScript", "Phaser", "Node.js", "Supabase"],
  systemTitle: "How the game and app stay in sync.",
  challengeTitle: "React and Phaser have to feel like one product.",
  approachTitle: "I split the project into focused packages.",
  outcomeTitle: "New game systems can be added safely.",
  challenge: "The project has a conventional React application and a real-time Phaser game. Player profiles, tournaments, stadiums, ball flight and saved progress all have to agree, even though they run in different parts of the application.",
  approach: "I organized the code into web, API, shared and game-core packages. Shared TypeScript contracts keep the interface and gameplay aligned, while focused tests cover motion, avatars, tournaments, persistence and stadium-specific behavior.",
  outcome: "The game now has a structure where I can work on a stadium, animation or gameplay system without rewriting the rest of the product. Each addition can be tested on its own before it is connected to the full game.",
  nodes: ["React shell", "Game bridge", "Phaser runtime", "Shared game core", "Persistent profile"],
  principles: [{ value: "4", label: "workspace packages" }, { value: "2", label: "connected interfaces" }, { value: "Shared", label: "game rules" }, { value: "Responsive", label: "desktop and mobile" }],
  nextHref: "/work/collaborative-pwa",
  nextLabel: "Collaborative PWA",
};

export default function Page() { return <CaseStudy data={data} />; }

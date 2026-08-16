import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import path from "node:path";
import test from "node:test";

const root = path.resolve(import.meta.dirname, "..");
const out = path.join(root, "out");

const routeFiles = [
  "index.html",
  "work/boomer-automation-crm/index.html",
  "work/collaborative-pwa/index.html",
  "work/home-run-derby/index.html",
  "robots.txt",
  "sitemap.xml",
];

test("exports every public portfolio route", async () => {
  for (const routeFile of routeFiles) {
    await access(path.join(out, routeFile));
  }
});

test("keeps the contact details private and LinkedIn exact", async () => {
  const homepage = await readFile(path.join(out, "index.html"), "utf8");
  assert.match(homepage, /Email me/i);
  assert.match(
    homepage,
    /https:\/\/www\.linkedin\.com\/in\/stefan-saladino-32101a1a4/i,
  );
  assert.doesNotMatch(homepage, /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i);
});

test("includes GA4 and the portfolio engagement events", async () => {
  const files = await Promise.all([
    readFile(path.join(out, "index.html"), "utf8"),
    readFile(path.join(root, "app/Analytics.tsx"), "utf8"),
    readFile(path.join(root, "app/page.tsx"), "utf8"),
  ]);
  const content = files.join("\n");

  for (const value of [
    "G-7ZZLSDQWS9",
    "case_study_open",
    "client_site_visit",
    "contact_intent",
    "social_profile_visit",
  ]) {
    assert.match(content, new RegExp(value));
  }
});

test("contains no backend or hosting starter scaffold", async () => {
  for (const forbidden of [
    ".openai/hosting.json",
    "app/chatgpt-auth.ts",
    "db",
    "drizzle",
    "worker",
    "vite.config.ts",
    "wrangler.toml",
  ]) {
    await assert.rejects(access(path.join(root, forbidden)));
  }
});

import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import path from "node:path";
import test from "node:test";

const root = path.resolve(import.meta.dirname, "..");
const out = path.join(root, "out");

const routeFiles = [
  "index.html",
  "resume/index.html",
  "work/boomer-automation-crm/index.html",
  "work/collaborative-pwa/index.html",
  "work/home-run-derby/index.html",
  "work/top-set/index.html",
  "robots.txt",
  "sitemap.xml",
  "Stefan_Saladino_Resume_2026.pdf",
];

test("exports every public portfolio route", async () => {
  for (const routeFile of routeFiles) {
    await access(path.join(out, routeFile));
  }
});

test("publishes Top Set as a complete portfolio case study", async () => {
  const [homepage, caseStudy, sitemap] = await Promise.all([
    readFile(path.join(out, "index.html"), "utf8"),
    readFile(path.join(out, "work/top-set/index.html"), "utf8"),
    readFile(path.join(out, "sitemap.xml"), "utf8"),
    access(path.join(out, "projects/top-set-active-workout.jpeg")),
  ]);

  assert.match(homepage, /Top Set/);
  assert.match(homepage, /\/work\/top-set/);
  assert.match(caseStudy, /Published product/);
  assert.match(caseStudy, /Active lift/);
  assert.match(caseStudy, /125 XP/);
  assert.match(sitemap, /\/work\/top-set/);
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

test("keeps every case-study hero inside the mobile viewport", async () => {
  const [caseStudy, stylesheet, homepageSource, crmPage, crmExport] = await Promise.all([
    readFile(path.join(root, "app/work/CaseStudy.tsx"), "utf8"),
    readFile(path.join(root, "app/globals.css"), "utf8"),
    readFile(path.join(root, "app/page.tsx"), "utf8"),
    readFile(path.join(root, "app/work/boomer-automation-crm/page.tsx"), "utf8"),
    readFile(path.join(out, "work/boomer-automation-crm/index.html"), "utf8"),
  ]);

  assert.match(caseStudy, /case-title-line case-title-base/);
  assert.match(caseStudy, /case-title-line case-title-accent/);
  assert.match(stylesheet, /grid-template-columns:\s*minmax\(0,\s*1fr\)/);
  assert.match(stylesheet, /\.case-title\s*\{[^}]*min-width:\s*0/s);
  assert.match(stylesheet, /\.case-title h1\s*\{[^}]*max-width:\s*100%/s);
  assert.match(crmPage, /accent:\s*"Automation CRM"/);
  assert.doesNotMatch(crmPage, /BoomerAutomationCRM/);
  assert.doesNotMatch(homepageSource, /BoomerAutomationCRM/);

  const visibleText = crmExport
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ");
  assert.match(visibleText, /Boomer\s+Automation CRM/);
});

test("keeps the homepage orbit and CRM visual mobile-safe", async () => {
  const stylesheet = await readFile(path.join(root, "app/globals.css"), "utf8");

  assert.match(stylesheet, /\.node-design\s*\{\s*left:\s*17%;\s*top:\s*31%/);
  assert.match(stylesheet, /\.node-engineer\s*\{\s*left:\s*81%;\s*right:\s*auto;\s*top:\s*28%/);
  assert.match(stylesheet, /\.node-launch\s*\{\s*left:\s*73%;\s*right:\s*auto;\s*top:\s*80%;\s*bottom:\s*auto/);
  assert.match(stylesheet, /\.signal-stage\s*\{\s*width:\s*min\(76vw,\s*290px\);\s*margin:\s*8px auto 0/);
  assert.match(stylesheet, /\.crm-visual\s*\{\s*width:\s*100%;\s*max-width:\s*100%;\s*margin:\s*10px auto 0/);
  assert.match(stylesheet, /\.crm-window\s*\{\s*width:\s*100%;\s*transform:\s*none/);
  assert.doesNotMatch(stylesheet, /\.crm-visual\s*\{\s*width:\s*128%/);
  assert.doesNotMatch(stylesheet, /margin:\s*-6px\s+-82px/);
});

test("keeps the header fixed and uses a viewport-level mobile navigation overlay", async () => {
  const [header, homepage, stylesheet, headerStyles] = await Promise.all([
    readFile(path.join(root, "app/SiteHeader.tsx"), "utf8"),
    readFile(path.join(root, "app/page.tsx"), "utf8"),
    readFile(path.join(root, "app/globals.css"), "utf8"),
    readFile(path.join(root, "app/SiteHeader.module.css"), "utf8"),
  ]);

  assert.match(homepage, /<SiteHeader\s*\/>/);
  assert.doesNotMatch(homepage, /Stefan_Saladino_Resume_2026\.pdf/);
  assert.match(header, /href="\/resume"/);
  assert.match(header, /aria-controls="mobile-navigation"/);
  assert.match(header, /aria-modal="true"/);
  assert.match(header, /root\.classList\.add\("menu-open"\)/);
  assert.match(header, /event\.key === "Escape"/);
  assert.match(header, /<\/header>\s*\n\s*\{menuOpen && \(/s);
  assert.match(headerStyles, /\.header\s*\{[^}]*position:\s*fixed/s);
  assert.match(
    headerStyles,
    /\.mobileMenu\s*\{[\s\S]*?position:\s*fixed;[\s\S]*?inset:\s*0;[\s\S]*?height:\s*100dvh;/,
  );
  assert.match(headerStyles, /overflow-y:\s*auto/);
  assert.match(stylesheet, /html\.menu-open,\s*html\.menu-open body\s*\{[^}]*overflow:\s*hidden/s);
  assert.match(stylesheet, /scroll-padding-top:\s*108px/);
});

test("serves the résumé as a web page with explicit PDF actions", async () => {
  const [resumeSource, resumeExport, sitemap] = await Promise.all([
    readFile(path.join(root, "app/resume/page.tsx"), "utf8"),
    readFile(path.join(out, "resume/index.html"), "utf8"),
    readFile(path.join(out, "sitemap.xml"), "utf8"),
  ]);

  assert.match(resumeSource, /<main[^>]+id="resume-document"/s);
  assert.match(resumeSource, /download="Stefan_Saladino_Resume_2026\.pdf"/);
  assert.match(resumeExport, /Open PDF/);
  assert.match(resumeExport, /Download PDF/);
  assert.match(resumeExport, /Stefan_Saladino_Resume_2026\.pdf/);
  assert.match(sitemap, /\/resume/);
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

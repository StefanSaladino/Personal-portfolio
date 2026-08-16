/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useRef, useState } from "react";
import { usePortfolioAnalytics } from "./Analytics";

const Arrow = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

const EMAIL_CODEPOINTS = [
  115, 116, 101, 102, 97, 110, 46, 115, 97, 108, 97, 100, 105, 110, 111,
  64, 103, 109, 97, 105, 108, 46, 99, 111, 109,
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  usePortfolioAnalytics();

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const move = (event: PointerEvent) => {
      const bounds = hero.getBoundingClientRect();
      hero.style.setProperty("--pointer-x", (((event.clientX - bounds.left) / bounds.width - 0.5) * 2).toFixed(3));
      hero.style.setProperty("--pointer-y", (((event.clientY - bounds.top) / bounds.height - 0.5) * 2).toFixed(3));
    };
    hero.addEventListener("pointermove", move);
    return () => hero.removeEventListener("pointermove", move);
  }, []);

  const openEmail = () => {
    const address = String.fromCodePoint(...EMAIL_CODEPOINTS);

    window.gtag?.("event", "contact_intent", {
      contact_method: "email",
      page_path: window.location.pathname,
    });
    window.location.assign(`mailto:${address}`);
  };

  return (
    <main>
      <a className="skip-link" href="#work">Skip to selected work</a>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Stefan Saladino, home">
          <span className="brand-mark">SS</span>
          <span className="brand-name">Stefan <b>Saladino</b></span>
        </a>
        <nav className={menuOpen ? "nav-links is-open" : "nav-links"} aria-label="Primary navigation">
          <a href="#work" onClick={() => setMenuOpen(false)}>Work</a>
          <a href="#capabilities" onClick={() => setMenuOpen(false)}>Capabilities</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="/Stefan_Saladino_Resume_2026.pdf" download="Stefan_Saladino_Resume_2026.pdf" onClick={() => setMenuOpen(false)}>Résumé ↓</a>
          <a className="nav-contact" href="#contact" onClick={() => setMenuOpen(false)}>Let&apos;s talk <Arrow /></a>
        </nav>
        <button className={menuOpen ? "menu-toggle is-open" : "menu-toggle"} type="button" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>
          <span /><span />
        </button>
      </header>

      <section className="hero" id="top" ref={heroRef}>
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-glow" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow reveal reveal-1"><span className="status-dot" /> Full-stack developer in Maple, Ontario</p>
          <h1 className="reveal reveal-2">
            Hi, I&apos;m Stefan.<br />
            I build websites, <em>web apps,</em><br />
            and the <strong>systems behind them.</strong>
          </h1>
          <div className="hero-bottom reveal reveal-3">
            <p>I&apos;m a full-stack developer and the founder of Boomer Automation. I take projects from the first sketch through design, development, testing and launch.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">See my work <Arrow /></a>
              <a className="text-link" href="/Stefan_Saladino_Resume_2026.pdf" download="Stefan_Saladino_Resume_2026.pdf">Download résumé ↓</a>
            </div>
          </div>
        </div>

        <div className="signal-stage reveal reveal-4" aria-hidden="true">
          <div className="orbit orbit-one" /><div className="orbit orbit-two" />
          <div className="signal-core"><span>SS</span><small>BUILD / 26</small></div>
          <div className="signal-node node-design"><i />DESIGN</div>
          <div className="signal-node node-engineer"><i />ENGINEER</div>
          <div className="signal-node node-launch"><i />LAUNCH</div>
          <div className="signal-trace trace-a" /><div className="signal-trace trace-b" />
        </div>

        <div className="hero-meta reveal reveal-4">
          <span>Based in Ontario, Canada</span>
          <span className="scroll-cue"><i /> Scroll to see the work</span>
        </div>
      </section>

      <div className="ticker" aria-label="Core technologies">
        <div className="ticker-track">
          <span>React</span><i /><span>TypeScript</span><i /><span>Fastify</span><i />
          <span>PostgreSQL</span><i /><span>Supabase</span><i /><span>Phaser</span><i />
          <span aria-hidden="true">React</span><i aria-hidden="true" /><span aria-hidden="true">TypeScript</span><i aria-hidden="true" />
          <span aria-hidden="true">Fastify</span><i aria-hidden="true" /><span aria-hidden="true">PostgreSQL</span><i aria-hidden="true" />
          <span aria-hidden="true">Supabase</span><i aria-hidden="true" /><span aria-hidden="true">Phaser</span><i aria-hidden="true" />
        </div>
      </div>

      <section className="work-intro" id="work">
        <div><p className="section-index">01 / Selected work</p><h2>A few things<br />I&apos;ve built.</h2></div>
        <p className="section-lede">My work ranges from a private CRM and website-auditing platform to a browser baseball game, a shared mobile app and websites for working businesses.</p>
      </section>

      <article className="featured-project crm-project">
        <div className="project-copy">
          <div className="project-number">01</div>
          <p className="project-type">Private commercial platform · Ongoing</p>
          <h3>Boomer<span>Automation</span>CRM</h3>
          <p className="project-summary">I&apos;m building this private platform to manage leads, tasks, appointments, client websites, audits and issue tracking in one place.</p>
          <ul className="project-tags" aria-label="Technology used">
            <li>React</li><li>TypeScript</li><li>Fastify</li><li>Prisma</li><li>PostgreSQL</li>
          </ul>
          <a className="project-link" href="/work/boomer-automation-crm" data-analytics-event="case_study_open" data-analytics-label="Boomer Automation CRM">Read the case study <Arrow /></a>
        </div>

        <div className="crm-visual" role="img" aria-label="Stylized representation of the BoomerAutomationCRM interface">
          <div className="crm-window">
            <div className="crm-topbar">
              <span className="crm-logo">B<span>●</span></span>
              <div className="crm-search">Search workspace <kbd>⌘ K</kbd></div>
              <div className="crm-avatar">SS</div>
            </div>
            <div className="crm-body">
              <div className="crm-sidebar"><span className="active" /><span /><span /><span /><span /><i /><span /><span /></div>
              <div className="crm-dashboard">
                <div className="crm-heading">
                  <div><small>PLATFORM / OVERVIEW</small><b>Good morning, Stefan.</b></div>
                  <button type="button" tabIndex={-1}>Run site check</button>
                </div>
                <div className="crm-stats">
                  <div><small>Active leads</small><b>48</b><em>+12%</em></div>
                  <div><small>Open issues</small><b>17</b><em>−8%</em></div>
                  <div><small>Site health</small><b>94</b><em>Strong</em></div>
                </div>
                <div className="crm-content">
                  <div className="crm-chart">
                    <div className="mini-heading"><b>Website intelligence</b><span>30 days</span></div>
                    <div className="chart-grid"><i /><i /><i /><i /><i /></div>
                    <svg viewBox="0 0 500 140" preserveAspectRatio="none" aria-hidden="true">
                      <path className="chart-fill" d="M0 122 C68 120 80 80 140 92 S230 48 280 71 S370 18 500 26 L500 140 L0 140 Z" />
                      <path className="chart-line" d="M0 122 C68 120 80 80 140 92 S230 48 280 71 S370 18 500 26" />
                    </svg>
                  </div>
                  <div className="crm-activity">
                    <div className="mini-heading"><b>Live activity</b><span className="live-dot">Live</span></div>
                    <div className="activity-row"><i className="green"/><span><b>Audit complete</b><small>12 pages checked</small></span><time>Now</time></div>
                    <div className="activity-row"><i className="purple"/><span><b>Lead assigned</b><small>Mortgage inquiry</small></span><time>4m</time></div>
                    <div className="activity-row"><i className="blue"/><span><b>Task resolved</b><small>Metadata update</small></span><time>9m</time></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="visual-note note-one"><span>01</span> Tenant isolation</div>
          <div className="visual-note note-two"><span>02</span> Website intelligence</div>
          <div className="visual-note note-three"><span>03</span> Release confidence</div>
        </div>
      </article>

      <section className="project-proof" id="crm-details">
        <p>Under the hood</p>
        <div><strong>4</strong><span>role levels</span></div>
        <div><strong>Multi-tenant</strong><span>separate client organizations</span></div>
        <div><strong>CI</strong><span>automated release checks</span></div>
        <p className="proof-note">I can share a fuller architecture walkthrough in an interview.</p>
      </section>

      <article className="featured-project hrd-project">
        <figure className="project-media hrd-media">
          <div className="project-media-frame">
            <img src="/projects/home-run-derby-dashboard.png" width="1900" height="951" loading="lazy" alt="Home Run Derby PWA practice screen showing Shohei Ohtani selected at Oracle Park" />
          </div>
          <figcaption><span>REAL PRODUCT SCREEN</span><strong>Practice setup · Oracle Park</strong></figcaption>
        </figure>
        <div className="project-copy hrd-copy">
          <div className="project-number">02</div>
          <p className="project-type">Browser game · Creative engineering</p>
          <h3>Home Run<span>Derby PWA</span></h3>
          <p className="project-summary">An ongoing browser baseball game built with React and Phaser. It includes player profiles, tournaments, custom stadiums and shared game logic across the app.</p>
          <ul className="project-tags" aria-label="Technology used">
            <li>React</li><li>TypeScript</li><li>Phaser</li><li>Node.js</li><li>Supabase</li>
          </ul>
          <a className="project-link" href="/work/home-run-derby" data-analytics-event="case_study_open" data-analytics-label="Home Run Derby PWA">Read the case study <Arrow /></a>
        </div>
      </article>

      <article className="featured-project collab-project">
        <div className="project-copy collab-copy">
          <div className="project-number">03</div>
          <p className="project-type">Real-time product · Mobile-first PWA</p>
          <h3>Collaborative<span>PWA</span></h3>
          <p className="project-summary">A private app for two people to keep wagers, recipes, places, rewards and plans together. Updates sync in real time, while creator-only actions stay private.</p>
          <ul className="project-tags" aria-label="Technology used">
            <li>React</li><li>TypeScript</li><li>Supabase</li><li>PostgreSQL</li><li>Realtime</li>
          </ul>
          <a className="project-link" href="/work/collaborative-pwa" data-analytics-event="case_study_open" data-analytics-label="Collaborative PWA">Read the case study <Arrow /></a>
        </div>
        <figure className="project-media collab-media">
          <div className="project-media-frame">
            <img src="/projects/collaborative-pwa-private-blurred.png" width="1013" height="2048" loading="lazy" alt="Collaborative PWA home screen with private names blurred" />
          </div>
          <figcaption><span>REAL PRODUCT SCREEN</span><strong>Shared home · Private names redacted</strong></figcaption>
        </figure>
      </article>

      <section className="production-work">
        <div className="production-heading">
          <p className="section-index">02 / Client websites</p>
          <h2>Websites I&apos;ve<br />designed and built.</h2>
          <p>For these projects I handled the structure, design, development, mobile experience, search setup and launch.</p>
        </div>
        <div className="site-showcase">
          <a className="client-project" href="https://davidcolavita.com/" target="_blank" rel="noreferrer" data-analytics-event="client_site_visit" data-analytics-label="David Colavita">
            <div className="client-preview">
              <img src="https://davidcolavita.com/assets/images/og-david-colavita.v1.png" alt="David Colavita mortgage website preview" loading="lazy" />
              <span>DAVIDCOLAVITA.COM</span>
            </div>
            <div className="client-info">
              <span className="site-no">01</span>
              <div><p>Mortgage platform + Ontario calculator</p><h3>David Colavita</h3><small>Strategy · UI/UX · Custom development · Technical SEO</small></div>
              <b>Visit site ↗</b>
            </div>
          </a>
          <a className="client-project" href="https://longonotgroup.com/" target="_blank" rel="noreferrer" data-analytics-event="client_site_visit" data-analytics-label="Longonot Group">
            <div className="client-preview">
              <img src="https://longonotgroup.com/assets/Longonot_hero.webp" alt="Longonot Group trade consulting website preview" loading="lazy" />
              <span>LONGONOTGROUP.COM</span>
            </div>
            <div className="client-info">
              <span className="site-no">02</span>
              <div><p>Canada–East Africa trade consulting</p><h3>Longonot Group</h3><small>Positioning · Information architecture · Development · SEO</small></div>
              <b>Visit site ↗</b>
            </div>
          </a>
          <a className="client-project" href="https://mike4wasagabeach.ca/" target="_blank" rel="noreferrer" data-analytics-event="client_site_visit" data-analytics-label="Mike Foley">
            <div className="client-preview">
              <img src="https://mike4wasagabeach.ca/assets/photos/mike-foley-og-card.v4.png" alt="Mike Foley for Deputy Mayor campaign website preview" loading="lazy" />
              <span>MIKE4WASAGABEACH.CA</span>
            </div>
            <div className="client-info">
              <span className="site-no">03</span>
              <div><p>Public-service campaign website</p><h3>Mike Foley</h3><small>Content structure · Responsive build · Accessibility · Deployment</small></div>
              <b>Visit site ↗</b>
            </div>
          </a>
          <a className="client-project" href="https://boomerautomation.com/" target="_blank" rel="noreferrer" data-analytics-event="client_site_visit" data-analytics-label="Boomer Automation">
            <div className="client-preview">
              <img src="https://boomerautomation.com/assets/images/social/boomer-automation-og.jpg" alt="Boomer Automation website preview" loading="lazy" />
              <span>BOOMERAUTOMATION.COM</span>
            </div>
            <div className="client-info">
              <span className="site-no">04</span>
              <div><p>Business automation studio</p><h3>Boomer Automation</h3><small>Brand system · Website · SEO · Lead capture</small></div>
              <b>Visit site ↗</b>
            </div>
          </a>
        </div>
      </section>

      <section className="capabilities" id="capabilities">
        <div className="capability-title">
          <p className="section-index">03 / What I do</p>
          <h2>I work across<br /><span>the full project.</span></h2>
        </div>
        <div className="capability-lines">
          <article><span>01</span><div><h3>Planning and interface design</h3><p>I turn a rough idea or business problem into a clear structure, then design a responsive interface around the people who will use it.</p></div><b>PLAN</b></article>
          <article><span>02</span><div><h3>Frontend and backend development</h3><p>I build React and TypeScript frontends, Node and Fastify APIs, authentication, permissions and PostgreSQL or Supabase data flows.</p></div><b>BUILD</b></article>
          <article><span>03</span><div><h3>Testing, launch and support</h3><p>I handle automated tests, type checks, production validation, deployment, DNS and the fixes that come after a project goes live.</p></div><b>SHIP</b></article>
          <article><span>04</span><div><h3>SEO, performance and analytics</h3><p>I set up technical SEO, structured data, analytics and conversion tracking, then make sure the finished site is fast and easy to use.</p></div><b>IMPROVE</b></article>
        </div>
      </section>

      <section className="about" id="about">
        <div className="about-signal" aria-hidden="true"><span>BUILDER</span><i /><b>END TO END</b></div>
        <div className="about-heading"><p className="section-index">04 / About me</p><h2>I like owning<br />a project from<br /><em>start to finish.</em></h2></div>
        <div className="about-copy">
          <p>I&apos;m Stefan Saladino, a full-stack developer and the founder of Boomer Automation. Most of my work starts with a business problem or an unfinished idea. I plan the structure, design the interface, build the frontend and backend, test it, launch it and stick around afterward.</p>
          <p>I didn&apos;t take a straight path into software. Before this, I led insulation crews. That work taught me how to plan around real constraints, stay accountable and fix problems without making excuses. I still approach software the same way.</p>
          <div className="about-facts">
            <div><small>BASED</small><strong>Maple, Ontario</strong></div>
            <div><small>EDUCATION</small><strong>Computer Programming & Analysis · Dean&apos;s List</strong></div>
            <div><small>STUDIO</small><strong>Boomer Automation · Founder</strong></div>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contact-orbit" aria-hidden="true"><i /><i /><i /></div>
        <p className="section-index">05 / Get in touch</p>
        <h2>Have a project in mind?<br /><em>I&apos;d like to hear about it.</em></h2>
        <button className="contact-email" type="button" onClick={openEmail} aria-label="Email Stefan">Email me <Arrow /></button>
        <div className="contact-bottom">
          <p>Open to select client work and software opportunities.</p>
          <div>
            <a href="https://github.com/StefanSaladino" target="_blank" rel="noreferrer" data-analytics-event="social_profile_visit" data-analytics-label="GitHub">GitHub ↗</a>
            <a href="https://www.linkedin.com/in/stefan-saladino-32101a1a4" target="_blank" rel="noreferrer" data-analytics-event="social_profile_visit" data-analytics-label="LinkedIn">LinkedIn ↗</a>
            <a href="/Stefan_Saladino_Resume_2026.pdf" download="Stefan_Saladino_Resume_2026.pdf">Résumé ↓</a>
            <a href="https://boomerautomation.com" target="_blank" rel="noreferrer" data-analytics-event="client_site_visit" data-analytics-label="Boomer Automation">Boomer Automation ↗</a>
          </div>
        </div>
      </section>

      <footer><span>© 2026 Stefan Saladino</span><span>Designed + engineered in Ontario</span><a href="#top">Back to top ↑</a></footer>
    </main>
  );
}

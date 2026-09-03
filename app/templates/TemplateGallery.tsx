"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import styles from "./templates.module.css";

type Category = "All" | "Minimal" | "Business" | "Product" | "Creative" | "Experimental";
type TemplateItem = {
  id: string;
  index: string;
  name: string;
  description: string;
  categories: Exclude<Category, "All">[];
  tone: string;
  variant: string;
};

const categories: Category[] = ["All", "Minimal", "Business", "Product", "Creative", "Experimental"];

const templates: TemplateItem[] = [
  {
    id: "saas-minimal",
    index: "01",
    name: "Minimal SaaS",
    description: "Quiet product-led hero with sharp typography and almost no visual noise.",
    categories: ["Minimal", "Product"],
    tone: "Light / Product",
    variant: "saas",
  },
  {
    id: "dark-tech",
    index: "02",
    name: "Dark Tech",
    description: "A cinematic software launch built around glow, depth and a single focal product view.",
    categories: ["Product", "Experimental"],
    tone: "Dark / Motion",
    variant: "tech",
  },
  {
    id: "luxury-architecture",
    index: "03",
    name: "Luxury Architecture",
    description: "Editorial restraint, oversized serif type and a photography-first composition.",
    categories: ["Business", "Creative"],
    tone: "Editorial / Luxury",
    variant: "architecture",
  },
  {
    id: "fitness-launch",
    index: "04",
    name: "Fitness Launch",
    description: "High-energy campaign page using impact typography, contrast and diagonal movement.",
    categories: ["Business", "Creative"],
    tone: "Bold / Athletic",
    variant: "fitness",
  },
  {
    id: "contractor-lead-gen",
    index: "05",
    name: "Contractor Lead Gen",
    description: "Trust-heavy local service page designed around calls, estimates and proof.",
    categories: ["Business"],
    tone: "Service / Conversion",
    variant: "contractor",
  },
  {
    id: "restaurant",
    index: "06",
    name: "Restaurant",
    description: "Immersive hospitality direction with menu cues, reservation emphasis and rich imagery.",
    categories: ["Business", "Creative"],
    tone: "Hospitality / Warm",
    variant: "restaurant",
  },
  {
    id: "app-launch",
    index: "07",
    name: "Mobile App Launch",
    description: "Friendly consumer product page with a phone-first hero and flowing section transition.",
    categories: ["Product", "Creative"],
    tone: "Product / Bright",
    variant: "app",
  },
  {
    id: "creative-agency",
    index: "08",
    name: "Creative Agency",
    description: "Typography-driven composition that deliberately bends the grid without losing clarity.",
    categories: ["Creative", "Experimental"],
    tone: "Experimental / Type",
    variant: "agency",
  },
  {
    id: "real-estate",
    index: "09",
    name: "Real Estate",
    description: "Premium property showcase balancing editorial photography with practical lead capture.",
    categories: ["Business"],
    tone: "Property / Premium",
    variant: "estate",
  },
  {
    id: "waitlist",
    index: "10",
    name: "Waitlist",
    description: "A one-screen launch page where the idea, email field and proof do all the work.",
    categories: ["Minimal", "Product"],
    tone: "Minimal / Launch",
    variant: "waitlist",
  },
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 19 19 5M9 5h10v10" />
    </svg>
  );
}

function PreviewArt({ variant }: { variant: string }) {
  if (variant === "saas") {
    return (
      <div className={`${styles.previewArt} ${styles.saas}`}>
        <div className={styles.miniNav}><span>northstar</span><i /><i /></div>
        <strong>Work less.<br />Know more.</strong>
        <p>Your team, finally in sync.</p>
        <button>Start free</button>
        <div className={styles.saasPanel}><span /><span /><span /></div>
      </div>
    );
  }

  if (variant === "tech") {
    return (
      <div className={`${styles.previewArt} ${styles.tech}`}>
        <div className={styles.techOrb} />
        <small>NEURAL OPERATING LAYER</small>
        <strong>Think at<br />machine speed.</strong>
        <div className={styles.techHud}><span>98.4%</span><i /><i /></div>
      </div>
    );
  }

  if (variant === "architecture") {
    return (
      <div className={`${styles.previewArt} ${styles.architecture}`}>
        <small>STUDIO / 24</small>
        <strong>Spaces<br /><em>with gravity.</em></strong>
        <div className={styles.archImage}><span>01 — Residence</span></div>
      </div>
    );
  }

  if (variant === "fitness") {
    return (
      <div className={`${styles.previewArt} ${styles.fitness}`}>
        <small>NO EXCUSES / 06:00</small>
        <strong>BUILD<br />THE ENGINE.</strong>
        <div className={styles.fitnessSlash} />
        <button>Join the crew</button>
      </div>
    );
  }

  if (variant === "contractor") {
    return (
      <div className={`${styles.previewArt} ${styles.contractor}`}>
        <div className={styles.contractorTop}><span>HARDLINE</span><small>★★★★★ 4.9</small></div>
        <strong>Renovations<br />without the runaround.</strong>
        <button>Get an estimate</button>
        <div className={styles.contractorProof}><span>Licensed</span><span>Insured</span><span>15+ yrs</span></div>
      </div>
    );
  }

  if (variant === "restaurant") {
    return (
      <div className={`${styles.previewArt} ${styles.restaurant}`}>
        <div className={styles.restaurantGlow} />
        <small>TORONTO · EST. 1998</small>
        <strong>Sera</strong>
        <p>Fire. Season. Simplicity.</p>
        <button>Reserve a table</button>
      </div>
    );
  }

  if (variant === "app") {
    return (
      <div className={`${styles.previewArt} ${styles.app}`}>
        <small>MADE FOR REAL LIFE</small>
        <strong>Your day,<br />less scattered.</strong>
        <div className={styles.phone}><span>09:41</span><i /><i /><i /></div>
        <div className={styles.appWave} />
      </div>
    );
  }

  if (variant === "agency") {
    return (
      <div className={`${styles.previewArt} ${styles.agency}`}>
        <small>Independent creative studio</small>
        <strong>MAKE<br /><span>GOOD</span><br />NOISE.</strong>
        <div className={styles.agencyStamp}>NEW<br />WORK</div>
      </div>
    );
  }

  if (variant === "estate") {
    return (
      <div className={`${styles.previewArt} ${styles.estate}`}>
        <div className={styles.estateImage} />
        <div className={styles.estateCopy}>
          <small>THE COLLECTION</small>
          <strong>Find a place<br />worth staying.</strong>
          <div><span>Neighbourhood</span><span>$1.5M +</span><b>Search</b></div>
        </div>
      </div>
    );
  }

  return (
    <div className={`${styles.previewArt} ${styles.waitlist}`}>
      <small>PRIVATE BETA / FALL 2026</small>
      <strong>Money,<br />made quieter.</strong>
      <p>A calmer way to see what matters.</p>
      <div className={styles.waitlistField}><span>you@email.com</span><b>Join</b></div>
      <em>18,421 already in line</em>
    </div>
  );
}

export default function TemplateGallery() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const visibleTemplates = useMemo(() => {
    if (activeCategory === "All") return templates;
    return templates.filter((template) => template.categories.includes(activeCategory));
  }, [activeCategory]);

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link href="/" className={styles.brand} aria-label="Back to Stefan Saladino portfolio">
          <span>SS</span>
          <b>Landing Page Lab</b>
        </Link>
        <div className={styles.headerMeta}>
          <span>Collection 001</span>
          <span>{templates.length} concepts</span>
        </div>
      </header>

      <section className={styles.hero} aria-labelledby="templates-title">
        <div className={styles.eyebrow}><span /> Landing page collection</div>
        <h1 id="templates-title">Different ideas.<br /><span>No house style.</span></h1>
        <div className={styles.heroFoot}>
          <p>
            A growing set of responsive landing pages built to explore different industries,
            layouts, interaction patterns and ways to earn a click.
          </p>
          <a href="#collection" className={styles.exploreLink}>Explore the collection <ArrowIcon /></a>
        </div>
      </section>

      <section className={styles.collection} id="collection" aria-label="Landing page concepts">
        <div className={styles.toolbar}>
          <div className={styles.filters} aria-label="Filter templates">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={activeCategory === category ? styles.activeFilter : undefined}
                onClick={() => setActiveCategory(category)}
                aria-pressed={activeCategory === category}
              >
                {category}
              </button>
            ))}
          </div>
          <p><b>{String(visibleTemplates.length).padStart(2, "0")}</b> shown</p>
        </div>

        <div className={styles.grid}>
          {visibleTemplates.map((template) => (
            <article className={styles.card} key={template.id}>
              <div className={styles.previewShell} data-template={template.id}>
                <div className={styles.browserBar} aria-hidden="true">
                  <span /><span /><span />
                  <i>concept / {template.id}</i>
                </div>
                <PreviewArt variant={template.variant} />
                <div className={styles.previewOverlay} aria-hidden="true">
                  <span>Template build queued</span>
                  <ArrowIcon />
                </div>
              </div>
              <div className={styles.cardMeta}>
                <div className={styles.cardTitleRow}>
                  <span>{template.index}</span>
                  <h2>{template.name}</h2>
                  <ArrowIcon />
                </div>
                <p>{template.description}</p>
                <div className={styles.tags}>
                  <span>{template.tone}</span>
                  {template.categories.map((category) => <span key={category}>{category}</span>)}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className={styles.footer}>
        <div>
          <span>Collection status</span>
          <strong>10 concepts planned · 0 templates built</strong>
        </div>
        <a href="#templates-title">Back to top ↑</a>
      </footer>
    </main>
  );
}

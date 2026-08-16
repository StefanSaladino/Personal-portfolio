/* eslint-disable @next/next/no-html-link-for-pages, @next/next/no-img-element */
"use client";

import { usePortfolioAnalytics } from "../Analytics";

type CaseStudyData = {
  index: string;
  theme: "crm" | "hrd" | "collab";
  kicker: string;
  title: string;
  accent: string;
  thesis: string;
  intro: string;
  imageSrc?: string;
  imageAlt?: string;
  imageCaption?: string;
  imageOrientation?: "landscape" | "portrait";
  role: string;
  scope: string;
  stack: string[];
  systemTitle: string;
  challengeTitle: string;
  approachTitle: string;
  outcomeTitle: string;
  challenge: string;
  approach: string;
  outcome: string;
  nodes: string[];
  principles: { value: string; label: string }[];
  nextHref: string;
  nextLabel: string;
};

const Arrow = () => <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6" /></svg>;

export default function CaseStudy({ data }: { data: CaseStudyData }) {
  usePortfolioAnalytics();

  return (
    <main className={`case-study case-${data.theme}`}>
      <header className="case-nav">
        <a className="brand" href="/#top"><span className="brand-mark">SS</span><span className="brand-name">Stefan <b>Saladino</b></span></a>
        <a className="case-back" href="/#work">← Selected work</a>
      </header>

      <section className="case-hero">
        <div className="case-grid" aria-hidden="true" />
        <p className="section-index">{data.index} / Case study</p>
        <div className="case-title">
          <p>{data.kicker}</p>
          <h1>{data.title}<span>{data.accent}</span></h1>
        </div>
        <p className="case-thesis">{data.thesis}</p>
        <div className="case-orbit" aria-hidden="true"><i /><i /><span>{data.index}</span></div>
      </section>

      <section className="case-brief">
        <p className="case-intro">{data.intro}</p>
        <div className="case-meta">
          <div><small>ROLE</small><strong>{data.role}</strong></div>
          <div><small>SCOPE</small><strong>{data.scope}</strong></div>
          <div><small>STACK</small><ul>{data.stack.map((item) => <li key={item}>{item}</li>)}</ul></div>
        </div>
      </section>

      {data.imageSrc && (
        <section className={`case-media case-media-${data.imageOrientation ?? "landscape"}`}>
          <figure>
            <div className="case-media-frame">
              <img src={data.imageSrc} alt={data.imageAlt ?? "Project interface"} loading="lazy" />
            </div>
            <figcaption><span>REAL PRODUCT SCREEN</span><strong>{data.imageCaption}</strong></figcaption>
          </figure>
        </section>
      )}

      <section className="case-system">
        <p className="section-index">System architecture</p>
        <h2>{data.systemTitle}</h2>
        <div className="system-flow">
          {data.nodes.map((node, index) => (
            <div className="system-node" key={node}><span>0{index + 1}</span><strong>{node}</strong>{index < data.nodes.length - 1 && <i />}</div>
          ))}
        </div>
      </section>

      <section className="case-story">
        <article><span>01</span><div><p>THE CHALLENGE</p><h2>{data.challengeTitle}</h2></div><p>{data.challenge}</p></article>
        <article><span>02</span><div><p>WHAT I DID</p><h2>{data.approachTitle}</h2></div><p>{data.approach}</p></article>
        <article><span>03</span><div><p>WHERE IT STANDS</p><h2>{data.outcomeTitle}</h2></div><p>{data.outcome}</p></article>
      </section>

      <section className="case-principles">
        {data.principles.map((principle) => <div key={principle.label}><strong>{principle.value}</strong><span>{principle.label}</span></div>)}
      </section>

      <section className="case-next">
        <p>Next case study</p>
        <a href={data.nextHref} data-analytics-event="case_study_open" data-analytics-label={data.nextLabel}>{data.nextLabel}<Arrow /></a>
      </section>

      <footer><span>© 2026 Stefan Saladino</span><span>Full-stack developer · Ontario</span><a href="/#contact">Get in touch →</a></footer>
    </main>
  );
}

export type { CaseStudyData };

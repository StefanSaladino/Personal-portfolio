import type { Metadata } from "next";
import SiteHeader from "../SiteHeader";

const resumePath = "/Stefan_Saladino_Resume_2026.pdf";

export const metadata: Metadata = {
  title: "Résumé",
  description: "View or download Stefan Saladino's full-stack software development résumé.",
  alternates: { canonical: "/resume" },
};

export default function ResumePage() {
  return (
    <>
      <a className="skip-link" href="#resume-document">Skip to résumé</a>
      <SiteHeader />
      <main className="resume-page" id="resume-document">
        <section className="resume-intro">
          <p className="section-index">Résumé / 2026</p>
          <div className="resume-heading">
            <h1>Experience, projects,<span>and how I work.</span></h1>
          </div>
          <div className="resume-summary">
            <p>Open the original PDF in your browser or save a copy for later.</p>
            <div className="resume-actions">
              <a className="button button-primary" href={resumePath} target="_blank" rel="noreferrer">Open PDF ↗</a>
              <a className="button button-secondary" href={resumePath} download="Stefan_Saladino_Resume_2026.pdf">Download PDF ↓</a>
            </div>
          </div>
        </section>
      </main>
      <footer><span>© 2026 Stefan Saladino</span><span>Full-stack developer · Ontario</span><a href="/#contact">Get in touch →</a></footer>
    </>
  );
}

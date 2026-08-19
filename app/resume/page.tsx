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
      <main className="resume-page">
        <section className="resume-intro">
          <p className="section-index">Résumé / 2026</p>
          <div className="resume-heading">
            <h1>Experience, projects,<span>and how I work.</span></h1>
          </div>
          <div className="resume-summary">
            <p>Read the résumé here, open the original PDF in your browser, or save a copy for later.</p>
            <div className="resume-actions">
              <a className="button button-primary" href={resumePath} target="_blank" rel="noreferrer">Open PDF ↗</a>
              <a className="button button-secondary" href={resumePath} download="Stefan_Saladino_Resume_2026.pdf">Download PDF ↓</a>
            </div>
          </div>
        </section>

        <section className="resume-document" id="resume-document" aria-label="Stefan Saladino résumé document">
          <div className="resume-document-bar">
            <span>STEFAN SALADINO · RÉSUMÉ</span>
            <a href={resumePath} download="Stefan_Saladino_Resume_2026.pdf">Download a copy ↓</a>
          </div>
          <object data={`${resumePath}#view=FitH`} type="application/pdf" aria-label="Stefan Saladino résumé">
            <div className="resume-fallback">
              <p>This browser cannot display the résumé inline.</p>
              <a className="button button-primary" href={resumePath} target="_blank" rel="noreferrer">Open the PDF ↗</a>
            </div>
          </object>
        </section>
      </main>
      <footer><span>© 2026 Stefan Saladino</span><span>Full-stack developer · Ontario</span><a href="/#contact">Get in touch →</a></footer>
    </>
  );
}

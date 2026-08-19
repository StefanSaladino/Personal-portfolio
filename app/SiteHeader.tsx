"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import styles from "./SiteHeader.module.css";

const Arrow = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const toggleRef = useRef<HTMLButtonElement>(null);
  const firstMobileLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!menuOpen) return;

    const root = document.documentElement;
    const desktop = window.matchMedia("(min-width: 821px)");

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    const closeOnDesktop = (event: MediaQueryListEvent) => {
      if (event.matches) setMenuOpen(false);
    };

    root.classList.add("menu-open");
    window.addEventListener("keydown", closeOnEscape);
    desktop.addEventListener("change", closeOnDesktop);

    const focusFrame = window.requestAnimationFrame(() => {
      firstMobileLinkRef.current?.focus();
    });

    return () => {
      window.cancelAnimationFrame(focusFrame);
      root.classList.remove("menu-open");
      window.removeEventListener("keydown", closeOnEscape);
      desktop.removeEventListener("change", closeOnDesktop);
      window.requestAnimationFrame(() => toggleRef.current?.focus());
    };
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className={`${styles.header} ${menuOpen ? styles.headerMenuOpen : ""}`}>
        <a
          className={styles.brand}
          href="/#top"
          aria-label="Stefan Saladino, home"
          onClick={closeMenu}
        >
          <span className={styles.brandMark}>SS</span>
          <span className={styles.brandName}>
            Stefan <b>Saladino</b>
          </span>
        </a>

        <nav className={styles.desktopNav} aria-label="Primary navigation">
          <a href="/#work">Work</a>
          <a href="/#capabilities">Capabilities</a>
          <a href="/#about">About</a>
          <a
            href="/resume"
            aria-current={pathname === "/resume" ? "page" : undefined}
          >
            Résumé
          </a>
          <a className={styles.desktopContact} href="/#contact">
            Let&apos;s talk <Arrow />
          </a>
        </nav>

        <button
          ref={toggleRef}
          className={`${styles.menuToggle} ${menuOpen ? styles.menuToggleOpen : ""}`}
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-controls="mobile-navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
      </header>

      {menuOpen && (
        <div
          id="mobile-navigation"
          className={styles.mobileMenu}
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
        >
          <nav className={styles.mobileNav} aria-label="Mobile navigation">
            <a
              ref={firstMobileLinkRef}
              className={styles.mobileLink}
              href="/#work"
              onClick={closeMenu}
            >
              <span>01</span>
              <strong>Work</strong>
              <i aria-hidden="true">↗</i>
            </a>
            <a className={styles.mobileLink} href="/#capabilities" onClick={closeMenu}>
              <span>02</span>
              <strong>Capabilities</strong>
              <i aria-hidden="true">↗</i>
            </a>
            <a className={styles.mobileLink} href="/#about" onClick={closeMenu}>
              <span>03</span>
              <strong>About</strong>
              <i aria-hidden="true">↗</i>
            </a>
            <a
              className={styles.mobileLink}
              href="/resume"
              aria-current={pathname === "/resume" ? "page" : undefined}
              onClick={closeMenu}
            >
              <span>04</span>
              <strong>Résumé</strong>
              <i aria-hidden="true">↗</i>
            </a>
          </nav>

          <div className={styles.mobileFooter}>
            <p>
              <span className={styles.statusDot} />
              Available for selected projects
            </p>
            <a className={styles.mobileContact} href="/#contact" onClick={closeMenu}>
              <span>Let&apos;s talk</span>
              <Arrow />
            </a>
          </div>
        </div>
      )}
    </>
  );
}
"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const Arrow = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

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

    return () => {
      root.classList.remove("menu-open");
      window.removeEventListener("keydown", closeOnEscape);
      desktop.removeEventListener("change", closeOnDesktop);
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <a className="brand" href="/#top" aria-label="Stefan Saladino, home" onClick={closeMenu}>
        <span className="brand-mark">SS</span>
        <span className="brand-name">Stefan <b>Saladino</b></span>
      </a>
      <nav id="primary-navigation" className={menuOpen ? "nav-links is-open" : "nav-links"} aria-label="Primary navigation">
        <a href="/#work" onClick={closeMenu}>Work</a>
        <a href="/#capabilities" onClick={closeMenu}>Capabilities</a>
        <a href="/#about" onClick={closeMenu}>About</a>
        <a href="/resume" aria-current={pathname === "/resume" ? "page" : undefined} onClick={closeMenu}>Résumé</a>
        <a className="nav-contact" href="/#contact" onClick={closeMenu}>Let&apos;s talk <Arrow /></a>
      </nav>
      <button
        className={menuOpen ? "menu-toggle is-open" : "menu-toggle"}
        type="button"
        aria-label={menuOpen ? "Close navigation" : "Open navigation"}
        aria-controls="primary-navigation"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span /><span />
      </button>
    </header>
  );
}

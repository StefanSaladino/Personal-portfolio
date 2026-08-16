"use client";

import { useEffect } from "react";

const MEASUREMENT_ID = "G-7ZZLSDQWS9";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
    portfolioAnalyticsInitialized?: boolean;
  }
}

export function usePortfolioAnalytics() {
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || ((...args: unknown[]) => window.dataLayer.push(args));

    const previewHosts = new Set(["localhost", "127.0.0.1", "terminal.local"]);
    const isPreview = previewHosts.has(window.location.hostname);
    if (!isPreview && !window.portfolioAnalyticsInitialized) {
      const analyticsScript = document.createElement("script");
      analyticsScript.async = true;
      analyticsScript.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
      analyticsScript.id = "google-analytics-library";
      document.head.appendChild(analyticsScript);

      window.gtag("js", new Date());
      window.gtag("config", MEASUREMENT_ID);
      window.portfolioAnalyticsInitialized = true;
    }
    document.documentElement.dataset.analyticsReady = "true";

    const trackPortfolioClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const link = target.closest<HTMLAnchorElement>("a[data-analytics-event]");
      const eventName = link?.dataset.analyticsEvent;
      if (!link || !eventName || !window.gtag) return;

      window.gtag("event", eventName, {
        item_name: link.dataset.analyticsLabel ?? link.textContent?.replace(/\s+/g, " ").trim(),
        link_url: link.href,
        page_path: window.location.pathname,
      });
    };

    document.addEventListener("click", trackPortfolioClick, { capture: true });
    return () => document.removeEventListener("click", trackPortfolioClick, { capture: true });
  }, []);

}

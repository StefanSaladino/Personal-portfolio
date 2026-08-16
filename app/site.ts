const fallbackSiteUrl = "https://stefansaladino.pages.dev";

export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || fallbackSiteUrl
).replace(/\/$/, "");

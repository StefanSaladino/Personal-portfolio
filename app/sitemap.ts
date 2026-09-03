import type { MetadataRoute } from "next";
import { siteUrl } from "./site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteUrl;
  return [
    { url: base, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${base}/resume`, lastModified: new Date(), changeFrequency: "monthly", priority: .7 },
    { url: `${base}/templates`, lastModified: new Date(), changeFrequency: "weekly", priority: .8 },
    { url: `${base}/work/boomer-automation-crm`, lastModified: new Date(), changeFrequency: "monthly", priority: .8 },
    { url: `${base}/work/home-run-derby`, lastModified: new Date(), changeFrequency: "monthly", priority: .8 },
    { url: `${base}/work/collaborative-pwa`, lastModified: new Date(), changeFrequency: "monthly", priority: .8 },
    { url: `${base}/work/top-set`, lastModified: new Date(), changeFrequency: "monthly", priority: .8 },
  ];
}

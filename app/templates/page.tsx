import type { Metadata } from "next";
import TemplateGallery from "./TemplateGallery";

export const metadata: Metadata = {
  title: "Landing Page Collection",
  description:
    "A growing collection of responsive landing page concepts exploring different industries, layouts, interactions and conversion patterns.",
  alternates: { canonical: "/templates" },
  openGraph: {
    title: "Landing Page Collection | Stefan Saladino",
    description:
      "A growing collection of responsive landing page concepts exploring different industries, layouts and interactions.",
    url: "/templates",
    type: "website",
  },
};

export default function TemplatesPage() {
  return <TemplateGallery />;
}

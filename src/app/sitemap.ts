import type { MetadataRoute } from "next";

import { siteConfig } from "@/content/site-content";

const routes = [
  "/",
  "/servicos",
  "/landing-pages",
  "/sistema-barbearia",
  "/sites-institucionais",
  "/sistemas-web",
  "/automacoes",
  "/portfolio",
  "/processo",
  "/sobre",
  "/orcamento",
  "/faq",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return routes.map((route) => ({
    url: new URL(route, siteConfig.url).toString(),
    lastModified: now,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.8,
  }));
}

import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://techpsyco.com";
  const routes = ["", "/services", "/software", "/work", "/about", "/contact", "/privacy"];
  return routes.map((route, index) => ({ url: `${base}${route}`, lastModified: new Date(), changeFrequency: index === 0 ? "weekly" : "monthly", priority: index === 0 ? 1 : route === "/privacy" ? 0.2 : 0.8 }));
}

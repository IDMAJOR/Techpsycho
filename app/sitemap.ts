import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://techpsycho.com.ng";
  const routes = ["", "/services", "/software", "/vident", "/vident/privacy", "/vident/terms", "/vident/delete-account", "/paycore", "/work", "/about", "/contact", "/privacy"];
  return routes.map((route, index) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: index === 0 ? "weekly" : "monthly",
    priority: index === 0 ? 1 : route.includes("privacy") || route.includes("terms") ? 0.4 : 0.8,
  }));
}

import type { MetadataRoute } from "next";
import { projects } from "../lib/projects";
import { site } from "../lib/site";

/**
 * Public canonical pages only - project URLs derived from the same
 * data source as the site. No lastModified: no reliable dates exist.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.url, changeFrequency: "monthly", priority: 1 },
    { url: `${site.url}/work`, changeFrequency: "monthly", priority: 0.9 },
    ...projects.map((project) => ({
      url: `${site.url}/work/${project.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    { url: `${site.url}/lab`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${site.url}/about`, changeFrequency: "yearly", priority: 0.7 },
    { url: `${site.url}/resume`, changeFrequency: "monthly", priority: 0.7 },
  ];
}

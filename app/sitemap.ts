import type { MetadataRoute } from "next";
import { projects } from "../lib/projects";
import { site } from "../lib/site";

/**
 * Public canonical pages only - project URLs derived from the same
 * data source as the site. No lastModified: no reliable dates exist.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.url },
    { url: `${site.url}/work` },
    ...projects.map((project) => ({
      url: `${site.url}/work/${project.slug}`,
    })),
    { url: `${site.url}/lab` },
    { url: `${site.url}/about` },
    { url: `${site.url}/resume` },
  ];
}

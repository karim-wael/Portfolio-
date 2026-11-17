import { MetadataRoute } from "next";
import projects from "@/data/projects";
import { getBlogPosts } from "@/lib/mdx";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://karim-wael.vercel.app";

  const staticRoutes = ["", "/projects", "/blogs"];
  const projectRoutes = projects.map((p) => `/work/${p.id}`);
  const blogRoutes = getBlogPosts().map((post) => `/blogs/${post.slug}`);

  const allRoutes = [...staticRoutes, ...projectRoutes, ...blogRoutes];

  return allRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}

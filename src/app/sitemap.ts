import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://karim-wael.vercel.app";

  const mainRoutes = [
    "",
    "/blogs",
    "/work/talky",
    "/work/chiggabot",
    "/work/soc-ai",
    "/work/ieee-portal",
    "/blogs/building-soc-ai-omega",
    "/blogs/local-ai-agents-rag",
    "/blogs/nasa-space-apps-experience",
    "/blogs/reverse-engineering-portals",
  ];

  return mainRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}

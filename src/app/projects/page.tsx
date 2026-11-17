import type { Metadata } from "next";
import ProjectsCatalogClient from "@/components/projects-catalog-client";

export const metadata: Metadata = {
  title: "All Engineering Projects",
  description:
    "Full catalog of 16 engineering projects by Karim Wael across Applied AI, RAG, Cybersecurity, .NET 8, Laravel 11, C++ WebSockets, and Computer Vision.",
  alternates: {
    canonical: "/projects",
  },
};

export default function ProjectsPage() {
  return <ProjectsCatalogClient />;
}

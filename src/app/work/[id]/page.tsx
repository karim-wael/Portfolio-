import type { Metadata } from "next";
import { notFound } from "next/navigation";
import projects from "@/data/projects";
import CaseStudyView from "@/components/work/case-study-view";

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const project = projects.find((p) => p.id === params.id);
  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} — ${project.category}`,
    description: project.shortDescription || project.problem || project.title,
    alternates: {
      canonical: `/work/${project.id}`,
    },
    openGraph: {
      title: `${project.title} | Karim Wael`,
      description: project.shortDescription || project.problem || project.title,
      url: `https://karim-wael.vercel.app/work/${project.id}`,
      images: [
        {
          url: project.src,
          width: 1200,
          height: 800,
          alt: `${project.title} — ${project.visualLabel || "Project visual"}`,
        },
      ],
      type: "article",
    },
  };
}

export default function CaseStudyPage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id);
  if (!project) {
    notFound();
  }

  return <CaseStudyView projectId={project.id} />;
}

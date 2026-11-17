"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import projects from "@/data/projects";
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function ProjectsCatalogClient() {
  return (
    <div className="container mx-auto px-4 md:px-10 py-28 min-h-screen font-sans text-zinc-200 max-w-7xl">
      <div className="mb-12">
        <Link
          href="/"
          className="inline-flex items-center text-sm font-mono text-zinc-400 hover:text-blue-400 transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
        </Link>
        <h1 className="text-4xl md:text-6xl font-bold font-display text-white tracking-tight mb-4">
          All Engineering Projects
        </h1>
        <p className="text-zinc-400 max-w-2xl text-base md:text-lg">
          Complete catalog of {projects.length} flagship systems, NASA Space Apps submissions, cybersecurity prototypes,
          AI automation tooling, and academic software projects.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group flex flex-col rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-950/70 backdrop-blur-sm hover:border-blue-500/40 transition-all duration-300"
          >
            <Link href={`/work/${project.id}`} className="relative w-full aspect-video bg-black overflow-hidden">
              <Image
                src={project.src}
                alt={`${project.title} — ${project.visualLabel || "Project visual"}`}
                fill
                className="object-cover opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-transparent to-transparent" />
              {project.visualType && project.visualType !== "screenshot" && (
                <span className="absolute top-3 left-3 px-2 py-0.5 rounded bg-black/75 border border-zinc-700 text-[10px] font-mono text-zinc-300 backdrop-blur-sm">
                  {project.visualType === "poster"
                    ? "POSTER"
                    : project.visualType === "conceptual-preview"
                    ? "CONCEPTUAL PREVIEW"
                    : "ARCHITECTURE GRAPHIC"}
                </span>
              )}
            </Link>

            <div className="flex flex-col flex-1 p-6">
              <div className="flex items-start justify-between gap-2 mb-3">
                <Link href={`/work/${project.id}`}>
                  <h2 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h2>
                </Link>
                <Badge
                  variant="outline"
                  className="text-[11px] font-mono border-blue-500/30 text-blue-400 whitespace-nowrap"
                >
                  {project.category}
                </Badge>
              </div>

              <p className="text-sm text-zinc-400 leading-relaxed mb-5 line-clamp-3">
                {project.shortDescription || project.solution || project.problem}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-6">
                {[...project.skills.frontend, ...project.skills.backend]
                  .slice(0, 5)
                  .map((skill, idx) => (
                    <span
                      key={`${project.id}-sk-${idx}`}
                      className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-[11px] font-mono text-zinc-300"
                    >
                      {skill.icon}
                      {skill.title}
                    </span>
                  ))}
              </div>

              <div className="mt-auto pt-4 border-t border-zinc-900 flex items-center justify-between gap-2">
                <Link href={`/work/${project.id}`}>
                  <Button variant="ghost" size="sm" className="px-0 text-blue-400 hover:text-blue-300 font-mono text-xs">
                    Case Study <ArrowUpRight className="ml-1 w-3.5 h-3.5" />
                  </Button>
                </Link>
                <div className="flex items-center gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors"
                      aria-label={`${project.title} GitHub repository`}
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-400 hover:text-blue-300 font-mono text-xs transition-colors"
                    >
                      Live <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

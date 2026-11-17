"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import SectionWrapper from "../../ui/section-wrapper";
import { SectionHeader } from "../section-header";
import { Button } from "../../ui/button";
import projects, { FLAGSHIP_PROJECT_IDS } from "@/data/projects";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
};

export const SelectedWorkSection = () => {
  const topProjects = FLAGSHIP_PROJECT_IDS.map((id) =>
    projects.find((p) => p.id === id)
  ).filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <SectionWrapper id="projects" className="max-w-7xl mx-auto min-h-screen py-32 z-10">
      <SectionHeader
        id="projects"
        title="Featured Case Studies"
        desc="Top 5 flagship projects spanning microgravity RAG, endpoint security prototypes, concurrency-safe lab reservations, SIEM/SOAR, and C++ WebSockets."
        className="mb-16 mt-0"
      />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 mt-16"
      >
        {topProjects.map((project) => (
          <motion.div key={project.id} variants={itemVariants}>
            <Link href={`/work/${project.id}`}>
              <div
                className={cn(
                  "group relative overflow-hidden rounded-2xl bg-zinc-900 border border-zinc-800 transition-all duration-500",
                  "hover:border-blue-500/50 hover:shadow-[0_0_40px_-15px_rgba(59,130,246,0.3)] cursor-pointer",
                  "h-full flex flex-col"
                )}
              >
                <div className="relative w-full aspect-video overflow-hidden bg-black">
                  <Image
                    src={project.src}
                    alt={`${project.title} — ${project.visualLabel || "Project visual"}`}
                    fill
                    className="object-cover opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent pointer-events-none" />
                  {project.visualType && project.visualType !== "screenshot" && (
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-black/75 border border-zinc-700 text-[10px] font-mono text-zinc-300 backdrop-blur-sm">
                      {project.visualType === "poster"
                        ? "CONFERENCE POSTER"
                        : project.visualType === "conceptual-preview"
                        ? "CONCEPTUAL PREVIEW"
                        : "ARCHITECTURE GRAPHIC"}
                    </span>
                  )}
                </div>
                <div className="flex flex-col flex-1 p-6 z-10 relative">
                  <div className="flex justify-between items-start gap-3 mb-4">
                    <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <div className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono whitespace-nowrap">
                      {project.category}
                    </div>
                  </div>
                  <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-6 group-hover:text-zinc-300 transition-colors">
                    {project.shortDescription || project.problem || "A showcase of engineering excellence."}
                  </p>

                  <div className="mt-auto flex items-center text-sm font-mono text-blue-500 opacity-80 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-300">
                    Read Case Study <ArrowUpRight className="ml-1 w-4 h-4" />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      <div className="flex justify-center mt-14">
        <Link href="/projects">
          <Button variant="outline" className="font-mono text-sm px-8 border-zinc-800 hover:bg-zinc-900">
            Browse All {projects.length} Projects <ArrowUpRight className="ml-2 w-4 h-4" />
          </Button>
        </Link>
      </div>
    </SectionWrapper>
  );
};

export default SelectedWorkSection;

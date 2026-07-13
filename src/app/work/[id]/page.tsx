"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Github, ExternalLink, ShieldAlert, Cpu, Hammer, Shield, TrendingUp, CpuIcon } from "lucide-react";
import { notFound } from "next/navigation";
import projects from "@/data/projects";
import SmoothScroll from "@/components/smooth-scroll";
import AnimatedBackground from "@/components/animated-background";
import { cn } from "@/lib/utils";

function renderArchitectureDiagram(id: string) {
  switch (id) {
    case "soc-ai":
      return (
        <pre className="font-mono text-xs md:text-sm text-blue-400 bg-black/60 p-4 rounded-lg overflow-x-auto border border-blue-950/40 leading-relaxed">
{`+-------------------+      +----------------------+      +----------------------+
| Packet Monitoring | ---> | Random Forest ML     | ---> | Severity Telemetry   |
| (Raw Interface)   |      | Classification (99%) |      | Alert Triage Engine  |
+-------------------+      +----------------------+      +----------------------+
                                                               |
                                                               v
+-------------------+      +----------------------+      +----------------------+
| Dockerized Agent  | <--- | Wazuh Agent API      | <--- | MITRE ATT&CK / Sigma |
| Secure Isolation  |      | Automation Triggers  |      | Rules Classification |
+-------------------+      +----------------------+      +----------------------+`}
        </pre>
      );
    case "chiggabot":
      return (
        <pre className="font-mono text-xs md:text-sm text-emerald-400 bg-black/60 p-4 rounded-lg overflow-x-auto border border-emerald-955/40 leading-relaxed">
{`+-------------------+      +----------------------+      +----------------------+
| User Query Input  | ---> | sentence-transformer | ---> | FAISS / Chroma Vector|
| (Local Console)   |      | Local Embeddings     |      | Database Triage      |
+-------------------+      +----------------------+      +----------------------+
                                                               |
                                                               v
+-------------------+      +----------------------+      +----------------------+
| Isolated Docker   | <--- | Response Synthesizer | <--- | Ollama Offline LLM   |
| Execution Sandbox |      | & Text-to-Speech     |      | (Zero cloud boundary)|
+-------------------+      +----------------------+      +----------------------+`}
        </pre>
      );
    case "talky":
      return (
        <pre className="font-mono text-xs md:text-sm text-purple-400 bg-black/60 p-4 rounded-lg overflow-x-auto border border-purple-955/40 leading-relaxed">
{`+-------------------+      +----------------------+      +----------------------+
| Client Browser    | ---> | Node.js Express Auth | ---> | Socket.io Connection |
| (React.js Client) |      | REST Gateway Server  |      | Bridge Protocol      |
+-------------------+      +----------------------+      +----------------------+
                                                               |
                                                               v
+-------------------+      +----------------------+      +----------------------+
| Active Client     | <--- | Thread Pool Logic    | <--- | C++ WebSocket Routing|
| State Update Sync |      | Binary Payload Pack  |      | (Sub-ms routing)     |
+-------------------+      +----------------------+      +----------------------+`}
        </pre>
      );
    case "ieee-portal":
      return (
        <pre className="font-mono text-xs md:text-sm text-cyan-400 bg-black/60 p-4 rounded-lg overflow-x-auto border border-cyan-955/40 leading-relaxed">
{`+-------------------+      +----------------------+      +----------------------+
| Active Members    | ---> | Custom PHP MVC       | ---> | Token Reverse-       |
| Browser Sessions  |      | Light Middleware     |      | Engineered Handshake |
+-------------------+      +----------------------+      +----------------------+
                                                               |
                                                               v
+-------------------+      +----------------------+      +----------------------+
| Attendance &      | <--- | MySQL Relational     | <--- | Session Synchronizer |
| Grading Analytics |      | Schema Bindings      |      | Automated Scraping   |
+-------------------+      +----------------------+      +----------------------+`}
        </pre>
      );
    default:
      return null;
  }
}

export default function CaseStudyPage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    return notFound();
  }

  const problem = project.problem || "Information not available.";
  const architectureDesc = project.architectureDesc || "Custom structured architecture.";
  const implementationDesc = project.implementationDesc || project.approach || "System implementation detail processing.";
  const securityConsiderations = project.securityConsiderations || "Local authorization enforcement, credentials hashing, and data sanitization validations.";
  const impact = project.impact || "Delivered a successful technical solution.";

  return (
    <SmoothScroll>
      <AnimatedBackground />
      <main className={cn("bg-slate-100 dark:bg-transparent canvas-overlay-mode min-h-screen relative pb-32")} style={{ zIndex: 10 }}>
        <div className="max-w-4xl mx-auto px-4 pt-24 md:pt-32">

          {/* Back Button */}
          <Link
            href="/#projects"
            className="inline-flex items-center text-sm font-mono text-zinc-400 hover:text-blue-400 transition-colors mb-12"
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Portfolio
          </Link>

          {/* 1. Intro Header */}
          <div className="mb-16">
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <h1 className="text-4xl md:text-6xl font-bold font-display text-white">{project.title}</h1>
              <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono mt-1">
                {project.category}
              </span>
            </div>
            <p className="text-xl md:text-2xl text-zinc-300 font-medium leading-relaxed font-sans">
              {project.shortDescription}
            </p>
          </div>

          {/* Project Banner Image */}
          <div className="w-full aspect-video relative rounded-2xl overflow-hidden border border-zinc-800 bg-black mb-20 shadow-2xl">
            <Image
              src={project.src}
              alt={`${project.title} System Dashboard`}
              fill
              className="object-cover opacity-90"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Main Content Layout */}
            <div className="md:col-span-2 space-y-16">

              {/* 2. The Problem */}
              <section className="space-y-4">
                <h2 className="text-xl md:text-2xl font-bold text-red-400 flex items-center gap-3 font-display">
                  <ShieldAlert className="w-5 h-5 text-red-400" /> The Problem
                </h2>
                <p className="text-zinc-400 text-base md:text-lg leading-relaxed font-sans">{problem}</p>
              </section>

              {/* 3. The Architecture */}
              <section className="space-y-4">
                <h2 className="text-xl md:text-2xl font-bold text-blue-400 flex items-center gap-3 font-display">
                  <Cpu className="w-5 h-5 text-blue-400" /> System Architecture
                </h2>
                <p className="text-zinc-400 text-base md:text-lg leading-relaxed font-sans mb-4">{architectureDesc}</p>
                {renderArchitectureDiagram(project.id)}
              </section>

              {/* 4. The Implementation */}
              <section className="space-y-4">
                <h2 className="text-xl md:text-2xl font-bold text-emerald-400 flex items-center gap-3 font-display">
                  <Hammer className="w-5 h-5 text-emerald-400" /> Core Implementation
                </h2>
                <p className="text-zinc-400 text-base md:text-lg leading-relaxed font-sans">{implementationDesc}</p>
              </section>

              {/* 5. Security Considerations */}
              <section className="space-y-4">
                <h2 className="text-xl md:text-2xl font-bold text-yellow-400 flex items-center gap-3 font-display">
                  <Shield className="w-5 h-5 text-yellow-400" /> Security Considerations
                </h2>
                <div className="bg-zinc-900/40 border border-yellow-500/20 p-5 rounded-xl">
                  <p className="text-zinc-300 text-base md:text-lg leading-relaxed font-sans">{securityConsiderations}</p>
                </div>
              </section>

              {/* 6. Result & Impact */}
              <section className="space-y-4">
                <h2 className="text-xl md:text-2xl font-bold text-purple-400 flex items-center gap-3 font-display">
                  <TrendingUp className="w-5 h-5 text-purple-400" /> Quantifiable Impact
                </h2>
                <p className="text-zinc-300 text-xl font-medium leading-relaxed border-l-4 border-purple-500/50 pl-6 py-2 font-mono bg-purple-500/5 rounded-r-lg pr-4">
                  {impact}
                </p>
              </section>
            </div>

            {/* Sidebar Details */}
            <div className="space-y-8">

              {/* Project Links */}
              <div className="bg-zinc-950/80 border border-zinc-800 rounded-xl p-6">
                <h3 className="text-zinc-100 font-bold mb-4 font-display text-sm uppercase tracking-wider">Project Links</h3>
                <div className="flex flex-col gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-zinc-450 hover:text-white transition-colors bg-black/50 p-3 rounded-lg border border-zinc-800 hover:border-zinc-700 font-mono text-sm"
                    >
                      <Github className="w-4 h-4" /> View Source
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-blue-450 hover:text-blue-300 transition-colors bg-blue-500/10 p-3 rounded-lg border border-blue-500/20 hover:border-blue-500/45 font-mono text-sm"
                    >
                      <ExternalLink className="w-4 h-4" /> Live Demo
                    </a>
                  )}
                  {!project.github && !project.live && (
                    <p className="text-xs text-zinc-500 italic font-mono">Internal corporate deployment.</p>
                  )}
                </div>
              </div>

              {/* Technical Stack Badges */}
              <div className="bg-zinc-950/80 border border-zinc-800 rounded-xl p-6">
                <h3 className="text-zinc-100 font-bold mb-6 font-display text-sm uppercase tracking-wider">Tech Stack</h3>

                <div className="space-y-6">
                  {project.skills.frontend?.length > 0 && (
                    <div>
                      <h4 className="text-xs font-mono text-zinc-500 mb-3 uppercase tracking-wider">Frontend</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.skills.frontend.map((skill, i) => (
                          <div
                            key={`fe-${i}`}
                            className="flex items-center gap-2 bg-zinc-900 border border-zinc-800/80 px-2.5 py-1.5 rounded text-xs text-zinc-300 font-mono"
                          >
                            {skill.icon} {skill.title}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  {project.skills.backend?.length > 0 && (
                    <div>
                      <h4 className="text-xs font-mono text-zinc-500 mb-3 uppercase tracking-wider">Backend & Systems</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.skills.backend.map((skill, i) => (
                          <div
                            key={`be-${i}`}
                            className="flex items-center gap-2 bg-zinc-900 border border-zinc-800/80 px-2.5 py-1.5 rounded text-xs text-zinc-300 font-mono"
                          >
                            {skill.icon} {skill.title}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

            </div>
          </div>
        </div>
      </main>
    </SmoothScroll>
  );
}

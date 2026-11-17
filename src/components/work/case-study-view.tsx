"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Github,
  ExternalLink,
  ShieldAlert,
  Cpu,
  Hammer,
  Shield,
  TrendingUp,
  UserCheck,
  AlertTriangle,
  Info,
} from "lucide-react";
import { notFound } from "next/navigation";
import projects from "@/data/projects";
import SmoothScroll from "@/components/smooth-scroll";
import AnimatedBackground from "@/components/animated-background";
import { cn } from "@/lib/utils";

function renderArchitectureDiagram(id: string) {
  switch (id) {
    case "flare-ai":
      return (
        <pre className="font-mono text-xs md:text-sm text-sky-400 bg-black/60 p-4 rounded-lg overflow-x-auto border border-sky-950/40 leading-relaxed">
{`+-------------------+      +----------------------+      +----------------------+
| NASA PSI Archives | ---> | ETL & SHA-256        | ---> | SQLite / PostgreSQL  |
| 128 Source Files  |      | Unit Normalization     |      | 1,157 Runs & Chunks  |
+-------------------+      +----------------------+      +----------------------+
                                                               |
                                                               v
+-------------------+      +----------------------+      +----------------------+
| Next.js 15 UI     | <--- | Verbatim RAG Copilot | <--- | Domain-Gated         |
| Explorer & Audit  |      | (G1-G7 Guardrails)   |      | Similarity Ranking   |
+-------------------+      +----------------------+      +----------------------+`}
        </pre>
      );
    case "revenant":
      return (
        <pre className="font-mono text-xs md:text-sm text-emerald-400 bg-black/60 p-4 rounded-lg overflow-x-auto border border-emerald-950/40 leading-relaxed">
{`+-------------------+      +----------------------+      +----------------------+
| Windows .NET 8    | ---> | Mutual TLS (mTLS)    | ---> | FastAPI Authority    |
| Agent (WMI/FS/Net)|      | + Write-Only Vault   |      | 3 ONNX ML Detectors  |
+-------------------+      +----------------------+      +----------------------+
        ^                                                      |
        | (Ed25519 Signed Commands)                            v
+-------------------+      +----------------------+      +----------------------+
| SHA-256 Verified  | <--- | Reversible Policy    | <--- | Hash-Chained Audit   |
| File Rollback     |      | Unit & React Console |      | & Recovery Engine    |
+-------------------+      +----------------------+      +----------------------+`}
        </pre>
      );
    case "ece-labs":
      return (
        <pre className="font-mono text-xs md:text-sm text-teal-400 bg-black/60 p-4 rounded-lg overflow-x-auto border border-teal-950/40 leading-relaxed">
{`+-------------------+      +----------------------+      +----------------------+
| Blade + Alpine.js | ---> | Laravel 11 Services  | ---> | Pessimistic Row Lock |
| U-Shaped Lab UI   |      | Quotas & Strike Rules|      | lockForUpdate() DB   |
+-------------------+      +----------------------+      +----------------------+
        ^                                                      |
        | (Live Bench Updates)                                 v
+-------------------+      +----------------------+      +----------------------+
| Laravel Reverb    | <--- | Filament v3.2 Admin  | <--- | SHA-256 HMAC QR      |
| WebSocket Channel |      | 609 Seeded Items     |      | Bench Check-In       |
+-------------------+      +----------------------+      +----------------------+`}
        </pre>
      );
    case "soc-ai":
      return (
        <pre className="font-mono text-xs md:text-sm text-blue-400 bg-black/60 p-4 rounded-lg overflow-x-auto border border-blue-950/40 leading-relaxed">
{`+-------------------+      +----------------------+      +----------------------+
| Telemetry Ingest  | ---> | Zero-Leak PII        | ---> | Async Triage Engine  |
| Simulated / SIEM  |      | Sanitizer Service    |      | Gemini/Ollama/RF ML  |
+-------------------+      +----------------------+      +----------------------+
                                                               |
                                                               v
+-------------------+      +----------------------+      +----------------------+
| Simulated SOAR    | <--- | MITRE ATT&CK / 50    | <--- | WebSocket Broadcast  |
| Playbooks         |      | Sigma YAML Rules     |      | & D3 Topology HUD    |
+-------------------+      +----------------------+      +----------------------+`}
        </pre>
      );
    case "chiggabot":
      return (
        <pre className="font-mono text-xs md:text-sm text-emerald-400 bg-black/60 p-4 rounded-lg overflow-x-auto border border-emerald-955/40 leading-relaxed">
{`+---------------------+      +----------------------+      +----------------------+
| download_models.ps1 | ---> | Ollama Model Engine  | <--- | launch_agent.bat     |
| 8 Quantized Models  |      | (localhost:11434)    |      | Docker Service Check |
+---------------------+      +----------------------+      +----------------------+
                                       ^
                                       | (host.docker.internal)
                                       v
+---------------------+      +----------------------+
| Edge Desktop Window | <--- | Docker Open WebUI    |
| (localhost:8081)    |      | Local Chat Container |
+---------------------+      +----------------------+`}
        </pre>
      );
    case "talky":
      return (
        <pre className="font-mono text-xs md:text-sm text-purple-400 bg-black/60 p-4 rounded-lg overflow-x-auto border border-purple-955/40 leading-relaxed">
{`+-------------------+      +----------------------+      +----------------------+
| React 19 Client   | ---> | C++ ChatServer       | ---> | WSManager Broadcast  |
| (Vite + Tailwind) |      | (httplib + JWT Auth) |      | (RFC 6455 Frames)    |
+-------------------+      +----------------------+      +----------------------+
                                                               |
                                                               v
+-------------------+      +----------------------+      +----------------------+
| Ghost Auto-Burn   | <--- | 10s Expiry Thread    | <--- | SQLite3 Thread-Safe  |
| TTL Purge Worker  |      | & CryptoUtils (SHA)  |      | DatabaseManager      |
+-------------------+      +----------------------+      +----------------------+`}
        </pre>
      );
    case "ieee-portal":
      return (
        <pre className="font-mono text-xs md:text-sm text-cyan-400 bg-black/60 p-4 rounded-lg overflow-x-auto border border-cyan-955/40 leading-relaxed">
{`+-------------------+      +----------------------+      +----------------------+
| Active Members    | ---> | Custom PHP 8.2 MVC   | ---> | RBAC & CSRF / XSS    |
| Redesigned UI     |      | Controllers & Router |      | Hardened Middleware  |
+-------------------+      +----------------------+      +----------------------+
                                                               |
                                                               v
+-------------------+      +----------------------+      +----------------------+
| FPDF Certificates | <--- | Auto-Grading Engine  | <--- | MySQL PDO Singleton  |
| & SMTP Broadcasts |      | & GDrive Gallery Sync|      | Self-Healing Schema  |
+-------------------+      +----------------------+      +----------------------+`}
        </pre>
      );
    case "probcast":
      return (
        <pre className="font-mono text-xs md:text-sm text-indigo-400 bg-black/60 p-4 rounded-lg overflow-x-auto border border-indigo-955/40 leading-relaxed">
{`+-------------------+      +----------------------+      +----------------------+
| Geolocation /     | ---> | FastAPI Data Proxy   | ---> | NASA POWER API       |
| Region Selector   |      | (120s TTL Cache)     |      | Meteorological Data  |
+-------------------+      +----------------------+      +----------------------+
                                                               |
                                                               v
+-------------------+      +----------------------+      +----------------------+
| Leaflet.js Dark   | <--- | Chart.js Trends &    | <--- | Historical Rainfall  |
| Probability Map   |      | Fallback Simulator   |      | Risk Modeling        |
+-------------------+      +----------------------+      +----------------------+`}
        </pre>
      );
    default:
      return null;
  }
}

export default function CaseStudyView({ projectId }: { projectId: string }) {
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return notFound();
  }

  const problem = project.problem || "Problem scope documented in repository.";
  const solution = project.solution || "";
  const architectureDesc = project.architectureDesc || "Modular layered architecture.";
  const contribution = project.contribution || "Designed and implemented project modules.";
  const implementationDesc =
    project.implementationDesc || project.approach || "Core implementation details documented above.";
  const securityConsiderations =
    project.securityConsiderations ||
    "Standard input validation, scoped permissions, and environment-isolated configuration.";
  const limitations =
    project.limitations || "Scoped as a portfolio/prototype engineering implementation.";
  const impact = project.impact || "Delivered verified engineering implementation.";
  const visualCaption =
    project.visualLabel ||
    (project.visualType === "screenshot"
      ? "Application Screenshot"
      : "Illustrative Architecture Graphic — Not a Live Application Screenshot");

  return (
    <SmoothScroll>
      <AnimatedBackground />
      <main
        className={cn("bg-slate-100 dark:bg-transparent canvas-overlay-mode min-h-screen relative pb-32")}
        style={{ zIndex: 10 }}
      >
        <div className="max-w-4xl mx-auto px-4 pt-24 md:pt-32">
          {/* Navigation Links */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-12">
            <Link
              href="/#projects"
              className="inline-flex items-center text-sm font-mono text-zinc-400 hover:text-blue-400 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Portfolio
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center text-sm font-mono text-zinc-400 hover:text-blue-400 transition-colors"
            >
              All Projects Archive
            </Link>
          </div>

          {/* 1. Intro Header */}
          <div className="mb-12">
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

          {/* Project Visual Banner */}
          <div className="mb-16">
            <div className="w-full aspect-video relative rounded-2xl overflow-hidden border border-zinc-800 bg-black shadow-2xl">
              <Image
                src={project.src}
                alt={`${project.title} — ${visualCaption}`}
                fill
                className="object-cover opacity-90"
              />
            </div>
            <p className="mt-3 flex items-center gap-2 text-xs font-mono text-zinc-400">
              <Info className="w-3.5 h-3.5 text-blue-400 shrink-0" />
              <span>{visualCaption}</span>
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Main Content Layout */}
            <div className="md:col-span-2 space-y-12">
              {/* 2. The Problem */}
              <section className="space-y-3">
                <h2 className="text-xl md:text-2xl font-bold text-red-400 flex items-center gap-3 font-display">
                  <ShieldAlert className="w-5 h-5 text-red-400" /> The Problem
                </h2>
                <p className="text-zinc-400 text-base md:text-lg leading-relaxed font-sans">{problem}</p>
              </section>

              {/* 3. Karim's Contribution */}
              <section className="space-y-3">
                <h2 className="text-xl md:text-2xl font-bold text-cyan-400 flex items-center gap-3 font-display">
                  <UserCheck className="w-5 h-5 text-cyan-400" /> Karim&apos;s Contribution
                </h2>
                <div className="bg-zinc-900/40 border border-cyan-500/20 p-5 rounded-xl space-y-2">
                  <p className="text-zinc-200 text-base md:text-lg leading-relaxed font-sans">{contribution}</p>
                  {solution && (
                    <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-sans pt-1">
                      <span className="font-mono text-cyan-400">Proposed Solution:</span> {solution}
                    </p>
                  )}
                </div>
              </section>

              {/* 4. System Architecture */}
              <section className="space-y-4">
                <h2 className="text-xl md:text-2xl font-bold text-blue-400 flex items-center gap-3 font-display">
                  <Cpu className="w-5 h-5 text-blue-400" /> System Architecture
                </h2>
                <p className="text-zinc-400 text-base md:text-lg leading-relaxed font-sans mb-4">
                  {architectureDesc}
                </p>
                {renderArchitectureDiagram(project.id)}
              </section>

              {/* 5. Core Implementation */}
              <section className="space-y-3">
                <h2 className="text-xl md:text-2xl font-bold text-emerald-400 flex items-center gap-3 font-display">
                  <Hammer className="w-5 h-5 text-emerald-400" /> Core Implementation
                </h2>
                <p className="text-zinc-400 text-base md:text-lg leading-relaxed font-sans">
                  {implementationDesc}
                </p>
              </section>

              {/* 6. Security Considerations */}
              <section className="space-y-3">
                <h2 className="text-xl md:text-2xl font-bold text-yellow-400 flex items-center gap-3 font-display">
                  <Shield className="w-5 h-5 text-yellow-400" /> Security Considerations
                </h2>
                <div className="bg-zinc-900/40 border border-yellow-500/20 p-5 rounded-xl">
                  <p className="text-zinc-300 text-base md:text-lg leading-relaxed font-sans">
                    {securityConsiderations}
                  </p>
                </div>
              </section>

              {/* 7. Verified Results */}
              <section className="space-y-3">
                <h2 className="text-xl md:text-2xl font-bold text-purple-400 flex items-center gap-3 font-display">
                  <TrendingUp className="w-5 h-5 text-purple-400" /> Verified Outcomes
                </h2>
                <p className="text-zinc-300 text-lg md:text-xl font-medium leading-relaxed border-l-4 border-purple-500/50 pl-6 py-2 font-mono bg-purple-500/5 rounded-r-lg pr-4">
                  {impact}
                </p>
              </section>

              {/* 8. Limitations & Scope */}
              <section className="space-y-3">
                <h2 className="text-xl md:text-2xl font-bold text-amber-400 flex items-center gap-3 font-display">
                  <AlertTriangle className="w-5 h-5 text-amber-400" /> Known Limitations &amp; Scope
                </h2>
                <div className="bg-zinc-900/40 border border-amber-500/20 p-5 rounded-xl">
                  <p className="text-zinc-300 text-sm md:text-base leading-relaxed font-sans">{limitations}</p>
                </div>
              </section>
            </div>

            {/* Sidebar Details */}
            <div className="space-y-8">
              {/* Project Links */}
              <div className="bg-zinc-950/80 border border-zinc-800 rounded-xl p-6">
                <h3 className="text-zinc-100 font-bold mb-4 font-display text-sm uppercase tracking-wider">
                  Project Links
                </h3>
                <div className="flex flex-col gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-zinc-300 hover:text-white transition-colors bg-black/50 p-3 rounded-lg border border-zinc-800 hover:border-zinc-700 font-mono text-sm"
                    >
                      <Github className="w-4 h-4" /> View Source
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-blue-400 hover:text-blue-300 transition-colors bg-blue-500/10 p-3 rounded-lg border border-blue-500/20 hover:border-blue-500/45 font-mono text-sm"
                    >
                      <ExternalLink className="w-4 h-4" /> Live Demo
                    </a>
                  )}
                  {!project.github && !project.live && (
                    <p className="text-xs text-zinc-400 italic font-mono">
                      Private repository or local hardware deployment.
                    </p>
                  )}
                </div>
              </div>

              {/* Technical Stack Badges */}
              <div className="bg-zinc-950/80 border border-zinc-800 rounded-xl p-6">
                <h3 className="text-zinc-100 font-bold mb-6 font-display text-sm uppercase tracking-wider">
                  Tech Stack
                </h3>

                <div className="space-y-6">
                  {project.skills.frontend?.length > 0 && (
                    <div>
                      <h4 className="text-xs font-mono text-zinc-400 mb-3 uppercase tracking-wider">Frontend</h4>
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
                      <h4 className="text-xs font-mono text-zinc-400 mb-3 uppercase tracking-wider">
                        Backend &amp; Systems
                      </h4>
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

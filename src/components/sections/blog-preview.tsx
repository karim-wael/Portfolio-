"use client";
import React from "react";
import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";
import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRight, CalendarDays, Tag } from "lucide-react";
import { motion } from "framer-motion";

const previewPosts = [
  {
    title: "Building FLARE AI: Source-Grounded Microgravity RAG for NASA Space Apps 2026",
    publishedAt: "2026-11-15",
    summary: "How Team The Fireflies ingested 1,157 historical NASA PSI runs, enforced G1–G7 guardrails, and eliminated SQLAlchemy OOM bottlenecks (~43x faster dev retrieval).",
    slug: "building-flare-ai-nasa-2026",
    tag: "NASA 2026",
  },
  {
    title: "Project Revenant: Designing an Out-of-Band Self-Healing Endpoint Defense",
    publishedAt: "2026-10-28",
    summary: "Co-engineering a decoupled .NET 8, mTLS, Ed25519, ONNX, and write-only vault prototype validated on a single-laptop loopback sandbox.",
    slug: "building-project-revenant",
    tag: "Endpoint Security",
  },
  {
    title: "Building SOC AI Omega: Machine Learning in Defensive Operations",
    publishedAt: "2026-03-12",
    summary: "Implementing Random Forest classifiers, Zero-Leak PII sanitization, and Sigma YAML rules inside a FastAPI SIEM/SOAR fusion dashboard.",
    slug: "building-soc-ai-omega",
    tag: "Cybersecurity",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.4 } },
};

export default function BlogPreview() {
  return (
    <SectionWrapper id="blog-preview" className="py-24 max-w-7xl mx-auto z-10 relative">
      <div className="px-4">
        <SectionHeader
          id="blog-preview"
          title="Technical Log"
          desc="Architecture notes on microgravity RAG, endpoint security, defensive ML, and reverse-engineered systems."
          className="mb-16 mt-0"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
        >
          {previewPosts.map((post, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="group p-6 rounded-xl border border-zinc-800 bg-zinc-950/40 backdrop-blur-sm hover:border-blue-500/20 hover:shadow-[0_0_30px_rgba(59,130,246,0.02)] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="flex items-center gap-1.5 text-xs text-blue-400 font-mono bg-blue-500/10 border border-blue-500/20 px-2 py-0.5 rounded-full">
                    <Tag className="w-3 h-3" />
                    {post.tag}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-zinc-500 font-mono">
                    <CalendarDays className="w-3.5 h-3.5" />
                    {post.publishedAt}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors mb-3 leading-snug">
                  {post.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed font-sans mb-6">
                  {post.summary}
                </p>
              </div>

              <Link href={`/blogs/${post.slug}`} className="mt-auto">
                <Button
                  variant="link"
                  className="p-0 text-xs font-mono text-blue-500 hover:text-blue-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                >
                  Read Article <ArrowRight className="w-3.5 h-3.5" />
                </Button>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <div className="flex justify-center mt-12">
          <Link href="/blogs">
            <Button variant="outline" className="font-mono text-sm px-8 hover:bg-zinc-900 border-zinc-800">
              View All Articles
            </Button>
          </Link>
        </div>
      </div>
    </SectionWrapper>
  );
}

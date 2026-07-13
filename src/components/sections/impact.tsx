"use client";
import React from "react";
import SectionWrapper from "../ui/section-wrapper";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const metrics = [
  {
    value: "10+",
    label: "Engineering Projects",
    desc: "Robust backends, cybersecurity command centers, and custom AI agents built from the ground up.",
  },
  {
    value: "3+",
    label: "Leadership Roles",
    desc: "Directing technical teams, coordinating TA groups, and organizing national robotics competitions.",
  },
  {
    value: "IEEE Egypt",
    label: "Sensors Council Egypt Ambassador",
    desc: "Advocating for technological literacy and driving sensor-based engineering student branches nationwide.",
  },
  {
    value: "NASA Space Apps",
    label: "Technical Team Lead",
    desc: "Architected ProbCast for real-time environmental alerts using satellite data telemetry.",
  },
  {
    value: "AI & ML",
    label: "Systems Builder",
    desc: "Deploying local RAG pipelines, off-grid LLM runtime engines, and machine learning telemetry classifiers.",
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
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function ImpactDashboard() {
  return (
    <SectionWrapper id="impact" className="py-24 max-w-7xl mx-auto z-10 relative">
      <div className="px-4">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-xs font-mono tracking-[0.2em] text-blue-500 uppercase mb-2">
            System Telemetry
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold font-display text-white tracking-tight">
            Impact Dashboard
          </h3>
        </div>

        {/* Dashboard Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {metrics.map((metric, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className={cn(
                "group relative overflow-hidden rounded-xl bg-zinc-900/60 border border-zinc-800 p-6 backdrop-blur-sm",
                "hover:border-blue-500/30 transition-all duration-300",
                metric.value.includes("IEEE") || metric.value.includes("NASA")
                  ? "lg:col-span-1"
                  : ""
              )}
            >
              {/* Corner decorative light effect */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-bl-full filter blur-md group-hover:bg-blue-500/10 transition-colors duration-300" />
              
              <div className="flex flex-col h-full justify-between relative z-10">
                <div>
                  <div className="text-3xl md:text-4xl font-bold font-display bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-400 group-hover:from-blue-400 group-hover:to-cyan-400 transition-colors duration-300 mb-2">
                    {metric.value}
                  </div>
                  <div className="text-sm font-mono text-zinc-300 font-semibold mb-3">
                    {metric.label}
                  </div>
                </div>
                <p className="text-xs md:text-sm text-zinc-400 leading-relaxed font-sans mt-auto">
                  {metric.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}

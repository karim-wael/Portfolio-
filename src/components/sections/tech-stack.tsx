"use client";
import React from "react";
import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";
import { motion } from "framer-motion";

const categories = [
  {
    title: "Programming",
    skills: ["Python", "C++", "C# (.NET 8)", "TypeScript", "JavaScript", "PHP 8.2", "Java", "SQL"],
  },
  {
    title: "AI, RAG & Computer Vision",
    skills: ["PyTorch", "LightGBM", "ONNX Runtime", "Scikit-Learn", "Google ADK", "Ollama", "pgvector", "YOLOv8 / OpenCV"],
  },
  {
    title: "Cybersecurity & Crypto",
    skills: ["Mutual TLS (mTLS)", "Ed25519 Signatures", "MITRE ATT&CK", "Sigma YAML", "Wazuh", "Linux Security", "RBAC"],
  },
  {
    title: "Frontend & Interactive",
    skills: ["Next.js 14/15", "React 18/19", "Three.js", "Tailwind CSS", "Alpine.js", "Framer Motion", "Leaflet / Chart.js"],
  },
  {
    title: "Backend & Systems",
    skills: ["FastAPI", "Laravel 11", "Laravel Reverb", "Node.js", "C++ WebSockets", "SQLAlchemy", "REST APIs"],
  },
  {
    title: "Data, DevOps & Hardware",
    skills: ["PostgreSQL", "MySQL", "SQLite3", "Redis", "Docker", "AWS", "Filament v3", "Arduino / Embedded C++"],
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

export default function TechStackSection() {
  return (
    <SectionWrapper id="tech-stack" className="py-24 max-w-7xl mx-auto z-10 relative">
      <div className="px-4">
        <SectionHeader
          id="tech-stack"
          title="Engineering Toolbelt"
          desc="Technologies verified across production codebases, internships, and NASA Space Apps builds."
          className="mb-16 mt-0"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
        >
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="p-6 rounded-xl border border-zinc-800 bg-zinc-950/40 backdrop-blur-sm hover:border-zinc-700 transition-colors"
            >
              <h3 className="text-lg font-bold font-display text-white mb-4 border-b border-zinc-850 pb-2">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-xs font-mono text-zinc-300 hover:text-white transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}

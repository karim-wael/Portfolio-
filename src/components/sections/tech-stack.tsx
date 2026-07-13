"use client";
import React from "react";
import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";
import { motion } from "framer-motion";

const categories = [
  {
    title: "Programming",
    skills: ["Python", "C++", "JavaScript", "TypeScript", "Java", "Arduino (C++)"],
  },
  {
    title: "AI & Machine Learning",
    skills: ["Machine Learning", "Deep Learning", "RAG", "LLMs", "AI Agents", "Scikit-learn"],
  },
  {
    title: "Cybersecurity",
    skills: ["MITRE ATT&CK", "Sigma Rules", "Wazuh", "Linux Security", "Network Forensics"],
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js", "Three.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend & Systems",
    skills: ["FastAPI", "Node.js", "Express", "Socket.io", "WebSocket Protocol", "REST APIs"],
  },
  {
    title: "DevOps & Infrastructure",
    skills: ["Docker", "AWS", "Git & GitHub Workflows", "Linux SysAdmin", "Nginx"],
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
          desc="Visible technologies catalog representing my full engineering competencies."
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

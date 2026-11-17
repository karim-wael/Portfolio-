"use client";
import React from "react";
import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";
import { motion } from "framer-motion";
import { Award, Cloud, Cpu, ShieldCheck, Code, ExternalLink } from "lucide-react";

const certGroups = [
  {
    domain: "Artificial Intelligence & Deep Learning",
    icon: <Cpu className="w-5 h-5 text-blue-400" />,
    items: [
      {
        title: "Fundamentals of Deep Learning",
        issuer: "NVIDIA Deep Learning Institute (DLI)",
        description: "Certificate of Competency (Feb 16, 2026 · ID: 2wJxG6HWTrKbKAsDoxV-Gw) covering deep neural networks and computer vision.",
        link: "/assets/certificates/nvidia-deep-learning.pdf",
      },
      {
        title: "Huawei HCIA-AI V4.0",
        issuer: "Huawei ICT Academy",
        description: "Certified AI Associate (Feb 2026) covering machine learning fundamentals, deep learning frameworks, and AI workflows.",
      },
      {
        title: "Artificial Intelligence Fundamentals",
        issuer: "IBM SkillsBuild",
        description: "Credly-verified credential (Nov 16, 2025) in neural networks, NLP, computer vision, and ethical AI.",
        link: "/assets/certificates/AIFundamentalsUpdated20251116-31-smtkgk.pdf",
      },
      {
        title: "AI Fundamentals with IBM SkillsBuild",
        issuer: "Cisco Networking Academy + IBM",
        description: "Statement of Achievement (Nov 16, 2025) building and evaluating ML workflows in IBM Watson Studio.",
        link: "/assets/certificates/ibm-ai-fundamentals.pdf",
      },
    ],
  },
  {
    domain: "Hackathons, Security & National Programs",
    icon: <ShieldCheck className="w-5 h-5 text-cyan-400" />,
    items: [
      {
        title: "2026 Galactic Problem Solver",
        issuer: "NASA Space Apps Challenge",
        description: "Official project completion recognition (Nov 14–15, 2026) for FLARE AI (Microgravity Combustion & Hybrid Knowledge Engine).",
        link: "/assets/certificates/nasa-space-apps-2026.png",
      },
      {
        title: "2025 Galactic Problem Solver",
        issuer: "NASA International Space Apps Challenge",
        description: "Official project completion recognition (Oct 4–5, 2025) for leading Team Moon Walkers on ProbCast climate risk analytics.",
        link: "/assets/certificates/nasa-space-apps-2025.png",
      },
      {
        title: "Introduction to Cybersecurity",
        issuer: "Cisco Networking Academy",
        description: "Completed Sep 11, 2025 covering cyber threat vectors, network defense, and security operations foundations.",
        link: "/assets/certificates/cisco-intro-cybersecurity.png",
      },
      {
        title: "DIGITOPIA 2025 — Software & AI Track",
        issuer: "Egypt Ministry of Communications (MCIT)",
        description: "Advanced to Phase 2 in the national Software & Artificial Intelligence competition track.",
        link: "/assets/certificates/mcit-digitopia-2025.png",
      },
    ],
  },
  {
    domain: "Cloud, Problem Solving & Mentorship",
    icon: <Cloud className="w-5 h-5 text-emerald-400" />,
    items: [
      {
        title: "AWS Academy Graduate — ML Foundations",
        issuer: "Amazon Web Services (AWS)",
        description: "20-hour training badge (Mar 12, 2026) covering Amazon SageMaker pipelines and managed ML architectures.",
        link: "/assets/certificates/aws-machine-learning-foundations.pdf",
      },
      {
        title: "AWS Academy Graduate — Generative AI Foundations",
        issuer: "Amazon Web Services (AWS)",
        description: "12-hour training badge (Mar 12, 2026) covering foundation models, prompting, and cloud GenAI patterns.",
        link: "/assets/certificates/aws-generative-ai.pdf",
      },
      {
        title: "Problem Solving (Basic) & SQL (Basic)",
        issuer: "HackerRank",
        description: "Verified coding and relational query assessments covering algorithms, joins, and SQL logic.",
        link: "/assets/certificates/hackerrank-problem-solving-basic.pdf",
      },
      {
        title: "Certificate of Appreciation — Course Assistant",
        issuer: "IEEE MIU Student Branch",
        description: "Recognized for delivering 20+ training hours in the Arduino and Python junior engineering program.",
        link: "/assets/certificates/ieee-miu-ta-appreciation.png",
      },
    ],
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
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

export default function CertificationsSection() {
  return (
    <SectionWrapper id="certifications" className="py-24 max-w-7xl mx-auto z-10 relative">
      <div className="px-4">
        <SectionHeader
          id="certifications"
          title="Verified Credentials"
          desc="Official certifications and international hackathon recognitions validating AI, cloud, cybersecurity, and systems engineering."
          className="mb-16 mt-0"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-12 mt-12"
        >
          {certGroups.map((group, groupIdx) => (
            <motion.div
              key={groupIdx}
              variants={itemVariants}
              className="bg-zinc-950/40 border border-zinc-800/80 rounded-2xl p-6 backdrop-blur-sm"
            >
              <div className="flex items-center gap-3 mb-6 pb-3 border-b border-zinc-900">
                <div className="p-2 rounded bg-zinc-900 border border-zinc-800">
                  {group.icon}
                </div>
                <h3 className="text-xl font-bold font-display text-white">
                  {group.domain}
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {group.items.map((cert, certIdx) => (
                  <div
                    key={certIdx}
                    className="group flex flex-col justify-between p-5 rounded-xl border border-zinc-800/60 bg-zinc-900/20 hover:border-zinc-700/80 hover:bg-zinc-900/35 transition-all duration-300 h-full"
                  >
                    <div>
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="text-base font-bold text-zinc-100 group-hover:text-blue-400 transition-colors">
                          {cert.title}
                        </h4>
                        <Award className="w-4 h-4 text-zinc-500 flex-shrink-0 ml-2" />
                      </div>
                      <p className="text-xs font-mono text-zinc-500 mb-3 uppercase tracking-wider">
                        {cert.issuer}
                      </p>
                      <p className="text-xs text-zinc-400 leading-relaxed font-sans mb-4">
                        {cert.description}
                      </p>
                    </div>
                    {cert.link && (
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono text-blue-400 hover:text-blue-300 transition-colors mt-auto w-fit"
                      >
                        Verify Credential <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}

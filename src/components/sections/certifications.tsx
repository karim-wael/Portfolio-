"use client";
import React from "react";
import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";
import { motion } from "framer-motion";
import { Award, Cloud, Cpu, Code, ExternalLink } from "lucide-react";

const certGroups = [
  {
    domain: "Artificial Intelligence",
    icon: <Cpu className="w-5 h-5 text-blue-400" />,
    items: [
      {
        title: "Huawei HCIA-AI V4.0",
        issuer: "Huawei ICT Academy",
        description: "Certified AI Associate covering deep neural networks, machine learning fundamentals, and AI workflows.",
      },
      {
        title: "Fundamentals of Deep Learning",
        issuer: "NVIDIA Deep Learning Institute (DLI)",
        description: "Hands-on application of deep neural networks to computer vision and sequence tasks.",
        link: "/assets/certificates/nvidia-deep-learning.pdf",
      },
      {
        title: "AI Fundamentals",
        issuer: "IBM SkillsBuild",
        description: "Foundational training in modern neural networks, prompting engineering, and cognitive architectures.",
        link: "/assets/certificates/ibm-ai-fundamentals.pdf",
      },
    ],
  },
  {
    domain: "Cloud Infrastructure",
    icon: <Cloud className="w-5 h-5 text-emerald-400" />,
    items: [
      {
        title: "AWS Academy Graduate - Generative AI Foundations",
        issuer: "Amazon Web Services (AWS)",
        description: "Verified training badge covering Generative AI patterns, prompt design, and cloud foundation pipelines.",
        link: "/assets/certificates/aws-generative-ai.pdf",
      },
      {
        title: "AWS Academy Graduate - ML Foundations",
        issuer: "Amazon Web Services (AWS)",
        description: "AWS cloud architectures, scalable deployments, and managed AI/ML pipelines (Amazon SageMaker).",
        link: "/assets/certificates/aws-machine-learning-foundations.pdf",
      },
    ],
  },
  {
    domain: "Developer Foundations & Design",
    icon: <Code className="w-5 h-5 text-purple-400" />,
    items: [
      {
        title: "Enterprise Design Thinking Practitioner",
        issuer: "IBM",
        description: "Acquired design thinking methodologies for building user-centric software products.",
        link: "/assets/certificates/ibm-design-thinking.pdf",
      },
      {
        title: "Problem Solving (Basic)",
        issuer: "HackerRank",
        description: "Verified problem-solving algorithms, data structures, and script execution logic.",
        link: "/assets/certificates/hackerrank-problem-solving-basic.pdf",
      },
      {
        title: "SQL (Basic)",
        issuer: "HackerRank",
        description: "Verified relational database queries, table joins, and SQL execution logic.",
        link: "/assets/certificates/hackerrank-sql-basic.pdf",
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
          desc="Professional certifications validating systems architecture and artificial intelligence competency."
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

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

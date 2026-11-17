"use client";
import React from "react";
import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Shield, Users, Trophy, Milestone } from "lucide-react";

const leadershipRoles = [
  {
    role: "Vice Chairman — IEEE MIU Student Branch",
    org: "IEEE MIU Student Branch (Formerly Webmaster & R&D Co-Head)",
    impact: [
      "Promoted to Vice Chairman (Sep 2026) overseeing technical strategy, cross-committee alignment, and branch operations.",
      "Lead developer of IEEEMIU-PORTAL (custom PHP 8.2 MVC LMS, automated grading, and FPDF certification) with collaborative UI redesign.",
      "Earned Certificate of Appreciation as Course Assistant for the 20-hour Arduino & Python Junior Program.",
    ],
    metrics: "Executive Leadership",
    icon: <Users className="text-emerald-500 w-6 h-6" />,
  },
  {
    role: "IEEE Sensors Council Egypt Chapter Ambassador (ID: SCA004)",
    org: "IEEE Sensors Council Egypt Chapter",
    impact: [
      "Representing the Egyptian chapter across student branches to drive sensor engineering literacy and technical outreach.",
      "Facilitating educational tracks bridging embedded hardware telemetry with applied Machine Learning and software systems.",
    ],
    metrics: "Chapter Outreach",
    icon: <Shield className="text-blue-500 w-6 h-6" />,
  },
  {
    role: "Participation Manager & TA Lead",
    org: "SmartGen Championship 2026",
    impact: [
      "Managed participant workflows, school tour outreach, and mentorship checkpoints across 10 high schools.",
      "Delivered hands-on Arduino, embedded C++, and Python workshops guiding 30+ participating students toward competition prototypes.",
    ],
    metrics: "30+ Students · 10 Schools · 20+ hrs",
    icon: <Trophy className="text-yellow-500 w-6 h-6" />,
  },
  {
    role: "2x Galactic Problem Solver (Oct 2025 & Nov 2026)",
    org: "NASA International Space Apps Challenge",
    impact: [
      "2026 (FLARE AI — Team The Fireflies): Co-engineered a source-grounded NASA PSI historical combustion archive engine and verbatim RAG copilot.",
      "2025 (ProbCast — Team Moon Walkers Lead): Led a 4-person squad building predictive rainfall risk models from NASA POWER satellite data.",
    ],
    metrics: "Official Completion Recognition",
    icon: <Milestone className="text-purple-500 w-6 h-6" />,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function LeadershipSection() {
  return (
    <SectionWrapper id="leadership" className="py-24 max-w-7xl mx-auto z-10 relative">
      <div className="px-4">
        <SectionHeader
          id="leadership"
          title="Leadership & Community Impact"
          desc="Executive branch leadership, multi-school robotics training, and 2x NASA Space Apps engineering."
          className="mb-16 mt-0"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"
        >
          {leadershipRoles.map((role, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className={cn(
                "group rounded-2xl bg-zinc-950/60 border border-zinc-800/80 p-6 backdrop-blur-sm transition-all duration-300",
                "hover:border-blue-500/20 hover:shadow-[0_0_30px_rgba(59,130,246,0.05)] flex flex-col justify-between"
              )}
            >
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-zinc-900 border border-zinc-800 group-hover:border-blue-500/20 transition-colors">
                    {role.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {role.role}
                    </h3>
                    <p className="text-sm font-mono text-zinc-500">{role.org}</p>
                  </div>
                </div>

                <ul className="space-y-2 mb-6">
                  {role.impact.map((point, i) => (
                    <li key={i} className="text-sm text-zinc-400 leading-relaxed list-disc list-inside">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto pt-4 border-t border-zinc-900 flex justify-between items-center">
                <span className="text-xs font-mono text-zinc-500">OUTCOME</span>
                <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider bg-blue-500/10 border border-blue-500/20 px-2.5 py-0.5 rounded-full">
                  {role.metrics}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}

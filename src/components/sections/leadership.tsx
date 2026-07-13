"use client";
import React from "react";
import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Shield, Users, Trophy, Milestone } from "lucide-react";

const leadershipRoles = [
  {
    role: "Ambassador",
    org: "IEEE Sensors Council Egypt",
    impact: [
      "Pioneered national tech advocacy and outreach campaigns across multiple student branches.",
      "Facilitated educational tracks bridging sensor hardware engineering with local Machine Learning paradigms."
    ],
    metrics: "200+ Students Reached",
    icon: <Shield className="text-blue-500 w-6 h-6" />,
  },
  {
    role: "Research & Development Co-Head",
    org: "IEEE MIU Student Branch",
    impact: [
      "Led full-stack teams developing internal platforms and learning tools for student branches.",
      "Mentored junior developers in secure web programming, git-flow protocols, and API development.",
      "Spearheaded IEEEMIU-PORTAL design and database workflows."
    ],
    metrics: "100+ active users managed",
    icon: <Users className="text-emerald-500 w-6 h-6" />,
  },
  {
    role: "Participation Manager & TA Lead",
    org: "SmartGen Championship 2026",
    impact: [
      "Orchestrated participant logistics, mentoring, and technical coordinator workflows.",
      "Designed curriculum and delivered hands-on robotics workshops (Arduino & Embedded C++).",
      "Mentored teams from conceptualization to fully operational projects."
    ],
    metrics: "20+ hours of embedded training",
    icon: <Trophy className="text-yellow-500 w-6 h-6" />,
  },
  {
    role: "Technical Lead",
    org: "NASA Space Apps Challenge (Moon Walkers)",
    impact: [
      "Architected 'ProbCast' using NASA POWER API to model rain probability forecasts.",
      "Managed real-time Python model integrations and deployed a clean Streamlit portal."
    ],
    metrics: "Top-tier regional ranking",
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
          desc="Organizing championships, leading development circles, and driving national tech initiatives."
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

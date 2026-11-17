"use client";

import React from "react";
import SmoothScroll from "@/components/smooth-scroll";
import { cn } from "@/lib/utils";
import AnimatedBackground from "@/components/animated-background";
import ContactSection from "@/components/sections/contact";
import HeroSection from "@/components/sections/hero";
import MindsetSection from "@/components/sections/mindset";
import SelectedWorkSection from "@/components/sections/selected-work/selected-work";
import ExperienceSection from "@/components/sections/experience";
import ImpactDashboard from "@/components/sections/impact";
import LeadershipSection from "@/components/sections/leadership";
import TechStackSection from "@/components/sections/tech-stack";
import CertificationsSection from "@/components/sections/certifications";
import BlogPreview from "@/components/sections/blog-preview";

export default function HomePageClient() {
  return (
    <SmoothScroll>
      <AnimatedBackground />
      <main className={cn("bg-slate-100 dark:bg-transparent canvas-overlay-mode")}>
        <HeroSection />
        <ImpactDashboard />
        <SelectedWorkSection />
        <ExperienceSection />
        <LeadershipSection />
        <MindsetSection />
        <TechStackSection />
        <CertificationsSection />
        <BlogPreview />
        <ContactSection />
      </main>
    </SmoothScroll>
  );
}

import type { Metadata } from "next";
import HomePageClient from "@/components/home-page-client";
import { config } from "@/data/config";

export const metadata: Metadata = {
  title: config.title,
  description: config.description.long,
  alternates: {
    canonical: "/",
  },
};

export default function MainPage() {
  return <HomePageClient />;
}

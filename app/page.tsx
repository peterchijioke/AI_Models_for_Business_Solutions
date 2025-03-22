import Banner from "@/components/Banner";
import { Metadata } from "next";
import LogoScroller from "./_components/LogoScroller";
import HeroSection from "./_components/SubHeroSection";
import AIInsightsSection from "./_components/AIInsightsSection";

export const metadata: Metadata = {
  title: "Stay Connected with AppsCombo",
  description:
    "Explore multiple content sources and connect your social media in one place.",
};

export default function Home() {
  return (
    <div className="grid w-full max-h-screen">
      <Banner />
      <LogoScroller />
      <HeroSection />
      <AIInsightsSection />
    </div>
  );
}

// components/Banner.tsx
"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

const Banner = () => {
  return (
    <section className="bg-primary bg-[radial-gradient(ellipse_50%_90%_at_50%_100%,_#004BFF_0%,_transparent_90%)] text-white pt-16 pb-40 space-y-1.5 px-6 flex flex-col items-center justify-center text-center">
      <p className="text-xs sm:text-sm text-[#7191FF] mb-3 sm:mb-4">
        Leverage on Automation
      </p>

      <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 max-w-3xl leading-snug sm:leading-tight">
        AI Models for Business Solutions
      </h1>

      <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 sm:mb-8 max-w-2xl">
        Leverage the power of AI to automate, analyze, and optimize your
        workflows. Our specialized models are designed to fit different business
        needs.
      </p>

      <Link href="/get-started">
        <Button className="bg-white text-primary hover:bg-gray-200 px-5 sm:px-6 py-2.5 sm:py-3 text-base sm:text-lg transition-all duration-300">
          Get Started Now
        </Button>
      </Link>
    </section>
  );
};

export default Banner;

"use client";

import { useState, useRef, useCallback } from "react";
import { Button } from "@/components/ui/button";
import AppImage from "./AppImage";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const TABS = [
  {
    label: "Market Prediction",
    content:
      "Use AI insights for smarter business decisions and stay competitive.",
    image: "/mkt.svg",
  },
  {
    label: "Finance",
    content: "Our AI models analyze financial data for confident investments.",
    image: "/img2.svg",
  },
  {
    label: "Data Analytics",
    content:
      "Transform data into insights with AI analytics that enhance decisions.",
    image: "/img3.svg",
  },
  {
    label: "Content Generation",
    content:
      "Create quality content easily with AI that knows your brand and audience.",
    image: "/img4.svg",
  },
  {
    label: "Customer Support",
    image: "/img5.svg",
    content: "Use AI chatbots for instant, personalized customer support.",
  },
] as const;

export default function AIInsightsSection() {
  const [activeTab, setActiveTab] = useState<(typeof TABS)[number]>(TABS[0]);
  const carouselItemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleTabClick = useCallback(
    (tab: (typeof TABS)[number], index: number) => {
      setActiveTab(tab);
      const itemRef = carouselItemRefs.current[index];
      if (itemRef) {
        itemRef.scrollIntoView({
          behavior: "smooth",
          inline: "center",
          block: "nearest",
        });
      }
    },
    []
  );

  return (
    <section className="w-full hidden md:flex flex-col bg-white items-center py-12">
      <div className="flex gap-2 sm:gap-4 mb-8 border border-[#E4E4E7]  rounded-xl p-1 overflow-x-auto no-scrollbar">
        {TABS.map((tab, index) => (
          <Button
            size="sm"
            key={tab.label}
            onClick={() => handleTabClick(tab, index)}
            className={`px-3 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors whitespace-nowrap ${
              activeTab.label === tab.label
                ? "bg-primary text-white"
                : "bg-transparent text-gray-500 hover:bg-primary hover:text-white"
            }`}
          >
            {tab.label}
          </Button>
        ))}
      </div>
      <Carousel className="w-full mt-6 max-w-[100%] bg-white p-0 m-0 sm:max-w-[100%]">
        <CarouselContent className="flex w-full">
          {TABS.map((item, index) => (
            <CarouselItem
              key={item.label}
              className={`basis-[95%] sm:basis-[80%] overflow-hidden md:basis-[60%] bg-[#F6FAF3] rounded-2xl shadow-none shrink-0 snap-center transition-transform duration-300 ease-in-out ${
                activeTab.label === item.label ? "scale-105 z-10" : "scale-95"
              } mx-2 sm:mx-4`}
              ref={(el) => {
                carouselItemRefs.current[index] = el;
              }}
            >
              <div className="flex flex-col-reverse md:flex-row rounded-2xl overflow-hidden h-full">
                <div className="flex-1 p-4 sm:p-6 md:p-10 flex flex-col justify-center">
                  <p className="text-[#828282] text-sm sm:text-base font-medium">
                    {item.label}
                  </p>
                  <h2 className="text-lg sm:text-2xl md:text-3xl font-semibold text-primary mt-2 leading-tight">
                    {item.content}
                  </h2>
                  <Button className="mt-6 w-full sm:w-fit px-6 py-3 bg-[#03217F] border border-primary text-white rounded-lg text-sm">
                    Learn More
                  </Button>
                </div>

                <div className="flex-1 w-full h-[250px] sm:h-[300px] md:h-auto rounded-r-2xl overflow-hidden">
                  <AppImage
                    src={item.image}
                    alt={`${item.label} AI`}
                    width={600}
                    height={400}
                    className="w-full h-full  object-cover"
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}

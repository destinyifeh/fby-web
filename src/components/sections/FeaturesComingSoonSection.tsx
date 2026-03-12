"use client";

import makeup1 from "@/assets/makeup-1.webp";
import makeup2 from "@/assets/makeup-2.webp";
import makeup3 from "@/assets/makeup-3.webp";
import makeup4 from "@/assets/makeup-4.webp";
import makeup5 from "@/assets/makeup-5.webp";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

const features = [
  {
    title: "Personalized product suggestions",
    description:
      "Get makeup recommendations that match your undertone, finish, and everyday style.",
    image: makeup1,
    imageClasses: "top-11 left-[19px] w-[138px] h-[126px]",
  },
  {
    title: "Price comparisions",
    description:
      "Compare products across brands and find options that fit your budget instantly.",
    image: makeup2,
    imageClasses: "top-[54px] left-6 w-[127px] h-[115px]",
  },
  {
    title: "AI powered tutorials",
    description:
      "Follow clear, step-by-step tutorials created around your look and your pace.",
    image: makeup3,
    imageClasses: "top-[54px] left-6 w-[121px] h-[115px]",
  },
  {
    title: "Makeup Look Creator",
    description:
      "Create and customize your own makeup looks using styles, shades, and inspirations",
    image: makeup4,
    imageClasses: "top-[54px] left-6 w-[121px] h-[115px]",
  },
  {
    title: "Routine Builder",
    description:
      "Build simple daily or event-ready routines that match your beauty goals.",
    image: makeup5,
    imageClasses: "top-[37px] left-5 w-[83px] h-[133px]",
  },
];

export const FeaturesComingSoonSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  const cardsToShowCount = isMobile ? 1 : 3;
  const maxIndex = features.length - cardsToShowCount;

  const next = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section className="w-full bg-[#fff7ec] py-8 md:py-16 px-4 overflow-hidden">
      <div className="max-w-[1568px] mx-auto flex flex-col items-center gap-6 md:gap-10">
        <div className="text-center space-y-4">
          <h2 className="[font-family:'Abhaya_Libre_ExtraBold-Regular',Helvetica] font-normal text-[#8d5241] text-3xl md:text-[64px] leading-tight">
            Features Coming Soon
          </h2>
          <p className="[font-family:'Abhaya_Libre_Medium-Regular',Helvetica] font-normal text-[#8d5241] text-lg md:text-3xl max-w-[1100px] mx-auto leading-relaxed">
            AI-led beauty support made to understand your beauty journey and
            helps you shape looks that feel like you.
          </p>
        </div>

        <div className="relative w-full flex items-center group">
          <button
            onClick={prev}
            disabled={currentIndex === 0}
            className={`absolute -left-4 lg:-left-12 z-10 w-16 h-16 bg-[#fff2da] rounded-full flex items-center justify-center shadow-lg text-[#8d5241] transition-all border border-[#8d5241]/10 ${
              currentIndex === 0
                ? "opacity-30 cursor-not-allowed"
                : "hover:bg-[#8d5241] hover:text-[#fff2da]"
            }`}
          >
            <ChevronLeft size={32} />
          </button>

          <button
            onClick={next}
            disabled={currentIndex >= maxIndex}
            className={`absolute -right-4 lg:-right-12 z-10 w-16 h-16 bg-[#fff2da] rounded-full flex items-center justify-center shadow-lg text-[#8d5241] transition-all border border-[#8d5241]/10 ${
              currentIndex >= maxIndex
                ? "opacity-30 cursor-not-allowed"
                : "hover:bg-[#8d5241] hover:text-[#fff2da]"
            }`}
          >
            <ChevronRight size={32} />
          </button>

          <div className="w-full overflow-hidden px-4 md:px-0 py-8">
            <div
              className="flex transition-transform duration-500 ease-in-out gap-8"
              style={{
                transform: `translateX(calc(-${currentIndex} * (100% + 32px) / ${cardsToShowCount}))`,
              }}
            >
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="w-full lg:w-[calc(33.333%-22px)] flex-shrink-0 bg-[#8d5241] rounded-[24px] border-none overflow-hidden transition-all hover:scale-[1.02] flex flex-col h-[520px] lg:h-[400px]"
                >
                  <CardContent className="p-8 flex flex-col h-full gap-6">
                    <div className="flex-1 flex items-center justify-start relative">
                      <img
                        className={`h-auto object-contain ${feature.imageClasses}`}
                        alt={feature.title}
                        src={feature.image.src}
                      />
                    </div>

                    <div className="space-y-4">
                      <h3 className="[font-family:'Abhaya_Libre_SemiBold-Regular',Helvetica] font-normal text-[#fff2da] text-3xl lg:text-[40px] leading-tight">
                        {feature.title}
                      </h3>

                      <p className="[font-family:'Abhaya_Libre_Medium-Regular',Helvetica] font-normal text-[#fff4df] text-xl lg:text-2xl leading-relaxed opacity-90">
                        {feature.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

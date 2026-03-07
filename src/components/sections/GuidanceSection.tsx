"use client";

import iphone16Pro1 from "@/assets/iphone-16-pro-1.webp";
import iphone16Pro from "@/assets/iphone-16-pro.webp";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRightIcon } from "lucide-react";

const features = [
  {
    title: "Scan your makeup instantly",
    fontWeight: "[font-family:'Abhaya_Libre_SemiBold-Regular',Helvetica]",
  },
  {
    title: "Get an AI-generated score for your makeup",
    fontWeight: "[font-family:'Abhaya_Libre_Medium-Regular',Helvetica]",
  },
  {
    title: "Discover insights tailored to your look",
    fontWeight: "[font-family:'Abhaya_Libre_Medium-Regular',Helvetica]",
  },
  {
    title: "Track your past scans",
    fontWeight: "[font-family:'Abhaya_Libre_Medium-Regular',Helvetica]",
  },
];

export const GuidanceSection = () => {
  return (
    <section className="relative w-full max-w-[1727px] mx-auto bg-[#fff4e3] rounded-[20px] px-4 py-12 md:px-8 lg:px-16">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center lg:items-start">
        <div className="w-full lg:w-auto flex flex-col gap-6 lg:gap-10 animate-fade-in">
          <h2 className="[font-family:'Abhaya_Libre_ExtraBold-Regular',Helvetica] font-normal text-[#8d5241] text-2xl md:text-5xl text-center lg:text-left tracking-[0] leading-tight">
            How it works
          </h2>

          <Card className="w-full lg:w-[886px] bg-[#fff9f0] border-none shadow-none rounded-[20px] animate-fade-in [--animation-delay:200ms]">
            <CardContent className="p-0">
              <div className="flex flex-col">
                {features.map((feature, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between px-6 md:px-8 py-8 md:py-10 gap-4">
                      <p
                        className={`${feature.fontWeight} font-normal text-[#8d5241] text-xl md:text-3xl tracking-[0] leading-tight flex-1`}
                      >
                        {feature.title}
                      </p>
                      <ChevronRightIcon className="w-8 h-8 md:w-10 md:h-10 text-[#8d5241] flex-shrink-0" />
                    </div>
                    {index < features.length - 1 && (
                      <div className="w-full h-px bg-[#8d5241] opacity-20" />
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="relative w-full lg:w-[632px] flex-shrink-0 animate-fade-in [--animation-delay:400ms]">
          <div className="relative w-full max-w-[632px] h-[400px] md:h-[600px] lg:h-[805px] mx-auto">
        
            <img
              className="absolute top-0 left-0 w-[45%] md:w-80 h-auto max-h-[90%] object-contain"
              alt="iPhone Pro showing makeup scan interface"
              src={iphone16Pro.src}
            />
            <img
              className="absolute top-[15%] right-0 w-[50%] md:w-[335px] h-auto max-h-[85%] object-contain"
              alt="iPhone Pro showing makeup analysis results"
              src={iphone16Pro1.src}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

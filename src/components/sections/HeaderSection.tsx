"use client";

import makeup from "@/assets/Group-2067.webp";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const HeaderSection = () => {
  return (
    <section className="relative w-full max-w-[1568px] mx-auto">
      <div className="relative w-full bg-[#a67b5b] rounded-[100px] shadow-[0px_4px_4.5px_#a67b5b24] overflow-hidden border-[20px] border-[#a67b5b]">
        <div className="grid grid-cols-1 lg:grid-cols-[899px_1fr] min-h-[991px]">
          <div className="relative bg-[#fff2da] rounded-[80px_0px_0px_80px] shadow-[0px_4px_4.5px_#a67b5b24] p-12 flex flex-col justify-center">
            <div className="max-w-[793px] space-y-12 animate-fade-in">
              <h1 className="[font-family:'Abhaya_Libre_SemiBold-Regular',Helvetica] font-normal text-5xl md:text-7xl tracking-[0] leading-tight animate-fade-in">
                <span className="text-[#8d5241]">AI powered </span>
                <span className="[font-family:'Abhaya_Libre_ExtraBold-Regular',Helvetica] text-[#f9bc99]">
                  makeup
                </span>
                <span className="text-[#8d5241]"> assistant</span>
              </h1>

              <p className="[font-family:'Abhaya_Libre_Medium-Regular',Helvetica] font-normal text-[#8d5241] text-2xl md:text-3xl tracking-[0] leading-normal animate-fade-in">
                Your face, your skin tone, and your style
              </p>

              <div className="space-y-8 animate-fade-in [--animation-delay:600ms]">
                <div className="relative w-full max-w-[732px]">
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 w-full bg-[#fff7ec] rounded-[24px] sm:rounded-[500px] border border-solid border-[#e3bcb5] p-2 sm:pr-2 sm:pl-[38px] sm:py-1.5">
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 border-0 bg-transparent [font-family:'Inter',Helvetica] font-medium text-[#8d5241] text-base md:text-lg placeholder:text-[#8d5241] focus-visible:ring-0 h-12 sm:h-auto"
                    />
                    <Button className="bg-[#8d5241] hover:bg-[#8d5241]/90 text-[#fff2da] rounded-[16px] sm:rounded-[500px] h-14 md:h-[60px] px-5 md:px-8 [font-family:'Inter',Helvetica] font-medium text-base md:text-lg transition-colors">
                      Join waitlist
                    </Button>
                  </div>
                </div>

                <p className="sm:ml-[9px] text-center sm:text-left [font-family:'Inter',Helvetica] font-normal text-[#8d5241] text-sm md:text-base tracking-[0] leading-[normal]">
                  By entering your email, you&apos;d join our waitlist
                </p>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-in [--animation-delay:800ms]">
            <img
              className="w-full h-full min-h-[956px] rounded-[0px_94px_94px_0px] object-cover"
              alt="Makeup analysis demonstration"
              src={makeup.src}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

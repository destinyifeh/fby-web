"use client";

import { Badge } from "@/components/ui/badge";
import { EMAILS } from "@/lib/constants";

export const CareerExploreSection = () => {
  return (
    <section className="relative w-full py-12 px-4 max-w-[1568px] mx-auto">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-8">
        <Badge
          variant="outline"
          //className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms] flex h-16 items-center justify-center gap-2.5 bg-[#fff2da] rounded-[30px] border-none backdrop-blur-[2.0px] backdrop-brightness-[110%] shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.1)] px-8 relative before:content-[''] before:absolute before:inset-0 before:p-[2px] before:rounded-[30px] before:[background:linear-gradient(90deg,rgba(227,188,181,1)_18%,rgba(249,188,153,1)_53%,rgba(227,188,181,1)_78%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none hover:scale-105"
          className="inline-flex items-center justify-center h-[60px] px-6 gap-[10px] rounded-[30px] border-2 border-transparent bg-clip-padding bg-gradient-to-r from-[#E3BCB5] via-[#F9BC99] to-[#E3BCB5] [background-origin:border-box] [mask:linear-gradient(#fff_0_0)_padding-box,linear-gradient(#fff_0_0)][mask-composite:exclude] transition-all hover:opacity-90"
        >
          <span className="[font-family:'Abhaya_Libre_SemiBold-Regular',Helvetica] font-normal text-[#8d5241] text-xl tracking-[0] leading-[normal] whitespace-nowrap">
            Career
          </span>
        </Badge>

        <h2 className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms] max-w-4xl [font-family:'Abhaya_Libre_ExtraBold-Regular',Helvetica] font-normal text-[#8d5241] text-2xl md:text-5xl text-center tracking-[0] leading-tight">
          Explore open positions as we grow Face By You.
        </h2>

        <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms] max-w-5xl [font-family:'Abhaya_Libre_ExtraBold-Regular',Helvetica] font-normal text-[#8d5241] text-lg md:text-xl text-center tracking-[0] leading-relaxed">
          <p>
            No open position right now ? If you resonate with our mission and
            think your profile would be a great fit, send an email to{" "}
            <a
              href={`mailto:${EMAILS.ADMIN}`}
              rel="noopener noreferrer"
              target="_blank"
              className="underline hover:opacity-80 transition-opacity"
            >
              {EMAILS.ADMIN}
            </a>{" "}
            and attach any information you believe would be relevant.
          </p>
        </div>
      </div>
    </section>
  );
};

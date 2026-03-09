"use client";

import logo from "@/assets/fby-logo.webp";
import diverseFaces from "@/assets/makeup-faces.webp";
import insta from "@/assets/social-insta.webp";
import din from "@/assets/social-linkedin.webp";
import tiktok from "@/assets/social-tiktok.webp";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const HeroSection = () => {
  return (
    <section className="relative w-full max-w-[1728px] mx-auto">
      <div className="flex flex-col gap-[30px] bg-[#fff4e3] rounded-[20px] pb-0">
        <div className="w-full max-w-[1563px] mx-auto px-4 pt-[60px] flex flex-col items-center">
          <Button
            onClick={() =>
              document
                .getElementById("footer-waitlist")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="cursor-pointer animate-fade-in [--animation-delay:0ms] w-[271px] h-16 bg-[#fff2da] rounded-[30px] border-none backdrop-blur-[2.0px] backdrop-brightness-[110%] shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.1)] relative before:content-[''] before:absolute before:inset-0 before:p-[2px] before:rounded-[30px] before:[background:linear-gradient(90deg,rgba(227,188,181,1)_18%,rgba(249,188,153,1)_53%,rgba(227,188,181,1)_78%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none hover:bg-[#fff2da]"
          >
            <span className="relative z-10 [font-family:'Abhaya_Libre-SemiBold',Helvetica] font-normal text-xl text-[#8d5241] tracking-[0] leading-[normal]">
              Join waitlist
            </span>
          </Button>

          <h1 className="animate-fade-in [--animation-delay:200ms] mt-7 [font-family:'Abhaya_Libre-ExtraBold',Helvetica] font-extrabold text-[#8d5241] text-3xl md:text-6xl lg:text-7xl text-center tracking-tight leading-tight md:leading-[1.1]">
            Be first to try Face by You
          </h1>

          <p className="animate-fade-in [--animation-delay:400ms] mt-[30px] max-w-[1341px] [font-family:'Abhaya_Libre',Helvetica] font-normal text-[#8d5241] text-xl md:text-2xl text-center tracking-[0] leading-relaxed">
            We&apos;re opening early access soon. Join the list for exclusive
            invites, beauty tips, and updates.
          </p>

          <p className="animate-fade-in [--animation-delay:600ms] mt-[30px] max-w-[1557px] [font-family:'Abhaya_Libre',Helvetica] font-normal text-[#8d5241] text-lg md:text-xl text-center tracking-[0] leading-relaxed">
            Face by You is built to understand real skin tones, real textures,
            and real faces&nbsp;&nbsp;not one standard of beauty.
            <br />
            Our AI analyzes your unique features and gives feedback that
            actually fits you, so you can improve your look with confidence, not
            comparison.
            <br />
            Designed for every shade. Every skill level. Every face.
          </p>
        </div>

        <img
          className="animate-fade-in [--animation-delay:800ms] w-full h-auto"
          alt="Diverse faces showcasing Face by You"
          src={diverseFaces.src}
        />
      </div>

      <div className="mt-[-3px] bg-[#8d5241] flex flex-col lg:flex-row items-start justify-between px-6 md:px-12 lg:px-[79px] py-12 gap-12">
        <div className="flex flex-col gap-[78px] max-w-[648px]">
          <div className="relative">
            <img
              className="w-full max-w-[406px] h-auto"
              alt="Face by You logo"
              src={logo.src}
            />
            <p className="mt-4 [font-family:'Abhaya_Libre-Medium',Helvetica] font-medium text-[#fff2da] text-2xl tracking-[0] leading-[normal]">
              #BecomeYourOwnMUA
            </p>
          </div>

          <h2 className="[font-family:'Abhaya_Libre-ExtraBold',Helvetica] font-extrabold text-[#fff2da] text-2xl md:text-4xl text-center tracking-[0] leading-[normal]">
            AI Powered MakeUp assistant
          </h2>

          <p className="[font-family:'Inter',Helvetica] font-normal text-[#fff2da] text-lg md:text-2xl tracking-[0] leading-[normal]">
            We combine beauty + technology to give you something better than
            tutorials and guidance that understands *your* face, *your* skin
            tone, and *your* style.
          </p>
        </div>

        <div
          id="footer-waitlist"
          className="flex flex-col gap-[29.7px] max-w-[730px] w-full lg:mt-[150px]"
        >
          <div className="flex flex-col gap-[30px]">
            <div className="relative min-h-[60px] md:h-[70px]">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center bg-[#fff2da] rounded-[24px] sm:rounded-[500px] border border-solid border-[#e3bcb5] p-2 sm:pl-[38px] sm:pr-2 gap-4">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  defaultValue=""
                  className="flex-1 h-12 sm:h-auto border-none bg-transparent [font-family:'Inter',Helvetica] font-medium text-[#8d5241] text-lg md:text-xl tracking-[0] leading-[normal] placeholder:text-[#8d5241] focus-visible:ring-0 focus-visible:ring-offset-0"
                />
                <Button className="w-full sm:w-[241px] h-12 sm:h-[60px] bg-[#8d5241] hover:bg-[#a67b5b] rounded-[16px] sm:rounded-[500px] transition-colors shrink-0">
                  <span className="[font-family:'Inter',Helvetica] font-medium text-[#fff2da] text-lg md:text-xl text-center tracking-[0] leading-[normal]">
                    Join waitlist
                  </span>
                </Button>
              </div>
            </div>

            <p className="ml-1 [font-family:'Inter',Helvetica] font-normal text-[#fff2da] text-sm md:text-base tracking-[0] leading-[normal]">
              By entering your email, you&apos;d join our waitlist
            </p>
          </div>
          <div className="flex items-center justify-center lg:justify-start gap-8 md:gap-12">
            <a
              href="https://www.instagram.com/facebyyou/"
              target="_blank"
              rel="noopener noreferrer"
              className="h-[60px] w-[60px] bg-[#FFF2DA] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-[#8d5241] group"
            >
              <img
                className="w-8 h-8 object-contain transition-all duration-300 group-hover:brightness-0 group-hover:invert"
                alt="Instagram"
                src={insta.src}
              />
            </a>
            <a
              href="https://www.tiktok.com/@facebyyou"
              target="_blank"
              rel="noopener noreferrer"
              className="h-[60px] w-[60px] bg-[#FFF2DA] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-[#8d5241] group"
            >
              <img
                className="w-8 h-8 object-contain transition-all duration-300 group-hover:brightness-0 group-hover:invert"
                alt="TikTok"
                src={tiktok.src}
              />
            </a>
            <a
              href="https://www.linkedin.com/company/face-by-you/"
              target="_blank"
              rel="noopener noreferrer"
              className="h-[60px] w-[60px] bg-[#FFF2DA] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-[#8d5241] group"
            >
              <img
                className="w-8 h-8 object-contain transition-all duration-300 group-hover:brightness-0 group-hover:invert"
                alt="LinkedIn"
                src={din.src}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

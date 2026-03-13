"use client";

import logo from "@/assets/fby-logo.webp";
import diverseFaces from "@/assets/makeup-faces.webp";
import insta from "@/assets/social-insta.webp";
import din from "@/assets/social-linkedin.webp";
import tiktok from "@/assets/social-tiktok.webp";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ENV_LINKS, SOCIALS } from "@/lib/constants";
import { useState } from "react";
import { toast } from "sonner";

export const HeroSection = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleJoinWaitlist = async () => {
    if (!email || !email.includes("@")) {
      toast.error("Please enter a valid email address.");
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Welcome! You've successfully joined the waitlist.", {
          description: "Check your inbox for a welcome email. 🚀",
        });
        setEmail("");
      } else {
        toast.error(data.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      toast.error(
        "Failed to connect to the server. Please check your internet connection.",
      );
    } finally {
      setIsLoading(false);
    }
  };

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
            className="cursor-pointer inline-flex items-center justify-center h-[60px] px-6 gap-[10px] rounded-[30px] border-2 border-transparent bg-clip-padding bg-gradient-to-r from-[#E3BCB5] via-[#F9BC99] to-[#E3BCB5] [background-origin:border-box] [mask:linear-gradient(#fff_0_0)_padding-box,linear-gradient(#fff_0_0)][mask-composite:exclude] transition-all hover:opacity-90"
          >
            <span className="relative z-10 [font-family:'Abhaya_Libre-SemiBold',Helvetica] font-normal text-xl text-[#8d5241] tracking-[0] leading-[normal]">
              Join waitlist
            </span>
          </Button>

          <h2 className="animate-fade-in [--animation-delay:200ms] mt-7 [font-family:'Abhaya_Libre-ExtraBold',Helvetica] font-normal text-[#8d5241] text-2xl md:text-5xl lg:text-5xl text-center tracking-tight leading-tight md:leading-[1.1]">
            Be the first to try Face by You
          </h2>

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

      <div className="mt-[-3px] bg-[#8d5241] px-6 md:px-12 lg:px-[79px] pt-16 pb-24">
        <div className="max-w-[1563px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-x-12">
          {/* Row 1: Logo & Tagline */}
          <div className="lg:col-span-2 mb-4 lg:mb-6">
            <a href={ENV_LINKS.UAT} className="block">
              <img
                className="w-full max-w-[406px] h-auto"
                alt="Face by You logo"
                src={logo.src}
              />
            </a>
            <p className="mt-2 pl-[55px] [font-family:'Abhaya_Libre-Medium',Helvetica] font-medium text-[#fff2da] text-2xl tracking-[0] leading-[normal]">
              #BecomeYourOwnMUA
            </p>
          </div>

          {/* Column Row 2 (Desktop): Heading & Input Box */}
          <div className="lg:col-span-1 flex items-center mt-8 mb-6 lg:mt-4 lg:mb-6 order-1 lg:order-none">
            <h2 className="[font-family:'Abhaya_Libre-ExtraBold',Helvetica] font-extrabold text-[#fff2da] text-2xl md:text-4xl lg:text-[42px] text-left tracking-[0] leading-tight">
              AI Powered Makeup assistant
            </h2>
          </div>

          <div className="lg:col-span-1 flex items-center mb-2 lg:mb-6 order-3 lg:order-none lg:mt-4">
            <div id="footer-waitlist" className="w-full max-w-[730px]">
              <div className="flex flex-col gap-[30px]">
                <div className="relative min-h-[60px] md:h-[70px]">
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center bg-[#fff2da] rounded-[24px] sm:rounded-[500px] border border-solid border-[#e3bcb5] p-2 sm:pl-[38px] sm:pr-2 gap-4">
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={isLoading}
                      className="flex-1 h-12 sm:h-auto border-none bg-transparent [font-family:'Inter',Helvetica] font-medium text-[#8d5241] text-lg md:text-xl tracking-[0] leading-[normal] placeholder:text-[#8d5241] focus-visible:ring-0 focus-visible:ring-offset-0"
                    />
                    <Button
                      onClick={handleJoinWaitlist}
                      disabled={isLoading}
                      className="w-full sm:w-[241px] h-12 sm:h-[60px] bg-[#8d5241] hover:bg-[#a67b5b] rounded-[16px] sm:rounded-[500px] transition-colors shrink-0"
                    >
                      <span className="[font-family:'Inter',Helvetica] font-medium text-[#fff2da] text-lg md:text-xl text-center tracking-[0] leading-[normal]">
                        {isLoading ? "Joining..." : "Join waitlist"}
                      </span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Column Row 3 (Desktop): Paragraph & Socials */}
          <div className="lg:col-span-1 mt-0 mb-10 lg:mt-4 lg:mb-0 order-2 lg:order-none">
            <p className="[font-family:'Inter',Helvetica] font-normal text-[#fff2da] text-lg md:text-2xl tracking-[0] leading-relaxed">
              We combine beauty + technology to give you something
              <br className="hidden lg:block" /> better than tutorials and
              guidance that understands <br className="hidden lg:block" />{" "}
              *your* face, *your* skin tone, and *your* style.
            </p>
          </div>

          <div className="lg:col-span-1 flex flex-col gap-[29.7px] mt-4 lg:mt-0 order-4 lg:order-none">
            <p className="ml-1 [font-family:'Inter',Helvetica] font-normal text-[#fff2da] text-sm md:text-base tracking-[0] leading-[normal] opacity-80">
              By entering your email, you&apos;d join our waitlist
            </p>
            <div className="flex items-center justify-center lg:justify-start gap-6 md:gap-8">
              <a
                href={SOCIALS.INSTAGRAM}
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
      </div>
    </section>
  );
};

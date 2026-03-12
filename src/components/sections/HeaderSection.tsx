"use client";

import makeup from "@/assets/Group-2067.webp";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "sonner";

export const HeaderSection = () => {
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
    <section className="relative w-full max-w-[1568px] mx-auto">
      <div className="relative w-full bg-[#a67b5b] rounded-[100px] shadow-[0px_4px_4.5px_#a67b5b24] overflow-hidden border-[20px] border-[#a67b5b]">
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] lg:min-h-[991px]">
          <div className="relative bg-[#fff2da] rounded-[80px] lg:rounded-tr-none lg:rounded-br-none shadow-[0px_4px_4.5px_#a67b5b24] pt-4 pb-4 px-6 md:p-12 flex flex-col justify-center">
            <div className="max-w-[793px] space-y-4 lg:space-y-12 animate-fade-in">
              <h1 className="[font-family:'Abhaya_Libre_SemiBold-Regular',Helvetica] font-normal text-4xl md:text-7xl tracking-[0] leading-tight animate-fade-in">
                <span className="text-[#8d5241]">AI powered </span>
                <span className="[font-family:'Abhaya_Libre_ExtraBold-Regular',Helvetica] text-[#f9bc99]">
                  makeup
                </span>
                <span className="text-[#8d5241]"> assistant</span>
              </h1>

              <p className="[font-family:'Abhaya_Libre_Medium-Regular',Helvetica] font-normal text-[#8d5241] text-xl md:text-3xl tracking-[0] leading-normal animate-fade-in">
                Your face, your skin tone, and your style
              </p>

              <div className="space-y-2 md:space-y-8 animate-fade-in [--animation-delay:600ms]">
                <div className="relative w-full max-w-[732px]">
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 w-full bg-[#fff7ec] rounded-[24px] sm:rounded-[500px] border border-solid border-[#e3bcb5] p-2 sm:pr-2 sm:pl-[38px] sm:py-1.5">
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={isLoading}
                      className="flex-1 border-0 bg-transparent [font-family:'Inter',Helvetica] font-medium text-[#8d5241] text-base md:text-lg placeholder:text-[#8d5241] focus-visible:ring-0 h-12 sm:h-auto"
                    />
                    <Button
                      onClick={handleJoinWaitlist}
                      disabled={isLoading}
                      className="bg-[#8d5241] hover:bg-[#8d5241]/90 text-[#fff2da] rounded-[16px] sm:rounded-[500px] h-14 md:h-[60px] px-5 md:px-8 [font-family:'Inter',Helvetica] font-medium text-base md:text-lg transition-colors"
                    >
                      {isLoading ? "Joining..." : "Join waitlist"}
                    </Button>
                  </div>
                </div>

                <p className="px-4 sm:px-0 sm:ml-[9px] text-center sm:text-left [font-family:'Inter',Helvetica] font-normal text-[#8d5241] text-sm md:text-base tracking-[0] leading-[normal]">
                  By entering your email, you&apos;d join our waitlist
                </p>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-in [--animation-delay:800ms] overflow-hidden rounded-[80px] lg:rounded-tl-none lg:rounded-bl-none">
            <img
              className="w-full h-full min-h-[400px] lg:min-h-[760px] object-cover object-center"
              alt="Makeup analysis demonstration"
              src={makeup.src}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

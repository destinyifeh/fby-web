"use client";

import logo from "@/assets/fby-header-logo.webp";
import { AboutUsSection } from "@/components/sections/AboutUsSection";
import { CareerExploreSection } from "@/components/sections/CareerExploreSection";
import { FeaturesComingSoonSection } from "@/components/sections/FeaturesComingSoonSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { FooterSection } from "@/components/sections/FooterSection";
import { GuidanceSection } from "@/components/sections/GuidanceSection";
import { HeaderSection } from "@/components/sections/HeaderSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import {
  Briefcase,
  Heart,
  HelpCircle,
  Home as HomeIcon,
  Info,
  Menu,
  PlusCircle,
  X,
} from "lucide-react";
import React, { useState } from "react";
import { toast } from "sonner";

const navigationItems = [
  {
    label: "Home",
    active: true,
    href: "#home",
    icon: HomeIcon,
    showOnDesktop: true,
  },
  {
    label: "About",
    active: false,
    href: "#about",
    icon: Info,
    showOnDesktop: true,
  },
  {
    label: "Features",
    active: false,
    href: "#features",
    icon: Heart,
    showOnDesktop: true,
  },
  {
    label: "Business",
    active: false,
    href: "#business",
    icon: Briefcase,
    showOnDesktop: true,
  },
  {
    label: "Join Waitlist",
    active: false,
    href: "#home",
    icon: PlusCircle,
    showOnDesktop: false,
  },
  {
    label: "Career",
    active: false,
    href: "#business",
    icon: Briefcase,
    showOnDesktop: false,
  },
  {
    label: "Support",
    active: false,
    href: "#footer",
    icon: HelpCircle,
    showOnDesktop: false,
  },
];

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="bg-[#fff7ec] overflow-hidden w-full min-w-[320px] relative selection:bg-[#8d5241] selection:text-[#fff2da]">
      {/* Decorative background element */}
      <div className="absolute top-[190px] left-[-87px] w-[443px] h-[382px] bg-[#e3bcb599] rounded-[221.5px/191px] blur-[57.4px] opacity-70 pointer-events-none" />

      {/* Navigation Header */}
      <nav className="relative z-50 flex items-center justify-between px-6 lg:px-20 pt-8 lg:pt-14 pb-8 max-w-[1568px] mx-auto gap-4">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-[#8d5241]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-10 h-10" />
            ) : (
              <Menu className="w-10 h-10" />
            )}
          </Button>
          <img
            className="w-[140px] md:w-[180px] lg:w-[236px] h-auto animate-fade-in"
            alt="Face By You Logo"
            src={logo.src}
          />
        </div>

        <div className="hidden lg:flex items-center gap-2.5 bg-[#a67b5b38] rounded-[30px] px-2.5 py-2 animate-fade-in [--animation-delay:200ms]">
          {navigationItems
            .filter((item) => item.showOnDesktop)
            .map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`flex items-center justify-center px-6 py-2.5 rounded-[20px] transition-colors cursor-pointer ${
                  item.active
                    ? "bg-[#fff2da] text-[#8d5241]"
                    : "text-[#a67b5b] hover:bg-[#fff2da]/50"
                }`}
              >
                <span className="[font-family:'Inter',Helvetica] font-medium text-base whitespace-nowrap">
                  {item.label}
                </span>
              </a>
            ))}
        </div>

        <Button
          onClick={() => {
            toast.info("Coming soon! 🚀", {
              description:
                "We are working on getting the app live. In the meantime, please join our waitlist!",
              action: {
                label: "Join Waitlist",
                onClick: () => {
                  const element = document.querySelector("#home");
                  if (element) {
                    element.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }
                },
              },
              classNames: {
                actionButton:
                  "bg-[#8d5241] hover:bg-[#8d5241]/90 text-white rounded-[32.33px] px-4 py-2 border-none font-medium transition-colors !bg-[#8d5241] !text-white",
              },
            });
          }}
          className="bg-[#8d5241] hover:bg-[#8d5241]/90 text-white rounded-[32.33px] px-4 md:px-8 lg:px-16 h-10 md:h-12 lg:h-auto py-2 md:py-3 lg:py-[22.74px] animate-fade-in [--animation-delay:400ms] flex-shrink-0"
        >
          <span className="[font-family:'Abhaya_Libre_Medium-Regular',Helvetica] font-normal text-base md:text-xl">
            Download
          </span>
        </Button>

        {/* Mobile Navigation Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="fixed inset-0 z-[100] bg-[#FFF2DA] lg:hidden flex flex-col p-6 gap-6 overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-8">
                <img
                  className="w-[140px] h-auto"
                  alt="Face By You Logo"
                  src={logo.src}
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-[#8d5241]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <X className="w-8 h-8" />
                </Button>
              </div>

              <div className="flex flex-col gap-4">
                {navigationItems.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.a
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className="flex items-center gap-4 px-6 py-5 bg-[#FFF2DA] border border-[#a67b5b]/10 rounded-[20px] transition-all hover:bg-[#FFF2DA]/80 active:scale-[0.98]"
                    >
                      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#FFF2DA] text-[#8D5241]">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="[font-family:'Inter',Helvetica] font-medium text-xl text-[#000000]">
                        {item.label}
                      </span>
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content Sections */}
      <motion.main
        animate={{
          opacity: isMobileMenuOpen ? 0.3 : 1,
          filter: isMobileMenuOpen ? "blur(4px)" : "blur(0px)",
        }}
        transition={{ duration: 0.3 }}
        className="relative z-10 flex flex-col items-center w-full"
      >
        {/* 1. Hero */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          id="home"
          className="w-full"
        >
          <HeaderSection />
        </motion.section>

        {/* 2. Bento Grid Section Title */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center px-6 lg:px-20 pt-16 pb-8 lg:py-16 w-full max-w-[1568px]"
        >
          <p className="max-w-[1185px] [font-family:'Abhaya_Libre_SemiBold-Regular',Helvetica] font-normal text-[#8d5241] text-2xl md:text-5xl text-center tracking-[0] leading-tight lg:leading-[normal]">
            Discover how Face By You analyzes your makeup and builds guidance
            that truly works for you
          </p>
        </motion.section>

        {/* 3. Features Bento Grid */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          id="features"
          className="w-full"
        >
          <FeaturesSection />
        </motion.section>

        {/* 4. How it works (Accordion + Phones) */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full"
        >
          <GuidanceSection />
        </motion.section>

        {/* 5. About Us */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          id="about"
          className="w-full"
        >
          <AboutUsSection />
        </motion.section>

        {/* 6. Features Coming Soon */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full"
        >
          <FeaturesComingSoonSection />
        </motion.section>

        {/* 7. Career / Explore Positions */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          id="business"
          className="w-full"
        >
          <CareerExploreSection />
        </motion.section>

        {/* 8. Partner With Us / Footer Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full"
        >
          <FooterSection />
        </motion.section>

        {/* 9. Be first to try / Final Site Footer */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full"
        >
          <HeroSection />
        </motion.section>
      </motion.main>
    </div>
  );
}

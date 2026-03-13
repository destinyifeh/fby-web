"use client";

import logo from "@/assets/fby-header-logo.webp";
import { SharedSection } from "@/components/sections/SharedSection";
import { ENV_LINKS } from "@/lib/constants";
import { motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function TermsOfService() {
  return (
    <div className="bg-[#fff7ec] min-h-screen selection:bg-[#8d5241] selection:text-[#fff2da]">
      {/* Simple Header */}
      <nav className="px-6 lg:px-20 py-8 lg:py-12 max-w-[1568px] mx-auto flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 text-[#8d5241] hover:opacity-80 transition-opacity"
        >
          <ChevronLeft className="w-5 h-5" />
          <span className="font-medium text-lg">Back to Home</span>
        </Link>
        <a href={ENV_LINKS.PROD}>
          <img
            className="w-[120px] lg:w-[180px] h-auto"
            alt="Face By You Logo"
            src={logo.src}
          />
        </a>
      </nav>

      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto px-6 py-12 lg:py-24"
      >
        <h1 className="[font-family:'Abhaya_Libre_SemiBold-Regular',Helvetica] text-4xl lg:text-6xl text-[#8d5241] mb-12">
          Terms of Service
        </h1>

        <div className="prose prose-lg prose-stone max-w-none space-y-8 [font-family:'Inter',Helvetica] text-[#a67b5b]">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#8d5241]">
              1. Acceptance of Terms
            </h2>
            <p className="leading-relaxed">
              By accessing and using Face By You, you agree to be bound by these
              Terms of Service and all applicable laws and regulations. If you
              do not agree with any of these terms, you are prohibited from
              using or accessing this site.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#8d5241]">
              2. Use License
            </h2>
            <p className="leading-relaxed">
              Permission is granted to temporarily download one copy of the
              materials (information or software) on Face By You's website for
              personal, non-commercial transitory viewing only.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#8d5241]">
              3. Disclaimer
            </h2>
            <p className="leading-relaxed">
              The materials on Face By You's website are provided on an 'as is'
              basis. Face By You makes no warranties, expressed or implied, and
              hereby disclaims and negates all other warranties including,
              without limitation, implied warranties or conditions of
              merchantability, fitness for a particular purpose, or
              non-infringement of intellectual property or other violation of
              rights.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#8d5241]">
              4. Limitations
            </h2>
            <p className="leading-relaxed">
              In no event shall Face By You or its suppliers be liable for any
              damages (including, without limitation, damages for loss of data
              or profit, or due to business interruption) arising out of the use
              or inability to use the materials on Face By You's website.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#8d5241]">
              5. Governing Law
            </h2>
            <p className="leading-relaxed">
              These terms and conditions are governed by and construed in
              accordance with the laws and you irrevocably submit to the
              exclusive jurisdiction of the courts in that State or location.
            </p>
          </section>
        </div>
      </motion.main>

      <SharedSection />
    </div>
  );
}

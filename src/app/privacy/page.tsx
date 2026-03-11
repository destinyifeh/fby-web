"use client";

import logo from "@/assets/fby-header-logo.webp";
import { FooterSection } from "@/components/sections/FooterSection";
import { ENV_LINKS } from "@/lib/constants";
import { motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function PrivacyPolicy() {
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
        <a href={ENV_LINKS.UAT}>
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
          Privacy Policy
        </h1>

        <div className="prose prose-lg prose-stone max-w-none space-y-8 [font-family:'Inter',Helvetica] text-[#a67b5b]">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#8d5241]">
              1. Information We Collect
            </h2>
            <p className="leading-relaxed">
              When you use Face By You, we may collect information that you
              provide directly to us, such as your email address when you join
              our waitlist. We also collect data related to your interactions
              with our platform to improve your experience.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#8d5241]">
              2. How We Use Your Information
            </h2>
            <p className="leading-relaxed">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide, maintain, and improve our services;</li>
              <li>
                Send you technical notices, updates, and waitlist notifications;
              </li>
              <li>Respond to your comments and questions;</li>
              <li>Monitor and analyze trends, usage, and activities.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#8d5241]">
              3. Data Security
            </h2>
            <p className="leading-relaxed">
              We take reasonable measures to help protect information about you
              from loss, theft, misuse, and unauthorized access, disclosure,
              alteration, and destruction.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#8d5241]">
              4. Changes to this Policy
            </h2>
            <p className="leading-relaxed">
              We may change this Privacy Policy from time to time. If we make
              changes, we will notify you by revising the date at the top of the
              policy and, in some cases, we may provide you with additional
              notice.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#8d5241]">
              5. Contact Us
            </h2>
            <p className="leading-relaxed">
              If you have any questions about this Privacy Policy, please
              contact us at Admin@facebyyou.tech.
            </p>
          </section>
        </div>
      </motion.main>

      <FooterSection />
    </div>
  );
}

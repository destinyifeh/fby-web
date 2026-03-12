"use client";

//import makeup from "@/assets/Group-2067.webp";
import makeupScanLady from "@/assets/makeup-scan-lady.png";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const typingVariants = {
  hidden: { opacity: 0 },
  visible: (i: number) => ({
    opacity: 1,
    transition: {
      delay: i * 0.05,
    },
  }),
};

const Label = ({
  text,
  isVisible,
  className,
  dotClassName,
}: {
  text: string;
  isVisible: boolean;
  className: string;
  dotClassName: string;
}) => {
  return (
    <div className={`absolute z-10 ${className}`}>
      {/* Connector Dot */}
      <motion.div
        initial={{ scale: 0 }}
        animate={isVisible ? { scale: 1 } : { scale: 0 }}
        className={`absolute w-3 h-3 rounded-full border-2 border-white/50 ${dotClassName}`}
      />

      {/* Label Bubble */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, x: -10 }}
        animate={
          isVisible
            ? { opacity: 1, scale: 1, x: 0 }
            : { opacity: 0, scale: 0.8, x: -10 }
        }
        className="ml-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 shadow-xl max-w-[240px]"
      >
        <p className="[font-family:'Inter',Helvetica] font-medium text-white text-sm md:text-base leading-tight">
          {text.split("").map((char, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={typingVariants}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
            >
              {char}
            </motion.span>
          ))}
        </p>
      </motion.div>
    </div>
  );
};

export const ScanningFaceAnimation = () => {
  const [scanProgress, setScanProgress] = useState(0);
  const [showLabel1, setShowLabel1] = useState(false);
  const [showLabel2, setShowLabel2] = useState(false);

  useEffect(() => {
    // Repeated scanning animation logic
    const interval = setInterval(() => {
      setScanProgress((prev) => {
        const next = (prev + 0.5) % 100;

        // Trigger labels based on vertical scan progress
        // Label 1 is around the eye (35% down)
        if (next > 35 && !showLabel1) setShowLabel1(true);
        // Label 2 is around the cheek (55% down)
        if (next > 55 && !showLabel2) setShowLabel2(true);

        // Reset labels when scan restarts
        if (next < 5) {
          setShowLabel1(false);
          setShowLabel2(false);
        }

        return next;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [showLabel1, showLabel2]);

  return (
    <div className="relative w-full h-full overflow-hidden group">
      {/* Base Image */}
      <img
        className="w-full h-full min-h-[400px] lg:min-h-[760px] object-cover object-center"
        alt="Makeup analysis demonstration"
        src={makeupScanLady.src}
      />

      {/* Overlay Scan Grid Effect (Subtle) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(166,123,91,0.05)_100%)] pointer-events-none" />

      {/* Moving Scan Line */}
      <motion.div
        className="absolute left-0 right-0 h-[3px] bg-white/40 shadow-[0_0_15px_rgba(255,255,255,0.8)] z-20 pointer-events-none"
        style={{ top: `${scanProgress}%` }}
      />

      {/* Label 1: Eye Blend */}
      <Label
        isVisible={showLabel1}
        text="A tiny blend here will make the colors flow better"
        className="top-[35%] left-[15%] md:left-[20%]"
        dotClassName="bg-[#f9bc99] -left-1.5 top-1/2 -translate-y-1/2"
      />

      {/* Label 2: Blush Blend */}
      <Label
        isVisible={showLabel2}
        text="Your blush looks amazing. Beautiful blend."
        className="top-[55%] left-[10%] md:left-[15%]"
        dotClassName="bg-[#e3bcb5] -left-1.5 top-1/2 -translate-y-1/2"
      />

      {/* Interactive Points (Glow dots from original image) */}
      <div className="absolute top-[20%] left-[30%] w-2 h-2 bg-white/40 rounded-full blur-[2px] animate-pulse" />
      <div className="absolute top-[40%] left-[45%] w-2 h-2 bg-white/40 rounded-full blur-[2px] animate-pulse delay-700" />
      <div className="absolute top-[10%] left-[25%] w-1.5 h-1.5 bg-white/30 rounded-full blur-[1px] animate-pulse delay-1000" />
    </div>
  );
};

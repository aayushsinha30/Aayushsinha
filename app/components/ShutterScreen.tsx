"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

// A single, life-altering quote.
const DEEP_QUOTE = { text: "What you seek is seeking you.", author: "Rumi" };

export default function SplashScreen() {
  const [showShutter, setShowShutter] = useState(true);

  useEffect(() => {
    // Hold long enough to digest the quote, then exit
    const timer = setTimeout(() => {
      setShowShutter(false);
    }, 2800);
    return () => clearTimeout(timer);
  }, []);

  // Prevent background scroll while splash is visible
  useEffect(() => {
    const originalOverflow =
      typeof window !== "undefined" ? document.body.style.overflow : "";
    if (showShutter) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = originalOverflow || "";
    }

    return () => {
      document.body.style.overflow = originalOverflow || "";
    };
  }, [showShutter]);

  return (
    <AnimatePresence>
      {showShutter && (
        <motion.div
          key="shutter"
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black overflow-hidden"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="flex flex-col items-center max-w-xl px-10">
            {/* LOGO: Static and instant for brand presence */}
            <div className="relative w-20 h-20 md:w-24 md:h-24 mb-12">
              <Image
                src="/icon.png"
                alt="Logo"
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* QUOTE: High-end Blur-to-Focus Animation */}
            <motion.h2
              initial={{ opacity: 0, filter: "blur(20px)", scale: 0.9 }}
              animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
              transition={{
                duration: 1.2,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.1,
              }}
              className="text-white text-xl md:text-2xl font-medium tracking-tight text-center leading-tight mb-6"
            >
              "{DEEP_QUOTE.text}"
            </motion.h2>

            {/* AUTHOR: Staggered reveal with a minimalist divider */}
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "auto" }}
              transition={{ delay: 0.8, duration: 0.8, ease: "circOut" }}
              className="flex items-center gap-4 overflow-hidden whitespace-nowrap"
            >
              <div className="w-12 h-[1px] bg-white/20" />
              <span className="text-white/40 text-[10px] md:text-xs tracking-[0.4em] uppercase font-black">
                {DEEP_QUOTE.author}
              </span>
              <div className="w-12 h-[1px] bg-white/20" />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

const QUOTES = [
  {
    text: "You have the right to work, but never to the fruit of work.",
    author: "Bhagavad Gita",
  },
  {
    text: "The mind is everything. What you think you become.",
    author: "Buddha",
  },
  {
    text: "We suffer more often in imagination than in reality.",
    author: "Seneca",
  },
  {
    text: "Quiet the mind, and the soul will speak.",
    author: "Ma Jaya Sati Bhagavati",
  },
  {
    text: "The universe is change; our life is what our thoughts make it.",
    author: "Marcus Aurelius",
  },
  {
    text: "Muddy water is best cleared by leaving it alone.",
    author: "Alan Watts",
  },
  {
    text: "To know yourself is the beginning of all wisdom.",
    author: "Aristotle",
  },
  { text: "Knowledge is entirely within.", author: "Swami Vivekananda" },
  {
    text: "Realize deeply that the present moment is all you have.",
    author: "Eckhart Tolle",
  },
  {
    text: "Silence is the language of god, all else is poor translation.",
    author: "Rumi",
  },
  {
    text: "He who has a why to live for can bear almost any how.",
    author: "Friedrich Nietzsche",
  },
  {
    text: "The soul is neither born, and nor does it die.",
    author: "Bhagavad Gita",
  },
  {
    text: "You are what your deep, driving desire is.",
    author: "Brihadaranyaka Upanishad",
  },
  {
    text: "Man suffers only because he takes seriously what the gods made for fun.",
    author: "Alan Watts",
  },
  {
    text: "It is not the man who has too little, but the man who craves more, that is poor.",
    author: "Seneca",
  },
];

export default function SplashScreen() {
  const [showShutter, setShowShutter] = useState(true);
  const [currentQuote, setCurrentQuote] = useState({ text: "", author: "" });

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * QUOTES.length);
    setCurrentQuote(QUOTES[randomIndex]);

    const timer = setTimeout(() => {
      setShowShutter(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {showShutter && (
        <motion.div
          key="shutter"
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black overflow-hidden"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Deep Detail 1: Subtle Tech Grid Background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_20%,_#000000_100%)] pointer-events-none" />

          {/* Main Logo & Quote Container */}
          <motion.div
            initial={{ scale: 0.85, opacity: 0, y: 10 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex flex-col items-center justify-center gap-10 w-full max-w-lg px-6"
          >
            {/* Deep Detail 2: Tech Brackets around Logo */}
            <div className="relative group flex items-center justify-center p-4">
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-white/30" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-white/30" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-white/30" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-white/30" />

              <div className="relative w-20 h-20 md:w-28 md:h-28">
                <Image
                  src="/icon.png"
                  alt="Brand Logo"
                  fill
                  className="object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] z-10"
                  priority
                />
              </div>
            </div>

            {/* Quote Reveal */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="flex flex-col items-center text-center gap-4 h-[80px]"
            >
              {currentQuote.text && (
                <>
                  <p className="text-white/80 text-sm md:text-base italic font-light tracking-wide leading-relaxed">
                    "{currentQuote.text}"
                  </p>
                  <p className="text-white/40 text-[10px] md:text-xs tracking-[0.3em] uppercase font-bold">
                    — {currentQuote.author}
                  </p>
                </>
              )}
            </motion.div>
          </motion.div>

          {/* Bottom-Right Indicator & Text */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.5, duration: 0.4 }}
            className="absolute bottom-8 right-8 md:bottom-12 md:right-12 flex items-center gap-4"
          >
            <span className="text-white/40 text-[9px] md:text-[10px] font-mono tracking-widest uppercase">
              SYS.BOOT //
            </span>

            {/* The Super-Fast Orbital Spinner */}
            <div className="relative flex items-center justify-center w-5 h-5 md:w-6 md:h-6">
              {/* Slow Outer Ring */}
              <div className="absolute inset-[-4px] border border-white/10 rounded-full border-t-white/30 animate-[spin_2s_linear_infinite_reverse]" />
              {/* Fast Inner Ring */}
              <div className="absolute inset-0 border-[2px] border-white/10 rounded-full border-r-white animate-[spin_0.4s_linear_infinite]" />
              {/* Center Dot */}
              <div className="w-1 h-1 bg-white rounded-full animate-pulse" />
            </div>
          </motion.div>

          {/* Deep Detail 3: Global Progress Laser Line */}
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            // Sync this duration roughly with your 4000ms timeout minus animation buffer
            transition={{ duration: 3.8, ease: "linear" }}
            className="absolute bottom-0 left-0 h-[2px] bg-white shadow-[0_0_10px_#fff]"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

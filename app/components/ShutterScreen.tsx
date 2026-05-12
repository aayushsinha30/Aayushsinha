"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

// The array of 15 deep, spiritual, and philosophical quotes
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
    // Randomly select a quote on mount to prevent Next.js hydration errors
    const randomIndex = Math.floor(Math.random() * QUOTES.length);
    setCurrentQuote(QUOTES[randomIndex]);

    const timer = setTimeout(() => {
      setShowShutter(false);
    }, 4000); // Increased slightly to 3000ms so users have time to actually read the quote

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
          {/* Subtle background depth */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/[0.03] to-transparent pointer-events-none" />

          {/* Main Logo & Quote Container */}
          <motion.div
            initial={{ scale: 0.8, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex flex-col items-center justify-center gap-8 w-full max-w-lg px-6"
          >
            {/* Logo Wrapper */}
            <div className="relative w-20 h-20 md:w-28 md:h-28">
              <Image
                src="/icon.png"
                alt="Brand Logo"
                fill
                className="object-contain drop-shadow-2xl z-10"
                priority
              />
            </div>

            {/* Quote Reveal */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex flex-col items-center text-center gap-3 h-[80px]" // Fixed height prevents layout shift
            >
              {/* Only render text if currentQuote is populated to avoid flashing empty elements */}
              {currentQuote.text && (
                <>
                  <p className="text-white/80 text-sm md:text-base italic font-light tracking-wide leading-relaxed">
                    "{currentQuote.text}"
                  </p>
                  <p className="text-white/40 text-xs md:text-sm tracking-widest uppercase font-semibold">
                    — {currentQuote.author}
                  </p>
                </>
              )}
            </motion.div>
          </motion.div>

          {/* Bottom-Right Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.6, duration: 0.3 }}
            className="absolute bottom-8 right-8 md:bottom-12 md:right-12 flex items-center gap-3"
          >
            <div className="relative flex items-center justify-center w-4 h-4 md:w-5 md:h-5">
              <div className="absolute inset-0 border-[2px] border-white/20 rounded-full" />
              <div className="absolute inset-0 border-[2px] border-white border-t-transparent rounded-full animate-spin" />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

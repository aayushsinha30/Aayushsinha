"use client";

// 📦 Imports
import React, { useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import {
  ArrowRight,
  Mail,
  Code2,
  Palette,
  Zap,
  Globe,
  Terminal,
  Cpu,
  Layers,
  Star,
  Quote,
  CheckCircle,
  Menu,
  X,
  Activity,
  GitCommit,
  Monitor,
  Smartphone,
} from "lucide-react";
import { SiGithub, SiGmail } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";

import CustomCursor from "@/components/ui/CustomCursor";
import CyberGrid from "@/components/ui/CyberGrid";
import BackToTop from "@/components/ui/BackToTop";
import Marquee from "@/components/ui/Marquee";
import SectionTitle from "@/components/ui/SectionTitle";
import BentoCard from "@/components/ui/BentoCard";
import SkillRow from "@/components/ui/SkillRow";
import ProjectCard from "@/components/ui/ProjectCard";
import Link from "next/link";
import Image from "next/image";

// 🧩 Types
type GithubStats = { repos: number | null; followers: number | null };

// 🧱 Reusable Feature Card Component
const FeatureCard: React.FC<{
  title: string;
  description: string;
  icon: React.ComponentType<any>;
}> = ({ title, description, icon: Icon }) => (
  <div className="p-6 border border-white/10 bg-white/5 hover:bg-white/10 transition-colors backdrop-blur-sm group relative overflow-hidden">
    <div className="absolute top-0 left-0 w-1 h-full bg-red-600 transform scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-300"></div>
    <Icon className="text-red-500 mb-4 w-8 h-8" />
    <h4 className="text-xl font-bold font-display uppercase text-white mb-2">
      {title}
    </h4>
    <p className="text-gray-400 font-mono text-sm leading-relaxed">
      {description}
    </p>
  </div>
);

// 🚀 Main Page Component
export default function PageMain(): React.ReactElement {
  // 💾 State Management
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [githubStats, setGithubStats] = useState<GithubStats>({
    repos: null,
    followers: null,
  });
  const [currentHeroImage] = useState<number>(0);

  const heroImages: string[] = ["/24.jpg"];

  const heroBlurData =
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 10'%3E%3Crect width='10' height='10' fill='%23e5e5e5'/%3E%3C/svg%3E";

  // 📝 Contact Form States
  const [formName, setFormName] = useState<string>("");
  const [formBudget, setFormBudget] = useState<string>("");
  const [formMessage, setFormMessage] = useState<string>("");
  const [formEmail, setFormEmail] = useState<string>("");

  // 📜 Scroll Animations
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  // ⚙️ Side Effects
  useEffect(() => {
    const handleScroll = () =>
      setScrolled(typeof window !== "undefined" && window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    fetch("https://api.github.com/users/StarDust130")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.public_repos !== undefined) {
          setGithubStats({
            repos: data.public_repos,
            followers: data.followers,
          });
        }
      })
      .catch((err) => console.error("GitHub Fetch Error:", err));
  }, []);

  // 🔒 Lock background scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  // ✉️ Form Handler to send email
  const handleSendSignal = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = `Inquiry: Project Discussion with ${formName}`;
    const body = `Hi Chandrashekhar,%0D%0A%0D%0A${formMessage}%0D%0A%0D%0A-----------------------------------%0D%0AProject Budget: ${formBudget}%0D%0AContact Email: ${formEmail}%0D%0A%0D%0ABest regards,%0D%0A${formName}`;
    if (typeof window !== "undefined") {
      window.location.href = `mailto:csyadav0513@gmail.com?subject=${encodeURIComponent(
        subject,
      )}&body=${body}`;
    }
  };

  // 🎨 Rendering UI
  return (
    <div className="min-h-screen bg-[#f0f0f0] text-black font-sans selection:bg-red-600 selection:text-white overflow-x-hidden cursor-none relative">
      {/* 🎭 Global Utilities (Cursor, Grid, etc.) */}
      <CustomCursor />
      <CyberGrid />
      <BackToTop />

      <div className="noise-overlay"></div>

      {/* 📏 Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-red-600 origin-left z-[60]"
        style={{ scaleX }}
      />

      {/* 🌐 Navigation Bar */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 border-b-2 border-black ${
          scrolled
            ? "bg-white/95 backdrop-blur-md py-2 shadow-md"
            : "bg-[#f0f0f0] py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex justify-between items-center">
          <div
            className="flex items-center gap-3 group cursor-pointer"
            onClick={() =>
              typeof window !== "undefined" &&
              window.scrollTo({ top: 0, behavior: "smooth" })
            }
          >
            <div className="w-10 h-10 bg-black text-white flex items-center justify-center font-black font-serif text-xl group-hover:bg-red-600 transition-colors border-2 border-transparent group-hover:border-black shrink-0">
              CY
            </div>
            <div className="flex flex-col overflow-hidden">
              <span className="font-mono text-xs md:text-sm uppercase tracking-widest font-bold leading-none whitespace-nowrap truncate max-w-[150px] md:max-w-none">
                Chandrashekhar
              </span>
              <span className="font-mono text-[10px] text-gray-500 uppercase leading-none mt-1 hidden sm:block">
                Full Stack Developer
              </span>
            </div>
          </div>

          <div className="hidden md:flex gap-8 font-mono text-xs font-bold uppercase tracking-widest items-center">
            {["Story", "Power", "Works"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative hover:text-red-600 transition-colors group py-2"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
            <Link
              href="/projects"
              className="relative hover:text-red-600 transition-colors group py-2"
            >
              Projects
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              target="_blank"
              href="mailto:csyadav0513@gmail.com"
              className="bg-black text-white border-2 border-black px-5 py-2 hover:bg-red-600 hover:border-red-600 transition-all duration-300 flex items-center gap-2 transform hover:-translate-y-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,0)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            >
              Let&apos;s Talk <ArrowRight size={14} />
            </Link>
          </div>

          <button
            className="md:hidden p-2 z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* 📱 Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 bg-white z-50 flex flex-col justify-between md:hidden px-8 pt-8 pb-10 overflow-hidden"
          >
            {/* Top Bar with Close Button */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="flex justify-end w-full"
            >
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 -mr-2 active:scale-75 transition-transform text-black"
                aria-label="Close menu"
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="square"
                    strokeLinejoin="miter"
                    strokeWidth="2.5"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </motion.div>

            {/* Main Navigation - Scaled down typography */}
            <div className="flex flex-col gap-2">
              {["Story", "Power", "Works"].map((item, i) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: i * 0.1 + 0.15,
                    duration: 0.4,
                    ease: "easeOut",
                  }}
                  onClick={() => setIsMenuOpen(false)}
                  className="group flex items-baseline gap-4 border-b border-black/10 pb-4 active:scale-[0.98] transition-transform origin-left"
                >
                  <span className="text-sm font-mono text-black/30 font-bold">
                    0{i + 1}
                  </span>
                  <span className="font-display font-black text-3xl uppercase tracking-tighter text-black group-active:text-red-600 transition-colors">
                    {item}
                  </span>
                </motion.a>
              ))}

              {/* Projects Link */}
              <Link href="/projects" onClick={() => setIsMenuOpen(false)}>
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.55, duration: 0.4, ease: "easeOut" }}
                  className="group flex items-baseline gap-4 border-b border-black/10 pb-4 active:scale-[0.98] transition-transform origin-left mt-2"
                >
                  <span className="text-sm font-mono text-black/30 font-bold">
                    04
                  </span>
                  <span className="font-display font-black text-3xl uppercase tracking-tighter text-black group-active:text-red-600 transition-colors">
                    Projects
                  </span>
                </motion.div>
              </Link>
            </div>

            {/* Bottom Utility Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.4 }}
              className="flex flex-col gap-6"
            >
              {/* High-contrast CTA */}
              <a
                href="mailto:csyadav0513@gmail.com"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-between text-lg font-black uppercase text-white bg-red-600 p-4 active:scale-[0.98] transition-transform"
              >
                <span>Let's Talk</span>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="square"
                    strokeLinejoin="miter"
                    strokeWidth="3"
                    d="M5 12h14M12 5l7 7-7 7"
                  />
                </svg>
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 🦸‍♂️ Hero Section */}
      <header className="relative pt-12 md:pt-32 pb-12 bg-transparent border-b-2 border-black overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-6 mb-8 md:mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-8 items-center relative">
            {/* TEXT SECTION */}
            <div className="lg:col-span-7 flex flex-col justify-center relative z-20">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "circOut" }}
              >
                {/* Status Badge */}
                <div className="flex items-center gap-2 md:gap-4 my-8 md:mb-6">
                  <span className="bg-red-600 text-white px-2 md:px-3 py-1 font-mono text-[10px] md:text-xs font-bold uppercase tracking-widest transform -rotate-2 border border-black shadow-sm flex items-center gap-1 md:gap-2 shrink-0">
                    <CheckCircle size={12} /> Ready to Work ✌️
                  </span>
                  <div className="h-[2px] flex-grow bg-black relative">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-black rounded-full"></div>
                    <div className="absolute right-1 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full border border-black"></div>
                  </div>
                  <span className="font-mono text-[10px] md:text-xs font-bold shrink-0">
                    Let's Build Something Great Together
                  </span>
                </div>

                {/* Main Headline */}
                <h1 className="text-[12vw] sm:text-6xl md:text-7xl lg:text-8xl font-display font-black leading-[0.85] tracking-tighter mb-6 md:mb-8 relative group cursor-default uppercase w-full">
                  FULL STACK
                  <br />
                  <span className="text-stroke-sm relative text-transparent bg-clip-text bg-gradient-to-b from-black to-black/80 group-hover:text-red-600 transition-all duration-300">
                    DEVELOPER
                  </span>
                </h1>

                {/* Quote Box */}
                <p className="font-serif italic text-sm sm:text-lg md:text-2xl leading-relaxed max-w-xl mb-8 md:mb-10 border-l-4 border-red-600 pl-4 md:pl-6 text-gray-800 bg-white/50 backdrop-blur-sm py-2">
                  &quot;I craft high-performance web experiences. Clean code,
                  modern design, and ready to scale. Let&apos;s build something
                  extraordinary together.&quot;
                </p>

                {/* Buttons Container */}
                <div className="flex flex-col sm:flex-row gap-4 md:gap-4 w-full pb-2">
                  <Link
                    href="https://github.com/StarDust130"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto justify-center bg-red-600 text-white px-6 md:px-8 py-3.5 md:py-4 font-mono font-bold uppercase hover:bg-black transition-colors manga-shadow active:translate-x-1 active:translate-y-1 active:shadow-none border-2 border-black flex items-center gap-2 group text-xs md:text-base"
                  >
                    See My Projects{" "}
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </Link>
                  <Link
                    href="mailto:csyadav0513@gmail.com"
                    className="w-full sm:w-auto justify-center bg-white text-black border-2 border-black px-6 md:px-8 py-3.5 md:py-4 font-mono font-bold uppercase hover:bg-yellow-400 transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-1 active:translate-y-1 active:shadow-none flex items-center gap-2 text-xs md:text-base"
                  >
                    <Mail size={16} /> Let&apos;s Talk
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* IMAGE SECTION */}
            <div className="lg:col-span-5 relative w-full aspect-[4/5] sm:aspect-auto sm:h-[400px] md:h-[500px] lg:h-[600px] max-w-[380px] sm:max-w-[450px] lg:max-w-none mx-auto flex items-end justify-center mt-12 lg:mt-0 px-2 sm:px-0">
              <motion.div
                className="absolute inset-0 bg-yellow-400 border-2 border-black translate-x-3 translate-y-3 md:translate-x-0 md:translate-y-0 md:rotate-3 md:top-8 z-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              ></motion.div>

              <div className="relative z-10 w-full h-full bg-white border-2 border-black overflow-hidden flex flex-col shadow-xl">
                {/* Image Card Top Bar */}
                <div className="border-b-2 border-black bg-black text-white p-2 flex justify-between font-mono text-[9px] sm:text-[10px] md:text-xs uppercase items-center shrink-0 z-20 relative">
                  <span className="flex items-center gap-2 whitespace-nowrap">
                    <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse shrink-0"></div>{" "}
                    REC // CAM 01
                  </span>
                  <span className="whitespace-nowrap">Potential: MAX</span>
                </div>

                <div className="flex-grow relative bg-gray-200 overflow-hidden group">
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-20 pointer-events-none z-10"></div>
                  <motion.div
                    className="absolute top-0 left-0 w-full h-1 bg-red-500/50 blur-md z-30 pointer-events-none"
                    animate={{ top: ["0%", "100%"] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />

                  <div className="absolute inset-0 w-full h-full">
                    {/* CRITICAL FIX: Re-inserted Next.js Image component here */}
                    <Image
                      src={heroImages[currentHeroImage]} // Uses your state variable
                      alt="Chandrashekhar"
                      fill
                      priority
                      sizes="(min-width: 1024px) 520px, (min-width: 768px) 480px, 100vw"
                      placeholder="blur"
                      blurDataURL={heroBlurData}
                      className="w-full h-full object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-500"
                      onError={(e) => {
                        const img = e.currentTarget;
                        img.onerror = null;
                        img.src =
                          "https://via.placeholder.com/400x600?text=Chandrashekhar+Y";
                      }}
                    />

                    {/* Gradient Overlay text */}
                    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 to-transparent p-4 md:p-6 text-white pt-20">
                      <h3 className="text-xl sm:text-3xl md:text-4xl font-display font-bold mb-1 uppercase leading-none">
                        Chandrashekhar
                      </h3>
                      <div className="flex flex-wrap items-center gap-1.5 md:gap-2">
                        <span className="font-mono text-[8px] md:text-[10px] bg-red-600 text-white px-1.5 py-0.5 font-bold shrink-0">
                          DEVELOPER
                        </span>
                        <span className="font-mono text-[8px] md:text-[10px] opacity-80 uppercase tracking-widest shrink-0">
                          Next.js Enthusiast
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Status Bar */}
                <div className="border-t-2 border-black p-2.5 sm:p-3 md:p-4 bg-white flex justify-between items-center relative overflow-hidden shrink-0 z-20">
                  <div className="absolute -left-2 top-0 bottom-0 w-4 bg-red-600 transform skew-x-12 opacity-20"></div>
                  <span className="font-serif font-bold text-xs sm:text-base md:text-lg z-10 shrink-0">
                    STATUS
                  </span>
                  <Link
                    href="mailto:csyadav0513@gmail.com"
                    target="_blank"
                    className="z-10 truncate ml-2"
                  >
                    <span className="font-mono text-sm sm:text-xl md:text-3xl font-black tracking-tighter uppercase hover:text-red-500 transition-colors whitespace-nowrap">
                      Open{" "}
                      <span className="text-red-600 hover:text-black">
                        To Work
                      </span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* 📖 Story / About Me Section */}
      <section
        id="story"
        className="py-16 md:py-24 border-b-2 border-black bg-white relative"
      >
        <div className="absolute left-0 top-10 w-4 h-32 bg-black hidden md:block"></div>
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <SectionTitle
            subtitle="Chapter 01"
            japText="起源"
            hindiText="मेरी कहानी (Story)"
            align="left"
          >
            About Me
          </SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-7 font-serif text-lg md:text-xl leading-loose text-justify text-gray-800">
              <p className="mb-8 first-letter:text-7xl first-letter:font-black first-letter:float-left first-letter:mr-4 first-letter:mt-[-10px] first-letter:text-black">
                I am a passionate Full Stack Developer from{" "}
                <span className="font-extrabold underline decoration-yellow-400">
                  India
                </span>
                . While I am new to the industry, I have spent thousands of
                hours mastering code.
              </p>
              <p className="mb-8">
                I focus on <strong>Next.js</strong> and <strong>React</strong>.
                I build websites that look great, load fast, and work perfectly
                on all devices. I treat every project like my own, ensuring you
                get the best quality work.
              </p>

              <div className="p-6 bg-[#f9f9f9] border-l-4 border-black italic font-mono text-sm relative">
                <Quote
                  className="absolute top-2 right-2 text-gray-200"
                  size={48}
                />
                <p className="relative z-10">
                  &quot;I care about your success. Good code builds trust, and
                  trust builds business.&quot;
                </p>
                <div className="mt-2 font-bold text-right text-red-600">
                  — Chandrashekhar
                </div>
              </div>
            </div>

            <div className="md:col-span-5 grid grid-cols-2 gap-4 h-min content-start">
              <BentoCard
                className="bg-black text-white hover:bg-sky-100 transition-colors"
                delay={0.2}
              >
                <div className="flex justify-between items-start mb-4">
                  <SiGithub className="text-black w-8 h-8" />
                  <span className="bg-white text-black text-[10px] px-2 py-1 rounded font-black uppercase">
                    Public
                  </span>
                </div>
                <h3 className="text-5xl font-black font-display text-black mb-1">
                  {githubStats.repos !== null ? githubStats.repos : "100 +"}+
                </h3>
                <p className="font-mono text-black text-xs uppercase tracking-widest ">
                  Public Repositories
                </p>
              </BentoCard>

              <BentoCard
                delay={0.3}
                className="hover:bg-red-50 transition-colors"
              >
                <div className="flex justify-between items-start mb-4">
                  <GitCommit className="text-red-600 w-8 h-8" />
                  <span className="bg-red-100 text-red-600 text-[10px] px-2 py-1 rounded font-bold">
                    Total
                  </span>
                </div>
                <h3 className="text-4xl md:text-5xl font-black font-display text-red-600 mb-1">
                  10,000+
                </h3>
                <p className="font-mono text-xs uppercase tracking-widest text-gray-500">
                  Commits
                </p>
              </BentoCard>

              <BentoCard
                className="col-span-2 hover:bg-yellow-100 bg-[#f0f0f0]"
                delay={0.4}
              >
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-xl font-bold font-display uppercase">
                    Core Systems
                  </h3>
                  <Cpu className="text-gray-400" />
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-xs font-mono font-bold mb-1">
                      <span>Front-End</span>
                      <span>95%</span>
                    </div>
                    <div className="h-2 w-full bg-gray-300 rounded-full overflow-hidden">
                      <div className="h-full bg-black w-[95%]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs font-mono font-bold mb-1">
                      <span>Back-End</span>
                      <span>95%</span>
                    </div>
                    <div className="h-2 w-full bg-gray-300 rounded-full overflow-hidden">
                      <div className="h-full bg-red-600 w-[95%]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs font-mono font-bold mb-1">
                      <span>DevOps</span>
                      <span>80%</span>
                    </div>
                    <div className="h-2 w-full bg-gray-300 rounded-full overflow-hidden">
                      <div className="h-full bg-green-600 w-[80%]"></div>
                    </div>
                  </div>
                </div>
              </BentoCard>
            </div>
          </div>
        </div>
      </section>

      {/* ⚡ Skills & Power Section */}
      <section
        id="power"
        className="py-16 md:py-24 border-b-2 border-black bg-[#f0f0f0] relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 text-[10rem] md:text-[15rem] font-black font-display text-white opacity-40 select-none -translate-y-1/3 translate-x-1/4 pointer-events-none text-stroke-sm">
          SKILLS
        </div>
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <SectionTitle
            subtitle="Chapter 02"
            japText="能力"
            hindiText="कौशल (Skills)"
            align="center"
          >
            Technical Skills
          </SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <BentoCard className="h-full shadow-sm hover:shadow-xl transition-shadow border-t-8 border-t-red-600">
              <div className="border-b-2 border-black pb-4 mb-4 flex justify-between items-center">
                <h3 className="font-serif font-bold text-xl uppercase">
                  Frontend
                </h3>
                <Code2 className="text-red-600" />
              </div>
              <div className="space-y-2">
                <SkillRow label="Next.js" value="Advanced" icon={Globe} />
                <SkillRow label="React" value="Advanced" icon={Zap} />
                <SkillRow label="Tailwind CSS" value="Expert" icon={Palette} />
                <SkillRow label="TypeScript" value="Great" icon={Terminal} />
                <SkillRow
                  label="Framer Motion"
                  value="Learning"
                  icon={Layers}
                />
              </div>
            </BentoCard>

            <BentoCard className="h-full shadow-sm hover:shadow-xl transition-shadow border-t-8 border-t-blue-600">
              <div className="border-b-2 border-black pb-4 mb-4 flex justify-between items-center">
                <h3 className="font-serif font-bold text-xl uppercase">
                  Backend
                </h3>
                <Terminal className="text-blue-600" />
              </div>
              <div className="space-y-2">
                <SkillRow label="Node.js" value="Advanced" icon={Cpu} />
                <SkillRow label="PostgreSQL" value="Advanced" icon={Layers} />
                <SkillRow
                  label="AI API Integration"
                  value="Great"
                  icon={Globe}
                />
                <SkillRow label="MongoDB" value="Great" icon={Terminal} />
                <SkillRow label="Firebase" value="Good" icon={Zap} />
              </div>
            </BentoCard>

            <BentoCard className="h-full bg-white text-black shadow-sm hover:shadow-xl transition-shadow border-t-8 border-t-yellow-400 border-x-2 border-b-2 border-black">
              <div className="border-b-2 border-black/30 pb-4 mb-4 flex justify-between items-center">
                <h3 className="font-serif font-bold text-xl uppercase">
                  Work Style
                </h3>
                <Star className="text-yellow-400 fill-yellow-400" />
              </div>
              <div className="space-y-6 font-mono text-sm pt-2">
                {[
                  { name: "Truth Worthy 🔥", level: "200%", percent: "200%" },
                  { name: "Code Quality 💎", level: "Clean", percent: "100%" },
                  { name: "Delivery Speed ⚡", level: "Fast", percent: "99%" },
                  { name: "Communication 💬", level: "Clear", percent: "90%" },
                ].map((tool) => (
                  <div key={tool.name}>
                    <div className="flex justify-between mb-2 font-bold">
                      <span>{tool.name}</span>
                      <span className="text-red-600">{tool.level}</span>
                    </div>
                    <div className="w-full bg-gray-200 h-2 border border-black/10 rounded-full overflow-hidden">
                      <div
                        className="bg-red-600 h-full"
                        style={{ width: tool.percent }}
                      ></div>
                    </div>
                  </div>
                ))}
                <div className="mt-4 pt-4 border-t border-black/10 text-center text-xs text-gray-500 uppercase tracking-widest font-bold">
                  <Link
                    href="mailto:csyadav0513@gmail.com"
                    target="_blank"
                    className="mt-4 pt-4 border-t border-black/10 text-center text-xs text-gray-500 uppercase tracking-widest font-bold hover:text-red-600 transition-colors cursor-pointer"
                  >
                    Ready to work ☺️
                  </Link>
                </div>
              </div>
            </BentoCard>
          </div>
        </div>
      </section>

      {/* 📁 Selected Works Section */}
      <section
        id="works"
        className="py-16 md:py-24 border-b-2 border-black bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 md:mb-16 gap-8">
            <div className="text-center md:text-left">
              <span className="font-mono text-xs font-bold text-red-600 uppercase tracking-widest border border-red-600 px-2 py-1 mb-4 inline-block">
                Personal Archives
              </span>
              <h2 className="text-4xl sm:text-5xl md:text-8xl font-black font-display uppercase tracking-tighter leading-[0.8] relative z-10">
                Selected
                <br />
                Works
              </h2>
            </div>
            <div className="w-full md:w-auto text-center md:text-right">
              <p className="text-sm font-mono text-gray-500 mb-3 md:mb-2 md:max-w-xs mx-auto md:mx-0">
                Projects I built to learn and master modern web development.
              </p>
              <a
                href="https://github.com/StarDust130"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex z-10 cursor-pointer items-center gap-2 text-xs font-bold uppercase tracking-widest bg-black text-white px-3 py-2 hover:bg-red-600 transition-colors w-full md:w-auto justify-center"
              >
                <SiGithub size={14} /> github.com/StarDust130
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              index={0}
              title="Neo Brut"
              category="NextJS / neubrutalism"
              description="I built a small UI library in a neo-brutalism style to power a real-time messaging app with clean components and secure auth."
              color="bg-pink-500"
              image="/pro-2.png"
              link="https://neo-brut.vercel.app/"
              githubLink="https://github.com/StarDust130/Neo-Brut"
            />
            <ProjectCard
              index={1}
              title="Sarathi AI"
              category="AI API Integration"
              description="An AI guide that shares lessons from the Gita to help you grow, built on a modern Next.js stack."
              color="bg-red-500"
              image="/pro-1.png"
              link="https://sarathi-ai-topaz.vercel.app/"
              githubLink="https://github.com/StarDust130/sarathi-ai"
            />
            <ProjectCard
              index={2}
              title="Hungrr"
              category="React/NodeJS"
              description="Food ordering app for Café Scan QR. It handles the menu, live orders, and payments with a fast user experience."
              color="bg-yellow-400"
              image="/pro-3.png"
              link="https://hungrr.in/"
              githubLink="https://github.com/StarDust130/Hungrr"
            />

            <div className="col-span-1 md:col-span-2 lg:col-span-3 flex justify-center w-full">
              <a
                href="https://github.com/StarDust130"
                target="_blank"
                rel="noreferrer noopener"
                className="w-full md:w-3/4 bg-black text-white p-8 border-2 border-black flex flex-col justify-center items-center text-center group cursor-pointer relative overflow-hidden hover:shadow-[8px_8px_0px_0px_rgba(255,0,0,1)] transition-all"
              >
                <div className="absolute inset-0 bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ease-in-out"></div>
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
                <div className="relative z-10">
                  <h3 className="text-3xl md:text-5xl font-display font-bold mb-4">
                    View All Projects
                  </h3>
                  <p className="font-mono text-gray-400 group-hover:text-white transition-colors uppercase tracking-widest mb-8 text-sm">
                    Click to see more of my work
                  </p>
                  <div className="inline-flex items-center gap-2 border-2 border-white px-6 py-3 font-bold uppercase text-sm hover:bg-white hover:text-black transition-colors">
                    <Layers size={16} /> Open Projects Page
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 💼 Why Hire Me / Diagnostics Section */}
      <section className="py-24 border-b-2 border-black bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff22_1px,transparent_1px)] [background-size:20px_20px] opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="font-mono text-red-500 text-sm uppercase tracking-widest mb-2 block">
              System Diagnostics
            </span>

            <h3 className="text-4xl md:text-6xl font-display font-black uppercase text-white mb-4">
              Why Hire Me?
            </h3>
            <div className="w-24 h-1 bg-red-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FeatureCard
              title="Pixel Perfect"
              icon={Palette}
              description="I don't just write code; I craft experiences. Every pixel is placed with precision to match your design."
            />
            <FeatureCard
              title="Modern Stack"
              icon={Zap}
              description="Built on Next.js 16+ and Tailwind. Fast, scalable, and ready for the future of the web."
            />
            <FeatureCard
              title="Responsive"
              icon={Smartphone}
              description="Your site will look amazing on 4k monitors, laptops, tablets, and phones. No compromises."
            />
            <FeatureCard
              title="Clean Code"
              icon={Code2}
              description="Maintainable, readable, and scalable code. Future developers (and you) will thank me."
            />
            <FeatureCard
              title="Fast Delivery"
              icon={Activity}
              description="I value your time. I deliver milestones on schedule without sacrificing quality."
            />
            <FeatureCard
              title="SEO Ready"
              icon={Globe}
              description="Built with SEO best practices in mind so your audience can actually find you."
            />
          </div>
        </div>
      </section>

      {/* 📞 Contact / Signals Section */}
      <section
        id="comms"
        className="py-16 md:py-24 bg-white text-black relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gray-100 to-transparent pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="flex flex-col justify-between">
            <div>
              <div className="inline-block border border-black/30 px-3 py-1 text-xs font-mono uppercase tracking-widest mb-6 text-red-600 animate-pulse">
                ● Transmission Open
              </div>
              <h2 className="text-5xl md:text-8xl font-display font-black uppercase tracking-tighter mb-6 leading-none">
                Start
                <br />
                The Arc
              </h2>
              <p className="font-mono text-gray-600 mb-8 max-w-md leading-relaxed">
                Looking for a developer who is honest and hardworking? I am
                available for freelance work and full-time roles.
              </p>
            </div>

            <div className="flex gap-4">
              <Link
                href="https://github.com/StarDust130"
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors group"
              >
                <SiGithub size={24} />
              </Link>
              <Link
                href="https://x.com/the_csyadav"
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 border-2 border-black flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-colors group"
              >
                <FaXTwitter size={24} />
              </Link>
              <Link
                href="mailto:csyadav0513@gmail.com"
                className="w-16 h-16 border-2 border-black flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-colors group"
              >
                <SiGmail size={24} />
              </Link>
            </div>
          </div>

          <div className="bg-white text-black p-6 md:p-12 border-4 border-black transform rotate-0 md:rotate-2 hover:rotate-0 transition-transform duration-500 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-black font-display text-2xl md:text-3xl mb-2 uppercase">
              Transponder Snail
            </h3>
            <p className="font-mono text-xs text-gray-500 uppercase mb-8">
              Secure Line • Encrypted
            </p>

            <form className="space-y-6" onSubmit={handleSendSignal}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-mono text-xs font-bold uppercase mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    className="w-full bg-[#f0f0f0] border-b-2 border-black p-3 focus:outline-none focus:bg-yellow-100 transition-colors font-mono"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <label className="block font-mono text-xs font-bold uppercase mb-2">
                    Budget
                  </label>
                  <input
                    type="text"
                    value={formBudget}
                    onChange={(e) => setFormBudget(e.target.value)}
                    className="w-full bg-[#f0f0f0] border-b-2 border-black p-3 focus:outline-none focus:bg-yellow-100 transition-colors font-mono"
                    placeholder="Fixed / Hourly"
                  />
                </div>
              </div>
              <div>
                <label className="block font-mono text-xs font-bold uppercase mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={formEmail}
                  onChange={(e) => setFormEmail(e.target.value)}
                  className="w-full bg-[#f0f0f0] border-b-2 border-black p-3 focus:outline-none focus:bg-yellow-100 transition-colors font-mono"
                  placeholder="client@company.com"
                  required
                />
              </div>
              <div>
                <label className="block font-mono text-xs font-bold uppercase mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  value={formMessage}
                  onChange={(e) => setFormMessage(e.target.value)}
                  className="w-full bg-[#f0f0f0] border-b-2 border-black p-3 focus:outline-none focus:bg-yellow-100 transition-colors font-mono"
                  placeholder="I have an idea for a website..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-black text-white py-4 font-bold font-mono uppercase tracking-widest hover:bg-red-600 transition-colors flex justify-between items-center px-6 group"
              >
                <span>Send Signal</span>
                <Zap
                  size={18}
                  className="group-hover:text-yellow-400 transition-colors"
                />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* 🟢 System Status Section */}
      <section className="bg-white border-t-2 border-black py-8">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="font-mono text-[10px] uppercase text-gray-500 mb-1">
                System Status
              </div>
              <div className="font-bold uppercase text-green-600 flex items-center justify-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                Operational
              </div>
            </div>
            <div className="text-center">
              <div className="font-mono text-[10px] uppercase text-gray-500 mb-1">
                Focus
              </div>
              <div className="font-bold uppercase">Modern UI/UX</div>
            </div>
            <div className="text-center">
              <div className="font-mono text-[10px] uppercase text-gray-500 mb-1">
                Stack
              </div>
              <div className="font-bold uppercase">React / Next.js</div>
            </div>
            <div className="text-center">
              <div className="font-mono text-[10px] uppercase text-gray-500 mb-1">
                Mission
              </div>
              <div className="font-bold uppercase text-red-600 hover:text-yellow-400 transition-colors cursor-pointer">
                Build Great Projects
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🏁 Footer Section */}
      <footer className="bg-black text-white border-t-2 border-white/10 pt-16 pb-0 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10 pb-24">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <h4 className="text-3xl md:text-4xl font-black font-display uppercase mb-6">
                Chandrashekhar
              </h4>
              <p className="font-serif italic text-gray-400 max-w-sm text-lg">
                Building the web one component at a time. Honest work, clean
                code, and modern designs.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8 col-span-1 md:col-span-2">
              <div>
                <h5 className="font-bold font-mono uppercase mb-4 border-b border-white/20 pb-2 inline-block">
                  Sitemap
                </h5>
                <ul className="space-y-2 font-mono text-sm text-gray-400">
                  <li>
                    <a
                      href="#story"
                      className="hover:text-red-500 transition-colors"
                    >
                      About Me
                    </a>
                  </li>
                  <li>
                    <a
                      href="#power"
                      className="hover:text-red-500 transition-colors"
                    >
                      Skills
                    </a>
                  </li>
                  <li>
                    <a
                      href="#works"
                      className="hover:text-red-500 transition-colors"
                    >
                      Works
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h5 className="font-bold font-mono uppercase mb-4 border-b border-white/20 pb-2 inline-block">
                  Socials
                </h5>
                <ul className="space-y-2 font-mono text-sm text-gray-400">
                  <li>
                    <Link
                      href="https://x.com/the_csyadav"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-red-500 transition-colors"
                    >
                      Twitter / X
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://github.com/StarDust130"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-red-500 transition-colors"
                    >
                      GitHub
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="mailto:csyadav0513@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-red-500 transition-colors"
                    >
                      Email
                    </Link>
                  </li>
                  <li></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs font-mono uppercase tracking-widest text-gray-500">
            <span>© {new Date().getFullYear()} Chandrashekhar</span>

            <span className="mt-2 md:mt-0">Made with ❤️ in India</span>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none opacity-10 pointer-events-none select-none">
          <motion.div
            className="whitespace-nowrap flex"
            animate={{ x: ["0%", "-100%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
          >
            <span className="text-[8rem] md:text-[20rem] font-black font-display text-white mr-12">
              CHANDRASHEKHAR
            </span>
            <span className="text-[8rem] md:text-[20rem] font-black font-display text-white mr-12">
              CHANDRASHEKHAR
            </span>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}

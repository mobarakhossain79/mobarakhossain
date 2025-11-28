import React from "react";
import { Sparkles, Stars } from "lucide-react";
import { motion } from "framer-motion";

// Single-file with complete hero background animation
const GlobalStyles = () => (
  <style>{`

       Main BG Gradient Motion
    ========================= */
    @keyframes animated-gradient {
      0% { filter: hue-rotate(0deg); }
      50% { filter: hue-rotate(10deg); }
      100% { filter: hue-rotate(0deg); }
    }
    .bg-animated {
      animation: animated-gradient 20s ease infinite;
    }

    /* Floating Avatar Bounce */
    @keyframes floaty {
      0% { transform: translateY(0px); }
      50% { transform: translateY(-8px); }
      100% { transform: translateY(0px); }
    }
    .floaty { animation: floaty 6s ease-in-out infinite; }

    .focus-ring:focus-visible {
      outline: 4px solid rgba(67,156,255,0.18);
      outline-offset: 4px;
    }

    /* =======================================
       AURORA BEAM BACKGROUND ANIMATION
    ======================================== */
    @keyframes auroraMove {
      0% { transform: translateX(-30%) translateY(-10%) rotate(20deg); opacity: 0.4; }
      50% { transform: translateX(10%) translateY(-5%) rotate(20deg); opacity: 0.75; }
      100% { transform: translateX(-30%) translateY(-10%) rotate(20deg); opacity: 0.4; }
    }

    .aurora-beam {
      position: absolute;
      top: 12%;
      left: -15%;
      width: 170%;
      height: 320px;
      background: linear-gradient(90deg, #45C7F0 0%, transparent 70%);
      filter: blur(120px);
      opacity: 0.55;
      animation: auroraMove 12s ease-in-out infinite;
      pointer-events: none;
      z-index: -30;
    }

    /* =======================================
       FLOATING ORBS BG ANIMATION
    ======================================== */
    @keyframes orbFloat1 {
      0%   { transform: translate(-20px, 0px); }
      50%  { transform: translate(20px, -35px); }
      100% { transform: translate(-20px, 0px); }
    }
    @keyframes orbFloat2 {
      0%   { transform: translate(20px, -10px); }
      50%  { transform: translate(-20px, 25px); }
      100% { transform: translate(20px, -10px); }
    }

    .orb-1 {
      position: absolute;
      width: 420px;
      height: 420px;
      background: radial-gradient(circle, #2b9edb40 0%, transparent 70%);
      filter: blur(80px);
      top: 10%;
      right: -10%;
      animation: orbFloat1 14s ease-in-out infinite;
      pointer-events: none;
      z-index: -25;
    }
    .orb-2 {
      position: absolute;
      width: 350px;
      height: 350px;
      background: radial-gradient(circle, #7ee7ff40 0%, transparent 70%);
      filter: blur(95px);
      bottom: 5%;
      left: -5%;
      animation: orbFloat2 18s ease-in-out infinite;
      pointer-events: none;
      z-index: -25;
    }
  `}</style>
);

const IconEye = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="1.8" width="20" height="20" {...props}>
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const IconDownload = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="1.8" width="20" height="20" {...props}>
    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" x2="12" y1="15" y2="3" />
  </svg>
);

export default function HeroModern() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center relative overflow-hidden">
      <GlobalStyles />

      {/* Main gradient animated layer */}
      <div className="absolute inset-0 -z-10 bg-animated bg-gradient-to-tr from-[#081129] via-[#0f1724] to-[#0b2540] opacity-95" />

      {/* Background animation layers */}
      <div className="aurora-beam"></div>
      <div className="orb-1"></div>
      <div className="orb-2"></div>

      {/* Soft center glow */}
      <div className="absolute inset-0 pointer-events-none -z-20 flex items-center justify-center">
        <div className="w-[800px] h-[800px] rounded-full bg-gradient-to-r from-[#06203a]/20 via-transparent to-[#2b9edb]/12 blur-3xl opacity-80 -translate-y-24" />
      </div>

      <section className="w-full max-w-6xl px-6 lg:px-12 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-3 bg-white/6 px-3 py-1 rounded-full border border-white/10 backdrop-blur-sm">
              <span className="text-sm">Available for new projects</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
              I design <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#7ee7ff] to-[#2b9edb]">modern, human</span> interfaces
            </h1>

            <p className="text-lg text-gray-300 max-w-2xl">
              I help startups and brands turn ideas into polished digital products —
              from brand systems to pixel-perfect interfaces and motion.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="/Resume.pdf" download className="focus-ring inline-flex items-center gap-3 rounded-lg px-5 py-3 bg-gradient-to-r from-[#45C7F0] to-[#1F8FBF] shadow-md hover:-translate-y-1 transition">
                <IconDownload />
                <span className="font-medium">Get Resume</span>
              </a>

              <a href="#portfolio" className="inline-flex items-center gap-3 rounded-lg px-5 py-3 border border-white/10 bg-white/3 hover:bg-white/5 backdrop-blur-sm transition">
                <IconEye />
                <span className="font-medium">View Portfolio</span>
              </a>
            </div>

            <button
              onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })}
              className="text-sm text-gray-300 hover:text-white underline mt-1"
            >
              Or contact me
            </button>

            <div className="mt-4 flex items-center gap-4">
              <div className="inline-flex items-center gap-2 bg-white/4 px-3 py-1 rounded-full border border-white/6">
                <div className="w-8 h-8 grid place-items-center rounded-full bg-white/8">JD</div>
                <div>
                  <div className="text-sm font-semibold">Available</div>
                  <div className="text-xs text-gray-300">Freelance & remote</div>
                </div>
              </div>

              <div className="text-sm text-gray-400">Trusted by small teams & agencies</div>
            </div>
          </motion.div>

          {/* RIGHT CARD */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative flex items-center justify-center"
          >
            <div className="w-full max-w-md p-6 rounded-2xl bg-gradient-to-b from-white/3 to-transparent border border-white/8 backdrop-blur-md shadow-xl">
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-[#7ee7ff]/30 to-[#2b9edb]/20 flex items-center justify-center floaty">
                  <div className="w-12 h-12 rounded-lg bg-white/10 grid place-items-center">👋</div>
                </div>

                <div>
                  <div className="text-lg font-semibold">Mobarak Hossain Joy</div>
                  <div className="text-sm text-gray-300">Product & UI Designer</div>
                </div>
              </div>

              <div className="mt-4 text-sm text-gray-300">
                Design systems, web apps, and polished marketing sites.
                I ship fast and keep things human.
              </div>

              <div className="mt-6 flex gap-3">
                <a href="#contact" className="flex-1 text-center rounded-md px-4 py-2 bg-[#0b2340]/40 border border-white/6 hover:-translate-y-1 transition">
                  Hire me
                </a>
                <a href="#case-studies" className="px-4 py-2 rounded-md border border-white/8 text-sm text-gray-200">
                  Case studies
                </a>
              </div>
            </div>

            <Sparkles className="absolute -top-6 -right-8 w-8 h-8 opacity-60" />
            <Stars className="absolute bottom-4 -left-8 w-6 h-6 opacity-50" />
          </motion.div>

        </div>
      </section>
    </main>
  );
}

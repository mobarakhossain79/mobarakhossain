import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Sparkles } from 'lucide-react';

// --- Hero Section Component Logic ---
const HeroSection = () => {
  // Common animation properties
  const animationProps = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  return (
    <section className="w-full max-w-7xl px-6 lg:px-12 pt-20 pb-40 relative z-10 mx-auto min-h-screen flex items-center">
      
      {/* Container: Responsive Grid Layout (1 column on mobile/tablet, 2 columns on desktop) */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 lg:gap-24 items-center">
        
        {/* --- MAIN COLUMN: COPYWRITING (Left Side) --- */}
        <motion.div
          {...animationProps}
          className="space-y-8 text-left max-w-xl lg:max-w-none mb-12 lg:mb-0"
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-lg">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-medium text-gray-300 tracking-wide uppercase">Available for work</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
            Design with 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              <br />Purpose & Precision
            </span>
          </h1>

          <p className="text-lg text-gray-400 leading-relaxed">
            I craft digital experiences that blend aesthetic beauty with functional clarity. 
            Helping forward-thinking brands build interfaces that users love.
          </p>
          
          <blockquote className="border-l-4 border-cyan-400 pl-4 italic text-gray-400 text-sm">
            "Design is not just what it looks like and feels like. Design is how it works."
          </blockquote>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-4 justify-start">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="group relative inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-xl font-semibold overflow-hidden transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]"
            >
              <span className="relative z-10 flex items-center gap-2">
                Get In Touch <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/Resume.pdf"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 hover:border-white/20 transition-all backdrop-blur-sm"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume</span>
            </motion.a>
          </div>
        </motion.div>
        
        {/* --- IMAGE/VISUAL COLUMN: RIGHT SIDE --- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex justify-center lg:justify-end relative p-4"
        >
          {/* Image Container: Updated to be smaller (w-72 h-72 on mobile, sm:w-80 sm:h-80 on larger) */}
          <div className="w-72  h-72 sm:w-80 sm:h-80 bg-transparent rounded-full overflow-hidden shadow-2xl relative border-4 border-cyan-400/50 hover:border-cyan-400 transition-all duration-300">
            <img 
                src="/Me.JPG" 
                alt="User Portrait"
                className="w-full h-full object-cover"
                // Fallback to a placeholder image if /Me.JPG fails to load
                onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/800x800/1f2937/d1d5db?text=Me" }}
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};


// --- Main Application Component ---
export default function App() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-[#030014] text-white font-['Inter']">
      {/* --- Global Background Elements --- */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] z-0"></div>
      <div className="fixed -top-20 -left-20 w-[500px] h-[500px] bg-purple-500/30 rounded-full blur-[120px] opacity-50 pointer-events-none z-0" />
      <div className="fixed bottom-0 right-0 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[100px] opacity-40 pointer-events-none z-0" />
      
      {/* Content Container */}
      <div className="relative z-10">
        <HeroSection />
      </div>
    </main>
  );
}
import { Sparkles, Stars } from 'lucide-react';
import React from 'react';

const Eye = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const Download = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" x2="12" y1="15" y2="3" />
  </svg>
);

const GlobalStyles = () => (
  <style>{`
    @keyframes animated-gradient {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }
    .animate-gradient {
      background-size: 200% 200%;
      animation: animated-gradient 25s ease infinite;
    }
    @keyframes slow-spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
    .animate-slow-spin {
      animation: slow-spin 60s linear infinite;
    }
  `}</style>
);

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: string;
};

const Button = ({ children, onClick, className = "", variant = "" }: ButtonProps) => {
  const baseClasses =
    "inline-flex items-center justify-center rounded-lg px-5 py-3 text-base font-medium transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-opacity-50 disabled:opacity-50 disabled:pointer-events-none shadow-lg";

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variant === "outline" ? "border border-white/20 text-white hover:bg-white/10" : "bg-[#45C7F0] text-white hover:bg-[#349ab9]"} ${className}`}
    >
      {children}
    </button>
  );
};

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen relative flex items-center justify-center bg-black text-white overflow-hidden"
    >
      {/* Animated background gradient */}
      <div 
        className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#263D88] via-[#000000] to-[#45C7F0] animate-gradient"
      ></div>

      {/* Geometric Shapes */}
      <div className="absolute top-12 left-12 w-32 h-32 animate-float opacity-40">
        <div className="relative w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-primary/10 rounded-full glass" />
          <div className="absolute top-2 left-2 w-8 h-8 bg-primary/40 rounded-full" />
          <div className="absolute bottom-4 right-4 w-12 h-12 border-2 border-primary/30 rounded-lg rotate-45" />
          <Sparkles className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 text-primary/60" />
        </div>
      </div>

      {/* Creative Design Pattern */}
      <div className="absolute top-24 right-20 w-48 h-48 animate-float opacity-30" style={{ animationDelay: '1s' }}>
        <div className="relative w-full h-full rotate-12">
          <div className="absolute inset-0 glass rounded-3xl bg-gradient-to-tr from-primary/20 to-accent/15" />
          <div className="absolute top-4 left-4 w-16 h-16 border-4 border-primary/40 rounded-2xl" />
          <div className="absolute bottom-6 right-6 w-20 h-20">
            <div className="w-full h-full bg-gradient-to-br from-primary/30 to-primary/10 rounded-full" />
            <div className="absolute top-2 left-2 w-4 h-4 bg-primary/50 rounded-full" />
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 border-2 border-primary/30 rotate-45" />
        </div>
      </div>

      {/* Abstract Art Element */}
      <div className="absolute bottom-32 left-16 w-28 h-28 animate-float opacity-50" style={{ animationDelay: '3s' }}>
        <div className="relative w-full h-full">
          <div className="absolute inset-0 glass rounded-2xl bg-gradient-to-bl from-primary/25 to-accent/20 rotate-12" />
          <div className="absolute top-0 right-0 w-12 h-12 bg-primary/30 rounded-full transform translate-x-2 -translate-y-2" />
          <div className="absolute bottom-2 left-2 w-16 h-4 bg-gradient-to-r from-primary/40 to-transparent rounded-full" />
          <Stars className="absolute bottom-4 right-4 w-6 h-6 text-primary/70" />
        </div>
      </div>

      {/* Design Tool Icons */}
      <div className="absolute top-1/3 right-12 w-20 h-20 animate-float opacity-40" style={{ animationDelay: '5s' }}>
        <div className="relative w-full h-full glass rounded-xl bg-gradient-to-tr from-primary/25 to-primary/10">
          <div className="absolute inset-2 border-2 border-primary/30 rounded-lg" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-primary/60 rounded-full" />
        </div>
      </div>

      {/* Creative Grid Pattern */}
      <div className="absolute bottom-20 right-24 w-24 h-24 animate-float opacity-35" style={{ animationDelay: '7s' }}>
        <div className="grid grid-cols-3 gap-1 w-full h-full p-2 glass rounded-lg bg-gradient-to-br from-primary/20 to-accent/15">
          <div className="bg-primary/30 rounded-sm" />
          <div className="bg-primary/20 rounded-sm" />
          <div className="bg-primary/40 rounded-sm" />
          <div className="bg-primary/25 rounded-sm" />
          <div className="bg-primary/35 rounded-sm" />
          <div className="bg-primary/30 rounded-sm" />
          <div className="bg-primary/20 rounded-sm" />
          <div className="bg-primary/40 rounded-sm" />
          <div className="bg-primary/25 rounded-sm" />
        </div>
      </div>

      {/* Floating Design Elements */}
      <div className="absolute top-2/3 left-8 w-16 h-16 animate-float opacity-45" style={{ animationDelay: '4s' }}>
        <div className="relative w-full h-full glass rounded-full bg-gradient-to-r from-accent/25 to-primary/15">
          <div className="absolute top-1 right-1 w-4 h-4 bg-primary/40 rounded-full" />
          <div className="absolute bottom-2 left-2 w-6 h-1 bg-primary/50 rounded-full" />
        </div>
      </div>
      

      {/* Main Content */}
      <div className="relative z-10 text-center space-y-6 px-4">
        <span className="bg-white/10 text-white px-4 py-1 rounded-full text-sm backdrop-blur-sm border border-white/20">
          Available for New Projects
        </span>
        <h1 className="text-5xl sm:text-7xl font-bold text-shadow-lg">Creative Designer</h1>
        <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto">
          Turning ideas into <span className="text-[#45C7F0] font-semibold">beautiful designs</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer">
            <Button variant="outline">
              <Download className="mr-2 h-5 w-5" /> Get My Resume
            </Button>
          </a>
          {/* <Button>
            <Eye className="mr-2 h-5 w-5" /> View Portfolio
          </Button> */}
        </div>
      </div>
    </section>
  );
};

export default function App() {
  return (
    <main>
      <GlobalStyles />
      <Hero />
    </main>
  );
}

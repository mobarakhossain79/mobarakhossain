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

const MotionStyles = () => (
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
      className={`${baseClasses} ${variant === "outline" ? "border" : "bg-blue-500 text-white"} ${className}`}
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
      <div 
        className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#263D88] via-[#000000] to-[#45C7F0] animate-gradient"
      ></div>

      <div className="relative z-10 text-center space-y-6 px-4">
        <span className="bg-white/10 text-white px-4 py-1 rounded-full text-sm backdrop-blur-sm border border-white/20">
          Available for New Projects
        </span>
        <h1 className="text-5xl sm:text-7xl font-bold text-shadow-lg">Creative Designer</h1>
        <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto">
          Turning ideas into <span className="text-[#45C7F0] font-semibold">beautiful designs</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Button variant="outline">
            <Download className="mr-2 h-5 w-5" /> Get My Resume
          </Button>
        </div>
      </div>
    </section>
  );
};

export default function App() {
  return (
    <main>
      <MotionStyles />
      <Hero />
    </main>
  );
}

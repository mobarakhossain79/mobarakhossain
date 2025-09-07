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

      {/* Background Graphic Elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-[#45C7F0] opacity-10 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 h-80 w-80 rounded-full bg-[#263D88] opacity-10 blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-white opacity-[0.05] blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 h-40 w-40 rounded-full bg-[#45C7F0] opacity-15 blur-3xl animate-pulse"></div>
        <div className="absolute top-20 right-20 h-52 w-52 rounded-full bg-[#263D88] opacity-15 blur-3xl animate-pulse"></div>
        {/* Additional Graphic Elements */}
        <div className="absolute top-1/2 right-10 h-32 w-32 rounded-full bg-white opacity-5 blur-3xl animate-pulse animate-slow-spin"></div>
        <div className="absolute bottom-20 left-1/3 h-56 w-56 rounded-full bg-[#45C7F0] opacity-5 blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 h-20 w-20 rounded-full bg-[#263D88] opacity-20 blur-3xl animate-pulse"></div>
        {/* Further Added Elements */}
        <div className="absolute top-[5%] left-[5%] h-24 w-24 rounded-full bg-white opacity-[0.07] blur-3xl animate-pulse"></div>
        <div className="absolute bottom-[5%] right-[5%] h-48 w-48 rounded-full bg-[#45C7F0] opacity-[0.08] blur-3xl animate-pulse animate-slow-spin"></div>
        <div className="absolute top-[80%] left-[85%] h-32 w-32 rounded-full bg-[#263D88] opacity-[0.1] blur-3xl animate-pulse"></div>
        <div className="absolute top-[15%] right-[15%] h-40 w-40 rounded-full bg-white opacity-[0.03] blur-3xl animate-pulse"></div>
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

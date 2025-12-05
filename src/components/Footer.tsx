import { useState } from "react";

// --- Inline SVG icons ---
const HeartIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`h-4 w-4 text-rose-400 ${props.className || ""}`}>
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

const ArrowUpIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`h-5 w-5 ${props.className || ""}`}>
    <line x1="12" y1="19" x2="12" y2="5"></line>
    <polyline points="5 12 12 5 19 12"></polyline>
  </svg>
);

// --- Footer Component ---
const Footer = () => {
  // Removed state and logic for the newsletter form as it is being removed from the UI.

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const footerLinks = {
    "Quick Links": [
      { name: "About Me", href: "#about" },
      { name: "Projects", href: "#projects" },
      { name: "My Skills", href: "#skills" },
      // Removed "Contact Me" link per user request.
    ],
    Services: [
      { name: "Brand Identity", href: "#" },
      { name: "Web Design", href: "#" },
      { name: "UI/UX Design", href: "#" },
      { name: "Print Design", href: "#" },
    ],
  } as const;

  return (
    <footer className="relative overflow-hidden bg-slate-950 text-slate-300">
      {/* Aurora + grid background (Subtler dark theme) */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        {/* Subtle grid */}
        <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        {/* Aurora blobs - use subtle colors */}
        <div className="absolute -top-40 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-indigo-500/10 blur-[100px]"></div>
        <div className="absolute -bottom-32 -right-16 h-[24rem] w-[24rem] rounded-full bg-fuchsia-500/10 blur-[120px]"></div>
      </div>

      <div className="container relative mx-auto px-6 pt-20 pb-10">
        {/* Floating back-to-top */}
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="group absolute left-1/2 top-0 -translate-y-1/2 -translate-x-1/2 rounded-full border border-white/15 bg-white/10 p-3 text-white shadow-xl backdrop-blur transition hover:bg-white/20 focus:outline-none focus:ring-4 focus:ring-cyan-400/30"
        >
          <ArrowUpIcon className="transition group-hover:-translate-y-0.5" />
        </button>

        {/* Top row: Brand + badge */}
        <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white">
            <span className="text-cyan-400">MOBARAK</span> <span className="text-white">HOSSAIN JOY</span>
          </h2>
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-900/40 px-3 py-1 text-xs font-medium text-emerald-300 backdrop-blur">
            <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-emerald-300" />
            Available for freelance
          </span>
        </div>

        {/* Tagline */}
        <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-400">
          Crafting digital experiences that are beautiful, intuitive, and effective.
        </p>

        {/* Main grid - Adjusted to 3 columns */}
        <div className="mt-14 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">

          {/* New Contact/Email Callout Block */}
          <div className="lg:col-span-1">
            <h3 className="mb-5 font-semibold uppercase tracking-wider text-white">Get In Touch</h3>
            <p className="text-sm text-slate-400 mb-4">
              Have a project idea? Let's talk about how we can build something amazing together.
            </p>
            <a
              href="mailto:mobarakhossainjoy045@gmail.com"
              className="inline-block text-lg font-bold text-cyan-400 transition hover:text-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-300/60"
            >
              mobarakhossainjoy045@gmail.com
            </a>
          </div>


          {/* Links 1 (Quick Links) and Services (Links 2) */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="lg:col-span-1">
              <h3 className="mb-5 font-semibold uppercase tracking-wider text-white">{title}</h3>
              <ul className="space-y-3">
                {links.map((l) => (
                  <li key={l.name} className="group">
                    <a
                      href={l.href}
                      className="relative inline-flex items-center text-sm text-slate-400 transition-colors duration-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-300/60"
                    >
                      <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-cyan-400/40 transition-transform duration-300 group-hover:scale-150 group-hover:bg-cyan-400" />
                      {l.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          {/* Newsletter section removed */}

        </div>

        {/* Bottom bar (Copyright and Policy) */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <div className="flex items-center gap-1.5 text-sm text-slate-400">
            <span>© {new Date().getFullYear()} PRISM CREATIV. Designed with</span>
            <HeartIcon />
            <span>Mobarak Hossain Joy.</span>
          </div>
          <div className="flex items-center gap-5 text-sm">
            <a href="#" className="text-slate-400 transition hover:text-white">Privacy Policy</a>
            <span className="text-white/30">•</span>
            <a href="#" className="text-slate-400 transition hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
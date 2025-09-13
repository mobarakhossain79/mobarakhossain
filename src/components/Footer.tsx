import { useState } from "react";

// ---------- Inline SVG icons ----------
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

const SocialIcon = ({ href, label, children }: { href: string; label: string; children: React.ReactNode }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="group inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-200 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-300/60 backdrop-blur"
  >
    <span className="sr-only">{label}</span>
    {children}
  </a>
);

// ---------- Footer ----------
const Footer = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setStatus("error");
      return;
    }
    // Hook your newsletter API here
    setStatus("success");
    setEmail("");
    setTimeout(() => setStatus("idle"), 4000);
  };

  const footerLinks = {
    "Quick Links": [
      { name: "About Me", href: "#about" },
      { name: "Projects", href: "#projects" },
      { name: "My Skills", href: "#skills" },
      { name: "Contact Me", href: "#contact" },
    ],
    Services: [
      { name: "Brand Identity", href: "#" },
      { name: "Web Design", href: "#" },
      { name: "UI/UX Design", href: "#" },
      { name: "Print Design", href: "#" },
    ],
  } as const;

  return (
    <footer className="relative overflow-hidden bg-[#22377D] text-slate-300">
      {/* Aurora + grid background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        {/* Subtle grid */}
        <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:28px_28px]"></div>
        {/* Aurora blobs */}
        <div className="absolute -top-40 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-gradient-to-tr from-sky-400/25 via-indigo-400/25 to-fuchsia-400/25 blur-3xl"></div>
        <div className="absolute -bottom-32 -right-16 h-[24rem] w-[24rem] rounded-full bg-gradient-to-tr from-cyan-300/25 to-violet-400/25 blur-3xl"></div>
        <div className="absolute -bottom-24 -left-16 h-[18rem] w-[18rem] rounded-full bg-gradient-to-tr from-teal-300/20 to-sky-400/20 blur-3xl"></div>
      </div>

      <div className="container relative mx-auto px-6 pt-20 pb-10">
        {/* Floating back-to-top */}
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="group absolute left-1/2 top-0 -translate-y-1/2 -translate-x-1/2 rounded-full border border-white/15 bg-white/10 p-3 text-white backdrop-blur transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-300/60"
        >
          <ArrowUpIcon className="transition group-hover:-translate-y-0.5" />
        </button>

        {/* Top row: Brand + badge */}
        <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-2xl font-extrabold tracking-tight text-white">
            <span className="text-white">MOBARAK</span> <span className="text-white">HOSSAIN JOY</span>
          </h2>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200 backdrop-blur">
            <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-emerald-300" />
            Available for freelance
          </span>
        </div>

        {/* Tagline */}
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-200/90">
          Crafting digital experiences that are beautiful, intuitive, and effective.
        </p>

        {/* Main grid */}
        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Social / Brand card */}
          <div className="flex gap-3">
  {/* Facebook */}
  <SocialIcon href="https://www.facebook.com/mobarakhossain890/" label="Facebook">
    <svg role="img" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
      <title>Facebook</title>
      <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08V12.1h3.05V9.41c0-3 1.8-4.66 4.55-4.66 1.32 0 2.69.24 2.69.24v2.96h-1.52c-1.5 0-1.97.93-1.97 1.88v2.27h3.35l-.54 3.46h-2.81V24C19.61 23.1 24 18.1 24 12.07z"/>
    </svg>
  </SocialIcon>

  {/* LinkedIn */}
  <SocialIcon href="https://www.linkedin.com/in/mobarakjoy/" label="LinkedIn">
    <svg role="img" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
      <title>LinkedIn</title>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
    </svg>
  </SocialIcon>


  {/* Behance */}
  <SocialIcon href="https://www.behance.net/mobarakjoy890" label="Behance">
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
      <title>Behance</title>
      <path d="M15.75 7.5h3v1h-3v-1zm-9.9.02h3.41c1.52 0 2.67.38 2.67 1.93 0 .83-.4 1.39-1.16 1.67.95.23 1.48.92 1.48 1.93 0 1.77-1.36 2.38-2.98 2.38H5.85V7.52zm2.34 3.07H9.1c.63 0 1.12-.25 1.12-.91s-.48-.86-1.13-.86H8.19v1.77zm0 3.53h.89c.83 0 1.4-.24 1.4-1.03 0-.79-.56-1.03-1.42-1.03h-.87v2.06zM17.9 12.6c0 .73.47 1.17 1.16 1.17.73 0 1.07-.42 1.23-.96h1.56c-.27 1.48-1.43 2.2-2.83 2.2-1.9 0-3.14-1.29-3.14-3.18 0-1.88 1.31-3.2 3.16-3.2 2.03 0 3.1 1.42 3.1 3.47v.5H17.9zm2.42-1.16c-.04-.6-.46-1.1-1.12-1.1-.68 0-1.1.46-1.17 1.1h2.29z"/>
    </svg>
  </SocialIcon>
</div>


          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="mb-5 font-semibold uppercase tracking-wider text-white">{title}</h3>
              <ul className="space-y-3">
                {links.map((l) => (
                  <li key={l.name} className="group">
                    <a
                      href={l.href}
                      className="relative inline-flex items-center text-sm text-slate-200/90 transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-300/60"
                    >
                      <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-white/40 transition group-hover:bg-white" />
                      {l.name}
                      <span className="absolute -bottom-1 left-4 h-px w-0 bg-white/60 transition-all duration-300 group-hover:w-[calc(100%-1rem)]" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter (glassy card) */}
          <div>
            <h3 className="mb-5 font-semibold uppercase tracking-wider text-white">Join My Newsletter</h3>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
              <p className="mb-4 text-sm text-slate-100/90">
                Get updates on new projects and design insights.
              </p>
              <form onSubmit={submit} className="flex flex-col gap-2 sm:flex-row">
                <label htmlFor="email" className="sr-only">Email</label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full rounded-md border border-white/15 bg-white/95 px-3 py-2 text-sm text-slate-900 placeholder-slate-500 shadow-sm outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-300/60"
                  required
                />
                <button
                  type="submit"
                  className="whitespace-nowrap rounded-md bg-gradient-to-tr from-cyan-300 to-sky-500 px-4 py-2 text-sm font-semibold text-slate-900 shadow transition hover:brightness-[1.05] focus:outline-none focus:ring-2 focus:ring-cyan-300/60"
                >
                  Subscribe
                </button>
              </form>
              {status === "success" && (
                <p className="mt-2 text-xs text-emerald-200/90">Thanks! You’re on the list.</p>
              )}
              {status === "error" && (
                <p className="mt-2 text-xs text-rose-200/90">Please enter a valid email address.</p>
              )}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <div className="flex items-center gap-1.5 text-sm text-slate-100">
            <span>© {new Date().getFullYear()} PRISM CREATIV. Made with</span>
            <HeartIcon />
            <span>Mobarak Hossain Joy.</span>
          </div>
          <div className="flex items-center gap-5 text-sm">
            <a href="#" className="text-slate-300 transition hover:text-white">Privacy Policy</a>
            <span className="text-white/30">•</span>
            <a href="#" className="text-slate-300 transition hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

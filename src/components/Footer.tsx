

// Using inline SVGs for icons to keep it all in one file
const HeartIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-4 w-4 text-red-500"
  >
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
  </svg>
);

const ArrowUpIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-5 w-5"
  >
    <line x1="12" y1="19" x2="12" y2="5"></line>
    <polyline points="5 12 12 5 19 12"></polyline>
  </svg>
);

const SocialIcon = ({ href, children }) => (
    <a href={href} className="text-gray-400 hover:text-white transition-colors duration-300">
        {children}
    </a>
);

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    'Quick Links': [
      { name: 'About Me', href: '#about' },
      { name: 'Projects', href: '#projects' },
      { name: 'My Skills', href: '#skills' },
      { name: 'Contact Me', href: '#contact' },
    ],
    'Services': [
      { name: 'Brand Identity', href: '#' },
      { name: 'Web Design', href: '#' },
      { name: 'UI/UX Design', href: '#' },
      { name: 'Print Design', href: '#' },
    ],
  };
  
  // Placeholder social media icons
  const socialLinks = [
    
    
    { name: 'LinkedIn', href: '#', icon: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-current"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/></svg> },
  ];

  return (
    <footer className="bg-[#263D88] text-gray-600 font-sans">
      <div className="container mx-auto px-6 pt-16 pb-8">
        {/* Scroll to top button */}
        <div className="relative -mt-24 flex justify-center">
            <button
                onClick={scrollToTop}
                className="bg-purple-600 hover:bg-purple-700 text-white rounded-full p-3 shadow-lg transform hover:-translate-y-1 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                aria-label="Scroll to top"
            >
                <ArrowUpIcon />
            </button>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mt-12">
          {/* Brand & Social Section */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold text-white mb-4">
              <span className="text-white">PRISM</span> <b>CREATIVE</b>
            </h2>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Crafting digital experiences that are beautiful, intuitive, and effective.
            </p>
            <div className="flex space-x-4">
                {socialLinks.map(link => (
                    <SocialIcon key={link.name} href={link.href}>
                        {link.icon}
                    </SocialIcon>
                ))}
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-bold text-white tracking-wider uppercase mb-5">{title}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-purple-400 transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter Subscription */}
          <div>
            <h3 className="font-bold text-white tracking-wider uppercase mb-5">Join My Newsletter</h3>
            <p className="text-sm text-gray-200 mb-4">Get updates on new projects and design insights.</p>
            <form>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder=""
                  className="w-full bg-white border border-gray-700 rounded-md py-2 px-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
                />
                <button type="submit" className="bg-[#45C7F0] text-black text-sm font-semibold rounded-md px-4 py-2 hover:bg-[#8cd5eb] focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-300 whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center space-x-1.5 text-sm text-white text-center sm:text-left">
            <span>© {new Date().getFullYear()} PRISM CREATIV. Made with</span>
            <HeartIcon />
            <span>Moarak Hossain Joy.</span>
          </div>
          <div className="flex space-x-6 mt-4 sm:mt-0 text-sm">
            <a href="#" className="text-gray-500 hover:text-white transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors duration-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

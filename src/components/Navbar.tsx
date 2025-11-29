import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Button = ({ className, children, ...props }) => (
  <button className={className} {...props}>
    {children}
  </button>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      const sections = ['hero', 'about', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
      setActiveSection(sectionId);
    }
  };

  const navItems = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Projects', id: 'projects' },
    { label: 'Skills', id: 'skills' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'glass py-3 backdrop-blur-xl border-b border-primary/10 text-gray-900'
          : 'bg-transparent py-6 text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <div
            className="flex items-center space-x-2 group cursor-pointer"
            onClick={() => scrollToSection('hero')}
          >
            <div className="relative">
              <div className="flex items-center space-x-3">
                <img
                  src="/Me.JPG"
                  alt="Mobarak Hossain Joy"
                  className="h-12 w-12 rounded-full object-cover shadow-sm"
                />
                <div className="text-2xl font-bold">Mobarak Hossain Joy</div>
              </div>
              <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-all duration-300" />
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-4 py-2 rounded-lg transition-all duration-300 font-medium group ${
                  activeSection === item.id
                    ? 'text-primary bg-primary/10'
                    : 'hover:text-primary hover:bg-primary/5'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="relative z-10">{item.label}</span>

                {activeSection === item.id && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full" />
                )}

                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 glass-card rounded-lg p-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-foreground hover:text-primary transition-colors duration-200 font-medium py-2"
                >
                  {item.label}
                </button>
              ))}

              <Button
                onClick={() => scrollToSection('contact')}
                className="gradient-primary shadow-primary mt-4"
              >
                Let's Talk
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

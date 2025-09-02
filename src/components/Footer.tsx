import { Heart, ArrowUp } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const footerLinks = {
    Services: [
      { name: 'Brand Identity', href: '#' },
      { name: 'Web Design', href: '#' },
      { name: 'Print Design', href: '#' },
      { name: 'UI/UX Design', href: '#' },
    ],
    Company: [
      { name: 'About', href: '#about' },
      { name: 'Projects', href: '#projects' },
      { name: 'Skills', href: '#skills' },
      { name: 'Contact', href: '#contact' },
    ],
    Resources: [
      { name: 'Blog', href: '#' },
      { name: 'Portfolio', href: '#' },
      { name: 'Testimonials', href: '#' },
      { name: 'FAQ', href: '#' },
    ]
  }

  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="text-2xl font-bold gradient-primary bg-clip-text text-transparent mb-4">
              Portfolio
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Creating exceptional design experiences that inspire, engage, and deliver results for businesses and individuals worldwide.
            </p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div>📧 hello@johndesigner.com</div>
              <div>📱 +1 (555) 123-4567</div>
              <div>📍 Creative City, CC 12345</div>
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-semibold mb-4">{title}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-border py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-1 text-sm text-muted-foreground">
              <span>© 2024 Portfolio. Made with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>by John Designer</span>
            </div>

            <div className="flex items-center space-x-6">
              <a 
                href="#" 
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a 
                href="#" 
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                Terms of Service
              </a>
              <Button
                variant="ghost"
                size="sm"
                onClick={scrollToTop}
                className="p-2 hover:bg-primary/10"
              >
                <ArrowUp className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
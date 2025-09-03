import { ArrowDown, Download, Eye } from 'lucide-react'
import { Button } from '@/components/ui/button'
import heroBg from '@/assets/hero-bg.jpg'

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section 
      id="hero" 
      className="min-h-screen relative flex items-center justify-center bg-black text-white"
    >
      {/* Background */}
      <img src={heroBg} alt="Hero Background" className="absolute inset-0 w-full h-full object-cover opacity-100" />

      {/* Content */}
      <div className="relative z-10 text-center space-y-6">
        <span className="bg-white/10 text-white px-4 py-1 rounded-full text-sm">
          Available for New Projects
        </span>

        <h1 className="text-5xl sm:text-7xl font-bold">Creative Designer</h1>
        <p className="text-lg sm:text-xl text-gray-200">
          Turning ideas into <span className="text-primary">beautiful designs</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
          <Button onClick={scrollToProjects} className="bg-white text-black hover:bg-secondary/10 hover:text-white transition-all duration-300">
            <Eye className="mr-2 h-5 w-5" /> Explore My Work
          </Button>
          <Button variant="outline" className="border-white text-black">
            <Download className="mr-2 h-5 w-5" /> Get My Resume
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Hero

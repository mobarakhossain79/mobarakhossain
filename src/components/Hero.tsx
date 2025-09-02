import { ArrowDown, Download, Eye, Sparkles, Stars } from 'lucide-react'
import { Button } from '@/components/ui/button'
import heroBg from '@/assets/hero-bg.jpg'

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="min-h-screen relative flex items-center justify-center overflow-hidden ">
      {/* Backgrougnd */}
      <div className="absolute inset-0">
        <img 
          src={heroBg} 
          alt="Creative workspace background" 
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />
        <div className="absolute inset-0 backdrop-blur-[2px]" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-24 h-24 rounded-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md animate-float opacity-50 flex items-center justify-center">
        <Sparkles className="w-6 h-6 text-white/70" />
      </div>
      <div className="absolute bottom-28 right-12 w-20 h-20 rounded-xl bg-gradient-to-tr from-white/10 to-white/5 backdrop-blur-md animate-float opacity-40 flex items-center justify-center">
        <Stars className="w-5 h-5 text-white/70" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-10">
        
        {/* Tagline */}
        <div>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-white/10 text-white backdrop-blur-md border border-white/20">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
            Available for New Projects
          </span>
        </div>

        {/* Title */}
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold text-white tracking-tight leading-tight">
          Creative Designer
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl lg:text-2xl text-destructive max-w-3xl mx-auto leading-relaxed">
          Transforming ideas into 
          <span className="font-semibold text-white"> stunning visual experiences </span>
          that captivate and inspire audiences worldwide.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button 
            onClick={scrollToProjects}
            size="lg" 
            className="bg-white text-black font-semibold px-8 py-6 rounded-xl hover:bg-gray-200 transition-all duration-300 group"
          >
            <Eye className="mr-2 h-6 w-6 group-hover:scale-110 transition-transform" />
            Explore My Work
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border border-white/40 text-Primary hover:bg-white/ backdrop-blur-md px-8 py-6 rounded-xl transition-all duration-300 group"
          >
            <Download className="mr-2 h-6 w-6 group-hover:scale-110 transition-transform" />
            Get My Resume
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-10 glass rounded-2xl p-6 backdrop-blur-md border border-white/20 max-w-2xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-white">50+</div>
              <div className="text-sm text-gray-300">Projects Completed</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">5+</div>
              <div className="text-sm text-gray-300">Years Experience</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">100%</div>
              <div className="text-sm text-gray-300">Client Satisfaction</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute  right-0 transform  animate-bounce">
          <button 
            onClick={scrollToProjects}
            className="rounded-full p-4 border border-white/30 bg-white/10 hover:bg-white/20 transition-all duration-300"
            aria-label="Scroll to projects section"
          >
            <ArrowDown className="h-6 w-6 text-white" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero

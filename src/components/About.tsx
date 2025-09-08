import { Award, Heart, Users, Zap, Palette, Target, Coffee, Lightbulb } from 'lucide-react'
import { Card } from '@/components/ui/card'

const About = () => {
  const stats = [
    { icon: Award, label: 'Projects Completed', value: '15+', color: 'from-purple-500 to-pink-500' },
    { icon: Users, label: 'Happy Clients', value: '20+', color: 'from-blue-500 to-cyan-500' },
    { icon: Heart, label: 'Years Experience', value: '1+', color: 'from-green-500 to-emerald-500' },
    { icon: Zap, label: 'Creative Solutions', value: '50+', color: 'from-orange-500 to-red-500' },
  ]

  const values = [
    { icon: Palette, title: 'Creativity First', description: 'Every design tells a unique story' },
    { icon: Target, title: 'Goal Oriented', description: 'Strategic thinking meets beautiful design' },
    { icon: Coffee, title: 'Passionate Work', description: 'Fueled by creativity and great coffee' },
    { icon: Lightbulb, title: 'Innovation', description: 'Always exploring new design possibilities' },
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            About <span className="bg-gradient-to-r from-cyan-400 to-blue-600 text-transparent bg-clip-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate designer with a mission to create visually stunning and meaningful designs
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-8">
            <div className="relative">
              <h3 className="text-3xl font-bold mb-6 relative z-10">My Design Philosophy</h3>
              <div className="absolute -top-2 -left-4 w-20 h-20 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-xl" />
            </div>
            
            <div className="space-y-6">
              <p className="text-muted-foreground text-lg leading-relaxed">
                I believe that great design is more than just aesthetics—it's about solving problems, 
                telling stories, and creating connections. Every project I work on is an opportunity 
                to push creative boundaries while delivering results that exceed expectations.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                With a keen eye for detail and a passion for innovation, I specialize in creating 
                brand identities, digital experiences, and visual communications that resonate with 
                audiences and drive business success.
              </p>
            </div>

            {/* Enhanced Skills List */}
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card p-4 rounded-xl hover-lift group cursor-pointer">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full animate-pulse" />
                  <span className="text-foreground font-medium group-hover:text-primary transition-colors">Brand Identity</span>
                </div>
              </div>
              <div className="glass-card p-4 rounded-xl hover-lift group cursor-pointer">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
                  <span className="text-foreground font-medium group-hover:text-primary transition-colors">UI/UX Design</span>
                </div>
              </div>
              <div className="glass-card p-4 rounded-xl hover-lift group cursor-pointer">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
                  <span className="text-foreground font-medium group-hover:text-primary transition-colors">Print & Digital</span>
                </div>
              </div>
              <div className="glass-card p-4 rounded-xl hover-lift group cursor-pointer">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-full animate-pulse" style={{ animationDelay: '0.6s' }} />
                  <span className="text-foreground font-medium group-hover:text-primary transition-colors">Creative Direction</span>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Profile Card */}
           <div className="relative">
            <div className="glass-card p-8 rounded-3xl hover-lift group">
              <div className="relative mb-8">
                <div className="aspect-square rounded-2xl relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
                  {/* Image has been added here */}
                  <img src="Me.JPG" alt="Mobarak Hossain Joy" className="w-full h-auto object-cover" />
                </div>
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl blur-2xl opacity-50" />
              </div>
              
              <div className="text-center space-y-4">
                <h4 className="text-2xl font-bold">Mobarak Hossain Joy</h4>
                <p className="text-primary font-medium text-lg">Creative Graphic Designer</p>
                <div className="glass p-4 rounded-xl">
                  <p className="text-sm text-muted-foreground italic">
                    "Design is not just what it looks like and feels like. Design is how it works."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center mb-12">What Drives Me</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card 
                key={index} 
                className="glass-card p-6 text-center hover-lift group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative mb-4">
                  <value.icon className="h-8 w-8 text-primary mx-auto group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h4 className="font-bold mb-2 group-hover:text-primary transition-colors">{value.title}</h4>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Enhanced Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card 
              key={index} 
              className="glass-card p-8 text-center hover-lift group cursor-pointer relative overflow-hidden"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
              <div className="relative z-10">
                <div className="relative mb-6">
                  <stat.icon className="h-10 w-10 text-primary mx-auto group-hover:scale-125 transition-transform duration-300" />
                  <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300`} />
                </div>
                <div className="text-3xl font-bold mb-3 group-hover:text-primary transition-colors">{stat.value}</div>
                <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
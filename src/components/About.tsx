import { Award, Heart, Users, Zap } from 'lucide-react'
import { Card } from '@/components/ui/card'

const About = () => {
  const stats = [
    { icon: Award, label: 'Projects Completed', value: '150+' },
    { icon: Users, label: 'Happy Clients', value: '80+' },
    { icon: Heart, label: 'Years Experience', value: '5+' },
    { icon: Zap, label: 'Creative Solutions', value: '200+' },
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            About <span className="gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate designer with a mission to create visually stunning and meaningful designs
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">My Design Philosophy</h3>
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
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span className="text-foreground font-medium">Brand Identity Design</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span className="text-foreground font-medium">UI/UX Design</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span className="text-foreground font-medium">Print & Digital Media</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span className="text-foreground font-medium">Creative Direction</span>
              </div>
            </div>
          </div>

          <div className="glass-card p-8 rounded-2xl">
            <div className="aspect-square bg-gradient-primary rounded-2xl flex items-center justify-center mb-6">
              <div className="text-6xl font-bold text-primary-foreground">JD</div>
            </div>
            <div className="text-center">
              <h4 className="text-xl font-bold mb-2">Mobarak Hossain Joy</h4>
              <p className="text-muted-foreground mb-4">Creative Graphic Designer</p>
              <p className="text-sm text-muted-foreground">
                "Design is not just what it looks like and feels like. Design is how it works."
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="glass-card p-6 text-center hover-lift">
              <stat.icon className="h-8 w-8 text-primary mx-auto mb-4" />
              <div className="text-2xl font-bold mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
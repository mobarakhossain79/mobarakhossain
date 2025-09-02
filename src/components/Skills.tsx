import { Card } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'

const Skills = () => {
  const skillCategories = [
    {
      title: "Design Tools",
      skills: [
        { name: "Adobe Photoshop", level: 95 },
        { name: "Adobe Illustrator", level: 90 },
        { name: "Adobe InDesign", level: 85 },
        { name: "Figma", level: 92 },
        { name: "Sketch", level: 80 },
      ]
    },
    {
      title: "Design Skills",
      skills: [
        { name: "Brand Identity", level: 90 },
        { name: "Typography", level: 88 },
        { name: "Color Theory", level: 85 },
        { name: "Layout Design", level: 92 },
        { name: "User Experience", level: 87 },
      ]
    },
    {
      title: "Technical Skills",
      skills: [
        { name: "HTML/CSS", level: 75 },
        { name: "JavaScript", level: 65 },
        { name: "WordPress", level: 80 },
        { name: "Print Production", level: 85 },
        { name: "Photography", level: 70 },
      ]
    }
  ]

  const expertiseAreas = [
    { 
      title: "Brand Identity", 
      description: "Creating memorable brand experiences",
      icon: "🎨"
    },
    { 
      title: "Web Design", 
      description: "Modern and responsive web interfaces",
      icon: "💻"
    },
    { 
      title: "Print Design", 
      description: "Professional print materials and campaigns",
      icon: "📄"
    },
    { 
      title: "Digital Marketing", 
      description: "Social media and digital advertising graphics",
      icon: "📱"
    },
    { 
      title: "Packaging Design", 
      description: "Creative product packaging solutions",
      icon: "📦"
    },
    { 
      title: "Illustration", 
      description: "Custom illustrations and iconography",
      icon: "✏️"
    }
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Skills & <span className="gradient-primary bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit of design skills and creative expertise
          </p>
        </div>

        {/* Expertise Areas */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {expertiseAreas.map((area, index) => (
            <Card 
              key={index} 
              className="glass-card p-6 hover-lift text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl mb-4">{area.icon}</div>
              <h3 className="text-lg font-bold mb-2">{area.title}</h3>
              <p className="text-sm text-muted-foreground">{area.description}</p>
            </Card>
          ))}
        </div>

        {/* Skills Progress */}
        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card 
              key={categoryIndex} 
              className="glass-card p-6"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <h3 className="text-xl font-bold mb-6 text-center">{category.title}</h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-2 bg-muted"
                    />
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Awards/Certifications */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8">Awards & Recognition</h3>
          <div className="flex flex-wrap justify-center gap-8 text-muted-foreground">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full" />
              <span>Best Design Award 2023</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full" />
              <span>Adobe Certified Expert</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full" />
              <span>Creative Excellence Award</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full" />
              <span>UI/UX Design Certification</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
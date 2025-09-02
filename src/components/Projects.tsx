import { ExternalLink, Github } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Brand Identity Design",
      category: "Branding",
      description: "Complete brand identity system for a tech startup including logo, typography, and brand guidelines.",
      tags: ["Logo Design", "Brand Guidelines", "Typography"],
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 2,
      title: "E-commerce Website UI",
      category: "Web Design",
      description: "Modern and clean e-commerce platform design focused on user experience and conversion optimization.",
      tags: ["UI Design", "UX Research", "Prototyping"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 3,
      title: "Mobile App Interface",
      category: "Mobile Design",
      description: "Intuitive mobile app design for a fitness tracking application with engaging user interactions.",
      tags: ["Mobile UI", "User Experience", "Interaction Design"],
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 4,
      title: "Print Campaign Design",
      category: "Print Design",
      description: "Creative print campaign for a fashion brand including posters, brochures, and packaging design.",
      tags: ["Print Design", "Campaign", "Packaging"],
      color: "from-orange-500 to-red-500"
    },
    {
      id: 5,
      title: "Social Media Graphics",
      category: "Digital Marketing",
      description: "Engaging social media template system for consistent brand presence across all platforms.",
      tags: ["Social Media", "Templates", "Brand Consistency"],
      color: "from-indigo-500 to-purple-500"
    },
    {
      id: 6,
      title: "Corporate Presentation",
      category: "Presentation Design",
      description: "Professional presentation design for corporate clients with clean layouts and data visualization.",
      tags: ["Presentation", "Data Viz", "Corporate"],
      color: "from-teal-500 to-blue-500"
    }
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Featured <span className="gradient-primary bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my creative work across various design disciplines
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.id} 
              className="glass-card hover-lift overflow-hidden group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image Placeholder */}
              <div className={`h-48 bg-gradient-to-r ${project.color} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-lg font-semibold opacity-80">
                    {project.category}
                  </div>
                </div>
                
                {/* Hover Actions */}
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
                    <Github className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="p-6">
                <div className="mb-2">
                  <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-200">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="glass border-primary/20 hover:bg-primary hover:text-primary-foreground"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Projects
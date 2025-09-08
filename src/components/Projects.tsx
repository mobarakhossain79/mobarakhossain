import { useState } from 'react'
import { ExternalLink, Github, Filter, Grid, List } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

  const categories = ['All', 'Branding', 'Web Design', 'Mobile Design', 'Print Design', 'Digital Marketing']
  const projects = [
    {
      id: 1,
      title: "Brand Identity Design",
      category: "Branding",
      description: "Complete brand identity system for a tech startup including logo, typography, and brand guidelines.",
      tags: ["Logo Design", "Brand Guidelines", "Typography"],
      color: "from-purple-500 to-pink-500",
      featured: true,
      year: "2024"
    },
    {
      id: 2,
      title: "E-commerce Website UI",
      category: "Web Design",
      description: "Modern and clean e-commerce platform design focused on user experience and conversion optimization.",
      tags: ["UI Design", "UX Research", "Prototyping"],
      color: "from-blue-500 to-cyan-500",
      featured: true,
      year: "2024"
    },
    {
      id: 3,
      title: "Mobile App Interface",
      category: "Mobile Design",
      description: "Intuitive mobile app design for a fitness tracking application with engaging user interactions.",
      tags: ["Mobile UI", "User Experience", "Interaction Design"],
      color: "from-green-500 to-emerald-500",
      featured: false,
      year: "2023"
    },
    {
      id: 4,
      title: "Print Campaign Design",
      category: "Print Design",
      description: "Creative print campaign for a fashion brand including posters, brochures, and packaging design.",
      tags: ["Print Design", "Campaign", "Packaging"],
      color: "from-orange-500 to-red-500",
      featured: true,
      year: "2023"
    },
    {
      id: 5,
      title: "Social Media Graphics",
      category: "Digital Marketing",
      description: "Engaging social media template system for consistent brand presence across all platforms.",
      tags: ["Social Media", "Templates", "Brand Consistency"],
      color: "from-indigo-500 to-purple-500",
      featured: false,
      year: "2024"
    },
    {
      id: 6,
      title: "Corporate Presentation",
      category: "Digital Marketing",
      description: "Professional presentation design for corporate clients with clean layouts and data visualization.",
      tags: ["Presentation", "Data Viz", "Corporate"],
      color: "from-teal-500 to-blue-500",
      featured: false,
      year: "2023"
    }
  ]

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

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

        {/* Enhanced Filter & View Controls */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 mb-12">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeFilter === category ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveFilter(category)}
                className={`transition-all duration-300 ${
                  activeFilter === category 
                    ? 'gradient-primary shadow-primary' 
                    : 'glass border-primary/20 hover:bg-primary/10'
                }`}
              >
                <Filter className="mr-2 h-4 w-4" />
                {category}
              </Button>
            ))}
          </div>
          
          <div className="flex items-center space-x-2">
            <Button
              variant={viewMode === 'grid' ? "default" : "outline"}
              size="sm"
              onClick={() => setViewMode('grid')}
              className="glass"
            >
              <Grid className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === 'list' ? "default" : "outline"}
              size="sm"
              onClick={() => setViewMode('list')}
              className="glass"
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className={`grid gap-8 ${
          viewMode === 'grid' 
            ? 'md:grid-cols-2 lg:grid-cols-3' 
            : 'grid-cols-1 max-w-4xl mx-auto'
        }`}>
          {filteredProjects.map((project, index) => (
            <Card 
              key={project.id} 
              className={`glass-card hover-lift overflow-hidden group cursor-pointer transform transition-all duration-500 ${
                viewMode === 'list' ? 'flex' : ''
              }`}
              style={{ 
                animationDelay: `${index * 0.1}s`,
                transform: `translateY(${index % 2 === 0 ? '0' : '20px'})` 
              }}
            >
              {/* Enhanced Project Image */}
              <div className={`${viewMode === 'list' ? 'w-1/3' : 'h-64'} bg-gradient-to-r ${project.color} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-500" />
                
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs px-3 py-1 rounded-full font-medium">
                    Featured
                  </div>
                )}
                
                {/* Year Badge */}
                <div className="absolute bottom-4 left-4 glass text-white text-sm px-3 py-1 rounded-lg font-medium">
                  {project.year}
                </div>
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-lg font-semibold opacity-80 group-hover:scale-110 transition-transform duration-300">
                    {project.category}
                  </div>
                </div>
                
                {/* Enhanced Hover Actions */}
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <Button size="sm" className="h-9 w-9 p-0 glass hover:bg-primary hover:text-primary-foreground group/btn">
                    <ExternalLink className="h-4 w-4 group-hover/btn:rotate-12 transition-transform duration-300" />
                  </Button>
                  <Button size="sm" className="h-9 w-9 p-0 glass hover:bg-primary hover:text-primary-foreground group/btn">
                    <Github className="h-4 w-4 group-hover/btn:scale-110 transition-transform duration-300" />
                  </Button>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-10 -right-10 w-20 h-20 bg-white/10 rounded-full blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute -bottom-5 -left-5 w-15 h-15 bg-white/5 rounded-full blur-lg opacity-30 group-hover:opacity-60 transition-opacity duration-500" />
              </div>

              <div className={`${viewMode === 'list' ? 'w-2/3' : ''} p-6 flex flex-col justify-between`}>
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="text-xs font-medium bg-gradient-to-r from-yellow-400/20 to-orange-500/20 text-yellow-600 px-2 py-1 rounded-full">
                        ⭐ Featured
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="text-xs glass text-muted-foreground px-3 py-1 rounded-lg hover:bg-primary/10 hover:text-primary transition-colors duration-200 cursor-pointer"
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
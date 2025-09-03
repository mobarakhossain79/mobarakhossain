import React from 'react';

const Card = ({ children, className, ...props }) => (
  <div className={`bg-white/80 backdrop-blur-sm border border-slate-200/80 rounded-xl overflow-hidden shadow-lg ${className}`} {...props}>
    {children}
  </div>
);

// A simple Button component base
const Button = ({ children, className, ...props }) => (
  <button className={`inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background ${className}`} {...props}>
    {children}
  </button>
);

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Brand Identity Design",
      category: "Branding",
      description: "Complete brand identity system for a tech startup including logo, typography, and brand guidelines.",
      tags: ["Logo Design", "Brand Guidelines", "Typography"],
      imageUrl: 'https://placehold.co/600x400/A78BFA/FFFFFF?text=Branding',
    },
    {
      id: 2,
      title: "Primary School Website UI",
      category: "Web Design",
      description: "Modern and clean Primary School Website platform design focused on user experience and conversion optimization.",
      tags: ["UI Design", "UX Research", "Prototyping"],
      imageUrl: 'https://placehold.co/600x400/60A5FA/FFFFFF?text=Web+Design',
    },
    {
      id: 3,
      title: "Mobile App Interface",
      category: "Mobile Design",
      description: "Intuitive mobile app design for a fitness tracking application with engaging user interactions.",
      tags: ["Mobile UI", "User Experience", "Interaction Design"],
      imageUrl: 'https://placehold.co/600x400/34D399/FFFFFF?text=Mobile+App',
    },
    {
      id: 4,
      title: "Print Campaign Design",
      category: "Print Design",
      description: "Creative print campaign for a fashion brand including posters, brochures, and packaging design.",
      tags: ["Print Design", "Campaign", "Packaging"],
      imageUrl: 'https://placehold.co/600x400/F87171/FFFFFF?text=Print+Campaign',
    },
    {
      id: 5,
      title: "Social Media Graphics",
      category: "Digital Marketing",
      description: "Engaging social media template system for consistent brand presence across all platforms.",
      tags: ["Social Media", "Templates", "Brand Consistency"],
      imageUrl: 'https://placehold.co/600x400/818CF8/FFFFFF?text=Social+Media',
    },
    {
      id: 6,
      title: "Corporate Presentation",
      category: "Presentation Design",
      description: "Professional presentation design for corporate clients with clean layouts and data visualization.",
      tags: ["Presentation", "Data Viz", "Corporate"],
      imageUrl: 'https://placehold.co/600x400/2DD4BF/FFFFFF?text=Presentation',
    }
  ];

  return (
    <section id="projects" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 text-slate-900 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            Featured <span style={{'--primary': '#45C7F0', '--secondary': '#263D88'}} className="bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-slate-800 max-w-3xl mx-auto">
            Here's a selection of my work that showcases my skills in creating elegant and effective digital experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
              <Card 
                key={project.id} 
                className="group transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#263D88]/20"
                style={{ animation: `fadeInUp 0.5s ease-out ${index * 0.1}s forwards`, opacity: 0 }}
              >
                <div className="relative overflow-hidden rounded-t-xl">
                  <img src={project.imageUrl} alt={project.title} className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-110"/>
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-300"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-slate-900 group-hover:text-[#263D88] transition-colors duration-200">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="text-xs bg-slate-200/80 text-slate-700 px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            )
          )}
        </div>

        <div className="text-center mt-20">
          <Button 
            size="lg"
            className="bg-transparent border-2 border-[#263D88] text-[#263D88] px-8 py-3 rounded-full font-semibold hover:bg-[#263D88] hover:text-white transition-all duration-300 transform hover:scale-105"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  )
}


// --- Main App Component ---
// This is the root component that renders our Projects section.
export default function App() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;800&display=swap');
        body {
          font-family: 'Inter', sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
      <div className="bg-slate-100">
        <Projects />
      </div>
    </>
  )
}



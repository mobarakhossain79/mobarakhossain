import React, { useState } from "react";
import { motion } from "framer-motion";
import { Grid, List, Zap } from 'lucide-react';

// --- Mock UI Components (Dependencies) ---
const Button = ({ children, className, ...props }) => (
  <button className={`inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${className}`} {...props}>
    {children}
  </button>
);

const Card = ({ children, className, ...props }) => (
  <div className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className}`} {...props}>
    {children}
  </div>
);
// --------------------------------------------------


// --- Projects Section Component ---
const Projects = () => {
  const [viewMode, setViewMode] = useState('grid');

  // Updated array with projects 15 and 16 removed. The array now contains 14 projects.
  const allProjects = [
  {
    id: 1,
    title: "Brand Identity Design",
    category: "Branding",
    description: "Complete brand identity system for a tech startup including logo, typography, and brand guidelines.",
    tags: ["Logo Design", "Brand Guidelines", "Typography"],
    color: "from-purple-500 to-pink-500",
    featured: true,
    year: "2024",
    image: "1.jpeg",
    link: "https://www.behance.net/gallery/163359893/Brand-Identity"
  },
  {
    id: 2,
    title: "Primary School Website UI",
    category: "Web Design",
    description: "Modern and clean e-commerce platform design focused on user experience and conversion optimization.",
    tags: ["UI Design", "UX Research", "Prototyping"],
    color: "from-blue-500 to-cyan-500",
    featured: true,
    year: "2025",
    image: "2.jpeg",
    link: "https://www.behance.net/gallery/232702915/Smart-Modern-School-Website-UI-Design"
  },
  {
    id: 3,
    title: "Trip24 Admin Panel Dashboard UI",
    category: "Admin Panel Dashboard UI Design",
    description: "Trip24 Admin Panel Dashboard UI/UX Design for a Track booking platform with data visualization and user management features.",
    tags: ["Desktop UI", "User Experience", "Interaction Design"],
    color: "from-green-500 to-emerald-500",
    featured: false,
    year: "2025",
    image: "3.jpeg",
    link: "https://www.behance.net/gallery/231695663/E-Learning-Landing-Page-Design"
  },
  {
    id: 4,
    title: "Dhaka Marathon Event Design",
    category: "Print Design",
    description: "Creative print campaign for a Dhaka Marathon Event including posters, brochures, and packaging design.",
    tags: ["Print Design", "Campaign", "Packaging"],
    color: "from-orange-500 to-red-500",
    featured: true,
    year: "2024",
    image: "4.jpg",
    link: "https://www.behance.net/gallery/203215647/Dhaka-Marathon-2024"
  },
  {
    id: 5,
    title: "Social Media Graphics",
    category: "Digital Marketing",
    description: "Engaging social media template system for consistent brand presence across all platforms.",
    tags: ["Social Media", "Templates", "Brand Consistency"],
    color: "from-indigo-500 to-purple-500",
    featured: false,
    year: "2024",
    image: "5.jpg",
    link: "https://www.behance.net/gallery/233086355/Social-Media-Poster-Design"
  },
  {
    id: 6,
    title: "e Commerce clothing store",
    category: "Web Design",
    description: "The landing page for Unique is a modern, fashion-forward eCommerce interface designed.",
    tags: ["Landing Page", "Data Viz", "Corporate"],
    color: "from-teal-500 to-blue-500",
    featured: false,
    year: "2023",
    image: "6.jpeg",
    link: "https://www.behance.net/gallery/231684285/eCommerce-clothing-store"
  },
  {
    id: 7,
    title: "EduLearn Mobile App",
    category: "Mobile App Development",
    description: "Full stack design and prototyping for a gamified educational mobile application for K-12 students.",
    tags: ["iOS/Android", "Figma", "Gamification", "UX/UI"],
    color: "from-red-600 to-yellow-500",
    featured: true,
    year: "2025",
    image: "7.png",
    link: "https://www.behance.net/gallery/123456789/EduLearn-Mobile-App"
  },
  {
    id: 8,
    title: "Financial Analysis Dashboard",
    category: "Data Visualization",
    description: "Designed a complex dashboard for enterprise clients to track financial KPIs and market trends in real-time.",
    tags: ["Data Viz", "React", "D3.js", "Analytics"],
    color: "from-pink-500 to-red-500",
    featured: true,
    year: "2024",
    image: "8.jpg",
    link: "https://www.behance.net/gallery/987654321/Financial-Dashboard"
  },
  {
    id: 9,
    title: "Non-Fiction E-book Cover",
    category: "Book Cover Design",
    description: "Created a minimalist and professional cover design for a business strategy e-book.",
    tags: ["Print", "Typography", "Illustrator"],
    color: "from-gray-700 to-gray-900",
    featured: false,
    year: "2023",
    image: "9.png",
    link: "https://www.behance.net/gallery/112233445/Ebook-Cover"
  },
  {
    id: 10,
    title: "SaaS Marketing Website",
    category: "Landing Page",
    description: "High-conversion marketing website built for a new B2B cloud collaboration service.",
    tags: ["Webflow", "SEO", "Copywriting", "Responsive"],
    color: "from-teal-500 to-green-500",
    featured: false,
    year: "2024",
    image: "10.jpeg",
    link: "https://www.behance.net/gallery/556677889/SaaS-Landing-Page"
  },
  // --- Project 11, 12, 13, and 14 remain ---
  {
    id: 11,
    title: "E-commerce Checkout Flow Redesign",
    category: "UX/UI Design",
    description: "Optimized a complex e-commerce checkout process, resulting in a 15% reduction in cart abandonment.",
    tags: ["UX Audit", "A/B Testing", "Mobile First", "Wireframing"],
    color: "from-sky-400 to-indigo-600",
    featured: true, // Displayed in the featured section
    year: "2025",
    image: "11.png",
    link: "https://www.behance.net/gallery/111111111/Checkout-Redesign"
  },
  {
    id: 12,
    title: "Minimalist Portfolio Template",
    category: "Web Development",
    description: "A fast, headless CMS-driven portfolio template focusing on load speed and accessibility.",
    tags: ["React", "Tailwind", "Next.js", "Accessibility"],
    color: "from-gray-500 to-slate-700",
    featured: false,
    year: "2024",
    image: "12.jpg",
    link: "https://www.behance.net/gallery/222222222/Portfolio-Template"
  },
  {
    id: 13,
    title: "Global Logistics Platform",
    category: "SaaS Product Design",
    description: "Comprehensive platform to manage global shipping, tracking, and customs documentation for enterprise logistics.",
    tags: ["Enterprise UI", "Information Architecture", "Figma", "System Design"],
    color: "from-amber-500 to-orange-500",
    featured: true, // Displayed in the featured section
    year: "2024",
    image: "13.jpeg",
    link: "https://www.behance.net/gallery/333333333/Logistics-Platform"
  },
  {
    id: 14,
    title: "Vintage Poster Series",
    category: "Graphic Design",
    description: "A series of print posters inspired by mid-century modern design and travel campaigns.",
    tags: ["Illustration", "Print", "Typography", "Adobe Illustrator"],
    color: "from-fuchsia-500 to-purple-500",
    featured: false,
    year: "2023",
    image: "14.jpg",
    link: "https://www.behance.net/gallery/444444444/Poster-Series"
  }
];

  // Filter for featured projects and explicitly limit the result to the first 6 projects
  const featuredProjects = allProjects.filter(project => project.featured).slice(0, 6);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-12 relative z-10 text-slate-300 bg-[#030014] min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white">
            Featured <span className="bg-gradient-to-r from-cyan-400 to-blue-600 text-transparent bg-clip-text">Projects</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            A showcase of my creative work across various design disciplines
          </p>
        </div>

        {/* View Controls */}
        <div className="flex justify-end items-center mb-12">
          <div className="flex items-center space-x-1 p-1 bg-slate-900 border border-slate-700 rounded-lg shadow-inner">
            <Button
              variant={viewMode === 'grid' ? "default" : "outline"}
              size="sm"
              onClick={() => setViewMode('grid')}
              aria-label="Grid View"
              className={`p-2 rounded-lg transition-all duration-300 ${
                viewMode === 'grid'
                  ? 'bg-cyan-500 text-slate-900 shadow-lg shadow-cyan-500/30'
                  : 'bg-transparent border-none text-slate-300 hover:bg-slate-700/50 hover:text-cyan-400'
              }`}
            >
              <Grid className="h-5 w-5" />
            </Button>
            <Button
              variant={viewMode === 'list' ? "default" : "outline"}
              size="sm"
              onClick={() => setViewMode('list')}
              aria-label="List View"
              className={`p-2 rounded-lg transition-all duration-300 ${
                viewMode === 'list'
                  ? 'bg-cyan-500 text-slate-900 shadow-lg shadow-cyan-500/30'
                  : 'bg-transparent border-none text-slate-300 hover:bg-slate-700/50 hover:text-cyan-400'
              }`}
            >
              <List className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={`grid gap-8 ${
          viewMode === 'grid'
            ? 'md:grid-cols-2 lg:grid-cols-3'
            : 'grid-cols-1 max-w-4xl mx-auto'
        }`}>
          {/* Map over the sliced list: featuredProjects (now limited to 6) */}
          {featuredProjects.map((project) => (
            <motion.a 
                key={project.id} 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4, delay: project.id * 0.1 }}
            >
              <Card
                className={`bg-slate-900 border-slate-700 rounded-2xl shadow-xl shadow-slate-900/50 hover:shadow-2xl hover:shadow-cyan-500/30 overflow-hidden group transform transition-all duration-500 hover:-translate-y-2 h-full ${
                  viewMode === 'list' ? 'flex flex-col sm:flex-row' : 'flex flex-col'
                }`}
              >
                <div className={`${viewMode === 'list' ? 'sm:w-1/3 w-full h-48 sm:h-auto' : 'h-64'} bg-gradient-to-r ${project.color} relative overflow-hidden flex-shrink-0`}>
                  <img
                    src={`https://placehold.co/600x400/1e293b/e2e8f0?text=Project+${project.id}`} // Using placeholder images for stability
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      // Fallback to a placeholder image if the provided mock URL fails
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = "https://placehold.co/600x400/1e293b/e2e8f0?text=Image+Not+Found"; // Dark mode placeholder
                    }}
                  />

                  {/* Gradient Overlay for visual polish */}
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-all duration-500" />

                  {project.featured && (
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-slate-900 text-xs px-3 py-1 rounded-full font-bold shadow-lg flex items-center">
                      <Zap className="w-3 h-3 mr-1" /> Featured
                    </div>
                  )}

                  <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm text-white text-sm px-3 py-1 rounded-full font-medium border border-slate-600">
                    {project.year}
                  </div>

                  {/* Hover effect to show category */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50">
                    <div className="text-white text-lg font-semibold text-center p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      {project.category}
                    </div>
                  </div>

                  {/* Animated Light Blobs */}
                  <div className="absolute -top-10 -right-10 w-20 h-20 bg-white/10 rounded-full blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute -bottom-5 -left-5 w-15 h-15 bg-white/5 rounded-full blur-lg opacity-30 group-hover:opacity-60 transition-opacity duration-500" />
                </div>

                <div className={`${viewMode === 'list' ? 'sm:w-2/3' : ''} p-6 flex flex-col justify-between flex-grow`}>
                  <div>
                    <div className="flex items-start justify-between mb-3">
                      <span className="text-xs font-medium text-cyan-400 bg-cyan-900/50 px-3 py-1 rounded-full border border-cyan-700/50">
                        {project.category}
                      </span>
                    </div>

                    <h3 className="text-xl font-extrabold mb-3 text-slate-50 group-hover:text-cyan-400 transition-colors duration-300">
                      {project.title}
                    </h3>

                    <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-auto pt-3 border-t border-slate-800/50">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-xs bg-slate-800 text-slate-400 px-3 py-1 rounded-full hover:bg-cyan-900/50 hover:text-cyan-400 transition-colors duration-200 cursor-pointer shadow-sm border border-slate-700/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.a>
          ))}
        </motion.div>

        <div className="text-center mt-16">
          {/* This button will be shown since we only display 6 out of 7 featured projects */}
          <Button
            variant="outline"
            size="lg"
            className="bg-slate-800 border-cyan-500/50 text-slate-200 hover:bg-cyan-500 hover:text-slate-900 px-8 py-3 rounded-full text-base font-bold transition-all duration-300 shadow-xl shadow-slate-900/50 hover:shadow-2xl hover:shadow-cyan-500/30 ring-4 ring-cyan-500/20"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  )
}

// Main App component
const App = () => {
  return (
    // Set up the main container with a dark background for the theme
    <div className="min-h-screen bg-[#030014] font-sans">
      <Projects />
    </div>
  );
}

export default App;
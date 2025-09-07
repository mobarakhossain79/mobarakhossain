import React from 'react';

// Main App component that renders the project portfolio
const App = () => {
    return (
        <div className="bg-gray-100 min-h-screen font-sans">
            <Projects />
        </div>
    );
};

// Projects component containing the portfolio data and structure
const Projects = () => {
    // Array of project objects with added 'link' property for navigation
    const projects = [
        {
            id: 1,
            title: "Brand Identity Design",
            category: "Branding",
            description: "Complete brand identity system for a tech startup including logo, typography, and brand guidelines.",
            tags: ["Logo Design", "Brand Guidelines", "Typography"],
            imageUrl: '/1.jpeg',
            link: 'https://www.behance.net/gallery/163359893/Brand-Identity', // Clickable link for the project
        },
        {
            id: 2,
            title: "Primary School Website UI",
            category: "Web Design",
            description: "Modern and clean Primary School Website platform design focused on user experience and conversion optimization.",
            tags: ["UI Design", "UX Research", "Prototyping"],
            imageUrl: '/2.jpeg',
            link: 'https://www.behance.net/gallery/232702915/Smart-Modern-School-Website-UI-Design', // Placeholder link
        },
        {
            id: 3,
            title: "Mobile App Interface",
            category: "Mobile Design",
            description: "Intuitive mobile app design for a fitness tracking application with engaging user interactions.",
            tags: ["Mobile UI", "User Experience", "Interaction Design"],
            imageUrl: 'https://placehold.co/600x400/34D399/FFFFFF?text=Mobile+App',
            link: '#', // Placeholder link
        },
        {
            id: 4,
            title: "Print Campaign Design",
            category: "Print Design",
            description: "Creative print campaign for a fashion brand including posters, brochures, and packaging design.",
            tags: ["Print Design", "Campaign", "Packaging"],
            imageUrl: 'https://placehold.co/600x400/F87171/FFFFFF?text=Print+Campaign',
            link: '#', // Placeholder link
        },
        {
            id: 5,
            title: "Social Media Graphics",
            category: "Digital Marketing",
            description: "Engaging social media template system for consistent brand presence across all platforms.",
            tags: ["Social Media", "Templates", "Brand Consistency"],
            imageUrl: 'https://placehold.co/600x400/818CF8/FFFFFF?text=Social+Media',
            link: '#', // Placeholder link
        },
        {
            id: 6,
            title: "Corporate Presentation",
            category: "Presentation Design",
            description: "Professional presentation design for corporate clients with clean layouts and data visualization.",
            tags: ["Presentation", "Data Viz", "Corporate"],
            imageUrl: 'https://placehold.co/600x400/2DD4BF/FFFFFF?text=Presentation',
            link: '#', // Placeholder link
        }
    ];

    return (
        <section id="projects" className="py-12 md:py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-extrabold text-gray-800 mb-2">My Portfolio</h2>
                    <p className="text-lg text-gray-600">A collection of my recent design projects.</p>
                </div>

                {/* Grid container for project cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        // Each project is a clickable link that opens in a new tab
                        <a
                            key={project.id}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group block bg-white rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 ease-in-out overflow-hidden"
                        >
                            <div className="relative">
                                {/* Project Image */}
                               <img
                                 src={project.imageUrl}
                                 alt={project.title}
                                 className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                                 onError={(e) => {
                                  const target = e.target as HTMLImageElement;
                                  target.onerror = null;
                                  target.src = 'https://placehold.co/600x400/cccccc/FFFFFF?text=Image+Error';}}
                                  />

                                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-all duration-300"></div>
                            </div>
                            <div className="p-6">
                                {/* Project Category */}
                                <p className="text-sm font-semibold text-indigo-600 mb-1">{project.category}</p>
                                {/* Project Title */}
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                                {/* Project Description */}
                                <p className="text-gray-700 text-sm mb-4">{project.description}</p>
                                {/* Project Tags */}
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, index) => (
                                        <span key={index} className="bg-gray-200 text-gray-800 text-xs font-medium px-3 py-1 rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default App;

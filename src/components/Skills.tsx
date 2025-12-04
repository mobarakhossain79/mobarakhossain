import React from "react";

// --- SVG Icons for Expertise Section ---
const PaletteIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2a7 7 0 1 0 10 10" />
  </svg>
);

const MonitorIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
    <line x1="8" y1="21" x2="16" y2="21" />
    <line x1="12" y1="17" x2="12" y2="21" />
  </svg>
);

const FileTextIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </svg>
);

const TrendingUpIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <polyline points="17 6 23 6 23 12" />
  </svg>
);

const BoxIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
    <line x1="12" y1="22.08" x2="12" y2="12" />
  </svg>
);

const PenToolIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m12 19 7-7 3 3-7 7-3-3z" />
    <path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
    <path d="m2 2 7.586 7.586" />
    <circle cx="11" cy="11" r="2" />
  </svg>
);

// --- Reusable Card (light theme) ---
const Card = ({ children, className = "" }) => (
  <div className={`rounded-2xl bg-white p-6 shadow-md border border-slate-200 ${className}`}>
    {children}
  </div>
);

const App = () => {
  // --- Data for the component ---
  const skillCategories = [
    {
      title: "Design Tools",
      skills: [
        { name: "Adobe Photoshop", level: 95 },
        { name: "Adobe Illustrator", level: 90 },
        { name: "Adobe InDesign", level: 85 },
        { name: "Figma", level: 92 },
        { name: "Sketch", level: 80 },
      ],
    },
    {
      title: "Design Skills",
      skills: [
        { name: "Brand Identity", level: 90 },
        { name: "Typography", level: 88 },
        { name: "Color Theory", level: 85 },
        { name: "Layout Design", level: 92 },
        { name: "User Experience", level: 87 },
      ],
    },
  ];

  const expertiseAreas = [
    { title: "Brand Identity", description: "Creating memorable brand experiences", icon: <PaletteIcon /> },
    { title: "Web Design", description: "Modern and responsive web interfaces", icon: <MonitorIcon /> },
    { title: "Print Design", description: "Professional print materials and campaigns", icon: <FileTextIcon /> },
    { title: "Digital Marketing", description: "Social media and digital advertising graphics", icon: <TrendingUpIcon /> },
    { title: "Packaging Design", description: "Creative product packaging solutions", icon: <BoxIcon /> },
    { title: "Illustration", description: "Custom illustrations and iconography", icon: <PenToolIcon /> },
  ];

  return (
    <div className="font-sans w-full py-20 px-4 sm:px-6 lg:px-8 text-slate-900 bg-[#FAFAF7]">
      <section id="skills">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight tracking-tight">
              Skills &{" "}
              <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-transparent bg-clip-text">
                Expertise
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
              A comprehensive toolkit of design skills and creative expertise, ready to bring ideas to life.
            </p>
          </div>

          {/* Expertise Areas Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {expertiseAreas.map((area, index) => (
              <div
                key={index}
                className="group relative rounded-2xl transition-transform duration-300 hover:scale-105"
              >
                {/* Subtle animated gradient glow on hover (works on light bg) */}
                <div className="pointer-events-none absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-cyan-200 to-blue-200 opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur" />
                <Card className="relative h-full text-center flex flex-col items-center justify-center">
                  <div className="mb-4 text-cyan-600 group-hover:text-cyan-700 transition-colors duration-300">
                    {area.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-slate-900">{area.title}</h3>
                  <p className="text-sm text-slate-600">{area.description}</p>
                </Card>
              </div>
            ))}
          </div>

          {/* Skills Display as Tags/Pills */}
          <div className="grid lg:grid-cols-2 gap-12">
            {skillCategories.map((category, categoryIndex) => (
              <Card key={categoryIndex}>
                <h3 className="text-2xl font-bold mb-8 text-center text-slate-900">{category.title}</h3>
                <div className="flex flex-wrap justify-center gap-3 text-center">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="bg-slate-100 border border-slate-200 rounded-full px-5 py-2.5 text-sm font-medium text-slate-700 transition-colors duration-300 hover:bg-cyan-50 hover:border-cyan-200 hover:text-cyan-700 cursor-default"
                      title={`${skill.level}%`}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
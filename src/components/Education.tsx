import React from "react";
import { motion } from "framer-motion";

const educationData = [
  {
    degree: "BA (HONS) IN GRAPHIC DESIGN & MULTIMEDIA",
    school: "Shanto-Mariam University of Creative Technology",
    year: "2020 - 2024",
    description: "Focused on design, multimedia projects, and creative development.",
  },
  {
    degree: "HIGHER SECONDARY CERTIFICATE - SCIENCE",
    school: "Pangsha Government College",
    year: "2017 - 2018",
    description: "Specialized in Science stream with top grades.",
  },
];

const EducationSection = () => {
  return (
    // Changed the background back to white (bg-white) and removed the gradient
    <section className="bg-white py-12 px-4 min-h xl:npm flex items-center justify-center">
      <div className="max-w-5xl mx-auto text-center w-full">
        {/* Removed text-white so the title is black/dark grey on white background */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-12 text-gray-900">
          My{" "}
          <span className="bg-gradient-to-r from-cyan-600 to-blue-800 text-transparent bg-clip-text">
            Education
          </span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {educationData.map((edu, index) => {
            // Determine card styles based on index
            const isFirst = index === 0;
            // Keeping the colored gradients for the cards
            const cardClass = isFirst 
              ? "bg-gradient-to-r from-teal-400 to-cyan-500 text-white" // First card: Teal to Cyan
              : "bg-gradient-to-r from-purple-500 to-indigo-600 text-white"; // Second card: Purple to Indigo

            return (
              <motion.div
                key={index}
                // Apply dynamic class for different colors
                className={`p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border-b-4 border-white transform hover:scale-[1.02] ${cardClass}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
              >
                {/* Text color is white for all elements inside the colored cards */}
                <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
                <p className="font-semibold mb-1 opacity-90">{edu.school}</p>
                <p className="text-sm mb-4 font-mono opacity-80">{edu.year}</p>
                <p className="leading-relaxed opacity-90">{edu.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// Main App Component
export default function App() {
  return <EducationSection />;
}
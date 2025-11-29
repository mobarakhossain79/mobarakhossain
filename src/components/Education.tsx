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
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            My <span className="bg-gradient-to-r from-cyan-400 to-blue-600 text-transparent bg-clip-text">Education</span>
          </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <h3 className="text-xl font-semibold mb-2">{edu.degree}</h3>
              <p className="text-gray-600 font-medium">{edu.school}</p>
              <p className="text-gray-400 mb-4">{edu.year}</p>
              <p className="text-gray-700">{edu.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;

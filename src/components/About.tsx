import React from "react";
import { motion, Variants } from "framer-motion";
import { Award, Heart, Users, Zap, Palette, Target, Coffee, Lightbulb, Sparkles, Mail, Phone, MapPin, GraduationCap, Code, Briefcase } from "lucide-react";

// --- Mock UI Components (Dependencies) ---
const Button = ({ children, className, ...props }) => (
  <button className={`inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${className}`} {...props}>
    {children}
  </button>
);

const Card = ({ children, className, ...props }) => (
  <div className={`rounded-2xl border bg-card text-card-foreground shadow-xl transition-all duration-300 ${className}`} {...props}>
    {children}
  </div>
);
// --------------------------------------------------


// --- About Me Section Component ---
export default function AboutMeSection() {
  // --- Component Data ---

  const stats = [
    { icon: Award, label: 'Projects Completed', value: '15+', color: 'text-purple-400', bg: 'bg-purple-500/10' },
    { icon: Users, label: 'Happy Clients', value: '20+', color: 'text-blue-400', bg: 'bg-blue-500/10' },
    { icon: Heart, label: 'Years Experience', value: '1+', color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
    { icon: Zap, label: 'Creative Solutions', value: '50+', color: 'text-orange-400', bg: 'bg-orange-500/10' },
  ];

  const values = [
    { icon: Palette, title: 'Creativity First', description: 'Focus on unique, visually compelling designs that tell a story.' },
    { icon: Target, title: 'Goal-Oriented', description: 'Designs are strategically aligned with client objectives and target audiences.' },
    { icon: Coffee, title: 'Passionate Work', description: 'Every project is handled with genuine enthusiasm and dedication.' },
    { icon: Lightbulb, title: 'Innovation', description: 'Always exploring new tools and techniques to push creative boundaries.' },
  ];

  const contactInfo = [
    { icon: Phone, label: 'Phone', value: '+88 01870367939', detail: 'Call me for a chat' },
    { icon: Mail, label: 'Email', value: 'mobarakhossainjoy045@gmail.com', detail: 'Best way to reach me' },
    { icon: MapPin, label: 'Location', value: 'Moinartek Uttarkhan,Dhaka-1230', detail: 'Open to remote work worldwide' },
  ];

  const educationData = [
    {
      degree: 'HIGHER SECONDARY CERTIFICATE - SCIENCE',
      institution: 'Pangsha Government College',
      year: '2017 - 2018',
      description: 'Specialized in Science stream with strong foundational knowledge.',
      color: 'border-cyan-500'
    },
    {
      degree: 'BA (HONS) IN GRAPHIC DESIGN & MULTIMEDIA',
      institution: 'Shanto-Mariam University of Creative Technology',
      year: '2020 - 2024',
      description: 'Focused on typography, brand identity, and modern visual communication principles.',
      color: 'border-emerald-500'
    },
  ];

  const experienceData = [
    {
      role: 'Bangladesg Machine Tools Factory (BMTF)',
      company: 'Graphic Designer',
      year: 'NOVEMBER 2023 - APRIL 2024',
      description: 'The BMTF Graphic Designer Internship focuses on video editing, logo design, and social media graphics to strengthen the factory.',
      color: 'border-amber-500'
    },
    // --- NEW EXPERIENCE CARD ADDED HERE ---
    {
      role: 'HK IT Limited',
      company: 'Graphic & Ui/Ux Designer',
      year: 'AUGUST 2024 - AUGUST 2025',
      description: 'Contributed to the development of modular UI components and implemented state management solutions for e-commerce platforms using React.',
      color: 'border-fuchsia-500'
    },
    // --- END NEW CARD ---
    {
      role: 'TechWorld Bangladesh',
      company: 'Graphic Designer',
      year: 'NOVEMBER 2025 - Present', // Adjusted for better chronological flow
      description: 'Assisted in branding projects, created marketing materials, and contributed to visual asset libraries, gaining hands-on industry experience.',
      color: 'border-indigo-500'
    },
  ];

  // --- Animation Variants ---

  const sectionHeaderVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
    }),
  };

  const educationItemVariants: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };


  // --- Render Component ---

  return (
    <main id="about" className="min-h-screen relative overflow-hidden bg-[#030014] text-white py-20 font-inter">
      {/* Background Grid & Blurs matching the dark theme */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-20" />
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-500/30 rounded-full blur-[200px] opacity-20 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-cyan-500/20 rounded-full blur-[180px] opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div variants={sectionHeaderVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl mb-6">
            <Sparkles className="w-5 h-5 text-cyan-400 animate-pulse" />
            <span className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Get to know me</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold mb-6 leading-tight">
            The Intersection of <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Design</span> & Code
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            I craft digital experiences that are technically robust and aesthetically compelling.
          </p>
        </motion.div>

        {/* Bio & Contact Grid - My Design & Code Philosophy | Connect With Me */}
        <div className="grid lg:grid-cols-5 gap-10 items-stretch mb-24">
          
          {/* Bio Text Column (takes 3/5 width on large screens) */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="space-y-8 lg:col-span-3">
            <h3 className="text-3xl font-bold mb-6 text-slate-100 flex items-center gap-3">
              <Code className="w-7 h-7 text-cyan-400" /> My Design & Code Philosophy
            </h3>
            
            <Card className="p-8 bg-slate-900/50 backdrop-blur-sm border-slate-700/50 shadow-2xl shadow-slate-900/70 space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed border-b border-slate-700/50 pb-6">
                I believe great digital products emerge at the intersection of stunning design and flawless engineering. My goal is to craft user experiences that are both beautiful and highly functional. I specialize in full-stack creative development, from concept and branding to scalable UI implementation.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                {['Brand Strategy', 'React/Next.js', 'UI/UX Mastery', 'Framer Motion', 'Creative Direction'].map((skill, i) => (
                  <motion.div 
                    key={i} 
                    custom={i}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="px-4 py-2 rounded-full bg-cyan-900/50 border border-cyan-700 hover:bg-cyan-700/70 transition-colors cursor-default text-sm font-semibold text-cyan-200 shadow-lg shadow-cyan-900/50 transform hover:scale-[1.05]"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Contact Info Column (takes 2/5 width on large screens) */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} className="p-8 rounded-2xl bg-gradient-to-br from-purple-900/50 to-slate-900/70 backdrop-blur-sm border-purple-700/50 shadow-2xl shadow-purple-900/60 space-y-8 flex flex-col justify-start lg:col-span-2">
            <h3 className="text-2xl font-bold pb-4 flex items-center gap-2 border-b border-purple-700/50 text-slate-100">
                <Users className="w-6 h-6 text-purple-400" /> Connect With Me
            </h3>
            {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-3 -m-3 rounded-xl transition-all duration-300 hover:bg-purple-800/20 hover:scale-[1.02]">
                  <div className="p-3 rounded-full bg-purple-500/20 flex-shrink-0 border border-purple-500/30">
                      <item.icon className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                      <div className="text-sm font-medium text-gray-400 uppercase tracking-wider">{item.label}</div>
                      <a 
                          href={item.label === 'Email' ? `mailto:${item.value}` : (item.label === 'Phone' ? `tel:${item.value.replace(/\s/g, '')}` : '#')} 
                          className="text-xl font-semibold text-white break-words hover:text-purple-300 transition-colors"
                      >
                          {item.value}
                      </a>
                      <p className="text-xs text-gray-500">{item.detail}</p>
                  </div>
                </div>
            ))}
          </motion.div>
        </div>
        
        {/* Professional Experience (Timeline Style) */}
        <div className="mb-24">
          <motion.h3 variants={sectionHeaderVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} className="text-3xl font-bold text-center mb-12 flex justify-center items-center gap-3 text-slate-100">
              <Briefcase className="w-8 h-8 text-amber-400" /> Professional Experience
          </motion.h3>
          <div className="relative max-w-6xl mx-auto">
              {/* Vertical Timeline Line */}
            <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-slate-800 hidden lg:block" />

            <div className="grid lg:grid-cols-2 gap-12">
              {experienceData.map((exp, index) => (
                <motion.div 
                  key={index} 
                  custom={index} 
                  initial="hidden" 
                  whileInView="visible" 
                  viewport={{ once: true, amount: 0.5 }} 
                  variants={educationItemVariants} 
                  className={`p-6 rounded-2xl bg-slate-900/50 backdrop-blur-sm border-l-4 lg:border-l-0 shadow-2xl shadow-slate-900/70 relative transition-all duration-500 hover:shadow-amber-500/20 cursor-default ${exp.color} ${index % 2 === 0 ? 'lg:col-start-1 lg:text-right lg:pr-12' : 'lg:col-start-2 lg:pl-12'}`}
                  style={{ 
                    transformOrigin: index % 2 === 0 ? 'right' : 'left'
                  }}
                >
                  {/* Timeline Dot (Visible on large screens) */}
                  <div className={`hidden lg:block absolute w-4 h-4 rounded-full bg-slate-900 border-2 ${exp.color} -top-1.5 ${index % 2 === 0 ? 'lg:-right-[10.6rem]' : 'lg:-left-[10.6rem]'} z-20`} />

                  <div className="relative z-10 space-y-2">
                      <p className={`text-xs font-semibold ${exp.color.replace('border', 'text')} uppercase tracking-widest`}>{exp.year}</p>
                      <h4 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors">{exp.role}</h4>
                      <h5 className="text-md text-gray-300 font-medium pb-2 border-b border-slate-700/50">{exp.company}</h5>
                      <p className="text-sm text-gray-400">{exp.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Educational Milestones (Timeline Style) */}
        <div className="mb-24">
          <motion.h3 variants={sectionHeaderVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} className="text-3xl font-bold text-center mb-12 flex justify-center items-center gap-3 text-slate-100">
              <GraduationCap className="w-8 h-8 text-emerald-400" /> Educational Milestones
          </motion.h3>
          <div className="relative max-w-6xl mx-auto">
              {/* Vertical Timeline Line */}
            <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-slate-800 hidden lg:block" />

            <div className="grid lg:grid-cols-2 gap-12">
              {educationData.map((edu, index) => (
                <motion.div 
                  key={index} 
                  custom={index} 
                  initial="hidden" 
                  whileInView="visible" 
                  viewport={{ once: true, amount: 0.5 }} 
                  variants={educationItemVariants} 
                  className={`p-6 rounded-2xl bg-slate-900/50 backdrop-blur-sm border-l-4 lg:border-l-0 shadow-2xl shadow-slate-900/70 relative transition-all duration-500 hover:shadow-emerald-500/20 cursor-default ${edu.color} ${index % 2 === 0 ? 'lg:col-start-1 lg:text-right lg:pr-12' : 'lg:col-start-2 lg:pl-12'}`}
                  style={{ 
                    transformOrigin: index % 2 === 0 ? 'right' : 'left'
                  }}
                >
                  {/* Timeline Dot (Visible on large screens) */}
                  <div className={`hidden lg:block absolute w-4 h-4 rounded-full bg-slate-900 border-2 ${edu.color} -top-1.5 ${index % 2 === 0 ? 'lg:-right-[10.6rem]' : 'lg:-left-[10.6rem]'} z-20`} />

                  <div className="relative z-10 space-y-2">
                      <p className={`text-xs font-semibold ${edu.color.replace('border', 'text')} uppercase tracking-widest`}>{edu.year}</p>
                      <h4 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">{edu.degree}</h4>
                      <h5 className="text-md text-gray-300 font-medium pb-2 border-b border-slate-700/50">{edu.institution}</h5>
                      <p className="text-sm text-gray-400">{edu.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Core Values & Approach */}
        <div className="mb-24">
          <motion.h3 variants={sectionHeaderVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} className="text-3xl font-bold text-center mb-12 text-slate-100">
            Core Values & Approach
          </motion.h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div 
                key={index} 
                custom={index} 
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: true }} 
                variants={cardVariants} 
                className="p-6 rounded-2xl bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 shadow-2xl shadow-slate-900/70 group cursor-default transition-all duration-300 transform hover:scale-[1.03] hover:border-blue-500/50"
              >
                <div className="w-14 h-14 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4 border border-blue-500/30 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-500/30">
                  <value.icon className="w-7 h-7 text-blue-400 group-hover:scale-110 transition-transform" />
                </div>
                <h4 className="text-xl font-bold mb-3 text-white group-hover:text-blue-300 transition-colors">{value.title}</h4>
                <p className="text-sm text-gray-400 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* My Impact In Numbers */}
        <div className="mb-20">
          <motion.h3 variants={sectionHeaderVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} className="text-3xl font-bold text-center mb-12 text-slate-100">
            My Impact In Numbers
          </motion.h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, scale: 0.9 }} 
                whileInView={{ opacity: 1, scale: 1 }} 
                transition={{ delay: index * 0.15, duration: 0.6 }} 
                viewport={{ once: true }} 
                className="relative p-6 rounded-2xl bg-slate-900/50 border border-slate-700/50 overflow-hidden group transition-all duration-300 transform hover:scale-[1.05] hover:border-cyan-500/50 shadow-2xl shadow-slate-900/70 hover:shadow-cyan-500/20"
              >
                <div className={`absolute -inset-1 ${stat.bg} opacity-20 group-hover:opacity-40 blur-2xl transition-opacity duration-500 pointer-events-none`} />
                
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className={`p-3 rounded-full ${stat.bg} mb-3 border ${stat.color.replace('text', 'border').replace('400', '600')}`}>
                    <stat.icon className={`w-7 h-7 ${stat.color} group-hover:scale-110 transition-transform`} />
                  </div>
                  
                  <div className="text-5xl font-extrabold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                    <motion.span
                        initial={{ textShadow: '0 0 10px rgba(0,0,0,0)' }}
                        whileInView={{ textShadow: '0 0 15px rgba(59,130,246,0.5)' }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                    >
                        {stat.value}
                    </motion.span>
                  </div>
                  <div className="text-sm font-medium text-gray-400 uppercase tracking-widest">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Removed Footer CTA section here */}
      </div>
    </main>
  );
}
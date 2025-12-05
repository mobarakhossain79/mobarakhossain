import React from "react";
import { motion, Variants } from "framer-motion";
import { Award, Heart, Users, Zap, Palette, Target, Coffee, Lightbulb, Sparkles, Mail, Phone, MapPin, GraduationCap } from "lucide-react";

export default function AboutModern() {
  // --- Component Data ---

  const stats = [
    { icon: Award, label: 'Projects Completed', value: '15+', color: 'text-purple-400', bg: 'bg-purple-500/10' },
    { icon: Users, label: 'Happy Clients', value: '20+', color: 'text-blue-400', bg: 'bg-blue-500/10' },
    { icon: Heart, label: 'Years Experience', value: '1+', color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
    { icon: Zap, label: 'Creative Solutions', value: '50+', color: 'text-orange-400', bg: 'bg-orange-500/10' },
  ];

  const values = [
    { icon: Palette, title: 'Creativity First', description: 'Every design tells a unique story' },
    { icon: Target, title: 'Goal Oriented', description: 'Strategic thinking meets beautiful design' },
    { icon: Coffee, title: 'Passionate Work', description: 'Fueled by creativity and great coffee' },
    { icon: Lightbulb, title: 'Innovation', description: 'Always exploring new design possibilities' },
  ];

  const contactInfo = [
    // Mock Data for Contact Info
    { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567', detail: 'Call me for a chat' },
    { icon: Mail, label: 'Email', value: 'jane.doe@example.com', detail: 'Best way to reach me' },
    { icon: MapPin, label: 'Address', value: '123 Design Studio, San Francisco, CA', detail: 'By appointment only' },
  ];

  const educationData = [
    // Mock Data for Educational Background
    {
      degree: 'M.A. Interaction Design',
      institution: 'Royal College of Art, London',
      year: '2019 - 2021',
      description: 'Specialized in user-centered design, prototyping, and digital product strategy.'
    },
    {
      degree: 'B.F.A. Graphic Design',
      institution: 'Parsons School of Design, New York',
      year: '2015 - 2018',
      description: 'Focused on typography, brand identity, and visual communication principles.'
    },
  ];

  // --- Animation Variants ---

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" },
    }),
  };

  const educationItemVariants: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };


  // --- Render Component ---

  return (
    <main id="about" className="min-h-screen relative overflow-hidden bg-[#030014] text-white py-20">
      {/* Background Elements (Grid & Blurs) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[120px] opacity-40 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[100px] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-lg mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-xs font-medium text-gray-300 tracking-wide uppercase">Get to know me</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Me</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Passionate designer creating visually stunning and meaningful designs that leave a lasting impact.
          </p>
        </motion.div>

        {/* Bio & Contact Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
          
          {/* Bio Text Column */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="space-y-8">
            <div className="relative">
              <h3 className="text-3xl font-bold mb-6 relative z-10">My Design Philosophy</h3>
              <div className="absolute -top-4 -left-6 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl" />
            </div>
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                Great design is more than aesthetics—it's about solving problems, telling stories, and creating connections. <br/> I specialize in brand identities, digital experiences, and visual communications that resonate with audiences.<br/>
              </p>
            </div>
            <div className="flex flex-wrap gap-3 pt-4">
              {['Brand Identity', 'UI/UX Design', 'Print & Digital', 'Creative Direction'].map((skill, i) => (
                <div key={i} className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-default text-sm font-medium text-cyan-200">
                  {skill}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Contact Info Column */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="p-8 rounded-3xl bg-white/5 border border-white/10 shadow-xl space-y-8">
            <h3 className="text-2xl font-bold border-b border-white/10 pb-4 flex items-center gap-2">
                <Users className="w-6 h-6 text-purple-400" /> Get In Touch
            </h3>
            {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-cyan-500/20 flex-shrink-0">
                        <item.icon className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                        <div className="text-sm font-medium text-gray-400 uppercase tracking-wider">{item.label}</div>
                        <div className="text-lg font-semibold text-white break-words">{item.value}</div>
                        <p className="text-xs text-gray-500">{item.detail}</p>
                    </div>
                </div>
            ))}
          </motion.div>
        </div>

        {/* Education Section */}
        <div className="mb-24">
          <motion.h3 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-2xl font-bold text-center mb-12 flex justify-center items-center gap-3">
             <GraduationCap className="w-6 h-6 text-emerald-400" /> Educational Journey
          </motion.h3>
          <div className="grid lg:grid-cols-2 gap-10">
            {educationData.map((edu, index) => (
              <motion.div key={index} custom={index} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={educationItemVariants} className="p-6 rounded-xl bg-white/5 border border-white/10 shadow-lg relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/0 to-emerald-500/10 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none" />
                <div className="relative z-10">
                    <p className="text-xs font-medium text-emerald-400 uppercase tracking-widest mb-1">{edu.year}</p>
                    <h4 className="text-xl font-bold text-white mb-1">{edu.degree}</h4>
                    <h5 className="text-md text-gray-300 font-semibold mb-3">{edu.institution}</h5>
                    <p className="text-sm text-gray-400">{edu.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="mb-24">
          <motion.h3 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-2xl font-bold text-center mb-12">
            What Drives Me
          </motion.h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div key={index} custom={index} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={cardVariants} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 group cursor-default">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
                  <value.icon className="w-6 h-6 text-gray-300 group-hover:text-blue-400 transition-colors" />
                </div>
                <h4 className="text-lg font-bold mb-2 text-white">{value.title}</h4>
                <p className="text-sm text-gray-400 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div key={index} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: index * 0.1 }} viewport={{ once: true }} className="relative p-6 rounded-2xl bg-[#0a0d1c] border border-white/10 overflow-hidden group hover:border-white/20 transition-colors">
              <div className={`absolute top-0 right-0 w-24 h-24 ${stat.bg} rounded-full blur-2xl -mr-12 -mt-12 opacity-50 group-hover:opacity-100 transition-opacity`} />
              <div className="relative z-10 flex flex-col items-center text-center">
                <stat.icon className={`w-8 h-8 ${stat.color} mb-3`} />
                <div className="text-3xl font-bold text-white mb-1 group-hover:scale-110 transition-transform">{stat.value}</div>
                <div className="text-xs font-medium text-gray-500 uppercase tracking-wider">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
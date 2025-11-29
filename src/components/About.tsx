import React from "react";
import { motion, Variants } from "framer-motion";
import { Award, Heart, Users, Zap, Palette, Target, Coffee, Lightbulb, Sparkles } from "lucide-react";

export default function AboutModern() {
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

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" },
    }),
  };

  return (
    <main id="about" className="min-h-screen relative overflow-hidden bg-[#030014] text-white py-20">
      {/* Background Elements */}
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

        {/* Bio */}
        <div className="grid lg:grid-cols-1 gap-16 items-center mb-24 max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="space-y-8">
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
        </div>

        {/* Values */}
        <div className="mb-24">
          <motion.h3 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-2xl font-bold text-center mb-12">
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

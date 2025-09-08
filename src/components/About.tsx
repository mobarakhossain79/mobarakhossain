import { Award, Heart, Users, Zap, CheckCircle } from 'lucide-react';


const userImageUrl = '/image_5e8765.jpg'; 

const About = () => {
  const stats = [
    { icon: Award, label: 'Projects Completed', value: '15+' },
    { icon: Users, label: 'Happy Clients', value: '20+' },
    { icon: Heart, label: 'Years of Experience', value: '1' },
    { icon: Zap, label: 'Creative Solutions', value: '20+' },
  ];

  const skills = [
    'UI/UX Design',
    'Brand Identity Design',
    'Print & Digital Media',
    'Creative Direction',
  ];

  return (
    // Updated background color to a dark blue slate to complement the new theme
    <section id="about" className="w-full bg-[#ffffff] text-black py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 tracking-tight">
            {/* Updated gradient with your primary and secondary colors */}
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#45C7F0] to-[#263D88]">Me</span>
          </h2>
          <p className="text-lg text-black-400 max-w-xl mx-auto">
            A passionate designer on a mission to create visually stunning and meaningful digital experiences.
          </p>
        </div>

        

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-4 items-center mb-20">
          {/* Image Column */}
          <div className="lg:col-span-2 flex justify-center">
            <div className="relative group">
              {/* Updated gradient for the image border */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#45C7F0] to-[#263D88] rounded-2xl blur opacity-15 group-hover:opacity-100 transition duration-900 group-hover:duration-200 animate-tilt"></div>
              <img
                src="/Me.JPG"
                alt="Mobarak Hossain Joy"
                className="relative w-full max-w-sm mx-auto h-auto object-cover rounded-2xl shadow-md"
              />
            </div>
          </div>

          {/* Text Content Column */}
          <div className="lg:col-span-3 space-y-8">
            <div>
              <h3 className="text-3xl font-bold mb-4 text-black-100">My Design Philosophy</h3>
              <p className="text-black-300 text-lg leading-relaxed">
                I believe that great design is more than just aesthetics—it's about solving problems, telling compelling stories, and creating genuine connections. Every project is an opportunity to push creative boundaries while delivering results that exceed expectations.
              </p>
              <p className="text-black-300 text-lg leading-relaxed mt-4">
                With a keen eye for detail and a passion for innovation, I specialize in crafting brand identities, intuitive digital experiences, and visual communications that resonate with audiences.
              </p>
            </div>
            
            <div className="space-y-4">
              {skills.map((skill) => (
                <div key={skill} className="flex items-center space-x-3">
                  {/* Updated icon color to your primary color */}
                  <CheckCircle className="w-6 h-6 text-[#45C7F0]" />
                  <span className="text-black-200 font-medium text-lg">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              // Updated card background, border, and hover shadow colors
              className="bg-white backdrop-blur-sm border border-[#263D88]/50 rounded-xl p-6 text-center transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#45C7F0]/20"
            >
              {/* Updated icon color to your primary color */}
              <stat.icon className="h-10 w-10 text-[#253e87] mx-auto mb-4" />
              <div className="text-3xl font-bold text-[#000000] mb-1">{stat.value}</div>
              <div className="text-sm text-black-400 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;


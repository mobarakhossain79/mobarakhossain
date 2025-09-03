import React from 'react';

const SkillsSection = () => {
    const skillCategories = [
        {
            title: "Design Tools",
            skills: [
                { name: "Adobe Photoshop", level: 95 },
                { name: "Adobe Illustrator", level: 90 },
                { name: "Adobe InDesign", level: 85 },
                { name: "Figma", level: 92 },
                { name: "Sketch", level: 80 },
            ]
        },
        {
            title: "Design Skills",
            skills: [
                { name: "Brand Identity", level: 90 },
                { name: "Typography", level: 88 },
                { name: "Color Theory", level: 85 },
                { name: "Layout Design", level: 92 },
                { name: "User Experience", level: 87 },
            ]
        },
    ];

    const expertiseAreas = [
        {
            title: "Brand Identity",
            description: "Creating memorable brand experiences",
            icon: "🎨"
        },
        {
            title: "Web Design",
            description: "Modern and responsive web interfaces",
            icon: "💻"
        },
        {
            title: "Print Design",
            description: "Professional print materials and campaigns",
            icon: "📄"
        },
        {
            title: "Digital Marketing",
            description: "Social media and digital advertising graphics",
            icon: "📱"
        },
        {
            title: "Packaging Design",
            description: "Creative product packaging solutions",
            icon: "📦"
        },
        {
            title: "Illustration",
            description: "Custom illustrations and iconography",
            icon: "✏️"
        }
    ];

    const Card = ({ children, className }) => (
        <div className={`rounded-xl border border-gray-200 bg-white p-6 shadow-md transition-all duration-300 ${className}`}>
            {children}
        </div>
    );

    const Progress = ({ value }) => (
        <div className="h-2 w-full rounded-full bg-gray-200 overflow-hidden">
            <div
                className="h-full rounded-full bg-[#253E87] transition-all duration-500"
                style={{ width: `${value}%` }}
            />
        </div>
    );

    return (
        <div className="font-sans min-h-screen py-20 text-gray-900 bg-white">
            {/* Define custom colors here for use with Tailwind classes */}
            <style>{`
                .from-primary-color { --tw-gradient-from: #45C7F0; }
                .to-secondary-color { --tw-gradient-to: #253E87; }
                .bg-primary-color { background-color: #45C7F0; }
                .text-primary-color { color: #45C7F0; }
                .gradient-text {
                    background-image: linear-gradient(to right, #45C7F0, #253E87);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
            `}</style>

            <section id="skills" className="px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight">
                            Skills & <span className="gradient-text">Expertise</span>
                        </h2>
                        <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto">
                            A comprehensive toolkit of design skills and creative expertise.
                        </p>
                    </div>

                    {/* Expertise Areas */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        {expertiseAreas.map((area, index) => (
                            <Card key={index} className="group text-center hover:bg-[#253E87]">
                                <div className="text-5xl mb-4">
                                    {area.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-white transition-colors duration-300">{area.title}</h3>
                                <p className="text-sm text-gray-700 group-hover:text-gray-300 transition-colors duration-300">{area.description}</p>
                            </Card>
                        ))}
                    </div>

                    {/* Skills Progress */}
                    <div className="grid lg:grid-cols-2 gap-8">
                        {skillCategories.map((category, categoryIndex) => (
                            <Card key={categoryIndex}>
                                <h3 className="text-xl font-bold mb-6 text-center text-gray-900">{category.title}</h3>
                                <div className="space-y-6">
                                    {category.skills.map((skill, skillIndex) => (
                                        <div key={skillIndex} className="space-y-2">
                                            <div className="flex justify-between items-center">
                                                <span className="text-sm font-medium text-gray-800">{skill.name}</span>
                                                <span className="text-sm text-gray-600">{skill.level}%</span>
                                            </div>
                                            <Progress value={skill.level} />
                                        </div>
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

const App = () => {
    return <SkillsSection />;
};

export default App;


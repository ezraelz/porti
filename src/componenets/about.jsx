import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faDownload, faCode, faPalette, faServer, faDatabase } from '@fortawesome/free-solid-svg-icons';
import proPic from '../static/img/propic.jpg';

const About = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeSkill, setActiveSkill] = useState(null);

    // Skills data
    const skills = [
        { name: 'HTML', percentage: 95, icon: faCode, color: 'from-orange-500 to-red-500' },
        { name: 'CSS', percentage: 90, icon: faPalette, color: 'from-blue-500 to-cyan-500' },
        { name: 'React', percentage: 80, icon: faCode, color: 'from-cyan-500 to-blue-500' },
        { name: 'Django', percentage: 90, icon: faServer, color: 'from-green-500 to-emerald-500' },
        { name: 'JavaScript', percentage: 85, icon: faCode, color: 'from-yellow-500 to-orange-500' },
        { name: 'Tailwind CSS', percentage: 95, icon: faPalette, color: 'from-teal-500 to-cyan-500' },
        { name: 'Python', percentage: 88, icon: faCode, color: 'from-blue-500 to-indigo-500' },
        { name: 'PostgreSQL', percentage: 75, icon: faDatabase, color: 'from-blue-400 to-blue-600' }
    ];

    const scrollToContact = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Circular Progress Component
    const CircularProgress = ({ percentage, skill, icon, color }) => {
        const radius = 90;
        const circumference = 2 * Math.PI * radius;
        const offset = circumference - (percentage / 100) * circumference;

        return (
            <div className="relative group">
                <div className="relative w-48 h-48 mx-auto">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 200 200">
                        {/* Background circle */}
                        <circle
                            cx="100"
                            cy="100"
                            r={radius}
                            stroke="rgba(255,255,255,0.1)"
                            strokeWidth="12"
                            fill="transparent"
                        />
                        {/* Progress circle */}
                        <circle
                            cx="100"
                            cy="100"
                            r={radius}
                            stroke={`url(#${skill.toLowerCase()}-gradient)`}
                            strokeWidth="12"
                            fill="transparent"
                            strokeDasharray={circumference}
                            strokeDashoffset={offset}
                            strokeLinecap="round"
                            className="transition-all duration-1000 ease-out"
                        />
                        {/* Gradient definition */}
                        <defs>
                            <linearGradient id={`${skill.toLowerCase()}-gradient`} x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#f59e0b" />
                                <stop offset="50%" stopColor="#ea580c" />
                                <stop offset="100%" stopColor="#3b82f6" />
                            </linearGradient>
                        </defs>
                    </svg>
                    
                    {/* Center content */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <div className={`text-4xl font-bold bg-gradient-to-r ${color} bg-clip-text text-transparent`}>
                            {percentage}%
                        </div>
                        <FontAwesomeIcon 
                            icon={icon} 
                            className={`text-xl mt-2 bg-gradient-to-r ${color} bg-clip-text text-transparent`}
                        />
                        <div className="text-sm text-gray-300 mt-1">{skill}</div>
                    </div>
                </div>
                
                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-blue-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
            {/* Hero Section */}
            <section className="relative py-20">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 via-transparent to-blue-500/5" />
                <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                            About <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Me</span>
                        </h1>
                        <p className="text-gray-400 text-lg">
                            Learn more about my journey, skills, and expertise
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Profile Image */}
                        <div className="relative group">
                            <div className="absolute -inset-4 bg-gradient-to-r from-yellow-500 via-orange-500 to-blue-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
                            <div className="relative">
                                <div className="rounded-2xl overflow-hidden border-4 border-gray-800">
                                    <div className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                                        <div className="text-center p-8">
                                            <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-yellow-500/20 to-blue-500/20 flex items-center justify-center mb-6">
                                                <div className="w-40 h-40 rounded-full bg-gray-800 flex items-center justify-center">
                                                    <span className="text-4xl"><img src={proPic} alt="" /></span>
                                                </div>
                                            </div>
                                            <h3 className="text-2xl font-bold text-white">Esrael Zerihun</h3>
                                            <p className="text-gray-400 mt-2">Fullstack Developer</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* About Content */}
                        <div className="space-y-6">
                            <div>
                                <h2 className="text-3xl font-bold text-white mb-4">
                                    A Website Developer | Expert in Fullstack & Custom Web Solutions
                                </h2>
                                
                                <div className="space-y-4 text-gray-300">
                                    <p>
                                        Hello! I'm Esrael, a passionate website developer with expertise in 
                                        full-stack development and custom web solutions. I specialize in 
                                        creating engaging, user-friendly, and high-performance websites 
                                        that meet clients' unique needs.
                                    </p>
                                    
                                    <p>
                                        Proficient in both front-end and back-end technologies including 
                                        HTML, CSS, JavaScript, React, and Django. I build custom websites 
                                        tailored to specific requirements, from e-commerce platforms to 
                                        content management systems.
                                    </p>
                                    
                                    {/* Modal Content */}
                                    {isModalOpen && (
                                        <div className="mt-4 p-6 bg-gray-800/50 rounded-xl border border-gray-700 backdrop-blur-sm">
                                            <div className="flex justify-between items-start mb-4">
                                                <h4 className="text-lg font-semibold text-white">More About Me</h4>
                                                <button
                                                    onClick={() => setIsModalOpen(false)}
                                                    className="text-gray-400 hover:text-white transition-colors"
                                                >
                                                    <FontAwesomeIcon icon={faTimes} />
                                                </button>
                                            </div>
                                            <div className="space-y-3 text-gray-300">
                                                <p>
                                                    With over 3 years of experience in web development, 
                                                    I've worked on various projects ranging from small 
                                                    business websites to complex web applications.
                                                </p>
                                                <p>
                                                    My approach combines technical expertise with creative 
                                                    problem-solving to deliver solutions that not only 
                                                    function perfectly but also provide exceptional user 
                                                    experiences.
                                                </p>
                                            </div>
                                        </div>
                                    )}
                                    
                                    <button
                                        onClick={() => setIsModalOpen(!isModalOpen)}
                                        className="inline-flex items-center text-yellow-400 hover:text-yellow-300 transition-colors"
                                    >
                                        {isModalOpen ? 'Show Less' : 'Read More'}
                                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path 
                                                strokeLinecap="round" 
                                                strokeLinejoin="round" 
                                                strokeWidth={2} 
                                                d={isModalOpen ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            <div className="pt-6 border-t border-gray-800">
                                <p className="text-gray-300 mb-6">
                                    Ready to bring your project to life? Feel free to reach out.
                                </p>
                                
                                <div className="flex flex-wrap gap-4">
                                    <button 
                                        onClick={scrollToContact}
                                        className="px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
                                    >
                                        Contact Me
                                    </button>
                                    <button className="px-6 py-3 border-2 border-yellow-500 text-yellow-500 font-semibold rounded-lg hover:bg-yellow-500 hover:text-gray-900 transition-colors flex items-center gap-2">
                                        <FontAwesomeIcon icon={faDownload} />
                                        Download Resume
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="py-20 bg-gray-900/50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            My <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Skills</span>
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Technologies and tools I work with to create amazing digital experiences
                        </p>
                    </div>

                    {/* Skills Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {skills.map((skill, index) => (
                            <div 
                                key={index}
                                onClick={() => setActiveSkill(activeSkill === index ? null : index)}
                                className={`relative group cursor-pointer transition-all duration-300 ${
                                    activeSkill === index ? 'scale-105' : 'hover:scale-105'
                                }`}
                            >
                                <CircularProgress 
                                    percentage={skill.percentage}
                                    skill={skill.name}
                                    icon={skill.icon}
                                    color={skill.color}
                                />
                                
                                {/* Skill Details */}
                                <div className={`mt-4 text-center transition-all duration-300 ${
                                    activeSkill === index ? 'opacity-100' : 'opacity-80 group-hover:opacity-100'
                                }`}>
                                    <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                                    <p className="text-sm text-gray-400 mt-1">Expert Level</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Additional Skills */}
                    <div className="mt-16">
                        <h3 className="text-2xl font-bold text-white text-center mb-8">Additional Expertise</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {['Responsive Design', 'UI/UX Principles', 'API Development', 'DevOps Basics'].map((skill, index) => (
                                <div 
                                    key={index}
                                    className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700 hover:border-yellow-500/50 transition-colors text-center"
                                >
                                    <div className="text-yellow-500 font-semibold">{skill}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faTimes, 
  faDownload, 
  faCode, 
  faPalette, 
  faServer, 
  faDatabase,
  faRocket,
  faLightbulb,
  faUsers,
  faChartLine,
  faGlobe,
  faGraduationCap,
  faBriefcase,
  faAward,
  faHeart,
  faCertificate,
  faHandshake,
  faCogs,
  faMobile,
  faCloud
} from '@fortawesome/free-solid-svg-icons';
import { 
  faGithub,

} from '@fortawesome/free-brands-svg-icons';
import propic from '../images/propic.jpg';

const About = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeSkill, setActiveSkill] = useState(null);
    const [activeTab, setActiveTab] = useState('skills');

    // Skills data
    const skills = [
        { name: 'HTML5', percentage: 95, icon: faCode, color: 'from-orange-500 to-red-500', category: 'frontend' },
        { name: 'CSS3', percentage: 90, icon: faPalette, color: 'from-blue-500 to-cyan-500', category: 'frontend' },
        { name: 'JavaScript', percentage: 85, icon: faCode, color: 'from-yellow-500 to-orange-500', category: 'frontend' },
        { name: 'React.js', percentage: 80, icon: faCode, color: 'from-cyan-500 to-blue-500', category: 'frontend' },
        { name: 'Next.js', percentage: 75, icon: faRocket, color: 'from-gray-500 to-gray-800', category: 'frontend' },
        { name: 'Tailwind CSS', percentage: 95, icon: faPalette, color: 'from-teal-500 to-cyan-500', category: 'frontend' },
        { name: 'Django', percentage: 90, icon: faServer, color: 'from-green-500 to-emerald-500', category: 'backend' },
        { name: 'Python', percentage: 88, icon: faCode, color: 'from-blue-500 to-indigo-500', category: 'backend' },
        { name: 'Java', percentage: 88, icon: faCode, color: 'from-blue-500 to-indigo-500', category: 'backend' },
        { name: 'PostgreSQL', percentage: 75, icon: faDatabase, color: 'from-blue-400 to-blue-600', category: 'database' },
        { name: 'MySQL', percentage: 70, icon: faDatabase, color: 'from-green-400 to-green-600', category: 'database' },
        { name: 'React Native', percentage: 75, icon: faMobile, color: 'from-indigo-500 to-purple-500', category: 'mobile' },
        { name: 'Kotlin', percentage: 75, icon: faMobile, color: 'from-indigo-500 to-purple-500', category: 'mobile' },
        { name: 'Git', percentage: 65, icon: faGithub, color: 'from-orange-400 to-orange-600', category: 'devops' },
        { name: 'Docker', percentage: 65, icon: faGithub, color: 'from-orange-400 to-orange-600', category: 'devops' },
        { name: 'CI/CD', percentage: 65, icon: faGithub, color: 'from-orange-400 to-orange-600', category: 'devops' },
    ];

    // Experience timeline
    const experience = [
        {
            year: '2021 - Present',
            title: 'Senior Fullstack Developer',
            company: 'Freelance & Contract',
            description: 'Leading development of complex web applications and mentoring junior developers',
            achievements: ['Built 10+ production applications', 'Improved performance by 40%', 'Implemented CI/CD pipelines']
        },
        {
            year: '2024 - Present',
            title: 'Fullstack Developer',
            company: 'LevelUp Inc.',
            description: 'Developed and maintained web applications for various clients',
            achievements: ['Reduced load times by 60%', 'Increased user engagement by 35%']
        },
        {
            year: '2024',
            title: 'Frontend Developer',
            company: 'Playground Service Provder',
            description: 'Created responsive websites and user interfaces',
            achievements: ['Implemented design systems', 'Improved accessibility scores']
        }
    ];

    // Education
    const education = [
        {
            degree: 'BSc in Mechanical Engineering',
            institution: 'Haramaya University',
            year: '2016 - 2021',
            description: 'Specialized in software engineering and web technologies'
        }
    ];

    // Certifications
    const certifications = [
        { name: 'Programming Fundamentals', issuer: 'Udacity ', year: '2023' },
    ];

    // Personal traits
    const traits = [
        { icon: faLightbulb, title: 'Problem Solver', description: 'Creative approach to technical challenges' },
        { icon: faUsers, title: 'Team Player', description: 'Collaborative and communicative' },
        { icon: faChartLine, title: 'Results-Driven', description: 'Focus on measurable outcomes' },
        { icon: faHeart, title: 'Passionate', description: 'Love for coding and innovation' }
    ];

    const scrollToContact = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Skill categories
    const skillCategories = ['all', 'frontend', 'backend', 'database', 'mobile', 'devops'];
    const filteredSkills = activeTab === 'all' 
        ? skills 
        : skills.filter(skill => skill.category === activeTab);

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-black">
            {/* Hero Section */}
            <section className="relative pt-32 pb-32 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-transparent to-blue-500/10 " />
                <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-4xl mx-auto mb-16">
                        <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30">
                            <FontAwesomeIcon icon={faRocket} className="text-yellow-500" />
                            <span className="text-yellow-400 text-sm font-medium">About Me</span>
                        </div>
                        
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                            Crafting <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 bg-clip-text text-transparent animate-gradient">Digital Excellence</span>
                        </h1>
                        
                        <p className="text-xl text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed">
                            A passionate Fullstack Developer with expertise in creating innovative digital 
                            solutions that drive business growth and deliver exceptional user experiences.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Profile Card */}
                        <div className="relative group">
                            <div className="absolute -inset-4 bg-gradient-to-r from-yellow-500 via-orange-500 to-blue-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
                            <div className="relative">
                                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border-4 border-gray-800 overflow-hidden">
                                    <div className="p-8">
                                        <div className="flex flex-col items-center text-center">
                                            <div className="relative mb-6">
                                                <div className="w-48 h-48 rounded-full bg-gradient-to-br from-yellow-500/20 to-blue-500/20 p-1">
                                                    <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center overflow-hidden">
                                                        <div className="w-42 h-42 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                                                            <div className="text-center">
                                                                {propic ? 
                                                                  <img className="text-2xl" src={propic} alt="" /> 
                                                                 : 
                                                                  <div>
                                                                    <div className="text-5xl mb-2">👨‍💻</div>
                                                                    <div className="text-yellow-400 font-bold">Esrael Z.</div>
                                                                  </div>
                                                                }
                                                                
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="absolute -bottom-2 -right-2 animate-float">
                                                    <div className="px-4 py-2 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-sm font-bold shadow-lg">
                                                        Available
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <h3 className="text-2xl font-bold text-white mb-2">Esrael Zerihun</h3>
                                            <p className="text-gray-400 mb-4">Fullstack Developer & UI/UX Designer</p>
                                            
                                            <div className="flex items-center gap-4 text-sm text-gray-400">
                                                <div className="flex items-center gap-1">
                                                    <FontAwesomeIcon icon={faGlobe} className="text-yellow-500" />
                                                    <span>Addis Ababa, ET</span>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <FontAwesomeIcon icon={faBriefcase} className="text-yellow-500" />
                                                    <span>4+ Years</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="grid grid-cols-3 border-t border-gray-800">
                                        <div className="text-center p-4 border-r border-gray-800">
                                            <div className="text-2xl font-bold text-white">35+</div>
                                            <div className="text-xs text-gray-400">Projects</div>
                                        </div>
                                        <div className="text-center p-4 border-r border-gray-800">
                                            <div className="text-2xl font-bold text-white">10+</div>
                                            <div className="text-xs text-gray-400">Clients</div>
                                        </div>
                                        <div className="text-center p-4">
                                            <div className="text-2xl font-bold text-white">100%</div>
                                            <div className="text-xs text-gray-400">Satisfaction</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* About Content */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-3xl font-bold text-white mb-6">
                                    Transforming Ideas into <span className="text-yellow-400">Digital Reality</span>
                                </h2>
                                
                                <div className="space-y-4 text-gray-300 leading-relaxed">
                                    <p>
                                        Hello! I'm Esrael, a dedicated Fullstack Developer with over 4 years of 
                                        experience in creating cutting-edge digital solutions. My expertise spans 
                                        across the entire development lifecycle, from conceptualization to deployment.
                                    </p>
                                    
                                    <p>
                                        I specialize in building scalable web applications, intuitive mobile apps, 
                                        and robust backend systems. My approach combines technical excellence with 
                                        creative problem-solving to deliver solutions that exceed expectations.
                                    </p>
                                    
                                    {isModalOpen && (
                                        <div className="mt-4 p-6 bg-gray-800/50 rounded-xl border border-gray-700 backdrop-blur-sm">
                                            <div className="flex justify-between items-start mb-4">
                                                <h4 className="text-lg font-semibold text-white">Professional Journey</h4>
                                                <button
                                                    onClick={() => setIsModalOpen(false)}
                                                    className="text-gray-400 hover:text-white transition-colors"
                                                >
                                                    <FontAwesomeIcon icon={faTimes} />
                                                </button>
                                            </div>
                                            <div className="space-y-3 text-gray-300">
                                                <p>
                                                    My journey in tech started with a passion for problem-solving 
                                                    and has evolved into a career dedicated to creating meaningful 
                                                    digital experiences.
                                                </p>
                                                <p>
                                                    I've had the privilege of working with diverse clients across 
                                                    industries, from startups to established enterprises, helping 
                                                    them leverage technology to achieve their business objectives.
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

                            {/* Personal Traits */}
                            <div className="grid grid-cols-2 gap-4">
                                {traits.map((trait, index) => (
                                    <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-gray-800/30">
                                        <div className="p-2 rounded-lg bg-gradient-to-br from-yellow-500/20 to-orange-500/20">
                                            <FontAwesomeIcon icon={trait.icon} className="text-yellow-500" />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-medium text-sm">{trait.title}</h4>
                                            <p className="text-gray-400 text-xs">{trait.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* CTA Buttons */}
                            <div className="pt-6 border-t border-gray-800">
                                <div className="flex flex-wrap gap-4">
                                    <button 
                                        onClick={scrollToContact}
                                        className="px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold rounded-lg hover:opacity-90 transition-all duration-300 hover:scale-105 flex items-center gap-2"
                                    >
                                        <FontAwesomeIcon icon={faHandshake} />
                                        Start Collaboration
                                    </button>
                                    <button className="px-6 py-3 border-2 border-yellow-500 text-yellow-500 font-semibold rounded-lg hover:bg-yellow-500 hover:text-gray-900 transition-all duration-300 hover:scale-105 flex items-center gap-2">
                                        <FontAwesomeIcon icon={faDownload} />
                                        Download CV
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="py-20 bg-gray-900/30">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Technical <span className="text-yellow-400">Expertise</span>
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Mastery of modern technologies and frameworks
                        </p>
                    </div>

                    {/* Skill Categories */}
                    <div className="flex flex-wrap justify-center gap-3 mb-12">
                        {skillCategories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveTab(category)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 capitalize ${
                                    activeTab === category
                                        ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-gray-900'
                                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                                }`}
                            >
                                {category === 'all' ? 'All Skills' : category}
                                <span className="ml-2 text-xs opacity-75">
                                    ({skills.filter(s => category === 'all' || s.category === category).length})
                                </span>
                            </button>
                        ))}
                    </div>

                    {/* Skills Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {filteredSkills.map((skill, index) => (
                            <div 
                                key={index}
                                onClick={() => setActiveSkill(activeSkill === index ? null : index)}
                                className={`relative group cursor-pointer transition-all duration-300 ${
                                    activeSkill === index ? 'scale-105' : 'hover:scale-105'
                                }`}
                            >
                                
                                <div className={`mt-4 text-center transition-all duration-300 ${
                                    activeSkill === index ? 'opacity-100' : 'opacity-80 group-hover:opacity-100'
                                }`}>
                                    <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                                    <div className="flex items-center justify-center gap-2 mt-2">
                                        <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden">
                                            <div 
                                                className="h-full bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full"
                                                style={{ width: `` }}
                                            />
                                        </div>
                                        <span className="text-sm text-gray-400"></span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Skills Summary */}
                    <div className="mt-16 p-8 bg-gray-900/50 rounded-2xl border border-gray-800">
                        <h3 className="text-2xl font-bold text-white mb-6 text-center">Skills Summary</h3>
                        <div className="grid md:grid-cols-4 gap-6">
                            <div className="text-center p-4">
                                <div className="text-3xl font-bold text-yellow-400 mb-2">Frontend</div>
                                <p className="text-gray-400 text-sm">React, Next.js, HTML5, CSS3</p>
                            </div>
                            <div className="text-center p-4">
                                <div className="text-3xl font-bold text-yellow-400 mb-2">Backend</div>
                                <p className="text-gray-400 text-sm">Django, Node.js, Python, Java</p>
                            </div>
                            <div className="text-center p-4">
                                <div className="text-3xl font-bold text-yellow-400 mb-2">Mobile</div>
                                <p className="text-gray-400 text-sm">React Native, Flutter, Kotlin</p>
                            </div>
                            <div className="text-center p-4">
                                <div className="text-3xl font-bold text-yellow-400 mb-2">DevOps</div>
                                <p className="text-gray-400 text-sm">Git, Docker, CI/CD</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Experience & Education */}
            <section className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Experience */}
                        <div>
                            <div className="flex items-center gap-3 mb-8">
                                <FontAwesomeIcon icon={faBriefcase} className="text-2xl text-yellow-500" />
                                <h2 className="text-3xl font-bold text-white">Professional Journey</h2>
                            </div>
                            
                            <div className="space-y-8">
                                {experience.map((exp, index) => (
                                    <div key={index} className="relative pl-8">
                                        <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-yellow-500/50 to-transparent" />
                                        <div className="absolute left-0 top-4 -translate-x-1/2 w-3 h-3 rounded-full bg-yellow-500" />
                                        
                                        <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 p-6 hover:border-yellow-500/50 transition-colors">
                                            <div className="flex justify-between items-start mb-4">
                                                <div>
                                                    <h3 className="text-xl font-semibold text-white mb-1">{exp.title}</h3>
                                                    <p className="text-yellow-400">{exp.company}</p>
                                                </div>
                                                <span className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full">
                                                    {exp.year}
                                                </span>
                                            </div>
                                            
                                            <p className="text-gray-400 mb-4">{exp.description}</p>
                                            
                                            <div className="space-y-2">
                                                {exp.achievements.map((achievement, idx) => (
                                                    <div key={idx} className="flex items-center gap-2">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
                                                        <span className="text-gray-300 text-sm">{achievement}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Education & Certifications */}
                        <div>
                            <div className="flex items-center gap-3 mb-8">
                                <FontAwesomeIcon icon={faGraduationCap} className="text-2xl text-yellow-500" />
                                <h2 className="text-3xl font-bold text-white">Education & Certifications</h2>
                            </div>
                            
                            <div className="space-y-8">
                                {/* Education */}
                                <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 p-6">
                                    <h3 className="text-xl font-semibold text-white mb-4">Education</h3>
                                    <div className="space-y-6">
                                        {education.map((edu, index) => (
                                            <div key={index} className="pb-4 border-b border-gray-800 last:border-0">
                                                <h4 className="text-lg font-medium text-white mb-1">{edu.degree}</h4>
                                                <p className="text-yellow-400 text-sm mb-2">{edu.institution}</p>
                                                <div className="flex justify-between items-center">
                                                    <span className="text-gray-400 text-sm">{edu.year}</span>
                                                    <span className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded">
                                                        Completed
                                                    </span>
                                                </div>
                                                <p className="text-gray-400 text-sm mt-2">{edu.description}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Certifications */}
                                <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 p-6">
                                    <h3 className="text-xl font-semibold text-white mb-4">Certifications</h3>
                                    <div className="space-y-4">
                                        {certifications.map((cert, index) => (
                                            <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-gray-800/30">
                                                <div>
                                                    <h4 className="text-white font-medium">{cert.name}</h4>
                                                    <p className="text-gray-400 text-sm">{cert.issuer}</p>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <FontAwesomeIcon icon={faCertificate} className="text-yellow-500" />
                                                    <span className="text-gray-300 text-sm">{cert.year}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Tools & Technologies */}
                                <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 p-6">
                                    <h3 className="text-xl font-semibold text-white mb-4">Development Tools</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {['VS Code', 'Git', 'Docker', 'Figma', 'Postman', 'Chrome DevTools'].map((tool, index) => (
                                            <span
                                                key={index}
                                                className="px-3 py-1.5 bg-gray-800/50 text-gray-300 rounded-lg text-sm hover:bg-gray-800 transition-colors"
                                            >
                                                {tool}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Philosophy Section */}
            <section className="py-20 bg-gray-900/30">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30">
                            <FontAwesomeIcon icon={faLightbulb} className="text-yellow-500" />
                            <span className="text-yellow-400 text-sm font-medium">My Philosophy</span>
                        </div>
                        
                        <h2 className="text-4xl font-bold text-white mb-8">
                            Building with <span className="text-yellow-400">Purpose</span>
                        </h2>
                        
                        <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800 p-8">
                            <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                                "I believe that great software is built at the intersection of technical 
                                excellence and human-centered design. Every line of code should serve a 
                                purpose, every interface should feel intuitive, and every solution should 
                                make a meaningful impact."
                            </p>
                            
                            <div className="flex items-center justify-center gap-8">
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-yellow-400">Clean</div>
                                    <div className="text-gray-400 text-sm">Code Quality</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-yellow-400">Efficient</div>
                                    <div className="text-gray-400 text-sm">Performance</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-yellow-400">Scalable</div>
                                    <div className="text-gray-400 text-sm">Architecture</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
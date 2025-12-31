import React, { useState } from 'react';
import { 
  Code, 
  Globe, 
  Github, 
  ExternalLink, 
  Filter,
  Smartphone,
  Palette,
  Database,
  Cloud,
  Star,
  Zap,
  Award,
  ChevronRight
} from 'lucide-react';
import abrencoffee from '../assets/abrencoffee.png';
import levelupet from '../assets/levelupet.png';
import wubcourtyard from '../assets/wubcourtyard.png';
import sms from '../assets/sms.png';
import { NavLink, useNavigate } from 'react-router-dom';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const navigate = useNavigate();
  
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with real-time inventory, payment processing, and admin dashboard.",
      category: "web",
      tags: ["React", "Django", "MySQL", "Stripe", "Swish", "PayPal"],
      image: abrencoffee,
      github: "https://github.com",
      live: "https://abren-coffee-production-uzfs.vercel.app/",
      featured: true
    },
    {
      id: 2,
      title: "Fitness Tracker App",
      description: "Mobile application for tracking workouts, nutrition, and fitness progress with AI recommendations.",
      category: "mobile",
      tags: ["React Native", "Firebase", "Redux"],
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      github: "https://github.com",
      live: "#",
      featured: true
    },
    {
      id: 3,
      title: "School Management System",
      description: "A comprehensive school management system with student records, attendance tracking, and grade management.",
      category: "web",
      tags: ["React", "Django", "PostgreSQL", "Docker", "Tailwind CSS", "Rest Framework"],
      image: sms,
      github: "https://github.com",
      live: ""
    },
    {
      id: 4,
      title: "Wub Courtyard",
      description: "Service provider platform that allows users to view available free playground time slots and register easily online.",
      category: "web",
      tags: ["React", "API Integration", "Django", "PostgreSQL", "Tailwind CSS"],
      image: wubcourtyard,
      github: "https://github.com",
      live: "https://wubcourtyard.com"
    },
    {
      id: 5,
      title: "LevelUpet",
      description: "A marketing and service platform for any businesses related work",
      category: "web",
      tags: ["React", "Django", "Docker", "PostgreSQL", "Tailwind CSS"],
      image: levelupet,
      github: "https://github.com",
      live: "https://levelupet.com"
    },
    {
      id: 6,
      title: "Social Media Analytics",
      description: "Analytics dashboard for social media metrics with customizable reports and insights.",
      category: "data",
      tags: ["Python", "Django", "D3.js"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      github: "https://github.com",
      live: ""
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects', icon: <Filter size={18} /> },
    { id: 'web', label: 'Web Development', icon: <Globe size={18} /> },
    { id: 'mobile', label: 'Mobile Apps', icon: <Smartphone size={18} /> },
    { id: 'data', label: 'Data Visualization', icon: <Database size={18} /> },
    { id: 'design', label: 'UI/UX Design', icon: <Palette size={18} /> }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-900 to-black py-10 sm:px-6">
      <div className="max-w-9xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Projects</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Explore a curated collection of my work. Each project demonstrates technical expertise, 
            creative problem-solving, and attention to detail in software development.
          </p>
        </div>

        {/* Filter Buttons - Dark Theme */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl transition-all duration-300 border ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-500/20 border-blue-500'
                  : 'bg-gray-800/50 text-gray-300 hover:text-white border-gray-700 hover:border-gray-600 hover:bg-gray-800/80'
              }`}
            >
              {filter.icon}
              <span className="font-medium">{filter.label}</span>
            </button>
          ))}
        </div>

        {/* Featured Projects - Dark Theme */}
        {filteredProjects.filter(p => p.featured).length > 0 && (
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg">
                <Star className="text-white" size={24} />
              </div>
              <h2 className="text-3xl font-bold text-white">
                Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Projects</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {filteredProjects
                .filter(project => project.featured)
                .map((project) => (
                  <div 
                    key={project.id} 
                    className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-2xl border border-gray-700/50 hover:border-blue-500/30 transition-all duration-500 hover:scale-[1.02]"
                  >
                    <div className="relative h-56 overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
                      <div className="absolute top-4 right-4">
                        <span className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium rounded-full shadow-lg">
                          Featured
                        </span>
                      </div>
                    </div>
                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 mb-6 leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-8">
                        {project.tags.map((tag) => (
                          <span 
                            key={tag}
                            className="px-3 py-1.5 bg-gray-800 text-blue-300 text-xs font-medium rounded-full border border-gray-700"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex gap-4">
                          <a 
                            href={project.github}
                            className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors group/link"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <div className="p-2 bg-gray-800 rounded-lg group-hover/link:bg-gray-700 transition-colors">
                              <Github size={18} />
                            </div>
                            <span className="font-medium">View Code</span>
                          </a>
                          <a 
                            href={project.live}
                            className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors group/link"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <div className="p-2 bg-gray-800 rounded-lg group-hover/link:bg-gray-700 transition-colors">
                              <ExternalLink size={18} />
                            </div>
                            <span className="font-medium">Live Demo</span>
                          </a>
                        </div>
                        <ChevronRight className="text-gray-500 group-hover:text-blue-400 transition-colors" />
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}

        {/* All Projects Grid - Dark Theme */}
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-white mb-10">
            All <span className="text-gray-400">Projects</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div 
                key={project.id}
                className="group bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-xl overflow-hidden hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-gray-900/80 text-gray-300 text-xs font-medium rounded-full border border-gray-700">
                      {project.category.toUpperCase()}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex gap-2">
                      <a 
                        href={project.github}
                        className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors text-gray-300 hover:text-white"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github size={18} />
                      </a>
                      <a 
                        href={project.live}
                        className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors text-gray-300 hover:text-white"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={18} />
                      </a>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm mb-5 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span 
                        key={tag}
                        className="px-2.5 py-1 bg-blue-900/20 text-blue-300 text-xs font-medium rounded-full border border-blue-900/30"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-2.5 py-1 text-gray-500 text-xs font-medium">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action - Dark Theme */}
        <div className="mt-20">
          <div className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-12 overflow-hidden border border-gray-700">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 to-purple-900/10" />
            <div className="relative z-10 text-center">
              <div className="inline-flex items-center gap-2 bg-blue-900/30 text-blue-300 px-4 py-2 rounded-full mb-6">
                <Cloud size={16} />
                <span className="text-sm font-medium">Let's Collaborate</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Bring Your Ideas to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Life</span>?
              </h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
                Whether you have a project in mind or just want to explore possibilities, 
                I'm here to help transform your vision into reality.
              </p>
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300"
              >
                <span>Start a Project</span>
                <ChevronRight className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
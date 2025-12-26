import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPaintBrush, 
  faCode, 
  faComments,
  faMobileAlt,
  faRocket,
  faLightbulb,
  faShieldAlt,
  faChartLine,
  faServer,
  faDatabase,
  faCloud,
  faCogs,
  faUsers,
  faLayerGroup,
  faMagic,
  faBullseye,
  faSync,
  faCheckCircle,
  faHandshake,
  faClock
} from '@fortawesome/free-solid-svg-icons';

const Services = () => {
  const [activeService, setActiveService] = useState('web-dev');
  const [hoveredService, setHoveredService] = useState(null);

  // Main Services
  const mainServices = [
    {
      id: 'ui-ux',
      title: 'UI/UX Design',
      icon: faPaintBrush,
      shortDesc: 'Beautiful, intuitive user interfaces',
      description: 'Creating beautiful, intuitive interfaces with user-centered design principles for optimal user experience.',
      features: [
        'User Research & Personas',
        'Wireframing & Prototyping',
        'Interactive Mockups',
        'Design Systems',
        'Usability Testing',
        'Accessibility Compliance'
      ],
      gradient: 'from-pink-500 via-purple-500 to-pink-600',
      color: 'text-pink-400',
      bgColor: 'bg-pink-500/10',
      stats: ['25+ Projects', '95% Satisfaction', '2 Weeks Avg'],
      details: 'I specialize in creating user-centered designs that combine aesthetics with functionality. Every interface is crafted through extensive research, prototyping, and testing to ensure optimal user experience across all devices.'
    },
    {
      id: 'web-dev',
      title: 'Web Development',
      icon: faCode,
      shortDesc: 'Modern, scalable web applications',
      description: 'Building responsive, high-performance web applications using modern technologies and best practices.',
      features: [
        'Full-Stack Development',
        'Progressive Web Apps',
        'API Development',
        'Performance Optimization',
        'E-commerce Solutions',
        'SEO Implementation'
      ],
      gradient: 'from-blue-500 via-cyan-500 to-blue-600',
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      stats: ['20+ Projects', '99% Uptime', '4 Weeks Avg'],
      details: 'From dynamic web applications to complex enterprise solutions, I build using cutting-edge technologies like React, Next.js, and Django. Focus on scalability, security, and maintainability.'
    },
    {
      id: 'mobile-dev',
      title: 'Mobile App Development',
      icon: faMobileAlt,
      shortDesc: 'Native & cross-platform mobile apps',
      description: 'Creating engaging mobile applications for iOS and Android with native performance and modern features.',
      features: [
        'React Native Development',
        'iOS & Android Native',
        'App Store Optimization',
        'Push Notifications',
        'Offline Capabilities',
        'In-App Purchases'
      ],
      gradient: 'from-indigo-500 via-purple-500 to-indigo-600',
      color: 'text-indigo-400',
      bgColor: 'bg-indigo-500/10',
      stats: ['5+ Apps', '4.8 Avg Rating', '6 Weeks Avg'],
      details: 'Developing mobile applications that provide seamless user experiences across iOS and Android platforms. Focus on performance, intuitive navigation, and engaging interactions.'
    },
    {
      id: 'consulting',
      title: 'Technical Consulting',
      icon: faComments,
      shortDesc: 'Expert guidance & strategy',
      description: 'Providing expert advice and solutions to help optimize your digital presence and achieve business goals.',
      features: [
        'Technology Stack Selection',
        'Digital Transformation',
        'Performance Audits',
        'Team Training',
        'Process Optimization',
        'Roadmap Planning'
      ],
      gradient: 'from-green-500 via-emerald-500 to-green-600',
      color: 'text-green-400',
      bgColor: 'bg-green-500/10',
      stats: ['10+ Clients', '100% ROI Focus', 'Ongoing Support'],
      details: 'Strategic guidance to help businesses leverage technology effectively. From startup MVPs to enterprise digital transformation.'
    }
  ];

  // Specialized Services
  const specializedServices = [
    {
      title: 'Cloud Solutions',
      icon: faCloud,
      description: 'AWS, Azure, and Google Cloud deployment',
      features: ['Serverless Architecture', 'Microservices', 'CI/CD Pipelines'],
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'DevOps',
      icon: faCogs,
      description: 'Automation & deployment pipelines',
      features: ['Docker & Kubernetes', 'Monitoring & Logging', 'Infrastructure as Code'],
      color: 'from-gray-600 to-gray-800'
    },
    {
      title: 'Database Design',
      icon: faDatabase,
      description: 'Optimized data architecture',
      features: ['SQL & NoSQL', 'Data Modeling', 'Performance Tuning'],
      color: 'from-teal-500 to-cyan-500'
    },
    {
      title: 'Team Augmentation',
      icon: faUsers,
      description: 'Supplement your existing team',
      features: ['Remote Collaboration', 'Agile Development', 'Code Reviews'],
      color: 'from-purple-500 to-pink-500'
    }
  ];

  // Technology Stack
  const techStack = {
    frontend: ['React', 'Next.js', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'Material-UI'],
    backend: ['Node.js', 'Django', 'Python', 'Express.js', 'PostgreSQL', 'MongoDB'],
    mobile: ['React Native', 'Flutter', 'iOS Swift', 'Android Kotlin'],
    tools: ['Git', 'Docker', 'AWS', 'Figma', 'Jira', 'VS Code']
  };

  // Process Steps
  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Planning',
      icon: faLightbulb,
      description: 'Understand requirements and define project scope',
      duration: '1-2 Weeks',
      deliverables: ['Project Brief', 'Technical Specs', 'Timeline']
    },
    {
      step: '02',
      title: 'Design & Prototyping',
      icon: faMagic,
      description: 'Create wireframes, mockups, and interactive prototypes',
      duration: '2-3 Weeks',
      deliverables: ['Wireframes', 'Design System', 'Interactive Prototype']
    },
    {
      step: '03',
      title: 'Development',
      icon: faCode,
      description: 'Build the solution with clean, maintainable code',
      duration: '4-8 Weeks',
      deliverables: ['MVP', 'Regular Updates', 'Code Reviews']
    },
    {
      step: '04',
      title: 'Testing & Quality',
      icon: faCheckCircle,
      description: 'Rigorous testing and performance optimization',
      duration: '1-2 Weeks',
      deliverables: ['Test Reports', 'Performance Metrics', 'Bug Fixes']
    },
    {
      step: '05',
      title: 'Deployment',
      icon: faRocket,
      description: 'Launch and go live with monitoring setup',
      duration: '1 Week',
      deliverables: ['Production Launch', 'Documentation', 'Training']
    },
    {
      step: '06',
      title: 'Maintenance',
      icon: faSync,
      description: 'Ongoing support and feature updates',
      duration: 'Ongoing',
      deliverables: ['Regular Updates', 'Security Patches', 'Performance Monitoring']
    }
  ];

  // Benefits
  const benefits = [
    {
      title: 'Transparent Communication',
      description: 'Regular updates and open channels for feedback',
      icon: faComments
    },
    {
      title: 'Agile Methodology',
      description: 'Flexible approach with iterative development',
      icon: faSync
    },
    {
      title: 'Quality Assurance',
      description: 'Rigorous testing at every development stage',
      icon: faCheckCircle
    },
    {
      title: 'Scalable Solutions',
      description: 'Future-proof architecture for growth',
      icon: faChartLine
    }
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-black">
      {/* Hero Section */}
      <section className="relative pt-24 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 via-transparent to-blue-500/5" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-yellow-500/10 via-transparent to-transparent" />
        
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30">
              <FontAwesomeIcon icon={faRocket} className="text-yellow-500" />
              <span className="text-yellow-400 text-sm font-medium">Professional Services</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Transform Your <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 bg-clip-text text-transparent animate-gradient">Digital Vision</span>
            </h1>
            
            <p className="text-xl text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed">
              Comprehensive digital solutions crafted with precision. From concept to deployment, 
              I deliver exceptional results that drive business growth and user engagement.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={scrollToContact}
                className="group px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-yellow-500/30 transition-all duration-300 hover:scale-105 flex items-center gap-3"
              >
                Start Your Project
                <FontAwesomeIcon icon={faRocket} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 border-2 border-yellow-500 text-yellow-500 font-semibold rounded-xl hover:bg-yellow-500 hover:text-gray-900 transition-all duration-300">
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Core <span className="text-yellow-400">Services</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Specialized solutions tailored to meet your specific business needs
            </p>
          </div>

          {/* Services Tabs */}
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {mainServices.map((service) => (
                <button
                  key={service.id}
                  onClick={() => setActiveService(service.id)}
                  onMouseEnter={() => setHoveredService(service.id)}
                  onMouseLeave={() => setHoveredService(null)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-3 ${
                    activeService === service.id
                      ? `bg-gradient-to-r ${service.gradient} text-white shadow-lg`
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  <FontAwesomeIcon icon={service.icon} />
                  {service.title}
                </button>
              ))}
            </div>

            {/* Active Service Details */}
            {mainServices.map((service) => (
              activeService === service.id && (
                <div key={service.id} className="bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800 p-8 shadow-2xl">
                  <div className="grid lg:grid-cols-2 gap-8">
                    <div>
                      <div className="flex items-center gap-4 mb-6">
                        <div className={`p-4 rounded-2xl bg-gradient-to-br ${service.gradient} bg-opacity-20`}>
                          <FontAwesomeIcon icon={service.icon} className={`text-3xl ${service.color}`} />
                        </div>
                        <div>
                          <h3 className="text-3xl font-bold text-white">{service.title}</h3>
                          <p className="text-gray-400">{service.shortDesc}</p>
                        </div>
                      </div>
                      
                      <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                        {service.details}
                      </p>

                      <div className="grid grid-cols-3 gap-4 mb-8">
                        {service.stats.map((stat, index) => (
                          <div key={index} className="text-center p-3 rounded-lg bg-gray-800/50">
                            <div className="text-yellow-400 font-bold text-lg">{stat.split(' ')[0]}</div>
                            <div className="text-gray-400 text-sm">{stat.split(' ').slice(1).join(' ')}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold text-white mb-6">Key Features</h4>
                      <div className="space-y-4">
                        {service.features.map((feature, index) => (
                          <div key={index} className="flex items-center gap-4 p-3 rounded-lg bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient}`} />
                            <span className="text-gray-300">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )
            ))}
          </div>

          {/* Specialized Services */}
          <div className="mt-20">
            <h3 className="text-3xl font-bold text-white text-center mb-12">
              Specialized <span className="text-yellow-400">Expertise</span>
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {specializedServices.map((service, index) => (
                <div
                  key={index}
                  className="group bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 p-6 hover:border-yellow-500/50 transition-all duration-300 hover:scale-[1.02]"
                >
                  <div className={`mb-4 p-3 rounded-lg bg-gradient-to-br ${service.color} bg-opacity-20 inline-block`}>
                    <FontAwesomeIcon 
                      icon={service.icon} 
                      className="text-xl text-white"
                    />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-3">{service.title}</h4>
                  <p className="text-gray-400 text-sm mb-4">{service.description}</p>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
                        <span className="text-gray-300 text-xs">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-gray-900/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Technology <span className="text-yellow-400">Stack</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(techStack).map(([category, technologies]) => (
              <div key={category} className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 p-6">
                <h3 className="text-xl font-semibold text-white mb-6 capitalize">
                  {category} <span className="text-yellow-500">Technologies</span>
                </h3>
                <div className="flex flex-wrap gap-3">
                  {technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 bg-gray-800/50 text-gray-300 rounded-lg text-sm hover:bg-gray-800 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            Development <span className="text-yellow-400">Process</span>
          </h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-yellow-500/50 via-orange-500/30 to-transparent" />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className={`relative ${index % 2 === 0 ? 'lg:text-right' : 'lg:col-start-2'}`}
                >
                  <div className={`bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800 p-8 hover:border-yellow-500/50 transition-colors ${
                    index % 2 === 0 ? 'lg:mr-12' : 'lg:ml-12'
                  }`}>
                    <div className="flex lg:flex-col items-start lg:items-center gap-4 mb-6">
                      <div className="relative">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-500/20 to-orange-500/20 flex items-center justify-center">
                          <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center">
                            <FontAwesomeIcon icon={step.icon} className="text-yellow-500 text-xl" />
                          </div>
                        </div>
                        <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center text-xs font-bold">
                          {step.step}
                        </div>
                      </div>
                      <div className={index % 2 === 0 ? 'lg:text-right' : ''}>
                        <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-800 text-gray-300 text-sm">
                          <FontAwesomeIcon icon={faClock} className="text-xs" />
                          {step.duration}
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-400 mb-6">{step.description}</p>
                    
                    <div>
                      <h4 className="text-gray-300 font-medium mb-3">Deliverables:</h4>
                      <div className="flex flex-wrap gap-2">
                        {step.deliverables.map((item, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-gray-800/50 text-gray-300 rounded-lg text-sm"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-900/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            Why <span className="text-yellow-400">Choose Me</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="mb-6 inline-flex p-4 rounded-2xl bg-gradient-to-br from-yellow-500/10 to-orange-500/10 group-hover:from-yellow-500/20 group-hover:to-orange-500/20 transition-all duration-300">
                  <FontAwesomeIcon icon={benefit.icon} className="text-3xl text-yellow-500" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-3xl p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 via-transparent to-blue-500/5" />
            
            <div className="relative">
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30">
                <FontAwesomeIcon icon={faHandshake} className="text-yellow-500" />
                <span className="text-yellow-400 text-sm font-medium">Let's Work Together</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Start Your <span className="text-yellow-400">Project?</span>
              </h2>
              
              <p className="text-xl text-gray-400 mb-10 max-w-3xl mx-auto">
                Whether you have a detailed specification or just an idea, 
                I'm here to help bring your vision to life with cutting-edge solutions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <button
                  onClick={scrollToContact}
                  className="group px-10 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-yellow-500/30 transition-all duration-300 hover:scale-105 flex items-center gap-3"
                >
                  <FontAwesomeIcon icon={faRocket} />
                  Start Free Consultation
                </button>
                
                <div className="text-gray-400">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2" />
                      <span>No obligation</span>
                    </div>
                    <div className="w-1 h-1 bg-gray-600 rounded-full" />
                    <div className="flex items-center">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2" />
                      <span>30-min call</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 pt-8 border-t border-gray-800">
                <p className="text-gray-500 text-sm">
                  Already know what you need? <button className="text-yellow-400 hover:text-yellow-300">Send detailed requirements →</button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faTimes, 
  faDownload, 
  faEnvelope, 
  faCode, 
  faPaintBrush, 
  faComments,
  faChevronDown,
  faChevronUp,
  faRocket,
  faLightbulb,
  faShieldAlt,
  faChartLine,
  faUsers,
  faAward,
  faHandshake,
  faStar,
  faArrowRight,
  faCalendarAlt,
  faCheckCircle,
  faMobileAlt,
  faServer,
  faCloud,
  faCogs,
  faPaperPlane
} from '@fortawesome/free-solid-svg-icons';
import { 
  faGithub,
  faLinkedin,
  faTwitter,
  faInstagram,
  faYoutube,
  faWhatsapp,
  faUpwork
} from '@fortawesome/free-brands-svg-icons';
import emailjs from '@emailjs/browser';
import propic from '/images/propic.jpg';
import Projects from './projects';
import { useNavigate } from 'react-router-dom';

// Custom FAQ Component
const FaqShow = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  
  const faqs = [
    {
      question: "What's included in your web development services?",
      answer: "My web development services include: responsive design, frontend/backend development, API integration, database setup, performance optimization, SEO implementation, and ongoing maintenance support. Each project is tailored to specific requirements.",
      category: 'services',
      votes: 15
    },
    {
      question: "How do you ensure project quality and timely delivery?",
      answer: "I follow agile methodology with regular milestones, code reviews, automated testing, and continuous integration. Projects include detailed planning, weekly updates, and thorough QA processes to ensure quality and meet deadlines.",
      category: 'process',
      votes: 12
    },
    {
      question: "What's your experience with mobile app development?",
      answer: "I develop cross-platform mobile apps using React Native and Flutter, with experience in native iOS/Android development. This includes push notifications, in-app purchases, offline capabilities, and app store optimization.",
      category: 'technical',
      votes: 10
    },
    {
      question: "Do you provide post-launch support and maintenance?",
      answer: "Yes, I offer 30-day free support post-launch, plus optional monthly maintenance packages that include updates, security patches, performance monitoring, and feature enhancements based on user feedback.",
      category: 'support',
      votes: 18
    },
    {
      question: "What technologies are you currently excited about?",
      answer: "Currently exploring Next.js 14, TypeScript 5, AI integration, serverless architectures, and Web3 technologies. I continuously learn and implement cutting-edge solutions to deliver modern, efficient applications.",
      category: 'technical',
      votes: 14
    }
  ];

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div 
          key={index}
          className="border border-gray-800 rounded-xl overflow-hidden transition-all duration-300 hover:border-yellow-500/50 bg-gray-900/30 group"
        >
          <button
            className="w-full px-6 py-5 flex justify-between items-center bg-gray-800/30 hover:bg-gray-800/50 transition-colors text-left group-hover:bg-gray-800/40"
            onClick={() => toggleFaq(index)}
          >
            <div className="flex-1 pr-4">
              <div className="flex items-center gap-3 mb-2">
                <span className="px-2 py-1 rounded text-xs font-medium bg-yellow-500/20 text-yellow-400">
                  {faq.category}
                </span>
                <div className="flex items-center gap-1 text-sm text-gray-400">
                  <FontAwesomeIcon icon={faStar} className="text-yellow-500 text-xs" />
                  <span>{faq.votes} found helpful</span>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-white">
                {faq.question}
              </h3>
            </div>
            <FontAwesomeIcon 
              icon={activeIndex === index ? faChevronUp : faChevronDown}
              className={`text-yellow-500 transition-transform duration-300 ${
                activeIndex === index ? 'rotate-180' : ''
              }`}
            />
          </button>
          
          <div 
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              activeIndex === index ? 'max-h-96' : 'max-h-0'
            }`}
          >
            <div className="px-6 py-5 border-t border-gray-800/50">
              <p className="text-gray-300 leading-relaxed mb-4">
                {faq.answer}
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-gray-800/30">
                <button className="flex items-center gap-2 text-sm text-gray-400 hover:text-yellow-500 transition-colors">
                  <FontAwesomeIcon icon={faStar} />
                  <span>Helpful? ({faq.votes})</span>
                </button>
                <button className="text-sm text-yellow-500 hover:text-yellow-400 transition-colors">
                  Ask follow-up →
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const Home = ({ interval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [activeService, setActiveService] = useState(null);
  const formRef = useRef(null);
  const navigate = useNavigate();
  
  const images = [
    'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1518834103326-9fd4c5fff6d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
  ];
  
  const skills = [
    { name: 'React.js', percentage: 90, gradient: 'from-cyan-500 to-blue-500', icon: faCode },
    { name: 'Next.js', percentage: 85, gradient: 'from-gray-600 to-gray-800', icon: faRocket },
    { name: 'TypeScript', percentage: 80, gradient: 'from-blue-500 to-indigo-500', icon: faCode },
    { name: 'Node.js', percentage: 82, gradient: 'from-green-500 to-emerald-500', icon: faServer },
    { name: 'Python/Django', percentage: 88, gradient: 'from-green-400 to-green-600', icon: faServer },
    { name: 'Tailwind CSS', percentage: 95, gradient: 'from-teal-500 to-cyan-500', icon: faPaintBrush },
    { name: 'React Native', percentage: 78, gradient: 'from-indigo-500 to-purple-500', icon: faMobileAlt },
    { name: 'Git/Github', percentage: 70, gradient: 'from-orange-500 to-yellow-500', icon: faGithub }
  ];
  
  const services = [
    {
      id: 'ui-ux',
      title: 'UI/UX Design',
      icon: faPaintBrush,
      shortDesc: 'Beautiful, intuitive user experiences',
      description: 'Creating beautiful, intuitive interfaces with user-centered design principles for optimal user experience.',
      features: ['Wireframing', 'Prototyping', 'User Testing', 'Design Systems', 'Accessibility'],
      gradient: 'from-pink-500 to-purple-600',
      color: 'text-pink-400',
      projects: '20+ Projects'
    },
    {
      id: 'web-dev',
      title: 'Web Development',
      icon: faCode,
      shortDesc: 'Modern, scalable web applications',
      description: 'Building responsive, high-performance web applications using modern technologies and best practices.',
      features: ['Full-Stack', 'Responsive Design', 'Performance', 'SEO', 'E-commerce'],
      gradient: 'from-blue-500 to-cyan-600',
      color: 'text-blue-400',
      projects: '20+ Projects'
    },
    {
      id: 'mobile-dev',
      title: 'Mobile Development',
      icon: faMobileAlt,
      shortDesc: 'Cross-platform mobile apps',
      description: 'Developing engaging mobile applications for iOS and Android with native performance and modern features.',
      features: ['React Native', 'iOS/Android', 'App Store', 'Push Notifications', 'Offline'],
      gradient: 'from-indigo-500 to-purple-600',
      color: 'text-indigo-400',
      projects: '5+ Apps'
    },
    {
      id: 'consulting',
      title: 'Technical Consulting',
      icon: faComments,
      shortDesc: 'Expert guidance & strategy',
      description: 'Providing expert advice and solutions to help optimize your digital presence and achieve business goals.',
      features: ['Strategy', 'Technical Audit', 'Planning', 'Support', 'Training'],
      gradient: 'from-green-500 to-emerald-600',
      color: 'text-green-400',
      projects: '5+ Clients'
    }
  ];

  const stats = [
    { value: '35+', label: 'Projects Completed', icon: faRocket, color: 'text-yellow-400' },
    { value: '4+', label: 'Years Experience', icon: faChartLine, color: 'text-orange-400' },
    { value: '10+', label: 'Happy Clients', icon: faUsers, color: 'text-blue-400' },
    { value: '100%', label: 'Satisfaction Rate', icon: faAward, color: 'text-green-400' }
  ];

  const processSteps = [
    { step: '01', title: 'Discovery', desc: 'Understanding goals & requirements' },
    { step: '02', title: 'Planning', desc: 'Strategy & roadmap creation' },
    { step: '03', title: 'Design', desc: 'Wireframes & prototypes' },
    { step: '04', title: 'Development', desc: 'Building the solution' },
    { step: '05', title: 'Testing', desc: 'Quality assurance & optimization' },
    { step: '06', title: 'Launch', desc: 'Deployment & support' }
  ];

  const testimonials = [
    {
      name: 'Ermias Desalegn',
      role: 'LevelUp Inc.',
      content: 'Esrael transformed our outdated website into a modern, high-performing platform that increased our conversions by 40%.',
      rating: 5
    },
    {
      name: 'Melat',
      role: 'Product Manager',
      content: 'The mobile app he built for us received 4.8 stars on the App Store. His attention to detail is exceptional.',
      rating: 5
    },
    {
      name: 'Arkipose',
      role: 'CTO, InnovateLabs',
      content: 'Working with Esrael was a game-changer. His technical expertise and communication skills are top-notch.',
      rating: 5
    }
  ];

  const socialLinks = [
    { icon: faGithub, href: 'https://github.com/ezraelz', label: 'GitHub', color: 'hover:text-gray-300' },
    { icon: faLinkedin, href: 'https://linkedin.com/in/esrael-zerihun', label: 'LinkedIn', color: 'hover:text-blue-600' },
    { icon: faTwitter, href: 'https://twitter.com/Esra82237692', label: 'Twitter', color: 'hover:text-blue-400' },
    { icon: faInstagram, href: 'https://instagram.com/hopeesra', label: 'Instagram', color: 'hover:text-pink-500' },
    { icon: faWhatsapp, href: 'https://wa.me/251965500734', label: 'WhatsApp', color: 'hover:text-green-500' }
  ];

  // Auto slide effect
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(slideInterval);
  }, [images.length, interval]);

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await emailjs.sendForm(
        'service_ijkaaoq',
        'template_acykx7i',
        formRef.current,
        '8CRviCi0PBVNvi0o9'
      );
      alert('Message sent successfully! I\'ll get back to you within 24 hours.');
      formRef.current.reset();
    } catch (error) {
      console.error('Email sending error:', error);
      alert('Failed to send the message. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const ProgressBar = ({ percentage, label, gradient, icon }) => (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-3">
          <FontAwesomeIcon icon={icon} className="text-gray-400" />
          <span className="text-sm font-medium text-gray-300">{label}</span>
        </div>
        <span className="text-sm font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
          
        </span>
      </div>
      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
        <div 
          className={`h-full rounded-full bg-gradient-to-r ${gradient} transition-all duration-1000 ease-out`}
          style={{ width: `` }}
        />
      </div>
    </div>
  );

  const ServiceCard = ({ service }) => (
    <div 
      className="group relative overflow-hidden rounded-2xl border border-gray-800 bg-gray-900/50 p-6 backdrop-blur-sm transition-all duration-500 hover:scale-[1.02] hover:border-yellow-500/50 hover:shadow-2xl"
      onMouseEnter={() => setActiveService(service.id)}
      onMouseLeave={() => setActiveService(null)}
    >
      <div className="relative z-10">
        <div className="mb-4 flex items-start justify-between">
          <div className="flex items-center gap-4">
            <div className={`p-3 rounded-xl bg-gradient-to-br ${service.gradient} bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300`}>
              <FontAwesomeIcon 
                icon={service.icon} 
                className={`text-xl ${service.color}`}
              />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">{service.title}</h3>
              <p className="text-gray-400 text-sm">{service.shortDesc}</p>
            </div>
          </div>
          <div className="px-3 py-1 rounded-full bg-gray-800 text-gray-300 text-xs">
            {service.projects}
          </div>
        </div>
        
        <p className="text-gray-400 mb-4">{service.description}</p>
        
        <div className="mt-4 border-t border-gray-800/50 pt-4">
          <h4 className="mb-2 text-sm font-semibold text-gray-300">Key Features:</h4>
          <div className="flex flex-wrap gap-2">
            {service.features.map((feature, idx) => (
              <span 
                key={idx}
                className="px-3 py-1 bg-gray-800/50 text-gray-300 rounded-lg text-xs hover:bg-gray-800 transition-colors"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>
        
        <button 
          onClick={()=> navigate(`/serviceSinglepage/${service.id}`)}
          className="mt-6 w-full py-3 bg-gradient-to-r from-gray-900 to-black text-gray-300 rounded-lg hover:from-gray-800 hover:to-gray-900 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 group-hover:translate-y-0 transform translate-y-2 opacity-0 group-hover:opacity-100">
          Explore Service
          <FontAwesomeIcon icon={faArrowRight} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
      <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black">
      {/* Hero Section */}
      <section 
        className="relative flex min-h-screen items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.92), rgba(15, 23, 42, 0.96)), url(${images[currentIndex]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          transition: 'background-image 1s ease-in-out',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-transparent to-blue-500/10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-500/5 via-transparent to-transparent" />
        
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-12 lg:flex-row lg:items-center py-10 lg:py-0">
            {/* Profile Image */}
            <div className="relative">
              <div className="absolute -inset-4 animate-pulse rounded-full bg-gradient-to-r from-yellow-500 via-orange-500 to-blue-500 opacity-20 blur-xl" />
              <div className="relative">
                <div className="relative">
                  <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full border-4 border-gray-800 overflow-hidden shadow-2xl">
                    <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
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
                  <div className="absolute -bottom-4 -right-4 animate-float">
                    <div className="px-4 py-2 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-sm font-bold shadow-lg flex items-center gap-2">
                      <FontAwesomeIcon icon={faRocket} />
                      Available for Hire
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Hero Content */}
            <div className="max-w-3xl text-center lg:text-left">
              <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30">
                <FontAwesomeIcon icon={faRocket} className="text-yellow-500" />
                <span className="text-yellow-400 text-sm font-medium">Fullstack Developer</span>
              </div>
              
              <h1 className="mb-6 text-4xl font-bold leading-tight text-white lg:text-6xl">
                <span className="block text-gray-300">Hi, I'm</span>
                <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 bg-clip-text text-transparent animate-gradient">
                  Esrael Zerihun
                </span>
              </h1>
              
              <p className="mb-8 text-lg leading-relaxed text-gray-400 lg:text-xl">
                I craft <span className="font-semibold text-yellow-400">digital experiences</span> that blend 
                innovative design with <span className="font-semibold text-orange-400">cutting-edge technology</span> 
                to drive business success and user delight.
              </p>
              
              <div className="mb-12 flex flex-wrap justify-center gap-4 lg:justify-start">
                <a 
                  href="#contact" 
                  className="group flex items-center gap-3 px-8 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-yellow-500/30 transition-all duration-300 hover:scale-105"
                >
                  <FontAwesomeIcon icon={faHandshake} />
                  Start a Project
                </a>
                <a 
                  href="#services"
                  className="group flex items-center gap-3 px-8 py-3 border-2 border-yellow-500 text-yellow-500 font-semibold rounded-xl hover:bg-yellow-500 hover:text-gray-900 transition-all duration-300 hover:scale-105"
                >
                  <FontAwesomeIcon icon={faCode} />
                  View Services
                </a>
                <a 
                  href="https://www.upwork.com/freelancers/~01b91a437444c6df65"
                  className="group flex items-center gap-3 px-8 py-3 border-2 border-yellow-500 text-yellow-500 font-semibold rounded-xl hover:bg-yellow-500 hover:text-gray-900 transition-all duration-300 hover:scale-105"
                >
                  <FontAwesomeIcon icon={faUpwork} />
                  
                </a>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {stats.map((stat, idx) => (
                  <div 
                    key={idx}
                    className="rounded-xl bg-gray-900/50 p-4 backdrop-blur-sm border border-gray-800 hover:border-yellow-500/50 transition-colors"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <FontAwesomeIcon icon={stat.icon} className={stat.color} />
                      <div className="text-2xl font-bold text-white">{stat.value}</div>
                    </div>
                    <div className="text-xs text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
            <div className="animate-bounce">
              <div className="flex h-10 w-6 justify-center rounded-full border-2 border-yellow-500">
                <div className="mt-2 h-3 w-1 animate-pulse rounded-full bg-yellow-500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Technical <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Expertise</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Mastery of modern technologies and frameworks that power today's digital solutions
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Core Technologies</h3>
                <div className="space-y-4">
                  {skills.map((skill, idx) => (
                    <ProgressBar 
                      key={idx}
                      percentage={skill.percentage}
                      label={skill.name}
                      gradient={skill.gradient}
                      icon={skill.icon}
                    />
                  ))}
                </div>
              </div>
              
              {/* Tech Stack */}
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800 p-6">
                <h4 className="text-xl font-semibold text-white mb-4">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Next.js', 'TypeScript', 'Node.js', 'Django', 'PostgreSQL', 'MySQL','Docker', 'Git', 'HTML5', 'CSS3', 'JavaScript', 'Python', 'Java'].map((tech, idx) => (
                    <span key={idx} className="px-3 py-1.5 bg-gray-800/50 text-gray-300 rounded-lg text-sm hover:bg-gray-800 transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Development Process</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {processSteps.map((step, idx) => (
                  <div key={idx} className="text-center p-4 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-yellow-500/50 transition-colors">
                    <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-r from-yellow-500/20 to-orange-500/20 flex items-center justify-center">
                      <div className="text-yellow-500 font-bold">{step.step}</div>
                    </div>
                    <h4 className="text-white font-semibold mb-1">{step.title}</h4>
                    <p className="text-gray-400 text-xs">{step.desc}</p>
                  </div>
                ))}
              </div>
              
              {/* Why Choose Me */}
              <div className="mt-8 bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800 p-6">
                <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
                  Why Choose Me
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-green-500" />
                    <span className="text-gray-300">End-to-end solution delivery</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-green-500" />
                    <span className="text-gray-300">Transparent communication</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-green-500" />
                    <span className="text-gray-300">Modern, scalable architecture</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-green-500" />
                    <span className="text-gray-300">Ongoing support & maintenance</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-900/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Professional <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to your business needs and goals
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
          
          {/* Additional Services */}
          <div className="mt-12 grid sm:grid-cols-3 gap-6">
            {[
              { title: 'API Development', icon: faServer, desc: 'REST & GraphQL APIs' },
              { title: 'Cloud Solutions', icon: faCloud, desc: '' },
              { title: 'DevOps', icon: faCogs, desc: 'CI/CD & Automation' }
            ].map((service, idx) => (
              <div key={idx} className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 p-4 text-center hover:border-yellow-500/50 transition-colors">
                <FontAwesomeIcon icon={service.icon} className="text-2xl text-yellow-500 mb-3" />
                <h4 className="text-white font-semibold mb-1">{service.title}</h4>
                <p className="text-gray-400 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Section */}
      <section id="services" className="py-20 bg-gray-900/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Projects/>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Client <span className="text-yellow-400">Testimonials</span>
            </h2>
            <p className="text-gray-400">What clients say about working with me</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800 p-6 hover:border-yellow-500/50 transition-colors">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FontAwesomeIcon key={i} icon={faStar} className="text-yellow-500" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-yellow-500/20 to-orange-500/20 flex items-center justify-center">
                    <span className="text-white font-bold">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & FAQ Section */}
      <section id="contact" className="py-20 bg-gray-900/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* FAQ Section */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Frequently Asked <span className="text-yellow-400">Questions</span>
                </h2>
                <p className="text-gray-400">
                  Find answers to common questions about working together
                </p>
              </div>
              <FaqShow />
              
              {/* Quick Contact */}
              <div className="mt-8 p-6 bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-gray-800">
                <h3 className="text-xl font-semibold text-white mb-4">Quick Contact</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <FontAwesomeIcon icon={faEnvelope} className="text-yellow-500" />
                    <a href="mailto:esraelzerihun3@gmail.com" className="text-gray-300 hover:text-yellow-400">
                      esraelzerihun3@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <FontAwesomeIcon icon={faWhatsapp} className="text-yellow-500" />
                    <a href="https://wa.me/251965500734" className="text-gray-300 hover:text-yellow-400">
                      +251 965500734
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800 p-8 shadow-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-yellow-500/20 to-orange-500/20">
                    <FontAwesomeIcon icon={faHandshake} className="text-2xl text-yellow-500" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">Start Your Project</h2>
                    <p className="text-gray-400 text-sm">Let's discuss your requirements</p>
                  </div>
                </div>

                <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="John Doe"
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="user_email"
                        required
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Project Type
                    </label>
                    <select
                      name="project_type"
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-colors"
                    >
                      <option value="">Select project type</option>
                      <option value="web">Website Development</option>
                      <option value="mobile">Mobile App</option>
                      <option value="design">UI/UX Design</option>
                      <option value="consulting">Consulting</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Your Message
                    </label>
                    <textarea
                      name="message"
                      required
                      rows="5"
                      placeholder="Tell me about your project, goals, timeline, and budget..."
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold rounded-lg hover:opacity-90 transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                  >
                    {isLoading ? (
                      <>
                        <div className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        Send Message
                        <FontAwesomeIcon icon={faPaperPlane} />
                      </>
                    )}
                  </button>
                </form>
              </div>

              {/* Social Links */}
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-white mb-4 text-center">Connect With Me</h3>
                <div className="flex justify-center gap-4">
                  {socialLinks.map((social, idx) => (
                    <a
                      key={idx}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 flex items-center justify-center rounded-xl bg-gray-800 text-gray-400 ${social.color} transition-all duration-300 hover:scale-110`}
                      aria-label={social.label}
                    >
                      <FontAwesomeIcon icon={social.icon} className="text-xl" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Esrael Zerihun
              </h3>
              <p className="text-sm text-gray-400">Fullstack Developer & UI/UX Designer</p>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-gray-500 text-sm">
                © {new Date().getFullYear()} All rights reserved.
              </p>
              <p className="text-gray-500 text-sm mt-1">
                Crafted with ❤️ using React & Tailwind CSS
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
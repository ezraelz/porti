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
  faChevronUp
} from '@fortawesome/free-solid-svg-icons';
import emailjs from '@emailjs/browser';

// Import images
import proPic from '../static/img/propic.jpg';
import bgImage from '../static/img/neon.webp';
import bgImage1 from '../static/img/bgImage.webp';
import bgImage2 from '../static/img/bgImage2.webp';
import bgImage3 from '../static/img/darkmode.webp';

// Custom FAQ Component (since faqShow.jsx is missing)
const FaqShow = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  
  const faqs = [
    {
      question: "What services do you offer?",
      answer: "I offer UI/UX design, full-stack web development, and consulting services. This includes everything from initial design concepts to fully functional web applications."
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary based on complexity. A simple website might take 2-3 weeks, while more complex applications can take 2-3 months. I provide detailed timelines during our initial consultation."
    },
    {
      question: "What is your development process?",
      answer: "I follow an agile approach: Discovery & Planning → Design → Development → Testing → Deployment → Maintenance. Regular communication and iterations are key."
    },
    {
      question: "Do you provide ongoing support?",
      answer: "Yes, I offer maintenance packages and ongoing support to ensure your website stays updated, secure, and performs optimally."
    },
    {
      question: "What technologies do you use?",
      answer: "I work with modern technologies including React, Next.js, Django, Tailwind CSS, JavaScript/TypeScript, and various databases and deployment platforms."
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
          className="border border-gray-700 rounded-lg overflow-hidden transition-all duration-300 hover:border-yellow-500/50"
        >
          <button
            className="w-full px-6 py-4 flex justify-between items-center bg-gray-800/50 hover:bg-gray-800 transition-colors"
            onClick={() => toggleFaq(index)}
          >
            <span className="text-left font-medium text-gray-100">
              {faq.question}
            </span>
            <FontAwesomeIcon 
              icon={activeIndex === index ? faChevronUp : faChevronDown}
              className="text-yellow-500 ml-4 transition-transform duration-300"
            />
          </button>
          
          <div 
            className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
              activeIndex === index ? 'max-h-96 py-4' : 'max-h-0'
            }`}
          >
            <p className="text-gray-400">
              {faq.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

const Home = ({ interval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef(null);
  
  const images = [bgImage, bgImage1, bgImage2, bgImage3];
  
  const skills = [
    { name: 'HTML', percentage: 95, gradient: 'from-orange-500 to-red-500' },
    { name: 'CSS', percentage: 90, gradient: 'from-blue-500 to-cyan-500' },
    { name: 'React', percentage: 80, gradient: 'from-cyan-500 to-blue-500' },
    { name: 'Django', percentage: 90, gradient: 'from-green-500 to-emerald-500' },
    { name: 'JavaScript', percentage: 85, gradient: 'from-yellow-500 to-orange-500' },
    { name: 'Tailwind CSS', percentage: 95, gradient: 'from-teal-500 to-cyan-500' }
  ];
  
  const services = [
    {
      id: 'ui-ux',
      title: 'UI/UX Design',
      icon: faPaintBrush,
      description: 'Creating beautiful, intuitive interfaces with user-centered design principles for optimal user experience.',
      features: ['Wireframing', 'Prototyping', 'User Testing', 'Design Systems'],
      gradient: 'from-pink-500/20 to-purple-600/20',
      color: 'text-pink-400'
    },
    {
      id: 'web-dev',
      title: 'Web Development',
      icon: faCode,
      description: 'Building responsive, high-performance web applications using modern technologies and best practices.',
      features: ['Full-Stack', 'Responsive Design', 'Performance', 'SEO'],
      gradient: 'from-blue-500/20 to-cyan-600/20',
      color: 'text-blue-400'
    },
    {
      id: 'consulting',
      title: 'Consulting',
      icon: faComments,
      description: 'Providing expert advice and solutions to help optimize your digital presence and achieve business goals.',
      features: ['Strategy', 'Technical Audit', 'Planning', 'Support'],
      gradient: 'from-green-500/20 to-emerald-600/20',
      color: 'text-green-400'
    }
  ];

  const stats = [
    { value: '50+', label: 'Projects Completed' },
    { value: '3+', label: 'Years Experience' },
    { value: '100%', label: 'Client Satisfaction' }
  ];

  const socialLinks = [
    { name: 'GitHub', href: '#', color: 'hover:text-yellow-400' },
    { name: 'LinkedIn', href: '#', color: 'hover:text-orange-400' },
    { name: 'Twitter', href: '#', color: 'hover:text-blue-400' }
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
      alert('Message sent successfully!');
      formRef.current.reset();
    } catch (error) {
      console.error('Email sending error:', error);
      alert('Failed to send the message. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const ProgressBar = ({ percentage, label, gradient }) => (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-gray-300">{label}</span>
        <span className="text-sm font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
          {percentage}%
        </span>
      </div>
      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
        <div 
          className={`h-full rounded-full bg-gradient-to-r ${gradient} transition-all duration-1000 ease-out`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );

  const ServiceCard = ({ service }) => (
    <div className="group relative overflow-hidden rounded-xl border border-gray-800 bg-gray-900/50 p-6 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:border-yellow-500/50 hover:shadow-2xl hover:shadow-yellow-500/10">
      <div className="relative z-10">
        <div className="mb-4 flex items-center">
          <div className={`mr-4 rounded-lg p-3 ${service.gradient} transition-transform duration-300 group-hover:scale-110`}>
            <FontAwesomeIcon 
              icon={service.icon} 
              className={`text-xl ${service.color}`}
            />
          </div>
          <h3 className="text-xl font-bold text-white">{service.title}</h3>
        </div>
        
        <p className="mb-4 text-gray-400">{service.description}</p>
        
        <div className="mt-4 border-t border-gray-800/50 pt-4">
          <h4 className="mb-2 text-sm font-semibold text-gray-300">Features:</h4>
          <div className="flex flex-wrap gap-2">
            {service.features.map((feature, idx) => (
              <span 
                key={idx}
                className="rounded-full bg-gray-800/50 px-3 py-1 text-xs text-gray-300"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>
        
        <button className="mt-6 w-full rounded-lg bg-gradient-to-r from-gray-900 to-black py-2 text-gray-400 transition-all duration-300 hover:bg-gradient-to-r hover:from-gray-800 hover:to-gray-900 hover:text-white group-hover:translate-y-0 group-hover:opacity-100 md:translate-y-4 md:opacity-0">
          Learn More →
        </button>
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-yellow-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-950 to-black">
      {/* Hero Section */}
      <section 
        className="relative flex min-h-screen items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.9), rgba(15, 23, 42, 0.95)), url(${images[currentIndex]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          transition: 'background-image 1s ease-in-out',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-transparent to-blue-500/10" />
        
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-12 lg:flex-row lg:items-center">
            {/* Profile Image */}
            <div className="relative">
              <div className="absolute -inset-4 animate-pulse rounded-full bg-gradient-to-r from-yellow-400 via-orange-500 to-blue-500 opacity-20 blur-xl" />
              <div className="relative">
                <img 
                  src={proPic} 
                  alt="Esrael Zerihun" 
                  className="h-64 w-64 rounded-full border-4 border-gray-800 object-cover shadow-2xl transition-transform duration-500 hover:scale-105 lg:h-80 lg:w-80"
                />
                <div className="absolute -bottom-4 -right-4 animate-float rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 px-4 py-2 text-sm font-bold text-white shadow-lg">
                  Available
                </div>
              </div>
            </div>

            {/* Hero Content */}
            <div className="max-w-2xl text-center lg:text-left">
              <h1 className="mb-6 text-4xl font-bold leading-tight text-white lg:text-6xl">
                <span className="block text-gray-300">Hi, I'm</span>
                <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-blue-500 bg-clip-text text-transparent">
                  Esrael Zerihun
                </span>
              </h1>
              
              <p className="mb-8 text-lg leading-relaxed text-gray-400 lg:text-xl">
                Fullstack Developer & UI/UX Designer crafting digital experiences 
                that blend <span className="font-semibold text-yellow-400">beauty</span> with{' '}
                <span className="font-semibold text-orange-400">functionality</span>
              </p>
              
              <div className="mb-12 flex flex-wrap justify-center gap-4 lg:justify-start">
                <a 
                  href="#contact" 
                  className="group flex items-center gap-2 rounded-lg bg-gradient-to-r from-yellow-500 to-orange-500 px-6 py-3 font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/30"
                >
                  <FontAwesomeIcon icon={faEnvelope} />
                  Get In Touch
                </a>
                <button className="group flex items-center gap-2 rounded-lg border-2 border-yellow-500 px-6 py-3 font-medium text-yellow-500 transition-all duration-300 hover:scale-105 hover:bg-yellow-500 hover:text-gray-900">
                  <FontAwesomeIcon icon={faDownload} />
                  Download Resume
                </button>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                {stats.map((stat, idx) => (
                  <div 
                    key={idx}
                    className="rounded-xl bg-gray-900/50 p-4 backdrop-blur-sm"
                  >
                    <div className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
            <div className="animate-bounce">
              <div className="flex h-10 w-6 justify-center rounded-full border-2 border-yellow-500">
                <div className="mt-2 h-3 w-1 animate-pulse rounded-full bg-yellow-500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-3xl font-bold text-white md:text-4xl">
            About <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Me</span>
          </h2>
          
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-yellow-500/10 to-blue-500/10 blur-2xl" />
              <div className="relative rounded-2xl border border-gray-800 bg-gray-900/50 p-6 backdrop-blur-sm lg:p-8">
                <h3 className="mb-4 text-2xl font-bold text-white">
                  Fullstack Developer & UI/UX Designer
                </h3>
                
                <div className="space-y-4 text-gray-300">
                  <p>
                    Hello! I'm Esrael, a passionate developer with expertise in creating 
                    engaging, user-friendly, and high-performance websites. I specialize 
                    in both front-end and back-end technologies.
                  </p>
                  
                  <p>
                    My focus is on delivering solutions that not only look great but also 
                    perform exceptionally well across all devices and platforms.
                  </p>
                  
                  <div className="mt-6 rounded-xl bg-gradient-to-r from-gray-900 to-black p-4">
                    <h4 className="mb-2 font-bold text-yellow-400">Currently Learning:</h4>
                    <div className="flex flex-wrap gap-2">
                      {['Next.js', 'TypeScript', 'AWS', 'GraphQL'].map((tech, idx) => (
                        <span 
                          key={idx}
                          className="rounded-full bg-gray-800/50 px-3 py-1 text-sm text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 flex gap-4">
                  <a 
                    href="#contact" 
                    className="rounded-lg bg-gradient-to-r from-yellow-500 to-orange-500 px-6 py-3 font-medium text-white transition-all duration-300 hover:scale-105"
                  >
                    Let's Connect
                  </a>
                  <button className="rounded-lg border-2 border-yellow-500 px-6 py-3 font-medium text-yellow-500 transition-all duration-300 hover:scale-105 hover:bg-yellow-500 hover:text-gray-900">
                    View Projects
                  </button>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="mb-6 text-2xl font-bold text-white">Skills & Expertise</h3>
              <div className="space-y-4">
                {skills.map((skill, idx) => (
                  <ProgressBar 
                    key={idx}
                    percentage={skill.percentage}
                    label={skill.name}
                    gradient={skill.gradient}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-4 text-center text-3xl font-bold text-white md:text-4xl">
            My <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-gray-400">
            Comprehensive solutions tailored to bring your digital vision to life
          </p>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact & FAQ Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* FAQ Section */}
            <div>
              <h2 className="mb-8 text-3xl font-bold text-white">
                Frequently Asked <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Questions</span>
              </h2>
              <FaqShow />
            </div>
            
            {/* Contact Form */}
            <div className="rounded-2xl border border-gray-800 bg-gray-900/50 p-6 backdrop-blur-sm lg:p-8">
              <h2 className="mb-2 text-2xl font-bold text-white">Get In Touch</h2>
              <p className="mb-8 text-gray-400">Have a project in mind? Let's discuss how we can work together.</p>
              
              <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
                <div>
                  <label htmlFor="title" className="mb-2 block text-sm font-medium text-gray-300">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="title"
                    id="title"
                    className="w-full rounded-lg border border-gray-700 bg-gray-900/50 px-4 py-3 text-white placeholder-gray-500 focus:border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500/50"
                    placeholder="What's this about?"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-300">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    id="email"
                    className="w-full rounded-lg border border-gray-700 bg-gray-900/50 px-4 py-3 text-white placeholder-gray-500 focus:border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500/50"
                    placeholder="you@example.com"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-300">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows="5"
                    className="w-full rounded-lg border border-gray-700 bg-gray-900/50 px-4 py-3 text-white placeholder-gray-500 focus:border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500/50"
                    placeholder="Tell me about your project..."
                    required
                  />
                </div>
                
                <button 
                  type="submit" 
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-yellow-500 to-orange-500 px-6 py-3 font-medium text-white transition-all duration-300 hover:scale-105 disabled:opacity-50"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <div className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <FontAwesomeIcon icon={faEnvelope} />
                    </>
                  )}
                </button>
                
                <p className="text-center text-sm text-gray-400">
                  I typically respond within 24 hours
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Esrael Zerihun
              </h3>
              <p className="text-sm text-gray-400">Fullstack Developer & UI/UX Designer</p>
            </div>
            
            <div className="flex gap-6">
              {socialLinks.map((link, idx) => (
                <a 
                  key={idx}
                  href={link.href}
                  className={`text-gray-400 transition-colors ${link.color}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
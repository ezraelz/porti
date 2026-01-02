import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPaintBrush, 
  faCode, 
  faMobileAlt,
  faComments,
  faRocket,
  faLightbulb,
  faCheckCircle,
  faSync,
  faChartLine,
  faClock,
  faUsers,
  faHandshake,
  faCalendarAlt,
  faDollarSign,
  faGlobe,
  faCogs,
  faShieldAlt,
  faArrowLeft,
  faPalette,
  faLayerGroup,
  faUserCheck,
  faSearch,
  faBrain,
  faBullseye,
  faMagic,
  faEye,
  faCloud,
  faChartBar,
  faCog,
  faGraduationCap,
  faTools
} from '@fortawesome/free-solid-svg-icons';
import { useNavigate, useParams } from 'react-router-dom';

const ServiceSinglePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [serviceData, setServiceData] = useState(null);

  // All services data
  const allServices = {
    'ui-ux': {
      id: 'ui-ux',
      title: 'UI/UX Design',
      icon: faPaintBrush,
      shortDesc: 'Beautiful, intuitive user interfaces',
      description: 'Creating beautiful, intuitive interfaces with user-centered design principles for optimal user experience.',
      longDescription: `I specialize in creating user-centered designs that combine aesthetics with functionality. Every interface is crafted through extensive research, prototyping, and testing to ensure optimal user experience across all devices.

      My design process focuses on understanding user behavior, business goals, and technical constraints to create interfaces that are not only beautiful but also highly functional and accessible.`,
      
      // Service Details
      duration: '2-4 Weeks',
      priceRange: '$100 - $20,000+',
      complexity: 'Medium to High',
      deliverables: [
        'User research report',
        'Wireframes & prototypes',
        'Interactive mockups',
        'Design system',
        'Usability testing report',
        'Accessibility audit'
      ],
      
      // Features
      features: [
        {
          title: 'User Research & Personas',
          description: 'Deep understanding of target users and their needs',
          icon: faSearch
        },
        {
          title: 'Wireframing & Prototyping',
          description: 'Interactive prototypes for user testing',
          icon: faLayerGroup
        },
        {
          title: 'Visual Design',
          description: 'Beautiful, modern interface designs',
          icon: faPalette
        },
        {
          title: 'Design Systems',
          description: 'Consistent component libraries and style guides',
          icon: faMagic
        },
        {
          title: 'Usability Testing',
          description: 'Real user feedback and iteration',
          icon: faUserCheck
        },
        {
          title: 'Accessibility Compliance',
          description: 'WCAG 2.1 AA compliant designs',
          icon: faEye
        }
      ],
      
      // Technology Stack for this service
      techStack: [
        'Figma',
        'Sketch',
        'Adobe XD',
        'InVision',
        'Principle',
        'Miro',
        'UserTesting',
        'Hotjar'
      ],
      
      // Process Steps specific to this service
      process: [
        {
          step: '1',
          title: 'Discovery & Research',
          description: 'User interviews, competitor analysis, market research',
          duration: '3-7 Days'
        },
        {
          step: '2',
          title: 'Information Architecture',
          description: 'Site maps, user flows, content strategy',
          duration: '4-6 Days'
        },
        {
          step: '3',
          title: 'Wireframing',
          description: 'Low-fidelity prototypes and layout planning',
          duration: '5-8 Days'
        },
        {
          step: '4',
          title: 'Visual Design',
          description: 'High-fidelity mockups and style guide',
          duration: '1-2 Weeks'
        },
        {
          step: '5',
          title: 'Prototyping',
          description: 'Interactive prototypes for user testing',
          duration: '4-7 Days'
        },
        {
          step: '6',
          title: 'Testing & Handoff',
          description: 'Usability testing and developer handoff',
          duration: '3-5 Days'
        }
      ],
      
      // Case Studies / Examples
      caseStudies: [
        {
          title: 'Fintech Dashboard Redesign',
          description: 'Redesigned complex financial dashboard for better usability',
          results: 'Increased user engagement by 65%',
          tech: ['Figma', 'UserTesting', 'Design System']
        },
        {
          title: 'E-commerce Mobile App',
          description: 'Complete UX overhaul for mobile shopping experience',
          results: 'Reduced cart abandonment by 40%',
          tech: ['Sketch', 'Principle', 'Adobe XD']
        }
      ],
      
      // Stats
      stats: [
        { label: 'Projects Completed', value: '25+' },
        { label: 'Client Satisfaction', value: '95%' },
        { label: 'Design Iterations', value: '50+ Avg' },
        { label: 'Usability Score', value: '9.5/10' }
      ],
      
      // Pricing Tiers
      pricing: [
        {
          tier: 'Basic',
          price: '$100',
          description: 'For landing pages or simple apps',
          features: [
            'Up to 5 screens',
            'Basic wireframes',
            'Visual design',
            '1 revision round'
          ]
        },
        {
          tier: 'Professional',
          price: '$200',
          description: 'For web apps or mobile apps',
          features: [
            'User research',
            'Interactive prototypes',
            'Design system',
            '3 revision rounds',
            'Developer handoff'
          ],
          popular: true
        },
        {
          tier: 'Enterprise',
          price: 'Custom',
          description: 'For complex products or design systems',
          features: [
            'Full UX research',
            'Advanced prototyping',
            'Complete design system',
            'Unlimited revisions',
            'Ongoing design support'
          ]
        }
      ],
      gradient: 'from-pink-500 to-purple-600',
      color: 'text-pink-400'
    },

    'web-dev': {
      id: 'web-dev',
      title: 'Web Development',
      icon: faCode,
      shortDesc: 'Modern, scalable web applications',
      description: 'Building responsive, high-performance web applications using modern technologies and best practices.',
      longDescription: `From dynamic web applications to complex enterprise solutions, I build using cutting-edge technologies like React, Next.js, and Django. Focus on scalability, security, and maintainability.

      I specialize in creating web applications that not only look stunning but also perform exceptionally well. Every project follows industry best practices for code quality, performance optimization, and security.`,
      
      // Service Details
      duration: '4-8 Weeks',
      priceRange: '$100 - $250+',
      complexity: 'Custom',
      deliverables: [
        'Fully responsive web application',
        'Source code & documentation',
        'Deployment & hosting setup',
        '3 months of technical support',
        'Performance optimization report',
        'SEO implementation'
      ],
      
      // Features
      features: [
        {
          title: 'Full-Stack Development',
          description: 'End-to-end development from frontend to backend',
          icon: faCode
        },
        {
          title: 'Progressive Web Apps',
          description: 'Mobile-like experience with offline capabilities',
          icon: faMobileAlt
        },
        {
          title: 'API Development',
          description: 'RESTful & GraphQL APIs for seamless integration',
          icon: faCogs
        },
        {
          title: 'Performance Optimization',
          description: 'Fast loading times and smooth user experience',
          icon: faChartLine
        },
        {
          title: 'E-commerce Solutions',
          description: 'Secure online stores with payment integration',
          icon: faDollarSign
        },
        {
          title: 'SEO Implementation',
          description: 'Search engine optimized for maximum visibility',
          icon: faGlobe
        }
      ],
      
      // Technology Stack for this service
      techStack: [
        'React',
        'Next.js',
        'TypeScript',
        'Tailwind CSS',
        'Bootstrap',
        'Node.js',
        'Django',
        'Express',
        'PostgreSQL',
        'MySQL',
        'Java',
        'Docker'
      ],
      
      // Process Steps specific to this service
      process: [
        {
          step: '1',
          title: 'Requirement Analysis',
          description: 'Detailed discussion to understand your needs and goals',
          duration: '3-5 Days'
        },
        {
          step: '2',
          title: 'Planning & Architecture',
          description: 'System design and technology stack selection',
          duration: '5-7 Days'
        },
        {
          step: '3',
          title: 'UI/UX Design',
          description: 'Creating wireframes and visual designs',
          duration: '1-2 Weeks'
        },
        {
          step: '4',
          title: 'Development',
          description: 'Building the application with clean, maintainable code',
          duration: '3-6 Weeks'
        },
        {
          step: '5',
          title: 'Testing & QA',
          description: 'Rigorous testing and performance optimization',
          duration: '1-2 Weeks'
        },
        {
          step: '6',
          title: 'Deployment & Launch',
          description: 'Production deployment and monitoring setup',
          duration: '3-5 Days'
        }
      ],
      
      // Case Studies / Examples
      caseStudies: [
        {
          title: 'E-commerce Platform',
          description: 'Built a scalable online store with 10,000+ products',
          tech: ['React', 'TypeScript', 'MySQL', 'Django']
        },
        {
          title: 'SMS Dashboard',
          description: 'School management system with real-time analytics',
          tech: ['React', 'TypeScript', 'MySQL', 'Docker']
        }
      ],
      
      // Stats
      stats: [
        { label: 'Projects Completed', value: '20+' },
        { label: 'Client Satisfaction', value: '99%' },
        { label: 'Average Delivery Time', value: '4 Weeks' },
        { label: 'Code Quality Score', value: '9.8/10' }
      ],
      
      // Pricing Tiers
      pricing: [
        {
          tier: 'Basic',
          price: '$100',
          description: 'For small websites or MVPs',
          features: [
            'Up to 5 pages',
            'Basic responsive design',
            'Contact form integration',
            '1 month support'
          ]
        },
        {
          tier: 'Professional',
          price: '$250',
          description: 'For medium-sized web applications',
          features: [
            'Custom web application',
            'Admin dashboard',
            'Database integration',
            '3 months support',
            'Performance optimization'
          ],
          popular: true
        },
        {
          tier: 'Enterprise',
          price: 'Custom',
          description: 'For large-scale solutions',
          features: [
            'Full-stack development',
            'Scalable architecture',
            'Advanced security',
            '6 months support',
            'Team training',
            'Priority development'
          ]
        }
      ],
      gradient: 'from-blue-500 to-purple-600',
      color: 'text-blue-400'
    },

    'mobile-dev': {
      id: 'mobile-dev',
      title: 'Mobile App Development',
      icon: faMobileAlt,
      shortDesc: 'Native & cross-platform mobile apps',
      description: 'Creating engaging mobile applications for iOS and Android with native performance and modern features.',
      longDescription: `Developing mobile applications that provide seamless user experiences across iOS and Android platforms. Focus on performance, intuitive navigation, and engaging interactions.

        I use React Native for cross-platform development and native technologies for platform-specific features, ensuring your app looks and feels native on every device while maintaining code efficiency.`,
      
      // Service Details
      duration: '6-12 Weeks',
      priceRange: '$120 - $200+',
      complexity: 'High',
      deliverables: [
        'iOS & Android applications',
        'App store deployment',
        'Source code & documentation',
        'Push notification setup',
        'Analytics integration',
        '6 months of technical support'
      ],
      
      // Features
      features: [
        {
          title: 'React Native Development',
          description: 'Cross-platform apps with native performance',
          icon: faCode
        },
        {
          title: 'iOS & Android Native',
          description: 'Platform-specific features and optimization',
          icon: faMobileAlt
        },
        {
          title: 'App Store Optimization',
          description: 'Maximize visibility in app stores',
          icon: faChartBar
        },
        {
          title: 'Push Notifications',
          description: 'Engage users with timely notifications',
          icon: faBullseye
        },
        {
          title: 'Offline Capabilities',
          description: 'Functionality without internet connection',
          icon: faCloud
        },
        {
          title: 'In-App Purchases',
          description: 'Secure payment integration',
          icon: faDollarSign
        }
      ],
      
      // Technology Stack for this service
      techStack: [
        'React Native',
        'Flutter',
        'iOS Swift',
        'Android Kotlin',
        'Firebase',
        'Redux',
        'GraphQL',
        'AWS Amplify'
      ],
      
      // Process Steps specific to this service
      process: [
        {
          step: '1',
          title: 'Concept & Strategy',
          description: 'App concept validation and market research',
          duration: '1-2 Weeks'
        },
        {
          step: '2',
          title: 'UI/UX Design',
          description: 'Mobile-first interface design',
          duration: '2-3 Weeks'
        },
        {
          step: '3',
          title: 'Development Sprint',
          description: 'Agile development with regular updates',
          duration: '4-8 Weeks'
        },
        {
          step: '4',
          title: 'Testing & Optimization',
          description: 'Device testing and performance tuning',
          duration: '1-2 Weeks'
        },
        {
          step: '5',
          title: 'App Store Submission',
          description: 'Store optimization and approval process',
          duration: '1-2 Weeks'
        },
        {
          step: '6',
          title: 'Launch & Marketing',
          description: 'App launch and user acquisition',
          duration: 'Ongoing'
        }
      ],
      
      // Case Studies / Examples
      caseStudies: [
        {
          title: 'Fitness Tracking App',
          description: 'Built a cross-platform fitness app with real-time tracking',
          results: '100,000+ downloads in first month',
          tech: ['React Native', 'Firebase', 'HealthKit']
        },
        {
          title: 'Food Delivery Service',
          description: 'Complete food delivery platform with real-time tracking',
          results: 'Processed 10,000+ orders monthly',
          tech: ['Flutter', 'Node.js', 'Google Maps API']
        }
      ],
      
      // Stats
      stats: [
        { label: 'Apps Developed', value: '5+' },
        { label: 'App Store Rating', value: '4.8 Avg' },
        { label: 'User Retention', value: '45%' },
        { label: 'Crash Free Rate', value: '99.9%' }
      ],
      
      // Pricing Tiers
      pricing: [
        {
          tier: 'MVP',
          price: '$120',
          description: 'For testing your app idea',
          features: [
            'Basic app features',
            'Single platform',
            'Simple backend',
            '3 months support'
          ]
        },
        {
          tier: 'Standard',
          price: '$200',
          description: 'For full-featured mobile apps',
          features: [
            'Cross-platform (iOS & Android)',
            'Advanced features',
            'Custom backend',
            '6 months support',
            'App store deployment'
          ],
          popular: true
        },
        {
          tier: 'Enterprise',
          price: 'Custom',
          description: 'For complex business solutions',
          features: [
            'Multiple platforms',
            'Enterprise features',
            'Scalable infrastructure',
            '12 months support',
            'Priority development',
            'White-label option'
          ]
        }
      ],
      gradient: 'from-indigo-500 to-purple-600',
      color: 'text-indigo-400'
    },

    'consulting': {
      id: 'consulting',
      title: 'Technical Consulting',
      icon: faComments,
      shortDesc: 'Expert guidance & strategy',
      description: 'Providing expert advice and solutions to help optimize your digital presence and achieve business goals.',
      longDescription: `Strategic guidance to help businesses leverage technology effectively. From startup MVPs to enterprise digital transformation, I provide actionable insights and roadmaps.

        My consulting services focus on aligning technology with business objectives, optimizing existing systems, and planning for future growth with sustainable, scalable solutions.`,
      
      // Service Details
      duration: 'Ongoing',
      priceRange: '$50 - $1000/mo',
      complexity: 'Strategic',
      deliverables: [
        'Technology assessment report',
        'Strategic roadmap',
        'Architecture recommendations',
        'Team training materials',
        'Implementation plan',
        'Performance metrics dashboard'
      ],
      
      // Features
      features: [
        {
          title: 'Technology Stack Selection',
          description: 'Choose the right tools for your needs',
          icon: faTools
        },
        {
          title: 'Digital Transformation',
          description: 'Modernize legacy systems and processes',
          icon: faSync
        },
        {
          title: 'Performance Audits',
          description: 'Identify bottlenecks and optimization opportunities',
          icon: faChartLine
        },
        {
          title: 'Team Training',
          description: 'Upskill your team with modern practices',
          icon: faGraduationCap
        },
        {
          title: 'Process Optimization',
          description: 'Streamline development and deployment',
          icon: faCog
        },
        {
          title: 'Roadmap Planning',
          description: 'Strategic planning for future growth',
          icon: faBullseye
        }
      ],
      
      // Technology Stack for this service
      techStack: [
        'Architecture Review',
        'DevOps Strategy',
        'Cloud Migration',
        'Security Assessment',
        'Scalability Planning',
        'Team Structure'
      ],
      
      // Process Steps specific to this service
      process: [
        {
          step: '1',
          title: 'Initial Assessment',
          description: 'Current state analysis and goal setting',
          duration: '1-2 Weeks'
        },
        {
          step: '2',
          title: 'Deep Dive Analysis',
          description: 'Technical audits and team interviews',
          duration: '2-3 Weeks'
        },
        {
          step: '3',
          title: 'Strategy Development',
          description: 'Create actionable recommendations and roadmap',
          duration: '1-2 Weeks'
        },
        {
          step: '4',
          title: 'Implementation Plan',
          description: 'Detailed execution plan with milestones',
          duration: '1 Week'
        },
        {
          step: '5',
          title: 'Team Training',
          description: 'Workshops and knowledge transfer',
          duration: '1-2 Weeks'
        },
        {
          step: '6',
          title: 'Ongoing Support',
          description: 'Regular check-ins and adjustments',
          duration: 'Ongoing'
        }
      ],
      
      // Case Studies / Examples
      caseStudies: [
        {
          title: 'Startup Tech Stack Selection',
          description: 'Helped startup choose optimal technology stack',
          results: 'Reduced development time by 40%',
          tech: ['Technology Audit', 'Roadmapping', 'Team Training']
        },
        {
          title: 'Enterprise Cloud Migration',
          description: 'Planned and executed cloud migration strategy',
          results: 'Reduced infrastructure costs by 60%',
          tech: ['AWS Architecture', 'DevOps Strategy', 'Security Planning']
        }
      ],
      
      // Stats
      stats: [
        { label: 'Clients Served', value: '10+' },
        { label: 'ROI Focus', value: '100%' },
        { label: 'Project Success Rate', value: '95%' },
        { label: 'Client Retention', value: '90%' }
      ],
      
      // Pricing Tiers
      pricing: [
        {
          tier: 'Advisory',
          price: '$50/hr',
          description: 'For occasional guidance',
          features: [
            'Hourly consultations',
            'Email support',
            'Document review',
            'Basic recommendations'
          ]
        },
        {
          tier: 'Retainer',
          price: '$10/mo',
          description: 'For ongoing strategic partnership',
          features: [
            'Monthly strategy sessions',
            'Unlimited email support',
            'Regular audits',
            'Team training sessions',
            'Priority access'
          ],
          popular: true
        },
        {
          tier: 'Enterprise',
          price: 'Custom',
          description: 'For comprehensive transformation',
          features: [
            'Dedicated consultant',
            'Full team training',
            'Implementation oversight',
            'Custom reporting',
            'Quarterly strategy reviews'
          ]
        }
      ],
      gradient: 'from-green-500 to-teal-600',
      color: 'text-green-400'
    }
  };

  useEffect(() => {
    // Set service data based on URL parameter
    const service = allServices[id] || allServices['web-dev'];
    setServiceData(service);
  }, [id]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveTab(sectionId);
    }
  };

  const handleContactClick = () => {
    // Navigate to contact page or open contact modal
    console.log('Contact clicked for service:', serviceData?.title);
  };

  if (!serviceData) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-black flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'features', label: 'Features' },
    { id: 'process', label: 'Process' },
    { id: 'projects', label: 'Projects' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'contact', label: 'Contact' }
  ];

  const gradientColor = serviceData.gradient || 'from-blue-500 to-purple-600';
  const textColor = serviceData.color || 'text-blue-400';

  // Render functions that return JSX
  const renderOverviewSection = () => {
    return (
      <section id="overview" className="mb-20">
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
          <FontAwesomeIcon icon={faLightbulb} className="text-yellow-500" />
          Service Overview
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                {serviceData.longDescription.split('\n\n')[0]}
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                {serviceData.longDescription.split('\n\n')[1]}
              </p>
            </div>
            
            <div className={`mt-10 p-6 bg-gradient-to-r ${gradientColor}/10 rounded-xl border ${textColor.replace('text-', 'border-')}/20`}>
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <FontAwesomeIcon icon={faCheckCircle} className="text-green-500" />
                What You'll Get
              </h3>
              <ul className="space-y-3">
                {serviceData.deliverables.map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-300">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-sm" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div>
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800 p-8">
              <h3 className="text-2xl font-bold mb-6">Quick Details</h3>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-gray-800">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-500/10">
                      <FontAwesomeIcon icon={faClock} className="text-blue-400" />
                    </div>
                    <div>
                      <div className="font-medium">Timeline</div>
                      <div className="text-sm text-gray-400">Project duration</div>
                    </div>
                  </div>
                  <div className="text-lg font-semibold">{serviceData.duration}</div>
                </div>
                
                <div className="flex items-center justify-between pb-4 border-b border-gray-800">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-purple-500/10">
                      <FontAwesomeIcon icon={faDollarSign} className="text-purple-400" />
                    </div>
                    <div>
                      <div className="font-medium">Investment</div>
                      <div className="text-sm text-gray-400">Starting from</div>
                    </div>
                  </div>
                  <div className="text-lg font-semibold">{serviceData.priceRange}</div>
                </div>
                
                <div className="flex items-center justify-between pb-4 border-b border-gray-800">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-green-500/10">
                      <FontAwesomeIcon icon={faCogs} className="text-green-400" />
                    </div>
                    <div>
                      <div className="font-medium">Complexity</div>
                      <div className="text-sm text-gray-400">Project scope</div>
                    </div>
                  </div>
                  <div className="text-lg font-semibold">{serviceData.complexity}</div>
                </div>
                
                <div className="pt-4">
                  <h4 className="font-semibold mb-4">Technology Stack</h4>
                  <div className="flex flex-wrap gap-3">
                    {serviceData.techStack.map((tech, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-gray-800/50 text-gray-300 rounded-lg hover:bg-gray-800 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  const renderFeaturesSection = () => {
    return (
      <section id="features" className="mb-20">
        <h2 className="text-3xl font-bold mb-12">
          Key <span className={textColor}>Features</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceData.features.map((feature, index) => (
            <div
              key={index}
              className="group bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 p-8 hover:border-blue-500/50 transition-all duration-300 hover:scale-[1.02]"
            >
              <div className={`mb-6 p-4 rounded-lg bg-gradient-to-br ${gradientColor}/10 inline-block`}>
                <FontAwesomeIcon 
                  icon={feature.icon} 
                  className={`text-2xl ${textColor}`}
                />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };

  const renderProcessSection = () => {
    return (
      <section id="process" className="mb-20">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
          <FontAwesomeIcon icon={faSync} className="text-yellow-500" />
          Development Process
        </h2>
        
        <div className="relative">
          <div className={`absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b ${gradientColor.replace('to', 'to').replace('from', 'from')}/50 via-transparent to-transparent md:left-1/2 md:-translate-x-1/2`} />
          
          <div className="space-y-12">
            {serviceData.process.map((step, index) => (
              <div
                key={index}
                className="relative flex items-start gap-8"
              >
                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${gradientColor}/20 flex items-center justify-center`}>
                    <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center">
                      <div className={`text-xl font-bold ${textColor}`}>{step.step}</div>
                    </div>
                  </div>
                </div>
                
                <div className="flex-1 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 p-6 hover:border-blue-500/50 transition-colors">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-gray-800 text-gray-300 text-sm">
                      <FontAwesomeIcon icon={faClock} className="text-xs" />
                      {step.duration}
                    </div>
                  </div>
                  <p className="text-gray-400">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  const renderPricingSection = () => {
    return (
      <section id="pricing" className="mb-20">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Pricing <span className={textColor}>Plans</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {serviceData.pricing.map((plan, index) => (
            <div
              key={index}
              className={`bg-gray-900/50 backdrop-blur-sm rounded-2xl border p-8 relative ${
                plan.popular
                  ? `${textColor.replace('text-', 'border-')} shadow-2xl shadow-blue-500/20 scale-105`
                  : 'border-gray-800'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className={`px-4 py-1 bg-gradient-to-r ${gradientColor} text-white text-sm font-semibold rounded-full`}>
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.tier}</h3>
                <div className="text-4xl font-bold mb-2">{plan.price}</div>
                <p className="text-gray-400">{plan.description}</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-300">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-green-500" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button
                onClick={handleContactClick}
                className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${
                  plan.popular
                    ? `bg-gradient-to-r ${gradientColor} hover:shadow-lg hover:shadow-blue-500/30`
                    : 'bg-gray-800 hover:bg-gray-700'
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center text-gray-400">
          <p>Need a custom solution? <button className={`${textColor} hover:text-blue-300`}>Contact for custom quote →</button></p>
        </div>
      </section>
    );
  };

  const renderCaseStudiesSection = () => {
    return (
      <section id="cases" className="mb-20">
        <h2 className="text-3xl font-bold mb-12">
          Case <span className={textColor}>Studies</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {serviceData.caseStudies.map((caseStudy, index) => (
            <div
              key={index}
              className="bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800 p-8 hover:border-blue-500/50 transition-colors"
            >
              <h3 className="text-2xl font-bold mb-4">{caseStudy.title}</h3>
              <p className="text-gray-400 mb-6">{caseStudy.description}</p>
              
              <div className={`mb-6 p-4 bg-gradient-to-r ${gradientColor}/10 rounded-lg`}>
                <div className="flex items-center gap-2 text-green-400 font-semibold">
                  <FontAwesomeIcon icon={faChartLine} />
                  <span>Result:</span>
                </div>
                <p className="mt-2">{caseStudy.results}</p>
              </div>
              
              <div>
                <h4 className="font-medium mb-3">Technologies Used:</h4>
                <div className="flex flex-wrap gap-3">
                  {caseStudy.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-800/50 text-gray-300 rounded-lg text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };

  const renderContactSection = () => {
    return (
      <section id="contact" className="mb-20">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-3xl p-12 text-center relative overflow-hidden">
          <div className={`absolute inset-0 bg-gradient-to-br ${gradientColor}/5 via-transparent to-transparent`} />
          
          <div className="relative">
            <div className={`inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-gradient-to-r ${gradientColor}/20 border ${textColor.replace('text-', 'border-')}/30`}>
              <FontAwesomeIcon icon={faHandshake} className={textColor} />
              <span className={`${textColor} text-sm font-medium`}>Ready to Start?</span>
            </div>
            
            <h2 className="text-4xl font-bold mb-6">
              Let's Build Your <span className={textColor}>Project</span>
            </h2>
            
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              Schedule a free 30-minute consultation to discuss your project requirements and get a detailed proposal.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button
                onClick={handleContactClick}
                className={`group px-10 py-4 bg-gradient-to-r ${gradientColor} text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105 flex items-center gap-3`}
              >
                <FontAwesomeIcon icon={faRocket} />
                Schedule Free Call
              </button>
              
              <div className="text-gray-400">
                <div className="flex items-center gap-3">
                  <div className="flex items-center">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2" />
                    <span>No obligation</span>
                  </div>
                  <div className="w-1 h-1 bg-gray-600 rounded-full" />
                  <div className="flex items-center">
                    <FontAwesomeIcon icon={faCalendarAlt} className="text-green-500 mr-2" />
                    <span>Book instantly</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  const renderActiveSection = () => {
    switch(activeTab) {
      case 'overview':
        return renderOverviewSection();
      case 'features':
        return renderFeaturesSection();
      case 'process':
        return renderProcessSection();
      case 'pricing':
        return renderPricingSection();
      case 'projects':
        return renderCaseStudiesSection();
      case 'contact':
        return renderContactSection();
      default:
        return renderOverviewSection();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-black text-white">
      {/* Back Button */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-400 hover:text-yellow-400 transition-colors mb-4"
        >
          <FontAwesomeIcon icon={faArrowLeft} />
          <span>Back to Home</span>
        </button>
      </div>

      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${gradientColor.replace('to', 'to').replace('from', 'from')}/5 via-transparent to-transparent`} />
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className={`inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-gradient-to-r ${gradientColor}/20 border ${textColor.replace('text-', 'border-')}/30`}>
              <FontAwesomeIcon icon={serviceData.icon} className={textColor} />
              <span className={`${textColor} text-sm font-medium`}>{serviceData.title}</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {serviceData.title}
              <span className="block text-3xl md:text-4xl bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent mt-2">
                {serviceData.shortDesc}
              </span>
            </h1>
            
            <p className="text-xl text-gray-400 mb-10 leading-relaxed max-w-3xl">
              {serviceData.description}
            </p>
            
            <div className="flex flex-wrap gap-4 mb-10">
              <button
                onClick={() => navigate('/contact')}
                className={`group px-8 py-3 bg-gradient-to-r ${gradientColor} text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105 flex items-center gap-3`}
              >
                Start Project
                <FontAwesomeIcon icon={faRocket} className="group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button
                onClick={() => setActiveTab('pricing')}
                className={`px-8 py-3 border-2 ${textColor.replace('text-', 'border-')} ${textColor} font-semibold rounded-xl hover:bg-blue-500/10 transition-all duration-300`}
              >
                View Pricing
              </button>
              
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 border-2 border-gray-700 text-gray-400 font-semibold rounded-xl hover:border-gray-600 hover:text-gray-300 transition-all duration-300"
              >
                Schedule Call
              </button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {serviceData.stats.map((stat, index) => (
                <div key={index} className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 border border-gray-800">
                  <div className={`text-2xl font-bold ${textColor}`}>{stat.value}</div>
                  <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Navigation */}
      <div className="sticky top-0 z-10 bg-gray-900/90 backdrop-blur-sm border-b border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-4 font-medium transition-all duration-300 whitespace-nowrap border-b-2 ${
                  activeTab === tab
                    ? `${textColor.replace('text-', 'border-')} ${textColor}`
                    : 'border-transparent text-gray-400 hover:text-gray-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {renderActiveSection()}
      </div>
    </div>
  );
};

export default ServiceSinglePage;
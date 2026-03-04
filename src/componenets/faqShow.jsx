import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faChevronDown,
  faChevronUp,
  faChevronLeft,
  faChevronRight,
  faStar,
  faClock,
  faUser,
  faTag
} from '@fortawesome/free-solid-svg-icons';

const FaqShow = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(true);
  
  // Sample FAQ data (replace with your API call)
  const faqs = [
    {
      id: 1,
      category: 'general',
      question: 'What services do you offer?',
      answer: 'I offer comprehensive digital solutions including UI/UX design, full-stack web development, mobile app development, and technical consulting. My services cover everything from initial concept to final deployment and ongoing maintenance.',
      tags: ['Services', 'General'],
      votes: 12,
      date: '2024-01-15'
    },
    {
      id: 2,
      category: 'technical',
      question: 'What technologies do you work with?',
      answer: 'I work with modern technologies including React, Next.js, Django, Node.js, React Native, Flutter, PostgreSQL, MongoDB, and various cloud platforms. I stay updated with the latest frameworks and best practices to deliver cutting-edge solutions.',
      tags: ['Tech Stack', 'Development'],
      votes: 8,
      date: '2024-01-20'
    },
    {
      id: 3,
      category: 'pricing',
      question: 'What are your pricing models?',
      answer: 'I offer flexible pricing models: 1) Fixed-price projects for well-defined scopes, 2) Hourly rates for ongoing work or consulting, and 3) Retainer agreements for long-term collaboration. Each project gets a customized quote based on requirements.',
      tags: ['Pricing', 'Payment'],
      votes: 15,
      date: '2024-02-05'
    },
    {
      id: 4,
      category: 'general',
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary: Simple websites take 2-3 weeks, complex web applications 4-8 weeks, and mobile apps 6-10 weeks. I provide detailed timelines during our initial consultation based on your specific requirements.',
      tags: ['Timeline', 'Process'],
      votes: 10,
      date: '2024-02-10'
    },
    {
      id: 5,
      category: 'technical',
      question: 'Do you provide ongoing support?',
      answer: 'Yes, I offer several support options: 1) 30-day post-launch support, 2) Monthly maintenance packages, 3) Hourly support tickets, and 4) Retainer-based ongoing development. All include bug fixes, updates, and performance monitoring.',
      tags: ['Support', 'Maintenance'],
      votes: 7,
      date: '2024-02-15'
    },
    {
      id: 6,
      category: 'support',
      question: 'What is your communication process?',
      answer: 'I maintain transparent communication through: 1) Daily/weekly updates, 2) Project management tools (Jira, Trello), 3) Regular video calls, and 4) Email/chat for quick questions. I adapt to your preferred communication style.',
      tags: ['Communication', 'Process'],
      votes: 9,
      date: '2024-02-20'
    },
    {
      id: 7,
      category: 'pricing',
      question: 'Do you work with international clients?',
      answer: 'Yes, I work with clients worldwide. I\'m experienced with remote collaboration across different time zones and am flexible with communication schedules. All payments can be made through secure international payment gateways.',
      tags: ['International', 'Remote'],
      votes: 11,
      date: '2024-02-25'
    },
    {
      id: 8,
      category: 'technical',
      question: 'What is your development process?',
      answer: 'I follow an agile methodology: 1) Discovery & Planning, 2) Design & Prototyping, 3) Development in sprints, 4) Testing & QA, 5) Deployment, 6) Maintenance. Each phase includes client feedback and approval.',
      tags: ['Process', 'Methodology'],
      votes: 13,
      date: '2024-03-01'
    },
    {
      id: 9,
      category: 'support',
      question: 'Can I see examples of your previous work?',
      answer: 'Absolutely! You can view my portfolio on the homepage or request specific case studies. I can provide references from previous clients and demonstrate solutions similar to what you\'re looking to build.',
      tags: ['Portfolio', 'Examples'],
      votes: 6,
      date: '2024-03-05'
    },
    {
      id: 10,
      category: 'general',
      question: 'What makes you different from other developers?',
      answer: 'I combine technical expertise with strong communication skills, attention to detail, and a user-focused approach. I treat every project as a partnership and am committed to your success beyond just writing code.',
      tags: ['Difference', 'Value'],
      votes: 14,
      date: '2024-03-10'
    }
  ];

  // Simulate API loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const faqsPerPage = 5;
  const totalPages = Math.ceil(faqs.length / faqsPerPage);
  
  const currentFaqs = faqs.slice(
    currentPage * faqsPerPage,
    (currentPage + 1) * faqsPerPage
  );

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  // Filter by category
  const categories = [...new Set(faqs.map(faq => faq.category))];
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredFaqs = selectedCategory === 'all' 
    ? currentFaqs 
    : currentFaqs.filter(faq => faq.category === selectedCategory);

  if (loading) {
    return (
      <div className="space-y-4">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="animate-pulse">
            <div className="h-20 bg-gray-800 rounded-lg"></div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div>
      {/* Category Filter */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-3 mb-6">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === 'all'
                ? 'bg-yellow-500 text-gray-900'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            All Questions ({faqs.length})
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors capitalize ${
                selectedCategory === category
                  ? 'bg-yellow-500 text-gray-900'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {category} ({faqs.filter(f => f.category === category).length})
            </button>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="text-center p-4 rounded-xl bg-gray-800/50">
            <div className="text-2xl font-bold text-white">{faqs.length}</div>
            <div className="text-xs text-gray-400">Total Questions</div>
          </div>
          <div className="text-center p-4 rounded-xl bg-gray-800/50">
            <div className="text-2xl font-bold text-white">{categories.length}</div>
            <div className="text-xs text-gray-400">Categories</div>
          </div>
          <div className="text-center p-4 rounded-xl bg-gray-800/50">
            <div className="text-2xl font-bold text-white">
              {Math.round(faqs.reduce((acc, faq) => acc + faq.votes, 0) / faqs.length)}
            </div>
            <div className="text-xs text-gray-400">Avg. Helpful</div>
          </div>
        </div>
      </div>

      {/* FAQ List */}
      <div className="space-y-4">
        {filteredFaqs.map((faq, index) => (
          <div
            key={faq.id}
            className="border border-gray-800 rounded-xl overflow-hidden transition-all duration-300 hover:border-yellow-500/50 bg-gray-900/30"
          >
            <button
              className="w-full px-6 py-5 flex justify-between items-center bg-gray-800/30 hover:bg-gray-800/50 transition-colors text-left"
              onClick={() => toggleFaq(faq.id)}
            >
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-3 py-1 rounded-full bg-gray-700 text-gray-300 text-xs font-medium capitalize">
                    {faq.category}
                  </span>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
                    <span>{faq.votes} found helpful</span>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white">
                  {faq.question}
                </h3>
              </div>
              <FontAwesomeIcon
                icon={activeIndex === faq.id ? faChevronUp : faChevronDown}
                className={`text-yellow-500 ml-4 transition-transform duration-300 ${
                  activeIndex === faq.id ? 'rotate-180' : ''
                }`}
              />
            </button>
            
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                activeIndex === faq.id ? 'max-h-96' : 'max-h-0'
              }`}
            >
              <div className="px-6 py-5 border-t border-gray-800/50">
                <div className="prose prose-invert max-w-none">
                  <p className="text-gray-300 leading-relaxed mb-4">
                    {faq.answer}
                  </p>
                  
                  <div className="flex flex-wrap items-center gap-4 mt-6 pt-4 border-t border-gray-800/30">
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <FontAwesomeIcon icon={faClock} />
                      <span>{faq.date}</span>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {faq.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs hover:bg-gray-700 transition-colors cursor-pointer"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <button className="ml-auto flex items-center gap-2 text-sm text-gray-400 hover:text-yellow-500 transition-colors">
                      <FontAwesomeIcon icon={faStar} />
                      <span>Mark as helpful ({faq.votes})</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm text-gray-400">
          Showing {currentPage * faqsPerPage + 1} to {Math.min((currentPage + 1) * faqsPerPage, faqs.length)} of {faqs.length} questions
        </div>
        
        <div className="flex items-center gap-4">
          <button
            onClick={prevPage}
            disabled={currentPage === 0}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800 text-gray-300 hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <FontAwesomeIcon icon={faChevronLeft} />
            Previous
          </button>
          
          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToPage(index)}
                className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                  currentPage === index
                    ? 'bg-yellow-500 text-gray-900'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
          
          <button
            onClick={nextPage}
            disabled={currentPage === totalPages - 1}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800 text-gray-300 hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Next
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>

      {/* Empty State */}
      {filteredFaqs.length === 0 && (
        <div className="text-center py-12">
          <div className="mb-4">
            <FontAwesomeIcon icon={faQuestionCircle} className="text-4xl text-gray-600" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">No questions found</h3>
          <p className="text-gray-400">
            Try selecting a different category or ask a new question.
          </p>
        </div>
      )}
    </div>
  );
};

export default FaqShow;
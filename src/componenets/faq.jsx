import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faQuestionCircle,
  faPaperPlane,
  faEnvelope,
  faLightbulb,
  faHeadset,
  faComments
} from '@fortawesome/free-solid-svg-icons';
import emailjs from '@emailjs/browser';
import FaqShow from './FaqShow';

const Faq = () => {
  const formRef = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    email: '',
    message: ''
  });

  // FAQ categories
  const faqCategories = [
    { id: 'general', label: 'General', count: 5 },
    { id: 'technical', label: 'Technical', count: 4 },
    { id: 'pricing', label: 'Pricing', count: 3 },
    { id: 'support', label: 'Support', count: 3 }
  ];

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
      alert('Your question has been submitted! I\'ll respond within 24 hours.');
      setFormData({ title: '', email: '', message: '' });
    } catch (error) {
      console.error('Email sending error:', error);
      alert('Failed to submit your question. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Quick tips
  const quickTips = [
    {
      icon: faLightbulb,
      title: 'Be Specific',
      description: 'Include details about your project requirements'
    },
    {
      icon: faHeadset,
      title: 'Response Time',
      description: 'Typically respond within 24 hours on weekdays'
    },
    {
      icon: faComments,
      title: 'Follow-up',
      description: 'Feel free to ask clarifying questions'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-transparent to-blue-500/10" />
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="p-3 rounded-2xl bg-gradient-to-br from-yellow-500/20 to-orange-500/20">
                <FontAwesomeIcon 
                  icon={faQuestionCircle} 
                  className="text-3xl text-yellow-500"
                />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Frequently Asked <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Questions</span>
            </h1>
            
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Find answers to common questions about my services, process, and working together.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              {faqCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => document.getElementById(category.id)?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-4 py-2 rounded-full bg-gray-800 text-gray-300 hover:bg-gray-700 transition-colors text-sm"
                >
                  {category.label} ({category.count})
                </button>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* FAQ Section */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Common <span className="text-yellow-400">Questions</span>
                </h2>
                <p className="text-gray-400">
                  Browse through frequently asked questions from clients and collaborators.
                </p>
              </div>

              <div className="space-y-6">
                <FaqShow />
              </div>

              {/* Quick Tips */}
              <div className="mt-12 p-6 bg-gray-900/50 rounded-2xl border border-gray-800">
                <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-3">
                  <FontAwesomeIcon icon={faLightbulb} className="text-yellow-500" />
                  Quick Tips
                </h3>
                <div className="grid gap-4">
                  {quickTips.map((tip, index) => (
                    <div key={index} className="flex items-start gap-4 p-3 rounded-lg bg-gray-800/30">
                      <FontAwesomeIcon icon={tip.icon} className="text-yellow-500 mt-1" />
                      <div>
                        <h4 className="text-white font-medium mb-1">{tip.title}</h4>
                        <p className="text-gray-400 text-sm">{tip.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Question Form */}
            <div>
              <div className="sticky top-24">
                <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800 p-8 shadow-2xl">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-yellow-500/20 to-orange-500/20">
                      <FontAwesomeIcon 
                        icon={faEnvelope} 
                        className="text-2xl text-yellow-500"
                      />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-white">Ask a Question</h2>
                      <p className="text-gray-400 text-sm">Can't find what you're looking for?</p>
                    </div>
                  </div>

                  <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Question Title
                      </label>
                      <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                        placeholder="What would you like to know?"
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Your Email
                      </label>
                      <input
                        type="email"
                        name="user_email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="you@example.com"
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Your Question
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="6"
                        placeholder="Please provide details about your question..."
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
                          <div className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white"></div>
                          Submitting...
                        </>
                      ) : (
                        <>
                          Submit Question
                          <FontAwesomeIcon icon={faPaperPlane} />
                        </>
                      )}
                    </button>

                    <div className="text-center">
                      <p className="text-sm text-gray-500">
                        Or{' '}
                        <button
                          type="button"
                          onClick={scrollToContact}
                          className="text-yellow-400 hover:text-yellow-300 underline"
                        >
                          schedule a call
                        </button>
                      </p>
                    </div>
                  </form>

                  <div className="mt-8 pt-6 border-t border-gray-800">
                    <h4 className="text-white font-medium mb-3">What happens next?</h4>
                    <div className="space-y-2 text-sm text-gray-400">
                      <p>1. I'll review your question within 24 hours</p>
                      <p>2. You'll receive a detailed response via email</p>
                      <p>3. Your question may be added to this FAQ (anonymously)</p>
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="mt-6 grid grid-cols-3 gap-4">
                  <div className="text-center p-4 rounded-xl bg-gray-900/50 border border-gray-800">
                    <div className="text-2xl font-bold text-white">24h</div>
                    <div className="text-xs text-gray-400">Response Time</div>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-gray-900/50 border border-gray-800">
                    <div className="text-2xl font-bold text-white">95%</div>
                    <div className="text-xs text-gray-400">Solved</div>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-gray-900/50 border border-gray-800">
                    <div className="text-2xl font-bold text-white">50+</div>
                    <div className="text-xs text-gray-400">Answered</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faq;
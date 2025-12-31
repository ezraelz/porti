import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faEnvelope, 
  faPhone, 
  faMapMarkerAlt, 
  faPaperPlane,
  faClock,
  faCalendarAlt,
  faGlobe,
  faComments,
  faCheckCircle,
  faRocket,
  faShieldAlt,
  faLightbulb,
  faUserFriends,
  faHandshake,
  faStar
} from '@fortawesome/free-solid-svg-icons';
import { 
  faWhatsapp,
  faTelegram,
  faSkype,
  faLinkedin,
  faGithub,
  faTwitter
} from '@fortawesome/free-brands-svg-icons';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    projectType: 'general'
  });
  const [submitted, setSubmitted] = useState(false);

  // Contact information
  const contactInfo = [
    {
      icon: faEnvelope,
      title: 'Email',
      value: 'esraelzerihun3@gmail.com',
      link: 'mailto:esraelzerihun3@gmail.com',
      description: 'For project inquiries and collaboration',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      icon: faPhone,
      title: 'Phone',
      value: '+251 965500734',
      link: 'tel:+251965500734',
      description: 'Call or WhatsApp available',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: faMapMarkerAlt,
      title: 'Location',
      value: 'Addis Ababa, Ethiopia',
      link: '#',
      description: 'Available for remote work worldwide',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: faClock,
      title: 'Response Time',
      value: 'Within 24 hours',
      link: '#',
      description: 'Mon-Fri, 9AM-6PM EAT',
      gradient: 'from-purple-500 to-pink-500'
    }
  ];

  // Social media links
  const socialLinks = [
    { icon: faWhatsapp, name: 'WhatsApp', link: 'https://wa.me/251965500734', color: 'hover:text-green-500' },
    { icon: faTelegram, name: 'Telegram', link: 'https://t.me/yourusername', color: 'hover:text-blue-400' },
    { icon: faSkype, name: 'Skype', link: 'skype:live:.cid.yourid', color: 'hover:text-blue-500' },
    { icon: faLinkedin, name: 'LinkedIn', link: 'https://linkedin.com/in/yourprofile', color: 'hover:text-blue-700' },
    { icon: faGithub, name: 'GitHub', link: 'https://github.com/yourprofile', color: 'hover:text-gray-300' },
    { icon: faTwitter, name: 'Twitter', link: 'https://twitter.com/yourprofile', color: 'hover:text-blue-400' }
  ];

  // Project types
  const projectTypes = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'web', label: 'Website Development' },
    { value: 'mobile', label: 'Mobile App' },
    { value: 'uiux', label: 'UI/UX Design' },
    { value: 'consulting', label: 'Consulting' },
    { value: 'other', label: 'Other' }
  ];

  // Benefits of working together
  const benefits = [
    { icon: faShieldAlt, title: 'Secure & Confidential', description: 'Your information is protected with encryption' },
    { icon: faCheckCircle, title: 'Quality Guarantee', description: 'Professional solutions with thorough testing' },
    { icon: faLightbulb, title: 'Expert Consultation', description: 'Free initial consultation for all projects' },
    { icon: faUserFriends, title: 'Collaborative Process', description: 'Work together at every development stage' }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await emailjs.sendForm(
        'service_ijkaaoq',
        'template_acykx7i',
        formRef.current,
        '8CRviCi0PBVNvi0o9'
      );
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '', projectType: 'general' });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error('Email sending error:', error);
      alert('Failed to send the message. Please try again.');
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-black">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-transparent to-blue-500/10" />
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30">
              <FontAwesomeIcon icon={faHandshake} className="text-yellow-500" />
              <span className="text-yellow-400 text-sm font-medium">Let's Work Together</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Get In <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 bg-clip-text text-transparent animate-gradient">Touch</span>
            </h1>
            
            <p className="text-xl text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed">
              Ready to start your next project? Let's discuss how I can help bring your vision to life 
              with cutting-edge solutions and professional expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="space-y-8">
                {/* Contact Cards */}
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.link}
                      className="block group"
                    >
                      <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800 p-6 hover:border-current transition-all duration-300 hover:scale-[1.02]">
                        <div className="flex items-start space-x-4">
                          <div className={`p-3 rounded-xl bg-gradient-to-br ${info.gradient} bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300`}>
                            <FontAwesomeIcon 
                              icon={info.icon} 
                              className="text-xl text-white"
                            />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-white mb-1">{info.title}</h3>
                            <p className="text-gray-300 mb-1">{info.value}</p>
                            <p className="text-gray-500 text-sm">{info.description}</p>
                          </div>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Social Media */}
                <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800 p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Connect With Me</h3>
                  <p className="text-gray-400 mb-6 text-sm">
                    Follow for updates, tips, and behind-the-scenes content
                  </p>
                  <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex flex-col items-center justify-center p-3 rounded-xl bg-gray-800 text-gray-400 ${social.color} transition-all duration-300 hover:scale-110`}
                        aria-label={social.name}
                      >
                        <FontAwesomeIcon icon={social.icon} className="text-xl mb-1" />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Benefits */}
                <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800 p-6">
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
                    Why Work With Me
                  </h3>
                  <div className="space-y-4">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <FontAwesomeIcon icon={benefit.icon} className="text-yellow-500 mt-1" />
                        <div>
                          <h4 className="text-white font-medium text-sm">{benefit.title}</h4>
                          <p className="text-gray-400 text-xs">{benefit.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800 p-8 shadow-2xl">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="mb-6">
                      <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
                        <FontAwesomeIcon icon={faCheckCircle} className="text-3xl text-white" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Message Sent Successfully!</h3>
                    <p className="text-gray-400 mb-6 max-w-md mx-auto">
                      Thank you for reaching out. I'll review your message and get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-3 border-2 border-yellow-500 text-yellow-500 rounded-lg hover:bg-yellow-500 hover:text-gray-900 transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="mb-8">
                      <h2 className="text-3xl font-bold text-white mb-2">Send a Message</h2>
                      <p className="text-gray-400">
                        Fill out the form below and I'll get back to you as soon as possible.
                      </p>
                    </div>

                    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            Your Name *
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="John Doe"
                            className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-colors"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
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
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-colors"
                        >
                          {projectTypes.map((type) => (
                            <option key={type.value} value={type.value}>
                              {type.label}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Subject *
                        </label>
                        <input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          placeholder="Project Inquiry"
                          className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Your Message *
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows="6"
                          placeholder="Tell me about your project, goals, timeline, and any specific requirements..."
                          className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-colors resize-none"
                        />
                      </div>

                      <div className="flex items-center gap-4">
                        <button
                          type="submit"
                          disabled={isLoading}
                          className="flex-1 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold rounded-lg hover:opacity-90 transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                        >
                          {isLoading ? (
                            <>
                              <div className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white"></div>
                              Sending Message...
                            </>
                          ) : (
                            <>
                              Send Message
                              <FontAwesomeIcon icon={faPaperPlane} />
                            </>
                          )}
                        </button>

                        <div className="hidden sm:block text-center">
                          <div className="text-sm text-gray-400">or</div>
                        </div>

                        <button
                          type="button"
                          onClick={() => window.open('https://calendly.com/yourusername', '_blank')}
                          className="hidden sm:flex flex-1 items-center justify-center gap-2 py-4 border-2 border-yellow-500 text-yellow-500 font-semibold rounded-lg hover:bg-yellow-500 hover:text-gray-900 transition-colors"
                        >
                          <FontAwesomeIcon icon={faCalendarAlt} />
                          Schedule Call
                        </button>
                      </div>

                      <p className="text-center text-sm text-gray-500">
                        Your information is secure and will never be shared with third parties.
                      </p>
                    </form>
                  </>
                )}
              </div>

              {/* Additional Info */}
              <div className="mt-8 grid sm:grid-cols-2 gap-6">
                <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800 p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <FontAwesomeIcon icon={faClock} className="text-yellow-500" />
                    <h3 className="text-lg font-semibold text-white">Response Time</h3>
                  </div>
                  <ul className="space-y-2 text-gray-400 text-sm">
                    <li>• Typically within 24 hours on weekdays</li>
                    <li>• Urgent queries: Mark "URGENT" in subject</li>
                    <li>• Weekend responses within 48 hours</li>
                  </ul>
                </div>

                <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800 p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <FontAwesomeIcon icon={faGlobe} className="text-yellow-500" />
                    <h3 className="text-lg font-semibold text-white">Working Hours</h3>
                  </div>
                  <ul className="space-y-2 text-gray-400 text-sm">
                    <li>• Monday - Friday: 9:00 AM - 6:00 PM EAT</li>
                    <li>• Saturday: 10:00 AM - 2:00 PM EAT</li>
                    <li>• Sunday: Available for urgent matters</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-20 bg-gray-900/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Common <span className="text-yellow-400">Questions</span>
            </h2>
            <p className="text-gray-400">
              Quick answers to frequently asked questions about working together
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                question: "What's your typical project timeline?",
                answer: "Timelines vary based on complexity: 2-4 weeks for websites, 4-8 weeks for web apps, 6-10 weeks for mobile apps."
              },
              {
                question: "Do you offer post-launch support?",
                answer: "Yes, I offer 30-day free support plus optional monthly maintenance packages."
              },
              {
                question: "What's your payment structure?",
                answer: "50% upfront, 25% at milestone, 25% upon completion. Flexible options available."
              }
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 p-6 hover:border-yellow-500/50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-400 text-sm">{faq.answer}</p>
                <button className="mt-4 text-yellow-500 text-sm font-medium hover:text-yellow-400">
                  Read more →
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="/faq"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-yellow-500 text-yellow-500 rounded-lg hover:bg-yellow-500 hover:text-gray-900 transition-colors"
            >
              <FontAwesomeIcon icon={faComments} />
              View All FAQ
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-3xl p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 via-transparent to-blue-500/5" />
            
            <div className="relative">
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30">
                <FontAwesomeIcon icon={faRocket} className="text-yellow-500" />
                <span className="text-yellow-400 text-sm font-medium">Ready to Start</span>
              </div>
              
              <h2 className="text-4xl font-bold text-white mb-6">
                Let's Build Something <span className="text-yellow-400">Amazing</span>
              </h2>
              
              <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                Whether you have a detailed specification or just an idea, 
                I'm here to help bring your vision to life with professional expertise.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold rounded-xl hover:opacity-90 transition-opacity"
                >
                  Start Your Project
                </button>
                <a
                  href="mailto:esraelzerihun3@gmail.com"
                  className="px-8 py-4 border-2 border-yellow-500 text-yellow-500 font-semibold rounded-xl hover:bg-yellow-500 hover:text-gray-900 transition-colors"
                >
                  Email Directly
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
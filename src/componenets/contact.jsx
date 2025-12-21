import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();
  const [isLoading, setIsLoading] = useState(false);

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
      alert('Message sent successfully!');
      formRef.current.reset();
    } catch (error) {
      console.error('Email sending error:', error);
      alert('Failed to send the message.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        {/* Hero */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Me</h1>
          <p className="text-gray-400">Get in touch for project inquiries or collaborations</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-gray-800/50 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <FontAwesomeIcon icon={faEnvelope} className="text-yellow-500 text-xl" />
                  <div>
                    <p className="text-gray-300 font-medium">Email</p>
                    <a href="mailto:esraelzerihun3@gmail.com" className="text-gray-400 hover:text-yellow-500">
                      esraelzerihun3@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <FontAwesomeIcon icon={faPhone} className="text-yellow-500 text-xl" />
                  <div>
                    <p className="text-gray-300 font-medium">Phone</p>
                    <div className="space-y-1">
                      <a href="tel:+251965500734" className="text-gray-400 hover:text-yellow-500 block">
                        +251 965500734
                      </a>
                      <a href="tel:+251707720370" className="text-gray-400 hover:text-yellow-500 block">
                        +251 707720370
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="text-yellow-500 text-xl" />
                  <div>
                    <p className="text-gray-300 font-medium">Location</p>
                    <p className="text-gray-400">Addis Ababa, Ethiopia</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-gray-800/50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Response Time</h3>
              <p className="text-gray-400">
                I typically respond within 24 hours during weekdays. 
                For urgent matters, please mention "URGENT" in your message.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800/50 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Send a Message</h2>
            
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-300 mb-2">Your Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  required
                  placeholder="Project Inquiry"
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Message</label>
                <textarea
                  name="message"
                  required
                  rows="5"
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {isLoading ? 'Sending...' : 'Send Message'}
                <FontAwesomeIcon icon={faPaperPlane} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
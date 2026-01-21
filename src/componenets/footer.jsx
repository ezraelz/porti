import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFacebook, 
  faXTwitter, 
  faInstagram, 
  faLinkedin, 
  faGithub, 
  faYoutube 
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef();

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
      alert('Thank you!');
      formRef.current.reset();
    } catch (error) {
      console.error('Email sending error:', error);
      alert('Failed to send. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Footer */}
      <div className="border-t border-gray-800 py-8">
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
      </div>
      <div className="border-t border-gray-800 container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" onClick={scrollToTop} className="text-gray-400 hover:text-yellow-500">Home</Link></li>
              <li><Link to="/about" onClick={scrollToTop} className="text-gray-400 hover:text-yellow-500">About</Link></li>
              <li><Link to="/services" onClick={scrollToTop} className="text-gray-400 hover:text-yellow-500">Services</Link></li>
              <li><Link to="/faq" onClick={scrollToTop} className="text-gray-400 hover:text-yellow-500">FAQ</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <div className="space-y-2 text-gray-400">
              <p>esraelzerihun3@gmail.com</p>
              <p>+251 965500734</p>
              <p>+251 707720370</p>
              <p className="mt-4">Addis Ababa, Ethiopia</p>
            </div>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <form ref={formRef} onSubmit={sendEmail} className="mb-6">
              <div className="flex gap-2">
                <input
                  type="email"
                  name="user_email"
                  required
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 rounded-lg bg-gray-800 text-white placeholder-gray-400"
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className="px-4 py-2 bg-yellow-500 text-gray-900 font-semibold rounded-lg hover:bg-yellow-600 disabled:opacity-50"
                >
                  {isLoading ? '...' : 'Submit'}
                </button>
              </div>
            </form>

            <h3 className="text-xl font-bold mb-4">Social Links</h3>
            <div className="flex gap-4">
              {[
                { icon: faFacebook, href: "https://www.facebook.com/esrael.zerihun.94" },
                { icon: faXTwitter, href: "https://x.com/Esra82237692" },
                { icon: faInstagram, href: "https://www.instagram.com/hopeesra/" },
                { icon: faLinkedin, href: "https://www.linkedin.com/in/esrael-zerihun/" },
                { icon: faGithub, href: "https://github.com/ezraelz" },
                { icon: faYoutube, href: "https://www.youtube.com/@esraelzerihun3671" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-yellow-500 text-xl"
                >
                  <FontAwesomeIcon icon={social.icon} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500">
          <p>© {new Date().getFullYear()} ByteMind. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
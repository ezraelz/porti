// Simplified version
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/90 backdrop-blur-md py-4 border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-white">
            Byte<span className="text-yellow-500">Mind</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-300 hover:text-yellow-500">Home</Link>
            <Link to="/about" className="text-gray-300 hover:text-yellow-500">About</Link>
            <Link to="/services" className="text-gray-300 hover:text-yellow-500">Services</Link>
            <Link to="/faq" className="text-gray-300 hover:text-yellow-500">FAQ</Link>
            <Link to="/contact" className="text-gray-300 hover:text-yellow-500">Contact</Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-300 hover:text-white"
          >
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} className="text-xl" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-2 rounded-lg bg-gray-800 p-4">
            <Link to="/" className="block py-2 text-gray-300 hover:text-yellow-500">Home</Link>
            <Link to="/about" className="block py-2 text-gray-300 hover:text-yellow-500">About</Link>
            <Link to="/services" className="block py-2 text-gray-300 hover:text-yellow-500">Services</Link>
            <Link to="/faq" className="block py-2 text-gray-300 hover:text-yellow-500">FAQ</Link>
            <Link to="/contact" className="block py-2 text-gray-300 hover:text-yellow-500">Contact</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
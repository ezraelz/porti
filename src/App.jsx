// src/App.jsx
import React, { useState, useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './componenets/nav';
import Footer from './componenets/footer';
import Reaction from './componenets/reaction';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import './index.css';
import Loading from './componenets/loading';

// Lazy load components
const Home = lazy(() => import('./componenets/home'));
const About = lazy(() => import('./componenets/about'));
const Services = lazy(() => import('./componenets/services'));
const Faq = lazy(() => import('./componenets/faq'));
const Contact = lazy(() => import('./componenets/contact'));

// Loading fallback component
const LoadingFallback = () => (
  <div className="flex min-h-screen items-center justify-center bg-gray-900">
    <div className="h-12 w-12 animate-spin rounded-full border-4 border-yellow-500 border-t-transparent"></div>
  </div>
);

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isThemeMenuActive, setIsThemeMenuActive] = useState(false);
  const [currentTheme, setCurrentTheme] = useState('light-soft');
  
  // For API calls in Vite, use import.meta.env
  const API_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';

  useEffect(() => {
    // Simulate a network request
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Load the saved theme from localStorage when the app loads
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light-soft';
    applyTheme(savedTheme);
  }, []);

  // Apply theme to document
  const applyTheme = (theme) => {
    // Remove all theme classes
    document.documentElement.classList.remove(
      'dark-neon',
      'light-soft',
      'dark',
      'light'
    );
    
    // Add the new theme class
    document.documentElement.classList.add(theme);
    
    // Update theme for Tailwind dark mode if using dark theme
    if (theme.includes('dark')) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    setCurrentTheme(theme);
    localStorage.setItem('theme', theme);
  };

  // Toggle theme menu visibility
  const toggleThemeMenu = () => {
    setIsThemeMenuActive(!isThemeMenuActive);
  };

  // Toggle between light and dark themes
  const toggleTheme = () => {
    const newTheme = currentTheme === 'light-soft' ? 'dark-neon' : 'light-soft';
    applyTheme(newTheme);
  };

  // Theme options
  const themes = [
    { id: 'light-soft', name: 'Light Soft', icon: faSun },
    { id: 'dark-neon', name: 'Dark Neon', icon: faMoon },
  ];

  // For API testing (optional)
  useEffect(() => {
    if (API_URL && API_URL !== 'http://localhost:8000') {
      // Uncomment if you have a backend
      // axios.get(`${API_URL}/api/sample/`)
      //   .then((response) => console.log(response.data))
      //   .catch((error) => console.error('API Error:', error));
    }
  }, [API_URL]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Router>
      <div className={`min-h-screen transition-colors duration-300 ${currentTheme}`}>
        <Navbar />
        
        {/* Theme Toggle Button */}
        <div className="fixed right-6 top-24 z-50">
          <button
            onClick={toggleThemeMenu}
            className="relative flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-lg transition-transform hover:scale-110"
            aria-label="Toggle theme"
          >
            <FontAwesomeIcon 
              icon={currentTheme === 'light-soft' ? faMoon : faSun} 
              className="text-lg"
            />
          </button>
          
          {/* Theme Selection Menu */}
          {isThemeMenuActive && (
            <div className="absolute right-0 top-14 mt-2 w-48 rounded-lg border border-gray-700 bg-gray-900 p-2 shadow-xl">
              {themes.map((theme) => (
                <button
                  key={theme.id}
                  onClick={() => {
                    applyTheme(theme.id);
                    setIsThemeMenuActive(false);
                  }}
                  className={`flex w-full items-center gap-3 rounded-md px-3 py-2 transition-colors ${
                    currentTheme === theme.id
                      ? 'bg-gray-800 text-yellow-400'
                      : 'text-gray-300 hover:bg-gray-800'
                  }`}
                >
                  <FontAwesomeIcon icon={theme.icon} />
                  <span>{theme.name}</span>
                  {currentTheme === theme.id && (
                    <span className="ml-auto h-2 w-2 rounded-full bg-yellow-500"></span>
                  )}
                </button>
              ))}
            </div>
          )}
        </div>

        <main className="pt-16">
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </main>

        <Reaction />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
// src/App.jsx
import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';

import Navbar from './componenets/nav';
import Footer from './componenets/footer';
import Reaction from './componenets/reaction';
import './index.css';
import Loading from './componenets/loading';
import ServiceSinglePage from './componenets/serviceSinglePage';

// Lazy load components
const Home = lazy(() => import('./pages/home'));
const About = lazy(() => import('./pages/about'));
const Services = lazy(() => import('./pages/services'));
const Faq = lazy(() => import('./pages/faq'));
const Contact = lazy(() => import('./pages/contact'));

const AdminDashoard = lazy(() => import('./pages/admin/adminDashoard'));

// Loading fallback component
const LoadingFallback = () => (
  <div className="flex min-h-screen items-center justify-center bg-gray-900">
    <div className="h-12 w-12 animate-spin rounded-full border-4 border-yellow-500 border-t-transparent"></div>
  </div>
);

function App() {
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    // Simulate a network request
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <HashRouter>
      <div className={`min-h-screen transition-colors duration-300 ${isLoading ? 'bg-gray-900' : 'bg-white'}`}>
        <Navbar />

        <main className="pt-16">
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/serviceSinglepage/:id" element={<ServiceSinglePage />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/contact" element={<Contact />} />

              <Route path="/admin" element={<AdminDashoard />} />
            </Routes>
          </Suspense>
        </main>

        <Reaction />
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
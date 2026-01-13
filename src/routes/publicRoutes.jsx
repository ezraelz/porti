// src/App.jsx
import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import '../index.css';
import Loading from '../componenets/loading';
import ServiceSinglePage from '../componenets/serviceSinglePage';
import Login from '../pages/auth/login';

// Lazy load components
const Home = lazy(() => import('../pages/home'));
const About = lazy(() => import('../pages/about'));
const Services = lazy(() => import('../pages/services'));
const Faq = lazy(() => import('../pages/faq'));
const Contact = lazy(() => import('../pages/contact'));

const PublicRoutes = () => {

  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/serviceSinglepage/:id" element={<ServiceSinglePage />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contact" element={<Contact />} />
        
    </Routes>
  );
}

export default PublicRoutes;
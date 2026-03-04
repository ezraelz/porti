import React, { useEffect } from 'react';
import Navbar from '../nav';
import PublicRoutes from '../../routes/publicRoutes';
import Footer from '../footer';
import { useLocation } from 'react-router-dom';
import { useAuth } from '../../context/authContext';

const BaseLayout = () => {
  const { PageViews } = useAuth();
  const location = useLocation();
  const page = location.pathname;


  useEffect(() => {
    PageViews();
  }, []);

  return (
    <div>
        <Navbar/>
        <div>
            <PublicRoutes />
        </div>
        <Footer />
    </div>
  )
}

export default BaseLayout
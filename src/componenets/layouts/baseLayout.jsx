import React from 'react';
import Navbar from '../nav';
import PublicRoutes from '../../routes/publicRoutes';
import Footer from '../footer';

const BaseLayout = () => {
  return (
    <div classNname="" >
        <Navbar/>
        <div classNname="" >
            <PublicRoutes />
        </div>
        <Footer />
    </div>
  )
}

export default BaseLayout
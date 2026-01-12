import React, { useState } from 'react';
import { useLocation, matchPath } from 'react-router-dom';
import AdminNav from '../adminNav';
import AdminSidebar from '../adminSidebar';
import { Outlet } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

// Define portfolio-specific route titles
const routeTitles = {
  '/admin': 'Portfolio Dashboard',
  '/admin': 'Portfolio Dashboard',
  '/admin/projects': 'Project Management',
  '/admin/messages': 'Visitor Messages',
  '/admin/analytics': 'Portfolio Analytics',
  '/admin/settings': 'Portfolio Settings',
  '/admin/skills': 'Skills & Experience',
  '/admin/testimonials': 'Testimonials',
  '/admin/experience': 'Experience',
  '/admin/resume': 'Resume/CV',
  '/admin/subscribers': 'Subscribers',
  '/admin/profile': 'Profile',
};

const AdminLayout = () => {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  // Get current page title
  const getPageTitle = () => {
    for (const [path, title] of Object.entries(routeTitles)) {
      if (matchPath(path, location.pathname)) {
        return title;
      }
    }
    return 'Dashboard';
  };

  // Get breadcrumb based on path
  const getBreadcrumb = () => {
    const pathSegments = location.pathname.split('/').filter(segment => segment);
    if (pathSegments.length <= 2) return null;
    
    return (
      <nav className="flex" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2">
          <li>
            <span className="text-gray-500">Portfolio</span>
          </li>
          {pathSegments.slice(1).map((segment, index) => (
            <li key={index} className="flex items-center">
              <span className="mx-2 text-gray-400">/</span>
              <span className={`${index === pathSegments.length - 2 ? 'text-blue-600 font-medium' : 'text-gray-500'}`}>
                {segment.charAt(0).toUpperCase() + segment.slice(1)}
              </span>
            </li>
          ))}
        </ol>
      </nav>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Admin Navigation */}
      <AdminNav onMenuClick={() => setSidebarOpen(true)} />
      
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-40 lg:hidden bg-black bg-opacity-50 transition-opacity"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      
      <div className="flex">
        {/* Sidebar - Desktop */}
        <div className="hidden lg:block fixed top-0 left-0 h-screen w-64 z-30 pt-16 overflow-y-scroll">
          <AdminSidebar />
        </div>
        
        {/* Sidebar - Mobile */}
        <div className={`
          fixed inset-y-0 left-0 z-50 w-64 transform transition-transform duration-300 ease-in-out
          lg:hidden
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        `}>
          <div className="h-full">
            <AdminSidebar onClose={() => setSidebarOpen(false)} />
          </div>
        </div>
        
        {/* Main Content */}
        <main className="flex-1 lg:ml-64 ">
          <div className="p-4 md:p-6 lg:p-8">
            {/* Page Header */}
            <div className="mb-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <div className="flex items-center space-x-3 mb-2">
                    <button 
                      onClick={() => setSidebarOpen(true)}
                      className="lg:hidden p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg"
                    >
                      <Menu size={20} />
                    </button>
                    <div>
                      <h1 className="text-2xl md:text-3xl font-bold text-gray-800">{getPageTitle()}</h1>
                      {getBreadcrumb()}
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm md:text-base">
                    Manage your portfolio content, messages, and analytics
                  </p>
                </div>
                
                {/* Quick Stats Bar */}
                <div className="mt-4 md:mt-0 flex items-center space-x-4">
                  <div className="hidden md:flex items-center space-x-2 px-4 py-2 bg-white rounded-lg shadow-sm border">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm font-medium">Online</span>
                  </div>
                  <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all shadow-sm">
                    + Add Content
                  </button>
                </div>
              </div>
            </div>
            
              {/* Content Area */}
              <div className="p-0 md:p-0">
                <Outlet />
              </div>
            
            {/* Footer Note */}
            <div className="mt-6 text-center text-gray-500 text-sm">
              <p>Portfolio Admin Panel • Last updated: {new Date().toLocaleDateString()}</p>
            </div>
          </div>
        </main>
      </div>
      
      {/* Floating Action Button for Mobile */}
      <button 
        onClick={() => setSidebarOpen(true)}
        className="lg:hidden fixed bottom-6 right-6 z-30 p-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all"
      >
        <Menu size={24} />
      </button>
    </div>
  );
};

export default AdminLayout;
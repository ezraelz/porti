import React, { useState } from 'react';
import { useLocation, matchPath } from 'react-router-dom';
import AdminNav from '../adminNav';
import AdminSidebar from '../adminSidebar';
import { Outlet } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

// Define portfolio-specific route titles
const routeTitles = {
  '/admin': 'Portfolio Dashboard',
  '/admin/projects': 'Project Management',
  '/admin/messages': 'Visitor Messages',
  '/admin/analytics': 'Portfolio Analytics',
  '/admin/settings': 'Portfolio Settings',
  '/admin/skills': 'Skills & Experience',
  '/admin/testimonials': 'Testimonials',
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
    return 'Portfolio Dashboard';
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
        <div className="hidden lg:block w-64 min-h-screen">
          <AdminSidebar />
        </div>
        
        {/* Sidebar - Mobile */}
        <div className={`
          fixed inset-y-0 left-0 z-50 w-64 transform transition-transform duration-300 ease-in-out
          lg:hidden
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        `}>
          <div className="h-full bg-gradient-to-b from-gray-900 to-gray-800">
            <div className="flex justify-between items-center p-4 border-b border-gray-700">
              <span className="text-white font-bold text-lg">Portfolio Admin</span>
              <button 
                onClick={() => setSidebarOpen(false)}
                className="p-2 text-gray-400 hover:text-white"
              >
                <X size={24} />
              </button>
            </div>
            <AdminSidebar onClose={() => setSidebarOpen(false)} />
          </div>
        </div>
        
        {/* Main Content */}
        <main className="flex-1">
          <div className="p-4 md:p-6">
            {/* Page Header */}
            <div className="mb-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <div className="flex items-center space-x-3 mb-2">
                    <button 
                      onClick={() => setSidebarOpen(true)}
                      className="lg:hidden p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg"
                    >
                      <Menu size={20} />
                    </button>
                  </div>
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
            
            {/* Page Content Container */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200/50 overflow-hidden">
              {/* Gradient Header Strip */}
              <div className="h-2 bg-gradient-to-r from-blue-500 to-purple-500"></div>
              
              {/* Content Area */}
              <div className="p-4 md:p-6 lg:p-8">
                <Outlet />
              </div>
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
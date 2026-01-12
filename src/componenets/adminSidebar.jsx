import React from 'react';
import { 
  LayoutDashboard, 
  Users, 
  FolderKanban, 
  MessageSquare, 
  BarChart3,
  Settings,
  FileText,
  Award,
  LogOut,
  Briefcase,
  X
} from 'lucide-react';
import { NavLink, useNavigate } from 'react-router-dom';

const AdminSidebar = ({ onClose }) => {
  const navigate = useNavigate();
  
  // Portfolio-specific navigation groups
  const navGroups = [
    {
      title: 'Overview',
      items: [
        { path: '/admin/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
        { path: '/admin/analytics', icon: BarChart3, label: 'Analytics' },
      ]
    },
    {
      title: 'Content Management',
      items: [
        { path: '/admin/projects', icon: FolderKanban, label: 'Projects' },
        { path: '/admin/skills', icon: Award, label: 'Skills' },
        { path: '/admin/experience', icon: Briefcase, label: 'Experience' },
        { path: '/admin/testimonials', icon: MessageSquare, label: 'Testimonials' },
      ]
    },
    {
      title: 'Communication',
      items: [
        { path: '/admin/messages', icon: MessageSquare, label: 'Messages' },
        { path: '/admin/subscribers', icon: Users, label: 'Subscribers' },
      ]
    },
    {
      title: 'Settings',
      items: [
        { path: '/admin/settings', icon: Settings, label: 'Portfolio Settings' },
        { path: '/admin/resume', icon: FileText, label: 'Resume/CV' },
      ]
    }
  ];

  const handleLogout = () => {
    // Add your logout logic here
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <aside className="w-64 h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white flex flex-col relative">
      {/* Mobile Close Button */}
      {onClose && (
        <button 
          onClick={onClose}
          className="lg:hidden absolute top-4 right-4 z-10 p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg transition-colors"
        >
          <X size={20} />
        </button>
      )}
      
      {/* Logo/Brand Section */}
      <div className="p-6 border-b border-gray-700">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">P</span>
            </div>
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-gray-900"></div>
          </div>
          <div>
            <h1 className="text-xl font-bold">Portfolio Admin</h1>
            <p className="text-xs text-gray-400 mt-1">Manage your digital presence</p>
          </div>
        </div>
      </div>

      {/* User Profile Summary */}
      <div className="p-4 border-b border-gray-700">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-gray-700 to-gray-600 rounded-full flex items-center justify-center">
            <span className="font-semibold">JD</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-medium truncate">John Doe</p>
            <p className="text-xs text-gray-400 truncate">john@portfolio.com</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      {navGroups.map((group, index) => (
  <div key={index} className="mb-8">
    <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 px-2">
      {group.title}
    </h3>
    <div className="space-y-1">
      {group.items.map((item) => {
        const Icon = item.icon;
        return (
          <NavLink
            key={item.path}
            to={item.path}
            onClick={onClose}
            className={({ isActive }) => `
              flex items-center space-x-3 px-3 py-3 rounded-lg transition-all duration-200
              ${isActive 
                ? 'bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-white border-l-4 border-blue-500' 
                : 'text-gray-300 hover:bg-gray-700/50 hover:text-white hover:translate-x-1'
              }
            `}
          >
            {({ isActive: active }) => (
              <>
                <Icon size={20} className={active ? 'text-blue-400' : 'text-gray-400'} />
                <span className="font-medium">{item.label}</span>
                {item.path === '/admin/messages' && (
                  <span className="ml-auto bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                    3
                  </span>
                )}
              </>
            )}
          </NavLink>
        );
      })}
    </div>
  </div>
))}

      {/* Quick Stats */}
      <div className="p-4 border-t border-gray-700">
        <div className="bg-gray-800/50 rounded-lg p-3 mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs text-gray-400">Portfolio Views</span>
            <span className="text-xs text-green-400">↑ 24%</span>
          </div>
          <div className="text-lg font-bold">12.8k</div>
          <div className="w-full bg-gray-700 rounded-full h-1.5 mt-2">
            <div className="bg-green-500 h-1.5 rounded-full w-3/4"></div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-gray-700">
        <button
          onClick={handleLogout}
          className="flex items-center justify-center space-x-3 w-full px-4 py-3 bg-gray-800/50 hover:bg-gray-700 text-gray-300 hover:text-white rounded-lg transition-all duration-200 group"
        >
          <LogOut size={20} className="group-hover:rotate-180 transition-transform duration-300" />
          <span className="font-medium">Logout</span>
        </button>
        
        {/* View Portfolio Button */}
        <button
          onClick={() => {
            window.open('/', '_blank');
            if (onClose) onClose();
          }}
          className="mt-3 flex items-center justify-center space-x-2 w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
        >
          <span className="font-medium">View Portfolio</span>
        </button>
      </div>
    </aside>
  );
};

export default AdminSidebar;
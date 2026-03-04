import React, { useState } from 'react';
import { 
  Bell, 
  Search, 
  User, 
  Settings, 
  Menu,
  ChevronDown,
  Moon,
  Sun,
  HelpCircle
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/authContext';

const AdminNav = ({ onMenuClick }) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  
  // Sample notifications
  const notifications = [
    { id: 1, title: 'New message from Alex', time: '2 min ago', read: false },
    { id: 2, title: 'Project viewed 50 times', time: '1 hour ago', read: false },
    { id: 3, title: 'Resume downloaded', time: '3 hours ago', read: true },
    { id: 4, title: 'System backup complete', time: 'Yesterday', read: true },
  ];

  const unreadCount = notifications.filter(n => !n.read).length;

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-gradient-to-b from-gray-900 to-gray-800 text-white backdrop-blur-md border-b border-gray-200/50 shadow-sm">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Left Section: Logo & Menu Button */}
          <div className="flex items-center">
            {/* Mobile Menu Button */}
            <button
              onClick={onMenuClick}
              className="lg:hidden p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 mr-2"
            >
              <Menu size={24} />
            </button>

            {/* Logo/Brand */}
            <Link to="/admin/dashboard" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-lg">P</span>
              </div>
              <div className="hidden md:block">
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Dashboard
                </h1>
              </div>
            </Link>
          </div>

          {/* Center Section: Search Bar */}
          <div className="hidden lg:flex flex-1 max-w-2xl mx-8 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-gradient-to-b from-gray-900 to-gray-800 text-white" size={20} />
              <input
                type="text"
                placeholder="Search projects, messages, or settings..."
                className="w-full pl-10 pr-4 py-2 bg-gradient-to-b from-gray-900 to-gray-800 text-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Right Section: Actions & Profile */}
          <div className="flex items-center space-x-4 text-white">
            
            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Help */}
            <button
              className="p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 hidden md:block"
              title="Help & Support"
            >
              <HelpCircle size={20} />
            </button>

            {/* Notifications */}
            <div className="relative">
              <button
                onClick={() => setShowNotifications(!showNotifications)}
                className="p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 relative"
              >
                <Bell size={20} />
                {unreadCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {unreadCount}
                  </span>
                )}
              </button>

              {/* Notifications Dropdown */}
              {showNotifications && (
                <>
                  <div 
                    className="fixed inset-0 z-10"
                    onClick={() => setShowNotifications(false)}
                  />
                  <div className="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-20">
                    <div className="px-4 py-2 border-b border-gray-100">
                      <h3 className="font-semibold text-gray-800">Notifications</h3>
                      <p className="text-sm text-gray-500">{unreadCount} unread</p>
                    </div>
                    <div className="max-h-96 overflow-y-auto">
                      {notifications.map((notification) => (
                        <div
                          key={notification.id}
                          className={`px-4 py-3 hover:bg-gray-50 cursor-pointer border-l-4 ${
                            notification.read ? 'border-transparent' : 'border-blue-500'
                          }`}
                        >
                          <div className="flex justify-between">
                            <p className={`font-medium ${notification.read ? 'text-gray-700' : 'text-gray-900'}`}>
                              {notification.title}
                            </p>
                            {!notification.read && (
                              <span className="w-2 h-2 bg-blue-500 rounded-full mt-2"></span>
                            )}
                          </div>
                          <p className="text-sm text-gray-500 mt-1">{notification.time}</p>
                        </div>
                      ))}
                    </div>
                    <div className="px-4 py-2 border-t border-gray-100">
                      <button className="text-sm text-blue-600 hover:text-blue-800 font-medium w-full text-center py-2">
                        View all notifications
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Settings */}
            <Link
              to="/admin/settings"
              className="p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              title="Settings"
            >
              <Settings size={20} />
            </Link>

            {/* Profile Dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowProfileMenu(!showProfileMenu)}
                className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100"
              >
                <div className="w-9 h-9 bg-gradient-to-br from-gray-700 to-gray-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-sm"></span>
                </div>
                <div className="hidden md:block text-left">
                  <p className="text-sm font-medium text-gray-800">{user.full_name}</p>
                  <p className="text-xs text-gray-500">{user.username}</p>
                </div>
                <ChevronDown size={16} className="text-gray-500" />
              </button>

              {/* Profile Dropdown Menu */}
              {showProfileMenu && (
                <>
                  <div 
                    className="fixed inset-0 z-10"
                    onClick={() => setShowProfileMenu(false)}
                  />
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-20">
                    <div className="px-4 py-3 border-b border-gray-100">
                      <p className="font-medium text-gray-800">{user.username}</p>
                      <p className="text-sm text-gray-500">{user.email}</p>
                    </div>
                    <Link
                      to="/admin/profile"
                      className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50"
                      onClick={() => setShowProfileMenu(false)}
                    >
                      <User size={18} className="mr-3 text-gray-500" />
                      <span>My Profile</span>
                    </Link>
                    <Link
                      to="/admin/settings"
                      className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50"
                      onClick={() => setShowProfileMenu(false)}
                    >
                      <Settings size={18} className="mr-3 text-gray-500" />
                      <span>Account Settings</span>
                    </Link>
                    <div className="border-t border-gray-100 my-2"></div>
                    <button
                      onClick={handleLogout}
                      className="flex items-center w-full px-4 py-3 text-red-600 hover:bg-red-50"
                    >
                      <span className="font-medium">Sign Out</span>
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Search Bar (Hidden on desktop) */}
        <div className="lg:hidden py-3 border-t border-gray-100">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AdminNav;
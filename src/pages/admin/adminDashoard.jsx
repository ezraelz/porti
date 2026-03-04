import React from 'react';
import { 
  Eye, 
  Download, 
  MessageSquare, 
  UserPlus,
  TrendingUp,
  FileText,
  Link as LinkIcon,
  BarChart3,
  Calendar,
  Clock
} from 'lucide-react';

const AdminDashboard = () => {
  // Portfolio-specific stats
  const portfolioStats = [
    { 
      title: 'Total Views', 
      value: '12,847', 
      change: '+24.5%', 
      icon: Eye, 
      color: 'bg-blue-500',
      description: 'Last 30 days'
    },
    { 
      title: 'Downloads', 
      value: '847', 
      change: '+18.2%', 
      icon: Download, 
      color: 'bg-green-500',
      description: 'Resume/CV downloads'
    },
    { 
      title: 'Messages', 
      value: '156', 
      change: '+32.1%', 
      icon: MessageSquare, 
      color: 'bg-purple-500',
      description: 'Contact form submissions'
    },
    { 
      title: 'New Contacts', 
      value: '89', 
      change: '+15.3%', 
      icon: UserPlus, 
      color: 'bg-orange-500',
      description: 'This month'
    },
  ];

  // Project performance
  const projectStats = [
    { name: 'E-commerce App', views: 2450, engagement: 78 },
    { name: 'Mobile Dashboard', views: 1890, engagement: 82 },
    { name: 'API Service', views: 1560, engagement: 65 },
    { name: 'UI Library', views: 3240, engagement: 91 },
  ];

  // Recent messages
  const recentMessages = [
    { name: 'Alex Johnson', company: 'TechCorp', time: '2 hours ago', message: 'Interested in your React skills...', read: false },
    { name: 'Sarah Miller', company: 'StartupXYZ', time: '5 hours ago', message: 'Loved your portfolio design!', read: true },
    { name: 'Mike Chen', company: 'Google', time: '1 day ago', message: 'Opportunity for frontend role...', read: true },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
            <BarChart3 size={20} />
            <span>Generate Report</span>
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <Calendar size={20} />
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {portfolioStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-gray-500 text-sm font-medium">{stat.title}</p>
                  <p className="text-2xl font-bold mt-2">{stat.value}</p>
                  <div className="flex items-center mt-1">
                    <span className={`text-sm font-medium ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                      {stat.change}
                    </span>
                    <span className="text-gray-500 text-sm ml-2">{stat.description}</span>
                  </div>
                </div>
                <div className={`${stat.color} p-3 rounded-lg`}>
                  <Icon className="text-white" size={24} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Project Performance */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-800">Project Performance</h2>
            <button className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center">
              <TrendingUp size={16} className="mr-1" />
              View Details
            </button>
          </div>
          
          <div className="space-y-4">
            {projectStats.map((project, index) => (
              <div key={index} className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg transition-colors">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center">
                    <FileText className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800">{project.name}</h3>
                    <p className="text-sm text-gray-500">{project.views.toLocaleString()} views</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center justify-end space-x-2">
                    <div className="w-32 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-green-500 h-2 rounded-full" 
                        style={{ width: `${project.engagement}%` }}
                      />
                    </div>
                    <span className="font-semibold text-gray-700">{project.engagement}%</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">Engagement rate</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Messages */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-800">Recent Messages</h2>
            <span className="text-blue-600 text-sm font-medium">View All</span>
          </div>
          
          <div className="space-y-4">
            {recentMessages.map((message, index) => (
              <div key={index} className="p-4 border border-gray-100 rounded-lg hover:bg-blue-50 transition-colors cursor-pointer">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex items-center space-x-2">
                      <h3 className="font-medium text-gray-800">{message.name}</h3>
                      {!message.read && (
                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      )}
                    </div>
                    <p className="text-sm text-gray-600 mt-1">{message.company}</p>
                  </div>
                  <span className="text-xs text-gray-500 flex items-center">
                    <Clock size={12} className="mr-1" />
                    {message.time}
                  </span>
                </div>
                <p className="text-gray-700 mt-3 line-clamp-2">{message.message}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-6 border-t border-gray-100">
            <button className="w-full py-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-500 hover:border-blue-500 hover:text-blue-500 transition-colors flex items-center justify-center space-x-2">
              <MessageSquare size={18} />
              <span>Add Quick Response</span>
            </button>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">Quick Actions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors flex flex-col items-center justify-center">
            <div className="p-3 bg-blue-100 rounded-lg mb-3">
              <LinkIcon className="text-blue-600" size={24} />
            </div>
            <span className="font-medium text-gray-800">Update Links</span>
            <span className="text-sm text-gray-500 mt-1">Social & project links</span>
          </button>
          
          <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors flex flex-col items-center justify-center">
            <div className="p-3 bg-green-100 rounded-lg mb-3">
              <FileText className="text-green-600" size={24} />
            </div>
            <span className="font-medium text-gray-800">Update Resume</span>
            <span className="text-sm text-gray-500 mt-1">Upload new version</span>
          </button>
          
          <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors flex flex-col items-center justify-center">
            <div className="p-3 bg-purple-100 rounded-lg mb-3">
              <BarChart3 className="text-purple-600" size={24} />
            </div>
            <span className="font-medium text-gray-800">Analytics</span>
            <span className="text-sm text-gray-500 mt-1">View detailed stats</span>
          </button>
          
          <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors flex flex-col items-center justify-center">
            <div className="p-3 bg-orange-100 rounded-lg mb-3">
              <MessageSquare className="text-orange-600" size={24} />
            </div>
            <span className="font-medium text-gray-800">Auto Reply</span>
            <span className="text-sm text-gray-500 mt-1">Set up responses</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
import React, { useEffect, useState } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, LineChart, Line, AreaChart, Area, RadarChart,
  PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar
} from 'recharts';
import { 
  Eye, Download, Heart, MessageSquare, 
  TrendingUp, Users, Award, Code, 
  Clock, Star, GitBranch, ExternalLink,
  Calendar, ChevronRight
} from 'lucide-react';
import { useAuth } from '../../context/authContext';

const Analytics = () => {
  const [timeRange, setTimeRange] = useState('month');
  const { pageView } = useAuth();
    
  console.log('page view', pageView);
  // Portfolio metrics
  const portfolioMetrics = {
    totalViews: 1245,
    totalDownloads: 89,
    totalLikes: 234,
    totalComments: 45,
    avgEngagement: 4.8,
    projectsCompleted: 12,
    skills: 8,
    clients: 6
  };

  // Traffic sources data
  const trafficData = [
    { source: 'LinkedIn', visitors: 400, color: '#0077B5' },
    { source: 'GitHub', visitors: 300, color: '#181717' },
    { source: 'Twitter', visitors: 200, color: '#1DA1F2' },
    { source: 'Direct', visitors: 100, color: '#666666' },
    { source: 'Other', visitors: 50, color: '#8884d8' },
  ];

  // Project performance data
  const projectPerformance = [
    { name: 'E-commerce App', views: 450, likes: 120, complexity: 85 },
    { name: 'Dashboard UI', views: 380, likes: 95, complexity: 70 },
    { name: 'AI Chatbot', views: 520, likes: 150, complexity: 90 },
    { name: 'Mobile App', views: 310, likes: 80, complexity: 75 },
    { name: 'API Design', views: 280, likes: 70, complexity: 65 },
  ];

  // Skill radar data
  const skillData = [
    { subject: 'React', A: 95, fullMark: 100 },
    { subject: 'Node.js', A: 85, fullMark: 100 },
    { subject: 'UI/UX', A: 90, fullMark: 100 },
    { subject: 'TypeScript', A: 88, fullMark: 100 },
    { subject: 'DevOps', A: 75, fullMark: 100 },
    { subject: 'Python', A: 80, fullMark: 100 },
  ];

  // Monthly views data
  const monthlyViews = [
    { month: 'Jan', views: 65 },
    { month: 'Feb', views: 120 },
    { month: 'Mar', views: 90 },
    { month: 'Apr', views: 150 },
    { month: 'May', views: 200 },
    { month: 'Jun', views: 180 },
    { month: 'Jul', views: 240 },
    { month: 'Aug', views: 300 },
  ];

  // Recent activity
  const recentActivity = [
    { id: 1, project: 'Portfolio v3.0', action: 'Updated', time: '2 hours ago', icon: <Code className="w-4 h-4" /> },
    { id: 2, project: 'E-commerce App', action: 'New star', time: '1 day ago', icon: <Star className="w-4 h-4" /> },
    { id: 3, project: 'Dashboard UI', action: 'Forked', time: '2 days ago', icon: <GitBranch className="w-4 h-4" /> },
    { id: 4, project: 'AI Chatbot', action: 'Viewed', time: '3 days ago', icon: <Eye className="w-4 h-4" /> },
  ];

  // Popular projects
  const popularProjects = [
    { name: 'E-commerce Platform', views: 450, stars: 45, language: 'React', color: '#61DAFB' },
    { name: 'AI Analytics Dashboard', views: 380, stars: 38, language: 'TypeScript', color: '#3178C6' },
    { name: 'Real-time Chat App', views: 520, stars: 52, language: 'Node.js', color: '#339933' },
    { name: 'Mobile Task Manager', views: 310, stars: 31, language: 'React Native', color: '#61DAFB' },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

  const MetricCard = ({ title, value, icon, change, color }) => (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 rounded-lg ${color} bg-opacity-10`}>
          {icon}
        </div>
        <span className="text-sm text-gray-500">{title}</span>
      </div>
      <div className="flex items-end justify-between">
        <h3 className="text-3xl font-bold text-gray-800">{value.toLocaleString()}</h3>
        {change && (
          <span className={`text-sm ${change > 0 ? 'text-green-600' : 'text-red-600'}`}>
            {change > 0 ? '+' : ''}{change}%
          </span>
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Portfolio Analytics</h1>
            <p className="text-gray-600 mt-2">Track your portfolio performance and engagement</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex bg-white rounded-lg border border-gray-200 p-1">
              {['week', 'month', 'quarter', 'year'].map((range) => (
                <button
                  key={range}
                  onClick={() => setTimeRange(range)}
                  className={`px-4 py-2 rounded-md text-sm font-medium capitalize transition-all ${
                    timeRange === range
                      ? 'bg-indigo-600 text-white'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {range}
                </button>
              ))}
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-gray-700 hover:bg-gray-50">
              <Calendar className="w-4 h-4" />
              Export Report
            </button>
          </div>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <MetricCard
          title="Total Views"
          value={portfolioMetrics.totalViews}
          icon={<Eye className="w-6 h-6 text-blue-600" />}
          change={12.5}
          color="bg-blue-50"
        />
        <MetricCard
          title="Project Downloads"
          value={portfolioMetrics.totalDownloads}
          icon={<Download className="w-6 h-6 text-green-600" />}
          change={8.3}
          color="bg-green-50"
        />
        <MetricCard
          title="Likes Received"
          value={portfolioMetrics.totalLikes}
          icon={<Heart className="w-6 h-6 text-red-600" />}
          change={15.2}
          color="bg-red-50"
        />
        <MetricCard
          title="Projects Completed"
          value={portfolioMetrics.projectsCompleted}
          icon={<Award className="w-6 h-6 text-purple-600" />}
          change={5.7}
          color="bg-purple-50"
        />
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Monthly Views Trend */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-800">Monthly Views Trend</h3>
            <TrendingUp className="w-5 h-5 text-green-600" />
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={monthlyViews}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" stroke="#666" />
                <YAxis stroke="#666" />
                <Tooltip />
                <Area type="monotone" dataKey="views" stroke="#667eea" fill="#667eea" fillOpacity={0.2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Traffic Sources */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-800">Traffic Sources</h3>
            <Users className="w-5 h-5 text-blue-600" />
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={trafficData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ source, percent }) => `${source}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="visitors"
                >
                  {trafficData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex flex-wrap gap-3 mt-4">
            {trafficData.map((source) => (
              <div key={source.source} className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: source.color }} />
                <span className="text-sm text-gray-600">{source.source}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Skills and Popular Projects */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Skills Radar */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-800">Technical Skills</h3>
            <Code className="w-5 h-5 text-indigo-600" />
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={skillData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" stroke="#666" />
                <PolarRadiusAxis angle={30} domain={[0, 100]} stroke="#666" />
                <Radar
                  name="Skills"
                  dataKey="A"
                  stroke="#667eea"
                  fill="#667eea"
                  fillOpacity={0.3}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Popular Projects */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-800">Most Popular Projects</h3>
            <Star className="w-5 h-5 text-yellow-600" />
          </div>
          <div className="space-y-4">
            {popularProjects.map((project) => (
              <div key={project.name} className="flex items-center justify-between p-4 rounded-lg hover:bg-gray-50">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: project.color }} />
                  <div>
                    <h4 className="font-medium text-gray-800">{project.name}</h4>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Eye className="w-3 h-3" />
                        {project.views}
                      </span>
                      <span className="flex items-center gap-1">
                        <Star className="w-3 h-3" />
                        {project.stars}
                      </span>
                      <span>{project.language}</span>
                    </div>
                  </div>
                </div>
                <button className="p-2 hover:bg-gray-100 rounded-lg">
                  <ExternalLink className="w-4 h-4 text-gray-500" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-8">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-800">Recent Activity</h3>
          <Clock className="w-5 h-5 text-gray-600" />
        </div>
        <div className="space-y-4">
          {recentActivity.map((activity) => (
            <div key={activity.id} className="flex items-center justify-between p-4 rounded-lg hover:bg-gray-50">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gray-100 rounded-lg">
                  {activity.icon}
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">{activity.project}</h4>
                  <p className="text-sm text-gray-500">{activity.action}</p>
                </div>
              </div>
              <div className="text-sm text-gray-500">{activity.time}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl p-6">
          <h3 className="text-lg font-semibold mb-2">Engagement Rate</h3>
          <p className="text-3xl font-bold mb-2">{portfolioMetrics.avgEngagement}%</p>
          <p className="text-sm opacity-90">Above average portfolio performance</p>
        </div>
        <div className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-xl p-6">
          <h3 className="text-lg font-semibold mb-2">Total Skills</h3>
          <p className="text-3xl font-bold mb-2">{portfolioMetrics.skills}+</p>
          <p className="text-sm opacity-90">Technical skills and tools</p>
        </div>
        <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl p-6">
          <h3 className="text-lg font-semibold mb-2">Satisfied Clients</h3>
          <p className="text-3xl font-bold mb-2">{portfolioMetrics.clients}+</p>
          <p className="text-sm opacity-90">Happy clients and collaborators</p>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
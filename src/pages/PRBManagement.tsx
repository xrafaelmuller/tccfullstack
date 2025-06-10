import React from 'react';
import { FileText, Briefcase, Calendar, TrendingUp, Clock, CheckCircle } from 'lucide-react';

const PRBManagement: React.FC = () => {
  // Placeholder modules for future PRB features
  const managementModules = [
    {
      title: 'Project Planning',
      description: 'Strategic project planning and resource allocation tools.',
      icon: Briefcase,
      status: 'In Development',
      color: 'bg-blue-100 text-blue-600',
    },
    {
      title: 'Resource Tracking',
      description: 'Real-time resource utilization and availability monitoring.',
      icon: TrendingUp,
      status: 'In Development',
      color: 'bg-green-100 text-green-600',
    },
    {
      title: 'Schedule Management',
      description: 'Advanced scheduling and timeline management capabilities.',
      icon: Calendar,
      status: 'In Development',
      color: 'bg-purple-100 text-purple-600',
    },
    {
      title: 'Performance Analytics',
      description: 'Comprehensive business performance metrics and reporting.',
      icon: CheckCircle,
      status: 'In Development',
      color: 'bg-orange-100 text-orange-600',
    },
  ];

  const quickStats = [
    { label: 'Active Projects', value: '0', trend: 'Ready to start' },
    { label: 'Resources', value: '0', trend: 'Available' },
    { label: 'Completion Rate', value: '0%', trend: 'Baseline' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header Section */}
      <div className="text-center mb-12">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-teal-600 rounded-xl flex items-center justify-center">
            <FileText className="w-8 h-8 text-white" />
          </div>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">PRB Management</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Professional Resource and Business Management - Streamline your operations 
          with intelligent resource allocation and project coordination tools.
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {quickStats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-sm text-gray-500">{stat.trend}</p>
              </div>
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-teal-600" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Status Banner */}
      <div className="bg-teal-50 border border-teal-200 rounded-lg p-4 mb-8">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <Clock className="w-5 h-5 text-teal-600" />
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-teal-800">
              Module Preparation Phase
            </h3>
            <div className="mt-1 text-sm text-teal-700">
              PRB Management features are being designed and will be implemented based on business requirements.
            </div>
          </div>
        </div>
      </div>

      {/* Management Modules Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {managementModules.map((module) => {
          const Icon = module.icon;
          return (
            <div
              key={module.title}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${module.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {module.title}
                    </h3>
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                      {module.status}
                    </span>
                  </div>
                  <p className="text-gray-600">
                    {module.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Implementation Roadmap */}
      <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">Implementation Roadmap</h3>
        
        <div className="space-y-4">
          <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-sm font-semibold text-blue-600">1</span>
            </div>
            <div>
              <h4 className="font-medium text-gray-900">Requirements Analysis</h4>
              <p className="text-sm text-gray-600">Define specific business needs and workflow requirements</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
            <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center">
              <span className="text-sm font-semibold text-teal-600">2</span>
            </div>
            <div>
              <h4 className="font-medium text-gray-900">Core Module Development</h4>
              <p className="text-sm text-gray-600">Build fundamental resource and project management features</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
            <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
              <span className="text-sm font-semibold text-purple-600">3</span>
            </div>
            <div>
              <h4 className="font-medium text-gray-900">Integration & Testing</h4>
              <p className="text-sm text-gray-600">Integrate with existing systems and conduct comprehensive testing</p>
            </div>
          </div>
        </div>

        {/* TODO: Future development areas */}
        <div className="mt-8 p-4 bg-gray-50 rounded-lg">
          <h4 className="font-medium text-gray-900 mb-2">Technical Foundation:</h4>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Database schema designed for scalable resource management</li>
            <li>• API endpoints structured for multi-tenant business operations</li>
            <li>• UI framework optimized for complex data visualization</li>
            <li>• Integration points prepared for common business tools</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PRBManagement;
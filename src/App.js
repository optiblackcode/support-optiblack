import React, { useState } from 'react';
import { Search, BarChart3, Zap, Database, Globe, ChevronRight, ArrowLeft, BookOpen, Code2, Users } from 'lucide-react';

export default function OptIBlackSupport() {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentView, setCurrentView] = useState('home'); // 'home', 'category', 'article'
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedArticle, setSelectedArticle] = useState(null);

  // ============================================
  // CATEGORIES - Add new categories here
  // ============================================
  const categories = [
    { 
      id: 1, 
      title: 'Monage', 
      icon: Users, 
      color: 'from-purple-400 to-purple-600',
      description: 'Customer data platform and messaging'
    },
    { 
      id: 2, 
      title: 'Klaviyo', 
      icon: Zap, 
      color: 'from-blue-400 to-blue-600',
      description: 'Email and SMS marketing automation'
    },
    { 
      id: 3, 
      title: 'Customer.io', 
      icon: Users, 
      color: 'from-green-400 to-green-600',
      description: 'Customer engagement automation'
    },
    { 
      id: 4, 
      title: 'BigQuery', 
      icon: Database, 
      color: 'from-orange-400 to-orange-600',
      description: 'Data warehousing and analytics'
    },
    { 
      id: 5, 
      title: 'Redshift', 
      icon: BarChart3, 
      color: 'from-red-400 to-red-600',
      description: 'Data warehouse and analytics'
    },
    { 
      id: 6, 
      title: 'Google Tag Manager', 
      icon: Code2, 
      color: 'from-indigo-400 to-indigo-600',
      description: 'Tag management and tracking'
    },
    // TODO: Add more categories here
    // { 
    //   id: 7, 
    //   title: 'New Category', 
    //   icon: IconName, 
    //   color: 'from-color-400 to-color-600',
    //   description: 'Description of category'
    // },
  ];

  // ============================================
  // ARTICLES - Add new articles here
  // ============================================
  const articles = {
    1: [ // Monage
      {
        id: 1,
        section: 'Getting Started',
        title: 'Introduction to Monage Platform',
        content: 'Learn the basics of the Monage customer data platform and how to get started with your first integration.'
      },
      {
        id: 2,
        section: 'Getting Started',
        title: 'Setting up Your First Audience',
        content: 'Step-by-step guide to create and configure your first customer audience in Monage.'
      },
      {
        id: 3,
        section: 'Integration',
        title: 'Connecting Data Sources to Monage',
        content: 'Learn how to connect your various data sources and sync customer information.'
      },
      {
        id: 4,
        section: 'Integration',
        title: 'API Authentication and Setup',
        content: 'Configure API authentication to securely connect with Monage.'
      },
      {
        id: 5,
        section: 'Advanced',
        title: 'Building Complex Customer Segments',
        content: 'Use advanced segmentation techniques to target specific customer groups.'
      },
      {
        id: 6,
        section: 'Advanced',
        title: 'Real-time Event Tracking and Triggers',
        content: 'Set up real-time events to trigger automated workflows.'
      },
      {
        id: 7,
        section: 'Troubleshooting',
        title: 'Resolving Data Sync Issues',
        content: 'Common solutions for data synchronization problems in Monage.'
      },
      {
        id: 8,
        section: 'Troubleshooting',
        title: 'Debugging API Errors',
        content: 'Guide to identify and resolve API connection errors.'
      },
    ],
    2: [ // Klaviyo
      {
        id: 1,
        section: 'Getting Started',
        title: 'Creating Your Klaviyo Account',
        content: 'Initial setup and account configuration for Klaviyo email marketing.'
      },
      {
        id: 2,
        section: 'Getting Started',
        title: 'Building Your First Email Campaign',
        content: 'Create and launch your first email marketing campaign in minutes.'
      },
      {
        id: 3,
        section: 'Segmentation',
        title: 'Advanced Email Segmentation Techniques',
        content: 'Learn how to segment your email list for better targeting and engagement.'
      },
      {
        id: 4,
        section: 'Segmentation',
        title: 'Using Dynamic Content in Emails',
        content: 'Personalize emails with dynamic content blocks based on customer data.'
      },
      {
        id: 5,
        section: 'Automation',
        title: 'Setting Up Automated Email Flows',
        content: 'Create automated email sequences triggered by customer actions.'
      },
      {
        id: 6,
        section: 'SMS Marketing',
        title: 'SMS Campaign Best Practices',
        content: 'Strategies for effective SMS marketing using Klaviyo.'
      },
      {
        id: 7,
        section: 'Analytics',
        title: 'Understanding Klaviyo Analytics Dashboard',
        content: 'How to read and interpret your email campaign metrics.'
      },
    ],
    3: [ // Customer.io
      {
        id: 1,
        section: 'Getting Started',
        title: 'Welcome to Customer.io',
        content: 'Quick start guide for the Customer.io engagement platform.'
      },
      {
        id: 2,
        section: 'Setup',
        title: 'Installing Customer.io SDK',
        content: 'Integrate Customer.io into your application with our SDK.'
      },
      {
        id: 3,
        section: 'Setup',
        title: 'Tracking Customer Events',
        content: 'Set up comprehensive event tracking for customer behavior.'
      },
      {
        id: 4,
        section: 'Campaigns',
        title: 'Creating Behavior-Triggered Messages',
        content: 'Send messages based on specific customer actions and behaviors.'
      },
      {
        id: 5,
        section: 'Campaigns',
        title: 'Multi-Channel Campaign Orchestration',
        content: 'Coordinate messages across email, SMS, and push notifications.'
      },
      {
        id: 6,
        section: 'Analytics',
        title: 'Measuring Campaign Performance',
        content: 'Analyze the performance of your Customer.io campaigns.'
      },
    ],
    4: [ // BigQuery
      {
        id: 1,
        section: 'Getting Started',
        title: 'Introduction to Google BigQuery',
        content: 'Understand the fundamentals of BigQuery data warehouse.'
      },
      {
        id: 2,
        section: 'Basics',
        title: 'Creating Datasets and Tables',
        content: 'Learn to organize your data in BigQuery datasets and tables.'
      },
      {
        id: 3,
        section: 'SQL',
        title: 'Writing Efficient BigQuery SQL Queries',
        content: 'Best practices for writing optimized SQL queries in BigQuery.'
      },
      {
        id: 4,
        section: 'Performance',
        title: 'Query Optimization and Cost Reduction',
        content: 'Techniques to reduce costs and improve query performance.'
      },
      {
        id: 5,
        section: 'Integration',
        title: 'Connecting External Data Sources',
        content: 'Import data from external sources into BigQuery.'
      },
      {
        id: 6,
        section: 'Advanced',
        title: 'Machine Learning in BigQuery',
        content: 'Introduction to BigQuery ML for predictive analytics.'
      },
      {
        id: 7,
        section: 'Advanced',
        title: 'Working with Nested and Repeated Fields',
        content: 'Handle complex data structures in BigQuery.'
      },
    ],
    5: [ // Redshift
      {
        id: 1,
        section: 'Getting Started',
        title: 'Redshift Cluster Setup and Configuration',
        content: 'Create and configure your first Amazon Redshift cluster.'
      },
      {
        id: 2,
        section: 'Basics',
        title: 'Loading Data into Redshift',
        content: 'Best practices for importing data into Redshift tables.'
      },
      {
        id: 3,
        section: 'SQL',
        title: 'Redshift SQL Syntax and Functions',
        content: 'Learn Redshift-specific SQL commands and optimizations.'
      },
      {
        id: 4,
        section: 'Performance',
        title: 'Optimizing Query Performance',
        content: 'Techniques to improve Redshift query execution speed.'
      },
      {
        id: 5,
        section: 'Scaling',
        title: 'Scaling Redshift Clusters',
        content: 'Add nodes and scale your cluster for growing workloads.'
      },
      {
        id: 6,
        section: 'Security',
        title: 'Securing Your Redshift Data',
        content: 'Implement security best practices for Redshift clusters.'
      },
    ],
    6: [ // Google Tag Manager
      {
        id: 1,
        section: 'Getting Started',
        title: 'GTM Account and Container Setup',
        content: 'Initialize Google Tag Manager and create your first container.'
      },
      {
        id: 2,
        section: 'Basics',
        title: 'Installing GTM Code on Your Website',
        content: 'Add the GTM tracking code to your website properly.'
      },
      {
        id: 3,
        section: 'Tags',
        title: 'Creating and Managing Tags',
        content: 'Set up tracking tags for Google Analytics, conversion pixels, and more.'
      },
      {
        id: 4,
        section: 'Triggers',
        title: 'Setting Up Custom Triggers and Rules',
        content: 'Define when and how your tags should fire.'
      },
      {
        id: 5,
        section: 'Variables',
        title: 'Using Custom Variables in GTM',
        content: 'Create custom variables to pass data to your tags.'
      },
      {
        id: 6,
        section: 'Advanced',
        title: 'Server-Side Tagging Implementation',
        content: 'Implement server-side tagging for improved data accuracy.'
      },
      {
        id: 7,
        section: 'Troubleshooting',
        title: 'Debugging Tags with Tag Assistant',
        content: 'Use GTM debugging tools to verify your tag implementation.'
      },
    ],
  };

  // TODO: Add articles for new categories here
  // articles[7] = [ // New Category
  //   {
  //     id: 1,
  //     section: 'Getting Started',
  //     title: 'Article Title',
  //     content: 'Article content goes here'
  //   },
  // ];

  const getArticlesByCategory = (categoryId) => {
    return articles[categoryId] || [];
  };

  const groupArticlesBySection = (categoryId) => {
    const categoryArticles = getArticlesByCategory(categoryId);
    const grouped = {};
    categoryArticles.forEach(article => {
      if (!grouped[article.section]) {
        grouped[article.section] = [];
      }
      grouped[article.section].push(article);
    });
    return grouped;
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setCurrentView('category');
  };

  const handleArticleClick = (article) => {
    setSelectedArticle(article);
    setCurrentView('article');
  };

  const handleBack = () => {
    if (currentView === 'article') {
      setCurrentView('category');
    } else if (currentView === 'category') {
      setCurrentView('home');
    }
  };

  // Get previous article
  const getPreviousArticle = () => {
    const allArticles = getArticlesByCategory(selectedCategory.id);
    const currentIndex = allArticles.findIndex(a => a.id === selectedArticle.id);
    return currentIndex > 0 ? allArticles[currentIndex - 1] : null;
  };

  // Get next article
  const getNextArticle = () => {
    const allArticles = getArticlesByCategory(selectedCategory.id);
    const currentIndex = allArticles.findIndex(a => a.id === selectedArticle.id);
    return currentIndex < allArticles.length - 1 ? allArticles[currentIndex + 1] : null;
  };

  // ============================================
  // HOME VIEW
  // ============================================
  if (currentView === 'home') {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-black text-white">
          <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">OPTIBLECK</div>
            <div className="flex gap-8 items-center">
              <button className="hover:text-cyan-400 transition text-sm">Home</button>
              <button className="hover:text-cyan-400 transition text-sm">Sign Up</button>
              <button className="hover:text-cyan-400 transition text-sm">Contact Us</button>
              <button className="flex items-center gap-2 hover:text-cyan-400 transition text-sm">
                <Globe size={16} />
                <span>English</span>
              </button>
            </div>
          </nav>
        </header>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-6">
            <h1 className="text-4xl font-bold mb-8">Welcome to OptIBlack Support</h1>
            <div className="relative max-w-2xl">
              <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search for articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg bg-slate-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <div
                  key={cat.id}
                  onClick={() => handleCategoryClick(cat)}
                  className="bg-white rounded-lg p-8 shadow-sm hover:shadow-lg transition cursor-pointer border border-gray-100 hover:border-cyan-400"
                >
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${cat.color} flex items-center justify-center mb-4`}>
                    <Icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{cat.title}</h3>
                  <p className="text-gray-500 text-sm mb-3">{cat.description}</p>
                  <p className="text-gray-400 text-sm">{getArticlesByCategory(cat.id).length} articles</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-white border-t border-gray-200 py-12">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">OptIBlack Help Center</h3>
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <div className="w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded"></div>
              <span>Powered by OptIBlack</span>
            </div>
          </div>
        </footer>
      </div>
    );
  }

  // ============================================
  // CATEGORY VIEW
  // ============================================
  if (currentView === 'category') {
    const groupedArticles = groupArticlesBySection(selectedCategory.id);
    const Icon = selectedCategory.icon;

    return (
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-black text-white">
          <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">OPTIBLECK</div>
            <div className="flex gap-8 items-center">
              <button className="hover:text-cyan-400 transition text-sm">Home</button>
              <button className="hover:text-cyan-400 transition text-sm">Sign Up</button>
              <button className="hover:text-cyan-400 transition text-sm">Contact Us</button>
              <button className="flex items-center gap-2 hover:text-cyan-400 transition text-sm">
                <Globe size={16} />
                <span>English</span>
              </button>
            </div>
          </nav>

          <div className="max-w-7xl mx-auto px-6 py-6 flex gap-4 items-center">
            <Search className="text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search for articles..."
              className="flex-1 bg-slate-700 text-white placeholder-gray-400 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>
        </header>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-6 py-8">
          <button
            onClick={handleBack}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 text-sm"
          >
            <ArrowLeft size={18} />
            <span>All Collections</span>
          </button>

          {/* Category Header */}
          <div className="flex gap-4 items-start mb-8">
            <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${selectedCategory.color} flex items-center justify-center flex-shrink-0`}>
              <Icon size={32} className="text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">{selectedCategory.title}</h1>
              <p className="text-gray-600 mb-4">{selectedCategory.description}</p>
              <p className="text-gray-500 text-sm">{getArticlesByCategory(selectedCategory.id).length} articles</p>
            </div>
          </div>

          {/* Articles by Section */}
          <div className="space-y-8">
            {Object.entries(groupedArticles).map(([section, sectionArticles]) => (
              <div key={section} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                  <h2 className="font-semibold text-gray-900">{section}</h2>
                </div>
                <div className="divide-y divide-gray-100">
                  {sectionArticles.map((article) => (
                    <button
                      key={article.id}
                      onClick={() => handleArticleClick(article)}
                      className="w-full px-6 py-4 text-left hover:bg-gray-50 transition flex justify-between items-center group"
                    >
                      <span className="text-gray-900 font-medium group-hover:text-cyan-600">{article.title}</span>
                      <ChevronRight size={20} className="text-gray-400 group-hover:text-cyan-600" />
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-white border-t border-gray-200 py-12 mt-16">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">OptIBlack Help Center</h3>
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <div className="w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded"></div>
              <span>Powered by OptIBlack</span>
            </div>
          </div>
        </footer>
      </div>
    );
  }

  // ============================================
  // ARTICLE VIEW
  // ============================================
  if (currentView === 'article') {
    const prevArticle = getPreviousArticle();
    const nextArticle = getNextArticle();

    return (
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-black text-white">
          <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">OPTIBLECK</div>
            <div className="flex gap-8 items-center">
              <button className="hover:text-cyan-400 transition text-sm">Home</button>
              <button className="hover:text-cyan-400 transition text-sm">Sign Up</button>
              <button className="hover:text-cyan-400 transition text-sm">Contact Us</button>
              <button className="flex items-center gap-2 hover:text-cyan-400 transition text-sm">
                <Globe size={16} />
                <span>English</span>
              </button>
            </div>
          </nav>

          <div className="max-w-7xl mx-auto px-6 py-6 flex gap-4 items-center">
            <Search className="text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search for articles..."
              className="flex-1 bg-slate-700 text-white placeholder-gray-400 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>
        </header>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-6 py-8">
          <button
            onClick={handleBack}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 text-sm"
          >
            <ArrowLeft size={18} />
            <span>Back to {selectedCategory.title}</span>
          </button>

          <article className="bg-white rounded-lg border border-gray-200 p-8">
            <div className="mb-6">
              <span className="text-sm text-white bg-gradient-to-r from-cyan-500 to-blue-600 px-3 py-1 rounded">{selectedArticle.section}</span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">{selectedArticle.title}</h1>
            
            <div className="prose prose-sm max-w-none">
              <p className="text-gray-700 mb-8 leading-relaxed">{selectedArticle.content}</p>
              
              {/* Info Box */}
              <div className="bg-cyan-50 border-l-4 border-cyan-400 p-4 my-8">
                <p className="text-cyan-900 font-medium">💡 Pro Tip</p>
                <p className="text-cyan-800 text-sm mt-1">This comprehensive guide will help you achieve optimal results with {selectedCategory.title}.</p>
              </div>

              {/* Step Guide */}
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Implementation Steps</h2>
              <ol className="space-y-4 mb-8">
                <li className="flex gap-4">
                  <span className="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-bold rounded-full flex-shrink-0">1</span>
                  <div>
                    <p className="font-medium text-gray-900">Initial Setup</p>
                    <p className="text-gray-600 text-sm">Configure your {selectedCategory.title} account and settings.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-bold rounded-full flex-shrink-0">2</span>
                  <div>
                    <p className="font-medium text-gray-900">Integration</p>
                    <p className="text-gray-600 text-sm">Connect {selectedCategory.title} with your existing systems.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-bold rounded-full flex-shrink-0">3</span>
                  <div>
                    <p className="font-medium text-gray-900">Optimization</p>
                    <p className="text-gray-600 text-sm">Fine-tune your configuration for maximum performance.</p>
                  </div>
                </li>
              </ol>

              {/* Screenshot Placeholder */}
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg p-8 my-8 text-center">
                <BookOpen className="mx-auto mb-2 text-gray-400" size={40} />
                <p className="text-gray-600 text-center">[Screenshot placeholder - Your image here]</p>
              </div>
            </div>

            {/* Related Articles */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-4">Related Articles</h3>
              <div className="space-y-2">
                {getArticlesByCategory(selectedCategory.id)
                  .filter(a => a.id !== selectedArticle.id)
                  .slice(0, 3)
                  .map(article => (
                    <button
                      key={article.id}
                      onClick={() => handleArticleClick(article)}
                      className="block text-cyan-600 hover:text-cyan-700 text-sm font-medium"
                    >
                      • {article.title}
                    </button>
                  ))}
              </div>
            </div>
          </article>

          {/* Navigation Buttons */}
          <div className="mt-8 flex justify-between items-center">
            <button
              onClick={() => prevArticle && handleArticleClick(prevArticle)}
              disabled={!prevArticle}
              className={`text-sm flex items-center gap-2 ${prevArticle ? 'text-gray-600 hover:text-gray-900' : 'text-gray-300 cursor-not-allowed'}`}
            >
              <ArrowLeft size={18} />
              Previous Article
            </button>
            <button
              onClick={() => nextArticle && handleArticleClick(nextArticle)}
              disabled={!nextArticle}
              className={`text-sm flex items-center gap-2 ${nextArticle ? 'text-gray-600 hover:text-gray-900' : 'text-gray-300 cursor-not-allowed'}`}
            >
              Next Article
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-white border-t border-gray-200 py-12 mt-16">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">OptIBlack Help Center</h3>
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <div className="w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded"></div>
              <span>Powered by OptIBlack</span>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

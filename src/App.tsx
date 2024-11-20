import React from 'react';
import {
  Box,
  Command,
  Database,
  Layout,
  Lock,
  Rocket,
  Terminal,
  ChevronRight,
  Github,
  Twitter
} from 'lucide-react';
import Feature from './components/Feature';
import CodeExample from './components/CodeExample';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Terminal className="w-8 h-8 text-indigo-600" />
            <span className="text-xl font-bold text-gray-900">Masonite</span>
          </div>
          <div className="flex items-center space-x-6">
            <a href="#" className="text-gray-600 hover:text-gray-900">Docs</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Tutorial</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Blog</a>
            <a href="https://github.com/MasoniteFramework/masonite" 
               className="text-gray-600 hover:text-gray-900">
              <Github className="w-5 h-5" />
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-20 pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              The Modern And Developer Friendly
              <span className="text-indigo-600 block mt-2">Python Web Framework</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
              Build scalable web applications quickly with Masonite's elegant syntax,
              robust features, and Laravel-inspired architecture.
            </p>
            <div className="flex justify-center space-x-4">
              <a href="#" className="inline-flex items-center px-6 py-3 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-colors">
                Get Started
                <ChevronRight className="ml-2 w-4 h-4" />
              </a>
              <a href="#" className="inline-flex items-center px-6 py-3 rounded-lg border border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 transition-colors">
                View on GitHub
              </a>
            </div>
          </div>

          {/* Code Example */}
          <div className="mt-16 max-w-3xl mx-auto">
            <CodeExample />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Everything You Need to Build Modern Web Applications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Feature
              icon={Command}
              title="Elegant Syntax"
              description="Write clean, maintainable code with Masonite's expressive and intuitive syntax inspired by Laravel."
            />
            <Feature
              icon={Box}
              title="Powerful ORM"
              description="Built-in Masonite ORM for elegant database operations with active record pattern and migrations."
            />
            <Feature
              icon={Layout}
              title="Template Engine"
              description="Flexible template engine with component support for building dynamic user interfaces."
            />
            <Feature
              icon={Database}
              title="Queue System"
              description="Built-in queue system for handling time-consuming tasks and background jobs efficiently."
            />
            <Feature
              icon={Lock}
              title="Authentication"
              description="Comprehensive authentication system with multiple drivers and middleware support."
            />
            <Feature
              icon={Rocket}
              title="Auto-Reloading"
              description="Development server with auto-reloading for a smooth development experience."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-indigo-600 rounded-2xl py-16 px-8 md:px-16 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
              Join thousands of developers who are already building fast, secure, and
              scalable web applications with Masonite Framework.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white text-indigo-600 font-semibold hover:bg-indigo-50 transition-colors">
                Read the Documentation
              </a>
              <a href="#" className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-white text-white font-semibold hover:bg-indigo-700 transition-colors">
                View Tutorials
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 text-white mb-4">
                <Terminal className="w-6 h-6" />
                <span className="font-bold">Masonite</span>
              </div>
              <p className="text-sm">
                The Modern And Developer Friendly Python Web Framework
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Documentation</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">Getting Started</a></li>
                <li><a href="#" className="hover:text-white">Architecture</a></li>
                <li><a href="#" className="hover:text-white">Database</a></li>
                <li><a href="#" className="hover:text-white">Security</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Community</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">GitHub</a></li>
                <li><a href="#" className="hover:text-white">Discord</a></li>
                <li><a href="#" className="hover:text-white">Twitter</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">Tutorials</a></li>
                <li><a href="#" className="hover:text-white">Examples</a></li>
                <li><a href="#" className="hover:text-white">Packages</a></li>
                <li><a href="#" className="hover:text-white">Community</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">© 2024 Masonite Framework. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-white">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-white">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
import React, { useState } from 'react';
import { Wrench, Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Features', href: '#features' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Services', href: '#services' },
    { name: 'For Professionals', href: '#for-professionals' },
  ];

  return (
    <header className="w-full bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo & Title */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer group">
            {/* INSERT THIS IMG TAG */}
            <img 
              src={logo} 
              alt="Techni Logo" 
              className="h-10 w-auto object-contain transition-transform group-hover:scale-105" 
            />
            <span className="text-2xl font-extrabold text-gray-900 tracking-tight">
              TECHNI
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-semibold transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Get Started Button */}
          <div className="hidden md:flex items-center">
            <button className="bg-blue-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 hover:text-blue-600 p-2 rounded-md focus:outline-none transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 animate-fade-in-down absolute w-full shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4">
              <button className="w-full bg-blue-600 text-white px-5 py-3.5 rounded-lg font-semibold hover:bg-blue-700 shadow-sm">
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
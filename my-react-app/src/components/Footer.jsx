import React from 'react';
import { Facebook, Instagram, Linkedin, Send, Mail } from 'lucide-react';

const Footer = () => (
  <footer className="bg-blue-600 text-white pt-16 pb-8">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
        
        {/* Column 1: Newsletter */}
        <div>
          <h3 className="text-xl font-bold mb-6">Stay Connected</h3>
          <div className="relative max-w-xs">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="w-full pl-10 pr-12 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors">
              <Send className="w-4 h-4 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-6">Quick Links</h3>
          <ul className="space-y-3 text-blue-100">
            <li><a href="#home" className="hover:text-white hover:underline">Home</a></li>
            <li><a href="#" className="hover:text-white hover:underline">How It Works</a></li>
            <li><a href="#" className="hover:text-white hover:underline">Services</a></li>
            <li><a href="#" className="hover:text-white hover:underline">For Professionals</a></li>
            <li><a href="#" className="hover:text-white hover:underline">About Us</a></li>
          </ul>
        </div>

        {/* Column 3: Socials */}
        <div>
          <h3 className="text-xl font-bold mb-6">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="bg-blue-700 p-3 rounded-full hover:bg-blue-800 transition-colors"><Instagram className="w-6 h-6" /></a>
            <a href="#" className="bg-blue-700 p-3 rounded-full hover:bg-blue-800 transition-colors"><Linkedin className="w-6 h-6" /></a>
            <a href="#" className="bg-blue-700 p-3 rounded-full hover:bg-blue-800 transition-colors"><Facebook className="w-6 h-6" /></a>
          </div>
        </div>
      </div>
      
      <div className="border-t border-blue-500 pt-8 text-center text-blue-200 text-sm">
        &copy; {new Date().getFullYear()} Techni. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
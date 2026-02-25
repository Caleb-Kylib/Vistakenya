import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-gray-100">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-6 py-16">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-teal-500 bg-clip-text text-transparent">
              Vistakenya
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Connecting tenants with their perfect home in Nairobi. Simple, transparent, and reliable property rentals.
            </p>
            {/* Social Links */}
            <div className="flex space-x-3 pt-4">
              <a href="#" className="p-2 rounded-lg bg-teal-500/10 hover:bg-teal-500/20 transition-colors">
                <Facebook size={18} className="text-teal-400" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-teal-500/10 hover:bg-teal-500/20 transition-colors">
                <Twitter size={18} className="text-teal-400" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-teal-500/10 hover:bg-teal-500/20 transition-colors">
                <Instagram size={18} className="text-teal-400" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-teal-500/10 hover:bg-teal-500/20 transition-colors">
                <Linkedin size={18} className="text-teal-400" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white mb-6">Quick Links</h4>
            <nav className="space-y-3">
              <Link to="/" className="text-gray-400 hover:text-teal-400 transition-colors text-sm">
                Home
              </Link>
              <Link to="/properties" className="text-gray-400 hover:text-teal-400 transition-colors text-sm">
                Browse Properties
              </Link>
              <Link to="/how-it-works" className="text-gray-400 hover:text-teal-400 transition-colors text-sm">
                How It Works
              </Link>
              <Link to="/about" className="text-gray-400 hover:text-teal-400 transition-colors text-sm">
                About Us
              </Link>
            </nav>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white mb-6">Support</h4>
            <nav className="space-y-3">
              <Link to="/contact" className="text-gray-400 hover:text-teal-400 transition-colors text-sm">
                Contact Us
              </Link>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors text-sm">
                FAQ
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors text-sm">
                Terms & Conditions
              </a>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white mb-6">Get In Touch</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone size={18} className="text-teal-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-400 text-sm">+254 (0) 700 000000</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail size={18} className="text-teal-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-400 text-sm break-all">support@vistakenya.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-teal-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-400 text-sm">Nairobi, Kenya</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800"></div>

        {/* Bottom Section */}
        <div className="px-6 py-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; 2026 Vistakenya. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors text-sm">
              Privacy
            </a>
            <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors text-sm">
              Terms
            </a>
            <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors text-sm">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

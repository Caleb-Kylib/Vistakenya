import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function GlassNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Properties', path: '/properties' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-4">
          {/* Glass Container */}
          <div className="backdrop-blur-md bg-glass rounded-2xl border border-white/20 shadow-lg">
            <div className="flex justify-between items-center px-6 py-3">
              {/* Logo */}
              <div className="flex-shrink-0">
                <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-teal-800 bg-clip-text text-transparent hover:from-teal-700 hover:to-teal-900 transition-all duration-300">
                  Vistakenya
                </Link>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      isActive(link.path)
                        ? 'bg-teal-500/20 text-teal-700 backdrop-blur-sm'
                        : 'text-gray-700 hover:bg-teal-500/10'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              {/* Right Side Buttons */}
              <div className="hidden md:flex items-center space-x-3">
                <Link
                  to="/tenant/dashboard"
                  className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-teal-700 transition-colors duration-300"
                >
                  Sign In
                </Link>
                <Link
                  to="/get-started"
                  className="px-5 py-2 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Get Started
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-teal-500/10 transition-colors"
              >
                {mobileOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Mobile Navigation */}
            {mobileOpen && (
              <div className="md:hidden border-t border-white/10 backdrop-blur-sm">
                <div className="px-4 py-4 space-y-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setMobileOpen(false)}
                      className={`block px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                        isActive(link.path)
                          ? 'bg-teal-500/20 text-teal-700'
                          : 'text-gray-700 hover:bg-teal-500/10'
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                  <div className="pt-2 space-y-2">
                    <Link
                      to="/tenant/dashboard"
                      onClick={() => setMobileOpen(false)}
                      className="block px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-teal-500/10 transition-colors"
                    >
                      Sign In
                    </Link>
                    <Link
                      to="/get-started"
                      onClick={() => setMobileOpen(false)}
                      className="block px-4 py-2 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 transition-all text-center"
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

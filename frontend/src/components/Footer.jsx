import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-100 overflow-hidden relative">
      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/5 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/5 rounded-full blur-[120px] -z-10"></div>

      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 px-8 py-20">

          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-8">
            <Link to="/" className="inline-block group">
              <h3 className="text-3xl font-black tracking-tighter uppercase">
                Visita<span className="text-teal-500 group-hover:text-teal-400 transition-colors">Kenya</span>
              </h3>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm font-medium">
              Revolutionizing the rental experience in East Africa. We connect verified tenants with premium, high-performance digital assets through seamless blockchain-inspired trust.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-10 h-10 rounded-xl bg-gray-900 border border-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-teal-600 hover:border-teal-500 transition-all duration-300 shadow-xl"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-teal-500">Inventory</h4>
            <nav className="flex flex-col gap-4">
              <Link to="/properties" className="text-gray-400 hover:text-white transition-all text-xs font-bold uppercase tracking-widest hover:translate-x-1 inline-block">
                Luxury Suites
              </Link>
              <Link to="/properties" className="text-gray-400 hover:text-white transition-all text-xs font-bold uppercase tracking-widest hover:translate-x-1 inline-block">
                Studio Units
              </Link>
              <Link to="/properties" className="text-gray-400 hover:text-white transition-all text-xs font-bold uppercase tracking-widest hover:translate-x-1 inline-block">
                Short Stays
              </Link>
              <Link to="/properties" className="text-gray-400 hover:text-white transition-all text-xs font-bold uppercase tracking-widest hover:translate-x-1 inline-block">
                View Maps
              </Link>
            </nav>
          </div>

          {/* Discovery Column */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-teal-500">Discovery</h4>
            <nav className="flex flex-col gap-4">
              <Link to="/how-it-works" className="text-gray-400 hover:text-white transition-all text-xs font-bold uppercase tracking-widest hover:translate-x-1 inline-block">
                How It Works
              </Link>
              <Link to="/about" className="text-gray-400 hover:text-white transition-all text-xs font-bold uppercase tracking-widest hover:translate-x-1 inline-block">
                Our Story
              </Link>
              <Link to="/contact" className="text-gray-400 hover:text-white transition-all text-xs font-bold uppercase tracking-widest hover:translate-x-1 inline-block">
                Partnerships
              </Link>
              <Link to="/contact" className="text-gray-400 hover:text-white transition-all text-xs font-bold uppercase tracking-widest hover:translate-x-1 inline-block">
                Support
              </Link>
            </nav>
          </div>

          {/* Contact & Newsletter Column */}
          <div className="lg:col-span-4 space-y-8">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-teal-500">Connect</h4>
            <div className="grid grid-cols-1 gap-4">
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-10 h-10 rounded-xl bg-gray-900 border border-white/5 flex items-center justify-center text-teal-500 group-hover:bg-teal-600 group-hover:text-white transition-all">
                  <Phone size={16} />
                </div>
                <p className="text-xs font-black uppercase tracking-widest text-gray-300">+254 700 000 000</p>
              </div>
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-10 h-10 rounded-xl bg-gray-900 border border-white/5 flex items-center justify-center text-teal-500 group-hover:bg-teal-600 group-hover:text-white transition-all">
                  <Mail size={16} />
                </div>
                <p className="text-xs font-black uppercase tracking-widest text-gray-300">HQ@VISTAKENYA.COM</p>
              </div>
            </div>
            {/* Newsletter Minimal */}
            <div className="pt-4">
              <div className="relative group max-w-sm">
                <input
                  type="email"
                  placeholder="Drop your email for network updates..."
                  className="w-full bg-gray-900 border border-white/5 rounded-2xl py-4 pl-6 pr-12 text-xs font-bold placeholder:text-gray-600 focus:outline-none focus:border-teal-500/50 transition-all"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-teal-600 rounded-xl flex items-center justify-center text-white hover:bg-teal-500 transition-colors">
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 mx-8 py-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-black text-gray-600 uppercase tracking-widest">
            &copy; 2026 VisitaKenya Network. Built for the future of living.
          </p>
          <div className="flex gap-8">
            {['Privacy', 'Legal', 'Analytics'].map((link) => (
              <a key={link} href="#" className="text-[10px] font-black text-gray-600 uppercase tracking-widest hover:text-teal-500 transition-colors">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

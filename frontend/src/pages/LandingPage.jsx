import React from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin, LogIn } from 'lucide-react';
import GlassNavbar from '../components/GlassNavbar';
import Footer from '../components/Footer';
import FeaturedProperties from '../components/FeaturedProperties';
import VirtualTour from '../components/VirtualTour';
import WhyChooseUs from '../components/WhyChooseUs';
import HowItWorksSection from '../components/HowItWorksSection';
import Testimonials from '../components/Testimonials';
import USSDSimulator from '../components/USSDSimulator';
import apartmentsImg from '../assets/apartments.jpg';

export default function LandingPage() {
  const [searchArea, setSearchArea] = React.useState('');

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <GlassNavbar />

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={apartmentsImg} 
            alt="Student Home" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="inline-block mb-6">
              <span className="px-4 py-1.5 rounded-full bg-teal-100 text-teal-800 text-xs font-bold tracking-wider uppercase">
                Reliable Student Housing
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Your Home Near Campus, <br />
              <span className="text-teal-600 font-extrabold italic">Stress-Free.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg text-slate-600 mb-10 max-w-lg leading-relaxed">
              Discover verified student hostels and co-living spaces across Kenya's top academic hubs with flexible rent payments.
            </p>

            {/* Modern Search Bar */}
            <div className="bg-white p-2 rounded-2xl shadow-2xl border border-slate-100 flex flex-col md:flex-row items-stretch gap-2 max-w-3xl">
              <div className="flex-1 px-4 py-3 border-r border-slate-100">
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Location</label>
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-teal-500" />
                  <input 
                    type="text" 
                    placeholder="Rongai" 
                    className="w-full outline-none text-slate-700 font-medium bg-transparent"
                    value={searchArea}
                    onChange={(e) => setSearchArea(e.target.value)}
                  />
                </div>
              </div>
              
              <div className="flex-1 px-4 py-3 border-r border-slate-100">
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Price Range</label>
                <select className="w-full outline-none text-slate-700 font-medium bg-transparent appearance-none">
                  <option>KES 8k - 12k</option>
                  <option>KES 12k - 20k</option>
                  <option>KES 20k+</option>
                </select>
              </div>

              <div className="flex-1 px-4 py-3">
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Type</label>
                <select className="w-full outline-none text-slate-700 font-medium bg-transparent appearance-none">
                  <option>Studio</option>
                  <option>Bedsitter</option>
                  <option>Shared</option>
                </select>
              </div>

              <button className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-xl flex items-center justify-center gap-2 font-bold transition-all shadow-lg shadow-amber-200">
                <Search size={20} />
                <span>Search</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Revolutionizing Student Living Section */}
      <section className="py-32 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
                Revolutionizing <br />
                <span className="text-teal-600">Student Living</span>
              </h2>
              <p className="text-xl text-slate-500 leading-relaxed">
                We focus on the things that matter most to your academic success. Our platform is built specifically for the needs of modern students.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Modern Co-living Card - Large */}
            <div className="md:col-span-7 group relative h-[500px] rounded-[3rem] overflow-hidden shadow-2xl border border-white/20">
              <img 
                src="/co-living.png" 
                alt="Modern Co-living" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-12">
                <div className="w-14 h-14 bg-teal-500/20 backdrop-blur-xl border border-white/20 rounded-2xl flex items-center justify-center mb-8">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">Modern Co-living</h3>
                <p className="text-slate-300 text-lg max-w-md leading-relaxed">
                  Don't just rent a room; join a community. Our co-living spaces are designed to foster collaboration and friendships.
                </p>
              </div>
            </div>

            <div className="md:col-span-5 flex flex-col gap-8">
              {/* Flexible Rent Payments Card */}
              <div className="flex-1 bg-teal-800 rounded-[3rem] p-12 flex flex-col justify-between text-white shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-20 -mt-20 blur-3xl transition-all group-hover:bg-white/10"></div>
                <div className="w-14 h-14 bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl flex items-center justify-center relative z-10">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"></rect><line x1="2" y1="10" x2="22" y2="10"></line></svg>
                </div>
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold mb-4">Flexible Rent Payments</h3>
                  <p className="text-teal-100/70 text-lg leading-relaxed">
                    Pay weekly or monthly via M-Pesa. No heavy deposits required for verified students.
                  </p>
                </div>
              </div>

              {/* Smart Dashboard Card */}
              <div className="flex-1 bg-amber-100 rounded-[3rem] p-12 flex flex-col justify-between shadow-xl relative overflow-hidden group">
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold text-slate-900 mb-4">Smart Dashboard</h3>
                  <p className="text-slate-600 text-lg leading-relaxed">
                    Track your rent, report maintenance issues, and message your landlord in one place.
                  </p>
                </div>
                <div className="flex justify-end relative z-10">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0F172A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <FeaturedProperties />

      {/* Virtual Tours */}
      <VirtualTour />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* How It Works */}
      <HowItWorksSection />

      {/* Testimonials */}
      <Testimonials />

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-teal-600 via-teal-500 to-teal-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Find Your Student Home?
          </h2>
          <p className="text-xl text-teal-50 mb-8 leading-relaxed">
            Join thousands of students finding affordable, verified housing near campus. Browse hostels, compare prices, and move in today.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link
              to="/properties"
              className="px-8 py-4 rounded-lg text-lg font-semibold text-teal-600 bg-white hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Start Browsing
            </Link>
            <Link
              to="/login"
              className="px-8 py-4 rounded-lg text-lg font-semibold text-white border-2 border-white hover:bg-white/10 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
            >
              <LogIn size={20} />
              Sign In
            </Link>
          </div>
        </div>
      </section>

      {/* Footer Component */}
      <Footer />

      {/* Global USSD Simulator for Demo */}
      <USSDSimulator />
    </div>
  );
}

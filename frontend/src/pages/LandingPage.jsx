import React from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin, LogIn } from 'lucide-react';
import GlassNavbar from '../components/GlassNavbar';
import Footer from '../components/Footer';
import FeaturedProperties from '../components/FeaturedProperties';
import WhyChooseUs from '../components/WhyChooseUs';
import HowItWorksSection from '../components/HowItWorksSection';
import Testimonials from '../components/Testimonials';

export default function LandingPage() {
  const [searchArea, setSearchArea] = React.useState('');

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <GlassNavbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-teal-100 to-transparent rounded-full filter blur-3xl opacity-30"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-coral-100 to-transparent rounded-full filter blur-3xl opacity-20"></div>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            {/* Badge */}
            <div className="inline-block mb-6">
              <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-teal-100 to-coral-50 text-teal-700 text-sm font-semibold border border-teal-200/50">
                🏡 Welcome to Your Perfect Home
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Find Your Perfect <span className="bg-gradient-to-r from-teal-600 to-teal-800 bg-clip-text text-transparent">Apartment</span> in Nairobi
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Discover verified, affordable furnished apartments with seamless booking. Your ideal home is just a search away.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="flex items-center gap-2 p-2 rounded-2xl bg-white shadow-xl border border-gray-200 hover:border-teal-300 transition-all duration-300">
                <div className="flex-1 flex items-center gap-3 px-4 py-3">
                  <MapPin size={20} className="text-teal-600" />
                  <input
                    type="text"
                    placeholder="Search by area (e.g., Westlands, Kilimani...)"
                    value={searchArea}
                    onChange={(e) => setSearchArea(e.target.value)}
                    className="w-full outline-none text-gray-700 placeholder-gray-400 bg-transparent"
                  />
                </div>
                <Link
                  to={`/properties${searchArea ? `?area=${searchArea}` : ''}`}
                  className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-teal-600 to-teal-700 text-white font-semibold hover:from-teal-700 hover:to-teal-800 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <Search size={20} />
                  Search
                </Link>
              </div>
              <p className="text-gray-500 text-sm mt-3">
                Popular areas: Westlands • Kilimani • Upper Hill • Parklands • Nairobi
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <Link
                to="/properties"
                className="px-8 py-4 rounded-lg text-lg font-semibold text-white bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Browse Properties
              </Link>
              <Link
                to="/how-it-works"
                className="px-8 py-4 rounded-lg text-lg font-semibold text-teal-600 bg-white border-2 border-teal-600 hover:bg-teal-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Learn How It Works
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <div className="mt-12 relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
              <img
                src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&h=600&fit=crop"
                alt="Beautiful apartment"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <FeaturedProperties />

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
            Ready to Find Your Home?
          </h2>
          <p className="text-xl text-teal-50 mb-8 leading-relaxed">
            Join thousands of happy tenants. Browse our verified properties, compare prices, and move into your perfect apartment today.
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

      {/* Footer */}
      <Footer />
    </div>
  );
}

import React from 'react';
import { Shield, Zap, Users, TrendingUp, Lock, Clock, MapPin } from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    {
      icon: Shield,
      title: 'Verified Listings',
      description: 'Every property is carefully vetted and verified to ensure authenticity and quality standards.',
    },
    {
      icon: Zap,
      title: 'Quick Booking',
      description: 'Book your perfect apartment in minutes with our streamlined and intuitive booking process.',
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: '24/7 dedicated customer support team ready to assist you with any questions or concerns.',
    },
    {
      icon: TrendingUp,
      title: 'Best Value',
      description: 'Competitive pricing with transparent costs - no hidden fees or surprise charges ever.',
    },
    {
      icon: Lock,
      title: 'Secure Payments',
      description: 'Safe and secure payment processing with multiple payment methods and buyer protection.',
    },
    {
      icon: Clock,
      title: 'Flexible Terms',
      description: 'Short-term and long-term rental options tailored to your specific needs and budget.',
    },
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-coral-100 text-coral-700 text-sm font-semibold mb-4">
            💎 Why Students Love Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose Vistakenya?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're committed to making your student housing search simple, safe, and affordable.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="group p-8 rounded-2xl border border-gray-200 hover:border-teal-400 bg-white hover:bg-gradient-to-br hover:from-teal-50 hover:to-white transition-all duration-300 shadow-md hover:shadow-xl">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-teal-100 to-teal-50 group-hover:from-teal-500 group-hover:to-teal-600 transition-all duration-300 mb-4">
              <Shield size={24} className="text-teal-600 group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Verified Hostels</h3>
            <p className="text-gray-600 leading-relaxed">Every hostel and bedsitter is vetted by our team to ensure your safety and comfort.</p>
          </div>

          <div className="group p-8 rounded-2xl border border-gray-200 hover:border-teal-400 bg-white hover:bg-gradient-to-br hover:from-teal-50 hover:to-white transition-all duration-300 shadow-md hover:shadow-xl">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-teal-100 to-teal-50 group-hover:from-teal-500 group-hover:to-teal-600 transition-all duration-300 mb-4">
              <MapPin size={24} className="text-teal-600 group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Campus Proximity</h3>
            <p className="text-gray-600 leading-relaxed">Find housing within walking distance to major universities in Nairobi and its outskirts.</p>
          </div>

          <div className="group p-8 rounded-2xl border border-gray-200 hover:border-teal-400 bg-white hover:bg-gradient-to-br hover:from-teal-50 hover:to-white transition-all duration-300 shadow-md hover:shadow-xl">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-teal-100 to-teal-50 group-hover:from-teal-500 group-hover:to-teal-600 transition-all duration-300 mb-4">
              <TrendingUp size={24} className="text-teal-600 group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Flexible Rent</h3>
            <p className="text-gray-600 leading-relaxed">Choose between weekly or monthly payment models to fit your student budget.</p>
          </div>

          <div className="group p-8 rounded-2xl border border-gray-200 hover:border-teal-400 bg-white hover:bg-gradient-to-br hover:from-teal-50 hover:to-white transition-all duration-300 shadow-md hover:shadow-xl">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-teal-100 to-teal-50 group-hover:from-teal-500 group-hover:to-teal-600 transition-all duration-300 mb-4">
              <Users size={24} className="text-teal-600 group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Roommate Matching</h3>
            <p className="text-gray-600 leading-relaxed">Connect with fellow students and find the perfect roommate to share your space and costs.</p>
          </div>

          <div className="group p-8 rounded-2xl border border-gray-200 hover:border-teal-400 bg-white hover:bg-gradient-to-br hover:from-teal-50 hover:to-white transition-all duration-300 shadow-md hover:shadow-xl">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-teal-100 to-teal-50 group-hover:from-teal-500 group-hover:to-teal-600 transition-all duration-300 mb-4">
              <Zap size={24} className="text-teal-600 group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Offline Search</h3>
            <p className="text-gray-600 leading-relaxed">No data? No problem. Search for houses and book viewings via our USSD service (*384#).</p>
          </div>

          <div className="group p-8 rounded-2xl border border-gray-200 hover:border-teal-400 bg-white hover:bg-gradient-to-br hover:from-teal-50 hover:to-white transition-all duration-300 shadow-md hover:shadow-xl">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-teal-100 to-teal-50 group-hover:from-teal-500 group-hover:to-teal-600 transition-all duration-300 mb-4">
              <Lock size={24} className="text-teal-600 group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Secure Payments</h3>
            <p className="text-gray-600 leading-relaxed">Safely pay your rent through M-Pesa with instant receipts and clear payment history.</p>
          </div>
        </div>

        {/* Trust Section */}
        <div className="mt-20 p-12 rounded-3xl bg-gradient-to-r from-teal-50 via-white to-coral-50 border border-teal-200/50">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-4xl md:text-5xl font-bold text-teal-600 mb-2">5K+</p>
              <p className="text-gray-700 font-medium">Students Housed</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-teal-600 mb-2">20+</p>
              <p className="text-gray-700 font-medium">Campuses Covered</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-teal-600 mb-2">98%</p>
              <p className="text-gray-700 font-medium">Student Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

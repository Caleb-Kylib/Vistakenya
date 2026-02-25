import React from 'react';
import { Search, CheckCircle, FileText, Home } from 'lucide-react';

export default function HowItWorksSection() {
  const steps = [
    {
      icon: Search,
      title: 'Search & Browse',
      description: 'Explore thousands of verified properties across Nairobi with detailed photos, amenities, and reviews.',
      step: '01',
    },
    {
      icon: CheckCircle,
      title: 'Compare & Choose',
      description: 'Filter by location, price, amenities, and more to find your perfect match in minutes.',
      step: '02',
    },
    {
      icon: FileText,
      title: 'Apply & Verify',
      description: 'Complete a simple application and get verified. Landlords review your profile quickly.',
      step: '03',
    },
    {
      icon: Home,
      title: 'Move & Enjoy',
      description: 'Get approval, finalize contracts, and move into your new home with complete peace of mind.',
      step: '04',
    },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-teal-100 text-teal-700 text-sm font-semibold mb-4">
            🚀 Simplified Process
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Finding your perfect apartment has never been easier. Follow our simple 4-step process
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="relative">
                {/* Connector Line */}
                {idx !== steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-[60%] w-[80%] h-1 bg-gradient-to-r from-teal-300 to-teal-100 md:block"></div>
                )}

                {/* Card */}
                <div className="relative z-10 p-8 rounded-2xl bg-white border-2 border-gray-100 hover:border-teal-400 shadow-md hover:shadow-xl transition-all duration-300 group">
                  {/* Step Number */}
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-teal-500 to-teal-600 text-white font-bold text-lg mb-4 group-hover:from-teal-600 group-hover:to-teal-700 transition-all duration-300">
                    {item.step}
                  </div>

                  {/* Icon */}
                  <div className="mb-4">
                    <Icon size={32} className="text-teal-600 group-hover:text-teal-700 transition-colors duration-300" />
                  </div>

                  {/* Title and Description */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden space-y-4">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex gap-4">
                {/* Timeline Line */}
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-500 to-teal-600 text-white font-bold flex items-center justify-center text-lg mb-2">
                    {item.step}
                  </div>
                  {idx !== steps.length - 1 && (
                    <div className="w-1 h-12 bg-gradient-to-b from-teal-400 to-teal-200"></div>
                  )}
                </div>

                {/* Content */}
                <div className="pb-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-700 mb-6">
            Ready to find your perfect home? Let's get started!
          </p>
          <button className="px-8 py-3 rounded-lg text-lg font-semibold text-white bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 transition-all duration-300 shadow-lg hover:shadow-xl">
            Start Your Search Now
          </button>
        </div>
      </div>
    </section>
  );
}

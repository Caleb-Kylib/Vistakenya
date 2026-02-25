import React from 'react';
import { Shield, Zap, Users, TrendingUp, Lock, Clock } from 'lucide-react';

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
            💎 Why Tenants Love Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose Vistakenya?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're committed to making your search for the perfect apartment simple, safe, and satisfying
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="group p-8 rounded-2xl border border-gray-200 hover:border-teal-400 bg-white hover:bg-gradient-to-br hover:from-teal-50 hover:to-white transition-all duration-300 shadow-md hover:shadow-xl"
              >
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-teal-100 to-teal-50 group-hover:from-teal-500 group-hover:to-teal-600 transition-all duration-300 mb-4">
                  <Icon size={24} className="text-teal-600 group-hover:text-white transition-colors duration-300" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>

                {/* Hover Arrow */}
                <div className="mt-4 inline-flex items-center text-teal-600 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Learn more →
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust Section */}
        <div className="mt-20 p-12 rounded-3xl bg-gradient-to-r from-teal-50 via-white to-coral-50 border border-teal-200/50">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-4xl md:text-5xl font-bold text-teal-600 mb-2">10K+</p>
              <p className="text-gray-700 font-medium">Happy Tenants</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-teal-600 mb-2">500+</p>
              <p className="text-gray-700 font-medium">Properties Listed</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-teal-600 mb-2">98%</p>
              <p className="text-gray-700 font-medium">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

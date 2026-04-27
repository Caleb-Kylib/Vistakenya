import React from 'react';
import { Search, CheckCircle, FileText, Home, AlertCircle, Shield, Clock, DollarSign } from 'lucide-react';
import GlassNavbar from '../components/GlassNavbar';
import Footer from '../components/Footer';

export default function HowItWorksPage() {
  const steps = [
    {
      icon: Search,
      title: 'Campus-Focused Search',
      description: 'Find housing near your specific university. Filter by distance to campus and your monthly budget (KES 8k - 18k).',
      details: [
        'Filter by university (MMU, JKUAT, USIU, etc.)',
        'Check walking distance to lecture halls',
        'Filter by bedsitter or shared units',
        'Save top hostels to your wishlist',
      ],
      step: '01',
    },
    {
      icon: CheckCircle,
      title: 'Private or Co-living',
      description: 'Choose between your own private studio or a shared co-living space with fellow students to save costs.',
      details: [
        'Book a private bedsitter or 1BR',
        'Join a co-living slot in a shared house',
        'See roommate profiles and trust scores',
        'Lower your rent by sharing utilities',
      ],
      step: '02',
    },
    {
      icon: FileText,
      title: 'Student ID Verification',
      description: 'Upload your Student ID or Admission letter. We verify every tenant to maintain a safe and academic environment.',
      details: [
        'Fast verification using campus credentials',
        'Criminal record check for all tenants',
        'Verified badge for your profile',
        'Seamless online lease signing',
      ],
      step: '03',
    },
    {
      icon: Home,
      title: 'Flexible Rent Payments',
      description: 'Move in and pay your rent on your own terms. We support weekly and monthly payments via M-Pesa.',
      details: [
        'Pay rent via M-Pesa or USSD (*384#)',
        'Choose weekly payment schedules',
        'Automatic rent receipts and history',
        '24/7 student support desk',
      ],
      step: '04',
    },
  ];

  const faqs = [
    {
      q: 'Do I need a student ID to book?',
      a: 'Yes, Vistakenya is a student-first platform. We require a valid Student ID or Admission Letter to verify your identity and maintain a safe community.',
    },
    {
      q: 'How does Co-living work?',
      a: 'In co-living, you book a "slot" in a shared apartment. You\'ll have your own bed and shared access to common areas like the kitchen and living room.',
    },
    {
      q: 'Can I pay rent weekly?',
      a: 'Absolutely! We understand student budgets. You can opt for weekly rent payments through our flexible payment dashboard.',
    },
    {
      q: 'How do I book via USSD?',
      a: 'Simply dial *384# on your Safaricom line. You can search for hostels, view prices, and book a physical viewing without needing data.',
    },
    {
      q: 'Is my deposit safe?',
      a: 'Yes. All deposits are held in a secure escrow account and only released to the landlord once you verify the property condition during move-in.',
    },
    {
      q: 'What if I need to find a roommate?',
      a: 'Our platform has a built-in roommate matching feature. You can browse other students looking for rooms and connect with them based on shared interests.',
    },
  ];

  const tips = [
    {
      icon: Clock,
      title: 'Act Fast',
      description: 'Popular properties get booked quickly. Once you find your perfect match, complete your application immediately.',
    },
    {
      icon: DollarSign,
      title: 'Budget Wisely',
      description: 'Consider not just rent, but also utilities, transport costs, and neighborhood expenses when choosing.',
    },
    {
      icon: AlertCircle,
      title: 'Read Reviews',
      description: 'Check what other tenants say about the property and landlord. Ratings and reviews provide valuable insights.',
    },
    {
      icon: Shield,
      title: 'Verify Everything',
      description: 'Always verify property details, amenities, and landlord information before committing to a booking.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <GlassNavbar />

      {/* Hero Section */}
      <div className="pt-32 pb-12 px-6 bg-gradient-to-b from-teal-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 uppercase tracking-tighter font-black">
            How <span className="text-teal-600">It Works</span>
          </h1>
          <p className="text-2xl text-gray-600 leading-relaxed font-medium">
            Finding your hostel or student bedsitter is now a 4-step breeze.
          </p>
        </div>
      </div>

      {/* Main Steps Section */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-12">
            {steps.map((item, idx) => {
              const Icon = item.icon;
              const isEven = idx % 2 === 0;

              return (
                <div key={idx} className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  {/* Content */}
                  <div className={isEven ? 'order-1' : 'lg:order-2'}>
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-14 w-14 rounded-full bg-gradient-to-br from-teal-500 to-teal-600 text-white font-bold text-xl">
                          {item.step}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">{item.title}</h2>
                        <p className="text-lg text-gray-600 mb-6">{item.description}</p>
                        <ul className="space-y-3">
                          {item.details.map((detail, didx) => (
                            <li key={didx} className="flex items-start space-x-3">
                              <CheckCircle size={20} className="text-teal-500 flex-shrink-0 mt-1" />
                              <span className="text-gray-700">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Image/Visual */}
                  <div className={`order-2 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-gray-100">
                      <img
                        src={[
                          'https://images.unsplash.com/photo-1552078239-507c6b5f3340?w=500&h=400&fit=crop',
                          'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=500&h=400&fit=crop',
                          'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=500&h=400&fit=crop',
                          'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500&h=400&fit=crop',
                        ][idx]}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                  </div>

                  {/* Divider */}
                  {idx !== steps.length - 1 && (
                    <div className="col-span-1 lg:col-span-2 h-1 bg-gradient-to-r from-transparent via-teal-300 to-transparent my-4"></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="px-6 py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-2">Pro Tips for Success</h2>
            <p className="text-xl text-gray-600">Make the most of your apartment search</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tips.map((tip, idx) => {
              const Icon = tip.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border-2 border-gray-100 hover:border-teal-400 shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-teal-100 mb-4">
                    <Icon size={24} className="text-teal-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{tip.title}</h3>
                  <p className="text-gray-600">{tip.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-2">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Get answers to common questions</p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-gradient-to-br from-teal-50 to-white border-2 border-teal-200 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-700">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 bg-gradient-to-r from-teal-600 to-teal-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-teal-50 mb-8 leading-relaxed">
            Begin your search for the perfect apartment today. It only takes a few minutes to get started.
          </p>
          <button className="px-8 py-4 rounded-lg text-lg font-semibold text-teal-600 bg-white hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl">
            Browse Properties Now
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}

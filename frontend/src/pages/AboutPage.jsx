import React from 'react';
import { Users, Target, Heart, Zap } from 'lucide-react';
import GlassNavbar from '../components/GlassNavbar';
import Footer from '../components/Footer';

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: 'Customer First',
      description: 'Everything we do is centered around making your experience exceptional.',
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We continuously improve to provide cutting-edge solutions for finding homes.',
    },
    {
      icon: Users,
      title: 'Community',
      description: 'We build a thriving community of tenants, landlords, and property managers.',
    },
    {
      icon: Target,
      title: 'Transparency',
      description: 'Honest pricing, clear terms, and straightforward processes always.',
    },
  ];

  const team = [
    {
      name: 'Jane Kariuki',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
      bio: 'Real estate enthusiast with 8 years of industry experience.',
    },
    {
      name: 'David Kipchoge',
      role: 'CTO',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      bio: 'Tech pioneer focused on creating seamless digital experiences.',
    },
    {
      name: 'Sarah Mwangi',
      role: 'Head of Operations',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
      bio: 'Operations expert ensuring quality and efficiency at scale.',
    },
    {
      name: 'Michael Owino',
      role: 'Head of Support',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
      bio: 'Customer service champion with a passion for excellence.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <GlassNavbar />

      {/* Hero Section */}
      <div className="pt-32 pb-12 px-6 bg-gradient-to-b from-teal-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            About Vistakenya
          </h1>
          <p className="text-2xl text-gray-600 leading-relaxed">
            Revolutionizing the way people find and book apartments in Nairobi
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-teal-50 to-white border-2 border-teal-200">
              <h2 className="text-3xl font-bold text-teal-900 mb-4">Our Mission</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                To simplify and democratize the rental housing market in Kenya by providing a transparent, 
                secure, and user-friendly platform that connects tenants with quality, verified properties. 
                We believe everyone deserves to find their perfect home with ease and confidence.
              </p>
            </div>

            {/* Vision */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-coral-50 to-white border-2 border-coral-200">
              <h2 className="text-3xl font-bold text-coral-900 mb-4">Our Vision</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                To become East Africa's most trusted and innovative rental housing platform, transforming 
                the entire rental ecosystem by empowering tenants, supporting landlords, and creating lasting 
                positive impact in communities across Nairobi and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="px-6 py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">
              These principles guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => {
              const Icon = value.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border-2 border-gray-100 hover:border-teal-400 shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-teal-100 mb-4">
                    <Icon size={24} className="text-teal-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Story</h2>
          </div>

          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              Vistakenya was founded in 2024 with a simple idea: finding an apartment in Nairobi shouldn't 
              be frustrating, time-consuming, or risky. Jane, our founder, spent months searching for a 
              rental apartment and experienced firsthand the inefficiencies, lack of transparency, and 
              security concerns that plague the Nairobi rental market.
            </p>

            <p>
              She gathered a team of passionate individuals from diverse backgrounds – technology experts, 
              real estate professionals, and customer service enthusiasts – all united by a shared vision 
              to transform the rental market.
            </p>

            <p>
              Today, Vistakenya has grown to serve thousands of happy tenants, partnering with hundreds of 
              property owners and managers. We've processed millions of shillings in secure transactions and 
              maintained a 98% customer satisfaction rate. But this is just the beginning.
            </p>

            <p>
              Our goal is to expand across East Africa, continuously innovate our platform, and ultimately 
              create an ecosystem where finding, booking, and managing rental properties is seamless, transparent, 
              and secure for everyone involved.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="px-6 py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">
              Passionate people making remarkable things happen
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, idx) => (
              <div
                key={idx}
                className="text-center group"
              >
                <div className="relative mb-4 rounded-2xl overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-teal-600 font-semibold mb-2">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-6 py-20 bg-gradient-to-r from-teal-600 to-teal-700">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white">
            <div>
              <p className="text-5xl font-bold mb-2">10K+</p>
              <p className="text-xl">Happy Tenants</p>
            </div>
            <div>
              <p className="text-5xl font-bold mb-2">500+</p>
              <p className="text-xl">Properties</p>
            </div>
            <div>
              <p className="text-5xl font-bold mb-2">98%</p>
              <p className="text-xl">Satisfaction</p>
            </div>
            <div>
              <p className="text-5xl font-bold mb-2">2M+</p>
              <p className="text-xl">Transactions</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Join Our Growing Community
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Be part of the revolution in Nairobi's rental market. Browse our properties today.
          </p>
          <button className="px-8 py-4 rounded-lg text-lg font-semibold text-white bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 transition-all shadow-lg hover:shadow-xl">
            Explore Properties
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}

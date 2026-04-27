import React from 'react';
import { Users, Target, Heart, Zap } from 'lucide-react';
import GlassNavbar from '../components/GlassNavbar';
import Footer from '../components/Footer';

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: 'Student Centric',
      description: 'Our platform is built specifically to address the unique housing needs of students and youth.',
    },
    {
      icon: Zap,
      title: 'USSD Innovation',
      description: 'We use cutting-edge tech like USSD and SMS to ensure every student can find a home, even without data.',
    },
    {
      icon: Users,
      title: 'Co-living Community',
      description: 'We foster safe shared living environments that help students reduce costs and build lifelong connections.',
    },
    {
      icon: Target,
      title: 'Radical Transparency',
      description: 'No hidden charges or fake listings. We verify every hostel to ensure students get what they pay for.',
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
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 uppercase tracking-tighter font-black">
            Empowering <span className="text-teal-600">Student Living</span>
          </h1>
          <p className="text-2xl text-gray-600 leading-relaxed font-medium">
            Kenya's first dedicated housing platform for students and young professionals.
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
                To simplify the search for verified student housing in Kenya. We aim to provide affordable, 
                secure, and proximity-based housing solutions that allow students to focus on what matters most: 
                their education and personal growth.
              </p>
            </div>

            {/* Vision */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-coral-50 to-white border-2 border-coral-200">
              <h2 className="text-3xl font-bold text-coral-900 mb-4">Our Vision</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                To become the primary infrastructure for student housing in Africa, bridging the gap 
                between campus life and off-campus living through technology, trust, and shared economy models.
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
              Vistakenya was born out of a shared frustration during our university days at MMU and JKUAT. 
              Searching for a decent bedsitter in Ongata Rongai and Juja meant weeks of trekking under the sun, 
              dealing with unreliable agents, and often losing deposits to fake listings.
            </p>

            <p>
              We realized that while students were paying high prices for off-campus housing, they were 
              receiving zero security and zero transparency. We decided to build a platform that prioritizes 
              student safety and budget.
            </p>

            <p>
              Today, Vistakenya serves over 5,000 students across 20+ campuses in Nairobi, Kiambu, and Kajiado. 
              We've integrated USSD protocols so that even students in remote areas can find housing without 
              using expensive data bundles.
            </p>

            <p>
              Our journey is just beginning. We are committed to making student housing dignified, 
              affordable, and accessible for the next generation of African leaders.
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
              <p className="text-5xl font-bold mb-2 font-black">5K+</p>
              <p className="text-xl font-medium">Students Housed</p>
            </div>
            <div>
              <p className="text-5xl font-bold mb-2 font-black">20+</p>
              <p className="text-xl font-medium">Campuses Covered</p>
            </div>
            <div>
              <p className="text-5xl font-bold mb-2 font-black">98%</p>
              <p className="text-xl font-medium">Student Rating</p>
            </div>
            <div>
              <p className="text-5xl font-bold mb-2 font-black">15M+</p>
              <p className="text-xl font-medium">Rent Saved</p>
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

import React from 'react';
import { Users, Target, Heart, Zap, GraduationCap, ShieldCheck, Globe, Rocket } from 'lucide-react';
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

  const storyTimeline = [
    {
      year: '2020',
      title: 'The Struggle',
      icon: GraduationCap,
      description: 'Vistakenya was born out of a shared frustration during our university days at MMU and JKUAT. Searching for a decent bedsitter in Ongata Rongai and Juja meant weeks of trekking under the sun, dealing with unreliable agents, and often losing deposits to fake listings.',
      color: 'from-orange-400 to-red-500',
      bgLight: 'bg-orange-50',
      iconColor: 'text-orange-500'
    },
    {
      year: '2021',
      title: 'The Realization',
      icon: ShieldCheck,
      description: 'We realized that while students were paying high prices for off-campus housing, they were receiving zero security and zero transparency. We decided to build a platform that prioritizes student safety and budget.',
      color: 'from-teal-400 to-emerald-500',
      bgLight: 'bg-teal-50',
      iconColor: 'text-teal-500'
    },
    {
      year: '2022',
      title: 'Expansion & Access',
      icon: Globe,
      description: "Today, Vistakenya serves over 5,000 students across 20+ campuses in Nairobi, Kiambu, and Kajiado. We've integrated USSD protocols so that even students in remote areas can find housing without using expensive data bundles.",
      color: 'from-blue-400 to-indigo-500',
      bgLight: 'bg-blue-50',
      iconColor: 'text-blue-500'
    },
    {
      year: '2024 & Beyond',
      title: 'The Future',
      icon: Rocket,
      description: 'Our journey is just beginning. We are committed to making student housing dignified, affordable, and accessible for the next generation of African leaders.',
      color: 'from-purple-400 to-pink-500',
      bgLight: 'bg-purple-50',
      iconColor: 'text-purple-500'
    }
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

      {/* Enhanced Story Section */}
      <section className="px-6 py-24 bg-gray-50 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 transition-transform duration-1000 hover:scale-110"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 transition-transform duration-1000 hover:scale-110"></div>
        <div className="absolute -bottom-32 left-1/2 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 transition-transform duration-1000 hover:scale-110 transform -translate-x-1/2"></div>

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-teal-600 tracking-widest uppercase mb-3">Our Journey</h2>
            <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">How It All Started</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From personal frustration to a platform empowering thousands of students across Kenya.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-teal-200 via-orange-200 to-purple-200 rounded-full opacity-50"></div>

            <div className="space-y-12 md:space-y-20">
              {storyTimeline.map((item, idx) => {
                const Icon = item.icon;
                const isEven = idx % 2 === 0;
                return (
                  <div key={idx} className={`relative flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''} group`}>
                    
                    {/* Center Node */}
                    <div className={`hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center w-14 h-14 rounded-full border-4 border-white bg-gradient-to-br ${item.color} shadow-lg z-20 group-hover:scale-125 transition-transform duration-500`}>
                      <Icon size={20} className="text-white" />
                    </div>

                    {/* Content Box */}
                    <div className={`w-full md:w-1/2 ${isEven ? 'md:pl-16' : 'md:pr-16'}`}>
                      <div className="p-8 rounded-3xl bg-white border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-500 transform group-hover:-translate-y-2 overflow-hidden relative">
                        {/* Glassmorphic decorative shape */}
                        <div className={`absolute -right-12 -top-12 w-40 h-40 rounded-full ${item.bgLight} opacity-50 transition-transform duration-700 group-hover:scale-150`}></div>
                        
                        <div className="relative z-10">
                          <div className="flex items-center justify-between mb-6">
                            <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl ${item.bgLight} ${item.iconColor} shadow-sm group-hover:rotate-6 transition-transform duration-300`}>
                              <Icon size={28} />
                            </div>
                            <span className={`px-5 py-2 rounded-full text-sm font-bold bg-gradient-to-r ${item.color} text-white shadow-md`}>
                              {item.year}
                            </span>
                          </div>
                          <h4 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h4>
                          <p className="text-gray-600 leading-relaxed text-lg">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
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

import React from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const testimonials = [
    {
      name: 'Sarah Mwangi',
      role: 'Software Engineer',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
      text: 'Vistakenya made finding an apartment so easy! I found my dream place in Westlands in just two days. The verification process was smooth and transparent.',
      rating: 5,
      area: 'Westlands',
    },
    {
      name: 'James Kipchoge',
      role: 'Business Analyst',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
      text: 'Amazing platform! The landlord support was fantastic, and everything was so straightforward. I highly recommend Vistakenya to anyone looking for a hassle-free rental experience.',
      rating: 5,
      area: 'Kilimani',
    },
    {
      name: 'Linda Ochieng',
      role: 'Marketing Manager',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
      text: 'Best rental platform I\'ve used. The filters help you narrow down exactly what you need, and the payment system is super secure. 10/10!',
      rating: 5,
      area: 'Upper Hill',
    },
    {
      name: 'Michael Kariuki',
      role: 'Data Scientist',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
      text: 'I was skeptical at first, but Vistakenya exceeded my expectations. Professional, trustworthy, and genuinely helpful. Found my perfect apartment without any issues.',
      rating: 5,
      area: 'Parklands',
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-coral-100 text-coral-700 text-sm font-semibold mb-4">
            💬 Real Stories
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our Tenants Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of happy tenants who found their perfect home with Vistakenya
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="p-12 rounded-3xl bg-gradient-to-br from-white via-teal-50 to-white border-2 border-teal-100 shadow-xl">
            {/* Quote Icon */}
            <div className="mb-6">
              <Quote size={40} className="text-teal-400 opacity-50" />
            </div>

            {/* Testimonial Text */}
            <p className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 leading-relaxed">
              "{currentTestimonial.text}"
            </p>

            {/* Author Info */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                {/* Avatar */}
                <div className="relative">
                  <img
                    src={currentTestimonial.image}
                    alt={currentTestimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-3 border-teal-500"
                  />
                  <div className="absolute -bottom-1 -right-1 bg-teal-500 text-white rounded-full p-1">
                    ✓
                  </div>
                </div>

                {/* Text */}
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">{currentTestimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{currentTestimonial.role}</p>
                  <div className="flex items-center space-x-2 mt-1">
                    <span className="text-xs bg-teal-100 text-teal-700 px-2 py-1 rounded">
                      📍 {currentTestimonial.area}
                    </span>
                  </div>
                </div>
              </div>

              {/* Rating */}
              <div className="flex space-x-1">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <span key={i} className="text-2xl">⭐</span>
                ))}
              </div>
            </div>
          </div>

          {/* Carousel Controls */}
          <div className="flex items-center justify-between mt-10">
            <button
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-teal-100 text-teal-600 hover:bg-teal-200 transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Indicators */}
            <div className="flex space-x-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === currentIndex
                      ? 'bg-teal-600 w-8'
                      : 'bg-gray-300 w-2 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-teal-100 text-teal-600 hover:bg-teal-200 transition-all duration-300 hover:scale-110"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

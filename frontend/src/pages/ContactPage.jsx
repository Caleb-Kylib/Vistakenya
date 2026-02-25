import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import GlassNavbar from '../components/GlassNavbar';
import Footer from '../components/Footer';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 3000);
  };

  const contactMethods = [
    {
      icon: Phone,
      title: 'Phone',
      details: '+254 (0) 700 000000',
      description: 'Call us Monday-Friday, 9am-5pm EAT',
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'support@vistakenya.com',
      description: 'We respond within 24 hours',
    },
    {
      icon: MapPin,
      title: 'Office',
      details: 'Nairobi, Kenya',
      description: 'Visit us in the heart of Nairobi',
    },
    {
      icon: Clock,
      title: 'Hours',
      details: 'Mon-Fri: 9am-6pm',
      description: 'Sat-Sun: 10am-4pm EAT',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <GlassNavbar />

      {/* Hero Section */}
      <div className="pt-32 pb-12 px-6 bg-gradient-to-b from-teal-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Get In Touch
          </h1>
          <p className="text-2xl text-gray-600 leading-relaxed">
            Have questions? We'd love to hear from you. Send us a message!
          </p>
        </div>
      </div>

      {/* Contact Methods */}
      <section className="px-6 py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, idx) => {
              const Icon = method.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-gradient-to-br from-white to-gray-50 border-2 border-gray-100 hover:border-teal-400 shadow-md hover:shadow-lg transition-all duration-300 text-center"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-teal-100 mb-4">
                    <Icon size={24} className="text-teal-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{method.title}</h3>
                  <p className="text-teal-600 font-semibold mb-2">{method.details}</p>
                  <p className="text-gray-600 text-sm">{method.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="px-6 py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-200">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Send us a Message</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-400 outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-400 outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+254 700 000000"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-400 outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Subject
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-700 outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all"
                  >
                    <option value="">Select a subject</option>
                    <option value="property-inquiry">Property Inquiry</option>
                    <option value="booking-issue">Booking Issue</option>
                    <option value="payment-problem">Payment Problem</option>
                    <option value="complaint">General Complaint</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us more about your inquiry..."
                    rows="5"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-400 outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full px-6 py-3 rounded-lg text-lg font-semibold text-white bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Send Message
                </button>

                {/* Success Message */}
                {submitted && (
                  <div className="p-4 rounded-lg bg-green-50 border border-green-200 text-green-700 font-medium">
                    ✓ Message sent successfully! We'll get back to you soon.
                  </div>
                )}
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* FAQ Card */}
              <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  {[
                    {
                      q: 'How long does it take to get a response?',
                      a: 'We aim to respond to all inquiries within 24 hours on business days.',
                    },
                    {
                      q: 'Can I change my booking?',
                      a: 'Yes, you can modify bookings up to 7 days before the move-in date.',
                    },
                    {
                      q: 'What payment methods do you accept?',
                      a: 'We accept Mpesa, bank transfers, credit cards, and debit cards.',
                    },
                    {
                      q: 'Is my information secure?',
                      a: 'Yes, we use industry-standard encryption to protect all your data.',
                    },
                  ].map((item, idx) => (
                    <div key={idx} className="pb-4 border-b border-gray-200 last:border-b-0">
                      <h4 className="font-semibold text-gray-900 mb-2">{item.q}</h4>
                      <p className="text-gray-600">{item.a}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hours Card */}
              <div className="bg-gradient-to-br from-teal-50 to-white p-8 rounded-3xl shadow-lg border-2 border-teal-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Business Hours</h3>
                <div className="space-y-2 text-gray-700">
                  <p><span className="font-semibold">Monday - Friday:</span> 9:00 AM - 6:00 PM</p>
                  <p><span className="font-semibold">Saturday:</span> 10:00 AM - 4:00 PM</p>
                  <p><span className="font-semibold">Sunday:</span> 10:00 AM - 3:00 PM</p>
                  <p className="pt-4 text-sm text-gray-600">
                    <strong>Note:</strong> For emergencies outside business hours, please email us and we'll address it in the morning.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="px-6 py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Visit Our Office</h2>
          <div className="rounded-3xl overflow-hidden shadow-lg border border-gray-200 h-96 bg-gray-200 flex items-center justify-center">
            {/* Placeholder for map */}
            <div className="text-center">
              <MapPin size={48} className="text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">Map would be embedded here</p>
              <p className="text-gray-400">Nairobi, Kenya</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

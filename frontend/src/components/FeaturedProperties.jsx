import React from 'react';
import { MapPin, Wifi, Tv, Coffee, Wind, Heart } from 'lucide-react';

export default function FeaturedProperties() {
  const properties = [
    {
      id: 1,
      name: 'Westlands Luxury Studio',
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=500&h=300&fit=crop',
      price: 45000,
      area: 'Westlands',
      bedrooms: 1,
      bathrooms: 1,
      amenities: ['WiFi', 'TV', 'Air Conditioning'],
      rating: 4.8,
      reviews: 24,
    },
    {
      id: 2,
      name: 'Kilimani Modern Apartment',
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500&h=300&fit=crop',
      price: 55000,
      area: 'Kilimani',
      bedrooms: 2,
      bathrooms: 2,
      amenities: ['WiFi', 'Gym Access', 'Security'],
      rating: 4.9,
      reviews: 18,
    },
    {
      id: 3,
      name: 'Upper Hill Cozy One Bed',
      image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=500&h=300&fit=crop',
      price: 38000,
      area: 'Upper Hill',
      bedrooms: 1,
      bathrooms: 1,
      amenities: ['WiFi', 'Coffee Maker', 'Garden Access'],
      rating: 4.7,
      reviews: 31,
    },
    {
      id: 4,
      name: 'Parklands Premium Suite',
      image: 'https://images.unsplash.com/photo-1571508601571-520fcefe6301?w=500&h=300&fit=crop',
      price: 62000,
      area: 'Parklands',
      bedrooms: 2,
      bathrooms: 2,
      amenities: ['WiFi', 'Parking', 'Balcony'],
      rating: 4.9,
      reviews: 42,
    },
  ];

  const amenityIcons = {
    'WiFi': <Wifi size={16} />,
    'TV': <Tv size={16} />,
    'Air Conditioning': <Wind size={16} />,
    'Coffee Maker': <Coffee size={16} />,
    'Gym Access': '💪',
    'Security': '🔒',
    'Garden Access': '🌿',
    'Parking': '🅿️',
    'Balcony': '🏢',
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-teal-100 text-teal-700 text-sm font-semibold mb-4">
            ✨ Featured Stays
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Premium Short Stays in Nairobi
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our hand-picked selection of the best furnished apartments perfect for short-term stays
          </p>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {properties.map((property) => (
            <div
              key={property.id}
              className="group rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden bg-gray-200">
                <img
                  src={property.image}
                  alt={property.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/0 to-black/0 group-hover:from-black/20 transition-all duration-300"></div>
                <button className="absolute top-3 right-3 p-2 rounded-full bg-white/90 hover:bg-white transition-all duration-300 shadow-lg">
                  <Heart size={18} className="text-coral-500 hover:fill-coral-500 transition-all" />
                </button>
              </div>

              {/* Content */}
              <div className="p-5">
                {/* Rating */}
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-1">
                    <span className="text-yellow-400">⭐</span>
                    <span className="font-semibold text-gray-900">{property.rating}</span>
                    <span className="text-gray-500 text-sm">({property.reviews})</span>
                  </div>
                </div>

                {/* Name and Area */}
                <h3 className="font-bold text-gray-900 mb-1 text-sm line-clamp-2">
                  {property.name}
                </h3>
                <div className="flex items-center text-teal-600 text-xs mb-3">
                  <MapPin size={12} className="mr-1" />
                  {property.area}
                </div>

                {/* Bedrooms and Bathrooms */}
                <div className="flex gap-3 mb-3 text-xs">
                  <span className="bg-gray-100 px-2 py-1 rounded text-gray-700">
                    🛏️ {property.bedrooms} bed
                  </span>
                  <span className="bg-gray-100 px-2 py-1 rounded text-gray-700">
                    🚿 {property.bathrooms} bath
                  </span>
                </div>

                {/* Amenities */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {property.amenities.slice(0, 2).map((amenity, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center space-x-1 bg-teal-50 text-teal-700 px-2 py-1 rounded text-xs font-medium"
                    >
                      <span>{typeof amenityIcons[amenity] === 'string' ? amenityIcons[amenity] : amenityIcons[amenity] || '✓'}</span>
                    </span>
                  ))}
                  {property.amenities.length > 2 && (
                    <span className="text-xs text-gray-500">+{property.amenities.length - 2} more</span>
                  )}
                </div>

                {/* Price and Button */}
                <div className="border-t border-gray-200 pt-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-gray-500">Per Month</p>
                      <p className="text-2xl font-bold text-teal-600">
                        KES {property.price.toLocaleString()}
                      </p>
                    </div>
                  </div>
                  <button className="w-full mt-3 px-4 py-2 rounded-lg text-sm font-semibold bg-gradient-to-r from-teal-500 to-teal-600 text-white hover:from-teal-600 hover:to-teal-700 transition-all duration-300 shadow-md hover:shadow-lg">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 rounded-lg text-lg font-semibold text-white bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 transition-all duration-300 shadow-lg hover:shadow-xl">
            Explore All Properties →
          </button>
        </div>
      </div>
    </section>
  );
}

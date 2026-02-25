import React, { useState } from 'react';
import { MapPin, Heart, Star, Filter, ChevronDown, X } from 'lucide-react';
import GlassNavbar from '../components/GlassNavbar';
import Footer from '../components/Footer';

export default function PropertiesPage() {
  const [filters, setFilters] = useState({
    area: '',
    priceRange: [0, 100000],
    bedrooms: null,
    bathrooms: null,
    amenities: [],
  });

  const [showFilters, setShowFilters] = useState(false);

  // Mock data
  const allProperties = [
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
    {
      id: 5,
      name: 'Lavington Bright Apartment',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=300&fit=crop',
      price: 48000,
      area: 'Lavington',
      bedrooms: 2,
      bathrooms: 1,
      amenities: ['WiFi', 'Garden', 'Parking'],
      rating: 4.6,
      reviews: 15,
    },
    {
      id: 6,
      name: 'Muthaiga Luxury Penthouse',
      image: 'https://images.unsplash.com/photo-1565183938294-7563f3ce68c5?w=500&h=300&fit=crop',
      price: 85000,
      area: 'Muthaiga',
      bedrooms: 3,
      bathrooms: 2,
      amenities: ['WiFi', 'Gym', 'Security', 'Balcony'],
      rating: 4.95,
      reviews: 37,
    },
    {
      id: 7,
      name: 'Embakasi Modern Studio',
      image: 'https://images.unsplash.com/photo-1494145904049-0dca59b4bbad?w=500&h=300&fit=crop',
      price: 28000,
      area: 'Embakasi',
      bedrooms: 1,
      bathrooms: 1,
      amenities: ['WiFi', 'Security'],
      rating: 4.5,
      reviews: 22,
    },
    {
      id: 8,
      name: 'Riverside Contemporary',
      image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=500&h=300&fit=crop',
      price: 52000,
      area: 'Riverside',
      bedrooms: 2,
      bathrooms: 2,
      amenities: ['WiFi', 'Gym Access', 'Parking', 'River View'],
      rating: 4.8,
      reviews: 29,
    },
  ];

  const areas = ['Westlands', 'Kilimani', 'Upper Hill', 'Parklands', 'Lavington', 'Muthaiga', 'Embakasi', 'Riverside'];
  const amenitiesList = ['WiFi', 'TV', 'Air Conditioning', 'Gym Access', 'Security', 'Parking', 'Balcony', 'Garden Access'];

  // Filter properties
  const filteredProperties = allProperties.filter((property) => {
    if (filters.area && property.area !== filters.area) return false;
    if (property.price < filters.priceRange[0] || property.price > filters.priceRange[1]) return false;
    if (filters.bedrooms && property.bedrooms !== filters.bedrooms) return false;
    if (filters.bathrooms && property.bathrooms !== filters.bathrooms) return false;
    if (
      filters.amenities.length > 0 &&
      !filters.amenities.every((amenity) => property.amenities.includes(amenity))
    ) {
      return false;
    }
    return true;
  });

  const toggleAmenity = (amenity) => {
    setFilters((prev) => ({
      ...prev,
      amenities: prev.amenities.includes(amenity)
        ? prev.amenities.filter((a) => a !== amenity)
        : [...prev.amenities, amenity],
    }));
  };

  const resetFilters = () => {
    setFilters({
      area: '',
      priceRange: [0, 100000],
      bedrooms: null,
      bathrooms: null,
      amenities: [],
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <GlassNavbar />

      {/* Page Header */}
      <div className="pt-32 pb-12 px-6 bg-gradient-to-b from-teal-50 to-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
            Browse Properties
          </h1>
          <p className="text-lg text-gray-600">
            {filteredProperties.length} properties available in Nairobi
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-6 py-12">
        <div className="max-w-7xl mx-auto flex gap-6">
          {/* Sidebar Filters */}
          <div
            className={`${
              showFilters ? 'block' : 'hidden'
            } md:block w-full md:w-72 flex-shrink-0`}
          >
            <div className="sticky top-32 space-y-6">
              {/* Filter Header */}
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-gray-900">Filters</h3>
                <button
                  onClick={() => setShowFilters(false)}
                  className="md:hidden p-2 rounded-lg hover:bg-gray-100"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Glass Card Background */}
              <div className="p-6 rounded-2xl bg-glass backdrop-blur-sm border border-white/20 shadow-lg space-y-6">
                {/* Area Dropdown */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-3">
                    Area
                  </label>
                  <select
                    value={filters.area}
                    onChange={(e) =>
                      setFilters((prev) => ({ ...prev, area: e.target.value }))
                    }
                    className="w-full p-3 rounded-lg border border-gray-300 bg-white text-gray-700 outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all"
                  >
                    <option value="">All Areas</option>
                    {areas.map((area) => (
                      <option key={area} value={area}>
                        {area}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Price Range */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-3">
                    Price Range
                  </label>
                  <div className="space-y-2">
                    <input
                      type="range"
                      min="0"
                      max="100000"
                      step="5000"
                      value={filters.priceRange[1]}
                      onChange={(e) =>
                        setFilters((prev) => ({
                          ...prev,
                          priceRange: [prev.priceRange[0], parseInt(e.target.value)],
                        }))
                      }
                      className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer accent-teal-600"
                    />
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>KES 0</span>
                      <span>KES {filters.priceRange[1].toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                {/* Bedrooms */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-3">
                    Bedrooms
                  </label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4].map((num) => (
                      <button
                        key={num}
                        onClick={() =>
                          setFilters((prev) => ({
                            ...prev,
                            bedrooms: prev.bedrooms === num ? null : num,
                          }))
                        }
                        className={`px-4 py-2 rounded-lg font-medium transition-all ${
                          filters.bedrooms === num
                            ? 'bg-teal-600 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {num}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Bathrooms */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-3">
                    Bathrooms
                  </label>
                  <div className="flex gap-2">
                    {[1, 2, 3].map((num) => (
                      <button
                        key={num}
                        onClick={() =>
                          setFilters((prev) => ({
                            ...prev,
                            bathrooms: prev.bathrooms === num ? null : num,
                          }))
                        }
                        className={`px-4 py-2 rounded-lg font-medium transition-all ${
                          filters.bathrooms === num
                            ? 'bg-teal-600 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {num}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Amenities */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-3">
                    Amenities
                  </label>
                  <div className="space-y-2">
                    {amenitiesList.map((amenity) => (
                      <label
                        key={amenity}
                        className="flex items-center space-x-2 cursor-pointer hover:bg-gray-50 p-2 rounded transition-colors"
                      >
                        <input
                          type="checkbox"
                          checked={filters.amenities.includes(amenity)}
                          onChange={() => toggleAmenity(amenity)}
                          className="w-4 h-4 rounded border-gray-300 text-teal-600 focus:ring-teal-500 cursor-pointer"
                        />
                        <span className="text-sm text-gray-700">{amenity}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Reset Button */}
                <button
                  onClick={resetFilters}
                  className="w-full px-4 py-2 rounded-lg text-sm font-semibold text-teal-600 bg-teal-50 hover:bg-teal-100 transition-colors"
                >
                  Reset Filters
                </button>
              </div>
            </div>
          </div>

          {/* Properties Grid */}
          <div className="flex-1">
            {/* Mobile Filter Button */}
            <div className="md:hidden mb-6">
              <button
                onClick={() => setShowFilters(true)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-teal-600 text-white font-semibold hover:bg-teal-700 transition-colors"
              >
                <Filter size={20} />
                Show Filters
              </button>
            </div>

            {/* Results Header */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                {filteredProperties.length} Properties Found
              </h2>
              <select className="px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 outline-none focus:border-teal-500">
                <option>Most Relevant</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest First</option>
                <option>Rating: Highest</option>
              </select>
            </div>

            {/* Properties Grid */}
            {filteredProperties.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProperties.map((property) => (
                  <div
                    key={property.id}
                    className="group rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                  >
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden bg-gray-200">
                      <img
                        src={property.image}
                        alt={property.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <button className="absolute top-3 right-3 p-2 rounded-full bg-white/90 hover:bg-white transition-all shadow-lg">
                        <Heart size={18} className="text-coral-500" />
                      </button>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-1">
                          <span className="text-yellow-400">⭐</span>
                          <span className="font-semibold text-gray-900">{property.rating}</span>
                          <span className="text-gray-500 text-sm">({property.reviews})</span>
                        </div>
                      </div>

                      <h3 className="font-bold text-gray-900 mb-1 text-sm line-clamp-2">
                        {property.name}
                      </h3>
                      <div className="flex items-center text-teal-600 text-xs mb-3">
                        <MapPin size={12} className="mr-1" />
                        {property.area}
                      </div>

                      <div className="flex gap-3 mb-3 text-xs">
                        <span className="bg-gray-100 px-2 py-1 rounded">
                          🛏️ {property.bedrooms}
                        </span>
                        <span className="bg-gray-100 px-2 py-1 rounded">
                          🚿 {property.bathrooms}
                        </span>
                      </div>

                      <div className="border-t border-gray-200 pt-3">
                        <p className="text-2xl font-bold text-teal-600 mb-3">
                          KES {property.price.toLocaleString()}
                        </p>
                        <button className="w-full px-4 py-2 rounded-lg text-sm font-semibold bg-gradient-to-r from-teal-500 to-teal-600 text-white hover:from-teal-600 hover:to-teal-700 transition-all">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-600 mb-4">No properties found matching your filters.</p>
                <button
                  onClick={resetFilters}
                  className="px-6 py-2 rounded-lg bg-teal-600 text-white font-semibold hover:bg-teal-700 transition-colors"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

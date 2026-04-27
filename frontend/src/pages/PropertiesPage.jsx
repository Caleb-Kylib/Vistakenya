import React, { useState } from 'react';
import { MapPin, Heart, Star, Filter, ChevronDown, X } from 'lucide-react';
import GlassNavbar from '../components/GlassNavbar';
import Footer from '../components/Footer';

export default function PropertiesPage() {
  const [filters, setFilters] = useState({
    area: '',
    university: '',
    isShared: false,
    priceRange: [0, 20000],
    category: '',
    amenities: [],
  });

  const [showFilters, setShowFilters] = useState(false);

  // Updated student-focused mock data
  const allProperties = [
    {
      id: 1,
      name: 'Sunset Hostels (Shared)',
      image: 'https://images.unsplash.com/photo-1555854817-5b2247a8175f?w=500&h=300&fit=crop',
      price: 8500,
      area: 'Ongata Rongai',
      universityNearby: 'Multimedia University',
      distanceToCampus: 0.8,
      isShared: true,
      category: 'Shared Room',
      amenities: ['WiFi', 'Water 24/7', 'Security'],
      rating: 4.8,
      trustScore: 92,
      reviews: 45,
    },
    {
      id: 2,
      name: 'Juja Modern Studios',
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=500&h=300&fit=crop',
      price: 12500,
      area: 'Juja',
      universityNearby: 'JKUAT',
      distanceToCampus: 1.2,
      isShared: false,
      category: 'Studio',
      amenities: ['WiFi', 'Electricity', 'Parking'],
      rating: 4.9,
      trustScore: 95,
      reviews: 28,
    },
    {
      id: 3,
      name: 'Kasarani Student Heights',
      image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=500&h=300&fit=crop',
      price: 15000,
      area: 'Kasarani',
      universityNearby: 'USIU-Africa / PAC',
      distanceToCampus: 1.5,
      isShared: false,
      category: 'Bedsitter',
      amenities: ['WiFi', 'CCTV', 'Borehole'],
      rating: 4.7,
      trustScore: 88,
      reviews: 31,
    },
    {
      id: 4,
      name: 'Madaraka Co-living Space',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=300&fit=crop',
      price: 9500,
      area: 'Madaraka',
      universityNearby: 'Strathmore University',
      distanceToCampus: 0.5,
      isShared: true,
      category: 'Shared Apartment',
      amenities: ['WiFi', 'Kitchen', 'Security'],
      rating: 4.9,
      trustScore: 97,
      reviews: 52,
    },
    {
      id: 5,
      name: 'Rongai Elite Bedsitters',
      image: 'https://images.unsplash.com/photo-1494145904049-0dca59b4bbad?w=500&h=300&fit=crop',
      price: 11000,
      area: 'Ongata Rongai',
      universityNearby: 'CUEA / MMU',
      distanceToCampus: 2.1,
      isShared: false,
      category: 'Bedsitter',
      amenities: ['Water 24/7', 'Electricity'],
      rating: 4.5,
      trustScore: 82,
      reviews: 19,
    },
    {
      id: 6,
      name: 'Juja Prime Apartments',
      image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=500&h=300&fit=crop',
      price: 18000,
      area: 'Juja',
      universityNearby: 'JKUAT',
      distanceToCampus: 0.9,
      isShared: false,
      category: '1 Bedroom',
      amenities: ['WiFi', 'Gym', 'Parking'],
      rating: 4.8,
      trustScore: 90,
      reviews: 37,
    },
  ];

  const areas = ['Ongata Rongai', 'Juja', 'Kasarani', 'Madaraka', 'Nairobi Central'];
  const universities = ['Multimedia University', 'JKUAT', 'USIU-Africa', 'Strathmore University', 'KCA University', 'CUEA'];
  const amenitiesList = ['WiFi', 'Water 24/7', 'Electricity', 'Security', 'CCTV', 'Parking', 'Kitchen', 'Gym'];

  // Filter properties
  const filteredProperties = allProperties.filter((property) => {
    if (filters.area && property.area !== filters.area) return false;
    if (filters.university && !property.universityNearby.includes(filters.university)) return false;
    if (filters.isShared && !property.isShared) return false;
    if (property.price < filters.priceRange[0] || property.price > filters.priceRange[1]) return false;
    if (filters.category && property.category !== filters.category) return false;
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
      university: '',
      isShared: false,
      priceRange: [0, 20000],
      category: '',
      amenities: [],
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <GlassNavbar />

      {/* Page Header */}
      <div className="pt-32 pb-12 px-6 bg-gradient-to-b from-teal-50 to-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2 font-black tracking-tight uppercase">
            Find Student Housing
          </h1>
          <p className="text-lg text-gray-600 font-medium">
            {filteredProperties.length} verified hostels available near major campuses
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
                    Campus Area
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

                {/* University Dropdown */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-3">
                    Nearby University
                  </label>
                  <select
                    value={filters.university}
                    onChange={(e) =>
                      setFilters((prev) => ({ ...prev, university: e.target.value }))
                    }
                    className="w-full p-3 rounded-lg border border-gray-300 bg-white text-gray-700 outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all"
                  >
                    <option value="">All Universities</option>
                    {universities.map((uni) => (
                      <option key={uni} value={uni}>
                        {uni}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Shared Housing Toggle */}
                <div className="flex items-center space-x-3 p-3 bg-teal-50 rounded-xl border border-teal-100">
                  <input
                    type="checkbox"
                    id="isShared"
                    checked={filters.isShared}
                    onChange={(e) => setFilters(prev => ({ ...prev, isShared: e.target.checked }))}
                    className="w-5 h-5 rounded border-gray-300 text-teal-600 focus:ring-teal-500 cursor-pointer"
                  />
                  <label htmlFor="isShared" className="text-sm font-bold text-teal-800 cursor-pointer">
                    Show Co-living (Shared)
                  </label>
                </div>

                {/* Price Range */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-3">
                    Monthly Budget (Max)
                  </label>
                  <div className="space-y-2">
                    <input
                      type="range"
                      min="8000"
                      max="20000"
                      step="500"
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
                      <span>KES 8,000</span>
                      <span>KES {filters.priceRange[1].toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                {/* Amenities */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-3">
                    Student Amenities
                  </label>
                  <div className="grid grid-cols-1 gap-2">
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
                    className="group rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                  >
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden bg-gray-200">
                      <img
                        src={property.image}
                        alt={property.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute top-3 left-3 flex flex-col gap-2">
                        {property.isShared && (
                          <span className="px-2 py-1 bg-coral-500 text-white text-[10px] font-bold rounded-lg shadow-lg uppercase">
                            Co-living
                          </span>
                        )}
                        {property.distanceToCampus < 1 && (
                          <span className="px-2 py-1 bg-teal-600 text-white text-[10px] font-bold rounded-lg shadow-lg uppercase">
                            Near Campus
                          </span>
                        )}
                      </div>
                      <button className="absolute top-3 right-3 p-2 rounded-full bg-white/90 hover:bg-white transition-all shadow-lg">
                        <Heart size={18} className="text-gray-400 hover:text-coral-500 transition-colors" />
                      </button>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-black text-teal-500 uppercase tracking-widest">
                          {property.category}
                        </span>
                        <div className="flex items-center space-x-1">
                          <span className="text-yellow-400 text-xs">⭐</span>
                          <span className="font-bold text-gray-900 text-xs">{property.trustScore || '90'}% Trust</span>
                        </div>
                      </div>

                      <h3 className="font-bold text-gray-900 mb-1 text-base line-clamp-1 group-hover:text-teal-600 transition-colors">
                        {property.name}
                      </h3>
                      
                      <div className="flex items-center text-gray-500 text-xs mb-2">
                        <MapPin size={12} className="mr-1 text-teal-500" />
                        {property.area}
                      </div>

                      <div className="flex items-center text-teal-700 text-[11px] font-bold mb-4 bg-teal-50 p-2 rounded-lg">
                        <span className="mr-2">🎓</span>
                        {property.universityNearby} ({property.distanceToCampus}km)
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {property.amenities.slice(0, 2).map((amenity, i) => (
                          <span key={i} className="text-[10px] bg-gray-100 text-gray-600 px-2 py-1 rounded-md font-medium">
                            {amenity}
                          </span>
                        ))}
                      </div>

                      <div className="border-t border-gray-100 pt-4 flex items-center justify-between">
                        <div>
                          <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest mb-1">Monthly Rent</p>
                          <p className="text-xl font-black text-teal-600">
                            KES {property.price.toLocaleString()}
                          </p>
                        </div>
                        <button className="px-4 py-2 rounded-xl text-xs font-bold bg-gray-900 text-white hover:bg-teal-600 transition-all shadow-lg">
                          Details
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

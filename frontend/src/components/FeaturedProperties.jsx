import React from 'react';
import { MapPin, Wifi, Tv, Coffee, Wind, Heart, Star, ShieldCheck, Plus, View } from 'lucide-react';
import { useProperties } from '../context/PropertyContext';
import { Link } from 'react-router-dom';

export default function FeaturedProperties() {
  const { properties } = useProperties();

  // Show only verified properties on the landing page
  const featured = properties.filter(p => p.status === 'Verified').slice(0, 4);

  const amenityIcons = {
    'WiFi': <Wifi size={14} />,
    'TV': <Tv size={14} />,
    'Backup Generator': <Wind size={14} />,
    'Water (24/7)': '💧',
    'Security Guard': '🔒',
    'CCTV': '📹'
  };

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-gray-50/50 to-white overflow-hidden relative">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-50 rounded-full blur-3xl opacity-30 -z-10"></div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20 relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 text-teal-700 text-[10px] font-black uppercase tracking-[0.2em] mb-6 shadow-sm border border-teal-100/50">
            <Star className="w-3.5 h-3.5 fill-teal-500" />
            Curated Network Inventory
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 tracking-tighter uppercase">
            Premium Short Stays
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-medium leading-relaxed">
            Discover our hand-picked selection of the most secure and high-performance apartments in the city.
          </p>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featured.map((property) => (
            <div
              key={property.id}
              className="group bg-white rounded-[2.5rem] border border-gray-100 shadow-xl shadow-gray-200/20 overflow-hidden hover:shadow-2xl hover:border-teal-100 transition-all duration-500 flex flex-col h-full"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden bg-gray-50">
                <img
                  src={property.image}
                  alt={property.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:from-black/40 transition-all"></div>

                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  <div className="px-3 py-1.5 bg-white/90 backdrop-blur-md rounded-xl text-[9px] font-black text-teal-600 uppercase tracking-widest flex items-center gap-1.5 shadow-lg border border-teal-50">
                    <ShieldCheck className="w-3 h-3" />
                    Verified
                  </div>
                  <div className="px-3 py-1.5 bg-gray-900/80 backdrop-blur-md rounded-xl text-[9px] font-black text-white uppercase tracking-widest flex items-center gap-1.5 shadow-lg border border-white/10">
                    <View size={10} className="text-teal-400" />
                    360 Tour
                  </div>
                </div>

                <button className="absolute top-4 right-4 p-2.5 rounded-xl bg-white/90 backdrop-blur-md hover:bg-white transition-all shadow-lg text-gray-400 hover:text-red-500 border border-gray-100/50">
                  <Heart size={18} className="group-hover:scale-110 transition-transform" />
                </button>
              </div>

              {/* Content */}
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-[10px] font-black text-teal-400 uppercase tracking-[0.15em]">{property.category}</p>
                    <div className="flex items-center gap-1">
                      <Star size={10} className="fill-yellow-400 text-yellow-400" />
                      <span className="text-[10px] font-black text-gray-900">4.9</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-black text-gray-900 mb-2 uppercase tracking-tight group-hover:text-teal-600 transition-colors line-clamp-1">
                    {property.name}
                  </h3>

                  <div className="flex items-center text-gray-400 text-[10px] font-bold uppercase tracking-widest gap-1.5 mb-6">
                    <MapPin size={12} className="text-teal-500" />
                    {property.location}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {property.amenities?.slice(0, 3).map((amenity, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1.5 bg-gray-50 text-gray-500 px-3 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-widest border border-gray-100"
                      >
                        {amenityIcons[amenity] || '✓'}
                        {amenity}
                      </span>
                    ))}
                    {property.amenities?.length > 3 && (
                      <span className="text-[9px] font-black text-gray-300 uppercase py-1.5">+{property.amenities.length - 3}</span>
                    )}
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-50 flex items-center justify-between">
                  <div>
                    <p className="text-[9px] font-black text-gray-300 uppercase tracking-widest mb-1 leading-none">Yield/Mo</p>
                    <p className="text-xl font-black text-teal-600 tracking-tighter uppercase leading-none">
                      KES {property.rent?.toLocaleString()}
                    </p>
                  </div>
                  <Link to="/tenant/browse" className="p-3 bg-teal-50 group-hover:bg-teal-600 rounded-xl transition-all shadow-sm">
                    <Plus className="w-5 h-5 text-teal-600 group-hover:text-white transition-all group-hover:rotate-90 duration-300" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-20">
          <Link to="/properties" className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl text-xs font-black text-white bg-gray-900 hover:bg-teal-600 transition-all duration-500 shadow-2xl hover:shadow-teal-100 hover:-translate-y-1 uppercase tracking-widest group">
            Discover All Assets
            <Plus className="w-4 h-4 group-hover:rotate-90 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
}

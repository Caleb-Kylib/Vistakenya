import React, { useState } from 'react';
import { MapPin, Heart, Star, Filter, Search, ShieldCheck, Zap, Info } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { Link } from 'react-router-dom';

const BrowseProperties = () => {
    const { user } = useAuth();
    const [searchTerm, setSearchTerm] = useState('');
    const [filterCategory, setFilterCategory] = useState('All');

    const properties = [
        {
            id: 1,
            name: 'Sunset Apartments, Unit 4B',
            location: 'Kilimani, Nairobi',
            price: 45000,
            rating: 4.8,
            image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=400&q=80',
            amenities: ['CCTV', 'Borehole', 'Elevator', 'Backup Generator'],
            type: 'Apartment',
            isVerified: true
        },
        {
            id: 2,
            name: 'Garden Estate Villas',
            location: 'Garden Estate, Nairobi',
            price: 85000,
            rating: 4.9,
            image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=400&q=80',
            amenities: ['Gym', 'Pool', 'Solar Water', 'Electric Fence'],
            type: 'Villa',
            isVerified: true
        },
        {
            id: 3,
            name: 'Lake View Residency',
            location: 'Kisumu',
            price: 24000,
            rating: 4.5,
            image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=400&q=80',
            amenities: ['Wifi', 'Security', 'Parking'],
            type: 'Studio',
            isVerified: false
        },
        {
            id: 4,
            name: 'Westlands Modern Loft',
            location: 'Westlands, Nairobi',
            price: 65000,
            rating: 4.7,
            image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=400&q=80',
            amenities: ['Concierge', 'Rooftop Lounge', 'Fiber Internet'],
            type: 'Apartment',
            isVerified: true
        },
        {
            id: 5,
            name: 'Lavington Sky Villas',
            location: 'Lavington, Nairobi',
            price: 120000,
            rating: 5.0,
            image: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=400&q=80',
            amenities: ['Smart Home', 'Private Lift', 'Sauna', 'Dsq'],
            type: 'Penthouse',
            isVerified: true
        }
    ];

    const categories = ['All', 'Apartment', 'Villa', 'Studio', 'Penthouse'];

    const filteredProperties = properties.filter(prop => {
        const matchesSearch = prop.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            prop.location.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = filterCategory === 'All' || prop.type === filterCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="max-w-7xl mx-auto space-y-10 pb-20">
            {/* Header with Search */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                <div>
                    <h1 className="text-4xl font-black text-gray-900 tracking-tight">Browse Properties</h1>
                    <p className="text-gray-500 mt-2 font-medium">Find your next home with <span className="text-teal-600 font-bold">verified listings</span>.</p>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-4 flex-1 max-w-2xl">
                    <div className="relative w-full">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                            type="text"
                            placeholder="Search by area or property name..."
                            className="w-full pl-12 pr-4 py-4 bg-white border border-gray-100 rounded-2xl shadow-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all font-medium"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <div className="flex gap-2 w-full sm:w-auto">
                        <button className="p-4 bg-white border border-gray-100 rounded-2xl shadow-sm text-gray-400 hover:text-teal-600 transition-all">
                            <Filter className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Verification Banner if not verified */}
            {user?.verification_status !== 'verified' && (
                <div className="bg-orange-50 border border-orange-100 p-6 rounded-[2rem] flex flex-col md:flex-row items-center justify-between gap-6 animate-fadeIn">
                    <div className="flex items-center gap-4 text-center md:text-left">
                        <div className="p-3 bg-white rounded-2xl shadow-sm">
                            <Zap className="w-8 h-8 text-orange-600" />
                        </div>
                        <div>
                            <h3 className="text-lg font-black text-orange-900 leading-tight">Identity Verification Required</h3>
                            <p className="text-xs text-orange-800 font-medium mt-1">Some premium properties are only visible or bookable by verified tenants. Boost your profile now.</p>
                        </div>
                    </div>
                    <Link to="/tenant/verification" className="px-8 py-3 bg-orange-600 text-white rounded-xl font-black text-sm shadow-lg shadow-orange-100 hover:bg-orange-700 transition-all">
                        Get Verified
                    </Link>
                </div>
            )}

            {/* Categories */}
            <div className="flex items-center gap-4 overflow-x-auto pb-2 scrollbar-hide">
                {categories.map(cat => (
                    <button
                        key={cat}
                        onClick={() => setFilterCategory(cat)}
                        className={`px-6 py-2.5 rounded-full font-black text-xs uppercase tracking-widest transition-all whitespace-nowrap ${filterCategory === cat
                                ? 'bg-gray-900 text-white shadow-xl shadow-gray-200'
                                : 'bg-white text-gray-400 border border-gray-100 hover:bg-gray-50'
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Properties Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProperties.map(prop => (
                    <div key={prop.id} className="group bg-white rounded-[2.5rem] border border-gray-100 shadow-sm overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                        {/* Image Section */}
                        <div className="relative h-64 overflow-hidden">
                            <img src={prop.image} alt={prop.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                            <div className="absolute top-4 left-4 flex gap-2">
                                {prop.isVerified && (
                                    <span className="p-2 bg-white/90 backdrop-blur-md rounded-xl shadow-sm text-teal-600">
                                        <ShieldCheck className="w-5 h-5" />
                                    </span>
                                )}
                                <span className="px-3 py-1 bg-gray-900/40 backdrop-blur-md text-white rounded-lg text-[10px] font-black uppercase tracking-wider">
                                    {prop.type}
                                </span>
                            </div>
                            <button className="absolute top-4 right-4 p-2.5 bg-white/90 backdrop-blur-md rounded-xl shadow-sm text-gray-400 hover:text-coral-500 transition-all">
                                <Heart className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Content Section */}
                        <div className="p-8">
                            <div className="flex items-center justify-between mb-2">
                                <div className="flex items-center gap-1.5">
                                    <Star className="w-4 h-4 text-orange-400 fill-orange-400" />
                                    <span className="text-sm font-black text-gray-900">{prop.rating}</span>
                                </div>
                                <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Available Now</span>
                            </div>

                            <h3 className="text-2xl font-black text-gray-900 leading-tight mb-2 group-hover:text-teal-600 transition-colors uppercase tracking-tight">{prop.name}</h3>
                            <p className="flex items-center gap-1 text-sm text-gray-500 font-medium mb-6">
                                <MapPin className="w-4 h-4" />
                                {prop.location}
                            </p>

                            {/* Unique Amenities */}
                            <div className="flex flex-wrap gap-2 mb-8">
                                {prop.amenities.map(amenity => (
                                    <span key={amenity} className="px-3 py-1 bg-teal-50 text-teal-700 rounded-lg text-[9px] font-black uppercase tracking-wider border border-teal-100">
                                        {amenity}
                                    </span>
                                ))}
                            </div>

                            <div className="flex items-center justify-between pt-6 border-t border-gray-50">
                                <div>
                                    <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest">Starting from</p>
                                    <p className="text-2xl font-black text-gray-900">KES {prop.price.toLocaleString()}<span className="text-xs text-gray-400 font-bold">/mo</span></p>
                                </div>
                                <button className="p-4 bg-gray-900 text-white rounded-2xl font-black hover:bg-teal-600 transition-all shadow-xl shadow-gray-100">
                                    View Details
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Empty State */}
            {filteredProperties.length === 0 && (
                <div className="py-20 text-center">
                    <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Info className="w-10 h-10 text-gray-300" />
                    </div>
                    <h2 className="text-2xl font-black text-gray-900">No properties found</h2>
                    <p className="text-gray-500 font-medium mt-2">Try adjusting your search terms or filters.</p>
                </div>
            )}
        </div>
    );
};

export default BrowseProperties;

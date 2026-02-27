import React, { useState } from 'react';
import { Search, MapPin, Bed, Bath, Plus, Filter, SlidersHorizontal, ArrowRight, ShieldCheck, Star } from 'lucide-react';
import { useProperties } from '../../context/PropertyContext';
import { useApplications } from '../../context/ApplicationContext';
import { useAuth } from '../../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

const BrowseProperties = () => {
    const { properties } = useProperties();
    const { addApplication } = useApplications();
    const { user } = useAuth();
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');

    // Only show verified properties to tenants
    const verifiedProperties = properties.filter(p => p.status === 'Verified');

    const filtered = verifiedProperties.filter(p =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.city.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleApply = async (property) => {
        if (!user) {
            alert('Please login to apply for properties');
            navigate('/login');
            return;
        }

        const applicationData = {
            propertyId: property.id,
            property: property.name,
            location: property.location,
            price: property.rent,
            status: 'Pending',
            tenantId: user.id || 'tenant-1',
            tenantName: user.name,
            landlord: property.owner,
            verification_status: user.verified ? 'verified' : 'pending',
            rental_score: 85,
            payment_reliability: 95,
            completed_leases_count: 2,
            completion_percent: 100,
            joined_at: 'Jan 2024',
            rating: 4.8,
            image: property.image
        };

        const result = await addApplication(applicationData);
        if (result) {
            alert('Application submitted successfully!');
            navigate('/tenant/applications');
        } else {
            alert('Failed to submit application. Please try again.');
        }
    };

    return (
        <div className="max-w-7xl mx-auto space-y-12 pb-24">
            {/* Header & Search */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-50 text-teal-600 rounded-full text-xs font-black uppercase tracking-widest border border-teal-100/50">
                        <ShieldCheck className="w-4 h-4" />
                        Verified Network Inventory
                    </div>
                    <h1 className="text-5xl font-black text-gray-900 tracking-tight uppercase tracking-tighter">Listed Properties</h1>
                    <p className="text-gray-400 font-medium text-lg max-w-xl leading-relaxed">
                        Every listing in our network is audited for quality and security. Find your next high-performance home today.
                    </p>
                </div>
            </div>

            <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-teal-700 rounded-[2.5rem] blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-white p-6 rounded-[2.5rem] border border-gray-100 shadow-2xl flex flex-col md:flex-row gap-6 items-center">
                    <div className="relative flex-1 w-full">
                        <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search by city, neighborhood or building name..."
                            className="w-full pl-16 pr-8 py-5 bg-gray-50 border-none rounded-[1.5rem] font-bold text-gray-800 placeholder:text-gray-400 focus:ring-2 focus:ring-teal-500/10 transition-all text-lg"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <button className="w-full md:w-auto px-10 py-5 bg-gray-900 text-white rounded-[1.5rem] font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:bg-teal-600 transition-all shadow-xl">
                        <SlidersHorizontal className="w-4 h-4" />
                        Advanced Filters
                    </button>
                </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {filtered.map(property => (
                    <div key={property.id} className="group bg-white rounded-[3rem] border border-gray-100 shadow-xl shadow-gray-200/20 overflow-hidden hover:shadow-2xl hover:border-teal-100 transition-all duration-500 flex flex-col h-full">
                        <div className="h-72 overflow-hidden relative">
                            <img src={property.image} alt={property.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                            <div className="absolute top-6 left-6 flex flex-col gap-2">
                                <span className="px-4 py-2 bg-white/95 backdrop-blur-md rounded-xl text-[10px] font-black text-teal-600 uppercase tracking-widest border border-teal-100 shadow-lg">
                                    {property.category}
                                </span>
                                <span className="px-4 py-2 bg-gray-900/90 backdrop-blur-md rounded-xl text-[10px] font-black text-white uppercase tracking-widest border border-white/10 shadow-lg flex items-center gap-2">
                                    <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                                    4.8
                                </span>
                            </div>
                        </div>

                        <div className="p-10 flex-1 flex flex-col justify-between">
                            <div>
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="text-2xl font-black text-gray-900 uppercase tracking-tighter group-hover:text-teal-600 transition-colors">{property.name}</h3>
                                        <p className="text-gray-400 font-bold flex items-center gap-2 mt-2 text-xs uppercase tracking-widest">
                                            <MapPin className="w-4 h-4 text-teal-500" />
                                            {property.location}, {property.city}
                                        </p>
                                    </div>
                                    <p className="text-2xl font-black text-teal-600 uppercase tracking-tighter">KES {property.rent?.toLocaleString()}</p>
                                </div>

                                <div className="flex items-center gap-8 py-8 border-y border-gray-50 my-8">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-2xl bg-teal-50 flex items-center justify-center">
                                            <Bed className="w-5 h-5 text-teal-600" />
                                        </div>
                                        <div>
                                            <p className="text-[9px] font-black text-gray-300 uppercase tracking-widest">Bedrooms</p>
                                            <p className="text-sm font-black text-gray-700">{property.bedrooms || '2'}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-2xl bg-teal-50 flex items-center justify-center">
                                            <Bath className="w-5 h-5 text-teal-600" />
                                        </div>
                                        <div>
                                            <p className="text-[9px] font-black text-gray-300 uppercase tracking-widest">Bathrooms</p>
                                            <p className="text-sm font-black text-gray-700">{property.bathrooms || '2'}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <button className="flex-1 px-8 py-4 bg-gray-50 text-gray-400 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-teal-50 hover:text-teal-600 transition-all border border-transparent hover:border-teal-100">
                                    Quick View
                                </button>
                                <button
                                    onClick={() => handleApply(property)}
                                    className="flex-1 px-8 py-4 bg-teal-600 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-lg shadow-teal-100 hover:bg-teal-700 hover:-translate-y-1 transition-all flex items-center justify-center gap-2 group/btn"
                                >
                                    Reserve Asset
                                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}

                {filtered.length === 0 && (
                    <div className="col-span-full py-32 text-center bg-white rounded-[3rem] border border-dashed border-gray-200">
                        <Search className="w-16 h-16 text-gray-100 mx-auto mb-6" />
                        <h3 className="text-2xl font-black text-gray-900 uppercase tracking-tight">Supply Unavailable</h3>
                        <p className="text-gray-400 font-bold">No assets match your current search parameters. Try adjusting your filters.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BrowseProperties;

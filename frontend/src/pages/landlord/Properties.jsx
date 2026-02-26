import React, { useState } from 'react';
import { Building, MapPin, PlusCircle, Search, Filter, Home, Users, CreditCard, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import StatCard from '../../components/StatCard';
import { useProperties } from '../../context/PropertyContext';
import { useAuth } from '../../context/AuthContext';

const LandlordProperties = () => {
    const { properties } = useProperties();
    const { user } = useAuth();
    const [searchTerm, setSearchTerm] = useState('');

    // Filter properties to only show those belonging to the current landlord
    const myProperties = properties.filter(p => p.owner === (user?.name || 'Samuel Maina'));

    const filteredProperties = myProperties.filter(prop =>
        prop.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        prop.location.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="max-w-7xl mx-auto space-y-10 pb-20">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-4xl font-black text-gray-900 tracking-tight uppercase tracking-tight">Portfolio Analysis</h1>
                    <p className="text-gray-500 mt-2 font-medium">Manage your real estate assets and track unit performance in real-time.</p>
                </div>
                <Link to="/landlord/add-property" className="flex items-center gap-2 px-8 py-4 bg-teal-600 text-white rounded-2xl font-black hover:bg-teal-700 transition-all shadow-xl shadow-teal-100 hover:-translate-y-1 group uppercase tracking-widest text-xs">
                    <PlusCircle className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
                    List Asset
                </Link>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <StatCard title="Global Assets" value={myProperties.length.toString()} icon={Home} color="teal" />
                <StatCard title="Network Tenants" value="21" icon={Users} color="orange" />
                <StatCard title="Est. Revenue" value="KES 1.4M" icon={CreditCard} color="green" />
            </div>

            {/* toolbar */}
            <div className="bg-white p-5 rounded-[2rem] border border-gray-100 shadow-xl shadow-gray-100/50 flex flex-col md:flex-row gap-4 items-center">
                <div className="relative flex-1 w-full">
                    <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search assets by name or coordinates..."
                        className="w-full pl-14 pr-6 py-4 bg-gray-50 border-none rounded-2xl text-sm font-bold focus:ring-2 focus:ring-teal-500/10 transition-all"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            {/* Property List */}
            <div className="grid grid-cols-1 gap-8">
                {filteredProperties.length > 0 ? filteredProperties.map(property => (
                    <div
                        key={property.id}
                        className="group bg-white rounded-[3rem] border border-gray-100 shadow-xl shadow-gray-200/20 overflow-hidden hover:shadow-2xl hover:border-teal-100 transition-all duration-500 flex flex-col lg:flex-row"
                    >
                        <div className="lg:w-96 h-64 lg:h-auto overflow-hidden relative">
                            <img src={property.image} alt={property.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                            <div className="absolute top-6 left-6">
                                <span className={`px-6 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest backdrop-blur-md shadow-lg border ${property.status === 'Verified' ? 'bg-white/90 text-teal-600 border-teal-100' : 'bg-white/90 text-orange-600 border-orange-100'
                                    }`}>
                                    {property.status}
                                </span>
                            </div>
                        </div>

                        <div className="flex-1 p-10 flex flex-col justify-between">
                            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-10">
                                <div>
                                    <h3 className="text-3xl font-black text-gray-900 group-hover:text-teal-600 transition-colors uppercase tracking-tighter">{property.name}</h3>
                                    <p className="text-gray-400 font-bold flex items-center gap-2 mt-2 text-sm uppercase tracking-widest">
                                        <MapPin className="w-4 h-4 text-teal-500" />
                                        {property.location}, {property.city}
                                    </p>
                                </div>
                                <div className="flex items-center gap-6">
                                    <div className="text-right">
                                        <p className="text-[10px] font-black text-gray-300 uppercase tracking-widest mb-1">Financial Yield</p>
                                        <p className="text-3xl font-black text-teal-600">{property.revenue || 'KES 0'}</p>
                                    </div>
                                    <div className="p-3 bg-gray-50 rounded-2xl text-gray-300 group-hover:text-teal-500 group-hover:bg-teal-50 transition-all">
                                        <ChevronRight className="w-6 h-6" />
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 py-8 border-t border-gray-50">
                                <div>
                                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3">Asset Occupancy</p>
                                    <div className="flex items-center gap-4">
                                        <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-teal-500 rounded-full shadow-sm"
                                                style={{ width: property.occupancy }}
                                            />
                                        </div>
                                        <span className="text-xs font-black text-gray-700">{property.occupancy}</span>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Inventory Units</p>
                                    <p className="text-sm font-black text-gray-900">{property.units}</p>
                                </div>
                                <div>
                                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Listing Price</p>
                                    <p className="text-sm font-black text-teal-600 uppercase tracking-widest">KES {property.rent?.toLocaleString()}</p>
                                </div>
                                <div>
                                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Category</p>
                                    <p className="text-sm font-black text-gray-900 uppercase tracking-widest">{property.category}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )) : (
                    <div className="py-24 bg-white rounded-[3rem] border border-dashed border-gray-100 text-center">
                        <Home className="w-20 h-20 text-gray-100 mx-auto mb-6" />
                        <h3 className="text-2xl font-black text-gray-900 uppercase tracking-tight">No digital assets found</h3>
                        <p className="text-gray-400 font-bold mb-8">Start by listing your first property to the network.</p>
                        <Link to="/landlord/add-property" className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-2xl font-black hover:bg-teal-600 transition-all shadow-xl uppercase tracking-widest text-xs">
                            <PlusCircle className="w-4 h-4" />
                            Provision Initial Asset
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default LandlordProperties;

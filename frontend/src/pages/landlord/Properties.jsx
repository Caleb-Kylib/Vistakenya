import React, { useState } from 'react';
import { Building, MapPin, PlusCircle, Search, Filter, Home, Users, CreditCard, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import StatCard from '../../components/StatCard';

const LandlordProperties = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const [properties, setProperties] = useState([
        {
            id: 1,
            name: 'Sunset Apartments',
            location: 'Kilimani, Nairobi',
            units: 12,
            occupancy: '92%',
            revenue: 'KES 540k',
            image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=400&q=80',
            status: 'Verified',
            active_leases: 11,
            maintenance_requests: 2
        },
        {
            id: 2,
            name: 'Garden Estate Villas',
            location: 'Garden Estate',
            units: 4,
            occupancy: '100%',
            revenue: 'KES 320k',
            image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=400&q=80',
            status: 'Verified',
            active_leases: 4,
            maintenance_requests: 0
        },
        {
            id: 3,
            name: 'Lake View Residency',
            location: 'Kisumu',
            units: 8,
            occupancy: '75%',
            revenue: 'KES 240k',
            image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=400&q=80',
            status: 'Pending',
            active_leases: 6,
            maintenance_requests: 1
        },
    ]);

    const filteredProperties = properties.filter(prop =>
        prop.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        prop.location.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="max-w-7xl mx-auto space-y-10 pb-20">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-4xl font-black text-gray-900 tracking-tight">My Properties</h1>
                    <p className="text-gray-500 mt-2 font-medium">Manage your real estate portfolio and track unit performance.</p>
                </div>
                <Link to="/landlord/add-property" className="flex items-center gap-2 px-6 py-3.5 bg-teal-600 text-white rounded-2xl font-black hover:bg-teal-700 transition-all shadow-xl shadow-teal-100 hover:-translate-y-1 group">
                    <PlusCircle className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
                    List New Property
                </Link>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <StatCard title="Total Units" value="24" icon={Home} color="teal" />
                <StatCard title="Active Tenants" value="21" icon={Users} color="orange" />
                <StatCard title="Monthly Revenue" value="KES 1.1M" icon={CreditCard} color="green" />
            </div>

            {/* toolbar */}
            <div className="bg-white p-4 rounded-3xl border border-gray-100 shadow-sm flex flex-col md:flex-row gap-4 items-center">
                <div className="relative flex-1">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search portfolio..."
                        className="w-full pl-11 pr-4 py-3 bg-gray-50 border-none rounded-2xl text-sm font-bold focus:ring-2 focus:ring-teal-500/20 transition-all"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="flex items-center gap-2">
                    <button className="p-3 bg-gray-50 text-gray-500 rounded-2xl hover:bg-gray-100 transition-colors">
                        <Filter className="w-5 h-5" />
                    </button>
                </div>
            </div>

            {/* Property List */}
            <div className="grid grid-cols-1 gap-6">
                {filteredProperties.map(property => (
                    <Link
                        to={`/landlord/dashboard`} // Since there's no specific detail page yet, we link to dashboard or a placeholder
                        key={property.id}
                        className="group bg-white rounded-[2.5rem] border border-gray-100 shadow-xl shadow-gray-200/40 overflow-hidden hover:shadow-2xl hover:border-teal-100 transition-all duration-500 flex flex-col lg:flex-row"
                    >
                        <div className="lg:w-72 h-48 lg:h-auto overflow-hidden relative">
                            <img src={property.image} alt={property.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                            <div className="absolute top-4 left-4">
                                <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest backdrop-blur-md shadow-sm border ${property.status === 'Verified' ? 'bg-white/90 text-teal-600 border-teal-100' : 'bg-white/90 text-orange-600 border-orange-100'
                                    }`}>
                                    {property.status}
                                </span>
                            </div>
                        </div>

                        <div className="flex-1 p-8 flex flex-col justify-between">
                            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6">
                                <div>
                                    <h3 className="text-2xl font-black text-gray-900 group-hover:text-teal-600 transition-colors uppercase tracking-tight">{property.name}</h3>
                                    <p className="text-gray-500 font-bold flex items-center gap-1.5 mt-1 text-sm uppercase tracking-wide">
                                        <MapPin className="w-4 h-4 text-teal-500" />
                                        {property.location}
                                    </p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="text-right">
                                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Total Revenue</p>
                                        <p className="text-2xl font-black text-teal-600">{property.revenue}</p>
                                    </div>
                                    <ChevronRight className="w-6 h-6 text-gray-300 group-hover:text-teal-500 group-hover:translate-x-1 transition-all" />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 py-6 border-t border-gray-50">
                                <div>
                                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Occupancy</p>
                                    <div className="flex items-center gap-3">
                                        <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-teal-500 rounded-full"
                                                style={{ width: property.occupancy }}
                                            />
                                        </div>
                                        <span className="text-sm font-black text-gray-700">{property.occupancy}</span>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Total Units</p>
                                    <p className="text-sm font-black text-gray-700">{property.units}</p>
                                </div>
                                <div>
                                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Active Leases</p>
                                    <p className="text-sm font-black text-teal-600 font-black">{property.active_leases}</p>
                                </div>
                                <div>
                                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Issues</p>
                                    <p className={`text-sm font-black ${property.maintenance_requests > 0 ? 'text-orange-600' : 'text-gray-700'}`}>
                                        {property.maintenance_requests} Maintenance
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default LandlordProperties;

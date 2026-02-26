import React, { useState } from 'react';
import { Building, Users, Home, CreditCard, PlusCircle, MapPin } from 'lucide-react';
import StatCard from '../../components/StatCard';
import { Link } from 'react-router-dom';
import TenantTrustCard from '../../components/tenant/TenantTrustCard';

const LandlordDashboard = () => {
    // Mock data for landlord
    const [properties, setProperties] = useState([
        {
            id: 1,
            name: 'Sunset Apartments',
            location: 'Kilimani, Nairobi',
            units: 12,
            occupancy: '92%',
            revenue: 'KES 540k',
            image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=400&q=80',
            status: 'Verified'
        },
        {
            id: 2,
            name: 'Garden Estate Villas',
            location: 'Garden Estate',
            units: 4,
            occupancy: '100%',
            revenue: 'KES 320k',
            image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=400&q=80',
            status: 'Verified'
        },
        {
            id: 3,
            name: 'Lake View Residency',
            location: 'Kisumu',
            units: 8,
            occupancy: '75%',
            revenue: 'KES 240k',
            image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=400&q=80',
            status: 'Pending'
        },
    ]);

    const [applications, setApplications] = useState([
        {
            id: 201,
            tenant: 'Alice Wanjiku',
            property: 'Sunset Apartments',
            status: 'Pending',
            verification_status: 'verified',
            rental_score: 92,
            payment_reliability: 100,
            completed_leases_count: 3,
            completion_percent: 100,
            joined_date: 'Mar 2023'
        },
        {
            id: 202,
            tenant: 'John Doe',
            property: 'Lake View Residency',
            status: 'Pending',
            verification_status: 'pending',
            rental_score: 65,
            payment_reliability: 85,
            completed_leases_count: 1,
            completion_percent: 60,
            joined_date: 'Nov 2024'
        },
    ]);

    const recentLeases = [
        { id: "LSE-2024-001", tenant: "Alice Wanjiku", property: "Sunset Apartments", rent: "45,000", status: "Active" },
        { id: "LSE-2024-005", tenant: "John Doe", property: "Lake View Residency", rent: "24,000", status: "Pending" },
    ];

    const handleAccept = (app) => {
        setApplications(prev => prev.filter(item => item.id !== app.id));
        alert(`Application for ${app.tenant} accepted! Initializing digital lease...`);
    };

    const handleDecline = (app) => {
        setApplications(prev => prev.filter(item => item.id !== app.id));
        alert(`Application for ${app.tenant} declined.`);
    };

    return (
        <div className="max-w-7xl mx-auto space-y-10 pb-20">
            {/* Header with quick actions */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-4xl font-black text-gray-900 tracking-tight">Portfolio Overview</h1>
                    <p className="text-gray-500 mt-2 font-medium">
                        You have <span className="text-teal-600">{properties.length} properties</span> and <span className="text-orange-600">{applications.length} pending applications</span>.
                    </p>
                </div>
                <div className="flex items-center gap-3">
                    <Link to="/landlord/add-property" className="flex items-center gap-2 px-6 py-3.5 bg-teal-600 text-white rounded-2xl font-black hover:bg-teal-700 transition-all shadow-xl shadow-teal-100 hover:-translate-y-1 group">
                        <PlusCircle className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
                        Add New Property
                    </Link>
                </div>
            </div>

            {/* Performance Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard title="Total Properties" value={properties.length.toString()} icon={Building} color="teal" />
                <StatCard title="Total Leases" value="14" icon={Home} color="teal" trend="up" trendValue="8" />
                <StatCard title="Active Tenants" value="14" icon={Users} color="orange" />
                <StatCard title="Gross Revenue" value="KES 1.1M" icon={CreditCard} color="green" trend="up" trendValue="12" />
            </div>

            {/* Visual Property Manager */}
            <div className="space-y-6">
                <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-black text-gray-900 tracking-tight">My Properties</h2>
                    <Link to="/landlord/properties" className="text-sm font-bold text-teal-600 hover:text-teal-700 underline-offset-4 hover:underline">Manage All Properties</Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {properties.map(property => (
                        <Link to={`/landlord/properties`} key={property.id} className="group bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                            <div className="relative h-48 overflow-hidden">
                                <img src={property.image} alt={property.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                <div className="absolute top-4 right-4">
                                    <span className={`px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-sm border ${property.status === 'Verified' ? 'bg-white/90 text-teal-600 border-teal-100 backdrop-blur-md' : 'bg-white/90 text-orange-600 border-orange-100 backdrop-blur-md'
                                        }`}>
                                        {property.status}
                                    </span>
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="flex items-start justify-between mb-2">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-teal-600 transition-colors uppercase tracking-tight">{property.name}</h3>
                                        <p className="text-gray-500 text-sm flex items-center gap-1 mt-1 font-bold">
                                            <MapPin className="w-3 h-3 text-teal-500" />
                                            {property.location}
                                        </p>
                                    </div>
                                    <div className="text-right">
                                        <span className="text-teal-600 font-black text-lg">{property.revenue}</span>
                                        <p className="text-[10px] text-gray-400 font-bold uppercase">Monthly</p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-gray-50">
                                    <div>
                                        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Occupancy</p>
                                        <div className="flex items-center gap-2 mt-1">
                                            <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                                <div className="h-full bg-teal-500 rounded-full" style={{ width: property.occupancy }} />
                                            </div>
                                            <span className="text-xs font-black text-gray-700">{property.occupancy}</span>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Units</p>
                                        <p className="text-sm font-black text-gray-700 mt-1">{property.units} Total Units</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Applications Section */}
            <div className="space-y-6">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <h2 className="text-2xl font-black text-gray-900 tracking-tight">Pending Applications</h2>
                        <span className="bg-orange-600 text-white text-[10px] font-black px-2.5 py-1 rounded-full animate-pulse shadow-lg shadow-orange-100 uppercase tracking-widest">
                            {applications.length} Action Required
                        </span>
                    </div>
                    <Link to="/landlord/applications" className="text-sm font-bold text-teal-600 hover:text-teal-700 underline-offset-4 hover:underline">View All Applications</Link>
                </div>

                {applications.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                        {applications.map(app => (
                            <div key={app.id} className="space-y-3">
                                <div className="flex items-center justify-between px-2">
                                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest flex items-center gap-1.5">
                                        <Building className="w-3 h-3" />
                                        Applying for {app.property}
                                    </span>
                                    <span className={`text-[10px] font-black px-2 py-0.5 rounded-full ring-1 uppercase ${app.verification_status === 'verified' ? 'text-teal-600 bg-teal-50 ring-teal-100' : 'text-orange-600 bg-orange-50 ring-orange-100'
                                        }`}>
                                        {app.verification_status === 'verified' ? 'Trust Pass Verified' : 'Standard Identity'}
                                    </span>
                                </div>
                                <div className="animate-fadeInUp" style={{ animationDelay: `${app.id * 100}ms` }}>
                                    <TenantTrustCard
                                        tenant={app}
                                        variant="compact"
                                        onAccept={() => handleAccept(app)}
                                        onReject={() => handleDecline(app)}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="py-12 bg-white rounded-3xl border border-dashed border-gray-200 text-center">
                        <Users className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                        <p className="text-gray-500 font-bold">No pending applications at the moment.</p>
                        <Link to="/landlord/applications" className="text-teal-600 text-sm font-bold mt-2 block">Check History</Link>
                    </div>
                )}
            </div>

            {/* Recent Leases Section */}
            <div className="space-y-6">
                <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-black text-gray-900 tracking-tight">Recent Leases</h2>
                    <Link to="/landlord/leases" className="text-sm font-bold text-teal-600 hover:text-teal-700 underline-offset-4 hover:underline">View All Leases</Link>
                </div>

                <div className="bg-white rounded-[2rem] border border-gray-100 shadow-xl shadow-gray-200/40 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-gray-50/50 border-b border-gray-100">
                                <tr>
                                    <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-gray-400">Lease ID</th>
                                    <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-gray-400">Tenant</th>
                                    <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-gray-400">Property</th>
                                    <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-gray-400">Monthly Rent</th>
                                    <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-gray-400">Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50">
                                {recentLeases.map((lease) => (
                                    <tr key={lease.id} className="group hover:bg-teal-50/30 transition-colors cursor-pointer" onClick={() => window.location.href = `/landlord/leases`}>
                                        <td className="px-8 py-6 font-black text-teal-600 text-xs">{lease.id}</td>
                                        <td className="px-8 py-6 font-bold text-gray-900">{lease.tenant}</td>
                                        <td className="px-8 py-6 text-gray-500 font-medium">{lease.property}</td>
                                        <td className="px-8 py-6 font-black text-gray-900">KES {lease.rent}</td>
                                        <td className="px-8 py-6">
                                            <span className={`px-2 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest ${lease.status === 'Active' ? 'bg-teal-50 text-teal-700' : 'bg-orange-50 text-orange-700'
                                                }`}>
                                                {lease.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandlordDashboard;

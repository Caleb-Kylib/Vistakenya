import React from 'react';
import { Building, Users, Home, CreditCard, PlusCircle } from 'lucide-react';
import StatCard from '../../components/StatCard';
import Table from '../../components/Table';
import { Link } from 'react-router-dom';
import TenantTrustCard from '../../components/tenant/TenantTrustCard';

const LandlordDashboard = () => {
    // Mock data for landlord
    const properties = [
        { id: 1, name: 'Sunset Apartments', location: 'Kilimani, Nairobi', units: 12, occupancy: '90%', revenue: 'KES 540k' },
        { id: 2, name: 'Garden Estate Villas', location: 'Garden Estate', units: 4, occupancy: '100%', revenue: 'KES 320k' },
        { id: 3, name: 'Lake View Residency', location: 'Kisumu', units: 8, occupancy: '75%', revenue: 'KES 240k' },
    ];

    const applications = [
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
    ];

    const propertyColumns = [
        { header: 'Property Name', accessor: 'name' },
        { header: 'Location', accessor: 'location' },
        { header: 'Total Units', accessor: 'units' },
        { header: 'Occupancy', accessor: 'occupancy' },
        { header: 'Monthly Revenue', accessor: 'revenue' },
    ];

    return (
        <div className="max-w-7xl mx-auto space-y-8 pb-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-black text-gray-900 tracking-tight">Landlord Dashboard</h1>
                    <p className="text-gray-500 mt-1">Manage your properties and review tenant applications.</p>
                </div>
                <Link to="/landlord/add-property" className="flex items-center gap-2 px-5 py-2.5 bg-teal-600 text-white rounded-xl font-bold hover:bg-teal-700 transition-all shadow-sm">
                    <PlusCircle className="w-5 h-5" />
                    Add New Property
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <StatCard title="Total Properties" value="3" icon={Building} color="teal" />
                <StatCard title="Total Leases" value="14" icon={Home} color="teal" />
                <StatCard title="Total Tenants" value="14" icon={Users} color="orange" />
                <StatCard title="Monthly Revenue" value="KES 1.1M" icon={CreditCard} color="green" />
            </div>

            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold text-gray-900">My Properties</h2>
                    <Link to="/landlord/properties" className="text-sm font-bold text-teal-600 hover:underline">View All</Link>
                </div>
                <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                    <Table columns={propertyColumns} data={properties} />
                </div>
            </div>

            <div className="space-y-6">
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold text-gray-900">Pending Applications</h2>
                    <span className="bg-orange-100 text-orange-700 text-xs font-bold px-2 py-1 rounded-lg">2 New</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {applications.map(app => (
                        <div key={app.id} className="space-y-2">
                            <div className="flex items-center justify-between px-1">
                                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Applying for {app.property}</span>
                                <span className="text-[10px] font-bold text-teal-600 bg-teal-50 px-2 py-0.5 rounded-full ring-1 ring-teal-100">Live Identity</span>
                            </div>
                            <TenantTrustCard tenant={app} variant="compact" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LandlordDashboard;

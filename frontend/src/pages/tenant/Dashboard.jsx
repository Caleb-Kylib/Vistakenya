import React from 'react';
import { Search, Home, ClipboardList, CreditCard, ShieldCheck } from 'lucide-react';
import StatCard from '../../components/StatCard';
import Table from '../../components/Table';
import TenantTrustCard from '../../components/tenant/TenantTrustCard';
import { useAuth } from '../../context/AuthContext';

const TenantDashboard = () => {
    const { user } = useAuth();
    // Mock data for the dashboard
    const activeLeases = [
        { id: 1, property: 'Sunset Apartments, Unit 4B', landlord: 'Peter Kamau', rent: 'KES 45,000', status: 'Active', expiry: 'Dec 2026' },
    ];

    const paymentHistory = [
        { id: 101, date: 'Feb 01, 2026', property: 'Sunset Apartments', amount: 'KES 45,000', type: 'Rent', status: 'Completed' },
        { id: 102, date: 'Jan 01, 2026', property: 'Sunset Apartments', amount: 'KES 45,000', type: 'Rent', status: 'Completed' },
    ];

    const leaseColumns = [
        { header: 'Property', accessor: 'property' },
        { header: 'Landlord', accessor: 'landlord' },
        { header: 'Rent', accessor: 'rent' },
        { header: 'Expiry', accessor: 'expiry' },
        {
            header: 'Status',
            render: (row) => (
                <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">{row.status}</span>
            )
        },
    ];

    const paymentColumns = [
        { header: 'Date', accessor: 'date' },
        { header: 'Amount', accessor: 'amount' },
        { header: 'Type', accessor: 'type' },
        {
            header: 'Status',
            render: (row) => (
                <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">{row.status}</span>
            )
        },
    ];

    return (
        <div className="max-w-7xl mx-auto space-y-8 pb-10">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-black text-gray-900 tracking-tight">Dashboard</h1>
                    <p className="text-gray-500 mt-1">Manage your credibility and active rental portfolio.</p>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400 font-medium bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">
                    <ShieldCheck className="w-4 h-4 text-teal-600" />
                    <span>Last updated: {user?.verification_date || new Date().toLocaleDateString()}</span>
                </div>
            </div>

            {/* Section 1: Tenant Trust Profile Card */}
            <section className="animate-fadeInUp">
                <TenantTrustCard tenant={user} />
            </section>

            {/* Quick Stats & Secondary Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <StatCard title="Active Leases" value="1" icon={Home} color="teal" />
                <StatCard title="Applications" value="3" icon={ClipboardList} color="orange" />
                <StatCard title="Total Paid" value="KES 90k" icon={CreditCard} color="green" />
                <StatCard title="Pending" value="KES 0" icon={CreditCard} color="coral" />
            </div>

            {/* Tables Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                            <Home className="w-5 h-5 text-teal-600" />
                            Active Leases
                        </h2>
                    </div>
                    <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                        <Table columns={leaseColumns} data={activeLeases} />
                    </div>
                </div>

                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                            <CreditCard className="w-5 h-5 text-teal-600" />
                            Recent Payments
                        </h2>
                    </div>
                    <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                        <Table columns={paymentColumns} data={paymentHistory} />
                    </div>
                </div>
            </div>

            {/* Featured CTA Card */}
            <div className="group relative rounded-2xl p-8 bg-gradient-to-br from-teal-900 to-teal-800 text-white overflow-hidden shadow-lg border border-teal-700">
                <div className="relative z-10 w-full md:w-1/2">
                    <h2 className="text-2xl font-black mb-3">Upgrade Your Rental Game</h2>
                    <p className="text-teal-100/80 mb-6 leading-relaxed">Browse thousands of verified listings across Kenya with VisitaKenya's secure platform. Your TenantPass makes you 3x more likely to be picked by top landlords.</p>
                    <button className="flex items-center gap-2 px-6 py-3 bg-white text-teal-900 rounded-xl font-bold hover:bg-teal-50 transition-all shadow-sm group-hover:scale-105">
                        <Search className="w-5 h-5" />
                        Explore Properties
                    </button>
                </div>
                <div className="absolute top-0 right-0 h-full w-1/2 opacity-10 pointer-events-none transform translate-x-12 translate-y-8">
                    <Home size={280} className="group-hover:scale-110 transition-transform duration-1000" />
                </div>
                <div className="absolute -left-12 -bottom-12 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl p-6" />
            </div>
        </div>
    );
};

export default TenantDashboard;

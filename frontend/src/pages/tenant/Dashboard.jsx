import React from 'react';
import { Search, Home, ClipboardList, CreditCard, ShieldCheck } from 'lucide-react';
import StatCard from '../../components/StatCard';
import Table from '../../components/Table';

const TenantDashboard = () => {
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
                <span className="badge bg-green-100 text-green-800">{row.status}</span>
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
                <span className="badge bg-green-100 text-green-800">{row.status}</span>
            )
        },
    ];

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold text-gray-900">Tenant Dashboard</h1>
                <div className="flex items-center space-x-2 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium border border-blue-100">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Verified Tenant</span>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <StatCard title="Active Leases" value="1" icon={Home} color="blue" />
                <StatCard title="Applications" value="3" icon={ClipboardList} color="orange" />
                <StatCard title="Total Paid" value="KES 90k" icon={CreditCard} color="green" />
                <StatCard title="Pending" value="KES 0" icon={CreditCard} color="red" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <h2 className="text-lg font-semibold text-gray-900">My Active Leases</h2>
                    </div>
                    <Table columns={leaseColumns} data={activeLeases} />
                </div>

                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <h2 className="text-lg font-semibold text-gray-900">Recent Payments</h2>
                    </div>
                    <Table columns={paymentColumns} data={paymentHistory} />
                </div>
            </div>

            <div className="card p-6 bg-primary-900 text-white relative overflow-hidden">
                <div className="relative z-10 w-full md:w-2/3">
                    <h2 className="text-xl font-bold mb-2">Find Your Next Home</h2>
                    <p className="text-primary-100 mb-4">Browse thousands of verified listings across Kenya with VisitaKenya's secure platform.</p>
                    <button className="btn bg-white text-primary-900 hover:bg-primary-50">
                        <Search className="w-4 h-4 mr-2" />
                        Start Browsing
                    </button>
                </div>
                <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none transform translate-x-1/4 translate-y-1/4">
                    <Home size={300} />
                </div>
            </div>
        </div>
    );
};

export default TenantDashboard;

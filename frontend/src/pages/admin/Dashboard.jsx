import React from 'react';
import { Users, Building, ShieldCheck, BarChart3, Clock } from 'lucide-react';
import StatCard from '../../components/StatCard';
import Table from '../../components/Table';

const AdminDashboard = () => {
    // Mock data for admin
    const pendingApprovals = [
        { id: 401, name: 'Samuel Maina', type: 'Landlord', date: 'Feb 24, 2026', status: 'Pending Approval' },
        { id: 402, name: 'Sarah Atieno', type: 'Tenant', date: 'Feb 25, 2026', status: 'Pending Verification' },
        { id: 403, name: 'Global Real Estate Ltd', type: 'Landlord', date: 'Feb 25, 2026', status: 'Pending Approval' },
    ];

    const recentProperties = [
        { id: 501, name: 'Skyline Suites', owner: 'Samuel Maina', location: 'Nairobi', status: 'Active' },
        { id: 502, name: 'Rift Valley Heights', owner: 'Mary Chemutai', location: 'Nakuru', status: 'Pending' },
    ];

    const approvalColumns = [
        { header: 'User Name', accessor: 'name' },
        { header: 'User Type', accessor: 'type' },
        { header: 'Request Date', accessor: 'date' },
        {
            header: 'Status',
            render: (row) => (
                <span className="badge bg-yellow-100 text-yellow-800">{row.status}</span>
            )
        },
        {
            header: 'Action',
            render: () => (
                <div className="flex space-x-2">
                    <button className="text-xs font-semibold text-green-600 hover:text-green-800">Approve</button>
                    <button className="text-xs font-semibold text-red-600 hover:text-red-800">Reject</button>
                </div>
            )
        },
    ];

    const propertyColumns = [
        { header: 'Property', accessor: 'name' },
        { header: 'Owner', accessor: 'owner' },
        { header: 'Location', accessor: 'location' },
        {
            header: 'System Status',
            render: (row) => (
                <span className={`badge ${row.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                    {row.status}
                </span>
            )
        },
    ];

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold text-gray-900">Super Admin Dashboard</h1>
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span>Last updated: just now</span>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <StatCard title="Total Users" value="1,240" icon={Users} color="blue" />
                <StatCard title="Total Properties" value="450" icon={Building} color="purple" />
                <StatCard title="Total Leases" value="890" icon={ShieldCheck} color="green" />
                <StatCard title="System Reports" value="12" icon={BarChart3} color="red" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-4">
                    <h2 className="text-lg font-semibold text-gray-900">Verification Requests</h2>
                    <Table columns={approvalColumns} data={pendingApprovals} />
                </div>

                <div className="space-y-4">
                    <h2 className="text-lg font-semibold text-gray-900">Recent Listings</h2>
                    <Table columns={propertyColumns} data={recentProperties} />
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;

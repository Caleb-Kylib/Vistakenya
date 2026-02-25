import React from 'react';
import { Building, Users, Home, CreditCard, PlusCircle } from 'lucide-react';
import StatCard from '../../components/StatCard';
import Table from '../../components/Table';
import { Link } from 'react-router-dom';

const LandlordDashboard = () => {
    // Mock data for landlord
    const properties = [
        { id: 1, name: 'Sunset Apartments', location: 'Kilimani, Nairobi', units: 12, occupancy: '90%', revenue: 'KES 540k' },
        { id: 2, name: 'Garden Estate Villas', location: 'Garden Estate', units: 4, occupancy: '100%', revenue: 'KES 320k' },
        { id: 3, name: 'Lake View Residency', location: 'Kisumu', units: 8, occupancy: '75%', revenue: 'KES 240k' },
    ];

    const applications = [
        { id: 201, tenant: 'Alice Wanjiku', property: 'Sunset Apartments', status: 'Pending', verification: 'Verified' },
        { id: 202, tenant: 'John Doe', property: 'Lake View Residency', status: 'Pending', verification: 'Unverified' },
    ];

    const propertyColumns = [
        { header: 'Property Name', accessor: 'name' },
        { header: 'Location', accessor: 'location' },
        { header: 'Total Units', accessor: 'units' },
        { header: 'Occupancy', accessor: 'occupancy' },
        { header: 'Monthly Revenue', accessor: 'revenue' },
    ];

    const applicationColumns = [
        { header: 'Applicant', accessor: 'tenant' },
        { header: 'Target Property', accessor: 'property' },
        {
            header: 'ID Verification',
            render: (row) => (
                <span className={`badge ${row.verification === 'Verified' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'}`}>
                    {row.verification}
                </span>
            )
        },
        {
            header: 'Action',
            render: () => (
                <div className="flex space-x-2">
                    <button className="text-xs font-semibold text-primary-600 hover:text-primary-800">Review</button>
                    <button className="text-xs font-semibold text-green-600 hover:text-green-800">Accept</button>
                    <button className="text-xs font-semibold text-red-600 hover:text-red-800">Reject</button>
                </div>
            )
        },
    ];

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold text-gray-900">Landlord Dashboard</h1>
                <Link to="/landlord/add-property" className="btn btn-primary">
                    <PlusCircle className="w-4 h-4 mr-2" />
                    Add New Property
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <StatCard title="Total Properties" value="3" icon={Building} color="blue" />
                <StatCard title="Total Leases" value="14" icon={Home} color="purple" />
                <StatCard title="Total Tenants" value="14" icon={Users} color="orange" />
                <StatCard title="Monthly Revenue" value="KES 1.1M" icon={CreditCard} color="green" />
            </div>

            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <h2 className="text-lg font-semibold text-gray-900">My Properties</h2>
                    <Link to="/landlord/properties" className="text-sm font-medium text-primary-600 hover:underline">View All</Link>
                </div>
                <Table columns={propertyColumns} data={properties} />
            </div>

            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <h2 className="text-lg font-semibold text-gray-900">Pending Applications</h2>
                </div>
                <Table columns={applicationColumns} data={applications} />
            </div>
        </div>
    );
};

export default LandlordDashboard;

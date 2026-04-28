import React, { useMemo, useState } from 'react';
import { Building2, Percent, Wallet, ClipboardCheck } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import AnalyticsCards from '../../components/landlord/dashboard/AnalyticsCards';
import PropertyCard from '../../components/landlord/dashboard/PropertyCard';
import TenantTable from '../../components/landlord/dashboard/TenantTable';
import ApplicationList from '../../components/landlord/dashboard/ApplicationList';
import PaymentTracker from '../../components/landlord/dashboard/PaymentTracker';
import CoLivingManager from '../../components/landlord/dashboard/CoLivingManager';

const propertySeed = [
    {
        id: 'prop-1',
        name: 'Rongai Student Court',
        location: 'Ongata Rongai',
        type: 'Bedsitter',
        price: 12000,
        status: 'Occupied',
        units: 16,
        occupiedUnits: 14,
        coLiving: true,
        slots: { occupied: 28, total: 32 },
        image: 'https://images.unsplash.com/photo-1460317442991-0ec209397118?w=900&h=600&fit=crop'
    },
    {
        id: 'prop-2',
        name: 'Juja Urban Studios',
        location: 'Juja',
        type: 'Studio',
        price: 15000,
        status: 'Shared',
        units: 10,
        occupiedUnits: 8,
        coLiving: true,
        slots: { occupied: 14, total: 20 },
        image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?w=900&h=600&fit=crop'
    },
    {
        id: 'prop-3',
        name: 'Kasarani Smart Homes',
        location: 'Kasarani',
        type: '1 Bedroom',
        price: 18000,
        status: 'Available',
        units: 8,
        occupiedUnits: 5,
        coLiving: false,
        slots: { occupied: 5, total: 8 },
        image: 'https://images.unsplash.com/photo-1560185007-5f0bb1866cab?w=900&h=600&fit=crop'
    }
];

const applicationSeed = [
    { id: 'APP-1001', tenantName: 'Kevin Mutiso', budget: 'KES 8,000 - 12,000', preferredLocation: 'Rongai', property: 'Rongai Student Court', status: 'Pending' },
    { id: 'APP-1002', tenantName: 'Faith Njeri', budget: 'KES 13,000 - 16,000', preferredLocation: 'Juja', property: 'Juja Urban Studios', status: 'Approved' },
    { id: 'APP-1003', tenantName: 'Brian Otieno', budget: 'KES 10,000 - 14,000', preferredLocation: 'Madaraka', property: 'Kasarani Smart Homes', status: 'Rejected' }
];

const tenantSeed = [
    { id: 'T-1', name: 'Caleb Mwangi', unit: 'Room A', property: 'Rongai Student Court', occupancy: '2/3', status: 'Active' },
    { id: 'T-2', name: 'Sharon Wamboi', unit: 'Room B', property: 'Juja Urban Studios', occupancy: '1/2', status: 'Pending Roommate' },
    { id: 'T-3', name: 'Dennis Kiptoo', unit: 'Studio 4', property: 'Kasarani Smart Homes', occupancy: '1/1', status: 'Active' }
];

const paymentSeed = {
    summary: { paid: 212000, due: 46000, overdue: 18000 },
    records: [
        { id: 'PMT-1', tenant: 'Caleb Mwangi', property: 'Rongai Student Court', plan: 'Weekly', paid: 9000, expected: 12000, status: 'Partial' },
        { id: 'PMT-2', tenant: 'Sharon Wamboi', property: 'Juja Urban Studios', plan: 'Monthly', paid: 15000, expected: 15000, status: 'Paid' },
        { id: 'PMT-3', tenant: 'Dennis Kiptoo', property: 'Kasarani Smart Homes', plan: 'Monthly', paid: 0, expected: 18000, status: 'Overdue' }
    ]
};

const LandlordDashboard = () => {
    const { user } = useAuth();
    const [properties, setProperties] = useState(propertySeed);
    const [applications, setApplications] = useState(applicationSeed);
    const [tenants] = useState(tenantSeed);
    const [payments] = useState(paymentSeed);

    const occupancyRate = useMemo(() => {
        const totalUnits = properties.reduce((sum, p) => sum + p.units, 0);
        const occupiedUnits = properties.reduce((sum, p) => sum + p.occupiedUnits, 0);
        if (!totalUnits) return 0;
        return Math.round((occupiedUnits / totalUnits) * 100);
    }, [properties]);

    const monthlyIncome = payments.summary.paid;
    const pendingApplications = applications.filter((a) => a.status === 'Pending').length;

    const topCards = [
        { title: 'Total Properties', value: properties.length, icon: Building2 },
        { title: 'Occupancy Rate', value: `${occupancyRate}%`, icon: Percent },
        { title: 'Monthly Income', value: `KES ${monthlyIncome.toLocaleString()}`, icon: Wallet },
        { title: 'Pending Applications', value: pendingApplications, icon: ClipboardCheck }
    ];

    const handlePropertyAction = (propertyId, action) => {
        setProperties((prev) =>
            prev.map((property) => {
                if (property.id !== propertyId) return property;
                if (action === 'toggle-availability') {
                    return { ...property, status: property.status === 'Available' ? 'Occupied' : 'Available' };
                }
                return property;
            })
        );
    };

    const handleApplicationAction = (applicationId, nextStatus) => {
        setApplications((prev) =>
            prev.map((application) =>
                application.id === applicationId ? { ...application, status: nextStatus } : application
            )
        );
    };

    return (
        <div className="max-w-7xl mx-auto space-y-8 pb-20">
            <section className="rounded-3xl border border-white/40 bg-gradient-to-r from-teal-50 via-white to-cyan-50 shadow-sm p-6 md:p-8">
                <div className="flex items-center justify-between gap-4 flex-wrap">
                    <div>
                        <h1 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight">
                            Welcome back, {user?.name || 'Mr. Kimani'}
                        </h1>
                        <p className="text-gray-600 mt-2">
                            Manage verified student housing units and fill vacancies faster.
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mt-6">
                    <AnalyticsCards cards={topCards} />
                </div>
            </section>

            <section className="space-y-4">
                <h2 className="text-xl font-black text-gray-900">My Properties</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                    {properties.map((property) => (
                        <PropertyCard
                            key={property.id}
                            property={property}
                            onEdit={() => {}}
                            onAddMedia={() => {}}
                            onToggleAvailability={() => handlePropertyAction(property.id, 'toggle-availability')}
                        />
                    ))}
                </div>
            </section>

            <section className="grid grid-cols-1 xl:grid-cols-5 gap-6">
                <div className="xl:col-span-3">
                    <CoLivingManager
                        properties={properties.filter((p) => p.coLiving)}
                        onApproveRoommate={(unitName) => unitName}
                        onAssignTenant={(unitName) => unitName}
                    />
                </div>
                <div className="xl:col-span-2">
                    <TenantTable tenants={tenants} />
                </div>
            </section>

            <section className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                <ApplicationList
                    applications={applications}
                    onApprove={(id) => handleApplicationAction(id, 'Approved')}
                    onReject={(id) => handleApplicationAction(id, 'Rejected')}
                    onRequestInfo={(id) => handleApplicationAction(id, 'Pending')}
                />
                <PaymentTracker payments={payments} />
            </section>

            <section>
                <h2 className="text-xl font-black text-gray-900 mb-4">Insights & Analytics</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                    <AnalyticsCards
                        cards={[
                            { title: 'Most Demanded Area', value: 'Rongai', hint: 'Juja is second' },
                            { title: 'Most Rented Type', value: 'Bedsitter', hint: '64% of new leases' },
                            { title: 'Occupancy Trend', value: '+11%', hint: 'vs last month' },
                            { title: 'Average Rent', value: 'KES 13,800', hint: 'within student budget' }
                        ]}
                    />
                </div>
            </section>
        </div>
    );
};

export default LandlordDashboard;

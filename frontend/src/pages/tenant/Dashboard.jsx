import React, { useMemo, useState } from 'react';
import { Home, FileClock, CreditCard, Users, Building2, Bookmark, Wallet, BellRing } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useProperties } from '../../context/PropertyContext';
import { useApplications } from '../../context/ApplicationContext';
import DashboardHeader from '../../components/tenant/dashboard/DashboardHeader';
import StatCard from '../../components/tenant/dashboard/StatCard';
import HousingCard from '../../components/tenant/dashboard/HousingCard';
import PropertyCard from '../../components/tenant/dashboard/PropertyCard';
import CoLivingCard from '../../components/tenant/dashboard/CoLivingCard';
import PaymentCard from '../../components/tenant/dashboard/PaymentCard';
import ApplicationTimeline from '../../components/tenant/dashboard/ApplicationTimeline';

const DEFAULT_FILTERS = {
    location: 'All',
    maxBudget: 18000,
    type: 'All'
};

const TenantDashboard = () => {
    const { user } = useAuth();
    const { properties } = useProperties();
    const { applications } = useApplications();
    const [filters, setFilters] = useState(DEFAULT_FILTERS);
    const [smsReminders, setSmsReminders] = useState(true);

    const tenantApplications = useMemo(
        () => applications.filter((app) => app.tenantId === user?.id || app.tenantName === user?.name),
        [applications, user]
    );

    const activeLease = null;

    const curatedProperties = useMemo(() => {
        const verified = properties.filter((property) => property.status === 'Verified');
        const mapped = verified.map((property, index) => ({
            id: property.id,
            name: property.name,
            image: property.image,
            price: Number(property.rent || 0),
            location: property.location,
            city: property.city,
            type: property.category || (property.bedrooms >= 2 ? '2 Bedroom' : 'Bedsitter'),
            amenities: [property.bedrooms ? `${property.bedrooms} Bed` : 'Bedsitter', property.bathrooms ? `${property.bathrooms} Bath` : 'Shared Bath', 'WiFi Ready'],
            nearCampus: index % 2 === 0,
            campus: ['Near KU Main Campus', 'Near Strathmore Madaraka', 'Near JKUAT Juja', 'Near TUK Nairobi CBD'][index % 4]
        }));

        if (mapped.length) return mapped;

        return [
            {
                id: 'demo-1',
                name: 'Rongai Student Studios',
                image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=900&h=600&fit=crop',
                price: 12000,
                location: 'Ongata Rongai',
                city: 'Kajiado',
                type: 'Studio',
                amenities: ['WiFi', 'Water Included', '24/7 Security'],
                nearCampus: true,
                campus: 'Near Multimedia University'
            },
            {
                id: 'demo-2',
                name: 'Juja Shared Flats',
                image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=900&h=600&fit=crop',
                price: 16000,
                location: 'Juja',
                city: 'Kiambu',
                type: '1 Bedroom',
                amenities: ['Balcony', 'Token Power', 'Fiber Ready'],
                nearCampus: true,
                campus: 'Near JKUAT Juja'
            },
            {
                id: 'demo-3',
                name: 'Madaraka Co-Living Rooms',
                image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=900&h=600&fit=crop',
                price: 15000,
                location: 'Madaraka',
                city: 'Nairobi',
                type: 'Bedsitter',
                amenities: ['Gated Compound', 'Study Lounge', 'Laundry'],
                nearCampus: true,
                campus: 'Near Strathmore University'
            }
        ];
    }, [properties]);

    const savedListings = curatedProperties.slice(0, 2);

    const discoverProperties = curatedProperties.filter((property) => {
        const locationMatch = filters.location === 'All' || property.location === filters.location;
        const budgetMatch = property.price <= filters.maxBudget;
        const typeMatch = filters.type === 'All' || property.type === filters.type;
        return locationMatch && budgetMatch && typeMatch;
    });

    const applicationCounts = {
        pending: tenantApplications.filter((app) => app.status === 'Pending').length,
        approved: tenantApplications.filter((app) => ['Approved', 'Accepted'].includes(app.status)).length,
        rejected: tenantApplications.filter((app) => ['Declined', 'Rejected'].includes(app.status)).length
    };

    const overviewStats = [
        {
            title: 'Saved Listings',
            value: savedListings.length,
            subtitle: 'Properties bookmarked',
            icon: Home
        },
        {
            title: 'Applications',
            value: `${applicationCounts.pending} pending / ${applicationCounts.approved} approved`,
            subtitle: `${tenantApplications.length} total submitted`,
            icon: FileClock
        },
        {
            title: 'Rent Status',
            value: activeLease ? 'Due in 3 days' : 'No active rent',
            subtitle: activeLease ? 'KES 15,000 monthly' : 'Apply to a listing first',
            icon: CreditCard
        },
        {
            title: 'Co-living',
            value: 'Sharing with 1 roommate',
            subtitle: '1 slot left',
            icon: Users
        }
    ];

    const paymentData = {
        upcoming: { dueDate: '05 Mar 2026', amount: 15000, status: activeLease ? 'Due' : 'Not Started' },
        history: [
            { id: 'TX-001', date: '01 Feb 2026', amount: 15000, method: 'M-Pesa', status: 'Paid' },
            { id: 'TX-002', date: '05 Jan 2026', amount: 12000, method: 'M-Pesa', status: 'Paid' }
        ]
    };

    return (
        <div className="max-w-7xl mx-auto space-y-8 pb-16">
            <DashboardHeader user={user} activeLease={activeLease} />

            <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                {overviewStats.map((card) => (
                    <StatCard key={card.title} {...card} />
                ))}
            </section>

            <section className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                <div className="xl:col-span-2">
                    <HousingCard lease={activeLease} />
                </div>
                <CoLivingCard
                    title="Co-Living Hub"
                    label="Looking for roommate"
                    availableSlots={1}
                    rentSplit={7500}
                />
            </section>

            <section className="rounded-3xl border border-white/40 bg-white/80 backdrop-blur-sm shadow-sm p-6 space-y-5">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                    <h2 className="text-xl font-black text-gray-900 flex items-center gap-2">
                        <Building2 className="w-5 h-5 text-teal-600" />
                        Discover Houses
                    </h2>
                    <div className="flex flex-wrap gap-2">
                        <select
                            value={filters.location}
                            onChange={(e) => setFilters((prev) => ({ ...prev, location: e.target.value }))}
                            className="px-3 py-2 rounded-xl border border-gray-200 bg-white text-sm font-medium text-gray-700"
                        >
                            <option value="All">All Locations</option>
                            <option value="Ongata Rongai">Ongata Rongai</option>
                            <option value="Kasarani">Kasarani</option>
                            <option value="Madaraka">Madaraka</option>
                            <option value="Juja">Juja</option>
                        </select>

                        <select
                            value={filters.maxBudget}
                            onChange={(e) => setFilters((prev) => ({ ...prev, maxBudget: Number(e.target.value) }))}
                            className="px-3 py-2 rounded-xl border border-gray-200 bg-white text-sm font-medium text-gray-700"
                        >
                            <option value={18000}>Up to KES 18,000</option>
                            <option value={15000}>Up to KES 15,000</option>
                            <option value={12000}>Up to KES 12,000</option>
                            <option value={8000}>Up to KES 8,000</option>
                        </select>

                        <select
                            value={filters.type}
                            onChange={(e) => setFilters((prev) => ({ ...prev, type: e.target.value }))}
                            className="px-3 py-2 rounded-xl border border-gray-200 bg-white text-sm font-medium text-gray-700"
                        >
                            <option value="All">All Types</option>
                            <option value="Bedsitter">Bedsitter</option>
                            <option value="Studio">Studio</option>
                            <option value="1 Bedroom">1 Bedroom</option>
                            <option value="2 Bedroom">2 Bedroom</option>
                        </select>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                    {discoverProperties.map((property) => (
                        <PropertyCard key={property.id} property={property} />
                    ))}
                </div>
            </section>

            <section className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                <PaymentCard
                    icon={Wallet}
                    paymentData={paymentData}
                    smsReminders={smsReminders}
                    onToggleSms={() => setSmsReminders((prev) => !prev)}
                />
                <ApplicationTimeline
                    icon={BellRing}
                    applications={tenantApplications}
                    emptyMessage="No applications yet. Start with Discover Houses."
                />
            </section>

            <section className="rounded-3xl border border-white/40 bg-white/80 backdrop-blur-sm shadow-sm p-6">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-black text-gray-900 flex items-center gap-2">
                        <Bookmark className="w-5 h-5 text-teal-600" />
                        Saved Listings
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {savedListings.map((property) => (
                        <PropertyCard key={`saved-${property.id}`} property={property} compact />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default TenantDashboard;

import React from 'react';
import { FileText, Building, Users, CreditCard, ChevronRight, Calendar, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import StatCard from '../../components/StatCard';
import LeaseStatusBadge from '../../components/leases/LeaseStatusBadge';

const LandlordLeases = () => {
    // Mock data for landlord's leases
    const activeLeases = [
        {
            id: "LSE-2024-001",
            tenant: { name: "Alice Wanjiku", photo: null },
            property: "Sunset Apartments, Unit 4B",
            rent: 45000,
            status: "Active",
            expiry: "Dec 2024",
            reliability: 100
        },
        {
            id: "LSE-2024-005",
            tenant: { name: "John Doe", photo: null },
            property: "Lake View Residency, Studio 2",
            rent: 24000,
            status: "Pending",
            expiry: "Jan 2025",
            reliability: 85
        },
        {
            id: "LSE-2023-014",
            tenant: { name: "Grace Njoki", photo: null },
            property: "Garden Estate Villas, No. 12",
            rent: 85000,
            status: "Active",
            expiry: "Aug 2024",
            reliability: 98
        }
    ];

    return (
        <div className="max-w-7xl mx-auto space-y-10 pb-20">
            {/* Header */}
            <div>
                <h1 className="text-4xl font-black text-gray-900 tracking-tight">Lease Management</h1>
                <p className="text-gray-500 mt-2 font-medium">Manage and track your digital tenancy agreements across all properties.</p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <StatCard title="Total Active Leases" value="12" icon={Building} color="teal" />
                <StatCard title="Draft Agreements" value="3" icon={FileText} color="orange" />
                <StatCard title="Expiring Soon" value="2" icon={Calendar} color="coral" />
            </div>

            {/* Lease Management List */}
            <div className="space-y-6">
                <div className="flex items-center justify-between transition-all">
                    <h2 className="text-2xl font-black text-gray-900 tracking-tight uppercase tracking-widest text-xs opacity-40">All Agreements</h2>
                </div>

                <div className="bg-white rounded-[2rem] border border-gray-100 shadow-xl shadow-gray-200/40 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-gray-50/50 border-b border-gray-100">
                                <tr>
                                    <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-gray-400">ID / Property</th>
                                    <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-gray-400">Tenant</th>
                                    <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-gray-400">Status</th>
                                    <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-gray-400">Rent (KES)</th>
                                    <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-gray-400 text-right">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50">
                                {activeLeases.map((lease) => (
                                    <tr key={lease.id} className="group hover:bg-teal-50/30 transition-colors">
                                        <td className="px-8 py-6">
                                            <div>
                                                <p className="text-[10px] font-black text-teal-600 mb-0.5">{lease.id}</p>
                                                <p className="font-bold text-gray-900">{lease.property}</p>
                                            </div>
                                        </td>
                                        <td className="px-8 py-6">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                                                    <Users className="w-4 h-4 text-gray-400" />
                                                </div>
                                                <span className="font-bold text-gray-700">{lease.tenant.name}</span>
                                            </div>
                                        </td>
                                        <td className="px-8 py-6">
                                            <LeaseStatusBadge status={lease.status} />
                                        </td>
                                        <td className="px-8 py-6">
                                            <p className="font-black text-gray-900">{lease.rent.toLocaleString()}</p>
                                        </td>
                                        <td className="px-8 py-6 text-right">
                                            <Link
                                                to={`/tenant/leases/${lease.id}`}
                                                className="inline-flex items-center gap-1.5 px-4 py-2 bg-white rounded-xl border border-gray-200 font-bold text-xs text-gray-600 hover:border-teal-400 hover:text-teal-600 transition-all shadow-sm group-hover:shadow-md"
                                            >
                                                View
                                                <ExternalLink className="w-3.5 h-3.5" />
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Footer Tip */}
            <div className="p-8 bg-orange-50 rounded-3xl border border-orange-100 flex items-start gap-4">
                <div className="p-3 bg-white rounded-2xl shadow-sm">
                    <CreditCard className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                    <h4 className="text-sm font-black text-orange-900 uppercase tracking-widest mb-1 leading-tight">Landlord Insight</h4>
                    <p className="text-xs text-orange-800 font-medium leading-relaxed max-w-2xl">
                        Digital lease agreements via Vistakenya are legally enforceable. Payments recorded here automatically contribute to the tenant's global Rental Score, encouraging on-time payments and reducing default risks.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LandlordLeases;

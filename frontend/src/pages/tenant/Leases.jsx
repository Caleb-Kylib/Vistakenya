import React from 'react';
import { FileText, PlusCircle, Search, Calendar, DollarSign, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import LeaseStatusBadge from '../../components/leases/LeaseStatusBadge';

const TenantLeases = () => {
    const leases = [
        {
            id: "LSE-2024-001",
            propertyName: "Sunset Apartments, Unit 4B",
            landlord: "Alice Wanjiku",
            rent: 45000,
            status: "Active",
            startDate: "Jan 1, 2024",
            expiryDate: "Dec 31, 2024",
        },
        {
            id: "LSE-2023-014",
            propertyName: "Garden Estate Villas, No. 12",
            landlord: "Caleb Maina",
            rent: 85000,
            status: "Expired",
            startDate: "Jan 1, 2023",
            expiryDate: "Dec 31, 2023",
        }
    ];

    return (
        <div className="max-w-7xl mx-auto space-y-10 pb-20">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-4xl font-black text-gray-900 tracking-tight">My Lease Agreements</h1>
                    <p className="text-gray-500 mt-2 font-medium italic">Secure your housing history to improve your <span className="text-teal-600 font-bold">Rental Score</span>.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {leases.map(lease => (
                    <div key={lease.id} className="group bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden">
                        <div className="p-8">
                            <div className="flex items-center justify-between mb-6">
                                <div className="p-3 bg-teal-50 rounded-2xl">
                                    <FileText className="w-6 h-6 text-teal-600" />
                                </div>
                                <LeaseStatusBadge status={lease.status} />
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <h3 className="text-xl font-black text-gray-900 leading-tight">{lease.propertyName}</h3>
                                    <p className="text-sm text-gray-500 font-medium mt-1">Managed by {lease.landlord}</p>
                                </div>

                                <div className="grid grid-cols-2 gap-4 py-6 border-y border-gray-50">
                                    <div className="space-y-1">
                                        <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest">Start Date</p>
                                        <div className="flex items-center gap-2 text-sm font-bold text-gray-700">
                                            <Calendar className="w-4 h-4 text-gray-400" />
                                            {lease.startDate}
                                        </div>
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest">Monthly Rent</p>
                                        <div className="flex items-center gap-1 text-sm font-bold text-teal-600">
                                            KES {lease.rent.toLocaleString()}
                                        </div>
                                    </div>
                                </div>

                                <Link
                                    to={`/tenant/leases/${lease.id}`}
                                    className="flex items-center justify-center gap-2 w-full py-4 bg-gray-900 text-white rounded-2xl font-black text-sm hover:bg-teal-600 transition-all group-hover:-translate-y-1"
                                >
                                    View Full Agreement
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}

                {/* Placeholder for "Apply for New" */}
                <div className="bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200 p-8 flex flex-col items-center justify-center text-center space-y-4">
                    <div className="p-4 bg-white rounded-full shadow-sm">
                        <PlusCircle className="w-8 h-8 text-gray-300" />
                    </div>
                    <div>
                        <h3 className="text-lg font-black text-gray-900 uppercase">Apply for New Property</h3>
                        <p className="text-sm text-gray-500 font-medium px-10">Start a new application to generate a secure digital lease.</p>
                    </div>
                    <Link to="/tenant/browse" className="text-teal-600 font-black text-sm uppercase tracking-widest hover:underline underline-offset-4">Browse Listings</Link>
                </div>
            </div>
        </div>
    );
};

export default TenantLeases;

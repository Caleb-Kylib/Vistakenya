import React from 'react';
import { ClipboardList, CheckCircle2, XCircle, Clock, MapPin, Building, ArrowRight, Info, Heart, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const TenantApplications = () => {
    const applications = [
        {
            id: "APP-2024-001",
            property: "Sunset Apartments, Unit 4B",
            location: "Kilimani, Nairobi",
            price: 45000,
            status: "Accepted",
            date: "Feb 02, 2024",
            image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=400&q=80",
            landlord: "Alice Wanjiku",
            rating: 4.8
        },
        {
            id: "APP-2024-002",
            property: "Lake View Residency, Studio 2",
            location: "Kisumu",
            price: 24000,
            status: "Pending",
            date: "Feb 04, 2024",
            image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=400&q=80",
            landlord: "Peter Kamau",
            rating: 4.5
        },
        {
            id: "APP-2023-014",
            property: "Garden Estate Villas, No. 12",
            location: "Garden Estate, Nairobi",
            price: 85000,
            status: "Declined",
            date: "Jan 15, 2024",
            image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=400&q=80",
            landlord: "John Doe",
            rating: 4.9
        }
    ];

    const getStatusStyle = (status) => {
        switch (status) {
            case 'Accepted': return 'bg-teal-50 text-teal-700 ring-teal-100 ring-1';
            case 'Declined': return 'bg-red-50 text-red-700 ring-red-100 ring-1';
            default: return 'bg-orange-50 text-orange-700 ring-orange-100 ring-1';
        }
    };

    const getStatusIcon = (status) => {
        switch (status) {
            case 'Accepted': return <CheckCircle2 className="w-4 h-4 text-teal-600" />;
            case 'Declined': return <XCircle className="w-4 h-4 text-red-600" />;
            default: return <Clock className="w-4 h-4 text-orange-600" />;
        }
    };

    return (
        <div className="max-w-7xl mx-auto space-y-10 pb-20">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-4xl font-black text-gray-900 tracking-tight">My Applications</h1>
                    <p className="text-gray-500 mt-2 font-medium">Track your status and manage your <span className="text-teal-600 font-bold uppercase tracking-tight">housing requests</span>.</p>
                </div>
            </div>

            {/* Quick Filter Counters */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm transition-all hover:bg-teal-50/50 group">
                    <div className="p-2 bg-teal-50 rounded-xl w-fit group-hover:bg-white group-hover:shadow-sm">
                        <CheckCircle2 className="w-5 h-5 text-teal-600" />
                    </div>
                    <p className="text-2xl font-black text-gray-900 mt-4 leading-tight">1</p>
                    <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest mt-1">Accepted</p>
                </div>
                <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm transition-all hover:bg-orange-50/50 group animate-fadeIn">
                    <div className="p-2 bg-orange-50 rounded-xl w-fit group-hover:bg-white group-hover:shadow-sm">
                        <Clock className="w-5 h-5 text-orange-600" />
                    </div>
                    <p className="text-2xl font-black text-gray-900 mt-4 leading-tight">1</p>
                    <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest mt-1">Pending</p>
                </div>
                <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm transition-all hover:bg-red-50/50 group">
                    <div className="p-2 bg-red-50 rounded-xl w-fit group-hover:bg-white group-hover:shadow-sm">
                        <XCircle className="w-5 h-5 text-red-600" />
                    </div>
                    <p className="text-2xl font-black text-gray-900 mt-4 leading-tight">1</p>
                    <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest mt-1">Declined</p>
                </div>
                <div className="bg-gray-900 p-6 rounded-3xl text-white shadow-xl shadow-gray-200 group">
                    <div className="p-2 bg-white/10 rounded-xl w-fit">
                        <Star className="w-5 h-5 text-teal-400 fill-teal-400" />
                    </div>
                    <p className="text-2xl font-black mt-4 leading-tight">100%</p>
                    <p className="text-[10px] font-black uppercase tracking-widest mt-1 opacity-70">Success Rate</p>
                </div>
            </div>

            {/* Applications List */}
            <div className="space-y-6">
                <div className="flex items-center justify-between px-2">
                    <h2 className="text-2xl font-black text-gray-900 tracking-tight">Active Requests</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {applications.map(app => (
                        <div key={app.id} className="group bg-white rounded-[2.5rem] border border-gray-100 shadow-sm overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                            {/* Image Section */}
                            <div className="relative h-48 overflow-hidden">
                                <img src={app.image} alt={app.property} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                <div className="absolute top-4 right-4">
                                    <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full font-black text-[9px] uppercase tracking-widest backdrop-blur-md ${getStatusStyle(app.status)}`}>
                                        {getStatusIcon(app.status)}
                                        {app.status}
                                    </div>
                                </div>
                                <div className="absolute bottom-4 left-4">
                                    <div className="flex items-center gap-1.5 px-3 py-1 bg-white ring-1 ring-gray-100 rounded-lg shadow-sm">
                                        <Star className="w-3 h-3 text-orange-400 fill-orange-400" />
                                        <span className="text-[10px] font-black text-gray-900">{app.rating}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="p-8">
                                <p className="text-[10px] font-black text-teal-600 mb-2 uppercase tracking-widest">{app.id}</p>
                                <h3 className="text-xl font-black text-gray-900 leading-tight mb-1 group-hover:text-teal-600 transition-colors uppercase tracking-tight">{app.property}</h3>
                                <div className="flex items-center gap-1 text-xs text-gray-500 font-medium mb-6">
                                    <MapPin className="w-3 h-3" />
                                    {app.location}
                                </div>

                                <div className="grid grid-cols-2 gap-4 py-6 border-y border-gray-50">
                                    <div className="space-y-1">
                                        <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest">Submitted On</p>
                                        <p className="text-xs font-bold text-gray-900">{app.date}</p>
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest">Monthly Rent</p>
                                        <p className="text-xs font-bold text-teal-600">KES {app.price.toLocaleString()}</p>
                                    </div>
                                </div>

                                <div className="pt-8">
                                    {app.status === 'Accepted' ? (
                                        <Link
                                            to="/tenant/leases"
                                            className="flex items-center justify-center gap-2 w-full py-4 bg-teal-600 text-white rounded-2xl font-black text-xs hover:bg-teal-700 transition-all shadow-xl shadow-teal-100"
                                        >
                                            View Lease Agreement
                                            <ArrowRight className="w-4 h-4" />
                                        </Link>
                                    ) : (
                                        <button className="flex items-center justify-center gap-2 w-full py-4 bg-gray-900 text-white rounded-2xl font-black text-xs hover:bg-teal-600 transition-all shadow-xl shadow-gray-200">
                                            View Application Status
                                            <ArrowRight className="w-4 h-4" />
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom Insight */}
            <div className="bg-orange-50 p-8 rounded-[2.5rem] border border-orange-100 flex items-start gap-5">
                <div className="p-4 bg-white rounded-2xl shadow-sm text-orange-600">
                    <Info className="w-6 h-6" />
                </div>
                <div>
                    <h4 className="text-sm font-black text-orange-900 uppercase tracking-widest mb-1 leading-tight">Pro Tip: Boost Your Approval</h4>
                    <p className="text-xs text-orange-800 font-medium leading-relaxed max-w-2xl">
                        Landlords prioritze **Verified Tenants** with detailed rental history. Ensure your TenantPass is 100% complete and you've uploaded your identity documents to get faster responses.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TenantApplications;

import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Printer, Share2, Download, ShieldCheck, CheckSquare } from 'lucide-react';
import LeaseDocument from '../../components/leases/LeaseDocument';

const LeaseDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    // Mock data fetching based on ID
    const leaseData = {
        id: id,
        propertyName: "Sunset Apartments, Unit 4B",
        location: "Kilimani, along Dennis Pritt Road, Nairobi",
        propertyType: "Two Bedroom Apartment",
        landlordName: "Alice Wanjiku Enterprises",
        tenantName: "Caleb Kylib",
        rent: 45000,
        deposit: 45000,
        serviceCharge: 5000,
        isInclusive: false,
        startDate: "Jan 1, 2024",
        duration: "12 Months",
        createdAt: "Dec 20, 2023",
        status: "Active"
    };

    return (
        <div className="max-w-5xl mx-auto space-y-8 pb-20 animate-fadeInUp">
            {/* Detail Header / Toolbar */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => navigate(-1)}
                        className="p-3 bg-gray-50 hover:bg-gray-100 rounded-2xl transition-all"
                    >
                        <ArrowLeft className="w-5 h-5 text-gray-600" />
                    </button>
                    <div>
                        <h2 className="text-xl font-black text-gray-900 leading-tight">Lease Details</h2>
                        <div className="flex items-center gap-2 mt-1">
                            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Document ID: {id}</span>
                            <div className="w-1 h-1 rounded-full bg-gray-300" />
                            <span className="text-[10px] font-black text-teal-600 uppercase tracking-widest bg-teal-50 px-2 py-0.5 rounded-full">Encrypted Document</span>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <button className="flex-1 md:flex-none p-3 bg-gray-50 text-gray-600 rounded-2xl font-bold hover:bg-gray-100 flex items-center justify-center gap-2 transition-all">
                        <Download className="w-4 h-4" />
                        <span className="md:hidden lg:inline text-xs">Download PDF</span>
                    </button>
                    <button className="flex-1 md:flex-none p-3 bg-teal-600 text-white rounded-2xl font-black flex items-center justify-center gap-2 hover:bg-teal-700 shadow-lg shadow-teal-50 transition-all">
                        <Printer className="w-4 h-4" />
                        <span className="md:hidden lg:inline text-xs">Print Contract</span>
                    </button>
                </div>
            </div>

            {/* The Lease Document Itself */}
            <LeaseDocument lease={leaseData} />

            {/* Signature & Verification Block */}
            <div className="bg-gray-900 rounded-3xl p-10 text-white shadow-2xl relative overflow-hidden">
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
                    <div className="space-y-4 text-center md:text-left">
                        <div className="flex items-center justify-center md:justify-start gap-2">
                            <ShieldCheck className="w-6 h-6 text-teal-400" />
                            <h2 className="text-2xl font-black">Contract Authenticator</h2>
                        </div>
                        <p className="text-gray-400 font-medium max-w-md">
                            This lease is secured with an immutable cryptographic hash. Any modifications without landlord approval will invalidate the agreement.
                        </p>
                    </div>

                    <div className="flex flex-col items-center gap-4">
                        <div className="p-8 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-md">
                            <p className="text-[10px] text-teal-400 font-black uppercase tracking-widest mb-4">Digitally Signed By</p>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <CheckSquare className="w-5 h-5 text-teal-500" />
                                    <div>
                                        <p className="font-black text-sm uppercase">Caleb Kylib (Tenant)</p>
                                        <p className="text-[10px] text-gray-500 font-mono">ID: 34******89 | Dec 24, 2023</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <CheckSquare className="w-5 h-5 text-teal-500" />
                                    <div>
                                        <p className="font-black text-sm uppercase">Alice Wanjiku (Owner)</p>
                                        <p className="text-[10px] text-gray-500 font-mono">PIN: P00******7Q | Dec 22, 2023</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl -mr-32 -mt-32" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl -ml-32 -mb-32" />
            </div>

            {/* Help Section */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 py-10 opacity-60">
                <div className="flex items-center gap-2 text-xs font-bold text-gray-500 uppercase tracking-widest">
                    <Share2 className="w-4 h-4" />
                    Share With Lawyer
                </div>
                <div className="w-1 h-1 rounded-full bg-gray-300 hidden md:block" />
                <div className="flex items-center gap-2 text-xs font-bold text-gray-500 uppercase tracking-widest">
                    <ShieldCheck className="w-4 h-4" />
                    Legally Binding In Kenya
                </div>
            </div>
        </div>
    );
};

export default LeaseDetail;

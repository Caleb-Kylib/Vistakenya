import React from 'react';
import { FileText, Calendar, User, MapPin, ShieldCheck, Info } from 'lucide-react';

const LeaseDocument = ({ lease }) => {
    if (!lease) return null;

    return (
        <div className="bg-white rounded-3xl border border-gray-100 shadow-xl overflow-hidden max-w-4xl mx-auto mb-10">
            {/* Document Header */}
            <div className="bg-gray-900 p-8 text-white flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div className="flex items-center gap-3">
                    <div className="p-3 bg-teal-500 rounded-2xl">
                        <FileText className="w-6 h-6 text-white" />
                    </div>
                    <div>
                        <h1 className="text-2xl font-black tracking-tight">Residential Lease Agreement</h1>
                        <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mt-1">Ref: {lease.id}</p>
                    </div>
                </div>
                <div className="text-right">
                    <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest">Effective Date</p>
                    <p className="text-lg font-bold text-teal-400">{lease.startDate}</p>
                </div>
            </div>

            <div className="p-10 space-y-12">
                {/* 1. The Parties */}
                <section className="space-y-4">
                    <h2 className="text-sm font-black text-gray-400 uppercase tracking-widest flex items-center gap-2 border-b border-gray-100 pb-2">
                        1. THE PARTIES
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-3">
                            <p className="text-xs text-gray-500 font-bold uppercase">Landlord</p>
                            <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                                <p className="font-black text-gray-900">{lease.landlordName}</p>
                                <div className="flex items-center gap-1.5 mt-1">
                                    <span className="text-[10px] font-bold text-teal-600 bg-teal-50 px-2 py-0.5 rounded-full uppercase tracking-wider">Verified Landlord</span>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-3">
                            <p className="text-xs text-gray-500 font-bold uppercase">Tenant</p>
                            <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                                <p className="font-black text-gray-900">{lease.tenantName}</p>
                                <div className="flex items-center gap-1.5 mt-1">
                                    <ShieldCheck className="w-3 h-3 text-teal-600" />
                                    <span className="text-[10px] font-bold text-gray-600 uppercase tracking-wider">Identity Verified</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 2. The Property */}
                <section className="space-y-4">
                    <h2 className="text-sm font-black text-gray-400 uppercase tracking-widest flex items-center gap-2 border-b border-gray-100 pb-2">
                        2. THE PROPERTY
                    </h2>
                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-orange-50 rounded-2xl">
                            <MapPin className="w-6 h-6 text-orange-600" />
                        </div>
                        <div>
                            <p className="font-black text-xl text-gray-900">{lease.propertyName}</p>
                            <p className="text-gray-500 font-medium">{lease.location}</p>
                            <p className="text-xs font-bold text-orange-600 mt-2 bg-orange-50 inline-block px-3 py-1 rounded-full">{lease.propertyType}</p>
                        </div>
                    </div>
                </section>

                {/* 3. Financial Terms */}
                <section className="space-y-4">
                    <h2 className="text-sm font-black text-gray-400 uppercase tracking-widest flex items-center gap-2 border-b border-gray-100 pb-2">
                        3. FINANCIAL TERMS (VISTAKENYA VERIFIED)
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="p-6 bg-teal-600 rounded-3xl text-white shadow-lg shadow-teal-100">
                            <p className="text-[10px] font-black uppercase tracking-wider opacity-80">Monthly Rent</p>
                            <p className="text-3xl font-black mt-1">KES {lease.rent.toLocaleString()}</p>
                            <p className="text-[10px] mt-2 font-bold opacity-80 italic">Payable by 5th of every month</p>
                        </div>
                        <div className="p-6 bg-white rounded-3xl border border-gray-100 shadow-sm">
                            <p className="text-[10px] text-gray-400 font-black uppercase tracking-wider">Security Deposit</p>
                            <p className="text-2xl font-black text-gray-900 mt-1">KES {lease.deposit.toLocaleString()}</p>
                            <p className="text-[10px] text-teal-600 mt-2 font-bold uppercase tracking-wider">Held by Owner</p>
                        </div>
                        <div className="p-6 bg-white rounded-3xl border border-gray-100 shadow-sm">
                            <p className="text-[10px] text-gray-400 font-black uppercase tracking-wider">Service Charge</p>
                            <p className="text-2xl font-black text-gray-900 mt-1">KES {lease.serviceCharge.toLocaleString()}</p>
                            <p className="text-[10px] text-gray-500 mt-2 font-bold italic">{lease.isInclusive ? "Monthly Inclusive" : "Monthly Additional"}</p>
                        </div>
                    </div>
                </section>

                {/* 4. Terms & Governance */}
                <section className="space-y-4">
                    <h2 className="text-sm font-black text-gray-400 uppercase tracking-widest flex items-center gap-2 border-b border-gray-100 pb-2">
                        4. TERMS & GOVERNANCE
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <Calendar className="w-5 h-5 text-gray-400" />
                                <div>
                                    <p className="text-xs font-black text-gray-900 uppercase">Lease Duration</p>
                                    <p className="text-sm text-gray-600 font-medium">{lease.duration} (Renewable)</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 text-orange-600">
                                <Info className="w-5 h-5" />
                                <div>
                                    <p className="text-xs font-black uppercase">Late Payment Penalty</p>
                                    <p className="text-sm font-medium">5% interest applied after the 5th of the month.</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-3xl border border-dashed border-gray-200">
                            <p className="text-xs font-black text-gray-400 mb-4 uppercase tracking-wider">Digital Audit Log</p>
                            <div className="space-y-3">
                                <div className="flex items-center gap-2 text-[10px] font-bold text-gray-500">
                                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-500" />
                                    Contract Generated: {lease.createdAt}
                                </div>
                                <div className="flex items-center gap-2 text-[10px] font-bold text-gray-500">
                                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-500" />
                                    Identity Verification Checked
                                </div>
                                <div className="flex items-center gap-2 text-[10px] font-bold text-gray-500">
                                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-500" />
                                    Terms Accepted via Digital Signature
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer Warning */}
                <div className="p-4 bg-teal-50 rounded-2xl border border-teal-100 flex items-start gap-3">
                    <Info className="w-5 h-5 text-teal-600 mt-0.5" />
                    <p className="text-xs text-teal-800 font-medium leading-relaxed">
                        This digital agreement is legally binding under the Laws of Kenya. Any late payments or defaults will be recorded on your <strong>Vistakenya Rental Score</strong>, which may affect your future eligibility and credit standing.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LeaseDocument;

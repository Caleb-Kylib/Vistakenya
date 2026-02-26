import React from 'react';
import { ShieldCheck, User, CreditCard, FileText, CheckCircle2, History } from 'lucide-react';
import { Link } from 'react-router-dom';
import RentalScoreBadge from './RentalScoreBadge';
import ProfileCompletionBar from './ProfileCompletionBar';

const TenantTrustCard = ({ tenant, variant = 'full', onAccept, onReject, showActions = true }) => {
    // Mock logic if data is missing
    const data = {
        name: tenant?.name || tenant?.tenant || "Unknown Tenant",
        photo: tenant?.photo_url || null,
        verification_status: tenant?.verification_status || (tenant?.verification === 'Verified' ? 'verified' : 'pending'),
        completed_leases: tenant?.completed_leases_count ?? 2,
        score: tenant?.rental_score ?? 85,
        reliability: tenant?.payment_reliability ?? 98,
        joined_date: tenant?.joined_date || "Jan 2024",
        completion: tenant?.completion_percent ?? 75,
        factors: tenant?.completion_factors || [
            { name: 'Photo', status: true },
            { name: 'ID', status: true },
            { name: 'Phone', status: true },
            { name: 'Lease', status: false }
        ]
    };

    if (variant === 'compact') {
        return (
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                    <div className="relative">
                        {data.photo ? (
                            <img src={data.photo} alt={data.name} className="w-12 h-12 rounded-full object-cover border border-gray-100" />
                        ) : (
                            <div className="w-12 h-12 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center border border-teal-100">
                                <User size={20} />
                            </div>
                        )}
                        {data.verification_status === 'verified' && (
                            <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5 shadow-sm">
                                <ShieldCheck className="w-4 h-4 text-teal-600" />
                            </div>
                        )}
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-900 text-sm">{data.name}</h4>
                        <div className="flex items-center gap-1.5 mt-0.5">
                            <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${data.verification_status === 'verified' ? 'bg-teal-50 text-teal-700' : 'bg-yellow-50 text-yellow-700'}`}>
                                {data.verification_status === 'verified' ? 'Verified' : 'Pending'}
                            </span>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-2 mb-4">
                    <div className="bg-gray-50 rounded-lg p-2 border border-gray-100">
                        <div className="flex items-center gap-1 text-gray-500 mb-0.5">
                            <CreditCard size={10} />
                            <span className="text-[9px] font-medium uppercase">Reliability</span>
                        </div>
                        <div className="text-sm font-bold text-teal-600">{data.reliability}%</div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-2 border border-gray-100">
                        <div className="flex items-center gap-1 text-gray-500 mb-0.5">
                            <FileText size={10} />
                            <span className="text-[9px] font-medium uppercase">Leases</span>
                        </div>
                        <div className="text-sm font-bold text-gray-900">{data.completed_leases}</div>
                    </div>
                </div>

                <div className="mb-4">
                    <RentalScoreBadge score={data.score} />
                </div>

                <ProfileCompletionBar completionPercent={data.completion} />

                <div className="mt-4 pt-4 border-t border-gray-50 flex items-center justify-between">
                    <button className="text-[11px] font-bold text-primary-600 hover:text-primary-700">View Full Profile</button>
                    {showActions && (
                        <div className="flex gap-2">
                            <button
                                onClick={() => onAccept && onAccept(tenant)}
                                className="px-3 py-1 bg-teal-600 text-white text-[10px] font-bold rounded-lg hover:bg-teal-700 transition-colors"
                            >
                                Accept
                            </button>
                            <button
                                onClick={() => onReject && onReject(tenant)}
                                className="px-3 py-1 bg-white text-coral-600 border border-coral-200 text-[10px] font-bold rounded-lg hover:bg-coral-50 transition-colors"
                            >
                                Reject
                            </button>
                        </div>
                    )}
                </div>
            </div>
        );
    }

    // Full variant (default)
    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6">
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                    <div className="relative flex-shrink-0">
                        {data.photo ? (
                            <img src={data.photo} alt={data.name} className="w-20 h-20 rounded-full object-cover ring-4 ring-teal-50 border-2 border-white" />
                        ) : (
                            <div className="w-20 h-20 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center ring-4 ring-teal-50 border-2 border-white">
                                <User size={32} />
                            </div>
                        )}
                        {data.verification_status === 'verified' && (
                            <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-1 shadow-sm">
                                <ShieldCheck className="w-5 h-5 text-teal-600" />
                            </div>
                        )}
                    </div>

                    <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-center gap-3 mb-2">
                            <h2 className="text-xl font-bold text-gray-900">{data.name}</h2>
                            {data.verification_status === 'verified' && (
                                <div className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full bg-teal-600 text-white text-[10px] font-bold tracking-wide">
                                    <ShieldCheck className="w-3 h-3" />
                                    <span>VERIFIED TENANT</span>
                                </div>
                            )}
                        </div>
                        <p className="text-gray-500 text-xs flex items-center gap-1.5">
                            <History className="w-3.5 h-3.5" />
                            Member since {data.joined_date} • {data.completed_leases} Leases Completed
                        </p>
                    </div>

                    <div className="md:ml-auto">
                        <RentalScoreBadge score={data.score} />
                    </div>
                </div>

                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
                    <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-2 text-gray-500">
                                <CreditCard size={16} />
                                <span className="text-xs font-bold uppercase tracking-wider">Payment Reliability</span>
                            </div>
                            <span className="text-xl font-black text-teal-600">{data.reliability}%</span>
                        </div>
                        <ProfileCompletionBar completionPercent={data.completion} factors={data.factors} />
                    </div>

                    <div className="flex flex-col justify-center gap-3">
                        {data.verification_status === 'verified' ? (
                            <div className="p-4 bg-teal-50 rounded-xl border border-teal-100">
                                <div className="flex items-center gap-2 text-teal-700 mb-1">
                                    <ShieldCheck className="w-4 h-4" />
                                    <span className="text-xs font-black uppercase tracking-wider">Trusted Identity</span>
                                </div>
                                <p className="text-[10px] text-teal-600 font-medium italic">Your verified status increases your lease approval rate by 70%.</p>
                            </div>
                        ) : (
                            <Link to="/tenant/verification" className="w-full py-3 bg-gray-900 text-white rounded-xl font-black text-sm hover:bg-teal-600 transition-all shadow-sm flex items-center justify-center gap-2">
                                <ShieldCheck className="w-4 h-4" />
                                Get Verified Now
                            </Link>
                        )}
                        <button className="w-full py-2.5 bg-white text-gray-600 border border-gray-200 rounded-xl font-bold text-xs hover:bg-gray-50 transition-all">Download TenantPass</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TenantTrustCard;

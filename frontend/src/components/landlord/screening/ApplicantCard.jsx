import React from 'react';
import { GraduationCap, Wallet, Home, UserRound } from 'lucide-react';
import TrustScoreBadge from './TrustScoreBadge';

const statusStyles = {
    Pending: 'bg-orange-50 text-orange-700 border-orange-100',
    Approved: 'bg-green-50 text-green-700 border-green-100',
    Rejected: 'bg-red-50 text-red-700 border-red-100'
};

const ApplicantCard = ({ applicant, onViewDetails, onApprove, onReject }) => {
    return (
        <div className="rounded-2xl border border-gray-100 bg-white shadow-sm p-4 space-y-4">
            <div className="flex items-start justify-between gap-3">
                <div>
                    <p className="text-base font-black text-gray-900">{applicant.name}</p>
                    <p className="text-xs text-gray-500 mt-1 flex items-center gap-1.5">
                        <GraduationCap className="w-3.5 h-3.5 text-teal-600" />
                        {applicant.university}
                    </p>
                </div>
                <span className={`px-2.5 py-1 rounded-full border text-[10px] font-black uppercase tracking-widest ${statusStyles[applicant.status] || statusStyles.Pending}`}>
                    {applicant.status}
                </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                <p className="rounded-xl bg-gray-50 p-2.5 text-gray-700 flex items-center gap-1.5">
                    <Wallet className="w-3.5 h-3.5 text-gray-500" />
                    {applicant.budgetRange}
                </p>
                <p className="rounded-xl bg-gray-50 p-2.5 text-gray-700 flex items-center gap-1.5">
                    <Home className="w-3.5 h-3.5 text-gray-500" />
                    {applicant.propertyApplied}
                </p>
            </div>

            <div className="flex items-center justify-between">
                <p className="text-[11px] font-black uppercase tracking-widest text-gray-400 inline-flex items-center gap-1.5">
                    <UserRound className="w-3.5 h-3.5" />
                    Rental Trust Score
                </p>
                <TrustScoreBadge score={applicant.trustScore} />
            </div>

            <div className="grid grid-cols-3 gap-2">
                <button
                    onClick={() => onViewDetails(applicant)}
                    className="px-2 py-2 rounded-lg border border-gray-200 text-[10px] font-black uppercase tracking-widest text-gray-700 hover:bg-gray-50"
                >
                    View Details
                </button>
                <button
                    onClick={() => onApprove(applicant.id)}
                    className="px-2 py-2 rounded-lg bg-teal-600 text-white text-[10px] font-black uppercase tracking-widest hover:bg-teal-700"
                >
                    Approve
                </button>
                <button
                    onClick={() => onReject(applicant.id)}
                    className="px-2 py-2 rounded-lg bg-gray-100 text-gray-700 text-[10px] font-black uppercase tracking-widest hover:bg-gray-200"
                >
                    Reject
                </button>
            </div>
        </div>
    );
};

export default ApplicantCard;

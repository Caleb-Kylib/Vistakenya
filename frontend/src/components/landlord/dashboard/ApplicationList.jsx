import React from 'react';
import { CheckCircle2, XCircle, MessageCircleMore } from 'lucide-react';

const badgeStyles = {
    Pending: 'bg-orange-50 text-orange-700 border-orange-100',
    Approved: 'bg-green-50 text-green-700 border-green-100',
    Rejected: 'bg-red-50 text-red-700 border-red-100'
};

const ApplicationList = ({ applications, onApprove, onReject, onRequestInfo }) => {
    return (
        <div className="rounded-3xl border border-white/40 bg-white/90 shadow-sm p-5">
            <h3 className="text-lg font-black text-gray-900 mb-4">Applications</h3>
            <div className="space-y-3">
                {applications.map((application) => (
                    <div key={application.id} className="rounded-xl border border-gray-100 p-4">
                        <div className="flex items-start justify-between gap-3">
                            <div>
                                <p className="font-bold text-gray-900">{application.tenantName}</p>
                                <p className="text-xs text-gray-500 mt-1">
                                    {application.property} | {application.preferredLocation} | {application.budget}
                                </p>
                            </div>
                            <span className={`px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border ${badgeStyles[application.status] || badgeStyles.Pending}`}>
                                {application.status}
                            </span>
                        </div>
                        <div className="grid grid-cols-3 gap-2 mt-3">
                            <button onClick={() => onApprove(application.id)} className="px-2 py-2 rounded-lg bg-teal-600 text-white text-[10px] font-black uppercase tracking-widest inline-flex items-center justify-center gap-1">
                                <CheckCircle2 className="w-3 h-3" />
                                Approve
                            </button>
                            <button onClick={() => onReject(application.id)} className="px-2 py-2 rounded-lg bg-gray-100 text-gray-700 text-[10px] font-black uppercase tracking-widest inline-flex items-center justify-center gap-1">
                                <XCircle className="w-3 h-3" />
                                Reject
                            </button>
                            <button onClick={() => onRequestInfo(application.id)} className="px-2 py-2 rounded-lg border border-gray-200 text-gray-700 text-[10px] font-black uppercase tracking-widest inline-flex items-center justify-center gap-1">
                                <MessageCircleMore className="w-3 h-3" />
                                Request Info
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ApplicationList;

import React from 'react';
import { CheckCircle2, Clock3, XCircle } from 'lucide-react';

const statusUI = {
    Pending: { icon: Clock3, className: 'bg-orange-50 text-orange-700 border-orange-100' },
    Approved: { icon: CheckCircle2, className: 'bg-green-50 text-green-700 border-green-100' },
    Accepted: { icon: CheckCircle2, className: 'bg-green-50 text-green-700 border-green-100' },
    Declined: { icon: XCircle, className: 'bg-red-50 text-red-700 border-red-100' },
    Rejected: { icon: XCircle, className: 'bg-red-50 text-red-700 border-red-100' }
};

const ApplicationTimeline = ({ icon: Icon, applications, emptyMessage }) => {
    return (
        <div className="rounded-3xl border border-white/40 bg-white/80 backdrop-blur-sm shadow-sm p-6">
            <h2 className="text-xl font-black text-gray-900 flex items-center gap-2 mb-4">
                {Icon ? <Icon className="w-5 h-5 text-teal-600" /> : null}
                Applications
            </h2>

            {applications.length === 0 ? (
                <div className="rounded-2xl border border-dashed border-gray-200 p-6 text-center text-sm text-gray-500">
                    {emptyMessage}
                </div>
            ) : (
                <div className="space-y-3">
                    {applications.slice(0, 5).map((application) => {
                        const ui = statusUI[application.status] || statusUI.Pending;
                        const StatusIcon = ui.icon;
                        return (
                            <div key={application.id} className="relative pl-6">
                                <span className="absolute left-1.5 top-0 h-full border-l border-gray-200" />
                                <span className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-teal-500" />
                                <div className="rounded-xl border border-gray-100 bg-white p-3">
                                    <div className="flex items-start justify-between gap-2">
                                        <div>
                                            <p className="text-sm font-bold text-gray-900">{application.property}</p>
                                            <p className="text-xs text-gray-500 mt-0.5">
                                                Submitted {application.applied_date || 'recently'}
                                            </p>
                                        </div>
                                        <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full border text-[10px] font-black uppercase tracking-widest ${ui.className}`}>
                                            <StatusIcon className="w-3.5 h-3.5" />
                                            {application.status}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default ApplicationTimeline;

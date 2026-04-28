import React from 'react';
import { X, Phone, ShieldCheck, IdCard, GraduationCap, Users, CircleHelp } from 'lucide-react';
import TrustScoreBadge from './TrustScoreBadge';

const ApplicantModal = ({ applicant, onClose, onApprove, onReject, onRequestInfo }) => {
    if (!applicant) return null;

    const scoreBreakdown = [
        { label: 'Profile completeness', points: applicant.scoring?.profileCompleteness ?? 20 },
        { label: 'Phone verification', points: applicant.scoring?.phoneVerification ?? (applicant.verificationStatus?.phoneVerified ? 20 : 0) },
        { label: 'Student verification', points: applicant.scoring?.studentVerification ?? (applicant.studentStatus === 'Verified' ? 20 : 10) },
        { label: 'Activity/history', points: applicant.scoring?.activityHistory ?? 20 }
    ];

    return (
        <div className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="w-full max-w-3xl rounded-3xl border border-white/40 bg-white shadow-2xl overflow-hidden">
                <div className="flex items-center justify-between p-5 border-b border-gray-100">
                    <div>
                        <h3 className="text-xl font-black text-gray-900">Applicant Details</h3>
                        <p className="text-sm text-gray-500">{applicant.propertyApplied}</p>
                    </div>
                    <button onClick={onClose} className="p-2 rounded-xl bg-gray-50 hover:bg-gray-100 text-gray-500">
                        <X className="w-5 h-5" />
                    </button>
                </div>

                <div className="p-5 grid grid-cols-1 xl:grid-cols-3 gap-4">
                    <div className="xl:col-span-2 space-y-4">
                        <div className="rounded-2xl border border-gray-100 p-4">
                            <h4 className="text-sm font-black text-gray-900 uppercase tracking-widest mb-3">Profile Info</h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                                <p><span className="text-gray-400">Full name:</span> <span className="font-bold text-gray-900">{applicant.name}</span></p>
                                <p className="inline-flex items-center gap-1.5"><Phone className="w-4 h-4 text-teal-600" />{applicant.phone}</p>
                                <p className="inline-flex items-center gap-1.5"><GraduationCap className="w-4 h-4 text-teal-600" />{applicant.university}</p>
                                <p><span className="text-gray-400">Student status:</span> <span className="font-bold text-gray-900">{applicant.studentStatus}</span></p>
                            </div>
                        </div>

                        <div className="rounded-2xl border border-gray-100 p-4">
                            <h4 className="text-sm font-black text-gray-900 uppercase tracking-widest mb-3">Verification Status</h4>
                            <div className="flex flex-wrap gap-2">
                                <span className={`px-3 py-1.5 rounded-full text-xs font-bold border inline-flex items-center gap-1.5 ${applicant.verificationStatus?.phoneVerified ? 'bg-green-50 text-green-700 border-green-100' : 'bg-red-50 text-red-700 border-red-100'}`}>
                                    <ShieldCheck className="w-4 h-4" />
                                    Phone Verified {applicant.verificationStatus?.phoneVerified ? 'Yes' : 'No'}
                                </span>
                                <span className={`px-3 py-1.5 rounded-full text-xs font-bold border inline-flex items-center gap-1.5 ${applicant.verificationStatus?.idUploaded ? 'bg-green-50 text-green-700 border-green-100' : 'bg-red-50 text-red-700 border-red-100'}`}>
                                    <IdCard className="w-4 h-4" />
                                    ID Uploaded {applicant.verificationStatus?.idUploaded ? 'Yes' : 'No'}
                                </span>
                            </div>
                        </div>

                        {applicant.coLiving && (
                            <div className="rounded-2xl border border-violet-100 bg-violet-50/40 p-4">
                                <h4 className="text-sm font-black text-violet-900 uppercase tracking-widest mb-3">Co-Living Context</h4>
                                <div className="flex flex-wrap gap-3 text-sm">
                                    <p className="inline-flex items-center gap-1.5 text-violet-700 font-medium">
                                        <Users className="w-4 h-4" />
                                        Occupants: {applicant.coLivingInfo?.occupants || '2/3'}
                                    </p>
                                    <p className="text-violet-700 font-medium">
                                        Rent split: KES {Number(applicant.coLivingInfo?.rentSplit || 7500).toLocaleString()} each
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="space-y-4">
                        <div className="rounded-2xl border border-gray-100 p-4">
                            <h4 className="text-sm font-black text-gray-900 uppercase tracking-widest mb-3">Trust Score</h4>
                            <div className="flex items-center justify-between mb-3">
                                <p className="text-sm text-gray-600">Total</p>
                                <TrustScoreBadge score={applicant.trustScore} />
                            </div>
                            <div className="space-y-2">
                                {scoreBreakdown.map((item) => (
                                    <div key={item.label} className="flex items-center justify-between text-xs">
                                        <span className="text-gray-600">{item.label}</span>
                                        <span className="font-black text-gray-900">+{item.points}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-2">
                            <button onClick={() => onApprove(applicant.id)} className="py-2.5 rounded-xl bg-teal-600 text-white text-xs font-black uppercase tracking-widest hover:bg-teal-700">
                                Approve Tenant
                            </button>
                            <button onClick={() => onReject(applicant.id)} className="py-2.5 rounded-xl bg-gray-100 text-gray-700 text-xs font-black uppercase tracking-widest hover:bg-gray-200">
                                Reject Tenant
                            </button>
                            <button onClick={() => onRequestInfo(applicant.id)} className="py-2.5 rounded-xl border border-gray-200 text-gray-700 text-xs font-black uppercase tracking-widest hover:bg-gray-50 inline-flex items-center justify-center gap-1.5">
                                <CircleHelp className="w-4 h-4" />
                                Request More Info
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ApplicantModal;

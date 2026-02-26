import React, { useState } from 'react';
import { ShieldCheck, Search, Filter, User, FileText, CheckCircle2, XCircle, Clock, AlertCircle } from 'lucide-react';

const VerifyTenants = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filter, setFilter] = useState('All');

    const [verifications, setVerifications] = useState([
        {
            id: 'V-2001',
            name: 'Sarah Atieno',
            email: 'sarah.atieno@gmail.com',
            score: 75,
            reliability: 92,
            documents: ['National ID', 'KRA Pin', 'Bank Statement'],
            status: 'Pending Verification',
            requestedDate: 'Feb 25, 2026'
        },
        {
            id: 'V-2002',
            name: 'John Doe',
            email: 'john.doe@work.com',
            score: 88,
            reliability: 98,
            documents: ['Passport', 'Employment Letter'],
            status: 'Verified',
            requestedDate: 'Feb 10, 2026'
        },
        {
            id: 'V-2003',
            name: 'David Kimani',
            email: 'david.k@outlook.com',
            score: 45,
            reliability: 60,
            documents: ['National ID'],
            status: 'Under Review',
            requestedDate: 'Feb 24, 2026'
        }
    ]);

    const handleVerify = (id) => {
        setVerifications(prev => prev.map(v =>
            v.id === id ? { ...v, status: 'Verified' } : v
        ));
    };

    const handleReject = (id) => {
        setVerifications(prev => prev.map(v =>
            v.id === id ? { ...v, status: 'Rejected' } : v
        ));
    };

    const filteredVerifications = verifications.filter(v => {
        const matchesSearch = v.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            v.email.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesFilter = filter === 'All' || v.status === filter;
        return matchesSearch && matchesFilter;
    });

    return (
        <div className="max-w-7xl mx-auto space-y-10 pb-20">
            {/* Header */}
            <div>
                <h1 className="text-4xl font-black text-gray-900 tracking-tight">Tenant Trust Verification</h1>
                <p className="text-gray-500 mt-2 font-medium">Review tenant documents and rental scores to issue Trust Pass badges.</p>
            </div>

            {/* Verification Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-xl shadow-gray-200/40">
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Pending Verification</p>
                    <div className="flex items-center justify-between">
                        <h3 className="text-4xl font-black text-gray-900">12</h3>
                        <Clock className="w-8 h-8 text-orange-500" />
                    </div>
                </div>
                <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-xl shadow-gray-200/40">
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Verified This Week</p>
                    <div className="flex items-center justify-between">
                        <h3 className="text-4xl font-black text-gray-900">48</h3>
                        <CheckCircle2 className="w-8 h-8 text-teal-500" />
                    </div>
                </div>
                <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-xl shadow-gray-200/40">
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Trust Pass Adoption</p>
                    <div className="flex items-center justify-between">
                        <h3 className="text-4xl font-black text-gray-900">82%</h3>
                        <ShieldCheck className="w-8 h-8 text-teal-500" />
                    </div>
                </div>
            </div>

            {/* List */}
            <div className="space-y-6">
                <div className="flex flex-col md:flex-row gap-4 items-center">
                    <div className="relative flex-1">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search by tenant name..."
                            className="w-full pl-11 pr-4 py-3 bg-white border border-gray-100 rounded-2xl text-sm font-bold focus:ring-2 focus:ring-teal-500/20"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <div className="flex p-1.5 bg-gray-100 rounded-2xl">
                        {['All', 'Pending Verification', 'Under Review', 'Verified'].map(t => (
                            <button
                                key={t}
                                onClick={() => setFilter(t)}
                                className={`px-4 py-2 rounded-xl text-[10px] font-black transition-all ${filter === t ? 'bg-white text-teal-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'
                                    }`}
                            >
                                {t}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6">
                    {filteredVerifications.map(v => (
                        <div key={v.id} className="bg-white rounded-[2rem] border border-gray-100 shadow-xl shadow-gray-200/40 p-8 flex flex-col lg:flex-row gap-8 items-start lg:items-center">
                            <div className="flex items-center gap-5 shrink-0">
                                <div className="w-16 h-16 rounded-[1.5rem] bg-teal-50 flex items-center justify-center">
                                    <User className="w-8 h-8 text-teal-600" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-black text-gray-900 tracking-tight uppercase tracking-tight">{v.name}</h4>
                                    <p className="text-xs text-gray-500 font-bold">{v.email}</p>
                                    <p className="text-[10px] font-black text-teal-600 mt-1">{v.id}</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 flex-1">
                                <div>
                                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Rental Score</p>
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-8 rounded-full border-2 border-teal-500 flex items-center justify-center text-[10px] font-black text-teal-600">
                                            {v.score}
                                        </div>
                                        <span className="text-xs font-bold text-gray-700">{v.score > 70 ? 'High' : 'Medium'}</span>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Reliability</p>
                                    <p className="text-sm font-black text-teal-600 font-black">{v.reliability}%</p>
                                </div>
                                <div>
                                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Documents</p>
                                    <div className="flex flex-wrap gap-1 mt-1">
                                        {v.documents.map(doc => (
                                            <span key={doc} className="text-[9px] font-black px-1.5 py-0.5 bg-gray-50 text-gray-500 rounded border border-gray-100">{doc}</span>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Status</p>
                                    <span className={`text-[10px] font-black px-2 py-0.5 rounded-full ring-1 ${v.status === 'Verified' ? 'text-teal-600 bg-teal-50 ring-teal-100' :
                                        v.status === 'Rejected' ? 'text-red-600 bg-red-50 ring-red-100' :
                                            'text-orange-600 bg-orange-50 ring-orange-100'
                                        }`}>
                                        {v.status}
                                    </span>
                                </div>
                            </div>

                            <div className="flex items-center gap-2 w-full lg:w-auto">
                                {v.status !== 'Verified' && v.status !== 'Rejected' ? (
                                    <>
                                        <button
                                            onClick={() => handleVerify(v.id)}
                                            className="flex-1 lg:flex-none px-6 py-3 bg-teal-600 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-teal-700 transition-all shadow-lg shadow-teal-100"
                                        >
                                            Issue Trust Pass
                                        </button>
                                        <button
                                            onClick={() => handleReject(v.id)}
                                            className="px-6 py-3 bg-white text-gray-500 border border-gray-200 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-red-50 hover:text-red-500 transition-all"
                                        >
                                            Reject
                                        </button>
                                    </>
                                ) : (
                                    <button className="w-full lg:w-auto px-6 py-3 bg-gray-50 text-gray-500 border border-gray-100 rounded-2xl text-[10px] font-black uppercase tracking-widest italic cursor-default">
                                        Re-audit Required
                                    </button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default VerifyTenants;

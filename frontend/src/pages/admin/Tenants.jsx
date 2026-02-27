import React, { useState, useEffect } from 'react';
import { ShieldCheck, Search, Filter, User, FileText, CheckCircle2, XCircle, Clock, AlertCircle } from 'lucide-react';
import { API_BASE_URL } from '../../config';

const VerifyTenants = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filter, setFilter] = useState('All');
    const [tenants, setTenants] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchTenants = async () => {
        try {
            setLoading(true);
            const response = await fetch(`${API_BASE_URL}/users?role=tenant`);
            const data = await response.json();
            setTenants(data);
        } catch (error) {
            console.error('Error fetching tenants:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchTenants();
    }, []);

    const handleVerify = async (id) => {
        try {
            const response = await fetch(`${API_BASE_URL}/users/${id}/verify`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ verified: true }),
            });
            if (response.ok) {
                fetchTenants();
            }
        } catch (error) {
            console.error('Error verifying tenant:', error);
        }
    };

    const handleReject = async (id) => {
        // Logic for reject
        alert('Reject functionality to be implemented with specific status');
    };

    const filteredTenants = tenants.filter(v => {
        const matchesSearch = (v.name || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
            (v.email || '').toLowerCase().includes(searchTerm.toLowerCase());

        const status = v.verified ? 'Verified' : 'Pending Verification';
        const matchesFilter = filter === 'All' || status === filter;
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
                        <h3 className="text-4xl font-black text-gray-900">{tenants.filter(t => !t.verified).length}</h3>
                        <Clock className="w-8 h-8 text-orange-500" />
                    </div>
                </div>
                <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-xl shadow-gray-200/40">
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Verified Members</p>
                    <div className="flex items-center justify-between">
                        <h3 className="text-4xl font-black text-gray-900">{tenants.filter(t => t.verified).length}</h3>
                        <CheckCircle2 className="w-8 h-8 text-teal-500" />
                    </div>
                </div>
                <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-xl shadow-gray-200/40">
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Trust Pass Adoption</p>
                    <div className="flex items-center justify-between">
                        <h3 className="text-4xl font-black text-gray-900">
                            {tenants.length > 0 ? Math.round((tenants.filter(t => t.verified).length / tenants.length) * 100) : 0}%
                        </h3>
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
                        {['All', 'Pending Verification', 'Verified'].map(t => (
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
                    {loading ? (
                        <div className="p-20 text-center text-gray-400 font-bold uppercase tracking-widest">Loading Tenants...</div>
                    ) : (
                        filteredTenants.map(v => (
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
                                                {v.score || 70}
                                            </div>
                                            <span className="text-xs font-bold text-gray-700">{(v.score || 70) > 70 ? 'High' : 'Medium'}</span>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Reliability</p>
                                        <p className="text-sm font-black text-teal-600 font-black">{v.reliability || 90}%</p>
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Documents</p>
                                        <div className="flex flex-wrap gap-1 mt-1">
                                            {(v.documents || ['National ID']).map(doc => (
                                                <span key={doc} className="text-[9px] font-black px-1.5 py-0.5 bg-gray-50 text-gray-500 rounded border border-gray-100">{doc}</span>
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Status</p>
                                        <span className={`text-[10px] font-black px-2 py-0.5 rounded-full ring-1 ${v.verified ? 'text-teal-600 bg-teal-50 ring-teal-100' :
                                            'text-orange-600 bg-orange-50 ring-orange-100'
                                            }`}>
                                            {v.verified ? 'Verified' : 'Pending Verification'}
                                        </span>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2 w-full lg:w-auto">
                                    {!v.verified ? (
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
                                            Verified
                                        </button>
                                    )}
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default VerifyTenants;

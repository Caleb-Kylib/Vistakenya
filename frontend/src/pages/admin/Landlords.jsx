import React, { useState, useEffect } from 'react';
import { Users, Search, Filter, ShieldCheck, ShieldAlert, CheckCircle2, XCircle, MoreVertical, ExternalLink } from 'lucide-react';
import { API_BASE_URL } from '../../config';

const ManageLandlords = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filter, setFilter] = useState('All');
    const [landlords, setLandlords] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchLandlords = async () => {
        try {
            setLoading(true);
            const response = await fetch(`${API_BASE_URL}/users?role=landlord`);
            const data = await response.json();
            setLandlords(data);
        } catch (error) {
            console.error('Error fetching landlords:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchLandlords();
    }, []);

    const handleApprove = async (id) => {
        try {
            const response = await fetch(`${API_BASE_URL}/users/${id}/verify`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ verified: true }),
            });
            if (response.ok) {
                fetchLandlords();
            }
        } catch (error) {
            console.error('Error approving landlord:', error);
        }
    };

    const handleDecline = async (id) => {
        // Logic for decline could be a separate status or just unverified
        alert('Decline functionality to be implemented with specific status');
    };

    const filteredLandlords = landlords.filter(ll => {
        const matchesSearch = (ll.name || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
            (ll.email || '').toLowerCase().includes(searchTerm.toLowerCase());
        const matchesFilter = filter === 'All' ||
            (filter === 'Verified' && ll.verified) ||
            (filter === 'Pending' && !ll.verified);
        return matchesSearch && matchesFilter;
    });

    return (
        <div className="max-w-7xl mx-auto space-y-10 pb-20">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-4xl font-black text-gray-900 tracking-tight">Landlords</h1>
                    <p className="text-gray-500 mt-2 font-medium">Approve and verify landlord accounts to maintain platform quality.</p>
                </div>
                <div className="flex items-center gap-3 bg-white p-1.5 rounded-2xl border border-gray-100 shadow-sm">
                    {['All', 'Pending', 'Verified'].map((t) => (
                        <button
                            key={t}
                            onClick={() => setFilter(t)}
                            className={`px-6 py-2 rounded-xl text-xs font-black transition-all ${filter === t ? 'bg-teal-600 text-white shadow-lg shadow-teal-100' : 'text-gray-500 hover:bg-gray-50'
                                }`}
                        >
                            {t}
                        </button>
                    ))}
                </div>
            </div>

            {/* Toolbar */}
            <div className="bg-white p-4 rounded-3xl border border-gray-100 shadow-sm flex flex-col md:flex-row gap-4 items-center">
                <div className="relative flex-1">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search landlords by name or email..."
                        className="w-full pl-11 pr-4 py-3 bg-gray-50 border-none rounded-2xl text-sm font-bold focus:ring-2 focus:ring-teal-500/20"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <button className="p-3 bg-gray-50 text-gray-500 rounded-2xl hover:bg-gray-100 transition-colors">
                    <Filter className="w-5 h-5" />
                </button>
            </div>

            {/* Landlord Table */}
            <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-xl shadow-gray-200/40 overflow-hidden">
                <div className="overflow-x-auto">
                    {loading ? (
                        <div className="p-20 text-center text-gray-400 font-bold uppercase tracking-widest">Loading Landlords...</div>
                    ) : (
                        <table className="w-full text-left">
                            <thead className="bg-gray-50/50 border-b border-gray-100">
                                <tr>
                                    <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-gray-400">Landlord Details</th>
                                    <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-gray-400">Inventory</th>
                                    <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-gray-400">Verification Card</th>
                                    <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-gray-400">Joined</th>
                                    <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-gray-400 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50">
                                {filteredLandlords.map((ll) => (
                                    <tr key={ll.id} className="group hover:bg-teal-50/30 transition-colors">
                                        <td className="px-8 py-6">
                                            <div className="flex items-center gap-4">
                                                <div className="w-10 h-10 rounded-2xl bg-teal-50 flex items-center justify-center text-teal-600 font-black shrink-0">
                                                    {(ll.name || 'L').charAt(0)}
                                                </div>
                                                <div>
                                                    <p className="font-bold text-gray-900 flex items-center gap-1.5">
                                                        {ll.name}
                                                        {ll.verified && <ShieldCheck className="w-3.5 h-3.5 text-teal-500" />}
                                                    </p>
                                                    <p className="text-xs text-gray-500 font-medium">{ll.email}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-8 py-6">
                                            <div className="flex items-center gap-2">
                                                <p className="font-black text-gray-900">{ll.propertiesCount || 0}</p>
                                                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Properties</p>
                                            </div>
                                        </td>
                                        <td className="px-8 py-6">
                                            <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border ${ll.verified ? 'bg-teal-50 text-teal-700 border-teal-100' :
                                                ll.status === 'Declined' ? 'bg-red-50 text-red-700 border-red-100' :
                                                    'bg-orange-50 text-orange-700 border-orange-100'
                                                }`}>
                                                {ll.verified ? 'Verified' : (ll.status || 'Pending Review')}
                                            </span>
                                        </td>
                                        <td className="px-8 py-6">
                                            <p className="text-xs font-bold text-gray-500">{ll.joinedDate || 'Recent'}</p>
                                        </td>
                                        <td className="px-8 py-6">
                                            <div className="flex items-center justify-end gap-2">
                                                {!ll.verified && ll.status !== 'Declined' && (
                                                    <>
                                                        <button
                                                            onClick={() => handleApprove(ll.id)}
                                                            className="px-4 py-2 bg-teal-600 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-teal-700 transition-all shadow-md shadow-teal-100"
                                                        >
                                                            Approve
                                                        </button>
                                                        <button
                                                            onClick={() => handleDecline(ll.id)}
                                                            className="px-4 py-2 bg-white text-gray-600 border border-gray-200 rounded-xl text-[10px] font-black uppercase tracking-widest hover:border-red-200 hover:text-red-500 transition-all"
                                                        >
                                                            Decline
                                                        </button>
                                                    </>
                                                )}
                                                {ll.verified && (
                                                    <button className="p-2 text-gray-400 hover:text-teal-600 transition-colors">
                                                        <ExternalLink className="w-4 h-4" />
                                                    </button>
                                                )}
                                                <button className="p-2 text-gray-400 hover:text-gray-600">
                                                    <MoreVertical className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ManageLandlords;

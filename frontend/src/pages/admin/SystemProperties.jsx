import React, { useState } from 'react';
import { Building, MapPin, Search, Filter, ShieldCheck, CheckCircle2, MoreVertical, LayoutGrid, List, Home, Layers, X, DollarSign, Check } from 'lucide-react';
import { useProperties } from '../../context/PropertyContext';

const SystemProperties = () => {
    const { properties, approveProperty } = useProperties();
    const [searchTerm, setSearchTerm] = useState('');
    const [viewMode, setViewMode] = useState('grid');
    const [selectedProperty, setSelectedProperty] = useState(null);

    const filteredProperties = properties.filter(p =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.owner.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleApprove = (id) => {
        approveProperty(id);
        setSelectedProperty(null);
        alert('Property approved and published to the network!');
    };

    return (
        <div className="max-w-7xl mx-auto space-y-10 pb-20">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-4xl font-black text-gray-900 tracking-tight uppercase tracking-tight">Supply Management</h1>
                    <p className="text-gray-500 mt-2 font-medium">Audit new listings and manage global property inventory across all regions.</p>
                </div>
                <div className="flex items-center gap-2 p-1.5 bg-gray-100 rounded-2xl">
                    <button
                        onClick={() => setViewMode('grid')}
                        className={`p-2.5 rounded-xl transition-all ${viewMode === 'grid' ? 'bg-white text-teal-600 shadow-sm' : 'text-gray-400 hover:text-gray-600'}`}
                    >
                        <LayoutGrid className="w-5 h-5" />
                    </button>
                    <button
                        onClick={() => setViewMode('list')}
                        className={`p-2.5 rounded-xl transition-all ${viewMode === 'list' ? 'bg-white text-teal-600 shadow-sm' : 'text-gray-400 hover:text-gray-600'}`}
                    >
                        <List className="w-5 h-5" />
                    </button>
                </div>
            </div>

            {/* Quick Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-teal-600 p-10 rounded-[3rem] text-white shadow-2xl shadow-teal-100">
                    <Home className="w-8 h-8 mb-4 opacity-50" />
                    <p className="text-[10px] font-black uppercase tracking-widest opacity-80 mb-2">Network Supply</p>
                    <h3 className="text-4xl font-black">{properties.length}</h3>
                </div>
                <div className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-xl shadow-gray-200/40">
                    <ShieldCheck className="w-8 h-8 mb-4 text-teal-600 opacity-50" />
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Audited Assets</p>
                    <h3 className="text-4xl font-black text-gray-900">{properties.filter(p => p.status === 'Verified').length}</h3>
                </div>
                <div className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-xl shadow-gray-200/40">
                    <Layers className="w-8 h-8 mb-4 text-teal-600 opacity-50" />
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Pending Audit</p>
                    <h3 className="text-4xl font-black text-orange-600">{properties.filter(p => p.status === 'Pending').length}</h3>
                </div>
                <div className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-xl shadow-gray-200/40">
                    <CheckCircle2 className="w-8 h-8 mb-4 text-teal-600 opacity-50" />
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Occupancy Avg</p>
                    <h3 className="text-4xl font-black text-gray-900">82%</h3>
                </div>
            </div>

            {/* toolbar */}
            <div className="bg-white p-5 rounded-[2rem] border border-gray-100 shadow-xl shadow-gray-100/50 flex flex-col md:flex-row gap-4 items-center">
                <div className="relative flex-1 w-full">
                    <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search assets by landlord, ID or location name..."
                        className="w-full pl-14 pr-6 py-4 bg-gray-50 border-none rounded-2xl text-sm font-bold focus:ring-2 focus:ring-teal-500/10 transition-all"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            {/* Property Listing */}
            {viewMode === 'grid' ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-10">
                    {filteredProperties.map(p => (
                        <div key={p.id} className="group bg-white rounded-[3rem] border border-gray-100 shadow-xl shadow-gray-200/30 overflow-hidden hover:shadow-2xl transition-all duration-700 flex flex-col">
                            <div className="h-64 overflow-hidden relative">
                                <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                                <div className="absolute top-6 left-6 flex gap-2">
                                    <span className={`px-4 py-1.5 bg-white/90 backdrop-blur-md rounded-xl text-[10px] font-black uppercase tracking-widest border ${p.status === 'Verified' ? 'text-teal-600 border-teal-100' : 'text-orange-600 border-orange-100'
                                        }`}>
                                        {p.status}
                                    </span>
                                </div>
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                                    <button
                                        onClick={() => setSelectedProperty(p)}
                                        className="px-6 py-3 bg-white text-gray-900 rounded-xl font-black text-xs uppercase tracking-widest shadow-xl hover:bg-teal-600 hover:text-white transition-all"
                                    >
                                        Inspect Audit
                                    </button>
                                </div>
                            </div>
                            <div className="p-8 flex-1 flex flex-col justify-between">
                                <div>
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <h4 className="text-2xl font-black text-gray-900 uppercase tracking-tighter">{p.name}</h4>
                                            <p className="text-xs text-gray-400 font-bold flex items-center gap-1.5 mt-1 uppercase tracking-widest">
                                                <MapPin className="w-3.5 h-3.5 text-teal-500" />
                                                {p.location}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="p-4 bg-gray-50 rounded-2xl mb-8 flex items-center justify-between">
                                        <div>
                                            <p className="text-[10px] font-black text-gray-300 uppercase tracking-widest mb-1">Provisioned By</p>
                                            <p className="text-sm font-black text-gray-800">{p.owner}</p>
                                        </div>
                                        <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-xs font-black text-teal-600 border border-gray-100 shadow-sm">
                                            {p.owner.charAt(0)}
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-8 pt-6 border-t border-gray-50">
                                    <div>
                                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Supply Yield</p>
                                        <p className="text-lg font-black text-teal-600 uppercase tracking-widest">KES {p.rent?.toLocaleString()}</p>
                                    </div>
                                    <div className="flex flex-col items-end">
                                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Audit Score</p>
                                        <div className="flex items-center gap-1.5">
                                            <CheckCircle2 className={`w-4 h-4 ${p.status === 'Verified' ? 'text-teal-500' : 'text-gray-200'}`} />
                                            <span className="text-sm font-black text-gray-700">{p.status === 'Verified' ? 'Passed' : 'Pending'}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="bg-white rounded-[3rem] border border-gray-100 shadow-xl shadow-gray-200/30 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-gray-50 border-b border-gray-100">
                                <tr>
                                    <th className="px-10 py-6 text-[10px] font-black uppercase tracking-widest text-gray-400">Asset Identity</th>
                                    <th className="px-10 py-6 text-[10px] font-black uppercase tracking-widest text-gray-400">Stakeholder</th>
                                    <th className="px-10 py-6 text-[10px] font-black uppercase tracking-widest text-gray-400">Network Yield</th>
                                    <th className="px-10 py-6 text-[10px] font-black uppercase tracking-widest text-gray-400 text-right">Audit Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50">
                                {filteredProperties.map(p => (
                                    <tr key={p.id} className="group hover:bg-teal-50/50 transition-colors cursor-pointer" onClick={() => setSelectedProperty(p)}>
                                        <td className="px-10 py-8">
                                            <div className="flex items-center gap-6">
                                                <img src={p.image} alt={p.name} className="w-16 h-16 rounded-2xl object-cover shadow-sm group-hover:scale-110 transition-transform duration-500" />
                                                <div>
                                                    <p className="font-black text-gray-900 uppercase tracking-tighter text-lg">{p.name}</p>
                                                    <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest mt-1">{p.location}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-10 py-8">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-[10px] font-black text-gray-500">
                                                    {p.owner.charAt(0)}
                                                </div>
                                                <p className="text-sm font-bold text-gray-700 uppercase tracking-widest text-[10px]">{p.owner}</p>
                                            </div>
                                        </td>
                                        <td className="px-10 py-8">
                                            <div className="flex items-center gap-4">
                                                <p className="text-sm font-black text-teal-600 uppercase tracking-widest">KES {p.rent?.toLocaleString()}</p>
                                                <span className="text-xs font-bold text-gray-200">|</span>
                                                <p className="text-xs font-black text-gray-400">{p.occupancy} Occ.</p>
                                            </div>
                                        </td>
                                        <td className="px-10 py-8 text-right">
                                            <span className={`px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest border ${p.status === 'Verified' ? 'bg-teal-50 text-teal-600 border-teal-100' : 'bg-orange-50 text-orange-600 border-orange-100'
                                                }`}>
                                                {p.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}

            {/* Audit Modal */}
            {selectedProperty && (
                <div className="fixed inset-0 bg-gray-900/60 backdrop-blur-sm z-[100] flex items-center justify-center p-6">
                    <div className="bg-white rounded-[3rem] w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl relative">
                        <button
                            onClick={() => setSelectedProperty(null)}
                            className="absolute top-8 right-8 p-3 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-all z-10"
                        >
                            <X className="w-6 h-6 text-gray-500" />
                        </button>

                        <div className="grid grid-cols-1 md:grid-cols-2">
                            <div className="h-full min-h-[400px]">
                                <img src={selectedProperty.image} alt={selectedProperty.name} className="w-full h-full object-cover" />
                            </div>
                            <div className="p-12 space-y-10">
                                <div>
                                    <h3 className="text-4xl font-black text-gray-900 tracking-tighter uppercase mb-2">{selectedProperty.name}</h3>
                                    <p className="text-gray-400 font-bold flex items-center gap-2 uppercase tracking-widest text-xs">
                                        <MapPin className="w-4 h-4 text-teal-500" />
                                        {selectedProperty.location}, {selectedProperty.city}
                                    </p>
                                </div>

                                <div className="p-8 bg-teal-50/50 rounded-[2rem] border border-teal-50">
                                    <div className="flex items-center justify-between mb-6">
                                        <p className="text-[10px] font-black text-teal-400 uppercase tracking-widest">Provisioner Identity</p>
                                        <span className="px-3 py-1 bg-teal-600 text-white text-[9px] font-black rounded-lg uppercase tracking-widest">Verified Landlord</span>
                                    </div>
                                    <h4 className="text-xl font-black text-teal-900">{selectedProperty.owner}</h4>
                                    <div className="mt-6 pt-6 border-t border-teal-100 grid grid-cols-2 gap-6">
                                        <div>
                                            <p className="text-[9px] font-black text-teal-400 uppercase tracking-widest mb-1">Listings</p>
                                            <p className="text-sm font-black text-teal-900">12 Assets</p>
                                        </div>
                                        <div>
                                            <p className="text-[9px] font-black text-teal-400 uppercase tracking-widest mb-1">Reputation</p>
                                            <p className="text-sm font-black text-teal-900">Score 98%</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-10">
                                    <div className="space-y-2">
                                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Listing Yield</p>
                                        <div className="flex items-center gap-2">
                                            <DollarSign className="w-5 h-5 text-teal-500" />
                                            <p className="text-2xl font-black text-gray-900 uppercase">KES {selectedProperty.rent?.toLocaleString()}</p>
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Category</p>
                                        <p className="text-sm font-black text-gray-900 uppercase tracking-widest bg-gray-50 px-4 py-2 rounded-xl inline-block">
                                            {selectedProperty.category}
                                        </p>
                                    </div>
                                </div>

                                <div className="pt-10 border-t border-gray-100 flex gap-4">
                                    {selectedProperty.status === 'Pending' ? (
                                        <button
                                            onClick={() => handleApprove(selectedProperty.id)}
                                            className="flex-1 bg-teal-600 text-white py-5 rounded-2xl font-black text-lg shadow-xl shadow-teal-100 hover:bg-teal-700 hover:-translate-y-1 transition-all uppercase tracking-widest flex items-center justify-center gap-3"
                                        >
                                            <Check className="w-6 h-6" />
                                            Authorize Listing
                                        </button>
                                    ) : (
                                        <button
                                            disabled
                                            className="flex-1 bg-teal-50 text-teal-600 py-5 rounded-2xl font-black text-lg uppercase tracking-widest cursor-default flex items-center justify-center gap-3"
                                        >
                                            <ShieldCheck className="w-6 h-6" />
                                            Audit Passed
                                        </button>
                                    )}
                                    0</div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SystemProperties;

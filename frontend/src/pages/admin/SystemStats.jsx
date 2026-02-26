import React from 'react';
import { BarChart3, TrendingUp, Users, Home, ShieldCheck, CreditCard, ArrowUpRight, ArrowDownRight, Activity } from 'lucide-react';

const SystemStats = () => {
    return (
        <div className="max-w-7xl mx-auto space-y-10 pb-20">
            {/* Header */}
            <div>
                <h1 className="text-4xl font-black text-gray-900 tracking-tight">Network Intelligence</h1>
                <p className="text-gray-500 mt-2 font-medium">Holistic view of system growth, revenue performance, and trust metrics.</p>
            </div>

            {/* Growth Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-[3rem] border border-gray-100 shadow-xl shadow-gray-200/30 overflow-hidden relative group">
                    <div className="absolute top-0 right-0 p-8">
                        <ArrowUpRight className="text-teal-500 w-8 h-8 opacity-20" />
                    </div>
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-4">User Growth</p>
                    <div className="flex items-end gap-3 mb-6">
                        <h3 className="text-5xl font-black text-gray-900">1.2k</h3>
                        <span className="mb-2 px-2 py-1 bg-teal-50 text-teal-600 text-[10px] font-black rounded-lg">+12.4%</span>
                    </div>
                    <div className="flex gap-2">
                        {[40, 60, 45, 90, 65, 80, 100].map((h, i) => (
                            <div key={i} className="flex-1 bg-teal-100 rounded-t-lg transition-all duration-500 group-hover:bg-teal-500" style={{ height: `${h}px` }} />
                        ))}
                    </div>
                </div>

                <div className="bg-white p-8 rounded-[3rem] border border-gray-100 shadow-xl shadow-gray-200/30 overflow-hidden relative group">
                    <div className="absolute top-0 right-0 p-8">
                        <Activity className="text-teal-500 w-8 h-8 opacity-20" />
                    </div>
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-4">Network Revenue</p>
                    <div className="flex items-end gap-3 mb-6">
                        <h3 className="text-5xl font-black text-gray-900">KES 4.2M</h3>
                        <span className="mb-2 px-2 py-1 bg-teal-50 text-teal-600 text-[10px] font-black rounded-lg">+8.2%</span>
                    </div>
                    <div className="flex gap-2">
                        {[60, 40, 80, 50, 90, 70, 85].map((h, i) => (
                            <div key={i} className="flex-1 bg-teal-100 rounded-t-lg transition-all duration-500 group-hover:bg-teal-600" style={{ height: `${h}px` }} />
                        ))}
                    </div>
                </div>

                <div className="bg-white p-8 rounded-[3rem] border border-gray-100 shadow-xl shadow-gray-200/30 overflow-hidden relative group">
                    <div className="absolute top-0 right-0 p-8">
                        <ShieldCheck className="text-orange-500 w-8 h-8 opacity-20" />
                    </div>
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-4">Trust Pass Adoption</p>
                    <div className="flex items-end gap-3 mb-6">
                        <h3 className="text-5xl font-black text-gray-900">82%</h3>
                        <span className="mb-2 px-2 py-1 bg-orange-50 text-orange-600 text-[10px] font-black rounded-lg">Target: 90%</span>
                    </div>
                    <div className="flex gap-2">
                        {[70, 75, 72, 78, 80, 81, 82].map((h, i) => (
                            <div key={i} className="flex-1 bg-orange-100 rounded-t-lg transition-all duration-500 group-hover:bg-orange-500" style={{ height: `${h}px` }} />
                        ))}
                    </div>
                </div>
            </div>

            {/* Detailed Stats */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-xl shadow-gray-200/40">
                    <h4 className="text-2xl font-black text-gray-900 mb-8 tracking-tight uppercase tracking-tight">Supply Distribution</h4>
                    <div className="space-y-6">
                        {[
                            { label: 'Apartments', value: '65%', color: 'bg-teal-600' },
                            { label: 'Detached Houses', value: '20%', color: 'bg-teal-500' },
                            { label: 'Commercial Units', value: '10%', color: 'bg-orange-500' },
                            { label: 'Others', value: '5%', color: 'bg-gray-300' }
                        ].map((item) => (
                            <div key={item.label} className="space-y-2">
                                <div className="flex justify-between text-xs font-black uppercase tracking-widest">
                                    <span className="text-gray-500">{item.label}</span>
                                    <span className="text-gray-900">{item.value}</span>
                                </div>
                                <div className="h-2 bg-gray-50 rounded-full overflow-hidden">
                                    <div className={`h-full ${item.color} rounded-full`} style={{ width: item.value }} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-teal-900 p-10 rounded-[2.5rem] shadow-2xl shadow-teal-200 text-white overflow-hidden relative">
                    <div className="relative z-10">
                        <h4 className="text-2xl font-black mb-8 tracking-tight uppercase tracking-tight">AI Trust Prediction</h4>
                        <p className="text-teal-200 text-sm font-medium mb-10 leading-relaxed">
                            Our network's collective Trust Score is trending upwards. Digital lease defaults are projected to decrease by <span className="text-white font-black underline decoration-coral-400 decoration-2 underline-offset-4">15%</span> in the next quarter.
                        </p>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="p-6 bg-white/5 rounded-[2rem] border border-white/10 backdrop-blur-sm">
                                <TrendingUp className="w-5 h-5 text-teal-400 mb-4" />
                                <p className="text-[10px] font-black text-teal-300 uppercase tracking-widest mb-1">Confidence Reg</p>
                                <h5 className="text-2xl font-black">94.2%</h5>
                            </div>
                            <div className="p-6 bg-white/5 rounded-[2rem] border border-white/10 backdrop-blur-sm">
                                <Users className="w-5 h-5 text-orange-400 mb-4" />
                                <p className="text-[10px] font-black text-teal-300 uppercase tracking-widest mb-1">Verify Cohort</p>
                                <h5 className="text-2xl font-black">2.4k</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SystemStats;

import React from 'react';
import { Home, CalendarDays, CreditCard, ArrowRight } from 'lucide-react';

const HousingCard = ({ lease }) => {
    if (!lease) {
        return (
            <div className="rounded-3xl border border-dashed border-gray-200 bg-white/80 backdrop-blur-sm shadow-sm p-6">
                <h2 className="text-xl font-black text-gray-900 flex items-center gap-2">
                    <Home className="w-5 h-5 text-teal-600" />
                    My Housing
                </h2>
                <p className="text-sm text-gray-500 mt-2">No active house yet. Apply to listings to unlock your lease details here.</p>
                <button className="mt-5 px-4 py-2 rounded-xl bg-teal-600 text-white text-sm font-bold hover:bg-teal-700 transition-colors">
                    Explore Housing
                </button>
            </div>
        );
    }

    return (
        <div className="rounded-3xl border border-white/40 bg-white/80 backdrop-blur-sm shadow-sm p-6">
            <h2 className="text-xl font-black text-gray-900 flex items-center gap-2 mb-5">
                <Home className="w-5 h-5 text-teal-600" />
                My Housing
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-2 space-y-3">
                    <p className="text-lg font-black text-gray-900">{lease.name}</p>
                    <p className="text-sm font-medium text-gray-600">{lease.location}</p>
                    <div className="grid grid-cols-2 gap-3 pt-1">
                        <div className="rounded-xl bg-gray-50 p-3">
                            <p className="text-[10px] uppercase tracking-widest font-black text-gray-400">Lease Ends</p>
                            <p className="text-sm font-bold text-gray-900 mt-1">{lease.endDate}</p>
                        </div>
                        <div className="rounded-xl bg-gray-50 p-3">
                            <p className="text-[10px] uppercase tracking-widest font-black text-gray-400">Rent Amount</p>
                            <p className="text-sm font-bold text-teal-700 mt-1">KES {lease.rent.toLocaleString()}</p>
                        </div>
                    </div>
                </div>
                <div className="rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 text-white p-4 space-y-3">
                    <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-black text-teal-300">
                        <CalendarDays className="w-4 h-4" />
                        Payment Schedule
                    </div>
                    <p className="text-sm font-bold">Monthly</p>
                    <div className="pt-2 flex flex-col gap-2">
                        <button className="w-full py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 transition-colors text-xs uppercase tracking-widest font-black flex items-center justify-center gap-2">
                            <CreditCard className="w-3.5 h-3.5" />
                            Pay Rent
                        </button>
                        <button className="w-full py-2.5 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 transition-colors text-xs uppercase tracking-widest font-black flex items-center justify-center gap-2">
                            View Lease
                            <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HousingCard;

import React from 'react';
import { Users, BedDouble } from 'lucide-react';

const CoLivingCard = ({ title, label, availableSlots, rentSplit }) => {
    return (
        <div className="rounded-3xl border border-teal-100 bg-gradient-to-br from-teal-600 to-teal-700 text-white p-6 shadow-lg shadow-teal-100">
            <p className="text-xs font-black uppercase tracking-widest text-teal-100">{title}</p>
            <h3 className="text-xl font-black mt-2">{label}</h3>
            <div className="mt-5 space-y-3">
                <div className="flex items-center justify-between text-sm">
                    <span className="inline-flex items-center gap-2 text-teal-50">
                        <Users className="w-4 h-4" />
                        Available slots
                    </span>
                    <span className="font-black">{availableSlots}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                    <span className="inline-flex items-center gap-2 text-teal-50">
                        <BedDouble className="w-4 h-4" />
                        Rent split
                    </span>
                    <span className="font-black">KES {rentSplit.toLocaleString()} each</span>
                </div>
            </div>
            <div className="mt-6 flex flex-col sm:flex-row gap-2">
                <button className="flex-1 py-2.5 rounded-xl bg-white text-teal-700 font-black text-xs uppercase tracking-widest hover:bg-teal-50">
                    Join Room
                </button>
                <button className="flex-1 py-2.5 rounded-xl border border-white/40 bg-white/10 font-black text-xs uppercase tracking-widest hover:bg-white/20">
                    Request to Share
                </button>
            </div>
        </div>
    );
};

export default CoLivingCard;

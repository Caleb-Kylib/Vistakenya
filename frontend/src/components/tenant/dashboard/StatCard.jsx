import React from 'react';

const StatCard = ({ title, value, subtitle, icon: Icon }) => {
    return (
        <div className="rounded-2xl border border-white/50 bg-white/80 backdrop-blur-sm shadow-sm p-5">
            <div className="flex items-start justify-between gap-4">
                <div>
                    <p className="text-[11px] uppercase tracking-widest font-black text-gray-400">{title}</p>
                    <p className="text-lg font-black text-gray-900 mt-2">{value}</p>
                    <p className="text-xs text-gray-500 mt-1">{subtitle}</p>
                </div>
                {Icon && (
                    <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                    </div>
                )}
            </div>
        </div>
    );
};

export default StatCard;

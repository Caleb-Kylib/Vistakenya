import React from 'react';
import { Sparkles, Home } from 'lucide-react';

const DashboardHeader = ({ user, activeLease }) => {
    const firstName = user?.name?.split(' ')?.[0] || 'Student';

    return (
        <div className="rounded-3xl border border-white/40 bg-gradient-to-r from-teal-50 via-white to-cyan-50 shadow-sm backdrop-blur-sm p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-5">
                <div className="space-y-2">
                    <p className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-black uppercase tracking-widest bg-white text-teal-700 border border-teal-100">
                        <Sparkles className="w-3.5 h-3.5" />
                        Student Housing Dashboard
                    </p>
                    <h1 className="text-2xl md:text-3xl font-black text-gray-900 tracking-tight">
                        Welcome back, {firstName} 👋
                    </h1>
                    <p className="text-sm md:text-base text-gray-600 font-medium">
                        {activeLease
                            ? `You are renting: ${activeLease.name} in ${activeLease.location}`
                            : 'No active lease'}
                    </p>
                </div>
                <div className="rounded-2xl border border-teal-100 bg-white px-4 py-3 text-sm text-gray-700 font-medium flex items-center gap-2 w-fit">
                    <Home className="w-4 h-4 text-teal-600" />
                    Find affordable rooms near campus
                </div>
            </div>
        </div>
    );
};

export default DashboardHeader;

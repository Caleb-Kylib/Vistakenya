import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const RentalScoreBadge = ({ score }) => {
    return (
        <div className="bg-teal-50/50 rounded-xl p-3 border border-teal-100 transition-all hover:border-teal-300">
            <div className="flex items-center gap-2 text-teal-700 mb-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span className="text-[10px] font-bold uppercase tracking-wider">Rental Score</span>
            </div>
            <div className="flex items-baseline gap-1">
                <span className="text-xl font-black text-gray-900">{score}</span>
                <span className="text-gray-400 text-[10px] font-medium">/100</span>
            </div>
        </div>
    );
};

export default RentalScoreBadge;

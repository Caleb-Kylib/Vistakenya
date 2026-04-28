import React from 'react';
import { ShieldCheck } from 'lucide-react';

const TrustScoreBadge = ({ score }) => {
    const numericScore = Number(score || 0);

    const scoreStyle =
        numericScore >= 75
            ? 'bg-green-50 text-green-700 border-green-100'
            : numericScore >= 50
                ? 'bg-yellow-50 text-yellow-700 border-yellow-100'
                : 'bg-red-50 text-red-700 border-red-100';

    return (
        <span
            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-[10px] font-black uppercase tracking-widest ${scoreStyle}`}
        >
            <ShieldCheck className="w-3.5 h-3.5" />
            {numericScore}/100
        </span>
    );
};

export default TrustScoreBadge;

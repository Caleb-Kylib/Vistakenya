import React from 'react';

const AnalyticsCards = ({ cards }) => {
    return cards.map((card) => {
        const Icon = card.icon;
        return (
            <div key={card.title} className="rounded-2xl border border-white/40 bg-white/80 backdrop-blur-sm shadow-sm p-4">
                <div className="flex items-start justify-between gap-3">
                    <div>
                        <p className="text-[11px] uppercase tracking-widest font-black text-gray-400">{card.title}</p>
                        <p className="text-lg md:text-xl font-black text-gray-900 mt-2">{card.value}</p>
                        {card.hint ? <p className="text-xs text-gray-500 mt-1">{card.hint}</p> : null}
                    </div>
                    {Icon ? (
                        <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center">
                            <Icon className="w-5 h-5" />
                        </div>
                    ) : null}
                </div>
            </div>
        );
    });
};

export default AnalyticsCards;

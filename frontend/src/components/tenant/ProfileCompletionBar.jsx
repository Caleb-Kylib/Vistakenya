import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const ProfileCompletionBar = ({ completionPercent, factors = [] }) => {
    return (
        <div className="w-full">
            <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-gray-700">Profile Completion</span>
                    <div className="w-1 h-1 rounded-full bg-teal-500" />
                </div>
                <span className="text-xs font-bold text-teal-600">{completionPercent}%</span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-1.5 overflow-hidden">
                <div
                    className="h-full bg-teal-600 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${completionPercent}%` }}
                />
            </div>
            {factors.length > 0 && (
                <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1">
                    {factors.map((factor, index) => (
                        <div key={index} className="flex items-center gap-1">
                            <CheckCircle2 className={`w-3 h-3 ${factor.status ? 'text-teal-500' : 'text-gray-300'}`} />
                            <span className={`text-[9px] ${factor.status ? 'text-gray-600 font-medium' : 'text-gray-400'}`}>
                                {factor.name}
                            </span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ProfileCompletionBar;

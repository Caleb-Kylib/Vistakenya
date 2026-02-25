import React from 'react';
import { cn } from '../utils/cn';

const StatCard = ({ title, value, icon, trend, trendValue, color = 'blue' }) => {
    const colorClasses = {
        blue: 'bg-blue-50 text-blue-600',
        green: 'bg-green-50 text-green-600',
        purple: 'bg-purple-50 text-purple-600',
        orange: 'bg-orange-50 text-orange-600',
        red: 'bg-red-50 text-red-600',
    };

    return (
        <div className="card p-6">
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-sm font-medium text-gray-500 truncate">{title}</p>
                    <p className="mt-1 text-3xl font-bold text-gray-900">{value}</p>
                </div>
                <div className={cn("p-3 rounded-lg", colorClasses[color] || colorClasses.blue)}>
                    {icon && React.createElement(icon, { className: 'w-6 h-6' })}
                </div>
            </div>
            {trend && (
                <div className="mt-4 flex items-center text-sm">
                    <span className={cn(
                        "font-medium",
                        trend === 'up' ? "text-green-600" : "text-red-600"
                    )}>
                        {trend === 'up' ? '+' : '-'}{trendValue}%
                    </span>
                    <span className="ml-2 text-gray-500">from last month</span>
                </div>
            )}
        </div>
    );
};

export default StatCard;

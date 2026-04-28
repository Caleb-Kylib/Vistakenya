import React from 'react';
import { CircleDollarSign } from 'lucide-react';

const rowStyles = {
    Paid: 'text-green-700 bg-green-50 border-green-100',
    Due: 'text-orange-700 bg-orange-50 border-orange-100',
    Overdue: 'text-red-700 bg-red-50 border-red-100',
    Partial: 'text-violet-700 bg-violet-50 border-violet-100'
};

const PaymentTracker = ({ payments }) => {
    return (
        <div className="rounded-3xl border border-white/40 bg-white/90 shadow-sm p-5 space-y-4">
            <h3 className="text-lg font-black text-gray-900">Payments</h3>

            <div className="grid grid-cols-3 gap-2">
                <div className="rounded-xl bg-green-50 p-3 border border-green-100">
                    <p className="text-[10px] font-black uppercase tracking-widest text-green-600">Paid</p>
                    <p className="text-sm font-black text-gray-900 mt-1">KES {payments.summary.paid.toLocaleString()}</p>
                </div>
                <div className="rounded-xl bg-orange-50 p-3 border border-orange-100">
                    <p className="text-[10px] font-black uppercase tracking-widest text-orange-600">Due</p>
                    <p className="text-sm font-black text-gray-900 mt-1">KES {payments.summary.due.toLocaleString()}</p>
                </div>
                <div className="rounded-xl bg-red-50 p-3 border border-red-100">
                    <p className="text-[10px] font-black uppercase tracking-widest text-red-600">Overdue</p>
                    <p className="text-sm font-black text-gray-900 mt-1">KES {payments.summary.overdue.toLocaleString()}</p>
                </div>
            </div>

            <div className="space-y-2">
                {payments.records.map((record) => (
                    <div key={record.id} className="rounded-xl border border-gray-100 p-3">
                        <div className="flex items-start justify-between">
                            <div>
                                <p className="text-sm font-bold text-gray-900">{record.tenant}</p>
                                <p className="text-xs text-gray-500">{record.property} | {record.plan} plan</p>
                            </div>
                            <span className={`px-2 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest border ${rowStyles[record.status] || rowStyles.Due}`}>
                                {record.status}
                            </span>
                        </div>
                        <div className="mt-2 flex items-center justify-between text-xs">
                            <span className="text-gray-500">Paid: KES {record.paid.toLocaleString()}</span>
                            <span className="font-bold text-gray-800">Expected: KES {record.expected.toLocaleString()}</span>
                        </div>
                        {record.status === 'Partial' ? (
                            <div className="mt-2 h-2 rounded-full bg-gray-100 overflow-hidden">
                                <div className="h-full bg-violet-500" style={{ width: `${Math.round((record.paid / record.expected) * 100)}%` }} />
                            </div>
                        ) : null}
                    </div>
                ))}
            </div>

            <button className="w-full py-2.5 rounded-xl bg-gray-900 text-white font-black text-xs uppercase tracking-widest hover:bg-teal-700 transition-colors inline-flex items-center justify-center gap-2">
                <CircleDollarSign className="w-4 h-4" />
                View Full Rent Ledger
            </button>
        </div>
    );
};

export default PaymentTracker;

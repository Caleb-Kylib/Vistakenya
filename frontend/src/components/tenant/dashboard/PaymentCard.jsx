import React from 'react';
import { Bell, CheckCircle2, Clock3 } from 'lucide-react';

const statusClass = {
    Paid: 'bg-green-50 text-green-700 border-green-100',
    Due: 'bg-orange-50 text-orange-700 border-orange-100',
    Overdue: 'bg-red-50 text-red-700 border-red-100',
    'Not Started': 'bg-gray-50 text-gray-700 border-gray-100'
};

const PaymentCard = ({ icon: Icon, paymentData, smsReminders, onToggleSms }) => {
    return (
        <div className="rounded-3xl border border-white/40 bg-white/80 backdrop-blur-sm shadow-sm p-6 space-y-5">
            <h2 className="text-xl font-black text-gray-900 flex items-center gap-2">
                {Icon ? <Icon className="w-5 h-5 text-teal-600" /> : null}
                Payments
            </h2>

            <div className="rounded-2xl bg-gray-50 border border-gray-100 p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div>
                    <p className="text-[11px] uppercase tracking-widest font-black text-gray-400">Upcoming Payment</p>
                    <p className="text-base font-black text-gray-900 mt-1">KES {paymentData.upcoming.amount.toLocaleString()}</p>
                    <p className="text-xs text-gray-500 mt-0.5">Due on {paymentData.upcoming.dueDate}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border ${statusClass[paymentData.upcoming.status] || statusClass.Due}`}>
                    {paymentData.upcoming.status}
                </span>
            </div>

            <div className="space-y-2">
                {paymentData.history.map((payment) => (
                    <div key={payment.id} className="flex items-center justify-between rounded-xl border border-gray-100 p-3 bg-white">
                        <div>
                            <p className="text-sm font-bold text-gray-900">KES {payment.amount.toLocaleString()}</p>
                            <p className="text-xs text-gray-500">{payment.date} via {payment.method}</p>
                        </div>
                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-green-700">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            {payment.status}
                        </span>
                    </div>
                ))}
            </div>

            <div className="rounded-2xl border border-dashed border-teal-200 bg-teal-50/50 p-4">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-sm font-bold text-gray-900 flex items-center gap-1.5">
                            <Clock3 className="w-4 h-4 text-teal-700" />
                            Partial payment
                        </p>
                        <p className="text-xs text-gray-600 mt-1">Pay part now and complete before due date.</p>
                    </div>
                    <button className="px-3 py-2 rounded-xl bg-teal-600 text-white text-xs font-black uppercase tracking-widest hover:bg-teal-700">
                        Pay KES 5,000
                    </button>
                </div>
            </div>

            <button
                onClick={onToggleSms}
                className={`w-full px-4 py-3 rounded-xl text-sm font-bold border transition-colors flex items-center justify-center gap-2 ${
                    smsReminders
                        ? 'bg-teal-600 text-white border-teal-600'
                        : 'bg-white text-gray-700 border-gray-200'
                }`}
            >
                <Bell className="w-4 h-4" />
                SMS Reminders: {smsReminders ? 'On' : 'Off'}
            </button>
        </div>
    );
};

export default PaymentCard;

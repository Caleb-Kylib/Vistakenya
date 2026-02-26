import React from 'react';
import { CreditCard, DollarSign, Calendar, ArrowRight, Download, Receipt, Info } from 'lucide-react';
import StatCard from '../../components/StatCard';

const TenantPayments = () => {
    const paymentRecords = [
        {
            id: "PAY-2024-001",
            property: "Sunset Apartments, Unit 4B",
            amount: 45000,
            date: "Feb 01, 2024",
            type: "Rent",
            status: "Completed",
            method: "M-Pesa"
        },
        {
            id: "PAY-2024-002",
            property: "Sunset Apartments, Unit 4B",
            amount: 5000,
            date: "Jan 28, 2024",
            type: "Service Charge",
            status: "Completed",
            method: "Credit Card"
        },
        {
            id: "PAY-2024-003",
            property: "Sunset Apartments, Unit 4B",
            amount: 45000,
            date: "Jan 01, 2024",
            type: "Rent",
            status: "Completed",
            method: "M-Pesa"
        },
        {
            id: "PAY-2023-145",
            property: "Sunset Apartments, Unit 4B",
            amount: 45000,
            date: "Dec 01, 2023",
            type: "Deposit",
            status: "Completed",
            method: "Bank Transfer"
        }
    ];

    return (
        <div className="max-w-7xl mx-auto space-y-10 pb-20">
            {/* Header */}
            <div>
                <h1 className="text-4xl font-black text-gray-900 tracking-tight">Finances & Payments</h1>
                <p className="text-gray-500 mt-2 font-medium">Clear your dues to maintain a high <span className="text-teal-600 font-bold tracking-tight">Rental Score</span>.</p>
            </div>

            {/* Quick Stats Dashboard */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-8 bg-teal-600 rounded-[2.5rem] text-white shadow-2xl shadow-teal-100 flex flex-col justify-between h-48">
                    <div className="flex items-center justify-between">
                        <p className="text-[10px] font-black uppercase tracking-widest opacity-80">Total Rent Paid</p>
                        <CreditCard className="w-5 h-5 opacity-50" />
                    </div>
                    <div>
                        <p className="text-4xl font-black">KES 185,000</p>
                        <p className="text-xs font-bold mt-2 opacity-80">Accumulated since Dec 2023</p>
                    </div>
                </div>

                <div className="p-8 bg-white border border-gray-100 rounded-[2.5rem] shadow-sm flex flex-col justify-between h-48 animate-fadeIn">
                    <div className="flex items-center justify-between">
                        <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest">Rent Due</p>
                        <DollarSign className="w-5 h-5 text-coral-500" />
                    </div>
                    <div>
                        <p className="text-4xl font-black text-gray-900">KES 0</p>
                        <div className="flex items-center gap-2 mt-2">
                            <span className="w-2 h-2 rounded-full bg-teal-500" />
                            <p className="text-xs font-bold text-teal-600 uppercase tracking-widest">All Clear</p>
                        </div>
                    </div>
                </div>

                <div className="p-8 bg-gray-900 rounded-[2.5rem] text-white shadow-2xl shadow-gray-200 flex flex-col justify-between h-48">
                    <div className="flex items-center justify-between">
                        <p className="text-[10px] font-black uppercase tracking-widest opacity-80">Rent Completed</p>
                        <Calendar className="w-5 h-5 opacity-50" />
                    </div>
                    <div>
                        <p className="text-4xl font-black">3 Months</p>
                        <p className="text-xs font-bold mt-2 text-teal-400 uppercase tracking-widest">Consistent Payer</p>
                    </div>
                </div>
            </div>

            {/* Payment History List */}
            <div className="space-y-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 px-2">
                    <h2 className="text-2xl font-black text-gray-900 tracking-tight">Recent Transactions</h2>
                    <div className="flex items-center gap-4">
                        <button className="flex items-center gap-2 text-xs font-black text-gray-400 uppercase tracking-widest hover:text-teal-600 transition-all">
                            Filter
                        </button>
                        <div className="w-1 h-1 rounded-full bg-gray-300" />
                        <button className="flex items-center gap-2 text-xs font-black text-gray-400 uppercase tracking-widest hover:text-teal-600 transition-all">
                            Export PDF
                        </button>
                    </div>
                </div>

                <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-xl shadow-gray-200/40 overflow-hidden overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-gray-50/50 border-b border-gray-100">
                            <tr>
                                <th className="px-10 py-6 text-[10px] font-black uppercase tracking-widest text-gray-400">ID / Date</th>
                                <th className="px-10 py-6 text-[10px] font-black uppercase tracking-widest text-gray-400">Property / Description</th>
                                <th className="px-10 py-6 text-[10px] font-black uppercase tracking-widest text-gray-400">Status</th>
                                <th className="px-10 py-6 text-[10px] font-black uppercase tracking-widest text-gray-400">Amount (KES)</th>
                                <th className="px-10 py-6 text-[10px] font-black uppercase tracking-widest text-gray-400 text-right">Receipt</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {paymentRecords.map((record) => (
                                <tr key={record.id} className="group hover:bg-teal-50/30 transition-colors">
                                    <td className="px-10 py-8">
                                        <p className="text-[10px] font-black text-teal-600 mb-1">{record.id}</p>
                                        <p className="text-sm font-bold text-gray-900">{record.date}</p>
                                    </td>
                                    <td className="px-10 py-8">
                                        <p className="font-black text-gray-900 truncate max-w-xs">{record.property}</p>
                                        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1.5 flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-gray-200" />
                                            {record.type} via {record.method}
                                        </p>
                                    </td>
                                    <td className="px-10 py-8">
                                        <span className="px-3 py-1 bg-teal-50 text-teal-700 rounded-lg text-[10px] font-black uppercase tracking-widest border border-teal-100">
                                            {record.status}
                                        </span>
                                    </td>
                                    <td className="px-10 py-8 font-black text-gray-900 text-lg">
                                        {record.amount.toLocaleString()}
                                    </td>
                                    <td className="px-10 py-8 text-right">
                                        <button className="p-3 bg-gray-50 text-gray-400 hover:bg-teal-600 hover:text-white rounded-2xl transition-all shadow-sm">
                                            <Download className="w-5 h-5" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Footer Insight */}
            <div className="p-8 bg-gray-900 rounded-[2.5rem] text-white overflow-hidden relative shadow-2xl shadow-gray-200">
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <Receipt className="w-8 h-8 text-teal-400" />
                            <h2 className="text-2xl font-black">Autopay is available</h2>
                        </div>
                        <p className="text-gray-400 font-medium max-w-md">Never miss a rent deadline again. Enable Autopay and get an instant <span className="text-teal-400 font-bold">5% Rental Score bonus</span> for consistency.</p>
                    </div>
                    <button className="px-8 py-4 bg-teal-600 text-white rounded-2xl font-black hover:bg-teal-700 transition-all shadow-xl shadow-teal-500/20 whitespace-nowrap">
                        Enable Autopay
                    </button>
                </div>
                {/* Decorative blobs */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl -mr-32 -mt-32" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl -ml-32 -mb-32" />
            </div>
        </div>
    );
};

export default TenantPayments;

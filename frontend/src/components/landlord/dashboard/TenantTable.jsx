import React from 'react';
import { UserRound, UserRoundCheck } from 'lucide-react';

const TenantTable = ({ tenants }) => {
    return (
        <div className="rounded-3xl border border-white/40 bg-white/90 shadow-sm p-5">
            <h3 className="text-lg font-black text-gray-900 mb-4">Tenants by Unit</h3>
            <div className="space-y-2">
                {tenants.map((tenant) => (
                    <div key={tenant.id} className="rounded-xl border border-gray-100 p-3 flex items-center justify-between">
                        <div>
                            <p className="font-bold text-sm text-gray-900">{tenant.name}</p>
                            <p className="text-xs text-gray-500">{tenant.property} - {tenant.unit}</p>
                            <p className="text-[11px] text-gray-400 mt-0.5">Occupancy: {tenant.occupancy}</p>
                        </div>
                        <button className="px-3 py-2 rounded-lg bg-teal-50 text-teal-700 text-[10px] font-black uppercase tracking-widest inline-flex items-center gap-1">
                            {tenant.status === 'Active' ? <UserRoundCheck className="w-3 h-3" /> : <UserRound className="w-3 h-3" />}
                            Profile
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TenantTable;

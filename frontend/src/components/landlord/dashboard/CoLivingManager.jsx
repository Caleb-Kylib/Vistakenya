import React from 'react';
import { BedSingle, UserCheck, UserPlus } from 'lucide-react';

const CoLivingManager = ({ properties, onApproveRoommate, onAssignTenant }) => {
    return (
        <div className="rounded-3xl border border-white/40 bg-white/90 shadow-sm p-5">
            <h3 className="text-lg font-black text-gray-900 mb-4">Tenants & Co-Living Management</h3>
            <div className="space-y-3">
                {properties.map((property) => (
                    <div key={property.id} className="rounded-xl border border-gray-100 p-4">
                        <div className="flex items-center justify-between gap-3 flex-wrap">
                            <div>
                                <p className="font-bold text-gray-900">{property.name}</p>
                                <p className="text-xs text-gray-500 mt-1">
                                    Occupied units: {property.occupiedUnits}/{property.units}
                                </p>
                            </div>
                            <span className="px-2.5 py-1 rounded-full bg-violet-50 text-violet-700 border border-violet-100 text-[10px] font-black uppercase tracking-widest">
                                Shared Housing
                            </span>
                        </div>

                        <div className="mt-3 rounded-xl bg-gray-50 border border-gray-100 p-3 flex items-center justify-between gap-2">
                            <p className="text-sm text-gray-700 font-medium inline-flex items-center gap-2">
                                <BedSingle className="w-4 h-4 text-teal-600" />
                                Room A: {property.slots.occupied}/{property.slots.total} occupants
                            </p>
                            <div className="flex gap-2">
                                <button
                                    onClick={() => onApproveRoommate(property.name)}
                                    className="px-3 py-2 rounded-lg bg-teal-600 text-white text-[10px] font-black uppercase tracking-widest inline-flex items-center gap-1"
                                >
                                    <UserCheck className="w-3 h-3" />
                                    Approve
                                </button>
                                <button
                                    onClick={() => onAssignTenant(property.name)}
                                    className="px-3 py-2 rounded-lg border border-gray-200 text-gray-700 text-[10px] font-black uppercase tracking-widest inline-flex items-center gap-1"
                                >
                                    <UserPlus className="w-3 h-3" />
                                    Assign Tenant
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CoLivingManager;

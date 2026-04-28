import React from 'react';
import { MapPin, BedDouble, Users, ImagePlus, PencilLine, ToggleLeft } from 'lucide-react';

const statusStyles = {
    Available: 'bg-green-50 text-green-700 border-green-100',
    Occupied: 'bg-teal-50 text-teal-700 border-teal-100',
    Shared: 'bg-violet-50 text-violet-700 border-violet-100'
};

const PropertyCard = ({ property, onEdit, onAddMedia, onToggleAvailability }) => {
    const occupancyPct = Math.round((property.occupiedUnits / property.units) * 100);

    return (
        <div className="rounded-2xl border border-white/40 bg-white shadow-sm overflow-hidden">
            <div className="h-40 relative overflow-hidden">
                <img src={property.image} alt={property.name} className="w-full h-full object-cover" />
                <span className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] uppercase tracking-widest font-black border ${statusStyles[property.status] || statusStyles.Available}`}>
                    {property.status}
                </span>
            </div>
            <div className="p-4 space-y-3">
                <div className="flex items-start justify-between gap-3">
                    <div>
                        <h3 className="font-black text-gray-900">{property.name}</h3>
                        <p className="text-xs font-medium text-gray-500 flex items-center gap-1 mt-1">
                            <MapPin className="w-3.5 h-3.5 text-teal-600" />
                            {property.location}
                        </p>
                    </div>
                    <p className="text-sm font-black text-teal-700">KES {property.price.toLocaleString()}</p>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="rounded-xl bg-gray-50 p-2.5">
                        <p className="text-gray-400 font-black uppercase tracking-widest text-[10px]">Units</p>
                        <p className="text-gray-800 font-bold mt-1">{property.units}</p>
                    </div>
                    <div className="rounded-xl bg-gray-50 p-2.5">
                        <p className="text-gray-400 font-black uppercase tracking-widest text-[10px]">Occupancy</p>
                        <p className="text-gray-800 font-bold mt-1">{property.occupiedUnits}/{property.units}</p>
                    </div>
                </div>

                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-teal-500 rounded-full" style={{ width: `${occupancyPct}%` }} />
                </div>

                <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-lg bg-gray-100 text-gray-700 text-[10px] font-bold uppercase tracking-widest">
                        <BedDouble className="w-3 h-3" />
                        {property.type}
                    </span>
                    {property.coLiving ? (
                        <span className="inline-flex items-center gap-1 px-2 py-1 rounded-lg bg-violet-100 text-violet-700 text-[10px] font-bold uppercase tracking-widest">
                            <Users className="w-3 h-3" />
                            Co-living
                        </span>
                    ) : null}
                </div>

                <div className="grid grid-cols-3 gap-2 pt-1">
                    <button onClick={onEdit} className="px-2 py-2 rounded-xl border border-gray-200 text-[10px] font-black uppercase tracking-widest text-gray-700 hover:bg-gray-50 inline-flex items-center justify-center gap-1">
                        <PencilLine className="w-3 h-3" />
                        Edit
                    </button>
                    <button onClick={onAddMedia} className="px-2 py-2 rounded-xl border border-gray-200 text-[10px] font-black uppercase tracking-widest text-gray-700 hover:bg-gray-50 inline-flex items-center justify-center gap-1">
                        <ImagePlus className="w-3 h-3" />
                        Media
                    </button>
                    <button onClick={onToggleAvailability} className="px-2 py-2 rounded-xl bg-gray-900 text-white text-[10px] font-black uppercase tracking-widest hover:bg-teal-700 inline-flex items-center justify-center gap-1">
                        <ToggleLeft className="w-3 h-3" />
                        Toggle
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PropertyCard;

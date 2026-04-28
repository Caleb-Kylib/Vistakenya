import React from 'react';
import { MapPin, GraduationCap } from 'lucide-react';

const PropertyCard = ({ property, compact = false }) => {
    return (
        <div className="rounded-2xl overflow-hidden border border-white/40 bg-white shadow-sm hover:shadow-md transition-shadow">
            <div className={`${compact ? 'h-36' : 'h-44'} relative overflow-hidden`}>
                <img src={property.image} alt={property.name} className="w-full h-full object-cover" />
                {property.nearCampus && (
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-white text-teal-700 border border-teal-100 inline-flex items-center gap-1">
                        <GraduationCap className="w-3 h-3" />
                        Near Campus
                    </span>
                )}
            </div>
            <div className="p-4 space-y-3">
                <div>
                    <h3 className="font-black text-gray-900">{property.name}</h3>
                    <p className="text-sm font-medium text-gray-500 flex items-center gap-1 mt-1">
                        <MapPin className="w-3.5 h-3.5 text-teal-600" />
                        {property.location}, {property.city}
                    </p>
                </div>
                <p className="text-xs text-teal-700 font-semibold">{property.campus}</p>
                <div className="flex flex-wrap gap-1.5">
                    {property.amenities.slice(0, 3).map((item) => (
                        <span key={item} className="px-2 py-1 rounded-lg text-[10px] font-bold bg-gray-100 text-gray-600 uppercase tracking-wide">
                            {item}
                        </span>
                    ))}
                </div>
                <div className="flex items-center justify-between pt-1">
                    <p className="text-lg font-black text-teal-700">KES {property.price.toLocaleString()}</p>
                    <div className="flex gap-2">
                        <button className="px-3 py-2 rounded-xl border border-gray-200 text-xs font-black uppercase tracking-widest text-gray-600 hover:bg-gray-50">
                            View
                        </button>
                        <button className="px-3 py-2 rounded-xl bg-teal-600 text-xs font-black uppercase tracking-widest text-white hover:bg-teal-700">
                            Apply
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PropertyCard;

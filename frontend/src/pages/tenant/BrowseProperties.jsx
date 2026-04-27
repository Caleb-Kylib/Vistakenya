import React, { useState } from 'react';
import { Search, MapPin, Bed, Bath, Plus, Filter, SlidersHorizontal, ArrowRight, ShieldCheck, Star, Calendar, Clock, X, Info } from 'lucide-react';
import { useProperties } from '../../context/PropertyContext';
import { useApplications } from '../../context/ApplicationContext';
import { useVisits } from '../../context/VisitContext';
import { useAuth } from '../../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

const BrowseProperties = () => {
    const { properties } = useProperties();
    const { addApplication } = useApplications();
    const { bookVisit } = useVisits();
    const { user } = useAuth();
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedForVisit, setSelectedForVisit] = useState(null);
    const [visitData, setVisitData] = useState({
        date: '',
        time: '',
        phone: '',
        guests: '1',
        notes: ''
    });
    const [showNewOnly, setShowNewOnly] = useState(false);

    // Only show verified properties to tenants
    const verifiedProperties = properties.filter(p => p.status === 'Verified');

    const isPropertyNew = (property) => {
        const createdAt = property.created_at || property.createdAt;
        if (!createdAt) return false;

        const created = new Date(createdAt);
        if (Number.isNaN(created.getTime())) return false;

        const diffDays = (Date.now() - created.getTime()) / (1000 * 60 * 60 * 24);
        return diffDays <= 14;
    };

    const sortedVerified = [...verifiedProperties].sort((a, b) => {
        const aTime = new Date(a.created_at || a.createdAt || 0).getTime();
        const bTime = new Date(b.created_at || b.createdAt || 0).getTime();
        return bTime - aTime;
    });

    const newlyListed = sortedVerified.filter(isPropertyNew);
    const sourceList = showNewOnly ? newlyListed : sortedVerified;

    const filtered = sourceList.filter(p =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.city.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleApply = async (property) => {
        if (!user) {
            alert('Please login to apply for properties');
            navigate('/login');
            return;
        }

        const applicationData = {
            propertyId: property.id,
            property: property.name,
            location: property.location,
            price: property.rent,
            status: 'Pending',
            tenantId: user.id || 'tenant-1',
            tenantName: user.name,
            landlord: property.owner,
            verification_status: user.verified ? 'verified' : 'pending',
            rental_score: 85,
            payment_reliability: 95,
            completed_leases_count: 2,
            completion_percent: 100,
            joined_at: 'Jan 2024',
            rating: 4.8,
            image: property.image
        };

        const result = await addApplication(applicationData);
        if (result) {
            alert('Application submitted successfully!');
            navigate('/tenant/applications');
        } else {
            alert('Failed to submit application. Please try again.');
        }
    };

    const handleBookVisit = async (e) => {
        e.preventDefault();
        if (!user) {
            alert('Please login to book a visit');
            navigate('/login');
            return;
        }

        const visitPayload = {
            property_id: selectedForVisit.id,
            property_name: selectedForVisit.name,
            landlord: selectedForVisit.owner,
            tenant_id: user.id,
            tenant_name: user.name,
            visit_date: visitData.date,
            visit_time: visitData.time,
            phone: visitData.phone,
            guests: parseInt(visitData.guests),
            notes: visitData.notes,
            status: 'Pending'
        };

        const success = await bookVisit(visitPayload);
        if (success) {
            alert('Site visit request sent! The landlord will contact you soon.');
            setSelectedForVisit(null);
            setVisitData({ date: '', time: '', phone: '', guests: '1', notes: '' });
        } else {
            alert('Failed to book visit. Please try again.');
        }
    };

    return (
        <div className="max-w-7xl mx-auto space-y-12 pb-24">
            {/* Header & Search */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-50 text-teal-600 rounded-full text-xs font-black uppercase tracking-widest border border-teal-100/50">
                        <ShieldCheck className="w-4 h-4" />
                        Student Housing Network
                    </div>
                    <h1 className="text-5xl font-black text-gray-900 tracking-tight uppercase tracking-tighter">Available Hostels</h1>
                    <p className="text-gray-400 font-medium text-lg max-w-xl leading-relaxed">
                        Verified bedsitters, studios, and co-living slots near your campus. Budget friendly and safe.
                    </p>
                </div>
            </div>

            <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-teal-700 rounded-[2.5rem] blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-white p-6 rounded-[2.5rem] border border-gray-100 shadow-2xl flex flex-col md:flex-row gap-6 items-center">
                    <div className="relative flex-1 w-full">
                        <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search by campus area (e.g. Rongai, Juja, Kasarani...)"
                            className="w-full pl-16 pr-8 py-5 bg-gray-50 border-none rounded-[1.5rem] font-bold text-gray-800 placeholder:text-gray-400 focus:ring-2 focus:ring-teal-500/10 transition-all text-lg"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <button className="w-full md:w-auto px-10 py-5 bg-gray-900 text-white rounded-[1.5rem] font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:bg-teal-600 transition-all shadow-xl">
                        <SlidersHorizontal className="w-4 h-4" />
                        Student Filters
                    </button>
                </div>
            </div>
            
            {/* View toggles */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="inline-flex items-center bg-gray-100 rounded-full p-1">
                    <button
                        type="button"
                        onClick={() => setShowNewOnly(false)}
                        className={`px-4 py-2 text-xs font-black uppercase tracking-widest rounded-full transition-all ${!showNewOnly ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-400'}`}
                    >
                        All Hostels
                    </button>
                    <button
                        type="button"
                        onClick={() => setShowNewOnly(true)}
                        className={`px-4 py-2 text-xs font-black uppercase tracking-widest rounded-full transition-all flex items-center gap-1 ${showNewOnly ? 'bg-white text-teal-700 shadow-sm' : 'text-gray-400'}`}
                    >
                        <Clock className="w-3 h-3" />
                        Near Campus
                    </button>
                </div>
                <p className="text-[11px] text-gray-400 font-medium uppercase tracking-[0.2em]">
                    {showNewOnly
                        ? 'Showing listings within 1.5km of campus'
                        : 'Showing all verified student housing'}
                </p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {filtered.map(property => (
                    <div key={property.id} className="group bg-white rounded-[3rem] border border-gray-100 shadow-xl shadow-gray-200/20 overflow-hidden hover:shadow-2xl hover:border-teal-100 transition-all duration-500 flex flex-col h-full">
                        <div className="h-72 overflow-hidden relative">
                            <img src={property.image} alt={property.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                            <div className="absolute top-6 left-6 flex flex-col gap-2">
                                <span className="px-4 py-2 bg-white/95 backdrop-blur-md rounded-xl text-[10px] font-black text-teal-600 uppercase tracking-widest border border-teal-100 shadow-lg">
                                    {property.category}
                                </span>
                                {property.isShared && (
                                    <span className="px-4 py-2 bg-orange-500 text-white rounded-xl text-[10px] font-black uppercase tracking-widest shadow-lg border border-orange-400">
                                        Co-living
                                    </span>
                                )}
                                <span className="px-4 py-2 bg-gray-900/90 backdrop-blur-md rounded-xl text-[10px] font-black text-white uppercase tracking-widest border border-white/10 shadow-lg flex items-center gap-2">
                                    <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                                    {property.trustScore || '92'}% Trust
                                </span>
                            </div>
                        </div>

                        <div className="p-10 flex-1 flex flex-col justify-between">
                            <div>
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="text-2xl font-black text-gray-900 uppercase tracking-tighter group-hover:text-teal-600 transition-colors">{property.name}</h3>
                                        <p className="text-gray-400 font-bold flex items-center gap-2 mt-2 text-xs uppercase tracking-widest">
                                            <MapPin className="w-4 h-4 text-teal-500" />
                                            {property.location}
                                        </p>
                                    </div>
                                    <p className="text-2xl font-black text-teal-600 uppercase tracking-tighter">KES {property.rent?.toLocaleString()}</p>
                                </div>

                                <div className="flex items-center gap-8 py-8 border-y border-gray-50 my-8">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-2xl bg-teal-50 flex items-center justify-center">
                                            <span className="text-xl">🎓</span>
                                        </div>
                                        <div>
                                            <p className="text-[9px] font-black text-gray-300 uppercase tracking-widest">Nearby</p>
                                            <p className="text-sm font-black text-gray-700">{property.universityNearby || 'MMU/JKUAT'}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-2xl bg-teal-50 flex items-center justify-center">
                                            <span className="text-xl">📍</span>
                                        </div>
                                        <div>
                                            <p className="text-[9px] font-black text-gray-300 uppercase tracking-widest">Distance</p>
                                            <p className="text-sm font-black text-gray-700">{property.distanceToCampus || '0.8'} KM</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col gap-4">
                                <button
                                    onClick={() => setSelectedForVisit(property)}
                                    className="w-full px-8 py-4 bg-gray-50 text-gray-900 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-teal-50 hover:text-teal-600 transition-all border border-transparent hover:border-teal-100 flex items-center justify-center gap-2"
                                >
                                    <Calendar className="w-4 h-4" />
                                    Book Viewing
                                </button>
                                <button
                                    onClick={() => handleApply(property)}
                                    className="w-full px-8 py-4 bg-teal-600 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-lg shadow-teal-100 hover:bg-teal-700 hover:-translate-y-1 transition-all flex items-center justify-center gap-2 group/btn"
                                >
                                    Reserve Hostel/Slot
                                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}

                {filtered.length === 0 && (
                    <div className="col-span-full py-32 text-center bg-white rounded-[3rem] border border-dashed border-gray-200">
                        <Search className="w-16 h-16 text-gray-100 mx-auto mb-6" />
                        <h3 className="text-2xl font-black text-gray-900 uppercase tracking-tight">Supply Unavailable</h3>
                        <p className="text-gray-400 font-bold">No assets match your current search parameters. Try adjusting your filters.</p>
                    </div>
                )}
            </div>

            {/* Visit Booking Modal */}
            {selectedForVisit && (
                <div className="fixed inset-0 z-[100] bg-gray-900/60 backdrop-blur-sm flex items-center justify-center p-6">
                    <div className="bg-white rounded-[3rem] w-full max-w-2xl overflow-hidden shadow-2xl relative animate-in fade-in zoom-in duration-300">
                        <button
                            onClick={() => setSelectedForVisit(null)}
                            className="absolute top-8 right-8 p-3 bg-gray-50 rounded-2xl text-gray-400 hover:bg-red-50 hover:text-red-500 transition-all z-10"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        <div className="grid grid-cols-1 md:grid-cols-5 h-full">
                            <div className="md:col-span-2 hidden md:block">
                                <img src={selectedForVisit.image} className="w-full h-full object-cover" alt="" />
                            </div>
                            <div className="md:col-span-3 p-10">
                                <div className="mb-8">
                                    <div className="flex items-center gap-2 text-teal-600 font-black text-[10px] uppercase tracking-widest mb-2">
                                        <Calendar className="w-4 h-4" />
                                        Visit Reservation
                                    </div>
                                    <h3 className="text-3xl font-black text-gray-900 tracking-tighter uppercase mb-2">{selectedForVisit.name}</h3>
                                    <p className="text-gray-400 font-bold flex items-center gap-2 text-xs uppercase tracking-widest">
                                        <MapPin className="w-4 h-4 text-teal-500" />
                                        {selectedForVisit.location}
                                    </p>
                                </div>

                                <form onSubmit={handleBookVisit} className="space-y-6">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Preferred Date</label>
                                            <div className="relative">
                                                <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-teal-500" />
                                                <input
                                                    required
                                                    type="date"
                                                    className="w-full pl-12 pr-4 py-4 bg-gray-50 border-none rounded-2xl text-xs font-bold focus:ring-2 focus:ring-teal-500/10 transition-all"
                                                    value={visitData.date}
                                                    onChange={(e) => setVisitData({ ...visitData, date: e.target.value })}
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Preferred Time</label>
                                            <div className="relative">
                                                <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-teal-500" />
                                                <input
                                                    required
                                                    type="time"
                                                    className="w-full pl-12 pr-4 py-4 bg-gray-50 border-none rounded-2xl text-xs font-bold focus:ring-2 focus:ring-teal-500/10 transition-all"
                                                    value={visitData.time}
                                                    onChange={(e) => setVisitData({ ...visitData, time: e.target.value })}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Phone Number</label>
                                            <input
                                                required
                                                type="tel"
                                                placeholder="+254..."
                                                className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl text-xs font-bold focus:ring-2 focus:ring-teal-500/10 transition-all"
                                                value={visitData.phone}
                                                onChange={(e) => setVisitData({ ...visitData, phone: e.target.value })}
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">No. of People</label>
                                            <select
                                                className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl text-xs font-bold focus:ring-2 focus:ring-teal-500/10 transition-all appearance-none"
                                                value={visitData.guests}
                                                onChange={(e) => setVisitData({ ...visitData, guests: e.target.value })}
                                            >
                                                <option value="1">1 Person</option>
                                                <option value="2">2 People</option>
                                                <option value="3">3 People</option>
                                                <option value="4+">4+ People</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Additional Notes</label>
                                        <textarea
                                            rows="3"
                                            placeholder="Tell the landlord what you're specifically looking for..."
                                            className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl text-xs font-bold focus:ring-2 focus:ring-teal-500/10 transition-all resize-none"
                                            value={visitData.notes}
                                            onChange={(e) => setVisitData({ ...visitData, notes: e.target.value })}
                                        ></textarea>
                                    </div>

                                    <div className="flex items-start gap-3 p-4 bg-orange-50 rounded-2xl border border-orange-100 mb-2">
                                        <Info className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                                        <p className="text-[10px] font-bold text-orange-700 leading-relaxed uppercase">
                                            This request will be sent to the provisioner. You will be notified once they confirm your preferred slot.
                                        </p>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full py-5 bg-teal-600 text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-xl shadow-teal-100 hover:bg-teal-700 transition-all active:scale-[0.98]"
                                    >
                                        Confirm Visit Request
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BrowseProperties;

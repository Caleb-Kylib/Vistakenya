import React, { useState } from 'react';
import { Play, Maximize, RotateCcw, X, Info, View } from 'lucide-react';

const tours = [
    {
        id: 1,
        title: "The Penthouse Experience",
        location: "Westlands, Nairobi",
        price: "KES 150,000/mo",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
        video: "https://assets.mixkit.co/videos/preview/mixkit-modern-apartment-with-large-windows-and-city-view-4144-large.mp4",
        description: "Experience 360-degree views of the city skyline in this premium 3-bedroom penthouse."
    },
    {
        id: 2,
        title: "Modern Minimalist Studio",
        location: "Kilimani, Nairobi",
        price: "KES 45,000/mo",
        image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80",
        video: "https://assets.mixkit.co/videos/preview/mixkit-interior-of-a-modern-living-room-4143-large.mp4",
        description: "Smart living at its best. This studio features integrated home automation and sleek finishes."
    },
    {
        id: 3,
        title: "Eco-Friendly Family Villa",
        location: "Karen, Nairobi",
        price: "KES 280,000/mo",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
        video: "https://assets.mixkit.co/videos/preview/mixkit-modern-kitchen-with-wooden-cabinets-and-white-countertops-4145-large.mp4",
        description: "A spacious 5-bedroom villa powered by solar energy, featuring a private organic garden."
    }
];

export default function VirtualTour() {
    const [activeTour, setActiveTour] = useState(null);

    return (
        <section className="py-24 px-6 bg-gray-50 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-xs font-black uppercase tracking-widest mb-4">
                            <View size={14} />
                            Immersive Experience
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight">
                            Virtual <span className="text-teal-600">Walkthroughs</span>
                        </h2>
                        <p className="text-xl text-gray-500 mt-4 font-medium leading-relaxed">
                            Explore our premium listings from the comfort of your couch. High-definition 3D tours that give you the true feeling of being home.
                        </p>
                    </div>
                    <button className="px-8 py-4 bg-white border-2 border-gray-900 text-gray-900 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-gray-900 hover:text-white transition-all shadow-xl shadow-gray-200">
                        View All Tours
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {tours.map((tour) => (
                        <div
                            key={tour.id}
                            className="group relative bg-white rounded-[2.5rem] overflow-hidden shadow-2xl shadow-gray-200 transition-all duration-500 hover:-translate-y-2"
                        >
                            {/* Image Preview */}
                            <div className="relative h-80 overflow-hidden">
                                <img
                                    src={tour.image}
                                    alt={tour.title}
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-500 flex items-center justify-center">
                                    <button
                                        onClick={() => setActiveTour(tour)}
                                        className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50 text-white transform scale-100 group-hover:scale-110 transition-transform duration-500"
                                    >
                                        <Play size={40} fill="currentColor" className="ml-2" />
                                    </button>
                                </div>

                                {/* Overlay Badge */}
                                <div className="absolute top-6 left-6">
                                    <span className="px-4 py-2 bg-teal-600 text-white text-[10px] font-black uppercase tracking-widest rounded-xl shadow-lg">
                                        360° TOUR
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-8">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="text-2xl font-black text-gray-900 tracking-tighter uppercase">{tour.title}</h3>
                                        <p className="text-xs font-bold text-gray-400 mt-1 flex items-center gap-1.5 uppercase tracking-widest">
                                            <MapPin size={14} className="text-teal-500" />
                                            {tour.location}
                                        </p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-lg font-black text-teal-600 tracking-tighter">{tour.price}</p>
                                    </div>
                                </div>
                                <p className="text-sm text-gray-500 font-medium leading-relaxed mb-6">
                                    {tour.description}
                                </p>
                                <button
                                    onClick={() => setActiveTour(tour)}
                                    className="w-full py-4 bg-gray-50 text-gray-900 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-teal-600 hover:text-white transition-all flex items-center justify-center gap-2 group/btn border border-gray-100"
                                >
                                    Launch Virtual Reality
                                    <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal - Virtual Tour Viewport */}
            {activeTour && (
                <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-0 md:p-10 animate-fadeIn">
                    <div className="relative w-full h-full max-w-6xl bg-gray-900 rounded-[3rem] overflow-hidden shadow-2xl flex flex-col">
                        {/* Header */}
                        <div className="absolute top-0 inset-x-0 p-8 flex items-center justify-between z-10 bg-gradient-to-b from-black/60 to-transparent">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-teal-600 flex items-center justify-center text-white">
                                    <View size={24} />
                                </div>
                                <div>
                                    <h4 className="text-white font-black text-xl tracking-tight uppercase">{activeTour.title}</h4>
                                    <p className="text-white/60 text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5">
                                        <MapPin size={12} className="text-teal-500" />
                                        Now Touring: {activeTour.location}
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={() => setActiveTour(null)}
                                className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-2xl flex items-center justify-center text-white transition-colors"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        {/* Viewport */}
                        <div className="flex-1 relative cursor-move">
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-full object-cover"
                                src={activeTour.video}
                            />

                            {/* Interactive Controls Overlay */}
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                <div className="p-10 bg-black/20 backdrop-blur-sm rounded-full border border-white/10 animate-pulse">
                                    <RotateCcw size={48} className="text-white opacity-40" />
                                </div>
                            </div>

                            {/* Navigation Indicators */}
                            <div className="absolute bottom-12 inset-x-0 flex justify-center gap-4">
                                <div className="px-6 py-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 flex items-center gap-4 text-white">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-teal-500 rounded-full animate-ping" />
                                        <span className="text-[10px] font-black uppercase tracking-widest">Master Bedroom</span>
                                    </div>
                                    <div className="w-px h-4 bg-white/20" />
                                    <span className="text-[10px] font-black uppercase tracking-widest opacity-40">Kitchen Area</span>
                                    <div className="w-px h-4 bg-white/20" />
                                    <span className="text-[10px] font-black uppercase tracking-widest opacity-40">Balcony View</span>
                                </div>
                            </div>
                        </div>

                        {/* Controls Bar */}
                        <div className="p-8 bg-black/40 border-t border-white/5 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <button className="p-4 bg-white/10 hover:bg-white/20 rounded-2xl text-white transition-all">
                                    <Maximize size={20} />
                                </button>
                                <button className="p-4 bg-white/10 hover:bg-white/20 rounded-2xl text-white transition-all">
                                    <Info size={20} />
                                </button>
                            </div>
                            <div className="flex items-center gap-6">
                                <div className="text-right hidden md:block">
                                    <p className="text-[9px] font-black text-white/40 uppercase tracking-widest mb-1">Total Floor Area</p>
                                    <p className="text-sm font-black text-white">2,400 SQ.FT</p>
                                </div>
                                <button className="px-10 py-4 bg-teal-600 text-white rounded-[1.25rem] font-black uppercase tracking-widest text-[10px] hover:bg-teal-700 transition-all shadow-xl shadow-teal-900/40">
                                    Book This Asset
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}

const ArrowRight = ({ size, className }) => (
    <svg
        width={size}
        height={size}
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M5 12h14"></path>
        <path d="M12 5l7 7-7 7"></path>
    </svg>
);

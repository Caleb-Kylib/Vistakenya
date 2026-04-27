import React, { useState } from 'react';
import { Camera, Plus, Trash2, Building, MapPin, DollarSign, List, FileText, Info } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useProperties } from '../../context/PropertyContext';
import { useAuth } from '../../context/AuthContext';

const AddProperty = () => {
    const navigate = useNavigate();
    const { addProperty } = useProperties();
    const { user } = useAuth();

    const [images, setImages] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        type: 'Hostel',
        location: '',
        city: 'Nairobi',
        rent: '',
        deposit: '',
        universityNearby: '',
        distanceToCampus: '',
        isShared: false,
        description: '',
        amenities: [],
    });

    const amenitiesList = [
        'Water (24/7)', 'High-speed Wi-Fi', 'Study Area', 'Security Guard',
        'CCTV', 'Borehole', 'Shared Kitchen', 'Electric Fence',
        'Laundry Area', 'Token Electricity', 'Campus Shuttle'
    ];

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({ 
            ...prev, 
            [name]: type === 'checkbox' ? checked : value 
        }));
    };

    const toggleAmenity = (amenity) => {
        setFormData(prev => ({
            ...prev,
            amenities: prev.amenities.includes(amenity)
                ? prev.amenities.filter(a => a !== amenity)
                : [...prev.amenities, amenity]
        }));
    };

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        const newImages = files.map(file => URL.createObjectURL(file));
        setImages(prev => [...prev, ...newImages].slice(0, 10));
    };

    const removeImage = (index) => {
        setImages(prev => prev.filter((_, i) => i !== index));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (parseInt(formData.rent) > 18000) {
            alert('To maintain affordability on our platform, student listings are capped at KES 18,000.');
            return;
        }

        const propertyData = {
            ...formData,
            image: images[0] || 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80',
            owner: user?.name || 'Landlord',
            verified: false,
            category: formData.type,
            trustScore: 85
        };

        const result = await addProperty(propertyData);
        if (result) {
            alert('Property listing submitted! It will be visible to students once approved by the admin.');
            navigate('/landlord/properties');
        } else {
            alert('Failed to submit property. Please try again.');
        }
    };

    return (
        <div className="max-w-4xl mx-auto pb-20">
            <div className="flex items-center gap-4 mb-8">
                <button
                    onClick={() => navigate(-1)}
                    className="p-3 bg-white border border-gray-100 rounded-2xl shadow-sm hover:bg-gray-50 transition-all"
                >
                    <Trash2 className="w-5 h-5 text-gray-500 rotate-45" />
                </button>
                <div>
                    <h1 className="text-4xl font-black text-gray-900 tracking-tight uppercase">List New Hostel</h1>
                    <p className="text-gray-500 font-medium">Add your property to Kenya's largest student housing network.</p>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
                {/* Image Upload Section */}
                <div className="bg-white rounded-[2.5rem] p-10 shadow-xl shadow-gray-200/40 border border-gray-100">
                    <div className="flex items-center gap-2 mb-8">
                        <div className="p-2.5 bg-teal-50 rounded-xl">
                            <Camera className="w-5 h-5 text-teal-600" />
                        </div>
                        <h2 className="text-xl font-black text-gray-900 tracking-tight uppercase">Hostel Gallery</h2>
                        <span className="ml-auto text-[10px] font-black text-gray-400 uppercase tracking-widest">Min 1 photo required</span>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {images.map((src, index) => (
                            <div key={index} className="relative aspect-square rounded-2xl overflow-hidden border border-gray-100 group">
                                <img src={src} alt="property" className="w-full h-full object-cover" />
                                <button
                                    type="button"
                                    onClick={() => removeImage(index)}
                                    className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
                                >
                                    <Trash2 className="w-6 h-6 text-white" />
                                </button>
                            </div>
                        ))}

                        {images.length < 10 && (
                            <label className="aspect-square rounded-2xl border-2 border-dashed border-gray-200 hover:border-teal-400 hover:bg-teal-50/30 transition-all flex flex-col items-center justify-center cursor-pointer group">
                                <Plus className="w-8 h-8 text-gray-300 group-hover:text-teal-500 mb-2" />
                                <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest group-hover:text-teal-600">Add Photo</span>
                                <input type="file" multiple className="hidden" onChange={handleImageChange} accept="image/*" />
                            </label>
                        )}
                    </div>
                </div>

                {/* Student & Campus Info */}
                <div className="bg-white rounded-[2.5rem] p-10 shadow-xl shadow-gray-200/40 border border-gray-100">
                    <div className="flex items-center gap-2 mb-8">
                        <div className="p-2.5 bg-teal-50 rounded-xl">
                            <Building className="w-5 h-5 text-teal-600" />
                        </div>
                        <h2 className="text-xl font-black text-gray-900 tracking-tight uppercase">Campus Proximity</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-2">
                            <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Nearest University</label>
                            <input
                                name="universityNearby"
                                value={formData.universityNearby}
                                onChange={handleInputChange}
                                placeholder="e.g. Multimedia University (MMU)"
                                className="w-full px-5 py-4 bg-gray-50 border-none rounded-2xl font-bold focus:ring-2 focus:ring-teal-500/20 transition-all"
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Distance to Campus (KM)</label>
                            <input
                                name="distanceToCampus"
                                type="number"
                                step="0.1"
                                value={formData.distanceToCampus}
                                onChange={handleInputChange}
                                placeholder="e.g. 0.8"
                                className="w-full px-5 py-4 bg-gray-50 border-none rounded-2xl font-bold focus:ring-2 focus:ring-teal-500/20 transition-all"
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Property Name</label>
                            <input
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                placeholder="e.g. Elite Student Suites"
                                className="w-full px-5 py-4 bg-gray-50 border-none rounded-2xl font-bold focus:ring-2 focus:ring-teal-500/20 transition-all"
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Housing Category</label>
                            <select
                                name="type"
                                className="w-full px-5 py-4 bg-gray-50 border-none rounded-2xl font-bold focus:ring-2 focus:ring-teal-500/20 transition-all"
                                value={formData.type}
                                onChange={handleInputChange}
                            >
                                <option>Hostel</option>
                                <option>Bedsitter</option>
                                <option>Shared Apartment</option>
                                <option>Studio</option>
                                <option>One Bedroom</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Pricing & Shared Housing */}
                <div className="bg-white rounded-[2.5rem] p-10 shadow-xl shadow-gray-200/40 border border-gray-100">
                    <div className="flex items-center gap-2 mb-8">
                        <div className="p-2.5 bg-teal-50 rounded-xl">
                            <DollarSign className="w-5 h-5 text-teal-600" />
                        </div>
                        <h2 className="text-xl font-black text-gray-900 tracking-tight uppercase">Rent & Slots</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-2">
                            <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Monthly Rent (Capped at 18k)</label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[10px] font-black text-gray-300">KES</span>
                                <input
                                    name="rent"
                                    type="number"
                                    value={formData.rent}
                                    onChange={handleInputChange}
                                    className="w-full pl-12 pr-5 py-4 bg-gray-50 border-none rounded-2xl font-bold focus:ring-2 focus:ring-teal-500/20 transition-all"
                                    placeholder="12,000"
                                    max="18000"
                                    required
                                />
                            </div>
                        </div>
                        <div className="flex items-center gap-4 pt-6">
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input 
                                    type="checkbox" 
                                    name="isShared"
                                    checked={formData.isShared}
                                    onChange={handleInputChange}
                                    className="sr-only peer" 
                                />
                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-teal-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-600"></div>
                                <span className="ml-3 text-xs font-black text-gray-400 uppercase tracking-widest">Enable Co-living / Sharing</span>
                            </label>
                        </div>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col md:flex-row items-center gap-6 pt-10">
                    <button
                        type="submit"
                        disabled={images.length === 0}
                        className={`w-full md:w-auto px-12 py-5 rounded-[1.5rem] font-black text-lg transition-all shadow-xl uppercase tracking-widest ${images.length === 0
                            ? 'bg-gray-100 text-gray-300 cursor-not-allowed shadow-none'
                            : 'bg-teal-600 text-white hover:bg-teal-700 shadow-teal-100 hover:-translate-y-1'
                            }`}
                    >
                        Publish Property
                    </button>
                    <button
                        type="button"
                        onClick={() => navigate(-1)}
                        className="w-full md:w-auto px-12 py-5 bg-white text-gray-400 rounded-[1.5rem] font-black text-[10px] uppercase tracking-widest border border-gray-100 hover:bg-gray-50 transition-all"
                    >
                        Save as Draft
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddProperty;

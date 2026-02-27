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
        type: 'Apartment',
        location: '',
        city: 'Nairobi',
        rent: '',
        deposit: '',
        bedrooms: '1',
        bathrooms: '1',
        description: '',
        amenities: [],
    });

    const amenitiesList = [
        'Water (24/7)', 'Backup Generator', 'High-speed Wi-Fi', 'Gym',
        'Swimming Pool', 'Security Guard', 'CCTV', 'Borehole',
        'Balcony', 'Parking space', 'Elevator', 'Electric Fence'
    ];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
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
        // In a real app, you'd upload to a CDN. Here we use object URLs for demo.
        const newImages = files.map(file => URL.createObjectURL(file));
        setImages(prev => [...prev, ...newImages].slice(0, 10));
    };

    const removeImage = (index) => {
        setImages(prev => prev.filter((_, i) => i !== index));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const propertyData = {
            ...formData,
            image: images[0] || 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80',
            owner: user?.name || 'Landlord',
            verified: false,
            category: formData.type
        };

        const result = await addProperty(propertyData);
        if (result) {
            alert('Property listing submitted! It will be visible to tenants once approved by the admin.');
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
                    <h1 className="text-4xl font-black text-gray-900 tracking-tight">List New Property</h1>
                    <p className="text-gray-500 font-medium">Provide accurate details to attract quality tenants faster.</p>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
                {/* Image Upload Section */}
                <div className="bg-white rounded-[2.5rem] p-10 shadow-xl shadow-gray-200/40 border border-gray-100">
                    <div className="flex items-center gap-2 mb-8">
                        <div className="p-2.5 bg-teal-50 rounded-xl">
                            <Camera className="w-5 h-5 text-teal-600" />
                        </div>
                        <h2 className="text-xl font-black text-gray-900 tracking-tight">Property Images</h2>
                        <span className="ml-auto text-[10px] font-black text-gray-400 uppercase tracking-widest">Min 1 image required for demo</span>
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

                {/* Basic Information */}
                <div className="bg-white rounded-[2.5rem] p-10 shadow-xl shadow-gray-200/40 border border-gray-100">
                    <div className="flex items-center gap-2 mb-8">
                        <div className="p-2.5 bg-teal-50 rounded-xl">
                            <Building className="w-5 h-5 text-teal-600" />
                        </div>
                        <h2 className="text-xl font-black text-gray-900 tracking-tight">Basic Information</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-2">
                            <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Property Name</label>
                            <input
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                placeholder="e.g. Lavender Heights"
                                className="w-full px-5 py-4 bg-gray-50 border-none rounded-2xl font-bold focus:ring-2 focus:ring-teal-500/20 transition-all"
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Property Type</label>
                            <select
                                name="type"
                                className="w-full px-5 py-4 bg-gray-50 border-none rounded-2xl font-bold focus:ring-2 focus:ring-teal-500/20 transition-all"
                                value={formData.type}
                                onChange={handleInputChange}
                            >
                                <option>Apartment</option>
                                <option>Bedsitter</option>
                                <option>One Bedroom</option>
                                <option>Two Bedroom</option>
                                <option>Studio</option>
                                <option>Townhouse</option>
                                <option>Mansionette</option>
                            </select>
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Location Area</label>
                            <input
                                name="location"
                                value={formData.location}
                                onChange={handleInputChange}
                                placeholder="e.g. Kilimani, along Dennis Pritt"
                                className="w-full px-5 py-4 bg-gray-50 border-none rounded-2xl font-bold focus:ring-2 focus:ring-teal-500/20 transition-all"
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">City</label>
                            <select
                                name="city"
                                className="w-full px-5 py-4 bg-gray-50 border-none rounded-2xl font-bold focus:ring-2 focus:ring-teal-500/20 transition-all"
                                value={formData.city}
                                onChange={handleInputChange}
                            >
                                <option>Nairobi</option>
                                <option>Mombasa</option>
                                <option>Kisumu</option>
                                <option>Nakuru</option>
                                <option>Eldoret</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Pricing & Specs */}
                <div className="bg-white rounded-[2.5rem] p-10 shadow-xl shadow-gray-200/40 border border-gray-100">
                    <div className="flex items-center gap-2 mb-8">
                        <div className="p-2.5 bg-teal-50 rounded-xl">
                            <DollarSign className="w-5 h-5 text-teal-600" />
                        </div>
                        <h2 className="text-xl font-black text-gray-900 tracking-tight">Pricing & Specifications</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="space-y-2">
                            <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Monthly Rent</label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[10px] font-black text-gray-300">KES</span>
                                <input
                                    name="rent"
                                    type="number"
                                    value={formData.rent}
                                    onChange={handleInputChange}
                                    className="w-full pl-12 pr-5 py-4 bg-gray-50 border-none rounded-2xl font-bold focus:ring-2 focus:ring-teal-500/20 transition-all"
                                    placeholder="45,000"
                                    required
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Deposit</label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[10px] font-black text-gray-300">KES</span>
                                <input
                                    name="deposit"
                                    type="number"
                                    value={formData.deposit}
                                    onChange={handleInputChange}
                                    className="w-full pl-12 pr-5 py-4 bg-gray-50 border-none rounded-2xl font-bold focus:ring-2 focus:ring-teal-500/20 transition-all"
                                    placeholder="45,000"
                                    required
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Bedrooms</label>
                            <select
                                name="bedrooms"
                                className="w-full px-5 py-4 bg-gray-50 border-none rounded-2xl font-bold focus:ring-2 focus:ring-teal-500/20 transition-all"
                                value={formData.bedrooms}
                                onChange={handleInputChange}
                            >
                                <option>Studio</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4+</option>
                            </select>
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Bathrooms</label>
                            <select
                                name="bathrooms"
                                className="w-full px-5 py-4 bg-gray-50 border-none rounded-2xl font-bold focus:ring-2 focus:ring-teal-500/20 transition-all"
                                value={formData.bathrooms}
                                onChange={handleInputChange}
                            >
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4+</option>
                            </select>
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

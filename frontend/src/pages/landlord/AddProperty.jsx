import React, { useState } from 'react';
import { Camera, Plus, Trash2, CheckCircle2, Building, MapPin, DollarSign, List, FileText, Info } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AddProperty = () => {
    const navigate = useNavigate();
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
        const newImages = files.map(file => URL.createObjectURL(file));
        setImages(prev => [...prev, ...newImages].slice(0, 10)); // Limit to 10
    };

    const removeImage = (index) => {
        setImages(prev => prev.filter((_, i) => i !== index));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Mock submission
        alert('Property listing submitted for verification!');
        navigate('/landlord/dashboard');
    };

    return (
        <div className="max-w-4xl mx-auto pb-20">
            <div className="flex items-center gap-4 mb-8">
                <button
                    onClick={() => navigate(-1)}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                    <Trash2 className="w-5 h-5 text-gray-500 rotate-45" /> {/* Using Trash2 as a quick back icon hack or just back */}
                </button>
                <div>
                    <h1 className="text-3xl font-black text-gray-900 tracking-tight">List New Property</h1>
                    <p className="text-gray-500">Provide accurate details to attract quality tenants faster.</p>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
                {/* Image Upload Section */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                    <div className="flex items-center gap-2 mb-6">
                        <Camera className="w-5 h-5 text-teal-600" />
                        <h2 className="text-lg font-bold text-gray-900">Property Images</h2>
                        <span className="ml-auto text-xs font-semibold text-gray-400">Min 6 images required</span>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {images.map((src, index) => (
                            <div key={index} className="relative aspect-square rounded-xl overflow-hidden border border-gray-100 group">
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
                            <label className="aspect-square rounded-xl border-2 border-dashed border-gray-200 hover:border-teal-400 hover:bg-teal-50/30 transition-all flex flex-col items-center justify-center cursor-pointer group">
                                <Plus className="w-8 h-8 text-gray-300 group-hover:text-teal-500 mb-2" />
                                <span className="text-xs font-bold text-gray-400 group-hover:text-teal-600">Add Photo</span>
                                <input type="file" multiple className="hidden" onChange={handleImageChange} accept="image/*" />
                            </label>
                        )}
                    </div>
                    {images.length > 0 && images.length < 6 && (
                        <p className="mt-4 text-xs font-medium text-coral-600 flex items-center gap-1">
                            <Info className="w-3 h-3" />
                            Please add at least {6 - images.length} more images for better visibility.
                        </p>
                    )}
                </div>

                {/* Basic Information */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                    <div className="flex items-center gap-2 mb-6">
                        <Building className="w-5 h-5 text-teal-600" />
                        <h2 className="text-lg font-bold text-gray-900">Basic Information</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-1">
                            <label className="text-sm font-bold text-gray-700">Property Name</label>
                            <input
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                placeholder="e.g. Lavender Heights"
                                className="input"
                                required
                            />
                        </div>
                        <div className="space-y-1">
                            <label className="text-sm font-bold text-gray-700">Property Type</label>
                            <select name="type" className="input" value={formData.type} onChange={handleInputChange}>
                                <option>Apartment</option>
                                <option>Bedsitter</option>
                                <option>One Bedroom</option>
                                <option>Two Bedroom</option>
                                <option>Studio</option>
                                <option>Townhouse</option>
                                <option>Mansionette</option>
                            </select>
                        </div>
                        <div className="space-y-1">
                            <label className="text-sm font-bold text-gray-700">Location Area</label>
                            <input
                                name="location"
                                value={formData.location}
                                onChange={handleInputChange}
                                placeholder="e.g. Kilimani, along Dennis Pritt"
                                className="input"
                                required
                            />
                        </div>
                        <div className="space-y-1">
                            <label className="text-sm font-bold text-gray-700">City</label>
                            <select name="city" className="input" value={formData.city} onChange={handleInputChange}>
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
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                    <div className="flex items-center gap-2 mb-6">
                        <DollarSign className="w-5 h-5 text-teal-600" />
                        <h2 className="text-lg font-bold text-gray-900">Pricing & Specifications</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="space-y-1">
                            <label className="text-sm font-bold text-gray-700">Monthly Rent</label>
                            <div className="relative">
                                <span className="absolute left-3 top-2.5 text-xs font-bold text-gray-400">KES</span>
                                <input
                                    name="rent"
                                    type="number"
                                    value={formData.rent}
                                    onChange={handleInputChange}
                                    className="input pl-12"
                                    placeholder="45,000"
                                    required
                                />
                            </div>
                        </div>
                        <div className="space-y-1">
                            <label className="text-sm font-bold text-gray-700">Deposit</label>
                            <div className="relative">
                                <span className="absolute left-3 top-2.5 text-xs font-bold text-gray-400">KES</span>
                                <input
                                    name="deposit"
                                    type="number"
                                    value={formData.deposit}
                                    onChange={handleInputChange}
                                    className="input pl-12"
                                    placeholder="45,000"
                                    required
                                />
                            </div>
                        </div>
                        <div className="space-y-1">
                            <label className="text-sm font-bold text-gray-700">Bedrooms</label>
                            <select name="bedrooms" className="input" value={formData.bedrooms} onChange={handleInputChange}>
                                <option>Studio</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4+</option>
                            </select>
                        </div>
                        <div className="space-y-1">
                            <label className="text-sm font-bold text-gray-700">Bathrooms</label>
                            <select name="bathrooms" className="input" value={formData.bathrooms} onChange={handleInputChange}>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4+</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Amenities */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                    <div className="flex items-center gap-2 mb-6">
                        <List className="w-5 h-5 text-teal-600" />
                        <h2 className="text-lg font-bold text-gray-900">Amenities & Features</h2>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                        {amenitiesList.map(item => (
                            <button
                                key={item}
                                type="button"
                                onClick={() => toggleAmenity(item)}
                                className={`flex items-center gap-2 p-3 rounded-xl border text-xs font-bold transition-all ${formData.amenities.includes(item)
                                        ? 'bg-teal-600 border-teal-600 text-white shadow-md shadow-teal-100'
                                        : 'bg-white border-gray-100 text-gray-600 hover:border-teal-200'
                                    }`}
                            >
                                <CheckCircle2 className={`w-4 h-4 ${formData.amenities.includes(item) ? 'text-white' : 'text-gray-300'}`} />
                                {item}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Description */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                    <div className="flex items-center gap-2 mb-6">
                        <FileText className="w-5 h-5 text-teal-600" />
                        <h2 className="text-lg font-bold text-gray-900">Detailed Description</h2>
                    </div>

                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        rows={5}
                        className="input resize-none py-4"
                        placeholder="Tell tenants about your property, unique features, neighborhood, etc..."
                    ></textarea>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col md:flex-row items-center gap-4 pt-4">
                    <button
                        type="submit"
                        disabled={images.length < 6}
                        className={`w-full md:w-auto px-10 py-4 rounded-xl font-black text-lg transition-all shadow-lg ${images.length < 6
                                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                : 'bg-teal-600 text-white hover:bg-teal-700 shadow-teal-100 hover:-translate-y-1'
                            }`}
                    >
                        Preview & Post Property
                    </button>
                    <button
                        type="button"
                        onClick={() => navigate(-1)}
                        className="w-full md:w-auto px-10 py-4 bg-white text-gray-500 rounded-xl font-bold border border-gray-200 hover:bg-gray-50"
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddProperty;

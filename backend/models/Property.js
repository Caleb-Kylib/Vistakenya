import mongoose from 'mongoose';

const propertySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String, // e.g. "Rongai", "Kasarani"
        required: true
    },
    city: {
        type: String,
        default: 'Nairobi'
    },
    universityNearby: {
        type: String, // e.g. "KCA University", "CUEA"
        required: true
    },
    distanceToCampus: {
        type: Number, // In km
        required: true
    },
    owner: {
        type: String,
        required: true
    },
    ownerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    rent: {
        type: Number,
        required: true,
        min: 8000,
        max: 18000
    },
    deposit: {
        type: Number,
        required: true
    },
    rentType: {
        type: String,
        enum: ['weekly', 'monthly'],
        default: 'monthly'
    },
    isShared: {
        type: Boolean,
        default: false
    },
    availableSlots: {
        type: Number,
        default: 1
    },
    category: {
        type: String, // Bedsitter, Studio, 1BR, 2BR
        required: true
    },
    amenities: {
        type: [String], // ["WiFi", "Water 24/7", "Security", "Parking"]
        default: []
    },
    images: {
        type: [String],
        default: []
    },
    virtualTourUrl: {
        type: String
    },
    description: {
        type: String
    },
    verificationStatus: {
        type: String,
        enum: ['Pending', 'Verified', 'Rejected'],
        default: 'Pending'
    },
    trustScore: {
        type: Number,
        default: 0,
        min: 0,
        max: 100
    }
}, {
    timestamps: true
});

const Property = mongoose.model('Property', propertySchema);

export default Property;

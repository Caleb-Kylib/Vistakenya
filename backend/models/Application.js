import mongoose from 'mongoose';

const applicationSchema = new mongoose.Schema({
    propertyId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Property',
        required: true
    },
    propertyName: {
        type: String
    },
    location: {
        type: String
    },
    price: {
        type: Number
    },
    status: {
        type: String,
        enum: ['Pending', 'Approved', 'Declined'],
        default: 'Pending'
    },
    applied_date: {
        type: String
    },
    tenantId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    tenantName: {
        type: String
    },
    landlord: {
        type: String
    },
    verification_status: {
        type: String,
        default: 'pending'
    },
    rental_score: {
        type: Number
    },
    payment_reliability: {
        type: Number
    },
    completed_leases_count: {
        type: Number
    },
    completion_percent: {
        type: Number
    },
    joined_at: {
        type: String
    },
    rating: {
        type: Number
    },
    image: {
        type: String
    }
}, {
    timestamps: true
});

const Application = mongoose.model('Application', applicationSchema);

export default Application;

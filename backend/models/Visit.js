import mongoose from 'mongoose';

const visitSchema = new mongoose.Schema({
    propertyId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Property',
        required: true
    },
    tenantId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    landlord: {
        type: String
    },
    status: {
        type: String,
        enum: ['Pending', 'Confirmed', 'Completed', 'Cancelled'],
        default: 'Pending'
    },
    scheduledDate: {
        type: Date
    },
    created_at: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true
});

const Visit = mongoose.model('Visit', visitSchema);

export default Visit;

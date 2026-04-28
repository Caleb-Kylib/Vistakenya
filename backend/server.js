import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import connectDB from './db.js';
import User from './models/User.js';
import Property from './models/Property.js';
import Application from './models/Application.js';
import Visit from './models/Visit.js';

dotenv.config();

// Connect to Database
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Helper function to generate JWT
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    });
};

// --- ROUTES ---

// 1. Auth & Users
app.post('/api/auth/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (user && (await user.matchPassword(password))) {
            res.json({
                success: true,
                user: {
                    _id: user._id,
                    name: user.name,
                    email: user.email,
                    role: user.role,
                    verified: user.verified,
                },
                token: generateToken(user._id),
            });
        } else {
            res.status(401).json({ success: false, message: 'Invalid credentials' });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

app.post('/api/auth/signup', async (req, res) => {
    try {
        const { email, name, password, role } = req.body;

        const userExists = await User.findOne({ email });

        if (userExists) {
            return res.status(400).json({ success: false, message: 'User already exists' });
        }

        const user = await User.create({
            name,
            email,
            password,
            role,
        });

        if (user) {
            res.status(201).json({
                success: true,
                user: {
                    _id: user._id,
                    name: user.name,
                    email: user.email,
                    role: user.role,
                    verified: user.verified,
                },
                token: generateToken(user._id),
            });
        } else {
            res.status(400).json({ success: false, message: 'Invalid user data' });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

// User Management (Admin)
app.get('/api/users', async (req, res) => {
    try {
        const { role } = req.query;
        let filter = {};
        if (role) {
            filter.role = role;
        }

        const users = await User.find(filter).select('-password');
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.put('/api/users/:id/verify', async (req, res) => {
    try {
        const { id } = req.params;
        const { verified } = req.body;

        const user = await User.findByIdAndUpdate(id, { verified }, { new: true }).select('-password');

        if (!user) return res.status(404).json({ message: 'User not found' });
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// 2. Properties
app.get('/api/properties', async (req, res) => {
    try {
        const { owner, status } = req.query;
        let filter = {};
        if (owner) filter.owner = owner;
        if (status) filter.status = status;

        const properties = await Property.find(filter);
        res.json(properties);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.post('/api/properties', async (req, res) => {
    try {
        const newProperty = await Property.create({
            ...req.body,
            status: 'Pending'
        });
        res.status(201).json(newProperty);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.put('/api/properties/:id/approve', async (req, res) => {
    try {
        const { id } = req.params;
        const property = await Property.findByIdAndUpdate(id, { status: 'Verified' }, { new: true });

        if (!property) return res.status(404).json({ message: 'Property not found' });
        res.json(property);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// 3. Applications
app.get('/api/applications', async (req, res) => {
    try {
        const { tenantId, landlord } = req.query;
        let filter = {};
        if (tenantId) filter.tenantId = tenantId;
        if (landlord) filter.landlord = landlord;

        const applications = await Application.find(filter);
        res.json(applications);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.post('/api/applications', async (req, res) => {
    try {
        const applicationData = {
            ...req.body,
            status: 'Pending',
            applied_date: new Date().toISOString().split('T')[0]
        };

        const newApp = await Application.create(applicationData);
        res.status(201).json(newApp);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.put('/api/applications/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;

        const application = await Application.findByIdAndUpdate(id, { status }, { new: true });

        if (!application) return res.status(404).json({ message: 'Application not found' });
        res.json(application);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// 4. Admin Stats
app.get('/api/admin/stats', async (req, res) => {
    try {
        const [
            totalUsers,
            activeListings,
            pendingApprovals,
            totalApplications
        ] = await Promise.all([
            User.countDocuments(),
            Property.countDocuments({ status: 'Verified' }),
            Property.countDocuments({ status: 'Pending' }),
            Application.countDocuments()
        ]);

        const stats = {
            totalUsers,
            activeListings,
            pendingApprovals,
            totalApplications,
            revenue: 'KES 4.2M'
        };
        res.json(stats);
    } catch (error) {
        res.status(500).json({ message: 'Error calculating stats' });
    }
});

// 5. Site Visits
app.get('/api/visits', async (req, res) => {
    try {
        const { tenantId, landlord } = req.query;
        let filter = {};
        if (tenantId) filter.tenantId = tenantId;
        if (landlord) filter.landlord = landlord;

        const visits = await Visit.find(filter);
        res.json(visits);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.post('/api/visits', async (req, res) => {
    try {
        const visitData = {
            ...req.body,
            status: 'Pending',
            created_at: new Date()
        };

        const newVisit = await Visit.create(visitData);
        res.status(201).json(newVisit);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// --- STUDENT PLATFORM EXTENSIONS ---

// 6. Student-Focused Property Search
app.get('/api/properties/student', async (req, res) => {
    try {
        const { university, maxBudget, isShared, location } = req.query;
        let filter = { verificationStatus: 'Verified' };

        if (university) filter.universityNearby = { $regex: university, $options: 'i' };
        if (maxBudget) filter.rent = { $lte: Number(maxBudget) };
        if (isShared !== undefined) filter.isShared = isShared === 'true';
        if (location) filter.location = { $regex: location, $options: 'i' };

        const properties = await Property.find(filter).sort({ distanceToCampus: 1 });
        res.json(properties);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// 7. Join Shared Housing (Co-living)
app.post('/api/properties/:id/join', async (req, res) => {
    try {
        const property = await Property.findById(req.params.id);
        if (!property) return res.status(404).json({ message: 'Property not found' });
        if (!property.isShared || property.availableSlots <= 0) {
            return res.status(400).json({ message: 'No slots available in this shared property' });
        }

        property.availableSlots -= 1;
        await property.save();

        res.json({ success: true, message: 'Successfully joined shared housing', remainingSlots: property.availableSlots });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// 8. Flexible Payments Logic (Mock)
app.post('/api/payments/flexible', async (req, res) => {
    try {
        const { applicationId, amount, paymentType } = req.body; // paymentType: 'partial' | 'full' | 'weekly'
        
        // Mocking M-Pesa / STK Push logic here
        const transactionId = "TXN" + Math.random().toString(36).substr(2, 9).toUpperCase();
        
        res.json({
            success: true,
            message: `Payment of KES ${amount} processed via ${paymentType} model.`,
            transactionId
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// 9. Offline Access: USSD Handler (Africa's Talking Concept)
app.post('/api/ussd', async (req, res) => {
    const { sessionId, serviceCode, phoneNumber, text } = req.body;
    let response = "";

    if (text === "") {
        response = "CON Welcome to Vistakenya Student Housing\n1. Search Houses\n2. My Rent Status";
    } else if (text === "1") {
        response = "CON Enter Campus Area (e.g. Rongai, Juja):";
    } else if (text.startsWith("1*")) {
        const area = text.split("*")[1];
        // Logic to fetch from DB would go here
        response = `END Found 3 houses in ${area} under KES 15k. We have sent you the details via SMS.`;
    } else {
        response = "END Invalid option.";
    }

    res.set('Content-Type', 'text/plain');
    res.send(response);
});

// 10. SMS Trigger (Mock)
app.post('/api/sms', async (req, res) => {
    const { to, message } = req.body;
    console.log(`[SMS Simulation] To: ${to} | Message: ${message}`);
    res.json({ success: true, status: 'Sent' });
});

// Start Server
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});

import { supabase } from './supabaseClient.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// --- ROUTES ---

// 1. Auth & Users
app.post('/api/auth/login', async (req, res) => {
    const { email, password } = req.body;

    const { data: user, error } = await supabase
        .from('users')
        .select('*')
        .eq('email', email)
        .eq('password', password)
        .single();

    if (user) {
        const { password, ...userWithoutPassword } = user;
        res.json({ success: true, user: userWithoutPassword });
    } else {
        res.status(401).json({ success: false, message: 'Invalid credentials or connection error' });
    }
});

app.post('/api/auth/signup', async (req, res) => {
    const { email, name, password, role } = req.body;

    // Check if user exists
    const { data: existingUser } = await supabase
        .from('users')
        .select('id')
        .eq('email', email)
        .single();

    if (existingUser) {
        return res.status(400).json({ success: false, message: 'User already exists' });
    }

    const { data: newUser, error } = await supabase
        .from('users')
        .insert([{ email, name, password, role, verified: false }])
        .select()
        .single();

    if (error) return res.status(500).json({ success: false, message: error.message });

    const { password: _, ...userWithoutPassword } = newUser;
    res.json({ success: true, user: userWithoutPassword });
});

// User Management (Admin)
app.get('/api/users', async (req, res) => {
    const { role } = req.query;
    let query = supabase.from('users').select('*');

    if (role) {
        query = query.eq('role', role);
    }

    const { data: users, error } = await query;
    if (error) return res.status(500).json({ message: error.message });

    res.json(users.map(({ password, ...u }) => u));
});

app.put('/api/users/:id/verify', async (req, res) => {
    const { id } = req.params;
    const { verified } = req.body;

    const { data: user, error } = await supabase
        .from('users')
        .update({ verified })
        .eq('id', id)
        .select()
        .single();

    if (error) return res.status(404).json({ message: 'User not found or update failed' });
    res.json(user);
});

// 2. Properties
app.get('/api/properties', async (req, res) => {
    const { owner, status } = req.query;
    let query = supabase.from('properties').select('*');

    if (owner) query = query.eq('owner', owner);
    if (status) query = query.eq('status', status);

    const { data: properties, error } = await query;
    if (error) return res.status(500).json({ message: error.message });
    res.json(properties);
});

app.post('/api/properties', async (req, res) => {
    const { data: newProperty, error } = await supabase
        .from('properties')
        .insert([{ ...req.body, status: 'Pending' }])
        .select()
        .single();

    if (error) return res.status(500).json({ message: error.message });
    res.json(newProperty);
});

app.put('/api/properties/:id/approve', async (req, res) => {
    const { id } = req.params;
    const { data: property, error } = await supabase
        .from('properties')
        .update({ status: 'Verified' })
        .eq('id', id)
        .select()
        .single();

    if (error) return res.status(404).json({ message: 'Property not found' });
    res.json(property);
});

// 3. Applications
app.get('/api/applications', async (req, res) => {
    const { tenantId, landlord } = req.query;
    let query = supabase.from('applications').select('*');

    if (tenantId) query = query.eq('tenant_id', tenantId);
    if (landlord) query = query.eq('landlord', landlord);

    const { data: applications, error } = await query;
    if (error) return res.status(500).json({ message: error.message });
    res.json(applications);
});

app.post('/api/applications', async (req, res) => {
    const applicationData = {
        ...req.body,
        status: 'Pending',
        applied_date: new Date().toISOString().split('T')[0]
    };

    const { data: newApp, error } = await supabase
        .from('applications')
        .insert([applicationData])
        .select()
        .single();

    if (error) return res.status(500).json({ message: error.message });
    res.json(newApp);
});

app.put('/api/applications/:id', async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    const { data: application, error } = await supabase
        .from('applications')
        .update({ status })
        .eq('id', id)
        .select()
        .single();

    if (error) return res.status(404).json({ message: 'Application not found' });
    res.json(application);
});

// 4. Admin Stats
app.get('/api/admin/stats', async (req, res) => {
    try {
        const [
            { count: totalUsers },
            { count: activeListings },
            { count: pendingApprovals },
            { count: totalApplications }
        ] = await Promise.all([
            supabase.from('users').select('*', { count: 'exact', head: true }),
            supabase.from('properties').select('*', { count: 'exact', head: true }).eq('status', 'Verified'),
            supabase.from('properties').select('*', { count: 'exact', head: true }).eq('status', 'Pending'),
            supabase.from('applications').select('*', { count: 'exact', head: true })
        ]);

        const stats = {
            totalUsers: totalUsers || 0,
            activeListings: activeListings || 0,
            pendingApprovals: pendingApprovals || 0,
            totalApplications: totalApplications || 0,
            revenue: 'KES 4.2M'
        };
        res.json(stats);
    } catch (error) {
        res.status(500).json({ message: 'Error calculating stats' });
    }
});

// 5. Site Visits
app.get('/api/visits', async (req, res) => {
    const { tenantId, landlord } = req.query;
    let query = supabase.from('visits').select('*');

    if (tenantId) query = query.eq('tenant_id', tenantId);
    if (landlord) query = query.eq('landlord', landlord);

    const { data: visits, error } = await query;
    if (error) res.status(500).json({ message: error.message });
    else res.json(visits);
});

app.post('/api/visits', async (req, res) => {
    const visitData = {
        ...req.body,
        status: 'Pending',
        created_at: new Date().toISOString()
    };

    const { data: newVisit, error } = await supabase
        .from('visits')
        .insert([visitData])
        .select()
        .single();

    if (error) return res.status(500).json({ message: error.message });
    res.json(newVisit);
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

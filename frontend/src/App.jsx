import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import DashboardLayout from './layouts/DashboardLayout';

// Auth Pages
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';

// Public Pages
import LandingPage from './pages/LandingPage';
import PropertiesPage from './pages/PropertiesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import HowItWorksPage from './pages/HowItWorksPage';

// Tenant Pages
import TenantDashboard from './pages/tenant/Dashboard';
// Placeholder for other pages
const Placeholder = ({ title }) => (
  <div className="card p-8 text-center">
    <h2 className="text-2xl font-bold text-gray-900 mb-4">{title}</h2>
    <p className="text-gray-500">This page is coming soon in the next update.</p>
  </div>
);

// Landlord Pages
import LandlordDashboard from './pages/landlord/Dashboard';
import AddProperty from './pages/landlord/AddProperty';

// Admin Pages
import AdminDashboard from './pages/admin/Dashboard';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/properties" element={<PropertiesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/get-started" element={<Signup />} />

          {/* Tenant Routes */}
          <Route element={<DashboardLayout />}>
            <Route path="/tenant/dashboard" element={<TenantDashboard />} />
            <Route path="/tenant/browse" element={<Placeholder title="Browse Properties" />} />
            <Route path="/tenant/applications" element={<Placeholder title="My Applications" />} />
            <Route path="/tenant/leases" element={<Placeholder title="Active Leases" />} />
            <Route path="/tenant/payments" element={<Placeholder title="Payment History" />} />
            <Route path="/tenant/verification" element={<Placeholder title="Tenant Verification" />} />
          </Route>

          {/* Landlord Routes */}
          <Route element={<DashboardLayout />}>
            <Route path="/landlord/dashboard" element={<LandlordDashboard />} />
            <Route path="/landlord/properties" element={<Placeholder title="My Properties" />} />
            <Route path="/landlord/add-property" element={<AddProperty />} />
            <Route path="/landlord/applications" element={<Placeholder title="Rental Applications" />} />
            <Route path="/landlord/leases" element={<Placeholder title="Lease Management" />} />
          </Route>

          {/* Admin Routes */}
          <Route element={<DashboardLayout />}>
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/landlords" element={<Placeholder title="Manage Landlords" />} />
            <Route path="/admin/tenants" element={<Placeholder title="Verify Tenants" />} />
            <Route path="/admin/properties" element={<Placeholder title="System Properties" />} />
            <Route path="/admin/stats" element={<Placeholder title="System Statistics" />} />
          </Route>

          {/* 404 Redirect */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;

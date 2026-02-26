import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { PropertyProvider } from './context/PropertyContext';
import { ApplicationProvider } from './context/ApplicationContext';
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

import TenantDashboard from './pages/tenant/Dashboard';
import TenantLeases from './pages/tenant/Leases';
import LeaseDetail from './pages/tenant/LeaseDetail';
import TenantVerification from './pages/tenant/Verification';
import BrowseProperties from './pages/tenant/BrowseProperties';
import TenantApplications from './pages/tenant/Applications';
import TenantPayments from './pages/tenant/Payments';

// Landlord Pages
import LandlordDashboard from './pages/landlord/Dashboard';
import AddProperty from './pages/landlord/AddProperty';
import LandlordLeases from './pages/landlord/Leases';
import LandlordProperties from './pages/landlord/Properties';
import LandlordApplications from './pages/landlord/Applications';

// Admin Pages
import AdminDashboard from './pages/admin/Dashboard';
import ManageLandlords from './pages/admin/Landlords';
import VerifyTenants from './pages/admin/Tenants';
import SystemProperties from './pages/admin/SystemProperties';
import SystemStats from './pages/admin/SystemStats';

function App() {
  return (
    <AuthProvider>
      <PropertyProvider>
        <ApplicationProvider>
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
                <Route path="/tenant/browse" element={<BrowseProperties />} />
                <Route path="/tenant/applications" element={<TenantApplications />} />
                <Route path="/tenant/leases" element={<TenantLeases />} />
                <Route path="/tenant/leases/:id" element={<LeaseDetail />} />
                <Route path="/tenant/payments" element={<TenantPayments />} />
                <Route path="/tenant/verification" element={<TenantVerification />} />
              </Route>

              {/* Landlord Routes */}
              <Route element={<DashboardLayout />}>
                <Route path="/landlord/dashboard" element={<LandlordDashboard />} />
                <Route path="/landlord/properties" element={<LandlordProperties />} />
                <Route path="/landlord/add-property" element={<AddProperty />} />
                <Route path="/landlord/applications" element={<LandlordApplications />} />
                <Route path="/landlord/leases" element={<LandlordLeases />} />
              </Route>

              {/* Admin Routes */}
              <Route element={<DashboardLayout />}>
                <Route path="/admin/dashboard" element={<AdminDashboard />} />
                <Route path="/admin/landlords" element={<ManageLandlords />} />
                <Route path="/admin/tenants" element={<VerifyTenants />} />
                <Route path="/admin/properties" element={<SystemProperties />} />
                <Route path="/admin/stats" element={<SystemStats />} />
              </Route>

              {/* 404 Redirect */}
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </Router>
        </ApplicationProvider>
      </PropertyProvider>
    </AuthProvider>
  );
}

export default App;

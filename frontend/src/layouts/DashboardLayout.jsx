import React, { useState } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { useAuth } from '../context/AuthContext';

const DashboardLayout = () => {
    const { user, loading } = useAuth();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    if (loading) return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
        </div>
    );

    if (!user) return <Navigate to="/login" />;

    return (
        <div className="antialiased bg-gray-50 dark:bg-gray-900">
            <Navbar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
            <Sidebar isOpen={isSidebarOpen} />

            <main className="p-4 sm:ml-64 pt-20 min-h-screen">
                <div className="mx-auto max-w-screen-2xl">
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default DashboardLayout;

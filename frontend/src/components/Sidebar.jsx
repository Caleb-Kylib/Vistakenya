import React from 'react';
import { NavLink } from 'react-router-dom';
import {
    LayoutDashboard,
    Search,
    ClipboardList,
    Home,
    CreditCard,
    UserCheck,
    PlusCircle,
    Users,
    Building,
    ShieldCheck,
    BarChart3
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { cn } from '../utils/cn';

const Sidebar = ({ isOpen }) => {
    const { user } = useAuth();

    if (!user) return null;

    const tenantMenu = [
        { name: 'Dashboard', path: '/tenant/dashboard', icon: LayoutDashboard },
        { name: 'Browse Properties', path: '/tenant/browse', icon: Search },
        { name: 'My Applications', path: '/tenant/applications', icon: ClipboardList },
        { name: 'Active Leases', path: '/tenant/leases', icon: Home },
        { name: 'Payments', path: '/tenant/payments', icon: CreditCard },
        { name: 'Verification', path: '/tenant/verification', icon: UserCheck },
    ];

    const landlordMenu = [
        { name: 'Dashboard', path: '/landlord/dashboard', icon: LayoutDashboard },
        { name: 'My Properties', path: '/landlord/properties', icon: Building },
        { name: 'Add Property', path: '/landlord/add-property', icon: PlusCircle },
        { name: 'Applications', path: '/landlord/applications', icon: ClipboardList },
        { name: 'Leases', path: '/landlord/leases', icon: Home },
    ];

    const adminMenu = [
        { name: 'Dashboard', path: '/admin/dashboard', icon: LayoutDashboard },
        { name: 'Landlords', path: '/admin/landlords', icon: Users },
        { name: 'Tenants', path: '/admin/tenants', icon: UserCheck },
        { name: 'Properties', path: '/admin/properties', icon: Building },
        { name: 'System Stats', path: '/admin/stats', icon: BarChart3 },
    ];

    const menu = user.role === 'admin' ? adminMenu : (user.role === 'landlord' ? landlordMenu : tenantMenu);

    return (
        <aside
            className={cn(
                "fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform bg-white border-r border-gray-200 sm:translate-x-0",
                isOpen ? "translate-x-0" : "-translate-x-full"
            )}
        >
            <div className="h-full px-3 pb-4 overflow-y-auto bg-white">
                <ul className="space-y-2 font-medium">
                    {menu.map((item) => (
                        <li key={item.path}>
                            <NavLink
                                to={item.path}
                                className={({ isActive }) => cn(
                                    "flex items-center p-2 rounded-lg group transition-colors",
                                    isActive
                                        ? "bg-primary-50 text-primary-600"
                                        : "text-gray-900 hover:bg-gray-100"
                                )}
                            >
                                <item.icon className={cn(
                                    "w-5 h-5 transition duration-75 group-hover:text-primary-600",
                                    "text-gray-500"
                                )} />
                                <span className="ml-3">{item.name}</span>
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    );
};

export default Sidebar;

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
    BarChart3,
    ArrowRightCircle,
    Compass
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { cn } from '../utils/cn';

const Sidebar = ({ isOpen }) => {
    const { user } = useAuth();

    if (!user) return null;

    const tenantMenu = [
        { name: 'Dashboard', path: '/tenant/dashboard', icon: LayoutDashboard },
        { name: 'Listed Properties', path: '/tenant/browse', icon: Compass },
        { name: 'Active Requests', path: '/tenant/applications', icon: ClipboardList },
        { name: 'Digital Leases', path: '/tenant/leases', icon: Building },
        { name: 'Wallet System', path: '/tenant/payments', icon: CreditCard },
        { name: 'Trust Score', path: '/tenant/verification', icon: ShieldCheck },
    ];

    const landlordMenu = [
        { name: 'Alpha Portal', path: '/landlord/dashboard', icon: LayoutDashboard },
        { name: 'Inventory Assets', path: '/landlord/properties', icon: Building },
        { name: 'List New Asset', path: '/landlord/add-property', icon: PlusCircle },
        { name: 'Tenant Screening', path: '/landlord/applications', icon: ClipboardList },
        { name: 'Lease Archive', path: '/landlord/leases', icon: Home },
    ];

    const adminMenu = [
        { name: 'Dashboard', path: '/admin/dashboard', icon: LayoutDashboard },
        { name: 'Listed Properties', path: '/admin/properties', icon: Building },
        { name: 'Landlords', path: '/admin/landlords', icon: Users },
        { name: 'Identity Verifications', path: '/admin/tenants', icon: ShieldCheck },
        { name: 'Network Analytics', path: '/admin/stats', icon: BarChart3 },
    ];

    const menu = user.role === 'admin' ? adminMenu : (user.role === 'landlord' ? landlordMenu : tenantMenu);

    return (
        <aside
            className={cn(
                "fixed top-0 left-0 z-40 w-72 h-screen pt-28 transition-all duration-500 ease-in-out px-4 block sm:translate-x-0",
                isOpen ? "translate-x-0" : "-translate-x-full"
            )}
        >
            <div className="h-full px-4 pb-8 overflow-y-auto bg-white/60 backdrop-blur-xl border border-white/40 shadow-2xl shadow-gray-200/40 rounded-[2.5rem] flex flex-col pt-8">
                {/* User Section Branding */}
                <div className="px-4 mb-10">
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] mb-2">Navigation System</p>
                    <div className="w-12 h-1 bg-gradient-to-r from-teal-500 to-teal-700 rounded-full"></div>
                </div>

                <ul className="space-y-3 font-medium flex-1">
                    {menu.map((item) => (
                        <li key={item.path}>
                            <NavLink
                                to={item.path}
                                className={({ isActive }) => cn(
                                    "flex items-center gap-4 p-4 rounded-2xl group transition-all duration-300 relative overflow-hidden",
                                    isActive
                                        ? "bg-gray-900 text-white shadow-xl shadow-gray-900/10 scale-[1.02]"
                                        : "text-gray-500 hover:bg-white hover:text-teal-600 hover:shadow-lg hover:shadow-teal-100/50"
                                )}
                            >
                                <item.icon className={cn(
                                    "w-5 h-5 transition-transform duration-500 group-hover:scale-110",
                                    "group-hover:text-teal-400"
                                )} />
                                <span className="text-xs font-black uppercase tracking-widest">{item.name}</span>

                                {({ isActive }) => isActive && (
                                    <div className="absolute right-4">
                                        <ArrowRightCircle className="w-4 h-4 text-teal-400 animate-pulse" />
                                    </div>
                                )}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                {/* Integration Promo / Status */}
                <div className="mt-auto p-6 bg-gradient-to-br from-teal-600 to-teal-800 rounded-3xl text-white relative overflow-hidden group">
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                    <div className="relative z-10">
                        <ShieldCheck className="w-8 h-8 mb-4 text-teal-300" />
                        <h4 className="text-sm font-black uppercase tracking-tight leading-tight mb-2">Secured Node</h4>
                        <p className="text-[10px] text-teal-50 font-medium opacity-80 leading-relaxed">
                            Your session is end-to-end encrypted within the Vistakenya Network.
                        </p>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;

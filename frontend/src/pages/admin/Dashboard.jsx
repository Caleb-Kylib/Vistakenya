import React from 'react';
import { Users, Building, ShieldCheck, BarChart3, Clock, ArrowRight, UserCheck, LayoutGrid, Activity } from 'lucide-react';
import StatCard from '../../components/StatCard';
import { Link } from 'react-router-dom';

import { API_BASE_URL } from '../../config';

const AdminDashboard = () => {
    const [systemStats, setSystemStats] = React.useState(null);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        const fetchStats = async () => {
            try {
                const response = await fetch(`${API_BASE_URL}/admin/stats`);
                const data = await response.json();
                setSystemStats(data);
            } catch (error) {
                console.error('Error fetching admin stats:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchStats();
    }, []);

    // Summary data mapped from real backend stats
    const stats = [
        {
            title: "Total Users",
            value: systemStats ? systemStats.totalUsers.toLocaleString() : "...",
            icon: Users,
            color: "teal",
            link: "/admin/landlords"
        },
        {
            title: "Active Listings",
            value: systemStats ? systemStats.activeListings.toLocaleString() : "...",
            icon: Building,
            color: "teal",
            link: "/admin/properties"
        },
        {
            title: "Pending Reviews",
            value: systemStats ? systemStats.pendingApprovals.toLocaleString() : "0",
            icon: Clock,
            color: "orange",
            link: "/admin/properties"
        },
        {
            title: "Platform Revenue",
            value: systemStats ? systemStats.revenue : "...",
            icon: Activity,
            color: "green",
            link: "/admin/stats"
        },
    ];

    const alerts = [
        { id: 1, type: 'Landlord', name: 'Samuel Maina', action: 'Identity Verification', time: '2 mins ago' },
        { id: 2, type: 'Tenant', name: 'Sarah Atieno', action: 'Trust Pass Application', time: '45 mins ago' },
        { id: 3, type: 'Property', name: 'Skyline Suites', action: 'New Listing Review', time: '2 hours ago' },
    ];

    return (
        <div className="max-w-7xl mx-auto space-y-10 pb-20">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-4xl font-black text-gray-900 tracking-tight uppercase tracking-tight">Dashboard</h1>
                    <p className="text-gray-500 mt-2 font-medium flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        Network systems nominal. Last sync: Feb 26, 2026 15:05:22
                    </p>
                </div>
                <div className="flex gap-4">
                    <Link to="/admin/stats" className="px-6 py-3 bg-teal-600 text-white rounded-2xl font-black text-sm hover:bg-teal-700 transition-all flex items-center gap-2 shadow-xl shadow-teal-100 uppercase tracking-widest">
                        <BarChart3 className="w-4 h-4" />
                        Reports
                    </Link>
                </div>
            </div>

            {/* Global Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat) => (
                    <Link key={stat.title} to={stat.link} className="group">
                        <StatCard
                            title={stat.title}
                            value={stat.value}
                            icon={stat.icon}
                            color={stat.color}
                        />
                    </Link>
                ))}
            </div>

            {/* Action Hub */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                <div className="lg:col-span-2 space-y-6">
                    <div className="flex items-center justify-between">
                        <h2 className="text-2xl font-black text-gray-900 tracking-tight uppercase tracking-tight">Action Queue</h2>
                        <span className="text-[10px] font-black text-teal-600 uppercase tracking-widest bg-teal-50 px-3 py-1 rounded-full">3 High Priority</span>
                    </div>

                    <div className="space-y-4">
                        {alerts.map((alert) => (
                            <div key={alert.id} className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-xl shadow-gray-200/40 flex items-center justify-between group hover:border-teal-100 transition-all">
                                <div className="flex items-center gap-5">
                                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${alert.type === 'Landlord' ? 'bg-teal-50 text-teal-600' :
                                        alert.type === 'Tenant' ? 'bg-teal-50 text-teal-600' : 'bg-orange-50 text-orange-600'
                                        }`}>
                                        {alert.type === 'Landlord' ? <Users className="w-6 h-6" /> :
                                            alert.type === 'Tenant' ? <UserCheck className="w-6 h-6" /> : <Building className="w-6 h-6" />}
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none mb-1">{alert.type}</p>
                                        <h4 className="text-lg font-black text-gray-900">{alert.name}</h4>
                                        <p className="text-xs text-gray-500 font-bold">{alert.action}</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 flex items-center gap-1.5 justify-end">
                                        <Clock className="w-3 h-3" />
                                        {alert.time}
                                    </p>
                                    <Link
                                        to={alert.type === 'Landlord' ? '/admin/landlords' : alert.type === 'Tenant' ? '/admin/tenants' : '/admin/properties'}
                                        className="inline-flex items-center gap-2 px-6 py-2.5 bg-gray-900 text-white rounded-xl text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all hover:bg-teal-600"
                                    >
                                        Execute Review
                                        <ArrowRight className="w-3 h-3" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="space-y-6">
                    <h2 className="text-2xl font-black text-gray-900 tracking-tight uppercase tracking-tight">System Navigation</h2>
                    <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-xl shadow-gray-200/40 space-y-4">
                        <Link to="/admin/landlords" className="flex items-center justify-between p-4 rounded-2xl bg-gray-50 hover:bg-teal-50 group transition-all">
                            <div className="flex items-center gap-3">
                                <Users className="w-5 h-5 text-gray-400 group-hover:text-teal-600" />
                                <span className="text-sm font-black text-gray-700 uppercase tracking-widest text-[10px]">Manage Landlords</span>
                            </div>
                            <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-teal-600" />
                        </Link>
                        <Link to="/admin/tenants" className="flex items-center justify-between p-4 rounded-2xl bg-gray-50 hover:bg-teal-50 group transition-all">
                            <div className="flex items-center gap-3">
                                <UserCheck className="w-5 h-5 text-gray-400 group-hover:text-teal-600" />
                                <span className="text-sm font-black text-gray-700 uppercase tracking-widest text-[10px]">Verify Tenants</span>
                            </div>
                            <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-teal-600" />
                        </Link>
                        <Link to="/admin/properties" className="flex items-center justify-between p-4 rounded-2xl bg-gray-50 hover:bg-orange-50 group transition-all">
                            <div className="flex items-center gap-3">
                                <LayoutGrid className="w-5 h-5 text-gray-400 group-hover:text-orange-600" />
                                <span className="text-sm font-black text-gray-700 uppercase tracking-widest text-[10px]">System Properties</span>
                            </div>
                            <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-orange-600" />
                        </Link>
                        <Link to="/admin/stats" className="flex items-center justify-between p-4 rounded-2xl bg-gray-50 hover:bg-teal-900 group transition-all">
                            <div className="flex items-center gap-3">
                                <Activity className="w-5 h-5 text-gray-400 group-hover:text-white" />
                                <span className="text-sm font-black text-gray-700 uppercase tracking-widest text-[10px] group-hover:text-white">Network Intelligence</span>
                            </div>
                            <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-white" />
                        </Link>
                    </div>

                    <div className="bg-teal-900 p-8 rounded-[2.5rem] text-white shadow-2xl shadow-teal-200">
                        <Activity className="w-10 h-10 mb-6 text-teal-300" />
                        <h4 className="text-xl font-black mb-2 uppercase tracking-tight">Admin Portal v1.2</h4>
                        <p className="text-xs text-teal-300 font-bold leading-relaxed mb-6">
                            Verified account required for all system-level modifications. Identity re-audit scheduled for next month.
                        </p>
                        <div className="flex items-center gap-2">
                            <span className="bg-teal-500 w-2 h-2 rounded-full" />
                            <span className="text-[10px] font-black uppercase tracking-widest">Identity Secured</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;

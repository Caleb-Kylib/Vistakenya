import { Building, Users, Search, Filter, ShieldCheck, CheckCircle2, XCircle, Clock } from 'lucide-react';
import TenantTrustCard from '../../components/tenant/TenantTrustCard';
import { useApplications } from '../../context/ApplicationContext';
import { useAuth } from '../../context/AuthContext';

const LandlordApplications = () => {
    const { user } = useAuth();
    const { applications, updateApplicationStatus, loading } = useApplications();
    const [filter, setFilter] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');
    const [showVerifiedOnly, setShowVerifiedOnly] = useState(false);

    // Filter applications for this landlord
    const myApplications = applications.filter(app => app.landlord === user?.name);

    const handleAccept = (appId) => {
        updateApplicationStatus(appId, 'Approved');
    };

    const handleDecline = (appId) => {
        updateApplicationStatus(appId, 'Declined');
    };

    const filteredApplications = myApplications.filter(app => {
        const matchesFilter = filter === 'All' || app.status === filter;
        const matchesSearch = app.tenantName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            app.property?.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesVerified = !showVerifiedOnly || app.verification_status === 'verified';
        return matchesFilter && matchesSearch && matchesVerified;
    });

    const statusCounts = {
        All: myApplications.length,
        Pending: myApplications.filter(a => a.status === 'Pending').length,
        Approved: myApplications.filter(a => a.status === 'Approved').length,
        Declined: myApplications.filter(a => a.status === 'Declined').length,
    };

    return (
        <div className="max-w-7xl mx-auto space-y-10 pb-20">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-4xl font-black text-gray-900 tracking-tight">Rental Applications</h1>
                    <p className="text-gray-500 mt-2 font-medium">Review and manage tenant applications for your properties.</p>
                </div>
            </div>

            {/* Filters & Search */}
            <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-xl shadow-gray-200/40 space-y-6">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    <div className="flex flex-wrap items-center gap-2">
                        {['All', 'Pending', 'Approved', 'Declined'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setFilter(tab)}
                                className={`px-5 py-2.5 rounded-xl text-xs font-black transition-all flex items-center gap-2 ${filter === tab
                                    ? 'bg-teal-600 text-white shadow-lg shadow-teal-100'
                                    : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
                                    }`}
                            >
                                {tab}
                                <span className={`px-1.5 py-0.5 rounded-full text-[10px] ${filter === tab ? 'bg-teal-500 text-white' : 'bg-gray-200 text-gray-600'
                                    }`}>
                                    {statusCounts[tab]}
                                </span>
                            </button>
                        ))}
                    </div>

                    <div className="flex items-center gap-4 flex-1 lg:justify-end">
                        <div className="relative flex-1 max-w-sm">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search by tenant..."
                                className="w-full pl-11 pr-4 py-3 bg-gray-50 border-none rounded-2xl text-sm font-bold focus:ring-2 focus:ring-teal-500/20"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>

                        <button
                            onClick={() => setShowVerifiedOnly(!showVerifiedOnly)}
                            className={`flex items-center gap-2 px-4 py-3 rounded-2xl text-xs font-black transition-all border ${showVerifiedOnly
                                ? 'bg-teal-50 border-teal-200 text-teal-700'
                                : 'bg-white border-gray-100 text-gray-500 hover:bg-gray-50'
                                }`}
                        >
                            <ShieldCheck className={`w-4 h-4 ${showVerifiedOnly ? 'text-teal-600' : 'text-gray-400'}`} />
                            Verified Only
                        </button>
                    </div>
                </div>
            </div>

            {/* Applications Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {loading ? (
                    <div className="col-span-full py-20 text-center text-gray-400 font-bold uppercase tracking-widest animate-pulse">Retrieving Network Applications...</div>
                ) : filteredApplications.map((app) => (
                    <div key={app.id} className="space-y-4">
                        <div className="flex items-center justify-between px-2">
                            <div className="flex items-center gap-2">
                                <Building className="w-3.5 h-3.5 text-gray-400" />
                                <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">
                                    {app.property}
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                {app.status === 'Approved' && <CheckCircle2 className="w-4 h-4 text-teal-500" />}
                                {app.status === 'Declined' && <XCircle className="w-4 h-4 text-coral-500" />}
                                {app.status === 'Pending' && <Clock className="w-4 h-4 text-orange-500" />}
                                <span className={`text-[10px] font-black uppercase tracking-widest ${app.status === 'Approved' ? 'text-teal-600' :
                                    app.status === 'Declined' ? 'text-coral-600' : 'text-orange-600'
                                    }`}>
                                    {app.status}
                                </span>
                            </div>
                        </div>

                        <TenantTrustCard
                            tenant={app}
                            variant="compact"
                            showActions={app.status === 'Pending'}
                            onAccept={() => handleAccept(app.id)}
                            onReject={() => handleDecline(app.id)}
                        />

                        {app.status !== 'Pending' && (
                            <div className={`p-4 rounded-2xl border flex items-center justify-between transition-all ${app.status === 'Approved'
                                ? 'bg-teal-50 border-teal-100 text-teal-800'
                                : 'bg-gray-50 border-gray-100 text-gray-500'
                                }`}>
                                <div className="flex items-center gap-2">
                                    <ShieldCheck className={`w-4 h-4 ${app.status === 'Approved' ? 'text-teal-600' : 'text-gray-400'}`} />
                                    <span className="text-xs font-bold">Decision Recorded</span>
                                </div>
                                <span className="text-[10px] font-black uppercase">{app.applied_date}</span>
                            </div>
                        )}
                    </div>
                ))}

                {filteredApplications.length === 0 && (
                    <div className="col-span-full py-20 text-center">
                        <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Users className="w-10 h-10 text-gray-300" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">No applications found</h3>
                        <p className="text-gray-500 mt-2">Try adjusting your filters or search terms.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default LandlordApplications;

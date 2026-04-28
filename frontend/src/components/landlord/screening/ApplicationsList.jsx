import React, { useEffect, useMemo, useState } from 'react';
import ApplicantCard from './ApplicantCard';
import ApplicantModal from './ApplicantModal';

const mockApplicants = [
    {
        id: 'app-1',
        name: 'Kevin Mutiso',
        phone: '+254712345678',
        university: 'USIU',
        studentStatus: 'Verified',
        budgetRange: 'KES 8,000 - 12,000',
        propertyApplied: 'Rongai Student Court',
        trustScore: 82,
        verificationStatus: { phoneVerified: true, idUploaded: true },
        status: 'Pending',
        coLiving: true,
        coLivingInfo: { occupants: '2/3', rentSplit: 7500 },
        scoring: { profileCompleteness: 20, phoneVerification: 20, studentVerification: 20, activityHistory: 22 }
    },
    {
        id: 'app-2',
        name: 'Faith Njeri',
        phone: '+254733333221',
        university: 'JKUAT',
        studentStatus: 'Verified',
        budgetRange: 'KES 12,000 - 16,000',
        propertyApplied: 'Juja Urban Studios',
        trustScore: 68,
        verificationStatus: { phoneVerified: true, idUploaded: false },
        status: 'Pending',
        coLiving: false,
        scoring: { profileCompleteness: 20, phoneVerification: 20, studentVerification: 20, activityHistory: 8 }
    },
    {
        id: 'app-3',
        name: 'Brian Otieno',
        phone: '+254744445551',
        university: 'UoN',
        studentStatus: 'Pending',
        budgetRange: 'KES 10,000 - 14,000',
        propertyApplied: 'Madaraka Co-living Space',
        trustScore: 44,
        verificationStatus: { phoneVerified: false, idUploaded: false },
        status: 'Rejected',
        coLiving: true,
        coLivingInfo: { occupants: '1/3', rentSplit: 6500 },
        scoring: { profileCompleteness: 14, phoneVerification: 0, studentVerification: 10, activityHistory: 20 }
    }
];

const ApplicationsList = () => {
    const [applicants, setApplicants] = useState([]);
    const [selectedApplicant, setSelectedApplicant] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchApplications = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/applications');
                const data = await response.json();

                if (!response.ok || !Array.isArray(data) || data.length === 0) {
                    setApplicants(mockApplicants);
                    return;
                }

                const mapped = data.map((item) => ({
                    id: item.id || item._id,
                    name: item.tenantName || item.tenant || 'Applicant',
                    phone: item.phone || '+254700000000',
                    university: item.university || 'KU',
                    studentStatus: item.student_status || 'Verified',
                    budgetRange: item.budgetRange || 'KES 8,000 - 18,000',
                    propertyApplied: item.property || 'Student Listing',
                    trustScore: Number(item.rental_score || 60),
                    verificationStatus: {
                        phoneVerified: Boolean(item.phone_verified ?? true),
                        idUploaded: Boolean(item.id_uploaded ?? false)
                    },
                    status: item.status || 'Pending',
                    coLiving: Boolean(item.coLiving || false),
                    coLivingInfo: item.coLivingInfo || { occupants: '2/3', rentSplit: 7500 },
                    scoring: item.scoring || {
                        profileCompleteness: 20,
                        phoneVerification: 20,
                        studentVerification: 20,
                        activityHistory: 20
                    }
                }));
                setApplicants(mapped);
            } catch (error) {
                setApplicants(mockApplicants);
            } finally {
                setLoading(false);
            }
        };

        fetchApplications();
    }, []);

    const stats = useMemo(
        () => ({
            pending: applicants.filter((a) => a.status === 'Pending').length,
            approved: applicants.filter((a) => a.status === 'Approved').length,
            rejected: applicants.filter((a) => a.status === 'Rejected').length
        }),
        [applicants]
    );

    const updateStatus = async (id, status) => {
        const endpoint = status === 'Approved' ? 'approve' : 'reject';
        try {
            await fetch(`http://localhost:5000/api/applications/${id}/${endpoint}`, { method: 'PUT' });
        } catch (error) {
            // Keep UI optimistic for demo mode
        }
        setApplicants((prev) => prev.map((app) => (app.id === id ? { ...app, status } : app)));
        if (selectedApplicant?.id === id) {
            setSelectedApplicant((prev) => ({ ...prev, status }));
        }
    };

    const handleApprove = (id) => updateStatus(id, 'Approved');
    const handleReject = (id) => updateStatus(id, 'Rejected');
    const handleRequestInfo = (id) => {
        const target = applicants.find((app) => app.id === id);
        if (target) alert(`Request sent to ${target.name} for more details.`);
    };

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                <div>
                    <h2 className="text-2xl font-black text-gray-900 tracking-tight">Tenant Screening</h2>
                    <p className="text-sm text-gray-500">Review student applications and make quick decisions.</p>
                </div>
                <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1.5 rounded-full bg-orange-50 text-orange-700 border border-orange-100 text-xs font-black uppercase tracking-widest">{stats.pending} Pending</span>
                    <span className="px-3 py-1.5 rounded-full bg-green-50 text-green-700 border border-green-100 text-xs font-black uppercase tracking-widest">{stats.approved} Approved</span>
                    <span className="px-3 py-1.5 rounded-full bg-red-50 text-red-700 border border-red-100 text-xs font-black uppercase tracking-widest">{stats.rejected} Rejected</span>
                </div>
            </div>

            {loading ? (
                <div className="rounded-2xl bg-white border border-gray-100 p-8 text-center text-sm text-gray-400 font-bold uppercase tracking-widest">
                    Loading applications...
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                    {applicants.map((applicant) => (
                        <ApplicantCard
                            key={applicant.id}
                            applicant={applicant}
                            onViewDetails={setSelectedApplicant}
                            onApprove={handleApprove}
                            onReject={handleReject}
                        />
                    ))}
                </div>
            )}

            <ApplicantModal
                applicant={selectedApplicant}
                onClose={() => setSelectedApplicant(null)}
                onApprove={handleApprove}
                onReject={handleReject}
                onRequestInfo={handleRequestInfo}
            />
        </div>
    );
};

export default ApplicationsList;
export { mockApplicants };

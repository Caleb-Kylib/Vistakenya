import React from 'react';
import { ShieldCheck, ShieldAlert, Shield, CheckCircle2, User, FileText, CreditCard, History, AlertCircle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const TenantTrustCard = ({ payments = [], activeLeases = [] }) => {
  const { user } = useAuth() || {};

  // Mock data for demo/fallback purposes if user context is missing or incomplete
  const userData = {
    name: user?.name || "Juma Hussein",
    photo: user?.photo_url || null,
    verification_status: user?.verification_status || "verified", // verified, pending, not_submitted
    completed_leases_count: user?.completed_leases_count ?? 2,
    late_payment_count: user?.late_payment_count ?? 0,
    disputes_count: user?.disputes_count ?? 0,
    phone: user?.phone || "+254 712 345 678",
    id_uploaded: user?.id_uploaded ?? true,
  };

  // 1. Rental Score Logic
  let rentalScore = 0;
  if (userData.verification_status === 'verified') rentalScore += 40;
  if (userData.late_payment_count === 0) rentalScore += 30;
  if (userData.completed_leases_count > 0) rentalScore += 20;
  if (userData.disputes_count === 0) rentalScore += 10;

  // 2. Payment Reliability %
  const totalPayments = payments?.length || 5; // Fallback for display
  const onTimePayments = payments?.filter(p => p.status === 'Completed').length || 5;
  const paymentReliability = totalPayments > 0 ? Math.round((onTimePayments / totalPayments) * 100) : 0;

  // 3. Profile Completion Logic
  const photoUploaded = Boolean(userData.photo);
  const idUploaded = Boolean(userData.id_uploaded);
  const phoneAdded = Boolean(userData.phone);
  const hasCompletedLease = userData.completed_leases_count > 0;

  const completionFactors = [
    { name: 'Profile photo', status: photoUploaded },
    { name: 'ID uploaded', status: idUploaded },
    { name: 'Phone number', status: phoneAdded },
    { name: 'Completed lease', status: hasCompletedLease }
  ];

  const completionPercent = Math.round((completionFactors.filter(f => f.status).length / completionFactors.length) * 100);

  // ID Status Badge Helper
  const getIDStatusBadge = (status) => {
    switch (status) {
      case 'verified':
        return (
          <div className="flex items-center space-x-1.5 px-3 py-1 rounded-full bg-green-50 text-green-700 text-xs font-semibold border border-green-100">
            <CheckCircle2 className="w-3 h-3" />
            <span>Verified</span>
          </div>
        );
      case 'pending':
        return (
          <div className="flex items-center space-x-1.5 px-3 py-1 rounded-full bg-yellow-50 text-yellow-700 text-xs font-semibold border border-yellow-100">
            <AlertCircle className="w-3 h-3" />
            <span>Pending Verification</span>
          </div>
        );
      default:
        return (
          <div className="flex items-center space-x-1.5 px-3 py-1 rounded-full bg-red-50 text-red-700 text-xs font-semibold border border-red-100">
            <ShieldAlert className="w-3 h-3" />
            <span>Not Submitted</span>
          </div>
        );
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      {/* Top Section: Profile info */}
      <div className="p-6 md:p-8">
        <div className="flex flex-col md:flex-row md:items-center gap-6">
          {/* Profile Photo */}
          <div className="relative flex-shrink-0 mx-auto md:mx-0">
            {userData.photo ? (
              <img
                src={userData.photo}
                alt={userData.name}
                className="w-24 h-24 rounded-full object-cover ring-4 ring-teal-50 border-2 border-white"
              />
            ) : (
              <div className="w-24 h-24 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center ring-4 ring-teal-50 border-2 border-white">
                <User size={40} />
              </div>
            )}
            {userData.verification_status === 'verified' && (
              <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-1 shadow-sm">
                <ShieldCheck className="w-6 h-6 text-teal-600 fill-teal-50" />
              </div>
            )}
          </div>

          {/* Name and Badges */}
          <div className="flex-1 text-center md:text-left">
            <div className="flex flex-col md:flex-row md:items-center gap-3 mb-2 justify-center md:justify-start">
              <h2 className="text-2xl font-bold text-gray-900">{userData.name}</h2>
              <div className="flex flex-wrap items-center gap-2 justify-center md:justify-start">
                {userData.verification_status === 'verified' && (
                  <div className="flex items-center space-x-1.5 px-3 py-1 rounded-full bg-teal-600 text-white text-xs font-bold uppercase tracking-wider shadow-sm">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Verified Tenant</span>
                  </div>
                )}
                {getIDStatusBadge(userData.verification_status)}
              </div>
            </div>
            <p className="text-gray-500 text-sm flex items-center justify-center md:justify-start gap-1">
              <History className="w-4 h-4" />
              Member since Jan 2024 • {userData.completed_leases_count} Leases Completed
            </p>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Leases Completed */}
          <div className="bg-gray-50/50 rounded-xl p-4 border border-gray-100 transition-all hover:border-teal-200">
            <div className="flex items-center gap-3 text-gray-500 mb-2">
              <FileText className="w-4 h-4" />
              <span className="text-xs font-medium uppercase tracking-wider">Leases Completed</span>
            </div>
            <div className="text-2xl font-bold text-gray-900">{userData.completed_leases_count}</div>
          </div>

          {/* Active Lease */}
          <div className="bg-gray-50/50 rounded-xl p-4 border border-gray-100 transition-all hover:border-teal-200">
            <div className="flex items-center gap-3 text-gray-500 mb-2">
              <Shield className="w-4 h-4" />
              <span className="text-xs font-medium uppercase tracking-wider">Active Lease</span>
            </div>
            <div className="text-sm font-semibold text-gray-900 truncate">
              {activeLeases.length > 0 ? activeLeases[0].property.split(',')[0] : 'None Active'}
            </div>
            <div className="text-[10px] text-gray-400 mt-1">Verified with TenantPass</div>
          </div>

          {/* Payment Reliability */}
          <div className="bg-gray-50/50 rounded-xl p-4 border border-gray-100 transition-all hover:border-teal-200">
            <div className="flex items-center gap-3 text-gray-500 mb-2">
              <CreditCard className="w-4 h-4" />
              <span className="text-xs font-medium uppercase tracking-wider">Reliability</span>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-extrabold text-teal-600">{paymentReliability}%</span>
            </div>
            <div className="text-[10px] text-gray-400 mt-1">Based on {totalPayments} payments</div>
          </div>

          {/* Rental Score */}
          <div className="bg-teal-50/30 rounded-xl p-4 border border-teal-100 transition-all hover:border-teal-300">
            <div className="flex items-center gap-3 text-teal-700 mb-2">
              <CheckCircle2 className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider">Rental Score</span>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-black text-gray-900">{rentalScore}</span>
              <span className="text-gray-400 text-xs font-medium">/100</span>
            </div>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="mt-8 pt-6 border-t border-gray-50">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold text-gray-700">Profile Completion</span>
              <div className="w-1.5 h-1.5 rounded-full bg-teal-500" />
            </div>
            <span className="text-sm font-bold text-teal-600">{completionPercent}%</span>
          </div>
          <div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden">
            <div
              className="h-full bg-teal-600 rounded-full transition-all duration-1000 ease-out"
              style={{ width: `${completionPercent}%` }}
            />
          </div>
          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
            {completionFactors.map((factor, index) => (
              <div key={index} className="flex items-center gap-1.5">
                <CheckCircle2 className={`w-3.5 h-3.5 ${factor.status ? 'text-teal-500' : 'text-gray-300'}`} />
                <span className={`text-[11px] ${factor.status ? 'text-gray-600 font-medium' : 'text-gray-400'}`}>
                  {factor.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TenantTrustCard;

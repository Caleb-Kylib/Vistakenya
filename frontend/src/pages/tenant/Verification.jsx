import React, { useState } from 'react';
import {
    ShieldCheck,
    Upload,
    FileText,
    User,
    Home,
    CheckCircle2,
    AlertCircle,
    Info,
    ArrowRight,
    Camera
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const TenantVerification = () => {
    const { user, updateUser } = useAuth();
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isCompleted, setIsCompleted] = useState(false);

    const [formData, setFormData] = useState({
        idNumber: '',
        idType: 'National ID',
        kraPin: '',
        nextOfKinName: '',
        nextOfKinPhone: '',
        idFile: null,
        residenceFile: null,
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e, field) => {
        const file = e.target.files[0];
        if (file) {
            setFormData(prev => ({ ...prev, [field]: file }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Update user state to verified
        updateUser({
            verification_status: 'verified',
            verification_date: new Date().toLocaleDateString(),
            completion_percent: 100,
            completion_factors: [
                { name: 'Photo', status: true },
                { name: 'ID', status: true },
                { name: 'Phone', status: true },
                { name: 'Lease', status: true }
            ]
        });

        setIsSubmitting(false);
        setIsCompleted(true);
    };

    if (isCompleted) {
        return (
            <div className="max-w-2xl mx-auto py-20 text-center animate-fadeInUp">
                <div className="w-24 h-24 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg shadow-teal-50">
                    <ShieldCheck className="w-12 h-12" />
                </div>
                <h1 className="text-3xl font-black text-gray-900 mb-4">Verification Submitted!</h1>
                <p className="text-gray-500 mb-10 max-w-md mx-auto">
                    Your documents have been encrypted and sent for final processing. Your dashboard will now display your <strong>Verified Tenant</strong> badge.
                </p>
                <button
                    onClick={() => navigate('/tenant/dashboard')}
                    className="px-10 py-4 bg-teal-600 text-white rounded-2xl font-black shadow-xl shadow-teal-100 hover:bg-teal-700 transition-all hover:-translate-y-1"
                >
                    Back to Dashboard
                </button>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto pb-20">
            <div className="mb-10">
                <h1 className="text-4xl font-black text-gray-900 tracking-tight">Identity Verification</h1>
                <p className="text-gray-500 mt-2 font-medium">Verify your identity to unlock premium listings and boost your credibility.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                {/* Steps Sidebar */}
                <div className="space-y-4">
                    <div className={`p-5 rounded-2xl border transition-all ${step === 1 ? 'bg-teal-600 border-teal-600 text-white shadow-xl shadow-teal-100' : 'bg-white border-gray-100 text-gray-400'}`}>
                        <div className="flex items-center gap-4">
                            <span className={`w-8 h-8 rounded-full flex items-center justify-center font-black text-sm ${step === 1 ? 'bg-white text-teal-600' : 'bg-gray-100 text-gray-400'}`}>1</span>
                            <div className="font-bold uppercase tracking-widest text-[10px]">Basic Details</div>
                        </div>
                    </div>
                    <div className={`p-5 rounded-2xl border transition-all ${step === 2 ? 'bg-teal-600 border-teal-600 text-white shadow-xl shadow-teal-100' : 'bg-white border-gray-100 text-gray-400'}`}>
                        <div className="flex items-center gap-4">
                            <span className={`w-8 h-8 rounded-full flex items-center justify-center font-black text-sm ${step === 2 ? 'bg-white text-teal-600' : 'bg-gray-100 text-gray-400'}`}>2</span>
                            <div className="font-bold uppercase tracking-widest text-[10px]">Document Uploads</div>
                        </div>
                    </div>
                    <div className={`p-5 rounded-2xl border transition-all ${step === 3 ? 'bg-teal-600 border-teal-600 text-white shadow-xl shadow-teal-100' : 'bg-white border-gray-100 text-gray-400'}`}>
                        <div className="flex items-center gap-4">
                            <span className={`w-8 h-8 rounded-full flex items-center justify-center font-black text-sm ${step === 3 ? 'bg-white text-teal-600' : 'bg-gray-100 text-gray-400'}`}>3</span>
                            <div className="font-bold uppercase tracking-widest text-[10px]">Review & Submit</div>
                        </div>
                    </div>

                    <div className="mt-10 p-6 bg-teal-50 rounded-3xl border border-teal-100">
                        <div className="flex items-center gap-2 text-teal-700 mb-3">
                            <ShieldCheck size={18} />
                            <h3 className="font-black text-sm uppercase tracking-wider">Bank-Grade Security</h3>
                        </div>
                        <p className="text-[11px] text-teal-800 font-medium leading-relaxed">
                            Your documents are AES-256 encrypted and stored securely. We only share verification status, never your raw document files.
                        </p>
                    </div>
                </div>

                {/* Form Content */}
                <div className="lg:col-span-2">
                    <form onSubmit={handleSubmit} className="bg-white rounded-[2.5rem] border border-gray-100 shadow-xl p-8 md:p-12">
                        {step === 1 && (
                            <div className="space-y-8 animate-fadeIn">
                                <h2 className="text-2xl font-black text-gray-900 border-b border-gray-50 pb-4">Basic Details</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Document Type</label>
                                        <select
                                            name="idType"
                                            value={formData.idType}
                                            onChange={handleInputChange}
                                            className="input"
                                        >
                                            <option>National ID</option>
                                            <option>Passport</option>
                                            <option>Alien ID</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-black text-gray-400 uppercase tracking-widest">ID / Passport Number</label>
                                        <input
                                            name="idNumber"
                                            value={formData.idNumber}
                                            onChange={handleInputChange}
                                            placeholder="e.g. 12345678"
                                            className="input font-bold"
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-black text-gray-400 uppercase tracking-widest">KRA PIN Number</label>
                                        <input
                                            name="kraPin"
                                            value={formData.kraPin}
                                            onChange={handleInputChange}
                                            placeholder="e.g. A001234567Z"
                                            className="input font-bold"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Phone Number</label>
                                        <input
                                            placeholder="+254 7XX XXX XXX"
                                            className="input font-bold cursor-not-allowed bg-gray-50"
                                            value={user?.phone || '0712345678'}
                                            disabled
                                        />
                                    </div>
                                </div>
                                <div className="pt-6">
                                    <button
                                        type="button"
                                        onClick={() => setStep(2)}
                                        className="w-full py-4 bg-teal-600 text-white rounded-2xl font-black flex items-center justify-center gap-2 hover:bg-teal-700 transition-all"
                                    >
                                        Next: Document Uploads
                                        <ArrowRight className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        )}

                        {step === 2 && (
                            <div className="space-y-8 animate-fadeIn">
                                <h2 className="text-2xl font-black text-gray-900 border-b border-gray-50 pb-4">Document Uploads</h2>

                                <div className="space-y-6">
                                    <div className="space-y-3">
                                        <label className="text-xs font-black text-gray-400 uppercase tracking-widest">ID Front / Passport Main Page</label>
                                        <label className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-gray-200 rounded-3xl hover:bg-teal-50 hover:border-teal-300 transition-all cursor-pointer group">
                                            {formData.idFile ? (
                                                <div className="flex items-center gap-3">
                                                    <FileText className="text-teal-600 w-8 h-8" />
                                                    <span className="font-bold text-gray-700">{formData.idFile.name}</span>
                                                </div>
                                            ) : (
                                                <>
                                                    <Upload className="text-gray-300 group-hover:text-teal-500 w-8 h-8 mb-2" />
                                                    <span className="text-xs font-bold text-gray-400 group-hover:text-teal-600 uppercase tracking-widest">Click to Upload PDF or JPG</span>
                                                </>
                                            )}
                                            <input type="file" className="hidden" onChange={(e) => handleFileChange(e, 'idFile')} />
                                        </label>
                                    </div>

                                    <div className="space-y-3">
                                        <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Proof of Residence (Utility bill or Lease)</label>
                                        <label className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-gray-200 rounded-3xl hover:bg-teal-50 hover:border-teal-300 transition-all cursor-pointer group">
                                            {formData.residenceFile ? (
                                                <div className="flex items-center gap-3">
                                                    <FileText className="text-teal-600 w-8 h-8" />
                                                    <span className="font-bold text-gray-700">{formData.residenceFile.name}</span>
                                                </div>
                                            ) : (
                                                <>
                                                    <Home className="text-gray-300 group-hover:text-teal-500 w-8 h-8 mb-2" />
                                                    <span className="text-xs font-bold text-gray-400 group-hover:text-teal-600 uppercase tracking-widest">Click to Upload PDF or JPG</span>
                                                </>
                                            )}
                                            <input type="file" className="hidden" onChange={(e) => handleFileChange(e, 'residenceFile')} />
                                        </label>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4 pt-6">
                                    <button
                                        type="button"
                                        onClick={() => setStep(1)}
                                        className="py-4 bg-white text-gray-600 border border-gray-100 rounded-2xl font-black hover:bg-gray-50 transition-all"
                                    >
                                        Back
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setStep(3)}
                                        className="py-4 bg-teal-600 text-white rounded-2xl font-black hover:bg-teal-700 transition-all shadow-lg shadow-teal-50"
                                    >
                                        Review Details
                                    </button>
                                </div>
                            </div>
                        )}

                        {step === 3 && (
                            <div className="space-y-8 animate-fadeIn">
                                <h2 className="text-2xl font-black text-gray-900 border-b border-gray-50 pb-4">Review Submission</h2>

                                <div className="space-y-6 p-6 bg-gray-50 rounded-3xl border border-gray-100">
                                    <div className="grid grid-cols-2 gap-x-10 gap-y-6">
                                        <div>
                                            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">ID Number</p>
                                            <p className="font-bold text-gray-900">{formData.idNumber || 'Not provided'}</p>
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">ID Type</p>
                                            <p className="font-bold text-gray-900">{formData.idType}</p>
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">KRA PIN</p>
                                            <p className="font-bold text-gray-900">{formData.kraPin || 'Not provided'}</p>
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Documents</p>
                                            <p className="font-bold text-teal-600 text-xs uppercase underline">2 Files Attached</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-6 bg-orange-50 rounded-3xl border border-orange-100 flex items-start gap-4">
                                    <AlertCircle className="text-orange-600 w-5 h-5 flex-shrink-0 mt-0.5" />
                                    <p className="text-xs text-orange-800 font-medium leading-relaxed">
                                        By submitting, you authorize VisitaKenya to verify your details with relevant bureaus. Misleading information will lead to permanent blacklisting and a manual Rental Score of 0.
                                    </p>
                                </div>

                                <div className="grid grid-cols-2 gap-4 pt-6">
                                    <button
                                        type="button"
                                        onClick={() => setStep(2)}
                                        className="py-4 bg-white text-gray-600 border border-gray-100 rounded-2xl font-black hover:bg-gray-50 transition-all"
                                    >
                                        Edit Files
                                    </button>
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="py-4 bg-gray-900 text-white rounded-2xl font-black hover:bg-black transition-all shadow-xl shadow-gray-200 flex items-center justify-center gap-3 disabled:opacity-50"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                                                Encrypting...
                                            </>
                                        ) : (
                                            'Confirm & Submit'
                                        )}
                                    </button>
                                </div>
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default TenantVerification;

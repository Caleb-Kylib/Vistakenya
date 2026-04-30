import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, User, UserPlus, Phone, CheckCircle2, Home } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import apartmentsImg from '../../assets/apartments.jpg';

const Signup = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        phone: '',
        role: 'tenant'
    });
    const { signup } = useAuth();
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await signup(formData);

        if (result.success) {
            if (formData.role === 'admin') navigate('/admin/dashboard');
            else if (formData.role === 'landlord') navigate('/landlord/dashboard');
            else navigate('/tenant/dashboard');
        } else {
            alert(result.message || 'Signup failed');
        }
    };

    return (
        <div className="relative min-h-screen flex items-center justify-center p-6 overflow-hidden bg-slate-900">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img 
                    src={apartmentsImg} 
                    alt="Background" 
                    className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900/40 via-transparent to-slate-900/60"></div>
            </div>

            <div className="relative z-10 w-full max-w-xl">
                {/* Logo & Header */}
                <div className="text-center mb-8">
                    <div className="inline-flex items-center gap-2 mb-2">
                        <div className="bg-emerald-800 p-1.5 rounded-lg">
                            <Home className="text-white w-6 h-6" />
                        </div>
                        <span className="text-2xl font-bold text-white tracking-tight">
                            Vistakenya<span className="text-amber-500"> Lite</span>
                        </span>
                    </div>
                    <p className="text-slate-300 text-sm">Your reliable guide to student housing</p>
                </div>

                {/* Form Card */}
                <div className="bg-white/95 backdrop-blur-xl p-8 md:p-10 rounded-[2.5rem] shadow-2xl border border-white/20">
                    <div className="text-center mb-8">
                        <h1 className="text-2xl font-bold text-slate-900 mb-2">Create your account</h1>
                        <p className="text-slate-500 text-sm">Join the community and find your perfect space.</p>
                    </div>

                    <form className="space-y-6" onSubmit={handleSubmit}>
                        {/* Role Selection */}
                        <div className="space-y-3">
                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">I AM A...</label>
                            <div className="grid grid-cols-2 gap-4">
                                <button
                                    type="button"
                                    onClick={() => setFormData(prev => ({ ...prev, role: 'tenant' }))}
                                    className={`flex flex-col items-center justify-center p-4 rounded-2xl border-2 transition-all ${
                                        formData.role === 'tenant' 
                                        ? 'border-emerald-600 bg-emerald-50/50' 
                                        : 'border-slate-100 bg-white hover:border-slate-200'
                                    }`}
                                >
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                                        formData.role === 'tenant' ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-400'
                                    }`}>
                                        <User size={20} />
                                    </div>
                                    <span className={`font-bold text-sm ${formData.role === 'tenant' ? 'text-emerald-900' : 'text-slate-500'}`}>Tenant</span>
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setFormData(prev => ({ ...prev, role: 'landlord' }))}
                                    className={`flex flex-col items-center justify-center p-4 rounded-2xl border-2 transition-all ${
                                        formData.role === 'landlord' 
                                        ? 'border-emerald-600 bg-emerald-50/50' 
                                        : 'border-slate-100 bg-white hover:border-slate-200'
                                    }`}
                                >
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                                        formData.role === 'landlord' ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-400'
                                    }`}>
                                        <Home size={20} />
                                    </div>
                                    <span className={`font-bold text-sm ${formData.role === 'landlord' ? 'text-emerald-900' : 'text-slate-500'}`}>Landlord</span>
                                </button>
                            </div>
                        </div>

                        {/* Input Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-1.5">
                                <label className="text-xs font-semibold text-slate-700 ml-1">Full Name</label>
                                <div className="relative">
                                    <User size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                                    <input
                                        name="name"
                                        type="text"
                                        placeholder="John Doe"
                                        className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all text-sm"
                                        required
                                        value={formData.name}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                            <div className="space-y-1.5">
                                <label className="text-xs font-semibold text-slate-700 ml-1">Email Address</label>
                                <div className="relative">
                                    <Mail size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                                    <input
                                        name="email"
                                        type="email"
                                        placeholder="john@student.ke"
                                        className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all text-sm"
                                        required
                                        value={formData.email}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                            <div className="space-y-1.5">
                                <label className="text-xs font-semibold text-slate-700 ml-1">Phone Number</label>
                                <div className="relative">
                                    <Phone size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                                    <input
                                        name="phone"
                                        type="tel"
                                        placeholder="+254 700 000000"
                                        className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all text-sm"
                                        required
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                            <div className="space-y-1.5">
                                <label className="text-xs font-semibold text-slate-700 ml-1">Password</label>
                                <div className="relative">
                                    <Lock size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                                    <input
                                        name="password"
                                        type="password"
                                        placeholder="••••••••"
                                        className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all text-sm"
                                        required
                                        value={formData.password}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Terms */}
                        <div className="flex items-start gap-3 ml-1">
                            <input type="checkbox" className="mt-1 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500" required />
                            <p className="text-xs text-slate-500">
                                I agree to the <Link to="/terms" className="text-slate-900 font-bold hover:underline">Terms & Conditions</Link> and <Link to="/privacy" className="text-slate-900 font-bold hover:underline">Privacy Policy</Link>
                            </p>
                        </div>

                        {/* Submit Button */}
                        <button 
                            type="submit" 
                            className="w-full py-4 bg-amber-500 hover:bg-amber-600 text-white rounded-2xl font-bold transition-all shadow-lg shadow-amber-200"
                        >
                            Create Account
                        </button>

                        {/* Social Signup */}
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-200"></div></div>
                            <div className="relative flex justify-center text-xs uppercase tracking-widest font-bold"><span className="bg-white px-4 text-slate-400">Or sign up with</span></div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <button type="button" className="flex items-center justify-center gap-2 py-3 border border-slate-200 rounded-xl text-sm font-bold text-slate-700 hover:bg-slate-50 transition-all">
                                <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-4 h-4" alt="Google" />
                                Google
                            </button>
                            <button type="button" className="flex items-center justify-center gap-2 py-3 border border-slate-200 rounded-xl text-sm font-bold text-slate-700 hover:bg-slate-50 transition-all">
                                <img src="https://www.svgrepo.com/show/475647/facebook-color.svg" className="w-4 h-4" alt="Facebook" />
                                Facebook
                            </button>
                        </div>

                        <p className="text-center text-sm text-slate-500 pt-2">
                            Already have an account? <Link to="/login" className="text-emerald-700 font-bold hover:underline">Login</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;

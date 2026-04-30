import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, LogIn, Home, Eye, EyeOff, Building } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import apartmentsImg from '../../assets/apartments.jpg';
import outsideImg from '../../assets/outside.png';
import kitchenImg from '../../assets/kitchen.png';

const LandlordLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await login(email, password);

        if (result.success) {
            if (result.user.role !== 'landlord') {
                alert('This login is for Landlords only. Please use the Tenant login page.');
                return;
            }
            navigate('/landlord/dashboard');
        } else {
            alert(result.message || 'Login failed');
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-br from-amber-50 via-white to-emerald-50">
            <div className="w-full max-w-md text-center mb-8">
                <Link to="/" className="inline-flex items-center gap-2 mb-2">
                    <div className="bg-emerald-800 p-2 rounded-xl shadow-lg">
                        <Home className="text-white w-6 h-6" />
                    </div>
                    <span className="text-2xl font-bold text-slate-900 tracking-tight">
                        Vistakenya<span className="text-emerald-600"> Landlord</span>
                    </span>
                </Link>
            </div>

            <div className="w-full max-w-md bg-white p-8 md:p-10 rounded-[2.5rem] shadow-2xl shadow-emerald-100/50 border border-emerald-50">
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 mb-4">
                        <Building size={24} />
                    </div>
                    <h1 className="text-2xl font-bold text-slate-900 mb-2">Partner Portal</h1>
                    <p className="text-slate-500 text-sm">Manage your properties and connect with verified students.</p>
                </div>

                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Business Email</label>
                        <div className="relative">
                            <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                            <input
                                type="email"
                                placeholder="landlord@visita.com"
                                className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all text-sm font-medium"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="space-y-1.5">
                        <div className="flex items-center justify-between px-1">
                            <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Password</label>
                            <a href="#" className="text-[10px] font-bold text-amber-600 hover:text-amber-700 uppercase tracking-wider">Forgot?</a>
                        </div>
                        <div className="relative">
                            <Lock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="••••••••"
                                className="w-full pl-12 pr-12 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all text-sm font-medium"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button 
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
                            >
                                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                            </button>
                        </div>
                    </div>

                    <button 
                        type="submit" 
                        className="w-full py-4 bg-amber-500 hover:bg-amber-600 text-white rounded-2xl font-bold transition-all shadow-lg shadow-amber-200 flex items-center justify-center gap-2"
                    >
                        Landlord Login
                    </button>
                </form>

                <div className="mt-8 pt-6 border-t border-slate-50 text-center">
                    <p className="text-sm text-slate-500">
                        Interested in listing? <Link to="/signup" className="text-emerald-700 font-bold hover:underline">Join as Landlord</Link>
                    </p>
                    <Link to="/tenant/login" className="inline-block mt-4 text-xs font-bold text-slate-400 hover:text-slate-600 uppercase tracking-widest">
                        Are you a Student? Log in here
                    </Link>
                </div>
            </div>

            {/* Thumbnails */}
            <div className="flex justify-center gap-4 mt-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
                <img src={apartmentsImg} className="w-20 h-14 object-cover rounded-xl shadow-lg border-2 border-white" alt="Apartment" />
                <img src={outsideImg} className="w-20 h-14 object-cover rounded-xl shadow-lg border-2 border-white" alt="Outside" />
                <img src={kitchenImg} className="w-20 h-14 object-cover rounded-xl shadow-lg border-2 border-white" alt="Kitchen" />
            </div>
        </div>
    );
};

export default LandlordLogin;

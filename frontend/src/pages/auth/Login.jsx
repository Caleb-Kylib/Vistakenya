import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, LogIn, Home, Eye, EyeOff } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import apartmentsImg from '../../assets/apartments.jpg';
import kitchenImg from '../../assets/kitchen.png';
import outsideImg from '../../assets/outside.png';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await login(email, password);

        if (result.success) {
            const role = result.user.role;
            if (role === 'admin') navigate('/admin/dashboard');
            else if (role === 'landlord') navigate('/landlord/dashboard');
            else navigate('/tenant/dashboard');
        } else {
            alert(result.message || 'Login failed');
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-br from-amber-50 via-white to-emerald-50">
            <div className="w-full max-w-md">
                {/* Logo & Header */}
                <div className="text-center mb-10">
                    <div className="inline-flex items-center gap-2 mb-3">
                        <div className="bg-emerald-800 p-2 rounded-xl shadow-lg shadow-emerald-200">
                            <Home className="text-white w-6 h-6" />
                        </div>
                        <span className="text-2xl font-bold text-slate-900 tracking-tight">
                            Vistakenya<span className="text-emerald-600"> Lite</span>
                        </span>
                    </div>
                    <p className="text-slate-500 text-sm max-w-[280px] mx-auto leading-relaxed">
                        Secure student living, simplified for the next generation of scholars.
                    </p>
                </div>

                {/* Login Card */}
                <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-2xl shadow-emerald-100/50 border border-emerald-50 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full -mr-16 -mt-16 blur-2xl transition-all group-hover:bg-emerald-500/10"></div>
                    
                    <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
                        <div className="space-y-1.5">
                            <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                            <div className="relative">
                                <Mail size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                                <input
                                    type="email"
                                    placeholder="student@university.ac.ke"
                                    className="w-full pl-10 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all text-sm font-medium"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="space-y-1.5">
                            <div className="flex items-center justify-between px-1">
                                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Password</label>
                                <a href="#" className="text-[10px] font-bold text-amber-600 hover:text-amber-700 uppercase tracking-wider">Forgot Password?</a>
                            </div>
                            <div className="relative">
                                <Lock size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="••••••••"
                                    className="w-full pl-10 pr-12 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all text-sm font-medium"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <button 
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
                                >
                                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>
                        </div>

                        <button 
                            type="submit" 
                            className="w-full py-4 bg-amber-500 hover:bg-amber-600 text-white rounded-2xl font-bold transition-all shadow-lg shadow-amber-200 flex items-center justify-center gap-2"
                        >
                            Sign In
                        </button>

                        <div className="relative py-2">
                            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-100"></div></div>
                            <div className="relative flex justify-center text-[10px] uppercase tracking-widest font-bold text-slate-400"><span className="bg-white px-4">Or continue with</span></div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <button type="button" className="flex items-center justify-center gap-2 py-3 border border-slate-100 rounded-xl text-sm font-bold text-slate-700 hover:bg-slate-50 transition-all">
                                <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-4 h-4" alt="Google" />
                                Google
                            </button>
                            <button type="button" className="flex items-center justify-center gap-2 py-3 border border-slate-100 rounded-xl text-sm font-bold text-slate-700 hover:bg-slate-50 transition-all">
                                <img src="https://www.svgrepo.com/show/445730/apple-black.svg" className="w-4 h-4" alt="Apple" />
                                Apple
                            </button>
                        </div>
                    </form>
                </div>

                <p className="text-center text-sm text-slate-500 mt-8 font-medium">
                    Don't have an account? <Link to="/signup" className="text-emerald-700 font-bold hover:underline">Sign Up</Link>
                </p>

                {/* Thumbnails */}
                <div className="flex justify-center gap-3 mt-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
                    <img src={apartmentsImg} className="w-16 h-12 object-cover rounded-lg shadow-md" alt="Thumb 1" />
                    <img src={kitchenImg} className="w-16 h-12 object-cover rounded-lg shadow-md" alt="Thumb 2" />
                    <img src={outsideImg} className="w-16 h-12 object-cover rounded-lg shadow-md" alt="Thumb 3" />
                </div>
            </div>
        </div>
    );
};

export default Login;

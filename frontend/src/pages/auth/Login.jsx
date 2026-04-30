import React from 'react';
import { Link } from 'react-router-dom';
import { User, Home, ArrowRight, Building } from 'lucide-react';

const Login = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-br from-slate-50 via-white to-slate-100">
            <div className="w-full max-w-4xl">
                {/* Logo & Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 mb-4">
                        <div className="bg-emerald-800 p-2.5 rounded-xl shadow-xl shadow-emerald-200">
                            <Home className="text-white w-7 h-7" />
                        </div>
                        <span className="text-3xl font-extrabold text-slate-900 tracking-tight">
                            Vistakenya<span className="text-emerald-600"> Portal</span>
                        </span>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">Welcome to the Network</h1>
                    <p className="text-slate-500 text-lg max-w-xl mx-auto leading-relaxed">
                        Please select your account type to continue to your dashboard.
                    </p>
                </div>

                {/* Selection Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Tenant Card */}
                    <Link 
                        to="/tenant/login" 
                        className="group relative bg-white p-10 rounded-[3rem] shadow-2xl shadow-slate-200/50 border border-slate-100 transition-all hover:scale-[1.02] hover:shadow-teal-100/50 overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/5 rounded-full -mr-10 -mt-10 transition-all group-hover:bg-teal-500/10"></div>
                        <div className="relative z-10">
                            <div className="w-16 h-16 bg-teal-100 text-teal-600 rounded-2xl flex items-center justify-center mb-8 transition-transform group-hover:scale-110 group-hover:rotate-3">
                                <User size={32} />
                            </div>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">I am a Student</h2>
                            <p className="text-slate-500 mb-8 leading-relaxed">
                                Find verified hostels, track your applications, and manage your rent payments in one place.
                            </p>
                            <div className="flex items-center gap-2 text-teal-600 font-bold uppercase tracking-widest text-xs">
                                Enter Tenant Portal <ArrowRight size={16} className="transition-transform group-hover:translate-x-2" />
                            </div>
                        </div>
                    </Link>

                    {/* Landlord Card */}
                    <Link 
                        to="/landlord/login" 
                        className="group relative bg-white p-10 rounded-[3rem] shadow-2xl shadow-slate-200/50 border border-slate-100 transition-all hover:scale-[1.02] hover:shadow-emerald-100/50 overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full -mr-10 -mt-10 transition-all group-hover:bg-emerald-500/10"></div>
                        <div className="relative z-10">
                            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-8 transition-transform group-hover:scale-110 group-hover:-rotate-3">
                                <Building size={32} />
                            </div>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">I am a Landlord</h2>
                            <p className="text-slate-500 mb-8 leading-relaxed">
                                List your properties, screen potential tenants, and monitor your rental income securely.
                            </p>
                            <div className="flex items-center gap-2 text-emerald-600 font-bold uppercase tracking-widest text-xs">
                                Enter Landlord Portal <ArrowRight size={16} className="transition-transform group-hover:translate-x-2" />
                            </div>
                        </div>
                    </Link>
                </div>

                <div className="mt-16 text-center">
                    <p className="text-slate-400 text-sm font-medium">
                        New to Vistakenya? <Link to="/signup" className="text-emerald-700 font-bold hover:underline">Create an account today</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;

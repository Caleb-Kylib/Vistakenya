import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, LogIn } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simple mock logic: if email contains admin, landlord or tenant
        let role = 'tenant';
        if (email.includes('admin')) role = 'admin';
        else if (email.includes('landlord')) role = 'landlord';

        login({
            id: 1,
            name: email.split('@')[0].charAt(0).toUpperCase() + email.split('@')[0].slice(1),
            email,
            role
        });

        if (role === 'admin') navigate('/admin/dashboard');
        else if (role === 'landlord') navigate('/landlord/dashboard');
        else navigate('/tenant/dashboard');
    };

    return (
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <Link to="/" className="flex items-center mb-6 text-2xl font-bold text-primary-600">
                VisitaKenya
            </Link>
            <div className="card w-full sm:max-w-md p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl mb-6">
                    Sign in to your account
                </h1>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
                                <Mail className="w-5 h-5" />
                            </div>
                            <input
                                type="email"
                                className="input pl-10"
                                placeholder="name@company.com"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
                                <Lock className="w-5 h-5" />
                            </div>
                            <input
                                type="password"
                                className="input pl-10"
                                placeholder="••••••••"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input
                                    type="checkbox"
                                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
                                />
                            </div>
                            <div className="ml-3 text-sm text-gray-500">
                                Remember me
                            </div>
                        </div>
                        <a href="#" className="text-sm font-medium text-primary-600 hover:underline">Forgot password?</a>
                    </div>
                    <button type="submit" className="btn btn-primary w-full">
                        <LogIn className="w-5 h-5 mr-2" />
                        Sign in
                    </button>
                    <p className="text-sm font-light text-gray-500">
                        Don't have an account yet?{' '}
                        <Link to="/signup" className="font-medium text-primary-600 hover:underline">Sign up</Link>
                    </p>
                </form>
            </div>
            <div className="mt-6 text-sm text-gray-500 text-center">
                <p>Demo accounts:</p>
                <p>admin@visita.com | landlord@visita.com | tenant@visita.com</p>
            </div>
        </div>
    );
};

export default Login;

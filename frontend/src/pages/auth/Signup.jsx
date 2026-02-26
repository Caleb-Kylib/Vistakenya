import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, User, UserPlus } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const Signup = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
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
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <Link to="/" className="flex items-center mb-6 text-2xl font-bold text-primary-600">
                VisitaKenya
            </Link>
            <div className="card w-full sm:max-w-md p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl mb-6">
                    Create an account
                </h1>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900">Full Name</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
                                <User className="w-5 h-5" />
                            </div>
                            <input
                                name="name"
                                type="text"
                                className="input pl-10"
                                placeholder="John Doe"
                                required
                                value={formData.name}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900">Email Address</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
                                <Mail className="w-5 h-5" />
                            </div>
                            <input
                                name="email"
                                type="email"
                                className="input pl-10"
                                placeholder="name@company.com"
                                required
                                value={formData.email}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900">Select Role</label>
                        <select
                            name="role"
                            className="input"
                            value={formData.role}
                            onChange={handleInputChange}
                            required
                        >
                            <option value="tenant">Tenant</option>
                            <option value="landlord">Landlord</option>
                            <option value="admin">Super Admin</option>
                        </select>
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
                                <Lock className="w-5 h-5" />
                            </div>
                            <input
                                name="password"
                                type="password"
                                className="input pl-10"
                                placeholder="••••••••"
                                required
                                value={formData.password}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary w-full">
                        <UserPlus className="w-5 h-5 mr-2" />
                        Create account
                    </button>
                    <p className="text-sm font-light text-gray-500">
                        Already have an account?{' '}
                        <Link to="/login" className="font-medium text-primary-600 hover:underline">Login here</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Signup;

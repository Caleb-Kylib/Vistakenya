import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LogOut, User, Bell, Menu } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Navbar = ({ toggleSidebar }) => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200">
            <div className="px-3 py-3 lg:px-5 lg:pl-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center justify-start">
                        <button
                            onClick={toggleSidebar}
                            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                        >
                            <Menu className="w-6 h-6" />
                        </button>
                        <Link to="/" className="flex ml-2 md:mr-24">
                            <span className="self-center text-xl font-bold sm:text-2xl whitespace-nowrap text-primary-600">
                                VisitaKenya
                            </span>
                        </Link>
                    </div>
                    <div className="flex items-center">
                        {user ? (
                            <div className="flex items-center ml-3 space-x-4">
                                <button className="p-2 text-gray-500 rounded-lg hover:bg-gray-100">
                                    <Bell className="w-5 h-5" />
                                </button>
                                <div className="flex items-center space-x-2">
                                    <div className="text-right hidden sm:block">
                                        <p className="text-sm font-medium text-gray-900">{user.name}</p>
                                        <p className="text-xs text-gray-500 capitalize">{user.role}</p>
                                    </div>
                                    <button
                                        onClick={handleLogout}
                                        className="p-2 text-gray-500 rounded-lg hover:bg-gray-100"
                                        title="Logout"
                                    >
                                        <LogOut className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <div className="flex items-center space-x-4">
                                <Link to="/login" className="text-sm font-medium text-gray-700 hover:text-primary-600">
                                    Login
                                </Link>
                                <Link to="/signup" className="btn btn-primary text-sm py-1.5">
                                    Sign Up
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

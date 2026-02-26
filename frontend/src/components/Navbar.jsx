import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LogOut, User, Bell, Menu, Search, ShieldCheck } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Navbar = ({ toggleSidebar }) => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4">
            <div className="backdrop-blur-xl bg-white/70 border border-white/20 shadow-2xl shadow-gray-200/50 rounded-[2rem] px-6 py-3 flex items-center justify-between transition-all duration-500">
                {/* Left: Brand & Toggle */}
                <div className="flex items-center gap-4">
                    <button
                        onClick={toggleSidebar}
                        className="p-2.5 text-gray-500 rounded-xl sm:hidden hover:bg-teal-50 hover:text-teal-600 transition-all active:scale-95"
                    >
                        <Menu className="w-6 h-6" />
                    </button>
                    <Link to="/" className="flex items-center gap-2 group">
                        <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-teal-700 rounded-xl flex items-center justify-center shadow-lg shadow-teal-100 group-hover:rotate-12 transition-transform duration-500">
                            <span className="text-white font-black text-xl italic leading-none">V</span>
                        </div>
                        <span className="self-center text-xl font-black tracking-tighter text-gray-900 group-hover:text-teal-600 transition-colors uppercase">
                            VisitaKenya
                        </span>
                    </Link>
                </div>

                {/* Center: Search (Optional for Desktop) */}
                <div className="hidden lg:flex items-center flex-1 max-w-md mx-12">
                    <div className="relative w-full group">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-teal-500 transition-colors" />
                        <input
                            type="text"
                            placeholder="Global Search..."
                            className="w-full pl-11 pr-4 py-2.5 bg-gray-50/50 border border-transparent rounded-2xl text-xs font-bold focus:ring-4 focus:ring-teal-500/10 focus:bg-white focus:border-teal-500/20 transition-all outline-none"
                        />
                    </div>
                </div>

                {/* Right: User Actions */}
                <div className="flex items-center gap-2 md:gap-4">
                    {user ? (
                        <>
                            <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-teal-50 rounded-2xl border border-teal-100">
                                <ShieldCheck className="w-4 h-4 text-teal-600" />
                                <span className="text-[10px] font-black text-teal-700 uppercase tracking-widest">
                                    {user.role} Account
                                </span>
                            </div>

                            <button className="relative p-2.5 text-gray-500 rounded-xl hover:bg-gray-50 group transition-all">
                                <Bell className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                                <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                            </button>

                            <div className="flex items-center gap-3 pl-2 border-l border-gray-100">
                                <div className="text-right hidden sm:block">
                                    <p className="text-xs font-black text-gray-900 leading-none">{user.name}</p>
                                    <p className="text-[10px] text-gray-400 font-bold mt-1 uppercase tracking-tight">{user.email?.split('@')[0]}</p>
                                </div>
                                <div className="relative group cursor-pointer" onClick={() => navigate(`/${user.role}/dashboard`)}>
                                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-gray-100 to-gray-200 border border-white flex items-center justify-center overflow-hidden shadow-sm group-hover:shadow-md transition-all">
                                        {user.avatar ? (
                                            <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
                                        ) : (
                                            <User className="w-5 h-5 text-gray-400" />
                                        )}
                                    </div>
                                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-teal-500 rounded-full border-2 border-white"></div>
                                </div>
                                <button
                                    onClick={handleLogout}
                                    className="p-2.5 text-gray-400 hover:text-red-500 rounded-xl hover:bg-red-50 transition-all active:scale-90"
                                    title="Logout"
                                >
                                    <LogOut className="w-5 h-5" />
                                </button>
                            </div>
                        </>
                    ) : (
                        <div className="flex items-center gap-4 text-sm font-black uppercase tracking-widest text-[10px]">
                            <Link to="/login" className="text-gray-500 hover:text-teal-600 transition-colors">
                                Login
                            </Link>
                            <Link to="/signup" className="px-6 py-2.5 bg-gray-900 text-white rounded-xl shadow-lg hover:bg-teal-600 transition-all hover:-translate-y-0.5">
                                Join Network
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

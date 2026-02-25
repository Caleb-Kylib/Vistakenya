import React, { createContext, useContext, useState } from 'react';

/* eslint-disable react-refresh/only-export-components */
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        try {
            const saved = localStorage.getItem('visita_user');
            return saved ? JSON.parse(saved) : null;
        } catch {
            return null;
        }
    });
    // loading removed since initialization is synchronous from localStorage

    const login = (userData) => {
        setUser(userData);
        localStorage.setItem('visita_user', JSON.stringify(userData));
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('visita_user');
    };

    const signup = (userData) => {
        setUser(userData);
        localStorage.setItem('visita_user', JSON.stringify(userData));
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, signup }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);

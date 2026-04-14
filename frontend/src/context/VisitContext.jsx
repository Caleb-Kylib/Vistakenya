import React, { createContext, useContext, useState, useEffect } from 'react';
import { API_BASE_URL } from '../config';
import { useAuth } from './AuthContext';

const VisitContext = createContext();

export const VisitProvider = ({ children }) => {
    const [visits, setVisits] = useState([]);
    const [loading, setLoading] = useState(false);
    const { user } = useAuth();

    const fetchVisits = async () => {
        if (!user) return;
        setLoading(true);
        try {
            const params = new URLSearchParams();
            if (user.role === 'tenant') params.append('tenantId', user.id);
            if (user.role === 'landlord') params.append('landlord', user.name);

            const response = await fetch(`${API_BASE_URL}/api/visits?${params.toString()}`);
            const data = await response.json();
            setVisits(data);
        } catch (error) {
            console.error('Error fetching visits:', error);
        } finally {
            setLoading(false);
        }
    };

    const bookVisit = async (visitData) => {
        try {
            const response = await fetch(`${API_BASE_URL}/api/visits`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(visitData),
            });
            if (response.ok) {
                const newVisit = await response.json();
                setVisits(prev => [...prev, newVisit]);
                return true;
            }
        } catch (error) {
            console.error('Error booking visit:', error);
        }
        return false;
    };

    useEffect(() => {
        fetchVisits();
    }, [user]);

    return (
        <VisitContext.Provider value={{ visits, loading, fetchVisits, bookVisit }}>
            {children}
        </VisitContext.Provider>
    );
};

export const useVisits = () => useContext(VisitContext);

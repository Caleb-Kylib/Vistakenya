import React, { createContext, useContext, useState, useEffect } from 'react';
import { API_BASE_URL } from '../config';

const PropertyContext = createContext();

export const PropertyProvider = ({ children }) => {
    const [properties, setProperties] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchProperties = async () => {
        try {
            setLoading(true);
            const response = await fetch(`${API_BASE_URL}/properties`);
            const data = await response.json();
            setProperties(data);
        } catch (error) {
            console.error('Error fetching properties:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProperties();
    }, []);

    const addProperty = async (propertyData) => {
        try {
            const response = await fetch(`${API_BASE_URL}/properties`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(propertyData),
            });
            const newProperty = await response.json();
            setProperties(prev => [newProperty, ...prev]);
            return newProperty;
        } catch (error) {
            console.error('Error adding property:', error);
        }
    };

    const approveProperty = async (id) => {
        try {
            const response = await fetch(`${API_BASE_URL}/properties/${id}/approve`, {
                method: 'PUT',
            });
            const updatedProperty = await response.json();
            setProperties(prev => prev.map(p =>
                p.id === id ? updatedProperty : p
            ));
        } catch (error) {
            console.error('Error approving property:', error);
        }
    };

    const deleteProperty = async (id) => {
        try {
            await fetch(`${API_BASE_URL}/properties/${id}`, {
                method: 'DELETE',
            });
            setProperties(prev => prev.filter(p => p.id !== id));
        } catch (error) {
            console.error('Error deleting property:', error);
        }
    };

    return (
        <PropertyContext.Provider value={{ properties, loading, addProperty, approveProperty, deleteProperty, refreshProperties: fetchProperties }}>
            {children}
        </PropertyContext.Provider>
    );
};

export const useProperties = () => useContext(PropertyContext);

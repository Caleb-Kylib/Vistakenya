import React, { createContext, useContext, useState, useEffect } from 'react';

const PropertyContext = createContext();

export const PropertyProvider = ({ children }) => {
    const [properties, setProperties] = useState(() => {
        const saved = localStorage.getItem('visita_properties');
        if (saved) return JSON.parse(saved);

        // Initial mock data
        return [
            {
                id: 1,
                name: 'Sunset Apartments',
                location: 'Kilimani, Nairobi',
                city: 'Nairobi',
                owner: 'Samuel Maina',
                units: 12,
                occupancy: '92%',
                revenue: 'KES 540k',
                rent: 45000,
                deposit: 45000,
                image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=400&q=80',
                status: 'Verified', // Verified properties show on tenant side/landing
                category: 'Apartment',
                amenities: ['Water (24/7)', 'Security Guard', 'CCTV'],
                description: 'Luxury apartments in the heart of Kilimani.'
            },
            {
                id: 2,
                name: 'Garden Estate Villas',
                location: 'Garden Estate',
                city: 'Nairobi',
                owner: 'Riverfront Properties',
                units: 4,
                occupancy: '100%',
                revenue: 'KES 320k',
                rent: 120000,
                deposit: 120000,
                image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=400&q=80',
                status: 'Verified',
                category: 'Villa',
                amenities: ['Swimming Pool', 'Gym', 'Backup Generator'],
                description: 'Exclusive villas with private gardens.'
            },
            {
                id: 3,
                name: 'Lake View Residency',
                location: 'Kisumu',
                city: 'Kisumu',
                owner: 'Samuel Maina',
                units: 8,
                occupancy: '75%',
                revenue: 'KES 240k',
                rent: 35000,
                deposit: 35000,
                image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=400&q=80',
                status: 'Pending', // Pending properties only show for landlord and admin
                category: 'Apartment',
                amenities: ['Water (24/7)', 'Borehole'],
                description: 'Modern apartments with lake views.'
            }
        ];
    });

    useEffect(() => {
        localStorage.setItem('visita_properties', JSON.stringify(properties));
    }, [properties]);

    const addProperty = (propertyData) => {
        const newProperty = {
            ...propertyData,
            id: Date.now(),
            status: 'Pending', // All new properties start as Pending
            units: 1,
            occupancy: '0%',
            revenue: 'KES 0',
            verified: false
        };
        setProperties(prev => [newProperty, ...prev]);
        return newProperty;
    };

    const approveProperty = (id) => {
        setProperties(prev => prev.map(p =>
            p.id === id ? { ...p, status: 'Verified' } : p
        ));
    };

    const deleteProperty = (id) => {
        setProperties(prev => prev.filter(p => p.id !== id));
    };

    return (
        <PropertyContext.Provider value={{ properties, addProperty, approveProperty, deleteProperty }}>
            {children}
        </PropertyContext.Provider>
    );
};

export const useProperties = () => useContext(PropertyContext);

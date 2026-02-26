import React, { createContext, useContext, useState, useEffect } from 'react';

const ApplicationContext = createContext();

export const ApplicationProvider = ({ children }) => {
    const [applications, setApplications] = useState(() => {
        const saved = localStorage.getItem('visita_applications');
        if (saved) return JSON.parse(saved);

        // Initial mock data
        return [
            {
                id: "APP-2024-001",
                propertyId: 1,
                property: "Sunset Apartments, Unit 4B",
                location: "Kilimani, Nairobi",
                price: 45000,
                status: "Approved",
                applied_date: "2024-02-02",
                tenantId: "tenant-1",
                tenantName: "Alice Wanjiku",
                landlord: "Samuel Maina",
                verification_status: "verified",
                rental_score: 92,
                payment_reliability: 100,
                completed_leases_count: 3,
                completion_percent: 100,
                joined_at: "Mar 2023",
                rating: 4.8,
                image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=400&q=80"
            },
            {
                id: "APP-2024-002",
                propertyId: 3,
                property: "Lake View Residency, Studio 2",
                location: "Kisumu",
                price: 24000,
                status: "Pending",
                applied_date: "2024-02-04",
                tenantId: "tenant-1",
                tenantName: "Alice Wanjiku",
                landlord: "Samuel Maina",
                verification_status: "verified",
                rental_score: 92,
                payment_reliability: 100,
                completed_leases_count: 3,
                completion_percent: 100,
                joined_at: "Mar 2023",
                rating: 4.5,
                image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=400&q=80"
            },
            {
                id: "APP-2024-003",
                propertyId: 2,
                property: "Garden Estate Villas, No. 12",
                location: "Garden Estate, Nairobi",
                price: 85000,
                status: "Declined",
                applied_date: "2024-01-15",
                tenantId: "tenant-1",
                tenantName: "Alice Wanjiku",
                landlord: "Riverfront Properties",
                verification_status: "verified",
                rental_score: 92,
                payment_reliability: 100,
                completed_leases_count: 3,
                completion_percent: 100,
                joined_at: "Mar 2023",
                rating: 4.9,
                image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=400&q=80"
            }
        ];
    });

    useEffect(() => {
        localStorage.setItem('visita_applications', JSON.stringify(applications));
    }, [applications]);

    const addApplication = (applicationData) => {
        const newApp = {
            ...applicationData,
            id: `APP-${Date.now()}`,
            status: 'Pending',
            applied_date: new Date().toISOString().split('T')[0]
        };
        setApplications(prev => [newApp, ...prev]);
        return newApp;
    };

    const updateApplicationStatus = (id, status) => {
        setApplications(prev => prev.map(app =>
            app.id === id ? { ...app, status } : app
        ));
    };

    return (
        <ApplicationContext.Provider value={{ applications, addApplication, updateApplicationStatus }}>
            {children}
        </ApplicationContext.Provider>
    );
};

export const useApplications = () => useContext(ApplicationContext);

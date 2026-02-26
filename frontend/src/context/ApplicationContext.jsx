import React, { createContext, useContext, useState, useEffect } from 'react';
import { API_BASE_URL } from '../config';

const ApplicationContext = createContext();

export const ApplicationProvider = ({ children }) => {
    const [applications, setApplications] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchApplications = async () => {
        try {
            setLoading(true);
            const response = await fetch(`${API_BASE_URL}/applications`);
            const data = await response.json();
            setApplications(data);
        } catch (error) {
            console.error('Error fetching applications:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchApplications();
    }, []);

    const addApplication = async (applicationData) => {
        try {
            const response = await fetch(`${API_BASE_URL}/applications`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(applicationData),
            });
            const newApp = await response.json();
            setApplications(prev => [newApp, ...prev]);
            return newApp;
        } catch (error) {
            console.error('Error adding application:', error);
        }
    };

    const updateApplicationStatus = async (id, status) => {
        try {
            const response = await fetch(`${API_BASE_URL}/applications/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ status }),
            });
            const updatedApp = await response.json();
            setApplications(prev => prev.map(app =>
                app.id === id ? updatedApp : app
            ));
        } catch (error) {
            console.error('Error updating application status:', error);
        }
    };

    return (
        <ApplicationContext.Provider value={{ applications, loading, addApplication, updateApplicationStatus, refreshApplications: fetchApplications }}>
            {children}
        </ApplicationContext.Provider>
    );
};

export const useApplications = () => useContext(ApplicationContext);

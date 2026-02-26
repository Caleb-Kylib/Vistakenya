import React from 'react';

const LeaseStatusBadge = ({ status }) => {
    const styles = {
        'Active': 'bg-teal-50 text-teal-700 ring-teal-100',
        'Draft': 'bg-gray-50 text-gray-700 ring-gray-100',
        'Pending': 'bg-orange-50 text-orange-700 ring-orange-100',
        'Expired': 'bg-gray-50 text-gray-700 ring-gray-100',
        'Terminated': 'bg-red-50 text-red-700 ring-red-100',
    };

    const currentStyle = styles[status] || styles['Draft'];

    return (
        <span className={`px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest ring-1 ${currentStyle}`}>
            {status}
        </span>
    );
};

export default LeaseStatusBadge;

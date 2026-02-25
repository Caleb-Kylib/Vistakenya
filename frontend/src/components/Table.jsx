import React from 'react';
import { cn } from '../utils/cn';

const Table = ({ columns, data, className }) => {
    return (
        <div className={cn("overflow-x-auto relative shadow-sm sm:rounded-lg border border-gray-200", className)}>
            <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 border-b border-gray-200">
                    <tr>
                        {columns.map((col, idx) => (
                            <th key={idx} scope="col" className="py-3 px-6">
                                {col.header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.length > 0 ? (
                        data.map((row, rowIdx) => (
                            <tr key={rowIdx} className="bg-white border-b hover:bg-gray-50 transition-colors">
                                {columns.map((col, colIdx) => (
                                    <td key={colIdx} className="py-4 px-6 text-gray-900">
                                        {col.render ? col.render(row) : row[col.accessor]}
                                    </td>
                                ))}
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={columns.length} className="py-10 text-center text-gray-400">
                                No data available
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default Table;

import React from 'react';

const Skeleton = ({ variant = 'text', className = '', lines = 1 }) => {
    const baseClasses = "animate-pulse bg-slate-200 rounded";

    switch (variant) {
        case 'text':
            return (
                <div className="space-y-2">
                    {[...Array(lines)].map((_, i) => (
                        <div
                            key={i}
                            className={`${baseClasses} h-4 ${className}`}
                        />
                    ))}
                </div>
            );

        case 'circle':
            return (
                <div
                    className={`${baseClasses} rounded-full ${className}`}
                />
            );

        case 'image':
            return (
                <div
                    className={`${baseClasses} ${className}`}
                />
            );

        case 'card':
            return (
                <div className={`${baseClasses} p-4 rounded-lg space-y-3 ${className}`}>
                    <div className="flex flex-col gap-3">
                        <div className="h-4 bg-gray-300 rounded" />
                        <div className="h-4 bg-gray-300 rounded" />
                        <div className="h-4 bg-gray-300 rounded" />
                    </div>
                </div>
            );

        case 'table-row':
            return (
                <div className={`flex gap-4 ${className}`}>
                    <div className={`${baseClasses} h-8 w-12`} />
                    <div className={`${baseClasses} h-8 flex-1`} />
                    <div className={`${baseClasses} h-8 w-24`} />
                    <div className={`${baseClasses} h-8 w-20`} />
                </div>
            );

        case 'banner':
            return (
                <div className={`${baseClasses} w-full ${className}`}>
                    <div className="h-48 bg-gray-300 rounded-t" />
                    <div className="p-4 space-y-3">
                        <div className="h-6 bg-gray-300 rounded w-3/4" />
                        <div className="h-4 bg-gray-300 rounded w-full" />
                        <div className="h-4 bg-gray-300 rounded w-5/6" />
                    </div>
                </div>
            );

        default:
            return null;
    }
};

export default Skeleton;
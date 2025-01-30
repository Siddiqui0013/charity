import React, { createContext, useState, useCallback } from 'react';
import { Toast } from 'flowbite-react';
import { CheckCircle2, XCircle, AlertCircle, Info } from 'lucide-react';

export const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
    const [toasts, setToasts] = useState([]);

    const addToast = useCallback((message, type = 'success', duration = 2500) => {
        const id = Date.now();
        setToasts(prev => [...prev, { id, message, type, duration }]);

        setTimeout(() => {
            removeToast(id);
        }, duration);
    }, []);

    const removeToast = useCallback((id) => {
        setToasts(prev => prev.filter(toast => toast.id !== id));
    }, []);

    const getToastIcon = (type) => {
        const iconProps = { size: 20 };

        switch (type) {
            case 'success':
                return <CheckCircle2 {...iconProps} />;
            case 'error':
                return <XCircle {...iconProps} />;
            case 'warning':
                return <AlertCircle {...iconProps} />;
            case 'info':
                return <Info {...iconProps} />;
            default:
                return <CheckCircle2 {...iconProps} />;
        }
    };

    return (
        <ToastContext.Provider value={addToast}>
            {children}
            <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-4">
                {toasts.map(toast => (
                    <Toast key={toast.id}>
                        <div className={`inline-flex h-8 w-14 shrink-0 items-center justify-center rounded-lg ${toast.type === 'success' ? 'bg-green-100 text-green-500' :
                            toast.type === 'error' ? 'bg-red-100 text-red-500' :
                                toast.type === 'warning' ? 'bg-yellow-100 text-yellow-500' :
                                    'bg-blue-100 text-blue-500'
                            }`}>
                            {getToastIcon(toast.type)}
                        </div>
                        <div className="ml-3 text-sm font-medium">{toast.message}</div>
                        <Toast.Toggle onDismiss={() => removeToast(toast.id)} />
                    </Toast>
                ))}
            </div>
        </ToastContext.Provider>
    );
};
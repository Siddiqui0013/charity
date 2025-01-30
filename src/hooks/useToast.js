import { useContext } from 'react';
import { ToastContext } from '../components/ui/Toast';

export const useToast = () => {
    const addToast = useContext(ToastContext);
    if (!addToast) {
        throw new Error('useToast must be used within a ToastProvider');
    }
    return addToast;
};
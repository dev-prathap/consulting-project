"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminRedirect() {
    const router = useRouter();

    useEffect(() => {
        // Check if admin is logged in
        const isLoggedIn = sessionStorage.getItem('adminLoggedIn');
        
        if (isLoggedIn) {
            // Redirect to dashboard if already logged in
            router.push('/admin/dashboard');
        } else {
            // Redirect to login if not authenticated
            router.push('/admin/login');
        }
    }, [router]);

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
} 
"use client";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

const AdminDashboard = () => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Check if admin is logged in
        const isLoggedIn = sessionStorage.getItem('adminLoggedIn');
        
        if (!isLoggedIn) {
            // Redirect to login if not authenticated
            router.push('/admin/login');
        } else {
            setIsLoading(false);
        }
    }, [router]);

    const handleLogout = () => {
        // Clear admin session
        sessionStorage.removeItem('adminLoggedIn');
        router.push('/admin/login');
    };

    if (isLoading) {
        return (
            <div className="d-flex justify-content-center align-items-center vh-100">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

    return (
        <div className="admin-dashboard">
            {/* Admin Header */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <Link className="navbar-brand" href="/admin/dashboard">
                        IT Consulting Admin
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <Link className="nav-link active" href="/admin/dashboard">
                                    Dashboard
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="/admin/blogs">
                                    Blog Management
                                </Link>
                            </li>
                        </ul>
                        <div className="d-flex">
                            <button onClick={handleLogout} className="btn btn-light">
                                Logout
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Dashboard Content */}
            <div className="container mt-4">
                <div className="row mb-4">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body">
                                <h2 className="card-title">Welcome to IT Consulting Admin Panel</h2>
                                <p className="card-text">
                                    Manage your blog content from here. Use the Blog Management section to create, edit, and publish blog posts.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 mb-4">
                        <div className="card">
                            <div className="card-body text-center">
                                <h3 className="display-4 text-primary">Blog Management</h3>
                                <p className="card-text">Create and manage blog posts for your IT consulting website</p>
                                <Link href="/admin/blogs" className="btn btn-primary">
                                    Go to Blog Management
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard; 
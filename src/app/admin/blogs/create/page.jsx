"use client";
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import 'easymde/dist/easymde.min.css';

// Import SimpleMDE editor dynamically for client-side only
const SimpleMDE = dynamic(
    () => import('react-simplemde-editor'),
    { ssr: false }
);

const CreateBlog = () => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);
    const [isSaving, setIsSaving] = useState(false);
    const [error, setError] = useState('');
    const [blogPost, setBlogPost] = useState({
        title: '',
        slug: '',
        excerpt: '',
        content: '',
        tags: '',
        featuredImage: '',
        status: 'draft',
        date: ''
    });
    const [imagePreview, setImagePreview] = useState('');
    const fileInputRef = useRef(null);
    const titleInputRef = useRef(null);
    
    // Generate slug from title
    const generateSlug = (title) => {
        return title
            .toLowerCase()
            .replace(/[^\w\s-]/g, '') // Remove special chars
            .replace(/\s+/g, '-') // Replace spaces with hyphens
            .replace(/-+/g, '-') // Remove consecutive hyphens
            .trim();
    };
    
    useEffect(() => {
        // Check if admin is logged in
        const isLoggedIn = sessionStorage.getItem('adminLoggedIn');
        
        if (!isLoggedIn) {
            // Redirect to login if not authenticated
            router.push('/admin/login');
        } else {
            setIsLoading(false);
            // Focus title input when page loads
            if (titleInputRef.current) {
                titleInputRef.current.focus();
            }
        }
    }, [router]);

    const handleLogout = () => {
        // Clear admin session
        sessionStorage.removeItem('adminLoggedIn');
        router.push('/admin/login');
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        
        // If title changes, automatically generate slug
        if (name === 'title') {
            setBlogPost({
                ...blogPost,
                title: value,
                slug: generateSlug(value)
            });
        } else {
            setBlogPost({
                ...blogPost,
                [name]: value
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSaving(true);
        setError('');
        
        try {
            // Prepare blog post data
            let newBlogPost = { ...blogPost };
            
            // Set the current date if not provided
            if (!newBlogPost.date) {
                const today = new Date();
                const options = { year: 'numeric', month: 'long', day: 'numeric' };
                newBlogPost.date = today.toLocaleDateString('en-US', options);
            }
            
            // Ensure slug is set
            if (!newBlogPost.slug) {
                newBlogPost.slug = generateSlug(newBlogPost.title);
            }
            
            // Call API to create new blog post
            const response = await fetch('/api/blogs', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newBlogPost),
            });
            
            const data = await response.json();
            
            if (!response.ok) {
                throw new Error(data.error || 'Failed to create blog post');
            }
            
            alert('Blog post created successfully!');
            router.push('/admin/blogs');
        } catch (error) {
            console.error('Error creating blog post:', error);
            setError(error.message || 'Failed to create blog post. Please try again.');
        } finally {
            setIsSaving(false);
        }
    };

    const handleImageUpload = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        // Show preview
        const reader = new FileReader();
        reader.onload = (e) => setImagePreview(e.target.result);
        reader.readAsDataURL(file);

        try {
            const formData = new FormData();
            formData.append('image', file);

            const response = await fetch('/api/upload', {
                method: 'POST',
                body: formData,
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Failed to upload image');
            }

            // Update blog post with new image path
            setBlogPost({
                ...blogPost,
                featuredImage: `/assets/blog/${data.filename}`
            });

            alert('Image uploaded successfully!');
        } catch (error) {
            console.error('Error uploading image:', error);
            setError('Failed to upload image. Please try again.');
            setImagePreview('');
        }
    };

    // Update editor options to disable autofocus
    const editorOptions = {
        autofocus: false, // Disable autofocus
        spellChecker: false,
        placeholder: "Write your blog content here...",
        status: ['lines', 'words'],
        toolbar: [
            'bold', 'italic', 'heading', '|',
            'quote', 'unordered-list', 'ordered-list', '|',
            'link', 'image', '|',
            'preview', 'side-by-side', 'fullscreen', '|',
            'guide'
        ]
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
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" href="/admin/dashboard">
                        Blog CMS
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
                                <Link className="nav-link" href="/admin/dashboard">
                                    Dashboard
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" href="/admin/blogs">
                                    Blogs
                                </Link>
                            </li>
                        </ul>
                        <button onClick={handleLogout} className="btn btn-outline-light">
                            Logout
                        </button>
                    </div>
                </div>
            </nav>

            <div className="container py-4">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h2>Create New Blog Post</h2>
                    <Link href="/admin/blogs" className="btn btn-outline-secondary">
                        <i className="bi bi-arrow-left me-2"></i> Back to Blogs
                    </Link>
                </div>

                {error && (
                    <div className="alert alert-danger" role="alert">
                        {error}
                    </div>
                )}

                <div className="card shadow-sm">
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-md-8">
                                    {/* Main Content Section */}
                                    <div className="mb-4">
                                        <label htmlFor="title" className="form-label fw-bold">Blog Title</label>
                                        <input 
                                            type="text" 
                                            className="form-control form-control-lg" 
                                            id="title" 
                                            name="title"
                                            value={blogPost.title}
                                            onChange={handleInputChange}
                                            placeholder="Enter an engaging title"
                                            required
                                            ref={titleInputRef}
                                            tabIndex={1}
                                        />
                                    </div>

                                    <div className="mb-4">
                                        <label htmlFor="content" className="form-label fw-bold">Content</label>
                                        <SimpleMDE
                                            value={blogPost.content}
                                            onChange={(value) => handleInputChange({
                                                target: { name: 'content', value }
                                            })}
                                            options={editorOptions}
                                            tabIndex={2}
                                        />
                                    </div>

                                    <div className="mb-4">
                                        <label htmlFor="excerpt" className="form-label fw-bold">Excerpt</label>
                                        <textarea 
                                            className="form-control" 
                                            id="excerpt" 
                                            name="excerpt"
                                            value={blogPost.excerpt}
                                            onChange={handleInputChange}
                                            rows="3"
                                            placeholder="Write a compelling summary (will appear in blog listings)"
                                            required
                                        ></textarea>
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    {/* Sidebar Settings */}
                                    <div className="card bg-light">
                                        <div className="card-body">
                                            <h5 className="card-title mb-3">Post Settings</h5>

                                            <div className="mb-3">
                                                <label htmlFor="status" className="form-label">Status</label>
                                                <select 
                                                    className="form-select" 
                                                    id="status" 
                                                    name="status"
                                                    value={blogPost.status}
                                                    onChange={handleInputChange}
                                                >
                                                    <option value="draft">Draft</option>
                                                    <option value="published">Published</option>
                                                </select>
                                            </div>

                                            <div className="mb-3">
                                                <label htmlFor="slug" className="form-label">URL Slug</label>
                                                <div className="input-group">
                                                    <span className="input-group-text text-muted">/blog/</span>
                                                    <input 
                                                        type="text" 
                                                        className="form-control" 
                                                        id="slug" 
                                                        name="slug"
                                                        value={blogPost.slug}
                                                        onChange={handleInputChange}
                                                        placeholder="url-friendly-title"
                                                        required
                                                    />
                                                </div>
                                            </div>

                                            <div className="mb-3">
                                                <label htmlFor="date" className="form-label">Publication Date</label>
                                                <input 
                                                    type="date" 
                                                    className="form-control" 
                                                    id="date" 
                                                    name="date"
                                                    value={blogPost.date}
                                                    onChange={handleInputChange}
                                                />
                                            </div>

                                            <div className="mb-3">
                                                <label htmlFor="tags" className="form-label">Tags</label>
                                                <input 
                                                    type="text" 
                                                    className="form-control" 
                                                    id="tags" 
                                                    name="tags"
                                                    value={blogPost.tags}
                                                    onChange={handleInputChange}
                                                    placeholder="tech, web-dev, tutorial"
                                                />
                                                <small className="text-muted">Separate tags with commas</small>
                                            </div>

                                            <div className="mb-3">
                                                <label htmlFor="featuredImage" className="form-label">Featured Image</label>
                                                <div className="d-flex gap-2 align-items-start">
                                                    <div className="flex-grow-1">
                                                        <input 
                                                            type="text" 
                                                            className="form-control" 
                                                            id="featuredImage" 
                                                            name="featuredImage"
                                                            value={blogPost.featuredImage}
                                                            onChange={handleInputChange}
                                                            placeholder="/assets/blog/your-image.jpg"
                                                        />
                                                    </div>
                                                    <div>
                                                        <input
                                                            type="file"
                                                            ref={fileInputRef}
                                                            className="d-none"
                                                            accept="image/*"
                                                            onChange={handleImageUpload}
                                                        />
                                                        <button 
                                                            type="button" 
                                                            className="btn btn-outline-primary"
                                                            onClick={() => fileInputRef.current.click()}
                                                        >
                                                            Upload
                                                        </button>
                                                    </div>
                                                </div>
                                                {(imagePreview || blogPost.featuredImage) && (
                                                    <div className="mt-2">
                                                        <img 
                                                            src={imagePreview || blogPost.featuredImage} 
                                                            alt="Preview" 
                                                            className="img-thumbnail" 
                                                            style={{maxHeight: '150px'}}
                                                        />
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="d-grid gap-2 mt-4">
                                        <button 
                                            type="submit" 
                                            className="btn btn-primary btn-lg"
                                            disabled={isSaving}
                                        >
                                            {isSaving ? (
                                                <>
                                                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                                    Saving...
                                                </>
                                            ) : 'Publish Blog Post'}
                                        </button>
                                        <Link href="/admin/blogs" className="btn btn-outline-secondary">
                                            Cancel
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <style jsx>{`
                /* Input Base Styles */
                .form-control, 
                .form-select {
                    padding: 0.75rem 1rem;
                    font-size: 1rem;
                    line-height: 1.5;
                    border: 2px solid #dee2e6;
                    border-radius: 6px;
                    width: 100%;
                    background-color: #fff;
                    transition: all 0.2s ease-in-out;
                }

                /* Large Input Styles */
                .form-control-lg {
                    padding: 1rem 1.25rem;
                    font-size: 1.25rem;
                    border-radius: 8px;
                }

                /* Focus & Hover States */
                .form-control:focus, 
                .form-select:focus,
                .form-control:active,
                .form-select:active {
                    border-color: #0d6efd;
                    box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.15);
                    outline: none;
                }

                .form-control:hover:not(:focus), 
                .form-select:hover:not(:focus) {
                    border-color: #0d6efd;
                }

                /* Input Group Styles */
                .input-group {
                    position: relative;
                }

                .input-group .form-control {
                    border-top-left-radius: 0;
                    border-bottom-left-radius: 0;
                }

                .input-group-text {
                    background-color: #f8f9fa;
                    border: 2px solid #dee2e6;
                    border-right: none;
                    padding: 0.75rem 1rem;
                    border-top-left-radius: 6px;
                    border-bottom-left-radius: 6px;
                    color: #6c757d;
                }

                /* Label Styles */
                .form-label {
                    margin-bottom: 0.75rem;
                    font-weight: 600;
                    color: #212529;
                    font-size: 0.95rem;
                }

                /* Textarea Styles */
                textarea.form-control {
                    min-height: 120px;
                    resize: vertical;
                    line-height: 1.6;
                }

                /* Select Styles */
                .form-select {
                    cursor: pointer;
                    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e");
                    background-repeat: no-repeat;
                    background-position: right 0.75rem center;
                    background-size: 16px 12px;
                }

                /* Card Styles */
                .card {
                    border-radius: 8px;
                    border: 1px solid rgba(0,0,0,.125);
                    box-shadow: 0 1px 3px rgba(0,0,0,.1);
                }

                .card.bg-light {
                    background-color: #f8f9fa !important;
                }

                /* Button Styles */
                .btn {
                    padding: 0.75rem 1.5rem;
                    font-weight: 500;
                    border-radius: 6px;
                    transition: all 0.2s ease-in-out;
                    border-width: 2px;
                }

                .btn:focus {
                    box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
                }

                .btn-lg {
                    padding: 1rem 2rem;
                    font-size: 1.1rem;
                }

                .btn-outline-primary {
                    border-color: #0d6efd;
                }

                .btn-outline-primary:hover {
                    background-color: #0d6efd;
                    border-color: #0d6efd;
                    color: white;
                }

                /* Editor Customization */
                :global(.EasyMDEContainer) {
                    border-radius: 6px;
                }

                :global(.EasyMDEContainer .CodeMirror) {
                    padding: 1rem;
                    min-height: 300px;
                    border-radius: 6px;
                    border: 2px solid #dee2e6;
                }

                :global(.EasyMDEContainer .editor-toolbar) {
                    border-radius: 6px 6px 0 0;
                    padding: 0.5rem;
                    border: 2px solid #dee2e6;
                    border-bottom: none;
                }

                :global(.EasyMDEContainer .editor-toolbar button) {
                    margin: 0 2px;
                    border-radius: 4px;
                }

                :global(.EasyMDEContainer .CodeMirror-focused) {
                    border-color: #0d6efd;
                    box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.15);
                }

                /* Image Preview */
                .img-thumbnail {
                    border-radius: 6px;
                    border: 2px solid #dee2e6;
                    padding: 0.25rem;
                    background-color: white;
                    transition: all 0.2s ease-in-out;
                }

                .img-thumbnail:hover {
                    border-color: #0d6efd;
                    box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.1);
                }

                /* Small text */
                .text-muted {
                    font-size: 0.875rem;
                    color: #6c757d !important;
                }

                /* Custom scrollbar */
                textarea::-webkit-scrollbar {
                    width: 8px;
                }

                textarea::-webkit-scrollbar-track {
                    background: #f1f1f1;
                    border-radius: 4px;
                }

                textarea::-webkit-scrollbar-thumb {
                    background: #0d6efd;
                    border-radius: 4px;
                }

                textarea::-webkit-scrollbar-thumb:hover {
                    background: #0b5ed7;
                }

                /* Focus Ring Fix */
                *:focus {
                    outline: none !important;
                }

                *:focus-visible {
                    outline: 2px solid #0d6efd !important;
                    outline-offset: 2px !important;
                }

                /* Disabled State */
                .form-control:disabled,
                .form-select:disabled {
                    background-color: #e9ecef;
                    opacity: 0.65;
                    cursor: not-allowed;
                }
            `}</style>
        </div>
    );
};

export default CreateBlog;
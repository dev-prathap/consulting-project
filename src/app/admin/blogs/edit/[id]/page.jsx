"use client";
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { use } from 'react';
import dynamic from 'next/dynamic';
import 'easymde/dist/easymde.min.css';

// Import SimpleMDE editor dynamically for client-side only
const SimpleMDE = dynamic(
    () => import('react-simplemde-editor'),
    { ssr: false }
);

export default function EditBlog({ params }) {
    // Unwrap params Promise using React.use()
    const unwrappedParams = use(params);
    const blogId = unwrappedParams.id;
    
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);
    const [isSaving, setIsSaving] = useState(false);
    const [error, setError] = useState('');
    const [blogPost, setBlogPost] = useState({
        id: '',
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
    
    // Generate slug from title
    const generateSlug = (title) => {
        return title
            .toLowerCase()
            .replace(/[^\w\s-]/g, '') // Remove special chars
            .replace(/\s+/g, '-') // Replace spaces with hyphens
            .replace(/-+/g, '-') // Remove consecutive hyphens
            .trim();
    };
    
    // Fetch blog data from API
    const fetchBlogData = async () => {
        try {
            const response = await fetch('/api/blogs');
            
            if (!response.ok) {
                throw new Error('Failed to fetch blogs');
            }
            
            const blogs = await response.json();
            const blog = blogs.find(blog => blog.id.toString() === blogId);
            
            if (blog) {
                setBlogPost(blog);
            } else {
                // Blog not found
                alert('Blog post not found');
                router.push('/admin/blogs');
            }
            
            setIsLoading(false);
        } catch (error) {
            console.error('Error fetching blog:', error);
            setError('Failed to load blog data. Please try again.');
            setIsLoading(false);
        }
    };
    
    // Find blog by ID from params
    useEffect(() => {
        // Check if admin is logged in
        const isLoggedIn = sessionStorage.getItem('adminLoggedIn');
        
        if (!isLoggedIn) {
            // Redirect to login if not authenticated
            router.push('/admin/login');
        } else {
            // Fetch blog from API
            fetchBlogData();
        }
    }, [router, blogId]);

    const handleLogout = () => {
        // Clear admin session
        sessionStorage.removeItem('adminLoggedIn');
        router.push('/admin/login');
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        
        // If title changes, update slug automatically
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
            // If slug is empty, generate it
            let updatedBlogPost = { ...blogPost };
            
            if (!updatedBlogPost.slug) {
                updatedBlogPost.slug = generateSlug(updatedBlogPost.title);
            }
            
            // Update date if not set
            if (!updatedBlogPost.date) {
                const today = new Date();
                const options = { year: 'numeric', month: 'long', day: 'numeric' };
                updatedBlogPost.date = today.toLocaleDateString('en-US', options);
            }
            
            // Make sure ID is a number, not a string
            updatedBlogPost.id = parseInt(updatedBlogPost.id);
            
            // Call the API to update the blog post
            const response = await fetch('/api/blogs', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedBlogPost),
            });
            
            const data = await response.json();
            
            if (!response.ok) {
                throw new Error(data.error || 'Failed to update blog post');
            }
            
            alert('Blog post updated successfully!');
            router.push('/admin/blogs');
        } catch (error) {
            console.error('Error updating blog post:', error);
            setError(error.message || 'Failed to update blog post. Please try again.');
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

    // Add editor options
    const editorOptions = {
        autofocus: true,
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
                    <h2>Edit Blog Post</h2>
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
                                            ) : 'Update Blog Post'}
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
                .form-control:focus, .form-select:focus {
                    border-color: #80bdff;
                    box-shadow: 0 0 0 0.2rem rgba(0,123,255,.25);
                }
                .card {
                    border-radius: 8px;
                }
                .form-label {
                    margin-bottom: 0.5rem;
                }
                .input-group-text {
                    background-color: #f8f9fa;
                    border-right: none;
                }
                .btn-lg {
                    padding: 0.75rem 1.5rem;
                }
            `}</style>
        </div>
    );
} 
"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const BlogManagement = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [error, setError] = useState('');
  const [deleteId, setDeleteId] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [sortBy, setSortBy] = useState('date');
  const [sortOrder, setSortOrder] = useState('desc');
  const [stats, setStats] = useState({
    total: 0,
    published: 0,
    draft: 0
  });

  // Add these new gradient themes
  const gradientThemes = {
    primary: 'linear-gradient(135deg, #6B73FF 0%, #000DFF 100%)',
    success: 'linear-gradient(135deg, #43E97B 0%, #38F9D7 100%)',
    warning: 'linear-gradient(135deg, #F6D365 0%, #FDA085 100%)',
    info: 'linear-gradient(135deg, #0093E9 0%, #80D0C7 100%)',
    danger: 'linear-gradient(135deg, #FF0844 0%, #FFB199 100%)',
    purple: 'linear-gradient(135deg, #8E2DE2 0%, #4A00E0 100%)',
    dark: 'linear-gradient(135deg, #434343 0%, #000000 100%)'
  };

  // Fetch blogs from API
  const fetchBlogs = async () => {
    try {
      const response = await fetch('/api/blogs');
      
      if (!response.ok) {
        throw new Error('Failed to fetch blogs');
      }
      
      const data = await response.json();
      
      // Format the data for display
      const formattedBlogs = data.map(blog => ({
        id: blog.id,
        title: blog.title,
        excerpt: blog.excerpt,
        date: blog.date,
        status: blog.status === "published" ? "Published" : "Draft",
        slug: blog.slug,
        featuredImage: blog.featuredImage,
        tags: blog.tags
      }));
      
      // Calculate stats
      const published = formattedBlogs.filter(blog => blog.status === "Published").length;
      
      setBlogs(formattedBlogs);
      setFilteredBlogs(formattedBlogs);
      setStats({
        total: formattedBlogs.length,
        published: published,
        draft: formattedBlogs.length - published
      });
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching blogs:', error);
      setError('Failed to load blogs. Please refresh the page.');
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // Check if admin is logged in
    const isLoggedIn = sessionStorage.getItem("adminLoggedIn");

    if (!isLoggedIn) {
      // Redirect to login if not authenticated
      router.push("/admin/login");
    } else {
      // Load blogs from API
      fetchBlogs();
    }
  }, [router]);

  // Apply filters and sorting
  useEffect(() => {
    let result = [...blogs];
    
    // Apply search filter
    if (searchTerm) {
      result = result.filter(blog => 
        blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (blog.tags && blog.tags.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    
    // Apply status filter
    if (statusFilter !== 'all') {
      result = result.filter(blog => 
        blog.status === statusFilter
      );
    }
    
    // Apply sorting
    result.sort((a, b) => {
      if (sortBy === 'title') {
        return sortOrder === 'asc' 
          ? a.title.localeCompare(b.title)
          : b.title.localeCompare(a.title);
      } else if (sortBy === 'date') {
        // Assuming date strings are in a format that can be compared lexicographically
        // For more accurate date sorting, convert to Date objects first
        return sortOrder === 'asc'
          ? new Date(a.date) - new Date(b.date)
          : new Date(b.date) - new Date(a.date);
      }
      return 0;
    });
    
    setFilteredBlogs(result);
  }, [blogs, searchTerm, statusFilter, sortBy, sortOrder]);

  const handleLogout = () => {
    // Clear admin session
    sessionStorage.removeItem("adminLoggedIn");
    router.push("/admin/login");
  };

  const handleDeleteClick = (blogId) => {
    setDeleteId(blogId);
    setShowDeleteModal(true);
  };

  const confirmDelete = async () => {
    if (!deleteId) return;
    
    setIsDeleting(true);
    try {
      const response = await fetch(`/api/blogs?id=${deleteId}`, {
        method: 'DELETE',
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to delete blog post');
      }
      
      // Remove the deleted blog from the state
      const updatedBlogs = blogs.filter(blog => blog.id !== deleteId);
      setBlogs(updatedBlogs);
      
      // Recalculate stats
      const published = updatedBlogs.filter(blog => blog.status === "Published").length;
      setStats({
        total: updatedBlogs.length,
        published: published,
        draft: updatedBlogs.length - published
      });
      
      setShowDeleteModal(false);
      setDeleteId(null);
      alert('Blog post deleted successfully!');
    } catch (error) {
      console.error('Error deleting blog:', error);
      alert('Failed to delete blog post. Please try again.');
    } finally {
      setIsDeleting(false);
    }
  };

  const cancelDelete = () => {
    setShowDeleteModal(false);
    setDeleteId(null);
  };

  const handleSortChange = (field) => {
    if (sortBy === field) {
      // Toggle order if same field
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      // New field, set default order
      setSortBy(field);
      setSortOrder('desc');
    }
  };

  const renderListView = () => (
    <div className="table-responsive">
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Title</th>
            <th>Status</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredBlogs.map((blog) => (
            <tr key={blog.id}>
              <td>{blog.title}</td>
              <td>
                <span className={`badge ${blog.status === "Published" ? "bg-success" : "bg-warning"}`}>
                  {blog.status}
                </span>
              </td>
              <td>{blog.date}</td>
              <td>
                <Link
                  href={`/admin/blogs/edit/${blog.id}`}
                  className="btn btn-sm btn-primary me-2"
                >
                  Edit
                </Link>
                <Link
                  href={`/blog/${blog.slug}`}
                  target="_blank"
                  className="btn btn-sm btn-info me-2"
                >
                  View
                </Link>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => handleDeleteClick(blog.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const renderStatsCards = () => (
    <div className="row mb-4">
      <div className="col-md-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Total Posts</h5>
            <h3>{stats.total}</h3>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Published</h5>
            <h3>{stats.published}</h3>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Drafts</h5>
            <h3>{stats.draft}</h3>
          </div>
        </div>
      </div>
    </div>
  );

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
          <h2>Blog Posts</h2>
          <Link href="/admin/blogs/create" className="btn btn-primary">
            Add New Post
          </Link>
        </div>

        {renderStatsCards()}

        <div className="card mb-4">
          <div className="card-body">
            <div className="row g-3">
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search blogs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="col-md-3">
                <select
                  className="form-select"
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                >
                  <option value="all">All Status</option>
                  <option value="Published">Published</option>
                  <option value="Draft">Draft</option>
                </select>
              </div>
              <div className="col-md-3">
                <select
                  className="form-select"
                  value={`${sortBy}-${sortOrder}`}
                  onChange={(e) => {
                    const [field, order] = e.target.value.split('-');
                    setSortBy(field);
                    setSortOrder(order);
                  }}
                >
                  <option value="date-desc">Newest First</option>
                  <option value="date-asc">Oldest First</option>
                  <option value="title-asc">Title (A-Z)</option>
                  <option value="title-desc">Title (Z-A)</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {renderListView()}

        {/* Delete Modal */}
        {showDeleteModal && (
          <div className="modal fade show" style={{ display: 'block' }}>
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Delete Blog Post</h5>
                  <button type="button" className="btn-close" onClick={cancelDelete}></button>
                </div>
                <div className="modal-body">
                  <p>Are you sure you want to delete this blog post? This action cannot be undone.</p>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" onClick={cancelDelete}>
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={confirmDelete}
                    disabled={isDeleting}
                  >
                    {isDeleting ? 'Deleting...' : 'Delete'}
                  </button>
                </div>
              </div>
            </div>
            <div className="modal-backdrop fade show"></div>
          </div>
        )}

        <style jsx>{`
          .card {
            border-radius: 4px;
            box-shadow: 0 1px 3px rgba(0,0,0,0.12);
          }
          .table th {
            font-weight: 500;
            background: #f8f9fa;
          }
          .btn {
            border-radius: 4px;
          }
        `}</style>
      </div>
    </div>
  );
};

export default BlogManagement;

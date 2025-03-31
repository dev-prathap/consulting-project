"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from 'react';

const Blog1 = () => {
    const [blogs, setBlogs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await fetch('/api/blogs');
                if (!response.ok) {
                    throw new Error('Failed to fetch blogs');
                }
                const data = await response.json();
                // Get all published blogs
                const publishedBlogs = data.filter(blog => blog.status === "published");
                setBlogs(publishedBlogs);
            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    if (isLoading) {
        return (
            <div className="text-center py-5">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="alert alert-danger text-center" role="alert">
                {error}
            </div>
        );
    }

    return (
        <section className="blog-section section-padding fix">
            <div className="container">
                <div className="blog-wrapper style1">
                    <div className="section-title text-center mxw-685 mx-auto">
                        <div className="subtitle wow fadeInUp" data-wow-delay=".2s">
                            Our Blog <Image src="/assets/images/icon/fireIcon.svg" alt="img" width={16} height={17} />
                        </div>
                        <h2 className="title wow fadeInUp" data-wow-delay=".4s">Recent Articles And Latest Blog</h2>
                    </div>
                    <div className="row gy-5">
                        {blogs.map((blog, index) => (
                            <div className="col-xl-4 col-md-6" key={blog.id}>
                                <div className="blog-card style1 wow fadeInUp" data-wow-delay={`${(index+1)*0.2}s`}>
                                    <div className="thumb">
                                        <Image src={blog.featuredImage} alt={blog.title} width={326} height={219} />
                                    </div>
                                    <div className="body">
                                        <div className="tag-meta">
                                            <Image src="/assets/images/icon/FolderIcon.svg" alt="img" width={16} height={12} />
                                            {blog.tags.split(",")[0]}
                                        </div>
                                        <h3><Link href={`/blog/${blog.slug}`}>{blog.title}</Link></h3>
                                        <div className="blog-meta">
                                            <div className="item child1">
                                                <span className="icon">
                                                    <Image src="/assets/images/icon/userIcon.svg" alt="img" width={14} height={16} />
                                                </span>
                                                <span className="text">By Admin</span>
                                            </div>
                                            <div className="item">
                                                <span className="icon">
                                                    <Image src="/assets/images/icon/calendar.svg" alt="img" width={15} height={16} />
                                                </span>
                                                <span className="text">{blog.date}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blog1;
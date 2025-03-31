"use client"
import { useEffect, useState } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';

const BlogDetails = () => {
    const params = useParams();
    const { slug } = params;
    const [blog, setBlog] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [relatedPosts, setRelatedPosts] = useState([]);
    
    useEffect(() => {
        loadBackgroudImages();
        
        const fetchBlogAndRelated = async () => {
            try {
                const response = await fetch('/api/blogs');
                if (!response.ok) {
                    throw new Error('Failed to fetch blog');
                }
                const blogs = await response.json();
                
                // Find the blog post by slug
                if (slug) {
                    const foundBlog = blogs.find(b => b.slug === slug);
                    if (foundBlog) {
                        setBlog(foundBlog);
                        
                        // Find related posts based on tags
                        const blogTags = foundBlog.tags.split(',').map(tag => tag.trim().toLowerCase());
                        const related = blogs
                            .filter(b => b.id !== foundBlog.id) // Exclude current blog
                            .filter(b => {
                                const postTags = b.tags.split(',').map(tag => tag.trim().toLowerCase());
                                return postTags.some(tag => blogTags.includes(tag));
                            })
                            .slice(0, 3); // Get only 3 related posts
                        setRelatedPosts(related);
                    } else {
                        setError('Blog post not found');
                    }
                } else {
                    // Default to first blog if no slug provided
                    setBlog(blogs[0]);
                }
            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchBlogAndRelated();
    }, [slug]);

    // Custom renderers for markdown components
    const components = {
        code({node, inline, className, children, ...props}) {
            return (
                <pre className="bg-gray-100 rounded-md p-4 my-4 overflow-auto">
                    <code className={className} {...props}>
                        {children}
                    </code>
                </pre>
            );
        },
        p: ({children}) => <p className="mb-4">{children}</p>,
        h1: ({children}) => <h1 className="text-3xl font-bold mb-4">{children}</h1>,
        h2: ({children}) => <h2 className="text-2xl font-bold mb-3">{children}</h2>,
        h3: ({children}) => <h3 className="text-xl font-bold mb-3">{children}</h3>,
        strong: ({children}) => <strong className="font-bold">{children}</strong>,
        em: ({children}) => <em className="italic">{children}</em>,
        blockquote: ({children}) => (
            <blockquote className="border-l-4 border-gray-300 pl-4 my-4 italic">
                {children}
            </blockquote>
        ),
        ul: ({children}) => <ul className="list-disc pl-6 mb-4">{children}</ul>,
        ol: ({children}) => <ol className="list-decimal pl-6 mb-4">{children}</ol>,
        li: ({children}) => <li className="mb-2">{children}</li>,
    };

    if (isLoading) {
        return (
            <div className="container section-padding">
                <div className="text-center">
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="container section-padding">
                <div className="alert alert-danger" role="alert">
                    {error}
                </div>
            </div>
        );
    }

    if (!blog) {
        return (
            <div className="container section-padding">
                <div className="alert alert-warning" role="alert">
                    Blog post not found
                </div>
            </div>
        );
    }

    // Split tags into array
    const tagList = blog.tags.split(',').map(tag => tag.trim());

    return (
        <section className="news-standard section-padding fix">
            <div className="container">
                <div className="news-details-area">
                    <div className="row g-5">
                        <div className="col-12 col-lg-8">
                            <div className="blog-post-details">
                                <div className="single-blog-post">
                                    <div className="post-featured-thumb position-relative">
                                        <Image 
                                            src={blog.featuredImage} 
                                            alt={blog.title}
                                            width={800}
                                            height={500}
                                            className="w-100 rounded-3 object-cover"
                                            priority
                                            style={{
                                                maxHeight: '500px',
                                                objectFit: 'cover'
                                            }}
                                        />
                                    </div>
                                    <div className="post-content">
                                        <ul className="post-list d-flex align-items-center wow fadeInUp" data-wow-delay=".2s">
                                            <li>
                                                <i className="bi bi-person"></i>
                                                By Admin
                                            </li>
                                            <li>
                                                <i className="bi bi-calendar"></i>
                                                {blog.date}
                                            </li>
                                            <li>
                                                <Image src="/assets/images/icon/tagIcon.png" alt="img" width={20} height={20} />
                                                {tagList[0]}
                                            </li>
                                        </ul>
                                        <h3 className="wow fadeInUp" data-wow-delay=".4s">{blog.title}</h3>
                                        <div className="blog-content wow fadeInUp markdown-content" data-wow-delay=".6s">
                                            <ReactMarkdown 
                                                remarkPlugins={[remarkGfm]}
                                                rehypePlugins={[rehypeRaw, rehypeSanitize]}
                                                components={components}
                                            >
                                                {blog.content}
                                            </ReactMarkdown>
                                        </div>
                                    </div>
                                </div>
                                <div className="row tag-share-wrap mt-4 mb-30 wow fadeInUp" data-wow-delay=".8s">
                                    <div className="col-lg-8 col-12">
                                        <div className="tagcloud">
                                            <h6 className="d-inline me-2">Tags: </h6>
                                            {tagList.map((tag, index) => (
                                                <Link href={`/blog?tag=${tag}`} key={index} className="tag-link">
                                                    {tag}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-12 mt-3 mt-lg-0 text-lg-end wow fadeInUp"
                                        data-wow-delay="1.2s">
                                        <div className="social-share">
                                            <span className="me-3">Share:</span>
                                            <a href="#" onClick={(e) => {
                                                e.preventDefault();
                                                window.open(`https://facebook.com/sharer/sharer.php?u=${window.location.href}`, '_blank');
                                            }}><i className="bi bi-facebook"></i></a>
                                            <a href="#" onClick={(e) => {
                                                e.preventDefault();
                                                window.open(`https://twitter.com/intent/tweet?url=${window.location.href}&text=${blog.title}`, '_blank');
                                            }}><i className="bi bi-twitter"></i></a>
                                            <a href="#" onClick={(e) => {
                                                e.preventDefault();
                                                window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${window.location.href}`, '_blank');
                                            }}><i className="bi bi-linkedin"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4">
                            <div className="main-sidebar">
                                <div className="single-sidebar-widget wow fadeInUp" data-wow-delay=".2s">
                                    <div className="wid-title">
                                        <h3>Related Posts</h3>
                                    </div>
                                    <div className="recent-post-area">
                                        {relatedPosts.map((post, index) => (
                                            <div className="recent-items" key={post.id}>
                                                <div className="recent-thumb">
                                                    <Image src={post.featuredImage} alt={post.title} width={78} height={79} />
                                                </div>
                                                <div className="recent-content">
                                                    <ul>
                                                        <li>
                                                            <Image src="/assets/images/icon/calendarIcon.svg" alt="calendar" width={20} height={20} />
                                                            {post.date}
                                                        </li>
                                                    </ul>
                                                    <h6>
                                                        <Link href={`/blog/${post.slug}`}>
                                                            {post.title}
                                                        </Link>
                                                    </h6>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="single-sidebar-widget wow fadeInUp" data-wow-delay=".4s">
                                    <div className="wid-title">
                                        <h3>Tags</h3>
                                    </div>
                                    <div className="news-widget-categories">
                                        <div className="tagcloud">
                                            {tagList.map((tag, index) => (
                                                <Link href={`/blog?tag=${tag}`} key={index}>
                                                    {tag}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogDetails;
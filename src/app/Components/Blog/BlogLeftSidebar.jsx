import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import blogData from "../../Data/BlogContent.json";

const BlogLeftSidebar = () => {
    // Get search params for filtering
    const searchParams = useSearchParams();
    const categoryFilter = searchParams.get('category');
    const tagFilter = searchParams.get('tag');

    // Get published blogs and apply filters
    let publishedBlogs = blogData.filter(blog => blog.status === "published");
    
    // Filter by category if specified
    if (categoryFilter) {
        publishedBlogs = publishedBlogs.filter(blog => 
            blog.tags.split(',').map(tag => tag.trim()).includes(categoryFilter)
        );
    }
    
    // Filter by tag if specified
    if (tagFilter) {
        publishedBlogs = publishedBlogs.filter(blog => 
            blog.tags.split(',').map(tag => tag.trim()).includes(tagFilter)
        );
    }
    
    // Get recent posts (top 3 published posts, without filters)
    const recentPosts = blogData
        .filter(blog => blog.status === "published")
        .slice(0, 3);
    
    // Extract unique tags from all blog posts (without filters)
    const allTags = blogData
        .filter(blog => blog.status === "published")
        .flatMap(blog => blog.tags.split(',').map(tag => tag.trim()));
    const uniqueTags = [...new Set(allTags)];
    
    // Extract unique categories (using first tag of each post as category)
    const categories = blogData
        .filter(blog => blog.status === "published")
        .map(blog => blog.tags.split(',')[0].trim());
    const uniqueCategories = [...new Set(categories)];
    const categoryCounts = uniqueCategories.map(category => ({
        name: category,
        count: categories.filter(cat => cat === category).length
    }));

    return (
        <section className="news-standard fix section-padding">
        <div className="container">
            <div className="row g-4">
                <div className="col-12 col-lg-4">

                <div className="main-sidebar">
                        <div className="single-sidebar-widget wow fadeInUp" data-wow-delay=".2s">
                            <div className="wid-title">
                                <h3>Search</h3>
                            </div>
                            <div className="search-widget">
                                <form action="#">
                                    <input type="text" placeholder="Search here" />
                                    <button type="submit"><i className="bi bi-search"></i></button>
                                </form>
                            </div>
                        </div>
                        <div className="single-sidebar-widget wow fadeInUp" data-wow-delay=".4s">
                            <div className="wid-title">
                                <h3>Categories</h3>
                            </div>
                            <div className="news-widget-categories">
                                <ul>
                                    {categoryCounts.map((category, index) => (
                                        <li key={index} className={categoryFilter === category.name ? "active" : ""}>
                                            <Link href={`/blog-left-sidebar?category=${category.name}`}>{category.name} <span>({category.count})</span></Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="single-sidebar-widget wow fadeInUp" data-wow-delay=".6s">
                            <div className="wid-title">
                                <h3>Recent Post</h3>
                            </div>
                            <div className="recent-post-area">
                                {recentPosts.map((post, index) => (
                                    <div className="recent-items" key={post.id}>
                                        <div className="recent-thumb">
                                            <Image src={post.featuredImage} alt={post.title} width={78} height={79} />
                                        </div>
                                        <div className="recent-content">
                                            <ul>
                                                <li>
                                                    <Image src="/assets/images/icon/calendarIcon.svg" alt="img" width={20} height={20} />
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
                        <div className="single-sidebar-widget wow fadeInUp" data-wow-delay=".9s">
                            <div className="wid-title">
                                <h3>Tags</h3>
                            </div>
                            <div className="news-widget-categories">
                                <div className="tagcloud">
                                    {uniqueTags.slice(0, 9).map((tag, index) => (
                                        <a href={`/blog-left-sidebar?tag=${tag}`} key={index} 
                                           style={tagFilter === tag ? {backgroundColor: '#7444FD', color: '#fff'} : {}}>
                                            {tag}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="col-12 col-lg-8">
                    
                <div className="news-standard-wrapper">
                        {publishedBlogs.length > 0 ? (
                            publishedBlogs.map((blog, index) => (
                                <div className="news-standard-items wow fadeInUp" data-wow-delay={`${(index+1)*0.2}s`} key={blog.id}>
                                    <div className="news-thumb">
                                        <Image src={blog.featuredImage} alt={blog.title} width={710} height={430} />
                                        <div className="post-date">
                                            <h3>
                                                {new Date(blog.date).getDate()} <br/>
                                                <span>{new Date(blog.date).toLocaleString('default', { month: 'short' })}</span>
                                            </h3>
                                        </div>
                                    </div>
                                    <div className="news-content">
                                        <ul>
                                            <li>
                                                <i className="bi bi-person"></i>
                                                By Admin
                                            </li>
                                            <li>
                                                <i className="bi bi-tag"></i>
                                                {blog.tags.split(",")[0]}
                                            </li>
                                        </ul>
                                        <h3>
                                            <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
                                        </h3>
                                        <p>
                                            {blog.excerpt}
                                        </p>
                                        <Link href={`/blog/${blog.slug}`} className="theme-btn mt-4">
                                            Read More
                                            <i className="bi bi-arrow-right"></i>
                                        </Link>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="text-center py-5">
                                <h3>No blog posts found matching your criteria.</h3>
                                <Link href="/blog-left-sidebar" className="theme-btn mt-4">
                                    View All Posts
                                    <i className="bi bi-arrow-right"></i>
                                </Link>
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </div>
    </section>
    );
};

export default BlogLeftSidebar;
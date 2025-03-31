import Image from "next/image";
import Link from "next/link";

const BlogStandard = () => {
    return (
        <section className="news-standard fix section-padding">
        <div className="container">
            <div className="row g-4">
                <div className="col-12 col-lg-8">

                    <div className="news-standard-wrapper">
                        <div className="news-standard-items wow fadeInUp" data-wow-delay=".2s">
                            <div className="news-thumb">
                                <Image src="/assets/images/blog/blogThumb4_1.jpg" alt="img" width={710} height={430}   />
                                <div className="post-date">
                                    <h3>
                                        27 <br/>
                                        <span>Feb</span>
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
                                    <i className="bi bi-chat"></i>
                                        3 Comments
                                    </li>
                                </ul>
                                <h3>
                                    <Link href="/blog/blog-details">Choose The Best IT Service Company in the City.</Link>
                                </h3>
                                <p>
                                    Pellentesque egestas rutrum nibh facilisis ultrices. Phasellus in magna ut orci
                                    malesuada the sollicitudin. Aenean faucibus scelerisque convallis. Quisque interdum
                                    mauris id nunc molestie tincidunt erat gravida. Nullam dui libero, mollis ac quam
                                    et, venenatis.
                                </p>
                                <Link href="/blog/blog-details" className="theme-btn mt-4">
                                    Read More
                                    <i className="bi bi-arrow-right"></i>
                                </Link>
                            </div>
                        </div>
                        <div className="news-standard-items wow fadeInUp" data-wow-delay=".4s">
                            <div className="news-thumb">
                            <Image src="/assets/images/blog/blogThumb4_2.jpg" alt="img" width={710} height={430}   />
                                <div className="post-date">
                                    <h3>
                                        19 <br/>
                                        <span>Feb</span>
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
                                    <i className="bi bi-chat"></i>
                                        2 Comments
                                    </li>
                                </ul>
                                <h3>
                                    <Link href="/blog/blog-details">Keep Your Business Safe Ensure High Availability</Link>
                                </h3>
                                <p>
                                    Pellentesque egestas rutrum nibh facilisis ultrices. Phasellus in magna ut orci
                                    malesuada the sollicitudin. Aenean faucibus scelerisque convallis. Quisque interdum
                                    mauris id nunc molestie tincidunt erat gravida. Nullam dui libero, mollis ac quam
                                    et, venenatis.
                                </p>
                                <Link href="/blog/blog-details" className="theme-btn mt-4">
                                    Read More
                                    <i className="bi bi-arrow-right"></i>
                                </Link>
                            </div>
                        </div>
                        <div className="news-standard-items wow fadeInUp" data-wow-delay=".6s">
                            <div className="news-thumb">
                            <Image src="/assets/images/blog/blogThumb4_3.jpg" alt="img" width={710} height={430}   />
                                <div className="post-date">
                                    <h3>
                                        28 <br/>
                                        <span>Feb</span>
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
                                    <i className="bi bi-chat"></i>
                                        0 Comments
                                    </li>
                                </ul>
                                <h3>
                                    <Link href="/blog/blog-details">Tackling the Changes of Retell Industry</Link>
                                </h3>
                                <p>
                                    Pellentesque egestas rutrum nibh facilisis ultrices. Phasellus in magna ut orci
                                    malesuada the sollicitudin. Aenean faucibus scelerisque convallis. Quisque interdum
                                    mauris id nunc molestie tincidunt erat gravida. Nullam dui libero, mollis ac quam
                                    et, venenatis.
                                </p>
                                <Link href="/blog/blog-details" className="theme-btn mt-4">
                                    Read More
                                    <i className="bi bi-arrow-right"></i>
                                </Link>
                            </div>
                        </div>

                    </div>
                    
                </div>
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
                                    <li><Link href="/blog/blog-details">Database Security <span>(08)</span></Link></li>
                                    <li><Link href="/blog/blog-details">IT Consultancy <span>(11)</span></Link></li>
                                    <li className="active"><Link href="/blog/blog-details">App Development <span>(12)</span></Link>
                                    </li>
                                    <li><Link href="/blog/blog-details">UI/UX Design <span>(18)</span></Link></li>
                                    <li><Link href="/blog/blog-details">Cyber Security <span>(07)</span></Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="single-sidebar-widget wow fadeInUp" data-wow-delay=".6s">
                            <div className="wid-title">
                                <h3>Recent Post</h3>
                            </div>
                            <div className="recent-post-area">
                                <div className="recent-items">
                                    <div className="recent-thumb">
                                    <Image src="/assets/images/blog/blogRecentThumb1_1.jpg" alt="img" width={78} height={79}   />
                                    </div>
                                    <div className="recent-content">
                                        <ul>
                                            <li>
                                            <Image src="/assets/images/icon/calendarIcon.svg" alt="img" width={20} height={20}   />
                                                18 Dec, 2024
                                            </li>
                                        </ul>
                                        <h6>
                                            <Link href="/blog/blog-details">
                                                Keep Your Business Safe & <br/>
                                                Endure High Availability
                                            </Link>
                                        </h6>
                                    </div>
                                </div>
                                <div className="recent-items">
                                    <div className="recent-thumb">
                                    <Image src="/assets/images/blog/blogRecentThumb1_2.jpg" alt="img" width={78} height={79}   />
                                    </div>
                                    <div className="recent-content">
                                        <ul>
                                            <li>
                                            <Image src="/assets/images/icon/calendarIcon.svg" alt="img" width={20} height={20}   />
                                                18 Dec, 2024
                                            </li>
                                        </ul>
                                        <h6>
                                            <Link href="/blog/blog-details">
                                                Tacking the Changes of <br/>
                                                Retail Industry
                                            </Link>
                                        </h6>
                                    </div>
                                </div>
                                <div className="recent-items">
                                    <div className="recent-thumb">
                                    <Image src="/assets/images/blog/blogRecentThumb1_3.jpg" alt="img" width={78} height={79}   />
                                    </div>
                                    <div className="recent-content">
                                        <ul>
                                            <li>
                                            <Image src="/assets/images/icon/calendarIcon.svg" alt="img" width={20} height={20}   />
                                                18 Dec, 2024
                                            </li>
                                        </ul>
                                        <h6>
                                            <Link href="/blog/blog-details">
                                                What’s the Holding Back <br/>
                                                the It Solution
                                            </Link>
                                        </h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="single-sidebar-widget wow fadeInUp" data-wow-delay=".9s">
                            <div className="wid-title">
                                <h3>Tags</h3>
                            </div>
                            <div className="news-widget-categories">
                                <div className="tagcloud">
                                    <a href="#">Security</a>
                                    <a href="#">Business</a>
                                    <a href="#">Digital</a>
                                    <a href="#">Technology</a>
                                    <a href="#">Change</a>
                                    <a href="#">Video</a>
                                    <a href="#">UI/UX Desing</a>
                                    <a href="#">Startup</a>
                                    <a href="#">Services</a>
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

export default BlogStandard;
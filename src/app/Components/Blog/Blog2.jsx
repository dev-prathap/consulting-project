import Link from 'next/link';
import data from '../../Data/blog.json';
import Image from 'next/image';

const Blog2 = () => {
    return (
<section className="blog-area section-padding fix">
        <div className="container">
            <div className="blog-card-wrap style1 mb-30">

            {data.map((item, index)=>(
                <div key={index} className="blog-card style2 wow fadeInUp" data-wow-delay=".2s">
                    <div className="blog-card-thumb style1">
                    <Image src={item.img} alt="img" width={320} height={214}   />
                    </div>
                    <div className="blog-card-body">
                        <div className="tag-cloud">
                            <div className="meta">
                                <span className="icon"> <Image src="/assets/images/icon/userIcon.svg" alt="img" width={14} height={16}   /></span>
                                <span className="text">By Admin</span>
                            </div>
                            <div className="meta">
                                <span className="icon"> <Image src="/assets/images/icon/tagIcon.svg" alt="img" width={20} height={20}   /></span>
                                <span className="text">Technology</span>
                            </div>
                        </div>
                        <h3 className="blog-title style1">
                            <Link href="/blog/blog-details">{item.title}</Link>
                        </h3>
                        <div className="btn-wrapper">
                            <Link href='/blog/blog-details'>Read More <svg xmlns="http://www.w3.org/2000/svg" width="16"
                                    height="10" viewBox="0 0 16 10" fill="none">
                                    <path
                                        d="M11.6118 0.612305L10.8991 1.32503L14.0706 4.49652H0V5.50447H14.0706L10.8991 8.67592L11.6118 9.38865L16 5.00046L11.6118 0.612305Z"
                                        fill="#565656" />
                                </svg> </Link>
                        </div>
                        <div className="calendar">
                            <div className="date">20</div>
                            <div className="month">june</div>
                        </div>
                    </div>
                </div>
                ))}

            </div>
        </div>
    </section>
    );
};

export default Blog2;
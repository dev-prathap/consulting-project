import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="footer-section position-relative">
            <div className="footer-widgets-wrapper style1 fix">
                <div className="shape1"><img src="/assets/images/shape/footerShape1_1.png" alt="shape" /></div>
                <div className="shape2"><img src="/assets/images/shape/footerShape1_2.png" alt="shape" /></div>
                <div className="shape3"><img src="/assets/images/shape/footerShape1_3.png" alt="shape" /></div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                            <div className="single-footer-widget">
                                <div className="widget-head">
                                    <Link href="/">
                                    <Image src="/assets/images/logo/logo.svg" alt="img" width={177} height={54}   />
                                    </Link>
                                </div>
                                <div className="footer-content">
                                    <p>
                                        Empowering businesses through strategic consulting and innovative solutions. Transform your business with our expert guidance.
                                    </p>
                                    <div className="footer-contact mt-4">
                                        <h4 className="mb-3">Book a Free Consultation</h4>
                                        <Link href="/contact" className="theme-btn">
                                            Schedule Now
                                            <i className="bi bi-arrow-right ms-2"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-4 col-md-6 ps-lg-5 wow fadeInUp" data-wow-delay=".4s">
                            <div className="single-footer-widget">
                                <div className="widget-head">
                                    <h3>Quick Links</h3>
                                </div>
                                <ul className="list-area">
                                    <li>
                                        <Link href="/">
                                            Home
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/about">
                                            About Us
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/service">
                                            Our Services
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/blog">
                                            Latest Insights
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/contact">
                                            Contact Us
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".8s">
                            <div className="single-footer-widget">
                                <div className="widget-head">
                                    <h3>Our Services</h3>
                                </div>
                                <ul className="list-area">
                                    <li>
                                        <Link href="/service">
                                            Business Strategy
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/service">
                                            Financial Advisory
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/service">
                                            Market Research
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/service">
                                            Digital Transformation
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/service">
                                            Operations Consulting
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="single-footer-widget">
                                <div className="contact-box">
                                    <div className="widget-head mb-4">Get in Touch</div>
                                    <div className="text mb-4">Ready to transform your business? Contact us today for expert consulting solutions.</div>
                                    <div className="info mb-4">
                                        <div className="icon">
                                            <i className="bi bi-envelope-fill text-primary fs-4"></i>
                                        </div>
                                        <div className="link">
                                            <a href="mailto:info@consultingfirm.com">info@consultingfirm.com</a> <br/>
                                            <a href="mailto:support@consultingfirm.com">support@consultingfirm.com</a>
                                        </div>
                                    </div>
                                    <div className="info">
                                        <div className="icon">
                                            <i className="bi bi-telephone-fill text-primary fs-4"></i>
                                        </div>
                                        <div className="link">
                                            <a href="tel:+1234567890">+1 (234) 567-890</a> <br/>
                                            <a href="tel:+1987654321">+1 (987) 654-321</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom style1">
                <div className="container">
                    <div className="footer-wrapper d-flex align-items-center justify-content-between">
                        <p className="wow fadeInLeft" data-wow-delay=".3s">
                            © 2024 Business Consulting. All Rights Reserved.
                        </p>
                        <ul className="social-links" data-wow-delay=".5s">
                            <li><a href="#"><i className="bi bi-linkedin"></i></a></li>
                            <li><a href="#"><i className="bi bi-twitter"></i></a></li>
                            <li><a href="#"><i className="bi bi-facebook"></i></a></li>
                            <li><a href="#"><i className="bi bi-instagram"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
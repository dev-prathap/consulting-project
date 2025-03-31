import Image from "next/image";
import Link from "next/link";

const Choose3 = () => {
    return (
<section className="wcu-section section-padding fix">
        <div className="wcu-container-wrapper style3">
            <div className="container">
                <div className="wcu-wrapper style3">
                    <div className="row gy-5 gx-60">
                        <div className="col-xl-6">
                            <div className="wcu-content">
                                <div className="section-title">
                                    <div className="subtitle wow fadeInUp" data-wow-delay=".2s">
                                        Customizations & Analysis <Image src="/assets/images/icon/fireIcon.svg" alt="img" width={16} height={17}   />
                                    </div>
                                    <h2 className="title wow fadeInUp" data-wow-delay=".4s">Manage your Traffic Growth
                                        Easily</h2>
                                    <p className="text1 wow fadeInUp" data-wow-delay=".6s">There are many variations of
                                        passages of Lorem Ipsum available, but the majority have suffered alteration in
                                        some form, by injected humour, or randomised words which do not look even</p>
                                    <p className="text2 wow fadeInUp" data-wow-delay=".8s">There are many variations of
                                        passages of Lorem Ipsum available, but the majority have suffered alteration in
                                        some form,</p>
                                </div>
                                <Link className="theme-btn rounded-5 wow fadeInUp" data-wow-delay=".4s" href="/about">View
                                    All Project
                                    <svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                        viewBox="0 0 16 16" fill="none">
                                        <g clipPath="url(#clip0_190_64)">
                                            <path
                                                d="M11.6118 3.61182L10.8991 4.32454L14.0706 7.49603H0V8.50398H14.0706L10.8991 11.6754L11.6118 12.3882L16 7.99997L11.6118 3.61182Z"
                                                fill="white" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_190_64">
                                                <rect width="16" height="16" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </Link>
                                <div className="counter-box-wrapper style3">
                                    <div className="counter-box style3 wow fadeInUp" data-wow-delay=".2s">
                                        <div className="counter">
                                            <span className="counter-nubmer">56</span> <span>k+</span>
                                        </div>
                                        <p className="text">Comparers</p>
                                    </div>
                                    <div className="counter-box style3 wow fadeInUp" data-wow-delay=".4s">
                                        <div className="counter">
                                            <span className="counter-nubmer">126</span> <span>k+</span>
                                        </div>
                                        <p className="text">Use People</p>
                                    </div>
                                    <div className="counter-box style3 wow fadeInUp" data-wow-delay=".6s">
                                        <div className="counter">
                                            <span className="counter-nubmer">1.2</span> <span>M+</span>
                                        </div>
                                        <p className="text">Download It</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="wcu-thumb">
                                <div className="main-thumb img-custom-anim-left wow fadeInUp" data-wow-delay=".4s">
                                <Image src="/assets/images/wcu/wcuThumb3_1.png" alt="img" width={386} height={503}   />
                                </div>
                                <div className="thumb2">
                                <Image src="/assets/images/wcu/wcuThumb3_2.png" alt="img" width={558} height={340}   />
                                </div>
                                <div className="thumb-box float-bob-y wow fadeInUp" data-wow-delay=".4s">
                                    <h5>Traffic Growth</h5>
                                    <p className="text">Total traffic growth of 45%</p>
                                    <div className="shape-box">
                                    <Image src="/assets/images/shape/wcuThumbShape3_1.png" alt="img" width={128} height={128}   />
                                        <div className="shape-content">
                                            <h6>Transaction</h6>
                                            <h3>86%</h3>
                                        </div>
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

export default Choose3;
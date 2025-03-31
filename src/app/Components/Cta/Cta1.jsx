import Image from "next/image";
import Link from "next/link";

const Cta1 = ({subtitle,title,content,btnurl1,btnurl2,img}) => {
    return (
        <section className="cta-section">
            <div className="cta-container-wrapper style1">
                <div className="container">
                    <div className="cta-wrapper style1  section-padding fix">
                        <div className="shape1 d-none d-xxl-block"><Image src="/assets/images/shape/ctaShape1_1.png" alt="img" width={373} height={147}   />
                        </div>
                        <div className="shape2 d-none d-xxl-block"><Image src="/assets/images/shape/ctaShape1_2.png" alt="img" width={228} height={143}   />
                        </div>
                        <div className="shape3 d-none d-xxl-block"><Image src="/assets/images/shape/ctaShape1_3.png" alt="img" width={606} height={272}   />
                        </div>
                        <div className="shape4 d-none d-xxl-block"><Image src="/assets/images/shape/ctaShape1_4.png" alt="img" width={223} height={134}   />
                        </div>
                        <div className="container">
                            <div className="row gy-5">
                                <div className="col-xl-8 order-2 order-xl-1">
                                    <div className="cta-content">
                                        <div className="section-title">
                                            <div className="subtitle text-white bg2 wow fadeInUp" data-wow-delay=".2s">
                                                {subtitle}  <Image src="/assets/images/icon/fireIcon.svg" alt="img" width={16} height={17}   /> 
                                            </div>
                                            <h2 className="title text-white wow fadeInUp" data-wow-delay=".4s">{title}</h2>
                                            <p className="section-desc text-white mxw-651 wow fadeInUp" data-wow-delay=".6s">
                                                {content}</p>
                                        </div>
                                        <Link className="playstore" href={btnurl1}>
                                        <Image src="/assets/images/cta/ctaplayStore1_1.png" alt="img" width={190} height={55}   />
                                        </Link>
                                        <Link href={btnurl2}>
                                        <Image src="/assets/images/cta/ctaAppleStore1_1.png" alt="img" width={190} height={55}   />
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-xl-4 order-1 order-xl-2">
                                    <div className="cta-thumb wow fadeInUp" data-wow-delay=".2s">
                                    <Image src={img} alt="img" width={643} height={322}   />
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

export default Cta1;
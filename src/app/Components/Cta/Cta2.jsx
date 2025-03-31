import Image from "next/image";
import Link from "next/link";

const Cta2 = () => {
    return (
        <section className="service-section-3">
        <div className="container">
            <div className="service-thumb section-padding pb-0 img-custom-anim-left wow fadeInLeft" data-wow-delay=".3s">
            <Image src="/assets/images/services/servicesThumb1_1.jpg" alt="img" width={1170} height={526}   />
            </div>
        </div>
        <div className="service-container-wrapper style3  section-padding fix">
            <div className="shape1 fix"><Image src="/assets/images/shape/testimonialShape2_1.png" alt="img" width={1149} height={1031}   /></div>
            <div className="shape2 fix"><Image src="/assets/images/shape/testimonialShape2_2.png" alt="img" width={983} height={1074}   /></div>
            <div className="container">
                <div className="service-wrapper style3">
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">Join our team to create the best digital solutions.
                    </h2>
                    <p className="text wow fadeInUp" data-wow-delay=".5s">There are many variations of passages of Lorem
                        Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. If you are going to use There are many variations of passages of Lorem
                        Ipsum available, but the majority have suffered alteration in some form, by injected humour, or
                        randomised words which do not look even slightly believable. If you are going to use</p>

                    <Link href="/contact"> <span className="theme-btn wow fadeInUp" data-wow-delay=".3s"> Join Our Team
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                                fill="none">
                                <g clipPath="url(#clip0_199_944)">
                                    <path
                                        d="M11.6123 3.61183L10.8996 4.32455L14.0711 7.49604H0.000488281V8.50399H14.0711L10.8996 11.6754L11.6123 12.3882L16.0005 7.99998L11.6123 3.61183Z"
                                        fill="white"></path>
                                </g>
                                <defs>
                                    <clipPath id="clip0_199_944">
                                        <rect width="16" height="16" fill="white" transform="translate(0.000488281)">
                                        </rect>
                                    </clipPath>
                                </defs>
                            </svg>
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Cta2;
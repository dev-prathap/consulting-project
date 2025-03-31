"use client"
import { useEffect } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import parse from 'html-react-parser';
import Link from "next/link";
import Image from "next/image";

const HeroBanner3 = ({bgimg,subtitle,title,content,btnname,btnurl,btnname2,btnurl2,img1,img2}) => {

    useEffect(() => {
        loadBackgroudImages();
    }, []);

    return (
<section className="hero-section hero-3 bg-cover" data-background={bgimg} >
        <div className="container-fluid">
            <div className="row g-4 align-items-center">
                <div className="col-xxl-8 col-xl-6">
                    <div className="hero-content">
                        <h6 className="wow fadeInUp">{subtitle}</h6>
                        <h1 className="wow fadeInUp" data-wow-delay=".3s">
                           {parse(title)}
                        </h1>
                        <p className="wow fadeInUp" data-wow-delay=".5s">
                           {content}
                        </p>
                        <div className="btn-wrapper style1 wow fadeInUp" data-wow-delay=".6s">
                            <Link className="theme-btn" href={btnurl}>{btnname}
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                    viewBox="0 0 16 16" fill="none">
                                    <g clipPath="url(#clip0_11_22)">
                                        <path
                                            d="M11.6118 3.61182L10.8991 4.32454L14.0706 7.49603H0V8.50398H14.0706L10.8991 11.6754L11.6118 12.3882L16 7.99997L11.6118 3.61182Z"
                                            fill="white" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_11_22">
                                            <rect width="16" height="16" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>

                            </Link>
                            <Link className="theme-btn style2 wow fadeInUp" data-wow-delay=".2s"
                                href={btnurl2}>{btnname2} <i className="bi bi-android2"></i>
                                
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-xxl-4 col-xl-6 wow fadeInUp" data-wow-delay=".3s">
                    <div className="hero-image">
                    <Image src={img1} alt="img" width={754} height={658}   />
                        <div className="mobile-image">
                        <Image src={img2} alt="img" width={180} height={363}   />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    );
};

export default HeroBanner3;
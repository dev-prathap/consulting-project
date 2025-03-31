import parse from 'html-react-parser';
import Image from 'next/image';
import Link from 'next/link';

const Feature4 = ({img,subtitle,title,content,FeatureList,btnname,btnurl}) => {
    return (
        <section className="about-section-3 fix section-padding">
        <div className="about-shape">
        <Image src="/assets/images/about/shape.png" alt="img" width={293} height={642}   />
        </div>
        <div className="container">
            <div className="about-wrapper-3">
                <div className="row g-4 align-items-center">
                    <div className="col-lg-6">
                        <div className="about-image">
                        <Image src={img} alt="img" width={979} height={647}   />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-content">
                            <div className="section-title">
                                <div className="subtitle wow fadeInUp" data-wow-delay=".2s">
                                    {subtitle} <Image src="/assets/images/icon/fireIcon.svg" alt="img" width={16} height={17}   />
                                </div>
                                <h2 className="title wow fadeInUp" data-wow-delay=".4s">{title}</h2>
                                <p className="wow fadeInUp" data-wow-delay=".6s">
                                   {content}
                                </p>
                            </div>
                            <ul className="wow fadeInUp" data-wow-delay=".3s">
                            {FeatureList?.map((item, index) => (
                                <li key={index}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="20" viewBox="0 0 17 20" fill="none">
                                        <path d="M6.47192 1.19299C7.72371 0.456638 9.27628 0.456638 10.5281 1.19299L15.0281 3.84005C16.2498 4.55873 17 5.87033 17 7.28778V12.7122C17 14.1297 16.2498 15.4413 15.0281 16.16L10.5281 18.807C9.27628 19.5434 7.72372 19.5434 6.47192 18.807L1.97192 16.16C0.750165 15.4413 0 14.1297 0 12.7122V7.28778C0 5.87033 0.750165 4.55873 1.97192 3.84005L6.47192 1.19299Z" fill="#7444FD"/>
                                        <circle cx="8.5" cy="10.5" r="3.5" fill="white"/>
                                      </svg>
                                      {parse(item)}
                                </li>
                                ))}

                            </ul>
                            <Link className="theme-btn style2 wow fadeInUp" data-wow-delay=".4s" href={btnurl}>{btnname} <i className="bi bi-arrow-right"></i>
                            </Link>
                        </div>
                    </div>
                </div>
           </div>
        </div>
    </section>
    );
};

export default Feature4;
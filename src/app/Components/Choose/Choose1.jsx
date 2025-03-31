import Image from "next/image";
import Link from "next/link";

const Choose1 = ({subtitle,title,content,FeatureList,FeatureList2,btnname,btnurl}) => {
    return (
        
        <section className="advantage-section fix">
            <div className="advantage-container-wrapper style1">
                <div className="container">
                    <div className="advantage-wrapper style1 section-padding">
                        <div className="container">
                            <div className="row gy-5 d-flex align-items-center">
                                <div className="col-xl-6 order-2 order-xl-1">
                                    <div className="advantage-content">
                                        <div className="section-title wow fadeInUp" data-wow-delay=".2s">
                                            <div className="subtitle">
                                                {subtitle} <Image src="/assets/images/icon/fireIcon.svg" alt="img" width={16} height={17}   />
                                            </div>
                                            <h2 className="title">{title}</h2>
                                            <p className="section-desc">{content}</p>
                                        </div>
                                        <div className="checklist-wrapper style1 wow fadeInUp" data-wow-delay=".4s">
                                            <ul className="checklist style1">
                                            {FeatureList?.map((item, index) => (
                                                <li key={index}><Image src="/assets/images/icon/checkmarkIcon.svg" alt="img" width={30} height={30}   /> {item}</li>
                                            ))}
                                            </ul>
                                            <ul className="checklist style1">
                                            {FeatureList2?.map((item, index) => (
                                                <li key={index}><Image src="/assets/images/icon/checkmarkIcon.svg" alt="img" width={30} height={30}   />{item} </li>
                                            ))}
                                            </ul>
                                        </div>
                                        <Link className="theme-btn wow fadeInUp" data-wow-delay=".6s" href={btnurl}> {btnname}
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                viewBox="0 0 16 16" fill="none">
                                                <g clipPath="url(#clip0_43_54)">
                                                    <path
                                                        d="M11.6118 3.61182L10.8991 4.32454L14.0706 7.49603H0V8.50398H14.0706L10.8991 11.6754L11.6118 12.3882L16 7.99997L11.6118 3.61182Z"
                                                        fill="white" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_43_54">
                                                        <rect width="16" height="16" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-xl-6 order-1 order-xl-2">
                                    <div className="advantage-thumb">
                                        <div className="thumb1 img-custom-anim-top wow fadeInDown" data-wow-delay=".8s"
                                            data-tilt data-tilt-max="10">
                                                <Image src="/assets/images/advantage/advantageThumb1_1.png" alt="img" width={366} height={591}   />
                                               </div>
                                        <div className="thumb2 img-custom-anim-right wow fadeInRight" data-wow-delay=".4s"
                                            data-tilt data-tilt-max="15">
                                                <Image src="/assets/images/advantage/advantageThumb1_2.png" alt="img" width={369} height={589}   />
                                                </div>
                                        <div className="shape1"><Image src="/assets/images/shape/advanceThumbShape1_1.png" alt="img" width={546} height={546}   /></div>
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

export default Choose1;
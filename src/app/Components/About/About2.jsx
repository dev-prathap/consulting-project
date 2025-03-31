import Image from "next/image";

const About2 = ({subtitle,title,content,boximg1,boxtitle1,boxcontent1,boximg2,boxtitle2,boxcontent2,img1,img2}) => {
    return (
    <section className="about-section">
        <div className="about-container-wrapper style2">
            <div className="container">
                <div className="about-wrapper style2  section-padding fix">
                    <div className="container">
                        <div className="row gy-5 gx-60 d-flex align-items-center">
                            <div className="col-xl-6 order-2 order-xl-1">
                                <div className="about-content">
                                    <div className="section-title">
                                        <div className="subtitle wow fadeInUp" data-wow-delay=".2s">
                                            {subtitle}<Image src="/assets/images/icon/fireIcon.svg" alt="img" width={16} height={17}   />
                                        </div>
                                        <h2 className="title wow fadeInUp" data-wow-delay=".4s">{title}</h2>
                                        <p className="text1 mxw-640 wow fadeInUp" data-wow-delay=".6s">{content}</p>
                                    </div>
                                    <div className="fancy-box style3 mb-20 wow fadeInUp" data-wow-delay=".2s">
                                        <div className="icon">
                                        <Image src={boximg1} alt="img" width={70} height={70}   />
                                        </div>
                                        <div className="content">
                                            <h4>{boxtitle1}</h4>
                                            <p className="text">{boxcontent1}</p>
                                        </div>
                                    </div>
                                    <div className="fancy-box style3 wow fadeInUp" data-wow-delay=".4s">
                                        <div className="icon">
                                        <Image src={boximg2} alt="img" width={70} height={70}   />
                                        </div>
                                        <div className="content">
                                            <h4>{boxtitle2}</h4>
                                            <p className="text">{boxcontent2}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 order-1 order-xl-2">
                                <div className="about-thumb">
                                <Image className="img-custom-anim-left wow fadeInUp" src={img1} alt="img" width={683} height={803}   />
                                    <div className="absolute-thumb">
                                    <Image src={img2} alt="img" width={393} height={421}   />
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

export default About2;
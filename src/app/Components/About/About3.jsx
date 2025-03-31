import Image from "next/image";

const About3 = ({img1,subtitle,title,content,boxtitle1,boxcontent1,boxtitle2,boxcontent2}) => {
    return (
        <section className="what-we-do-section fix section-padding">
        <div className="container mxw-1450">
            <div className="what-we-wrapper">
                <div className="row g-4">
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                        <div className="thumb">
                            <Image src={img1} alt="img" width={701} height={539}   />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="what-we-content">
                            <div className="section-title">
                                <div className="subtitle wow fadeInUp" data-wow-delay=".2s">
                                    {subtitle} <Image src="/assets/images/icon/fireIcon.svg" alt="img" width={16} height={17}   /> 
                                </div>
                                <h2 className="title wow fadeInUp" data-wow-delay=".4s">{title}</h2>
                                <p className="wow fadeInUp" data-wow-delay=".6s">
                                    {content}
                                </p>
                            </div>
                            <div className="list-items-area">
                                <div className="list-items wow fadeInUp" data-wow-delay=".3s">
                                    <div className="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="30" viewBox="0 0 26 30" fill="none">
                                            <path d="M10.7219 1.19299C11.9737 0.456639 13.5263 0.456638 14.7781 1.19299L23.5281 6.34005C24.7498 7.05873 25.5 8.37033 25.5 9.78778V20.2122C25.5 21.6297 24.7498 22.9413 23.5281 23.66L14.7781 28.807C13.5263 29.5434 11.9737 29.5434 10.7219 28.807L1.97192 23.66C0.750167 22.9413 0 21.6297 0 20.2122V9.78778C0 8.37033 0.750165 7.05873 1.97192 6.34005L10.7219 1.19299Z" fill="#7444FD"/>
                                            <circle cx="13" cy="15" r="5" fill="white"/>
                                        </svg>
                                    </div>
                                    <div className="content">
                                        <h3>{boxtitle1}</h3>
                                        <p>
                                            {boxcontent1}
                                        </p>
                                    </div>
                                </div>
                                <div className="list-items wow fadeInUp" data-wow-delay=".5
                                s">
                                    <div className="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="30" viewBox="0 0 26 30" fill="none">
                                            <path d="M10.7219 1.19299C11.9737 0.456639 13.5263 0.456638 14.7781 1.19299L23.5281 6.34005C24.7498 7.05873 25.5 8.37033 25.5 9.78778V20.2122C25.5 21.6297 24.7498 22.9413 23.5281 23.66L14.7781 28.807C13.5263 29.5434 11.9737 29.5434 10.7219 28.807L1.97192 23.66C0.750167 22.9413 0 21.6297 0 20.2122V9.78778C0 8.37033 0.750165 7.05873 1.97192 6.34005L10.7219 1.19299Z" fill="#7444FD"/>
                                            <circle cx="13" cy="15" r="5" fill="white"/>
                                        </svg>
                                    </div>
                                    <div className="content">
                                        <h3>{boxtitle2}</h3>
                                        <p>
                                            {boxcontent2}
                                        </p>
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

export default About3;
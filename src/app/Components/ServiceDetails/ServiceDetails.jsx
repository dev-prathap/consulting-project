import Image from "next/image";

const ServiceDetails = () => {
    return (
        <div className="service-details-section">
        <div className="service-details-container-wrapper section-padding fix">
            <div className="container">
                <div className="service-details-wrapper">
                    <div className="main-thumb img-custom-anim-right wow fadeInLeft" data-wow-delay=".3s">
                    <Image src="/assets/images/services/servicesDetailsThumb1_1.jpg" alt="img" width={1410} height={646}   />
                    </div>
                    <h2 className="title wow fadeInUp" data-wow-delay=".3s">World best web design service provider.</h2>
                    <div className="tagcloud">
                        <div className="tag">
                            <a href="#">Creative</a>
                        </div>
                        <div className="tag">
                            <a href="#">Branding</a>
                        </div>
                        <div className="tag">
                            <a href="#">Analytics</a>
                        </div>
                        <div className="tag">
                            <a href="#">Audience</a>
                        </div>
                    </div>
                    <div className="details-box1">
                        <h3 className="subtitle wow fadeInUp" data-wow-delay=".3s">
                            Service Overview
                        </h3>
                        <div className="row gy-3">
                            <div className="col-xl-7">
                                <p className="text wow fadeInUp" data-wow-delay=".3s">Nam posuere mauris enim, quis pretium
                                    elit placerat id Fusce egestas
                                    nisi vel ipsum vehicula facilisis In pulvinar imperdiet venenatis className aptent
                                    taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec
                                    eu pulvinar lorem. Etiam vestibulum ligula quis nisl feugiat, consectetur placerat
                                    augue vestibulum Nulla aliquam elit eu diam pharetra.</p>
                            </div>
                            <div className="col-xl-5">
                                <p className="text wow fadeInUp" data-wow-delay=".5s">Fusce egestas nisi vel ipsum vehicula
                                    facilisis. In pulvinar imperdiet
                                    venenatis. className aptent taciti sociosqu ad litora torquent per conubia nostra, per
                                    inceptos himenaeos. Donec eu pulvinar lorem. Etiam vestibulum ligula quis nisl
                                    feugiat, consectetur placerat augue vestibulum.</p>
                            </div>
                        </div>
                    </div>
                    <div className="details-box2">
                        <h3 className="subtitle wow fadeInUp" data-wow-delay=".3s">
                            Benefits With Our Service
                        </h3>
                        <div className="row gy-3">
                            <div className="col-xl-6">
                                <div className="feature-wrapper wow fadeInUp" data-wow-delay=".3s">
                                    <ul className="feature">
                                        <li>consectetur placerat augue vestibulum</li>
                                        <li>Mauris tincidunt a eget facilisis Quisque</li>
                                        <li>Lorem ipsum dolor sit amet, consectetur</li>
                                    </ul>
                                    <ul className="feature">
                                        <li>adipiscing elit Etiam aliquam, enim vitae</li>
                                        <li>Donec at augue ante Nam posuere mauris</li>
                                        <li>quis pretium elit placerat id Fusce egestas</li>
                                    </ul>
                                </div>

                            </div>
                            <div className="col-xl-6">
                                <div className="progress-wrap">
                                    <div className="progress-meta">
                                        <div className="title">Branding Design</div>
                                        <div className="percentage">95%</div>
                                    </div>
                                    <div className="progress-container">
                                        <div className="progress-bar" >
                                           
                                        </div>
                                    </div>
                                </div>
                                <div className="progress-wrap mb-0">
                                    <div className="progress-meta">
                                        <div className="title">Business</div>
                                        <div className="percentage">95%</div>
                                    </div>
                                    <div className="progress-container">
                                        <div className="progress-bar" >
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="thumb-wrapper">
                            <div className="row gy-3">
                                <div className="col-xl-6">
                                    <div className="thumb img-custom-anim-left wow fadeInUp" data-wow-delay=".3s">
                                    <Image src="/assets/images/services/servicesDetailsThumb1_2.jpg" alt="img" width={690} height={328}   />
                                        </div>
                                </div>
                                <div className="col-xl-6">
                                    <div className="thumb  img-custom-anim-left wow fadeInUp" data-wow-delay=".3s">
                                    <Image src="/assets/images/services/servicesDetailsThumb1_3.jpg" alt="img" width={690} height={328}   />
                                        </div>
                                </div>
                            </div>
                        </div>
                        <p className="text1 wow fadeInUp" data-wow-delay=".3s">
                            Nam posuere mauris enim, quis pretium elit placerat id Fusce egestas nisi vel ipsum vehicula
                            facilisis In pulvinar imperdiet venenatis className aptent taciti sociosqu ad litora torent per
                            conubia nostra, per inceptos himenaeos. Donec eu pulvinar lorem. Etiam vestibulum ligula
                            quis nisl feugiat, consectetur placerat augue vestibulum Nulla aliquam elit eu diam
                            pharetra.Nam posuere mauris enim, quis pretium elit placerat id Fusce egestas nisi vel ipsum
                            vehicula facilis
                        </p>
                        <p className="text2 wow fadeInUp" data-wow-delay=".5s">
                            Nam posuere mauris enim, quis pretium elit placerat id Fusce egestas nisi vel ipsum vehicula
                            facilisis In pulvinar imperdiet venenatis className aptent taciti sociosqu ad litora torent per
                            conubia nostra, per inceptos himenaeos. Donec eu pulvinar lorem. Etiam vestibulum ligula
                            quis nisl feugiat,
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    );
};

export default ServiceDetails;
import Image from "next/image";

const TeamDetails = () => {
    return (
<section className="team-details-area section-padding pb-0 fix">
        <div className="container">
            <div className="team-details-wrap">
                <div className="row g-4 align-items-center">
                    <div className="col-lg-4">
                        <div className="team-details-thumb wow fadeInUp" data-wow-delay=".6s">
                        <Image src="/assets/images/team/teamDetailsThumb1_1.jpg" alt="img" width={355} height={431}   />
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="team-details-content">
                            <div className="details-info d-flex justify-content-between wow fadeInUp" data-wow-delay=".6s">
                                <div className="profile">
                                    <h3>Kenneth Z. Burke</h3>
                                    <span>Gemini market</span>
                                </div>
                                <div className="gt-social">
                                    <a href="https://www.facebook.com/"><i className="bi bi-facebook"></i></a>
                                    <a href="https://www.x.com/" className="active"><i className="bi bi-twitter"></i></a>
                                    <a href="https://www.linkedin.com/"><i className="bi bi-linkedin"></i></a>
                                    <a href="https://www.youtube.com/"><i className="bi bi-pinterest"></i></a>
                                </div>
                            </div>
                            <p className="mt-3 wow fadeInUp" data-wow-delay=".9s">
                                Kenneth Z. Burke, known as Kenneth Duva Burke, was an influential American literary
                                theorist and philosopher. Born on May 5, 1897, and passing away on November 19, 1993.
                            </p>
                            <p className="mb-70 wow fadeInUp" data-wow-delay="1s"> Burke made significant contributions to
                                the fields of rhetoric, literary criticism, and philosophy. His work primarily focused
                                on the nature of language and its role in shaping human experience.</p>
                            <div className="signature wow fadeInUp" data-wow-delay=".6s">
                            <Image src="/assets/images/team/teamDetailsSignature.png" alt="img" width={91} height={50}   />
                            </div>
                            <div className="info-wrapper d-flex wow fadeInUp" data-wow-delay="1.2s">
                                <div className="checklist">
                                    <ul className="d-flex align-items-center gap-3">
                                        <li><i className="bi bi-telephone-fill"></i></li>
                                        <li>+91 5698 0036 420</li>
                                    </ul>
                                </div>
                                <div className="checklist">
                                    <ul className="d-flex align-items-center gap-3">
                                        <li><i className="bi bi-send"></i></li>
                                        <li>info@exmple.com</li>
                                    </ul>
                                </div>
                                <div className="checklist">
                                    <ul className="d-flex align-items-center gap-3">
                                        <li><i className="bi bi-geo-alt-fill"></i></li>
                                        <li>26 Manor St, Braintree UK</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="team-simple-history pb-425">
            <div className="container">
                <div className="row">
                    <h4 className="title wow fadeInUp" data-wow-delay="1.6s">Personal Information</h4>
                    <p className=" wow fadeInUp" data-wow-delay="1.9s"> Burke developed the concept of dramatism, which
                        views human communication as a form of dramatic action. He introduced the pentad (act, scene,
                        agent, agency, purpose) to analyze motives in communication.He emphasized the importance of
                        identification in rhetoric, where persuasion is seen as the alignment of interests or the
                        creation of a sense of unity between speaker and audience.</p>
                    <p className="mb-55 wow fadeInUp" data-wow-delay=".6s">Burke examined how language shapes human
                        perception and reality. He argued that language is not just a tool for communication but also a
                        framework for understanding the world.Burke interdisciplinary approach has influenced various
                        fields, including communication studies, literary theory, sociology, and political science. His
                        ideas on rhetoric and symbolic action remain foundational in understanding human communication
                        and social interaction.</p>
                    <div className="skills">
                        <h4 className="title">Personal skills </h4>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="progress-wrap">
                                    <div className="progress-meta">
                                        <div className="title">Data Analyses</div>
                                        <div className="percentage">95%</div>
                                    </div>
                                    <div className="progress-container">
                                        <div className="progress-bar">
                                        </div>
                                    </div>
                                </div>
                                <div className="progress-wrap">
                                    <div className="progress-meta">
                                        <div className="title">Solutions</div>
                                        <div className="percentage">75%</div>
                                    </div>
                                    <div className="progress-container">
                                        <div className="progress-bar" >
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="progress-wrap">
                                    <div className="progress-meta">
                                        <div className="title">Technology</div>
                                        <div className="percentage">70%</div>
                                    </div>
                                    <div className="progress-container">
                                        <div className="progress-bar">
                                        </div>
                                    </div>
                                </div>
                                <div className="progress-wrap">
                                    <div className="progress-meta">
                                        <div className="title">Digital Marketing</div>
                                        <div className="percentage">95%</div>
                                    </div>
                                    <div className="progress-container">
                                        <div className="progress-bar">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className="mt-40 mb-0 wow fadeInUp" data-wow-delay=".6s">There are many variations of passages of
                            Lorem Ipsum available, but the majority have suffered alteration in some form, by injected
                            humour, or randomised words which do not look even slightly believable. If you are going to
                            use a passage of Lorem Ipsum, you need to be sure there is not anything embarrassing hidden
                            in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat
                            predefined chunks as necessary,</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default TeamDetails;
"use client"
import Image from "next/image";
import { useState } from "react";

const Brand3 = () => {

    const [isActive, setIsActive] = useState('monthly');

    return (
<section className="used-technology-section section-padding fix pt-0">
        <div className="container">
            <div className="section-title style-4 mxw-670 mx-auto text-center">
                    <h2 className="title">Technologies Behind Our Solutions.</h2> 
            </div>
            <ul className="nav brand-nav-area">
                <li className={`nav-item wow fadeInUp ${isActive === 'monthly' ? 'active' : ''}`} onClick={() => setIsActive('monthly')}  data-wow-delay=".3s">
                    <a href="#End" data-bs-toggle="tab" className="nav-link">
                        Front End
                    </a>
                </li>
                <li className={`nav-item wow fadeInUp ${isActive === 'yearly' ? 'active' : ''}`} onClick={() => setIsActive('yearly')}  data-wow-delay=".5s">
                    <a href="#Back" data-bs-toggle="tab" className="nav-link">
                        Back End
                    </a>
                </li>
            </ul>
            <div className="tab-content">
                <div className={`tab-pane ${isActive === 'monthly' ? 'active' : ''}`} id="End" >
                    <div className="technology-box-items-wrapper style-4 mt-0">
                        <div className="technology-box-items style-4">
                            <div className="logo"> 
                            <Image src="/assets/images/tag/01.png" alt="img" width={43} height={60}   />
                            </div>
                            <div className="title">HTML5</div>
                        </div>
                        <div className="technology-box-items style-4">
                            <div className="logo"> 
                            <Image src="/assets/images/tag/02.png" alt="img" width={50} height={49}   />
                            </div>
                            <div className="title">CSS3</div>
                        </div>
                        <div className="technology-box-items style-4">
                            <div className="logo"> 
                            <Image src="/assets/images/tag/03.png" alt="img" width={50} height={46}   />
                            </div>
                            <div className="title">Sass</div>
                        </div>
                        <div className="technology-box-items style-4">
                            <div className="logo"> 
                            <Image src="/assets/images/tag/04.png" alt="img" width={50} height={49}   />
                            </div>
                            <div className="title">JavaScript</div>
                        </div>
                        <div className="technology-box-items style-4">
                            <div className="logo"> 
                            <Image src="/assets/images/tag/05.png" alt="img" width={43} height={60}   />
                            </div>
                            <div className="title">React</div>
                        </div>
                        <div className="technology-box-items style-4">
                            <div className="logo"> 
                            <Image src="/assets/images/tag/06.png" alt="img" width={50} height={50}   />
                            </div>
                            <div className="title">TypeScript</div>
                        </div>
                        <div className="technology-box-items style-4">
                            <div className="logo"> 
                            <Image src="/assets/images/tag/07.png" alt="img" width={50} height={49}   />
                            </div>
                            <div className="title">Next.js</div>
                        </div>
                    </div>
                </div>
                <div className={`tab-pane ${isActive === 'yearly' ? 'active' : ''}`} id="Back" >
                    <div className="technology-box-items-wrapper style-4 mt-0">
                        <div className="technology-box-items style-4">
                            <div className="logo"> 
                            <Image src="/assets/images/tag/01.png" alt="img" width={43} height={60}   />
                            </div>
                            <div className="title">HTML5</div>
                        </div>
                        <div className="technology-box-items style-4">
                            <div className="logo"> 
                            <Image src="/assets/images/tag/02.png" alt="img" width={50} height={49}   />
                            </div>
                            <div className="title">CSS3</div>
                        </div>
                        <div className="technology-box-items style-4">
                            <div className="logo"> 
                            <Image src="/assets/images/tag/03.png" alt="img" width={50} height={46}   />
                            </div>
                            <div className="title">Sass</div>
                        </div>
                        <div className="technology-box-items style-4">
                            <div className="logo"> 
                            <Image src="/assets/images/tag/07.png" alt="img" width={50} height={49}   />
                            </div>
                            <div className="title">Next.js</div>
                        </div>
                        <div className="technology-box-items style-4">
                            <div className="logo"> 
                            <Image src="/assets/images/tag/04.png" alt="img" width={50} height={49}   />
                            </div>
                            <div className="title">JavaScript</div>
                        </div>
                        <div className="technology-box-items style-4">
                            <div className="logo"> 
                            <Image src="/assets/images/tag/05.png" alt="img" width={43} height={60}   />
                            </div>
                            <div className="title">React</div>
                        </div>
                        <div className="technology-box-items style-4">
                            <div className="logo"> 
                            <Image src="/assets/images/tag/06.png" alt="img" width={50} height={50}   />
                            </div>
                            <div className="title">TypeScript</div>
                        </div>                       
                    </div>
                </div>
            </div>
        </div>
    </section>

    );
};

export default Brand3;
"use client"
import { useEffect, useRef, useState } from "react";
import data from '../../Data/faq2.json';
import Image from "next/image";

const HowWork2 = () => {

        const accordionContentRef = useRef(null);
        const [openItemIndex, setOpenItemIndex] = useState(-1);
        const [firstItemOpen, setFirstItemOpen] = useState(true);
      
        const handleItemClick = index => {
          if (index === openItemIndex) {
            setOpenItemIndex(-1);
          } else {
            setOpenItemIndex(index);
          }
        };
        useEffect(() => {
          if (firstItemOpen) {
            setOpenItemIndex(0);
            setFirstItemOpen(false);
          }
        }, [firstItemOpen]);

    return (
        <section className="wp-section section-padding fix">
        <div className="container">
            <div className="wp-wrapper style2">
                <div className="shape"> <img src="/assets/images/shape/wpShape2_1.png" alt="shape" /> </div>
                <div className="row gy-5 gy-md-0 gx-60 d-flex align-items-center">
                    <div className="col-xl-4 order-2 order-xl-1">
                        <div className="wp-content style2">
                            <div className="section-title">
                                <div className="subtitle wow fadeInUp" data-wow-delay=".2s">
                                    How It Works <Image src="/assets/images/icon/fireIcon.svg" alt="img" width={16} height={17}   />
                                </div>
                                <h2 className="title wow fadeInUp" data-wow-delay=".4s">Work smarter with easy access for
                                    user..</h2>
                            </div>
                            <div className="wp-accordion">
                                <div className="accordion accordion-area2" id="accordion">
                                {data.map((item, index)=>(
                                    <div key={index} className={`accordion-item mb-3 wow fadeInUp ${index === openItemIndex ? "active" : "" }`} data-wow-delay=".3s">
                                        <h5 onClick={() => handleItemClick(index)} className="accordion-header">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#faq1" aria-expanded="true" aria-controls="faq1">
                                               {item.title}
                                            </button>
                                        </h5>
                                        <div ref={accordionContentRef} id="faq1" className="accordion-collapse collapse" data-bs-parent="#accordion">
                                            <div className="accordion-body">
                                            {item.desc}
                                            </div>
                                        </div>
                                    </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-8 order-1 order-xl-2">
                        <div className="wp-thumb wow fadeInUp" data-wow-delay=".4s">
                            <div className="main-thumb img-custom-anim-right wow">
                            <Image src="/assets/images/wp/wpThumb2_1.jpg" alt="img" width={1011} height={711}   />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default HowWork2;
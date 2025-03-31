"use client"
import { useEffect, useRef, useState } from "react";
import data from '../../Data/faq1.json';
import Image from "next/image";

const Faq2 = () => {

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
    <section className="faq-section section-padding fix">
        <div className="faq-container-wrapper style2">
            <div className="container">
                <div className="faq-wrapper style2">
                    <div className="row gy-5 gx-100">
                        <div className="col-xl-6">
                            <div className="faq-thumb">
                            <Image src="/assets/images/faq/faqThumb3_1.png" alt="img" width={538} height={433}   />
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="faq-content style1 mt-0">
                                <div className="faq-accordion">
                                    <div className="accordion" id="accordion">
                                    {data.map((item, index)=>(
                                            <div key={index} className={`accordion-item mb-3 wow fadeInUp ${index === openItemIndex ? "active" : "" }`} data-wow-delay=".3s">
                                            <h5 onClick={() => handleItemClick(index)} className="accordion-header">
                                                <button className="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#faq1" aria-expanded="true"
                                                    aria-controls="faq1">
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
                    </div>
                </div>
            </div>
        </div>
    </section>

    );
};

export default Faq2;
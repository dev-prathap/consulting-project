"use client"
import Slider from "react-slick";
import data from '../../Data/testimonial2.json';
import SectionTitle from "../Common/SectionTitle";
import { useEffect, useRef } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import Image from "next/image";

const Testimonial3 = () => {

      const sliderRef = useRef(null);
  
      const next = () => {
        sliderRef.current.slickNext();
      };
    
      const previous = () => {
        sliderRef.current.slickPrev();
      };  

    const settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        swipeToSlide: true,                              
        responsive: [
          {
            breakpoint: 1399,
            settings: {
              slidesToShow: 1,
            }
          },
          {
            breakpoint: 1199,
            settings: {
              slidesToShow: 1,
            }
          },
          {
            breakpoint: 575,
            settings: {
              slidesToShow: 1,
            }
          }
        ]
      }; 

    useEffect(() => {
        loadBackgroudImages();
      }, []);

    return (
        <section className="testimonial-section-3 section-padding fix section-padding bg-cover" data-background="/assets/images/testimoial/bg.jpg">
        <div className="container">
            <div className="section-title-area">
                <div className="section-title">
                <SectionTitle
                    SubTitle="Testimonial"
                    Title="Testimonials beloved clients."
                ></SectionTitle>
                </div>
                <div className="array-button">
                    <button onClick={previous} className="array-prev"><i className="bi bi-chevron-left"></i></button>
                    <button onClick={next} className="array-next"><i className="bi bi-chevron-right"></i></button>
                </div>                
            </div>
            <div className="swiper testimonial-slider-3">
                <div className="swiper-wrapper">

                <Slider ref={sliderRef} {...settings}>
                {data.map((item, index)=>(
                    <div key={index} className="swiper-slide">
                        <div className="testimonial-wrapper-3">
                            <div className="tesimonial-content">
                                <p>
                                {item.desc}
                                </p>
                                <div className="client-info-area">
                                    <div className="client-content">
                                        <h3>{item.title}</h3>
                                        <span>{item.subTitle}</span>
                                    </div>
                                    <div className="testi-logo">
                                    <Image src={item.logo} alt="img" width={132} height={44}   />
                                    </div>
                                </div>
                            </div>
                            <div className="thumb">
                            <Image src={item.img} alt="img" width={350} height={360}   />
                            </div>
                        </div>
                    </div>
                    ))}
                    </Slider>


                </div>
            </div>
        </div>
    </section>
    );
};

export default Testimonial3;
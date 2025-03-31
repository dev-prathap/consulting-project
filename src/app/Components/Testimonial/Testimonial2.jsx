"use client"
import Slider from 'react-slick';
import data from '../../Data/testimonial1.json'
import SectionTitle from '../Common/SectionTitle';
import { useRef } from 'react';
import Image from 'next/image';

const Testimonial2 = () => {

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
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        swipeToSlide: true,           
        responsive: [
          {
            breakpoint: 1399,
            settings: {
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 1199,
            settings: {
              slidesToShow: 2,
            }
          },{
            breakpoint: 575,
            settings: {
              slidesToShow: 1,
            }
          }
        ]
      }; 

    return (
        <section className="testimonial-section">
        <div className="testimonial-container-wrapper style2">
            <div className="container">
                <div className="testimonial-wrapper style2 fix">
                    <div className="shape1"><img src="/assets/images/shape/testimonialShape2_1.png" alt="shape" /></div>
                    <div className="shape2"><img src="/assets/images/shape/testimonialShape2_2.png" alt="shape" /></div>
                    <div className="container">
                        <div className="section-title-wrapper style1">
                            <div className="row d-flex align-items-center">
                                <div className="col-xl-6">
                                    <div className="section-title">
                                    <SectionTitle
                                        SubTitle="Testimonial"
                                        Title="What our clients say?"
                                    ></SectionTitle>                                       
                                    </div>
                                </div>
                                <div className="col-xl-6">
                                    <div className="slider-arrow-button style2 text-end wow fadeInUp" data-wow-delay=".9s">
                                        <button onClick={previous} data-slider-prev="#testimonialSliderTwo"
                                            className="slider-arrow arrowPrev"><i className="bi bi-chevron-left"></i></button>
                                        <button onClick={next} data-slider-next="#testimonialSliderTwo"
                                            className="slider-arrow arrowNext"><i className="bi bi-chevron-right"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="slider-area testimonialSliderTwo">
                            <div className="swiper gt-slider" id="testimonialSliderTwo"  >
                                <div className="swiper-wrapper cs_slider_gap_301">
                                <Slider ref={sliderRef} {...settings}>
                                {data.map((item, index)=>(
                                    <div key={index} className="swiper-slide">
                                        <div className="testimonial-card style2">
                                            <div className="testimonial-header">
                                                <div className="profile-thumb">
                                                <Image src={item.img} alt="img" width={60} height={60}   />
                                                </div>
                                                <div className="content">
                                                    <h5>{item.title}</h5>
                                                    <p className="text">{item.subTitle}</p>
                                                </div>
                                            </div>
                                            <div className="testimonial-body">
                                                <ul className="star-wrapper style1">
                                                    <li> <Image src="/assets/images/icon/starIcon1_1.svg" alt="img" width={16} height={15}   /></li>
                                                    <li> <Image src="/assets/images/icon/starIcon1_1.svg" alt="img" width={16} height={15}   /></li>
                                                    <li> <Image src="/assets/images/icon/starIcon1_1.svg" alt="img" width={16} height={15}   /></li>
                                                    <li> <Image src="/assets/images/icon/starIcon1_1.svg" alt="img" width={16} height={15}   /></li>
                                                    <li> <Image src="/assets/images/icon/starIcon1_1.svg" alt="img" width={16} height={15}   /></li>
                                                </ul>
                                                <p className="desc">{item.desc}</p>
                                            </div>
                                            <div className="quote-icon">
                                            <Image src="/assets/images/icon/quoteIcon.svg" alt="img" width={30} height={30}   />
                                            </div>
                                        </div>
                                    </div>
                                        ))}
                                        </Slider>

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

export default Testimonial2;
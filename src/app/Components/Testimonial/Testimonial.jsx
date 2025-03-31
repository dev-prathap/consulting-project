"use client"
import Slider from "react-slick";
import data from '../../Data/testimonial1.json';
import SectionTitle from "../Common/SectionTitle";
import Image from "next/image";

const Testimonial = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        swipeToSlide: true,
        autoplay: true,
        autoplaySpeed: 2000,             
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
          },
          {
            breakpoint: 575,
            settings: {
              slidesToShow: 1,
            }
          }
        ]
      };    

    return (
        
        <section className="testimonial-section">
            <div className="testimonial-container-wrapper style1">
                <div className="container">
                    <div className="testimonial-wrapper style1 section-padding fix">
                        <div className="shape1"><Image src="/assets/images/shape/testimonialShape1_1.png" alt="img" width={1149} height={758}   /></div>
                        <div className="shape2"><Image src="/assets/images/shape/testimonialShape1_2.png" alt="img" width={983} height={758}   /></div>
                        <div className="container">
                            <div className="section-title text-center mxw-685 mx-auto">
                                <SectionTitle
                                        SubTitle="Testimonial"
                                        Title="What our clients say?"
                                ></SectionTitle>                                
                            </div>
                            <div className="slider-area testimonialSliderOne">
                                <div className="swiper gt-slider" id="testimonialSliderOne" >
                                    
                                    <div className="swiper-wrapper cs_slider_gap_301">

                                    <Slider {...settings}>
                                    {data.map((item, index)=>(
                                        <div key={index} className="swiper-slide">
                                            <div className="testimonial-card style1">
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
                                                        <li><Image src="/assets/images/icon/starIcon1_1.svg" alt="img" width={16} height={15}   /></li>
                                                        <li><Image src="/assets/images/icon/starIcon1_1.svg" alt="img" width={16} height={15}   /></li>
                                                        <li><Image src="/assets/images/icon/starIcon1_1.svg" alt="img" width={16} height={15}   /></li>
                                                        <li><Image src="/assets/images/icon/starIcon1_1.svg" alt="img" width={16} height={15}   /></li>
                                                        <li><Image src="/assets/images/icon/starIcon1_1.svg" alt="img" width={16} height={15}   /></li>
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
                                    <div className="slider-pagination"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
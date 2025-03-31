import React from 'react';
import HeroBanner2 from '../Components/HeroBanner/HeroBanner2';
import About2 from '../Components/About/About2';
import Feature3 from '../Components/Feature/Feature3';
import HowWork2 from '../Components/HowWork/HowWork2';
import Choose2 from '../Components/Choose/Choose2';
import Choose3 from '../Components/Choose/Choose3';
import Pricing2 from '../Components/Pricing/Pricing2';
import Testimonial2 from '../Components/Testimonial/Testimonial2';
import Brand2 from '../Components/Brand/Brand2';
import Blog1 from '../Components/Blog/Blog1';

const page = () => {
    return (
        <div>
             <HeroBanner2
                subtitle="<span>IT Solutions</span>Technology Excellence"
                title="Strategic IT Consulting <br>For Business Growth"
                btnname="Get Started Now"
                btnurl="/contact"
                btnname2="Our Services"
                btnurl2="/service"                
                img1="/assets/images/intro/introThumb2_1.png"
                img2="/assets/images/intro/introThumb2_2.png"
                img3="/assets/images/intro/introThumb2_3.png"
            ></HeroBanner2>
            <About2
                subtitle="About Us"
                title="Expert IT Consulting Services For Modern Businesses"
                content="We provide strategic IT solutions and consultancy services to businesses across all industries. Our team of experts analyzes your technology infrastructure to deliver tailored solutions that enhance efficiency, security, and scalability to drive your business forward."
                boximg1="/assets/images/icon/wcuIcon2_1.svg"
                boxtitle1="Technology Strategy"
                boxcontent1="We develop comprehensive IT strategies aligned with your business goals to maximize ROI and create sustainable competitive advantages"
                boximg2="/assets/images/icon/wcuIcon2_2.svg"
                boxtitle2="Digital Transformation"
                boxcontent2="Our experts guide your business through digital transformation, implementing modern technologies that revolutionize your operations"
                img1="/assets/images/about/aboutThumb2_1.png"
                img2="/assets/images/about/aboutThumb2_2.png"
            ></About2> 
            <Feature3></Feature3> 
            <HowWork2></HowWork2>     
            <Choose2
               img1="/assets/images/wcu/wcuThumb2_1.png" 
               img2="/assets/images/wcu/wcuThumb2_2.png" 
               img3="/assets/images/wcu/wcuThumb2_3.png" 
               subtitle="IT Infrastructure & Security" 
               title="Secure, Scalable Technology Solutions For Your Business" 
               content="Our IT consulting services help businesses optimize their technology infrastructure with industry-leading security practices and scalable solutions that adapt to your growing needs" 
               boximg1="/assets/images/icon/wcuIcon2_1.svg" 
               boxtitle1="Cloud Solutions" 
               boxcontent1="We design and implement secure cloud architectures that improve accessibility, reduce costs, and increase operational flexibility" 
               boximg2="/assets/images/icon/wcuIcon2_2.svg" 
               boxtitle2="Cybersecurity Services" 
               boxcontent2="Our comprehensive security solutions protect your valuable data and systems from evolving threats with proactive monitoring and advanced defenses" 
            ></Choose2> 
            <Choose3></Choose3>  
            <Pricing2></Pricing2> 
            <Testimonial2></Testimonial2>
            <Brand2></Brand2>
            <Blog1></Blog1>                                   
        </div>
    );
};

export default page;
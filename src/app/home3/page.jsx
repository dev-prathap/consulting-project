import React from 'react';
import HeroBanner3 from '../Components/HeroBanner/HeroBanner3';
import Feature4 from '../Components/Feature/Feature4';
import Feature5 from '../Components/Feature/Feature5';
import Feature6 from '../Components/Feature/Feature6';
import HowWork3 from '../Components/HowWork/HowWork3';
import Pricing3 from '../Components/Pricing/Pricing3';
import Counter1 from '../Components/Counter/Counter1';
import About3 from '../Components/About/About3';
import Brand3 from '../Components/Brand/Brand3';
import Testimonial3 from '../Components/Testimonial/Testimonial3';
import Blog1 from '../Components/Blog/Blog1';

const page = () => {
    return (
        <div>
            <HeroBanner3
                bgimg="/assets/images/hero/hero-bg.jpg"
                subtitle="Streaming your Workflow"
                title="Organize, Track, and Complete Task <span>Efficiently</span>"
                content="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or"
                btnname="Get Started Now"
                btnurl="/contact"
                btnname2="Download App"
                btnurl2="/about"
                img1="/assets/images/hero/01.png"
                img2="/assets/images/hero/mobile.png"
            ></HeroBanner3>  
            <Feature4
                img="/assets/images/about/01.png"
                subtitle="Our Features"
                title="We Provide the Best Quality"
                content="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly"
                FeatureList={[
                    "<b>User -Friendly Interface :</b> <span> Easy to use, even for beginners</span>",
                    "<b>Secure & Reliable :</b> <span> Your data safe with us</span>",
                    "<b>24/7 Support :</b> <span> We’re here to help, anytime</span>",
                    "<b>Sealable for Teams :</b> <span>  Designed to scale with your needs</span>",
                ]} 
                btnname="Learn More"
                btnurl="/about"
            ></Feature4>  
            <Feature5></Feature5>
            <Feature6></Feature6>
            <HowWork3></HowWork3>
            <Pricing3></Pricing3>
            <Counter1></Counter1> 
            <About3
                img1="/assets/images/what-do.png"
                subtitle="What We Do"
                title="We offer a one-stop shop for all IT solutions."
                content="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form"
                boxtitle1="Highly Expert Team Members"
                boxcontent1="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form"
                boxtitle2="Highly Expert Team Members"
                boxcontent2="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form"
            ></About3>
            <Brand3></Brand3>
            <Testimonial3></Testimonial3> 
            <Blog1></Blog1>                              
        </div>
    );
};

export default page;
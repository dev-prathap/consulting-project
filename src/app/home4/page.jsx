import React from 'react';
import HeroBanner1 from '../Components/HeroBanner/HeroBanner1';
import Brand1 from '../Components/Brand/Brand1';
import About1 from '../Components/About/About1';
import HowWork from '../Components/HowWork/HowWork';
import Choose1 from '../Components/Choose/Choose1';
import Feature1 from '../Components/Feature/Feature1';
import Counter1 from '../Components/Counter/Counter1';
import Faq1 from '../Components/Faq/Faq1';
import Testimonial from '../Components/Testimonial/Testimonial';
import Feature2 from '../Components/Feature/Feature2';
import Pricing1 from '../Components/Pricing/Pricing1';
import Cta1 from '../Components/Cta/Cta1';
import Blog1 from '../Components/Blog/Blog1';

const page = () => {
  return (
    <div>
            <HeroBanner1
                subtitle="<span>News!</span>Find Your Solution"
                title="We Develop Websites, Applications, and Brands."
                content="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum,"
                btnname="Get Started Now"
                btnurl="/contact"
                btntwo="Learn More"
                btn2url="/about"
                cusimg="/assets/images/intro/introProfileThumb1_1.png"
                cusnumber="2,291"
                cuscontent="Happy Customers"
                rating="4.8/5"
                ratingcon="Rating"
                img="/assets/images/intro/introThumb1_1.png"
            ></HeroBanner1>
            <Brand1></Brand1>   
            <About1
                img1="/assets/images/about/aboutThumb1_1.png"
                img2="/assets/images/about/aboutThumb1_2.png"
                subtitle="About Our App"
                title="Simple Reports & Analytics Backdown As it"
                content="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use"
                FeatureList={[
                    "With our Technological and Marketing Solutions.",
                    "We are trusted all over the world.",
                    "Start Your 14 Days Free Trials Today!",
                ]}                
                btnname="Discover More"
                btnurl="/about"
            ></About1>  
            <HowWork></HowWork> 
            <Choose1
                subtitle="App Advantage"
                title="Get Benefit By Using Trending Apps"
                content="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly"
                FeatureList={[
                    "Friendly Design",
                    "SEO Optimized",
                ]} 
                FeatureList2={[
                    "Cloud Storage",
                    "Strong Security",
                ]}                 
                btnname="Download App"
                btnurl="/about"
            ></Choose1>
            <Feature1></Feature1> 
            <Counter1></Counter1>
            <Faq1></Faq1> 
            <Testimonial></Testimonial>  
            <Feature2></Feature2>
            <Pricing1></Pricing1> 
            <Cta1
                subtitle="Our App"
                title="Download our app and start your free trail to get started today!"
                content="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised"
                btnurl1="https://play.google.com/store"
                btnurl2="https://www.apple.com/store"
                img="/assets/images/cta/ctaThumb1_1.png"
            ></Cta1>     
            <Blog1></Blog1>                         
    </div>
  );
};

export default page;
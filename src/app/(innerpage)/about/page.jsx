import About4 from '@/app/Components/About/About4';
import Choose2 from '@/app/Components/Choose/Choose2';
import Choose4 from '@/app/Components/Choose/Choose4';
import BreadCumb from '@/app/Components/Common/BreadCumb';
import HowWork from '@/app/Components/HowWork/HowWork';
import Testimonial4 from '@/app/Components/Testimonial/Testimonial4';
import React from 'react';

const page = () => {
  return (
    <div>
            <BreadCumb
                bgimg="/assets/images/bg/breadcumgBg.png"
                Title="About Us"
            ></BreadCumb> 
            <About4
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
            ></About4>  
            <Choose2
               img1="/assets/images/wcu/wcuThumb2_1.png" 
               img2="/assets/images/wcu/wcuThumb2_2.png" 
               img3="/assets/images/wcu/wcuThumb2_3.png" 
               subtitle="Customizations & Analysis" 
               title="Manage your Team's Easily Communication." 
               content="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even" 
               boximg1="/assets/images/icon/wcuIcon2_1.svg" 
               boxtitle1="Easy Collaboration" 
               boxcontent1="There are many variations of passages of Lorem Ipsum available, but the majority have" 
               boximg2="/assets/images/icon/wcuIcon2_2.svg" 
               boxtitle2="Innovative Solutions" 
               boxcontent2="There are many variations of passages of Lorem Ipsum available, but the majority have" 
            ></Choose2> 
            <HowWork></HowWork>
            <Choose4></Choose4>  
            <Testimonial4></Testimonial4>                         
    </div>
  );
};

export default page;
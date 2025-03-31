import BreadCumb from '@/app/Components/Common/BreadCumb';
import Pricing4 from '@/app/Components/Pricing/Pricing4';
import React from 'react';

const page = () => {
  return (
    <div>
        <BreadCumb
          bgimg="/assets/images/bg/breadcumgBg.png"
          Title="Pricing"
      ></BreadCumb> 
      <Pricing4></Pricing4>       
    </div>
  );
};

export default page;
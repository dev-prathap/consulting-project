import BreadCumb from '@/app/Components/Common/BreadCumb';
import Faq2 from '@/app/Components/Faq/Faq2';
import React from 'react';

const page = () => {
  return (
    <div>
            <BreadCumb
                bgimg="/assets/images/bg/breadcumgBg.png"
                Title="FAQ's"
            ></BreadCumb>
            <Faq2></Faq2>       
    </div>
  );
};

export default page;
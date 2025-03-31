import BreadCumb from '@/app/Components/Common/BreadCumb';
import Project2 from '@/app/Components/Project/Project2';
import React from 'react';

const page = () => {
  return (
    <div>
             <BreadCumb
                bgimg="/assets/images/bg/breadcumgBg.png"
                Title="Our Project 02"
            ></BreadCumb>     
            <Project2></Project2>        
    </div>
  );
};

export default page;
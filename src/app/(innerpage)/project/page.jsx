import BreadCumb from '@/app/Components/Common/BreadCumb';
import Project1 from '@/app/Components/Project/Project1';
import React from 'react';

const page = () => {
  return (
    <div>
            <BreadCumb
                bgimg="/assets/images/bg/breadcumgBg.png"
                Title="Our Project 01"
            ></BreadCumb>  
            <Project1></Project1>         
    </div>
  );
};

export default page;
import Brand3 from '@/app/Components/Brand/Brand3';
import BreadCumb from '@/app/Components/Common/BreadCumb';
import Cta2 from '@/app/Components/Cta/Cta2';
import Services1 from '@/app/Components/Services/Services1';
import Team2 from '@/app/Components/Team/Team2';
import React from 'react';

const page = () => {
  return (
    <div>
        <BreadCumb
              bgimg="/assets/images/bg/breadcumgBg.png"
              Title="Services"
          ></BreadCumb>   
          <Cta2></Cta2>
          <Services1></Services1>
          <Team2></Team2>
          <Brand3></Brand3>           
    </div>
  );
};

export default page;
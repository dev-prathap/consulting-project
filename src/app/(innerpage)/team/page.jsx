import BreadCumb from '@/app/Components/Common/BreadCumb';
import Team1 from '@/app/Components/Team/Team1';
import React from 'react';

const page = () => {
  return (
    <div>
        <BreadCumb
          bgimg="/assets/images/bg/breadcumgBg.png"
          Title="Team"
      ></BreadCumb>
      <Team1></Team1>      
    </div>
  );
};

export default page;
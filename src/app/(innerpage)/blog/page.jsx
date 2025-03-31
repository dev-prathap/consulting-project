import Blog1 from "@/app/Components/Blog/Blog1";
import Blog2 from "@/app/Components/Blog/Blog2";
import BreadCumb from "@/app/Components/Common/BreadCumb";
import React from "react";

const page = () => {
  return (
    <div>
      <BreadCumb
        bgimg="/assets/images/bg/breadcumgBg.png"
        Title="Blog Grid"
      ></BreadCumb>
      <Blog1></Blog1>
    </div>
  );
};

export default page;

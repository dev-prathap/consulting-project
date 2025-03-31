'use client';
import BlogLeftSidebar from '@/app/Components/Blog/BlogLeftSidebar';
import BreadCumb from '@/app/Components/Common/BreadCumb';
import React from 'react';

const BlogLeftSidebarPage = () => {
  return (
    <div>
        <BreadCumb
            bgimg="/assets/images/bg/breadcumgBg.png"
            Title="Blog"
        ></BreadCumb>   
        <BlogLeftSidebar></BlogLeftSidebar>       
    </div>
  );
};

export default BlogLeftSidebarPage;
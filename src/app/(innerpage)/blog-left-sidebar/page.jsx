'use client';
import BlogLeftSidebar from '@/app/Components/Blog/BlogLeftSidebar';
import BreadCumb from '@/app/Components/Common/BreadCumb';
import React, { Suspense } from 'react';

const BlogLeftSidebarPage = () => {
  return (
    <div>
        <BreadCumb
            bgimg="/assets/images/bg/breadcumgBg.png"
            Title="Blog"
        ></BreadCumb>   
        <Suspense fallback={<div>Loading...</div>}>
            <BlogLeftSidebar></BlogLeftSidebar>       
        </Suspense>
    </div>
  );
};

export default BlogLeftSidebarPage;
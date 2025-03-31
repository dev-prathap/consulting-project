"use client"
import { useEffect } from "react";
import loadBackgroudImages from "./loadBackgroudImages";
import Link from "next/link";
import Image from "next/image";

const BreadCumb = ({Title,bgimg}) => {
    
    useEffect(() => {
        loadBackgroudImages();
      }, []);

    return (

      <div className="breadcumb-section fix">
      <div className="breadcumb-container-wrapper" data-background={bgimg}>
          <div className="container">
              <div className="shape1"><Image src="/assets/images/shape/breadCumbShape1_1.png" alt="img" width={669} height={848}   /></div>
              <div className="shape2"><Image src="/assets/images/shape/breadCumbShape1_2.png" alt="img" width={698} height={877}   /></div>
              <div className="breadcumb-wrapper">
                  <div className="page-heading">
                      <h1>{Title}</h1>
                      <div className="links">
                      <Link href="/">Home<span className="slash">/</span></Link>{Title}
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>


    );
};

export default BreadCumb;
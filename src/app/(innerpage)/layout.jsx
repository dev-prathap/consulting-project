import React from 'react';
import Header4 from '../Components/Header/Header4';
import Footer from '../Components/Footer/Footer';

const DefalultLayout = ({ children }) => {
    return (
        <div className='main-page-area'>
           <Header4></Header4>
            {children}
            <Footer></Footer>
        </div>
    );
};

export default DefalultLayout;
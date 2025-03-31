import React from 'react';
import Header1 from '../Components/Header/Header1';
import Footer from '../Components/Footer/Footer';

const DefalultLayout = ({ children }) => {
    return (
        <div className='main-page-area'>
            <Header1></Header1>
            {children}
            <Footer></Footer>
        </div>
    );
};

export default DefalultLayout;
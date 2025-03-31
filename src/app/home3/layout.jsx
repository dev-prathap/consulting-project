import React from 'react';
import Header3 from '../Components/Header/Header3';
import Footer from '../Components/Footer/Footer';

const layout = ({ children }) => {
    return (
        <div className='main-page-area3'>
            <Header3></Header3>
            {children}
            <Footer></Footer>
        </div>
    );
};

export default layout;
import React from 'react';
import Footer from '../Components/Footer/Footer';
import Header2 from '../Components/Header/Header2';

const layout = ({ children }) => {
    return (
        <div className='main-page-area2'>
            <Header2></Header2>
            {children}
            <Footer></Footer>
        </div>
    );
};

export default layout;
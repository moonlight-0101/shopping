import React from 'react';
import Header from './homepage/components/Header';
import Topbar from './homepage/components/Topbar';
import Gallery from './homepage/components/Gallery';
import Content from './homepage/components/Content';
import Footer from './homepage/components/Footer';


const HomePage = () => {
    return (
        <div>
            <Gallery/>
            <Content/>
            <Footer/>

            
        </div>
    );
};

export default HomePage;
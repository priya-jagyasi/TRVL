import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import Footer from '../Footer';
import HeroSection from '../HeroSection';

// import '../CreateMap.css';

function Home() {
    return (
        <>
        <HeroSection />
        <Cards/>
        {/* <Demo1/> */}
        <Footer/>
        </>
    )
}

export default Home;


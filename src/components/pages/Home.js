import React from 'react';
import '../../App.css';
import Cards from '../projects/Cards';
import HeroSection from '../home/HeroSection';
import Footer from '../common/Footer';


function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
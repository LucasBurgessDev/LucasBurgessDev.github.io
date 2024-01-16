import React from 'react';
import '../../App.css';
import Cards from '../homecards/Cards';
import HeroSection from '../home/HeroSection';
import Footer from '../common/Footer';


function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
    </>
  );
}

export default Home;
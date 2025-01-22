import React from 'react';
import '../../App.css';
import Cards from '../homecards/Cards';
import HeroSection from '../home/HeroSection';

function Home() {
  window.scrollTo(0, 0);
  return (
    <>
      <HeroSection />
      <Cards />
    </>
  );
}

export default Home;
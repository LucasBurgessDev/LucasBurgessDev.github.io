import React from 'react';
import '../App.css';
import Cards from '../features/home/Cards';
import HeroSection from '../features/home/HeroSection';

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
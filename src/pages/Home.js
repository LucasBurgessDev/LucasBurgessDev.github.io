import React from 'react';
import '../App.css';
import Cards from '../features/home/Cards';
import HeroSection from '../features/home/HeroSection';
import LiveStatus from '../features/home/LiveStatus';

function Home() {
  window.scrollTo(0, 0);
  return (
    <>
      <HeroSection />
      <Cards />
      <LiveStatus />
    </>
  );
}

export default Home;
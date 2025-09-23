import React from 'react'
import HeroSection from '../../components/HeroSection';
import StatsSection from '../../components/StatsSection';
import About from '../../components/About';
import TextileCategories from '../../components/TextileCategories';
import Testimonials from '../../components/Testimonials';

const Home = () => {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <About />
      <TextileCategories />
      <Testimonials />
  </>
  );
};

export default Home;
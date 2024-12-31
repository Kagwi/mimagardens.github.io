import React from 'react';
import HeroSection from '../components/home/HeroSection';
import FeaturesSection from '../components/home/FeaturesSection';

const Home = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
    </div>
  );
};

export default Home;
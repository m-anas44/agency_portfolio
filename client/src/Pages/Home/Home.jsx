import React from 'react';
import Navbar from '@/components/Home/Navbar';
import HeroSection from '@/components/Home/HeroSection';
import ServicesSection from '@/components/Home/ServicesSection';
import PricingSection from '@/components/Home/PricingSection';

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <PricingSection />
    </div>
  );
};

export default Home;

import React from 'react';
import Navbar from '@/components/Home/Navbar';
import HeroSection from '@/components/Home/HeroSection';
import ServicesSection from '@/components/Home/ServicesSection';
import PricingSection from '@/components/Home/PricingSection';
import ProjectSection from '@/components/Home/ProjectSection';
import TestimonialSection from '@/components/Home/TestimonialSection';

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <PricingSection />
      <ProjectSection />
      <TestimonialSection />
    </div>
  );
};

export default Home;

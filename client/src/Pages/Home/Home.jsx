
import React from 'react';
import HeroSection from '@/components/Home/HeroSection';
import ServicesSection from '@/components/Home/ServicesSection';
import PricingSection from '@/components/Home/PricingSection';
import ProjectSection from '@/components/Home/ProjectSection';
import TestimonialSection from '@/components/Home/TestimonialSection';
import BlogSection from '@/components/Home/BlogSection';



const Home = () => {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <PricingSection />
      <ProjectSection />
      <TestimonialSection />
      <BlogSection />
    </div>
  );
};

export default Home;

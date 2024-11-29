import React from 'react';
import HeroSection from '@/components/Pricing/HeroSection';
import PlansSection from '@/components/Pricing/PlansSection';
import FaqsSection from '@/components/Pricing/FaqsSection';
import ContactusSection from '@/components/Pricing/ContactusSection';

const PricingPage = () => {
  return (
    <div className='bg-tertiary/20'>
      <HeroSection />
      <PlansSection />
      <FaqsSection />
      <ContactusSection />
    </div>
  );
};

export default PricingPage;

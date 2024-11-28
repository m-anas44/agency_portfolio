import React from 'react';

import HeroSection from '../../components/services/HeroSection';
import ServicesSection from '../../components/services/ServicesSection';
import WorkSection from '../../components/services/WorkSection';
import Testimonial from '../../components/services/Testimonial';
import CarouselSection from '../../components/services/CarouselSection';

const AllServices = () => {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <WorkSection />
      <CarouselSection />
      <Testimonial />
    </div>
  );
};

export default AllServices;

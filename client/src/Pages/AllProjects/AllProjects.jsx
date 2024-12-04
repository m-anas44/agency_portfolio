import React from 'react';
import HeroSection from '../../components/Projects/HeroSection';
import ProjectsSection from '../../components/Projects/ProjectsSection';
import WorkSection from '../../components/services/WorkSection';
import Testimonial from '../../components/services/Testimonial';
import CarouselSection from '../../components/services/CarouselSection';

const AllProjects = () => {
  return (
    <div>
      <HeroSection />
      <ProjectsSection />
      <WorkSection />
      <CarouselSection />
      <Testimonial />
    </div>
  );
};

export default AllProjects;

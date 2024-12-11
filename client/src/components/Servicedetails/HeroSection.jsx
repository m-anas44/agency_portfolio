import React from 'react';
import { useParams } from 'react-router-dom';
import data from './mokeData';

const HeroSection = () => {
  const { slug } = useParams(); // Extract the 'service' from the URL

  // Find the data corresponding to the service in the URL
  const serviceData = data.find((item) => item.id === slug);

  // If no matching service is found, render a fallback

  return (
    <section className='py-10 bg-primary sm:py-16 md:py-20 lg:py-24'>
      <div className='flex flex-col gap-6  mx-auto px-4 sm:px-6 lg:px-8 max-w-[95%] sm:max-w-[728px] lg:max-w-[1024px]'>
        {/* Render the title dynamically */}
        <h1
          className='text-tertiary font-bold text-center 
            text-2xl sm:text-3xl md:text-5xl lg:text-[65px] 
            leading-7 sm:leading-9 md:leading-[72px] lg:leading-[77px]'
        >
          {serviceData.title}
        </h1>

        {/* Render the description dynamically */}
        <p className='px-4 text-sm font-medium leading-5 text-center text-secondary sm:text-base md:text-lg lg:text-xl sm:leading-7 md:leading-8 lg:leading-9 sm:px-6'>
          {serviceData.description.slice(0, 200)}...
        </p>
      </div>
    </section>
  );
};

export default HeroSection;

import React from 'react';
import backgroundImg from '../../assets/projectpic1.jpg';

const HeroSection = () => {
  return (
    <section aria-labelledby='hero-section-title'>
      <div
        className='relative flex items-center justify-center h-[500px] bg-cover bg-top'
        style={{ backgroundImage: `url(${backgroundImg})` }}
      >
        {/* Overlay */}
        <div className='absolute inset-0 bg-black bg-opacity-80'></div>

        {/* Hero Content */}
        <div className='relative z-10 px-6 text-center text-white'>
          <p className='text-lg font-medium tracking-widest text-primary'>CREATIVITY · RESULTS · IMPACT</p>
          <h1 id='hero-section-title' className='mt-4 text-4xl font-bold leading-tight sm:text-5xl'>
            Showcasing Projects <br />
            That Drive Success.
          </h1>
          <p className='max-w-2xl mx-auto mt-4 text-lg text-gray-300'>
            Discover our portfolio of innovative solutions, crafted to deliver measurable results and lasting impact.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

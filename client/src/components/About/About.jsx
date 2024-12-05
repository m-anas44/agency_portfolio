import React from 'react';
import Video from '../../assets/About/AboutUSVideo.mp4'; // Background video import

const AboutSection = () => {
  return (
    <section
      className='relative py-20 bg-white bg-gradient-to-b from-tertiary h-[500px] sm:h-[550px] '
      aria-labelledby='about-heading'
    >
      {/* Background Video */}
      <div className='absolute top-0 left-0 w-full h-full'>
        <video className='object-cover w-full h-full opacity-60' autoPlay loop muted>
          <source src={Video} type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content Overlay */}
      <div className='container relative z-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
        <div className='text-center text-secondary'>
          {/* Main heading of the hero section */}
          <h1 id='about-heading' className='text-4xl sm:text-5xl lg:text-6xl font-bold max-w-[50rem] mx-auto mb-6'>
            <span className='text-tertiary'>Our Journey</span> to a Leading Software Development Partner
          </h1>

          {/* Expanded subheading or description providing more context about the company */}
          <p className='mt-4 text-lg sm:text-xl lg:text-2xl text-secondary max-w-[50rem] mx-auto'>
            For over a decade, we've been dedicated to helping businesses unlock their full potential by delivering
            innovative, scalable, and cutting-edge technology solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

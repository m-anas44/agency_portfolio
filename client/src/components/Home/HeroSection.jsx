import React from 'react';
import HeroImage from '@/assets/Home/Hero.png';
import { Button } from '@/components/SharedComponents/index';

const HeroSection = () => {
  return (
    <section className="px-8 py-12 lg:px-20 text-primary bg-tertiary">
      <div className="container grid grid-cols-1 gap-12 mx-auto lg:grid-cols-2">
        {/* Left Section: Main content of Hero */}
        <div>
          <div>
            {/* Section Heading */}
            <p className="leading-[68px] font-bold text-xl text-secondary">
              Creative Agency
            </p>
            <h1 className="text-3xl font-bold leading-[1.5] md:leading-[68px] md:text-5xl">
              Empowering Brands With{' '}
              <span className="border-b-4 text-secondary border-secondary">Creative </span>{' '}
              <span className="text-primary">Innovation</span>
            </h1>
          </div>

          {/* Section Subheading */}
          <p className="mt-4 text-2xl text-primary">
            We specialize in delivering cutting-edge solutions tailored to your needs. Whether you&rsquo;re looking, we succeed.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex gap-4 mt-8">
            <Button className="text-lg text-white transition rounded-md xs:text-xl bg-primary hover:bg-secondary hover:text-primary">
              About Us
            </Button>
            <Button className="text-base transition-all bg-transparent border rounded-md xs:text-xl border-primary text-primary hover:bg-secondary hover:text-tertiary">
              Our Services
            </Button>
          </div>
        </div>

        {/* Right Section: Hero Image */}
        <div className="grid grid-cols-1 gap-4">
          {/* Ensure image has descriptive alt text for better SEO and accessibility */}
          <img
            src={HeroImage}
            alt="A creative team brainstorming solutions" // Added descriptive alt text
            className="w-[500px] ml-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

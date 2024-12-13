import React from "react";
import backgroundImg from "../../assets/projectpic1.jpg";

const HeroSection = () => {
  return (
    <section aria-labelledby="hero-section-title">
      <div
        className="relative flex items-center justify-center h-[450px] bg-cover bg-top"
        style={{ backgroundImage: `url(${backgroundImg})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-80"></div>

        {/* Hero Content */}
        <div className="relative z-10 px-6 text-center text-white">
          <p className="text-sm sm:text-lg font-medium tracking-widest text-primary">
            CREATIVITY · RESULTS · IMPACT
          </p>
          <h1
            id="hero-section-title"
            className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight "
          >
            Showcasing Projects <br />
            That Drive Success.
          </h1>
          <p className="max-w-2xl mx-auto mt-4 text-sm sm:text-base md:text-lg text-gray-300">
            Discover our portfolio of innovative solutions, crafted to deliver
            measurable results and lasting impact.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

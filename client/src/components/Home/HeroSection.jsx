import React from "react";
import HeroImage from "@/assets/Home/Hero.png";
import { Button } from "@/components/SharedComponents/index";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <section className="px-3 sm:px-4 md:px-6 lg:px-20 py-12 text-primary bg-tertiary">
      <div className="grid grid-cols-1 gap-6 lg:gap-12 mx-auto md:grid-cols-2">
        {/* Left Section: Main content of Hero */}
        <div className="text-left sm:text-center md:text-left">
          <div>
            {/* Section Heading */}
            <p className="leading-[34px] md:leading-[44px] font-bold text-lg lg:text-xl text-secondary">
              Creative Agency
            </p>
            <h1 className="text-3xl font-bold leading-[1.5] md:leading-[54px] lg:leading-[68px] sm:text-4xl lg:text-5xl">
              Empowering Brands With{" "}
              <span className="border-b-4 text-secondary border-secondary">
                Creative{" "}
              </span>{" "}
              <span className="text-primary">Innovation</span>
            </h1>
          </div>

          {/* Section Subheading */}
          <p className="mt-4 text-xl lg:text-2xl text-primary">
            We specialize in delivering cutting-edge solutions tailored to your
            needs. Whether you&rsquo;re looking, we succeed.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex justify-start sm:justify-center md:justify-start gap-4 mt-8">
            <Button
              className="text-lg text-white transition rounded-md md:text-xl bg-primary hover:bg-secondary hover:scale-100"
              onClick={() => {
                navigate("/aboutUs");
                window.scrollTo(0, 0);
              }}
            >
              About Us
            </Button>
            <Button
              className="text-lg transition-all bg-transparent border rounded-md md:text-xl border-secondary text-primary hover:bg-secondary hover:text-tertiary hover:scale-100"
              onClick={() => {
                navigate("/services");
                window.scrollTo(0, 0);
              }}
            >
              Our Services
            </Button>
          </div>
        </div>

        {/* Right Section: Hero Image */}
        <div>
          {/* Ensure image has descriptive alt text for better SEO and accessibility */}
          <img
            src={HeroImage}
            alt="A creative team brainstorming solutions" // Added descriptive alt text
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

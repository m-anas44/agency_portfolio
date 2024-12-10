import StatsCard from "./StatsCard";

import { Button } from "@/components/SharedComponents/index";

const AboutUs = () => {
  return (
    <section className="bg-white py-16 px-6" aria-labelledby="about-us-heading">
      <div className="max-w-6xl mx-auto grid gap-12 md:grid-cols-2 items-center">
        {/* Content Section */}
        <article>
          <h1 className="text-[24px] sm:text-[36px] md:text-5xl font-bold text-gray-900 leading-tight">
            <span className="text-primary">
              TechSpirex helps start-ups,SMEs, and{" "}
            </span>
            <span>enterprises grow their business</span>
          </h1>
          <p className="mt-4 text-[20px] text-gray-600">
            Since 2000, we've taken pride in delivering high-quality, customized
            services to help businesses build, grow, and transform.
          </p>
          <div className="flex justify-start sm:justify-start">
            <Button
              className="mt-[15px] sm:mt-[22px] text-lg  transition-all duration-200 rounded-md drop-shadow-lg md:text-xl md:mt-0 hover:bg-secondary hover:text-white"
              onClick={() => {}}
            >
              Learn More
            </Button>
          </div>
        </article>

        {/* Image and Stats Section */}
        <div className="space-y-8">
          <img
            src="../../assets/About/pic2.png"
            alt="Devsinc team working collaboratively on a project"
            className="rounded-lg shadow-lg w-full"
          />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <StatsCard value="236+" description="Active Clients" />
            <StatsCard value="3,000+" description="Projects Delivered" />
            <StatsCard value="23+" description="Countries Supported" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

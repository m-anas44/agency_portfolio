import StatsCard from "./StatsCard";

const AboutUs = () => {
  return (
    <section className="bg-white py-16 px-6" aria-labelledby="about-us-heading">
      <div className="max-w-6xl mx-auto grid gap-12 md:grid-cols-2 items-center">
        {/* Content Section */}
        <article>
          <h1
            id="about-us-heading"
            className="text-3xl md:text-5xl font-medium text-gray-900 leading-tight"
          >
            TechSpirex helps start-ups, SMEs, and enterprises grow their
            business
          </h1>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Since 2000, we've taken pride in delivering high-quality, customized
            services to help businesses build, grow, and transform.
          </p>
          <button
            className="mt-8 bg-teal-500 text-white px-6 py-3 rounded-full text-lg font-semibold border-2 border-teal-500 hover:bg-white hover:text-teal-500 transition-all"
            aria-label="Learn more about Devsinc services"
          >
            Learn More
          </button>
        </article>

        {/* Image and Stats Section */}
        <div className="space-y-8">
          <img
            src="https://cdn.prod.website-files.com/65e9d802e7334ec910a26e59/65e9d803e7334ec910a26f2c_Who%20we%20are%20(1).webp"
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

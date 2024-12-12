import StatsCard from "./StatsCard";
import Pic2 from "@/assets/About/pic2.jpg";

const AboutUs = () => {
  return (
    <section
      className="relative px-3 sm:px-4 md:px-6 lg:px-20 pt-20 pb-3 md:pb-10 text-white bg-gradient-to-b from-primary/80 to-transparent"
      aria-labelledby="about-us-heading"
    >
      {/* Background Overlay for better text readability */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      <div className="container relative z-10 grid items-center max-w-6xl gap-12 mx-auto md:grid-cols-2">
        {/* Content Section */}
        <article className="text-center sm:text-left">
          <h1 className="mb-6 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
            <span className="text-primary">TechSpirex</span> helps start-ups,
            SMEs, and <span className="text-primary">enterprises</span> grow
            their business
          </h1>
          <p className="mb-6 text-lg text-gray-200 sm:text-xl">
            We are committed to delivering high-quality, customized solutions
            that help businesses grow, adapt, and succeed in today&apos;s
            rapidly evolving digital landscape. With a focus on innovation and a
            passion for excellence, our team empowers organizations to navigate
            the challenges of a digital-first world.
          </p>
        </article>

        {/* Image and Stats Section */}

        <div className="space-y-8">
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <img
              src={Pic2}
              alt="Devsinc team working collaboratively on a project"
              className="object-cover w-full h-[350px] sm:h-[450px] transform hover:scale-110 transition duration-500"
            />
            <div className="absolute inset-0 bg-black opacity-30"></div>
          </div>

          {/* Stats Cards */}
          <div className="flex flex-wrap gap-3">
            <StatsCard value="5+" description="Projects in Progress" />
            <StatsCard value="10+" description="Satisfied Clients" />
            <StatsCard value="2" description="Industries Entered" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

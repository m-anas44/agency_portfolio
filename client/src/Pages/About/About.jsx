import Pic1 from "../../assets/About/pic1.png";

const AboutSection = () => {
  return (
    <section
      className="bg-gradient-to-b from-tertiary bg-white py-10"
      aria-labelledby="about-heading"
    >
      <div className="container px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Content Section */}
          <div>
            <h1
              id="about-heading"
              className="text-[42px] font-bold text-secondary lg:text-[70px] leading-[46px] lg:leading-[77px] max-sm:text-center"
            >
              Our Journey to a leading{" "}
              <span className="text-primary">Software Development Partner</span>
            </h1>
          </div>

          {/* Image Section */}
          <div className="flex items-center justify-center relative">
            <img
              src={Pic1}
              alt="Team collaborating on a software project"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

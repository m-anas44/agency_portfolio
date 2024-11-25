const OurMission = () => {
  return (
    <section className="bg-[#001F29] py-16 px-5 sm:px-12 lg:px-24 text-white">
      <article className="max-w-5xl mx-auto">
        {/* Section Header */}
        <header className="flex justify-start mb-6">
          <span className="bg-secondary text-white text-[18px] sm:text-[16px]  landing-[27px] sm:leading-[27px] font-medium px-4 py-2 rounded-md">
            Our Mission
          </span>
        </header>

        {/* Section Content */}
        <div className="sm:ml-9 ">
          <h1 className="text-[30px] sm:text-[32px] font-medium leading-[42px] lg:leading-[42px] ">
            Help companies and organizations deliver{" "}
            <span className="text-[#12C2B2]">
              innovative technology solutions to
            </span>{" "}
            power their growth{" "}
            <span className="text-[#12C2B2]">
              by unlocking access to passionate and experienced
            </span>{" "}
            engineers and <br />
            solution providers.
          </h1>
        </div>
      </article>
    </section>
  );
};

export default OurMission;

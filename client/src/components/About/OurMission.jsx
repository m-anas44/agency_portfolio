import { Button } from "@/components/SharedComponents/index";

const OurMission = () => {
  return (
    <section className="bg-[#001F29] py-16 px-5 sm:px-12 lg:px-24 text-white mt-[15px] sm:mt-[22px]">
      <article className="max-w-5xl mx-auto">
        {/* Section Header */}
        <header className="flex justify-center  sm:justify-start mb-6">
          <Button
            className="mt-4 text-lg   transition-all duration-200 rounded-md drop-shadow-lg md:text-xl md:mt-0 hover:bg-secondary hover:text-white"
            onClick={() => {}}
          >
            Our Mission
          </Button>
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

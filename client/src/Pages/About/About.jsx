import Pic3 from "@/assets/About/pic3.png";

const About = () => {
  return (
    <div className="bg-gradient-to-b from-green-50 bg-white py-1999">
      <section className="py-10 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h1 className="text-[70px] font-bold text-black sm:text-6xl lg:text-7xl text-center">
                Our Journey to a leading
                <span className="text-[#0EBAB1] text-[70px]">
                  Software Development Partner
                </span>
              </h1>

              <div className="mt-10 sm:flex sm:items-center sm:space-x-8"></div>
            </div>

            {/* Upper Image */}

            <div className="flex-1 flex items-center justify-center gap-6 relative ">
              <div className="py-23">
                <img
                  src={Pic3}
                  alt="Team working"
                  className="w-full h-full object-cover "
                />
              </div>
            </div>
          </div>
          {/* <OverMission /> */}
        </div>
      </section>
    </div>
  );
};

export default About;

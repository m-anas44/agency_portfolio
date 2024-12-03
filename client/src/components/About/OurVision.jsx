import Pic3 from "../../assets/About/pic3.png";

const OurVision = () => {
  return (
    <section className="text-gray-600 body-font mt-[15px] sm:mt-[12px]">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        {/* Image Section */}
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img
            className="object-cover object-center rounded h-full w-full"
            alt="hero"
            src={Pic3}
          />
        </div>
        {/* Content Section */}
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left ">
          <div>
            <p className="text-primary  hover:text-primary landing-[12px]">
              When you choose Devsinc, youre choosing
            </p>
            <h1 className="font-bold sm:text-[80px] text-[40px] mb-4 leading-[44px] sm:leading-[90px] text-gray-900 mt-5">
              Our Vision
            </h1>
            <p className="mb-8 items-start text-[16px]  leading-[24px] ">
              While Devsinc has been growing in a tech landscape for more than a
              decade, I recognize the challenges businesses face in managing
              digital systems. As the world transforms into a global village,
              our vision goes beyond. We aim to reimagine IT solutions into
              smart, agile, and AI-enhanced digital assets
              <br />
              {/* <br /> */}
              Our commitment is to lead in the digital transformation, providing
              globally agile services to clients in different countries. In
              these times of recent changes, our ever-growing pool of resilient
              tech heads drives the IT world toward a future where innovation
              meets the demands of an ever-evolving digital era.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurVision;

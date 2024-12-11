import HeroSection from "../../components/services/HeroSection";
import Services from "../../components/Servicedetails/Services";

const ServiceDetails = () => {
  return (
    <>
      <HeroSection />
      <div className="flex flex-col-reverse lg:flex-row sm:mx-[8%] xl:mx-[10%]">
        {/*  <Services /> */}
        <Services />
      </div>
    </>
  );
};

export default ServiceDetails;

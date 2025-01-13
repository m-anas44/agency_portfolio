import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RightSide from "./RightSide";
import { MdKeyboardArrowRight } from "react-icons/md";
import Contact from "./Contact";

const ServicesLayout = ({ services, slug }) => {
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    const service = services.find((service) => service.slug.current === slug);
    setSelectedService(service);
  }, [slug, services]);

  return (
    <section className="flex flex-col gap-5 px-3 sm:px-4 md:px-6 lg:px-20 py-5 md:py-10 md:flex-row">
      {/* Left Content Section */}
      <div className="md:w-1/3">
        {/* Main Services Section */}
        <div className="p-4 mx-auto mb-5 rounded-lg lg:mx-0 bg-tertiary">
          <h2 className="mb-4 text-lg sm:text-xl font-bold text-secondary">
            <span className="text-primary">Main</span> Services
          </h2>
          <div>
            {services.map((service) => (
              <Link
                to={`/services/${service.slug.current}`}
                key={service.slug.current}
              >
                <button
                  onClick={() => setSelectedService(service)}
                  className={`w-full flex gap-1 justify-between items-center px-4 py-3 rounded-md text-sm sm:text-base overflow-hidden font-medium disabled:text-gray-400 disabled:hover:bg-white disabled:animate-pulse ${
                    selectedService?.slug?.current === service.slug.current
                      ? "bg-primary text-white"
                      : "bg-white text-gray-700 hover:bg-secondary hover:text-white"
                  } mb-3`}
                  disabled={service.status === "upcoming"}
                >
                  <span>{service.title}</span>
                  <MdKeyboardArrowRight className="text-lg" />
                </button>
              </Link>
            ))}
          </div>
        </div>

        <div className="hidden md:block">
          <Contact />
        </div>
      </div>

      {/* Right Content Section */}
      <div className=" md:w-2/3">
        <RightSide services={services} slug={slug} />
      </div>
      <div className="block md:hidden">
        <Contact />
      </div>
    </section>
  );
};

export default ServicesLayout;

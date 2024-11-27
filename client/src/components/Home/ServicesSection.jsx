import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/SharedComponents/index";
import { sanityClient } from "@/lib/sanityClient";

const Services = () => {
  const [services, setServices] = useState([]);

  const query = `*[_type == "service"]{
    title,
    description,
    status,
    slug,
    "icon": image.asset->url // Fetch the image URL for the icon
  }`;

  useEffect(() => {
    sanityClient
      .fetch(query)
      .then((data) => setServices(data))
      .catch((err) => console.error("Failed to fetch services:", err));
  }, []);

  return (
    <section className="py-16 bg-white text-primary">
      <div className="container px-6 mx-auto md:px-12 lg:px-20">
        {/* Section Header */}
        <div className="flex flex-col items-center justify-between mb-10 md:flex-row">
          <div>
            <p className="text-xl font-bold text-secondary">Our Services</p>
            <h2 className="mt-4 text-4xl font-bold md:mt-1">
              Our Palette Of <span className="text-secondary">Expertise</span>
            </h2>
          </div>
          <div>
            <Button
              className="mt-4 text-lg transition-all duration-200 rounded-full drop-shadow-lg md:text-xl md:mt-0 hover:bg-secondary hover:text-white"
              onClick={() => {}}
            >
              All Services
            </Button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative flex flex-col justify-between p-6 overflow-hidden duration-300 border rounded-lg shadow-lg border-secondary/20 group text-secondary group-hover:border-primary"
            >
              {/* Sliding Overlay */}
              <div className="absolute inset-0 transition-all duration-500 ease-in-out bg-primary/80 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-[-100%]"></div>

              {/* Content */}
              <div className="relative z-10">
                <div className="mb-4 text-4xl text-secondary">
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="w-16 h-16 object-contain"
                  />
                </div>

                <h3 className="mb-2 text-xl font-bold">{service.title}</h3>

                <p className="mb-4">{service.description}</p>
              </div>

              <Link
                className="relative z-10 flex items-center"
                to={`/service-detail/${service.slug.current}`}
              >
                <button className="flex items-center gap-1 py-2 px-3 border rounded-full drop-shadow-xl group-hover:primary/70 border-secondary group-hover:bg-white">
                  <span className="text-sm text-secondary ">Read more</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-secondary"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M5 12h14M12 5l7 7-7 7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

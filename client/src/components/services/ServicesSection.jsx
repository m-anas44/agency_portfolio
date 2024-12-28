import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { sanityClient } from "@/lib/sanityClient";
import { HiOutlineBellAlert } from "react-icons/hi2";

const ServicesSection = () => {
  const [services, setServices] = useState([]);

  const query = `*[_type == "service"]{
    title,
    description,
    status,
    slug,
    "image": image.asset->url
  }`;

  useEffect(() => {
    sanityClient
      .fetch(query)
      .then((data) => setServices(data))
      .catch((err) => console.error("Failed to fetch services:", err));
  }, []);
  return (
    <section
      className="px-3 sm:px-4 md:px-6 lg:px-20 py-14 sm:py-20"
      aria-labelledby="services-title"
    >
      {/* Section Title */}
      <div className="mb-12 text-center">
        <p className="mb-1 text-sm sm:text-base md:text-lg tracking-widest uppercase text-primary">
          Our Services
        </p>
        <h2
          id="services-title"
          className="text-2xl xs:text-3xl md:text-4xl font-bold text-secondary"
        >
          Explore Our <span className="text-primary">Services</span>
        </h2>
      </div>

      {/* Services Grid */}
      <div className="grid gap-8 grid-cols-[repeat(auto-fill,_minmax(330px,_1fr))]">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative flex flex-col justify-between p-8 transition-transform duration-500 bg-white border border-gray-200 shadow-lg rounded-xl group hover:scale-[1.02] hover:shadow-2xl"
            aria-label={`Service: ${service.title}`}
          >
            {/* Image */}
            <div className="mb-6 transition-transform duration-500 group-hover:scale-105">
              <img
                src={service.image}
                alt={service.title}
                className="object-cover w-16 h-16 rounded-lg"
              />
            </div>

            {/* Title */}
            <h3 className="mb-4 text-2xl font-bold text-secondary group-hover:text-primary">
              {service.title}
            </h3>

            {/* Description */}
            <p className="mb-6 text-gray-600 group-hover:text-gray-700">
              {service.description}
            </p>

            {/* Call-to-Action */}
            <Link
              to={`/services/${service.slug.current}`}
              aria-label={`Learn more about ${service.title}`}
              onClick={() => window.scrollTo(0, 0)}
            >
              <button className="relative px-6 py-3 mt-auto font-semibold text-white transition-all duration-300 rounded-full shadow-lg bg-primary hover:bg-secondary hover:-translate-y-2">
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline-block w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    d="M5 12h14M12 5l7 7-7 7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </Link>

            {/* Decorative Background Circle */}
            {service.status !== "upcoming" && (
              <div className="absolute w-36 h-24 rounded-full -bottom-2 -right-2 bg-primary opacity-30 blur-xl group-hover:animate-pulse"></div>
            )}

            {service.status === "upcoming" && (
              <div className="absolute rounded-xl w-full h-full bg-gradient-to-b from-white/40 to bg-white/40 via-primary/40 grid place-items-center inset-0 z-40">
                <span className="px-4 py-2 absolute rounded-lg bg-secondary text-tertiary flex items-center gap-x-2 animate-bounce">
                  <HiOutlineBellAlert className="text-2xl" />
                  {service.status}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;

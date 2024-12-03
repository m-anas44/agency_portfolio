import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { sanityClient } from "@/lib/sanityClient";

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
      className="container px-6 py-20 mx-auto"
      aria-labelledby="services-title"
    >
      {/* Section Title */}
      <div className="mb-12 text-center">
        <p className="mb-4 text-lg tracking-widest uppercase text-primary">
          Our Services
        </p>
        <h2 id="services-title" className="text-4xl font-bold text-secondary">
          Explore Our <span className="text-primary">Services</span>
        </h2>
      </div>

      {/* Services Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative flex flex-col justify-between p-8 transition-transform duration-500 bg-white border border-gray-200 shadow-lg rounded-xl group hover:scale-105 hover:shadow-2xl"
            aria-label={`Service: ${service.title}`}
          >
            {/* Icon */}
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
              to="/service-detail"
              aria-label={`Learn more about ${service.title}`}
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
            <div className="absolute w-48 h-32 rounded-full -bottom-4 -right-6 bg-primary opacity-30 blur-xl group-hover:animate-pulse"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;


import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/SharedComponents/index";
import { sanityClient } from "@/lib/sanityClient";
import { useNavigate } from "react-router-dom";

const Services = () => {
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

  const navigate = useNavigate();

  return (
    <section className="px-6 py-16 bg-white lg:px-20 text-primary">
      <div className="container">

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

              onClick={() => navigate("/services")}
            >
              All Services
            </Button>
          </div>
        </div>

        {/* Services Grid */}

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative flex flex-col justify-between p-8 transition-transform duration-500 bg-white border border-gray-200 shadow-lg rounded-xl group hover:scale-105 hover:shadow-2xl"
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
      </div>
    </section>
  );
};

export default Services;

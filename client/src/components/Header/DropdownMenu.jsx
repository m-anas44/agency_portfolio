import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { serviceTitles } from "@/lib/navLinks";

const DropdownMenu = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const data = await serviceTitles();

        // Add `/services/` prefix to all service slugs
        const updatedServices = data.map((service) => ({
          ...service,
          slug: { current: `/services/${service.slug.current}` },
        }));

        // Limit to first 3 services and add "All Services" entry
        const limitedServices = updatedServices.slice(0, 3);
        limitedServices.push({
          title: "All Services",
          slug: { current: "/services" },
        });

        setServices(limitedServices);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchServices();
  }, []);

  return (
    <ul className="absolute left-0 invisible opacity-0 p-4 mt-3 bg-white rounded-lg shadow-lg min-w-[180px] group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 transform translate-y-3 z-40 flex flex-col space-y-2">
      {services.map((service, index) => (
        <li key={index}>
          <Link
            to={service.slug.current}
            onClick={() => window.scrollTo(0, 0)}
            className="block p-2 text-sm font-medium text-gray-700 transition-all duration-200 rounded-lg hover:text-primary hover:bg-tertiary"
          >
            {service.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default DropdownMenu;

import React, { useEffect, useState } from "react";
import { Button } from "@/components/SharedComponents/index";
import { sanityClient } from "@/lib/sanityClient";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";

const ProjectSection = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);

  // Fetch portfolio data from Sanity
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const query = `
          *[_type == "project"]{
            title,
            description,
            category,
            slug,
            "image": image.asset->url
          }
        `;
        const data = await sanityClient.fetch(query);
        setProjects(data);
      } catch (error) {
        console.error("Error fetching portfolio items:", error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section className="container px-6 py-16 mx-auto md:px-12 lg:px-20">
      {/* Header Section */}
      <div className="flex flex-col justify-between md:items-center md:flex-row">
        <div>
          <h2 className="mt-2 text-4xl font-bold text-primary ">
            <p className="text-xl font-bold text-secondary">Our Portfolio</p>
            Some Recent <span className="text-secondary">Work</span>
          </h2>
        </div>
        <div>
          <Button
            className="block mx-auto mt-4 text-lg transition-all duration-200 rounded-full drop-shadow-lg md:text-xl md:mt-0 hover:bg-secondary hover:text-white"
            onClick={() => {
              navigate("/projects");
              window.scrollTo(0, 0);
            }}
          >
            See All Projects
          </Button>
        </div>
      </div>
      {/* Portfolio Grid */}
      <div className="container py-5 mx-auto">
        <div className="grid grid-cols-1 gap-8 mt-8 lg:mt-8 lg:gap-12 lg:grid-cols-2 ">
          {projects.map((item, index) => (
            <div
              key={index}
              className="relative flex flex-col items-start overflow-hidden transition-transform duration-300 transform rounded-lg shadow-lg group hover:scale-105"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="object-cover w-full h-64"
              />

              {/* Button (hidden by default, visible on hover) */}
              <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 opacity-0 bg-gray-400/30 group-hover:opacity-100">
                <Link target="_blank" to={item.slug.current}>
                  <button className="px-6 py-2 text-lg font-medium text-white rounded-full bg-primary hover:bg-secondary">
                    Watch Live
                  </button>
                </Link>
              </div>

              <div className="w-full px-8 py-4 overflow-hidden bg-primary">
                <h2 className="text-xl font-semibold text-white capitalize truncate">
                  {item.title}
                </h2>
                <p className="mt-1 text-secondary">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;

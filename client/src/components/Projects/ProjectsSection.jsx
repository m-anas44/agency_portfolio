import { useEffect, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; // Importing the arrow icons for the dropdown
import { sanityClient } from "../../lib/sanityClient";
import ProjectsGrid from "./ProjectsGrid";

const ProjectsSection = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [projects, setProjects] = useState([]);

  const tabStyles = (tab) =>
    `relative px-6 py-3 text-lg font-medium rounded-lg transition-all duration-300 ${
      activeTab === tab
        ? "bg-primary text-white shadow-lg scale-105" // Styling for active tab
        : "bg-gray-100 text-secondary hover:bg-primary hover:text-white hover:shadow-md"
    }`;

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const query = `*[_type == "project"] | order(category->title){
          title,
          description,
          "category":category->title,
          slug,
          "image": image.asset->url
        }`;
        const data = await sanityClient.fetch(query);

        // Ensure slug is a string and handle any missing fields
        const formattedData = data.map((project) => ({
          ...project,
          slug: project.slug?.current || "#", // Default slug to "#" if not available
          category: project.category || "General", // Fallback for missing category
          image: project.image || "", // Handle missing image gracefully
        }));

        setProjects(formattedData);
      } catch (error) {
        console.error("Error fetching portfolio items:", error);
      }
    };

    fetchProjects();
  }, []);

  // Extract unique categories for tabs, adding "All"
  const categories = [
    "All",
    ...new Set(projects.map((project) => project.category)),
  ];

  // Filter projects based on active tab, show all if "All" is selected
  const filteredProjects =
    activeTab === "All"
      ? projects
      : projects.filter((project) => project.category === activeTab);

  return (
    <section
      className="min-h-screen px-3 sm:px-4 md:px-6 lg:px-20 py-10 sm:py-14 mx-auto"
      aria-labelledby="projects-title"
    >
      {/* Section Title */}
      <div className="mb-8 text-center">
        <p className="mb-1 text-base sm:text-xl tracking-widest uppercase text-primary">
          Our Projects
        </p>
        <h2
          id="projects-title"
          className="text-2xl xs:text-3xl md:text-4xl font-bold text-secondary"
        >
          Explore Our <span className="text-primary">Projects</span>
        </h2>
      </div>

      <div className="flex justify-center gap-6 mb-12">
        <div className="hidden gap-6 sm:flex">
          {categories.map((category) => (
            <button
              key={category}
              className={tabStyles(category)}
              onClick={() => setActiveTab(category)}
            >
              {category
                .replace(/-/g, " ") // Replace hyphens with spaces
                .replace(/\b\w/g, (char) => char.toUpperCase())}{" "}
              {/* Capitalize first letter of each word */}
              {activeTab === category && (
                <FaChevronDown className="inline-block ml-2 sm:hidden" />
              )}
            </button>
          ))}
        </div>

        {/* Dropdown for smaller screens (visible on mobile) */}
        <div className="sm:hidden">
          <button
            className="relative flex justify-between items-center px-4 py-2 sm:px-6 sm:py-3 text-base sm:text-lg font-medium text-white rounded-lg bg-primary min-w-[10rem]"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            {activeTab
              .replace(/-/g, " ")
              .replace(/\b\w/g, (char) => char.toUpperCase())}
            <span className="ml-2">
              {isDropdownOpen ? <FaChevronUp /> : <FaChevronDown />}
            </span>
          </button>

          {isDropdownOpen && (
            <div className="absolute z-10 m-2 py-2 mx-auto transform -translate-x-1/2 rounded-lg shadow-lg w-56 left-1/2 hover:text-primary bg-gray-300">
              {/* Iterate through categories and render as buttons inside the dropdown */}
              {categories.map((category) => (
                <button
                  key={category}
                  className="block w-full px-4 py-2 sm:px-6 sm:py-3 text-base sm:text-lg text-secondary hover:bg-primary hover:text-white capitalize"
                  onClick={() => {
                    setActiveTab(category);
                    setIsDropdownOpen(false);
                  }}
                >
                  {category
                    .replace(/-/g, " ") // Replace hyphens with spaces
                    .replace(/\b\w/g, (char) => char.toUpperCase())}{" "}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-4 md:gap-8 grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))]">
        <ProjectsGrid filteredProjects={filteredProjects} />
      </div>
    </section>
  );
};

export default ProjectsSection;

import { Link } from "react-router-dom";
import { IoEyeSharp } from "react-icons/io5";

function ProjectsGrid({ filteredProjects }) {
  return (
    <>
      {filteredProjects.map((project, index) => (
        <div
          key={index}
          className="relative overflow-hidden rounded-lg shadow-lg group min-h-[300px] duration-300 hover:-translate-y-1"
          style={{
            backgroundImage: `url(${project.image})`, // Set background image
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Overlay effect for the project card */}
          <div className="absolute inset-0 transition-all duration-500 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100"></div>

          {/* Content that appears when hovering over the project */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white transition-all duration-500 opacity-0 group-hover:opacity-100">
            <h3 className="mb-4 text-xl xs:text-2xl font-bold">
              {project.title}
            </h3>
            <p className="mb-6 text-sm sm:text-base">{project.description}</p>
            <Link
              to="/project-detail"
              aria-label={`View details about ${project.title}`}
            >
              {/* Button to view more details about the project */}
              <button className="px-4 py-2 md:px-6 md:py-3 text-sm md:text-base font-semibold text-white transition-all duration-300 rounded-full bg-primary hover:bg-secondary flex items-center gap-x-1.5">
                <IoEyeSharp className="text-lg" />
                <span>View Project</span>
              </button>
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}

export default ProjectsGrid;

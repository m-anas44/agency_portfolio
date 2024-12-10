import { useParams, useLocation } from "react-router-dom";
import Cards from "./Cards";
import { PagesContent } from "../components/PageContent"; // Ensure this path is correct

const Home = () => {
  const { pageId } = useParams(); // Extract pageId from the URL
  const location = useLocation(); // Access the current location
  const queryParams = new URLSearchParams(location.search); // Parse query parameters
  const extraInfo = queryParams.get("extra"); // Get the "extra" query parameter

  // Find the page data corresponding to the pageId or use the first item by default
  const pageData =
    PagesContent.find((page) => page.id === pageId) || PagesContent[0];

  return (
    <div className="p-5">
      {pageData ? (
        <div className="flex flex-col lg:w-[90%] mx-auto mt-5 text-secondary">
          {/* Display image */}
          <img
            src={pageData.img}
            alt={pageData.title}
            className="w-full h-auto rounded-lg mb-5"
          />

          {/* Display title */}
          <h1 className="text-2xl font-extrabold text-secondary mb-3 sm:text-[26px] md:text-[30px] leading-7 sm:leading-8 md:leading-9">
            {pageData.title}
          </h1>

          {/* Display description */}
          <p className="text-[15px] text-secondary font-medium leading-7 lg:my-4">
            {pageData.description}
          </p>

          <Cards />

          {/* Display additional info if available */}
          {extraInfo && (
            <p className="mt-4 text-sm text-gray-600">
              Additional Info: {extraInfo}
            </p>
          )}
        </div>
      ) : (
        <h1 className="text-2xl font-bold text-red-500">Page Not Found</h1>
      )}
    </div>
  );
};

export default Home;

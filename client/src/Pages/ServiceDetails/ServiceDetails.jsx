import { useEffect, useState } from "react";
import HeroSection from "../../components/Servicedetails/HeroSection";
import ServicesLayout from "../../components/Servicedetails/ServicesLayout";
import { sanityClient } from "@/lib/sanityClient";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../../components/SharedComponents/loadingSpinner";

const ServiceDetails = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const { slug } = useParams();

  const query = `*[_type == "service"]{
    title,
    description,
    status,
    slug,
    "image": image.asset->url,
    detailedInfo,
    status
  }`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true); // Start loading
        const fetchedServices = await sanityClient.fetch(query);
        setServices(fetchedServices);
      } catch (error) {
        console.error("Error in fetching service details:", error);
      } finally {
        setLoading(false); // End loading
      }
    };

    fetchData();
  }, []);

  const selectedService = services.find(
    (service) => service.slug.current === slug
  );

  if (loading) {
    return (
      <div className="grid place-items-center h-screen">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div>
      {selectedService ? (
        <>
          <HeroSection services={services} slug={slug} />
          <ServicesLayout services={services} slug={slug} />
        </>
      ) : (
        <div className="grid place-items-center h-screen text-center">
          <div>
            <h5 className="text-2xl font-bold text-red-500">
              Service Not Found
            </h5>
            <p className="text-gray-600">
              The service you are looking for does not exist.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceDetails;

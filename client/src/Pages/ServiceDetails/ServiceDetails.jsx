import { useEffect, useState } from "react";
import HeroSection from "../../components/Servicedetails/HeroSection";
import ServicesLayout from "../../components/Servicedetails/ServicesLayout";
import { sanityClient } from "@/lib/sanityClient";
import { useParams } from "react-router-dom";

const ServiceDetails = () => {
  const [services, setServices] = useState([]);
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
        const service = await sanityClient.fetch(query);
        setServices(service);
      } catch (error) {
        console.error("Error in fetching service details:", error);
      }
    };

    fetchData();
  }, [slug, setServices]); // Correct dependency array

  return (
    <div>
      <HeroSection services={services} slug={slug} />
      <ServicesLayout services={services} slug={slug} />
    </div>
  );
};

export default ServiceDetails;

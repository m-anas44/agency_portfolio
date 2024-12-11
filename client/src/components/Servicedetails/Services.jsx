import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaRegFilePdf } from "react-icons/fa6";
import { FaRegFileAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMailOpen } from "react-icons/io5";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

import { PagesContent } from "./PageContent";
const Services = () => {
  const [selectedService, setSelectedService] = useState("Web Development"); // Default selected service
  const navigate = useNavigate();

  return (
    <div>
      {/* Main Services Section */}
      <div className="lg:min-w-96 max-w-md mx-auto p-4 bg-tertiary rounded-lg my-5">
        <h2 className="text-lg font-bold text-secondary mb-4">
          <span className="text-primary">Main</span> Services
        </h2>
        <div className="space-y-2">
          {PagesContent.map((service) => (
            <button
              key={service.id}
              onClick={() => {
                setSelectedService(service.title); // Update selected service state
                navigate(`/services/${service.id}`); // Navigate to the dynamic path
              }}
              className={`w-full flex justify-between items-center px-4 py-3 rounded-md text-sm font-medium ${
                selectedService === service.title
                  ? "bg-primary text-white"
                  : "bg-white text-gray-700 hover:bg-secondary hover:text-white"
              }`}
            >
              {service.title} {/* Display service title */}
              <MdOutlineKeyboardArrowRight/>
            </button>
          ))}
        </div>
      </div>

      {/* Brochure Components */}
      <>
        <div className="max-w-md mx-auto p-4 bg-tertiary rounded-lg mb-4">
          <h2 className="text-lg font-bold text-secondary mb-4">Brouchures</h2>
          <div className="flex flex-col space-y-3">
            <button className="space-y-1  flex items-center bg-white border border-gray-200 rounded-lg  w-full">
              <span className="bg-secondary text-white font-medium h-full p-3 rounded-l-lg">
                <FaRegFilePdf />
              </span>
              <p className="items-center mx-7 text-[#42545e] font-medium  hover:text-primary">
                Download.pdf
              </p>
            </button>
            <button className="space-y-1 flex items-center bg-white border border-gray-200 rounded-lg  w-full">
              <span className="bg-secondary text-white font-medium h-full p-3 rounded-l-lg">
                <FaRegFileAlt />
              </span>
              <p className="items-center mx-7 text-[#42545e] font-medium  hover:text-primary">
                Download.txt
              </p>
            </button>
          </div>
        </div>
      </>

      {/* Action Area Card Component */}
      <>
        <div className="my-5">
          <div className="max-w-md mx-auto relative flex flex-col">
            <div className="w-full h-auto bg-white">
              <img
                src="https://flywebwp.websitelayout.net/wp-content/uploads/2023/09/contact-img.jpg"
                alt="Action img"
              />
            </div>
            <div className="w-full bg-secondary text-white p-4 text-center flex flex-col gap-2 ">
              <h1 className="text-[22px] leading-[26px] font-bold mt-2 pt-5">
                How Can We Help
              </h1>
              <p className="text-[16px] leading-[27px] font-medium flex justify-center align-middle">
                <span className="mt-1.5 mr-3">
                  <FaPhoneAlt />
                </span>
                (+44)123456789
              </p>
              <p className="text-[16px] leading-[27px] font-medium flex justify-center align-middle">
                <span className="mt-1.5 mr-3">
                  <IoMailOpen />
                </span>
                addyour@emailhere
              </p>
            </div>

            {/* Circle with icon */}
            <div className="w-[80px] h-[80px] md:w-[70px] md:h-[70px] rounded-full bg-primary absolute top-[67%] md:top-[70%] lg:top-[64%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <TfiHeadphoneAlt className="text-white text-[40px] mx-auto my-5 md:my-4" />
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Services;

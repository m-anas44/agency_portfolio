// import React from "react";
// import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import Pic from "../../assets/About/pic.jpg";

const teamLeads = [
  {
    name: "Muhammad Anas",
    role: "CEO",
    image: Pic, // Replace with actual image URLs
    socials: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "Zohaib",
    role: "Project Manager",
    image: Pic,
  },
  {
    name: "Sohail",
    role: "Lead Developer",
    image: Pic,
  },
  {
    name: "Muhammad Mudasir",
    role: "UI/UX Designer",
    image: Pic,
  },
];

const TeamLeads = () => {
  return (
    <section className="py-12 bg-gradient-to-r from-gray-100 to-gray-200">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-10">
          Meet Our Team Leads
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {teamLeads.map((lead, index) => (
            <div
              key={index}
              className="bg-black rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl"
            >
              <div className="relative">
                <img
                  src={lead.image}
                  alt={lead.name}
                  className="w-full h-[450px] sm:h-[310px] object-cover rounded-lg"
                />
              </div>
              <div className="p-6 text-center">
                <div className="text-emerald-100">
                  <h3 className="text-[15px] font-medium">{lead.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamLeads;

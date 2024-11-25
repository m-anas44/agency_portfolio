// import React from "react";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
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
    socials: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "Sohail",
    role: "Lead Developer",
    image: Pic,
    socials: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "Muhammad Mudasir",
    role: "UI/UX Designer",
    image: Pic,
    socials: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
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
                  className="w-full h-[310px] object-cover rounded-t-lg"
                />
                {/* <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-bold">{lead.name}</h3>
                  <p className="text-lg">{lead.role}</p>
                </div> */}
              </div>
              <div className="p-6 text-center">
                <div className="text-emerald-100">
                  <h3 className="text-[15px] font-medium">{lead.name}</h3>
                  <p className="text-[12px]">{lead.role}</p>
                </div>
                <p className="text-gray-600 mb-4">
                  “Driven by passion and innovation.”
                </p>
                <div className="flex justify-center space-x-4">
                  <a
                    href={lead.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600 transition"
                  >
                    <FaLinkedin size={24} />
                  </a>
                  <a
                    href={lead.socials.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-400 transition"
                  >
                    <FaTwitter size={24} />
                  </a>
                  <a
                    href={lead.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-800 transition"
                  >
                    <FaGithub size={24} />
                  </a>
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

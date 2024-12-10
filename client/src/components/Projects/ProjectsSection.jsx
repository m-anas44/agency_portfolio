import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'; // Importing the arrow icons for the dropdown
import ProjectPic from '../../assets/projectPic.png'; // Placeholder image for projects

// Defining project data for different categories (webDevelopment, shopify, ecommerce)
const projects = {
  webDevelopment: [
    {
      title: 'Portfolio Website Development',
      description: 'A sleek, modern portfolio to showcase creative work.',
      image: ProjectPic,
    },
    {
      title: 'Corporate Website Revamp',
      description: 'A branding-focused revamp for better accessibility and responsiveness.',
      image: ProjectPic,
    },
  ],
  shopify: [
    {
      title: 'Shopify Store Customization',
      description: 'Custom themes and optimized user experience for Shopify stores.',
      image: ProjectPic,
    },
  ],
  ecommerce: [
    {
      title: 'E-commerce Platform Redesign',
      description: 'A complete redesign to enhance user experience and boost sales.',
      image: ProjectPic,
    },
  ],
};

const ProjectsSection = () => {
  // State variables to manage active tab and dropdown visibility for mobile
  const [activeTab, setActiveTab] = useState('webDevelopment');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Helper function to apply dynamic styles to tabs based on the active tab
  const tabStyles = (tab) =>
    `relative px-6 py-3 text-lg font-medium rounded-lg transition-all duration-300 ${
      activeTab === tab
        ? 'bg-primary text-white shadow-lg scale-105' // Styling for active tab
        : 'bg-gray-100 text-secondary hover:bg-primary hover:text-white hover:shadow-md' // Styling for inactive tab
    }`;

  return (
    <section className='min-h-screen px-6 py-20 mx-auto' aria-labelledby='projects-title'>
      {/* Section Title */}
      <div className='mb-12 text-center'>
        <p className='mb-4 text-lg tracking-widest uppercase text-primary'>Our Projects</p>
        <h2 id='projects-title' className='text-4xl font-bold text-secondary'>
          Explore Our <span className='text-primary'>Projects</span>
        </h2>
      </div>

      {/* Tabs (visible on larger screens, hidden on mobile) */}
      <div className='flex justify-center gap-6 mb-12'>
        <div className='hidden gap-6 sm:flex'>
          {/* Iterate through categories and render each as a tab button */}
          {['webDevelopment', 'shopify', 'ecommerce'].map((category) => (
            <button
              key={category}
              className={tabStyles(category)} // Apply dynamic styles based on active tab
              onClick={() => setActiveTab(category)} // Update active tab on click
            >
              {/* Display category name with spaces */}
              {category.replace(/([A-Z])/g, ' $1').trim()}
              {/* Show arrow only on active tab (on larger screens) */}
              {activeTab === category && <FaChevronDown className='inline-block ml-2 sm:hidden' />}
            </button>
          ))}
        </div>

        {/* Dropdown for smaller screens (visible on mobile) */}
        <div className='sm:hidden'>
          <button
            className='relative flex items-center px-6 py-3 text-lg font-medium text-white rounded-lg bg-primary'
            onClick={() => setIsDropdownOpen(!isDropdownOpen)} // Toggle dropdown visibility
          >
            {/* Display the active tab name */}
            {activeTab === 'webDevelopment' ? 'Web Development' : activeTab === 'shopify' ? 'Shopify' : 'E-commerce'}

            {/* Arrow icon to indicate dropdown open/close */}
            <span className='ml-2'>
              {isDropdownOpen ? <FaChevronUp /> : <FaChevronDown />} {/* Toggle arrow direction */}
            </span>
          </button>

          {/* Dropdown menu with category options, visible when dropdown is open */}
          {isDropdownOpen && (
            <div className='absolute z-10 m-2 mx-auto transform -translate-x-1/2 bg-gray-100 rounded-lg shadow-lg w-72 left-1/2 hover:text-primary hover:bg-gray-300'>
              {/* Iterate through categories and render as buttons inside the dropdown */}
              {['webDevelopment', 'shopify', 'ecommerce'].map((category) => (
                <button
                  key={category}
                  className='block w-full px-6 py-3 text-lg text-secondary hover:bg-primary hover:text-white'
                  onClick={() => {
                    setActiveTab(category); // Set active tab on selection
                    setIsDropdownOpen(false); // Close the dropdown after selection
                  }}
                >
                  {category.replace(/([A-Z])/g, ' $1').trim()} {/* Display category name with spaces */}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Projects Grid */}
      <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
        {/* Iterate through projects of the active tab and render each project */}
        {projects[activeTab].map((project, index) => (
          <div
            key={index}
            className='relative overflow-hidden rounded-lg shadow-lg group min-h-[300px] duration-300 hover:-translate-y-1'
            style={{
              backgroundImage: `url(${project.image})`, // Set background image
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            {/* Overlay effect for the project card */}
            <div className='absolute inset-0 transition-all duration-500 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100'></div>

            {/* Content that appears when hovering over the project */}
            <div className='absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white transition-all duration-500 opacity-0 group-hover:opacity-100'>
              <h3 className='mb-4 text-2xl font-bold'>{project.title}</h3>
              <p className='mb-6'>{project.description}</p>
              <Link to='/project-detail' aria-label={`View details about ${project.title}`}>
                {/* Button to view more details about the project */}
                <button className='px-6 py-3 font-semibold text-white transition-all duration-300 rounded-full bg-primary hover:bg-secondary'>
                  View Project
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;

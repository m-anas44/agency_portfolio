import React, { useEffect, useState } from 'react';
import { Button } from '@/components/SharedComponents/index';
import { sanityClient } from '@/lib/sanityClient';
import { Link, useNavigate } from 'react-router-dom';

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
        console.error('Error fetching portfolio items:', error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section className='px-6 py-16 mx-auto max-w-7xl md:px-12 lg:px-20'>
      {/* Header Section */}
      <div className='flex flex-col items-center justify-between gap-8 md:flex-row'>
        <div>
          <h2 className='text-4xl font-extrabold text-primary'>
            <span className='block mb-2 text-lg font-bold text-secondary'>Our Portfolio</span>
            Creative <span className='text-secondary'>Projects</span>
          </h2>
        </div>
        <div>
          <Button
            className='px-6 py-3 text-lg text-white transition-all duration-300 rounded-full bg-primary hover:bg-secondary hover:shadow-lg'
            onClick={() => {
              navigate('/projects');
              window.scrollTo(0, 0);
            }}
          >
            View All Projects
          </Button>
        </div>
      </div>

      {/* Portfolio Grid */}
      <div className='grid grid-cols-1 gap-10 mt-12 sm:grid-cols-2 lg:grid-cols-3'>
        {projects.map((item, index) => (
          <div
            key={index}
            className='relative overflow-hidden transition-all duration-300 transform bg-gray-100 shadow-lg rounded-3xl group hover:scale-105'
          >
            {/* Image */}
            <div className='relative w-full h-56'>
              <img src={item.image} alt={item.title} className='object-cover w-full h-full rounded-t-3xl' />
            </div>

            {/* Card Content */}
            <div className='flex flex-col justify-between h-full p-6'>
              <div>
                <h3 className='text-xl font-semibold text-gray-800 truncate'>{item.title}</h3>
                <p className='mt-2 text-sm leading-relaxed text-gray-600'>
                  {item.description.length > 90 ? `${item.description.substring(0, 90)}...` : item.description}
                </p>
              </div>
              <div className='flex items-center justify-between mt-4'>
                <span className='px-4 py-1 text-xs font-medium text-white rounded-full bg-secondary'>
                  {item.category || 'General'}
                </span>
                <Link to={item.slug.current} target='_blank' className='text-sm text-primary hover:underline'>
                  Learn More
                </Link>
              </div>
            </div>

            {/* Hover Effect */}
            <div className='absolute inset-0 flex items-center justify-center transition-opacity duration-300 opacity-0 bg-black/70 group-hover:opacity-100'>
              <Link to={item.slug.current} target='_blank'>
                <button className='px-6 py-3 text-sm font-medium text-white transition-all duration-200 rounded-full bg-primary hover:bg-secondary'>
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

export default ProjectSection;

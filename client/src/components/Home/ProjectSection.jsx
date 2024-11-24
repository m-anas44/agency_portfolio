import React from 'react';
import { Button } from '@/components/SharedComponents/index';
import heroImage from '@/assets/Images/Pages/Home/Hero.png';

const ProjectSection = () => {
  const portfolioItems = [
    {
      id: 1,
      title: 'Best website collections ',
      category: 'Website',
      image: heroImage,
    },
    {
      id: 2,
      title: 'Block of Ui kit collections',
      category: 'Ui kit',
      image: heroImage,
    },
    {
      id: 3,
      title: 'Ton’s of mobile mockup',
      category: 'Mockups',
      image: heroImage,
    },
    {
      id: 4,
      title: 'Huge collection of animation',
      category: 'Animation',
      image: heroImage,
    },
  ];

  return (
    <section className='px-6 py-12 bg-white md:px-20'>
      {/* Header Section */}
      <div className='flex flex-col justify-between md:items-center md:flex-row'>
        <div>
          <h2 className='mt-2 text-4xl font-bold text-primary '>
            <p className='text-xl font-bold text-secondary'>Our Portfolio</p>
            Some Recent <span className='text-secondary'>Work</span>
          </h2>
        </div>
        <div>
          <Button
            className='block mx-auto mt-4 text-lg transition-all duration-200 rounded-full drop-shadow-lg md:text-xl md:mt-0 hover:bg-secondary hover:text-white'
            onClick={() => {}}
          >
            See All Projects
          </Button>
        </div>
      </div>

      {/* Portfolio Grid */}
      <div className='container py-5 mx-auto px-'>
        <div className='grid grid-cols-1 gap-8 mt-8 lg:mt-8 lg:gap-12 lg:grid-cols-2 '>
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className='relative flex flex-col items-start overflow-hidden transition-transform duration-300 transform rounded-lg shadow-lg group hover:scale-105'
            >
              {/* Image */}
              <img src={item.image} alt={item.title} className='object-cover w-full h-64' />

              {/* Button (hidden by default, visible on hover) */}
              <div className='absolute inset-0 flex items-center justify-center transition-opacity duration-300 opacity-0 bg-gray-400/30 group-hover:opacity-100'>
                <button className='px-6 py-2 text-lg font-medium text-white rounded-full bg-primary hover:bg-secondary'>
                  Watch Live
                </button>
              </div>

              {/* Text Content */}
              <div className='w-full px-8 py-2 bg-primary'>
                <h2 className='mt-4 text-xl font-semibold text-white'>{item.title}</h2>
                <p className='mt-2 text-xl font-bold tracking-wider uppercase text-secondary '>{item.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;

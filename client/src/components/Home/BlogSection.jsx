import React from 'react';
import { Button } from '@/components/SharedComponents/index';
import { Link } from 'react-router-dom';
const BlogSection = () => {
  const cards = [
    {
      title: 'Studio by Preline',
      description: "Produce professional, reliable streams easily leveraging Preline's innovative broadcast studio",
      image:
        'https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&q=80',
    },
    {
      title: 'Onsite',
      description:
        'Optimize your in-person experience with best-in-class capabilities like badge printing and lead retrieval',
      image:
        'https://images.unsplash.com/photo-1668906093328-99601a1aa584?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&q=80',
    },
    {
      title: 'The complete guide to OKRs',
      description: 'How to make objectives and key results work for your company',
      image:
        'https://images.unsplash.com/photo-1567016526105-22da7c13161a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&q=80',
    },
    {
      title: 'People program models',
      description: 'Six approaches to bringing your People strategy to life',
      image:
        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&q=80',
    },
  ];

  return (
    <section>
      {/* Section Header */}
      <div className='flex flex-col justify-between px-6 mb-10 md:px-12 lg:px-20 md:flex-row'>
        <div>
          <p className='text-xl font-bold text-secondary'>Blog & News</p>
          <h2 className='mt-4 text-4xl font-bold md:mt-1 text-primary'>
            Latest News <span className='text-secondary'>Blog</span>
          </h2>
        </div>
        <div>
          <Button
            className='block mx-auto mt-4 text-lg transition-all duration-200 rounded-full drop-shadow-lg md:text-xl md:mt-0 hover:bg-secondary hover:text-white'
            onClick={() => {}}
          >
            See All Blog
          </Button>
        </div>
      </div>
      <div className='max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto bg-[#FAF9F6]'>
        <div className='grid gap-10 lg:grid-cols-2 lg:gap-y-16'>
          {cards.map((card, index) => (
            <Link
              key={index}
              to='/blog'
              className='block overflow-hidden duration-300 bg-secondary group rounded-xl focus:outline-none hover:scale-105'
            >
              <div className='flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5'>
                <div className='relative w-full overflow-hidden shrink-0 rounded-xl sm:w-56 h-44'>
                  <img
                    className='absolute top-0 left-0 object-cover transition-transform duration-500 ease-in-out group-hover:scale-105 group-focus:scale-105 size-full rounded-xl'
                    src={card.image}
                    alt={card.title}
                  />
                </div>
                <div className='p-3 sm:p-6 grow lg:p-0'>
                  <h3 className='text-xl font-semibold text-tertiary'>{card.title}</h3>
                  <p className='mt-2 sm:mt-3 max-sm:truncate text-tertiary'>{card.description}</p>
                  <p className='inline-flex items-center mt-2 text-sm font-medium sm:mt-4 text-primary gap-x-1 decoration-2 group-hover:underline group-focus:underline'>
                    Read more
                    <svg
                      className='shrink-0 size-4'
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    >
                      <path d='m9 18 6-6-6-6' />
                    </svg>
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;

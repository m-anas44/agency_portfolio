import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Button } from '@/components/SharedComponents/index';
const testimonials = [
  {
    id: 1,
    title: "It's all about speed",
    description: 'We provide you with a test account that can be set up in seconds. Our main focus is getting you up and running quickly.',
    text: 'Amazing people to work with. Very fast and professional partner.',
    name: 'Josh Grazioso',
    role: 'Director Payments & Risk | Airbnb',
    avatar:
      'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80',
  },
  {
    id: 2,
    title: 'Responsive and Helpful',
    description:
      'Our team works tirelessly to provide immediate support and ensure customer satisfaction throughout the process.',
    text: 'The team was incredibly responsive and helpful throughout the process.',
    name: 'Sophia Turner',
    role: 'CTO | Tech Solutions',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?crop=faces&fit=crop&w=320&h=320&q=80',
  },
  {
    id: 3,
    title: 'Professional and Reliable',
    description:
      'We focus on delivering quality service and a smooth experience for all our clients to build lasting relationships.',
    text: 'We loved their professionalism and the quality of service they delivered! ',
    name: 'James Anderson',
    role: 'CEO | Innovate Inc.',
    avatar: 'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?crop=faces&fit=crop&w=320&h=320&q=80',
  },
];

const TestimonialSection = () => {
  const carouselSettings = {
    infinite: true, // Infinite loop
    speed: 500, // Transition speed
    slidesToShow: 1, // Number of slides to show
    slidesToScroll: 1, // Number of slides to scroll
    autoplay: true, // Enable auto-scroll
    autoplaySpeed: 3000, // Speed for auto-scroll
    arrows: false, // Hide arrows
  };

  return (
    <section className='16'>
      {/* Section Header */}
      <div>
        <p className='text-xl font-bold text-center text-secondary'>Testimonial</p>
        <h2 className='mt-4 text-4xl font-bold text-center md:mt-1 text-primary '>
          Client <span className='text-secondary'>Feedback </span>
        </h2>
      </div>
      <div className='max-w-[80rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-7 mx-auto  bg-gradient-to-r from-tertiary/90 to-tertiary/90 rounded-lg my-12'>
        <div className=' lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center lg:justify-between'>
          {/* Left Side: Carousel Section */}
          <div className='lg:col-span-5 lg:col-start-1'>
            <Slider {...carouselSettings}>
              {testimonials.map((testimonial) => (
                <div className=' p-4 border border-secondary rounded-lg h-[20rem] overflow-auto' key={testimonial.id}>
                  <div>
                    <h2 className='mb-4 text-3xl font-bold text-secondary'>{testimonial.title}</h2>
                    <p className='mb-6 text-secondary'>{testimonial.description}</p>
                  </div>
                  <div className='relative z-10'>
                    <p className='text-xl italic text-gray-800 max-sm:truncate'>{testimonial.text}</p>
                  </div>

                  <footer className='mt-6'>
                    <div className='flex items-center gap-x-4'>
                      <div className='shrink-0'>
                        <img className='w-8 h-8 rounded-full' src={testimonial.avatar} alt={testimonial.name} />
                      </div>
                      <div className='grow'>
                        <div className='font-semibold text-secondary'>{testimonial.name}</div>
                        <div className='text-xs text-primary'>{testimonial.role}</div>
                      </div>
                    </div>
                  </footer>
                </div>
              ))}
            </Slider>
          </div>

          {/* Stats Section */}
          <div className='mt-10 lg:mt-0 lg:col-span-6 lg:col-end-13'>
            <div className='space-y-6 sm:space-y-8'>
              <ul className='grid grid-cols-2 overflow-hidden divide-x-2 divide-y-2 divide-secondary'>
                <li className='flex flex-col -m-0.5 p-4 sm:p-8'>
                  <div className='flex items-end mb-2 text-3xl font-bold gap-x-2 sm:text-5xl text-secondary'>500+</div>
                  <p className='text-sm sm:text-base text-secondary'>projects delivered for businesses worldwide</p>
                </li>

                <li className='flex flex-col -m-0.5 p-4 sm:p-8'>
                  <div className='flex items-end mb-2 text-3xl font-bold gap-x-2 sm:text-5xl text-secondary'>
                    <svg
                      className='shrink-0 size-5 text-primary'
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
                      <path d='m5 12 7-7 7 7' />
                      <path d='M12 19V5' />
                    </svg>
                    30%
                  </div>
                  <p className='text-sm sm:text-base text-secondary'>
                    improvement in business efficiency with our solutions
                  </p>
                </li>

                <li className='flex flex-col -m-0.5 p-4 sm:p-8'>
                  <div className='flex items-end text-3xl font-bold gap-x-2 sm:text-5xl text-secondary'>
                    <svg
                      className='shrink-0 size-5 text-primary'
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
                      <path d='m5 12 7-7 7 7' />
                      <path d='M12 19V5' />
                    </svg>
                    15%
                  </div>
                  <p className='text-sm sm:text-base text-secondary'>rise in client satisfaction across industries</p>
                </li>

                <li className='flex flex-col -m-0.5 p-4 sm:p-8'>
                  <div className='flex items-end mb-2 text-3xl font-bold gap-x-2 sm:text-5xl text-secondary'>3x</div>
                  <p className='text-sm sm:text-base text-secondary'>faster delivery than industry standards</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;

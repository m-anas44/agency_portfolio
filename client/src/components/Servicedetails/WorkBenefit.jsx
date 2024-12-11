import React from 'react';
import { FaCheck } from 'react-icons/fa';

const WorkBenefits = ({ serviceName }) => {
  return (
    <section className='py-5 bg-white'>
      <div className='max-w-4xl mx-auto'>
        {/* Title Section */}
        <h2 className='mb-6 text-3xl font-extrabold text-secondary'>Benefits of {serviceName}</h2>

        {/* Description */}
        <p className='mb-6 text-lg leading-7 text-gray-600'>
          {`Explore the benefits of our ${serviceName} service, designed to help you achieve your goals with efficiency
            and reliability. Learn how this service can provide tailored solutions to meet your specific needs.`}
        </p>

        {/* Benefits Section */}
        <div className='grid grid-cols-1 mb-6 sm:grid-cols-2 gap-y-4 gap-x-6'>
          <div className='flex items-center gap-3'>
            <FaCheck className='text-lg text-primary' />
            <span className='font-medium text-gray-800'>Tailored solutions to meet your needs</span>
          </div>
          <div className='flex items-center gap-3'>
            <FaCheck className='text-lg text-primary' />
            <span className='font-medium text-gray-800'>Expert support and guidance</span>
          </div>
          <div className='flex items-center gap-3'>
            <FaCheck className='text-lg text-primary' />
            <span className='font-medium text-gray-800'>Improved efficiency and results</span>
          </div>
          <div className='flex items-center gap-3'>
            <FaCheck className='text-lg text-primary' />
            <span className='font-medium text-gray-800'>Seamless integration into your workflow</span>
          </div>
        </div>

        {/* Footer Description */}
        <p className='text-lg leading-7 text-gray-600'>
          Discover how {serviceName} can transform your processes and deliver exceptional outcomes. Our expert team is
          dedicated to ensuring your success every step of the way.
        </p>
      </div>
    </section>
  );
};

export default WorkBenefits;

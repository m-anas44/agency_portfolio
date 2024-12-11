import { useState } from 'react';
import { FaPhoneAlt, FaRegFileAlt, FaRegFilePdf } from 'react-icons/fa';
import { IoMailOpen } from 'react-icons/io5';
import { TfiHeadphoneAlt } from 'react-icons/tfi';
import { Link } from 'react-router-dom';
import RigthSide from './RigthSide';
import PagesContent from './mokeData';
import contactus from '../../assets/ServicesDetails/contactus.jpg';

const ServicesLayout = () => {
  const [selectedService, setSelectedService] = useState('web-development'); // Default selected service

  return (
    <section className='flex flex-col gap-2 px-4 py-10 mx-auto md:flex-row max-w-7xl sm:px-6 lg:px-8'>
      {/* Right Content Section */}
      <div className='order-1 md:order-2 md:w-2/3'>
        <RigthSide pageId={selectedService} />
      </div>

      {/* Left Content Section */}
      <div className='order-2 max-md:px-4 md:order-1 md:w-1/3'>
        {/* Main Services Section */}
        <div className='p-4 mx-auto mb-5 rounded-lg lg:mx-0 bg-tertiary'>
          <h2 className='mb-4 text-xl font-bold text-secondary'>
            <span className='text-primary'>Main</span> Services
          </h2>
          <div>
            {PagesContent.map((service) => (
              <Link to={`/services/${service.id.toLowerCase()}`} key={service.id}>
                <button
                  onClick={() => setSelectedService(service.title)}
                  className={`w-full flex justify-between items-center px-4 py-3 rounded-md text-base font-medium ${
                    selectedService === service.title
                      ? 'bg-primary text-white'
                      : 'bg-white text-gray-700 hover:bg-secondary hover:text-white'
                  } mb-3`} // Adding margin-bottom here for testing
                >
                  {service.title}
                  <span className='text-black'>{'>'}</span>
                </button>
              </Link>
            ))}
          </div>
        </div>

        {/* Brochure Components */}
        <div className='p-4 mx-auto mb-4 rounded-lg lg:mx-0 bg-tertiary'>
          <h2 className='mb-4 text-lg font-bold text-secondary'>Brochures</h2>
          <div className='space-y-3'>
            <button className='flex items-center w-full bg-white border border-gray-200 rounded-lg'>
              <span className='h-full p-3 font-medium text-white rounded-l-lg bg-secondary'>
                <FaRegFilePdf />
              </span>
              <p className='ml-4 text-[#42545e] font-medium hover:text-primary'>Download.pdf</p>
            </button>
            <button className='flex items-center w-full bg-white border border-gray-200 rounded-lg'>
              <span className='h-full p-3 font-medium text-white rounded-l-lg bg-secondary'>
                <FaRegFileAlt />
              </span>
              <p className='ml-4 text-[#42545e] font-medium hover:text-primary'>Download.txt</p>
            </button>
          </div>
        </div>

        {/* Action Area Card Component */}
        <div className='mx-auto my-5 lg:mx-0'>
          <div className='relative'>
            <img
              src={contactus}
              alt='Action img'
              className='object-cover w-full rounded-tl-lg rounded-tr-lg h-[22rem] '
            />
            <div className='flex flex-col items-center justify-center gap-2 p-4 text-white rounded-bl-lg rounded-br-lg bg-secondary'>
              <h1 className='mt-3 text-xl font-bold lg:text-2xl'>How Can We Help</h1>
              <p className='flex items-center gap-2 text-sm lg:text-base'>
                <FaPhoneAlt />
                (+44)123456789
              </p>
              <p className='flex items-center gap-2 text-sm lg:text-base'>
                <IoMailOpen />
                addyour@emailhere
              </p>
            </div>
            {/* Circle with icon */}
            <div className='absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/3 w-[70px] h-[70px] lg:w-[80px] lg:h-[80px] rounded-full bg-primary flex items-center justify-center'>
              <TfiHeadphoneAlt className='text-2xl text-white lg:text-3xl' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesLayout;

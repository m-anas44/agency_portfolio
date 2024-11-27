import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
  FaPaperPlane,
  FaPhone,
  FaEnvelope,
  FaChevronUp,
} from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Enables smooth scrolling
    });
  };

  return (
    <footer className='py-12 text-white bg-secondary'>
      <div className='container px-6 mx-auto md:px-12 lg:px-20'>
        <div className='grid grid-cols-1 gap-10 md:grid-cols-3'>
          {/* Left Section */}
          <div>
            <h2 className='text-lg font-bold'>TechSpireX</h2>
            <p className='text-sm text-tertiary'>Creative Agency</p>
            <p className='mt-4 text-base text-tertiary'>Your partner in crafting creative and impactful web solutions.</p>

            <div className='flex mt-4 space-x-3'>
              <Link to='#' className='flex items-center justify-center w-8 h-8 bg-gray-700 rounded hover:bg-gray-600'>
                <FaFacebookF />
              </Link>
              <Link to='#' className='flex items-center justify-center w-8 h-8 bg-gray-700 rounded hover:bg-gray-600'>
                <FaTwitter />
              </Link>
              <Link to='#' className='flex items-center justify-center w-8 h-8 bg-gray-700 rounded hover:bg-gray-600'>
                <FaYoutube />
              </Link>
              <Link to='#' className='flex items-center justify-center w-8 h-8 bg-gray-700 rounded hover:bg-gray-600'>
                <FaLinkedinIn />
              </Link>
            </div>
          </div>

          {/* Center Section */}
          <div>
            <h3 className='text-lg font-bold'>Newsletter</h3>
            <p className='mt-4 text-base text-tertiary'>
              Subscribe to our newsletter to receive updates on the latest news!
            </p>
            <div className='flex items-center mt-6'>
              <input
                type='text'
                placeholder='Subscribe with us'
                className='w-full px-4 py-2 text-gray-300 bg-gray-700 rounded-l focus:outline-none'
              />
              <button className='px-4 py-3 rounded-r bg-tertiary hover:bg-primary group' onClick={() => {}}>
                <FaPaperPlane className='text-primary group-hover:text-tertiary' />
              </button>
            </div>
          </div>

          {/* Right Section */}
          <div>
            <h3 className='text-lg font-bold'>Contacts</h3>
            <div className='mt-4 space-y-4'>
              <div className='flex items-center space-x-3'>
                <FaPhone className='text-primary' />
                <p className='text-base text-tertiary'>Contact Us: (+44) 123-456-789</p>
              </div>
              <div className='flex items-center space-x-3'>
                <FaEnvelope className='text-primary' />
                <p className='text-base text-tertiary'>Mail Us: techspirex999@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className='flex items-center justify-between pt-6 mt-10 border-t border-gray-700'>
          <p className='text-base text-gray-400'>
            © 2024 All rights reserved by{' '}
            <Link to='#' className='text-primary hover:underline'>
              TechSpireX
            </Link>
          </p>
          <button
            className='flex items-center justify-center w-10 h-8 duration-200 rounded-full sm:w-8 md:h-10 md:w-10 bg-tertiary hover:bg-primary group hover:scale-105'
            aria-label='Back to top'
            onClick={scrollToTop} // Add onClick to trigger scrollToTop
          >
            <FaChevronUp className='text-base sm:text-lg group-hover:text-tertiary text-primary' />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

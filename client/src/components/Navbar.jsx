import Logo from '@/assets/Logo.png';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const navLinks = [
  { name: 'About', to: '/aboutUs' },
  { name: 'Contact', to: '/contact' },
  { name: 'Pricing', to: '/pricing' },
  { name: 'Blog', to: '/blog' },
];

const servicesDropdown = [
  { name: 'Web Development', to: '/services/web-development' },
  { name: 'E-Commerce', to: '/services/e-commerce' },
  { name: 'Shopify Store Design', to: '/services/shopify' },
];

const NavbarLink = ({ name, to, onClick }) => (
  <li className='relative group'>
    <Link
      to={to}
      onClick={onClick}
      className='text-lg font-normal leading-4 text-white transition-all duration-200 hover:text-primary'
    >
      {name}
    </Link>
  </li>
);

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className='bg-secondary'>
      {!menuOpen && (
        <div className='px-4 py-2 mx-auto max-w-screen-2xl sm:px-6 lg:px-20'>
          <div className='flex items-center justify-between h-16'>
            {/* Logo */}
            <div className='mt-3'>
              <Link to='/'>
                <span className='sr-only'>Home</span>
                <img className='w-28' src={Logo} alt='Logo' />
              </Link>
            </div>

            {/* Desktop Nav Links */}
            <div className='hidden md:block'>
              <nav aria-label='Global'>
                <ul className='flex items-center gap-10'>
                  {navLinks.map((link) => (
                    <NavbarLink key={link.name} name={link.name} to={link.to} />
                  ))}

                  {/* Services Dropdown */}
                  <li className='relative group'>
                    <span className='text-lg font-normal leading-4 text-white transition-all duration-200 cursor-pointer hover:text-primary'>
                      Services
                    </span>
                    <ul className='absolute left-0 invisible opacity-0 p-4 mt-3 bg-white rounded-lg shadow-lg min-w-[180px] group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 transform translate-y-3 z-40 flex flex-col space-y-2'>
                      {servicesDropdown.map((service, index) => (
                        <li key={index}>
                          <Link
                            to={service.to}
                            className='block px-4 py-2 text-sm font-medium text-gray-700 transition-all duration-200 rounded-lg hover:text-primary hover:bg-tertiary'
                          >
                            {service.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>

            {/* Get in Touch Button on Desktop */}
            <div className='relative flex items-center gap-4'>
              <div className='sm:flex sm:gap-4'>
                <button
                  className='flex items-center px-5 py-2 text-base font-medium rounded-full sm:text-xl text-tertiary bg-primary hover:bg-tertiary hover:text-primary group'
                  onClick={() => navigate('/contact')}
                >
                  {/* Ping effect */}
                  <div className='absolute right-[5px] -top-[1px] md:block hidden'>
                    <span className='relative flex w-3 h-3'>
                      <span className='absolute inline-flex w-full h-full rounded-full opacity-75 animate-ping bg-tertiary group-hover:bg-primary'></span>
                      <span className='relative inline-flex w-3 h-3 rounded-full bg-tertiary group-hover:bg-primary'></span>
                    </span>
                  </div>
                  Get in Touch
                </button>
              </div>

              {/* Mobile Menu Toggle Button */}
              <div className='block md:hidden'>
                <button onClick={toggleMenu} className='p-2 transition rounded text-primary bg-tertiary'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='size-5'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    strokeWidth='2'
                  >
                    <path strokeLinecap='round' strokeLinejoin='round' d='M4 6h16M4 12h16M4 18h16' />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Full-Screen Menu */}
      <div
        className={`fixed inset-0 bg-secondary text-white z-50 transform ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300`}
      >
        <div className='flex items-center justify-between px-4 h-28'>
          {/* Logo */}
          <Link to='/'>
            <img className='w-36' src={Logo} alt='Logo' />
          </Link>

          {/* Close Button */}
          <button onClick={closeMenu} className='p-2 rounded-full text-tertiary bg-primary'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-10 h-10'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth='2'
            >
              <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
            </svg>
          </button>
        </div>

        {/* Mobile Nav Links */}
        <nav className='flex flex-col items-start p-4 space-y-6'>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              className='text-lg font-normal leading-4 text-white transition-all duration-200 hover:text-primary'
            >
              {link.name}
            </Link>
          ))}

          {/* Services Dropdown for Mobile */}
          <div className='w-full'>
            <button
              className='flex items-center w-full gap-2 text-lg font-normal leading-4 text-white rounded-lg bg-secondary hover:text-primary'
              onClick={() => setServicesOpen((prev) => !prev)}
            >
              Services
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className={`w-5 h-5 transition-transform ${servicesOpen ? 'rotate-180' : 'rotate-0'}`}
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth='2'
              >
                <path strokeLinecap='round' strokeLinejoin='round' d='M19 9l-7 7-7-7' />
              </svg>
            </button>

            {servicesOpen && (
              <ul className='p-4 mt-2 space-y-2 bg-white rounded-lg shadow-lg'>
                {servicesDropdown.map((service, index) => (
                  <li key={index}>
                    <Link
                      to={service.to}
                      className='block px-4 py-2 text-sm font-medium text-gray-700 transition-all duration-200 rounded-lg hover:text-primary hover:bg-tertiary '
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </nav>

        {/* Get in Touch Button on Mobile */}
        <div className='p-4 mt-auto'>
          <button
            className='w-full py-3 font-normal leading-4 text-center text-white rounded-full bg-primary hover:bg-tertiary hover:text-primary'
            onClick={() => navigate('/contact')}
          >
            Get in Touch
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

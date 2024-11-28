import React from 'react';
import { useNavigate } from 'react-router-dom';

// Reusable Button Component
const Button = ({ text, onClick, icon }) => (
  <button
    className='block px-6 py-3 mx-auto text-xl font-medium text-white transition-all duration-300 rounded-full shadow md:inline bg-primary hover:bg-secondary hover:scale-105'
    onClick={onClick}
    aria-label={text} // Added aria-label for accessibility
  >
    {text}
    {icon && <span className='inline-block ml-1'>{icon}</span>}
  </button>
);

// Reusable List Item Component
const ListItem = ({ title, description }) => (
  <li className='flex items-start'>
    <div className='flex items-center justify-center text-white bg-teal-500 rounded-full'>
      <svg xmlns='http://www.w3.org/2000/svg' className='w-6 h-6' viewBox='0 0 20 20' fill='currentColor'>
        <path
          fillRule='evenodd'
          d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
          clipRule='evenodd'
        />
      </svg>
    </div>

    <p className='ml-3 text-xl text-secondary/90'>
      <span className='font-bold'>{title}</span> - {description}
    </p>
  </li>
);

// Reusable Stats Component
const Stat = ({ value, label }) => (
  <div className='text-center'>
    <h2 className='text-3xl font-bold text-secondary'>{value}</h2>
    <p className='text-xl font-medium'>{label}</p>
  </div>
);

const PricingSection = () => {
  const navigate = useNavigate();
  const arrowIcon = (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='inline-block w-6 h-6'>
      <path
        fillRule='evenodd'
        d='M4.5 12a.75.75 0 0 1 .75-.75h11.69l-4.22-4.22a.75.75 0 1 1 1.06-1.06l5.5 5.5a.75.75 0 0 1 0 1.06l-5.5 5.5a.75.75 0 0 1-1.06-1.06l4.22-4.22H5.25a.75.75 0 0 1-.75-.75z'
        clipRule='evenodd'
      />
    </svg>
  );

  return (
    <section className='px-6 py-16 bg-gradient-to-t from-teal-300 via-teal-50 to-white lg:px-20'>
      <div className='grid gap-10 md:grid-cols-2'>
        {/* Left Section */}
        <article>
          <h1 className='text-2xl font-bold leading-tight sm:text-4xl text-secondary/90'>
            Empowering businesses with <span className='leading-tight text-primary'>modern technology</span> to create
            solutions that deliver <span className='leading-tight text-primary'>results you can rely on.</span>
          </h1>
          <p className='mt-6 text-xl text-secondary'>
            We&rsquo;re a dynamic team driven by passion and innovation, ready to help your business thrive with
            tailor-made solutions designed for growth and success.
          </p>
          <div className='mt-6'>
            <Button text='Discover Our Services' onClick={() => navigate('/services')} />
          </div>
          <div className='flex flex-wrap items-center justify-center gap-4 mt-8 sm:gap-8 text-secondary lg:justify-start'>
            <Stat value='100%' label='Commitment' />
            <Stat value='Innovative' label='Approach' />
            <Stat value='Client-First' label='Focus' />
          </div>
        </article>

        {/* Right Section */}
        <article className='p-4 bg-white rounded-lg shadow-xl sm:p-8'>
          <div className='flex flex-col items-center justify-between md:flex-row'>
            <div className='flex flex-row items-center justify-between max-md:gap-10 md:flex-col'>
              <h3 className='text-xl font-semibold text-secondary/90'>Affordable Plans</h3>
              <h2 className='flex items-end justify-between mt-2 text-5xl font-bold text-secondary/90'>
                $10 <p className='text-xl font-medium'>/hr</p>
              </h2>
            </div>
            <div className='mt-4 md:mt-0'>
              <Button text='Let&rsquo;s Talk' icon={arrowIcon} onClick={() => navigate('/contact')} />
            </div>
          </div>
          <p className='mt-6 text-lg text-secondary/90'>
            We believe in starting strong partnerships from day one. Our solutions are designed to be accessible,
            impactful, and perfectly aligned with your business goals.
          </p>
          <p className='mt-4 text-lg text-secondary/90'>
            Experience our commitment to excellence with a no-risk trial. We ensure your satisfaction before you invest.
          </p>
          <ul className='mt-6 space-y-4'>
            <ListItem title='Custom Solutions' description='We craft strategies for impact.' />
            <ListItem title='Agile Team' description='Our team ensures smooth work.' />
            <ListItem title='Scalable Results' description='Solutions that grow with you.' />
          </ul>
        </article>
      </div>
    </section>
  );
};

export default PricingSection;

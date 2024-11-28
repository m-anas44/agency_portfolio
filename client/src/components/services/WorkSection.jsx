import React from 'react';
import processline from '../../assets/Services/process-line1.png';
import design from '../../assets/Services/design.jpg';
import strategy from '../../assets/Services/strategy.jpg';
import develop from '../../assets/Services/develop.jpg';

const WorkSection = () => {
  const steps = [
    {
      title: 'Design',
      description: 'We create innovative, intuitive designs that captivate and connect.',
      img: design,
      step: '01',
    },
    {
      title: 'Strategy',
      description: 'Our strategies are tailored to your goals for optimal results.',
      img: strategy,
      step: '02',
    },
    {
      title: 'Develop',
      description: 'We create innovative solutions that drive measurable success.',
      img: develop,
      step: '03',
    },
  ];

  return (
    <section className='pb-20'>
      {' '}
      <div className='px-4 py-16 bg-gray-900'>
        <div className='container px-12 mx-auto text-center text-white'>
          <p className='mb-4 text-lg tracking-widest uppercase text-primary'>Work Process</p>
          <h2 className='mb-12 text-4xl font-bold md:mb-20'>
            Our Working <span className='text-primary'>Process</span>
          </h2>

          {/* Connecting Dotted Line */}
          <div className='absolute inset-x-0 flex items-center justify-between pointer-events-none mx-36 '>
            <img src={processline} alt='Process Line' className='' />
          </div>

          <div className='relative grid gap-16 md:grid-cols-3'>
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex flex-col items-center text-center transition-transform duration-300 ${
                  index === 1
                    ? 'scale-125' // Center grid item (index 1) default scale
                    : 'hover:scale-125 scale-95' // Other items scale on hover
                }`}
              >
                {/* Image and Step Badge */}
                <div className='relative mb-8'>
                  <img
                    src={step.img}
                    alt={step.title}
                    className='object-cover border-4 rounded-full border-tertiary w-36 h-36'
                  />
                  <span className='absolute flex items-center justify-center w-10 h-10 text-lg font-bold rounded-full text-tertiary bg-primary -bottom-3 -left-3'>
                    {step.step}
                  </span>
                </div>

                {/* Title and Description */}
                <h3 className='text-lg font-semibold '>{step.title}</h3>
                <p className='px-5 py-3 text-base text-gray-400'>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;

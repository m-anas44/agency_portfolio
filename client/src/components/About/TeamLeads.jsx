import React from 'react';
import Pic from '../../assets/About/pic.jpg';

const teamLeads = [
  {
    name: 'M. Anas',
    role: 'CEO',
    image: Pic,
  },
  {
    name: 'Zohaib Sadiq',
    role: 'Project Manager',
    image: Pic,
  },
  {
    name: 'Sohail',
    role: 'Lead Developer',
    image: Pic,
  },
  {
    name: 'M. Mudasir',
    role: 'UI/UX Designer',
    image: Pic,
  },
];

const TeamLeads = () => {
  return (
    <section className='py-16 bg-white'>
      <div className='px-3 sm:px-4 md:px-6 lg:px-20 mx-auto max-w-[90rem]'>
        <h2 className='mb-12 text-2xl xs:text-3xl md:text-4xl font-bold text-center text-secondary '>Meet Our Leadership</h2>
        <div className='grid gap-5 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]'>
          {teamLeads.map((lead, index) => (
            <div
              key={index}
              className='relative overflow-hidden transition-shadow duration-300 shadow-lg hover:bg-black bg-secondary rounded-xl hover:shadow-2xl group'
            >
              <img src={lead.image} alt={lead.name} className='object-cover w-full h-80 rounded-t-xl' />
              <div className='p-6 text-center '>
                <h3 className='text-2xl font-semibold text-tertiary group-hover:text-black'>{lead.name}</h3>
                <p className='mt-2 text-lg text-tertiary group-hover:text-black'>{lead.role}</p>
              </div>
              <div className='absolute inset-0 flex items-end transition-opacity duration-300 opacity-0 bg-gradient-to-t from-black via-transparent to-transparent hover:opacity-100 rounded-xl'>
                <p className='p-6 text-lg font-medium text-white'>{lead.role} | Leading with vision and innovation.</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamLeads;

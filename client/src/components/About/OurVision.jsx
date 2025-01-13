import Pic3 from '../../assets/About/pic3.png';

const OurVision = () => {
  return (
    <section className='bg-white text-gray-900 py-10 mt-[30px]'>
      <div className='flex items-center gap-16 mx-auto px-3 sm:px-4 md:px-6 lg:px-20'>
        {/* Image Section */}
        <div className='w-full hidden lg:block lg:max-w-lg lg:w-1/2'>
          <img
            className='object-cover w-full h-auto transition-all duration-500 transform rounded-lg shadow-xl hover:scale-105'
            alt='Vision'
            src={Pic3}
          />
        </div>

        {/* Content Section */}
        <div className='flex flex-col text-center text-balance lg:w-1/2 lg:text-left'>
          <p className='mb-4 text-lg font-semibold tracking-wider uppercase text-secondary'>Why TechSpireX?</p>
          <h1 className='mb-6 text-4xl font-extrabold leading-tight text-primary sm:text-5xl'>Our Vision</h1>
          <p className='mb-8 text-lg leading-relaxed text-Secondary'>
            At TechSpireX, we are committed to helping businesses embrace digital transformation. We understand the
            challenges organizations face in adapting to new technology, and we are here to provide innovative, scalable
            solutions that empower growth.
          </p>
          <p className='mb-8 text-lg leading-relaxed text-Secondary'>
            Our vision is to redefine IT solutions by integrating smart, agile, and AI-driven technology.  With a
            team of passionate tech experts, we push the boundaries of innovation, shaping a future where technology
            seamlessly adapts to the dynamic needs of the digital world.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurVision;

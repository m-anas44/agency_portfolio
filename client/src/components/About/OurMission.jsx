const OurMission = () => {
  return (
    <section className='relative py-10 md:py-20 px-3 sm:px-4 md:px-6 lg:px-20 text-secondary mt-[15px] sm:mt-[22px]'>
      {/* Overlay content */}
      <div className='relative z-10 text-center '>
        {/* Heading */}
        <h1 className='mb-6 text-3xl font-extrabold sm:text-4xl lg:text-5xl '>
          Our Mission: <span className='text-primary'>Empowering the Future</span>
        </h1>

        {/* Main Text Content */}
        <p className='mb-8 text-lg sm:text-xl lg:text-2xl opacity-90'>
          At <span className='text-primary'>TechSpireX,</span> we strive to help organizations accelerate their growth
          by delivering innovative tech solutions and empowering businesses to lead the digital transformation.
        </p>

        {/* 3 Key Points */}
        <div className='grid grid-cols-1 gap-10 mt-14 sm:grid-cols-3 '>
          <div className='flex flex-col items-center text-center '>
            <div className='mb-4 text-4xl text-primary'>🚀</div>
            <h3 className='text-xl font-semibold text-primary'>Innovation</h3>
            <p className='mt-2 '>We constantly push the boundaries of technology to create cutting-edge solutions.</p>
          </div>
          <div className='flex flex-col items-center text-center'>
            <div className='mb-4 text-4xl text-primary'>🤝</div>
            <h3 className='text-xl font-semibold text-primary'>Collaboration</h3>
            <p className='mt-2 '>We believe in the power of teamwork to deliver the best results for our clients.</p>
          </div>
          <div className='flex flex-col items-center text-center'>
            <div className='mb-4 text-4xl text-primary'>📈</div>
            <h3 className='text-xl font-semibold text-primary '>Growth</h3>
            <p className='mt-2'>
              We&apos;re committed to helping businesses grow by unlocking new opportunities through technology.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMission;

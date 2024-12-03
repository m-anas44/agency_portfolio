import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CarouselSection = () => {
  const services = [
    'Web Development',
    'Product Design',
    'Mobile Apps',
    'E-Commerce',
    'UI/UX Design',
    'Digital Marketing',
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    pauseOnHover: false,
    swipe: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 768, // Small screens (md and below)
        settings: {
          slidesToShow: 1,
          swipe: true, // Enable swipe on smaller screens
        },
      },
      {
        breakpoint: 1024, // Medium screens (lg)
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1280, // Larger screens (xl and above)
        settings: {
          slidesToShow: 5,
        },
      },
    ],
  };

  return (
    <section className='py-12'>
      <div className='py-3 md:py-5 bg-secondary'>
        <Slider {...settings} className='text-center'>
          {services.map((service, index) => (
            <div key={index} className='p-4'>
              <p className='text-2xl font-bold text-pink-500'>{service}</p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default CarouselSection;

import React from 'react';

const Testimonial = () => {
  const testimonials = [
    {
      name: 'Zachary Holden',
      title: 'CEO & Founder',
      quote:
        "We've used web design agency for the last five years. We can't understand how we've been living without web design agency. Thank You!",
      image: 'https://via.placeholder.com/150', // Replace with actual image URL
    },
    {
      name: 'Daniel Johann',
      title: 'Satisfied Customer',
      quote:
        "I am so pleased with this product. Absolutely wonderful! You won't regret it. It's really wonderful. Definitely worth the investment.",
      image: 'https://via.placeholder.com/150', // Replace with actual image URL
    },
    {
      name: 'Alannah Jeffcott',
      title: 'Business Consultant',
      quote:
        "I'd be lost without web design agency. Web design agency is the most valuable business resource we have EVER purchased.",
      image: 'https://via.placeholder.com/150', // Replace with actual image URL
    },
  ];

  return (
    <div className='py-10 bg-gray-100'>
      <h2 className='mb-8 text-3xl font-bold text-center text-secondary'>What They’re Saying?</h2>
      <div className='grid grid-cols-1 gap-6 px-4 mx-auto max-w-7xl md:grid-cols-3'>
        {testimonials.map((testimonial, index) => (
          <div key={index} className='p-6 bg-white rounded-lg shadow-lg'>
            <div className='flex items-center mb-4'>
              <img src={testimonial.image} alt={testimonial.name} className='w-16 h-16 mr-4 rounded-full' />
              <div>
                <h4 className='text-lg font-bold text-secondary'>{testimonial.name}</h4>
                <p className='text-sm text-gray-500'>{testimonial.title}</p>
              </div>
            </div>
            <p className='text-sm leading-relaxed text-gray-700'>
              <span className='text-2xl font-bold text-primary'>“</span>
              {testimonial.quote}
              <span className='text-2xl font-bold text-primary'>”</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;

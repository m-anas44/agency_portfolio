import React from 'react';
import { Link } from 'react-router-dom';
const ContactusSection = () => {
  return (
    <section>
      <div className='px-3 sm:px-4 md:px-6 lg:px-20 py-16 text-center bg-gradient-to-r from-primary/80 via-primary to-primary/80'>
        <h2 className='mb-6 text-3xl font-bold text-white'>Have Questions? Get in Touch!</h2>
        <p className='mb-8 text-lg text-white'>
          Have any custom requirements? Let us help you create the perfect solution. Contact us today!
        </p>
        <Link
          to='/contact'
          className='px-6 py-3 text-lg font-semibold transition-all bg-white rounded-lg text-primary hover:bg-secondary hover:text-white'
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
};

export default ContactusSection;

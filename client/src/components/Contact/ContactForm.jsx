import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import LeftSide from './LeftSide';
import HeadingSection from './HeadingSection';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({ ...errors, [name]: '' }); // Clear error when user starts typing
  };

  // Validate form fields
  const validate = () => {
    const newErrors = {};
    if (!formData.name || formData.name.trim().length < 3) {
      newErrors.name = 'Name must be at least 3 characters long.';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.message || formData.message.trim().length < 15) {
      newErrors.message = 'Message must be at least 15 characters long.';
    }
    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    emailjs
      .send(
        'service_p413wz5', // Replace with your EmailJS service ID
        'template_9ejyc6c', // Replace with your EmailJS template ID
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        'LdqmnO_8QTXcOMZN5' // Replace with your EmailJS public key
      )
      .then(
        (response) => {
          console.log('Email sent successfully:', response.text);
          setIsSubmitted(true);
          setError(false);

          // Reset form fields
          setFormData({ name: '', email: '', message: '' });

          // Automatically clear success message after 5 seconds
          setTimeout(() => {
            setIsSubmitted(false);
          }, 5000);
        },
        (error) => {
          console.error('Failed to send email:', error);
          setError(true);
        }
      );
  };

  return (
    <div className='py-16  bg-tertiary'>
      {/* Heading Section */}
      <HeadingSection />
      {/* Contact Form */}
      <div className='grid items-start max-w-4xl gap-12 p-4 sm:p-8 mx-auto mt-12 bg-white rounded-lg shadow-xl sm:grid-cols-2'>
        {/* Left Section */}
        <LeftSide />

        {/* Right Section: Form */}
        <div>
          <h3 className='text-2xl font-bold text-secondary'>Send Us a Message</h3>
          <form onSubmit={handleSubmit} className='mt-8'>
            <label htmlFor='name' className='block mb-2 text-sm font-medium text-secondary'>
              Your Name
            </label>
            <input
              type='text'
              id='name'
              name='name'
              value={formData.name}
              onChange={handleChange}
              className={`block w-full p-3 sm:p-4 mb-1 bg-gray-100 border-2 rounded-lg ${
                errors.name ? 'border-red-500' : 'border-gray-300'
              } text-secondary`}
              placeholder='Your Name'
            />
            {errors.name && <p className='text-sm text-red-500'>{errors.name}</p>}

            <label htmlFor='email' className='block mt-4 mb-2 text-sm font-medium text-secondary'>
              Your Email
            </label>
            <input
              type='email'
              id='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              className={`block w-full p-3 sm:p-4 mb-1 bg-gray-100 border-2 rounded-lg ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              } text-secondary`}
              placeholder='Your Email'
            />
            {errors.email && <p className='text-sm text-red-500'>{errors.email}</p>}

            <label htmlFor='message' className='block mt-4 mb-2 text-sm font-medium text-secondary'>
              Your Message
            </label>
            <textarea
              id='message'
              name='message'
              value={formData.message}
              onChange={handleChange}
              rows={6}
              className={`block w-full p-3 sm:p-4 mb-1 bg-gray-100 border-2 rounded-lg ${
                errors.message ? 'border-red-500' : 'border-gray-300'
              } text-secondary`}
              placeholder='Your Message'
            ></textarea>
            {errors.message && <p className='text-sm text-red-500'>{errors.message}</p>}

            <button type='submit' className='w-full px-4 py-2 sm:px-6 sm:py-3 mt-4 font-medium text-sm sm:text-base md:text-lg text-white rounded-lg bg-primary'>
              Send Message
            </button>
          </form>

          {isSubmitted && <p className='mt-4 text-green-600'>Your message has been sent successfully!</p>}
          {error && <p className='mt-4 text-red-600'>Failed to send the message. Please try again later.</p>}
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

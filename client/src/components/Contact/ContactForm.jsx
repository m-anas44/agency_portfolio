import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Handle change for all input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // You can also send formData to a backend service here
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className="mt-6">
      <div className="grid sm:grid-cols-2 items-start gap-14 p-8 mx-auto max-w-4xl bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md font-[sans-serif]">
        <div>
          <h3 className='text-2xl font-bold text-secondary'>Contact Information</h3>
          <p className='mt-4 text-sm text-secondary'>
            Have questions or want to collaborate? Reach out to us directly via the following methods:
          </p>

          {/* Email Section */}
          <div className='mt-8'>
            <h4 className='text-lg font-semibold text-secondary'>Email</h4>
            <ul className='mt-4'>
              <li className='flex items-center'>
                <div className='bg-[#e6e6e6] h-10 w-10 rounded-full flex items-center justify-center shrink-0'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='20px'
                    height='20px'
                    fill='#14B8A6'
                    viewBox='0 0 479.058 479.058'
                  >
                    <path d='M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z' />
                  </svg>
                </div>
                <a href='mailto:info@example.com' className='ml-4 text-sm text-primary'>
                  <strong>info@example.com</strong>
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className='mt-8'>
            <h4 className='text-lg font-semibold text-secondary'>Follow Us</h4>
            <ul className='flex mt-4 space-x-4'>
              <li className='bg-[#e6e6e6] h-10 w-10 rounded-full flex items-center justify-center shrink-0'>
                <a href='javascript:void(0)'>
                  <svg xmlns='http://www.w3.org/2000/svg' width='20px' height='20px' fill='#14B8A6' viewBox='0 0 24 24'>
                    <path d='M6.812 13.937H9.33v9.312c0 .414.335.75.75.75l4.007.001a.75.75 0 0 0 .75-.75v-9.312h2.387a.75.75 0 0 0 .744-.657l.498-4a.75.75 0 0 0-.744-.843h-2.885c.113-2.471-.435-3.202 1.172-3.202 1.088-.13 2.804.421 2.804-.75V.909a.75.75 0 0 0-.648-.743A26.926 26.926 0 0 0 15.071 0c-7.01 0-5.567 7.772-5.74 8.437H6.812a.75.75 0 0 0-.75.75v4c0 .414.336.75.75.75zm.75-3.999h2.518a.75.75 0 0 0 .75-.75V6.037c0-2.883 1.545-4.536 4.24-4.536.878 0 1.686.043 2.242.087v2.149c-.402.205-3.976-.884-3.976 2.697v2.755c0 .414.336.75.75.75h2.786l-.312 2.5h-2.474a.75.75 0 0 0-.75.75V22.5h-2.505v-9.312a.75.75 0 0 0-.75-.75H7.562z' />
                  </svg>
                </a>
              </li>
              <li className='bg-[#e6e6e6] h-10 w-10 rounded-full flex items-center justify-center shrink-0'>
                <a href='javascript:void(0)'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='20px'
                    height='20px'
                    fill='#14B8A6'
                    viewBox='0 0 511 512'
                  >
                    <path d='M111.898 160.664H15.5c-8.285 0-15 6.719-15 15V497c0 8.285 6.715 15 15 15h96.398c8.286 0 15-6.715 15-15V175.664c0-8.281-6.714-15-15-15zM96.898 482H30.5V190.664h66.398zM63.703 0C28.852 0 .5 28.352.5 63.195c0 34.852 28.352 63.2 63.203 63.2 34.848 0 63.195-28.352 63.195-63.2C126.898 28.352 98.551 0 63.703 0zm0 96.395c-18.308 0-33.203-14.891-33.203-33.2C30.5 44.891 45.395 30 63.703 30c18.305 0 33.195 14.89 33.195 33.195 0 18.309-14.89 33.2-33.195 33.2zm289.207 62.148c-22.8 0-45.273 5.496-65.398 15.777-.684-7.652-7.11-13.656-14.942-13.656h-96.406c-8.281 0-15 6.719-15 15V497c0 8.285 6.719 15 15 15h96.406c8.285 0 15-6.715 15-15V320.266c0-22.735 18.5-41.23 41.235-41.23 22.734 0 41.227 18.498 41.227 41.23v153.234c0 8.285 6.715 15 15 15s15-6.715 15-15V320.266c0-42.175-34.421-76.635-76.679-76.635zM288.101 482h96.407v-98.329h-96.407z' />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

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
              required
              className='block w-full p-4 mb-6 bg-gray-100 border-2 border-gray-300 rounded-lg text-secondary'
              placeholder='Your Name'
            />

            <label htmlFor='email' className='block mb-2 text-sm font-medium text-secondary'>
              Your Email
            </label>
            <input
              type='email'
              id='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              required
              className='block w-full p-4 mb-6 bg-gray-100 border-2 border-gray-300 rounded-lg text-secondary'
              placeholder='Your Email'
            />

            <label htmlFor='message' className='block mb-2 text-sm font-medium text-secondary'>
              Your Message
            </label>
            <textarea
              id='message'
              name='message'
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className='block w-full p-4 mb-6 bg-gray-100 border-2 border-gray-300 rounded-lg text-secondary'
              placeholder='Your Message'
            ></textarea>

            <button type='submit' className='w-full py-4 font-medium text-white rounded-lg bg-primary'>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

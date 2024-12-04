import React from 'react';

const BlogContentSection = () => {
  return (
    <div className='col-span-12 p-6 bg-white rounded-md shadow-sm lg:col-span-8'>
      {/* Blog banner image */}
      <img src='https://via.placeholder.com/800x400' alt='Blog Banner' className='w-full mb-6 rounded-md' />

      {/* Post metadata: date and author */}
      <div className='flex items-center mb-4 space-x-4 text-gray-600'>
        <span className='text-red-500'>📅 September 14, 2023</span> {/* Publish date */}
        <span>✍️ By admin</span> {/* Author information */}
      </div>

      {/* Blog post title */}
      <h1 className='mb-4 text-2xl font-semibold'>Our Personal Approach</h1>

      {/* Blog content paragraph */}
      <p className='mb-4 leading-relaxed text-gray-700 whitespace-pre-line'>
        {`There are endless ways to create some ways to have a business. 
       We spend more time at meetings than ever with
      knowledge melioration. 
      It is a long-established fact that a reader will be distracted by the readable content of a
      page when looking at its layout`}
      </p>

      {/* Image grid: displays two images side by side on medium+ screens */}
      <div className='grid grid-cols-1 gap-4 mb-4 md:grid-cols-2'>
        <img src='https://via.placeholder.com/400x250' alt='Team Meeting' className='w-full rounded-md' />
        <img src='https://via.placeholder.com/400x250' alt='Discussion' className='w-full rounded-md' />
      </div>

      {/* Blockquote section */}
      <blockquote className='p-4 mb-4 italic text-gray-700 bg-gray-100 border-l-4 border-gray-500'>
        "Diam luctus nostra varius et semper semper rutrum ad risus felis eros. - Yoeri Geense"
      </blockquote>

      {/* Closing paragraph */}
      <p className='leading-relaxed text-gray-700'>
        No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know
        how to pursue pleasure rationally encounter consequences that are extremely painful.
      </p>
    </div>
  );
};

export default BlogContentSection;

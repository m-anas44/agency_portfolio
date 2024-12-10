import React from 'react';

const BlogHeroSection = () => {
  return (
    <div className='px-6 py-20 text-center bg-gray-100 text-secondary'>
      {/* Main heading of the hero section */}
      <h1 className='text-5xl font-bold max-w-[50rem] mx-auto'>Welcome to Our Blog: Insights, Tips, and Stories</h1>

      {/* Subheading or description providing more context about the blog */}
      <p className='mt-4 text-lg text-gray-600'>
        Explore our latest articles, expert insights, and updates. Stay informed, inspired, and ahead of the curve.
      </p>
    </div>
  );
};

export default BlogHeroSection;

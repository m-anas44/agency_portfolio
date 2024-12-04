import React from 'react';

const BlogPostCard = ({ post, navigate }) => (
  <div className='mb-6 overflow-hidden transition-all duration-300 bg-white rounded-lg shadow-md hover:shadow-xl hover:scale-105'>
    {/* Post image */}
    <img src={post.image} alt={post.title} className='object-cover w-full h-56' />

    <div className='p-4'>
      {/* Category badge */}
      <span className='px-2 py-1 text-sm text-white rounded-full bg-primary'>{post.category}</span>

      {/* Post date */}
      <p className='mt-2 text-sm text-gray-500'>{post.date}</p>

      {/* Post title */}
      <h2 className='mt-2 text-xl font-bold text-secondary'>{post.title}</h2>

      {/* Post description */}
      <p className='mt-2 text-sm text-gray-600'>{post.description}</p>

      {/* "Read more" button with navigation and smooth scroll to the top */}
      <button
        className='flex items-center p-3 mt-4 font-bold text-white transition-all duration-300 rounded-full bg-primary hover:bg-secondary hover:scale-105'
        onClick={() => {
          window.scrollTo(0, 0); // Scroll to the top before navigating
          navigate(`/blog/${post.id}`); // Navigate to the post's detail page
        }}
      >
        Read more <span className='ml-1'>&rarr;</span>
      </button>
    </div>
  </div>
);

export default BlogPostCard;

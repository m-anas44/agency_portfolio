import React from 'react';
import BlogPostCard from './BlogPostCard';

const BlogPostList = ({ posts, navigate }) =>
  posts.length > 0 ? (
    // Render a list of BlogPostCard components for each post
    posts.map((post) => <BlogPostCard key={post._id} post={post} navigate={navigate} />)
  ) : (
    // Display a message if no posts are available
    <p className='mt-6 text-center text-gray-500'>No posts found for this category.</p>
  );

export default BlogPostList;

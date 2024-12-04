import React from 'react';
import BlogLayout from '@/components/Blog/BlogPage/BlogLayout';
import HeroSection from '../../components/Blog/BlogPage/HeroSection';
const Blog = () => {
  return (
    <div>
      <HeroSection />
      <BlogLayout />
      {/* src/
|-- components/
|   |-- Blog/
|       |-- BlogPage/
|             |-- BlogLayout.jsx      // Main container for the blog page
|             |-- BlogPostList.jsx    // Displays the list of blog posts
|             |-- BlogPostCard.jsx    // Individual blog post card
|             |-- Pagination.jsx      // Handles pagination controls
|             |-- CategoryFilter.jsx  // Displays and handles category filtering
|             |-- RecentBlog.jsx      // Displays recent posts

|             |-- data.js            // Stores blog post data */}
    </div>
  );
};

export default Blog;

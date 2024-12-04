import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPosts } from '../../../Store/postsSlice';
import { useNavigate } from 'react-router-dom';
import BlogPostList from './BlogPostList';
import CategoryFilter from './CategoryFilter';
import RecentBlog from './RecentBlog';
import BlogPagination from './Pagination';
import { allPosts } from './data';

const BlogLayout = () => {
  // State to manage the selected category filter
  const [selectedCategory, setSelectedCategory] = useState('All');

  // State to manage the current page for pagination
  const [currentPage, setCurrentPage] = useState(1);

  // Redux hooks to dispatch actions and access the posts from the store
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Number of posts displayed per page
  const postsPerPage = 4;

  // Access posts from the Redux store
  const posts = useSelector((state) => state.posts.allPosts);

  // Fetch posts and populate the Redux store on initial component mount
  useEffect(() => {
    if (posts.length === 0) {
      dispatch(setPosts(allPosts)); // Populate posts only if the store is empty
    }
  }, [dispatch, posts.length]);

  // Sort posts by date in descending order (newest first) without mutating the original array
  const sortedPosts = [...posts].sort((a, b) => new Date(b.date) - new Date(a.date));

  // Filter posts based on the selected category
  const filteredPosts =
    selectedCategory === 'All' ? sortedPosts : sortedPosts.filter((post) => post.category === selectedCategory);

  // Calculate indices for the current page of posts
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;

  // Slice the filtered posts to get only the posts for the current page
  const currentPosts = filteredPosts.slice(firstPostIndex, lastPostIndex);

  // Calculate the total number of pages needed for pagination
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  // Handle category selection and reset pagination to the first page
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset to page 1 when changing the category
  };

  return (
    <div className='min-h-screen bg-gray-100'>
      <div className='grid grid-cols-1 gap-8 p-6 mx-auto max-w-7xl sm:grid-cols-3'>
        {/* Main blog post list and pagination */}
        <div className='order-2 sm:col-span-2 sm:order-1'>
          <BlogPostList posts={currentPosts} navigate={navigate} />
          <BlogPagination totalPages={totalPages} currentPage={currentPage} onPageChange={setCurrentPage} />
        </div>

        {/* Sidebar with category filter and recent blogs */}
        <div className='order-1 sm:order-2'>
          <CategoryFilter selectedCategory={selectedCategory} onSelectCategory={handleCategorySelect} />
          <RecentBlog />
        </div>
      </div>
    </div>
  );
};

export default BlogLayout;

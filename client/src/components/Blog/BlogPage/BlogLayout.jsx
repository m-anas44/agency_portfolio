import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BlogPostList from "./BlogPostList";
import CategoryFilter from "./CategoryFilter";
import RecentBlog from "./RecentBlog";
import BlogPagination from "./Pagination";
import { sanityClient } from "@/lib/sanityClient";

const BlogLayout = () => {
  // State to manage blogs, category filter, and pagination
  const [blogs, setBlogs] = useState([]);
  const [categories, setCategories] = useState([]); // New state for categories
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  // Number of posts displayed per page
  const postsPerPage = 4;

  const navigate = useNavigate();

  // Fetch blogs from Sanity on component mount
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const query = `*[_type == "blog"]{
          _id,
          title,
          slug,
          "image": image.asset->url,
          category,
          publishedAt
        }`;
        const data = await sanityClient.fetch(query);
        setBlogs(data);

        // Extract unique categories from the fetched blogs
        const uniqueCategories = [
          "All",
          ...new Set(data.map((blog) => blog.category)),
        ];
        setCategories(uniqueCategories);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  // Sort blogs by date in descending order (newest first)
  const sortedBlogs = [...blogs].sort(
    (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)
  );

  // Filter blogs based on the selected category
  const filteredBlogs =
    selectedCategory === "All"
      ? sortedBlogs
      : sortedBlogs.filter((blog) => blog.category === selectedCategory);

  // Calculate indices for the current page of blogs
  const lastBlogIndex = currentPage * postsPerPage;
  const firstBlogIndex = lastBlogIndex - postsPerPage;

  // Slice the filtered blogs to get only the blogs for the current page
  const currentBlogs = filteredBlogs.slice(firstBlogIndex, lastBlogIndex);

  // Calculate the total number of pages needed for pagination
  const totalPages = Math.ceil(filteredBlogs.length / postsPerPage);

  // Handle category selection and reset pagination to the first page
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset to page 1 when changing the category
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="grid grid-cols-1 gap-5 px-3 sm:px-4 md:px-6 lg:px-20 mx-auto max-w-7xl md:grid-cols-3">
        {/* Main blog post list and pagination */}
        <div className="order-2 md:col-span-2 md:order-1">
          <BlogPostList posts={currentBlogs} navigate={navigate} />
          <BlogPagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
          />
        </div>

        {/* Sidebar with category filter and recent blogs */}
        <div className="order-1 md:order-2">
          <CategoryFilter
            selectedCategory={selectedCategory}
            onSelectCategory={handleCategorySelect}
            categories={categories} // Pass all categories to CategoryFilter
          />
          <RecentBlog />
        </div>
      </div>
    </div>
  );
};

export default BlogLayout;

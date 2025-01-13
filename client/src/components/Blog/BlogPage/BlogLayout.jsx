import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BlogPostList from "./BlogPostList";
import CategoryFilter from "./CategoryFilter";
import RecentBlog from "./RecentBlog";
import BlogPagination from "./Pagination";
import { sanityClient } from "@/lib/sanityClient";
import LoadingSpinner from "../../SharedComponents/loadingSpinner";

const BlogLayout = () => {
  const [blogs, setBlogs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true); // Loading state

  const postsPerPage = 4;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const query = `*[_type == "blog"] | order(category->title){
          _id,
          title,
          slug,
          "image": image.asset->url,
          "category": category->title,
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
        setLoading(false); // Set loading to false when data is fetched
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setLoading(false); // Set loading to false if there's an error
      }
    };

    fetchBlogs();
  }, []);

  // Sort blogs by date in descending order
  const sortedBlogs = [...blogs].sort(
    (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)
  );

  // Filter blogs based on the selected category
  const filteredBlogs =
    selectedCategory === "All"
      ? sortedBlogs
      : sortedBlogs.filter((blog) => blog.category === selectedCategory);

  // Pagination logic
  const lastBlogIndex = currentPage * postsPerPage;
  const firstBlogIndex = lastBlogIndex - postsPerPage;
  const currentBlogs = filteredBlogs.slice(firstBlogIndex, lastBlogIndex);
  const totalPages = Math.ceil(filteredBlogs.length / postsPerPage);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="grid grid-cols-1 gap-5 px-3 sm:px-4 md:px-6 lg:px-20 mx-auto max-w-7xl md:grid-cols-3">
        {/* Main blog post list and pagination */}
        <div className="order-2 md:col-span-2 md:order-1">
          {loading ? (
            <div className="flex h-[50vh] justify-center items-center mt-6">
              <LoadingSpinner /> {/* Show spinner while loading */}
            </div>
          ) : (
            <>
              <BlogPostList posts={currentBlogs} navigate={navigate} />
              <BlogPagination
                totalPages={totalPages}
                currentPage={currentPage}
                onPageChange={setCurrentPage}
              />
            </>
          )}
        </div>

        {/* Sidebar with category filter and recent blogs */}
        <div className="order-1 md:order-2">
          <CategoryFilter
            selectedCategory={selectedCategory}
            onSelectCategory={handleCategorySelect}
            categories={categories}
          />
          <RecentBlog />
        </div>
      </div>
    </div>
  );
};

export default BlogLayout;

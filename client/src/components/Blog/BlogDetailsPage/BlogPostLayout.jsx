import React from "react";
import BlogContentSection from "./BlogContentSection";
import RecentBlog from "../BlogPage/RecentBlog";

const BlogPostLayout = () => {
  return (
    <div className="min-h-screen py-10 bg-gray-100">
      <div className="px-3 sm:px-4 md:px-6 lg:px-20 mx-auto max-w-7xl">
        {/* Layout container: centers content and adds padding/margin for larger screens */}

        {/* Main Content and Recent Blogs */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {/* Blog content section: takes up 2/3 of the grid on medium+ screens */}
          <section className="md:col-span-2">
            <BlogContentSection />
          </section>

          {/* Sidebar for recent blogs: takes up 1/3 of the grid on medium+ screens */}
          <aside className="md:col-span-1">
            <RecentBlog />
          </aside>
        </div>
      </div>
    </div>
  );
};

export default BlogPostLayout;

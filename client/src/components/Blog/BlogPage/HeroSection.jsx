import React from "react";

const BlogHeroSection = () => {
  return (
    <div className="px-3 sm:px-4 md:px-6 lg:px-20 pb-10 pt-16 text-left sm:text-center bg-gray-100 text-secondary">
      {/* Main heading of the hero section */}
      <h1 className="text-3xl md:text-4xl font-bold max-w-[50rem] mx-auto">
        Welcome to Our Blog: Insights, Tips, and Stories
      </h1>

      {/* Subheading or description providing more context about the blog */}
      <p className="mt-4 text-base sm:text-lg text-gray-600">
        Explore our latest articles, expert insights, and updates. Stay
        informed, inspired, and ahead of the curve.
      </p>
    </div>
  );
};

export default BlogHeroSection;

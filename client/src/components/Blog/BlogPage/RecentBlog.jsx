import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const RecentBlog = () => {
  // Access all posts from the Redux store
  const allPosts = useSelector((state) => state.posts.allPosts);

  // Get the top 4 most recent posts, sorted by date (newest first)
  const recentPosts = [...allPosts]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 4);
  // Scroll to the top of the page before navigating to a post
  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="p-6 mb-6 bg-white rounded-md shadow-sm text-secondary">
      {/* Section heading */}
      <h2 className="mb-4 text-lg font-bold">Recent Posts</h2>

      {/* List of recent posts */}
      <ul className="space-y-4">
        {recentPosts.map((post, index) => (
          <li
            key={index}
            className="p-2 bg-gray-200 rounded-md cursor-pointer hover:bg-primary/80 hover:text-white group"
          >
            <Link
              to={`/blog/${post.id}`} // Navigate to the individual blog post page
              className="flex items-start space-x-4"
              onClick={handleScrollToTop} // Ensure page scrolls to top before navigation
            >
              {/* Post thumbnail */}
              <img
                src="https://via.placeholder.com/80"
                alt="Post Thumbnail"
                className="w-16 h-16 rounded-md"
              />

              {/* Post title and date */}
              <div>
                <h3 className="text-sm font-semibold">{post.title}</h3>
                <p className="mt-1 text-xs text-gray-500 group-hover:text-secondary">
                  📅 {post.date}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentBlog;

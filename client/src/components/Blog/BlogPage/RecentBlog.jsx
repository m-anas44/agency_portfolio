import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { sanityClient } from "@/lib/sanityClient";

const RecentBlog = () => {
  const [blogs, setBlogs] = useState([]);

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
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);
  // Get the top 4 most recent posts, sorted by date (newest first)
  const recentPosts = [...blogs]
    .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
    .slice(0, 4);

  // Scroll to the top of the page before navigating to a post
  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="p-4 bg-white rounded-md shadow-sm text-secondary">
      {/* Section heading */}
      <h2 className="mb-4 text-lg font-bold">Recent Posts</h2>

      {/* List of recent posts */}
      <ul className="space-y-2">
        {recentPosts.map((post, index) => (
          <li
            key={index}
            className="p-2 bg-gray-200 rounded-md cursor-pointer hover:bg-primary/80 hover:text-white group"
          >
            <Link
              to={`/blog/${post.slug.current}`} // Use slug for navigation
              className="flex items-start space-x-4"
              onClick={handleScrollToTop} // Ensure page scrolls to top before navigation
            >
              {/* Post thumbnail */}
              <img
                src={post.image}
                alt={post.title}
                className="w-16 h-16 rounded-md"
              />

              {/* Post title and date */}
              <div>
                <h3 className="text-sm font-semibold line-clamp-2">
                  {post.title}
                </h3>
                <p className="mt-1 text-xs text-gray-500 group-hover:text-secondary">
                  📅 {new Date(post.publishedAt).toLocaleDateString()}
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

import { FaArrowRightLong } from "react-icons/fa6";

const BlogPostCard = ({ post, navigate }) => (
  <div className="mb-5 overflow-hidden transition-all duration-300 bg-white rounded-lg shadow-md hover:shadow-xl">
    {/* Post image */}
    <img
      src={post.image}
      alt={post.title}
      className="object-cover w-full h-56"
    />

    <div className="p-3 sm:p-4">
      {/* Category badge */}
      <span className="px-2 py-1 text-xs sm:text-sm text-white rounded-md bg-secondary">
        {post.category}
      </span>

      {/* Post title */}
      <h2 className="mt-2 text-lg sm:text-xl font-bold text-secondary line-clamp-2">
        {post.title}
      </h2>

      {/* Post date */}
      <p className="mt-1 text-sm text-gray-500">
        {new Date(post.publishedAt).toLocaleDateString()}
      </p>

      {/* "Read more" button with navigation and smooth scroll to the top */}
      <button
        className="flex items-center gap-3 text-sm transition-all duration-200 rounded-full md:text-base bg-primary text-white px-3 py-2 hover:bg-secondary hover:text-white mt-4 tracking-wide"
        onClick={() => {
          window.scrollTo(0, 0); // Scroll to the top before navigating
          navigate(`/blog/${post.slug.current}`); // Navigate to the post's detail page
        }}
      >
        <span>Read more</span>
        <span>
          <FaArrowRightLong />
        </span>
      </button>
    </div>
  </div>
);

export default BlogPostCard;
